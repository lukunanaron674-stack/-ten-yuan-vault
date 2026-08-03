#!/usr/bin/env python3
"""Fetch real Vogue Runway image URLs into image_records.json.

The preferred source is Vogue's public show page. The script extracts
assets.vogue.com image URLs, groups them by the look number in the filename,
and keeps one high-resolution image per look.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import time
from datetime import date
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urlparse
from urllib.request import Request, urlopen

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/151.0.0.0 Safari/537.36"
)


def load_collections(path: Path) -> dict[str, Any]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data.get("collections"), list) or not data["collections"]:
        raise ValueError("collections.json is missing a non-empty collections list")
    return data


def slug_from_collection_url(url: str) -> str:
    parts = [part for part in urlparse(url).path.split("/") if part]
    try:
        idx = parts.index("fashion-shows")
        return f"{parts[idx + 1]}/{parts[idx + 2]}"
    except (ValueError, IndexError) as exc:
        raise ValueError(f"Could not extract collection slug from URL: {url}") from exc


def request_text(url: str, retries: int = 3) -> str:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Referer": "https://www.vogue.com/",
    }
    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            req = Request(url, headers=headers)
            with urlopen(req, timeout=45) as response:  # nosec B310
                return response.read().decode("utf-8", errors="replace")
        except (HTTPError, URLError, TimeoutError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(attempt * 2)
    raise RuntimeError(f"Vogue page request failed: {last_error}")


def look_number_from_image_url(url: str) -> int | None:
    match = re.search(r"/(\d{5})-[^/]+\.(?:jpg|jpeg)(?:\?|$)", url, re.IGNORECASE)
    if not match:
        return None
    return int(match.group(1))


def image_width_score(url: str) -> int:
    decoded = unquote(url)
    match = re.search(r"/w_(\d+),c_limit/", decoded)
    if match:
        return int(match.group(1))
    if "/master/" in decoded:
        return 1000
    return 0


def best_image_url(urls: list[str]) -> str:
    def score(url: str) -> tuple[int, int, int]:
        decoded = unquote(url)
        is_master = 1 if "/master/" in decoded else 0
        no_query = 1 if "?" not in decoded else 0
        return (is_master, image_width_score(decoded), no_query)

    return sorted(urls, key=score, reverse=True)[0]


def extract_slides_from_page(collection: dict[str, Any]) -> list[dict[str, Any]]:
    text = html.unescape(request_text(str(collection["base_url"])))
    urls = re.findall(
        r"https://assets\.vogue\.com/photos/[^\s\"'<>]+?\.(?:jpg|jpeg)(?:\?[^\s\"'<>]+)?",
        text,
        flags=re.IGNORECASE,
    )
    by_look: dict[int, list[str]] = {}
    for raw_url in urls:
        url = raw_url.replace("\\u002F", "/")
        look_number = look_number_from_image_url(url)
        if look_number is None:
            continue
        by_look.setdefault(look_number, []).append(url)

    slides: list[dict[str, Any]] = []
    for look_number in sorted(by_look):
        slides.append(
            {
                "look": look_number,
                "slide_id": "",
                "slide_title": f"Look {look_number}",
                "image_url": best_image_url(by_look[look_number]),
                "image_id": "",
                "image_width": None,
                "image_height": None,
                "image_caption": "",
                "image_credit": "",
            }
        )
    return slides


def build_records(data: dict[str, Any]) -> dict[str, Any]:
    expected = int(data.get("total_looks", 1000))
    records: list[dict[str, Any]] = []
    seen_images: set[str] = set()
    collection_report: list[dict[str, Any]] = []

    for collection_index, item in enumerate(data["collections"], start=1):
        base_url = str(item["base_url"])
        slug = item.get("slug") or slug_from_collection_url(base_url)
        slides = extract_slides_from_page(item)
        limit = int(item.get("count", len(slides)))
        accepted = 0

        for slide in slides:
            look_number = int(slide["look"])
            image_url = str(slide["image_url"]).strip()
            if not image_url or image_url in seen_images:
                continue
            seen_images.add(image_url)
            global_id = len(records) + 1
            brand = str(item.get("brand") or "Unknown")
            season = str(item.get("season") or "Unknown")
            records.append(
                {
                    "id": f"{global_id:04d}",
                    "brand": brand,
                    "brand_slug": "",
                    "season": season,
                    "season_slug": "",
                    "collection_index": collection_index,
                    "look": look_number,
                    "slide_id": slide["slide_id"],
                    "slide_title": slide["slide_title"],
                    "collection_url": base_url,
                    "source_page_url": f"{base_url}#{look_number}",
                    "image_url": image_url,
                    "image_id": slide["image_id"],
                    "image_width": slide["image_width"],
                    "image_height": slide["image_height"],
                    "image_caption": slide["image_caption"],
                    "image_credit": slide["image_credit"],
                    "source": data.get("source", "Vogue Runway"),
                    "verify_status": "candidate",
                    "image_grade": "",
                    "verify_date": "",
                    "notes": "Extracted from Vogue page assets; manually verify look mapping before canonical use.",
                }
            )
            accepted += 1
            if len(records) >= expected:
                break

        collection_report.append(
            {
                "slug": slug,
                "brand": item.get("brand"),
                "season": item.get("season"),
                "slides_returned": len(slides),
                "accepted": accepted,
                "expected": limit,
            }
        )
        print(f"{brand} / {season}: accepted {accepted} of {limit}")
        if len(records) >= expected:
            break

    if len(records) < expected:
        raise RuntimeError(
            f"Only {len(records)} unique image URLs were found; expected {expected}. "
            f"Report: {json.dumps(collection_report, ensure_ascii=False)}"
        )

    records = records[:expected]
    return {
        "version": "2.0",
        "status": "candidate-ready",
        "created_at": str(date.today()),
        "updated_at": str(date.today()),
        "source": data.get("source", "Vogue Runway"),
        "description": (
            "1000 Vogue Runway real image URLs for Obsidian Canvas remote display; "
            "candidate records still require manual verification."
        ),
        "total_expected": expected,
        "total_records": len(records),
        "verified_count": 0,
        "candidate_count": len(records),
        "rejected_count": 0,
        "collection_report": collection_report,
        "records": records,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Fetch Vogue Runway image URLs")
    parser.add_argument("--collections", type=Path, default=Path("collections.json"))
    parser.add_argument("--output", type=Path, default=Path("image_records.json"))
    args = parser.parse_args()

    data = load_collections(args.collections)
    result = build_records(data)
    args.output.write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {result['total_records']} real image URLs to {args.output}")


if __name__ == "__main__":
    main()
