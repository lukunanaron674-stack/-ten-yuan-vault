#!/usr/bin/env python3
"""Unit tests for title-first Canvas overview generation (standard library)."""
import copy
import json
from pathlib import Path
from overview import make, validate_plan, validate_result

PLAN_PATH = Path(__file__).parent.parent / "plans" / "boss-portfolio-overview.json"

def main():
    plan = json.loads(PLAN_PATH.read_text(encoding="utf-8"))
    ids = set()
    for c in plan["centers"]:
        for r in c["roles"]:
            ids.add(r["source_role_id"])
            ids.update(r.get("source_ids",[]))
    source = {"nodes":[{"id":i,"type":"text","x":0,"y":0,"width":200,"height":100,
                        "color":str(n%6+1),"text":"## Source "+i}
                       for n,i in enumerate(sorted(ids))],
              "edges":[]}
    before=copy.deepcopy(source)
    result=make(source,plan,Path(plan["detail_file"]))
    validate_result(result)
    assert source==before, "Source must remain unchanged"
    assert len(result["nodes"])==44, len(result["nodes"])
    assert len(result["edges"])==16, len(result["edges"])
    assert len([n for n in result["nodes"] if n["type"]=="group"])==6
    assert all(n["text"].startswith("# ") for n in result["nodes"] if n["type"]=="text")
    assert any("完整求职Canvas" in n.get("text","") for n in result["nodes"])
    altered=copy.deepcopy(source)
    altered["nodes"].pop()
    try: validate_plan(altered,plan)
    except ValueError: pass
    else: raise AssertionError("Missing source ID must fail closed")
    print(json.dumps({"passed":True,"centers":6,"roles":16,"nodes":44,"edges":16,
                      "source_preserved":True,"source_id_guard":True},ensure_ascii=False))

if __name__=="__main__":
    main()
