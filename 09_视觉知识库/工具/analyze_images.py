from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
from datetime import datetime
from pathlib import Path
from typing import Any

IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"}
EXCLUDED_PARTS = {".git", ".trash", ".obsidian", "方备份", "方备份 1", "Canvas_备份", "Canvas_收敛6-2前备份"}


def now() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


def rel_path(path: Path, vault: Path) -> str:
    return path.relative_to(vault).as_posix()


def should_skip(path: Path, output_dir: Path) -> bool:
    if output_dir in path.parents:
        return True
    for part in path.parts:
        if part in EXCLUDED_PARTS or part.startswith("_archive") or part.startswith("_归档"):
            return True
    return False


def iter_images(vault: Path, output_dir: Path):
    for path in vault.rglob("*"):
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS and not should_skip(path, output_dir):
            yield path


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def dimensions(path: Path) -> tuple[int | None, int | None]:
    try:
        from PIL import Image
        with Image.open(path) as im:
            return im.width, im.height
    except Exception:
        return None, None


def classify(relative: str) -> str:
    s = relative.lower()
    if any(x in s for x in ("场景", "scene", "environment", "背景", "街区", "空港", "巢穴", "湖岸")):
        return "scene"
    if any(x in s for x in ("角色", "character", "char", "ch-", "人物", "园丁", "厨师", "测量员", "看守", "搬运人", "邮差", "驯风者", "修补匠", "收集人")):
        return "character"
    if any(x in s for x in ("风格", "style", "refs", "参考", "发型", "刘海", "服装", "衣", "鞋靴", "配件")):
        return "style"
    return "unknown"


def project_for(relative: str) -> str:
    if relative.startswith("黎黎隆项目/"):
        return "黎黎隆"
    if relative.startswith("方/"):
        return "方志敏"
    return "未指定"


def stable_id(relative: str) -> str:
    return "IMG-" + hashlib.sha256(relative.lower().encode("utf-8")).hexdigest()[:8].upper()


def default_record(path: Path, vault: Path) -> dict[str, Any]:
    relative = rel_path(path, vault)
    width, height = dimensions(path)
    return {
        "id": stable_id(relative),
        "title": path.stem,
        "asset_type": classify(relative),
        "source_path": str(path),
        "source_relative_path": relative,
        "source_sha256": sha256(path),
        "source_mtime": datetime.fromtimestamp(path.stat().st_mtime).astimezone().isoformat(timespec="seconds"),
        "width": width,
        "height": height,
        "file_size": path.stat().st_size,
        "project": [project_for(relative)],
        "tags": [],
        "review_status": "draft",
        "visual_confidence": "low",
        "tenyuan_status": "unresolved",
        "five_dimension_status": "candidate",
        "analysis_source": "pending_visual_review",
    }


def read_notes(path: Path | None) -> dict[str, dict[str, Any]]:
    if not path or not path.exists():
        return {}
    with path.open("r", encoding="utf-8-sig") as f:
        payload = json.load(f)
    return {str(k).replace("\\", "/"): v for k, v in payload.items()}


def merge_record(record: dict[str, Any], notes: dict[str, Any]) -> dict[str, Any]:
    merged = dict(record)
    for key, value in notes.items():
        if key not in {"id", "source_path", "source_relative_path", "source_sha256", "width", "height", "file_size", "source_mtime"}:
            merged[key] = value
    return merged


def yaml_dump(data: Any) -> str:
    try:
        import yaml
        return yaml.safe_dump(data, allow_unicode=True, sort_keys=False, default_flow_style=False)
    except Exception:
        return json.dumps(data, ensure_ascii=False, indent=2)


def obsidian_embed(relative: str) -> str:
    return "![[" + relative.replace("/", "\\") + "]]"


def bullets(items: Any, fallback: str = "未完成视觉复核") -> str:
    if isinstance(items, str):
        return items
    if not items:
        return fallback
    return "\n".join(f"- {item}" for item in items)


