#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

TARGET = Path("09-给674（我）用的库/概念库/时间遗迹_is-a名词素材库.canvas")

GROUP = {
    "id": "grp_time_ruins_scene_refs_b01",
    "type": "group",
    "label": "时间遗迹｜场景参考图卡｜批次01｜时间异常 5项",
    "x": -1220,
    "y": 420,
    "width": 3260,
    "height": 1320,
    "color": "4",
}

CARDS = [
    {
        "source_node": "n38",
        "id": "ref_time_ruins_scene_n38",
        "x": -1120,
        "title": "01｜逆行市集",
        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Drum%20Tower-%20Kaifeng%20Night%20Market%201.jpg?width=900",
        "source": "https://commons.wikimedia.org/wiki/File:Drum_Tower-_Kaifeng_Night_Market_1.jpg",
        "structure": "高密度摊位、人群流线与垂直钟楼共同建立‘日常秩序被时间轴统治’的空间。",
        "translation": "保留热闹市集作为正常层；让行人、蒸汽、布幡和货物流向全部反向，钟面指针逆转。画面必须一眼看出‘人和环境正在倒着发生’，不能只画一个普通夜市。",
        "main": "xz",
        "sub": "xn",
        "volume": "7",
        "purity": "82%",
        "dimensions": "命运／时间",
        "difference": "重点不是钟楼，而是整座市集的因果顺序被反转。钟楼只是让异常具有可读的时间锚点。",
    },
    {
        "source_node": "n39",
        "id": "ref_time_ruins_scene_n39",
        "x": -500,
        "title": "02｜重复黄昏",
        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20sequence.jpg?width=900",
        "source": "https://commons.wikimedia.org/wiki/File:Sunset_sequence.jpg",
        "structure": "同一地平线在连续时间切片中反复出现，固定空间与变化天色形成清晰的循环证据。",
        "translation": "构图位置不动，把同一轮黄昏拆成数段重叠光带；人物每次都回到相同动作，只有微小细节逐轮累积。要表现‘黄昏无法结束’，而不是普通日落延时摄影。",
        "main": "xn",
        "sub": "nz",
        "volume": "6",
        "purity": "86%",
        "dimensions": "时间／命运",
        "difference": "与时间流逝相反，它不是从白天走向黑夜，而是抵达黄昏后被迫重新开始。",
    },
    {
        "source_node": "n40",
        "id": "ref_time_ruins_scene_n40",
        "x": 120,
        "title": "03｜静止战场",
        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Battle%20Scene%20MET%20DP812735.jpg?width=900",
        "source": "https://commons.wikimedia.org/wiki/File:Battle_Scene_MET_DP812735.jpg",
        "structure": "多层人物、骑兵和武器方向构成强烈运动趋势，适合作为‘运动被突然截断’的基础构图。",
        "translation": "不要画战后废墟。应停在冲撞发生前一瞬：箭矢悬空、马蹄不落、尘土凝固、披风保持受力形状；仅允许一个观察者仍能移动。",
        "main": "xn",
        "sub": "z",
        "volume": "8",
        "purity": "88%",
        "dimensions": "时间／现实",
        "difference": "‘静止’必须通过未完成动作证明。尸体和空战场只能说明战争结束，不能说明时间停止。",
    },
    {
        "source_node": "n41",
        "id": "ref_time_ruins_scene_n41",
        "x": 740,
        "title": "04｜加速花园",
        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hibiscus%20mutabilis%2C%20changing%20colors.jpg?width=900",
        "source": "https://commons.wikimedia.org/wiki/File:Hibiscus_mutabilis,_changing_colors.jpg",
        "structure": "同一朵花在一日内连续变色，天然提供生长、成熟和衰败的阶段序列。",
        "translation": "把不同生长阶段压进同一花园：一侧破土，中段盛放，另一侧枯萎结籽；藤蔓可沿建筑快速攀爬。画面核心是生命速度异常，而不是单纯花很多。",
        "main": "xn",
        "sub": "zn",
        "volume": "6",
        "purity": "84%",
        "dimensions": "时间／本体",
        "difference": "与四季花园不同，所有阶段发生在同一时刻、同一空间，并形成可追踪的加速方向。",
    },
    {
        "source_node": "n42",
        "id": "ref_time_ruins_scene_n42",
        "x": 1360,
        "title": "05｜年龄错位旅店",
        "image": "https://commons.wikimedia.org/wiki/Special:FilePath/RooseveltMysteryLadyClockJuly09.JPG?width=900",
        "source": "https://commons.wikimedia.org/wiki/File:RooseveltMysteryLadyClockJuly09.JPG",
        "structure": "旧式旅店大堂、人物雕像与大型时钟共同形成‘身份被年代保存’的室内时间锚点。",
        "translation": "让同一住客以儿童、青年、老年三种年龄同时出现，并用相同衣物、行李或伤痕证明是同一人。前台房号与钟表时间互相矛盾，旅店像在分配年龄。",
        "main": "xz",
        "sub": "xn",
        "volume": "7",
        "purity": "85%",
        "dimensions": "命运／时间",
        "difference": "不是普通老旅馆，也不是不同年龄客人的群像；必须明确表现同一身份被拆分到不同年龄。",
    },
]


