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
from urllib.request import HTTPRedirectHandler, build_opener


class _NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def inspect_gpu(index: int, expected_name: str = "RTX 4080") -> dict:
    if index < 0:
        return {"ok": False, "error": "GPU_INDEX_INVALID"}
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
                name = row[1].strip()
                if expected_name.casefold() not in name.casefold():
                    return {"ok": False, "error": "GPU_IDENTITY_MISMATCH", "name": name}
                return {
                    "ok": True, "index": gpu_idx, "name": name,
                    "total_mib": int(row[2].strip()),
                    "used_mib": int(row[3].strip()),
                    "free_mib": int(row[4].strip()),
                }
        except ValueError:
            continue
    return {"ok": False, "error": "GPU_INDEX_NOT_FOUND"}


def inspect_comfy(url: str) -> dict:
    parsed = urlsplit(url)
    if (parsed.scheme != "http" or parsed.hostname not in ("127.0.0.1", "localhost", "::1")
            or parsed.username is not None or parsed.password is not None):
        return {"ok": False, "error": "ONLY_LOOPBACK_HTTP_ALLOWED"}
    try:
        opener = build_opener(_NoRedirect)
        with opener.open(url.rstrip("/") + "/queue", timeout=4) as res:
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
    gpu_ok = (
        isinstance(gpu, dict) and gpu.get("ok") is True
        and isinstance(gpu.get("index"), int) and not isinstance(gpu.get("index"), bool)
        and gpu.get("index", -1) >= 0
        and isinstance(gpu.get("name"), str) and "rtx 4080" in gpu["name"].casefold()
        and all(isinstance(gpu.get(k), int) and not isinstance(gpu.get(k), bool)
                for k in ("total_mib", "used_mib", "free_mib"))
        and gpu.get("total_mib", 0) > 0
        and 0 <= gpu.get("used_mib", -1) <= gpu.get("total_mib", 0)
        and 0 <= gpu.get("free_mib", -1) <= gpu.get("total_mib", 0)
    )
    if not gpu_ok:
        problems.append("GPU_UNVERIFIED")
    queue_ok = (
        isinstance(queue, dict) and queue.get("ok") is True
        and all(isinstance(queue.get(k), int) and not isinstance(queue.get(k), bool)
                and queue.get(k) >= 0 for k in ("running_count", "pending_count"))
    )
    if not queue_ok:
        problems.append("QUEUE_UNVERIFIED")
    if queue_ok and (queue["running_count"] or queue["pending_count"]):
        problems.append("CODEX_OR_COMFYUI_BUSY")
    if gpu_ok and gpu["free_mib"] < min_free_mib:
        problems.append("BELOW_PROVISIONAL_FREE_VRAM_THRESHOLD")
    return {
        "mode": "READ_ONLY_QWEN_SHADOW",
        "advisory": "WAIT" if problems else "IDLE_SNAPSHOT_ONLY",
        "advisory_only_no_render_permission": True,
        "gpu": gpu, "comfyui_queue": queue,
        "min_free_mib_provisional": min_free_mib,
        "blockers": problems,
    }


def load_fixture(path: str) -> tuple[dict, dict, str | None]:
    try:
        with open(path, encoding="utf-8") as inp:
            fake = json.load(inp)
        if not isinstance(fake, dict):
            raise ValueError("fixture root must be an object")
        gpu, queue = fake.get("gpu"), fake.get("comfyui_queue")
        if not isinstance(gpu, dict) or not isinstance(queue, dict):
            raise ValueError("fixture must contain gpu and comfyui_queue objects")
        return gpu, queue, None
    except (OSError, ValueError, json.JSONDecodeError) as ex:
        unknown = {"ok": False, "error": "FIXTURE_INVALID", "detail": str(ex)[:200]}
        return unknown, unknown, "FIXTURE_INVALID"


def main() -> int:
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--gpu-index", type=int, help="Explicit index confirmed by R1; never guessed")
    cli.add_argument("--expected-gpu-name", default="RTX 4080")
    cli.add_argument("--min-free-mib", type=int, default=4096)
    cli.add_argument("--comfy-url", default="http://127.0.0.1:8188")
    cli.add_argument("--fixture", help="Offline JSON fixture with gpu and comfyui_queue objects")
    args = cli.parse_args()
    if args.min_free_mib < 0:
        cli.error("--min-free-mib must be >= 0")
    fixture_error = None
    if args.fixture:
        gpu, queue, fixture_error = load_fixture(args.fixture)
    else:
        if args.gpu_index is None:
            cli.error("--gpu-index is required for live inspection; use only the index confirmed by R1")
        gpu = inspect_gpu(args.gpu_index, args.expected_gpu_name)
        queue = inspect_comfy(args.comfy_url)
    result = evaluate(gpu, queue, args.min_free_mib)
    if fixture_error:
        result["fixture_error"] = fixture_error
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result["advisory"] == "IDLE_SNAPSHOT_ONLY" else 2


if __name__ == "__main__":
    sys.exit(main())
