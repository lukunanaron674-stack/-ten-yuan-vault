from __future__ import annotations

import math
import random
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy import ndimage as ndi

import align_hair_tone_shape as aligned


DESKTOP = Path("C:/Users/19308/Desktop")
OUT_DIR = DESKTOP / "hair_pink_anime_trial"
BASECOLOR_PATH = OUT_DIR / "hair_pink_basecolor_uv.png"
CEL_MASK_PATH = OUT_DIR / "hair_pink_cel_mask_uv.png"
STRAND_MASK_PATH = OUT_DIR / "hair_pink_strand_mask_uv.png"
UV_CHECK_PATH = OUT_DIR / "hair_pink_uv_wire_check.png"
DIRECTION_PATH = OUT_DIR / "hair_root_tip_direction.png"
MODEL_PATH = OUT_DIR / "hair_pink_anime_trial.ma"

SIZE = aligned.SIZE
PADDING = 20

BASE_PINK = np.array([222.0, 119.0, 158.0], dtype=np.float32)
SHADOW_PINK = np.array([112.0, 48.0, 82.0], dtype=np.float32)
HIGHLIGHT_PINK = np.array([255.0, 210.0, 225.0], dtype=np.float32)
STRAND_DARK = np.array([91.0, 37.0, 64.0], dtype=np.float32)
STRAND_LIGHT = np.array([255.0, 226.0, 236.0], dtype=np.float32)
OUTLINE_COLOR = np.array([67.0, 29.0, 49.0], dtype=np.float32)


def build_regions(labels: np.ndarray, count: int) -> dict[int, aligned.ShapeRegion]:
    areas = np.bincount(labels.ravel())
    regions: dict[int, aligned.ShapeRegion] = {}
    for island_id in range(1, count + 1):
        if island_id >= len(areas) or areas[island_id] < 4:
            continue
        component = labels == island_id
        x0, y0, x1, y1 = aligned.bbox(component)
        local = component[y0 : y1 + 1, x0 : x1 + 1]
        regions[island_id] = aligned.make_region(local, x0, y0)
    return regions


def root_flip_by_island(
    meshes: list[dict],
    labels: np.ndarray,
    regions: dict[int, aligned.ShapeRegion],
) -> dict[int, bool]:
    samples = aligned.island_world_y_samples(meshes, labels)
    result: dict[int, bool] = {}
    for island_id, region in regions.items():
        data = samples.get(island_id, [])
        if len(data) < 4:
            result[island_id] = False
            continue
        points = np.asarray([(x, y) for x, y, _ in data], dtype=np.float64)
        world_y = np.asarray([value for _, _, value in data], dtype=np.float64)
        t = (points - region.frame.center) @ region.frame.major
        if np.std(t) < 1e-6 or np.std(world_y) < 1e-6:
            result[island_id] = False
            continue
        correlation = float(np.corrcoef(t, world_y)[0, 1])
        result[island_id] = correlation > 0.0
    return result


def region_coordinates(
    region: aligned.ShapeRegion,
    flip_root: bool,
) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    ys, xs = np.where(region.mask)
    points = np.column_stack((xs + region.x0, ys + region.y0)).astype(np.float64)
    centered = points - region.frame.center
    t = centered @ region.frame.major
    s = centered @ region.frame.minor
    span = max(1e-6, region.frame.t_max - region.frame.t_min)
    canonical_t = np.clip((t - region.frame.t_min) / span, 0.0, 1.0)
    root_t = 1.0 - canonical_t if flip_root else canonical_t
    s_min = aligned.sample_profile(region.s_min, canonical_t)
    s_max = aligned.sample_profile(region.s_max, canonical_t)
    across = np.clip((s - s_min) / np.maximum(1e-5, s_max - s_min), 0.0, 1.0)
    return ys + region.y0, xs + region.x0, root_t, across


def point_on_region(
    region: aligned.ShapeRegion,
    flip_root: bool,
    root_t: float,
    across: float,
) -> tuple[float, float]:
    canonical_t = 1.0 - root_t if flip_root else root_t
    canonical_t = float(np.clip(canonical_t, 0.0, 1.0))
    t_value = region.frame.t_min + canonical_t * (
        region.frame.t_max - region.frame.t_min
    )
    s_min = float(aligned.sample_profile(region.s_min, np.asarray([canonical_t]))[0])
    s_max = float(aligned.sample_profile(region.s_max, np.asarray([canonical_t]))[0])
    s_value = s_min + float(np.clip(across, 0.0, 1.0)) * (s_max - s_min)
    point = (
        region.frame.center
        + t_value * region.frame.major
        + s_value * region.frame.minor
    )
    return float(point[0]), float(point[1])


