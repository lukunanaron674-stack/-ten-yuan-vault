// sidepanel.js — F12 总控塔 v0.9 (自包含版，无 import)
// 所有工具函数内联，兼容 Edge Side Panel

// ============================================================
// INLINED UTILITIES (from core modules)
// ============================================================

// --- copyToClipboard ---
async function copyToClipboard(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    const ta = document.createElement('textarea'); ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    return true;
  }
}

// --- download helpers ---
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}
function downloadState(state) { downloadFile(JSON.stringify(state,null,2), 'ty-f12-state-'+ts()+'.json', 'application/json'); }
function downloadCarryPacket(markdown, rangeStr) { downloadFile(markdown, 'ty-f12-carry-'+rangeStr+'-'+ts()+'.md', 'text/markdown'); }
function downloadLogs(state) { downloadFile(JSON.stringify({logs:state.logs||[]},null,2), 'ty-f12-logs-'+ts()+'.json', 'application/json'); }
function downloadAllCarryPackets(state) {
  const p = state.carryPackets||[]; const md = p.length ? p.map((x,i)=>'## '+(i+1)+'. '+x.range+'\n\n'+(x.markdown||'')).join('\n\n---\n\n') : '# 无';
  downloadFile('# CarryPackets\n\n'+md, 'ty-f12-all-carry-'+ts()+'.md', 'text/markdown');
}

// --- importStateJson ---
function importStateJson(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = e => { try { const d=JSON.parse(e.target.result); if(!d.tasks) reject(new Error('Invalid')); else resolve(d); } catch(err) { reject(err); } };
    r.onerror = () => reject(new Error('Read failed'));
    r.readAsText(file);
  });
}

// --- isCarryRound ---
function isCarryRound(round, total) { return round % 5 === 0 || round === total; }

// --- buildCarryPacketMarkdown ---
function buildCarryPacketMarkdown(state, opts) {
  const pn = opts.projectName||'未命名'; const fn = opts.frameName||'默认';
  const start = Math.floor((state.index)/5)*5+1; const end = state.index+1;
  const rs = 'R'+String(start).padStart(3,'0')+'-'+String(end).padStart(3,'0');
  const prev = (state.carryPackets&&state.carryPackets.length)?state.carryPackets[state.carryPackets.length-1].range:'none';
  return '---\ntype: f12-carry-packet\nproject: '+pn+'\nframe: '+fn+'\nrange: '+rs+'\nstatus: carry\nsource: f12-v0.9\ncreated: '+new Date().toISOString()+'\nprevious_packet: '+prev+'\n---\n\n# '+pn+'｜'+rs+' 记忆承载包\n\n## 1. 本组任务范围\n- 本组轮次：'+rs+'\n\n## 2. 已完成内容\n| 轮次 | 完成内容 |\n|---|---|\n\n## 3. 当前稳定结论\n\n## 4. 新增结构\n\n## 5. 待验证\n\n## 6. 污染风险\n\n## 7. 下一组上下文\n\n## 8. 起手指令\n```text\n继续执行【'+pn+'】R'+String(end+1).padStart(3,'0')+'/总轮数\n```\n\n## 9. 写入位置\n99-归档包/'+pn+'/'+fn+'/carry/'+rs+'-记忆承载包.md\n';
}

// --- buildNextRoundPrompt ---
function buildNextRoundPrompt(packet) {
  if (!packet) return '无';
  return packet.range+' | '+(packet.markdown||'').substring(0,80)+'...';
}

// --- Obsidian ---
function buildObsidianNewUri(opts) { return 'obsidian://new?vault='+encodeURIComponent(opts.vault||'ten-yuan-vault')+'&file='+encodeURIComponent(opts.file||''); }
function downloadObsidianMarkdown(md, fn) { downloadFile(md, fn, 'text/markdown'); }

// --- Obsidian/ GitHub path ---
function buildObsidianSuggestedPath(pn, fn, rs) { return '99-归档包/'+pn+'/'+fn+'/carry/'+rs+'-记忆承载包.md'; }
function buildGithubSuggestedPath(pn, fn, rs) { return buildObsidianSuggestedPath(pn, fn, rs); }

// --- Debug Report ---
function buildDebugReportMarkdown(state, health, workerStatus, trigger) {
  const logs = (state.logs||[]).slice(-20).map(l=>'  ['+(l.ts||'')+'] ['+l.level+'] '+l.message+(l.detail?' - '+l.detail:'')).join('\n');
  const errs = (state.errors||[]).slice(-10).map(e=>'  ['+(e.ts||'')+'] '+e.message+(e.detail?' - '+e.detail:'')).join('\n');
  return '# F12 Debug Report\n\n**时间:** '+new Date().toISOString()+'\n**触发:** '+(trigger||'manual')+'\n\n## 状态\n| 字段 | 值 |\n|---|---|\n| index | '+(state.index||0)+'/'+(state.total||0)+' |\n| running | '+(state.running||false)+' |\n| manualPause | '+(state.manualPause||false)+' |\n| activeTabId | '+(state.activeTabId||'-')+' |\n\n## Selector\n| 项 | 状态 |\n|---|---|\n| input | '+(health&&health.input?'✓':'✗')+' |\n| sendBtn | '+(health&&health.sendButton?'✓':'✗')+' |\n| stopBtn | '+(health&&health.stopButton?'✓':'✗')+' |\n| assistant | '+(health&&health.assistantNode?'✓':'✗')+' |\n\n## 日志\n```\n'+logs+'\n```\n\n## 错误\n```\n'+errs+'\n```\n';
}
function downloadDebugReport(md) { downloadFile(md, 'ty-f12-debug-'+ts()+'.md', 'text/markdown'); }

