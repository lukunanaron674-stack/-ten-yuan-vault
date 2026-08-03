#!/usr/bin/env python3
from __future__ import annotations

import csv
import html
import importlib.util
import io
import json
import random
import re
import threading
import time
import zipfile
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import quote

import requests
from PIL import Image, ImageOps

MODULE_PATH = Path(__file__).with_name("_temporary_build_1000_hair_zips.py")
spec = importlib.util.spec_from_file_location("hair_zip_builder", MODULE_PATH)
if spec is None or spec.loader is None:
    raise RuntimeError(f"Cannot load {MODULE_PATH}")
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

VALID_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")
ADULT_TERMS = (
    "nude", "nudity", "naked", "topless", "porn", "pornographic", "erotic",
    "ejaculation", "masturbation", "sexual", "sex act", "pubic", "genital",
    "breasts", "playboy", "fetish", "bdsm", "naturism", "naturist",
    "stripper", "adult model", "centerfold", "vulva", "penis", "semen"
)

_original_api = mod.api
_api_lock = threading.Lock()
_api_last = [0.0]

def paced_api(params, tries=8):
    with _api_lock:
        wait = 0.48 - (time.monotonic() - _api_last[0])
        if wait > 0:
            time.sleep(wait)
        result = _original_api(params, tries=tries)
        _api_last[0] = time.monotonic()
        return result

mod.api = paced_api
_original_category = mod.direct_category_files
_original_search = mod.search_files

def image_only(values):
    return [title for title in values if title.lower().endswith(VALID_EXTENSIONS)]

def filtered_category(category, cap=500):
    return image_only(_original_category(category, min(cap, 260)))

def filtered_search(term, cap=500):
    return image_only(_original_search(term, min(cap, 260)))

mod.direct_category_files = filtered_category
mod.search_files = filtered_search


def safe_metadata(titles, source_map):
    for batch in mod.chunks(titles, 35):
        data = mod.api({
            "action": "query",
            "prop": "imageinfo|categories",
            "titles": "|".join(batch),
            "iiprop": "url|size|mime|sha1|extmetadata|mediatype",
            "iiurlwidth": mod.WIDTH,
            "cllimit": "max",
            "clshow": "!hidden",
        })
        for page in data.get("query", {}).get("pages", []):
            info_list = page.get("imageinfo") or []
            if not info_list:
                continue
            info = info_list[0]
            ext = info.get("extmetadata") or {}
            def ev(key):
                return mod.strip_html((ext.get(key) or {}).get("value", ""))
            title = page.get("title", "")
            categories = [item.get("title", "") for item in page.get("categories", [])]
            yield {
                "title": title,
                "source": source_map.get(title, ""),
                "thumb": info.get("thumburl") or info.get("url") or "",
                "url": info.get("url") or "",
                "width": int(info.get("width") or 0),
                "height": int(info.get("height") or 0),
                "mime": info.get("mime") or "",
                "mediatype": info.get("mediatype") or "",
                "sha1": info.get("sha1") or "",
                "license": ev("LicenseShortName"),
                "license_url": ev("LicenseUrl"),
                "artist": ev("Artist"),
                "credit": ev("Credit"),
                "description": ev("ImageDescription"),
                "date": ev("DateTimeOriginal") or ev("DateTime"),
                "categories": categories,
            }

mod.metadata = safe_metadata
_original_permitted = mod.permitted

def safe_permitted(meta):
    combined = " ".join([
        meta.get("title", ""), meta.get("description", ""),
        " ".join(meta.get("categories", []))
    ]).lower()
    if any(term in combined for term in ADULT_TERMS):
        return False
    return _original_permitted(meta)

mod.permitted = safe_permitted

_download_lock = threading.Lock()
_download_last = [0.0]

def safe_fetch_jpeg(meta):
    session = requests.Session()
    session.headers.update({"User-Agent": mod.UA})
    delay = 1.0
    for attempt in range(4):
        try:
            with _download_lock:
                wait = 0.30 - (time.monotonic() - _download_last[0])
                if wait > 0:
                    time.sleep(wait)
                response = session.get(meta["thumb"], timeout=35)
                _download_last[0] = time.monotonic()
            if response.status_code == 429 or response.status_code >= 500:
                raise RuntimeError(f"HTTP {response.status_code}")
            response.raise_for_status()
            with Image.open(io.BytesIO(response.content)) as image:
                image = ImageOps.exif_transpose(image)
                if image.mode in ("RGBA", "LA"):
                    bg = Image.new("RGB", image.size, "white")
                    bg.paste(image, mask=image.getchannel("A"))
                    image = bg
                else:
                    image = image.convert("RGB")
                image.thumbnail((mod.WIDTH, mod.WIDTH), Image.Resampling.LANCZOS)
                if min(image.size) < 320:
                    return None
                out = io.BytesIO()
                image.save(out, "JPEG", quality=82, optimize=True, progressive=True)
                return out.getvalue()
        except Exception:
            if attempt == 3:
                return None
            time.sleep(delay)
            delay = min(delay * 1.8, 8)
    return None


