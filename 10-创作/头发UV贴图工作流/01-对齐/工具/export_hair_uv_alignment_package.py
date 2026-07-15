from __future__ import annotations

import colorsys
import csv
import hashlib
import json
import shutil
import zipfile
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

import align_hair_tone_shape as aligned
import build_front_hair_uv_id as uvtools
import build_hair_partition_ids as partitions
import build_pink_anime_hair_trial as pink


DESKTOP = Path("C:/Users/19308/Desktop")
WORKSPACE = Path(__file__).resolve().parent
PACKAGE = DESKTOP / "\u5934\u53d1_UV\u5bf9\u9f50\u6570\u636e\u5305"
ZIP_PATH = DESKTOP / "\u5934\u53d1_UV\u5bf9\u9f50\u6570\u636e\u5305.zip"

SOURCE_MODEL = DESKTOP / "\u5934\u53d1.ma"
SOURCE_IMAGE = DESKTOP / "be874e24-dc94-48ba-971b-b02b1f9f66be.png"
ALIGNED_DIR = DESKTOP / "hair_uv_tone_aligned_final"
DIAGNOSTIC_DIR = DESKTOP / "\u5934\u53d1_\u4e8c\u5206\u5f62\u72b6UV\u5bf9\u9f50_\u6700\u7ec8"
PINK_DIR = DESKTOP / "hair_pink_anime_trial"

SIZE = aligned.SIZE


def ensure_inputs(paths: list[Path]) -> None:
    missing = [str(path) for path in paths if not path.is_file()]
    if missing:
        raise FileNotFoundError("Missing required files:\n" + "\n".join(missing))


def copy_file(source: Path, relative_target: str) -> Path:
    target = PACKAGE / relative_target
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)
    return target


def repoint_texture(model_path: Path, old_texture: str, packaged_texture: Path) -> None:
    text = model_path.read_text(encoding="utf-8", errors="ignore")
    if old_texture not in text:
        raise RuntimeError(f"Texture path not found in packaged Maya file: {old_texture}")
    model_path.write_text(
        text.replace(old_texture, packaged_texture.as_posix()),
        encoding="utf-8",
    )


def round_list(values, digits: int = 7) -> list[float]:
    return [round(float(value), digits) for value in values]


def island_at(labels: np.ndarray, px: float, py: float) -> int:
    x = int(np.clip(round(px), 0, SIZE - 1))
    y = int(np.clip(round(py), 0, SIZE - 1))
    island_id = int(labels[y, x])
    if island_id > 0:
        return island_id
    for radius in range(1, 7):
        x0, x1 = max(0, x - radius), min(SIZE, x + radius + 1)
        y0, y1 = max(0, y - radius), min(SIZE, y + radius + 1)
        nearby = labels[y0:y1, x0:x1]
        values = nearby[nearby > 0]
        if values.size:
            return int(Counter(values.tolist()).most_common(1)[0][0])
    return 0


def island_color(island_id: int) -> tuple[int, int, int]:
    hue = (island_id * 0.61803398875) % 1.0
    saturation = 0.62 + 0.20 * ((island_id % 5) / 4.0)
    value = 0.88 + 0.12 * ((island_id % 3) / 2.0)
    rgb = colorsys.hsv_to_rgb(hue, saturation, value)
    return tuple(int(round(channel * 255)) for channel in rgb)


def load_label_font(size: int) -> ImageFont.ImageFont:
    candidates = [
        Path("C:/Windows/Fonts/msyhbd.ttc"),
        Path("C:/Windows/Fonts/arialbd.ttf"),
    ]
    for candidate in candidates:
        if candidate.is_file():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.load_default()


def build_id_image(
    labels: np.ndarray,
    count: int,
    regions: dict[int, aligned.ShapeRegion],
    meshes: list[dict],
) -> Image.Image:
    output = np.zeros((SIZE, SIZE, 3), dtype=np.uint8)
    areas = np.bincount(labels.ravel())
    for island_id in range(1, count + 1):
        output[labels == island_id] = island_color(island_id)
    image = aligned.draw_wire(Image.fromarray(output, mode="RGB"), meshes, color=(245, 245, 245), width=1)
    draw = ImageDraw.Draw(image)
    font = load_label_font(20)
    for island_id, region in regions.items():
        if island_id >= len(areas) or areas[island_id] < 700:
            continue
        x, y = map(float, region.frame.center)
        label = str(island_id)
        bbox = draw.textbbox((0, 0), label, font=font, stroke_width=2)
        width = bbox[2] - bbox[0]
        height = bbox[3] - bbox[1]
        draw.text(
            (x - width / 2, y - height / 2),
            label,
            font=font,
            fill=(255, 255, 255),
            stroke_width=2,
            stroke_fill=(0, 0, 0),
        )
    return image


