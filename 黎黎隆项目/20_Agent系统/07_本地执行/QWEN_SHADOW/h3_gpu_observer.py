# -*- coding: utf-8 -*-
"""Read-only H3 GPU + ComfyUI availability snapshot for the Qwen shadow lane.

No submission, model unload, process termination, file mutation or queue changes.
An advisory result is NEVER authorization to render.
"""
from __future__ import annotations
import argparse
import csv
import io
import json
import subprocess
import sys
from urllib.parse import urlsplit
from urllib.request import urlopen


def inspect_gpu(index: int) -> dict:
    cmd = [
        "nvidia-smi",
        "--query-gpu=index,name,memory.total,memory.used,memory.free",
        "--format=csv,noheader,nounits",
    ]
    try:
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=8, check=True)
    except (OSError, subprocess.CalledProcessError, subprocess.TimeoutExpired) as ex:
        return {"ok": False, "error": "NVIDIA_SMI_UNAVAILABLE", "detail": str(ex)[:200]}
    for row in csv.reader(io.StringIO(proc.stdout)):
        if len(row) < 5:
            continue
        try:
            gpu_idx = int(row[0].strip())
            if gpu_idx == index:
                return {
                    "ok": True, "index": gpu_idx, "name": row[1].strip(),
                    "total_mib": int(row[2].strip()),
                    "used_mib": int(row[3].strip()),
                    "free_mib": int(row[4].strip()),
                }
        except ValueError:
            continue
    return {"ok": False, "error": "GPU_INDEX_NOT_FOUND"}


def inspect_comfy(url: str) -> dict:
    parsed = urlsplit(url)
    if parsed.scheme != "http" or parsed.hostname not in ("127.0.0.1", "localhost", "::1"):
        return {"ok": False, "error": "ONLY_LOOPBACK_HTTP_ALLOWED"}
    try:
        with urlopen(url.rstrip("/") + "/queue", timeout=4) as res:
            data = json.loads(res.read(1024 * 1024).decode("utf-8"))
        running = data.get("queue_running")
        pending = data.get("queue_pending")
        if not isinstance(running, list) or not isinstance(pending, list):
            raise ValueError("Unexpected ComfyUI queue response")
        return {"ok": True, "running_count": len(running), "pending_count": len(pending)}
    except (OSError, ValueError, json.JSONDecodeError) as ex:
        return {"ok": False, "error": "COMFYUI_QUEUE_UNKNOWN", "detail": str(ex)[:200]}


def evaluate(gpu: dict, queue: dict, min_free_mib: int) -> dict:
    problems = []
    if not gpu.get("ok"):
        problems.append("GPU_UNVERIFIED")
    if not queue.get("ok"):
        problems.append("QUEUE_UNVERIFIED")
    if queue.get("ok") and (queue["running_count"] or queue["pending_count"]):
        problems.append("CODEX_OR_COMFYUI_BUSY")
    if gpu.get("ok") and gpu["free_mib"] < min_free_mib:
        problems.append("BELOW_PROVISIONAL_FREE_VRAM_THRESHOLD")
    return {
        "mode": "READ_ONLY_QWEN_SHADOW",
        "advisory": "WAIT" if problems else "IDLE_SNAPSHOT_ONLY",
        "advisory_only_no_render_permission": True,
        "gpu": gpu, "comfyui_queue": queue,
        "min_free_mib_provisional": min_free_mib,
        "blockers": problems,
    }


def main() -> int:
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--gpu-index", type=int, default=0)
    cli.add_argument("--min-free-mib", type=int, default=4096)
    cli.add_argument("--comfy-url", default="http://127.0.0.1:8188")
    cli.add_argument("--fixture", help="Offline JSON fixture with gpu and comfyui_queue objects")
    args = cli.parse_args()
    if args.min_free_mib < 0:
        cli.error("--min-free-mib must be >= 0")
    if args.fixture:
        with open(args.fixture, encoding="utf-8") as inp:
            fake = json.load(inp)
        gpu, queue = fake["gpu"], fake["comfyui_queue"]
    else:
        gpu = inspect_gpu(args.gpu_index)
        queue = inspect_comfy(args.comfy_url)
    result = evaluate(gpu, queue, args.min_free_mib)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result["advisory"] == "IDLE_SNAPSHOT_ONLY" else 2


if __name__ == "__main__":
    sys.exit(main())
