from pathlib import Path
import json,re
R=Path(__file__).resolve().parent.parent; E=R/'09_Codex执行'; O=R/'05_画布工作台'/'方志敏_Codex执行中枢.canvas'
def meta(p):
 s=p.read_text(encoding='utf-8'); e=s.find('\n---',4); d={}
 for l in s[4:e].splitlines():
  if ':' in l:k,v=l.split(':',1);d[k.strip()]=v.strip().strip('"\'')
 return d
def ph(d):
 if d.get('locked')=='true':return 'locked'
 if d.get('image_status','draft')!='accepted':return 'image'
 if d.get('preview_status','none')!='accepted':return 'preview'
 if d.get('hd_status','none')!='accepted':return 'hd'
 return 'lock'
def L(v,n):
 if v and not v.startswith('方/') and not v.startswith('http'):v='方/'+v
 return f'[[{v}|{n}]]' if v else '暂无'
def M(v,n):
 if v and not v.startswith('方/') and not v.startswith('http'):v='方/'+v
 return f'![[{v}|{n}]]' if v else '暂无'
ts=[]
for p in E.rglob('FZM-*.md'):
 if '卡索引' in p.parts:continue
 m=re.match(r'FZM-(\d+-\d+)([A-Z]?)-H3',p.stem)
 if m:ts.append((m.group(1)+m.group(2),p,meta(p)))
vis=[x for x in ts if ph(x[2])!='locked']; n=len(ts); c={x:sum(ph(d)==x for _,_,d in ts) for x in ['image','preview','hd','lock','locked']}
N=[];G=[]
def add(i,t,x,y,w,h,col=None):
 q={'id':i,'type':'text','text':t,'x':x,'y':y,'width':w,'height':h};
 if col:q['color']=col
 N.append(q)
add('dashboard',f'# 方志敏｜执行中枢\n\n当前剩余：{len(vis)} 镜 / 总计 {n} 镜\n\n①画面 {c["image"]}　②预览 {c["preview"]}　★高清 {c["hd"]}　③待锁 {c["lock"]}　🔒已锁 {c["locked"]}\n\n[[方/09_Codex执行/00_执行规则|执行规则]]　[[方/09_Codex执行/00_执行队列|执行队列]]\n🔒 [[方/09_Codex执行/已锁定/锁定视频索引|已锁定视频]]\n[[方/09_Codex执行/sync_execution_canvas.py|同步脚本]]',0,0,760,250,'6')
by={}
for a,p,d in vis:by.setdefault(a.split('-')[0],[]).append((a,p,d))
for ai,a in enumerate(sorted(by,key=lambda z:int(z))):
 arr=sorted(by[a]); aid='act'+a; x=ai*1050-650;y=400
 add(aid,f'📂 第{a}幕\n\n未完成：{len(arr)} 镜\n画面 {sum(ph(d)=="image" for _,_,d in arr)} · 预览 {sum(ph(d)=="preview" for _,_,d in arr)} · 高清 {sum(ph(d)=="hd" for _,_,d in arr)} · 待锁 {sum(ph(d)=="lock" for _,_,d in arr)}',x,y,520,200,str((ai%5)+1));G.append({'id':'g'+aid,'fromNode':'dashboard','toNode':aid,'fromSide':'bottom','toSide':'top'})
 for j,(a,p,d) in enumerate(arr):
  q=ph(d); x2=x+(j%3)*350;y2=y+280+(j//3)*330; ico={'image':'🟡','preview':'🟧','hd':'🟧','lock':'🟢'}[q]; lab={'image':'① 画面','preview':'② 视频预览','hd':'② 高清二跑','lock':'③ 待锁定'}[q]
  t=f'{ico} 卡{a}\n\n当前：{lab}\n\n🎬 {L(d.get("visual_prompt"),"打开画面描述词")}\n⏱ {L(d.get("motion_prompt"),"打开时间分镜")}'
  if q=='image':t+='\n🖼 当前图：'+M(d.get('current_image'),'打开当前图')
  elif q=='preview':t+='\n🎞 预览：'+M(d.get('preview_output'),'打开预览')
  elif q=='hd':t+='\n🎞 预览：'+M(d.get('preview_output'),'预览')+'\n★ 高清：暂无'
  else:t+='\n🎬 高清：'+M(d.get('hd_output'),'打开高清')
  t+=f'\n\n⚙ [[方/09_Codex执行/{p.relative_to(E).with_suffix("").as_posix()}|打开执行卡]]'
  sid='shot_'+a.replace('-','_');add(sid,t,x2,y2,330,250,{'image':'5','preview':'4','hd':'3','lock':'2'}[q]);G.append({'id':'g'+sid,'fromNode':aid,'toNode':sid,'fromSide':'bottom','toSide':'top'})
O.write_text(json.dumps({'nodes':N,'edges':G},ensure_ascii=False,indent=2),encoding='utf-8');print(f'synced {len(vis)}/{n} visible')

