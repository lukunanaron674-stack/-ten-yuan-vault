// core/task-parser.js — 任务解析器
// 支持 ---TASK--- / ---task--- 分隔、默认任务生成、五轮承载轮注入

const DEFAULT_TASK_COUNT = 10;

function parseTasks(raw, options = {}) {
  const warnings = [];
  const text = (raw || '').trim();
  const separatorPattern = /\s*---\s*task\s*---\s*/i;
  let tasks = [];
  let parseMode = 'single';

  if (!text) {
    return { tasks: [], total: 0, parseMode: 'single', warnings };
  }

  if (separatorPattern.test(text)) {
    tasks = text.split(/\s*---\s*task\s*---\s*/gi).map(t => t.trim()).filter(Boolean);
    parseMode = 'separator';
  } else {
    const roundParts = splitByRoundHeading(text);
    if (roundParts.length > 1) {
      tasks = roundParts;
      parseMode = 'round-heading';
    } else if (options.generateFromIntent && detectRoundIntent(text)) {
      const total = Number(options.total) || detectRoundTotal(text) || DEFAULT_TASK_COUNT;
      tasks = generateDefaultTasks({ total, projectName: options.projectName, frameName: options.frameName, baseRules: text });
      parseMode = 'generated';
    } else {
      tasks = [text];
      parseMode = 'single';
      if (detectRoundIntent(text)) {
        warnings.push('当前只解析出 1 个任务。若要 12 轮，请使用 ---TASK--- / ---task--- 分隔或点击生成12轮。');
      }
    }
  }

  tasks = tasks.filter(Boolean);
  console.log(`Parsed tasks: ${tasks.length} via ${parseMode}`);
  return { tasks, total: tasks.length, parseMode, warnings };
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

function joinTasks(tasks) {
  return tasks.join('\n\n---TASK---\n\n');
}

function generateDefaultTasks(input = DEFAULT_TASK_COUNT, projectName = '默认项目') {
  const opts = typeof input === 'object' ? input : { total: input, projectName };
  const count = Number(opts.total || opts.count || DEFAULT_TASK_COUNT);
  const pn = opts.projectName || projectName || '默认项目';
  const frameName = opts.frameName || '';
  const baseRules = opts.baseRules || '';
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
  return `【五轮记忆承载要求】
本轮是 R${round}，必须生成 R${Math.max(1, round - 4)}-R${round} 的记忆承载包。

请输出：
1. 五轮完成表
2. 稳定结论
3. 新增结构 / 新增子型
4. 待验证灰矿
5. 污染风险
6. 下一组必须携带的上下文
7. 下一组起手指令
8. 建议写入的 Obsidian / GitHub 文件路径

这不是普通总结，而是给下一组轮次继承的 CarryPacket。
最后输出：CARRY_PACKET_R${Math.max(1, round - 4)}_R${round}_DONE`;
}

function ordinaryCarryCacheInstruction(round) {
  return `【承载数据缓存】
请在断点包里额外输出：
- 本轮可进入五轮承载包的稳定结论：
- 本轮新增但未钉死的灰矿：
- 本轮下次必须继承的信息：`;
}

function isCarryRound(round, total) {
  return round % 5 === 0 || round === total;
}

export { parseTasks, joinTasks, generateDefaultTasks, isCarryRound, DEFAULT_TASK_COUNT };
