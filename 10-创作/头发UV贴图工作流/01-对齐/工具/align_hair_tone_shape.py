from __future__ import annotations

import shutil
import sys
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi
from scipy.spatial import ConvexHull, QhullError

import build_front_hair_uv_id as maya_uv


DESKTOP = Path.home() / "Desktop"
MODEL_PATH = DESKTOP / "\u5934\u53d1.ma"
SOURCE_PATH = Path(
    "C:/Users/19308/.codex/attachments/"
    "a8a6ecdb-73e7-4984-ab81-e74f31284965/image-1.png"
)
OUT_DIR = DESKTOP / "\u5934\u53d1_\u4e8c\u5206\u5f62\u72b6UV\u5bf9\u9f50_\u6700\u7ec8"

GRAY_TEXTURE = OUT_DIR / "01_\u539f\u4e8c\u5206\u5f62\u72b6_\u6cbf\u53d1\u6d41UV\u5bf9\u9f50.png"
TWO_TONE_TEXTURE = OUT_DIR / "02_\u7eaf\u4eae\u6697\u4e24\u8272_UV\u5bf9\u9f50.png"
WIRE_CHECK = OUT_DIR / "03_\u771f\u5b9eUV\u767d\u7ebf\u68c0\u67e5.png"
DIRECTION_CHECK = OUT_DIR / "04_\u53d1\u6839\u5230\u53d1\u68a2\u65b9\u5411\u68c0\u67e5.png"
COMPARE_PATH = OUT_DIR / "05_\u5bf9\u9f50\u524d\u540e\u5bf9\u6bd4.png"
MODEL_GRAY = OUT_DIR / "\u5934\u53d1_\u4e8c\u5206\u5f62\u72b6\u5df2\u5bf9\u9f50.ma"
MODEL_TWO_TONE = OUT_DIR / "\u5934\u53d1_\u7eaf\u4e8c\u5206\u5df2\u5bf9\u9f50.ma"
ASCII_DIR = DESKTOP / "hair_uv_tone_aligned_final"
ASCII_TEXTURE = ASCII_DIR / "hair_two_tone_uv_aligned.png"
ASCII_GRAY_TEXTURE = ASCII_DIR / "hair_tone_shape_uv_aligned.png"
ASCII_MODEL = ASCII_DIR / "hair_two_tone_uv_aligned.ma"

SIZE = 2048
FOREGROUND_THRESHOLD = 8
TWO_TONE_THRESHOLD = 142
LIGHT_VALUE = 214
DARK_VALUE = 76
PADDING = 20
PROFILE_BINS = 384


@dataclass
class Frame:
    center: np.ndarray
    major: np.ndarray
    minor: np.ndarray
    t_min: float
    t_max: float


@dataclass
class ShapeRegion:
    mask: np.ndarray
    x0: int
    y0: int
    frame: Frame
    s_min: np.ndarray
    s_max: np.ndarray


def load_visible_meshes() -> list[dict]:
    lines = MODEL_PATH.read_text(encoding="utf-8", errors="ignore").splitlines()
    nodes = maya_uv.node_blocks(lines)
    transforms = maya_uv.parse_transforms(nodes)
    meshes: list[dict] = []
    for node in nodes:
        if node["type"] != "mesh" or not maya_uv.is_visible(node["parent"], transforms):
            continue
        mesh = maya_uv.parse_mesh(node)
        if mesh["vertices"] and mesh["faces"]:
            meshes.append(mesh)
    return meshes


def uv_to_px(uv: tuple[float, float]) -> tuple[int, int]:
    u, v = uv
    return round(u * (SIZE - 1)), round((1.0 - v) * (SIZE - 1))


def build_uv_mask(meshes: list[dict]) -> tuple[np.ndarray, np.ndarray, int]:
    image = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(image)
    for mesh in meshes:
        for face in mesh["faces"]:
            draw.polygon([uv_to_px(uv) for uv in maya_uv.uv_poly(mesh, face)], fill=255)
    mask = np.asarray(image) > 0
    labels, count = ndi.label(mask, structure=np.ones((3, 3), dtype=np.uint8))
    return mask, labels, count


