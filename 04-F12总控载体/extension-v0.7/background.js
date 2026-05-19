// background.js — F12 调度员 v0.9 (内联版，Edge 兼容)
// 负责：activeTabId 管理、租约锁、消息路由、状态同步

const SCHEMA_VERSION = '1.0.0';
const STATE_KEY = 'TY_F12_STATE_V09';

function getDefaultState() {
  return {
    schemaVersion: SCHEMA_VERSION,
    controllerSessionId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random()*16|0; return (c==='x'?r:(r&0x3|0x8)).toString(16); }),
    activeTabId: null, activeUrl: '', activeTitle: '',
    running: false, stopped: true, manualPause: false, leaseUntil: 0,
    lastStatus: 'idle', tasks: [], index: 0, total: 0,
    logs: [], carryPackets: [], errors: [],
    multiTabs: { selectedTabId: null, tabs: {} },
    projectName: '', frameName: '',
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  };
}

async function loadState() {
  const result = await chrome.storage.local.get(STATE_KEY);
    if (result[STATE_KEY]) {
    const s = result[STATE_KEY];
    if (!s.schemaVersion) { s.schemaVersion = SCHEMA_VERSION; s.stopped = s.stopped !== false; s.manualPause = s.manualPause || false; s.total = s.total || (s.tasks? s.tasks.length : 0); s.activeTitle = s.activeTitle || ''; s.errors = s.errors || []; s.projectName = s.projectName || ''; s.frameName = s.frameName || ''; await chrome.storage.local.set({[STATE_KEY]: s}); }
    ensureMultiTabs(s);
      if (s.schemaVersion !== SCHEMA_VERSION) {
        s.schemaVersion = SCHEMA_VERSION;
        await chrome.storage.local.set({[STATE_KEY]: s});
      }
    return s;
  }
  const fresh = getDefaultState();
  await chrome.storage.local.set({[STATE_KEY]: fresh});
  return fresh;
}

async function saveState(state) { state.updatedAt = new Date().toISOString(); state.schemaVersion = SCHEMA_VERSION; await chrome.storage.local.set({[STATE_KEY]: state}); }

function ensureMultiTabs(state) {
  if (!state.multiTabs) state.multiTabs = { selectedTabId: null, tabs: {} };
  if (!state.multiTabs.tabs) state.multiTabs.tabs = {};
  return state.multiTabs;
}

function upsertMultiTab(state, tabId, patch = {}) {
  const mt = ensureMultiTabs(state);
  const key = String(tabId);
  const prev = mt.tabs[key] || {};
  mt.tabs[key] = {
    tabId: key,
    role: prev.role || 'executor',
    project: prev.project || state.projectName || '',
    round: prev.round || 0,
    status: prev.status || 'online',
    lastMessage: prev.lastMessage || '',
    lastHeartbeat: prev.lastHeartbeat || 0,
    ...patch
  };
  if (!mt.selectedTabId) mt.selectedTabId = key;
  return mt.tabs[key];
}

function activeMultiTabs(state) {
  const mt = ensureMultiTabs(state);
  const now = Date.now();
  return Object.values(mt.tabs).filter(tab => now - (tab.lastHeartbeat || 0) < 30000);
}

function addLog(state, level, message, detail) {
  if (!state.logs) state.logs = [];
  state.logs.push({ts:new Date().toISOString(), level, message, detail});
  if (state.logs.length > 200) state.logs = state.logs.slice(-200);
  console.log('[F12-BG '+level+']', message, detail||'');
}

function addError(state, message, detail) {
  if (!state.errors) state.errors = [];
  state.errors.push({ts:new Date().toISOString(), message, detail, index: state.index});
  if (state.errors.length > 50) state.errors = state.errors.slice(-50);
  addLog(state, 'ERROR', message, detail);
}


// ======== Worker connection tracking ========
let workerRegistry = {};

