import json, csv
from pathlib import Path
from R5_auditor import classify


def run(manifest_path, gates_path, out_path):
    gates = json.loads(Path(gates_path).read_text(encoding="utf-8"))
    rows = []
    with open(manifest_path, newline="", encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            vir_path = row["vir_path"]
            vir = json.loads(Path(vir_path).read_text(encoding="utf-8"))
            ranked = classify(vir, gates)
            pred = ranked[0][1]
            score = ranked[0][0]
            rows.append({
                "id": row["id"],
                "target": row["target"],
                "pred": pred,
                "score": score,
                "correct": pred == row["target"]
            })
    Path(out_path).write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    return rows


if __name__ == "__main__":
    import sys
    run(sys.argv[1], sys.argv[2], sys.argv[3])