// --- GitHub handoff ---
function buildCodexWorkOrder(opts) {
  const s=opts.state||{}; const p=opts.packets||[]; const r=opts.repo||'owner/repo';
  const items = p.map((x,i)=>'### '+(i+1)+'. '+x.range+'\n- path: '+buildGithubSuggestedPath(s.projectName||'未命名',s.frameName||'默认',x.range)+'\n- commit: f12: carry-packet '+x.range).join('\n\n');
  return '# F12 归档写入工单\n\nrepo: '+r+'\n项目: '+(s.projectName||'未命名')+'\n数量: '+p.length+'\n\n'+items+'\n\n请按顺序写入以上文件。';
}
function buildGithubHandoffMarkdown(state, packets, repo) {
  if (!packets||!packets.length) return '# 无';
  return '# F12 归档手递\n\n'+packets.map(p=>'## '+p.range+'\n- path: '+buildGithubSuggestedPath(state.projectName||'未命名',state.frameName||'默认',p.range)+'\n- commit: f12: carry-packet '+p.range+'\n\n```markdown\n'+(p.markdown||'').substring(0,200)+'\n```').join('\n\n---\n\n');
}
function buildBatchWritePrompt(opts) {
  const items = opts.items||[];
  return '=== GitHub 批量写入 ===\nrepo: '+(opts.repo||'')+'\n文件数: '+items.length+'\n\n'+items.map((x,i)=>(i+1)+'. '+x.path+' | '+x.range).join('\n')+'\n\n请按顺序逐一写入。';
}
function buildManifestPatch(state, packets) {
  return JSON.stringify({project:state.projectName,frame:state.frameName,updatedAt:new Date().toISOString(),files:(packets||[]).map(p=>({path:p.suggestedPath,range:p.range,status:p.status}))},null,2);
}

// --- Task templates ---
function carryCacheInst(r) { return '【承载数据缓存】\n请在断点包里额外输出：\n- 本轮可进入五轮承载包的稳定结论：\n- 本轮新增但未钉死的灰矿：\n- 本轮下次必须继承的信息：'; }
function carryPktInst(r) { return '【五轮记忆承载要求】\n本轮是 R'+r+'，必须生成 R'+(Math.max(1,r-4))+'-R'+r+' 的记忆承载包。\n\n请输出：\n1. 五轮完成表\n2. 稳定结论\n3. 新增结构 / 新增子型\n4. 待验证灰矿\n5. 污染风险\n6. 下一组必须携带的上下文\n7. 下一组起手指令\n8. 建议写入的 Obsidian / GitHub 文件路径\n\n最后输出：CARRY_PACKET_R'+(Math.max(1,r-4))+'_R'+r+'_DONE'; }
function finalArchInst() { return '【最终总归档要求】\n请整合所有 CarryPacket，生成：\n1. 全轮次索引\n2. 总稳定结论\n3. 总结构表\n4. 子型总表\n5. 高银 / 金矿候选\n6. 灰矿 / 风险 / 反例\n7. 可交给中枢框的压缩版\n8. 下一阶段建议\n最后输出：FINAL_ARCHIVE_DONE'; }
function genTasks(count, project, frame) {
  const tasks = [];
  for (let i=1;i<=count;i++) {
    let t='继续执行【'+project+'】R'+i+'/'+count; if(frame) t+='｜'+frame;
    if(i%5===0||i===count){if(i%5===0)t+='\n\n'+carryPktInst(i);if(i===count)t+='\n\n'+finalArchInst();}
    else t+='\n\n'+carryCacheInst(i);
    t+='\n\n最后必须输出：TASK_DONE_R'+i; tasks.push(t);
  }
  return tasks;
}
function parseTasks(raw, options = {}) {
  const warnings = [];
  const text = (raw || '').trim();
  let tasks = [];
  let parseMode = 'single';
  if (!text) return {tasks:[], total:0, parseMode, warnings};
  if (text.includes('---TASK---')) {
    tasks = text.split('---TASK---').map(t=>t.trim()).filter(Boolean);
    parseMode = 'separator';
  } else {
    const byRound = splitByRoundHeading(text);
    if (byRound.length > 1) {
      tasks = byRound;
      parseMode = 'round-heading';
    } else if (options.generateFromIntent && detectRoundIntent(text)) {
      const total = Number(options.total) || detectRoundTotal(text) || 12;
      tasks = generateDefaultTasks({total, projectName: options.projectName, frameName: options.frameName, baseRules: text});
      parseMode = 'generated';
    } else {
      tasks = [text];
      if (detectRoundIntent(text)) warnings.push('当前只解析出 1 个任务。若要 12 轮，请使用 ---TASK--- 分隔或点击生成12轮。');
    }
  }
  tasks = tasks.filter(Boolean);
  console.log('Parsed tasks: '+tasks.length+' via '+parseMode);
  return {tasks, total:tasks.length, parseMode, warnings};
}
function splitByRoundHeading(text) {
  const matches = [...text.matchAll(/(?:^|\n)\s*(?:【\s*)?(R\d+\s*\/\s*\d+[^】\n]*(?:】)?)/gi)];
  if (matches.length <= 1) return [];
  return matches.map((m,i)=>{
    const start = m.index + (m[0].startsWith('\n') ? 1 : 0);
    const next = matches[i+1];
    const end = next ? next.index + (next[0].startsWith('\n') ? 1 : 0) : text.length;
    return text.slice(start,end).trim();
  }).filter(Boolean);
}
function detectRoundIntent(text) { return /(?:生成|默认)?\s*\d+\s*轮|R\d+\s*\/\s*\d+|R12/i.test(text); }
function detectRoundTotal(text) {
  const explicit = text.match(/(?:生成|默认)?\s*(\d+)\s*轮/);
  if (explicit) return Number(explicit[1]);
  const heading = text.match(/R\d+\s*\/\s*(\d+)/i);
  if (heading) return Number(heading[1]);
  if (/R12/i.test(text)) return 12;
  return null;
}
function generateDefaultTasks(opts) {
  const total = Number(opts.total || 12);
  const project = opts.projectName || '默认项目';
  const frame = opts.frameName || '';
  const baseRules = opts.baseRules || '';
  return genTasks(total, project, frame).map((task, i) => baseRules ? task+'\n\n【基础规则】\n'+baseRules : task);
}