async function pingWorker(tabId) {
  try {
    const pingResult = await chrome.tabs.sendMessage(tabId, { type: 'PING' });
    if (pingResult && pingResult.ok) {
      workerRegistry[tabId] = { connected: true, ts: Date.now(), capabilities: pingResult.capabilities };
      return { connected: true, existing: false, injected: false };
    }
    return { connected: false, error: 'Ping returned invalid response' };
  } catch (e) {
    workerRegistry[tabId] = { connected: false, ts: Date.now(), error: e.message };
    return { connected: false, error: e.message };
  }
}

async function ensureWorker(tabId) {
  if (!tabId) return { connected: false, error: 'No tabId' };

  const firstPing = await pingWorker(tabId);
  if (firstPing.connected) return { connected: true, existing: !!workerRegistry[tabId], injected: false };

  // Try injecting content.js
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    });
    await new Promise(r => setTimeout(r, 500));
    const secondPing = await pingWorker(tabId);
    if (secondPing.connected) return { connected: true, existing: false, injected: true };
    return { connected: false, status: 'worker_missing', error: secondPing.error || 'Worker not responding after injection' };
  } catch (e) {
    return { connected: false, status: 'worker_missing', error: 'Inject failed: ' + e.message };
  }
}

function acquireLeaseOrFail(state, ttlMs = 3 * 60 * 1000) {
  const now = Date.now();
  if (state.leaseUntil && state.leaseUntil > now) {
    return { ok: false, error: 'Lease locked' };
  }
  state.leaseUntil = now + ttlMs;
  return { ok: true };
}

function releaseLease(state) {
  state.leaseUntil = 0;
}

function workerMissing(state, addErrorFn, detail) {
  state.running = false;
  state.lastStatus = 'manual_pause';
  state.manualPause = true;
  releaseLease(state);
  addErrorFn(state, '工蜂未连接，请刷新页面或手动注入工蜂', detail || 'worker_missing');
  return { ok: false, status: 'worker_missing', error: '工蜂未连接，请刷新页面或手动注入工蜂' };
}

// ======== Message router helpers ========

async function execOnWorker(tabId, task, index, total) {
  const worker = await ensureWorker(tabId);
  if (!worker.connected) return { ok: false, status: 'worker_missing', error: worker.error || 'worker_missing' };
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Worker timeout')), 3*60*1000);
    chrome.tabs.sendMessage(tabId, {type:'EXECUTE_TASK',task,index,total})
      .then(r => { clearTimeout(timer); resolve(r); })
      .catch(e => { clearTimeout(timer); reject(e); });
  });
}

async function getPageStatus(tabId) {
  try { return await chrome.tabs.sendMessage(tabId, {type:'GET_PAGE_STATUS'}); }
  catch(e) { return {ok:false, error:e.message}; }
}

// ======== Task templates ========

function generateTasks(count, project, frame) {
  const tasks = [];
  for (let i=1; i<=count; i++) {
    let t = '继续执行【'+project+'】R'+i+'/'+count;
    if (frame) t += '｜'+frame;
    if (i%5===0||i===count) {
      if (i%5===0) t += '\n\n' + carryPktInst(i);
      if (i===count) t += '\n\n' + finalArchInst();
    } else { t += '\n\n' + carryCacheInst(i); }
    t += '\n\n最后必须输出：TASK_DONE_R'+i;
    tasks.push(t);
  }
  return tasks;
}
function carryCacheInst(r) { return '【承载数据缓存】\n请在断点包里额外输出：\n- 本轮可进入五轮承载包的稳定结论：\n- 本轮新增但未钉死的灰矿：\n- 本轮下次必须继承的信息：'; }
function carryPktInst(r) { return '【五轮记忆承载要求】\n本轮是 R'+r+'，必须生成 R'+(Math.max(1,r-4))+'-R'+r+' 的记忆承载包。\n\n请输出：\n1. 五轮完成表\n2. 稳定结论\n3. 新增结构 / 新增子型\n4. 待验证灰矿\n5. 污染风险\n6. 下一组必须携带的上下文\n7. 下一组起手指令\n8. 建议写入的 Obsidian / GitHub 文件路径\n\n最后输出：CARRY_PACKET_R'+(Math.max(1,r-4))+'_R'+r+'_DONE'; }
function finalArchInst() { return '【最终总归档要求】\n请整合所有 CarryPacket，生成：\n1. 全轮次索引\n2. 总稳定结论\n3. 总结构表\n4. 子型总表\n5. 高银 / 金矿候选\n6. 灰矿 / 风险 / 反例\n7. 可交给中枢框的压缩版\n8. 下一阶段建议\n最后输出：FINAL_ARCHIVE_DONE'; }

