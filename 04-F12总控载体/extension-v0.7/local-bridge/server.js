const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.TY_F12_BRIDGE_PORT || 17312);
const HOST = process.env.TY_F12_BRIDGE_HOST || '127.0.0.1';
const STATE_PATH = path.join(__dirname, 'bridge-state.json');
const VAULT_ROOT = path.resolve(__dirname, '..', '..', '..');
const ARCHIVE_DIR = path.join(VAULT_ROOT, '07-Codex大脑库', 'F12归档输出');

let state = {
  nextId: 1,
  commands: [],
  results: [],
  archives: [],
  extension: null,
  startedAt: new Date().toISOString()
};

function loadState() {
  try {
    if (fs.existsSync(STATE_PATH)) {
      const saved = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
      state = { ...state, ...saved, commands: saved.commands || [], results: saved.results || [], archives: saved.archives || [] };
      state.nextId = Math.max(Number(state.nextId || 1), ...state.commands.map(c => Number(c.id) + 1), 1);
    }
  } catch (error) {
    console.warn('[bridge] failed to load state:', error.message);
  }
}

function saveState() {
  const slim = {
    ...state,
    commands: state.commands.slice(-100),
    results: state.results.slice(-100),
    archives: (state.archives || []).slice(-100)
  };
  fs.writeFileSync(STATE_PATH, JSON.stringify(slim, null, 2), 'utf8');
}

function send(res, code, data) {
  const body = JSON.stringify(data, null, 2);
  res.writeHead(code, {
    'content-type': 'application/json; charset=utf-8',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,DELETE,OPTIONS',
    'access-control-allow-headers': 'content-type'
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 10 * 1024 * 1024) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!raw.trim()) return resolve({});
      try { resolve(JSON.parse(raw)); }
      catch (error) { reject(error); }
    });
    req.on('error', reject);
  });
}

function publicStatus() {
  const pending = state.commands.filter(c => c.status === 'queued').length;
  const delivered = state.commands.filter(c => c.status === 'delivered').length;
  const done = state.commands.filter(c => c.status === 'done').length;
  const failed = state.commands.filter(c => c.status === 'failed').length;
  return {
    ok: true,
    bridge: 'ten-yuan-f12-local-bridge',
    port: PORT,
    startedAt: state.startedAt,
    extension: state.extension,
    counts: { pending, delivered, done, failed, total: state.commands.length },
    latestCommands: state.commands.slice(-10),
    latestResults: state.results.slice(-10),
    latestArchives: (state.archives || []).slice(-10)
  };
}