// ============================================================
// SIDEPANEL LOGIC
// ============================================================

const $ = (id) => document.getElementById(id);

let state = null, health = null, workerConnected = false, workerChecked = false;

async function bg(msg) { return await chrome.runtime.sendMessage(msg); }

async function loadAndRender() {
  const resp = await bg({type:'GET_STATE'});
  if(resp.ok){state=resp.state;renderAll();}
}

function renderAll() {
  if(!state)return;
  renderConnStatus(); renderStatusDetail(); renderHealthBrief();
  renderPagePool();
  renderControls(); renderTasks(); renderCarryStatus(); renderCarryPackets(); renderLogs();
}

// Connection
function renderConnStatus() {
  if(!state.activeTabId){$('conn-status').textContent='● 未绑定标签页';$('conn-status').className='conn-status disconnected';}
  else if(!workerChecked){$('conn-status').textContent='◌ 检测工蜂中...';$('conn-status').className='conn-status checking';}
  else if(!workerConnected){$('conn-status').textContent='⚠ 工蜂未连接 — 请点手动注入';$('conn-status').className='conn-status worker-missing';}
  else{const ok=health&&health.input&&health.sendButton;$('conn-status').textContent=ok?'● 已连接 — 就绪':'● 已连接';$('conn-status').className='conn-status connected';}
}

async function checkWorker() {
  if(!state||!state.activeTabId){workerConnected=false;workerChecked=false;return;}
  try{const r=await chrome.runtime.sendMessage({type:'SP_CHECK_WORKER',tabId:state.activeTabId});workerConnected=!!(r&&r.ok&&r.connected);}
  catch(e){workerConnected=false;}
  workerChecked=true;
}

// Status detail
function renderStatusDetail() {
  const total = state.tasks?.length || 0;
  const current = total > 0 ? Math.min((state.index || 0) + 1, total) : 0;
  $('s-tab').textContent=state.activeTabId?'#'+state.activeTabId:'未绑定';
  $('s-url').textContent=(state.activeUrl||'').substring(0,47);
  $('s-url').title=state.activeUrl||'';
  const rs=state.running?(state.manualPause?'⏸ 暂停':'▶ 运行'):(state.stopped?'⏹ 停止':'⏸ 待命');
  $('s-running').textContent=rs;$('s-running').className='s-value'+(state.running?' s-running':'');
  $('s-round').textContent='R'+current+'/'+total;
  const la=state.leaseUntil&&state.leaseUntil>Date.now();
  $('s-lease').textContent=la?'🔒 锁定 ('+Math.ceil((state.leaseUntil-Date.now())/1000)+'s)':'🔓 空闲';
  $('s-lease').className='s-value'+(la?' s-lease-active':'');
  $('s-schema').textContent=state.schemaVersion||'?';$('s-bg-mode').textContent='inline';
  const errs=state.errors||[];const er=$('s-error');
  if(errs.length){er.style.display='';er.querySelector('.s-value').textContent='['+(errs[errs.length-1].ts||'').slice(11,19)+'] '+(errs[errs.length-1].message||'');}
  else er.style.display='none';
}

function renderHealthBrief(){if(health)updateDots(health);}
function updateDots(h){
  const s=(id,ok)=>{const e=$(id);if(e){e.textContent=ok?'✓':'✗';e.className='health-dot '+(ok?'ok':'fail');}};
  s('hc-input',h.input);s('hc-send',h.sendButton);s('hc-stop',h.stopButton);s('hc-assistant',h.assistantNode);
}

async function doHealthCheck(){
  if(!state.activeTabId){showFeedback('请先绑定标签页',true);return;}
  const r=await bg({type:'SP_HEALTH_CHECK'});
  if(r.ok){health=r;updateDots(r);showFeedback('检测完成');}
  else showFeedback('检测失败: '+(r.error||''),true);
}

