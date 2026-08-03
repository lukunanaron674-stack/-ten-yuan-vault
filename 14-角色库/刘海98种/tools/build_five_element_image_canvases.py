#!/usr/bin/env python3
"""Build image-rich Five-Element bang canvases from the 98-item research library.

The builder deliberately follows the S-grade image evidence skill:
- every displayed image keeps its source page;
- image presence and image authority are separate states;
- one ungraded image makes a card visible, not canonical;
- missing evidence fails the build instead of silently producing text-only cards.
"""

from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path
from typing import Any

BASE = Path(__file__).resolve().parents[1]
REORG = BASE / "02_五行十元重组"
MAPPING_FILE = REORG / "01_98项五行十元分库总表.md"
OVERRIDES_FILE = REORG / "image_evidence_overrides.json"

SOURCE_FILES = [
    BASE / "98种流行女性刘海.canvas",
    BASE / "批次06_斜扫刘海_待合并.canvas",
    BASE / "批次07_中分与长刘海.canvas",
    BASE / "批次08_Baby与Micro刘海.canvas",
    BASE / "批次09_碎剪与羽化刘海.canvas",
    BASE / "批次10_法式与Birkin刘海.canvas",
    BASE / "批次11_宽版与几何切割刘海.canvas",
    BASE / "批次12_框脸与长侧束刘海.canvas",
    BASE / "批次13_卷曲与纹理刘海.canvas",
    BASE / "批次14_复古与造型型刘海.canvas",
]

ELEMENT_META = {
    "木": {"pair": "zx ↔ nx", "yang": "阳木", "yin": "阴木", "color": "4", "variable": "最终方向与作用权来源"},
    "火": {"pair": "zn ↔ x", "yang": "阳火", "yin": "阴火", "color": "1", "variable": "对象独立成立资格与归属方式"},
    "土": {"pair": "n ↔ x并z", "yang": "阳土", "yin": "阴土", "color": "6", "variable": "对象跨越内外边界的方向"},
    "金": {"pair": "xn ↔ z", "yang": "阳金", "yin": "阴金", "color": "5", "variable": "运行权与裁定重心配置"},
    "水": {"pair": "xz ↔ nz", "yang": "阳水", "yin": "阴水", "color": "2", "variable": "可逆性与对象特异回返空间"},
}


def read_text(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(f"缺少源文件：{path}")
    return path.read_text(encoding="utf-8")


def extract_node_texts(raw: str) -> list[str]:
    """Read valid Canvas JSON; fall back to extracting JSON string fields from conflict text."""
    try:
        data = json.loads(raw)
        return [node["text"] for node in data.get("nodes", []) if node.get("type") == "text" and isinstance(node.get("text"), str)]
    except json.JSONDecodeError:
        texts: list[str] = []
        pattern = re.compile(r'"text"\s*:\s*"((?:\\.|[^"\\])*)"')
        for match in pattern.finditer(raw):
            try:
                texts.append(json.loads(f'"{match.group(1)}"'))
            except json.JSONDecodeError:
                continue
        return texts


def parse_mapping() -> dict[str, dict[str, str]]:
    raw = read_text(MAPPING_FILE)
    mapped: dict[str, dict[str, str]] = {}
    element = ""
    polarity = ""
    ten_yuan = ""
    for line in raw.splitlines():
        m_element = re.match(r"^##\s+([木火土金水])｜", line)
        if m_element:
            element = m_element.group(1)
            polarity = ""
            ten_yuan = ""
            continue
        m_polarity = re.match(r"^###\s+(阳[木火土金水]|阴[木火土金水])\s+`([^`]+)`", line)
        if m_polarity:
            polarity, ten_yuan = m_polarity.groups()
            continue
        m_item = re.match(r"^-\s+(\d{2})\s+(.+?)\s*$", line)
        if m_item and element and polarity and ten_yuan:
            number, name = m_item.groups()
            if number in mapped:
                raise ValueError(f"编号重复进入五行库：{number}")
            mapped[number] = {"number": number, "name": name, "element": element, "polarity": polarity, "ten_yuan": ten_yuan}
    expected = {f"{n:02d}" for n in range(1, 99)}
    actual = set(mapped)
    if actual != expected:
        raise ValueError(f"五行总表不是完整98项；缺失={sorted(expected-actual)}，异常={sorted(actual-expected)}")
    return mapped


def extract_source_cards() -> dict[str, dict[str, str]]:
    cards: dict[str, dict[str, str]] = {}
    for source_file in SOURCE_FILES:
        raw = read_text(source_file)
        for text in extract_node_texts(raw):
            title = re.search(r"^##\s*(\d{2})｜([^\n]+)", text, re.MULTILINE)
            if not title:
                continue
            number, original_name = title.groups()
            image_match = re.search(r"!\[[^\]]*\]\((https?://[^\s)]+)\)", text)
            links = re.findall(r"(?<!!)\[[^\]]+\]\((https?://[^\s)]+)\)", text)
            source_url = links[-1] if links else ""
            evidence_match = re.search(r"(?:\*\*视觉证据\*\*|视觉证据)\s*[：:]\s*([^\n]+)", text)
            structure_match = re.search(r"(?:\*\*结构\*\*|\*\*结构：\*\*|结构)\s*[：:]\s*([^\n]+)", text)
            candidate = {
                "original_name": original_name.strip(),
                "image": image_match.group(1) if image_match else "",
                "source": source_url,
                "evidence": evidence_match.group(1).strip() if evidence_match else "",
                "structure": structure_match.group(1).strip() if structure_match else "",
                "source_file": source_file.name,
            }
            current = cards.get(number)
            if current is None or (not current.get("image") and candidate.get("image")):
                cards[number] = candidate
    return cards


def load_evidence() -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, str]]]:
    mapped = parse_mapping()
    cards = extract_source_cards()
    overrides = json.loads(read_text(OVERRIDES_FILE))
    evidence: dict[str, dict[str, Any]] = {}
    for number, info in mapped.items():
        source = cards.get(number, {})
        item: dict[str, Any] = {
            **info,
            "image": source.get("image", ""),
            "source": source.get("source", ""),
            "evidence": source.get("evidence", ""),
            "structure": source.get("structure", ""),
            "source_file": source.get("source_file", ""),
            "grade": "待评",
            "score": None,
            "audit_status": "evidence-pending",
        }
        override = overrides.get(number)
        if override:
            item["image"] = override["image"]
            item["source"] = override["source"]
            item["grade"] = f'{override.get("grade", "待评")}（预评）'
            item["score"] = override.get("score")
            item["audit_status"] = "evidence-audit-pending"
        if not item["image"] or not item["source"]:
            raise ValueError(f'{number} {item["name"]} 缺少图片或来源页。S级图片Skill采用fail-closed，禁止生成文字空壳。')
        evidence[number] = item
    if len(evidence) != 98:
        raise ValueError(f"配图证据数量异常：{len(evidence)}")
    return evidence, mapped


