#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Localize external Canvas reference images into Vault assets and rewrite nodes to type:file.

Priority:
1) manifest image_url direct download
2) optional baoyu-fetch fallback using source_url
"""

import argparse, json, os, re, shutil, subprocess, sys, tempfile
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"


def safe_name(s):
    return re.sub(r'[^A-Za-z0-9_.-]+', '_', s)


def ext_from(url, ctype):
    ext = os.path.splitext(urlparse(url).path)[1].lower()
    if ext in (".jpg", ".jpeg", ".png", ".webp", ".gif"):
        return ".jpg" if ext == ".jpeg" else ext
    if ctype:
        if "jpeg" in ctype:
            return ".jpg"
        if "png" in ctype:
            return ".png"
        if "webp" in ctype:
            return ".webp"
        if "gif" in ctype:
            return ".gif"
    return ".jpg"


def download_direct(url, out_stem):
    req = Request(url, headers={
        "User-Agent": UA,
        "Accept": "image/avif,image/webp,image/*,*/*;q=0.8"
    })
    with urlopen(req, timeout=35) as r:
        ctype = (r.headers.get("Content-Type") or "").lower()
        body = r.read()
    if not ctype.startswith("image/"):
        raise RuntimeError(f"not image content-type: {ctype}")
    if len(body) < 10_000:
        raise RuntimeError(f"image too small: {len(body)} bytes")
    ext = ext_from(url, ctype)
    out = Path(str(out_stem) + ext)
    out.write_bytes(body)
    return out


def fallback_baoyu(source_url, temp_root):
    if not source_url:
        raise RuntimeError("no source_url for fallback")
    out_md = temp_root / "page.md"
    media_dir = temp_root / "media"
    media_dir.mkdir(parents=True, exist_ok=True)
    cmd = [
        "bunx", "baoyu-fetch", source_url,
        "--format", "markdown",
        "--output", str(out_md),
        "--download-media",
        "--media-dir", str(media_dir)
    ]
    subprocess.run(cmd, check=True)
    candidates = []
    for p in media_dir.rglob("*"):
        if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
            name = p.name.lower()
            if any(x in name for x in ("logo", "avatar", "icon", "favicon")):
                continue
            if p.stat().st_size >= 10_000:
                candidates.append(p)
    if not candidates:
        raise RuntimeError("baoyu-fetch downloaded no usable image")
    candidates.sort(key=lambda p: p.stat().st_size, reverse=True)
    return candidates[0]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--canvas", required=True)
    ap.add_argument("--manifest", required=True)
    ap.add_argument("--vault-root", required=True)
    ap.add_argument("--asset-rel", required=True)
    ap.add_argument("--output", default="")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    canvas_path = Path(args.canvas)
    vault_root = Path(args.vault_root)
    asset_rel = Path(args.asset_rel)
    asset_abs = vault_root / asset_rel
    out_path = Path(args.output) if args.output else canvas_path.with_name(canvas_path.stem + "_LOCAL.canvas")

    data = json.loads(canvas_path.read_text(encoding="utf-8"))
    manifest = json.loads(Path(args.manifest).read_text(encoding="utf-8"))

    changed = 0
    failed = []
    log = []

    if not args.dry_run:
        asset_abs.mkdir(parents=True, exist_ok=True)

    for node in data.get("nodes", []):
        nid = node.get("id", "")
        meta = manifest.get(nid)
        if not meta:
            continue

        image_url = meta.get("image_url")
        source_url = meta.get("source_url")
        log.append(f"[{nid}] {image_url}")

        if args.dry_run:
            continue

        stem = asset_abs / safe_name(nid)
        downloaded = None
        try:
            downloaded = download_direct(image_url, stem)
            method = "direct"
        except Exception as e1:
            try:
                with tempfile.TemporaryDirectory(prefix="canvas_ref_") as td:
                    cand = fallback_baoyu(source_url, Path(td))
                    ext = cand.suffix.lower()
                    downloaded = Path(str(stem) + ext)
                    shutil.copy2(cand, downloaded)
                    method = "baoyu-fetch"
            except Exception as e2:
                failed.append((nid, str(e1), str(e2)))
                continue

        rel_file = (asset_rel / downloaded.name).as_posix()
        keep = {k: node[k] for k in ("id", "x", "y", "width", "height", "color") if k in node}
        node.clear()
        node.update(keep)
        node["type"] = "file"
        node["file"] = rel_file
        changed += 1
        log.append(f"  -> {rel_file} ({method})")

    if args.dry_run:
        print(f"manifest refs: {len(manifest)}")
        print("\n".join(log))
        return

    out_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"written: {out_path}")
    print(f"localized: {changed}/{len(manifest)}")
    if failed:
        print(f"failed: {len(failed)}", file=sys.stderr)
        for nid, e1, e2 in failed:
            print(f"- {nid}\n  direct: {e1}\n  fallback: {e2}", file=sys.stderr)
        sys.exit(2)


if __name__ == "__main__":
    main()