// Tasks
function renderTasks(){
  const warnEl = $('task-warning');
  if (warnEl) warnEl.textContent = '';
  if(state.tasks&&state.tasks.length){
    // 只在编辑器未聚焦时同步状态 → 文本区，避免覆盖用户正在编辑的内容
    const editor = $('task-editor');
    if (tasksJustLoaded) { tasksJustLoaded = false; } else if (document.activeElement !== editor) {
      editor.value = state.tasks.join('\n\n---TASK---\n\n');
    }
    $('task-count').textContent=state.tasks.length+' 个';
    if (warnEl && state.tasks.length === 1) warnEl.textContent = '当前只载入 1 个任务。';
    const c=state.tasks[state.index]||'';
    $('task-preview').innerHTML='<strong>当前 R'+((state.index||0)+1)+':</strong> <span>'+esc(c).substring(0,120)+(c.length>120?'...':'')+'</span>';
  }else{$('task-editor').value='';$('task-count').textContent='0 个';$('task-preview').innerHTML='';}
}

// Controls
function renderControls(){
  const total = state.tasks?.length || 0;
  const current = total > 0 ? Math.min((state.index || 0) + 1, total) : 0;
  $('round-indicator').textContent='R'+current+'/'+total;
  const r=state.running,ad=state.tasks&&state.index>=state.tasks.length,nt=!state.activeTabId,no=!state.tasks||!state.tasks.length;
  $('btn-send-current').disabled=r||ad||nt||no;
  $('btn-auto-run').disabled=r||ad||nt||no;
  $('btn-trial-2').disabled=r||ad||nt||no;
  $('btn-stop').disabled=!r;
  $('btn-force-retry').disabled=ad||nt||no;
  $('btn-force-complete').disabled=ad||no;
  $('btn-prev').disabled=state.index<=0;
  $('btn-next').disabled=state.index>=(state.tasks?.length||1)-1;
  const sm={idle:'就绪',sending:'发送中...',auto_running:'自动续跑...',trial_running:'试跑中...',ready_next:'就绪',all_done:'✅ 完成',stopped:'⏹ 停止',manual_pause:'⏸ 暂停',carry_packet_due:'🏮 承载包待生成',force_retry:'↻ 重试中',imported:'📥 已导入',reset:'↺ 已重置'};
  $('status-line').textContent=sm[state.lastStatus]||state.lastStatus;
  $('status-line').className='status-line '+(state.lastStatus==='auto_running'||state.lastStatus==='trial_running'?'running':state.lastStatus==='all_done'?'done':state.lastStatus==='manual_pause'?'paused':'');
  $('btn-pause').style.display=state.manualPause?'none':'';
  $('btn-resume').style.display=state.manualPause?'':'none';
}

// Carry
function renderCarryStatus(){
  const ci=(state.index||0)+1,ic=isCarryRound(ci,state.total||state.tasks?.length||0);
  $('carry-status').innerHTML=ic?'<span class="carry-badge">🏮 承载轮 R'+ci+'</span>':'<span class="carry-badge carry-normal">R'+ci+' 普通轮</span>';
  const p=state.carryPackets||[];
  $('carry-preview').innerHTML=p.length?'<div class="carry-summary"><strong>上一组:</strong> '+p[p.length-1].range+'</div>':'';
}
function renderCarryPackets(){
  const p=state.carryPackets||[];$('carry-count').textContent=p.length;
  if(!p.length){$('carry-list').innerHTML='<div class="log-empty">暂无</div>';return;}
  $('carry-list').innerHTML=p.map(x=>'<div class="carry-item" data-range="'+x.range+'"><span class="carry-range">'+x.range+'</span><span class="carry-path">→ '+x.suggestedPath+'</span></div>').join('');
  $('carry-list').querySelectorAll('.carry-item').forEach(el=>{el.addEventListener('click',()=>{const pk=p.find(x=>x.range===el.dataset.range);if(pk?.markdown){copyToClipboard(pk.markdown);showFeedback('已复制 '+pk.range);}});});
}
async function doGenerateCarry(){
  if(!state.tasks||!state.tasks.length){showFeedback('无任务',true);return;}
  const pn=state.projectName||prompt('项目名:','未命名')||'未命名';
  const fn=state.frameName||prompt('框名:','默认')||'默认';
  const md=buildCarryPacketMarkdown(state,{projectName:pn,frameName:fn});
  const r=await bg({type:'SP_ADD_CARRY_PACKET',markdown:md,project:pn,frame:fn});
  if(r.ok){await loadAndRender();showFeedback('CarryPacket: '+r.packet.range);copyToClipboard(md);}
}
async function doCopyLatestCarry(){const p=state.carryPackets||[];if(!p.length){showFeedback('无',true);return;}copyToClipboard(p[p.length-1].markdown||'');showFeedback('已复制');}
async function doDownloadLatestCarry(){const p=state.carryPackets||[];if(!p.length){showFeedback('无',true);return;}downloadCarryPacket(p[p.length-1].markdown||'',p[p.length-1].range);}

// Logs
function renderLogs(){
  const l=state.logs||[];
  if(!l.length){$('log-area').innerHTML='<div class="log-empty">等待操作...</div>';return;}
  $('log-area').innerHTML=l.slice(-50).map(x=>'<div class="log-entry '+x.level+'"><span class="log-ts">'+(x.ts||'').slice(11,19)+'</span>'+esc(x.message)+(x.detail?' — '+esc(x.detail):'')+'</div>').join('');
  $('log-area').scrollTop=$('log-area').scrollHeight;
}
async function doCopyLogs(){const t=(state.logs||[]).map(l=>'['+(l.ts||'')+'] ['+l.level+'] '+l.message+(l.detail?' - '+l.detail:'')).join('\n');copyToClipboard(t);showFeedback('已复制');}
async function doClearLogs(){if(!confirm('清空日志?'))return;await bg({type:'SP_CLEAR_LOGS'});await loadAndRender();}