def render_note(record: dict[str, Any]) -> str:
    frontmatter = {
        "id": record["id"],
        "title": record["title"],
        "asset_type": record["asset_type"],
        "source_relative_path": record["source_relative_path"],
        "source_sha256": record["source_sha256"],
        "source_mtime": record["source_mtime"],
        "width": record["width"],
        "height": record["height"],
        "project": record["project"],
        "tags": record["tags"],
        "review_status": record["review_status"],
        "visual_confidence": record["visual_confidence"],
        "tenyuan_status": record["tenyuan_status"],
        "five_dimension_status": record["five_dimension_status"],
    }
    visual = record.get("visual_description", {})
    style = record.get("style_analysis", {})
    character = record.get("character_info", {})
    scene = record.get("scene_info", {})
    tenyuan = record.get("tenyuan_analysis", {})
    five = record.get("five_dimensions", {})
    dynamic = record.get("dynamic_chain", {})
    generation = record.get("generation_use", {})
    return "---\n" + yaml_dump(frontmatter).rstrip() + "\n---\n\n" + f"# {record['title']}｜视觉知识卡\n\n" + \
        f"> [!info] 原图\n> {obsidian_embed(record['source_relative_path'])}\n\n" + \
        "## 1. 客观画面描述\n\n" + \
        f"主体：{visual.get('subject', '未完成视觉复核')}\n\n" + \
        f"构图：{visual.get('composition', '未完成视觉复核')}\n\n" + \
        f"空间关系：{visual.get('spatial_relation', '未完成视觉复核')}\n\n" + \
        f"可见动作：{visual.get('action', '未完成视觉复核')}\n\n" + \
        "## 2. 色彩与光线\n\n" + \
        f"{style.get('color_light', '未完成视觉复核')}\n\n" + \
        "## 3. 风格分析\n\n" + \
        f"线条与形体：{style.get('line_form', '未完成视觉复核')}\n\n" + \
        f"材质与空间：{style.get('material_space', '未完成视觉复核')}\n\n" + \
        f"动画适配：{style.get('animation_fit', '未完成视觉复核')}\n\n" + \
        "## 4. 角色信息\n\n" + bullets(character.get("details"), "角色信息：不适用或未完成视觉复核") + "\n\n" + \
        "## 5. 场景信息\n\n" + bullets(scene.get("details"), "场景信息：不适用或未完成视觉复核") + "\n\n" + \
        "## 6. 十元候选分析\n\n" + \
        f"主倾向：{tenyuan.get('main', 'unresolved')}\n\n" + \
        f"辅助倾向：{tenyuan.get('secondary', 'unresolved')}\n\n" + \
        f"视觉证据：{tenyuan.get('evidence', '证据不足，暂不判定')}\n\n" + \
        f"不确定点：{tenyuan.get('uncertainty', '需要人工确认')}\n\n" + \
        "## 7. 五维候选分析\n\n" + yaml_dump(five).rstrip() + "\n\n" + \
        "## 8. 动态链提示\n\n" + yaml_dump(dynamic).rstrip() + "\n\n" + \
        "## 9. 生成用途\n\n" + \
        "适合：\n" + bullets(generation.get("suitable"), "待复核") + "\n\n" + \
        "不适合：\n" + bullets(generation.get("avoid"), "待复核") + "\n\n" + \
        "## 10. 复核\n\n" + \
        f"review_status: {record['review_status']}\n\n" + \
        f"visual_confidence: {record['visual_confidence']}\n\n" + \
        "需要人工复核：\n" + bullets(record.get("needs_human_review"), "无") + "\n"


def write_inventory(records: list[dict[str, Any]], out: Path, vault: Path) -> None:
    report = out / "报告" / "inventory_report.md"
    by_type: dict[str, int] = {}
    by_project: dict[str, int] = {}
    for rec in records:
        by_type[rec["asset_type"]] = by_type.get(rec["asset_type"], 0) + 1
        project = rec["project"][0]
        by_project[project] = by_project.get(project, 0) + 1
    report.write_text(
        "# 视觉知识库盘点报告\n\n" +
        f"生成时间：{now()}\n\n" +
        f"Vault：`{vault}`\n\n" +
        f"图片总数：**{len(records)}**\n\n" +
        "## 按类型\n\n" + yaml_dump(by_type) + "\n" +
        "## 按项目\n\n" + yaml_dump(by_project) + "\n" +
        "## 规则\n\n" +
        "- 原图只读，描述与索引写入 `09_视觉知识库/`。\n" +
        "- 排除了 `.git`、`.trash`、Obsidian 缓存和备份目录。\n" +
        "- 类型仅为路径启发式分类；不确定项保留 `unknown` 并需要人工复核。\n",
        encoding="utf-8",
    )