def build_coordinate_maps(
    uv_mask: np.ndarray,
    regions: dict[int, aligned.ShapeRegion],
    flips: dict[int, bool],
) -> tuple[np.ndarray, np.ndarray]:
    root_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    across_map = np.full((SIZE, SIZE), 0.5, dtype=np.float32)
    for island_id, region in regions.items():
        ys, xs, root_t, across = region_coordinates(
            region, flips.get(island_id, False)
        )
        root_map[ys, xs] = root_t.astype(np.float32)
        across_map[ys, xs] = across.astype(np.float32)
    root_map[~uv_mask] = 0.0
    across_map[~uv_mask] = 0.5
    return root_map, across_map


def draw_strand_masks(
    labels: np.ndarray,
    regions: dict[int, aligned.ShapeRegion],
    flips: dict[int, bool],
) -> tuple[np.ndarray, np.ndarray]:
    dark_image = Image.new("L", (SIZE, SIZE), 0)
    light_image = Image.new("L", (SIZE, SIZE), 0)
    dark_draw = ImageDraw.Draw(dark_image)
    light_draw = ImageDraw.Draw(light_image)
    areas = np.bincount(labels.ravel())

    for island_id, region in regions.items():
        area = int(areas[island_id]) if island_id < len(areas) else 0
        if area < 180:
            continue
        width_hint = max(region.mask.shape)
        count = int(np.clip(round(math.sqrt(area) / 72.0), 1, 5))
        rng = random.Random(4103 + island_id * 97)
        positions = np.linspace(0.22, 0.78, count)

        for line_index, position in enumerate(positions):
            offset = rng.uniform(-0.055, 0.055)
            curve = rng.uniform(-0.045, 0.045)
            phase = rng.uniform(-0.5, 0.5)
            points = []
            for root_t in np.linspace(0.08, 0.94, 58):
                across = (
                    position
                    + offset
                    + curve * math.sin(math.pi * (root_t + phase))
                    + 0.013 * math.sin(2.0 * math.pi * root_t + line_index)
                )
                points.append(
                    point_on_region(
                        region,
                        flips.get(island_id, False),
                        float(root_t),
                        float(np.clip(across, 0.12, 0.88)),
                    )
                )
            line_width = 1 if area < 1800 else 2 if area < 10000 else 3
            dark_draw.line(points, fill=190, width=line_width)

        if area > 850:
            highlight_q = 0.42 + rng.uniform(-0.08, 0.08)
            points = []
            for root_t in np.linspace(0.18, 0.68, 38):
                across = highlight_q + 0.025 * math.sin(math.pi * root_t + phase)
                points.append(
                    point_on_region(
                        region,
                        flips.get(island_id, False),
                        float(root_t),
                        float(np.clip(across, 0.18, 0.82)),
                    )
                )
            light_width = 1 if area < 8000 else 2
            light_draw.line(points, fill=160, width=light_width)

    dark = np.asarray(dark_image.filter(ImageFilter.GaussianBlur(0.32)), dtype=np.float32) / 255.0
    light = np.asarray(light_image.filter(ImageFilter.GaussianBlur(0.25)), dtype=np.float32) / 255.0
    dark[labels == 0] = 0.0
    light[labels == 0] = 0.0
    return dark, light


