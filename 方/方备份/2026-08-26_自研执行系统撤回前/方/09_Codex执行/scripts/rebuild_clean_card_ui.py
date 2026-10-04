from pathlib import Path
R=Path(r'C:\Users\19308\Documents\Obsidian\ten-yuan-vault\方');P=R/'09_Codex执行'/'第一幕'/'FZM-1-1-H3.md'
def fm():
 s=P.read_text(encoding='utf-8');e=s.find('\n---',4);return s[:e]
def b(label,actions):
 z=['```meta-bind-button',f'label: {label}','actions:']
 for k,v in actions:
  z += ['  - type: updateMetadata',f'    bindTarget: {k}','    evaluate: false',f'    value: {v}']
 z += ['```'];return '\n'.join(z)
body=['# 卡1-1｜山河铺陈','', '> 中文控制面板｜按钮只修改本卡属性，不自动启动任务。','', '## 当前：① 分镜画面','', '🖼 **当前画面**','', '![[方/07_素材图/第一幕/山河_峨眉云海.png]]','', '🎬 [[方/02_描述词/第一幕/卡1-1_山河铺陈_画面描述词.md|打开画面描述词]]','', '## 操作', '', b('✅ 画面确认',[('image_status','accepted')]),'',b('🔄 重做画面',[('image_status','draft'),('current_image','""'),('status','draft')]),'',b('▶ 跑预览',[('preview_status','queued'),('status','queued')]),'',b('🔄 重跑预览',[('preview_status','queued'),('status','queued')]),'',b('⭐ 生成高清版',[('workflow','H3_LATENT_UPSCALE'),('hd_status','queued'),('status','queued')]),'',b('✅ 视频确认',[('hd_status','accepted')]),'',b('🔒 锁卡',[('locked','true')]),'',b('▶ 开始',[('status','queued')]),'',b('■ 停止',[('cancel_requested','true'),('status','cancelled')]),'',b('✅ 采用',[('status','accepted')]),'',b('❌ 废弃',[('status','rejected')]),'', '---','_操作后由本地 watcher 自动刷新执行中枢。_','']
P.write_text(fm()+'\n---\n'+'\n'.join(body),encoding='utf-8');print('sample panel rewritten')