function sanitizeFilePart(value, fallback = 'archive') {
  return String(value || fallback)
    .replace(/[\\/:*?"<>|\r\n\t]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80) || fallback;
}

function nowFileStamp() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
}

function archiveMarkdown(body) {
  const createdAt = new Date().toISOString();
  const title = sanitizeFilePart(body.title || 'F12归档');
  const round = Number(body.round || 0);
  const total = Number(body.total || 0);
  const tabId = sanitizeFilePart(body.tabId || 'tab');
  const fileName = `${nowFileStamp()}_tab-${tabId}_R${round || 0}-${total || 0}_${title}.md`;
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  const filePath = path.join(ARCHIVE_DIR, fileName);
  const task = String(body.task || '').trim();
  const text = String(body.text || '').trim();
  const md = [
    '---',
    `createdAt: ${createdAt}`,
    `source: ${body.source || 'Ten Yuan F12 Controller'}`,
    `tabId: ${body.tabId || ''}`,
    `round: ${round}`,
    `total: ${total}`,
    `title: ${String(body.title || '').replace(/\r?\n/g, ' ')}`,
    `url: ${body.url || ''}`,
    '---',
    '',
    `# F12 Archive R${round || 0}/${total || 0} - ${body.title || "Untitled"}`,
    '',
    '## 任务',
    '',
    task || "(no task text)",
    '',
    '## 输出',
    '',
    text || "(no output text)",
    ''
  ].join('\n');
  fs.writeFileSync(filePath, md, 'utf8');
  const relativePath = path.relative(VAULT_ROOT, filePath).replace(/\\/g, '/');
  const record = { createdAt, path: filePath, relativePath, tabId: body.tabId || '', round, total, title: body.title || '' };
  state.archives = state.archives || [];
  state.archives.push(record);
  saveState();
  return record;
}

function enqueue(type, payload = {}) {
  const command = {
    id: String(state.nextId++),
    type: String(type || '').toUpperCase(),
    source: payload.source || '',
    payload,
    status: 'queued',
    createdAt: new Date().toISOString(),
    deliveredAt: null,
    completedAt: null,
    result: null,
    error: null
  };
  state.commands.push(command);
  saveState();
  return command;
}

function findCommand(id) {
  return state.commands.find(command => command.id === String(id));
}

loadState();

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'OPTIONS') return send(res, 200, { ok: true });

    const url = new URL(req.url, `http://${HOST}:${PORT}`);

    if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/health')) {
      return send(res, 200, { ok: true, bridge: 'ten-yuan-f12-local-bridge', port: PORT });
    }

    if (req.method === 'GET' && url.pathname === '/status') {
      return send(res, 200, publicStatus());
    }

    if (req.method === 'POST' && url.pathname === '/extension/heartbeat') {
      const body = await readBody(req);
      state.extension = { ...(body.state || {}), source: body.source || 'extension', seenAt: new Date().toISOString() };
      saveState();
      return send(res, 200, { ok: true });
    }

    if (req.method === 'POST' && url.pathname === '/commands') {
      const body = await readBody(req);
      const command = enqueue(body.type || body.command, body.payload || {});
      return send(res, 200, { ok: true, command });
    }

    if (req.method === 'POST' && url.pathname === '/archive') {
      const body = await readBody(req);
      if (!String(body.text || '').trim()) return send(res, 400, { ok: false, error: 'Missing archive text' });
      const record = archiveMarkdown(body);
      return send(res, 200, { ok: true, ...record });
    }

    if (req.method === 'GET' && url.pathname === '/commands/next') {
      const command = state.commands.find(c => c.status === 'queued');
      if (!command) return send(res, 200, { ok: true, command: null });
      command.status = 'delivered';
      command.client = url.searchParams.get('client') || '';
      command.deliveredAt = new Date().toISOString();
      saveState();
      return send(res, 200, { ok: true, command });
    }

    if (req.method === 'GET' && url.pathname.startsWith('/commands/')) {
      const id = decodeURIComponent(url.pathname.split('/').pop());
      const command = findCommand(id);
      return send(res, command ? 200 : 404, command ? { ok: true, command } : { ok: false, error: 'Command not found' });
    }

    if (req.method === 'POST' && url.pathname === '/result') {
      const body = await readBody(req);
      const command = findCommand(body.id);
      if (!command) return send(res, 404, { ok: false, error: 'Command not found' });
      command.status = body.ok ? 'done' : 'failed';
      command.completedAt = body.completedAt || new Date().toISOString();
      command.result = body.result || null;
      command.error = body.ok ? null : (body.error || body.result?.error || 'unknown');
      if (body.state) state.extension = { ...body.state, seenAt: new Date().toISOString() };
      state.results.push({ id: command.id, type: command.type, ok: !!body.ok, result: body.result || null, completedAt: command.completedAt });
      saveState();
      return send(res, 200, { ok: true, command });
    }

    
    if (req.method === 'GET' && url.pathname === '/results/full') {
      const full = state.results.filter(r => {
        const cmd = state.commands.find(c => c.id === r.id);
        return cmd && cmd.payload && cmd.payload.returnPolicy === 'full';
      }).slice(-20);
      return send(res, 200, { ok: true, count: full.length, results: full });
    }

    if (req.method === 'GET' && url.pathname === '/results/summary') {
      const summary = state.results.filter(r => {
        const cmd = state.commands.find(c => c.id === r.id);
        return cmd && cmd.payload && cmd.payload.returnPolicy !== 'none';
      }).slice(-30);
      return send(res, 200, { ok: true, count: summary.length, results: summary });
    }

    if (req.method === 'GET' && url.pathname.startsWith('/results/type/')) {
      const type = decodeURIComponent(url.pathname.split('/').pop());
      const typed = state.results.filter(r => {
        const cmd = state.commands.find(c => c.id === r.id);
        return cmd && cmd.payload && cmd.payload.type === type;
      }).slice(-20);
      return send(res, 200, { ok: true, type, count: typed.length, results: typed });
    }


    if (req.method === 'POST' && url.pathname === '/script/read') {
      const body = await readBody(req);
      const requestedPath = String(body.path || '').trim();
      if (!requestedPath) return send(res, 400, { ok: false, error: 'Missing path' });
      const safeName = path.basename(requestedPath);
      if (!safeName || safeName !== requestedPath.replace(/\\/g, '/').split('/').pop()) {
        return send(res, 400, { ok: false, error: 'Invalid path' });
      }
      const fullPath = path.resolve(VAULT_ROOT, requestedPath);
      if (!fullPath.startsWith(VAULT_ROOT)) {
        return send(res, 403, { ok: false, error: 'Path outside vault' });
      }
      try {
        const script = fs.readFileSync(fullPath, 'utf8');
        return send(res, 200, { ok: true, script, path: requestedPath });
      } catch (error) {
        return send(res, 404, { ok: false, error: 'File not found: ' + error.message });
      }
    }
if (req.method === 'DELETE' && url.pathname === '/commands') {
      state.commands = [];
      state.results = [];
      saveState();
      return send(res, 200, { ok: true, cleared: true });
    }

    return send(res, 404, { ok: false, error: 'Not found' });
  } catch (error) {
    return send(res, 500, { ok: false, error: error.message });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[bridge] Ten Yuan F12 Local Bridge listening at http://${HOST}:${PORT}`);
  console.log('[bridge] Keep this window open while controlling Edge F12.');
});