def bbox(mask: np.ndarray) -> tuple[int, int, int, int]:
    ys, xs = np.where(mask)
    return int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())


def local_convex_envelope(mask: np.ndarray) -> np.ndarray:
    ys, xs = np.where(mask)
    if len(xs) < 3:
        return ndi.binary_fill_holes(mask)
    points = np.column_stack((xs, ys))
    if len(points) > 8000:
        points = points[:: max(1, len(points) // 8000)]
    try:
        hull = ConvexHull(points)
    except QhullError:
        return ndi.binary_fill_holes(mask)
    result = Image.new("L", (mask.shape[1], mask.shape[0]), 0)
    polygon = [tuple(map(int, point)) for point in points[hull.vertices]]
    ImageDraw.Draw(result).polygon(polygon, fill=255)
    return np.asarray(result) > 0


def canonical_major(mask: np.ndarray, x0: int, y0: int) -> Frame:
    ys, xs = np.where(mask)
    points = np.column_stack((xs + x0, ys + y0)).astype(np.float64)
    center = points.mean(axis=0)
    centered = points - center
    covariance = centered.T @ centered / max(1, len(points) - 1)
    values, vectors = np.linalg.eigh(covariance)
    major = vectors[:, int(np.argmax(values))]

    # Keep the atlas direction stable: vertical islands run top to bottom;
    # horizontal islands run left to right. The source and target then agree.
    if abs(major[1]) >= abs(major[0]):
        if major[1] < 0:
            major = -major
    elif major[0] < 0:
        major = -major
    minor = np.array((-major[1], major[0]), dtype=np.float64)
    t = centered @ major
    return Frame(center=center, major=major, minor=minor, t_min=float(t.min()), t_max=float(t.max()))


def section_profile(mask: np.ndarray, x0: int, y0: int, frame: Frame) -> tuple[np.ndarray, np.ndarray]:
    ys, xs = np.where(mask)
    points = np.column_stack((xs + x0, ys + y0)).astype(np.float64)
    centered = points - frame.center
    t = centered @ frame.major
    s = centered @ frame.minor
    span = max(1e-6, frame.t_max - frame.t_min)
    bins = np.clip(((t - frame.t_min) / span * (PROFILE_BINS - 1)).astype(int), 0, PROFILE_BINS - 1)

    s_min = np.full(PROFILE_BINS, np.inf, dtype=np.float64)
    s_max = np.full(PROFILE_BINS, -np.inf, dtype=np.float64)
    np.minimum.at(s_min, bins, s)
    np.maximum.at(s_max, bins, s)

    valid = np.isfinite(s_min) & np.isfinite(s_max)
    positions = np.arange(PROFILE_BINS)
    if valid.sum() == 1:
        s_min[:] = s_min[valid][0]
        s_max[:] = s_max[valid][0]
    else:
        s_min = np.interp(positions, positions[valid], s_min[valid])
        s_max = np.interp(positions, positions[valid], s_max[valid])
    s_min = ndi.gaussian_filter1d(s_min, sigma=1.2, mode="nearest")
    s_max = ndi.gaussian_filter1d(s_max, sigma=1.2, mode="nearest")
    return s_min, s_max


def make_region(mask: np.ndarray, x0: int, y0: int) -> ShapeRegion:
    frame = canonical_major(mask, x0, y0)
    s_min, s_max = section_profile(mask, x0, y0, frame)
    return ShapeRegion(mask=mask, x0=x0, y0=y0, frame=frame, s_min=s_min, s_max=s_max)


def sample_profile(values: np.ndarray, t_norm: np.ndarray) -> np.ndarray:
    return np.interp(
        np.clip(t_norm, 0.0, 1.0) * (PROFILE_BINS - 1),
        np.arange(PROFILE_BINS),
        values,
    )


def warp_source_to_target(source: np.ndarray, source_region: ShapeRegion, target_region: ShapeRegion) -> np.ndarray:
    target_ys, target_xs = np.where(target_region.mask)
    global_points = np.column_stack(
        (target_xs + target_region.x0, target_ys + target_region.y0)
    ).astype(np.float64)
    centered = global_points - target_region.frame.center
    target_t = centered @ target_region.frame.major
    target_s = centered @ target_region.frame.minor
    target_span = max(1e-6, target_region.frame.t_max - target_region.frame.t_min)
    t_norm = np.clip((target_t - target_region.frame.t_min) / target_span, 0.0, 1.0)

    target_s_min = sample_profile(target_region.s_min, t_norm)
    target_s_max = sample_profile(target_region.s_max, t_norm)
    width = np.maximum(1e-5, target_s_max - target_s_min)
    across = np.clip((target_s - target_s_min) / width, 0.0, 1.0)

    source_span = max(1e-6, source_region.frame.t_max - source_region.frame.t_min)
    source_t = source_region.frame.t_min + t_norm * source_span
    source_s_min = sample_profile(source_region.s_min, t_norm)
    source_s_max = sample_profile(source_region.s_max, t_norm)
    source_s = source_s_min + across * (source_s_max - source_s_min)
    source_points = (
        source_region.frame.center
        + source_t[:, None] * source_region.frame.major
        + source_s[:, None] * source_region.frame.minor
    )

    sx = np.clip(source_points[:, 0], 0, SIZE - 1)
    sy = np.clip(source_points[:, 1], 0, SIZE - 1)
    colors = np.empty((len(sx), 3), dtype=np.uint8)
    for channel in range(3):
        sampled = ndi.map_coordinates(
            source[:, :, channel].astype(np.float32),
            (sy, sx),
            order=1,
            mode="nearest",
        )
        colors[:, channel] = np.clip(sampled, 0, 255).astype(np.uint8)

    result = np.zeros((target_region.mask.shape[0], target_region.mask.shape[1], 3), dtype=np.uint8)
    result[target_ys, target_xs] = colors
    return result


def generic_two_tone(target_region: ShapeRegion) -> np.ndarray:
    ys, xs = np.where(target_region.mask)
    points = np.column_stack((xs + target_region.x0, ys + target_region.y0)).astype(np.float64)
    centered = points - target_region.frame.center
    t = centered @ target_region.frame.major
    s = centered @ target_region.frame.minor
    span = max(1e-6, target_region.frame.t_max - target_region.frame.t_min)
    t_norm = np.clip((t - target_region.frame.t_min) / span, 0.0, 1.0)
    s_min = sample_profile(target_region.s_min, t_norm)
    s_max = sample_profile(target_region.s_max, t_norm)
    across = np.clip((s - s_min) / np.maximum(1e-5, s_max - s_min), 0.0, 1.0)

    half_width = 0.28 + 0.13 * np.sin(np.pi * t_norm)
    light = (t_norm > 0.18) & (t_norm < 0.88) & (np.abs(across - 0.5) < half_width)
    values = np.where(light, LIGHT_VALUE, DARK_VALUE).astype(np.uint8)
    image = np.zeros((target_region.mask.shape[0], target_region.mask.shape[1], 3), dtype=np.uint8)
    image[ys, xs] = values[:, None]
    return image


def align_shapes(
    source: np.ndarray,
    uv_mask: np.ndarray,
    labels: np.ndarray,
    count: int,
) -> tuple[np.ndarray, dict[int, ShapeRegion], dict]:
    source_foreground = source.max(axis=2) > FOREGROUND_THRESHOLD
    distance, nearest_indices = ndi.distance_transform_edt(
        ~uv_mask, return_distances=True, return_indices=True
    )
    nearest_label = labels[nearest_indices[0], nearest_indices[1]]
    areas = np.bincount(labels.ravel())

    output = np.zeros_like(source)
    target_regions: dict[int, ShapeRegion] = {}
    mapped_islands = 0
    fallback_islands = 0

    for island_id in range(1, count + 1):
        if island_id >= len(areas) or areas[island_id] < 4:
            continue
        target_global = labels == island_id
        tx0, ty0, tx1, ty1 = bbox(target_global)
        target_local = target_global[ty0 : ty1 + 1, tx0 : tx1 + 1]
        target_region = make_region(target_local, tx0, ty0)
        target_regions[island_id] = target_region

        diagonal = float(np.hypot(tx1 - tx0 + 1, ty1 - ty0 + 1))
        max_distance = max(16.0, min(90.0, diagonal * 0.24))
        assigned = source_foreground & (nearest_label == island_id) & (distance <= max_distance)

        minimum = max(5, int(areas[island_id] * 0.006))
        if assigned.sum() >= minimum:
            sy, sx = np.where(assigned)
            sx0, sx1 = int(sx.min()), int(sx.max())
            sy0, sy1 = int(sy.min()), int(sy.max())
            assigned_local = assigned[sy0 : sy1 + 1, sx0 : sx1 + 1]
            envelope = local_convex_envelope(assigned_local)
            if envelope.sum() >= 3:
                source_region = make_region(envelope, sx0, sy0)
                island_rgb = warp_source_to_target(source, source_region, target_region)
                mapped_islands += 1
            else:
                island_rgb = generic_two_tone(target_region)
                fallback_islands += 1
        else:
            island_rgb = generic_two_tone(target_region)
            fallback_islands += 1

        destination = output[ty0 : ty1 + 1, tx0 : tx1 + 1]
        destination[target_local] = island_rgb[target_local]

    output = add_padding(output, uv_mask, PADDING)
    stats = {
        "uv_islands": int(sum(areas[1:] >= 4)),
        "mapped_islands": mapped_islands,
        "fallback_islands": fallback_islands,
        "uv_pixels": int(uv_mask.sum()),
    }
    return output, target_regions, stats


def add_padding(image: np.ndarray, mask: np.ndarray, pixels: int) -> np.ndarray:
    result = image.copy()
    distance, indices = ndi.distance_transform_edt(
        ~mask, return_distances=True, return_indices=True
    )
    region = (~mask) & (distance <= pixels)
    result[region] = result[indices[0][region], indices[1][region]]
    return result


def pure_two_tone(gray_image: np.ndarray, uv_mask: np.ndarray) -> np.ndarray:
    brightness = ndi.gaussian_filter(gray_image.mean(axis=2), sigma=1.1)
    light = brightness >= TWO_TONE_THRESHOLD
    labels, count = ndi.label(uv_mask, structure=np.ones((3, 3), dtype=np.uint8))
    areas = np.bincount(labels.ravel())
    cleaned = np.zeros_like(light)
    for island_id in range(1, count + 1):
        if island_id >= len(areas) or areas[island_id] < 4:
            continue
        island = labels == island_id
        x0, y0, x1, y1 = bbox(island)
        local_island = island[y0 : y1 + 1, x0 : x1 + 1]
        local_light = light[y0 : y1 + 1, x0 : x1 + 1] & local_island
        local_light = ndi.binary_closing(local_light, iterations=1)
        local_light = ndi.binary_opening(local_light, iterations=1)
        minimum = max(6, int(areas[island_id] * 0.0008))
        components, component_count = ndi.label(local_light)
        component_areas = np.bincount(components.ravel())
        for component_id in range(1, component_count + 1):
            if component_areas[component_id] < minimum:
                local_light[components == component_id] = False
        dark_holes, hole_count = ndi.label(local_island & ~local_light)
        hole_areas = np.bincount(dark_holes.ravel())
        for hole_id in range(1, hole_count + 1):
            if hole_areas[hole_id] < minimum:
                local_light[dark_holes == hole_id] = True
        cleaned[y0 : y1 + 1, x0 : x1 + 1] |= local_light & local_island

    value = np.where(cleaned, LIGHT_VALUE, DARK_VALUE).astype(np.uint8)
    result = np.zeros_like(gray_image)
    result[uv_mask] = value[uv_mask, None]
    return result


def rasterize_triangle_world_y(
    y_map: np.ndarray,
    valid: np.ndarray,
    points: list[tuple[int, int]],
    values: list[float],
) -> None:
    p0, p1, p2 = [np.asarray(point, dtype=np.float64) for point in points]
    x0 = max(0, int(np.floor(min(p0[0], p1[0], p2[0]))))
    x1 = min(SIZE - 1, int(np.ceil(max(p0[0], p1[0], p2[0]))))
    y0 = max(0, int(np.floor(min(p0[1], p1[1], p2[1]))))
    y1 = min(SIZE - 1, int(np.ceil(max(p0[1], p1[1], p2[1]))))
    if x1 < x0 or y1 < y0:
        return

    denominator = ((p1[1] - p2[1]) * (p0[0] - p2[0])) + (
        (p2[0] - p1[0]) * (p0[1] - p2[1])
    )
    if abs(denominator) < 1e-8:
        return
    yy, xx = np.mgrid[y0 : y1 + 1, x0 : x1 + 1]
    w0 = ((p1[1] - p2[1]) * (xx - p2[0]) + (p2[0] - p1[0]) * (yy - p2[1])) / denominator
    w1 = ((p2[1] - p0[1]) * (xx - p2[0]) + (p0[0] - p2[0]) * (yy - p2[1])) / denominator
    w2 = 1.0 - w0 - w1
    inside = (w0 >= -1e-5) & (w1 >= -1e-5) & (w2 >= -1e-5)
    local_y = w0 * values[0] + w1 * values[1] + w2 * values[2]
    target_y = y_map[y0 : y1 + 1, x0 : x1 + 1]
    target_valid = valid[y0 : y1 + 1, x0 : x1 + 1]
    target_y[inside] = local_y[inside]
    target_valid[inside] = True


def front_bangs_world_y(meshes: list[dict]) -> tuple[np.ndarray, np.ndarray, float]:
    y_map = np.zeros((SIZE, SIZE), dtype=np.float32)
    valid = np.zeros((SIZE, SIZE), dtype=bool)
    all_y: list[float] = []
    for mesh in meshes:
        if mesh["name"] != "polySurface89Shape":
            continue
        for face in mesh["faces"]:
            uv_points = [uv_to_px(mesh["uvs"][index]) for index in face["uvs"]]
            world_y = [float(mesh["vertices"][index][1]) for index in face["verts"]]
            all_y.extend(world_y)
            for index in range(1, len(uv_points) - 1):
                rasterize_triangle_world_y(
                    y_map,
                    valid,
                    [uv_points[0], uv_points[index], uv_points[index + 1]],
                    [world_y[0], world_y[index], world_y[index + 1]],
                )
    if not all_y:
        raise RuntimeError("Front bangs mesh polySurface89Shape was not found")
    minimum, maximum = min(all_y), max(all_y)
    cut_y = minimum + (maximum - minimum) * 0.52
    return valid, y_map, cut_y


def apply_front_bangs_flat_cut(two_tone: np.ndarray, meshes: list[dict]) -> tuple[np.ndarray, float]:
    front_mask, y_map, cut_y = front_bangs_world_y(meshes)
    result = two_tone.copy()
    front_light = front_mask & (y_map >= cut_y)
    front_dark = front_mask & ~front_light
    result[front_light] = (LIGHT_VALUE, LIGHT_VALUE, LIGHT_VALUE)
    result[front_dark] = (DARK_VALUE, DARK_VALUE, DARK_VALUE)
    return result, cut_y


def apply_under_face_shadow(two_tone: np.ndarray, meshes: list[dict]) -> tuple[np.ndarray, int]:
    mask_image = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(mask_image)
    face_count = 0
    for mesh in meshes:
        if mesh["name"] != "pasted__polySurface41Shape":
            continue
        for face in mesh["faces"]:
            x, y, z = maya_uv.face_centroid(mesh, face)
            if z > -1.0 and y < 124.0:
                draw.polygon(
                    [uv_to_px(uv) for uv in maya_uv.uv_poly(mesh, face)],
                    fill=255,
                )
                face_count += 1
    mask = np.asarray(mask_image) > 0
    result = two_tone.copy()
    result[mask] = (DARK_VALUE, DARK_VALUE, DARK_VALUE)
    return result, face_count


def draw_wire(image: Image.Image, meshes: list[dict], color=(255, 255, 255), width=2) -> Image.Image:
    output = image.convert("RGB").copy()
    draw = ImageDraw.Draw(output)
    for mesh in meshes:
        for face in mesh["faces"]:
            polygon = [uv_to_px(uv) for uv in maya_uv.uv_poly(mesh, face)]
            draw.line(polygon + [polygon[0]], fill=color, width=width)
    return output


def island_world_y_samples(meshes: list[dict], labels: np.ndarray) -> dict[int, list[tuple[float, float, float]]]:
    samples: dict[int, list[tuple[float, float, float]]] = {}
    for mesh in meshes:
        for face in mesh["faces"]:
            polygon = maya_uv.uv_poly(mesh, face)
            center_u = sum(point[0] for point in polygon) / len(polygon)
            center_v = sum(point[1] for point in polygon) / len(polygon)
            cx, cy = uv_to_px((center_u, center_v))
            island_id = int(labels[np.clip(cy, 0, SIZE - 1), np.clip(cx, 0, SIZE - 1)])
            if island_id <= 0:
                continue
            for uv_index, vertex_index in zip(face["uvs"], face["verts"]):
                px, py = uv_to_px(mesh["uvs"][uv_index])
                world_y = float(mesh["vertices"][vertex_index][1])
                samples.setdefault(island_id, []).append((px, py, world_y))
    return samples


def draw_direction_check(
    meshes: list[dict],
    labels: np.ndarray,
    regions: dict[int, ShapeRegion],
) -> Image.Image:
    image = Image.new("RGB", (SIZE, SIZE), (0, 0, 0))
    image = draw_wire(image, meshes, color=(135, 135, 145), width=1)
    draw = ImageDraw.Draw(image)
    samples = island_world_y_samples(meshes, labels)
    areas = np.bincount(labels.ravel())

    for island_id, region in regions.items():
        if island_id >= len(areas) or areas[island_id] < 450:
            continue
        data = samples.get(island_id, [])
        if len(data) < 4:
            continue
        points = np.asarray([(x, y) for x, y, _ in data], dtype=np.float64)
        world_y = np.asarray([value for _, _, value in data], dtype=np.float64)
        t = (points - region.frame.center) @ region.frame.major
        correlation = np.corrcoef(t, world_y)[0, 1] if np.std(t) > 1e-6 else 0.0
        root_t, tip_t = (
            (region.frame.t_max * 0.82, region.frame.t_min * 0.82)
            if correlation > 0
            else (region.frame.t_min * 0.82, region.frame.t_max * 0.82)
        )
        root = region.frame.center + root_t * region.frame.major
        tip = region.frame.center + tip_t * region.frame.major
        root_xy = tuple(map(float, root))
        tip_xy = tuple(map(float, tip))
        draw.line((root_xy, tip_xy), fill=(40, 230, 255), width=3)
        draw.ellipse((root[0] - 5, root[1] - 5, root[0] + 5, root[1] + 5), fill=(255, 220, 40))
        vector = tip - root
        length = max(1.0, float(np.linalg.norm(vector)))
        unit = vector / length
        normal = np.array((-unit[1], unit[0]))
        left = tip - unit * 16 + normal * 7
        right = tip - unit * 16 - normal * 7
        draw.polygon([tuple(tip), tuple(left), tuple(right)], fill=(40, 230, 255))
    return image


def make_comparison(source: Image.Image, corrected: Image.Image, meshes: list[dict]) -> Image.Image:
    before = draw_wire(source.resize((SIZE, SIZE), Image.Resampling.LANCZOS), meshes)
    after = draw_wire(corrected, meshes)
    before.thumbnail((960, 960), Image.Resampling.LANCZOS)
    after.thumbnail((960, 960), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", (1920, 1020), (18, 18, 18))
    canvas.paste(before, (0, 60))
    canvas.paste(after, (960, 60))
    draw = ImageDraw.Draw(canvas)
    draw.text((28, 20), "BEFORE: generated image + real UV", fill=(255, 125, 125))
    draw.text((988, 20), "AFTER: flow-warped shape + real UV", fill=(125, 255, 165))
    return canvas


def write_model_copy(output_path: Path, texture_path: Path) -> None:
    text = MODEL_PATH.read_text(encoding="utf-8", errors="ignore")
    old_path = "C:/Users/19308/Desktop/be874e24-dc94-48ba-971b-b02b1f9f66be.png"
    if old_path not in text:
        raise RuntimeError(f"Original texture path not found in {MODEL_PATH}")
    output_path.write_text(
        text.replace(old_path, texture_path.as_posix()),
        encoding="utf-8",
        newline="\n",
    )


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    ASCII_DIR.mkdir(parents=True, exist_ok=True)
    meshes = load_visible_meshes()
    uv_mask, labels, island_count = build_uv_mask(meshes)
    source_image = Image.open(SOURCE_PATH).convert("RGB")
    source = np.asarray(source_image.resize((SIZE, SIZE), Image.Resampling.LANCZOS))

    aligned, regions, stats = align_shapes(source, uv_mask, labels, island_count)
    gray_image = Image.fromarray(aligned, "RGB")
    two_tone = pure_two_tone(aligned, uv_mask)
    two_tone, front_cut_y = apply_front_bangs_flat_cut(two_tone, meshes)
    two_tone, under_face_count = apply_under_face_shadow(two_tone, meshes)
    two_tone = add_padding(two_tone, uv_mask, PADDING)
    two_tone_image = Image.fromarray(two_tone, "RGB")

    gray_image.save(GRAY_TEXTURE, optimize=True)
    two_tone_image.save(TWO_TONE_TEXTURE, optimize=True)
    draw_wire(two_tone_image, meshes).save(WIRE_CHECK, optimize=True)
    draw_direction_check(meshes, labels, regions).save(DIRECTION_CHECK, optimize=True)
    make_comparison(source_image, gray_image, meshes).save(COMPARE_PATH, optimize=True)
    write_model_copy(MODEL_GRAY, GRAY_TEXTURE)
    write_model_copy(MODEL_TWO_TONE, TWO_TONE_TEXTURE)
    shutil.copyfile(TWO_TONE_TEXTURE, ASCII_TEXTURE)
    shutil.copyfile(GRAY_TEXTURE, ASCII_GRAY_TEXTURE)
    write_model_copy(ASCII_MODEL, ASCII_TEXTURE)

    source_copy = OUT_DIR / "00_\u539f\u751f\u6210\u56fe.png"
    if not source_copy.exists():
        shutil.copyfile(SOURCE_PATH, source_copy)

    (OUT_DIR / "README.txt").write_text(
        "\n".join(
            [
                "Hair two-tone UV shape alignment",
                f"Model: {MODEL_PATH}",
                f"Source image: {SOURCE_PATH}",
                f"Aligned grayscale: {GRAY_TEXTURE}",
                f"Aligned pure two-tone: {TWO_TONE_TEXTURE}",
                f"Padding: {PADDING}px",
                f"UV islands: {stats['uv_islands']}",
                f"Flow-warped islands: {stats['mapped_islands']}",
                f"Fallback islands: {stats['fallback_islands']}",
                f"Front three-bang shared world-Y cut: {front_cut_y:.4f}",
                f"Under-face shadow faces: {under_face_count}",
                f"ASCII-safe Maya copy: {ASCII_MODEL}",
            ]
        ),
        encoding="utf-8",
    )
    print(f"output={OUT_DIR}")
    print(stats)


if __name__ == "__main__":
    sys.exit(main())
