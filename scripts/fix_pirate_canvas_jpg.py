from __future__ import annotations

import base64
import io
import json
import re
from pathlib import Path

from PIL import Image

ASSET_DIR = Path("09-给674（我）用的库/画画理论/assets/海盗航海_is-a名词素材库")
CANVAS = Path("09-给674（我）用的库/画画理论/海盗航海_is-a名词素材库.canvas")
SPRITE = ASSET_DIR / "海盗航海_场景素材精灵.svg"


def main() -> None:
    sprite_text = SPRITE.read_text(encoding="utf-8")
    match = re.search(r"data:image/jpeg;base64,([^\"]+)", sprite_text)
    if not match:
        raise RuntimeError("Could not find embedded JPEG in sprite SVG")

    sprite = Image.open(io.BytesIO(base64.b64decode(match.group(1)))).convert("RGB")
    converted = 0

    for wrapper in sorted(ASSET_DIR.glob("*.svg")):
        if wrapper == SPRITE:
            continue

        text = wrapper.read_text(encoding="utf-8")
        x_match = re.search(r'<image[^>]*\sx="(-?\d+)"', text)
        y_match = re.search(r'<image[^>]*\sy="(-?\d+)"', text)
        width_match = re.search(r'<svg[^>]*\swidth="(\d+)"', text)
        height_match = re.search(r'<svg[^>]*\sheight="(\d+)"', text)
        if not all((x_match, y_match, width_match, height_match)):
            raise RuntimeError(f"Could not parse crop wrapper: {wrapper}")

        x = -int(x_match.group(1))
        y = -int(y_match.group(1))
        width = int(width_match.group(1))
        height = int(height_match.group(1))
        tile = sprite.crop((x, y, x + width, y + height))
        tile = tile.resize((512, 512), Image.Resampling.LANCZOS)
        jpg_path = wrapper.with_suffix(".jpg")
        tile.save(jpg_path, "JPEG", quality=92, optimize=True, progressive=True)
        wrapper.unlink()
        converted += 1

    SPRITE.unlink()

    data = json.loads(CANVAS.read_text(encoding="utf-8"))
    changed = 0
    for node in data.get("nodes", []):
        if node.get("type") != "file":
            continue
        file_path = node.get("file", "")
        if file_path.startswith(str(ASSET_DIR).replace("\\", "/")) and file_path.endswith(".svg"):
            node["file"] = file_path[:-4] + ".jpg"
            changed += 1

    if converted != 16 or changed != 16:
        raise RuntimeError(f"Expected 16 conversions and 16 Canvas updates, got {converted} and {changed}")

    CANVAS.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Converted {converted} SVG wrappers to JPG and updated {changed} Canvas nodes")


if __name__ == "__main__":
    main()
