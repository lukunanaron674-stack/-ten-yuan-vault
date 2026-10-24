// core/logger.js — 日志工具
// 统一日志格式，限制条数，防止 storage 膨胀

const MAX_LOGS = 200;

function logMessage(state, level, message, detail = '') {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    detail
  };
  console.log(`[F12 ${level}]`, message, detail || '');
  if (!state.logs) state.logs = [];
  state.logs.push(entry);
  // 剪切旧日志
  if (state.logs.length > MAX_LOGS) {
    state.logs = state.logs.slice(-MAX_LOGS);
  }
}

function logInfo(state, message, detail) {
  logMessage(state, 'INFO', message, detail);
}

function logWarn(state, message, detail) {
  logMessage(state, 'WARN', message, detail);
}

function logError(state, message, detail) {
  logMessage(state, 'ERROR', message, detail);
}

function logDebug(state, message, detail) {
  logMessage(state, 'DEBUG', message, detail);
}

export { logInfo, logWarn, logError, logDebug, MAX_LOGS };