def composite_texture(
    uv_mask: np.ndarray,
    root_map: np.ndarray,
    across_map: np.ndarray,
    dark_strands: np.ndarray,
    light_strands: np.ndarray,
) -> tuple[np.ndarray, np.ndarray]:
    cel_source = np.asarray(
        Image.open(aligned.ASCII_TEXTURE).convert("RGB")
    )[:, :, 0]
    gray_source = np.asarray(
        Image.open(aligned.ASCII_GRAY_TEXTURE).convert("RGB")
    ).mean(axis=2)
    light_region = cel_source >= 140

    color = np.zeros((SIZE, SIZE, 3), dtype=np.float32)
    color[uv_mask & ~light_region] = SHADOW_PINK
    color[uv_mask & light_region] = BASE_PINK

    root_gradient = 0.94 + 0.075 * root_map
    edge_shade = 1.0 - 0.075 * np.power(np.abs(across_map - 0.5) * 2.0, 1.6)
    modulation = np.clip(root_gradient * edge_shade, 0.82, 1.08)
    color[uv_mask] *= modulation[uv_mask, None]

    broad_highlight = (
        uv_mask
        & light_region
        & (gray_source >= 205.0)
        & (root_map >= 0.16)
        & (root_map <= 0.82)
    )
    highlight_alpha = ndi.gaussian_filter(broad_highlight.astype(np.float32), 0.8) * 0.42
    color = color * (1.0 - highlight_alpha[:, :, None]) + HIGHLIGHT_PINK * highlight_alpha[:, :, None]

    dark_alpha = np.clip(dark_strands * 0.58, 0.0, 0.58)
    light_alpha = np.clip(light_strands * 0.40, 0.0, 0.40)
    color = color * (1.0 - dark_alpha[:, :, None]) + STRAND_DARK * dark_alpha[:, :, None]
    color = color * (1.0 - light_alpha[:, :, None]) + STRAND_LIGHT * light_alpha[:, :, None]

    inside_distance = ndi.distance_transform_edt(uv_mask)
    outline = uv_mask & (inside_distance <= 2.4)
    outline_alpha = ndi.gaussian_filter(outline.astype(np.float32), 0.42) * 0.88
    color = color * (1.0 - outline_alpha[:, :, None]) + OUTLINE_COLOR * outline_alpha[:, :, None]

    color[~uv_mask] = 0.0
    basecolor = np.clip(color, 0, 255).astype(np.uint8)
    basecolor = aligned.add_padding(basecolor, uv_mask, PADDING)

    cel_mask = np.zeros((SIZE, SIZE, 3), dtype=np.uint8)
    cel_mask[uv_mask & ~light_region] = (45, 45, 45)
    cel_mask[uv_mask & light_region] = (230, 230, 230)
    cel_mask = aligned.add_padding(cel_mask, uv_mask, PADDING)
    return basecolor, cel_mask


def write_model(texture_path: Path) -> None:
    source = aligned.MODEL_PATH.read_text(encoding="utf-8", errors="ignore")
    old_path = "C:/Users/19308/Desktop/be874e24-dc94-48ba-971b-b02b1f9f66be.png"
    if old_path not in source:
        raise RuntimeError("Original file texture path was not found")
    MODEL_PATH.write_text(
        source.replace(old_path, texture_path.as_posix()),
        encoding="utf-8",
        newline="\n",
    )


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    meshes = aligned.load_visible_meshes()
    uv_mask, labels, island_count = aligned.build_uv_mask(meshes)
    regions = build_regions(labels, island_count)
    flips = root_flip_by_island(meshes, labels, regions)
    root_map, across_map = build_coordinate_maps(uv_mask, regions, flips)
    dark_strands, light_strands = draw_strand_masks(labels, regions, flips)
    basecolor, cel_mask = composite_texture(
        uv_mask, root_map, across_map, dark_strands, light_strands
    )

    base_image = Image.fromarray(basecolor, "RGB")
    base_image.save(BASECOLOR_PATH, optimize=True)
    Image.fromarray(cel_mask, "RGB").save(CEL_MASK_PATH, optimize=True)
    strand_mask = np.clip((dark_strands + light_strands) * 255.0, 0, 255).astype(np.uint8)
    Image.fromarray(strand_mask, "L").save(STRAND_MASK_PATH, optimize=True)
    aligned.draw_wire(base_image, meshes).save(UV_CHECK_PATH, optimize=True)
    aligned.draw_direction_check(meshes, labels, regions).save(DIRECTION_PATH, optimize=True)
    write_model(BASECOLOR_PATH)

    (OUT_DIR / "README.txt").write_text(
        "\n".join(
            [
                "Pink anime hair texture trial",
                "Direction: subdued sci-fi anime hair, rose-pink base, wine-red cel shadow, cool-pink highlight.",
                f"BaseColor: {BASECOLOR_PATH}",
                f"Cel mask: {CEL_MASK_PATH}",
                f"Strand mask: {STRAND_MASK_PATH}",
                f"Maya: {MODEL_PATH}",
                f"UV islands: {len(regions)}",
                f"Padding: {PADDING}px",
            ]
        ),
        encoding="utf-8",
    )
    print("output", OUT_DIR)
    print("uv_islands", len(regions))
    print("texture", BASECOLOR_PATH)
    print("maya", MODEL_PATH)


if __name__ == "__main__":
    sys.exit(main())
