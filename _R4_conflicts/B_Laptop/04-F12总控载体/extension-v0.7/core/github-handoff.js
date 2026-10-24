// core/github-handoff.js — GitHub 回流准备工作 v0.9
// 不保存 token，不调用 API。只生成写入工单和 manifest。

function buildGithubSuggestedPath(projectName = '未命名项目', frameName = '默认框', range = 'R001-R005') {
  return `99-归档包/${projectName}/${frameName}/carry/${range}-记忆承载包.md`;
}

function buildGithubFinalPath(projectName = '未命名项目', frameName = '默认框') {
  return `99-归档包/${projectName}/${frameName}/总归档.md`;
}

function buildManifestPath(projectName = '未命名项目', frameName = '默认框') {
  return `99-归档包/${projectName}/${frameName}/_manifest/HEAD.json`;
}

function buildGithubCommitMessage(packet) {
  const range = packet?.range || 'R???-R???';
  const project = packet?.project || '未知项目';
  return `f12: carry-packet ${range} [${project}]`;
}

// ======== 单个写入工单 ========

function buildGithubWritePrompt({ repo = 'owner/repo', path = '', content = '', message = '', branch = 'main' } = {}) {
  return `=== GitHub 写入工单（新建文件）===

repo: ${repo}
path: ${path}
branch: ${branch}
commit message: ${message}

--- 内容 ---
\`\`\`markdown
${content}
\`\`\`

--- Codex 指令 ---
请将以上内容写入 ${repo} 的 ${path}`;
}

// ======== 批量写入工单 ========

function buildBatchWritePrompt({ repo = 'owner/repo', branch = 'main', items = [] } = {}) {
  const itemList = items.map((item, i) =>
    `### ${i + 1}. ${item.range || item.path}
- path: ${item.path}
- commit: ${item.message || 'f12: batch-archive'}
- 内容行数: ${(item.content || '').split('\n').length}`
  ).join('\n');

  return `=== GitHub 批量写入工单 ===
repo: ${repo}
branch: ${branch}
文件数: ${items.length}
生成时间: ${new Date().toISOString()}

${itemList}

## 写入顺序
${items.map((_, i) => `${i + 1}. 先写 carry packet，如有冲突则更新`).join('\n')}
最后写总归档。

## Codex 指令
请按顺序将以上 ${items.length} 个文件写入 ${repo}。
每写入一个文件后等待成功再写下一个，避免并行冲突。`;
}

// ======== HEAD manifest ========

function buildManifestPatch(state, packets) {
  const now = new Date().toISOString();
  const files = (packets || []).map(p => ({
    path: p.suggestedPath || buildGithubSuggestedPath(state?.projectName, state?.frameName, p.range),
    range: p.range,
    status: p.status,
    createdAt: p.createdAt
  }));

  files.push({
    path: buildGithubFinalPath(state?.projectName, state?.frameName),
    range: 'final',
    status: 'pending',
    createdAt: now
  });

  return JSON.stringify({
    project: state?.projectName || '未命名',
    frame: state?.frameName || '默认',
    updatedAt: now,
    totalRounds: state?.index || 0,
    schemaVersion: '0.9.0',
    files
  }, null, 2);
}

// ======== Codex 完整归档指令 ========

function buildCodexWorkOrder({ state = null, packets = [], repo = 'owner/repo', branch = 'main' } = {}) {
  const project = state?.projectName || '未命名项目';
  const frame = state?.frameName || '默认框';
  const vault = 'ten-yuan-vault';

  const carryItems = (packets || []).map(p => ({
    path: buildGithubSuggestedPath(project, frame, p.range),
    range: p.range,
    message: buildGithubCommitMessage({ range: p.range, project }),
    content: p.markdown || ''
  }));

  return `# F12 归档写入指令

生成: ${new Date().toISOString()}
项目: ${project} | 框: ${frame}
轮次: R1-R${state?.index || 0}
CarryPacket: ${carryItems.length} 个

## GitHub 写入

\`\`\`
repo: ${repo}
branch: ${branch}
\`\`\`

${carryItems.map((item, i) => `### ${i + 1}. ${item.range}
- **path:** ${item.path}
- **commit:** ${item.message}
- 内容已在剪贴板`).join('\n\n')}

### 最后：总归档
- **path:** ${buildGithubFinalPath(project, frame)}
- **commit:** f12: final-archive [${project}]

### HEAD manifest
- **path:** ${buildManifestPath(project, frame)}
- 记录所有文件索引

## Obsidian 同步

- **vault:** ${vault}
- **文件夹:** 99-归档包/${project}/${frame}/carry/

建议用 Codex 执行以上写入。`;
}

function buildGithubHandoffMarkdown(state, packets, repo) {
  if (!packets || packets.length === 0) return '# 无 CarryPacket 待写入';

  const items = packets.map(p => ({
    path: buildGithubSuggestedPath(state?.projectName || '未命名', state?.frameName || '默认', p.range),
    range: p.range,
    message: buildGithubCommitMessage({ range: p.range, project: state?.projectName }),
    content: p.markdown || ''
  }));

  return `# F12 归档手递文件

生成: ${new Date().toISOString()}
项目: ${state?.projectName || '未命名'} | 框: ${state?.frameName || '默认'}
数量: ${items.length}

---

${items.map((item, i) => `## ${i + 1}. ${item.range}

- **repo:** ${repo}
- **path:** ${item.path}
- **commit:** ${item.message}

\`\`\`markdown
${(item.content || '').substring(0, 300)}${item.content && item.content.length > 300 ? '\n...' : ''}
\`\`\`
`).join('\n---\n')}

## 写入顺序

1. 先逐一写入各 CarryPacket
2. 再写入总归档
3. 最后更新 HEAD manifest
`;
}

export {
  buildGithubSuggestedPath,
  buildGithubFinalPath,
  buildManifestPath,
  buildGithubCommitMessage,
  buildGithubWritePrompt,
  buildBatchWritePrompt,
  buildManifestPatch,
  buildCodexWorkOrder,
  buildGithubHandoffMarkdown
};

