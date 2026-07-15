from __future__ import annotations

import json
from pathlib import Path

CANVAS = Path("09-给674（我）用的库/画画理论/海盗航海_is-a名词素材库.canvas")
ASSET_DIR = "09-给674（我）用的库/画画理论/assets/海盗航海_is-a名词素材库"

ITEMS = [
    ("n26", "n26_黑帆港.svg", -1510, 50),
    ("n27", "n27_雾海沉船湾.svg", -1510, 335),
    ("n28", "n28_海盗酒馆.svg", -1510, 620),
    ("n29", "n29_船长舱.svg", -1510, 905),
    ("n30", "n30_诅咒海峡.svg", -1510, 1190),
    ("n33", "n33_黑帆港废墟.svg", -1230, 50),
    ("n34", "n34_黑帆港圣所.svg", -1230, 335),
    ("n35", "n35_黑帆港大厅.svg", -1230, 620),
    ("n36", "n36_黑帆港回廊.svg", -1230, 905),
    ("n39", "n39_花蔓侵蚀.svg", -900, 50),
    ("n40", "n40_荆棘缠绕.svg", -900, 335),
    ("n41", "n41_树根穿刺.svg", -900, 620),
    ("n42", "n42_苔藓覆盖.svg", -900, 905),
    ("n43", "n43_菌丝寄生.svg", -900, 1190),
    ("n45", "n45_中央空间.svg", -620, 50),
    ("n51", "n51_复合场景标准版.svg", -340, 50),
]


def main() -> None:
    data = json.loads(CANVAS.read_text(encoding="utf-8"))
    nodes = data.setdefault("nodes", [])
    edges = data.setdefault("edges", [])
    node_ids = {node.get("id") for node in nodes}
    edge_ids = {edge.get("id") for edge in edges}

    for source_id, filename, x, y in ITEMS:
        image_id = f"img_{source_id}"
        edge_id = f"e_img_{source_id}"
        if image_id not in node_ids:
            nodes.append({
                "id": image_id,
                "type": "file",
                "file": f"{ASSET_DIR}/{filename}",
                "x": x,
                "y": y,
                "width": 230,
                "height": 230,
            })
            node_ids.add(image_id)
        if edge_id not in edge_ids:
            edges.append({
                "id": edge_id,
                "fromNode": source_id,
                "fromSide": "bottom",
                "toNode": image_id,
                "toSide": "top",
                "label": "AI厚涂素材",
            })
            edge_ids.add(edge_id)

    CANVAS.write_text(
        json.dumps(data, ensure_ascii=False, indent="\t") + "\n",
        encoding="utf-8",
    )
    print(f"Updated {CANVAS}: {len(ITEMS)} image nodes")


if __name__ == "__main__":
    main()
