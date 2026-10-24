from __future__ import annotations

import json
import math
import os
import random
import shutil
import zipfile
from collections import Counter, defaultdict
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps
from scipy import ndimage as ndi

import align_hair_tone_shape as aligned
import build_front_hair_uv_id as uvtools
import build_hair_partition_ids as partitions
import build_pink_anime_hair_trial as pink


DESKTOP = Path("C:/Users/19308/Desktop")
TRIAL_VERSION = os.environ.get("HAIR_SOFT_PINK_VERSION", "v1")
OUT_DIR = DESKTOP / f"hair_soft_pink_strands_trial_{TRIAL_VERSION}"
BACKUP_DIR = OUT_DIR / "00_backup_current"
PREVIOUS_TRIAL = DESKTOP / os.environ.get(
    "HAIR_SOFT_PINK_PREVIOUS", "hair_soft_pink_strands_trial_v1"
)
PREVIOUS_BACKUP_DIR = OUT_DIR / "00_backup_previous_trial"
REFERENCE = Path(
    "C:/Users/19308/AppData/Local/Temp/"
    "codex-clipboard-b6cd1325-0e60-4452-9cd8-8a06f78fe197.png"
)

TEXTURE = OUT_DIR / "hair_soft_pink_strands_uv.png"
SHINE_MASK = OUT_DIR / "hair_soft_pink_shine_mask.png"
STRAND_MASK = OUT_DIR / "hair_soft_pink_strand_mask.png"
WIRE_CHECK = OUT_DIR / "hair_soft_pink_uv_wire_check.png"
DIRECTION_CHECK = OUT_DIR / "hair_root_tip_direction.png"
MODEL = OUT_DIR / "hair_soft_pink_strands_trial.ma"
CONTACT_SHEET = OUT_DIR / "preview_contact_sheet.png"
LAYER_DIR = OUT_DIR / "layers"
COLOR_LAYER = LAYER_DIR / "01_\u989c\u8272\u56fe\u5c42.png"
STRAND_LAYER = LAYER_DIR / "02_\u53d1\u4e1d\u56fe\u5c42.png"
HIGHLIGHT_LAYER = LAYER_DIR / "03_\u9ad8\u5149\u56fe\u5c42.png"
LAYER_COMPOSITE = LAYER_DIR / "00_\u4e09\u5c42\u5408\u6210\u6821\u9a8c.png"
LAYER_PREVIEW = LAYER_DIR / "04_\u56fe\u5c42\u9884\u89c8.png"
LAYERED_ORA = LAYER_DIR / "hair_soft_pink_layers.ora"

CURRENT_DIR = DESKTOP / "hair_pink_anime_trial"
SIZE = aligned.SIZE
PADDING = 20

ROOT_COLOR = np.array([190.0, 79.0, 113.0], dtype=np.float32)
BODY_COLOR = np.array([238.0, 132.0, 160.0], dtype=np.float32)
TIP_COLOR = np.array([255.0, 174.0, 195.0], dtype=np.float32)
BRAID_ROOT = np.array([174.0, 61.0, 112.0], dtype=np.float32)
BRAID_BODY = np.array([224.0, 108.0, 154.0], dtype=np.float32)
BRAID_TIP = np.array([247.0, 157.0, 190.0], dtype=np.float32)
SHINE_COLOR = np.array([255.0, 229.0, 234.0], dtype=np.float32)
LIGHT_STRAND = np.array([255.0, 198.0, 213.0], dtype=np.float32)
DARK_STRAND = np.array([159.0, 57.0, 96.0], dtype=np.float32)
EDGE_COLOR = np.array([151.0, 54.0, 91.0], dtype=np.float32)


def backup_current() -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    sources = [
        CURRENT_DIR / "hair_pink_basecolor_uv.png",
        CURRENT_DIR / "hair_pink_cel_mask_uv.png",
        CURRENT_DIR / "hair_pink_strand_mask_uv.png",
        CURRENT_DIR / "hair_pink_anime_trial.ma",
        CURRENT_DIR / "preview_contact_sheet.png",
        CURRENT_DIR / "README.txt",
    ]
    for source in sources:
        if source.is_file():
            shutil.copy2(source, BACKUP_DIR / source.name)
    if TRIAL_VERSION != "v1" and PREVIOUS_TRIAL.is_dir():
        PREVIOUS_BACKUP_DIR.mkdir(parents=True, exist_ok=True)
        for name in [
            "hair_soft_pink_strands_uv.png",
            "hair_soft_pink_shine_mask.png",
            "hair_soft_pink_strand_mask.png",
            "hair_soft_pink_strands_trial.ma",
            "preview_contact_sheet.png",
            "README.txt",
        ]:
            source = PREVIOUS_TRIAL / name
            if source.is_file():
                shutil.copy2(source, PREVIOUS_BACKUP_DIR / source.name)


