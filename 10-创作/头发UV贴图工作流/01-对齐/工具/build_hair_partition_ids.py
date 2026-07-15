from __future__ import annotations

from collections import Counter
from pathlib import Path

from PIL import Image, ImageDraw

import build_front_hair_uv_id as uvtools


SIZE = 2048
DESKTOP = Path.home() / "Desktop"
MODEL_PATH = next(p for p in DESKTOP.glob("*.ma") if p.name == "头发.ma")
OUT_DIR = DESKTOP / "头发_UV分区身份证_最终"


PARTS = {
    "front": {
        "folder": "01_前发",
        "title": "前发",
        "palette": {
            "front_left": ("橙红：左前刘海瓣", (255, 112, 67)),
            "front_center": ("深红：中间刘海瓣", (226, 38, 47)),
            "front_right": ("粉红：右前刘海瓣", (255, 82, 150)),
        },
    },
    "side": {
        "folder": "02_侧发",
        "title": "侧发",
        "palette": {
            "side_top_bridge": ("淡紫：侧发上方承接", (167, 139, 250)),
            "side_left_upper": ("橙色：画面左侧上层发片", (255, 145, 77)),
            "side_right_upper": ("粉色：画面右侧上层发片", (244, 114, 182)),
            "side_left": ("黄色：画面左脸侧短发", (255, 214, 10)),
            "side_right": ("青色：画面右脸侧短发", (0, 194, 168)),
            "side_under_left": ("绿色：画面左贴脸下层", (80, 200, 120)),
            "side_under_right": ("蓝绿：画面右贴脸下层", (34, 197, 170)),
            "side_right_spike": ("蓝色：右侧小尖发", (59, 130, 246)),
        },
    },
    "back": {
        "folder": "03_后发",
        "title": "后发",
        "palette": {
            "back_top": ("紫色：后脑头顶", (139, 92, 246)),
            "back_front_cap": ("淡紫：头顶前盖", (167, 139, 250)),
            "back_center": ("绿色：后脑中区", (80, 200, 120)),
            "back_left": ("青色：画面左后侧", (0, 194, 168)),
            "back_right": ("蓝色：画面右后侧", (59, 130, 246)),
            "back_lower": ("橙色：后脑下层", (255, 145, 77)),
        },
    },
    "braid": {
        "folder": "04_辫子",
        "title": "辫子",
        "palette": {
            "left_braid_top": ("青色：左辫上段", (0, 194, 168)),
            "left_braid_mid": ("蓝绿：左辫中段", (20, 184, 166)),
            "left_braid_low": ("深青：左辫下段", (13, 148, 136)),
            "right_braid_top": ("蓝色：右辫上段", (59, 130, 246)),
            "right_braid_mid": ("紫蓝：右辫中段", (99, 102, 241)),
            "right_braid_low": ("紫色：右辫下段", (139, 92, 246)),
            "left_braid_end": ("粉橙：左辫尾/发束", (255, 136, 135)),
            "right_braid_end": ("黄绿：右辫尾/发束", (163, 230, 53)),
        },
    },
    "front_tone": {
        "folder": "05_前发亮暗",
        "title": "前发亮暗",
        "palette": {
            "front_light": ("亮色：从发根到发梢的亮面", (255, 236, 180)),
            "front_gray": ("灰色：非亮面/暗面", (118, 122, 132)),
        },
    },
}


def uv_to_px(uv: tuple[float, float]) -> tuple[float, float]:
    u, v = uv
    return (u * (SIZE - 1), (1.0 - v) * (SIZE - 1))


def load_meshes() -> list[dict]:
    lines = MODEL_PATH.read_text(encoding="utf-8", errors="ignore").splitlines()
    nodes = uvtools.node_blocks(lines)
    transforms = uvtools.parse_transforms(nodes)
    meshes: list[dict] = []
    for node in nodes:
        if node["type"] != "mesh" or not uvtools.is_visible(node["parent"], transforms):
            continue
        mesh = uvtools.parse_mesh(node)
        if mesh["vertices"] and mesh["faces"]:
            meshes.append(mesh)
    return meshes