// ======== Export helpers ========

function exportStateJson(state) {
  return JSON.stringify({version:'v0.9',schemaVersion:state.schemaVersion,exportedAt:new Date().toISOString(),
    projectName:state.projectName||'',frameName:state.frameName||'',
    activeTabId:state.activeTabId,activeUrl:state.activeUrl,activeTitle:state.activeTitle||'',
    running:state.running,stopped:state.stopped,manualPause:state.manualPause,lastStatus:state.lastStatus,
    tasks:state.tasks,index:state.index,total:state.total||(state.tasks?state.tasks.length:0),
    multiTabs:state.multiTabs||{tabs:{}},
    errors:state.errors||[],logs:state.logs,
    carryPackets:(state.carryPackets||[]).map(p=>({range:p.range,round_from:p.round_from,round_to:p.round_to,status:p.status,suggestedPath:p.suggestedPath,project:p.project,frame:p.frame,createdAt:p.createdAt}))
  },null,2);
}
function exportLogsJson(state) { return JSON.stringify({version:'v0.9',exportedAt:new Date().toISOString(),count:(state.logs||[]).length,logs:state.logs||[]},null,2); }
function exportAllCarryMd(state) { const p=state.carryPackets||[]; if(!p.length) return '# 无 CarryPacket'; return '# F12 全部 CarryPacket\n生成时间: '+new Date().toISOString()+'\n项目: '+(state.projectName||'未命名')+'\n数量: '+p.length+'\n\n'+p.map((x,i)=>'## '+(i+1)+'. '+x.range+'\n\n'+(x.markdown||'(无内容)')).join('\n\n---\n\n'); }

// ======== Auto-run ========

async function runAutoLoop(activeTabId, saveStateFn, addLogFn, addErrorFn, loadStateFn) {
  let s = await loadStateFn();
  while (s.running && s.index < s.tasks.length) {
    const task = s.tasks[s.index];
    addLogFn(s,'INFO','Auto: R'+(s.index+1)+'/'+s.tasks.length);
    const lease = acquireLeaseOrFail(s);
    if (!lease.ok) {
      s.running = false; s.lastStatus = 'manual_pause'; s.manualPause = true;
      addErrorFn(s, 'Auto: lease unavailable', lease.error);
      await saveStateFn(s); return {ok:false,error:lease.error};
    }
    try {
      const r = await execOnWorker(activeTabId, task, s.index, s.tasks.length);
      if (!r||!r.ok||r.status!=='done') throw new Error(r?.error||'task failed');
    } catch(e) {
      s.running = false; s.lastStatus = 'manual_pause'; s.manualPause = true;
      releaseLease(s);
      addErrorFn(s, 'Auto: '+e.message);
      await saveStateFn(s); return {ok:false,error:e.message};
    }
    s.index++;
    releaseLease(s);
    s.lastStatus = s.index >= s.tasks.length ? 'all_done' : 'ready_next';
    if ((s.index%5===0||s.index>=s.tasks.length)&&s.index>0) { s.lastStatus='carry_packet_due'; addLogFn(s,'SYNC','CarryPacket due at R'+s.index); }
    await saveStateFn(s);
    s = await loadStateFn();
    if (!s.running||s.manualPause) return {ok:true,paused:true};
  }
  if (s.index >= s.tasks.length) { s.running=false; s.lastStatus='all_done'; addLogFn(s,'SYNC','All done'); await saveStateFn(s); }
  return {ok:true};
}

