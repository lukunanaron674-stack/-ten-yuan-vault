#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

from fix_all_concept_scene_sections_once import LIBRARY, ROOT, SUFFIX, rewrite

REPORT = ROOT / "场景区全库修复报告_2026-07-29.md"
MARKER = ROOT / ".scene-sections-fixed-20260729"
FORBIDDEN = ("v2 状态侵蚀层", "v3 内部功能空间", "v4 复合场景层")


def scene_header(data: dict) -> dict:
    headers = [
        node
        for node in data.get("nodes", [])
        if node.get("type") == "text" and str(node.get("text", "")).startswith("🌄 场景 is-a")
    ]
    if len(headers) != 1:
        raise RuntimeError(f"scene header count={len(headers)}")
    return headers[0]


def validate_canvas(path: Path, mapped: bool) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    nodes = data.get("nodes")
    edges = data.get("edges")
    if not isinstance(nodes, list) or not isinstance(edges, list):
        raise RuntimeError(f"invalid Canvas arrays: {path}")
    ids = [str(node.get("id")) for node in nodes]
    if len(ids) != len(set(ids)):
        raise RuntimeError(f"duplicate node IDs: {path}")
    header = scene_header(data)
    all_text = "\n".join(str(node.get("text", "")) for node in nodes)
    remains = [term for term in FORBIDDEN if term in all_text]
    if remains:
        raise RuntimeError(f"legacy scene chain remains in {path.name}: {remains}")
    if mapped and "可绘制场景类目" not in str(header.get("text", "")):
        raise RuntimeError(f"mapped scene section not corrected: {path.name}")


def main() -> None:
    paths = sorted(
        path
        for path in ROOT.glob(f"*{SUFFIX}")
        if ".bak" not in path.name and ".backup" not in path.name
    )
    if len(paths) != 20:
        raise SystemExit(f"expected 20 top-level canvases, got {len(paths)}")

    current_styles = {path.name[: -len(SUFFIX)] for path in paths}
    mapped_styles = current_styles & set(LIBRARY)
    preserved_styles = current_styles - set(LIBRARY)
    if not mapped_styles:
        raise SystemExit("no current Canvas style matches the correction library")

    report = [
        "# 概念库场景区全库修复报告",
        "",
        f"- 扫描 Canvas：{len(paths)}",
        f"- 重写旧链 Canvas：{len(mapped_styles)}",
        f"- 保留已采用独立场景结构的 Canvas：{len(preserved_styles)}",
        "- 修复原则：删除把建筑演化链冒充场景分类的 v2/v3/v4 模板，恢复各风格可独立成画的场景类目。",
        "- 保留内容：服装、建筑、构件、元素、参考 file 节点和全部既有连线。",
        "",
    ]

    changed = 0
    for path in paths:
        style = path.name[: -len(SUFFIX)]
        if style in LIBRARY:
            did_change, old_names, new_names = rewrite(path, style)
            changed += int(did_change)
            report.extend(
                [
                    f"## {style}",
                    "",
                    f"- mapped: true",
                    f"- changed: {str(did_change).lower()}",
                    f"- old: {'、'.join(old_names)}",
                    f"- new: {'、'.join(new_names)}",
                    "",
                ]
            )
        else:
            report.extend(
                [
                    f"## {style}",
                    "",
                    "- mapped: false",
                    "- changed: false",
                    "- reason: 当前 Canvas 已使用独立场景分类，不属于错误的 v2/v3/v4 建筑演化占位链。",
                    "",
                ]
            )

    for path in paths:
        style = path.name[: -len(SUFFIX)]
        validate_canvas(path, mapped=style in LIBRARY)

    REPORT.write_text("\n".join(report), encoding="utf-8")
    MARKER.write_text(
        f"scanned={len(paths)}\n"
        f"mapped={len(mapped_styles)}\n"
        f"preserved={len(preserved_styles)}\n"
        f"changed={changed}\n",
        encoding="utf-8",
    )
    print(
        f"validated={len(paths)} mapped={len(mapped_styles)} "
        f"preserved={len(preserved_styles)} changed={changed}"
    )


if __name__ == "__main__":
    main()
