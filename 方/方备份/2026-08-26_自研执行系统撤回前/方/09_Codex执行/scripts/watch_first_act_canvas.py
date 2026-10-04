import os, subprocess, sys, time
from pathlib import Path
HERE=Path(__file__).resolve().parent
TASKS=[HERE.parent/'第一幕'/f'FZM-1-{i}-H3.md' for i in (1,2,3)]
REBUILD=HERE/'rebuild_production_canvas.py'
UI=HERE/'rebuild_clean_card_ui.py'
LOG=HERE.parent/'运行日志'/'first_act_canvas_watch.log'
def stamp(): return tuple((p.stat().st_mtime_ns if p.exists() else 0) for p in TASKS)
last=None
LOG.parent.mkdir(exist_ok=True)
while True:
 cur=stamp()
 if cur!=last:
  env=os.environ.copy(); env['FZM_TEST_ACTS']='1'
  subprocess.run([sys.executable,str(UI)],env=env,text=True,capture_output=True)
  r=subprocess.run([sys.executable,str(REBUILD)],env=env,text=True,capture_output=True)
  LOG.open('a',encoding='utf-8').write((r.stdout or '')+(r.stderr or ''))
  last=cur
 time.sleep(2)