async function runTrialLoop(activeTabId, count, saveStateFn, addLogFn, addErrorFn, loadStateFn) {
  let s = await loadStateFn(); let rn=0;
  while (s.running && s.index < s.tasks.length && rn < count) {
    const task = s.tasks[s.index];
    addLogFn(s,'INFO','Trial: R'+(s.index+1)+' ('+(rn+1)+'/'+count+')');
    const lease = acquireLeaseOrFail(s);
    if (!lease.ok) {
      s.running = false; s.lastStatus = 'manual_pause'; s.manualPause = true;
      addErrorFn(s,'Trial: lease unavailable',lease.error);
      await saveStateFn(s); return {ok:false,error:lease.error};
    }
    try {
      const r = await execOnWorker(activeTabId, task, s.index, s.tasks.length);
      if (!r||!r.ok||r.status!=='done') throw new Error(r?.error||'task failed');
    } catch(e) {
      s.running = false; s.lastStatus = 'manual_pause'; s.manualPause = true;
      releaseLease(s);
      addErrorFn(s,'Trial: '+e.message);
      await saveStateFn(s); return {ok:false,error:e.message};
    }
    s.index++; rn++; s.lastStatus='trial_running';
    releaseLease(s);
    await saveStateFn(s); s = await loadStateFn();
  }
  s.running = false;
  s.lastStatus = s.index >= s.tasks.length ? 'all_done' : 'ready_next';
  addLogFn(s,'INFO','Trial done: '+rn+' rounds');
  await saveStateFn(s);
  return {ok:true,rounds:rn};
}

// ======== Message handler ========

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  handleMsg(msg, sender).then(sendResponse).catch(e => sendResponse({ok:false,error:e.message}));
  return true;
});