def face_records(
    meshes: list[dict],
    labels: np.ndarray,
) -> tuple[list[dict], dict[int, dict]]:
    records: list[dict] = []
    aggregate: dict[int, dict] = defaultdict(
        lambda: {
            "meshes": set(),
            "face_count": 0,
            "part_counts": Counter(),
            "category_counts": Counter(),
            "world_y": [],
        }
    )
    for mesh_index, mesh in enumerate(meshes):
        for face_index, face in enumerate(mesh["faces"]):
            polygon = uvtools.uv_poly(mesh, face)
            center_u = sum(point[0] for point in polygon) / len(polygon)
            center_v = sum(point[1] for point in polygon) / len(polygon)
            px, py = aligned.uv_to_px((center_u, center_v))
            island_id = island_at(labels, px, py)
            world = uvtools.face_centroid(mesh, face)
            classified = partitions.classify_face(mesh, face)
            if classified:
                part, category = classified
            else:
                part, category = "unclassified", "unclassified"
            record = {
                "mesh_index": mesh_index,
                "mesh_name": mesh["name"],
                "face_index": face_index,
                "island_id": island_id,
                "part": part,
                "category": category,
                "vertex_indices": [int(value) for value in face["verts"]],
                "uv_indices": [int(value) for value in face["uvs"]],
                "uv_polygon": [round_list(point) for point in polygon],
                "uv_centroid": round_list((center_u, center_v)),
                "pixel_centroid": round_list((px, py), 3),
                "world_centroid": round_list(world, 5),
            }
            records.append(record)
            if island_id > 0:
                item = aggregate[island_id]
                item["meshes"].add(mesh["name"])
                item["face_count"] += 1
                item["part_counts"][part] += 1
                item["category_counts"][category] += 1
                item["world_y"].append(float(world[1]))
    return records, aggregate


def island_records(
    labels: np.ndarray,
    count: int,
    regions: dict[int, aligned.ShapeRegion],
    root_flips: dict[int, bool],
    aggregate: dict[int, dict],
) -> list[dict]:
    areas = np.bincount(labels.ravel())
    records: list[dict] = []
    for island_id in range(1, count + 1):
        region = regions[island_id]
        component = labels == island_id
        x0, y0, x1, y1 = aligned.bbox(component)
        major = region.frame.major.astype(np.float64)
        if root_flips.get(island_id, False):
            root_to_tip = -major
        else:
            root_to_tip = major
        item = aggregate.get(island_id, {})
        world_y = item.get("world_y", [])
        u_min = x0 / (SIZE - 1)
        u_max = x1 / (SIZE - 1)
        v_max = 1.0 - y0 / (SIZE - 1)
        v_min = 1.0 - y1 / (SIZE - 1)
        records.append(
            {
                "island_id": island_id,
                "pixel_area": int(areas[island_id]),
                "bbox_pixel_inclusive": [x0, y0, x1, y1],
                "bbox_uv": round_list((u_min, v_min, u_max, v_max)),
                "centroid_pixel": round_list(region.frame.center, 3),
                "centroid_uv": round_list(
                    (
                        region.frame.center[0] / (SIZE - 1),
                        1.0 - region.frame.center[1] / (SIZE - 1),
                    )
                ),
                "major_axis_pixel": round_list(major, 7),
                "root_to_tip_axis_pixel": round_list(root_to_tip, 7),
                "root_to_tip_axis_uv": round_list((root_to_tip[0], -root_to_tip[1]), 7),
                "root_at_major_max": bool(root_flips.get(island_id, False)),
                "major_t_range_pixel": round_list((region.frame.t_min, region.frame.t_max), 3),
                "mesh_names": sorted(item.get("meshes", [])),
                "face_count": int(item.get("face_count", 0)),
                "part_counts": dict(sorted(item.get("part_counts", {}).items())),
                "category_counts": dict(sorted(item.get("category_counts", {}).items())),
                "world_y_range": round_list((min(world_y), max(world_y)), 5) if world_y else None,
            }
        )
    return records


