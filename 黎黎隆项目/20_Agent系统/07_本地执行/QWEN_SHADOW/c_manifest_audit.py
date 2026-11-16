# -*- coding: utf-8 -*-
"""Read-only manifest SHA audit for staged C-end migration; never copies or deletes."""
import argparse
import hashlib
import json
from pathlib import Path


def sha256_file(path):
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def audit(assets):
    results = []
    counts = {"PASS_SHA": 0, "MISSING_FILE": 0, "SHA_MISMATCH": 0,
              "BAD_MANIFEST": 0, "MISSING_REVIEW_METADATA": 0}
    seen = set()
    for i, a in enumerate(assets):
        aid = a.get("asset_id") if isinstance(a, dict) else None
        path_text = a.get("path") if isinstance(a, dict) else None
        expected = a.get("sha256") if isinstance(a, dict) else None
        valid_id = isinstance(aid, str) and bool(aid.strip())
        if not valid_id or not isinstance(path_text, str) or not path_text.strip() or not isinstance(expected, str):
            status, actual = "BAD_MANIFEST", None
        elif aid in seen or len(expected) != 64 or any(c not in "0123456789abcdef" for c in expected.lower()):
            status, actual = "BAD_MANIFEST", None
        else:
            path = Path(path_text)
            if not path.is_file():
                status, actual = "MISSING_FILE", None
            else:
                try:
                    actual = sha256_file(path)
                    status = "PASS_SHA" if actual == expected.lower() else "SHA_MISMATCH"
                except OSError:
                    status, actual = "MISSING_FILE", None
        if valid_id:
            seen.add(aid)
        counts[status] += 1
        has_review = (
            isinstance(a, dict)
            and all(isinstance(a.get(k), str) and a[k].strip()
                    for k in ("version", "review_scope", "source_issue"))
            and ("parent_asset_id" in a)
            and (a["parent_asset_id"] is None or
                 (isinstance(a["parent_asset_id"], str) and bool(a["parent_asset_id"].strip())))
        )
        if not has_review:
            counts["MISSING_REVIEW_METADATA"] += 1
        results.append({
            "row": i + 1, "asset_id": aid,
            "sha_status": status, "actual_sha256": actual,
            "review_metadata_declared": bool(has_review),
            "review_is_user_verified": False,
        })
    return {
        "mode": "C_MIGRATION_READ_ONLY",
        "no_move_no_copy_no_delete": True,
        "total": len(assets), "counts": counts, "assets": results
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", help="JSON array or object containing assets array")
    parser.add_argument("--output", help="Optional output JSON location (audit report only, never assets)")
    args = parser.parse_args()
    with open(args.manifest, encoding="utf-8") as inp:
        raw = json.load(inp)
    assets = raw.get("assets") if isinstance(raw, dict) else raw
    if not isinstance(assets, list):
        parser.error("manifest must be a JSON list or object with assets list")
    result = audit(assets)
    encoded = json.dumps(result, ensure_ascii=False, indent=2)
    if args.output:
        Path(args.output).write_text(encoded + "\n", encoding="utf-8")
    else:
        print(encoded)
    return 0 if result["counts"]["PASS_SHA"] == len(assets) and not result["counts"]["MISSING_REVIEW_METADATA"] else 2


if __name__ == "__main__":
    raise SystemExit(main())
