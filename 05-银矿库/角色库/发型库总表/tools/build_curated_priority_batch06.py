#!/usr/bin/env python3
from __future__ import annotations

import json
import shutil
import urllib.request
from pathlib import Path

ROOT = Path('05-银矿库/角色库/发型库总表')
ASSET_DIR = ROOT / 'assets/refs/batch06'
CANVAS_PATH = ROOT / '女性发型库总表_定向配图批次06.canvas'
MANIFEST_PATH = ROOT / '批次06_定向来源清单.md'

ITEMS = [
    {
        'id': '01', 'name': '水母头', 'en': 'Jellyfish Cut',
        'filename': '06_01_jellyfish_cut.jpg',
        'image_url': 'https://media.allure.com/photos/67c9eb36e016c8a140af2783/16:9/w_2560,c_limit/lady%20gaga%20jellyfish.jpg',
        'source': 'https://www.allure.com/story/lady-gaga-jellyfish-bob-haircut',
        'credit': 'Allure / Getty Images',
        'variable': '外层短Bob壳与内层超长发形成清晰双层断差',
        'structure': '上层围绕脸部形成短而钝的壳体，下层从后部继续垂落；上下两层不能融合成普通长层次。',
        'exclude': '只有脸周短层但没有独立Bob壳，不算水母头；普通公主切的决定性证据是脸侧平切片。',
        'ten': '双层外壳偏 x并z；硬断层偏 x／z；下层延续可出现 n。',
    },
    {
        'id': '02', 'name': '蝴蝶剪', 'en': 'Butterfly Cut',
        'filename': '06_02_butterfly_cut.jpg',
        'image_url': 'https://media.allure.com/photos/6478c843dcb0964571c05f92/master/w_1600,c_limit/blondebutterflyhaircut.jpg',
        'source': 'https://www.allure.com/story/butterfly-haircut-trend',
        'credit': 'Allure / courtesy of @modestspotcarrillo',
        'variable': '短脸周层与肩下长层形成两级外翻体量',
        'structure': '顶部和脸周层向外翻卷，长层保留长度与流动；整体轻盈蓬松，不形成硬壳。',
        'exclude': '普通长层次若没有显著短层体量与外翻方向，不归蝴蝶剪；章鱼剪下端更细碎下垂。',
        'ten': '外扩动作偏 zx；层次连续偏 n；蓬松显现可出现 z。',
    },
    {
        'id': '03', 'name': '章鱼剪', 'en': 'Octopus Cut',
        'filename': '06_03_octopus_cut.png',
        'image_url': 'https://media.allure.com/photos/61ef0f5be4f771470edeb419/16:9/w_2560,c_limit/octopus%20haircut.png',
        'source': 'https://www.allure.com/story/octopus-haircut-trend',
        'credit': 'Allure / courtesy of Shag! London',
        'variable': '顶部圆形高层体量与下端细长触须状发尾并置',
        'structure': '头部上半区近圆形，内部是极端Shag层次；底部保留多条细长、稀薄、分离的发尾。',
        'exclude': '狼尾强调前短后长与后颈尾部；章鱼剪强调圆头体与多条下垂“触须”。',
        'ten': '上部壳体偏 x并z；下端漂移偏 xz；纵向触须延续可偏 n。',
    },
    {
        'id': '04', 'name': 'Cornrows贴头辫', 'en': 'Cornrows',
        'filename': '06_04_cornrows.jpg',
        'image_url': 'https://media.allure.com/photos/5ebc66c40c413a0008c18c84/16:9/w_2560,c_limit/woman%20with%20long%20hair%20cornrows.jpg',
        'source': 'https://www.allure.com/story/how-to-cornrow-your-own-hair-tips',
        'credit': 'Allure / Getty Images',
        'variable': '多条编织轨道直接贴附头皮并沿固定方向推进',
        'structure': '发根分区清楚；每条辫子在推进时持续接入头皮新发束；轨道可直线、曲线或几何排列。',
        'exclude': '普通三股辫只从束点之后自由垂落；Box Braids以独立方格分区和自由辫束为主。',
        'ten': '持续接入偏 n；等距分区偏 xn；向后推进可出现 zx。',
    },
    {
        'id': '05', 'name': '塞内加尔扭辫', 'en': 'Senegalese Twists',
        'filename': '06_05_senegalese_twists.jpg',
        'image_url': 'https://media.allure.com/photos/5a568a0ed490792dacb03a9f/16:9/w_2560,c_limit/GettyImages-903126546.jpg',
        'source': 'https://www.allure.com/story/lupita-nyongo-senegalese-twists',
        'credit': 'Allure / Getty Images',
        'variable': '大量双股发束以绳索状扭转纹理独立垂落',
        'structure': '每束由两股持续同向扭转；外观比Box Braids更圆、更像绳索；可扎高、盘起或披落。',
        'exclude': '三股辫存在三束交替覆盖；Locs是长期缠结形成，不是规则双股扭转。',
        'ten': '双股规则偏 xn；独立束体偏 x；大量长束承载偏 n。',
    },
    {
        'id': '06', 'name': 'Bantu Knots班图结', 'en': 'Bantu Knots',
        'filename': '06_06_bantu_knots.jpg',
        'image_url': 'https://media.allure.com/photos/643ed2a51f1574d5ae9f779b/16:9/w_2560,c_limit/gabrielle%20union%20bantu%20knots%20.jpg',
        'source': 'https://www.allure.com/story/gabrielle-union-jumbo-bantu-knots',
        'credit': 'Allure / Getty Images',
        'variable': '头皮被分成多个独立区块，每区发束扭转后盘成凸起结体',
        'structure': '分区边界可见；每个结拥有独立中心；结体均匀分布于头顶、侧面和后部。',
        'exclude': '双丸子只有两个主结点；普通小发髻没有全头多区重复结构。',
        'ten': '重复分区偏 xn；独立结体边界偏 x；多点承载偏 n。',
    },
]


