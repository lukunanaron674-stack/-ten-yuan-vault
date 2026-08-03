#!/usr/bin/env python3
"""将已确认的失效来源页替换为仍存活、且实际收录同图的来源页。"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = {
    "https://therighthairstyles.com/bardot-bangs/": "https://therighthairstyles.com/types-of-bangs/",
}

TARGETS = [
    ROOT / "批次14_复古与造型型刘海.canvas",
    ROOT / "02_五行十元重组/五行库/土/土_n-x并z.canvas",
]


def main() -> None:
    changed = 0
    for path in TARGETS:
        text = path.read_text(encoding="utf-8")
        updated = text
        for old, new in REPLACEMENTS.items():
            updated = updated.replace(old, new)
        if updated != text:
            path.write_text(updated, encoding="utf-8")
            changed += 1
    print(f"reference source files changed: {changed}")


if __name__ == "__main__":
    main()
