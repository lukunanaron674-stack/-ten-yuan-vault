// core/error-snapshot.js — 错误快照系统 v0.9

function captureStateSnapshot(state) {
  if (!state) return null;
  return {
    schemaVersion: state.schemaVersion || 'unknown',
    activeTabId: state.activeTabId,
    activeUrl: state.activeUrl,
    activeTitle: state.activeTitle,
    running: state.running,
    stopped: state.stopped,
    manualPause: state.manualPause,
    leaseUntil: state.leaseUntil,
    lastStatus: state.lastStatus,
    index: state.index,
    total: state.total || (state.tasks ? state.tasks.length : 0),
    taskCount: state.tasks ? state.tasks.length : 0,
    carryPacketCount: state.carryPackets ? state.carryPackets.length : 0,
    errorCount: state.errors ? state.errors.length : 0,
    logCount: state.logs ? state.logs.length : 0,
    currentTask: state.tasks && state.index < state.tasks.length
      ? (state.tasks[state.index] || '').substring(0, 200)
      : '(none)',
    projectName: state.projectName || '',
    frameName: state.frameName || '',
    createdAt: state.createdAt,
    updatedAt: state.updatedAt
  };
}

function captureSelectorSnapshot(health) {
  if (!health) return null;
  return {
    input: health.input || false,
    sendButton: health.sendButton || false,
    stopButton: health.stopButton || false,
    assistantNode: health.assistantNode || false,
    generating: health.generating || false,
    url: health.url || '',
    title: health.title || ''
  };
}

function captureErrorSnapshot(state, health, workerStatus) {
  const recentLogs = (state.logs || []).slice(-20);
  const recentErrors = (state.errors || []).slice(-10);

  return {
    timestamp: new Date().toISOString(),
    state: captureStateSnapshot(state),
    selector: captureSelectorSnapshot(health),
    workerStatus: workerStatus || 'unknown',
    recentLogs,
    recentErrors,
    currentTaskIndex: state ? state.index : -1,
    currentTask: state && state.tasks && state.index < state.tasks.length
      ? state.tasks[state.index]
      : '(none)'
  };
}

function buildDebugReportMarkdown(state, health, workerStatus, triggerReason) {
  const snap = captureErrorSnapshot(state, health, workerStatus);

  const logsSection = (snap.recentLogs || [])
    .map(l => `  [${l.ts || ''}] [${l.level}] ${l.message}${l.detail ? ' - ' + l.detail : ''}`)
    .join('\n');

  const errorsSection = (snap.recentErrors || [])
    .map(e => `  [${e.ts || ''}] ${e.message}${e.detail ? ' - ' + e.detail : ''}`)
    .join('\n');

  return `# F12 Debug Report

**生成时间:** ${snap.timestamp}
**触发原因:** ${triggerReason || 'unknown'}
**Schema 版本:** ${snap.state?.schemaVersion}
**扩展版本:** v0.9

## 状态摘要

| 字段 | 值 |
|------|-----|
| activeTabId | ${snap.state?.activeTabId ?? '-'} |
| activeUrl | ${snap.state?.activeUrl ?? '-'} |
| running | ${snap.state?.running ?? '-'} |
| manualPause | ${snap.state?.manualPause ?? '-'} |
| lastStatus | ${snap.state?.lastStatus ?? '-'} |
| index | ${snap.state?.index ?? '-'} / ${snap.state?.total ?? '-'} |
| taskCount | ${snap.state?.taskCount ?? '-'} |
| carryPacketCount | ${snap.state?.carryPacketCount ?? '-'} |
| errorCount | ${snap.state?.errorCount ?? '-'} |
| leaseUntil | ${snap.state?.leaseUntil ?? '-'} |

## Selector 状态

| 选择器 | 状态 |
|--------|------|
| 输入框 | ${snap.selector?.input ? '✓' : '✗'} |
| 发送按钮 | ${snap.selector?.sendButton ? '✓' : '✗'} |
| 停止按钮 | ${snap.selector?.stopButton ? '✓' : '✗'} |
| 回复节点 | ${snap.selector?.assistantNode ? '✓' : '✗'} |

## Worker 状态

\`\`\`
${JSON.stringify(snap.workerStatus, null, 2)}
\`\`\`

## 当前任务

\`\`\`text
${snap.currentTask || '(none)'}
\`\`\`

## 最近日志 (20条)

\`\`\`
${logsSection || '(none)'}
\`\`\`

## 最近错误 (10条)

\`\`\`
${errorsSection || '(none)'}
\`\`\`
`;
}

function downloadDebugReport(markdown) {
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ty-f12-debug-${ts}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export {
  captureStateSnapshot,
  captureSelectorSnapshot,
  captureErrorSnapshot,
  buildDebugReportMarkdown,
  downloadDebugReport
};
