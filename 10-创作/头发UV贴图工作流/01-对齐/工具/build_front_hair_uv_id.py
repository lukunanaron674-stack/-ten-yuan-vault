from __future__ import annotations

import math
import re
import shutil
from collections import defaultdict, deque
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


SIZE = 2048
DESKTOP = Path.home() / "Desktop"
MODEL_SIZE = 1006349
_MA_CANDIDATES = list(DESKTOP.glob("*.ma"))
MODEL_PATH = next(
    (p for p in _MA_CANDIDATES if p.stat().st_size == MODEL_SIZE),
    _MA_CANDIDATES[0] if _MA_CANDIDATES else DESKTOP / "model.ma",
)
SOURCE_UV_PATH = next((p for p in DESKTOP.glob("*.png") if p.stat().st_size == 627801), None)
OUT_DIR = DESKTOP / "尝试模型_UV前发ID"


PALETTE = {
    "center_bangs": {
        "name": "深红：中间刘海",
        "color": (226, 38, 47),
    },
    "left_bangs": {
        "name": "橙红：画面左前刘海",
        "color": (255, 112, 67),
    },
    "right_bangs": {
        "name": "粉红：画面右前刘海",
        "color": (255, 82, 150),
    },
    "left_side": {
        "name": "黄色：画面左脸侧短发",
        "color": (255, 214, 10),
    },
    "right_side": {
        "name": "青色：画面右脸侧短发",
        "color": (0, 194, 168),
    },
    "top_front": {
        "name": "紫色：头顶前层发片",
        "color": (139, 92, 246),
    },
    "small_spike": {
        "name": "蓝色：右前小尖发",
        "color": (59, 130, 246),
    },
    "front_under": {
        "name": "绿色：贴脸下层/侧下层",
        "color": (80, 200, 120),
    },
}


NUMBER_RE = re.compile(r"[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?")
NODE_RE = re.compile(r"createNode\s+(\S+)\s+(.+);")


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for candidate in [
        Path("C:/Windows/Fonts/msyh.ttc"),
        Path("C:/Windows/Fonts/simhei.ttf"),
        Path("C:/Windows/Fonts/arial.ttf"),
    ]:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default()


def node_blocks(lines: list[str]) -> list[dict]:
    nodes: list[dict] = []
    current: dict | None = None
    for line_no, line in enumerate(lines, 1):
        match = NODE_RE.match(line)
        if match:
            current = {
                "type": match.group(1),
                "line": line_no,
                "raw": line,
                "lines": [],
            }
            name = re.search(r'-n "([^"]+)"', line)
            parent = re.search(r'-p "([^"]+)"', line)
            current["name"] = name.group(1) if name else ""
            current["parent"] = parent.group(1) if parent else ""
            nodes.append(current)
        elif current is not None:
            current["lines"].append((line_no, line))
    return nodes


def set_attr_blocks(lines: list[tuple[int, str]]) -> list[tuple[int, str]]:
    blocks: list[tuple[int, str]] = []
    i = 0
    while i < len(lines):
        line_no, line = lines[i]
        if line.lstrip().startswith("setAttr"):
            text = line.strip()
            while not text.rstrip().endswith(";") and i + 1 < len(lines):
                i += 1
                text += " " + lines[i][1].strip()
            blocks.append((line_no, text))
        i += 1
    return blocks


def data_after_attr(block: str) -> str:
    parts = block.split('"', 2)
    rest = parts[2] if len(parts) > 2 else block
    return re.sub(r'-type\s+"[^"]+"', " ", rest)


def numbers(text: str) -> list[str]:
    return NUMBER_RE.findall(text)


def parse_transforms(nodes: list[dict]) -> dict[str, dict]:
    transforms: dict[str, dict] = {}
    for node in nodes:
        if node["type"] != "transform":
            continue
        visible = True
        for _, block in set_attr_blocks(node["lines"]):
            if re.search(r'setAttr\s+"\.v"\s+no;', block):
                visible = False
        transforms[node["name"]] = {
            "parent": node["parent"],
            "visible": visible,
        }
    return transforms


