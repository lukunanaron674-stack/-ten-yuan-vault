const fs = require('fs');
const http = require('http');
const path = require('path');
const crypto = require('crypto');

const BASE = process.env.TY_F12_BRIDGE_URL || 'http://127.0.0.1:17312';
const STATE_PATH = path.join(__dirname, 'archive-watch-state.json');
const DEFAULT_INTERVAL_SECONDS = 20;
const DEFAULT_COMMAND_TIMEOUT_MS = 30000;
const DEFAULT_MAX_HEARTBEAT_AGE_MS = 10 * 60 * 1000;
const DEFAULT_ARCHIVE_MARKER = '---归档';

const ARCHIVE_KEYWORDS = [
  '归档',
  '档案',
  '总结',
  '阶段总结',
  '收束',
  '封存',
  '总表',
  '总览',
  '入库',
  'CarryPacket'
];

function usage() {
  console.log(`Ten Yuan F12 archive watcher

Usage:
  npm run f12:watch-archive -- --all
  npm run f12:watch-archive -- --tab selected --rounds 3,6,12
  npm run f12:watch-archive -- --once --dry-run --all

Options:
  --all                 Watch every online ChatGPT / LazyMan tab.
  --tab <id|selected>   Watch one tab. Default: selected.
  --once                Inspect once, then exit.
  --dry-run             Detect only; do not save archives.
  --interval <seconds>  Watch interval. Default: ${DEFAULT_INTERVAL_SECONDS}.
  --rounds <list>       Archive only these rounds, e.g. 3,6,12.
  --every <n>           Archive every n completed rounds.
  --save-all-done       Archive every completed TASK_DONE round.
  --marker <text>       Archive when latest text contains this marker. Default: ${DEFAULT_ARCHIVE_MARKER}.
  --loose               Accept a marker that is not the final line.
  --timeout <seconds>   Per dump command timeout. Default: 30.
`);
}

function parseArgs(argv) {
  const args = {
    all: false,
    tab: 'selected',
    once: false,
    dryRun: false,
    intervalSeconds: DEFAULT_INTERVAL_SECONDS,
    rounds: new Set(),
    every: 0,
    saveAllDone: false,
    archiveMarker: DEFAULT_ARCHIVE_MARKER,
    loose: false,
    timeoutMs: DEFAULT_COMMAND_TIMEOUT_MS,
    maxHeartbeatAgeMs: DEFAULT_MAX_HEARTBEAT_AGE_MS
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') args.help = true;
    else if (arg === '--all') args.all = true;
    else if (arg === '--once') args.once = true;
    else if (arg === '--dry-run') args.dryRun = true;
    else if (arg === '--save-all-done') args.saveAllDone = true;
    else if (arg === '--loose') args.loose = true;
    else if (arg === '--tab') args.tab = argv[++i] || 'selected';
    else if (arg === '--marker') args.archiveMarker = argv[++i] || DEFAULT_ARCHIVE_MARKER;
    else if (arg === '--interval') args.intervalSeconds = Math.max(3, Number(argv[++i] || DEFAULT_INTERVAL_SECONDS));
    else if (arg === '--every') args.every = Math.max(0, Number(argv[++i] || 0));
    else if (arg === '--timeout') args.timeoutMs = Math.max(5, Number(argv[++i] || 30)) * 1000;
    else if (arg === '--max-age') args.maxHeartbeatAgeMs = Math.max(10, Number(argv[++i] || 600)) * 1000;
    else if (arg === '--rounds') {
      for (const item of String(argv[++i] || '').split(',')) {
        const n = Number(item.trim());
        if (Number.isFinite(n) && n > 0) args.rounds.add(n);
      }
    }
  }

  return args;
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function enqueueAndWait(type, payload, timeoutMs) {
  const created = await request('POST', '/commands', { type, payload });
  const id = created?.command?.id;
  if (!id) throw new Error('Bridge did not return a command id');

  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    const result = await request('GET', `/commands/${encodeURIComponent(id)}`);
    const command = result.command;
    if (!command) throw new Error(`Command ${id} disappeared`);
    if (command.status === 'done' || command.status === 'failed') return command;
    await sleep(500);
  }
  throw new Error(`Command ${id} timed out`);
}

function loadWatchState() {
  try {
    if (!fs.existsSync(STATE_PATH)) return { seen: {} };
    const parsed = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
    return { seen: parsed.seen || {} };
  } catch (error) {
    console.warn(`[watch] failed to read state: ${error.message}`);
    return { seen: {} };
  }
}

