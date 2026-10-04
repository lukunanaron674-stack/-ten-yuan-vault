#!/usr/bin/env python3
"""从刘海98种原研究Canvas重建五行完整研究视图。

原则：
1. 原研究库是内容正本，五行库只是重组视图。
2. 五大主题与五行分层记录，不把木火土金水等同于因果本体空间时间命运。
3. 图片保留外部研究引用与来源页，不复制版权原图到公开仓库。
4. 98项必须唯一、齐全、带图、带来源、带正式主副十元和原研究链接。
"""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REORG = ROOT / "02_五行十元重组"

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

ELEMENTS = {
    "木": {
        "yang": "zx", "yin": "nx", "color": "4",
        "axis": "方向与作用权来源",
        "yang_items": [21, 36, 49, 63, 69, 98],
        "yin_items": [1, 4, 7, 18, 27, 32, 46, 52, 58, 67, 80, 83],
        "path": REORG / "五行库/木/木_zx-nx.canvas",
    },
    "火": {
        "yang": "zn", "yin": "x", "color": "1",
        "axis": "对象独立成立资格与归属方式",
        "yang_items": [20, 30, 51, 65, 70, 85, 89, 91],
        "yin_items": [12, 42, 53, 54, 60, 71, 72, 73, 74, 75, 93],
        "path": REORG / "五行库/火/火_zn-x.canvas",
    },
    "土": {
        "yang": "n", "yin": "x并z", "color": "6",
        "axis": "对象跨越内外边界的方向",
        "yang_items": [3, 11, 14, 15, 16, 22, 25, 26, 29, 33, 37, 43, 59, 64, 68, 78, 79, 81, 84, 90, 92],
        "yin_items": [6, 9, 31, 35, 39, 41, 55, 77, 82, 87, 95, 96],
        "path": REORG / "五行库/土/土_n-x并z.canvas",
    },
    "金": {
        "yang": "xn", "yin": "z", "color": "5",
        "axis": "运行权与裁定重心配置",
        "yang_items": [8, 10, 13, 24, 28, 34, 45, 47, 66, 76, 88],
        "yin_items": [5, 17, 38, 50, 56, 62, 94],
        "path": REORG / "五行库/金/金_xn-z.canvas",
    },
    "水": {
        "yang": "xz", "yin": "nz", "color": "2",
        "axis": "可逆性与对象特异回返空间",
        "yang_items": [2, 19, 23, 40, 44, 57, 61, 86, 97],
        "yin_items": [48],
        "path": REORG / "五行库/水/水_xz-nz.canvas",
    },
}

CORRECTIONS = {
    1: ("nx", "xn"), 2: ("xz", "zn"), 4: ("nx", "zn"), 5: ("z", "zn"),
    13: ("xn", "n"), 18: ("nx", "n"), 24: ("xn", "n"), 41: ("x并z", "zx"),
    69: ("zx", "nx"), 71: ("x", "n"), 72: ("x", "n"), 93: ("x", "xn"),
}

IMAGE_OVERRIDE = {
    74: {
        "image": "https://media.allure.com/photos/6406424d283a8ad09c3d212d/16%3A9/w_2560%2Cc_limit/gabrielle%2520union%25202023.jpg",
        "source": "https://www.allure.com/story/gabrielle-union-blunt-bangs-paris-fashion-week-2023",
        "note": "替换与12号重复的旧图；新图用于证明太阳穴处清晰截断与宽幅厚刘海面。",
    }
}

ITEM_RE = re.compile(r"^##\s*(\d{2})[｜|]\s*(.+?)\s*$", re.M)
IMG_RE = re.compile(r"!\[\]\((https?://[^)]+)\)")
LINK_RE = re.compile(r"\[[^\]]*(?:来源|来源页|真实参考)[^\]]*\]\((https?://[^)]+)\)")
INLINE_MAP_RE = re.compile(r"主\s*`([^`]+)`[^\n]*副\s*`([^`]+)`")
BULLET_MAIN_RE = re.compile(r"-\s*主[：:]\s*`([^`]+)`")
BULLET_SUB_RE = re.compile(r"-\s*副[：:]\s*`([^`]+)`")