def is_visible(parent: str, transforms: dict[str, dict]) -> bool:
    while parent:
        data = transforms.get(parent)
        if not data:
            return True
        if not data["visible"]:
            return False
        parent = data["parent"]
    return True


def parse_mesh(node: dict) -> dict:
    vertices: list[tuple[float, float, float]] = []
    uvs: list[tuple[float, float]] = []
    edges: list[tuple[int, int]] = []
    faces_raw: list[dict] = []

    for _, block in set_attr_blocks(node["lines"]):
        payload = data_after_attr(block)
        if ".uvst[0].uvsp[" in block:
            values = [float(value) for value in numbers(payload)]
            uvs.extend(zip(values[0::2], values[1::2]))
        elif ".vt[" in block:
            values = [float(value) for value in numbers(payload)]
            vertices.extend(zip(values[0::3], values[1::3], values[2::3]))
        elif ".ed[" in block:
            values = [int(float(value)) for value in numbers(payload)]
            edges.extend((values[i], values[i + 1]) for i in range(0, len(values), 3))
        elif ".fc[" in block:
            tokens = block.replace(";", " ").split()
            current = None
            i = 0
            while i < len(tokens):
                token = tokens[i]
                if token == "f":
                    count = int(tokens[i + 1])
                    refs = [int(tokens[i + 2 + k]) for k in range(count)]
                    current = {"edge_refs": refs, "uvs": []}
                    faces_raw.append(current)
                    i += 2 + count
                elif token == "mu":
                    uv_set = int(tokens[i + 1])
                    count = int(tokens[i + 2])
                    uv_indices = [int(tokens[i + 3 + k]) for k in range(count)]
                    if current is not None and uv_set == 0:
                        current["uvs"] = uv_indices
                    i += 3 + count
                else:
                    i += 1

    faces: list[dict] = []
    for face in faces_raw:
        directed: list[tuple[int, int]] = []
        for ref in face["edge_refs"]:
            edge_index = ref if ref >= 0 else -ref - 1
            if edge_index < 0 or edge_index >= len(edges):
                directed = []
                break
            a, b = edges[edge_index]
            directed.append((a, b) if ref >= 0 else (b, a))
        if not directed:
            continue
        vertex_indices = [directed[0][0]] + [b for _, b in directed]
        if vertex_indices[-1] == vertex_indices[0]:
            vertex_indices.pop()
        if len(vertex_indices) == len(face["uvs"]):
            faces.append({"verts": vertex_indices, "uvs": face["uvs"]})

    return {
        "name": node["name"],
        "parent": node["parent"],
        "vertices": vertices,
        "uvs": uvs,
        "faces": faces,
    }


def face_centroid(mesh: dict, face: dict) -> tuple[float, float, float]:
    pts = [mesh["vertices"][index] for index in face["verts"]]
    count = len(pts)
    return (
        sum(p[0] for p in pts) / count,
        sum(p[1] for p in pts) / count,
        sum(p[2] for p in pts) / count,
    )


def uv_poly(mesh: dict, face: dict) -> list[tuple[float, float]]:
    return [mesh["uvs"][index] for index in face["uvs"]]


def classify_face(mesh: dict, face: dict) -> str | None:
    name = mesh["name"]
    x, y, z = face_centroid(mesh, face)

    if name == "polySurface89Shape":
        if x < -1.5:
            return "left_bangs"
        if x > 1.5:
            return "right_bangs"
        return "center_bangs"

    if name == "polySurface80Shape":
        if y < 123.8:
            return "left_side" if x < 0 else "right_side"
        if y > 129.0 and abs(x) < 7.5:
            return "top_front"
        if x < -2.2:
            return "left_bangs"
        if x > 2.2:
            return "right_bangs"
        return "center_bangs"

    if name == "polySurfaceShape67":
        return "small_spike"

    if name == "pasted__polySurface41Shape":
        # Only the face-side/front-visible area from the base hair mesh is part of this first batch.
        if z > -1.0 and y < 124.0:
            return "front_under"

    return None


def uv_to_px(uv: tuple[float, float], size: int = SIZE) -> tuple[float, float]:
    u, v = uv
    return (u * (size - 1), (1.0 - v) * (size - 1))