def classify_face(mesh: dict, face: dict) -> tuple[str, str] | None:
    name = mesh["name"]
    x, y, z = uvtools.face_centroid(mesh, face)

    if name == "polySurface89Shape":
        if x < -1.5:
            return "front", "front_left"
        if x > 1.5:
            return "front", "front_right"
        return "front", "front_center"

    if name == "polySurfaceShape67":
        return "side", "side_right_spike"

    if name == "polySurface80Shape":
        if y > 129.0 and abs(x) < 7.5:
            return "side", "side_top_bridge"
        if y < 123.8:
            return ("side", "side_left") if x < 0 else ("side", "side_right")
        if abs(x) < 2.2:
            return "side", "side_top_bridge"
        if x < -2.2:
            return "side", "side_left_upper"
        return "side", "side_right_upper"

    if name == "pasted__polySurface41Shape":
        if z > -1.0 and y < 124.0:
            return ("side", "side_under_left") if x < 0 else ("side", "side_under_right")
        if y > 127.0:
            return "back", "back_top"
        if y < 114.0:
            return "back", "back_lower"
        if x < -3.0:
            return "back", "back_left"
        if x > 3.0:
            return "back", "back_right"
        return "back", "back_center"

    if name == "pasted__pasted__polySurface26Shape":
        if x < 0:
            if y > 101.0:
                return "braid", "left_braid_top"
            if y > 86.0:
                return "braid", "left_braid_mid"
            return "braid", "left_braid_low"
        if y > 101.0:
            return "braid", "right_braid_top"
        if y > 86.0:
            return "braid", "right_braid_mid"
        return "braid", "right_braid_low"

    if name == "pasted__pasted__pasted__pasted__polySurface94Shape":
        return ("braid", "left_braid_end") if x < 0 else ("braid", "right_braid_end")

    if name == "polySurfaceShape68":
        return "braid", "left_braid_end"

    return None


def collect_records(meshes: list[dict]) -> dict[str, list[dict]]:
    records_by_part = {key: [] for key in PARTS}
    for mesh_index, mesh in enumerate(meshes):
        for face_index, face in enumerate(mesh["faces"]):
            classified = classify_face(mesh, face)
            if not classified:
                continue
            part, category = classified
            records_by_part[part].append(
                {
                    "mesh_index": mesh_index,
                    "face_index": face_index,
                    "mesh": mesh,
                    "face": face,
                    "category": category,
                    "centroid": uvtools.face_centroid(mesh, face),
                }
            )
    records_by_part["front_tone"] = build_front_tone_records(records_by_part["front"])
    return records_by_part


def build_front_tone_records(front_records: list[dict]) -> list[dict]:
    ys = [record["centroid"][1] for record in front_records]
    if not ys:
        return []
    y_min = min(ys)
    y_max = max(ys)
    cut_y = y_min + (y_max - y_min) * 0.52

    tone_records: list[dict] = []
    for record in front_records:
        copied = record.copy()
        _, y, _ = record["centroid"]
        light = y >= cut_y
        copied["category"] = "front_light" if light else "front_gray"
        tone_records.append(copied)

    return tone_records


def draw_all_uv_wire(draw: ImageDraw.ImageDraw, meshes: list[dict], color: tuple[int, int, int, int]) -> None:
    uvtools.draw_uv_wire(draw, meshes, color, 2)


def save_common_wire(meshes: list[dict]) -> None:
    image = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
    draw = ImageDraw.Draw(image, "RGBA")
    draw_all_uv_wire(draw, meshes, (230, 230, 230, 230))
    image.save(OUT_DIR / "00_原始UV线框.png")


def save_part_uv(part_key: str, meshes: list[dict], records: list[dict]) -> None:
    part = PARTS[part_key]
    palette = part["palette"]
    folder = OUT_DIR / part["folder"]
    folder.mkdir(parents=True, exist_ok=True)

    flat = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
    draw = ImageDraw.Draw(flat, "RGBA")
    for record in records:
        color = palette[record["category"]][1]
        poly = [uv_to_px(uv) for uv in uvtools.uv_poly(record["mesh"], record["face"])]
        draw.polygon(poly, fill=color + (255,))
    flat.save(folder / "01_分区ID_纯色.png")

    with_wire = flat.copy()
    draw_wire = ImageDraw.Draw(with_wire, "RGBA")
    draw_all_uv_wire(draw_wire, meshes, (255, 255, 255, 230))
    with_wire.save(folder / "02_分区ID_带UV线.png")


def draw_sidebar(draw: ImageDraw.ImageDraw, title: str, palette: dict, records: list[dict], height: int) -> None:
    font_title = uvtools.load_font(34)
    font = uvtools.load_font(23)
    draw.rectangle((0, 0, 470, height), fill=(12, 12, 12, 255))
    draw.rectangle((470, 0, 472, height), fill=(45, 45, 48, 255))
    draw.text((28, 30), f"{title}：分区贴回预览", fill=(255, 255, 255, 255), font=font_title)
    draw.line((28, 82, 424, 82), fill=(90, 90, 95, 255), width=1)
    present = {record["category"] for record in records}
    y = 112
    for key, (label, color) in palette.items():
        if key not in present:
            continue
        draw.rectangle((30, y + 6, 58, y + 30), fill=color + (255,))
        draw.text((72, y), label, fill=(255, 255, 255, 245), font=font)
        y += 38
    draw.text((30, height - 86), "灰色：本张未标记区域", fill=(180, 180, 184, 245), font=font)
    draw.text((30, height - 52), "白线：模型面线", fill=(180, 180, 184, 245), font=font)


