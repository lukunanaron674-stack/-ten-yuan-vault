#!/usr/bin/env python3
"""从 Vogue Runway 系列页提取真实秀场图片直链。

当前 Vogue 页面把图库数据内嵌在页面 HTML 中。本工具直接提取
``assets.vogue.com/photos/...``，按 Look 文件名编号去重，并优先选择
``master/w_2560`` 等非裁切大图。

输出字段严格区分：
- source_page_url：原始 Vogue Look 页面；
- image_url：Obsidian Canvas 中 ``![](URL)`` 使用的图片直链。

自动结果标记为 candidate，未经人工核验不得标记 canonical。
"""

from __future__ import annotations

import argparse
import html as html_lib
import json
import re
import time
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/151.0.0.0 Safari/537.36"
)

ASSET_RE = re.compile(
    r"https://assets\.vogue\.com/photos/"
    r"(?P<photo_id>[0-9a-fA-F]+)/"
    r"(?P<transform>[^\"'<>\\\s)]+?)/"
    r"(?P<filename>\d{5}-[^\"'<>\\\s)]+?\.(?:jpg|jpeg|png|webp))",
    re.IGNORECASE,
)
LOOK_RE = re.compile(r"^(?P<look>\d{5})-")
EXCLUDED_FILENAME_PARTS = (
    "-details-",
    "-detail-",
    "-beauty-",
    "-backstage-",
    "-front-row-",
    "-street-style-",
    "-atmosphere-",
    "-accessories-",
)


@dataclass(frozen=True)
class ImageCandidate:
    look: int
    photo_id: str
    transform: str
    filename: str
    url: str
    score: int


def load_collections(path: Path) -> dict[str, Any]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data.get("collections"), list) or not data["collections"]:
        raise ValueError("collections.json 缺少 collections")
    expected = int(data.get("total_looks", 0))
    requested = sum(int(item.get("count", 0)) for item in data["collections"])
    if expected and requested != expected:
        raise ValueError(f"系列计划数量 {requested} 与 total_looks {expected} 不一致")
    return data