function saveWatchState(state) {
  fs.writeFileSync(STATE_PATH, JSON.stringify({
    ...state,
    updatedAt: new Date().toISOString()
  }, null, 2), 'utf8');
}

function sha1(value) {
  return crypto.createHash('sha1').update(String(value || '')).digest('hex');
}

function normalizeTab(tabId, tab) {
  return {
    tabId: String(tab.tabId || tabId),
    title: tab.title || '',
    url: tab.url || '',
    status: tab.status || '',
    role: tab.role || '',
    currentRound: tab.currentRound || tab.round || 0,
    total: tab.total || 0,
    lastHeartbeat: Number(tab.lastHeartbeat || 0)
  };
}

function isSupportedTab(tab) {
  const haystack = `${tab.url || ''} ${tab.title || ''}`.toLowerCase();
  return haystack.includes('chatgpt.com')
    || haystack.includes('chat.openai.com')
    || haystack.includes('lazymanchat.com')
    || haystack.includes('lazyman');
}

function isOnline(tab, args) {
  if (!tab.lastHeartbeat) return true;
  return Date.now() - tab.lastHeartbeat <= args.maxHeartbeatAgeMs;
}

function chooseTabs(status, args) {
  const extension = status.extension || {};
  const multiTabs = extension.multiTabs || {};
  const rawTabs = multiTabs.tabs || {};
  const tabs = Object.entries(rawTabs).map(([tabId, tab]) => normalizeTab(tabId, tab));

  if (args.all) {
    return tabs.filter(tab => isSupportedTab(tab) && isOnline(tab, args));
  }

  const selected = args.tab === 'selected'
    ? String(multiTabs.selectedTabId || extension.activeTabId || '')
    : String(args.tab || '');

  if (!selected) return [];
  const existing = tabs.find(tab => tab.tabId === selected);
  if (existing) return [existing];

  return [{
    tabId: selected,
    title: extension.activeTitle || '',
    url: extension.activeUrl || '',
    status: 'unknown',
    role: '',
    currentRound: 0,
    total: 0,
    lastHeartbeat: 0
  }];
}

function textCandidatesFromDump(result) {
  const candidates = [];
  const add = (label, text) => {
    const value = String(text || '').trim();
    if (value) candidates.push({ label, text: value });
  };

  add('lastAssistantText', result.lastAssistantText);
  add('text', result.text);
  add('bodyText', result.bodyText);

  for (const item of [...(result.snippets || [])].reverse()) {
    add(`snippet:${item.index ?? ''}:${item.tag || ''}`, item.text);
  }

  for (const frame of [...(result.frames || [])].reverse()) {
    add(`frame:${frame.index ?? ''}`, frame.text);
  }

  return candidates;
}

function terminalMarker(text) {
  const lines = String(text || '')
    .trim()
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  for (let i = lines.length - 1; i >= Math.max(0, lines.length - 5); i -= 1) {
    const match = /^TASK_DONE\s*:\s*R\s*(\d+)\s*\/\s*(\d+)\s*$/i.exec(lines[i]);
    if (match) return { round: Number(match[1]), total: Number(match[2]), finalLine: lines[i] };
  }
  return null;
}

function looseMarker(text) {
  const matches = [...String(text || '').matchAll(/TASK_DONE\s*:\s*R\s*(\d+)\s*\/\s*(\d+)/gi)];
  if (!matches.length) return null;
  const match = matches[matches.length - 1];
  return { round: Number(match[1]), total: Number(match[2]), finalLine: match[0] };
}

function markerArchive(text, args) {
  const marker = String(args.archiveMarker || '').trim();
  const value = String(text || '').trim();
  if (!marker || !value.includes(marker)) return null;

  const taskDone = looseMarker(value);
  return {
    round: taskDone?.round || 0,
    total: taskDone?.total || 0,
    finalLine: marker,
    text: value,
    source: 'archive-marker',
    terminal: false,
    archiveMarker: marker
  };
}

function findCompletedText(result, args) {
  const candidates = textCandidatesFromDump(result);

  for (const candidate of candidates) {
    const archived = markerArchive(candidate.text, args);
    if (archived) return { ...archived, source: candidate.label };
  }

  for (const candidate of candidates) {
    const marker = terminalMarker(candidate.text);
    if (marker) return { ...marker, text: candidate.text, source: candidate.label, terminal: true };
  }

  if (args.loose) {
    for (const candidate of candidates) {
      const marker = looseMarker(candidate.text);
      if (marker) return { ...marker, text: candidate.text, source: candidate.label, terminal: false };
    }
  }

  return null;
}

