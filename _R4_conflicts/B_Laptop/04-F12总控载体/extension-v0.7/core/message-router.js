// core/message-router.js — 消息路由到 activeTab v0.9
// background.js 调用此模块与 content.js 通信

async function sendToActiveTab(tabId, message, timeoutMs = 15000) {
  if (tabId == null) throw new Error('No activeTabId');

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Content script response timeout'));
    }, timeoutMs);

    chrome.tabs.sendMessage(tabId, message)
      .then(result => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

async function pingWorker(tabId) {
  try {
    const result = await sendToActiveTab(tabId, { type: 'PING' }, 5000);
    return { ok: true, ...result };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function getPageStatus(tabId) {
  try {
    const result = await sendToActiveTab(tabId, { type: 'GET_PAGE_STATUS' }, 5000);
    return { ok: true, ...result };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function executeTaskOnWorker(tabId, task, index, total, timeoutMs = 15 * 60 * 1000) {
  return sendToActiveTab(tabId, {
    type: 'EXECUTE_TASK',
    task,
    index,
    total
  }, timeoutMs);
}

async function stopWorker(tabId) {
  try {
    await chrome.tabs.sendMessage(tabId, { type: 'WORKER_STOP' });
  } catch (e) {
    // worker 可能未加载，忽略
  }
}

async function activateWorker(tabId) {
  try {
    await chrome.tabs.sendMessage(tabId, { type: 'WORKER_ACTIVATE', tabId });
  } catch (e) {
    // worker 可能未加载，忽略
  }
}

async function getCurrentActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length === 0) throw new Error('No active tab found');
  return tabs[0];
}

async function getTabById(tabId) {
  return await chrome.tabs.get(tabId);
}

export {
  sendToActiveTab,
  pingWorker,
  getPageStatus,
  executeTaskOnWorker,
  stopWorker,
  activateWorker,
  getCurrentActiveTab,
  getTabById
};
