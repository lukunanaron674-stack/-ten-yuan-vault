const fs = require('fs');
const http = require('http');
const path = require('path');

const BASE = process.env.TY_F12_BRIDGE_URL || 'http://127.0.0.1:17312';
const PAGE_HEARTBEAT_ONLINE_MS = 600000;
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
  npm run f12 -- category <silver|dynamic|themes|visual|story|anti|archive>
  npm run f12 -- category-load <category> [count]
  npm run f12 -- progress-md [output.md]
  npm run f12 -- tabs
  npm run f12 -- select <tabId>
  npm run f12 -- multi-status
  npm run f12 -- multi-load <tabId> <tasks.txt> [index]
  npm run f12 -- multi-mode <tabId> <text|image|manual> [waitSeconds]
  npm run f12 -- multi-confirm <tabId>
  npm run f12 -- multi-send <tabId>
  npm run f12 -- multi-auto <tabId>
  npm run f12 -- multi-pause <tabId>
  npm run f12 -- multi-stop <tabId>
  npm run f12 -- multi-panel <tabId>
  npm run f12 -- multi-archive <tabId>
  npm run f12 -- multi-dump <tabId>
  npm run f12 -- multi-image <tabId> <output.png>
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

function cleanTaskText(text) {
  return String(text || '')
    .replace(/^\s*```(?:text|txt|md|markdown)?\s*$/gim, '')
    .replace(/^\s*```\s*$/gim, '')
    .trim();
}

function detectTemplateTotal(text) {
  const patterns = [
    /TASK_DONE\s*:\s*R\s*[\{｛][^}｝]+[}｝]\s*\/\s*(\d+)/i,
    /R\s*[\{｛][^}｝]+[}｝]\s*\/\s*(\d+)/i,
    /TASK_DONE\s*:\s*R\s*\d+\s*\/\s*(\d+)/i,
    /R\s*1\s*\/\s*(\d+)/i,
    /(\d+)\s*轮/
  ];
  for (const pattern of patterns) {
    const match = String(text || '').match(pattern);
    if (match) return Number(match[1]);
  }
  return 0;
}

function fillRoundPlaceholders(text, round, total) {
  return cleanTaskText(text)
    .replace(/R\s*[\{｛]\s*(?:轮数|round|n)\s*[}｝]\s*\/\s*\d+/gi, `R${round}/${total}`)
    .replace(/R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/g, `R${round}/${total}`)
    .replace(/TASK_DONE\s*:\s*R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/gi, `TASK_DONE:R${round}/${total}`);
}

function expandRoundTemplate(raw) {
  const text = String(raw || '').trim();
  const total = detectTemplateTotal(text);
  if (!total || total < 2 || total > 300) return [];
  if (!/R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/i.test(text)) return [];

  const placeholderMatch = /R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/i.exec(text);
  if (!placeholderMatch) return [];
  const templateStart = text.lastIndexOf('\n', placeholderMatch.index) + 1;

  const afterTemplate = text.slice(templateStart);
  const stopMarks = ['推荐跑法', '```text\nR1 ', '```txt\nR1 ', '\nR1 总校准'];
  const templateEndOffset = stopMarks
    .map(mark => afterTemplate.indexOf(mark))
    .filter(index => index > 0)
    .sort((a, b) => a - b)[0] || afterTemplate.length;
  const template = cleanTaskText(afterTemplate.slice(0, templateEndOffset));
  if (!template) return [];

  const firstStart = text.search(/进入【/);
  let firstTask = '';
  if (firstStart >= 0 && firstStart < templateStart) {
    const firstStopCandidates = [
      text.indexOf('后续续跑用这个', firstStart),
      text.indexOf('推荐跑法', firstStart),
      templateStart
    ].filter(index => index > firstStart);
    const firstEnd = firstStopCandidates.sort((a, b) => a - b)[0] || templateStart;
    firstTask = cleanTaskText(text.slice(firstStart, firstEnd));
  }

  const tasks = [];
  if (firstTask) {
    tasks.push(fillRoundPlaceholders(firstTask, 1, total));
  } else {
    tasks.push(fillRoundPlaceholders(template, 1, total));
  }

  for (let round = 2; round <= total; round += 1) {
    tasks.push(fillRoundPlaceholders(template, round, total));
  }
  return tasks.filter(Boolean);
}

