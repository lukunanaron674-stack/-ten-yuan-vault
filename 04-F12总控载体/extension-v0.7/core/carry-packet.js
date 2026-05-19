// core/carry-packet.js — 五轮记忆承载包生成器 v0.8
// 每 5 轮生成 CarryPacket，不负责真实文件写入

// ======== 工具函数 ========

function isCarryRound(round, total) {
  return round % 5 === 0 || round === total;
}

function getCarryRange(round) {
  const start = Math.floor((round - 1) / 5) * 5 + 1;
  const end = Math.min(start + 4, round);
  return { start, end };
}

function pad(n) {
  return String(n).padStart(3, '0');
}

// ======== 路径构建 ========

function buildObsidianPath(projectName, frameName, range) {
  return `99-归档包/${projectName}/${frameName}/carry/${range}-记忆承载包.md`;
}

function buildGithubPath(projectName, frameName, range) {
  return `99-归档包/${projectName}/${frameName}/carry/${range}-记忆承载包.md`;
}

function buildFinalPath(projectName, frameName) {
  return `99-归档包/${projectName}/${frameName}/总归档.md`;
}

// ======== CarryPacket Markdown 生成 ========

function buildCarryPacketMarkdown(state, { projectName = '未命名项目', frameName = '默认框' } = {}) {
  const range = getCarryRange(state.index + 1);
  const prevPacket = (state.carryPackets && state.carryPackets.length > 0)
    ? state.carryPackets[state.carryPackets.length - 1].range
    : 'none';

  const now = new Date().toISOString();
  const rangeStr = `R${pad(range.start)}-R${pad(range.end)}`;

  return `---
type: f12-carry-packet
project: ${projectName}
frame: ${frameName}
range: ${rangeStr}
round_from: ${range.start}
round_to: ${range.end}
status: carry
source: f12-v0.8
created: ${now}
previous_packet: ${prevPacket}
next_start: R${pad(range.end + 1)}
---

# ${projectName}｜${rangeStr} 记忆承载包

关联：
- [[F12总控载体蓝图]]
- [[v0.4-lite-小狗灯]]
- [[v0.6-五轮记忆接力器]]
- [[v0.7-Chrome插件总控架构]]

## 1. 本组任务范围

- 本组轮次：${rangeStr}
- 本组目标：
- 本组处理对象：

## 2. 已完成内容

| 轮次 | 完成内容 | 可保留结论 | 是否需要回看 |
|---|---|---|---|

## 3. 当前稳定结论

（只写已经稳定、可传给下一组的结论。）

## 4. 新增结构 / 新增子型

| 名称 | 来源轮次 | 说明 | 稳定度 |
|---|---|---|---|

## 5. 待验证 / 灰矿

（不能直接转正、但值得保留的内容。）

## 6. 污染风险

（本组出现过的误判风险。）

## 7. 下一组必须携带的上下文

（击鼓传花核心：下一组必须知道的材料。）

## 8. 下一组起手指令

\`\`\`text
继续执行【${projectName}】R${pad(range.end + 1)}/总轮数。
必须继承 ${rangeStr} 记忆承载包：
- 稳定结论：...
- 新增子型：...
- 待验证：...
- 下一步从 ... 开始。
\`\`\`

## 9. 写入位置

\`\`\`text
建议写入：${buildObsidianPath(projectName, frameName, rangeStr)}
\`\`\`
`;
}

function buildFinalArchiveMarkdown(state, { projectName = '未命名项目', frameName = '默认框' } = {}) {
  const packets = state.carryPackets || [];
  const totalRounds = state.index;
  const packetList = packets.map(p =>
    `| ${p.range} | | ${p.suggestedPath || buildObsidianPath(projectName, frameName, p.range)} |`
  ).join('\n');

  return `---
type: f12-final-archive
project: ${projectName}
frame: ${frameName}
range: R001-R${pad(totalRounds)}
status: final
source: f12-v0.8
created: ${new Date().toISOString()}
carry_packet_count: ${packets.length}
---

# ${projectName}｜总归档

## 1. 全轮次索引

| 承载包 | 轮次范围 | 核心产出 | 文件路径 |
|---|---|---|---|
${packetList}

## 2. 总稳定结论

## 3. 总结构表

## 4. 子型总表

## 5. 高银 / 金矿候选

## 6. 灰矿 / 风险 / 反例

## 7. 可交给中枢框的压缩版

## 8. 下一阶段建议
`;
}

function buildNextRoundPrompt(packet) {
  if (!packet) return '（无上一组承载包）';

  const lines = (packet.markdown || '').split('\n');
  // 提取稳定结论段落
  let stableIdx = lines.findIndex(l => l.startsWith('## 3. 当前稳定结论'));
  let nextIdx = lines.findIndex(l => l.startsWith('## 4. 新增结构'));
  let stable = '';
  if (stableIdx >= 0 && nextIdx > stableIdx) {
    stable = lines.slice(stableIdx, nextIdx).filter(l => l.trim() && !l.startsWith('##')).join('\n').trim();
  }
  // 提取下一组起手指令
  let promptIdx = lines.findIndex(l => l.includes('下一组起手指令'));
  let prompt = '';
  if (promptIdx >= 0) {
    prompt = lines.slice(promptIdx + 1, promptIdx + 10).join('\n').trim();
  }

  return `${packet.range} | 稳定结论: ${stable.substring(0, 100)}... | 起手: ${prompt.substring(0, 100)}...`;
}

// ======== 记录 CarryPacket ========

function recordCarryPacket(state, markdown, projectName = '未命名项目', frameName = '默认框') {
  const range = getCarryRange(state.index + 1);
  const rangeStr = `R${pad(range.start)}-R${pad(range.end)}`;
  const suggestedPath = buildObsidianPath(projectName, frameName, rangeStr);

  const packet = {
    range: rangeStr,
    round_from: range.start,
    round_to: range.end,
    status: 'generated',
    markdown,
    suggestedPath,
    project: projectName,
    frame: frameName,
    createdAt: new Date().toISOString()
  };

  if (!state.carryPackets) state.carryPackets = [];
  state.carryPackets.push(packet);
  return packet;
}

// ======== Obsidian URI ========

function obsidianNewUri(vaultName, folder, filename) {
  const path = encodeURIComponent(`${folder}/${filename}`);
  return `obsidian://new?vault=${encodeURIComponent(vaultName)}&file=${path}`;
}

function obsidianAppendUri(vaultName, filePath, content) {
  const file = encodeURIComponent(filePath);
  const data = encodeURIComponent(content);
  return `obsidian://append?vault=${encodeURIComponent(vaultName)}&file=${file}&data=${data}`;
}

export {
  isCarryRound,
  getCarryRange,
  buildObsidianPath,
  buildGithubPath,
  buildFinalPath,
  buildCarryPacketMarkdown,
  buildFinalArchiveMarkdown,
  buildNextRoundPrompt,
  recordCarryPacket,
  obsidianNewUri,
  obsidianAppendUri
};
