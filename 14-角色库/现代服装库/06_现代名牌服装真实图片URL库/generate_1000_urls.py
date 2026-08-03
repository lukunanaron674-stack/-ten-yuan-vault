#!/usr/bin/env python3
"""从 collections.json 生成完整1000条现代服装图片URL清单。"""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
DEFAULT_DATA = ROOT / "collections.json"


def load_data(path: Path) -> dict[str, Any]:
    data = json.loads(path.read_text(encoding="utf-8"))
    collections = data.get("collections", [])
    expected = int(data.get("total_looks", 0))
    actual = sum(int(item["count"]) for item in collections)
    if actual != expected:
        raise ValueError(f"数量不一致：元数据声明{expected}，系列合计{actual}")
    return data


def expand_rows(data: dict[str, Any]) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    global_id = 1
    for collection in data["collections"]:
        base_url = collection["base_url"]
        for look_number in range(1, int(collection["count"]) + 1):
            rows.append(
                {
                    "id": f"{global_id:04d}",
                    "brand": collection["brand"],
                    "season": collection["season"],
                    "look": look_number,
                    "look_url": f"{base_url}#{look_number}",
                    "collection_url": base_url,
                    "source": data.get("source", "Vogue Runway"),
                }
            )
            global_id += 1

    if len(rows) != int(data["total_looks"]):
        raise ValueError(f"展开后不是1000条：{len(rows)}")
    if len({row["look_url"] for row in rows}) != len(rows):
        raise ValueError("发现重复URL")
    return rows


def write_csv(rows: list[dict[str, Any]], output: Path) -> None:
    fields = [
        "id",
        "brand",
        "season",
        "look",
        "look_url",
        "collection_url",
        "source",
    ]
    with output.open("w", encoding="utf-8-sig", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def write_markdown(rows: list[dict[str, Any]], output: Path) -> None:
    lines = [
        "# 现代名牌服装真实图片URL｜1000条",
        "",
        "| 编号 | 品牌 | 系列 | Look | 图片页 |",
        "|---:|---|---|---:|---|",
    ]
    for row in rows:
        lines.append(
            f"| {row['id']} | {row['brand']} | {row['season']} | "
            f"{row['look']} | [打开造型]({row['look_url']}) |"
        )
    output.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="生成1000条现代名牌服装图片URL")
    parser.add_argument(
        "--format",
        choices=("csv", "markdown"),
        default="csv",
        help="输出格式，默认csv",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="输出路径；省略时写入当前目录",
    )
    parser.add_argument(
        "--data",
        type=Path,
        default=DEFAULT_DATA,
        help="collections.json路径",
    )
    args = parser.parse_args()

    data = load_data(args.data)
    rows = expand_rows(data)
    suffix = "csv" if args.format == "csv" else "md"
    output = args.output or ROOT / f"modern_fashion_urls_1000.{suffix}"

    if args.format == "csv":
        write_csv(rows, output)
    else:
        write_markdown(rows, output)

    print(f"已生成 {len(rows)} 条：{output}")


if __name__ == "__main__":
    main()