function splitRoundHeadings(raw) {
  const text = String(raw || '').trim();
  const matches = [...text.matchAll(/(?:^|\n)\s*(?:【\s*)?(R\d+\s*\/\s*\d+[^】\n]*(?:】)?)/gi)];
  if (matches.length <= 1) return [];
  return matches.map((match, index) => {
    const start = match.index + (match[0].startsWith('\n') ? 1 : 0);
    const end = index + 1 < matches.length
      ? matches[index + 1].index + (matches[index + 1][0].startsWith('\n') ? 1 : 0)
      : text.length;
    return cleanTaskText(text.slice(start, end));
  }).filter(Boolean);
}

// Clean override for real UTF-8 Chinese prompts. The older parser helpers above
// may contain mojibake on Windows, so match by code fences and Rn/N instead.
function detectTemplateTotal(text) {
  const value = String(text || '');
  const patterns = [
    /TASK_DONE\s*:\s*R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*(\d+)/i,
    /R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*(\d+)/i,
    /TASK_DONE\s*:\s*R\s*\d+\s*\/\s*(\d+)/i,
    /R\s*1\s*\/\s*(\d+)/i,
    /(\d+)\s*\u8F6E/
  ];
  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) return Number(match[1]);
  }
  return 0;
}

function placeholderRoundPattern() {
  return /R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/i;
}

function fillRoundPlaceholders(text, round, total) {
  return cleanTaskText(text)
    .replace(/TASK_DONE\s*:\s*R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/gi, `TASK_DONE:R${round}/${total}`)
    .replace(/R\s*[\{\uFF5B]\s*(?:\u8F6E\u6570|round|n)\s*[\}\uFF5D]\s*\/\s*\d+/gi, `R${round}/${total}`)
    .replace(/R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/g, `R${round}/${total}`);
}

function fencedBlocks(text) {
  return [...String(text || '').matchAll(/```(?:text|txt|md|markdown)?\s*\n([\s\S]*?)\n```/gi)]
    .map(match => ({ index: match.index, body: match[1] }));
}

function trimAfterGuideText(text) {
  const stops = [
    /\n\s*\u63A8\u8350\u8DD1\u6CD5\s*[:\uFF1A]?/i,
    /\n\s*\u540E\u7EED/i
  ];
  const offsets = stops
    .map(pattern => pattern.exec(text))
    .filter(Boolean)
    .map(match => match.index)
    .filter(index => index > 0);
  if (!offsets.length) return text;
  return text.slice(0, offsets.sort((a, b) => a - b)[0]);
}

function expandRoundTemplate(raw) {
  const text = String(raw || '').trim();
  const total = detectTemplateTotal(text);
  if (!total || total < 2 || total > 300) return [];

  const placeholder = placeholderRoundPattern();
  if (!placeholder.test(text)) return [];

  const blocks = fencedBlocks(text);
  const templateBlock = blocks.find(block => placeholder.test(block.body));
  const templateText = templateBlock ? templateBlock.body : text;
  const placeholderMatch = placeholder.exec(templateText);
  if (!placeholderMatch) return [];

  const templateStart = templateBlock
    ? templateBlock.index
    : text.lastIndexOf('\n', placeholderMatch.index) + 1;

  let template = '';
  if (templateBlock) {
    template = cleanTaskText(templateBlock.body);
  } else {
    const afterTemplate = text.slice(templateStart);
    const guideMatch = /\n\s*\u63A8\u8350\u8DD1\u6CD5\s*[:\uFF1A]?/i.exec(afterTemplate);
    template = cleanTaskText(afterTemplate.slice(0, guideMatch && guideMatch.index > 0 ? guideMatch.index : afterTemplate.length));
  }
  if (!template) return [];

  const firstBlock = blocks.find(block =>
    block.index < templateStart &&
    !placeholder.test(block.body) &&
    new RegExp(`R\\s*1\\s*\\/\\s*${total}`, 'i').test(block.body)
  );

  let firstTask = '';
  if (firstBlock) {
    firstTask = cleanTaskText(firstBlock.body);
  } else {
    const beforeTemplate = text.slice(0, templateStart);
    const firstMatch = new RegExp(`R\\s*1\\s*\\/\\s*${total}`, 'i').exec(beforeTemplate);
    if (firstMatch) {
      const firstStart = beforeTemplate.lastIndexOf('\n', firstMatch.index) + 1;
      firstTask = cleanTaskText(trimAfterGuideText(beforeTemplate.slice(firstStart)));
    }
  }

  const tasks = [];
  tasks.push(fillRoundPlaceholders(firstTask || template, 1, total));
  for (let round = 2; round <= total; round += 1) {
    tasks.push(fillRoundPlaceholders(template, round, total));
  }
  return tasks.filter(Boolean);
}