def write_index(records: list[dict[str, Any]], out: Path) -> None:
    index_dir = out / "索引"
    index = []
    for rec in records:
        index.append({k: rec.get(k) for k in (
            "id", "title", "asset_type", "source_relative_path", "project", "tags",
            "review_status", "visual_confidence", "tenyuan_status", "source_sha256"
        )})
    (index_dir / "visual_index.yaml").write_text(yaml_dump(index), encoding="utf-8")
    with (index_dir / "visual_index.jsonl").open("w", encoding="utf-8") as f:
        for item in index:
            f.write(json.dumps(item, ensure_ascii=False) + "\n")
    tags: dict[str, int] = {}
    needs = []
    for rec in records:
        for tag in rec.get("tags", []):
            tags[tag] = tags.get(tag, 0) + 1
        if rec.get("review_status") == "needs_review":
            needs.append(rec["id"] + " | " + rec["source_relative_path"])
    (index_dir / "visual_tags.md").write_text(
        "# 视觉标签索引\n\n" + yaml_dump(dict(sorted(tags.items(), key=lambda x: (-x[1], x[0])))) +
        "\n## 待复核\n\n" + ("\n".join("- " + x for x in needs) if needs else "- 无") + "\n",
        encoding="utf-8",
    )


def analyze(args: argparse.Namespace) -> int:
    vault = Path(args.vault).resolve()
    out = vault / "09_视觉知识库"
    for sub in ("描述/角色", "描述/场景", "描述/风格", "描述/待复核", "索引", "报告", "工具"):
        (out / sub).mkdir(parents=True, exist_ok=True)
    records = [default_record(p, vault) for p in iter_images(vault, out)]
    records.sort(key=lambda x: x["source_relative_path"].lower())
    write_inventory(records, out, vault)
    if args.inventory_only:
        print(json.dumps({"vault": str(vault), "images": len(records), "report": str(out / '报告' / 'inventory_report.md')}, ensure_ascii=False))
        return 0
    notes = read_notes(Path(args.notes_json) if args.notes_json else None)
    selected: list[dict[str, Any]] = []
    counts: dict[str, int] = {}
    for rec in records:
        kind = rec["asset_type"]
        if kind not in {"scene", "character", "style"}:
            continue
        if counts.get(kind, 0) >= args.limit_per_type:
            continue
        selected.append(merge_record(rec, notes.get(rec["source_relative_path"], {})))
        counts[kind] = counts.get(kind, 0) + 1
    selected_by_path = {rec["source_relative_path"]: rec for rec in selected}
    for rec in selected:
        status = rec.get("review_status", "draft")
        folder = {"scene": "场景", "character": "角色", "style": "风格"}.get(rec["asset_type"], "待复核")
        if status == "needs_review":
            folder = "待复核"
        note_path = out / "描述" / folder / (rec["id"] + ".md")
        note_path.write_text(render_note(rec), encoding="utf-8")
    write_index(selected, out)
    report = out / "报告" / "batch_report.md"
    report.write_text(
        "# 首批试运行报告\n\n" +
        f"生成时间：{now()}\n\n" +
        f"盘点图片：{len(records)}\n\n" +
        f"本批生成：{len(selected)}\n\n" +
        "## 类型数量\n\n" + yaml_dump(counts) + "\n" +
        "## 说明\n\n" +
        "本报告只覆盖首批三类样本；未进入本批的图片不会生成描述。\n" +
        "所有十元与五维字段均为候选或 unresolved，不改变正式理论资料。\n",
        encoding="utf-8",
    )
    print(json.dumps({"vault": str(vault), "inventory": len(records), "selected": len(selected), "counts": counts, "output": str(out)}, ensure_ascii=False))
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Obsidian visual knowledge indexer")
    parser.add_argument("--vault", required=True)
    parser.add_argument("--limit-per-type", type=int, default=10)
    parser.add_argument("--notes-json")
    parser.add_argument("--inventory-only", action="store_true")
    return analyze(parser.parse_args())


if __name__ == "__main__":
    raise SystemExit(main())