def download(url: str, path: Path) -> None:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 hairstyle-reference-research/1.0'})
    with urllib.request.urlopen(req, timeout=90) as response, path.open('wb') as out:
        shutil.copyfileobj(response, out)
    if path.stat().st_size < 20_000:
        raise RuntimeError(f'downloaded file too small: {path} ({path.stat().st_size})')


def build_canvas() -> dict:
    nodes = [{
        'id': 'title', 'type': 'text',
        'text': '# 女性发型库总表｜定向配图批次06\n\n**05库执行｜14库配图Skill规则**\n\n本批只收6个高优先级缺口，全部使用人工确认来源页与原图地址。左侧为05库本地图片，右侧为结构卡。图片仅作为内部结构研究参考，版权归原作者与媒体。',
        'x': -1500, 'y': -900, 'width': 3000, 'height': 360, 'color': '4'
    }]
    edges = []
    for idx, item in enumerate(ITEMS):
        col = idx % 2
        row = idx // 2
        x = -1500 + col * 1450
        y = -380 + row * 780
        ref_id = f"ref-{item['id']}"
        card_id = f"card-{item['id']}"
        src_id = f"src-{item['id']}"
        nodes.extend([
            {'id': ref_id, 'type': 'file', 'file': f"05-银矿库/角色库/发型库总表/assets/refs/batch06/{item['filename']}", 'x': x, 'y': y, 'width': 470, 'height': 430},
            {'id': src_id, 'type': 'text', 'text': f"[打开来源文章]({item['source']})\n\n图源标注：{item['credit']}", 'x': x, 'y': y + 445, 'width': 470, 'height': 120, 'color': '6'},
            {'id': card_id, 'type': 'text', 'text': f"# {item['id']}｜{item['name']}\n### {item['en']}\n\n**一级结构变量：** {item['variable']}\n\n**结构：** {item['structure']}\n\n**排除：** {item['exclude']}\n\n**十元入口：** {item['ten']}\n\n**证据状态：** `image-present / source-confirmed / audit-pending`", 'x': x + 530, 'y': y, 'width': 820, 'height': 570, 'color': str((idx % 6) + 1)},
        ])
        edges.append({'id': f'e-{item["id"]}', 'fromNode': ref_id, 'fromSide': 'right', 'toNode': card_id, 'toSide': 'left'})
    return {'nodes': nodes, 'edges': edges, 'metadata': {'version': '1.0', 'frontmatter': {}}}


def main() -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    for item in ITEMS:
        target = ASSET_DIR / item['filename']
        print(f"download {item['id']} {item['name']}", flush=True)
        download(item['image_url'], target)

    CANVAS_PATH.write_text(json.dumps(build_canvas(), ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

    lines = [
        '# 批次06｜定向来源清单',
        '',
        '用途：内部发型结构研究与Canvas配图。图片版权归原作者、摄影机构与媒体；本库保留来源文章，不将图片声明为自有素材。',
        '',
        '| 编号 | 类型 | 来源文章 | 图源标注 | 本地文件 |',
        '|---:|---|---|---|---|',
    ]
    for item in ITEMS:
        lines.append(f"| {item['id']} | {item['name']} | {item['source']} | {item['credit']} | `assets/refs/batch06/{item['filename']}` |")
    MANIFEST_PATH.write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print('batch06 complete', flush=True)


if __name__ == '__main__':
    main()