def card_text(item: dict[str, Any]) -> str:
    score = f'{item["score"]}/100' if item["score"] is not None else "待评分"
    evidence_line = item["evidence"] or item["structure"] or "待按S级图片Skill补写六项可见结构证据。"
    return (
        f'## {item["number"]}｜{item["name"]}\n\n![]({item["image"]})\n\n'
        f'**五行归属：** {item["element"]}｜{item["polarity"]} `{item["ten_yuan"]}`\n'
        f'**图片等级：** {item["grade"]}｜**评分：** {score}\n'
        f'**证据状态：** `{item["audit_status"]}`\n\n'
        f'**可见依据：** {evidence_line}\n\n[打开原始来源页面]({item["source"]})'
    )


def add_card_grid(nodes: list[dict[str, Any]], items: list[dict[str, Any]], group_id: str, group_label: str, y_start: int, color: str) -> int:
    cols = 3
    card_w, card_h = 680, 930
    gap_x, gap_y = 80, 80
    rows = max(1, (len(items) + cols - 1) // cols)
    group_x = -1180
    group_w = cols * card_w + (cols - 1) * gap_x + 160
    group_h = rows * card_h + (rows - 1) * gap_y + 220
    nodes.append({"id": group_id, "type": "group", "label": f"{group_label}｜{len(items)}项｜配图证据版", "x": group_x, "y": y_start, "width": group_w, "height": group_h, "color": color})
    for index, item in enumerate(items):
        row, col = divmod(index, cols)
        nodes.append({"id": f'card-{item["number"]}', "type": "text", "text": card_text(item), "x": group_x + 80 + col*(card_w+gap_x), "y": y_start + 120 + row*(card_h+gap_y), "width": card_w, "height": card_h, "color": color})
    return y_start + group_h + 220


def build_element_canvas(element: str, items: list[dict[str, Any]], output_path: Path) -> None:
    meta = ELEMENT_META[element]
    yang_items = [item for item in items if item["polarity"].startswith("阳")]
    yin_items = [item for item in items if item["polarity"].startswith("阴")]
    nodes: list[dict[str, Any]] = [{
        "id": "title", "type": "text",
        "text": f'# {element}库｜{meta["pair"]}｜配图证据版\n\n共{len(items)}项：{meta["yang"]}{len(yang_items)}项／{meta["yin"]}{len(yin_items)}项。\n\n**同轴变量：** {meta["variable"]}\n\n**证据口径：** 每项已经显示一张真实来源参考图；但“有图”不等于“S级通过”。未完成90–100分S图或两张互补A图核验的条目，统一保留 `evidence-pending`，禁止冒充canonical。\n\n[[../../skills/S级_真实参考图片采集/SKILL.md]]\n[[../../02_配图证据审计.md]]\n[[../../00_五行配图总索引.canvas]]',
        "x": -900, "y": -900, "width": 1800, "height": 600, "color": meta["color"]}]
    edges: list[dict[str, Any]] = []
    next_y = add_card_grid(nodes, yang_items, "group-yang", meta["yang"], 0, meta["color"])
    add_card_grid(nodes, yin_items, "group-yin", meta["yin"], next_y, meta["color"])
    edges.extend([
        {"id": "edge-title-yang", "fromNode": "title", "toNode": "group-yang"},
        {"id": "edge-yang-yin", "fromNode": "group-yang", "toNode": "group-yin", "label": f'{element}轴｜阴阳对立统一'},
    ])
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps({"nodes": nodes, "edges": edges, "metadata": {"version": "1.0-1.0", "frontmatter": {}}}, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")


def build_image_index(evidence: dict[str, dict[str, Any]]) -> None:
    counts = Counter(item["element"] for item in evidence.values())
    nodes: list[dict[str, Any]] = [{"id": "title", "type": "text", "text": "# 刘海98种｜五行配图总索引\n\n**图片覆盖：98/98｜当前状态：image-present-audit-pending**\n\n本索引证明五行库不再是文字空壳。每项已有参考图与来源页；图片等级仍按S级Skill继续审计。\n\n[[skills/S级_真实参考图片采集/SKILL.md]]\n[[02_配图证据审计.md]]\n[[00_五行总索引.canvas]]", "x": -700, "y": -800, "width": 1400, "height": 560, "color": "4"}]
    edges: list[dict[str, Any]] = []
    positions = {"木": (-1900,0), "火": (-950,0), "土": (0,0), "金": (950,0), "水": (1900,0)}
    paths = {"木":"五行库/木/木_zx-nx.canvas", "火":"五行库/火/火_zn-x.canvas", "土":"五行库/土/土_n-x并z.canvas", "金":"五行库/金/金_xn-z.canvas", "水":"五行库/水/水_xz-nz.canvas"}
    for element in "木火土金水":
        first = sorted((item for item in evidence.values() if item["element"] == element), key=lambda item:item["number"])[0]
        x,y = positions[element]
        node_id = f"element-{element}"
        nodes.append({"id":node_id, "type":"text", "text":f'## {element}库｜{ELEMENT_META[element]["pair"]}｜{counts[element]}项\n\n![]({first["image"]})\n\n[[{paths[element]}]]\n\n样例：{first["number"]} {first["name"]}\n状态：配图完成，S级逐图审计待完成。', "x":x, "y":y, "width":760, "height":760, "color":ELEMENT_META[element]["color"]})
        edges.append({"id":f"edge-{element}", "fromNode":"title", "toNode":node_id})
    (REORG/"00_五行配图总索引.canvas").write_text(json.dumps({"nodes":nodes,"edges":edges,"metadata":{"version":"1.0-1.0","frontmatter":{}}}, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")


def build_audit(evidence: dict[str, dict[str, Any]]) -> None:
    grades = Counter(item["grade"] for item in evidence.values())
    statuses = Counter(item["audit_status"] for item in evidence.values())
    rows=[]
    for number in sorted(evidence):
        item=evidence[number]
        score=item["score"] if item["score"] is not None else "待评"
        rows.append(f'| {number} | {item["name"]} | {item["element"]} | {item["polarity"]} `{item["ten_yuan"]}` | {item["grade"]} | {score} | `{item["audit_status"]}` | [来源]({item["source"]}) |')
    text=f'''---
type: bangs-five-elements-image-evidence-audit
status: image-present-audit-pending
version: v1.0
updated: 2026-08-03
skill: ../skills/S级_真实参考图片采集/SKILL.md
---

# 刘海98种｜五行配图证据审计

## 当前结论

- 图片覆盖：**98/98**
- 来源页覆盖：**98/98**
- 五行配图Canvas：**5/5**
- 已预评等级：**{sum(v for k,v in grades.items() if "预评" in k)}/98**
- 尚待逐图正式评分：**{grades.get("待评",0)}/98**
- 当前资产状态：`image-present-audit-pending`
- 正式S级通过：**尚未宣称**

“图片已经显示”和“图片证据已经达到S级”是两件事。前者解决本轮缺图，后者仍须执行来源权威、结构可见度、名称一致、比较价值、去重和链接稳定六项评分。

## 状态统计

```text
{json.dumps(dict(statuses), ensure_ascii=False, indent=2)}
```

## 逐项清单

| 编号 | 名称 | 五行 | 阴阳十元 | 图片等级 | 分数 | 状态 | 来源 |
|---:|---|---|---|---|---:|---|---|
{chr(10).join(rows)}
'''
    (REORG/"02_配图证据审计.md").write_text(text, encoding="utf-8")


def rebuild_main_index() -> None:
    counts={"木":18,"火":19,"土":33,"金":18,"水":10}
    nodes=[{"id":"title","type":"text","text":"# 刘海98种｜五行十元总索引\n\n**分类总量：98｜图片覆盖：98/98｜证据状态：audit-pending**\n\n五行＝十元的五组阴阳对立统一轴。\n\n[[00_五行配图总索引.canvas]]\n[[02_配图证据审计.md]]\n[[01_98项五行十元分库总表.md]]\n[[00_说明.md]]","x":-700,"y":-850,"width":1400,"height":620,"color":"4"}]
    edges=[]
    positions={"木":-1900,"火":-950,"土":0,"金":950,"水":1900}
    paths={"木":"五行库/木/木_zx-nx.canvas","火":"五行库/火/火_zn-x.canvas","土":"五行库/土/土_n-x并z.canvas","金":"五行库/金/金_xn-z.canvas","水":"五行库/水/水_xz-nz.canvas"}
    for element in "木火土金水":
        node_id=f"element-{element}"
        nodes.append({"id":node_id,"type":"text","text":f'## {element}｜{ELEMENT_META[element]["pair"]}｜{counts[element]}项\n\n[[{paths[element]}]]\n\n变量：{ELEMENT_META[element]["variable"]}\n内容：编号、图片、原始来源、图片等级、证据状态。',"x":positions[element],"y":0,"width":760,"height":520,"color":ELEMENT_META[element]["color"]})
        edges.append({"id":f"edge-{element}","fromNode":"title","toNode":node_id})
    nodes.append({"id":"rules","type":"text","text":"## 配图与分类规则\n\n1. 五行归属读取正式纠偏后的主十元。\n2. 每项必须显示图片和原始来源页。\n3. 有图不等于S级通过；待评图片不得标canonical。\n4. 一张S图或两张互补A图，才达到正式证据门槛。\n5. 图片失效、错配或重复时，执行fail-closed。","x":-800,"y":850,"width":1600,"height":620,"color":"3"})
    edges.append({"id":"edge-rules","fromNode":"title","toNode":"rules"})
    (REORG/"00_五行总索引.canvas").write_text(json.dumps({"nodes":nodes,"edges":edges,"metadata":{"version":"1.0-1.0","frontmatter":{}}}, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")


def patch_skill_paths() -> None:
    top_skill=BASE/"SKILL.md"
    text=read_text(top_skill).replace("scope: 05-银矿库/角色库/刘海98种","scope: 14-角色库/刘海98种").replace("05-银矿库/角色库/刘海98种/","14-角色库/刘海98种/")
    top_skill.write_text(text, encoding="utf-8")
    five_skill=REORG/"SKILL.md"
    text=read_text(five_skill).replace("scope: 角色库/刘海98种/02_五行十元重组","scope: 14-角色库/刘海98种/02_五行十元重组")
    if "asset_status:" not in text:
        text=text.replace("status: stable\n","status: stable\nasset_status: image-present-audit-pending\n",1)
    if "S级_真实参考图片采集" not in text:
        text += "\n## 配图证据硬依赖\n\n- `../../skills/S级_真实参考图片采集/SKILL.md`\n- 五行Canvas必须显示图片、来源页、图片等级和证据状态。\n- 有图不等于S级通过；未评分条目保留`evidence-pending`。\n"
    five_skill.write_text(text, encoding="utf-8")


def main() -> None:
    evidence,_=load_evidence()
    paths={"木":REORG/"五行库/木/木_zx-nx.canvas","火":REORG/"五行库/火/火_zn-x.canvas","土":REORG/"五行库/土/土_n-x并z.canvas","金":REORG/"五行库/金/金_xn-z.canvas","水":REORG/"五行库/水/水_xz-nz.canvas"}
    for element,output_path in paths.items():
        items=sorted((item for item in evidence.values() if item["element"]==element), key=lambda item:item["number"])
        build_element_canvas(element,items,output_path)
    build_image_index(evidence)
    build_audit(evidence)
    rebuild_main_index()
    patch_skill_paths()
    generated=[*paths.values(),REORG/"00_五行配图总索引.canvas"]
    image_count=0
    for path in generated:
        data=json.loads(read_text(path))
        image_count += sum(node.get("text","").count("![](") for node in data.get("nodes",[]) if node.get("type")=="text")
    if image_count < 103:
        raise ValueError(f"生成后的图片节点不足：{image_count}")
    print("五行配图库生成完成：98/98项，5/5库，状态=image-present-audit-pending")


if __name__ == "__main__":
    main()

# Workflow trigger: the workflow already exists on main before this commit.
