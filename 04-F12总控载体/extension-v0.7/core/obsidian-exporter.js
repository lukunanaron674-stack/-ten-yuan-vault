// core/obsidian-exporter.js — Obsidian 回流工具 v0.9
// 不直接写本地文件。提供 URI / 下载 / 剪贴板三种安全方式。

const MAX_URI_CONTENT_LENGTH = 8000;

function safeEncodeContent(content) {
  if (!content) return '';
  const encoded = encodeURIComponent(content);
  if (encoded.length > MAX_URI_CONTENT_LENGTH) return null; // 太长不适合 URI
  return encoded;
}

function buildObsidianNewUri({ vault = 'ten-yuan-vault', file = '', content = '' } = {}) {
  const fileEnc = encodeURIComponent(file);
  let uri = `obsidian://new?vault=${encodeURIComponent(vault)}&file=${fileEnc}`;
  const safe = safeEncodeContent(content);
  if (safe) uri += `&content=${safe}`;
  return uri;
}

function buildObsidianAppendUri({ vault = 'ten-yuan-vault', file = '', content = '' } = {}) {
  const fileEnc = encodeURIComponent(file);
  const safe = safeEncodeContent(content);
  if (!safe) return buildObsidianNewUri({ vault, file, content: '' }); // Fallback
  return `obsidian://append?vault=${encodeURIComponent(vault)}&file=${fileEnc}&data=${safe}`;
}

function buildObsidianDailyUri({ vault = 'ten-yuan-vault', content = '' } = {}) {
  let uri = `obsidian://daily?vault=${encodeURIComponent(vault)}`;
  const safe = safeEncodeContent(content);
  if (safe) uri += `&data=${safe}`;
  return uri;
}

function buildObsidianUniqueUri({ vault = 'ten-yuan-vault', file = '', content = '' } = {}) {
  const fileEnc = encodeURIComponent(file);
  let uri = `obsidian://new?vault=${encodeURIComponent(vault)}&file=${fileEnc}`;
  const uniqueId = Date.now().toString(36);
  uri += `&x-success=${encodeURIComponent('obsidian://open?vault=' + encodeURIComponent(vault) + '&file=' + fileEnc)}`;
  return uri;
}

function buildVaultPathPreview({ vault = 'ten-yuan-vault', folder = '', filename = '' } = {}) {
  const fullPath = folder ? `${folder}/${filename}` : filename;
  return {
    vault,
    fullPath,
    uri: buildObsidianNewUri({ vault, file: fullPath }),
    displayPath: `${vault}/${fullPath}`
  };
}

function downloadObsidianMarkdown(markdown, filename) {
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function copyObsidianCommand(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return true;
  }
}

function buildObsidianWritePrompt({ vault = 'ten-yuan-vault', path = '', content = '' } = {}) {
  const uri = buildObsidianNewUri({ vault, file: path });
  const sizeOk = safeEncodeContent(content) !== null;

  return `=== Obsidian 写入提示 ===
Vault: ${vault}
Path: ${path}
${sizeOk ? 'URI (可直接点击):' : '内容过长，建议下载 .md 而非 URI:'}
${sizeOk ? uri : '(URI 不可用 — 内容超长)'}

方式 1: ${sizeOk ? '点击 URI 打开 Obsidian' : '下载 .md 后拖入 Obsidian'}
方式 2: 手动创建文件: ${path}
方式 3: 复制 Markdown 内容粘贴`;
}

function buildObsidianSuggestedPath(projectName = '未命名项目', frameName = '默认框', range = 'R001-R005') {
  return `99-归档包/${projectName}/${frameName}/carry/${range}-记忆承载包.md`;
}

export {
  MAX_URI_CONTENT_LENGTH,
  safeEncodeContent,
  buildObsidianNewUri,
  buildObsidianAppendUri,
  buildObsidianDailyUri,
  buildObsidianUniqueUri,
  buildVaultPathPreview,
  downloadObsidianMarkdown,
  copyObsidianCommand,
  buildObsidianWritePrompt,
  buildObsidianSuggestedPath
};
