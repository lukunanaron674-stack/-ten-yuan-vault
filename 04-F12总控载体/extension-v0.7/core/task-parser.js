// core/task-parser.js — 任务解析器 v1.1
// 支持 ---TASK--- 元数据字段: type, returnPolicy, targetBrainSlot, id, title

const DEFAULT_TASK_COUNT = 10;

const VALID_TYPES = ['research', 'review', 'archive', 'carry', 'visual', 'story', 'anti', 'final'];
const VALID_RETURN_POLICIES = ['none', 'summary', 'full'];
const VALID_BRAIN_SLOTS = [
  'tenYuan.rules', 'tenYuan.relations',
  'dynamicChain.patterns',
  'fiveThemes.warehouse',
  'visual.styleSeeds',
  'story.oneSentenceSeeds',
  'errors.antiExamples',
  'f12.nextTasks'
];

function parseTaskMeta(taskText) {
  const meta = {
    type: 'research',
    returnPolicy: 'summary',
    targetBrainSlot: null,
    id: null,
    title: null
  };
  const body = taskText.replace(/^type:\s*(\S+)/im, (_, v) => { meta.type = VALID_TYPES.includes(v) ? v : 'research'; return ''; })
    .replace(/^returnPolicy:\s*(\S+)/im, (_, v) => { meta.returnPolicy = VALID_RETURN_POLICIES.includes(v) ? v : 'summary'; return ''; })
    .replace(/^targetBrainSlot:\s*(\S+)/im, (_, v) => { meta.targetBrainSlot = VALID_BRAIN_SLOTS.includes(v) ? v : null; return ''; })
    .replace(/^id:\s*(\S+)/im, (_, v) => { meta.id = v; return ''; })
    .replace(/^title:\s*(.+)/im, (_, v) => { meta.title = v.trim(); return ''; })
    .trim();
  meta.body = body;
  return meta;
}

function parseTasks(raw, options = {}) {
  const warnings = [];
  const text = (raw || '').trim();
  const separatorPattern = /\s*---\s*task\s*---\s*/i;
  let tasks = [];
  let parseMode = 'single';
  let metas = [];

  if (!text) {
    return { tasks: [], total: 0, parseMode: 'single', warnings, metas: [] };
  }

  if (separatorPattern.test(text)) {
    const parts = text.split(/\s*---\s*task\s*---\s*/gi).map(t => t.trim()).filter(Boolean);
    tasks = parts.map(p => { const m = parseTaskMeta(p); metas.push(m); return m.body; });
    parseMode = 'separator';
  } else {
    const roundParts = splitByRoundHeading(text);
    if (roundParts.length > 1) {
      tasks = roundParts;
      metas = roundParts.map(p => ({ type: 'research', returnPolicy: 'summary', targetBrainSlot: null, id: null, title: null, body: p }));
      parseMode = 'round-heading';
    } else if (options.generateFromIntent && detectRoundIntent(text)) {
      const total = Number(options.total) || detectRoundTotal(text) || DEFAULT_TASK_COUNT;
      tasks = generateDefaultTasks({ total, projectName: options.projectName, frameName: options.frameName, baseRules: text, taskType: options.taskType || 'research', returnPolicy: options.returnPolicy || 'summary' });
      metas = tasks.map(t => ({ type: options.taskType || 'research', returnPolicy: options.returnPolicy || 'summary', targetBrainSlot: null, id: null, title: null, body: t }));
      parseMode = 'generated';
    } else {
      tasks = [text];
      metas = [parseTaskMeta(text)];
      parseMode = 'single';
      if (detectRoundIntent(text)) {
        warnings.push('当前只解析出 1 个任务。若要 12 轮，请使用 ---TASK--- / ---task--- 分隔或点击生成12轮。');
      }
    }
  }

  tasks = tasks.filter(Boolean);
  console.log(`Parsed tasks: ${tasks.length} via ${parseMode}`);
  return { tasks, metas, total: tasks.length, parseMode, warnings };
}

function splitByRoundHeading(text) {
  const matches = [...text.matchAll(/(?:^|\n)\s*(?:【\s*)?(R\d+\s*\/\s*\d+[^】\n]*(?:】)?)/gi)];
  if (matches.length <= 1) return [];
  return matches.map((match, index) => {
    const start = match.index + (match[0].startsWith('\n') ? 1 : 0);
    const end = index + 1 < matches.length
      ? matches[index + 1].index + (matches[index + 1][0].startsWith('\n') ? 1 : 0)
      : text.length;
    return text.slice(start, end).trim();
  }).filter(Boolean);
}