// Export
async function doExportState(){downloadState(state);showFeedback('已导出');}
async function doExportLogs(){downloadLogs(state);showFeedback('已导出');}
async function doExportAllCarry(){downloadAllCarryPackets(state);showFeedback('已导出');}
async function doImportState(){$('file-state-input').click();}
async function doBackupReset(){
  if(!confirm('先备份再重置，确认?'))return;
  const r=await bg({type:'SP_BACKUP_RESET'});
  if(r.ok&&r.backupState){downloadFile(r.backupState,'ty-f12-backup-'+ts()+'.json','application/json');showFeedback('已备份并重置');await loadAndRender();}
}

// Obsidian / GitHub
async function doObsidianUri(){
  const pn=state.projectName||'未命名',fn=state.frameName||'默认',vt=prompt('Vault:','ten-yuan-vault')||'ten-yuan-vault';
  const uri=buildObsidianNewUri({vault:vt,file:buildObsidianSuggestedPath(pn,fn,'R001-R005')});
  copyToClipboard(uri);showFeedback('URI 已复制');
}
async function doObsidianDownload(){
  const pn=state.projectName||'未命名',fn=state.frameName||'默认';
  const md=buildCarryPacketMarkdown(state,{projectName:pn,frameName:fn});
  downloadObsidianMarkdown(md,(buildObsidianSuggestedPath(pn,fn,'R001-R005')).split('/').pop()||'carry.md');
  showFeedback('已下载');
}
async function doGithubPath(){
  const p=buildGithubSuggestedPath(state.projectName||'未命名',state.frameName||'默认','R001-R005');
  copyToClipboard(p);showFeedback('已复制: '+p);
}
async function doCodexOrder(){
  const pk=state.carryPackets||[],rp=prompt('Repo (owner/repo):','')||'owner/repo';
  copyToClipboard(buildCodexWorkOrder({state,packets:pk,repo:rp}));showFeedback('工单已复制');
}
async function doCodexBatch(){
  const pk=state.carryPackets||[];if(!pk.length){showFeedback('无',true);return;}
  const rp=prompt('Repo:','')||'owner/repo';
  const items=pk.map(p=>({path:buildGithubSuggestedPath(state.projectName||'未命名',state.frameName||'默认',p.range),range:p.range}));
  copyToClipboard(buildBatchWritePrompt({repo:rp,items}));showFeedback('批量工单已复制');
}
async function doManifestHead(){copyToClipboard(buildManifestPatch(state,state.carryPackets||[]));showFeedback('HEAD manifest 已复制');}
async function doGithubHandoffDownload(){
  const pk=state.carryPackets||[],rp=prompt('Repo:','')||'unknown/repo';
  downloadFile(buildGithubHandoffMarkdown(state,pk,rp),'ty-f12-handoff-'+ts()+'.md','text/markdown');showFeedback('已下载');
}

// Debug
async function doDebugReport(){copyToClipboard(buildDebugReportMarkdown(state,health,'?','manual'));showFeedback('Report 已复制');}
async function doDebugDownload(){downloadDebugReport(buildDebugReportMarkdown(state,health,'?','manual'));showFeedback('已下载');}

// Control actions
async function doSendCurrent(){const r=await bg({type:'SP_SEND_CURRENT'});r.ok?showFeedback('已发送'):showFeedback('失败: '+(r.error||''),true);await loadAndRender();}
async function doAutoRun(){const r=await bg({type:'SP_AUTO_RUN'});r.ok?showFeedback('自动续跑已启动'):showFeedback('失败: '+(r.error||''),true);await loadAndRender();}
async function doTrial2(){const r=await bg({type:'SP_TRIAL_2'});r.ok?showFeedback('试跑已启动'):showFeedback('失败: '+(r.error||''),true);await loadAndRender();}
async function doPause(){await bg({type:'SP_PAUSE'});await loadAndRender();showFeedback('已暂停');}
async function doResume(){await bg({type:'SP_RESUME'});await loadAndRender();showFeedback('已继续');}
async function doStop(){await bg({type:'SP_STOP'});await loadAndRender();showFeedback('已停止');}
async function doForceComplete(){if(!confirm('跳过本轮?'))return;await bg({type:'SP_FORCE_COMPLETE'});await loadAndRender();}
async function doForceRetry(){const r=await bg({type:'SP_FORCE_RETRY'});r.ok?showFeedback('已重试'):showFeedback('失败: '+(r.error||''),true);await loadAndRender();}
async function doPrev(){await bg({type:'SP_PREV_ROUND'});await loadAndRender();}
async function doNext(){await bg({type:'SP_NEXT_ROUND'});await loadAndRender();}
async function doReset(){if(!confirm('重置到 R1?'))return;await bg({type:'SP_RESET_INDEX'});await loadAndRender();}