def complete_regions(
    labels: np.ndarray,
    count: int,
) -> dict[int, aligned.ShapeRegion]:
    regions = pink.build_regions(labels, count)
    for island_id in range(1, count + 1):
        if island_id in regions:
            continue
        component = labels == island_id
        x0, y0, x1, y1 = aligned.bbox(component)
        regions[island_id] = aligned.make_region(
            component[y0 : y1 + 1, x0 : x1 + 1], x0, y0
        )
    return regions


def island_parts(meshes: list[dict], labels: np.ndarray) -> dict[int, str]:
    counts: dict[int, Counter] = defaultdict(Counter)
    for mesh in meshes:
        for face in mesh["faces"]:
            polygon = uvtools.uv_poly(mesh, face)
            center_u = sum(point[0] for point in polygon) / len(polygon)
            center_v = sum(point[1] for point in polygon) / len(polygon)
            px, py = aligned.uv_to_px((center_u, center_v))
            island_id = int(labels[np.clip(py, 0, SIZE - 1), np.clip(px, 0, SIZE - 1)])
            classified = partitions.classify_face(mesh, face)
            part = classified[0] if classified else "unclassified"
            if island_id > 0:
                counts[island_id][part] += 1
    result = {}
    for island_id, values in counts.items():
        useful = Counter({key: value for key, value in values.items() if key != "unclassified"})
        result[island_id] = (useful or values).most_common(1)[0][0]
    return result


def smoothstep(value: np.ndarray) -> np.ndarray:
    value = np.clip(value, 0.0, 1.0)
    return value * value * (3.0 - 2.0 * value)


def palette_gradient(
    root_t: np.ndarray,
    part: str,
) -> np.ndarray:
    if part == "braid":
        root, body, tip = BRAID_ROOT, BRAID_BODY, BRAID_TIP
    else:
        root, body, tip = ROOT_COLOR, BODY_COLOR, TIP_COLOR
    first = smoothstep(root_t / 0.58)
    second = smoothstep((root_t - 0.58) / 0.42)
    color = root[None, :] * (1.0 - first[:, None]) + body[None, :] * first[:, None]
    color = color * (1.0 - second[:, None]) + tip[None, :] * second[:, None]
    return color


def island_fibers(
    island_id: int,
    area: int,
    root_t: np.ndarray,
    across: np.ndarray,
    part: str,
) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    light = np.zeros_like(root_t, dtype=np.float32)
    dark = np.zeros_like(root_t, dtype=np.float32)
    macro = np.zeros_like(root_t, dtype=np.float32)
    if area < 90:
        return light, dark, macro, np.zeros_like(root_t, dtype=np.float32)

    rng = random.Random(9307 + island_id * 151)
    estimated_width = max(8.0, math.sqrt(area) * 0.78)
    fine_count = int(np.clip(round(estimated_width / 8.5), 5, 30))
    macro_count = int(np.clip(round(estimated_width / 42.0), 2, 7))
    fade = np.power(np.clip(np.sin(np.pi * root_t), 0.0, 1.0), 0.28)

    for index in range(macro_count):
        center = (index + 0.5) / macro_count + rng.uniform(-0.07, 0.07)
        amplitude = rng.uniform(0.018, 0.060)
        phase = rng.uniform(-math.pi, math.pi)
        curve = center + amplitude * np.sin(math.pi * root_t + phase)
        width = rng.uniform(0.060, 0.105)
        ridge = np.exp(-np.square((across - curve) / width)) * fade
        sign = 1.0 if index % 2 == 0 else -0.8
        macro += ridge.astype(np.float32) * sign

    for index in range(fine_count):
        center = (index + 0.5) / fine_count + rng.uniform(-0.015, 0.015)
        amplitude = rng.uniform(0.008, 0.030)
        phase = rng.uniform(-math.pi, math.pi)
        secondary = rng.uniform(0.003, 0.012)
        curve = (
            center
            + amplitude * np.sin(math.pi * root_t + phase)
            + secondary * np.sin(2.0 * math.pi * root_t + phase * 0.7)
        )
        width = rng.uniform(0.010, 0.024)
        ridge = np.exp(-np.square((across - curve) / width)) * fade
        if index % 3 == 1:
            dark = np.maximum(dark, ridge.astype(np.float32) * rng.uniform(0.36, 0.60))
        else:
            light = np.maximum(light, ridge.astype(np.float32) * rng.uniform(0.38, 0.68))

    band_center = 0.44 + rng.uniform(-0.025, 0.030)
    band_width = rng.uniform(0.028, 0.046) if part != "braid" else rng.uniform(0.040, 0.062)
    band = np.exp(-np.square((root_t - band_center) / band_width))
    breakup = 0.52 + 0.48 * np.clip(light * 1.25 + 0.25, 0.0, 1.0)
    shine = band.astype(np.float32) * breakup.astype(np.float32)
    return light, dark, np.clip(macro, -1.0, 1.0), shine


