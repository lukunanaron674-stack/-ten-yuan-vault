#!/usr/bin/env python3
from __future__ import annotations

import csv
import html
import io
import json
import os
import random
import re
import shutil
import time
import zipfile
from collections import Counter, deque
from pathlib import Path
from typing import Any, Iterable
from urllib.parse import quote

import requests
from PIL import Image, ImageDraw, ImageFont, ImageOps

API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "TenYuan-Hairstyle-Archive/1.0 (educational reference archive)"
OUT = Path("hair_zip_output")
TARGET_PER_PACK = 200
THUMB_WIDTH = 1024
MIN_DIM = 600

PACKS = [
    {
        "id": "01",
        "name": "长发_刘海_公主切_层次发",
        "roots": [
            "Category:Long hair", "Category:Bangs", "Category:Hime cut",
            "Category:Straight hairstyles", "Category:Layered hair",
            "Category:Women's long hair"
        ],
    },
    {
        "id": "02",
        "name": "短发_Bob_Pixie_Undercut_狼尾",
        "roots": [
            "Category:Short hair", "Category:Bob cut", "Category:Pixie cut",
            "Category:Undercut (hairstyle)", "Category:Mohawk", "Category:Mullet (haircut)",
            "Category:Women's short hair"
        ],
    },
    {
        "id": "03",
        "name": "马尾_双马尾_丸子_盘发_半扎",
        "roots": [
            "Category:Ponytails", "Category:Pigtails", "Category:Buns (hairstyle)",
            "Category:Chignons", "Category:Updos", "Category:Hair buns"
        ],
    },
    {
        "id": "04",
        "name": "辫发_Cornrows_Locs_Twists_Afro",
        "roots": [
            "Category:Braids", "Category:Cornrows", "Category:Dreadlocks",
            "Category:Afros", "Category:Box braids", "Category:Bantu knots",
            "Category:Afro-textured hairstyles"
        ],
    },
    {
        "id": "05",
        "name": "卷发_波浪_传统发式_综合",
        "roots": [
            "Category:Curly hair", "Category:Wavy hair", "Category:Historical hairstyles",
            "Category:Traditional hairstyles", "Category:Hairstyles by country",
            "Category:Women's hairstyles"
        ],
    },
]

FALLBACK_ROOTS = [
    "Category:Hairstyles", "Category:Haircuts", "Category:Women's hairstyles",
    "Category:Hair on female people"
]

ALLOWED_LICENSE_MARKERS = (
    "cc by", "cc-by", "cc by-sa", "cc-by-sa", "cc0",
    "public domain", "pd-", "pdm"
)

BLOCKED_WORDS = {
    "diagram", "logo", "icon", "coat of arms", "flag", "map", "chart",
    "painting", "engraving", "drawing", "illustration", "sculpture",
    "statue", "mannequin", "wig stand", "cosplay wig", "hairbrush",
    "comb", "shampoo", "advertisement", "poster"
}

session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT})


def clean_html(value: str | None) -> str:
    if not value:
        return ""
    text = re.sub(r"<[^>]+>", " ", value)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def api_get(params: dict[str, Any], tries: int = 8) -> dict[str, Any]:
    params = {**params, "format": "json", "formatversion": 2, "maxlag": 5}
    delay = 2.0
    for attempt in range(tries):
        try:
            response = session.get(API, params=params, timeout=60)
            if response.status_code == 429 or response.status_code >= 500:
                raise RuntimeError(f"HTTP {response.status_code}")
            response.raise_for_status()
            payload = response.json()
            if "error" in payload:
                raise RuntimeError(str(payload["error"]))
            return payload
        except Exception as exc:
            if attempt == tries - 1:
                raise
            print(f"API retry {attempt + 1}/{tries}: {exc}", flush=True)
            time.sleep(delay)
            delay = min(delay * 1.8, 30)
    raise RuntimeError("unreachable")


def iter_category_members(category: str, member_type: str) -> Iterable[dict[str, Any]]:
    cont: dict[str, Any] = {}
    while True:
        params = {
            "action": "query",
            "list": "categorymembers",
            "cmtitle": category,
            "cmtype": member_type,
            "cmlimit": "max",
            **cont,
        }
        payload = api_get(params)
        for item in payload.get("query", {}).get("categorymembers", []):
            yield item
        if "continue" not in payload:
            break
        cont = payload["continue"]


def collect_category_files(roots: list[str], depth: int = 2, cap: int = 1800) -> list[tuple[str, str]]:
    found: list[tuple[str, str]] = []
    seen_files: set[str] = set()
    seen_cats: set[str] = set()
    queue = deque((root, 0, root) for root in roots)
    while queue and len(found) < cap:
        category, level, source_root = queue.popleft()
        if category in seen_cats:
            continue
        seen_cats.add(category)
        try:
            for item in iter_category_members(category, "file"):
                title = item.get("title", "")
                if title and title not in seen_files:
                    seen_files.add(title)
                    found.append((title, source_root))
                    if len(found) >= cap:
                        break
            if level < depth:
                for item in iter_category_members(category, "subcat"):
                    title = item.get("title", "")
                    if title and title not in seen_cats:
                        queue.append((title, level + 1, source_root))
        except Exception as exc:
            print(f"Skip category {category}: {exc}", flush=True)
    random.Random(20260803).shuffle(found)
    return found


