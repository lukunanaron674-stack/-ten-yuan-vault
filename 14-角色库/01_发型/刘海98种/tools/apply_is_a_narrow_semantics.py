#!/usr/bin/env python3
"""为五行完整研究Canvas写入叙事领域 is-a狭义 继承边。

五行是广义父项；五大主题是五行在叙事领域的狭义子项。
本工具在自动重建后执行，防止生成视图退回“平行系统/裸主题标签”。
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REORG = ROOT / "02_五行十元重组"

RELATIONS = {
    "木": {
        "theme": "因果",
        "path": REORG / "五行库/木/木_zx-nx.canvas",
    },
    "火": {
        "theme": "本体",
        "path": REORG / "五行库/火/火_zn-x.canvas",
    },
    "土": {
        "theme": "空间",
        "path": REORG / "五行库/土/土_n-x并z.canvas",
    },
    "金": {
        "theme": "时间",
        "path": REORG / "五行库/金/金_xn-z.canvas",
    },
    "水": {
        "theme": "命运",
        "path": REORG / "五行库/水/水_xz-nz.canvas",
    },
}

ITEM_RE = re.compile(r"^##\s*\d{2}[｜|]", re.M)
FIVE_ELEMENT_LINE_RE = re.compile(r"(\*\*五行归属：\*\*[^\n]*\n)")


def patch_canvas(element: str, theme: str, path: Path) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    relation_count = 0

    for node in data.get("nodes", []):
        if node.get("type") != "text":
            continue
        text = node.get("text", "")

        if node.get("id") == "title":
            old = "**分层规则：** 五行归属与五大主题标签分别记录，二者不互相冒充。"
            new = (
                f"**层级规则：** {theme} --is-a狭义[domain=叙事]→ {element}；"
                "五行是广义父项，主题是叙事狭义子项。"
            )
            text = text.replace(old, new)

        if ITEM_RE.search(text):
            text = text.replace(
                "**五大主题标签（原研究）：**",
                "**原研究主题标签（历史）：**",
            )
            text = text.replace(
                "- 五大主题标签（原研究）：",
                "- 原研究主题标签（历史）：",
            )

            relation_line = f"**is-a狭义：** {theme} --[domain=叙事]→ {element}"
            if relation_line not in text:
                match = FIVE_ELEMENT_LINE_RE.search(text)
                if not match:
                    raise RuntimeError(f"缺五行归属字段：{path} / {node.get('id')}")
                insert = (
                    match.group(1)
                    + f"**叙事狭义主题：** {theme}\n"
                    + relation_line
                    + "\n"
                )
                text = text[: match.start()] + insert + text[match.end() :]

            if relation_line not in text:
                raise RuntimeError(f"is-a狭义写入失败：{path} / {node.get('id')}")
            relation_count += 1

        node["text"] = text

    path.write_text(
        json.dumps(data, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    return relation_count


def patch_audit(total_relations: int) -> None:
    path = REORG / "02_图片与结构审计报告.md"
    text = path.read_text(encoding="utf-8")
    text = text.replace(
        "4. 五大主题与五行分别记录。",
        "4. 五大主题以 `is-a狭义[domain=叙事]` 继承五行，并分层记录。",
    )

    marker = "## is-a狭义继承审计"
    section = (
        f"{marker}\n\n"
        f"- 五行广义父项：5/5\n"
        f"- 叙事狭义主题：5/5\n"
        f"- 卡片继承边：{total_relations}/98\n"
        f"- 关系方向：狭义子项 → 广义父项\n"
        f"- 领域限定：叙事\n\n"
        "```text\n"
        "因果→木｜本体→火｜空间→土｜时间→金｜命运→水\n"
        "```\n"
    )
    if marker in text:
        text = text.split(marker, 1)[0].rstrip() + "\n\n" + section
    else:
        text = text.rstrip() + "\n\n" + section
    path.write_text(text, encoding="utf-8")


def main() -> None:
    total = 0
    for element, cfg in RELATIONS.items():
        total += patch_canvas(element, cfg["theme"], cfg["path"])
    if total != 98:
        raise RuntimeError(f"is-a狭义继承边数量错误：{total}/98")
    patch_audit(total)
    print(f"is-a狭义继承边完成：{total}/98")


if __name__ == "__main__":
    main()
