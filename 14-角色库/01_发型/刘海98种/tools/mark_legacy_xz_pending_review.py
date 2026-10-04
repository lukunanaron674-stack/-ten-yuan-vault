#!/usr/bin/env python3
"""将旧刘海xz九项降级为视觉待重审，并暂停xz排行榜。

本工具不重新分类，不删除图片与研究卡。它只阻止旧“碎/乱/羽化=xz”
迁移结果被自动重建为现行canonical结论。
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REORG = ROOT / "02_五行十元重组"
WATER = REORG / "五行库/水/水_xz-nz.canvas"
RANKING = REORG / "05_十元本征映射准度排行榜.md"
AUDIT = REORG / "02_图片与结构审计报告.md"

LEGACY_XZ = {2, 19, 23, 40, 44, 57, 61, 86, 97}
LEGACY_LIST = "02、19、23、40、44、57、61、86、97"
ITEM_RE = re.compile(r"^##\s*(\d{2})[｜|]\s*([^\n]+)", re.M)
REMOVE_LINES = re.compile(
    r"^\*\*(?:单十元本征映射准度|本征准度模型|视觉形状审计状态|旧xz结论)：\*\*.*$",
    re.M,
)


def load_canvas(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    if any(marker in text for marker in ("<<<<<<<", "=======", ">>>>>>>")):
        raise RuntimeError(f"发现未解决Git冲突：{path}")
    return json.loads(text)


def patch_water_canvas() -> list[tuple[int, str]]:
    data = load_canvas(WATER)
    found: list[tuple[int, str]] = []

    for node in data.get("nodes", []):
        if node.get("type") != "text":
            continue
        text = str(node.get("text", ""))

        if node.get("id") == "title":
            warning = (
                "\n\n> [!warning] xz视觉形状重审中\n"
                f"> 旧xz编号：{LEGACY_LIST}。旧‘碎／乱／羽化／多方向＝xz’判据已作废；"
                "这9项保留为研究材料，但状态统一为 `legacy-pending-review`，不得作为现行xz准度或排行证据。"
            )
            text = re.sub(r"\n\n> \[!warning\] xz视觉形状重审中[\s\S]*$", "", text).rstrip()
            node["text"] = text + warning
            continue

        match = ITEM_RE.search(text)
        if not match:
            continue
        item = int(match.group(1))
        if item not in LEGACY_XZ:
            continue

        name = match.group(2).strip()
        found.append((item, name))
        text = REMOVE_LINES.sub("", text)
        text = re.sub(r"\n{3,}", "\n\n", text).rstrip()
        text += (
            "\n\n**视觉形状审计状态：** `legacy-pending-review`｜"
            "旧xz本征准度与排名暂停｜逐图复审：pending\n"
            "**旧xz结论：** 旧‘碎／乱／羽化／多方向漂移＝xz’判据作废；"
            "当前卡仅保留图片、来源与历史迁移数据，不代表现行xz结论。"
        )
        node["text"] = text

    found_ids = {item for item, _ in found}
    if found_ids != LEGACY_XZ:
        raise RuntimeError(f"旧xz卡覆盖错误：found={sorted(found_ids)}")

    WATER.write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    return sorted(found)


def patch_ranking(rows: list[tuple[int, str]]) -> None:
    text = RANKING.read_text(encoding="utf-8")
    text = re.sub(r"version:\s*[^\n]+", "version: v1.1-xz-suspended", text, count=1)
    text = re.sub(r"updated:\s*[^\n]+", "updated: 2026-08-04", text, count=1)

    top_row = (
        f"| 阳水 xz | 9（旧归类） | 排行暂停｜{LEGACY_LIST}待逐图重审 | 不适用 |"
    )
    text, count = re.subn(r"^\| 阳水 xz \|.*$", top_row, text, count=1, flags=re.M)
    if count != 1:
        raise RuntimeError("未找到xz榜首总览行")

    section = [
        "## 阳水 xz｜排行暂停｜9项旧归类待重审",
        "",
        "> 旧‘碎／乱／羽化／多方向＝xz’判据已作废。以下条目只保留历史归类和图片证据；",
        "> 在完成整体轮廓、内部纹理、局部功能、轴向、火药桶语义发动机及最近邻测试前，不生成xz名次和本征准度。",
        "",
        "| 编号 | 名称 | 当前状态 |",
        "|---:|---|---|",
    ]
    for item, name in rows:
        section.append(f"| {item:02d} | {name} | legacy-pending-review｜旧准度与排名暂停 |")
    section.extend(
        [
            "",
            "现行xz判据：",
            "",
            "```text",
            "整体危险蓄积＋触发高度敏感＋一点牵动全局＝xz",
            "视觉本征候选：长三角／长楔形，但形状本身不是充分条件。",
            "```",
            "",
        ]
    )
    replacement = "\n".join(section)
    pattern = r"## 阳水 xz｜[^\n]*\n[\s\S]*?(?=## 阴水 nz｜)"
    text, count = re.subn(pattern, replacement, text, count=1)
    if count != 1:
        raise RuntimeError("未找到xz排行榜章节")

    banner = (
        "> [!warning] xz排行榜暂停\n"
        f"> 旧xz九项（{LEGACY_LIST}）统一标记 `legacy-pending-review`；"
        "其旧纯度种子不得作为现行xz本征准度。\n\n"
    )
    text = re.sub(r"> \[!warning\] xz排行榜暂停[\s\S]*?\n\n(?=## 规则)", "", text)
    text = text.replace("## 规则\n", banner + "## 规则\n", 1)
    RANKING.write_text(text, encoding="utf-8")


def replace_section(text: str, heading: str, body: str) -> str:
    pattern = rf"\n{re.escape(heading)}\n[\s\S]*?(?=\n## |\Z)"
    replacement = f"\n{heading}\n\n{body.rstrip()}\n"
    if re.search(pattern, text):
        return re.sub(pattern, replacement, text, count=1)
    return text.rstrip() + "\n\n" + heading + "\n\n" + body.rstrip() + "\n"


def patch_audit() -> None:
    text = AUDIT.read_text(encoding="utf-8")
    body = f"""- 旧xz归类：9项（{LEGACY_LIST}）
