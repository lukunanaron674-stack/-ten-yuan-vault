#!/usr/bin/env python3
from __future__ import annotations

import csv
import html
import io
import json
import random
import re
import shutil
import time
import zipfile
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any, Iterable
from urllib.parse import quote

import requests
from PIL import Image, ImageDraw, ImageOps

API = "https://commons.wikimedia.org/w/api.php"
UA = "TenYuan-Hairstyle-Archive/2.0 (educational reference archive)"
OUT = Path("hair_zip_output")
TARGET = 200
WIDTH = 1024
MIN_DIM = 600
WORKERS = 12

PACKS = [
    {"id":"01","name":"长发_刘海_公主切_层次发","categories":["Category:Long hair","Category:Bangs","Category:Hime cut","Category:Straight hairstyles","Category:Women's long hair"],"queries":["long hair woman","bangs hairstyle woman","hime cut hairstyle","layered hair woman","straight hair woman"]},
    {"id":"02","name":"短发_Bob_Pixie_Undercut_狼尾","categories":["Category:Short hair","Category:Bob cut","Category:Pixie cut","Category:Undercut (hairstyle)","Category:Mohawk","Category:Mullet (haircut)"],"queries":["short hair woman","bob haircut woman","pixie cut woman","undercut hairstyle woman","mohawk woman","mullet haircut woman"]},
    {"id":"03","name":"马尾_双马尾_丸子_盘发_半扎","categories":["Category:Ponytails","Category:Pigtails","Category:Buns (hairstyle)","Category:Chignons","Category:Updos"],"queries":["ponytail woman","pigtails woman","hair bun woman","chignon woman","updo hairstyle woman","half up hairstyle woman"]},
    {"id":"04","name":"辫发_Cornrows_Locs_Twists_Afro","categories":["Category:Braids","Category:Cornrows","Category:Dreadlocks","Category:Afros","Category:Box braids","Category:Bantu knots"],"queries":["braids woman","cornrows woman","dreadlocks woman","afro hairstyle woman","box braids woman","bantu knots woman","twists hairstyle woman"]},
    {"id":"05","name":"卷发_波浪_传统发式_综合","categories":["Category:Curly hair","Category:Wavy hair","Category:Historical hairstyles","Category:Traditional hairstyles","Category:Women's hairstyles"],"queries":["curly hair woman","wavy hair woman","traditional hairstyle woman","historical hairstyle woman","hairstyle portrait woman"]},
]
GENERIC_QUERIES = ["woman hairstyle portrait", "female hairstyle", "haircut woman", "hair style woman"]
ALLOWED = ("cc by", "cc-by", "cc by-sa", "cc-by-sa", "cc0", "public domain", "pd-", "pdm")
BLOCKED = ("diagram","logo","icon","flag","map","chart","painting","engraving","drawing","illustration","sculpture","statue","mannequin","wig stand","hairbrush","comb","shampoo","poster")

api_session = requests.Session(); api_session.headers.update({"User-Agent": UA})


def strip_html(value: str | None) -> str:
    if not value: return ""
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value))).strip()


def api(params: dict[str, Any], tries: int = 8) -> dict[str, Any]:
    params = {**params, "format":"json", "formatversion":2, "maxlag":5}
    delay = 1.5
    for attempt in range(tries):
        try:
            r = api_session.get(API, params=params, timeout=60)
            if r.status_code == 429 or r.status_code >= 500: raise RuntimeError(f"HTTP {r.status_code}")
            r.raise_for_status(); data = r.json()
            if "error" in data: raise RuntimeError(str(data["error"]))
            return data
        except Exception as exc:
            if attempt == tries-1: raise
            print(f"API retry: {exc}", flush=True); time.sleep(delay); delay=min(delay*1.8,20)
    raise RuntimeError("API failure")


def direct_category_files(category: str, cap: int = 500) -> list[str]:
    out=[]; cont={}
    while len(out)<cap:
        try:
            data=api({"action":"query","list":"categorymembers","cmtitle":category,"cmtype":"file","cmlimit":"max",**cont})
        except Exception as exc:
            print(f"skip category {category}: {exc}",flush=True); break
        out += [x["title"] for x in data.get("query",{}).get("categorymembers",[]) if x.get("title")]
        if "continue" not in data: break
        cont=data["continue"]
    return out[:cap]