def load_canvas(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    if any(marker in text for marker in ("<<<<<<<", "=======", ">>>>>>>")):
        raise RuntimeError(f"发现未解决Git冲突：{path}")
    return json.loads(text)


def source_link_for(item: int) -> str:
    if item <= 35:
        return "../../../98种流行女性刘海.canvas"
    batch = (item - 1) // 7 + 1
    names = {
        6: "批次06_斜扫刘海_待合并.canvas",
        7: "批次07_中分与长刘海.canvas",
        8: "批次08_Baby与Micro刘海.canvas",
        9: "批次09_碎剪与羽化刘海.canvas",
        10: "批次10_法式与Birkin刘海.canvas",
        11: "批次11_宽版与几何切割刘海.canvas",
        12: "批次12_框脸与长侧束刘海.canvas",
        13: "批次13_卷曲与纹理刘海.canvas",
        14: "批次14_复古与造型型刘海.canvas",
    }
    return f"../../../{names[batch]}"


def clean_body(text: str) -> str:
    lines = text.splitlines()
    out: list[str] = []
    skip_map_heading = False
    for i, line in enumerate(lines):
        if i == 0 and ITEM_RE.match(line):
            continue
        if IMG_RE.search(line) or LINK_RE.search(line):
            continue
        if line.strip() == "**十元映射**":
            skip_map_heading = True
            continue
        if skip_map_heading and re.match(r"\s*-\s*(主|副)[：:]", line):
            continue
        if skip_map_heading and line.strip() and not re.match(r"\s*-\s*(主|副)[：:]", line):
            skip_map_heading = False
        if "**十元：**" in line:
            continue
        line = line.replace("**五维：**", "**五大主题标签（原研究）：**")
        line = line.replace("- 五维：", "- 五大主题标签（原研究）：")
        out.append(line)
    while out and not out[0].strip():
        out.pop(0)
    while out and not out[-1].strip():
        out.pop()
    return "\n".join(out)


def extract_mapping(text: str, item: int, fallback_main: str) -> tuple[str, str]:
    if item in CORRECTIONS:
        return CORRECTIONS[item]
    m = INLINE_MAP_RE.search(text)
    if m:
        return m.group(1), m.group(2)
    m1, m2 = BULLET_MAIN_RE.search(text), BULLET_SUB_RE.search(text)
    return (m1.group(1) if m1 else fallback_main, m2.group(1) if m2 else "待核")


def collect_research() -> dict[int, dict]:
    result: dict[int, dict] = {}
    for path in SOURCE_FILES:
        data = load_canvas(path)
        for node in data.get("nodes", []):
            if node.get("type") != "text":
                continue
            text = node.get("text", "")
            m = ITEM_RE.search(text)
            if not m:
                continue
            item = int(m.group(1))
            if item in result:
                raise RuntimeError(f"研究原库编号重复：{item:02d}")
            result[item] = {
                "name": m.group(2).strip(),
                "text": text,
                "body": clean_body(text),
                "source_canvas": source_link_for(item),
            }
    return result


def collect_images() -> dict[int, dict]:
    result: dict[int, dict] = {}
    for cfg in ELEMENTS.values():
        data = load_canvas(cfg["path"])
        for node in data.get("nodes", []):
            if node.get("type") != "text":
                continue
            text = node.get("text", "")
            m = ITEM_RE.search(text)
            if not m:
                continue
            item = int(m.group(1))
            im = IMG_RE.search(text)
            src = LINK_RE.search(text)
            result[item] = {
                "image": im.group(1) if im else "",
                "source": src.group(1) if src else "",
            }
    for item, override in IMAGE_OVERRIDE.items():
        result[item] = {"image": override["image"], "source": override["source"]}
    return result


def make_card(item: int, side: str, element: str, symbol: str, research: dict, image: dict, color: str, x: int, y: int) -> dict:
    main, sub = extract_mapping(research["text"], item, symbol)
    note = IMAGE_OVERRIDE.get(item, {}).get("note", "")
    text = (
        f"## {item:02d}｜{research['name']}\n\n"
        f"![]({image['image']})\n\n"
        f"**五行归属：** {side}{element} `{symbol}`\n"
        f"**正式十元映射：** 主 `{main}`／副 `{sub}`\n"
        f"**图片模式：** 外部研究引用，不复制版权原图\n"
    )
    if note:
        text += f"**配图纠偏：** {note}\n"
    if research["body"]:
        text += f"\n{research['body']}\n"
    text += (
        f"\n[图像来源页]({image['source']})"
        f"　[[{research['source_canvas']}|打开原研究Canvas]]"
    )
    return {
        "id": f"item-{item:02d}", "type": "text", "text": text,
        "x": x, "y": y, "width": 760, "height": 1250, "color": color,
    }


def build_element(element: str, cfg: dict, research: dict[int, dict], images: dict[int, dict]) -> None:
    nodes: list[dict] = [{
        "id": "title", "type": "text",
        "text": (
            f"# {element}库｜{cfg['yang']} ↔ {cfg['yin']}｜完整研究配图版\n\n"
            f"**五行轴：** {cfg['axis']}\n"
            "**分层规则：** 五行归属与五大主题标签分别记录，二者不互相冒充。\n"
            "**图片策略：** 保留外部研究图与来源页；公开仓库不复制版权原图。\n"
            f"**数量：** {len(cfg['yang_items']) + len(cfg['yin_items'])}项。"
        ),
        "x": -900, "y": -850, "width": 1800, "height": 560, "color": cfg["color"],
    }]
    edges: list[dict] = []
    y = 0
    for side_key, side_name, symbol in (("yang_items", "阳", cfg["yang"]), ("yin_items", "阴", cfg["yin"])):
        items = cfg[side_key]
        rows = (len(items) + 2) // 3
        group_id = f"group-{side_name}"
        nodes.append({
            "id": group_id, "type": "group",
            "label": f"{side_name}{element} {symbol}｜{len(items)}项｜完整研究卡",
            "x": -1250, "y": y, "width": 2500, "height": rows * 1320 + 180, "color": cfg["color"],
        })
        for idx, item in enumerate(items):
            if item not in research:
                raise RuntimeError(f"缺研究条目：{item:02d}")
            if item not in images or not images[item]["image"] or not images[item]["source"]:
                raise RuntimeError(f"缺图片或来源：{item:02d}")
            x = -1150 + (idx % 3) * 820
            card_y = y + 100 + (idx // 3) * 1320
            nodes.append(make_card(item, side_name, element, symbol, research[item], images[item], cfg["color"], x, card_y))
        edges.append({"id": f"edge-{side_name}", "fromNode": "title", "toNode": group_id})
        y += rows * 1320 + 420
    cfg["path"].parent.mkdir(parents=True, exist_ok=True)
    cfg["path"].write_text(json.dumps({"nodes": nodes, "edges": edges, "metadata": {"version": "1.0-1.0", "frontmatter": {}}}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def write_audit(research: dict[int, dict], images: dict[int, dict]) -> None:
    expected = set(range(1, 99))
    missing_research = sorted(expected - set(research))
    missing_images = sorted(i for i in expected if i not in images or not images[i].get("image"))
    urls: dict[str, list[int]] = defaultdict(list)
    for item in expected:
        if item in images and images[item].get("image"):
            urls[images[item]["image"]].append(item)
    duplicates = {url: ids for url, ids in urls.items() if len(ids) > 1}
    lines = [
        "---", "type: bangs-five-elements-audit", "status: generated", "version: v1.1", "---", "",
        "# 刘海98种｜五行完整研究卡审计", "",
        f"- 研究条目：{len(research)}/98",
        f"- 配图条目：{sum(1 for i in expected if i in images and images[i].get('image'))}/98",
        f"- 唯一图片URL：{len(urls)}",
        f"- 重复图片组：{len(duplicates)}",
        "- 图片模式：外部研究引用；版权原图不复制进公开仓库。", "",
        "## 缺项", "",
        f"- 缺研究：{missing_research or '无'}",
        f"- 缺配图：{missing_images or '无'}", "",
        "## 重复图片", "",
    ]
    if duplicates:
        for url, ids in sorted(duplicates.items(), key=lambda kv: kv[1]):
            lines.append(f"- {', '.join(f'{i:02d}' for i in ids)}｜{url}")
    else:
        lines.append("- 无。98项图片URL均唯一。")
    lines += ["", "## 强制规则", "", "1. 禁止Git冲突标记进入Canvas。", "2. 禁止五行Canvas退化为只有编号和名称的文字清单。", "3. 每项必须同时具有图片、来源页、正式十元、结构研究和原Canvas链接。", "4. 五大主题与五行分别记录。"]
    (REORG / "02_图片与结构审计报告.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    research = collect_research()
    images = collect_images()
    if set(research) != set(range(1, 99)):
        raise RuntimeError(f"研究编号不完整：{len(research)}/98")
    for element, cfg in ELEMENTS.items():
        build_element(element, cfg, research, images)
    write_audit(research, images)
    print("rebuilt: 98/98")


if __name__ == "__main__":
    main()
