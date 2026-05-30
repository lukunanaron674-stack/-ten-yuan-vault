// core/task-templates.js v1.1 — 任务模板库 + 多框分工模板

const BRAIN_SLOT_TYPES = {
  'tenYuan.rules': { type: 'research', label: '十元关系采矿' },
  'tenYuan.relations': { type: 'research', label: '十元关系验证' },
  'dynamicChain.patterns': { type: 'research', label: '动态链母型采矿' },
  'fiveThemes.warehouse': { type: 'review', label: '五大主题归仓审稿' },
  'visual.styleSeeds': { type: 'visual', label: '视觉/风格采样' },
  'story.oneSentenceSeeds': { type: 'story', label: '故事种子' },
  'errors.antiExamples': { type: 'anti', label: '反例与误判清理' },
  'f12.nextTasks': { type: 'archive', label: '下一轮任务生成' }
};

const CARRY_CACHE = (round) => `【承载数据缓存】
请在断点包里额外输出：
- 本轮可进入五轮承载包的稳定结论：
- 本轮新增但未钉死的灰矿：
- 本轮下次必须继承的信息：`;

const CARRY_PACKET_INSTRUCTION = (round) => {
  const start = Math.max(1, round - 4);
  return `【五轮记忆承载要求】
本轮是 R${round}，必须生成 R${start}-R${round} 的记忆承载包。

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
最后输出：CARRY_PACKET_R${start}_R${round}_DONE`;
};

const FINAL_ARCHIVE_INSTRUCTION = `【最终总归档要求】
请整合所有 CarryPacket，生成：
1. 全轮次索引
2. 总稳定结论
3. 总结构表
4. 子型总表
5. 高银 / 金矿候选
6. 灰矿 / 风险 / 反例
7. 可交给中枢框的压缩版
8. 下一阶段建议
最后输出：FINAL_ARCHIVE_DONE`;

function createRoundTask({ projectName = '未命名项目', frameName = '默认框', round = 1, total = 10, baseRules = '', previousCarrySummary = '', taskType = 'research', returnPolicy = 'summary', targetBrainSlot = null }) {
  const isCarry = round % 5 === 0;
  const isFinal = round === total;

  let meta = `type: ${taskType}
returnPolicy: ${isCarry || isFinal ? 'full' : returnPolicy}`;
  if (targetBrainSlot) meta += `
targetBrainSlot: ${targetBrainSlot}`;

  let task = `继续执行【${projectName}】R${round}/${total}`;
  if (frameName) task += `｜${frameName}`;
  if (baseRules) task += '\n\n' + baseRules;
  if (previousCarrySummary && (isCarry || isFinal)) {
    task += `\n\n【本次需继承的承载包摘要】\n${previousCarrySummary}`;
  }
  if (!isCarry && !isFinal) {
    task += '\n\n' + CARRY_CACHE(round);
  }
  if (isCarry) {
    task += '\n\n' + CARRY_PACKET_INSTRUCTION(round);
    } else if (isFinal) {
    task += '\n\n' + FINAL_ARCHIVE_INSTRUCTION;
  }
  task += `\n\n最后必须输出：TASK_DONE_R${round}`;

  return meta + '\n\n' + task;
}

// ======== 多框分工模板 ========

const MULTI_FRAME_TEMPLATES = {
  'tenYuan.rules': {
    label: 'A框: 十元关系采矿',
    prompt: '请从以下作品中识别十元语义关系，输出关系公式和最小证据。优先补缺少案例的关系类型。',
    type: 'research',
    returnPolicy: 'full'
  },
  'dynamicChain.patterns': {
    label: 'B框: 动态链母型采矿',
    prompt: '请分析以下作品的动态链结构，找出回收/崩坏/扭曲/断链/停滞/反噬/换芯/循环/转承载/伪闭环。输出母型公式和分叉点。',
    type: 'research',
    returnPolicy: 'full'
  },
  'fiveThemes.warehouse': {
    label: 'C框: 五大主题归仓审稿',
    prompt: '请审查以下内容在五大主题中的归类是否正确，专门抓五维倒推十元的错误。输出归仓修正表。',
    type: 'review',
    returnPolicy: 'full'
  },
  'visual.styleSeeds': {
    label: 'D框: 视觉/风格采样',
    prompt: '请从以下内容提取可画的构图/光线/材质/姿态/角色关系，输出风格词和构图母题。特别注意没有AI味的方案。',
    type: 'visual',
    returnPolicy: 'full'
  },
  'story.oneSentenceSeeds': {
    label: 'E框: 故事种子',
    prompt: '请将以下动态链母型转成一句话故事，输出角色冲突、场景触发、可扩写等级。',
    type: 'story',
    returnPolicy: 'full'
  },
  'errors.antiExamples': {
    label: 'F框: 反例与误判清理',
    prompt: '请找出以下内容中不该入库的伪矿、旧规则污染、重复和弱证据，输出待删减清单和降权原因。',
    type: 'anti',
    returnPolicy: 'full'
  }
};

function generateMultiFrameTasks(assignment) {
  const tasks = [];
  for (const [slot, config] of Object.entries(MULTI_FRAME_TEMPLATES)) {
    if (!assignment[slot]) continue;
    const payload = typeof assignment[slot] === 'string' ? assignment[slot] : (assignment[slot].payload || '');
    if (!payload.trim()) continue;
    const meta = `type: ${config.type}
returnPolicy: ${config.returnPolicy}
targetBrainSlot: ${slot}`;
    tasks.push(meta + '\n\n' + config.prompt + '\n\n---\n\n' + payload + '\n\n最后必须输出：TASK_DONE_' + config.label);
  }
  return tasks;
}

function generateTemplate10(projectName = '默认项目', frameName = '默认框', taskType = 'research', returnPolicy = 'summary') {
  return Array.from({ length: 10 }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: 10, taskType, returnPolicy })
  );
}

function generateTemplate30(projectName = '默认项目', frameName = '默认框', taskType = 'research', returnPolicy = 'summary') {
  return Array.from({ length: 30 }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: 30, taskType, returnPolicy })
  );
}

function generateTemplate100(projectName = '默认项目', frameName = '默认框', taskType = 'research', returnPolicy = 'summary') {
  return Array.from({ length: 100 }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: 100, taskType, returnPolicy })
  );
}

function generateCustom(count, projectName = '默认项目', frameName = '默认框', taskType = 'research', returnPolicy = 'summary') {
  return Array.from({ length: count }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: count, taskType, returnPolicy })
  );
}

function isCarryRound(round, total) {
  return round % 5 === 0 || round === total;
}

export {
  createRoundTask,
  generateTemplate10,
  generateTemplate30,
  generateTemplate100,
  generateCustom,
  generateMultiFrameTasks,
  isCarryRound,
  BRAIN_SLOT_TYPES,
  MULTI_FRAME_TEMPLATES,
  CARRY_CACHE,
  CARRY_PACKET_INSTRUCTION,
  FINAL_ARCHIVE_INSTRUCTION
};
