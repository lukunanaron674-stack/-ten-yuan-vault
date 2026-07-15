from __future__ import annotations

import hashlib
import json
from pathlib import Path

from PIL import Image

SPRITE = Path("tmp/pirate_hq_sprite_1024.jpg")
OUT = Path("09-给674（我）用的库/画画理论/assets/海盗航海_is-a名词素材库")
NAMES = [
    "n26_黑帆港.jpg",
    "n27_雾海沉船湾.jpg",
    "n28_海盗酒馆.jpg",
    "n29_船长舱.jpg",
    "n30_诅咒海峡.jpg",
    "n33_黑帆港废墟.jpg",
    "n34_黑帆港圣所.jpg",
    "n35_黑帆港大厅.jpg",
    "n36_黑帆港回廊.jpg",
    "n39_花蔓侵蚀.jpg",
    "n40_荆棘缠绕.jpg",
    "n41_树根穿刺.jpg",
    "n42_苔藓覆盖.jpg",
    "n43_菌丝寄生.jpg",
    "n45_中央空间.jpg",
    "n51_复合场景标准版.jpg",
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with Image.open(SPRITE) as source:
        source = source.convert("RGB")
        if source.size != (1024, 1024):
            raise ValueError(f"unexpected sprite size: {source.size}")
        assets: list[dict[str, object]] = []
        for index, name in enumerate(NAMES):
            x = (index % 4) * 256
            y = (index // 4) * 256
            tile = source.crop((x, y, x + 256, y + 256))
            destination = OUT / name
            tile.save(
                destination,
                "JPEG",
                quality=95,
                subsampling=0,
                optimize=True,
                progressive=True,
            )
            payload = destination.read_bytes()
            assets.append(
                {
                    "file": name,
                    "width": tile.width,
                    "height": tile.height,
                    "bytes": len(payload),
                    "sha256": hashlib.sha256(payload).hexdigest(),
                }
            )

    manifest = {
        "source": SPRITE.as_posix(),
        "source_width": 1024,
        "source_height": 1024,
        "asset_count": len(assets),
        "assets": assets,
    }
    (OUT / "HQ_MANIFEST.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
