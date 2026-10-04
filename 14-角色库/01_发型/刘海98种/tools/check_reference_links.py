#!/usr/bin/env python3
"""检查五行Canvas中的图片URL与来源页。

状态分为 reachable / blocked / broken / unknown。
403不等于失效，避免把防盗链网站误判为死亡链接。
"""
from __future__ import annotations

import json
import re
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REORG = ROOT / "02_五行十元重组"
CANVASES = [
    REORG / "五行库/木/木_zx-nx.canvas",
    REORG / "五行库/火/火_zn-x.canvas",
    REORG / "五行库/土/土_n-x并z.canvas",
    REORG / "五行库/金/金_xn-z.canvas",
    REORG / "五行库/水/水_xz-nz.canvas",
]
ITEM_RE = re.compile(r"^##\s*(\d{2})[｜|]", re.M)
IMG_RE = re.compile(r"!\[\]\((https?://[^)]+)\)")
SRC_RE = re.compile(r"\[图像来源页\]\((https?://[^)]+)\)")


def collect() -> dict[str, dict]:
    links: dict[str, dict] = {}
    for path in CANVASES:
        data = json.loads(path.read_text(encoding="utf-8"))
        for node in data.get("nodes", []):
            text = node.get("text", "")
            m = ITEM_RE.search(text)
            if not m:
                continue
            item = int(m.group(1))
            im, src = IMG_RE.search(text), SRC_RE.search(text)
            if im:
                links[im.group(1)] = {"kind": "image", "item": item}
            if src:
                links[src.group(1)] = {"kind": "source", "item": item}
    return links


def probe(url: str) -> tuple[str, int | None, str]:
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; TenYuanVaultLinkAudit/1.0)",
        "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    }
    for method in ("HEAD", "GET"):
        req = urllib.request.Request(url, headers=headers, method=method)
        if method == "GET":
            req.add_header("Range", "bytes=0-1023")
        try:
            with urllib.request.urlopen(req, timeout=10) as response:
                code = response.getcode()
                if 200 <= code < 400:
                    return "reachable", code, ""
                if code in (401, 403, 429):
                    return "blocked", code, ""
                if code in (404, 410):
                    return "broken", code, ""
                return "unknown", code, ""
        except urllib.error.HTTPError as exc:
            if exc.code in (401, 403, 429):
                return "blocked", exc.code, str(exc.reason)
            if exc.code in (404, 410):
                return "broken", exc.code, str(exc.reason)
            if method == "HEAD" and exc.code in (400, 405):
                continue
            return "unknown", exc.code, str(exc.reason)
        except Exception as exc:  # 网络、TLS、超时
            if method == "HEAD":
                continue
            return "unknown", None, type(exc).__name__
    return "unknown", None, "no response"


def main() -> None:
    links = collect()
    results: list[dict] = []
    with ThreadPoolExecutor(max_workers=12) as pool:
        futures = {pool.submit(probe, url): (url, meta) for url, meta in links.items()}
        for future in as_completed(futures):
            url, meta = futures[future]
            status, code, detail = future.result()
            results.append({"url": url, **meta, "status": status, "code": code, "detail": detail})

    order = {"broken": 0, "unknown": 1, "blocked": 2, "reachable": 3}
    results.sort(key=lambda r: (order[r["status"]], r["item"], r["kind"]))
    counts = {key: sum(r["status"] == key for r in results) for key in order}
    lines = [
        "---", "type: bangs-reference-link-audit", "status: generated", "version: v1.0", "---", "",
        "# 刘海98种｜图片与来源外链可用性报告", "",
        f"- 检查链接：{len(results)}（98张图片＋98个来源页）",
        f"- reachable：{counts['reachable']}",
        f"- blocked：{counts['blocked']}（防盗链、限流或权限拒绝，不直接判死链）",
        f"- broken：{counts['broken']}（404/410，需要替换）",
        f"- unknown：{counts['unknown']}（超时、TLS或其他网络异常，需要人工复核）", "",
        "## 需要处理", "",
    ]
    actionable = [r for r in results if r["status"] in ("broken", "unknown")]
    if not actionable:
        lines.append("- 无明确死链或未知链接。")
    else:
        for r in actionable:
            lines.append(f"- {r['status']}｜{r['item']:02d}｜{r['kind']}｜HTTP {r['code'] or '-'}｜{r['url']}｜{r['detail']}")
    lines += ["", "## 被阻止但未判死链", ""]
    blocked = [r for r in results if r["status"] == "blocked"]
    if not blocked:
        lines.append("- 无。")
    else:
        for r in blocked:
            lines.append(f"- {r['item']:02d}｜{r['kind']}｜HTTP {r['code']}｜{r['url']}")
    lines += ["", "## 判定规则", "", "- 2xx/3xx：reachable", "- 401/403/429：blocked", "- 404/410：broken", "- 超时、TLS、其他错误：unknown", "- blocked与unknown均不得被自动删除，必须回到来源页人工复核。"]
    (REORG / "04_外链可用性报告.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(counts)


if __name__ == "__main__":
    main()
