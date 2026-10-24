#!/usr/bin/env python3
"""FZM execution watcher.

Safe by default: queued tasks are reported but not submitted unless --live is
passed and H3CLOUD_COMMAND is configured. The command receives the task path
as {task} and must print a job id on success.
"""
import argparse, datetime, os, re, subprocess, time
from pathlib import Path

ROOT=Path(__file__).resolve().parent
LOG=ROOT/'运行日志'/'watcher.log'

def read_frontmatter(p):
    s=p.read_text(encoding='utf-8',errors='replace')
    if not s.startswith('---\n'): return {},s
    end=s.find('\n---',4)
    if end<0:return {},s
    d={}
    for line in s[4:end].splitlines():
        if ':' in line:
            k,v=line.split(':',1); d[k.strip()]=v.strip().strip('"\'')
    return d,s

def set_fields(p, fields):
    d,s=read_frontmatter(p)
    end=s.find('\n---',4)
    lines=s[4:end].splitlines()
    seen=set()
    out=[]
    for line in lines:
        if ':' in line:
            k=line.split(':',1)[0].strip()
            if k in fields:
                out.append(f'{k}: {fields[k]}'); seen.add(k); continue
        out.append(line)
    for k,v in fields.items():
        if k not in seen: out.append(f'{k}: {v}')
    p.write_text('---\n'+'\n'.join(out)+s[end:],encoding='utf-8')

def log(msg):
    LOG.parent.mkdir(exist_ok=True)
    line=f'[{datetime.datetime.now().isoformat(timespec="seconds")}] {msg}'
    print(line); LOG.open('a',encoding='utf-8').write(line+'\n')

def tasks():
    return [p for p in ROOT.rglob('FZM-*.md') if '卡索引' not in p.parts]

def handle(p,live):
    m,_=read_frontmatter(p); status=m.get('status','draft')
    # Cancellation is explicit and never silently treated as complete.
    if status in ('running','queued') and str(m.get('cancel_requested','false')).lower()=='true':
        job=m.get('job_id','')
        cmd=os.environ.get('H3CLOUD_CANCEL_COMMAND','').strip()
        if not live:
            log(f'CANCEL REQUEST (dry-run, not submitted): {p.name} job_id={job}')
            return
        if not cmd or not job:
            set_fields(p,{'status':'cancelled','error':'cancel adapter/job_id unavailable'})
            log(f'CANCELLED locally (remote not confirmed): {p.name}')
            return
        try:
            out=subprocess.run(cmd.replace('{job_id}',job),shell=True,text=True,capture_output=True,timeout=30)
            if out.returncode: raise RuntimeError(out.stderr[-1000:])
            set_fields(p,{'status':'cancelled','cancel_requested':'false','error':'','cancelled_at':datetime.datetime.now().isoformat(timespec='seconds')})
            log(f'CANCEL CONFIRMED {p.name} job_id={job}')
        except Exception as e:
            set_fields(p,{'status':'failed','error':'cancel failed: '+str(e).replace('\n',' ')})
            log(f'CANCEL FAILED {p.name}: {e}')
        return
    if status!='queued': return
    if not live:
        log(f'QUEUED (dry-run, not submitted): {p.name}')
        return
    cmd=os.environ.get('H3CLOUD_COMMAND','').strip()
    if not cmd:
        log(f'BLOCKED: H3CLOUD_COMMAND not configured: {p.name}')
        set_fields(p,{'status':'queued','error':'h3cloud command not configured'})
        return
    set_fields(p,{'status':'running','started_at':datetime.datetime.now().isoformat(timespec='seconds'),'error':''})
    try:
        rendered=cmd.replace('{task}',str(p))
        out=subprocess.run(rendered,shell=True,text=True,capture_output=True,timeout=30)
        if out.returncode:
            raise RuntimeError(out.stderr[-1000:])
        job=out.stdout.strip().splitlines()[-1] if out.stdout.strip() else ''
        set_fields(p,{'job_id':job,'status':'review' if job else 'failed','error':'' if job else 'no job id'})
        log(f'SUBMITTED {p.name} job_id={job}')
    except Exception as e:
        set_fields(p,{'status':'failed','error':str(e).replace('\n',' ')})
        log(f'FAILED {p.name}: {e}')

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--live',action='store_true'); ap.add_argument('--once',action='store_true'); ap.add_argument('--interval',type=int,default=5); a=ap.parse_args()
    log('watcher start live='+str(a.live))
    while True:
        for p in tasks(): handle(p,a.live)
        if a.once: break
        time.sleep(a.interval)

if __name__=='__main__': main()