async function handleMsg(msg, sender) {
  let s = await loadState();

  switch (msg.type) {

    case 'SP_SET_ACTIVE_TAB': {
      try {
        const tabs = await chrome.tabs.query({active:true,currentWindow:true});
        if (!tabs.length) return {ok:false,error:'No active tab'};
        const t = tabs[0];
        s.activeTabId=t.id; s.activeUrl=t.url||''; s.activeTitle=t.title||''; s.stopped=false;
        ensureMultiTabs(s).selectedTabId = String(t.id);
        upsertMultiTab(s, t.id, { url: t.url || '', title: t.title || '', status: 'bound', lastHeartbeat: Date.now() });
        addLog(s,'INFO','Active tab: '+t.id+' '+t.url);
        await saveState(s);
        try{await chrome.tabs.sendMessage(t.id,{type:'WORKER_ACTIVATE',tabId:t.id});}catch(e){}
        // Auto-ensure worker
        ensureWorker(t.id).then(r => console.log('[F12-BG] Worker ensure:', r.connected));
        return {ok:true,activeTabId:t.id,url:t.url,title:t.title};
      } catch(e) { return {ok:false,error:e.message}; }
    }

    case 'SP_INJECT_WORKER': {
      if (!s.activeTabId) return { ok: false, error: 'No active tab' };
      const result = await ensureWorker(s.activeTabId);
      addLog(s, 'INFO', 'Inject worker: ' + JSON.stringify(result));
      await saveState(s);
      return { ok: true, ...result };
    }

    case 'SP_MULTI_GET_TABS': {
      const mt = ensureMultiTabs(s);
      return { ok: true, selectedTabId: mt.selectedTabId, tabs: mt.tabs, online: activeMultiTabs(s) };
    }

    case 'SP_MULTI_SET_TARGET': {
      const mt = ensureMultiTabs(s);
      if (!msg.tabId || !mt.tabs[String(msg.tabId)]) return { ok: false, error: 'Unknown tabId' };
      mt.selectedTabId = String(msg.tabId);
      s.activeTabId = Number(msg.tabId);
      s.activeUrl = mt.tabs[String(msg.tabId)].url || '';
      s.activeTitle = mt.tabs[String(msg.tabId)].title || '';
      addLog(s, 'INFO', 'Selected multi tab: ' + msg.tabId);
      await saveState(s);
      return { ok: true, selectedTabId: mt.selectedTabId };
    }

    case 'SP_MULTI_SET_ROLE': {
      const tab = upsertMultiTab(s, msg.tabId, { role: msg.role || 'executor', lastHeartbeat: Date.now() });
      addLog(s, 'INFO', 'Tab role: ' + msg.tabId + ' -> ' + tab.role);
      await saveState(s);
      return { ok: true, tab };
    }

    case 'SP_MULTI_COMMAND': {
      const tabId = Number(msg.tabId || ensureMultiTabs(s).selectedTabId);
      if (!tabId) return { ok: false, error: 'No target tab' };
      const worker = await ensureWorker(tabId);
      if (!worker.connected) { const r = workerMissing(s, addError, worker.error); await saveState(s); return r; }
      const result = await chrome.tabs.sendMessage(tabId, {
        type: 'AGENT_COMMAND',
        command: msg.command,
        task: msg.task,
        tasks: msg.tasks,
        index: msg.index
      });
      upsertMultiTab(s, tabId, { status: result?.status || 'command_sent', lastMessage: msg.command, lastHeartbeat: Date.now() });
      addLog(s, 'INFO', 'Multi command ' + msg.command + ' -> #' + tabId, JSON.stringify(result || {}));
      await saveState(s);
      return { ok: true, result };
    }

    case 'SP_MULTI_ALL_IDLE': {
      const tabs = activeMultiTabs(s).filter(tab => ['idle','online','bound','empty','command_sent'].includes(tab.status));
      const results = [];
      for (const tab of tabs) {
        const tabId = Number(tab.tabId);
        const worker = await ensureWorker(tabId);
        if (!worker.connected) {
          results.push({ tabId, ok: false, error: worker.error });
          continue;
        }
        const result = await chrome.tabs.sendMessage(tabId, {
          type: 'AGENT_COMMAND',
          command: msg.command || 'SEND_CURRENT',
          task: msg.task,
          tasks: msg.tasks
        }).catch(e => ({ ok: false, error: e.message }));
        results.push({ tabId, result });
        upsertMultiTab(s, tabId, { status: result?.status || 'command_sent', lastMessage: msg.command || 'SEND_CURRENT', lastHeartbeat: Date.now() });
      }
      addLog(s, 'INFO', 'Multi all idle command: ' + (msg.command || 'SEND_CURRENT'), String(results.length));
      await saveState(s);
      return { ok: true, results };
    }

    case 'SP_SEND_CURRENT': {
      if (!s.tasks||!s.tasks.length) return {ok:false,error:'No tasks'};
      if (s.index>=s.tasks.length) return {ok:false,error:'All done'};
      if (!s.activeTabId) return {ok:false,error:'No active tab'};
      if (s.running) return {ok:false,error:'Already running'};
      const worker = await ensureWorker(s.activeTabId);
      if (!worker.connected) { const r = workerMissing(s, addError, worker.error); await saveState(s); return r; }
      const lease = acquireLeaseOrFail(s);
      if (!lease.ok) { s.lastStatus='manual_pause'; s.manualPause=true; addError(s,'Lease unavailable',lease.error); await saveState(s); return {ok:false,error:lease.error}; }

      s.running=true; s.lastStatus='sending';
      const task = s.tasks[s.index];
      addLog(s,'INFO','Send R'+(s.index+1)+'/'+s.tasks.length);
      await saveState(s);

      try {
        const r = await execOnWorker(s.activeTabId, task, s.index, s.tasks.length);
        if (r&&r.ok&&r.status==='done') {
          s.index++; s.running=false;
          s.lastStatus = s.index>=s.tasks.length?'all_done':'ready_next';
          if ((s.index%5===0||s.index>=s.tasks.length)&&s.index>0) s.lastStatus='carry_packet_due';
        } else {
          s.running=false; s.lastStatus='manual_pause'; s.manualPause=true;
          addError(s,'Send failed',r?.error||'unknown');
        }
        releaseLease(s);
        await saveState(s);
        return {ok:true,...r};
      } catch(e) {
        s.running=false; s.lastStatus='manual_pause'; s.manualPause=true;
        releaseLease(s);
        addError(s,'Worker lost',e.message);
        await saveState(s);
        return {ok:false,error:e.message};
      }
    }

    case 'SP_AUTO_RUN': {
      if (!s.tasks||!s.tasks.length) return {ok:false,error:'No tasks'};
      if (s.index>=s.tasks.length) return {ok:false,error:'All done'};
      if (!s.activeTabId) return {ok:false,error:'No active tab'};
      if (s.running) return {ok:false,error:'Already running'};
      const worker = await ensureWorker(s.activeTabId);
      if (!worker.connected) { const r = workerMissing(s, addError, worker.error); await saveState(s); return r; }
      s.running=true; s.manualPause=false; s.lastStatus='auto_running';
      addLog(s,'INFO','Auto-run from R'+(s.index+1));
      await saveState(s);
      runAutoLoop(s.activeTabId, saveState, addLog, addError, loadState).then(()=>{}).catch(()=>{});
      return {ok:true,started:true};
    }

    case 'SP_STOP':
      s.running=false; s.manualPause=false; s.lastStatus='stopped';
      addLog(s,'USER','Stopped'); await saveState(s);
      try{await chrome.tabs.sendMessage(s.activeTabId,{type:'WORKER_STOP'});}catch(e){}
      return {ok:true};

    case 'SP_PAUSE':
      s.running=false; s.manualPause=true; s.lastStatus='manual_pause';
      addLog(s,'USER','Paused at R'+(s.index+1)); await saveState(s);
      return {ok:true};

    case 'SP_RESUME':
      if (!s.tasks||!s.tasks.length) return {ok:false,error:'No tasks'};
      if (s.index>=s.tasks.length) return {ok:false,error:'All done'};
      if (!s.activeTabId) return {ok:false,error:'No active tab'};
      {
        const worker = await ensureWorker(s.activeTabId);
        if (!worker.connected) { const r = workerMissing(s, addError, worker.error); await saveState(s); return r; }
      }
      s.manualPause=false; s.running=true; s.lastStatus='auto_running';
      addLog(s,'USER','Resumed from R'+(s.index+1)); await saveState(s);
      runAutoLoop(s.activeTabId, saveState, addLog, addError, loadState).then(()=>{}).catch(()=>{});
      return {ok:true,resumed:true};

    case 'SP_TRIAL_2':
      if (!s.tasks||!s.tasks.length) return {ok:false,error:'No tasks'};
      if (s.index>=s.tasks.length) return {ok:false,error:'All done'};
      if (!s.activeTabId) return {ok:false,error:'No active tab'};
      if (s.running) return {ok:false,error:'Already running'};
      {
        const worker = await ensureWorker(s.activeTabId);
        if (!worker.connected) { const r = workerMissing(s, addError, worker.error); await saveState(s); return r; }
      }
      s.running=true; s.lastStatus='trial_running';
      addLog(s,'INFO','Trial 2 from R'+(s.index+1)); await saveState(s);
      runTrialLoop(s.activeTabId, 2, saveState, addLog, addError, loadState).then(()=>{}).catch(()=>{});
      return {ok:true,started:true};

    case 'SP_FORCE_COMPLETE':
      if (!s.tasks||s.index>=s.tasks.length) return {ok:false,error:'All done'};
      s.index++; s.lastStatus = s.index>=s.tasks.length?'all_done':'ready_next';
      addLog(s,'USER','Force complete R'+s.index); await saveState(s);
      return {ok:true,index:s.index};

    case 'SP_FORCE_RETRY': {
      if (!s.tasks||!s.tasks.length) return {ok:false,error:'No tasks'};
      if (s.index>=s.tasks.length) return {ok:false,error:'All done'};
      if (!s.activeTabId) return {ok:false,error:'No active tab'};
      const worker = await ensureWorker(s.activeTabId);
      if (!worker.connected) { const r = workerMissing(s, addError, worker.error); await saveState(s); return r; }
      addLog(s,'USER','Force retry R'+(s.index+1)); s.lastStatus='force_retry'; await saveState(s);
      try {
        const r = await execOnWorker(s.activeTabId, s.tasks[s.index], s.index, s.tasks.length);
        if (r&&r.ok&&r.status==='done') { s.index++; s.lastStatus = s.index>=s.tasks.length?'all_done':'ready_next'; }
        else { addError(s,'Retry failed',r?.error||'unknown'); }
        await saveState(s); return {ok:true,result:r};
      } catch(e) { addError(s,'Retry: worker lost',e.message); await saveState(s); return {ok:false,error:e.message}; }
    }

    case 'SP_PREV_ROUND': if (s.index>0) { s.index--; s.lastStatus='prev_round'; addLog(s,'INFO','Rewound to R'+(s.index+1)); await saveState(s); } return {ok:true,index:s.index};
    case 'SP_NEXT_ROUND': if (s.index<(s.tasks||[]).length-1) { s.index++; s.lastStatus='next_round'; addLog(s,'INFO','Advanced to R'+(s.index+1)); await saveState(s); } return {ok:true,index:s.index};
    case 'SP_RESET_INDEX': s.index=0; s.lastStatus='reset'; s.manualPause=false; s.stopped=true; addLog(s,'USER','Reset'); await saveState(s); return {ok:true,index:0};

    case 'SP_LOAD_TASKS': s.tasks=msg.tasks||[]; s.total=s.tasks.length; s.index=0; s.lastStatus='tasks_loaded'; addLog(s,'INFO','Loaded '+s.tasks.length+' tasks'); await saveState(s); return {ok:true,count:s.tasks.length};

    case 'SP_DEFAULT_TASKS': {
      const tasks = generateTasks(msg.count||10, msg.project||'默认项目', msg.frame||'默认框');
      s.tasks=tasks; s.total=tasks.length; s.index=0;
      s.projectName=msg.project||'默认项目'; s.frameName=msg.frame||'默认框';
      s.lastStatus='default_tasks_loaded'; addLog(s,'INFO','Generated '+tasks.length+' tasks'); await saveState(s);
      return {ok:true,count:tasks.length};
    }

    case 'SP_SET_PROJECT': s.projectName=msg.projectName||''; s.frameName=msg.frameName||''; addLog(s,'INFO','Project: '+s.projectName); await saveState(s); return {ok:true};

    case 'SP_ADD_CARRY_PACKET': {
      const start = Math.floor(s.index/5)*5+1; const end = s.index;
      const range = 'R'+String(start).padStart(3,'0')+'-'+String(end).padStart(3,'0');
      const path = '99-归档包/'+(msg.project||s.projectName||'未命名')+'/'+(msg.frame||s.frameName||'默认')+'/carry/'+range+'-记忆承载包.md';
      const packet = {range,round_from:start,round_to:end,status:'generated',markdown:msg.markdown,suggestedPath:path,project:msg.project||s.projectName,frame:msg.frame||s.frameName,createdAt:new Date().toISOString()};
      if (!s.carryPackets) s.carryPackets=[]; s.carryPackets.push(packet);
      addLog(s,'SYNC','CarryPacket: '+range); await saveState(s);
      return {ok:true,packet};
    }

    case 'SP_EXPORT_STATE': return {ok:true,json:exportStateJson(s)};
    case 'SP_EXPORT_LOGS': return {ok:true,json:exportLogsJson(s)};
    case 'SP_EXPORT_ALL_CARRY': return {ok:true,markdown:exportAllCarryMd(s)};

    case 'SP_IMPORT_STATE': {
      if (!msg.state) return {ok:false,error:'No state'};
      const backupKey = STATE_KEY+'_BACKUP_'+Date.now();
      const old = await loadState();
      await chrome.storage.local.set({[backupKey]:old});
      const imp = msg.state;
      imp.schemaVersion = SCHEMA_VERSION;
      imp.activeTabId = s.activeTabId; imp.activeUrl = s.activeUrl; imp.activeTitle = s.activeTitle;
      imp.lastStatus = 'imported'; imp.updatedAt = new Date().toISOString();
      await chrome.storage.local.set({[STATE_KEY]:imp});
      addLog(imp,'SYNC','Imported. Backup: '+backupKey);
      return {ok:true,backupKey};
    }

    case 'SP_BACKUP_RESET': {
      const old = await loadState();
      const backupKey = STATE_KEY+'_BACKUP_'+Date.now();
      await chrome.storage.local.set({[backupKey]:old});
      const fresh = getDefaultState();
      await chrome.storage.local.set({[STATE_KEY]:fresh});
      addLog(fresh,'SYNC','Backup: '+backupKey+', reset');
      return {ok:true,backupKey,backupState:exportStateJson(old)};
    }

    case 'SP_CLEAR_LOGS': s.logs=[]; addLog(s,'USER','Logs cleared'); await saveState(s); return {ok:true};
    case 'SP_RESET_ALL': await chrome.storage.local.set({[STATE_KEY]:getDefaultState()}); return {ok:true};

    case 'GET_STATE': return {ok:true,state:s};

    case 'SP_CHECK_WORKER': {
      const tabId = msg.tabId || s.activeTabId;
      if (!tabId) return { ok: false, connected: false, error: 'No tabId' };
      const ping = await pingWorker(tabId);
      return { ok: true, connected: !!ping.connected, error: ping.error };
    }

        case 'SP_HEALTH_CHECK':
      if (!s.activeTabId) return {ok:false,error:'No active tab'};
      return await getPageStatus(s.activeTabId);

    case 'SP_LEASE_STATUS': {
      const locked = s.leaseUntil && s.leaseUntil > Date.now();
      return {ok:true,lease:{locked,remaining:locked?Math.max(0,s.leaseUntil-Date.now()):0,activeTabId:locked?s.activeTabId:null}};
    }

    case 'SP_VERSION_INFO': return {ok:true,schemaVersion:SCHEMA_VERSION,extensionVersion:'1.0.0',backgroundMode:'inline-multitab',storageKey:STATE_KEY};

        case 'WORKER_READY': {
      const tabId = sender.tab ? sender.tab.id : s.activeTabId;
      workerRegistry[tabId] = {
        connected: true, ts: Date.now(),
        url: msg.url || '', title: msg.title || ''
      };
      upsertMultiTab(s, tabId, {
        agentTabId: msg.agentTabId || '',
        url: msg.url || '',
        title: msg.title || '',
        status: 'online',
        currentRound: msg.currentRound || 0,
        lastHeartbeat: Date.now()
      });
      addLog(s, 'INFO', 'Worker ready: ' + (msg.url || '?'));
      await saveState(s);
      return { ok: true, worker: 'connected' };
    }

    case 'WORKER_REPORT': addLog(s,'INFO','Worker '+(msg.tabId||'?')+': '+msg.event,msg.detail||''); await saveState(s); return {ok:true};

    case 'AGENT_REGISTER':
    case 'AGENT_HEARTBEAT': {
      const tabId = sender.tab ? sender.tab.id : s.activeTabId;
      const tab = upsertMultiTab(s, tabId, {
        agentTabId: msg.tabId || '',
        url: msg.url || '',
        title: msg.title || '',
        status: msg.status || 'online',
        currentRound: msg.currentRound || 0,
        total: msg.total || 0,
        lastHeartbeat: Date.now()
      });
      if (msg.type === 'AGENT_REGISTER') addLog(s, 'INFO', 'Agent registered #' + tabId, tab.url || '');
      await saveState(s);
      return { ok: true, tab };
    }

    case 'AGENT_RESULT': {
      const tabId = sender.tab ? sender.tab.id : s.activeTabId;
      upsertMultiTab(s, tabId, {
        status: msg.status || 'idle',
        currentRound: msg.currentRound || 0,
        total: msg.total || 0,
        lastMessage: (msg.lastMessage || msg.result?.text || '').slice(0, 500),
        lastHeartbeat: Date.now()
      });
      addLog(s, 'SYNC', 'Agent result #' + tabId, msg.result ? JSON.stringify(msg.result).slice(0, 200) : '');
      await saveState(s);
      return { ok: true };
    }

    case 'AGENT_ERROR': {
      const tabId = sender.tab ? sender.tab.id : s.activeTabId;
      upsertMultiTab(s, tabId, {
        status: 'error',
        lastMessage: msg.error || '',
        lastHeartbeat: Date.now()
      });
      addError(s, 'Agent error #' + tabId, msg.error || '');
      await saveState(s);
      return { ok: true };
    }

    default: return {ok:false,error:'Unknown: '+msg.type};
  }
}

console.log('F12 Background v1.0 multi-page worker started. Schema: '+SCHEMA_VERSION);






