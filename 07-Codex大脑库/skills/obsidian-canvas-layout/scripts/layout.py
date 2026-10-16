#!/usr/bin/env python3
"""Safe balanced left/right layout for Obsidian JSON Canvas forests.

Standard library only. Geometry-only: preserves IDs, text, colors and edges.
Defaults to dry-run and never creates duplicate Canvas; --in-place modifies the source with an external-temp backup.
"""
import argparse
import copy
import json
import math
import os
from pathlib import Path
import shutil
import tempfile
from datetime import datetime


def within(group, node, eps=2):
    return (node['x'] >= group['x']-eps and node['y'] >= group['y']-eps
            and node['x']+node['width'] <= group['x']+group['width']+eps
            and node['y']+node['height'] <= group['y']+group['height']+eps)


def bounds(nodes):
    if not nodes:
        raise ValueError('empty node collection')
    return (min(n['x'] for n in nodes), min(n['y'] for n in nodes),
            max(n['x']+n['width'] for n in nodes),
            max(n['y']+n['height'] for n in nodes))


def rect_overlap(a, b, margin=0):
    return (a['x'] < b['x']+b['width']-margin and b['x'] < a['x']+a['width']-margin
            and a['y'] < b['y']+b['height']-margin and b['y'] < a['y']+a['height']-margin)


def validate(data):
    nodes, edges = data.get('nodes'), data.get('edges')
    if not isinstance(nodes, list) or not isinstance(edges, list):
        raise ValueError('nodes and edges must be arrays')
    ids = [n.get('id') for n in nodes]
    if any(not x for x in ids) or len(set(ids)) != len(ids):
        raise ValueError('missing or duplicated node ID')
    idset = set(ids)
    for n in nodes:
        if n.get('type') not in ('text', 'file', 'link', 'group'):
            raise ValueError('unexpected node type: '+str(n.get('type')))
        for k in ('x','y','width','height'):
            if not isinstance(n.get(k),(int,float)) or not math.isfinite(n[k]):
                raise ValueError('invalid geometry: '+n['id'])
        if n['width']<=0 or n['height']<=0:
            raise ValueError('non-positive size: '+n['id'])
    for e in edges:
        if e.get('fromNode') not in idset or e.get('toNode') not in idset:
            raise ValueError('dangling edge: '+str(e.get('id')))
    return True


def top_zones(nodes):
    groups = [n for n in nodes if n['type']=='group']
    return [g for g in groups if not any(p['id']!=g['id'] and within(p,g) for p in groups)]


