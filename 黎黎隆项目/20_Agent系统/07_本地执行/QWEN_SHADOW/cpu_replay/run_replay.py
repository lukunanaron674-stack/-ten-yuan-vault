"""Run frozen Qwen shadow cases against a local CPU-only llama.cpp server."""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from pathlib import Path
from urllib.error import URLError
from urllib.request import Request, urlopen

from jsonschema import Draft202012Validator


ROOT = Path(__file__).resolve().parents[1]
CPU_ARGS = (
    "--host", "127.0.0.1", "--port", "18216", "--threads", "8",
    "--threads-batch", "8", "--gpu-layers", "0", "--ctx-size", "4096",
    "--parallel", "1", "--no-webui",
)
ENDPOINT = "http://127.0.0.1:18216"


def post_json(url: str, payload: dict, timeout: int = 300) -> dict:
    request = Request(
        url,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urlopen(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def wait_until_ready(process: subprocess.Popen, log_file, timeout: int = 180) -> None:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if process.poll() is not None:
            log_file.flush()
            raise RuntimeError(f"llama-server exited early ({process.returncode})")
        try:
            with urlopen(ENDPOINT + "/health", timeout=2) as response:
                if response.status == 200:
                    return
        except (OSError, URLError):
            time.sleep(1)
    raise TimeoutError("CPU llama-server did not become ready within 180 seconds")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--llama-server", required=True, type=Path)
    parser.add_argument("--model", required=True, type=Path)
    parser.add_argument("--output-dir", type=Path, default=ROOT / "cpu_replay" / "out")
    args = parser.parse_args()
    if not args.llama_server.is_file() or not args.model.is_file():
        parser.error("--llama-server and --model must point to existing files")

    schema = json.loads((ROOT / "QWEN_SHADOW_PACKET_SCHEMA.json").read_text(encoding="utf-8"))
    validator = Draft202012Validator(schema)
    system = (ROOT / "cpu_replay" / "system.zh-CN.txt").read_text(encoding="utf-8")
    cases = json.loads((ROOT / "cpu_replay" / "cases.json").read_text(encoding="utf-8"))
    args.output_dir.mkdir(parents=True, exist_ok=True)
    server_log_path = args.output_dir / "llama-server.log"
    reports = []
    server = None

    try:
        with server_log_path.open("w", encoding="utf-8") as log_file:
            server = subprocess.Popen(
                [str(args.llama_server), "--model", str(args.model), *CPU_ARGS],
                stdout=log_file,
                stderr=subprocess.STDOUT,
            )
            wait_until_ready(server, log_file)

            for case in cases:
                prompt = (
                    "<|im_start|>system\n" + system + "<|im_end|>\n"
                    "<|im_start|>user\n" + case["user_prompt"] + "<|im_end|>\n"
                    "<|im_start|>assistant\n"
                )
                response = post_json(
                    ENDPOINT + "/completion",
                    {
                        "prompt": prompt,
                        "json_schema": schema,
                        "temperature": 0,
                        "seed": 42,
                        "n_predict": 450,
                        "stop": ["<|im_end|>", "<|endoftext|>"],
                        "stream": False,
                    },
                )
                (args.output_dir / f"{case['id']}.response.json").write_text(
                    json.dumps(response, ensure_ascii=False, indent=2) + "\n",
                    encoding="utf-8",
                )
                packet = json.loads(response["content"])
                errors = [error.message for error in validator.iter_errors(packet)]
                errors.extend(
                    f"{key} invariant failed"
                    for key, expected in (
                        ("mode", "SHADOW"),
                        ("authority", "NONE"),
                        ("active_executor", "CODEX"),
                        ("submitted_to_comfyui", False),
                    )
                    if packet.get(key) != expected or type(packet.get(key)) is not type(expected)
                )
                action_match = packet.get("action") == case["expected_action"]
                reports.append({
                    "case": case["id"],
                    "expected_action": case["expected_action"],
                    "actual_action": packet.get("action"),
                    "schema_and_invariants": "PASS" if not errors else "FAIL",
                    "action_match": action_match,
                    "errors": errors,
                    "submitted_to_comfyui": packet.get("submitted_to_comfyui"),
                    "tokens_predicted": response.get("tokens_predicted"),
                    "tokens_per_second": response.get("timings", {}).get("predicted_per_second"),
                })
                print(
                    f"{case['id']}: schema={'PASS' if not errors else 'FAIL'}; "
                    f"action={packet.get('action')} (expected {case['expected_action']})"
                )

    finally:
        if server is not None and server.poll() is None:
            server.terminate()
            try:
                server.wait(timeout=10)
            except subprocess.TimeoutExpired:
                server.kill()
                server.wait(timeout=5)

    passed = all(
        row["schema_and_invariants"] == "PASS" and row["action_match"]
        for row in reports
    ) and len(reports) == len(cases)
    summary = {
        "status": "PASS" if passed else "FAIL",
        "endpoint": ENDPOINT,
        "server_args": list(CPU_ARGS),
        "tool_calls": 0,
        "cases": reports,
    }
    (args.output_dir / "summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"OVERALL={summary['status']} ({sum(r['schema_and_invariants'] == 'PASS' and r['action_match'] for r in reports)}/{len(cases)})")
    return 0 if passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