function archiveReason(done, args) {
  const text = done.text || '';
  if (done.archiveMarker) return `marker-${done.archiveMarker}`;
  if (args.saveAllDone) return 'save-all-done';
  if (args.rounds.has(done.round)) return `round-${done.round}`;
  if (args.every > 0 && done.round > 0 && done.round % args.every === 0) return `every-${args.every}`;
  if (done.total > 0 && done.round === done.total) return 'final-round';
  if (ARCHIVE_KEYWORDS.some(keyword => text.includes(keyword))) return 'archive-keyword';
  return '';
}

async function inspectTab(tab, args, watchState) {
  const command = await enqueueAndWait('MULTI_COMMAND', {
    tabId: Number(tab.tabId),
    command: 'DUMP_TEXT',
    source: 'archive-watcher'
  }, args.timeoutMs);

  if (command.status !== 'done' || !command.result?.ok) {
    const error = command.error || command.result?.error || command.result?.result?.error || 'dump failed';
    console.log(`[watch] #${tab.tabId} dump failed: ${error}`);
    return { saved: false, detected: false };
  }

  const dump = command.result.result || command.result;
  const page = dump.result || dump;
  const done = findCompletedText(page, args);
  if (!done) {
    console.log(`[watch] #${tab.tabId} no completed TASK_DONE marker`);
    return { saved: false, detected: false };
  }

  const reason = archiveReason(done, args);
  const displayTitle = page.title || tab.title || 'Untitled';
  const roundLabel = done.round && done.total ? `R${done.round}/${done.total}` : 'archive-marker';
  console.log(`[watch] #${tab.tabId} detected ${roundLabel} from ${done.source}${done.terminal ? '' : ' (loose)'}`);

  if (!reason) {
    console.log(`[watch] #${tab.tabId} R${done.round}/${done.total} is not an archive round`);
    return { saved: false, detected: true };
  }

  const key = `${tab.tabId}:R${done.round}/${done.total}:${sha1(done.text)}`;
  if (watchState.seen[key]) {
    console.log(`[watch] #${tab.tabId} R${done.round}/${done.total} already archived`);
    return { saved: false, detected: true };
  }

  if (args.dryRun) {
    console.log(`[watch] dry-run would archive #${tab.tabId} R${done.round}/${done.total}: ${reason}`);
    return { saved: false, detected: true };
  }

  const archived = await request('POST', '/archive', {
    source: 'Ten Yuan F12 Archive Watcher',
    tabId: tab.tabId,
    title: displayTitle,
    url: page.href || tab.url || '',
    round: done.round,
    total: done.total,
    task: `Archive watcher detected ${done.finalLine} via ${reason}.`,
    text: done.text
  });

  watchState.seen[key] = {
    savedAt: new Date().toISOString(),
    tabId: tab.tabId,
    round: done.round,
    total: done.total,
    reason,
    path: archived.path,
    relativePath: archived.relativePath,
    title: displayTitle
  };
  saveWatchState(watchState);
  console.log(`[watch] archived #${tab.tabId} R${done.round}/${done.total}: ${archived.relativePath || archived.path}`);
  return { saved: true, detected: true };
}

async function runOnce(args, watchState) {
  const status = await request('GET', '/status');
  const tabs = chooseTabs(status, args);
  if (!tabs.length) {
    console.log('[watch] no target tabs found. Use --all or --tab <id>.');
    return { saved: 0, detected: 0 };
  }

  let saved = 0;
  let detected = 0;
  for (const tab of tabs) {
    try {
      const result = await inspectTab(tab, args, watchState);
      if (result.saved) saved += 1;
      if (result.detected) detected += 1;
    } catch (error) {
      console.log(`[watch] #${tab.tabId} error: ${error.message}`);
    }
  }
  return { saved, detected };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const watchState = loadWatchState();
  console.log(`[watch] bridge: ${BASE}`);
  console.log(`[watch] mode: ${args.all ? 'all tabs' : `tab ${args.tab}`}${args.dryRun ? ' / dry-run' : ''}`);
  console.log(`[watch] archive rule: ${args.archiveMarker}, final round, archive keywords, --rounds, --every, or --save-all-done`);

  if (args.once) {
    await runOnce(args, watchState);
    return;
  }

  while (true) {
    await runOnce(args, watchState);
    await sleep(args.intervalSeconds * 1000);
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error(`[watch] fatal: ${error.message}`);
    process.exitCode = 1;
  });
}
