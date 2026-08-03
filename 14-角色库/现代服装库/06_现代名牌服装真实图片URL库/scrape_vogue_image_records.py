#!/usr/bin/env python3
"""从 Vogue Runway 系列页抓取候选图片直链，生成 image_records.json。

设计目标：
1. 只保存来源页 URL 与图片直链 URL，不镜像第三方版权图片；
2. 尽量从页面 HTML 中抽取 Look 对应的直链图片；
3. 默认 fail-closed：总数不对、重复过多或关键字段缺失时直接报错；
4. 抓取结果只是 candidate，必须人工核验后才能进正式 Canvas。
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from typing import Any
from urllib.parse import urljoin
from urllib.request import Request, urlopen

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/151.0.0.0 Safari/537.36"
)
IMG_HOST_HINTS = ("assets.vogue.com", "media.vogue.com", "vogue.com")
LOOK_RE = re.compile(r"(?:look|Look)\s*#?\s*(\d+)")
NEXT_DATA_RE = re.compile(
    r'<script[^>]+id="__NEXT_DATA__"[^>]*>(.*?)</script>', re.S
)


@dataclass
class Collection:
    brand: str
    season: str
    count: int
    base_url: str


class ImgCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.images: list[dict[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "img":
            return
        data = {k: (v or "") for k, v in attrs}
        src = data.get("src") or data.get("data-src") or ""
        srcset = data.get("srcset") or data.get("data-srcset") or ""
        alt = data.get("alt") or ""
        if not src and srcset:
            src = pick_src_from_srcset(srcset)
        if src:
            self.images.append({"src": src, "alt": alt, "srcset": srcset})


def pick_src_from_srcset(srcset: str) -> str:
    candidates = [part.strip().split(" ")[0] for part in srcset.split(",") if part.strip()]
    return candidates[-1] if candidates else ""


def fetch_html(url: str) -> str:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=30) as resp:  # nosec B310
        return resp.read().decode("utf-8", errors="replace")


def load_collections(path: Path) -> tuple[dict[str, Any], list[Collection]]:
    data = json.loads(path.read_text(encoding="utf-8"))
    collections = [Collection(**item) for item in data["collections"]]
    expected = int(data["total_looks"])
    actual = sum(item.count for item in collections)
    if actual != expected:
        raise ValueError(f"collections.json 总数不一致：声明 {expected}，实际 {actual}")
    return data, collections


def normalize_url(url: str, base_url: str) -> str:
    return urljoin(base_url, url)


def is_probable_image(url: str) -> bool:
    url_lower = url.lower()
    return any(host in url_lower for host in IMG_HOST_HINTS) and (
        any(ext in url_lower for ext in (".jpg", ".jpeg", ".png", ".webp", "?", "image"))
    )


def infer_look_number(text: str) -> int | None:
    match = LOOK_RE.search(text)
    if match:
        return int(match.group(1))
    return None


def recursive_collect_image_pairs(obj: Any, found: list[tuple[int | None, str]]) -> None:
    if isinstance(obj, dict):
        local_look = None
        for key in ("lookNumber", "look_number", "sequence", "slideNumber", "position"):
            if key in obj and isinstance(obj[key], int):
                local_look = obj[key]
                break
        for value in obj.values():
            if isinstance(value, str) and is_probable_image(value):
                found.append((local_look, value))
            else:
                recursive_collect_image_pairs(value, found)
    elif isinstance(obj, list):
        for item in obj:
            recursive_collect_image_pairs(item, found)


def extract_from_next_data(html: str, base_url: str) -> list[tuple[int | None, str]]:
    match = NEXT_DATA_RE.search(html)
    if not match:
        return []
    try:
        data = json.loads(match.group(1))
    except json.JSONDecodeError:
        return []
    found: list[tuple[int | None, str]] = []
    recursive_collect_image_pairs(data, found)
    normalized: list[tuple[int | None, str]] = []
    for look, url in found:
        url = normalize_url(url, base_url)
        if is_probable_image(url):
            normalized.append((look, url))
    return normalized


def extract_from_imgs(html: str, base_url: str) -> list[tuple[int | None, str]]:
    parser = ImgCollector()
    parser.feed(html)
    found: list[tuple[int | None, str]] = []
    for item in parser.images:
        src = normalize_url(item["src"], base_url)
        if not is_probable_image(src):
            continue
        look = infer_look_number(item.get("alt", ""))
        found.append((look, src))
    return found


def dedupe_and_assign(
    pairs: list[tuple[int | None, str]], expected_count: int
) -> dict[int, str]:
    by_look: dict[int, str] = {}
    sequential_pool: list[str] = []
    seen_urls: set[str] = set()

    for look, url in pairs:
        if url in seen_urls:
            continue
        seen_urls.add(url)
        if look is not None and 1 <= look <= expected_count and look not in by_look:
            by_look[look] = url
        else:
            sequential_pool.append(url)

    if len(by_look) == expected_count:
        return by_look

    missing = [number for number in range(1, expected_count + 1) if number not in by_look]
    if len(sequential_pool) >= len(missing):
        for look, url in zip(missing, sequential_pool, strict=False):
            by_look[look] = url

    return by_look


def build_records(meta: dict[str, Any], collections: list[Collection]) -> dict[str, Any]:
    records: list[dict[str, Any]] = []
    global_id = 1

    for collection in collections:
        print(f"[抓取] {collection.brand}｜{collection.season}", file=sys.stderr)
        html = fetch_html(collection.base_url)
        pairs = extract_from_next_data(html, collection.base_url)
        pairs += extract_from_imgs(html, collection.base_url)
        assigned = dedupe_and_assign(pairs, collection.count)
        if len(assigned) != collection.count:
            raise RuntimeError(
                f"{collection.brand} {collection.season} "
                f"仅提取到 {len(assigned)}/{collection.count} 张候选图"
            )

        for look in range(1, collection.count + 1):
            image_url = assigned[look]
            records.append(
                {
                    "id": f"{global_id:04d}",
                    "brand": collection.brand,
                    "season": collection.season,
                    "look": look,
                    "collection_url": collection.base_url,
                    "source_page_url": f"{collection.base_url}#{look}",
                    "image_url": image_url,
                    "source": meta.get("source", "Vogue Runway"),
                    "verify_status": "candidate",
                    "image_grade": "",
                    "verify_date": "",
                    "notes": "自动抓取候选图，未人工核验。",
                }
            )
            global_id += 1

    if len(records) != int(meta["total_looks"]):
        raise RuntimeError(f"展开后不是1000条，而是 {len(records)}")

    image_urls = [row["image_url"] for row in records]
    if len(set(image_urls)) != len(image_urls):
        raise RuntimeError("发现重复图片直链；请人工核验并修正")

    return {
        "version": "1.1",
        "status": "evidence-pending",
        "created_at": str(date.today()),
        "updated_at": str(date.today()),
        "source": meta.get("source", "Vogue Runway"),
        "description": "Vogue Runway 2026 现代名牌服装真实图片记录。自动抓取后仍需人工核验。",
        "total_expected": int(meta["total_looks"]),
        "verified_count": 0,
        "candidate_count": len(records),
        "rejected_count": 0,
        "records": records,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="抓取 Vogue Runway 服装图片直链")
    parser.add_argument("--collections", type=Path, default=Path("collections.json"))
    parser.add_argument("--output", type=Path, default=Path("image_records.json"))
    args = parser.parse_args()

    meta, collections = load_collections(args.collections)
    data = build_records(meta, collections)
    args.output.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"已生成候选记录：{args.output}")
    print("下一步：人工核验 image_url 与 Look 编号，再生成 Canvas。")


if __name__ == "__main__":
    main()