// Tasks
let tasksJustLoaded = false;
async function doLoadTasks(){
  const raw=$('task-editor').value;
  const parsed=parseTasks(raw);
  const tasks=parsed.tasks;
  if(!tasks.length){showFeedback('请先输入任务',true);return;}
  await bg({type:'SP_LOAD_TASKS',tasks});
  tasksJustLoaded = true;
  // 刷新 state 但不覆盖 textarea（标记刚加载）
  const resp = await bg({type:'GET_STATE'});
  if(resp.ok){state=resp.state;renderAllSkipEditor();}
  const warnEl = $('task-warning');
  const wantsMulti = detectRoundIntent(raw);
  if (warnEl) warnEl.textContent = parsed.warnings.join(' ');
  if (tasks.length === 1 && wantsMulti) showFeedback('检测到你可能想跑多轮，但当前只解析出 1 个任务。请用 ---TASK--- 分隔或生成自定义轮次。', true);
  else showFeedback('已载入 '+tasks.length+' 个，共 '+(state.tasks?state.tasks.length:'?')+' 轮');
}
function renderAllSkipEditor(){
  if(!state)return;
  renderConnStatus();renderStatusDetail();renderHealthBrief();
  renderPagePool();renderControls();renderCarryStatus();renderCarryPackets();renderLogs();
  // 更新计数和预览，但不碰 textarea
  if(state.tasks&&state.tasks.length){
    $('task-count').textContent=state.tasks.length+' 个';
    const c=state.tasks[state.index]||'';
    $('task-preview').innerHTML='<strong>当前 R'+((state.index||0)+1)+':</strong> <span>'+esc(c).substring(0,120)+(c.length>120?'...':'')+'</span>';
  }
}

function getSelectedMultiTabId() {
  return state?.multiTabs?.selectedTabId || (state?.activeTabId ? String(state.activeTabId) : null);
}

function renderPagePool() {
  const mt = state.multiTabs || {tabs:{}};
  const tabs = Object.values(mt.tabs || {}).sort((a,b)=>(b.lastHeartbeat||0)-(a.lastHeartbeat||0));
  const selected = getSelectedMultiTabId();
  const now = Date.now();
  $('page-pool-count').textContent = tabs.length + ' 页';
  if (!tabs.length) {
    $('page-pool-list').innerHTML = '<div class="log-empty">等待页面注册...</div>';
    return;
  }
  $('page-pool-list').innerHTML = tabs.map(tab => {
    const online = now - (tab.lastHeartbeat || 0) < 30000;
    const status = online ? (tab.status || 'online') : 'offline';
    const isSelected = String(tab.tabId) === String(selected);
    return '<div class="page-row '+(isSelected?'selected':'')+'" data-tab-id="'+esc(String(tab.tabId))+'">'
      + '<div class="page-title">'+esc(tab.title || tab.url || ('Tab '+tab.tabId))+'</div>'
      + '<div class="page-meta">'
      + '<span>#'+esc(String(tab.tabId))+'</span>'
      + '<span class="page-status '+esc(status)+'">'+esc(status)+'</span>'
      + '<span>'+esc(tab.role || 'executor')+'</span>'
      + '<span>R'+esc(String(tab.currentRound || tab.round || 0))+'/'+esc(String(tab.total || 0))+'</span>'
      + '<span>'+Math.max(0, Math.round((now-(tab.lastHeartbeat||0))/1000))+'s</span>'
      + '</div></div>';
  }).join('');
  $('page-pool-list').querySelectorAll('.page-row').forEach(row => {
    row.addEventListener('click', async () => {
      await bg({type:'SP_MULTI_SET_TARGET', tabId: row.dataset.tabId});
      await loadAndRender();
    });
  });
}
async function doImportTasksFile(){$('file-tasks-input').click();}
async function doExportTasks(){
  if(!state.tasks||!state.tasks.length){showFeedback('无',true);return;}
  downloadFile(state.tasks.join('\n\n---TASK---\n\n'),'ty-f12-tasks-'+ts()+'.txt','text/plain');showFeedback('已导出');
}
async function doDefault10(){const p=state.projectName||prompt('项目:','默认项目')||'默认项目';const t=genTasks(10,p,'默认框');await bg({type:'SP_LOAD_TASKS',tasks:t});tasksJustLoaded=true;await bg({type:'SP_SET_PROJECT',projectName:p,frameName:'默认框'});await loadAndRender();}
async function doDefault12(){const p=state.projectName||prompt('项目:','默认项目')||'默认项目';const t=genTasks(12,p,'默认框');await bg({type:'SP_LOAD_TASKS',tasks:t});tasksJustLoaded=true;await bg({type:'SP_SET_PROJECT',projectName:p,frameName:'默认框'});await loadAndRender();}
async function doDefault30(){const p=state.projectName||prompt('项目:','默认项目')||'默认项目';const t=genTasks(30,p,'默认框');await bg({type:'SP_LOAD_TASKS',tasks:t});tasksJustLoaded=true;await bg({type:'SP_SET_PROJECT',projectName:p,frameName:'默认框'});await loadAndRender();}
async function doDefault100(){const p=state.projectName||prompt('项目:','默认项目')||'默认项目';const t=genTasks(100,p,'默认框');await bg({type:'SP_LOAD_TASKS',tasks:t});tasksJustLoaded=true;await bg({type:'SP_SET_PROJECT',projectName:p,frameName:'默认框'});await loadAndRender();}
async function doCustomRounds(){const p=state.projectName||prompt('项目:','默认项目')||'默认项目';const n=Math.max(1,Number($('custom-round-count')?.value||12));const t=generateDefaultTasks({total:n,projectName:p,frameName:state.frameName||'默认框'});await bg({type:'SP_LOAD_TASKS',tasks:t});tasksJustLoaded=true;await bg({type:'SP_SET_PROJECT',projectName:p,frameName:state.frameName||'默认框'});await loadAndRender();showFeedback('已生成自定义轮次 '+n+' 个');}
async function doTestPackage(){const p=state.projectName||'测试项目';const t=genTasks(5,p,'测试框');await bg({type:'SP_LOAD_TASKS',tasks:t});tasksJustLoaded=true;await bg({type:'SP_SET_PROJECT',projectName:p,frameName:'测试框'});await loadAndRender();showFeedback('5轮测试包已生成');}

