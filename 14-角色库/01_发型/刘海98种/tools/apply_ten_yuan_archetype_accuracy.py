#!/usr/bin/env python3
"""为刘海98种写入单十元本征映射准度，并生成十元内排行榜。

当前v1种子模型：
- 目标十元＝正式主十元；
- 本征映射准度＝旧研究纯度；
- 该分数不参与十元配比总和；
- 同分共享名次，采用竞赛排名法（1、1、3）；
- 模型标记为 legacy-purity-seed，视觉本体终审仍为pending。
"""
from __future__ import annotations

import json
import re
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REORG = ROOT / "02_五行十元重组"
AUDIT = REORG / "02_图片与结构审计报告.md"
RANKING = REORG / "05_十元本征映射准度排行榜.md"

SOURCE_FILES = [
    ROOT / "98种流行女性刘海.canvas",
    ROOT / "批次06_斜扫刘海_待合并.canvas",
    ROOT / "批次07_中分与长刘海.canvas",
    ROOT / "批次08_Baby与Micro刘海.canvas",
    ROOT / "批次09_碎剪与羽化刘海.canvas",
    ROOT / "批次10_法式与Birkin刘海.canvas",
    ROOT / "批次11_宽版与几何切割刘海.canvas",
    ROOT / "批次12_框脸与长侧束刘海.canvas",
    ROOT / "批次13_卷曲与纹理刘海.canvas",
    ROOT / "批次14_复古与造型型刘海.canvas",
]

ELEMENT_CANVASES = [
    REORG / "五行库/木/木_zx-nx.canvas",
    REORG / "五行库/火/火_zn-x.canvas",
    REORG / "五行库/土/土_n-x并z.canvas",
    REORG / "五行库/金/金_xn-z.canvas",
    REORG / "五行库/水/水_xz-nz.canvas",
]

TEN_YUAN_ORDER = ["zx", "nx", "zn", "x", "n", "x并z", "xn", "z", "xz", "nz"]
TEN_YUAN_LABELS = {
    "zx": "阳木 zx",
    "nx": "阴木 nx",
    "zn": "阳火 zn",
    "x": "阴火 x",
    "n": "阳土 n",
    "x并z": "阴土 x并z",
    "xn": "阳金 xn",
    "z": "阴金 z",
    "xz": "阳水 xz",
    "nz": "阴水 nz",
}

ITEM_RE = re.compile(r"^##\s*(\d{2})[｜|]([^\n]+)", re.M)
PURITY_RE = re.compile(r"纯度(?:[：:]\*{0,2}\s*)?(\d{1,3})%")
MAP_RE = re.compile(r"\*\*正式十元映射：\*\*\s*主\s*`([^`]+)`／副\s*`([^`]+)`")
ACCURACY_LINE_RE = re.compile(
    r"^\*\*(?:单十元本征映射准度|本征准度模型)：\*\*.*$",
    re.M,
)


@dataclass(frozen=True)
class Entry:
    item: int
    name: str
    target: str
    score: int
    path: Path
    node_id: str


