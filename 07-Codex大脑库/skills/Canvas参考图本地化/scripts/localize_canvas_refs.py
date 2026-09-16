#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Canvas reference localizer v0.2 ZERO-LOGIN.

Hard rule:
- Only download manifest.image_url directly.
- Never open manifest.source_url.
- Never launch browser / baoyu-fetch / Playwright fallback.
- Failed downloads become inert text placeholders.
- Output Canvas must contain zero type:link nodes.
"""

import argparse, json, os, re, sys
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"


def safe_name(s):
    return re.sub(r'[^A-Za-z0-9_.-]+', '_', s)


def ext_from(url, ctype):
    ext = os.path.splitext(urlparse(url).path)[1].lower()
    if ext in ('.jpg', '.jpeg', '.png', '.webp', '.gif'):
        return '.jpg' if ext == '.jpeg' else ext
    ctype = (ctype or '').lower()
    if 'png' in ctype: return '.png'
    if 'webp' in ctype: return '.webp'
    if 'gif' in ctype: return '.gif'
    return '.jpg'


def download_direct(url, out_stem, referer=None):
    headers = {
        'User-Agent': UA,
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    }
    if referer:
        headers['Referer'] = referer
    req = Request(url, headers=headers)
    with urlopen(req, timeout=35) as r:
        ctype = (r.headers.get('Content-Type') or '').lower()
        body = r.read()
    if ctype and not ctype.startswith('image/'):
        raise RuntimeError(f'not image content-type: {ctype}')
    if len(body) < 10_000:
        raise RuntimeError(f'image too small: {len(body)} bytes')
    out = Path(str(out_stem) + ext_from(url, ctype))
    out.write_bytes(body)
    return out


def placeholder(node, nid, source_url, message='参考图未下载'):
    host = ''
    try:
        host = urlparse(source_url or '').netloc
    except Exception:
        pass
    out = {
        'id': nid,
        'type': 'text',
        'text': f'## ❌ {message}\n\n{nid}\n\n**不会打开登录页。**\n\n来源域名：{host}',
        'x': node.get('x', 0),
        'y': node.get('y', 0),
        'width': node.get('width', 560),
        'height': 260,
    }
    if 'color' in node:
        out['color'] = node['color']
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--canvas', required=True)
    ap.add_argument('--manifest', required=True)
    ap.add_argument('--vault-root', required=True)
    ap.add_argument('--asset-rel', required=True)
    ap.add_argument('--output', default='')
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    canvas_path = Path(args.canvas)
    manifest_path = Path(args.manifest)
    vault_root = Path(args.vault_root)
    asset_rel = Path(args.asset_rel)
    asset_abs = vault_root / asset_rel
    out_path = Path(args.output) if args.output else canvas_path.with_name(canvas_path.stem + '_LOCAL.canvas')
    failed_path = out_path.with_name('FAILED_参考图.txt')

    data = json.loads(canvas_path.read_text(encoding='utf-8'))
    manifest = json.loads(manifest_path.read_text(encoding='utf-8'))

    if args.dry_run:
        refs = [n.get('id') for n in data.get('nodes', []) if n.get('id') in manifest]
        print(f'manifest refs: {len(manifest)}')
        print(f'matching canvas refs: {len(refs)}')
        print(f'live type:link nodes before: {sum(1 for n in data.get("nodes", []) if n.get("type") == "link")}')
        return

    asset_abs.mkdir(parents=True, exist_ok=True)
    new_nodes = []
    changed = 0
    failed = []

    for node in data.get('nodes', []):
        nid = node.get('id', '')
        if nid in manifest:
            meta = manifest[nid]
            image_url = meta.get('image_url')
            source_url = meta.get('source_url')
            stem = asset_abs / safe_name(nid)
            downloaded = None
            err = None

            # Attempt 1: direct image URL with no source-page navigation.
            try:
                downloaded = download_direct(image_url, stem)
            except Exception as e1:
                err = str(e1)

            # Attempt 2: same image URL with Referer header only. Still does not open page.
            if downloaded is None:
                try:
                    downloaded = download_direct(image_url, stem, referer=source_url)
                except Exception as e2:
                    err = f'{err}; referer retry: {e2}'

            if downloaded is None:
                new_nodes.append(placeholder(node, nid, source_url))
                failed.append(f'{nid}\t{image_url}\t{source_url}\t{err}')
                continue

            rel_file = (asset_rel / downloaded.name).as_posix()
            out = {k: node[k] for k in ('id','x','y','width','height','color') if k in node}
            out['type'] = 'file'
            out['file'] = rel_file
            out['height'] = max(320, out.get('height', 420))
            new_nodes.append(out)
            changed += 1
            continue

        if node.get('type') == 'link':
            # Absolute safety: no live website cards survive.
            new_nodes.append(placeholder(node, nid, node.get('url'), message='外部网页预览已禁用'))
        else:
            new_nodes.append(node)

    data['nodes'] = new_nodes
    link_count = sum(1 for n in data.get('nodes', []) if n.get('type') == 'link')

    out_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    failed_path.write_text('\n'.join(failed), encoding='utf-8')

    print(f'written: {out_path}')
    print(f'localized: {changed}/{len(manifest)}')
    print(f'failed placeholders: {len(failed)}')
    print(f'live type:link nodes after: {link_count}')

    if link_count != 0:
        print('ERROR: output still contains type:link nodes', file=sys.stderr)
        sys.exit(3)


if __name__ == '__main__':
    main()