def draw_uv_wire(draw: ImageDraw.ImageDraw, meshes: list[dict], color: tuple[int, int, int, int], width: int) -> None:
    for mesh in meshes:
        for face in mesh["faces"]:
            poly = [uv_to_px(uv) for uv in uv_poly(mesh, face)]
            if len(poly) > 1:
                draw.line(poly + [poly[0]], fill=color, width=width, joint="curve")


def selected_face_records(meshes: list[dict]) -> list[dict]:
    records: list[dict] = []
    for mesh_index, mesh in enumerate(meshes):
        for face_index, face in enumerate(mesh["faces"]):
            category = classify_face(mesh, face)
            if category:
                records.append(
                    {
                        "mesh_index": mesh_index,
                        "face_index": face_index,
                        "mesh": mesh,
                        "face": face,
                        "category": category,
                        "centroid": face_centroid(mesh, face),
                    }
                )
    return records


def uv_area(poly: list[tuple[float, float]]) -> float:
    area = 0.0
    for i, (x1, y1) in enumerate(poly):
        x2, y2 = poly[(i + 1) % len(poly)]
        area += x1 * y2 - x2 * y1
    return abs(area) * 0.5


def build_shells(records: list[dict]) -> list[list[dict]]:
    face_by_key = {(r["mesh_index"], r["face_index"]): r for r in records}
    edges_to_faces: dict[tuple[int, int, int], list[tuple[int, int]]] = defaultdict(list)
    for record in records:
        mesh_index = record["mesh_index"]
        uv_indices = record["face"]["uvs"]
        for i, a in enumerate(uv_indices):
            b = uv_indices[(i + 1) % len(uv_indices)]
            edges_to_faces[(mesh_index, min(a, b), max(a, b))].append((mesh_index, record["face_index"]))

    graph: dict[tuple[int, int], set[tuple[int, int]]] = defaultdict(set)
    for faces in edges_to_faces.values():
        if len(faces) < 2:
            continue
        for a in faces:
            for b in faces:
                if a != b:
                    graph[a].add(b)

    seen: set[tuple[int, int]] = set()
    shells: list[list[dict]] = []
    for key in face_by_key:
        if key in seen:
            continue
        queue = deque([key])
        seen.add(key)
        shell = []
        while queue:
            current = queue.popleft()
            shell.append(face_by_key[current])
            for nxt in graph[current]:
                if nxt not in seen:
                    seen.add(nxt)
                    queue.append(nxt)
        shells.append(shell)
    return shells


def draw_arrow(draw: ImageDraw.ImageDraw, start: tuple[float, float], end: tuple[float, float], width: int = 5) -> None:
    sx, sy = start
    ex, ey = end
    dx, dy = ex - sx, ey - sy
    length = math.hypot(dx, dy)
    if length < 18:
        return
    ux, uy = dx / length, dy / length
    # Pull arrow endpoints inward so the arrow sits inside the island.
    sx += ux * min(22, length * 0.15)
    sy += uy * min(22, length * 0.15)
    ex -= ux * min(22, length * 0.15)
    ey -= uy * min(22, length * 0.15)
    dx, dy = ex - sx, ey - sy
    length = math.hypot(dx, dy)
    if length < 18:
        return
    ux, uy = dx / length, dy / length
    perp = (-uy, ux)
    head = 20
    wing = 10
    p1 = (ex, ey)
    p2 = (ex - ux * head + perp[0] * wing, ey - uy * head + perp[1] * wing)
    p3 = (ex - ux * head - perp[0] * wing, ey - uy * head - perp[1] * wing)

    draw.line((sx, sy, ex, ey), fill=(0, 0, 0, 220), width=width + 4)
    draw.polygon([p1, p2, p3], fill=(0, 0, 0, 220))
    draw.line((sx, sy, ex, ey), fill=(255, 255, 255, 255), width=width)
    draw.polygon([p1, p2, p3], fill=(255, 255, 255, 255))


