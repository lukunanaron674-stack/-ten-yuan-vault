#!/usr/bin/env python3
"""Build batch04 local-image hairstyle Canvas in 05 library.

Rules source: 14-角色库/刘海98种/skills/S级_真实参考图片采集/SKILL.md
Output stays in 05-银矿库. Image-present is not treated as S-grade canonical evidence.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSET_PREFIX = "05-银矿库/角色库/发型库总表/assets/refs/batch04"

ITEMS = [
    {
        "n": "01", "name": "超长披发", "en": "Very Long Hair", "file": "04_01_very_long_hair.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Woman_with_very_long_hair.JPG",
        "license": "CC BY-SA 3.0 / GFDL", "author": "Peter van der Sluijs",
        "layer": "长度轮廓", "variable": "主体长度超过腰部，形成连续纵向垂坠体",
        "structure": "无主束点；主体自由披落；长度成为第一识别变量。",
        "subtypes": "齐切超长发、层次超长发、直发、波浪发。",
        "exclude": "胸长或腰长但不形成超长纵向体者，仍归普通长发。",
        "ten": "纵向连续可偏 n／zn；重量和停靠可出现 nz。",
    },
    {
        "n": "02", "name": "中长卷发", "en": "Medium Curly Hair", "file": "04_02_curly_hair.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Woman_with_curly_brown_hairstyle.jpg",
        "license": "CC BY-SA 4.0", "author": "Alex Neman",
        "layer": "纹理", "variable": "发丝沿长度形成连续C弯与S波",
        "structure": "卷径中等；发中至发尾起卷；脸侧和肩部出现重复曲线。",
        "subtypes": "大卷、中卷、小卷、规则卷、松散卷。",
        "exclude": "只在发尾一次内扣不算卷发家族；临时风吹不算卷度。",
        "ten": "重复节律可偏 xn／n；不等向漂移可增加 xz。",
    },
    {
        "n": "03", "name": "经典公主切", "en": "Classic Hime Cut", "file": "04_03_hime_cut.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Hime_cut.jpg",
        "license": "CC BY-SA 3.0 / CC BY 2.5 / GFDL", "author": "Kaede",
        "layer": "剪裁结构", "variable": "脸侧独立平切短片与长发主体形成硬断层",
        "structure": "两侧短片近水平；后部主体明显更长；前中后三段长度可读。",
        "subtypes": "经典单层、双层姬切、无刘海姬切、短公主切。",
        "exclude": "普通脸周层次没有独立水平切片，不能归公主切。",
        "ten": "断层与切口偏 z／x；侧片向脸部作用可出现 zx。",
    },
    {
        "n": "04", "name": "低双马尾", "en": "Low Pigtails", "file": "04_04_pigtails.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Smiling_woman_with_pigtails.JPG",
        "license": "CC BY-SA 3.0 / GFDL", "author": "Justso",
        "layer": "双束扎发", "variable": "左右两个低位主束点同时成立",
        "structure": "中线分区；束点靠近耳下或后颈；尾部左右分离垂落。",
        "subtypes": "低双马尾、高双马尾、卷双马尾、半双马尾。",
        "exclude": "单束马尾不属于双马尾；左右辫发需另叠加编发层。",
        "ten": "左右对称偏 xn；低位垂落和停靠可偏 nz／n。",
    },
    {
        "n": "05", "name": "半马尾", "en": "Half Ponytail", "file": "04_05_half_ponytail.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Half_Ponytail.JPG",
        "license": "CC BY-SA 3.0 / GFDL", "author": "Stilfehler",
        "layer": "部分扎束", "variable": "仅上半区进入主束点，下半区保持披落",
        "structure": "冠部发片被收束；耳下与后部主体仍自由垂落。",
        "subtypes": "高半马尾、低半马尾、半丸子、扭转半扎。",
        "exclude": "全部头发进入束点属于完整马尾；全部收纳属于盘发。",
        "ten": "上收下放形成 n／nx 的接入与让位；高束可增加 zx。",
    },
    {
        "n": "06", "name": "法式扭转盘发", "en": "French Twist", "file": "04_06_french_twist.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:French_Twist_Close-up_1.JPG",
        "license": "CC BY-SA 3.0 / GFDL", "author": "Stilfehler",
        "layer": "盘发结构", "variable": "长发沿后脑纵轴扭转并收纳成封闭体",
        "structure": "后部形成单一竖向卷脊；发尾被折入或隐藏；颈线清楚。",
        "subtypes": "经典法式扭转、低位扭转、松散扭转、编织扭转。",
        "exclude": "团状丸子头没有纵向卷脊；低发髻主要为横向或团状收纳。",
        "ten": "收纳壳体可偏 x并z／xn；纵向扭转路线可出现 zx。",
    },
    {
        "n": "07", "name": "鱼骨辫", "en": "Fishtail Braid", "file": "04_07_fishtail_braid.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Fishtail_Braid.JPG",
        "license": "CC BY-SA 3.0 / GFDL", "author": "Stilfehler",
        "layer": "编发结构", "variable": "细束从左右交替跨入中心形成鱼骨纹",
        "structure": "中轴清晰；斜向小束高频交替；辫体比三股辫更细密。",
        "subtypes": "标准鱼骨辫、法式鱼骨辫、四面鱼骨辫、双鱼骨辫。",
        "exclude": "三股辫只有三条主束循环；绳辫以双股扭转为主。",
        "ten": "重复等距偏 xn；交替接入偏 n；向下推进可出现 zx。",
    },
    {
        "n": "08", "name": "Afro圆形自然卷", "en": "Afro", "file": "04_08_afro.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Natural_redhead_black_girl_(red_power_hairstyle).jpg",
        "license": "CC BY 2.0", "author": "Erik Jacobs",
        "layer": "自然纹理／体量轮廓", "variable": "紧密自然卷在头部周围形成高体量圆形外轮廓",
        "structure": "发根至发尾持续紧卷；轮廓向四周扩张；不依赖单一束点。",
        "subtypes": "圆形Afro、短Afro、拉长Afro、Afro puff。",
        "exclude": "普通大卷不形成均匀外扩体；Afro puff另含束点结构。",
        "ten": "原生纹理偏 zn；强外轮廓偏 x；连续承载偏 n。",
    },
    {
        "n": "09", "name": "Locs锁发", "en": "Locs / Dreadlocks", "file": "04_09_locs.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Rashida_S._-_Woman_with_dreadlocks.jpg",
        "license": "CC BY-SA 2.0", "author": "rashida s. mar b.",
        "layer": "束状长期结构", "variable": "发丝长期缠结并形成多个独立绳索状束体",
        "structure": "束体从发根持续到发尾；截面厚度稳定；可披落、扎束或盘起。",
        "subtypes": "Freeform locs、细locs、粗locs、短locs、扎束locs。",
        "exclude": "临时绳辫可拆解且纹理规则；locs为长期形成的独立束体。",
        "ten": "独立束体边界偏 x／zn；多束承载关系可偏 n。",
    },
    {
        "n": "10", "name": "塞内加尔辫／保护性编发", "en": "Senegalese Braids", "file": "04_10_senegalese_braids.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Senegalese_braids.jpg",
        "license": "CC BY-SA 4.0", "author": "Senegal coiffure",
        "layer": "保护性编发", "variable": "头皮多区分线与大量细长编束共同成立",
        "structure": "发根分区清楚；多束从头皮持续下垂；重复密度高。",
        "subtypes": "细辫、粗辫、长辫、马尾式保护性编发。",
        "exclude": "单条或双条普通辫不具备高密度多区结构；locs不是规则编织。",
        "ten": "分区重复偏 xn；长束接入偏 n；功能性保护可出现 zx。",
    },
    {
        "n": "11", "name": "齐切Bob", "en": "Blunt Bob", "file": "04_11_blunt_bob.jpg",
        "source": "https://commons.wikimedia.org/wiki/File:Woman_with_bob_haircut.jpg",
        "license": "CC BY-SA 4.0", "author": "Alex Neman",
        "layer": "短发长度／重量线", "variable": "下缘在后颈至下颌区形成连续齐切重量线",
        "structure": "周边长度近一致；发尾集中；轮廓形成清晰横向底边。",
        "subtypes": "下巴Bob、法式Bob、长Bob、A-line Bob、钝切Bob。",
        "exclude": "Pixie没有完整周边重量线；渐层Bob后部层次明显堆叠。",
        "ten": "硬底边偏 x／z；齐整节拍偏 xn；内扣停靠可出现 nz。",
    },
]


def main() -> None:
    asset_dir = ROOT / "assets/refs/batch04"
    missing = [item["file"] for item in ITEMS if not (asset_dir / item["file"]).is_file()]
    if missing:
        raise FileNotFoundError(f"缺少本地配图，fail-closed：{missing}")

    nodes: list[dict] = [{
        "id": "title", "type": "text",
        "text": (
            "# 女性发型库总表｜本地配图证据批次04\n\n"
            "**05库执行｜14库S级配图Skill规则**\n\n"
            "新增11个主要结构类型。图片均为开放许可本地资产，保留来源、作者与许可。"
            "状态统一为 `image-present / evidence-audit-pending`，不冒充S级canonical。\n\n"
            "水母头因未找到足够可靠的开放许可结构证据，按fail-closed暂不入库。"
        ),
        "x": -1500, "y": -1000, "width": 3000, "height": 360, "color": "4",
    }]
    edges: list[dict] = []

    for index, item in enumerate(ITEMS):
        row, col = divmod(index, 2)
        base_x = -1500 + col * 1450
        base_y = -500 + row * 720
        ref_id = f"ref-{item['n']}"
        src_id = f"src-{item['n']}"
        card_id = f"card-{item['n']}"
        nodes.append({
            "id": ref_id, "type": "file",
            "file": f"{ASSET_PREFIX}/{item['file']}",
            "x": base_x, "y": base_y, "width": 470, "height": 430,
        })
        nodes.append({
            "id": src_id, "type": "text",
            "text": (
                f"[来源与许可页面]({item['source']})\n\n"
                f"作者：{item['author']}｜许可：{item['license']}"
            ),
            "x": base_x, "y": base_y + 445, "width": 470, "height": 125, "color": "6",
        })
        nodes.append({
            "id": card_id, "type": "text",
            "text": (
                f"# {item['n']}｜{item['name']}\n### {item['en']}\n\n"
                f"**层级：** {item['layer']}\n"
                f"**一级结构变量：** {item['variable']}\n"
                f"**结构：** {item['structure']}\n"
                f"**主要子型：** {item['subtypes']}\n"
                f"**排除：** {item['exclude']}\n"
                f"**十元入口：** {item['ten']}\n"
                "**证据状态：** `image-present / evidence-audit-pending`"
            ),
            "x": base_x + 530, "y": base_y, "width": 820, "height": 570,
            "color": str(index % 6 + 1),
        })
        edges.append({
            "id": f"edge-{item['n']}", "fromNode": ref_id, "fromSide": "right",
            "toNode": card_id, "toSide": "left",
        })

    canvas = {"nodes": nodes, "edges": edges, "metadata": {"version": "1.0", "frontmatter": {}}}
    (ROOT / "女性发型库总表_本地配图证据批次04.canvas").write_text(
        json.dumps(canvas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    manifest = [
        "# 批次04｜开放许可图片清单", "",
        "规则来源：`14-角色库/刘海98种/skills/S级_真实参考图片采集/SKILL.md`", "",
    ]
    for item in ITEMS:
        manifest.extend([
            f"## {item['n']}｜{item['name']}",
            f"- 本地文件：`assets/refs/batch04/{item['file']}`",
            f"- 来源：{item['source']}",
            f"- 作者：{item['author']}",
            f"- 许可：{item['license']}",
            "- 状态：`evidence-audit-pending`", "",
        ])
    (ROOT / "批次04_开放许可图片清单.md").write_text("\n".join(manifest) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