def layout(data, group_gap=160, forest_gap=300, aspect=1.4):
    validate(data)
    nodes = data['nodes']; by = {n['id']:n for n in nodes}
    original = copy.deepcopy(data)
    zones = top_zones(nodes)
    if len(zones)<2:
        raise ValueError('Need at least two independent top-level group zones; refusing single-root guessing')
    zones.sort(key=lambda n:(n['y'],n['x'],n['id']))
    source_zone_children={z['id']:{n['id'] for n in nodes if n['type']!='group' and within(z,n)} for z in zones}
    source_zone_groups={z['id']:{n['id'] for n in nodes if n['type']=='group' and n['id']!=z['id'] and within(z,n)} for z in zones}
    all_ids=set()
    for z in zones:
        if all_ids.intersection(source_zone_children[z['id']]):
            raise ValueError('Top-level zones share content')
        all_ids.update(source_zone_children[z['id']])
    membership={node_id:zid for zid,arr in source_zone_children.items() for node_id in arr}
    if any(membership.get(e['fromNode']) != membership.get(e['toNode']) for e in data['edges']):
        raise ValueError('Cross-zone/global edge present; manual review required')
    zone_info={}
    for z in zones:
        members=source_zone_children[z['id']]
        subgroups=[n for n in nodes if n['type']=='group' and n['id']!=z['id'] and within(z,n)]
        immediate=[g for g in subgroups if not any(p['id']!=g['id'] and within(p,g) for p in subgroups)]
        if len(immediate)<2:
            if len(immediate)==0:
                # Group-free radial diagrams are already laid out by the author.
                # Keep every child offset unchanged; only forest-pack entire root groups.
                zone_info[z['id']]={'mode':'preserve_existing_radial','leftBranches':0,
                                   'rightBranches':0,'width':z['width'],'height':z['height']}
                continue
            raise ValueError('Zone has only one subgroup; ambiguous layout: '+z['id'])
        immediate.sort(key=lambda n:(n['y'],n['x'],n['id']))
        childmap={g['id']:[n for n in nodes if n['id']!=g['id'] and within(g,n)] for g in immediate}
        assigned=[set(n['id'] for n in vv if n['type']!='group') for vv in childmap.values()]
        if any(assigned[i].intersection(assigned[j]) for i in range(len(assigned)) for j in range(i+1,len(assigned))):
            raise ValueError('Overlapping child branch groups in '+z['id'])
        nonbranch=[by[id] for id in members if not any(id in s for s in assigned)]
        if not nonbranch: raise ValueError('No center candidate: '+z['id'])
        childset=set().union(*assigned)
        outdegree={n['id']:sum(e['fromNode']==n['id'] and e['toNode'] in childset for e in data['edges']) for n in nonbranch}
        hub=max(nonbranch,key=lambda n:(outdegree[n['id']],-abs(n['x']-(z['x']+z['width']/2))))
        if outdegree[hub['id']]<1:
            raise ValueError('Cannot identify connected hub: '+z['id'])
        others=sorted((n for n in nonbranch if n['id']!=hub['id']),key=lambda n:(n['y'],n['x']))
        side_groups=[immediate[::2],immediate[1::2]]
        heights=[sum(g['height'] for g in ss)+group_gap*max(0,len(ss)-1) for ss in side_groups]
        center_y=max(*heights,hub['height']+900)/2
        hub['x']=0;hub['y']=round(center_y-hub['height']/2)
        for side,arr in enumerate(side_groups):
            cursor=(2*center_y-heights[side])/2
            for g in arr:
                target_x= -185-g['width'] if side==0 else hub['width']+185
                dx=round((target_x-g['x'])/20)*20
                dy=round((cursor-g['y'])/20)*20
                for n in childmap[g['id']]:n['x']+=dx;n['y']+=dy
                g['x']+=dx;g['y']+=dy
                cursor+=g['height']+group_gap
        cursor=hub['y']+hub['height']+150
        for n in others:
            n['x']=round(hub['x']+hub['width']/2-n['width']/2)
            n['y']=round(cursor/20)*20;cursor+=n['height']+90
        included=[hub]+immediate+others
        a,b,c,d=bounds(included)
        z.update(x=a-210,y=b-210,width=c-a+420,height=d-b+420)
        zone_info[z['id']]={'leftBranches':len(side_groups[0]),'rightBranches':len(side_groups[1]),'width':z['width'],'height':z['height']}
    keys=[z['id'] for z in zones]
    def plan(cols):
        rows=[keys[i:i+cols] for i in range(0,len(keys),cols)]
        col_width=[max((by[key]['width'] for row in rows if len(row)>c for key in [row[c]]),default=0) for c in range(cols)]
        row_height=[max(by[k]['height'] for k in row) for row in rows]
        gap=forest_gap; width=sum(col_width)+gap*(len(col_width)-1);height=sum(row_height)+gap*(len(rows)-1)
        score=width*height*(1+0.3*abs(math.log((width/height)/aspect)))
        shifts={}
        for iy,row in enumerate(rows):
            for ix,k in enumerate(row):
                z=by[k]
                x=sum(col_width[:ix])+gap*ix+(col_width[ix]-z['width'])/2
                y=sum(row_height[:iy])+gap*iy+(row_height[iy]-z['height'])/2
                shifts[k]=(round((x-z['x'])/20)*20,round((y-z['y'])/20)*20)
        return score,cols,rows,shifts,width,height
    options=[plan(c) for c in range(2,min(len(zones),3)+1)]
    _,cols,rows,shifts,_,_=min(options,key=lambda a:(a[0],a[1]))
    for z in zones:
        dx,dy=shifts[z['id']]
        moved=[n for n in nodes if n['id']==z['id'] or n['id'] in source_zone_children[z['id']] or n['id'] in source_zone_groups[z['id']]]
        for n in moved:n['x']+=dx;n['y']+=dy
    used=set().union(*source_zone_children.values())
    global_nodes=sorted((n for n in nodes if n['type']!='group' and n['id'] not in used),key=lambda n:(n['y'],n['x']))
    x=60;y=-750;row_h=0
    max_width=max((z['x']+z['width'] for z in zones),default=2000)
    for n in global_nodes:
        if x+n['width']>max_width-100 and x>60:x=60;y+=row_h+70;row_h=0
        n['x']=x;n['y']=y;x+=n['width']+85;row_h=max(row_h,n['height'])
    validate(data)
    current={n['id']:n for n in nodes}
    before={n['id']:n for n in original['nodes']}
    for id,n in current.items():
        b=before[id]
        for k,v in b.items():
            if k not in ('x','y','width','height') and n.get(k)!=v:
                raise ValueError('Content/color/metadata changed for '+id)
        if (n['width']!=b['width'] or n['height']!=b['height']) and id not in zone_info:
            raise ValueError('Non-top-level node size changed: '+id)
    if data['edges']!=original['edges']:
        raise ValueError('Edges mutated during layout')
    contents=[n for n in nodes if n['type']!='group']
    for i,a in enumerate(contents):
        for b in contents[i+1:]:
            if rect_overlap(a,b,5):raise ValueError('Text/card overlap: '+a['id']+' '+b['id'])
    for i,a in enumerate(zones):
        for b in zones[i+1:]:
            if rect_overlap(a,b):raise ValueError('Root group overlap: '+a['id']+' '+b['id'])
    return {'nodes':len(nodes),'edges':len(data['edges']),'zones':len(zones),'gridColumns':cols,'rows':rows,'zoneInfo':zone_info,'contentPreserved':True}



