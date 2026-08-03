#!/usr/bin/env python3
"""为刘海98种五行研究卡写入十元映射度并审计。

v1迁移模型：
- 类型层：叙事狭义主题完整继承五行两端，两个十元继承度均为100。
- 实例层：主十元映射度=旧纯度，副十元映射度=100-旧纯度，其余八项暂记0。
- 该模型标记为 provisional_two-pole_normalized，不冒充十维终审。
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REORG = ROOT / "02_五行十元重组"
AUDIT = REORG / "02_图片与结构审计报告.md"

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

ELEMENT_CANVASES = {
    REORG / "五行库/木/木_zx-nx.canvas": ("zx", "nx"),
    REORG / "五行库/火/火_zn-x.canvas": ("zn", "x"),
    REORG / "五行库/土/土_n-x并z.canvas": ("n", "x并z"),
    REORG / "五行库/金/金_xn-z.canvas": ("xn", "z"),
    REORG / "五行库/水/水_xz-nz.canvas": ("xz", "nz"),
}

ITEM_RE = re.compile(r"^##\s*(\d{2})[｜|]", re.M)
PURITY_RE = re.compile(r"纯度[：:]\*?\*?\s*(\d{1,3})%")
MAP_RE = re.compile(r"\*\*正式十元映射：\*\*\s*主\s*`([^`]+)`／副\s*`([^`]+)`")
DEGREE_LINE_RE = re.compile(r"^\*\*(?:实例十元映射度|映射度模型|类型十元继承映射度)：\*\*.*$", re.M)


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
        missing = sorted(expected - set(purity))
        extra = sorted(set(purity) - expected)
        raise RuntimeError(f"纯度编号不完整：missing={missing}, extra={extra}")
    return purity


def clean_degree_lines(text: str) -> str:
    text = DEGREE_LINE_RE.sub("", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def patch_title(text: str, poles: tuple[str, str]) -> str:
    text = clean_degree_lines(text)
    line = f"**类型十元继承映射度：** `{poles[0]}` 100%｜`{poles[1]}` 100%（完整继承五行轴）"
    marker = "**层级规则：**"
    if marker in text:
        parts = text.splitlines()
        for i, row in enumerate(parts):
            if row.startswith(marker):
                parts.insert(i + 1, line)
                return "\n".join(parts)
    return text + "\n" + line


def patch_card(text: str, purity: dict[int, int]) -> tuple[str, int, int, int]:
    item_match = ITEM_RE.search(text)
    map_match = MAP_RE.search(text)
    if not item_match or not map_match:
        raise RuntimeError("卡片缺编号或正式主副十元")
    item = int(item_match.group(1))
    main, secondary = map_match.group(1), map_match.group(2)
    main_degree = purity[item]
    secondary_degree = 100 - main_degree

    text = clean_degree_lines(text)
    mapping_line = (
        f"**实例十元映射度：** 主 `{main}` {main_degree}%／副 `{secondary}` {secondary_degree}%"
        "（主副双项总和100%）"
    )
    model_line = (
        "**映射度模型：** `provisional_two-pole-normalized`｜"
        "来源：旧纯度迁移｜其余八项暂记0｜十维终审：pending"
    )
    anchor = map_match.group(0)
    text = text.replace(anchor, anchor + "\n" + mapping_line + "\n" + model_line, 1)
    return text, item, main_degree, secondary_degree


def patch_canvases(purity: dict[int, int]) -> tuple[int, int]:
    seen: set[int] = set()
    titles = 0
    for path, poles in ELEMENT_CANVASES.items():
        data = load_canvas(path)
        for node in data.get("nodes", []):
            if node.get("type") != "text":
                continue
            text = node.get("text", "")
            if node.get("id") == "title":
                node["text"] = patch_title(text, poles)
                titles += 1
                continue
            if not ITEM_RE.search(text):
                continue
            patched, item, main_degree, secondary_degree = patch_card(text, purity)
            if main_degree + secondary_degree != 100:
                raise RuntimeError(f"映射度总和错误：{item:02d}")
            if item in seen:
                raise RuntimeError(f"五行卡编号重复：{item:02d}")
            seen.add(item)
            node["text"] = patched
        path.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    if seen != set(range(1, 99)):
        raise RuntimeError(f"五行卡映射度覆盖失败：{len(seen)}/98")
    if titles != 5:
        raise RuntimeError(f"五行类型映射度标题失败：{titles}/5")
    return len(seen), titles


def update_audit(card_count: int, title_count: int) -> None:
    text = AUDIT.read_text(encoding="utf-8")
    text = re.sub(r"\n## 十元映射度审计[\s\S]*$", "", text).rstrip()
    text += f"""

## 十元映射度审计

- 类型轴继承映射度：{title_count}/5
- 实例卡映射度：{card_count}/98
- 每卡主副映射度总和：100%
- 当前模型：`provisional_two-pole-normalized`
- 迁移来源：旧研究纯度
- 其余八个十元：暂记0
- 十维全量终审：pending

```text
类型层：同行两端各100%，表示完整继承，不是实例比例。
实例层：主十元=旧纯度，副十元=100-旧纯度，总和100%。
```

映射度、体量、纯度和证据置信度必须分字段保存，不得互相冒充。
"""
    AUDIT.write_text(text + "\n", encoding="utf-8")


def main() -> None:
    purity = collect_purity()
    card_count, title_count = patch_canvases(purity)
    update_audit(card_count, title_count)
    print(f"ten-yuan mapping degree applied: cards={card_count}, element_types={title_count}")


if __name__ == "__main__":
    main()
