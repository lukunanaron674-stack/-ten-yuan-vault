const fs = require('fs');
const http = require('http');
const path = require('path');

const BASE = process.env.TY_F12_BRIDGE_URL || 'http://127.0.0.1:17312';
const args = process.argv.slice(2);

function parseSourceFlag(argv) {
  const si = argv.findIndex(a => a === '--source' || a === '-s');
  if (si >= 0 && si + 1 < argv.length) { const source = argv[si + 1]; argv.splice(si, 2); return source; }
  return '';
}

function usage() {
  console.log(`Ten Yuan F12 Bridge CLI

Usage:
  npm run f12 -- status
  npm run f12 -- bind
  npm run f12 -- inject
  npm run f12 -- load <tasks.txt>
  npm run f12 -- default <count> [project] [frame]
  npm run f12 -- send
  npm run f12 -- auto
  npm run f12 -- pause
  npm run f12 -- stop
  npm run f12 -- next | prev | retry | complete | reset
  npm run f12 -- project <projectName> [frameName]
  npm run f12 -- multi-status
  npm run f12 -- multi-load <tabId> <tasks.txt> [index]
  npm run f12 -- multi-auto <tabId>
  npm run f12 -- multi-pause <tabId>
  npm run f12 -- multi-stop <tabId>
  npm run f12 -- multi-archive <tabId>
  npm run f12 -- multi-script <tabId> <script.js>
  npm run f12 -- clear
`);
}

function request(method, pathname, body) {
  const url = new URL(pathname, BASE);
  const data = body ? JSON.stringify(body) : '';
  return new Promise((resolve, reject) => {
    const req = http.request(url, {
      method,
      headers: {
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(data)
      }
    }, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try {
          const parsed = raw ? JSON.parse(raw) : {};
          if (res.statusCode >= 400) reject(new Error(parsed.error || `HTTP ${res.statusCode}`));
          else resolve(parsed);
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

function parseTasks(raw) {
  return String(raw || '')
    .trim()
    .split(/\s*---\s*task\s*---\s*/gi)
    .map(task => task.trim())
    .filter(Boolean);
}

async function enqueue(type, payload = {}, wait = true) {
  const created = await request('POST', '/commands', { type, payload });
  const id = created.command.id;
  console.log(`queued ${type} #${id}`);
  if (!wait) return created;
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    await new Promise(resolve => setTimeout(resolve, 700));
    const current = await request('GET', `/commands/${id}`);
    const command = current.command;
    if (command.status === 'done' || command.status === 'failed') {
      console.log(JSON.stringify(command, null, 2));
      return current;
    }
  }
  console.log(`timeout waiting for #${id}; command is queued/delivered. Run: npm run f12 -- status`);
  return created;
}

async function main() {
  const cmd = String(args[0] || 'help').toLowerCase();
  const noWait = args.includes('--no-wait');
  const source = parseSourceFlag(args);

  if (cmd === 'help' || cmd === '-h' || cmd === '--help') {
    usage();
    return;
  }

  if (cmd === 'status') {
    const status = await request('GET', '/status');
    console.log(JSON.stringify(status, null, 2));
    return;
  }

  if (cmd === 'multi-status') {
    const status = await request('GET', '/status');
    const ext = status.extension || {};
    const tabs = ext.multiTabs?.tabs || {};
    const rows = Object.values(tabs)
      .sort((a, b) => (b.lastHeartbeat || 0) - (a.lastHeartbeat || 0))
      .map(tab => ({
        tabId: tab.tabId,
        status: Date.now() - (tab.lastHeartbeat || 0) < 30000 ? (tab.status || '') : 'offline',
        role: tab.role || '',
        round: `R${tab.currentRound || tab.round || 0}/${tab.total || 0}`,
        heartbeatAgeSec: Math.max(0, Math.round((Date.now() - (tab.lastHeartbeat || 0)) / 1000)),
        title: tab.title || tab.url || ''
      }));
    console.table(rows);
    return;
  }

  if (cmd === 'clear') {
    const result = await request('DELETE', '/commands');
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  if (cmd === 'load') {
    const file = args[1];
    if (!file) throw new Error('Missing tasks file path');
    const fullPath = path.resolve(process.cwd(), file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const tasks = parseTasks(raw);
    if (!tasks.length) throw new Error('No tasks parsed');
    await enqueue('LOAD_TASKS', { tasks, file: fullPath, source }, !noWait);
    return;
  }

  if (cmd === 'default') {
    const count = Number(args[1] || 12);
    await enqueue('DEFAULT_TASKS', { count, project: args[2] || 'Project', frame: args[3] || 'Frame', source }, !noWait);
    return;
  }

  if (cmd === 'project') {
    await enqueue('SET_PROJECT', { projectName: args[1] || '', frameName: args[2] || '' }, !noWait);
    return;
  }

  if (cmd === 'multi-load') {
    const tabId = Number(args[1]);
    const file = args[2];
    const index = Number(args[3] || 0);
    if (!tabId) throw new Error('Missing tabId');
    if (!file) throw new Error('Missing tasks file path');
    const fullPath = path.resolve(process.cwd(), file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const tasks = parseTasks(raw);
    if (!tasks.length) throw new Error('No tasks parsed');
    await enqueue('MULTI_COMMAND', { tabId, command: 'LOAD_TASK', tasks, index, source }, !noWait);
    return;
  }


  if (cmd === 'multi-script') {
    const tabId = Number(args[1]);
    const file = args[2];
    if (!tabId) throw new Error('Missing tabId');
    if (!file) throw new Error('Missing script file path');
    const fullPath = path.resolve(process.cwd(), file);
    const script = fs.readFileSync(fullPath, 'utf8');
    await enqueue('MULTI_COMMAND', { tabId, command: 'RUN_SCRIPT', script, source }, !noWait);
    return;
  }


  const multiMap = {
    'multi-auto': 'AUTO_RUN',
    'multi-pause': 'PAUSE',
    'multi-stop': 'STOP',
    'multi-send': 'SEND_CURRENT',
    'multi-archive': 'ARCHIVE_LATEST',
    'multi-next': 'NEXT_ROUND',
    'multi-script': 'RUN_SCRIPT'
  };

  if (multiMap[cmd]) {
    const tabId = Number(args[1]);
    if (!tabId) throw new Error('Missing tabId');
    await enqueue('MULTI_COMMAND', { tabId, command: multiMap[cmd], source }, !noWait);
    return;
  }

  const map = {
    bind: 'BIND',
    inject: 'INJECT',
    send: 'SEND',
    auto: 'AUTO',
    pause: 'PAUSE',
    stop: 'STOP',
    resume: 'RESUME',
    trial2: 'TRIAL_2',
    next: 'NEXT',
    prev: 'PREV',
    retry: 'RETRY',
    complete: 'COMPLETE',
    reset: 'RESET'
  };

  if (map[cmd]) {
    await enqueue(map[cmd], { source }, !noWait);
    return;
  }

  throw new Error(`Unknown command: ${cmd}`);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});