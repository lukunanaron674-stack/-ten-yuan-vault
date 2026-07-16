from __future__ import annotations

import base64
import hashlib
import json
from pathlib import Path

from PIL import Image

PART_DIR = Path("tmp/pirate_hq_640_parts")
SOURCE = Path("tmp/pirate_hq_640.jpg")
OUT = Path("09-给674（我）用的库/画画理论/assets/海盗航海_is-a名词素材库")
EXPECTED_PARTS = 29
NAMES = [
    "n26_黑帆港.jpg", "n27_雾海沉船湾.jpg", "n28_海盗酒馆.jpg", "n29_船长舱.jpg",
    "n30_诅咒海峡.jpg", "n33_黑帆港废墟.jpg", "n34_黑帆港圣所.jpg", "n35_黑帆港大厅.jpg",
    "n36_黑帆港回廊.jpg", "n39_花蔓侵蚀.jpg", "n40_荆棘缠绕.jpg", "n41_树根穿刺.jpg",
    "n42_苔藓覆盖.jpg", "n43_菌丝寄生.jpg", "n45_中央空间.jpg", "n51_复合场景标准版.jpg",
]


def main() -> None:
    parts = sorted(PART_DIR.glob("part*"))
    if len(parts) != EXPECTED_PARTS:
        raise ValueError(f"expected {EXPECTED_PARTS} parts, found {len(parts)}")
    encoded = "".join(p.read_text(encoding="ascii") for p in parts)
    payload = base64.b64decode(encoded, validate=True)
    if not payload.startswith(b"\xff\xd8\xff"):
        raise ValueError("source is not a JPEG")
    SOURCE.parent.mkdir(parents=True, exist_ok=True)
    SOURCE.write_bytes(payload)
    source_sha = hashlib.sha256(payload).hexdigest()

    OUT.mkdir(parents=True, exist_ok=True)
    assets: list[dict[str, object]] = []
    with Image.open(SOURCE) as source:
        source = source.convert("RGB")
        if source.size != (640, 640):
            raise ValueError(f"unexpected source size: {source.size}")
        for index, name in enumerate(NAMES):
            x = (index % 4) * 160
            y = (index // 4) * 160
            tile = source.crop((x, y, x + 160, y + 160))
            destination = OUT / name
            tile.save(destination, "JPEG", quality=95, subsampling=0, optimize=True, progressive=True)
            data = destination.read_bytes()
            assets.append({
                "file": name,
                "width": tile.width,
                "height": tile.height,
                "bytes": len(data),
                "sha256": hashlib.sha256(data).hexdigest(),
            })

    manifest = {
        "source_width": 640,
        "source_height": 640,
        "source_sha256": source_sha,
        "asset_count": len(assets),
        "assets": assets,
    }
    (OUT / "HQ_MANIFEST.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