def search_files(term: str, cap: int = 500) -> list[str]:
    out=[]; offset=0
    while len(out)<cap:
        data=api({"action":"query","list":"search","srnamespace":6,"srsearch":term,"srlimit":"max","sroffset":offset})
        batch=[x["title"] for x in data.get("query",{}).get("search",[]) if x.get("title")]
        out += batch
        if not batch or "continue" not in data: break
        offset=data["continue"].get("sroffset",offset+len(batch))
    return out[:cap]


def chunks(seq:list[Any],n:int)->Iterable[list[Any]]:
    for i in range(0,len(seq),n): yield seq[i:i+n]


def metadata(titles:list[str], source_map:dict[str,str])->Iterable[dict[str,Any]]:
    for batch in chunks(titles,40):
        data=api({"action":"query","prop":"imageinfo","titles":"|".join(batch),"iiprop":"url|size|mime|sha1|extmetadata|mediatype","iiurlwidth":WIDTH})
        for page in data.get("query",{}).get("pages",[]):
            infos=page.get("imageinfo") or []
            if not infos: continue
            x=infos[0]; ext=x.get("extmetadata") or {}
            def ev(k:str)->str: return strip_html((ext.get(k) or {}).get("value",""))
            title=page.get("title","")
            yield {"title":title,"source":source_map.get(title,""),"thumb":x.get("thumburl") or x.get("url") or "","url":x.get("url") or "","width":int(x.get("width") or 0),"height":int(x.get("height") or 0),"mime":x.get("mime") or "","mediatype":x.get("mediatype") or "","sha1":x.get("sha1") or "","license":ev("LicenseShortName"),"license_url":ev("LicenseUrl"),"artist":ev("Artist"),"credit":ev("Credit"),"description":ev("ImageDescription"),"date":ev("DateTimeOriginal") or ev("DateTime")}
        time.sleep(.03)


def permitted(m:dict[str,Any])->bool:
    text=f"{m['title']} {m['description']}".lower()
    if any(w in text for w in BLOCKED): return False
    if m["mime"] not in {"image/jpeg","image/png","image/webp"}: return False
    if m["mediatype"] and m["mediatype"]!="BITMAP": return False
    if min(m["width"],m["height"])<MIN_DIM: return False
    ratio=m["width"]/max(m["height"],1)
    if ratio<.28 or ratio>3.2: return False
    lic=f"{m['license']} {m['license_url']}".lower()
    return bool(m["thumb"] and m["sha1"] and any(x in lic for x in ALLOWED))


def fetch_jpeg(m:dict[str,Any])->bytes|None:
    s=requests.Session(); s.headers.update({"User-Agent":UA})
    delay=1
    for attempt in range(5):
        try:
            r=s.get(m["thumb"],timeout=60)
            if r.status_code==429 or r.status_code>=500: raise RuntimeError(f"HTTP {r.status_code}")
            r.raise_for_status()
            with Image.open(io.BytesIO(r.content)) as im:
                im=ImageOps.exif_transpose(im)
                if im.mode in ("RGBA","LA"):
                    bg=Image.new("RGB",im.size,"white"); bg.paste(im,mask=im.getchannel("A")); im=bg
                else: im=im.convert("RGB")
                im.thumbnail((WIDTH,WIDTH),Image.Resampling.LANCZOS)
                if min(im.size)<320: return None
                b=io.BytesIO(); im.save(b,"JPEG",quality=84,optimize=True,progressive=True); return b.getvalue()
        except Exception:
            if attempt==4: return None
            time.sleep(delay); delay=min(delay*1.8,10)
    return None


def safe_name(title:str,index:int)->str:
    name=re.sub(r"\.[A-Za-z0-9]{2,5}$","",title.replace("File:",""))
    name=re.sub(r"[^0-9A-Za-z\u4e00-\u9fff_-]+","_",name).strip("_") or "hairstyle"
    return f"{index:03d}_{name[:80]}.jpg"