def head_world_y_map(
    meshes: list[dict],
) -> tuple[np.ndarray, np.ndarray, float, float]:
    y_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    valid = np.zeros((SIZE, SIZE), dtype=bool)
    values: list[float] = []
    braid_meshes = {
        "pasted__pasted__polySurface26Shape",
        "pasted__pasted__pasted__pasted__polySurface94Shape",
        "polySurfaceShape68",
    }
    for mesh in meshes:
        if mesh["name"] in braid_meshes:
            continue
        for face in mesh["faces"]:
            classified = partitions.classify_face(mesh, face)
            if classified and classified[0] == "braid":
                continue
            uv_points = [aligned.uv_to_px(mesh["uvs"][index]) for index in face["uvs"]]
            world_y = [float(mesh["vertices"][index][1]) for index in face["verts"]]
            values.extend(world_y)
            for index in range(1, len(uv_points) - 1):
                aligned.rasterize_triangle_world_y(
                    y_map,
                    valid,
                    [uv_points[0], uv_points[index], uv_points[index + 1]],
                    [world_y[0], world_y[index], world_y[index + 1]],
                )
    if not values:
        raise RuntimeError("No head-hair world-Y samples were found")
    return valid, y_map, min(values), max(values)


def create_texture(
    meshes: list[dict],
    uv_mask: np.ndarray,
    labels: np.ndarray,
    regions: dict[int, aligned.ShapeRegion],
    flips: dict[int, bool],
    parts: dict[int, str],
    head_valid: np.ndarray,
    head_y: np.ndarray,
    head_y_min: float,
    head_y_max: float,
    head_shine_y: float,
) -> tuple[
    np.ndarray,
    np.ndarray,
    np.ndarray,
    np.ndarray,
    np.ndarray,
    np.ndarray,
]:
    base_color = np.zeros((SIZE, SIZE, 3), dtype=np.float32)
    light_alpha_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    dark_alpha_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    shine_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    strand_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    areas = np.bincount(labels.ravel())

    for island_id, region in regions.items():
        ys, xs, root_t, across = pink.region_coordinates(
            region, flips.get(island_id, False)
        )
        area = int(areas[island_id]) if island_id < len(areas) else len(xs)
        part = parts.get(island_id, "unclassified")
        palette_t = root_t.copy()
        local_head_valid = head_valid[ys, xs]
        if part != "braid" and np.any(local_head_valid):
            head_span = max(1e-5, head_y_max - head_y_min)
            world_t = np.clip((head_y_max - head_y[ys, xs]) / head_span, 0.0, 1.0)
            palette_t[local_head_valid] = world_t[local_head_valid]
        base = palette_gradient(palette_t, part)

        edge = np.power(np.abs(across - 0.5) * 2.0, 1.45)
        center_glow = np.exp(-np.square((across - 0.50) / 0.34))
        base += (center_glow * 9.0 - edge * 18.0)[:, None]

        light, dark, macro, shine = island_fibers(
            island_id, area, root_t, across, part
        )
        if part != "braid":
            shine = np.zeros_like(shine)
        macro_delta = macro[:, None] * np.array([8.0, 5.0, 7.0], dtype=np.float32)
        base += macro_delta
        light_alpha = np.clip(light * 0.44, 0.0, 0.44)
        dark_alpha = np.clip(dark * 0.26, 0.0, 0.26)
        shine_alpha = np.clip(shine * 0.62, 0.0, 0.62)
        base_color[ys, xs] = base
        light_alpha_map[ys, xs] = np.maximum(light_alpha_map[ys, xs], light_alpha)
        dark_alpha_map[ys, xs] = np.maximum(dark_alpha_map[ys, xs], dark_alpha)
        shine_map[ys, xs] = np.maximum(shine_map[ys, xs], shine_alpha)
        strand_map[ys, xs] = np.maximum(strand_map[ys, xs], np.maximum(light, dark))

    # All head-hair pieces share one world-space shine band, so it crosses UV seams cleanly.
    head_span = max(1e-5, head_y_max - head_y_min)
    head_band_center = head_shine_y
    head_band_sigma = head_span * 0.017
    head_band = np.zeros((SIZE, SIZE), dtype=np.float32)
    head_band[head_valid] = np.exp(
        -np.square((head_y[head_valid] - head_band_center) / head_band_sigma)
    ).astype(np.float32)
    head_breakup = 0.48 + 0.52 * np.clip(strand_map, 0.0, 1.0)
    head_alpha = np.clip(head_band * head_breakup * 0.60, 0.0, 0.60)
    shine_map = np.maximum(shine_map, head_alpha)

    inside_distance = ndi.distance_transform_edt(uv_mask)
    edge_alpha = np.clip((3.4 - inside_distance) / 3.4, 0.0, 1.0) * 0.45
    edge_alpha[~uv_mask] = 0.0
    base_color = (
        base_color * (1.0 - edge_alpha[:, :, None])
        + EDGE_COLOR * edge_alpha[:, :, None]
    )
    base_color[~uv_mask] = 0.0

    strand_alpha = 1.0 - (1.0 - light_alpha_map) * (1.0 - dark_alpha_map)
    strand_weighted = (
        LIGHT_STRAND * (light_alpha_map * (1.0 - dark_alpha_map))[:, :, None]
        + DARK_STRAND * dark_alpha_map[:, :, None]
    )
    strand_rgb = np.zeros_like(base_color)
    valid_strand = strand_alpha > 1e-6
    strand_rgb[valid_strand] = (
        strand_weighted[valid_strand] / strand_alpha[valid_strand][:, None]
    )

    color = (
        base_color * (1.0 - strand_alpha[:, :, None])
        + strand_rgb * strand_alpha[:, :, None]
    )
    color = (
        color * (1.0 - shine_map[:, :, None])
        + SHINE_COLOR * shine_map[:, :, None]
    )
    color[~uv_mask] = 0.0

    basecolor = np.clip(color, 0, 255).astype(np.uint8)
    basecolor = aligned.add_padding(basecolor, uv_mask, PADDING)
    shine_mask = np.clip(shine_map * 255.0, 0, 255).astype(np.uint8)
    strand_mask = np.clip(strand_map * 255.0, 0, 255).astype(np.uint8)

    color_rgba = np.zeros((SIZE, SIZE, 4), dtype=np.uint8)
    color_rgba[:, :, :3] = np.clip(base_color, 0, 255).astype(np.uint8)
    color_rgba[uv_mask, 3] = 255

    strand_rgba = np.zeros((SIZE, SIZE, 4), dtype=np.uint8)
    strand_rgba[:, :, :3] = np.clip(strand_rgb, 0, 255).astype(np.uint8)
    strand_rgba[:, :, 3] = np.clip(strand_alpha * 255.0, 0, 255).astype(np.uint8)
    strand_rgba[~uv_mask] = 0

    highlight_rgba = np.zeros((SIZE, SIZE, 4), dtype=np.uint8)
    highlight_rgba[:, :, :3] = SHINE_COLOR.astype(np.uint8)
    highlight_rgba[:, :, 3] = np.clip(shine_map * 255.0, 0, 255).astype(np.uint8)
    highlight_rgba[~uv_mask] = 0

    color_rgba = aligned.add_padding(color_rgba, uv_mask, PADDING)
    strand_rgba = aligned.add_padding(strand_rgba, uv_mask, PADDING)
    highlight_rgba = aligned.add_padding(highlight_rgba, uv_mask, PADDING)
    return (
        basecolor,
        shine_mask,
        strand_mask,
        color_rgba,
        strand_rgba,
        highlight_rgba,
    )