def load_canvas(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    if any(marker in text for marker in ("<<<<<<<", "=======", ">>>>>>>")):
        raise RuntimeError(f"发现未解决Git冲突：{path}")
    return json.loads(text)


def collect_purity() -> dict[int, int]:
    purity: dict[int, int] = {}
    for path in SOURCE_FILES:
        data = load_canvas(path)
        for node in data.get("nodes", []):
            if node.get("type") != "text":
                continue
            text = node.get("text", "")
            item_match = ITEM_RE.search(text)
            if not item_match:
                continue
            item = int(item_match.group(1))
            p_match = PURITY_RE.search(text)
            if not p_match:
                raise RuntimeError(f"原研究缺纯度：{item:02d}｜{path.name}")
            value = int(p_match.group(1))
            if not 0 <= value <= 100:
                raise RuntimeError(f"纯度越界：{item:02d}={value}")
            if item in purity:
                raise RuntimeError(f"原研究编号重复：{item:02d}")
            purity[item] = value
    expected = set(range(1, 99))
    if set(purity) != expected:
        raise RuntimeError(f"纯度编号不完整：{len(purity)}/98")
    return purity


def collect_entries(purity: dict[int, int]) -> tuple[dict[Path, dict], list[Entry]]:
    canvases: dict[Path, dict] = {}
    entries: list[Entry] = []
    seen: set[int] = set()

    for path in ELEMENT_CANVASES:
        data = load_canvas(path)
        canvases[path] = data
        for node in data.get("nodes", []):
            if node.get("type") != "text":
                continue
            text = node.get("text", "")
            item_match = ITEM_RE.search(text)
            if not item_match:
                continue
            map_match = MAP_RE.search(text)
            if not map_match:
                raise RuntimeError(f"卡片缺正式主副十元：{path.name}｜{node.get('id')}")
            item = int(item_match.group(1))
            if item in seen:
                raise RuntimeError(f"五行卡编号重复：{item:02d}")
            seen.add(item)
            entries.append(
                Entry(
                    item=item,
                    name=item_match.group(2).strip(),
                    target=map_match.group(1),
                    score=purity[item],
                    path=path,
                    node_id=str(node.get("id", "")),
                )
            )

    if seen != set(range(1, 99)):
        raise RuntimeError(f"五行卡覆盖失败：{len(seen)}/98")
    return canvases, entries


def competition_ranks(entries: list[Entry]) -> dict[int, tuple[int, int]]:
    grouped: dict[str, list[Entry]] = defaultdict(list)
    for entry in entries:
        grouped[entry.target].append(entry)

    result: dict[int, tuple[int, int]] = {}
    for target, rows in grouped.items():
        rows.sort(key=lambda row: (-row.score, row.item))
        previous_score: int | None = None
        current_rank = 0
        total = len(rows)
        for index, row in enumerate(rows, start=1):
            if row.score != previous_score:
                current_rank = index
                previous_score = row.score
            result[row.item] = (current_rank, total)

    missing_targets = [symbol for symbol in TEN_YUAN_ORDER if symbol not in grouped]
    if missing_targets:
        raise RuntimeError(f"缺十元排行榜：{missing_targets}")
    return result


def clean_accuracy_lines(text: str) -> str:
    text = ACCURACY_LINE_RE.sub("", text)
    return re.sub(r"\n{3,}", "\n\n", text)


def patch_canvases(
    canvases: dict[Path, dict],
    entries: list[Entry],
    ranks: dict[int, tuple[int, int]],
) -> int:
    entry_by_item = {entry.item: entry for entry in entries}
    patched_count = 0

    for path, data in canvases.items():
        for node in data.get("nodes", []):
            if node.get("type") != "text":
                continue
            text = node.get("text", "")
            item_match = ITEM_RE.search(text)
            if not item_match:
                continue
            item = int(item_match.group(1))
            entry = entry_by_item[item]
            rank, total = ranks[item]
            text = clean_accuracy_lines(text)
            accuracy_line = (
                f"**单十元本征映射准度：** `{entry.target}` {entry.score}/100｜"
                f"十元内第{rank}/{total}（同分共享名次）"
            )
            model_line = (
                "**本征准度模型：** `legacy-purity-seed`｜"
                "独立评分，不参与配比总和｜视觉本体终审：pending"
            )
            anchor = re.search(r"^\*\*(?:配比模型|映射度模型)：\*\*.*$", text, re.M)
            if anchor:
                insertion = anchor.group(0) + "\n" + accuracy_line + "\n" + model_line
                text = text.replace(anchor.group(0), insertion, 1)
            else:
                map_match = MAP_RE.search(text)
                if not map_match:
                    raise RuntimeError(f"卡片缺配比锚点：{item:02d}")
                text = text.replace(map_match.group(0), map_match.group(0) + "\n" + accuracy_line + "\n" + model_line, 1)
            node["text"] = text
            patched_count += 1
        path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    if patched_count != 98:
        raise RuntimeError(f"本征准度写入失败：{patched_count}/98")
    return patched_count


def build_ranking(entries: list[Entry], ranks: dict[int, tuple[int, int]]) -> None:
    grouped: dict[str, list[Entry]] = defaultdict(list)
    for entry in entries:
        grouped[entry.target].append(entry)

    lines = [
        "---",
        "type: bangs-ten-yuan-archetype-accuracy-ranking",
        "status: generated-provisional",
        "version: v1.0",
        "updated: 2026-08-03",
        "---",
        "",
        "# 刘海98种｜单十元本征映射准度排行榜",
        "",
        "> 本榜回答“谁最像该十元本身”。它不回答对象内部的十元配比。",
        "",
        "## 规则",
        "",
        "- 评分范围：0–100，互不归一；",
        "- 排名范围：同一十元、同一发型领域、同一刘海结构尺度；",
        "- 排名方法：竞赛排名，同分共享名次，例如1、1、3；",
        "- 当前模型：`legacy-purity-seed`；",
        "- 当前数值来源：旧研究纯度，仅作第一版准度种子；",
        "- 视觉本体终审：pending；复审后本征准度可与配比主值分离。",
        "",
        "## 十元榜首总览",
        "",
        "| 十元 | 样本数 | 当前榜首 | 准度 |",
        "|---|---:|---|---:|",
    ]

    for target in TEN_YUAN_ORDER:
        rows = sorted(grouped[target], key=lambda row: (-row.score, row.item))
        top_score = rows[0].score
        top_names = "、".join(f"{row.item:02d} {row.name}" for row in rows if row.score == top_score)
        lines.append(f"| {TEN_YUAN_LABELS[target]} | {len(rows)} | {top_names} | {top_score}/100 |")

    for target in TEN_YUAN_ORDER:
        rows = sorted(grouped[target], key=lambda row: (-row.score, row.item))
        lines.extend(
            [
                "",
                f"## {TEN_YUAN_LABELS[target]}｜{len(rows)}项",
                "",
                "| 排名 | 编号 | 名称 | 本征映射准度 | 当前状态 |",
                "|---:|---:|---|---:|---|",
            ]
        )
        for row in rows:
            rank, _ = ranks[row.item]
            lines.append(
                f"| {rank} | {row.item:02d} | {row.name} | {row.score}/100 | provisional｜视觉终审pending |"
            )

    RANKING.write_text("\n".join(lines) + "\n", encoding="utf-8")


def update_audit(card_count: int, entries: list[Entry]) -> None:
    text = AUDIT.read_text(encoding="utf-8")
    text = re.sub(r"\n## 单十元本征映射准度审计[\s\S]*$", "", text).rstrip()
    target_count = len({entry.target for entry in entries})
    text += f"""

## 单十元本征映射准度审计

- 实例卡本征准度：{card_count}/98
- 十元独立排行榜：{target_count}/10
- 评分范围：0–100，不参与配比总和
- 排名方法：competition rank，同分共享名次
- 当前模型：`legacy-purity-seed`
- 当前来源：旧研究纯度
- 视觉本体终审：pending
- 排行榜：`05_十元本征映射准度排行榜.md`

```text
配比度回答“由什么构成”。
本征映射准度回答“有多像该十元本身”。
当前两者可能暂时同值，但字段、语义与后续审计路径完全分开。
```
"""
    AUDIT.write_text(text + "\n", encoding="utf-8")


def main() -> None:
    purity = collect_purity()
    canvases, entries = collect_entries(purity)
    ranks = competition_ranks(entries)
    card_count = patch_canvases(canvases, entries, ranks)
    build_ranking(entries, ranks)
    update_audit(card_count, entries)
    print(f"ten-yuan archetype accuracy applied: cards={card_count}, rankings=10")


if __name__ == "__main__":
    main()
