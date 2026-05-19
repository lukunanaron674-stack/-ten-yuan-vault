// core/exporter.js — 导出器 v0.8
// 支持导出/导入 state JSON、CarryPacket Markdown、日志，备份恢复

function exportStateJson(state) {
  const exportData = {
    version: 'v0.8',
    exportedAt: new Date().toISOString(),
    controllerSessionId: state.controllerSessionId,
    projectName: state.projectName || '',
    frameName: state.frameName || '',
    activeTabId: state.activeTabId,
    activeUrl: state.activeUrl,
    activeTitle: state.activeTitle || '',
    running: state.running,
    stopped: state.stopped,
    manualPause: state.manualPause,
    lastStatus: state.lastStatus,
    tasks: state.tasks,
    index: state.index,
    total: state.total || state.tasks?.length || 0,
    errors: state.errors || [],
    logs: state.logs,
    carryPackets: (state.carryPackets || []).map(p => ({
      range: p.range,
      round_from: p.round_from,
      round_to: p.round_to,
      status: p.status,
      suggestedPath: p.suggestedPath,
      project: p.project,
      frame: p.frame,
      createdAt: p.createdAt
    }))
  };
  return JSON.stringify(exportData, null, 2);
}

function exportLogs(state) {
  const logs = state.logs || [];
  return JSON.stringify({
    version: 'v0.8',
    exportedAt: new Date().toISOString(),
    count: logs.length,
    logs
  }, null, 2);
}

function exportAllCarryPackets(state) {
  const packets = state.carryPackets || [];
  if (packets.length === 0) return '# 无 CarryPacket';

  const header = `# F12 全部 CarryPacket 导出
生成时间: ${new Date().toISOString()}
项目: ${state.projectName || '未命名'}
框: ${state.frameName || '默认'}
数量: ${packets.length}

---

`;

  return header + packets.map((p, i) =>
    `## ${i + 1}. ${p.range}\n\n${p.markdown || '(无内容)'}`
  ).join('\n\n---\n\n');
}

function downloadFile(content, filename, mimeType = 'application/json') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadState(state) {
  const json = exportStateJson(state);
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  downloadFile(json, `ty-f12-state-${ts}.json`, 'application/json');
}

function downloadCarryPacket(markdown, rangeStr) {
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  downloadFile(markdown, `ty-f12-carry-${rangeStr}-${ts}.md`, 'text/markdown');
}

function downloadLogs(state) {
  const json = exportLogs(state);
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  downloadFile(json, `ty-f12-logs-${ts}.json`, 'application/json');
}

function downloadAllCarryPackets(state) {
  const md = exportAllCarryPackets(state);
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  downloadFile(md, `ty-f12-all-carry-${ts}.md`, 'text/markdown');
}

// ======== 导入 ========

async function importStateJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.version || !data.tasks) {
          reject(new Error('无效的 state.json 格式'));
          return;
        }
        resolve(data);
      } catch (err) {
        reject(new Error('JSON 解析失败: ' + err.message));
      }
    };
    reader.onerror = () => reject(new Error('文件读取失败'));
    reader.readAsText(file);
  });
}

// ======== 备份并重置 ========

function backupBeforeReset(state) {
  // 先下载备份
  downloadState(state);
  return true;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  }
}

export {
  exportStateJson,
  exportLogs,
  exportAllCarryPackets,
  downloadFile,
  downloadState,
  downloadCarryPacket,
  downloadLogs,
  downloadAllCarryPackets,
  importStateJson,
  backupBeforeReset,
  copyToClipboard
};