def write_model() -> None:
    source = aligned.MODEL_PATH.read_text(encoding="utf-8", errors="ignore")
    old_path = "C:/Users/19308/Desktop/be874e24-dc94-48ba-971b-b02b1f9f66be.png"
    if old_path not in source:
        raise RuntimeError("Original texture path was not found in source model")
    MODEL.write_text(
        source.replace(old_path, TEXTURE.as_posix()),
        encoding="utf-8",
        newline="\n",
    )


def make_contact_sheet() -> None:
    views = [
        ("\u6b63\u9762", OUT_DIR / "preview_\u6b63\u9762.png"),
        ("\u80cc\u9762", OUT_DIR / "preview_\u80cc\u9762.png"),
        ("\u5de6\u4fa7", OUT_DIR / "preview_\u5de6\u4fa7.png"),
        ("\u53f3\u4fa7", OUT_DIR / "preview_\u53f3\u4fa7.png"),
    ]
    if not all(path.is_file() for _, path in views):
        return
    canvas = Image.new("RGB", (1440, 1920), (29, 30, 33))
    font_path = Path("C:/Windows/Fonts/msyhbd.ttc")
    font = ImageFont.truetype(str(font_path), 30) if font_path.is_file() else ImageFont.load_default()
    draw = ImageDraw.Draw(canvas)
    for index, (label, path) in enumerate(views):
        image = Image.open(path).convert("RGB")
        fitted = ImageOps.fit(image, (680, 880), method=Image.Resampling.LANCZOS)
        x = 20 + (index % 2) * 710
        y = 50 + (index // 2) * 940
        canvas.paste(fitted, (x, y))
        draw.text((x + 12, y - 38), label, fill=(245, 220, 229), font=font)
    canvas.save(CONTACT_SHEET, optimize=True)


def save_layer_outputs(
    color_rgba: np.ndarray,
    strand_rgba: np.ndarray,
    highlight_rgba: np.ndarray,
) -> np.ndarray:
    LAYER_DIR.mkdir(parents=True, exist_ok=True)
    color_image = Image.fromarray(color_rgba, mode="RGBA")
    strand_image = Image.fromarray(strand_rgba, mode="RGBA")
    highlight_image = Image.fromarray(highlight_rgba, mode="RGBA")
    color_image.save(COLOR_LAYER, optimize=True)
    strand_image.save(STRAND_LAYER, optimize=True)
    highlight_image.save(HIGHLIGHT_LAYER, optimize=True)

    merged_rgba = Image.alpha_composite(
        Image.alpha_composite(color_image, strand_image), highlight_image
    )
    merged_rgb = Image.new("RGB", (SIZE, SIZE), (0, 0, 0))
    merged_rgb.paste(merged_rgba.convert("RGB"), mask=merged_rgba.getchannel("A"))
    merged_rgb.save(LAYER_COMPOSITE, optimize=True)

    background = Image.new("RGBA", (SIZE, SIZE), (38, 39, 43, 255))
    tiles = [
        ("\u989c\u8272\u56fe\u5c42", Image.alpha_composite(background, color_image)),
        ("\u53d1\u4e1d\u56fe\u5c42", Image.alpha_composite(background, strand_image)),
        ("\u9ad8\u5149\u56fe\u5c42", Image.alpha_composite(background, highlight_image)),
        ("\u4e09\u5c42\u5408\u6210", Image.alpha_composite(background, merged_rgba)),
    ]
    preview = Image.new("RGB", (1400, 1480), (25, 26, 29))
    draw = ImageDraw.Draw(preview)
    font_path = Path("C:/Windows/Fonts/msyhbd.ttc")
    font = ImageFont.truetype(str(font_path), 28) if font_path.is_file() else ImageFont.load_default()
    for index, (label, image) in enumerate(tiles):
        tile = ImageOps.fit(image.convert("RGB"), (660, 660), method=Image.Resampling.LANCZOS)
        x = 25 + (index % 2) * 690
        y = 60 + (index // 2) * 710
        preview.paste(tile, (x, y))
        draw.text((x + 8, y - 38), label, fill=(248, 221, 231), font=font)
    preview.save(LAYER_PREVIEW, optimize=True)

    stack_xml = """<?xml version="1.0" encoding="UTF-8"?>
<image version="0.0.1" w="2048" h="2048" name="Soft Pink Hair Layers">
  <stack name="root">
    <layer name="\u9ad8\u5149\u56fe\u5c42" src="data/03_highlight.png" visibility="visible" opacity="1.0" composite-op="svg:src-over"/>
    <layer name="\u53d1\u4e1d\u56fe\u5c42" src="data/02_strands.png" visibility="visible" opacity="1.0" composite-op="svg:src-over"/>
    <layer name="\u989c\u8272\u56fe\u5c42" src="data/01_color.png" visibility="visible" opacity="1.0" composite-op="svg:src-over"/>
  </stack>
</image>
"""
    thumbnail = merged_rgba.copy()
    thumbnail.thumbnail((256, 256), Image.Resampling.LANCZOS)
    thumbnail_path = LAYER_DIR / "_ora_thumbnail.png"
    thumbnail.save(thumbnail_path, optimize=True)
    with zipfile.ZipFile(LAYERED_ORA, "w") as archive:
        archive.writestr(
            zipfile.ZipInfo("mimetype"),
            "image/openraster",
            compress_type=zipfile.ZIP_STORED,
        )
        archive.writestr("stack.xml", stack_xml.encode("utf-8"))
        archive.write(COLOR_LAYER, "data/01_color.png")
        archive.write(STRAND_LAYER, "data/02_strands.png")
        archive.write(HIGHLIGHT_LAYER, "data/03_highlight.png")
        archive.write(LAYER_COMPOSITE, "mergedimage.png")
        archive.write(thumbnail_path, "Thumbnails/thumbnail.png")
    thumbnail_path.unlink()
    return np.asarray(merged_rgb, dtype=np.uint8)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    backup_current()
    meshes = aligned.load_visible_meshes()
    uv_mask, labels, island_count = aligned.build_uv_mask(meshes)
    regions = complete_regions(labels, island_count)
    flips = pink.root_flip_by_island(meshes, labels, regions)
    parts = island_parts(meshes, labels)
    head_valid, head_y, head_y_min, head_y_max = head_world_y_map(meshes)
    _, _, head_shine_y = aligned.front_bangs_world_y(meshes)
    (
        basecolor,
        shine_mask,
        strand_mask,
        color_rgba,
        strand_rgba,
        highlight_rgba,
    ) = create_texture(
        meshes,
        uv_mask,
        labels,
        regions,
        flips,
        parts,
        head_valid,
        head_y,
        head_y_min,
        head_y_max,
        head_shine_y,
    )
    basecolor = save_layer_outputs(color_rgba, strand_rgba, highlight_rgba)

    base_image = Image.fromarray(basecolor, mode="RGB")
    base_image.save(TEXTURE, optimize=True)
    Image.fromarray(shine_mask, mode="L").save(SHINE_MASK, optimize=True)
    Image.fromarray(strand_mask, mode="L").save(STRAND_MASK, optimize=True)
    aligned.draw_wire(base_image, meshes, color=(245, 245, 245), width=1).save(
        WIRE_CHECK, optimize=True
    )
    aligned.draw_direction_check(meshes, labels, regions).save(
        DIRECTION_CHECK, optimize=True
    )
    write_model()

    summary = {
        "version": f"soft-pink-strands-{TRIAL_VERSION}",
        "reference": str(REFERENCE),
        "source_model": str(aligned.MODEL_PATH),
        "texture": str(TEXTURE),
        "model": str(MODEL),
        "texture_size": [SIZE, SIZE],
        "uv_connected_components": island_count,
        "regions_recorded": len(regions),
        "padding_pixels": PADDING,
        "backup": str(BACKUP_DIR),
        "previous_trial_backup": str(PREVIOUS_BACKUP_DIR) if TRIAL_VERSION != "v1" else None,
        "head_shine_world_y": round(head_shine_y, 5),
        "layers": {
            "color": str(COLOR_LAYER),
            "strands": str(STRAND_LAYER),
            "highlight": str(HIGHLIGHT_LAYER),
            "composite": str(LAYER_COMPOSITE),
            "openraster": str(LAYERED_ORA),
        },
        "rollback": "Delete this trial folder and keep using hair_pink_anime_trial.",
    }
    (OUT_DIR / "README.txt").write_text(
        f"Soft pink hair strand texture trial {TRIAL_VERSION}\n"
        "The previous version is copied under 00_backup_current and was not overwritten.\n"
        "Target: soft pink root-to-tip gradient, many longitudinal fibers, narrow shine band.\n"
        "Rollback: delete this trial folder and continue using the previous trial or C:/Users/19308/Desktop/hair_pink_anime_trial.\n\n"
        + json.dumps(summary, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    main()