def safe_build(pack, global_hashes):
    folder = mod.OUT / f"发型图片包_{pack['id']}_{pack['name']}"
    images = folder / "images"
    images.mkdir(parents=True, exist_ok=True)

    titles = []
    source_map = {}
    for category in pack["categories"]:
        for title in mod.direct_category_files(category, 260):
            if title not in source_map:
                titles.append(title); source_map[title] = category
    for term in pack["queries"] + mod.GENERIC_QUERIES:
        for title in mod.search_files(term, 260):
            if title not in source_map:
                titles.append(title); source_map[title] = f"search:{term}"

    random.Random(20260803 + int(pack["id"])).shuffle(titles)
    candidates = []
    seen = set()
    for meta in mod.metadata(titles[:3400], source_map):
        if meta["sha1"] in global_hashes or meta["sha1"] in seen or not mod.permitted(meta):
            continue
        seen.add(meta["sha1"])
        candidates.append(meta)
        if len(candidates) >= 330:
            break
    if len(candidates) < mod.TARGET:
        raise RuntimeError(f"Pack {pack['id']} only has {len(candidates)} safe permitted candidates")

    rows = []
    paths = []
    executor = ThreadPoolExecutor(max_workers=4)
    futures = {executor.submit(safe_fetch_jpeg, meta): meta for meta in candidates}
    try:
        for future in as_completed(futures):
            if len(rows) >= mod.TARGET:
                break
            meta = futures[future]
            data = future.result()
            if not data or meta["sha1"] in global_hashes:
                continue
            index = len(rows) + 1
            filename = mod.safe_name(meta["title"], index)
            path = images / filename
            path.write_bytes(data)
            global_hashes.add(meta["sha1"])
            paths.append(path)
            rows.append({
                "filename": f"images/{filename}",
                "original_title": meta["title"],
                "commons_page": "https://commons.wikimedia.org/wiki/" + quote(meta["title"].replace(" ", "_"), safe=":/()_-"),
                "original_file": meta["url"],
                "license": meta["license"],
                "license_url": meta["license_url"],
                "artist": meta["artist"],
                "credit": meta["credit"],
                "description": meta["description"],
                "date": meta["date"],
                "source": meta["source"],
                "sha1": meta["sha1"],
                "original_width": meta["width"],
                "original_height": meta["height"],
            })
            print(f"[{pack['id']}] {index:03d}/{mod.TARGET} {meta['title']}", flush=True)
    finally:
        for future in futures:
            if not future.done():
                future.cancel()
        executor.shutdown(wait=True, cancel_futures=True)

    if len(rows) != mod.TARGET:
        raise RuntimeError(f"Pack {pack['id']} downloaded {len(rows)} images")

    with (folder / "manifest.csv").open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(rows[0]))
        writer.writeheader(); writer.writerows(rows)

    counts = Counter(row["license"] or "未标明" for row in rows)
    license_lines = "\n".join(f"- {key}: {value}" for key, value in sorted(counts.items()))
    (folder / "README.md").write_text(
        f"# 发型图片包 {pack['id']}｜{pack['name']}\n\n"
        f"- 图片数量：{len(rows)}\n- 来源：Wikimedia Commons 开放许可文件\n"
        f"- 规格：最长边约 {mod.WIDTH}px，JPEG\n- 逐张来源、作者与许可证：见 `manifest.csv`\n\n"
        f"## 许可统计\n{license_lines}\n\n"
        "## 注意\n本包已按文件标题、描述和所属分类排除成人裸体内容。开放版权许可不自动消除肖像权、隐私权或商标权，公开转载或商业使用前请逐张核对清单。\n",
        encoding="utf-8",
    )
    mod.contact_sheet(paths, folder / "preview_first_40.jpg", f"发型包 {pack['id']} {pack['name']}")

    zip_path = mod.OUT / f"发型图片包_{pack['id']}_{pack['name']}_200张.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED, compresslevel=5) as archive:
        for path in sorted(folder.rglob("*")):
            if path.is_file():
                archive.write(path, arcname=f"{folder.name}/{path.relative_to(folder)}")
    print(f"CREATED {zip_path.name} {zip_path.stat().st_size / 1024 / 1024:.1f}MB", flush=True)
    return zip_path

mod.build = safe_build

if __name__ == "__main__":
    mod.main()