// Tab / Worker
async function doBindCurrent(){
  const r=await bg({type:'SP_SET_ACTIVE_TAB'});
  if(r.ok){await loadAndRender();showFeedback('已绑定 #'+r.activeTabId);setTimeout(()=>doHealthCheck(),800);}
  else showFeedback('绑定失败: '+(r.error||''),true);
}
async function doInjectWorker(){
  if(!state||!state.activeTabId){showFeedback('请先绑定标签页',true);return;}
  showFeedback('正在注入...');
  const r=await bg({type:'SP_INJECT_WORKER'});
  if(r.ok&&r.connected){workerConnected=true;workerChecked=true;showFeedback(r.injected?'已注入并连接':'已连接');setTimeout(()=>doHealthCheck(),500);}
  else{workerConnected=false;workerChecked=true;showFeedback('注入失败: '+(r.error||'未知'),true);}
  await loadAndRender();
}
async function doSetProject(){
  const p=prompt('项目名:',state.projectName||'')||state.projectName||'';
  const f=prompt('框名:',state.frameName||'')||state.frameName||'';
  await bg({type:'SP_SET_PROJECT',projectName:p,frameName:f});await loadAndRender();
}

async function doRefreshPages(){await loadAndRender();showFeedback('页面池已刷新');}
async function doBindSelected(){
  const tabId=getSelectedMultiTabId();
  if(!tabId){showFeedback('没有选中页面',true);return;}
  const r=await bg({type:'SP_MULTI_SET_TARGET',tabId});
  r.ok?showFeedback('已绑定选中页 #'+tabId):showFeedback('绑定失败: '+(r.error||''),true);
  await loadAndRender();
}
async function doSetSelectedRole(role){
  const tabId=getSelectedMultiTabId();
  if(!tabId){showFeedback('没有选中页面',true);return;}
  const r=await bg({type:'SP_MULTI_SET_ROLE',tabId,role});
  r.ok?showFeedback('角色已设置: '+role):showFeedback('设置失败: '+(r.error||''),true);
  await loadAndRender();
}
async function loadSelectedAgentTasks(tabId, tasks, index=0){
  return await bg({type:'SP_MULTI_COMMAND',tabId,command:'LOAD_TASK',tasks,index});
}
async function doSendSelected(){
  const tabId=getSelectedMultiTabId();
  if(!tabId){showFeedback('没有选中页面',true);return;}
  const task=(state.tasks||[])[state.index||0];
  if(!task){showFeedback('当前没有任务',true);return;}
  await loadSelectedAgentTasks(tabId,[task],0);
  const r=await bg({type:'SP_MULTI_COMMAND',tabId,command:'SEND_CURRENT'});
  r.ok?showFeedback('已发送到选中页 #'+tabId):showFeedback('发送失败: '+(r.error||''),true);
  await loadAndRender();
}
async function doAutoSelected(){
  const tabId=getSelectedMultiTabId();
  if(!tabId){showFeedback('没有选中页面',true);return;}
  const tasks=(state.tasks||[]).slice(state.index||0);
  if(!tasks.length){showFeedback('没有可发送任务',true);return;}
  await loadSelectedAgentTasks(tabId,tasks,0);
  const r=await bg({type:'SP_MULTI_COMMAND',tabId,command:'AUTO_RUN'});
  r.ok?showFeedback('选中页自动跑已启动'):showFeedback('启动失败: '+(r.error||''),true);
  await loadAndRender();
}
async function doPauseSelected(){
  const tabId=getSelectedMultiTabId();
  if(!tabId){showFeedback('没有选中页面',true);return;}
  const r=await bg({type:'SP_MULTI_COMMAND',tabId,command:'PAUSE'});
  r.ok?showFeedback('已暂停选中页'):showFeedback('暂停失败: '+(r.error||''),true);
  await loadAndRender();
}
async function doStopSelected(){
  const tabId=getSelectedMultiTabId();
  if(!tabId){showFeedback('没有选中页面',true);return;}
  const r=await bg({type:'SP_MULTI_COMMAND',tabId,command:'STOP'});
  r.ok?showFeedback('已停止选中页'):showFeedback('停止失败: '+(r.error||''),true);
  await loadAndRender();
}
async function doSendAllIdle(){
  const task=(state.tasks||[])[state.index||0];
  if(!task){showFeedback('当前没有任务',true);return;}
  const r=await bg({type:'SP_MULTI_ALL_IDLE',command:'LOAD_TASK',tasks:[task]});
  if(!r.ok){showFeedback('载入失败: '+(r.error||''),true);return;}
  const r2=await bg({type:'SP_MULTI_ALL_IDLE',command:'SEND_CURRENT'});
  r2.ok?showFeedback('已发送到所有空闲页'):showFeedback('发送失败: '+(r2.error||''),true);
  await loadAndRender();
}

