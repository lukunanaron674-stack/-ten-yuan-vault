from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser(description="Search visual_index.jsonl")
    parser.add_argument("--index", default=str(Path(__file__).resolve().parents[1] / "索引" / "visual_index.jsonl"))
    parser.add_argument("--tag")
    parser.add_argument("--type", dest="asset_type")
    parser.add_argument("--project")
    parser.add_argument("--tenyuan")
    parser.add_argument("--query")
    args = parser.parse_args()
    query = (args.query or "").lower().split()
    results = []
    with Path(args.index).open("r", encoding="utf-8") as f:
        for line in f:
            item = json.loads(line)
            hay = json.dumps(item, ensure_ascii=False).lower()
            if args.tag and args.tag not in item.get("tags", []):
                continue
            if args.asset_type and item.get("asset_type") != args.asset_type:
                continue
            if args.project and args.project not in item.get("project", []):
                continue
            if args.tenyuan and args.tenyuan.lower() not in hay:
                continue
            if query and not all(term in hay for term in query):
                continue
            results.append(item)
    for item in results:
        print(f"{item['id']}\t{item['asset_type']}\t{item['source_relative_path']}\t{item['review_status']}\t{item['visual_confidence']}")
    print(f"\nCOUNT\t{len(results)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
