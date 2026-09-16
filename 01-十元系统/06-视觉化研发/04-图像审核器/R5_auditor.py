import json
from pathlib import Path


def get_path(d, path):
    cur = d
    for p in path.split("."):
        if not isinstance(cur, dict) or p not in cur:
            return None
        cur = cur[p]
    return cur


def cond(v, expected):
    if expected is True:
        return v is True
    if expected is False:
        return v is False
    return v == expected


def gate_score(vir, gate):
    req = gate.get("required", [])
    req_any = gate.get("required_any", [])
    reject_if = gate.get("reject_if", [])

    for path, expected in reject_if:
        if cond(get_path(vir, path), expected):
            return 0.0, [f"reject:{path}={expected}"]

    hits, misses = [], []
    for path, expected in req:
        if cond(get_path(vir, path), expected):
            hits.append(f"{path}={expected}")
        else:
            misses.append(f"{path}!={expected}")

    any_hit = True
    if req_any:
        any_hit = any(cond(get_path(vir, p), e) for p, e in req_any)

    denom = max(1, len(req) + (1 if req_any else 0))
    num = len(hits) + (1 if (req_any and any_hit) else 0)
    return num / denom, hits + misses


def classify(vir, gates):
    scored = []
    for label, gate in gates.items():
        score, details = gate_score(vir, gate)
        scored.append((score, label, details))
    scored.sort(reverse=True)
    return scored


if __name__ == "__main__":
    import sys

    vir = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    gates = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"))
    result = classify(vir, gates)
    print(json.dumps(result[:3], ensure_ascii=False, indent=2))
