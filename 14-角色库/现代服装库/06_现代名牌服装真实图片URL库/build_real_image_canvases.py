#!/usr/bin/env python3
"""从 Vogue Runway 系列页提取真实图片直链并生成 Obsidian Canvas。

只保存远程图片URL和来源页，不复制第三方原图。
"""
from __future__ import annotations

import html
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import unquote

import requests

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "collections.json"
OUT = ROOT / "image_records.json"
CANVAS_DIR = ROOT / "canvas"
INDEX = ROOT / "00_真实图片总索引.canvas"
AUDIT = ROOT / "source_audit.md"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
ASSET = re.compile(r"https?(?::|%3A)(?:\\/|/|%2F){2}assets\.vogue\.com(?:\\/|/|%2F)photos(?:\\/|/|%2F)[^\"'<>\\\s]+?\.(?:jpe?g|png|webp)(?:\?[^\"'<>\\\s]*)?", re.I)
PHOTO_ID = re.compile(r"/photos/([^/]+)/", re.I)


def norm(raw: str) -> str:
    value = html.unescape(raw)
    value = value.replace("\\u002F", "/").replace("\\/", "/")
    value = value.replace("%3A", ":").replace("%2F", "/")
    value = value.replace("\\u0026", "&").strip('"\' ,')
    return value.replace("%252C", "%2C")


def key(url: str) -> str:
    match = PHOTO_ID.search(url)
    return match.group(1) if match else re.sub(r"[?#].*$", "", url)


def score(url: str) -> tuple[int, int]:
    low = url.lower()
    points = 0
    points += 30 if "/master/" in low else 0
    points += 20 if "w_2560" in low or "w_2000" in low else 0
    points += 8 if "c_limit" in low else 0
    width = re.search(r"w_(\d+)", low)
    return points, int(width.group(1)) if width else 0


def extract_urls(page: str, expected: int) -> tuple[list[str], int]:
    decoded = page.replace("\\u002F", "/").replace("\\/", "/")
    found = ASSET.findall(page) + ASSET.findall(decoded)
    chosen: dict[str, str] = {}
    order: list[str] = []
    for raw in found:
        url = norm(raw)
        if "assets.vogue.com/photos/" not in url:
            continue
        photo = key(url)
        if photo not in chosen:
            chosen[photo] = url
            order.append(photo)
        elif score(url) > score(chosen[photo]):
            chosen[photo] = url
    urls = [chosen[item] for item in order]
    if len(urls) < expected:
        raise RuntimeError(f"只找到{len(urls)}个唯一Vogue图片，要求{expected}")
    return urls[:expected], len(urls)


def safe(text: str) -> str:
    return re.sub(r"[^A-Za-z0-9]+", "-", text).strip("-").lower() or "collection"


def card(record: dict, x: int, y: int, color: str) -> dict:
    text = (
        f"## {record['id']}｜{record['brand']} Look {record['look']}\n\n"
        f"![](<{record['image_url']}>)\n\n"
        f"**系列：** {record['season']}  \n"
        f"**图片状态：** 真实远程图片直链  \n"
        f"**来源：** Vogue Runway  \n\n"
        f"[打开来源页]({record['source_page_url']})"
    )
    return {"id": f"look-{record['id']}", "type": "text", "text": text,
            "x": x, "y": y, "width": 520, "height": 920, "color": color}


def write_canvas(collection: dict, records: list[dict], number: int) -> Path:
    color = str((number - 1) % 6 + 1)
    nodes = [{"id": "title", "type": "text",
              "text": f"# {collection['brand']}｜{collection['season']}\n\n真实网络图片：{len(records)}套  \n图片直链＋来源页。",
              "x": -550, "y": -460, "width": 1100, "height": 300, "color": color}]
    for index, record in enumerate(records):
        nodes.append(card(record, index % 4 * 580, index // 4 * 980, color))
    CANVAS_DIR.mkdir(parents=True, exist_ok=True)
    path = CANVAS_DIR / f"{number:02d}_{safe(collection['brand'])}_{safe(collection['season'])}.canvas"
    path.write_text(json.dumps({"nodes": nodes, "edges": [], "metadata": {"version": "1.0"}}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    return path


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    collections = data["collections"]
    expected_total = int(data["total_looks"])
    if sum(int(item["count"]) for item in collections) != expected_total:
        raise RuntimeError("collections.json系列数量之和不等于total_looks")

    session = requests.Session()
    session.headers.update({"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    records: list[dict] = []
    audits: list[dict] = []
    canvases: list[tuple[dict, Path]] = []
    global_id = 1

    for number, collection in enumerate(collections, 1):
        print(f"[{number}/{len(collections)}] {collection['brand']} {collection['season']}", flush=True)
        response = session.get(collection["base_url"], timeout=120)
        response.raise_for_status()
        urls, discovered = extract_urls(response.text, int(collection["count"]))
        batch = []
        for look, image_url in enumerate(urls, 1):
            item = {"id": f"{global_id:04d}", "brand": collection["brand"],
                    "season": collection["season"], "look": look,
                    "image_url": image_url,
                    "source_page_url": f"{collection['base_url']}#{look}",
                    "collection_url": collection["base_url"],
                    "source": "Vogue Runway", "status": "direct-url-extracted"}
            records.append(item)
            batch.append(item)
            global_id += 1
        path = write_canvas(collection, batch, number)
        canvases.append((collection, path))
        audits.append({"brand": collection["brand"], "season": collection["season"],
                       "expected": collection["count"], "discovered": discovered,
                       "used": len(urls), "canvas": path.relative_to(ROOT).as_posix()})
        time.sleep(1.5)

    if len(records) != expected_total:
        raise RuntimeError(f"最终数量{len(records)}，要求{expected_total}")
    duplicates = len(records) - len({key(item["image_url"]) for item in records})
    if duplicates:
        raise RuntimeError(f"发现{duplicates}个重复Vogue photo id")

    OUT.write_text(json.dumps({"version": "2.0", "total_looks": len(records), "records": records}, ensure_ascii=False, indent=2), encoding="utf-8")

    nodes = [{"id": "title", "type": "text",
              "text": f"# 现代名牌服装真实图片库｜可视Canvas\n\n共{len(records)}套真实网络服装图片。  \n按系列拆分，点击下方文件进入图库。",
              "x": -650, "y": -480, "width": 1300, "height": 340, "color": "4"}]
    prefix = "14-角色库/现代服装库/06_现代名牌服装真实图片URL库/"
    for index, (collection, path) in enumerate(canvases):
        nodes.append({"id": f"series-{index+1:02d}", "type": "file",
                      "file": prefix + path.relative_to(ROOT).as_posix(),
                      "x": index % 4 * 620, "y": index // 4 * 460,
                      "width": 560, "height": 380})
    INDEX.write_text(json.dumps({"nodes": nodes, "edges": [], "metadata": {"version": "1.0"}}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    lines = ["# 现代名牌服装真实图片抓取审计", "", f"- 总图片数：**{len(records)}**",
             f"- 重复Vogue Photo ID：**{duplicates}**", "- 状态：**direct-url-extracted**",
             "- Canvas显示方式：文本节点内使用 `![](<图片直链>)`。", "",
             "| 品牌与系列 | 目标 | 页面发现 | 实际使用 | Canvas |", "|---|---:|---:|---:|---|"]
    for row in audits:
        lines.append(f"| {row['brand']} · {row['season']} | {row['expected']} | {row['discovered']} | {row['used']} | [[{row['canvas']}]] |")
    AUDIT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"完成：{len(records)}张图片，{len(canvases)}个系列Canvas", flush=True)


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise
