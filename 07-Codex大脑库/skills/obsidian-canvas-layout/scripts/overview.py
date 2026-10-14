#!/usr/bin/env python3
"""Create a title-first overview .canvas linked to a lossless detailed Canvas.

Overview titles are supplied by an explicit, source-checked JSON plan.
No inferred employer identities, no original text deletion, no overwrites.
Python 3 standard library only.
"""
import argparse
import json
import os
import tempfile
from pathlib import Path


def validate_plan(source, plan):
    assert isinstance(source.get("nodes"), list), "Missing source nodes"
    assert isinstance(source.get("edges"), list), "Missing source edges"
    ids = {n.get("id") for n in source["nodes"]}
    if len(ids) != len(source["nodes"]) or None in ids:
        raise ValueError("Duplicate or missing source node IDs")
    centers = plan.get("centers")
    if not isinstance(centers, list) or not 2 <= len(centers) <= 9:
        raise ValueError("Expected 2-9 independent centers")
    cids, rids = set(), set()
    for center in centers:
        cid = center["key"]
        if cid in cids: raise ValueError("Duplicate center: "+cid)
        cids.add(cid)
        if not center.get("title"): raise ValueError("Center has no title: "+cid)
        roles = center.get("roles", [])
        if not 1 <= len(roles) <= 4: raise ValueError("Center must have 1-4 branches: "+cid)
        for role in roles:
            rid = role["id"]
            if rid in rids: raise ValueError("Duplicate role: "+rid)
            rids.add(rid)
            if role["source_role_id"] not in ids:
                raise ValueError("Missing source role ID: "+role["source_role_id"])
            if not role.get("title"): raise ValueError("Missing branch title: "+rid)
            lines = role.get("lines")
            if not isinstance(lines, list) or not 1 <= len(lines) <= 3:
                raise ValueError("Each branch must have 1-3 brief lines: "+rid)
            if any(not isinstance(s,str) or not s.strip() or len(s)>44 for s in lines):
                raise ValueError("Unfit summary text: "+rid)
            for ref in role.get("source_ids",[]):
                if ref not in ids: raise ValueError("Ungrounded reference ID: "+str(ref))


def make(source,plan,source_path):
    validate_plan(source,plan)
    nodes, edges = [], []
    config = plan.get("layout", {})
    cols = int(config.get("columns", 3))
    width = int(config.get("zone_width", 3220))
    height = int(config.get("zone_height", 2440))
    gx = int(config.get("gap_x", 260)); gy = int(config.get("gap_y", 260))
    if cols not in (2,3) or width<3000 or height<2200 or gx<160 or gy<160:
        raise ValueError("Unsupported or too-dense layout geometry")
    m = {n["id"]:n for n in source["nodes"]}
    detail_name = plan.get("detail_file",source_path.name)
    if detail_name != source_path.name or "/" in detail_name or "\\" in detail_name:
        raise ValueError("detail_file must match the detail Canvas filename")
    markdown_link = "[["+detail_name+"|进入完整求职Canvas]]"
    for number,center in enumerate(plan["centers"]):
        col = number%cols; row = number//cols
        x=col*(width+gx); y=row*(height+gy)
        key=center["key"]; base=center.get("color")
        nodes.append(dict(id="ov-zone-"+key,type="group",x=x,y=y,width=width,height=height,
                          color=base,label=center["title"]+"｜缩小时看标题"))
        nodes.append(dict(id="ov-hub-"+key,type="text",x=x+1130,y=y+1010,
                          width=960,height=320,color=base,
                          text="# "+center["title"]+"\n**总览：方向与关键线索**\n"+markdown_link))
        for i,role in enumerate(center["roles"]):
            rid=role["id"]; bx=x+(70 if i%2==0 else 2150);by=y+210+(i//2)*1020
            color=m[role["source_role_id"]].get("color",base)
            title=role["title"]
            nodes.append(dict(id="ov-role-"+rid,type="text",x=bx,y=by,width=1000,height=230,
                              color=color,text="# "+title))
            summaries="\n".join("**"+line+"**" for line in role["lines"])
            nodes.append(dict(id="ov-summary-"+rid,type="text",x=bx,y=by+290,width=1000,height=455,
                              color=color,text="# 代表内容\n"+summaries+"\n*详见完整Canvas；招聘状态待核*"))
            edges.append(dict(id="ov-edge-"+str(len(edges)+1),
                              fromNode="ov-role-"+rid,fromSide="bottom",
                              toNode="ov-summary-"+rid,toSide="top",color=color))
    validate_result({"nodes":nodes,"edges":edges})
    return {"nodes":nodes,"edges":edges}


def validate_result(doc):
    ids=[n["id"] for n in doc["nodes"]]
    if len(ids)!=len(set(ids)): raise ValueError("Duplicate output IDs")
    seen=set(ids)
    if any(e["fromNode"] not in seen or e["toNode"] not in seen for e in doc["edges"]):
        raise ValueError("Dangling output edge")
    t=[n for n in doc["nodes"] if n["type"]=="text"]
    z=[n for n in doc["nodes"] if n["type"]=="group"]
    if any(not n["text"].startswith("# ") for n in t):
        raise ValueError("Untitled overview text card")
    for i,a in enumerate(t):
        for b in t[i+1:]:
            if a["x"]<b["x"]+b["width"]-5 and b["x"]<a["x"]+a["width"]-5 and a["y"]<b["y"]+b["height"]-5 and b["y"]<a["y"]+a["height"]-5:
                raise ValueError("Overlap: "+a["id"]+" vs "+b["id"])
    for n in t:
        matched=[g for g in z if n["x"]>=g["x"] and n["x"]+n["width"]<=g["x"]+g["width"] and n["y"]>=g["y"] and n["y"]+n["height"]<=g["y"]+g["height"]]
        if len(matched)!=1: raise ValueError("Uncontained or ambiguous card: "+n["id"])


def write_atomic(path,data):
    path.parent.mkdir(parents=True,exist_ok=True)
    f,tmp=tempfile.mkstemp(prefix=".canvas-title-",dir=path.parent,suffix=".tmp")
    try:
        with os.fdopen(f,"w",encoding="utf8") as h:json.dump(data,h,ensure_ascii=False,indent=2);h.write("\n")
        os.replace(tmp,path)
    finally:
        if os.path.exists(tmp): os.unlink(tmp)


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("canvas",type=Path)
    parser.add_argument("--plan",type=Path,required=True)
    parser.add_argument("--output",type=Path)
    parser.add_argument("--dry-run",action="store_true")
    a=parser.parse_args()
    try:
        source=json.loads(a.canvas.read_text(encoding="utf8"))
        plan=json.loads(a.plan.read_text(encoding="utf8"))
        result=make(source,plan,a.canvas)
        target=a.output or a.canvas.with_name(a.canvas.stem+"_标题总览.canvas")
        stats={"status":"dry-run" if a.dry_run else "written",
               "source":str(a.canvas),"output":str(target),
               "centers":len(result["nodes"])-2*sum(len(c["roles"]) for c in plan["centers"]),
               "nodes":len(result["nodes"]),"edges":len(result["edges"]),
               "note":"Overview only; original detailed Canvas unchanged. Local Obsidian zoom check pending."}
        stats["centers"]=len(plan["centers"])
        if not a.dry_run:
            if target.exists(): raise FileExistsError("Output exists; not overwriting: "+str(target))
            write_atomic(target,result)
        print(json.dumps(stats,ensure_ascii=False))
    except (ValueError,KeyError,OSError,TypeError,json.JSONDecodeError) as exc:
        parser.exit(1,"FAIL CLOSED: "+str(exc)+"\n")


if __name__=="__main__":
    main()
