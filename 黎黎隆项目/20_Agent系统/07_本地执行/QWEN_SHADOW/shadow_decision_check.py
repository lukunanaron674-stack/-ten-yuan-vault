# -*- coding: utf-8 -*-
"""Validate structural invariants of a Qwen shadow decision (no tool execution).

This stdlib safety smoke test is not a full JSON-Schema validator.
Use jsonschema Draft 2020-12 for full contractual validation.
"""
import argparse
import json


REQUIRED = {
    "schema_version", "mode", "authority", "active_executor", "project_id",
    "job_id", "base_state_version", "source_refs", "action",
    "reason", "blocker", "xn_candidate", "nx_gap", "next_action",
    "submitted_to_comfyui",
}
ALLOWED_ACTIONS = {"NO_OP", "READ_ONLY_PREFLIGHT", "PROPOSE_NEXT_TEST", "ESCALATE_NX"}


def validate(packet):
    errs = []
    if not isinstance(packet, dict):
        return ["PACKET_NOT_OBJECT"]
    extra = set(packet) - REQUIRED
    missing = REQUIRED - set(packet)
    if missing:
        errs.append("MISSING_FIELDS:" + ",".join(sorted(missing)))
    if extra:
        errs.append("UNRECOGNIZED_FIELDS:" + ",".join(sorted(extra)))
    for key, expected in (
        ("schema_version", "v1"), ("mode", "SHADOW"),
        ("authority", "NONE"), ("active_executor", "CODEX"),
        ("submitted_to_comfyui", False),
    ):
        if packet.get(key) != expected or (key == "submitted_to_comfyui" and type(packet.get(key)) is not bool):
            errs.append("INVARIANT_FAILED:" + key)
    if packet.get("action") not in ALLOWED_ACTIONS:
        errs.append("ACTION_NOT_ALLOWED")
    sources = packet.get("source_refs")
    if not isinstance(sources, list) or not sources:
        errs.append("SOURCES_REQUIRED")
    elif any(not isinstance(source, str) for source in sources):
        errs.append("SOURCE_REF_WRONG_TYPE")
    for key in ("project_id", "job_id", "base_state_version"):
        if not isinstance(packet.get(key), str) or not packet[key].strip():
            errs.append("IDENTITY_REQUIRED:" + key)
    for key in ("reason", "next_action"):
        if not isinstance(packet.get(key), str):
            errs.append("WRONG_TYPE:" + key)
    for key in ("blocker", "xn_candidate", "nx_gap"):
        if packet.get(key) is not None and not isinstance(packet.get(key), str):
            errs.append("WRONG_TYPE:" + key)
    return errs


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("file", help="Qwen shadow JSON decision")
    args = p.parse_args()
    with open(args.file, encoding="utf-8") as f:
        packet = json.load(f)
    errors = validate(packet)
    print(json.dumps({
        "check": "SHADOW_INVARIANTS_ONLY",
        "accepted_for_gpu": False,
        "status": "PASS_STRUCTURE_ONLY" if not errors else "FAIL",
        "errors": errors,
    }, ensure_ascii=False, indent=2))
    return 0 if not errors else 2


if __name__ == "__main__":
    raise SystemExit(main())