def contact_sheet(paths:list[Path],dest:Path,label:str)->None:
    sample=paths[:40]; cw,ch,cols=220,250,5; rows=(len(sample)+cols-1)//cols
    sheet=Image.new("RGB",(cols*cw,70+rows*ch),"white"); d=ImageDraw.Draw(sheet); d.text((16,18),f"{label}｜前40张预览",fill="black")
    for i,p in enumerate(sample):
        with Image.open(p) as im:
            im=ImageOps.contain(im.convert("RGB"),(200,205),Image.Resampling.LANCZOS)
            x=(i%cols)*cw+10; y=60+(i//cols)*ch; sheet.paste(im,(x+(200-im.width)//2,y)); d.text((x,y+210),p.stem[:26],fill="black")
    sheet.save(dest,"JPEG",quality=84,optimize=True)


def build(pack:dict[str,Any],global_hashes:set[str])->Path:
    folder=OUT/f"发型图片包_{pack['id']}_{pack['name']}"; images=folder/"images"; images.mkdir(parents=True,exist_ok=True)
    titles=[]; source_map={}
    for cat in pack["categories"]:
        for title in direct_category_files(cat,350):
            if title not in source_map: titles.append(title); source_map[title]=cat
    for term in pack["queries"]+GENERIC_QUERIES:
        for title in search_files(term,350):
            if title not in source_map: titles.append(title); source_map[title]=f"search:{term}"
    random.Random(20260803+int(pack["id"])).shuffle(titles)
    candidates=[]; seen=set()
    for m in metadata(titles[:3500],source_map):
        if m["sha1"] in global_hashes or m["sha1"] in seen or not permitted(m): continue
        seen.add(m["sha1"]); candidates.append(m)
        if len(candidates)>=380: break
    if len(candidates)<TARGET: raise RuntimeError(f"Pack {pack['id']} only has {len(candidates)} permitted candidates")
    rows=[]; paths=[]
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futures={pool.submit(fetch_jpeg,m):m for m in candidates}
        for future in as_completed(futures):
            if len(rows)>=TARGET: break
            m=futures[future]; data=future.result()
            if not data or m["sha1"] in global_hashes: continue
            idx=len(rows)+1; filename=safe_name(m["title"],idx); path=images/filename; path.write_bytes(data)
            global_hashes.add(m["sha1"]); paths.append(path)
            rows.append({"filename":f"images/{filename}","original_title":m["title"],"commons_page":"https://commons.wikimedia.org/wiki/"+quote(m["title"].replace(" ","_"),safe=":/()_-"),"original_file":m["url"],"license":m["license"],"license_url":m["license_url"],"artist":m["artist"],"credit":m["credit"],"description":m["description"],"date":m["date"],"source":m["source"],"sha1":m["sha1"],"original_width":m["width"],"original_height":m["height"]})
            print(f"[{pack['id']}] {idx:03d}/{TARGET} {m['title']}",flush=True)
    if len(rows)!=TARGET: raise RuntimeError(f"Pack {pack['id']} downloaded {len(rows)} images")
    with (folder/"manifest.csv").open("w",encoding="utf-8-sig",newline="") as f:
        w=csv.DictWriter(f,fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
    counts=Counter(r["license"] or "未标明" for r in rows)
    license_lines="\n".join(f"- {k}: {v}" for k,v in sorted(counts.items()))
    (folder/"README.md").write_text(f"# 发型图片包 {pack['id']}｜{pack['name']}\n\n- 图片数量：{len(rows)}\n- 来源：Wikimedia Commons 开放许可文件\n- 规格：最长边约 {WIDTH}px，JPEG\n- 逐张来源、作者与许可证：见 `manifest.csv`\n\n## 许可统计\n{license_lines}\n\n## 注意\n开放版权许可不自动消除肖像权、隐私权或商标权。公开转载、商业使用或训练用途前，请逐张核对清单及原始页面。\n",encoding="utf-8")
    contact_sheet(paths,folder/"preview_first_40.jpg",f"发型包 {pack['id']} {pack['name']}")
    z=OUT/f"发型图片包_{pack['id']}_{pack['name']}_200张.zip"
    with zipfile.ZipFile(z,"w",zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
        for p in sorted(folder.rglob("*")):
            if p.is_file(): archive.write(p,arcname=f"{folder.name}/{p.relative_to(folder)}")
    print(f"CREATED {z.name} {z.stat().st_size/1024/1024:.1f}MB",flush=True); return z


def main()->None:
    random.seed(20260803)
    if OUT.exists(): shutil.rmtree(OUT)
    OUT.mkdir(); hashes=set(); zips=[]
    for pack in PACKS: zips.append(build(pack,hashes))
    summary={"total_images":len(hashes),"packs":[{"file":z.name,"bytes":z.stat().st_size} for z in zips]}
    (OUT/"BUILD_SUMMARY.json").write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding="utf-8")
    if len(hashes)!=1000: raise RuntimeError(summary)
    print(json.dumps(summary,ensure_ascii=False,indent=2),flush=True)

if __name__=="__main__": main()