def audit(data):
    """Read-only geometry and graph audit; works for ungrouped legacy Canvas too."""
    validate(data)
    nodes=data['nodes'];edges=data['edges']
    zones=top_zones(nodes)
    owner={}
    for z in zones:
        for n in nodes:
            if n['type']=='group' or not within(z,n):continue
            if n['id'] in owner:
                raise ValueError('Node belongs to multiple root groups: '+n['id'])
            owner[n['id']]=z['id']
    cross=[e['id'] for e in edges if owner.get(e['fromNode'])!=owner.get(e['toNode'])]
    ungrouped=[n['id'] for n in nodes if n['type']!='group' and n['id'] not in owner]
    overlap=[]
    cards=[n for n in nodes if n['type']!='group']
    for i,a in enumerate(cards):
        for b in cards[i+1:]:
            if rect_overlap(a,b,5):overlap.append((a['id'],b['id']))
    group_overlaps=[]
    for i,a in enumerate(zones):
        for b in zones[i+1:]:
            if rect_overlap(a,b):group_overlaps.append((a['id'],b['id']))
    return {'nodes':len(nodes),'edges':len(edges),'topGroups':len(zones),
            'groupFreeZones':sum(not any(n['type']=='group' and n['id']!=z['id'] and within(z,n) for n in nodes) for z in zones),
            'crossCenterEdges':cross,'ungroupedNodes':ungrouped,
            'cardOverlaps':overlap,'groupOverlaps':group_overlaps,
            'canRunGeometryOnly':len(zones)>=2 and not cross and not overlap and not group_overlaps and not ungrouped}


def atomic_json_write(path, data):
    path.parent.mkdir(parents=True,exist_ok=True)
    fd,tmp=tempfile.mkstemp(prefix='.canvas-lr-',suffix='.tmp',dir=path.parent)
    try:
        with os.fdopen(fd,'w',encoding='utf-8') as f:
            json.dump(data,f,ensure_ascii=False,indent=2);f.write('\n')
        os.replace(tmp,path)
    finally:
        if os.path.exists(tmp):os.unlink(tmp)


def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('canvas',type=Path)
    p.add_argument('--output',type=Path)
    p.add_argument('--dry-run',action='store_true')
    p.add_argument('--audit-only',action='store_true',help='Read-only audit for existing, grouped or legacy ungrouped Canvas')
    p.add_argument('--in-place',action='store_true',help='Modify the existing Canvas path after making a backup outside the Vault')
    p.add_argument('--group-gap',type=int,default=160)
    p.add_argument('--forest-gap',type=int,default=300)
    args=p.parse_args()
    if args.in_place and args.output: p.error('--output and --in-place are exclusive')
    try:
        inp=args.canvas.resolve(strict=True)
        data=json.loads(inp.read_text(encoding='utf-8'))
        if args.audit_only:
            print(json.dumps({'status':'audit-only','source':str(inp),**audit(data)},ensure_ascii=False))
            return
        result=layout(data,args.group_gap,args.forest_gap)
        if args.dry_run or (not args.in_place and args.output is None):
            print(json.dumps({'status':'dry-run','source':str(inp),**result},ensure_ascii=False));return
        target=inp if args.in_place else (args.output or inp.with_name(inp.stem+'_LR_PREVIEW.canvas'))
        if target.exists() and not args.in_place: raise FileExistsError('Output exists (no overwrite): '+str(target))
        if args.in_place:
            stamp=datetime.now().strftime('%Y%m%d_%H%M%S_%f')
            backup_dir=Path(tempfile.gettempdir()) / 'obsidian-canvas-layout-backups'
            backup_dir.mkdir(parents=True,exist_ok=True)
            backup=backup_dir / (str(abs(hash(str(inp))))+'_'+inp.name+'.bak_'+stamp)
            shutil.copy2(inp,backup)
            result['backup']=str(backup)
        atomic_json_write(target,data)
        print(json.dumps({'status':'written','path':str(target),**result},ensure_ascii=False))
    except (ValueError,OSError,KeyError,TypeError,json.JSONDecodeError) as exc:
        p.exit(1,'FAIL CLOSED: '+str(exc)+'\n')

if __name__=='__main__':main()