function splitRoundHeadings(raw) {
  const text = String(raw || '').trim();
  const matches = [...text.matchAll(/(?:^|\n)([^\n]*R\d+\s*\/\s*\d+[^\n]*)/gi)];
  if (matches.length <= 1) return [];
  return matches.map((match, index) => {
    const start = match.index + (match[0].startsWith('\n') ? 1 : 0);
    const end = index + 1 < matches.length
      ? matches[index + 1].index + (matches[index + 1][0].startsWith('\n') ? 1 : 0)
      : text.length;
    return cleanTaskText(text.slice(start, end));
  }).filter(Boolean);
}

function parseTasks(raw) {
  const text = String(raw || '').trim();
  if (!text) return [];

  if (/\s*---\s*task\s*---\s*/i.test(text)) {
    return text
      .split(/\s*---\s*task\s*---\s*/gi)
      .map(cleanTaskText)
      .filter(Boolean);
  }

  const expanded = expandRoundTemplate(text);
  if (expanded.length) return expanded;

  const headingTasks = splitRoundHeadings(text);
  if (headingTasks.length) return headingTasks;

  return [cleanTaskText(text)].filter(Boolean);
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
        status: Date.now() - (tab.lastHeartbeat || 0) < PAGE_HEARTBEAT_ONLINE_MS ? (tab.status || '') : 'offline',
        role: tab.role || '',
        category: tab.category || '',
        round: `R${tab.currentRound || tab.round || 0}/${tab.total || 0}`,
        error: tab.lastError || '',
        heartbeatAgeSec: Math.max(0, Math.round((Date.now() - (tab.lastHeartbeat || 0)) / 1000)),
        title: tab.title || tab.url || ''
      }));
    console.table(rows);
    return;
  }

  if (cmd === 'tabs') {
    await enqueue('MULTI_REFRESH_TABS', { source }, !noWait);
    const status = await request('GET', '/status');
    const ext = status.extension || {};
    const tabs = ext.multiTabs?.tabs || {};
    const rows = Object.values(tabs)
      .filter(tab => /^https:\/\/(chatgpt\.com|chat\.openai\.com|lazymanchat\.com)\//.test(tab.url || ''))
      .sort((a, b) => (b.lastHeartbeat || 0) - (a.lastHeartbeat || 0))
      .map(tab => ({
        tabId: tab.tabId,
        selected: String(ext.multiTabs?.selectedTabId || ext.activeTabId || '') === String(tab.tabId) ? '*' : '',
        status: tab.status || '',
        category: tab.category || '',
        round: `R${tab.currentRound || tab.round || 0}/${tab.total || 0}`,
        title: tab.title || '',
        url: tab.url || ''
      }));
    console.table(rows);
    return;
  }

  if (cmd === 'select') {
    const tabId = Number(args[1]);
    if (!tabId) throw new Error('Missing tabId');
    await enqueue('MULTI_SET_TARGET', { tabId, source }, !noWait);
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

  if (cmd === 'category') {
    const category = args[1] || 'dynamic';
    await enqueue('RAW_MESSAGE', { message: { type: 'SP_SET_CATEGORY', category }, source }, !noWait);
    return;
  }

  if (cmd === 'category-load') {
    const category = args[1] || 'dynamic';
    const count = Number(args[2] || 12);
    await enqueue('RAW_MESSAGE', { message: { type: 'SP_LOAD_CATEGORY_TASKS', category, count }, source }, !noWait);
    return;
  }

  if (cmd === 'progress-md') {
    const output = args[1] ? path.resolve(process.cwd(), args[1]) : '';
    const result = await enqueue('RAW_MESSAGE', { message: { type: 'SP_EXPORT_PROGRESS_MD' }, source }, !noWait);
    const command = result?.command;
    const markdown = command?.result?.result?.markdown || command?.result?.markdown || '';
    const filename = command?.result?.result?.filename || command?.result?.filename || 'ty-f12-progress.md';
    if (!markdown) return;
    if (output) {
      fs.writeFileSync(output, markdown, 'utf8');
      console.log(`wrote ${output}`);
    } else {
      console.log(`--- ${filename} ---`);
      console.log(markdown);
    }
    return;
  }

  if (cmd === 'multi-load') {
    const tabId = Number(args[1]);
    const file = args[2];
    const index = Number(args[3] || 0);
    const category = args.slice(4).find(arg => arg && !arg.startsWith('-'));
    if (!tabId) throw new Error('Missing tabId');
    if (!file) throw new Error('Missing tasks file path');
    const fullPath = path.resolve(process.cwd(), file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const tasks = parseTasks(raw);
    if (!tasks.length) throw new Error('No tasks parsed');
    await enqueue('MULTI_COMMAND', { tabId, command: 'LOAD_TASK', tasks, index, category, source }, !noWait);
    return;
  }

  if (cmd === 'multi-mode') {
    const tabId = Number(args[1]);
    const completionMode = args[2] || 'text';
    const waitSeconds = Number(args[3] || 120);
    if (!tabId) throw new Error('Missing tabId');
    await enqueue('MULTI_COMMAND', {
      tabId,
      command: 'SET_COMPLETION_MODE',
      completionMode,
      imageWaitMs: Math.max(1, waitSeconds) * 1000,
      source
    }, !noWait);
    return;
  }

  if (cmd === 'multi-auto-chatgpt' || cmd === 'multi-auto-lazyman') {
    const tabId = Number(args[1]);
    if (!tabId) throw new Error('Missing tabId');
    const channel = cmd === 'multi-auto-chatgpt' ? 'chatgpt' : 'lazyman';
    await enqueue('MULTI_COMMAND', {
      tabId,
      command: 'SET_COMPLETION_MODE',
      completionMode: 'text',
      imageWaitMs: 120000,
      source
    }, true);
    await enqueue('MULTI_COMMAND', {
      tabId,
      command: 'AUTO_RUN',
      channel,
      source
    }, !noWait);
    return;
  }

  if (cmd === 'multi-image') {
    const tabId = Number(args[1]);
    const output = args[2] ? path.resolve(process.cwd(), args[2]) : '';
    if (!tabId) throw new Error('Missing tabId');
    if (!output) throw new Error('Missing output image path');
    const response = await enqueue('MULTI_COMMAND', {
      tabId,
      command: 'EXPORT_LATEST_IMAGE',
      source,
      returnPolicy: 'full'
    }, true);
    const command = response?.command;
    if (!command || command.status !== 'done') {
      throw new Error(`Image export command did not complete: ${command?.status || 'unknown'}`);
    }
    const exported = command.result?.result || command.result || {};
    if (!exported.ok || !exported.dataUrl) {
      throw new Error(exported.error || 'No image data returned');
    }
    const match = String(exported.dataUrl).match(/^data:([^;,]+)?(?:;charset=[^;,]+)?;base64,([\s\S]+)$/i);
    if (!match) throw new Error('Unsupported image data URL');
    const bytes = Buffer.from(match[2], 'base64');
    if (bytes.length < 10 * 1024) throw new Error(`Exported image is too small: ${bytes.length} bytes`);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    const temporary = `${output}.tmp`;
    fs.writeFileSync(temporary, bytes);
    fs.renameSync(temporary, output);
    console.log(JSON.stringify({
      ok: true,
      output,
      bytes: bytes.length,
      mime: match[1] || exported.mime || 'image/png',
      naturalWidth: exported.naturalWidth || null,
      naturalHeight: exported.naturalHeight || null,
      sourceUrl: exported.href || ''
    }, null, 2));
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
    'multi-panel': 'SHOW_PANEL',
    'multi-send': 'SEND_CURRENT',
    'multi-confirm': 'CONFIRM_CURRENT',
    'multi-archive': 'ARCHIVE_LATEST',
    'multi-dump': 'DUMP_TEXT',
    'multi-debug': 'DEBUG_DUMP',
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

if (require.main === module) {
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = {
  parseTasks,
  expandRoundTemplate,
  detectTemplateTotal,
  fillRoundPlaceholders
};
