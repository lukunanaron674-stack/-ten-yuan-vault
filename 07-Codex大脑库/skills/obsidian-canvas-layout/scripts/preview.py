#!/usr/bin/env python3
"""Simple static Canvas overview PNG (Pillow optional; not an Obsidian UI render)."""
import argparse
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

COLORS={'1':'#bd6970','2':'#c39748','3':'#b5a24d','4':'#69a879','5':'#64a6ad','6':'#9582c8'}

def preview(source,output,width=2200):
    data=json.loads(Path(source).read_text(encoding='utf-8'))
    nodes=data['nodes']; by={n['id']:n for n in nodes}
    groups=[n for n in nodes if n['type']=='group']; leaves=[n for n in nodes if n['type']!='group']
    minx=min(n['x'] for n in nodes);miny=min(n['y'] for n in nodes)
    maxx=max(n['x']+n['width'] for n in nodes);maxy=max(n['y']+n['height'] for n in nodes)
    padding=70; scale=(width-2*padding)/(maxx-minx)
    height=max(400,round((maxy-miny)*scale+2*padding))
    if height>9000:raise ValueError('PNG too tall; reduce --width')
    image=Image.new('RGB',(width,height),'#fcfcfc');draw=ImageDraw.Draw(image)
    def xy(x,y):return (round(padding+(x-minx)*scale),round(padding+(y-miny)*scale))
    try: font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',13)
    except OSError:font=ImageFont.load_default()
    for n in groups:
        p=xy(n['x'],n['y']);q=xy(n['x']+n['width'],n['y']+n['height']);col=COLORS.get(str(n.get('color')),'#999999')
        draw.rectangle((*p,*q),outline=col,width=2)
        draw.text((p[0]+5,p[1]+4),n.get('label','')[:30],fill=col,font=font)
    for e in data.get('edges',[]):
        a=by[e['fromNode']];b=by[e['toNode']]
        p=xy(a['x']+a['width']/2,a['y']+a['height']/2)
        q=xy(b['x']+b['width']/2,b['y']+b['height']/2)
        draw.line((*p,*q),fill=COLORS.get(str(e.get('color')),'#b1b1b1'),width=1)
    for n in leaves:
        p=xy(n['x'],n['y']);q=xy(n['x']+n['width'],n['y']+n['height']);col=COLORS.get(str(n.get('color')),'#999999')
        draw.rectangle((*p,*q),fill='#ffffff',outline=col,width=2)
        first=(n.get('text') or n.get('file') or n.get('url') or '').split('\n')[0]
        if (q[0]-p[0])>30 and (q[1]-p[1])>17:
            draw.text((p[0]+4,p[1]+3),first.lstrip('#* ').strip()[:30],fill='#262626',font=font)
    Path(output).parent.mkdir(parents=True,exist_ok=True);image.save(output)
    return {'width':width,'height':height,'nodes':len(leaves),'groups':len(groups),'note':'Approximate geometry only; inspect in Obsidian for final visual acceptance.'}

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('canvas');p.add_argument('output');p.add_argument('--width',type=int,default=2200)
    a=p.parse_args();print(json.dumps(preview(a.canvas,a.output,a.width),ensure_ascii=False))