def chunks(items: list[Any], size: int) -> Iterable[list[Any]]:
    for i in range(0, len(items), size):
        yield items[i:i + size]


def image_metadata(title_pairs: list[tuple[str, str]]) -> Iterable[dict[str, Any]]:
    root_by_title = dict(title_pairs)
    titles = [title for title, _ in title_pairs]
    for batch in chunks(titles, 40):
        payload = api_get({
            "action": "query",
            "prop": "imageinfo",
            "titles": "|".join(batch),
            "iiprop": "url|size|mime|sha1|extmetadata|mediatype",
            "iiurlwidth": THUMB_WIDTH,
        })
        for page in payload.get("query", {}).get("pages", []):
            info_list = page.get("imageinfo") or []
            if not info_list:
                continue
            info = info_list[0]
            ext = info.get("extmetadata") or {}
            def ext_value(key: str) -> str:
                raw = ext.get(key) or {}
                return clean_html(raw.get("value", ""))
            title = page.get("title", "")
            yield {
                "title": title,
                "source_root": root_by_title.get(title, ""),
                "thumburl": info.get("thumburl") or info.get("url") or "",
                "url": info.get("url") or "",
                "width": int(info.get("width") or 0),
                "height": int(info.get("height") or 0),
                "mime": info.get("mime") or "",
                "mediatype": info.get("mediatype") or "",
                "sha1": info.get("sha1") or "",
                "license": ext_value("LicenseShortName"),
                "license_url": ext_value("LicenseUrl"),
                "artist": ext_value("Artist"),
                "credit": ext_value("Credit"),
                "description": ext_value("ImageDescription"),
                "date": ext_value("DateTimeOriginal") or ext_value("DateTime"),
            }
        time.sleep(0.08)


def allowed(meta: dict[str, Any]) -> bool:
    title_desc = f"{meta['title']} {meta['description']}".lower()
    if any(word in title_desc for word in BLOCKED_WORDS):
        return False
    if meta["mime"] not in {"image/jpeg", "image/png", "image/webp"}:
        return False
    if meta["mediatype"] and meta["mediatype"] != "BITMAP":
        return False
    if min(meta["width"], meta["height"]) < MIN_DIM:
        return False
    ratio = meta["width"] / max(meta["height"], 1)
    if ratio < 0.28 or ratio > 3.2:
        return False
    license_text = f"{meta['license']} {meta['license_url']}".lower()
    if not any(marker in license_text for marker in ALLOWED_LICENSE_MARKERS):
        return False
    return bool(meta["thumburl"] and meta["sha1"])


def safe_name(title: str, index: int) -> str:
    base = title.replace("File:", "")
    base = re.sub(r"\.[A-Za-z0-9]{2,5}$", "", base)
    base = re.sub(r"[^0-9A-Za-z\u4e00-\u9fff_-]+", "_", base).strip("_")
    if not base:
        base = "hairstyle"
    return f"{index:03d}_{base[:90]}.jpg"


def download_and_convert(meta: dict[str, Any], destination: Path) -> bool:
    delay = 1.5
    for attempt in range(6):
        try:
            response = session.get(meta["thumburl"], timeout=90)
            if response.status_code == 429 or response.status_code >= 500:
                raise RuntimeError(f"HTTP {response.status_code}")
            response.raise_for_status()
            with Image.open(io.BytesIO(response.content)) as image:
                image = ImageOps.exif_transpose(image)
                if image.mode in ("RGBA", "LA"):
                    background = Image.new("RGB", image.size, "white")
                    background.paste(image, mask=image.getchannel("A"))
                    image = background
                else:
                    image = image.convert("RGB")
                image.thumbnail((THUMB_WIDTH, THUMB_WIDTH), Image.Resampling.LANCZOS)
                if min(image.size) < 320:
                    return False
                image.save(destination, "JPEG", quality=84, optimize=True, progressive=True)
            return True
        except Exception as exc:
            if attempt == 5:
                print(f"Download failed {meta['title']}: {exc}", flush=True)
                return False
            time.sleep(delay)
            delay = min(delay * 1.8, 20)
    return False