- 当前状态：`legacy-pending-review` 9/9
- xz现行排行榜：暂停
- 旧纯度种子：仅作历史迁移数据，不作现行xz本征准度
- 需要逐图复审：整体轮廓、内部纹理、局部功能、X/Y与局部轴、火药桶语义、最近邻、拿掉与反向测试
- 现行xz主骨：整体危险蓄积＋触发高度敏感＋一点牵动全局

```text
碎 ≠ xz
乱 ≠ xz
羽化 ≠ xz
多方向 ≠ xz
长三角 ≠ 自动xz
```"""
    text = replace_section(text, "## xz视觉形状重审门禁", body)
    AUDIT.write_text(text, encoding="utf-8")


def validate() -> None:
    data = load_canvas(WATER)
    reviewed = 0
    for node in data.get("nodes", []):
        text = str(node.get("text", ""))
        match = ITEM_RE.search(text)
        if match and int(match.group(1)) in LEGACY_XZ:
            if "legacy-pending-review" not in text:
                raise RuntimeError(f"旧xz未降级：{match.group(1)}")
            if "单十元本征映射准度" in text:
                raise RuntimeError(f"旧xz仍保留现行准度行：{match.group(1)}")
            reviewed += 1
    if reviewed != 9:
        raise RuntimeError(f"旧xz门禁数量错误：{reviewed}/9")

    ranking = RANKING.read_text(encoding="utf-8")
    if "阳水 xz｜排行暂停" not in ranking or "长乱边羽化刘海、86" in ranking:
        raise RuntimeError("xz排行榜暂停失败")


def main() -> None:
    rows = patch_water_canvas()
    patch_ranking(rows)
    patch_audit()
    validate()
    print("legacy xz visual review gate applied: 9/9; xz ranking suspended")


if __name__ == "__main__":
    main()