def card_text(card: dict[str, str]) -> str:
    return (
        f"## {card['title']}\n\n"
        f"![]({card['image']})\n\n"
        f"**参考图结构**：{card['structure']}\n\n"
        f"**转成场景时**：{card['translation']}\n\n"
        f"**主十元**：{card['main']}　**副十元**：{card['sub']}\n"
        f"**体量**：{card['volume']}　**纯度**：{card['purity']}\n"
        f"**五维**：{card['dimensions']}\n\n"
        f"**区别**：{card['difference']}\n\n"
        f"[参考图来源｜Wikimedia Commons]({card['source']})\n\n"
        "*仅作视觉研究与构图参考，不冒充原创图。*"
    )


def upsert(nodes: list[dict[str, Any]], node: dict[str, Any]) -> None:
    for i, existing in enumerate(nodes):
        if str(existing.get("id")) == str(node["id"]):
            nodes[i] = node
            return
    nodes.append(node)


def main() -> None:
    data = json.loads(TARGET.read_text(encoding="utf-8"))
    nodes = data.setdefault("nodes", [])
    edges = data.setdefault("edges", [])

    source_ids = {str(node.get("id")) for node in nodes}
    required = {card["source_node"] for card in CARDS}
    missing = sorted(required - source_ids)
    if missing:
        raise SystemExit(f"missing source scene nodes: {missing}")

    upsert(nodes, GROUP)
    for card in CARDS:
        upsert(
            nodes,
            {
                "id": card["id"],
                "type": "text",
                "text": card_text(card),
                "x": card["x"],
                "y": 540,
                "width": 560,
                "height": 1120,
                "color": "6",
            },
        )
        edge_id = f"e_{card['source_node']}_{card['id']}"
        edge = {
            "id": edge_id,
            "fromNode": card["source_node"],
            "fromSide": "bottom",
            "toNode": card["id"],
            "toSide": "top",
        }
        for i, existing in enumerate(edges):
            if str(existing.get("id")) == edge_id:
                edges[i] = edge
                break
        else:
            edges.append(edge)

    ids = [str(node.get("id")) for node in nodes]
    if len(ids) != len(set(ids)):
        raise SystemExit("duplicate node ids after update")
    edge_ids = [str(edge.get("id")) for edge in edges]
    if len(edge_ids) != len(set(edge_ids)):
        raise SystemExit("duplicate edge ids after update")

    for card in CARDS:
        node = next(node for node in nodes if str(node.get("id")) == card["id"])
        text = str(node.get("text", ""))
        if "![](https://commons.wikimedia.org/" not in text:
            raise SystemExit(f"missing external reference image: {card['id']}")
        if "**参考图结构**" not in text or "**转成场景时**" not in text:
            raise SystemExit(f"missing analysis text: {card['id']}")

    TARGET.write_text(json.dumps(data, ensure_ascii=False, indent="\t") + "\n", encoding="utf-8")
    print("added 5 real-reference scene cards to 时间遗迹")


if __name__ == "__main__":
    main()
