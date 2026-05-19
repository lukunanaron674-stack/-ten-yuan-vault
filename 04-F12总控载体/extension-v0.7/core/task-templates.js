// core/task-templates.js — 任务模板库
// 支持 10/30/100 轮默认模板 + 自定义项目生成器
// 由 sidepanel.js 通过 <script type="module"> import

// ======== 承载轮指令模板 ========

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

// ======== 单轮任务生成 ========

function createRoundTask({ projectName = '未命名项目', frameName = '默认框', round = 1, total = 10, baseRules = '', previousCarrySummary = '' }) {
  const isCarry = round % 5 === 0;
  const isFinal = round === total;

  let task = `继续执行【${projectName}】R${round}/${total}`;

  if (frameName) task += `｜${frameName}`;
  if (baseRules) task += '\n\n' + baseRules;

  // 上一组承载包摘要
  if (previousCarrySummary && (isCarry || isFinal)) {
    task += `\n\n【本次需继承的承载包摘要】\n${previousCarrySummary}`;
  }

  // 普通轮承载缓存
  if (!isCarry && !isFinal) {
    task += '\n\n' + CARRY_CACHE(round);
  }

  // 五轮承载
  if (isCarry) {
    task += '\n\n' + CARRY_PACKET_INSTRUCTION(round);
  }

  // 最终归档
  if (isFinal) {
    task += '\n\n' + FINAL_ARCHIVE_INSTRUCTION;
  }

  task += `\n\n最后必须输出：TASK_DONE_R${round}`;

  return task;
}

// ======== 批量模板生成 ========

function generateTemplate10(projectName = '默认项目', frameName = '默认框') {
  return Array.from({ length: 10 }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: 10 })
  );
}

function generateTemplate30(projectName = '默认项目', frameName = '默认框') {
  return Array.from({ length: 30 }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: 30 })
  );
}

function generateTemplate100(projectName = '默认项目', frameName = '默认框') {
  return Array.from({ length: 100 }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: 100 })
  );
}

function generateCustom(count, projectName = '默认项目', frameName = '默认框') {
  return Array.from({ length: count }, (_, i) =>
    createRoundTask({ projectName, frameName, round: i + 1, total: count })
  );
}

// ======== 工具 ========
function isCarryRound(round, total) {
  return round % 5 === 0 || round === total;
}

export {
  createRoundTask,
  generateTemplate10,
  generateTemplate30,
  generateTemplate100,
  generateCustom,
  isCarryRound,
  CARRY_CACHE,
  CARRY_PACKET_INSTRUCTION,
  FINAL_ARCHIVE_INSTRUCTION
};