function detectRoundIntent(text) {
  return /(?:生成|默认)?\s*\d+\s*轮|R\d+\s*\/\s*\d+|R12/i.test(text);
}

function detectRoundTotal(text) {
  const explicit = text.match(/(?:生成|默认)?\s*(\d+)\s*轮/);
  if (explicit) return Number(explicit[1]);
  const heading = text.match(/R\d+\s*\/\s*(\d+)/i);
  if (heading) return Number(heading[1]);
  if (/R12/i.test(text)) return 12;
  return null;
}

function joinTasks(tasks, metas) {
  if (metas && metas.length === tasks.length) {
    return tasks.map((t, i) => {
      const m = metas[i];
      let header = '';
      if (m.type && m.type !== 'research') header += `type: ${m.type}\n`;
      if (m.returnPolicy && m.returnPolicy !== 'summary') header += `returnPolicy: ${m.returnPolicy}\n`;
      if (m.targetBrainSlot) header += `targetBrainSlot: ${m.targetBrainSlot}\n`;
      if (m.id) header += `id: ${m.id}\n`;
      if (m.title) header += `title: ${m.title}\n`;
      return (header + '\n' + t).trim();
    }).join('\n\n---TASK---\n\n');
  }
  return tasks.join('\n\n---TASK---\n\n');
}

function filterByReturnPolicy(tasks, metas, policy) {
  if (!metas) return tasks;
  return tasks.filter((_, i) => {
    const m = metas[i] || {};
    if (policy === 'full') return m.returnPolicy === 'full';
    if (policy === 'summary') return m.returnPolicy !== 'none';
    return true; // 'all'
  });
}

function filterByType(tasks, metas, type) {
  if (!metas || type === 'all') return tasks;
  return tasks.filter((_, i) => (metas[i] || {}).type === type);
}

function generateDefaultTasks(input = DEFAULT_TASK_COUNT, projectName = '默认项目') {
  const opts = typeof input === 'object' ? input : { total: input, projectName };
  const count = Number(opts.total || opts.count || DEFAULT_TASK_COUNT);
  const pn = opts.projectName || projectName || '默认项目';
  const frameName = opts.frameName || '';
  const baseRules = opts.baseRules || '';
  const taskType = opts.taskType || 'research';
  const returnPolicy = opts.returnPolicy || 'summary';
  const tasks = [];
  for (let i = 1; i <= count; i++) {
    let task = `继续执行【${pn}】R${i}/${count}`;
    if (frameName) task += `｜${frameName}`;
    if (baseRules) task += `\n\n【基础规则】\n${baseRules}`;
    if (i % 5 === 0 || i === count) {
      task += '\n\n' + carryPacketInstruction(i, count);
    } else {
      task += '\n\n' + ordinaryCarryCacheInstruction(i);
    }
    task += `\n\n最后必须输出：TASK_DONE_R${i}`;
    tasks.push(task);
  }
  return tasks;
}

function carryPacketInstruction(round, total) {
  return `【五轮记忆承载要求】\n本轮是 R${round}，必须生成 R${Math.max(1, round - 4)}-R${round} 的记忆承载包。\n\n请输出：\n1. 五轮完成表\n2. 稳定结论\n3. 新增结构 / 新增子型\n4. 待验证灰矿\n5. 污染风险\n6. 下一组必须携带的上下文\n7. 下一组起手指令\n8. 建议写入的 Obsidian / GitHub 文件路径\n\n这不是普通总结，而是给下一组轮次继承的 CarryPacket。\n最后输出：CARRY_PACKET_R${Math.max(1, round - 4)}_R${round}_DONE`;
}

function ordinaryCarryCacheInstruction(round) {
  return `【承载数据缓存】\n请在断点包里额外输出：\n- 本轮可进入五轮承载包的稳定结论：\n- 本轮新增但未钉死的灰矿：\n- 本轮下次必须继承的信息：`;
}

function isCarryRound(round, total) {
  return round % 5 === 0 || round === total;
}

export { parseTasks, joinTasks, generateDefaultTasks, isCarryRound, parseTaskMeta, filterByReturnPolicy, filterByType, VALID_TYPES, VALID_RETURN_POLICIES, VALID_BRAIN_SLOTS, DEFAULT_TASK_COUNT };