// File handlers
$('file-state-input').addEventListener('change',async e=>{
  const f=e.target.files[0];if(!f)return;
  try{const d=await importStateJson(f);await bg({type:'SP_IMPORT_STATE',state:d});showFeedback('已导入');await loadAndRender();}
  catch(err){showFeedback('导入失败: '+err.message,true);}
  e.target.value='';
});
$('file-tasks-input').addEventListener('change',async e=>{
  const f=e.target.files[0];if(!f)return;
  const rdr=new FileReader();
  rdr.onload=async ev=>{
    const parsed=parseTasks(ev.target.result);
    const tasks=parsed.tasks;
    $('task-editor').value=ev.target.result;
    if(tasks.length){await bg({type:'SP_LOAD_TASKS',tasks});await loadAndRender();showFeedback('已导入 '+tasks.length+' 个');}
  };
  rdr.readAsText(f);e.target.value='';
});

// Utils
function ts(){return new Date().toISOString().replace(/[:.]/g,'-').slice(0,19);}
function esc(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function showFeedback(msg,isErr){$('export-feedback').textContent=msg;$('export-feedback').style.color=isErr?'#ff4444':'#4caf50';setTimeout(()=>{$('export-feedback').textContent='';},4000);}

// ======== Bindings ========
$('btn-bind-current').addEventListener('click',doBindCurrent);
$('btn-inject-worker').addEventListener('click',doInjectWorker);
$('btn-set-project').addEventListener('click',doSetProject);
$('btn-health-check').addEventListener('click',doHealthCheck);
$('btn-refresh-pages').addEventListener('click',doRefreshPages);
$('btn-bind-selected').addEventListener('click',doBindSelected);
$('btn-role-control').addEventListener('click',()=>doSetSelectedRole('controller'));
$('btn-role-executor').addEventListener('click',()=>doSetSelectedRole('executor'));
$('btn-send-selected').addEventListener('click',doSendSelected);
$('btn-auto-selected').addEventListener('click',doAutoSelected);
$('btn-pause-selected').addEventListener('click',doPauseSelected);
$('btn-stop-selected').addEventListener('click',doStopSelected);
$('btn-send-all-idle').addEventListener('click',doSendAllIdle);
$('btn-send-current').addEventListener('click',doSendCurrent);
$('btn-auto-run').addEventListener('click',doAutoRun);
$('btn-trial-2').addEventListener('click',doTrial2);
$('btn-pause').addEventListener('click',doPause);
$('btn-resume').addEventListener('click',doResume);
$('btn-stop').addEventListener('click',doStop);
$('btn-prev').addEventListener('click',doPrev);
$('btn-next').addEventListener('click',doNext);
$('btn-reset').addEventListener('click',doReset);
$('btn-force-complete').addEventListener('click',doForceComplete);
$('btn-force-retry').addEventListener('click',doForceRetry);
$('btn-load-tasks').addEventListener('click',doLoadTasks);
$('btn-import-tasks-file').addEventListener('click',doImportTasksFile);
$('btn-export-tasks').addEventListener('click',doExportTasks);
$('btn-default-10').addEventListener('click',doDefault10);
$('btn-default-12').addEventListener('click',doDefault12);
$('btn-default-30').addEventListener('click',doDefault30);
$('btn-default-100').addEventListener('click',doDefault100);
$('btn-custom-rounds').addEventListener('click',doCustomRounds);
$('btn-test-package').addEventListener('click',doTestPackage);
$('btn-generate-carry').addEventListener('click',doGenerateCarry);
$('btn-copy-carry').addEventListener('click',doCopyLatestCarry);
$('btn-download-carry').addEventListener('click',doDownloadLatestCarry);
$('btn-export-state').addEventListener('click',doExportState);
$('btn-import-state').addEventListener('click',doImportState);
$('btn-backup-reset').addEventListener('click',doBackupReset);
$('btn-export-logs').addEventListener('click',doExportLogs);
$('btn-export-all-carry').addEventListener('click',doExportAllCarry);
$('btn-debug-report').addEventListener('click',doDebugReport);
$('btn-debug-download').addEventListener('click',doDebugDownload);
$('btn-obsidian-uri').addEventListener('click',doObsidianUri);
$('btn-obsidian-download').addEventListener('click',doObsidianDownload);
$('btn-github-path').addEventListener('click',doGithubPath);
$('btn-codex-order').addEventListener('click',doCodexOrder);
$('btn-codex-batch').addEventListener('click',doCodexBatch);
$('btn-manifest-head').addEventListener('click',doManifestHead);
$('btn-github-handoff-dl').addEventListener('click',doGithubHandoffDownload);
$('btn-copy-logs').addEventListener('click',doCopyLogs);
$('btn-clear-logs').addEventListener('click',doClearLogs);

// ======== Poll ========
setInterval(async()=>{await checkWorker();await loadAndRender();},2000);

// ======== Init ========
loadAndRender();
setTimeout(()=>doHealthCheck(),500);
console.log('[F12 Sidepanel v1.0] Loaded (multi-page inline mode)');



