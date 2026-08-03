#!/usr/bin/env python3
"""根据 image_records.json 生成现代服装真实图片 Canvas 图库。"""

from __future__ import annotations

import argparse
import json
from collections import defaultdict
from pathlib import Path
from typing import Any

CARD_W = 620
CARD_H = 980
X_GAP = 60
Y_GAP = 80
COLS = 3
HEADER_H = 420
GROUP_PAD = 80


def slugify(text: str) -> str:
    keep = []
    for char in text:
        if char.isalnum() or char in ("-", "_", " "):
            keep.append(char)
        else:
            keep.append("_")
    return "".join(keep).strip().replace(" ", "_")


def load_records(path: Path) -> dict[str, Any]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if "records" not in data:
        raise ValueError("缺少 records 字段")
    return data


def build_card(record: dict[str, Any], x: int, y: int) -> dict[str, Any]:
    text = (
        f"## {record['id']}｜{record['brand']} Look {record['look']}\n\n"
        f"![]({record['image_url']})\n\n"
        f"- 品牌：{record['brand']}\n"
        f"- 系列：{record['season']}\n"
        f"- Look：{record['look']}\n"
        f"- 状态：{record.get('verify_status', 'candidate')}\n"
        f"- 图片等级：{record.get('image_grade', '') or '待核'}\n"
        f"- 核验日期：{record.get('verify_date', '') or '待核'}\n"
    )
    notes = record.get("notes", "")
    if notes:
        text += f"- 备注：{notes}\n"
    text += f"\n[图像来源页]({record['source_page_url']})"
    return {
        "id": f"card-{record['id']}",
        "type": "text",
        "text": text,
        "x": x,
        "y": y,
        "width": CARD_W,
        "height": CARD_H,
        "color": "4",
    }


def build_collection_canvas(
    records: list[dict[str, Any]], output_path: Path, title: str
) -> None:
    rows = (len(records) + COLS - 1) // COLS
    group_h = rows * (CARD_H + Y_GAP) + GROUP_PAD * 2
    group_w = COLS * (CARD_W + X_GAP) - X_GAP + GROUP_PAD * 2
    nodes: list[dict[str, Any]] = [
        {
            "id": "title",
            "type": "text",
            "text": (
                f"# {title}\n\n"
                f"共 {len(records)} 套真实图片卡。\n"
                "图片通过 Canvas 文本卡内的远程图片嵌入显示；来源页另存为链接。"
            ),
            "x": 0,
            "y": -HEADER_H,
            "width": group_w,
            "height": 300,
            "color": "4",
        },
        {
            "id": "group",
            "type": "group",
            "label": title,
            "x": 0,
            "y": 0,
            "width": group_w,
            "height": group_h,
            "color": "4",
        },
    ]
    edges: list[dict[str, Any]] = [
        {"id": "edge-title-group", "fromNode": "title", "toNode": "group"}
    ]

    for index, record in enumerate(records):
        col = index % COLS
        row = index // COLS
        x = GROUP_PAD + col * (CARD_W + X_GAP)
        y = GROUP_PAD + row * (CARD_H + Y_GAP)
        nodes.append(build_card(record, x, y))

    data = {
        "nodes": nodes,
        "edges": edges,
        "metadata": {"version": "1.0", "frontmatter": {}},
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def build_master_canvas(canvas_paths: list[Path], output_path: Path) -> None:
    nodes: list[dict[str, Any]] = [
        {
            "id": "title",
            "type": "text",
            "text": (
                "# 现代名牌服装真实图片库｜Canvas 总索引\n\n"
                "打开下方分系列 Canvas 文件查看真实图片卡。"
            ),
            "x": 0,
            "y": -240,
            "width": 1500,
            "height": 180,
            "color": "4",
        }
    ]
    edges: list[dict[str, Any]] = []
    for index, path in enumerate(canvas_paths):
        row = index // 3
        col = index % 3
        x = col * 520
        y = row * 320
        node_id = f"file-{index + 1}"
        nodes.append(
            {
                "id": node_id,
                "type": "file",
                "file": path.name,
                "x": x,
                "y": y,
                "width": 460,
                "height": 240,
            }
        )
        edges.append(
            {"id": f"edge-{index + 1}", "fromNode": "title", "toNode": node_id}
        )

    data = {
        "nodes": nodes,
        "edges": edges,
        "metadata": {"version": "1.0", "frontmatter": {}},
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="根据 image_records.json 生成 Canvas 图库")
    parser.add_argument("--input", type=Path, default=Path("image_records.json"))
    parser.add_argument("--output-dir", type=Path, default=Path("generated_canvases"))
    args = parser.parse_args()

    data = load_records(args.input)
    records = data["records"]
    if not records:
        raise SystemExit("image_records.json 为空，先抓取并核验图片。")

    by_collection: dict[tuple[str, str], list[dict[str, Any]]] = defaultdict(list)
    for record in records:
        if not record.get("image_url"):
            raise SystemExit(f"缺少 image_url：{record.get('id', '?')}")
        by_collection[(record["brand"], record["season"])].append(record)

    canvas_paths: list[Path] = []
    for index, ((brand, season), items) in enumerate(by_collection.items(), start=1):
        title = f"{index:02d}｜{brand}｜{season}"
        file_name = f"{index:02d}_{slugify(brand)}_{slugify(season)}.canvas"
        path = args.output_dir / file_name
        build_collection_canvas(items, path, title)
        canvas_paths.append(path)

    build_master_canvas(
        canvas_paths,
        args.output_dir / "00_真实图片总索引.canvas",
    )
    print(f"已生成 {len(canvas_paths)} 个分系列 Canvas + 1 个总索引。")


if __name__ == "__main__":
    main()
