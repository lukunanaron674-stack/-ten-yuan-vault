#!/usr/bin/env python3
"""从 Vogue Runway GraphQL 获取真实秀场图片直链。

输出 image_records.json：
- source_page_url：Vogue 系列/Look 来源页
- image_url：Canvas 可用的远程图片直链

记录默认标记 candidate；未经人工核验不得标记 canonical。
"""

from __future__ import annotations

import argparse
import json
import time
from datetime import date
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlparse
from urllib.request import Request, urlopen

GRAPHQL_ENDPOINT = "https://graphql.vogue.com/graphql"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/151.0.0.0 Safari/537.36"
)

QUERY = r'''query {
  fashionShowV2(slug: "%s") {
    url
    title
    slug
    brand { name slug }
    season { name slug year }
    galleries {
      collection {
        title
        slidesV2 {
          ... on GallerySlidesConnection {
            slide {
              ... on CollectionSlide {
                id
                type
                title
                credit
                photosTout {
                  id
                  url
                  caption
                  credit
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
}'''


def load_collections(path: Path) -> dict[str, Any]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data.get("collections"), list) or not data["collections"]:
        raise ValueError("collections.json 缺少 collections")
    return data


def slug_from_collection_url(url: str) -> str:
    parts = [part for part in urlparse(url).path.split("/") if part]
    try:
        idx = parts.index("fashion-shows")
        return f"{parts[idx + 1]}/{parts[idx + 2]}"
    except (ValueError, IndexError) as exc:
        raise ValueError(f"无法从 URL 提取系列 slug：{url}") from exc


def request_json(url: str, retries: int = 3) -> dict[str, Any]:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "application/json,text/plain,*/*",
        "Content-Type": "application/json",
        "Origin": "https://www.vogue.com",
        "Referer": "https://www.vogue.com/",
        "Host": "graphql.vogue.com",
    }
    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            req = Request(url, headers=headers)
            with urlopen(req, timeout=45) as response:  # nosec B310
                body = response.read().decode("utf-8", errors="replace")
            return json.loads(body)
        except (HTTPError, URLError, TimeoutError, json.JSONDecodeError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(attempt * 2)
    raise RuntimeError(f"Vogue GraphQL 请求失败：{last_error}")


def fetch_show(slug: str) -> dict[str, Any]:
    query = QUERY % slug.replace('"', '\\"')
    url = f"{GRAPHQL_ENDPOINT}?query={quote(query, safe='')}"
    payload = request_json(url)
    if payload.get("errors"):
        raise RuntimeError(f"GraphQL 返回错误：{payload['errors']}")
    show = payload.get("data", {}).get("fashionShowV2")
    if not show:
        raise RuntimeError(f"未找到系列：{slug}")
    return show


def collection_slides(show: dict[str, Any]) -> list[dict[str, Any]]:
    collection = (show.get("galleries") or {}).get("collection") or {}
    slides_v2 = collection.get("slidesV2") or {}
    slides = slides_v2.get("slide") or []
    return [slide for slide in slides if isinstance(slide, dict)]


def normalize_image_url(url: str) -> str:
    return url.strip()


def build_records(data: dict[str, Any]) -> dict[str, Any]:
    expected = int(data.get("total_looks", 1000))
    records: list[dict[str, Any]] = []
    seen_images: set[str] = set()
    collection_report: list[dict[str, Any]] = []

    for collection_index, item in enumerate(data["collections"], start=1):
        base_url = str(item["base_url"])
        slug = item.get("slug") or slug_from_collection_url(base_url)
        show = fetch_show(slug)
        slides = collection_slides(show)
        accepted = 0

        for look_number, slide in enumerate(slides, start=1):
            image = slide.get("photosTout") or {}
            image_url = normalize_image_url(str(image.get("url") or ""))
            if not image_url or image_url in seen_images:
                continue
            seen_images.add(image_url)
            global_id = len(records) + 1
            brand = (show.get("brand") or {}).get("name") or item.get("brand") or "Unknown"
            season = (show.get("season") or {}).get("name") or item.get("season") or "Unknown"
            records.append(
                {
                    "id": f"{global_id:04d}",
                    "brand": brand,
                    "brand_slug": (show.get("brand") or {}).get("slug", ""),
                    "season": season,
                    "season_slug": (show.get("season") or {}).get("slug", ""),
                    "collection_index": collection_index,
                    "look": look_number,
                    "slide_id": slide.get("id", ""),
                    "slide_title": slide.get("title", ""),
                    "collection_url": base_url,
                    "source_page_url": f"{base_url}#{look_number}",
                    "image_url": image_url,
                    "image_id": image.get("id", ""),
                    "image_width": image.get("width"),
                    "image_height": image.get("height"),
                    "image_caption": image.get("caption", ""),
                    "image_credit": image.get("credit", "") or slide.get("credit", ""),
                    "source": data.get("source", "Vogue Runway"),
                    "verify_status": "candidate",
                    "image_grade": "",
                    "verify_date": "",
                    "notes": "Vogue GraphQL 自动提取；待人工核验 Look 对应关系。",
                }
            )
            accepted += 1
            if len(records) >= expected:
                break

        collection_report.append(
            {
                "slug": slug,
                "brand": (show.get("brand") or {}).get("name") or item.get("brand"),
                "season": (show.get("season") or {}).get("name") or item.get("season"),
                "slides_returned": len(slides),
                "accepted": accepted,
            }
        )
        if len(records) >= expected:
            break

    if len(records) < expected:
        raise RuntimeError(
            f"有效唯一图片只有 {len(records)}，不足 {expected}。系列报告："
            + json.dumps(collection_report, ensure_ascii=False)
        )

    records = records[:expected]
    return {
        "version": "2.0",
        "status": "candidate-ready",
        "created_at": str(date.today()),
        "updated_at": str(date.today()),
        "source": data.get("source", "Vogue Runway"),
        "description": "1000条 Vogue Runway 真实秀场图片直链；可在 Obsidian Canvas 远程显示，仍需人工核验后转 verified。",
        "total_expected": expected,
        "total_records": len(records),
        "verified_count": 0,
        "candidate_count": len(records),
        "rejected_count": 0,
        "collection_report": collection_report,
        "records": records,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="抓取 Vogue Runway 真实图片直链")
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


if __name__ == "__main__":
    main()
