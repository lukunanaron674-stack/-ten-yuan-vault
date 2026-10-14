#!/usr/bin/env python3
"""Fixtures test: 6-zone job and portfolio trees + safe write policy."""
import copy
import json
import subprocess
import sys
import tempfile
from pathlib import Path
from layout import layout,validate,within


def fixture():
    nodes=[];edges=[]
    for i in range(6):
        cx=i%3*13000;cy=i//3*14000
        z={'id':f'z{i}','type':'group','x':cx,'y':cy,'width':7900,'height':10000,'color':str(i+1)}
        nodes.append(z)
        root={'id':f'root{i}','type':'text','x':cx+3300,'y':cy+4500,'width':900,'height':260,'text':'Root '+str(i),'color':str(i+1)}
        nodes.append(root)
        for j in range(3):
            x=cx+200+j*1900;y=cy+500+j*2800
            g={'id':f'g{i}-{j}','type':'group','x':x,'y':y,'width':1600,'height':2100,'color':str((i+j)%6+1)}
            t={'id':f't{i}-{j}','type':'text','x':x+130,'y':y+140,'width':930,'height':260,'text':'role '+str(j),'color':g['color']}
            leaf={'id':f'l{i}-{j}','type':'text','x':x+130,'y':y+700,'width':930,'height':390,'text':'Company and job details\nABC'+str(j),'color':g['color']}
            nodes.extend([g,t,leaf]);edges.extend([{'id':f'e{i}-{j}','fromNode':root['id'],'toNode':t['id'],'fromSide':'right','toSide':'left'},{'id':f'f{i}-{j}','fromNode':t['id'],'toNode':leaf['id'],'fromSide':'bottom','toSide':'top'}])
    nodes.extend([{'id':'headline','type':'text','x':13000,'y':-4500,'width':800,'height':190,'text':'Global header'}])
    return {'nodes':nodes,'edges':edges}


def main():
    source=fixture();validate(source)
    original=copy.deepcopy(source)
    report=layout(source)
    assert report['zones']==6
    assert report['nodes']==67
    assert len(source['edges'])==36
    lookup={n['id']:n for n in source['nodes']}
    assert len({n['color'] for n in source['nodes'] if n['id'].startswith('z')})==6
    for i in range(6):
        zone=lookup['z'+str(i)]
        for j in range(3):
            assert within(zone,lookup[f'g{i}-{j}'])
            assert within(lookup[f'g{i}-{j}'],lookup[f'l{i}-{j}'])
    assert original['edges']==source['edges']
    assert all(original['nodes'][i]['text']==source['nodes'][i]['text'] for i in range(len(original['nodes'])) if 'text' in original['nodes'][i])
    with tempfile.TemporaryDirectory() as td:
        src=Path(td)/'test.canvas'
        src.write_text(json.dumps(original,ensure_ascii=False),encoding='utf8')
        script=Path(__file__).with_name('layout.py')
        dry=subprocess.run([sys.executable,str(script),str(src),'--dry-run'],capture_output=True,text=True)
        assert dry.returncode==0,dry.stderr
        assert json.loads(src.read_text(encoding='utf8'))==original
        run=subprocess.run([sys.executable,str(script),str(src)],capture_output=True,text=True)
        assert run.returncode==0,run.stderr
        assert (Path(td)/'test_LR_PREVIEW.canvas').exists()
        repeat=subprocess.run([sys.executable,str(script),str(src)],capture_output=True,text=True)
        assert repeat.returncode!=0 and 'Output exists' in repeat.stderr
        inplace=subprocess.run([sys.executable,str(script),str(src),'--in-place'],capture_output=True,text=True)
        assert inplace.returncode==0,inplace.stderr
        assert len(list(Path(td).glob('test.canvas.bak_*')))==1
    print(json.dumps({'pass':True,'fixtureZones':report['zones'],'fixtureNodes':report['nodes'],'fixtureEdges':report['edges'],'previewRefusesOverwrite':True,'inplaceMakesBackup':True},ensure_ascii=False))

if __name__=='__main__':main()