def add_legend(draw: ImageDraw.ImageDraw, records: list[dict]) -> None:
    used = []
    for key in PALETTE:
        if any(r["category"] == key for r in records):
            used.append(key)
    font = load_font(28)
    small = load_font(23)
    x, y = 28, 30
    draw.rounded_rectangle((16, 18, 640, 330), radius=8, fill=(0, 0, 0, 190), outline=(255, 255, 255, 90))
    draw.text((x, y), "前发 UV 部件 ID（白箭头：发根 → 发梢）", font=small, fill=(255, 255, 255, 255))
    y += 42
    for key in used:
        color = PALETTE[key]["color"]
        draw.rectangle((x, y + 6, x + 32, y + 28), fill=color)
        draw.text((x + 44, y), PALETTE[key]["name"], font=font, fill=(255, 255, 255, 255))
        y += 36


def generate_uv_maps(meshes: list[dict], records: list[dict]) -> None:
    OUT_DIR.mkdir(exist_ok=True)
    if SOURCE_UV_PATH is not None:
        shutil.copyfile(SOURCE_UV_PATH, OUT_DIR / "00_用户提供原始UV参考.png")

    wire = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
    wire_draw = ImageDraw.Draw(wire, "RGBA")
    draw_uv_wire(wire_draw, meshes, (230, 230, 230, 230), 2)
    wire.save(OUT_DIR / "01_UV线框.png")

    id_map = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 255))
    id_draw = ImageDraw.Draw(id_map, "RGBA")
    for record in records:
        color = PALETTE[record["category"]]["color"]
        poly = [uv_to_px(uv) for uv in uv_poly(record["mesh"], record["face"])]
        id_draw.polygon(poly, fill=color + (255,))
    id_map.save(OUT_DIR / "02_前发部件颜色ID.png")

    id_wire = id_map.copy()
    id_wire_draw = ImageDraw.Draw(id_wire, "RGBA")
    draw_uv_wire(id_wire_draw, meshes, (255, 255, 255, 230), 2)
    id_wire.save(OUT_DIR / "02b_前发部件颜色ID_带UV线.png")

    annotated = id_wire.copy()
    anno_draw = ImageDraw.Draw(annotated, "RGBA")
    shells = build_shells(records)
    for shell in shells:
        category = shell[0]["category"]
        if category not in PALETTE:
            continue
        area = sum(uv_area(uv_poly(r["mesh"], r["face"])) for r in shell)
        if area < 0.00008:
            continue
        root_faces = sorted(shell, key=lambda r: r["centroid"][1], reverse=True)[: max(1, len(shell) // 5)]
        tip_faces = sorted(shell, key=lambda r: r["centroid"][1])[: max(1, len(shell) // 5)]
        root_uvs = []
        tip_uvs = []
        for record in root_faces:
            root_uvs.extend(uv_poly(record["mesh"], record["face"]))
        for record in tip_faces:
            tip_uvs.extend(uv_poly(record["mesh"], record["face"]))
        root = (
            sum(u for u, _ in root_uvs) / len(root_uvs),
            sum(v for _, v in root_uvs) / len(root_uvs),
        )
        tip = (
            sum(u for u, _ in tip_uvs) / len(tip_uvs),
            sum(v for _, v in tip_uvs) / len(tip_uvs),
        )
        draw_arrow(anno_draw, uv_to_px(root), uv_to_px(tip), 5)
    add_legend(anno_draw, records)
    annotated.save(OUT_DIR / "03_前发方向箭头说明.png")


def project(point: tuple[float, float, float], view: str) -> tuple[float, float, float]:
    x, y, z = point
    if view == "front":
        return x, y, z
    if view == "left":
        return z, y, -x
    if view == "right":
        return -z, y, x
    if view == "back":
        return -x, y, -z

    rx = math.radians(-18)
    ry = math.radians(34)
    x2 = x * math.cos(ry) + z * math.sin(ry)
    z2 = -x * math.sin(ry) + z * math.cos(ry)
    y2 = y * math.cos(rx) - z2 * math.sin(rx)
    z3 = y * math.sin(rx) + z2 * math.cos(rx)
    return x2, y2, z3


def render_model_views(meshes: list[dict], records: list[dict]) -> None:
    category_by_face = {
        (record["mesh_index"], record["face_index"]): record["category"] for record in records
    }
    all_vertices = [vertex for mesh in meshes for vertex in mesh["vertices"]]
    font = load_font(28)
    small = load_font(22)

    for view, title in [
        ("front", "正面"),
        ("left", "左侧"),
        ("right", "右侧"),
        ("back", "背面"),
        ("persp", "斜前方"),
    ]:
        projected_all = [project(vertex, view) for vertex in all_vertices]
        min_x = min(p[0] for p in projected_all)
        max_x = max(p[0] for p in projected_all)
        min_y = min(p[1] for p in projected_all)
        max_y = max(p[1] for p in projected_all)
        width, height = 1400, 1600
        pad = 90
        scale = min((width - 2 * pad) / (max_x - min_x), (height - 2 * pad) / (max_y - min_y))

        def to_screen(point: tuple[float, float, float]) -> tuple[float, float]:
            px, py, _ = point
            return (pad + (px - min_x) * scale, height - (pad + (py - min_y) * scale))

        draw_items: list[tuple[float, int, int, list[tuple[float, float]], str | None]] = []
        for mesh_index, mesh in enumerate(meshes):
            for face_index, face in enumerate(mesh["faces"]):
                projected = [project(mesh["vertices"][index], view) for index in face["verts"]]
                depth = sum(p[2] for p in projected) / len(projected)
                category = category_by_face.get((mesh_index, face_index))
                draw_items.append((depth, mesh_index, face_index, [to_screen(p) for p in projected], category))

        image = Image.new("RGB", (width, height), (18, 18, 18))
        draw = ImageDraw.Draw(image, "RGBA")
        for _, _, _, poly, category in sorted(draw_items, key=lambda item: item[0]):
            if category:
                fill = PALETTE[category]["color"] + (245,)
                outline = (255, 255, 255, 110)
            else:
                fill = (70, 70, 76, 190)
                outline = (120, 120, 128, 70)
            draw.polygon(poly, fill=fill, outline=outline)

        draw.rectangle((18, 18, 610, 62), fill=(0, 0, 0, 190))
        draw.text((30, 24), f"{title}：前发颜色 ID 贴回模型预览", fill=(255, 255, 255, 255), font=font)
        y = 78
        for key, info in PALETTE.items():
            if not any(r["category"] == key for r in records):
                continue
            draw.rectangle((30, y + 5, 55, y + 25), fill=info["color"] + (255,))
            draw.text((66, y), info["name"], fill=(255, 255, 255, 245), font=small)
            y += 31
        image.save(OUT_DIR / f"模型截图_{title}.png")


def write_notes(records: list[dict]) -> None:
    counts: dict[str, int] = defaultdict(int)
    for record in records:
        counts[record["category"]] += 1
    lines = [
        "前发 UV 部件 ID 说明",
        "",
        "方向约定：模型正面是 +Z；白箭头表示 3D 高处发根 -> 低处发梢。",
        "这一版只标前发批次；未标部件在模型截图里用中性灰显示。",
        "",
        "颜色：",
    ]
    for key, info in PALETTE.items():
        if counts.get(key):
            lines.append(f"- {info['name']}（{counts[key]} faces）")
    (OUT_DIR / "README_前发说明.txt").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    lines = MODEL_PATH.read_text(encoding="utf-8", errors="ignore").splitlines()
    nodes = node_blocks(lines)
    transforms = parse_transforms(nodes)
    meshes = []
    for node in nodes:
        if node["type"] != "mesh" or not is_visible(node["parent"], transforms):
            continue
        mesh = parse_mesh(node)
        if mesh["vertices"] and mesh["faces"]:
            meshes.append(mesh)

    records = selected_face_records(meshes)
    generate_uv_maps(meshes, records)
    render_model_views(meshes, records)
    write_notes(records)
    print(f"model: {MODEL_PATH}")
    print(f"output: {OUT_DIR}")
    print(f"meshes: {len(meshes)}")
    print(f"selected front-hair faces: {len(records)}")


if __name__ == "__main__":
    main()