def make_contact_sheet(image_paths: list[Path], destination: Path, label: str) -> None:
    sample = image_paths[:40]
    cell_w, cell_h = 220, 260
    cols = 5
    rows = (len(sample) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell_w, 80 + rows * cell_h), "white")
    draw = ImageDraw.Draw(sheet)
    draw.text((20, 20), f"{label}｜前40张预览", fill="black")
    for i, path in enumerate(sample):
        with Image.open(path) as image:
            image = image.convert("RGB")
            thumb = ImageOps.contain(image, (200, 210), Image.Resampling.LANCZOS)
            x = (i % cols) * cell_w + 10
            y = 70 + (i // cols) * cell_h
            sheet.paste(thumb, (x + (200 - thumb.width)//2, y))
            draw.text((x, y + 215), path.stem[:28], fill="black")
    sheet.save(destination, "JPEG", quality=85, optimize=True)


def write_readme(pack_dir: Path, pack: dict[str, Any], rows: list[dict[str, Any]]) -> None:
    counts = Counter(row["license"] or "未标明" for row in rows)
    license_lines = "\n".join(f"- {name}: {count}" for name, count in sorted(counts.items()))
    text = f"""# 发型图片资料包 {pack['id']}｜{pack['name']}

- 图片数量：{len(rows)}
- 图片来源：Wikimedia Commons 开放许可文件
- 处理方式：最长边约 {THUMB_WIDTH}px，统一转为 JPEG，便于浏览与归档
- 完整署名、来源页面和许可证：见 `manifest.csv`

## 许可统计

{license_lines}

## 使用提醒

1. 每张图片许可证可能不同，转载或公开发布时请按 `manifest.csv` 逐张署名。
2. 开放版权许可不自动消除肖像权、隐私权、商标权或文化敏感性问题。
3. 本包用于视觉研究和发型参考，不代表可直接用于广告、代言或商业训练集。
4. 图片经过缩放和JPEG转换，原始文件地址保留在清单中。
"""
    (pack_dir / "README.md").write_text(text, encoding="utf-8")


def build_pack(pack: dict[str, Any], global_hashes: set[str]) -> Path:
    pack_dir = OUT / f"发型图片包_{pack['id']}_{pack['name']}"
    image_dir = pack_dir / "images"
    image_dir.mkdir(parents=True, exist_ok=True)

    candidates = collect_category_files(pack["roots"], depth=2, cap=2200)
    selected_rows: list[dict[str, Any]] = []
    image_paths: list[Path] = []
    seen_titles: set[str] = set()

    def process(candidate_pairs: list[tuple[str, str]]) -> None:
        nonlocal selected_rows, image_paths
        for meta in image_metadata(candidate_pairs):
            if len(selected_rows) >= TARGET_PER_PACK:
                return
            if meta["title"] in seen_titles or meta["sha1"] in global_hashes:
                continue
            seen_titles.add(meta["title"])
            if not allowed(meta):
                continue
            filename = safe_name(meta["title"], len(selected_rows) + 1)
            destination = image_dir / filename
            if not download_and_convert(meta, destination):
                continue
            global_hashes.add(meta["sha1"])
            row = {
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
                "source_category": meta["source_root"],
                "sha1": meta["sha1"],
                "original_width": meta["width"],
                "original_height": meta["height"],
            }
            selected_rows.append(row)
            image_paths.append(destination)
            print(f"[{pack['id']}] {len(selected_rows):03d}/{TARGET_PER_PACK} {meta['title']}", flush=True)
            time.sleep(0.05)

    process(candidates)
    if len(selected_rows) < TARGET_PER_PACK:
        print(f"[{pack['id']}] thematic pool short; using general hairstyle fallback", flush=True)
        fallback = collect_category_files(FALLBACK_ROOTS, depth=2, cap=5000)
        fallback = [(title, f"fallback:{root}") for title, root in fallback if title not in seen_titles]
        process(fallback)

    if len(selected_rows) != TARGET_PER_PACK:
        raise RuntimeError(f"Pack {pack['id']} only produced {len(selected_rows)} images")

    manifest_path = pack_dir / "manifest.csv"
    fields = list(selected_rows[0].keys())
    with manifest_path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(selected_rows)

    write_readme(pack_dir, pack, selected_rows)
    make_contact_sheet(image_paths, pack_dir / "preview_first_40.jpg", f"发型包 {pack['id']} {pack['name']}")

    zip_path = OUT / f"发型图片包_{pack['id']}_{pack['name']}_200张.zip"
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for path in sorted(pack_dir.rglob("*")):
            if path.is_file():
                archive.write(path, arcname=f"{pack_dir.name}/{path.relative_to(pack_dir)}")
    print(f"Created {zip_path} ({zip_path.stat().st_size / 1024 / 1024:.1f} MB)", flush=True)
    return zip_path


def main() -> None:
    random.seed(20260803)
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    global_hashes: set[str] = set()
    zip_paths = []
    for pack in PACKS:
        zip_paths.append(build_pack(pack, global_hashes))
    summary = {
        "total_images": len(global_hashes),
        "packs": [{"file": p.name, "bytes": p.stat().st_size} for p in zip_paths],
    }
    (OUT / "BUILD_SUMMARY.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    if len(global_hashes) != 1000:
        raise RuntimeError(f"Expected 1000 unique images, got {len(global_hashes)}")
    print(json.dumps(summary, ensure_ascii=False, indent=2), flush=True)


if __name__ == "__main__":
    main()