def fetch_html(url: str, retries: int = 3) -> str:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Encoding": "identity",
        "Referer": "https://www.vogue.com/fashion-shows/",
    }
    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            req = Request(url, headers=headers)
            with urlopen(req, timeout=75) as response:  # nosec B310
                return response.read().decode("utf-8", errors="replace")
        except (HTTPError, URLError, TimeoutError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(attempt * 2)
    raise RuntimeError(f"Vogue 页面请求失败：{url}：{last_error}")


def transform_score(transform: str) -> int:
    value = transform.lower()
    score = 0
    if value.startswith("master/"):
        score += 1000
    if "w_2560" in value:
        score += 500
    elif "w_2000" in value:
        score += 450
    elif "w_1600" in value:
        score += 400
    elif "w_1200" in value:
        score += 350
    elif "w_1000" in value:
        score += 300
    elif "w_800" in value:
        score += 250
    elif "w_640" in value:
        score += 200
    elif "w_120" in value:
        score -= 500
    if "c_limit" in value:
        score += 100
    if ":" in value or value.startswith(("1:1/", "16:9/", "4:3/")):
        score -= 400
    if "/pass" in value or value.endswith("pass"):
        score += 30
    return score


def normalize_embedded_html(raw_html: str) -> str:
    text = html_lib.unescape(raw_html)
    text = text.replace("\\/", "/")
    text = text.replace("\\u002F", "/").replace("\\u002f", "/")
    text = text.replace("\\u0026", "&")
    return text


def candidate_matches_collection(filename: str, item: dict[str, Any]) -> bool:
    lower = filename.lower()
    if any(part in lower for part in EXCLUDED_FILENAME_PARTS):
        return False
    if "ready-to-wear" not in lower:
        return False

    brand_slug = str(item.get("brand", "")).lower().replace(" ", "-")
    if brand_slug and f"-{brand_slug}-" not in f"-{lower}":
        return False

    season = str(item.get("season", "")).lower()
    season_word = "spring" if "spring" in season else "fall" if "fall" in season else ""
    year_match = re.search(r"\b(20\d{2})\b", season)
    if season_word and f"-{season_word}-" not in lower:
        return False
    if year_match and f"-{year_match.group(1)}-" not in lower:
        return False
    return True


def extract_candidates(raw_html: str, item: dict[str, Any]) -> list[ImageCandidate]:
    text = normalize_embedded_html(raw_html)
    candidates: list[ImageCandidate] = []
    seen_exact: set[str] = set()

    for match in ASSET_RE.finditer(text):
        filename = match.group("filename")
        look_match = LOOK_RE.match(filename)
        if not look_match or not candidate_matches_collection(filename, item):
            continue
        transform = match.group("transform")
        photo_id = match.group("photo_id")
        url = f"https://assets.vogue.com/photos/{photo_id}/{transform}/{filename}"
        if url in seen_exact:
            continue
        seen_exact.add(url)
        candidates.append(
            ImageCandidate(
                look=int(look_match.group("look")),
                photo_id=photo_id,
                transform=transform,
                filename=filename,
                url=url,
                score=transform_score(transform),
            )
        )
    return candidates


def choose_best_per_look(candidates: list[ImageCandidate]) -> dict[int, ImageCandidate]:
    best: dict[int, ImageCandidate] = {}
    for candidate in candidates:
        current = best.get(candidate.look)
        if current is None or (candidate.score, len(candidate.url)) > (
            current.score,
            len(current.url),
        ):
            best[candidate.look] = candidate
    return best


def record_from_candidate(
    global_id: int,
    collection_index: int,
    item: dict[str, Any],
    candidate: ImageCandidate,
    supplemental: bool,
    source: str,
) -> dict[str, Any]:
    base_url = str(item["base_url"])
    note = (
        "Vogue 页面内嵌真实秀场主图；用于补足旧计划表与页面实际数量差异；"
        if supplemental
        else "Vogue 页面内嵌真实秀场主图；"
    )
    note += "已排除 details/beauty/backstage 与重复尺寸，待人工终核。"
    return {
        "id": f"{global_id:04d}",
        "brand": item.get("brand", "Unknown"),
        "season": item.get("season", "Unknown"),
        "collection_index": collection_index,
        "look": candidate.look,
        "collection_url": base_url,
        "source_page_url": f"{base_url}#{candidate.look}",
        "image_url": candidate.url,
        "image_id": candidate.photo_id,
        "image_filename": candidate.filename,
        "image_transform": candidate.transform,
        "source": source,
        "verify_status": "candidate",
        "image_grade": "",
        "verify_date": "",
        "supplemental_to_total": supplemental,
        "notes": note,
    }


def build_records(data: dict[str, Any]) -> dict[str, Any]:
    expected_total = int(data.get("total_looks", 1000))
    source = data.get("source", "Vogue Runway")
    selected: list[tuple[int, dict[str, Any], ImageCandidate, bool]] = []
    surplus: list[tuple[int, dict[str, Any], ImageCandidate, bool]] = []
    collection_report: list[dict[str, Any]] = []

    for collection_index, item in enumerate(data["collections"], start=1):
        requested_count = int(item["count"])
        raw_html = fetch_html(str(item["base_url"]))
        candidates = extract_candidates(raw_html, item)
        by_look = choose_best_per_look(candidates)
        ordered = [by_look[key] for key in sorted(by_look)]
        initial_count = min(requested_count, len(ordered))

        selected.extend(
            (collection_index, item, candidate, False)
            for candidate in ordered[:initial_count]
        )
        surplus.extend(
            (collection_index, item, candidate, True)
            for candidate in ordered[initial_count:]
        )
        collection_report.append(
            {
                "brand": item.get("brand"),
                "season": item.get("season"),
                "requested": requested_count,
                "main_looks_found": len(ordered),
                "raw_candidates": len(candidates),
                "initial_accepted": initial_count,
                "shortfall": max(0, requested_count - len(ordered)),
                "surplus_available": max(0, len(ordered) - requested_count),
                "supplemental_accepted": 0,
            }
        )

    deficit = expected_total - len(selected)
    if deficit < 0:
        selected = selected[:expected_total]
        deficit = 0
    if deficit > len(surplus):
        raise RuntimeError(
            f"主图初选 {len(selected)}，还缺 {deficit}；全部系列盈余只有 {len(surplus)}。"
        )

    supplemental_entries = surplus[:deficit]
    selected.extend(supplemental_entries)
    for collection_index, _item, _candidate, _supplemental in supplemental_entries:
        collection_report[collection_index - 1]["supplemental_accepted"] += 1

    records: list[dict[str, Any]] = []
    seen_photo_ids: set[str] = set()
    for collection_index, item, candidate, supplemental in selected:
        if candidate.photo_id in seen_photo_ids:
            raise RuntimeError(
                f"跨系列发现重复 photo_id：{candidate.photo_id}｜{candidate.url}"
            )
        seen_photo_ids.add(candidate.photo_id)
        records.append(
            record_from_candidate(
                global_id=len(records) + 1,
                collection_index=collection_index,
                item=item,
                candidate=candidate,
                supplemental=supplemental,
                source=source,
            )
        )

    if len(records) != expected_total:
        raise RuntimeError(f"最终记录数 {len(records)}，应为 {expected_total}")
    if len({record["image_url"] for record in records}) != expected_total:
        raise RuntimeError("最终 image_url 存在重复")
    if len({record["image_id"] for record in records}) != expected_total:
        raise RuntimeError("最终 Vogue photo_id 存在重复")

    return {
        "version": "3.1",
        "status": "candidate-ready",
        "created_at": str(date.today()),
        "updated_at": str(date.today()),
        "source": source,
        "description": "1000条 Vogue Runway 真实秀场主图直链，可在 Obsidian Canvas 远程显示；自动排除细节图与重复尺寸，仍需人工终核。",
        "total_expected": expected_total,
        "total_records": len(records),
        "verified_count": 0,
        "candidate_count": len(records),
        "rejected_count": 0,
        "supplemental_count": len(supplemental_entries),
        "collection_report": collection_report,
        "records": records,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="从 Vogue 页面提取真实秀场图片直链")
    parser.add_argument("--collections", type=Path, default=Path("collections.json"))
    parser.add_argument("--output", type=Path, default=Path("image_records.json"))
    args = parser.parse_args()

    data = load_collections(args.collections)
    result = build_records(data)
    args.output.write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"已写入 {result['total_records']} 条真实图片直链：{args.output}")
    print(f"跨系列真实主图补量：{result['supplemental_count']}")
    for report in result["collection_report"]:
        print(
            f"{report['brand']}｜{report['season']}："
            f"初选 {report['initial_accepted']}/{report['requested']}，"
            f"页面主图 {report['main_looks_found']}，"
            f"补量采用 {report['supplemental_accepted']}"
        )


if __name__ == "__main__":
    main()