def write_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def write_csv_files(islands: list[dict], faces: list[dict]) -> None:
    data_dir = PACKAGE / "06_\u6570\u636e"
    data_dir.mkdir(parents=True, exist_ok=True)
    with (data_dir / "UV\u5c9b\u7d22\u5f15.csv").open("w", newline="", encoding="utf-8-sig") as stream:
        writer = csv.writer(stream)
        writer.writerow(
            [
                "island_id",
                "pixel_area",
                "bbox_x0",
                "bbox_y0",
                "bbox_x1",
                "bbox_y1",
                "centroid_u",
                "centroid_v",
                "root_to_tip_u",
                "root_to_tip_v",
                "face_count",
                "mesh_names",
                "part_counts",
                "category_counts",
            ]
        )
        for item in islands:
            writer.writerow(
                [
                    item["island_id"],
                    item["pixel_area"],
                    *item["bbox_pixel_inclusive"],
                    *item["centroid_uv"],
                    *item["root_to_tip_axis_uv"],
                    item["face_count"],
                    "|".join(item["mesh_names"]),
                    json.dumps(item["part_counts"], ensure_ascii=False, separators=(",", ":")),
                    json.dumps(item["category_counts"], ensure_ascii=False, separators=(",", ":")),
                ]
            )
    with (data_dir / "\u9010\u9762UV\u5bf9\u5e94.csv").open("w", newline="", encoding="utf-8-sig") as stream:
        writer = csv.writer(stream)
        writer.writerow(
            [
                "mesh_index",
                "mesh_name",
                "face_index",
                "island_id",
                "part",
                "category",
                "centroid_u",
                "centroid_v",
                "world_x",
                "world_y",
                "world_z",
                "vertex_indices",
                "uv_indices",
            ]
        )
        for item in faces:
            writer.writerow(
                [
                    item["mesh_index"],
                    item["mesh_name"],
                    item["face_index"],
                    item["island_id"],
                    item["part"],
                    item["category"],
                    *item["uv_centroid"],
                    *item["world_centroid"],
                    " ".join(map(str, item["vertex_indices"])),
                    " ".join(map(str, item["uv_indices"])),
                ]
            )


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def package_manifest(summary: dict) -> None:
    files = []
    for path in sorted(PACKAGE.rglob("*")):
        if not path.is_file() or path.name == "manifest.json":
            continue
        files.append(
            {
                "path": path.relative_to(PACKAGE).as_posix(),
                "bytes": path.stat().st_size,
                "sha256": sha256(path),
            }
        )
    write_json(
        PACKAGE / "manifest.json",
        {
            "package": PACKAGE.name,
            "created_at": datetime.now().astimezone().isoformat(timespec="seconds"),
            "summary": summary,
            "files": files,
        },
    )


def build_zip() -> None:
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for path in sorted(PACKAGE.rglob("*")):
            if path.is_file():
                archive.write(path, (Path(PACKAGE.name) / path.relative_to(PACKAGE)).as_posix())


