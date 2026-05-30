// role-cruiser.js — F12角色库8h巡航 v1.0
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const VAULT = 'C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault';
const REPORT_DIR = path.join(VAULT, '07-Codex大脑库', '24h-worker', 'reports');
const TASK_DIR = path.join(VAULT, '04-F12总控载体', 'runtime', 'tasks');
const F12 = 'node C:\\Users\\19308\\.codex\\skills\\ten-yuan-f12-operator\\scripts\\f12.js';
const TOTAL_HOURS = 8;
const HEARTBEAT_MS = 5 * 60 * 1000;

fs.mkdirSync(REPORT_DIR, { recursive: true });

const startTime = Date.now();
const deadline = startTime + TOTAL_HOURS * 3600 * 1000;
let phase = 1;
let consecutiveErrors = 0;

function now() { return new Date().toISOString(); }
function stamp() { const d = new Date(); const p = n => String(n).padStart(2,'0'); return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}_${p(d.getHours())}-${p(d.getMinutes())}`; }
function elapsed() { return Math.round((Date.now() - startTime) / 60000); }
function elapsedStr() { const m = elapsed(); const h = Math.floor(m/60); return `${h}h${m%60}m`; }

function log(msg) {
  const ts = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  console.log(`[${ts}][P${phase}][${elapsedStr()}] ${msg}`);
}

function f12(cmd) {
  try {
    const r = execSync(`${F12} ${cmd}`, { encoding: 'utf8', timeout: 15000, stdio: ['pipe','pipe','pipe'] });
    return r;
  } catch(e) {
    return e.stdout || e.message;
  }
}

function writeHeartbeat(info) {
  const hb = {
    ts: now(), elapsed_min: elapsed(), phase, tab: info.tabId || '?',
    round: info.round || '?', status: info.status || '?',
    consecutive_errors: consecutiveErrors
  };
  const f = path.join(REPORT_DIR, `heartbeat_${stamp()}.json`);
  fs.writeFileSync(f, JSON.stringify(hb, null, 2));
}

function parseMultiStatus(output) {
  const lines = output.split('\n');
  for (const line of lines) {
    if (line.includes('online') || line.includes('idle') || line.includes('running') || line.includes('done')) {
      const m = line.match(/'\s*(\d+)\s*'.*?'\s*(\S+)\s*'.*?'\s*(\S+)\s*'.*?'R(\d+)\/(\d+)/);
      if (m) return { tabId: m[1], status: m[2], role: m[3], round: parseInt(m[4]), total: parseInt(m[5]) };
    }
  }
  return null;
}

async function main() {
  log('Role Cruiser v1.0 started. Deadline: 8h');
  
  while (Date.now() < deadline) {
    // Check F12 status
    log('Checking F12 status...');
    const status = f12('multi-status');
    const info = parseMultiStatus(status);
    
    if (!info) {
      consecutiveErrors++;
      log(`No online tab found (${consecutiveErrors}/3)`);
      if (consecutiveErrors >= 3) {
        log('3 consecutive errors - worker likely dead. Pausing.');
        break;
      }
      await sleep(HEARTBEAT_MS);
      continue;
    }
    
    consecutiveErrors = 0;
    writeHeartbeat(info);
    
    if (info.round >= info.total && info.status === 'idle') {
      log(`Phase ${phase} complete: R${info.round}/${info.total}`);
      await handlePhaseComplete(info);
    } else {
      log(`Progress: R${info.round}/${info.total} [${info.status}]`);
    }
    
    if (phase > 4) {
      log('All phases complete.');
      break;
    }
    
    await sleep(HEARTBEAT_MS);
  }
  
  log('Cruise ended. Generating final report...');
  await generateFinalReport();
}

async function handlePhaseComplete(info) {
  if (phase === 1) {
    log('Phase 1 done: library characters. Starting Phase 2: expansion search.');
    // Load expansion task
    f12(`multi-load ${info.tabId} "${path.join(TASK_DIR, 'tasks_expand.txt')}" --no-wait`);
    await sleep(3000);
    f12(`multi-auto ${info.tabId} --no-wait`);
    phase = 2;
  } else if (phase === 2) {
    log('Phase 2 done: expansion candidates. Starting Phase 3: expansion analysis.');
    f12(`multi-load ${info.tabId} "${path.join(TASK_DIR, 'tasks_expand_analyze.txt')}" --no-wait`);
    await sleep(3000);
    f12(`multi-auto ${info.tabId} --no-wait`);
    phase = 3;
  } else if (phase === 3) {
    log('Phase 3 done: expansion analysis. Generating reports.');
    phase = 4;
  }
}

async function generateFinalReport() {
  const report = [
    '# 8h角色库巡航报告',
    '',
    `- 开始: ${new Date(startTime).toISOString()}`,
    `- 结束: ${new Date().toISOString()}`,
    `- 总时长: ${elapsedStr()}`,
    `- 完成阶段: ${phase}/4`,
    '',
    '## 产出',
    '- 详细卡: 05-银矿库/角色库/详细卡/',
    '- 简索: 05-银矿库/角色库/简索/',
    '- 扩展名单: 07-Codex大脑库/deepseek的实践/扩展名单.md',
  ].join('\n');
  const f = path.join(VAULT, '07-Codex大脑库', 'deepseek的实践', '8h巡航报告.md');
  fs.writeFileSync(f, report);
  log(`Report written to ${f}`);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

main().catch(e => { log(`FATAL: ${e.message}`); });