def render_part_views(part_key: str, meshes: list[dict], records: list[dict]) -> None:
    part = PARTS[part_key]
    palette = part["palette"]
    folder = OUT_DIR / part["folder"]
    category_by_face = {(r["mesh_index"], r["face_index"]): r["category"] for r in records}
    all_vertices = [vertex for mesh in meshes for vertex in mesh["vertices"]]
    views = [
        ("front", "正面"),
        ("left", "左侧"),
        ("right", "右侧"),
        ("back", "背面"),
        ("persp", "斜前方"),
    ]

    width, height = 1700, 1600
    sidebar_w = 470
    model_left, model_right = sidebar_w + 35, width - 70
    model_top, model_bottom = 75, height - 75

    for view, view_name in views:
        projected_all = [uvtools.project(vertex, view) for vertex in all_vertices]
        min_x = min(p[0] for p in projected_all)
        max_x = max(p[0] for p in projected_all)
        min_y = min(p[1] for p in projected_all)
        max_y = max(p[1] for p in projected_all)
        scale = min((model_right - model_left) / (max_x - min_x), (model_bottom - model_top) / (max_y - min_y))
        used_w = (max_x - min_x) * scale
        used_h = (max_y - min_y) * scale
        ox = model_left + ((model_right - model_left) - used_w) / 2
        oy = model_top + ((model_bottom - model_top) - used_h) / 2

        def to_screen(point: tuple[float, float, float]) -> tuple[float, float]:
            px, py, _ = point
            return (ox + (px - min_x) * scale, height - (oy + (py - min_y) * scale))

        draw_items = []
        for mesh_index, mesh in enumerate(meshes):
            for face_index, face in enumerate(mesh["faces"]):
                projected = [uvtools.project(mesh["vertices"][index], view) for index in face["verts"]]
                depth = sum(p[2] for p in projected) / len(projected)
                category = category_by_face.get((mesh_index, face_index))
                poly = [to_screen(p) for p in projected]
                draw_items.append((depth, poly, category))

        image = Image.new("RGB", (width, height), (18, 18, 18))
        draw = ImageDraw.Draw(image, "RGBA")
        draw_sidebar(draw, part["title"], palette, records, height)
        for _, poly, category in sorted(draw_items, key=lambda item: item[0]):
            if category:
                fill = palette[category][1] + (245,)
                outline = (255, 255, 255, 115)
            else:
                fill = (70, 70, 76, 185)
                outline = (120, 120, 128, 62)
            draw.polygon(poly, fill=fill, outline=outline)
        image.save(folder / f"{view_name}.png")


def write_readme(records_by_part: dict[str, list[dict]]) -> None:
    lines = [
        "头发 UV 分区身份证",
        "",
        f"模型：{MODEL_PATH}",
        "说明：只做纯色分区，不做粉色渐变、二分阴影、高光或线感。",
        "前发、侧发、后发、辫子分别放在独立文件夹，避免混在一起看错。",
        "",
        "文件结构：",
        "- 00_原始UV线框.png：完整 0-1 UV，黑底白线。",
    ]
    for key, part in PARTS.items():
        counts = Counter(record["category"] for record in records_by_part[key])
        lines.append(f"- {part['folder']}：{part['title']}分区，{sum(counts.values())} faces。")
        for category, count in counts.items():
            label = part["palette"][category][0]
            lines.append(f"  - {label}：{count} faces")
    (OUT_DIR / "README_分区说明.txt").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    meshes = load_meshes()
    records_by_part = collect_records(meshes)
    save_common_wire(meshes)
    for part_key, records in records_by_part.items():
        save_part_uv(part_key, meshes, records)
        render_part_views(part_key, meshes, records)
    write_readme(records_by_part)

    print(f"model: {MODEL_PATH}")
    print(f"output: {OUT_DIR}")
    print(f"meshes: {len(meshes)}")
    for part_key, records in records_by_part.items():
        print(f"{PARTS[part_key]['title']}: {len(records)} faces")


if __name__ == "__main__":
    main()