def main() -> None:
    required = [
        SOURCE_MODEL,
        SOURCE_IMAGE,
        ALIGNED_DIR / "hair_tone_shape_uv_aligned.png",
        ALIGNED_DIR / "hair_two_tone_uv_aligned.png",
        ALIGNED_DIR / "hair_two_tone_uv_aligned.ma",
        PINK_DIR / "hair_pink_basecolor_uv.png",
        PINK_DIR / "hair_pink_cel_mask_uv.png",
        PINK_DIR / "hair_pink_strand_mask_uv.png",
        PINK_DIR / "hair_pink_anime_trial.ma",
    ]
    ensure_inputs(required)
    PACKAGE.mkdir(parents=True, exist_ok=True)
    for folder in [
        "01_\u6e90\u6587\u4ef6",
        "02_UV\u53c2\u8003",
        "03_\u5bf9\u9f50\u8d34\u56fe",
        "04_Maya\u6587\u4ef6",
        "05_\u9884\u89c8",
        "06_\u6570\u636e",
        "07_\u590d\u73b0\u5de5\u5177",
    ]:
        (PACKAGE / folder).mkdir(parents=True, exist_ok=True)

    meshes = aligned.load_visible_meshes()
    uv_mask, labels, count = aligned.build_uv_mask(meshes)
    regions = pink.build_regions(labels, count)
    for island_id in range(1, count + 1):
        if island_id in regions:
            continue
        component = labels == island_id
        x0, y0, x1, y1 = aligned.bbox(component)
        regions[island_id] = aligned.make_region(
            component[y0 : y1 + 1, x0 : x1 + 1], x0, y0
        )
    root_flips = pink.root_flip_by_island(meshes, labels, regions)
    faces, aggregate = face_records(meshes, labels)
    islands = island_records(labels, count, regions, root_flips, aggregate)

    copy_file(SOURCE_MODEL, "01_\u6e90\u6587\u4ef6/\u5934\u53d1_\u539f\u6a21\u578b.ma")
    copy_file(SOURCE_IMAGE, "01_\u6e90\u6587\u4ef6/\u539f\u751f\u6210\u4e8c\u5206\u56fe.png")

    wire = aligned.draw_wire(Image.new("RGB", (SIZE, SIZE), (0, 0, 0)), meshes)
    wire.save(PACKAGE / "02_UV\u53c2\u8003/\u771f\u5b9eUV\u7ebf\u6846_2048.png")
    build_id_image(labels, count, regions, meshes).save(PACKAGE / "02_UV\u53c2\u8003/UV\u5c9b\u7f16\u53f7\u56fe.png")
    aligned.draw_direction_check(meshes, labels, regions).save(
        PACKAGE / "02_UV\u53c2\u8003/\u53d1\u6839\u5230\u53d1\u68a2\u65b9\u5411\u56fe.png"
    )
    mask_image = Image.fromarray((uv_mask.astype(np.uint8) * 255), mode="L")
    mask_image.save(PACKAGE / "02_UV\u53c2\u8003/UV\u5c9b\u7cbe\u786e\u906e\u7f69.png")

    copy_file(ALIGNED_DIR / "hair_tone_shape_uv_aligned.png", "03_\u5bf9\u9f50\u8d34\u56fe/\u7070\u5ea6\u4e8c\u5206\u5f62\u72b6_UV\u5bf9\u9f50.png")
    copy_file(ALIGNED_DIR / "hair_two_tone_uv_aligned.png", "03_\u5bf9\u9f50\u8d34\u56fe/\u7eaf\u4eae\u6697\u4e24\u8272_UV\u5bf9\u9f50.png")
    copy_file(PINK_DIR / "hair_pink_basecolor_uv.png", "03_\u5bf9\u9f50\u8d34\u56fe/\u7c89\u8272\u5934\u53d1_BaseColor.png")
    copy_file(PINK_DIR / "hair_pink_cel_mask_uv.png", "03_\u5bf9\u9f50\u8d34\u56fe/\u7c89\u8272\u5934\u53d1_\u4e8c\u5206\u906e\u7f69.png")
    copy_file(PINK_DIR / "hair_pink_strand_mask_uv.png", "03_\u5bf9\u9f50\u8d34\u56fe/\u7c89\u8272\u5934\u53d1_\u53d1\u4e1d\u7ebf\u906e\u7f69.png")

    two_tone_model = copy_file(
        ALIGNED_DIR / "hair_two_tone_uv_aligned.ma",
        "04_Maya\u6587\u4ef6/\u5934\u53d1_\u7eaf\u4e8c\u5206_UV\u5df2\u5bf9\u9f50.ma",
    )
    pink_model = copy_file(
        PINK_DIR / "hair_pink_anime_trial.ma",
        "04_Maya\u6587\u4ef6/\u5934\u53d1_\u7c89\u8272\u98ce\u683c_UV\u5df2\u5bf9\u9f50.ma",
    )
    repoint_texture(
        two_tone_model,
        (ALIGNED_DIR / "hair_two_tone_uv_aligned.png").as_posix(),
        PACKAGE / "03_\u5bf9\u9f50\u8d34\u56fe/\u7eaf\u4eae\u6697\u4e24\u8272_UV\u5bf9\u9f50.png",
    )
    repoint_texture(
        pink_model,
        (PINK_DIR / "hair_pink_basecolor_uv.png").as_posix(),
        PACKAGE / "03_\u5bf9\u9f50\u8d34\u56fe/\u7c89\u8272\u5934\u53d1_BaseColor.png",
    )

    preview_sources = {
        DIAGNOSTIC_DIR / "05_\u5bf9\u9f50\u524d\u540e\u5bf9\u6bd4.png": "05_\u9884\u89c8/\u5bf9\u9f50\u524d\u540e\u5bf9\u6bd4.png",
        PINK_DIR / "preview_contact_sheet.png": "05_\u9884\u89c8/\u7c89\u8272\u7248_\u56db\u89c6\u56fe.png",
        PINK_DIR / "preview_\u6b63\u9762.png": "05_\u9884\u89c8/\u7c89\u8272\u7248_\u6b63\u9762.png",
        PINK_DIR / "preview_\u80cc\u9762.png": "05_\u9884\u89c8/\u7c89\u8272\u7248_\u80cc\u9762.png",
        PINK_DIR / "preview_\u5de6\u4fa7.png": "05_\u9884\u89c8/\u7c89\u8272\u7248_\u5de6\u4fa7.png",
        PINK_DIR / "preview_\u53f3\u4fa7.png": "05_\u9884\u89c8/\u7c89\u8272\u7248_\u53f3\u4fa7.png",
    }
    for source, target in preview_sources.items():
        if source.is_file():
            copy_file(source, target)

    write_json(
        PACKAGE / "06_\u6570\u636e/UV\u5c9b_\u5bf9\u9f50\u4e0e\u53d1\u6d41.json",
        {
            "coordinate_notes": {
                "uv_origin": "bottom-left",
                "pixel_origin": "top-left",
                "texture_size": [SIZE, SIZE],
                "bbox_pixel": "inclusive x0,y0,x1,y1",
                "root_to_tip_axis": "normalized direction vector from hair root to hair tip",
            },
            "islands": islands,
        },
    )
    write_json(
        PACKAGE / "06_\u6570\u636e/\u9010\u9762UV\u5bf9\u5e94.json",
        {
            "texture_size": [SIZE, SIZE],
            "mesh_count": len(meshes),
            "face_count": len(faces),
            "faces": faces,
        },
    )
    palette = {
        "grayscale_two_tone": {"dark": [76, 76, 76], "light": [214, 214, 214]},
        "pink_trial": {
            "base": pink.BASE_PINK.astype(int).tolist(),
            "shadow": pink.SHADOW_PINK.astype(int).tolist(),
            "highlight": pink.HIGHLIGHT_PINK.astype(int).tolist(),
            "strand_dark": pink.STRAND_DARK.astype(int).tolist(),
            "strand_light": pink.STRAND_LIGHT.astype(int).tolist(),
            "outline": pink.OUTLINE_COLOR.astype(int).tolist(),
        },
        "padding_pixels": aligned.PADDING,
    }
    write_json(PACKAGE / "06_\u6570\u636e/\u989c\u8272\u4e0e\u8fb9\u7f18\u53c2\u6570.json", palette)
    write_csv_files(islands, faces)

    for script_name in [
        "align_hair_tone_shape.py",
        "build_pink_anime_hair_trial.py",
        "render_hair_uv_check_maya.py",
        "build_front_hair_uv_id.py",
        "build_hair_partition_ids.py",
        Path(__file__).name,
    ]:
        copy_file(WORKSPACE / script_name, f"07_\u590d\u73b0\u5de5\u5177/{script_name}")

    unassigned = sum(1 for face in faces if face["island_id"] == 0)
    summary = {
        "texture_size": [SIZE, SIZE],
        "uv_island_count": count,
        "mesh_count": len(meshes),
        "face_count": len(faces),
        "unassigned_face_count": unassigned,
        "padding_pixels": aligned.PADDING,
        "source_model_sha256": sha256(SOURCE_MODEL),
        "source_image_sha256": sha256(SOURCE_IMAGE),
    }
    readme = f"""\u5934\u53d1 UV \u5bf9\u9f50\u6570\u636e\u5305
====================

\u8fd9\u4e00\u4efd\u662f\u5f53\u524d\u5df2\u5bf9\u9f50\u7ed3\u679c\u7684\u72ec\u7acb\u5f52\u6863\uff0c\u4e0d\u9700\u8981\u518d\u9760\u622a\u56fe\u731c UV \u4f4d\u7f6e\u3002

\u6838\u5fc3\u6570\u636e
--------
- \u8d34\u56fe\u5c3a\u5bf8\uff1a{SIZE} x {SIZE}
- UV \u5c9b\u6570\uff1a{count}
- \u53ef\u89c1\u7f51\u683c\u6570\uff1a{len(meshes)}
- \u9010\u9762\u8bb0\u5f55\u6570\uff1a{len(faces)}
- \u672a\u5bf9\u5e94\u5230 UV \u5c9b\u7684\u9762\uff1a{unassigned}
- \u8fb9\u7f18\u5916\u6269\uff1a{aligned.PADDING} px

\u76ee\u5f55\u8bf4\u660e
--------
01_\u6e90\u6587\u4ef6\uff1a\u539f\u59cb Maya ASCII \u6a21\u578b\u548c\u539f\u751f\u6210\u56fe\u3002
02_UV\u53c2\u8003\uff1a\u7cbe\u786e UV \u7ebf\u6846\u3001\u906e\u7f69\u3001\u5c9b\u7f16\u53f7\u548c\u53d1\u6839\u5230\u53d1\u68a2\u65b9\u5411\u3002
03_\u5bf9\u9f50\u8d34\u56fe\uff1a\u7070\u5ea6\u4e8c\u5206\u3001\u7eaf\u4e8c\u5206\u548c\u7c89\u8272\u98ce\u683c\u7248\u3002
04_Maya\u6587\u4ef6\uff1a\u5df2\u7ecf\u628a\u8d34\u56fe\u8def\u5f84\u6307\u5411\u5bf9\u9f50\u7ed3\u679c\u7684 .ma \u6587\u4ef6\u3002
05_\u9884\u89c8\uff1a\u5bf9\u9f50\u5bf9\u6bd4\u548c\u6a21\u578b\u56db\u89c6\u56fe\u3002
06_\u6570\u636e\uff1aUV \u5c9b\u548c\u6bcf\u4e2a\u6a21\u578b\u9762\u7684 JSON/CSV \u5bf9\u5e94\u3002
07_\u590d\u73b0\u5de5\u5177\uff1a\u751f\u6210\u548c\u68c0\u67e5\u8fd9\u4efd\u8d44\u6599\u7528\u7684\u5de5\u5177\u3002

\u5750\u6807\u89c4\u5219
--------
- UV \u5750\u6807\u539f\u70b9\u5728\u5de6\u4e0b\u3002
- PNG \u50cf\u7d20\u5750\u6807\u539f\u70b9\u5728\u5de6\u4e0a\u3002
- root_to_tip_axis \u59cb\u7ec8\u8868\u793a\u201c\u53d1\u6839 -> \u53d1\u68a2\u201d\u3002
- \u7ed8\u5236\u65f6\u5fc5\u987b\u4fdd\u6301 0-1 UV \u548c 2048 \u5c3a\u5bf8\uff0c\u4e0d\u79fb\u52a8\u3001\u4e0d\u91cd\u6392 UV \u5c9b\u3002
- \u6700\u7ec8\u8d34\u56fe\u8bf7\u4fdd\u7559 20 px \u8fb9\u7f18\u5916\u6269\u3002

\u5feb\u901f\u67e5\u627e
--------
- \u60f3\u770b\u67d0\u4e2a\u5c9b\u5728\u54ea\uff1a02_UV\u53c2\u8003/UV\u5c9b\u7f16\u53f7\u56fe.png
- \u60f3\u770b\u53d1\u6d41\uff1a02_UV\u53c2\u8003/\u53d1\u6839\u5230\u53d1\u68a2\u65b9\u5411\u56fe.png
- \u60f3\u67e5\u7cbe\u786e\u6570\u636e\uff1a06_\u6570\u636e/UV\u5c9b_\u5bf9\u9f50\u4e0e\u53d1\u6d41.json
- \u60f3\u67e5 Maya \u54ea\u4e2a\u9762\uff1a06_\u6570\u636e/\u9010\u9762UV\u5bf9\u5e94.csv

manifest.json \u8bb0\u5f55\u4e86\u6bcf\u4e2a\u6587\u4ef6\u7684 SHA-256\uff0c\u7528\u6765\u786e\u8ba4\u540e\u7eed\u6587\u4ef6\u6ca1\u6709\u610f\u5916\u53d8\u5316\u3002
"""
    (PACKAGE / "README_\u4f7f\u7528\u8bf4\u660e.txt").write_text(readme, encoding="utf-8-sig")
    package_manifest(summary)
    build_zip()
    print(json.dumps({"package": str(PACKAGE), "zip": str(ZIP_PATH), **summary}, ensure_ascii=False))


if __name__ == "__main__":
    main()
