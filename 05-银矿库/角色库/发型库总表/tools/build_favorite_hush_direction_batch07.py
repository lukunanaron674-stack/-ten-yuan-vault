#!/usr/bin/env python3
from __future__ import annotations

import json
import shutil
import urllib.request
from pathlib import Path

ROOT = Path('05-银矿库/角色库/发型库总表')
ASSET_DIR = ROOT / 'assets/refs/batch07_hush_direction'
CANVAS_PATH = ROOT / '女性发型库总表_偏好方向批次07_长款Hush轻狼尾.canvas'
MANIFEST_PATH = ROOT / '批次07_长款Hush轻狼尾来源清单.md'

ITEMS = [
    {
        'id': '01',
        'name': '高度疑似原图｜顺直长层轻狼尾',
        'en': 'Sleek Layered Wolf / Hush Hybrid',
        'filename': '07_01_possible_original.jpg',
        'image_url': 'https://thebeautyfoodie.com/wp-content/uploads/2026/04/image19-2.jpg',
        'source': 'https://thebeautyfoodie.com/korean-wolf-cut/',
        'credit': 'TheBeautyFoodie，条目 7：Sleek Layered Wolf Cut',
        'status': 'possible-original / user-confirmation-pending',
        'note': '页面描述为深色纹理层次、分层刘海、黑色服装、紫色渐变背景，与用户给出的参考图高度吻合；未冒充100%原图。',
    },
    {
        'id': '02',
        'name': '柔黑韩式长层',
        'en': 'Soft Black Korean-Inspired Layers',
        'filename': '07_02_soft_black_korean_layers.png',
        'image_url': 'https://cdn.shopify.com/s/files/1/1038/1798/files/21._Soft_Black_Korean-Inspired_Layers_Long_Layered_Haircuts.png?v=1777957791',
        'source': 'https://creativebooster.net/blogs/hairstyles/long-layered-haircuts-2026',
        'credit': 'CreativeBooster，条目21',
        'status': 'direction-reference / source-confirmed',
        'note': '保留黑长发主体，以柔和脸周层和轻薄轮廓增加流动，不做强烈鲻鱼尾。',
    },
    {
        'id': '03',
        'name': '长款羽毛Hush层次',
        'en': 'Long Feathered Hush Cut',
        'filename': '07_03_long_hush_cut.jpg',
        'image_url': 'https://s3.ppllstatics.com/mujerhoy/www/multimedia/202309/15/media/cortadas/corte-hush-cut-2-insta-kf3C--624x624%40MujerHoy.jpg',
        'source': 'https://www.mujerhoy.com/belleza/pelo/corte-hush-cut-tendencia-pelo-otono-2023-20230923114458-nt.html',
        'credit': 'Mujerhoy / @jimmywaworuntu',
        'status': 'direction-reference / source-confirmed',
        'note': '轻羽毛层、脸周渐进层次、薄刘海和长发主体并存，属于用户偏好方向的温柔端。',
    },
    {
        'id': '04',
        'name': '韩式碎薄帘刘海Hush',
        'en': 'Korean Wispy Fringe Hush Cut',
        'filename': '07_04_wispy_fringe_hush.jpg',
        'image_url': 'https://s3.ppllstatics.com/mujerhoy/www/multimedia/202309/15/media/cortadas/corte-hush-cut-3-instagram-kf3C--624x624%40MujerHoy.jpg',
        'source': 'https://www.mujerhoy.com/belleza/pelo/corte-hush-cut-tendencia-pelo-otono-2023-20230923114458-nt.html',
        'credit': 'Mujerhoy / @my.o_noji',
        'status': 'direction-reference / source-confirmed',
        'note': '重点观察碎薄刘海、颧骨至下颌的脸侧短层，以及发尾轻而不断的长轴。',
    },
]


def download(url: str, path: Path) -> None:
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 hairstyle-reference-research/1.0',
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Referer': '/'.join(url.split('/')[:3]) + '/',
        },
    )
    with urllib.request.urlopen(req, timeout=120) as response, path.open('wb') as out:
        shutil.copyfileobj(response, out)
    if path.stat().st_size < 15_000:
        raise RuntimeError(f'downloaded file too small: {path} ({path.stat().st_size})')


def build_canvas() -> dict:
    nodes = [
        {
            'id': 'title', 'type': 'text',
            'text': '# 女性发型库｜偏好方向批次07\n\n## 长款 Hush Cut＋轻狼尾＋碎薄帘刘海\n\n用户明确偏好：保留黑长发与女性感，顶部轻蓬松，脸侧层次明显，发尾轻而长；不要硬水母断层，不要夸张鲻鱼尾，也不要普通无层次长直发。\n\n第01张为高度疑似原图候选，仍等待用户肉眼确认；其余3张用于锁定方向。',
            'x': -1450, 'y': -850, 'width': 2900, 'height': 430, 'color': '4'
        },
        {
            'id': 'definition', 'type': 'text',
            'text': '# 结构判定\n\n**主类型：** 长款 Hush Cut\n**次类型：** 轻狼尾／长层Shag\n**刘海：** 碎薄帘刘海＋长脸周须\n\n**必须保留**\n- 长度到胸下或更长\n- 冠部轻体量，不做厚圆壳\n- 眼角、颧骨、下颌至少三级脸周层\n- 发尾细长、轻、连续\n\n**排除**\n- 水母头：上下硬断层过强\n- 经典狼尾：前短后长和后颈尾过强\n- 蝴蝶剪：吹风外翻和90年代大体量过强\n- 普通长直发：脸周层和冠部纹理不足',
            'x': -800, 'y': 1450, 'width': 1600, 'height': 850, 'color': '5'
        },
    ]
    edges = []
    for idx, item in enumerate(ITEMS):
        col = idx % 2
        row = idx // 2
        x = -1450 + col * 1450
        y = -250 + row * 760
        ref_id = f"ref-{item['id']}"
        card_id = f"card-{item['id']}"
        nodes.extend([
            {
                'id': ref_id, 'type': 'file',
                'file': f"05-银矿库/角色库/发型库总表/assets/refs/batch07_hush_direction/{item['filename']}",
                'x': x, 'y': y, 'width': 500, 'height': 500,
            },
            {
                'id': card_id, 'type': 'text',
                'text': f"# {item['id']}｜{item['name']}\n### {item['en']}\n\n{item['note']}\n\n[打开来源页面]({item['source']})\n\n图源：{item['credit']}\n\n**状态：** `{item['status']}`",
                'x': x + 540, 'y': y, 'width': 820, 'height': 500, 'color': str((idx % 6) + 1),
            },
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
        '# 批次07｜长款Hush轻狼尾来源清单', '',
        '用途：内部发型结构研究。图片版权归原作者与发布媒体；本库保留来源，不声明图片所有权。', '',
        '| 编号 | 名称 | 来源 | 图源 | 状态 | 本地文件 |',
        '|---:|---|---|---|---|---|',
    ]
    for item in ITEMS:
        lines.append(f"| {item['id']} | {item['name']} | {item['source']} | {item['credit']} | {item['status']} | `assets/refs/batch07_hush_direction/{item['filename']}` |")
    MANIFEST_PATH.write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print('batch07 complete', flush=True)


if __name__ == '__main__':
    main()
