from pathlib import Path
import csv
import json

OPS = {
    "REWIRE": ("结构改写", "change adjacency/connectivity while keeping element identities and approximate node count"),
    "REDISTRIBUTE": ("分流换轨", "keep route set pre-existing; change flow assignment among destinations"),
    "CONVERGE": ("压缩收束", "reduce independent directions/spread/freedom by converging multiple routes into fewer outputs"),
    "GROW": ("扩张生长", "preserve old structure while generating genuinely new continuous nodes/edges/tips"),
    "ENCLOSE": ("包围闭合", "transform an open boundary into a closed boundary that creates an inside/outside relation"),
    "INVADE": ("侵入穿界", "cross an existing boundary and occupy the other side while preserving the distinction between source and foreign region"),
    "DETACH": ("脱离断连", "remove attachment/shared boundary so one connected part becomes an independent component"),
    "RECIRCULATE": ("回流循环", "reconnect downstream to upstream to create a repeatable closed passage while keeping the pathway continuous"),
    "REPLACE": ("置换替代", "keep a structural slot but replace its occupant while preserving role continuity"),
    "TWIST": ("扭曲变形", "preserve connectivity and identity while systematically distorting orientation/geometry"),
}

LOCKED = (
    "Minimal neutral architectural test scene, one small human for scale only, fixed eye-level wide camera, "
    "matte light-gray material, diffuse neutral light, no landmark, no text, no arrows, no strong color coding, "
    "no split-screen, same visual complexity."
)

NEGATIVE = (
    "text, labels, arrows, diagram captions, before-after panels, dramatic color symbolism, horror cues, "
    "giant central monument, crowd-density-as-power, duplicated protagonist"
)

BLIND_ORDER = [
    "INVADE_01","GROW_03","TWIST_05","GROW_06","INVADE_08","REDISTRIBUTE_01","DETACH_06","REPLACE_07","REWIRE_10","ENCLOSE_07",
    "REWIRE_03","RECIRCULATE_03","CONVERGE_10","CONVERGE_08","GROW_04","REDISTRIBUTE_05","ENCLOSE_06","REDISTRIBUTE_09","REPLACE_02","REDISTRIBUTE_02",
    "TWIST_03","REWIRE_01","CONVERGE_06","RECIRCULATE_01","REDISTRIBUTE_06","REPLACE_04","TWIST_07","ENCLOSE_01","ENCLOSE_03","ENCLOSE_02",
    "CONVERGE_05","CONVERGE_02","INVADE_10","REWIRE_07","REPLACE_09","REWIRE_09","RECIRCULATE_10","REDISTRIBUTE_08","TWIST_04","GROW_07",
    "ENCLOSE_10","ENCLOSE_04","GROW_10","REWIRE_08","ENCLOSE_05","REDISTRIBUTE_10","GROW_08","RECIRCULATE_07","CONVERGE_09","RECIRCULATE_05",
    "TWIST_08","CONVERGE_07","REPLACE_10","TWIST_01","TWIST_06","INVADE_05","DETACH_04","DETACH_07","REWIRE_04","REWIRE_05",
    "REPLACE_06","REWIRE_02","REDISTRIBUTE_03","DETACH_02","GROW_09","DETACH_01","CONVERGE_04","TWIST_09","DETACH_03","REDISTRIBUTE_07",
    "INVADE_02","DETACH_08","INVADE_04","INVADE_03","INVADE_09","DETACH_10","GROW_05","INVADE_06","CONVERGE_03","REPLACE_01",
    "GROW_02","DETACH_09","RECIRCULATE_09","RECIRCULATE_02","TWIST_02","RECIRCULATE_08","RECIRCULATE_04","TWIST_10","INVADE_07","RECIRCULATE_06",
    "GROW_01","DETACH_05","ENCLOSE_08","REDISTRIBUTE_04","REPLACE_03","CONVERGE_01","ENCLOSE_09","REPLACE_08","REWIRE_06","REPLACE_05"
]

FIELDS = ["sample_id","operation","operation_cn","seed_slot","locked_prompt","variable_prompt","negative","audit_hidden_label"]


def build_rows():
    rows = []
    for op, (cn, variable) in OPS.items():
        for i in range(1, 11):
            rows.append({
                "sample_id": f"{op}_{i:02d}",
                "operation": op,
                "operation_cn": cn,
                "seed_slot": i,
                "locked_prompt": LOCKED,
                "variable_prompt": variable,
                "negative": NEGATIVE,
                "audit_hidden_label": True,
            })
    return rows


def main(out_dir="."):
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    rows = build_rows()

    with (out / "dynamic_visual_100_tasks.csv").open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)

    with (out / "dynamic_visual_100_tasks.jsonl").open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")

    with (out / "dynamic_visual_blind_order.csv").open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["blind_id", "source_sample_id"])
        for i, sample_id in enumerate(BLIND_ORDER, 1):
            w.writerow([f"BLIND_{i:03d}", sample_id])

    print(f"generated {len(rows)} tasks + {len(BLIND_ORDER)} blind-order records in {out.resolve()}")


if __name__ == "__main__":
    main()
