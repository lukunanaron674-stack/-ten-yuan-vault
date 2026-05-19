// content.js — F12 分页工蜂
// 默认沉睡，只响应 background.js 生成的命令
// 不显示完整总控面板，只显示状态胶囊

(() => {
  const WORKER_ID = 'TY_F12_WORKER_V07';
  const CAPSULE_ID = 'TY_F12_CAPSULE_V07';
  const CHANNEL_NAME = 'ten-yuan-f12-v1';

  // 防止重复注入
  if (window[WORKER_ID]) return;

  let isActivated = false;
  let isRunning = false;
  let shouldStop = false;
  let agentStatus = 'online';
  let agentTabId = sessionStorage.getItem('TY_F12_AGENT_TAB_ID') || ('agent-' + Date.now() + '-' + Math.random().toString(16).slice(2));
  let agentTasks = [];
  let agentIndex = 0;
  let autoTimer = null;
  sessionStorage.setItem('TY_F12_AGENT_TAB_ID', agentTabId);
  const agentChannel = safeBroadcastChannel(CHANNEL_NAME);

  function safeBroadcastChannel(name) {
    try { return new BroadcastChannel(name); } catch { return null; }
  }

  function agentPayload(extra = {}) {
    const total = agentTasks.length;
    const currentRound = total > 0 ? Math.min(agentIndex + 1, total) : 0;
    return {
      source: 'ten-yuan-f12-agent',
      tabId: agentTabId,
      url: location.href,
      title: document.title,
      status: agentStatus,
      currentRound,
      total,
      lastHeartbeat: Date.now(),
      ...extra
    };
  }

  function broadcastAgent(type, extra = {}) {
    const payload = { type, ...agentPayload(extra) };
    if (agentChannel) agentChannel.postMessage(payload);
    chrome.runtime.sendMessage({ ...payload, type: 'AGENT_' + type }).catch(() => {});
  }

  function setAgentStatus(status, message) {
    agentStatus = status;
    if (message) updateCapsule(status === 'idle' ? 'activated' : status, message);
    broadcastAgent('HEARTBEAT');
  }

  // ======== Adapter functions (inline for content script isolation) ========

  function findInput() {
    const selectors = [
      '#prompt-textarea',
      'div[contenteditable="true"][role="textbox"]',
      'div[contenteditable="true"]',
      'textarea',
      '[role="textbox"]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && visible(el)) return el;
    }
    return null;
  }

  function visible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return false;
    const style = getComputedStyle(el);
    return style.visibility !== 'hidden' && style.display !== 'none';
  }

  function findSendButton() {
    const selectors = [
      '[data-testid="send-button"]',
      '[data-testid="composer-submit-button"]',
      'button[aria-label*="Send"]',
      'button[aria-label*="send"]',
      'button[aria-label*="发送"]',
      'button[type="submit"]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && visible(el)) return el;
    }
    const input = findInput(); console.log('[F12 Worker] findInput:', !!input);
    if (input) {
      const form = input.closest('form');
      if (form) {
        const buttons = [...form.querySelectorAll('button')].filter(visible);
        if (buttons.length > 0) return buttons[buttons.length - 1];
      }
    }
    return null;
  }

  function findStopButton() {
    const selectors = [
      '[data-testid="stop-button"]',
      'button[aria-label*="Stop"]',
      'button[aria-label*="stop"]',
      'button[aria-label*="停止"]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && visible(el)) return el;
    }
    return null;
  }

  function isGenerating() {
    return !!findStopButton();
  }

  function getLastAssistantNode() {
    const selectors = [
      'article[data-testid*="conversation-turn"] [data-message-author-role="assistant"]',
      '[data-message-author-role="assistant"]',
      'article[data-testid*="turn"]',
      '.agent-turn',
      '[class*="assistant"]'
    ];
    for (const sel of selectors) {
      const nodes = document.querySelectorAll(sel);
      if (nodes.length > 0) return nodes[nodes.length - 1];
    }
    return null;
  }

  function getLastAssistantText() {
    const node = getLastAssistantNode();
    if (node) return node.innerText || '';
    // Fallback: 查找页面上所有可能的消息节点
    const allMsgs = document.querySelectorAll('[data-message-author-role="assistant"], .markdown, [class*="prose"], [class*="message"]');
    let lastText = '';
    for (const m of allMsgs) {
      const t = m.innerText || '';
      if (t.length > lastText.length) lastText = t;
    }
    return lastText;
  }

  function healthCheck() {
    return {
      input: !!findInput(),
      sendButton: !!findSendButton(),
      stopButton: !!findStopButton(),
      assistantNode: !!getLastAssistantNode(),
      generating: isGenerating(),
      url: window.location.href,
      title: document.title
    };
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ======== Task execution ========

  async function executeTask(task, options = {}) {
    console.log('[F12 Worker] EXECUTE_TASK received, R' + ((options.index||0)+1), 'task length:', (task||'').length);
    if (isRunning) return { ok: false, error: 'Already executing a task' };
    if (shouldStop) { shouldStop = false; return { ok: false, error: 'Stop flag was set' }; }

    isRunning = true; console.log('[F12 Worker] executeTask: start');
    updateCapsule('running', 'Running...');
    report('TASK_START', `Start R${(options.index || 0) + 1}`);

    try {
      // 1. 找输入框
      const input = findInput(); console.log('[F12 Worker] findInput:', !!input);
      if (!input) {
        isRunning = false;
        updateCapsule('error', 'No input');
        report('ERROR', 'Input not found');
        return { ok: false, error: 'Input element not found' };
      }

      // 2. 填文本
      try {
        if (input.tagName === 'TEXTAREA' || input.tagName === 'INPUT') {
          // React 需要 native setter
          const nativeSetter = Object.getOwnPropertyDescriptor(
            HTMLTextAreaElement.prototype, 'value'
          )?.set || Object.getOwnPropertyDescriptor(
            HTMLInputElement.prototype, 'value'
          )?.set;
          if (nativeSetter) {
            nativeSetter.call(input, task);
          } else {
            input.value = task;
          }
          console.log('[F12 Worker] filling text...'); input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          // contenteditable
          input.focus();
          input.textContent = '';
          document.execCommand('insertText', false, task);
          console.log('[F12 Worker] filling text...'); input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      } catch (e) {
        isRunning = false;
        updateCapsule('error', 'Fill failed');
        report('ERROR', 'Failed to fill input: ' + e.message);
        return { ok: false, error: 'Failed to fill input: ' + e.message };
      }

      // 3. 找发送按钮
      await sleep(500);
      const sendBtn = findSendButton(); console.log('[F12 Worker] findSendButton:', !!sendBtn);
      if (!sendBtn) {
        isRunning = false;
        updateCapsule('paused', 'No send btn');
        report('ERROR', 'Send button not found');
        // 不清理输入框！
        return { ok: false, error: 'Send button not found. Input preserved for manual send.' };
      }

      // 4. 点击发送
      console.log('[F12 Worker] clicking send...'); sendBtn.click();
      updateCapsule('waiting', 'Waiting reply...');
      report('SENT', 'Task sent, waiting for reply');

      // 5. 等待回复完成
      console.log('[F12 Worker] waiting for done...'); const result = await waitForDone(); console.log('[F12 Worker] waitDone result:', result);
      if (shouldStop) {
        shouldStop = false;
        isRunning = false;
        updateCapsule('stopped', 'Stopped');
        report('STOPPED', 'Stopped by user');
        return { ok: false, error: 'Stopped by user' };
      }

      if (result.done) {
        isRunning = false;
        setAgentStatus('idle', 'Idle');
        updateCapsule('done', 'Round complete');
        report('DONE', 'Reply done');
        const payload = {
          ok: true,
          status: 'done',
          text: result.text,
          task: String(task || '').slice(0, 2000),
          round: (options.index || 0) + 1,
          total: options.total || agentTasks.length || 0
        };
        broadcastAgent('RESULT', { status: 'idle', lastMessage: result.text, result: payload });
        return payload;
      } else {
        isRunning = false;
        setAgentStatus('paused', 'Timeout');
        updateCapsule('paused', 'Timeout');
        report('ERROR', 'Reply wait timeout');
        broadcastAgent('ERROR', { status: 'paused', error: 'Reply wait timeout' });
        return { ok: false, error: 'Reply wait timeout' };
      }
    } catch (e) {
      isRunning = false;
      setAgentStatus('error', 'Error');
      updateCapsule('error', 'Error');
      report('ERROR', e.message);
      broadcastAgent('ERROR', { status: 'error', error: e.message });
      return { ok: false, error: e.message };
    }
  }

  async function sendAgentCurrent() {
    if (!agentTasks.length) return { ok: false, error: 'No agent tasks' };
    if (agentIndex >= agentTasks.length) {
      setAgentStatus('done', 'All done');
      return { ok: false, error: 'All agent tasks completed' };
    }
    setAgentStatus('running', 'Running...');
    const result = await executeTask(agentTasks[agentIndex], { index: agentIndex, total: agentTasks.length });
    if (result && result.ok && result.status === 'done') {
      agentIndex += 1;
      setAgentStatus(agentIndex >= agentTasks.length ? 'done' : 'idle', agentIndex >= agentTasks.length ? 'All done' : 'Idle');
    } else {
      setAgentStatus('paused', 'Paused');
    }
    broadcastAgent('HEARTBEAT');
    return result;
  }

  async function autoAgentRun() {
    if (autoTimer) clearTimeout(autoTimer);
    setAgentStatus('running', 'Auto running...');
    const loop = async () => {
      if (agentStatus !== 'running') return;
      if (agentIndex >= agentTasks.length) {
        setAgentStatus('done', 'All done');
        return;
      }
      const result = await sendAgentCurrent();
      if (!result || !result.ok || result.status !== 'done') {
        setAgentStatus('paused', 'Paused');
        return;
      }
      autoTimer = setTimeout(loop, 1000);
    };
    autoTimer = setTimeout(loop, 50);
    return { ok: true, status: 'auto_running' };
  }

  function pauseAgent() {
    if (autoTimer) clearTimeout(autoTimer);
    autoTimer = null;
    setAgentStatus('paused', 'Paused');
    return { ok: true };
  }

  function stopAgent() {
    if (autoTimer) clearTimeout(autoTimer);
    autoTimer = null;
    shouldStop = true;
    isRunning = false;
    setAgentStatus('stopped', 'Stopped');
    return { ok: true };
  }

  async function handleAgentCommand(msg) {
    switch (msg.command) {
      case 'LOAD_TASK': {
        const tasks = Array.isArray(msg.tasks) ? msg.tasks : (msg.task ? [msg.task] : []);
        agentTasks = tasks;
        agentIndex = Number(msg.index || 0);
        setAgentStatus(tasks.length ? 'idle' : 'empty', tasks.length ? 'Tasks loaded' : 'No tasks');
        return { ok: true, count: agentTasks.length, index: agentIndex };
      }
      case 'SEND_CURRENT':
        return await sendAgentCurrent();
      case 'AUTO_RUN':
        return await autoAgentRun();
      case 'ARCHIVE_LATEST': {
        const text = getLastAssistantText();
        return {
          ok: !!String(text || '').trim(),
          status: 'done',
          text,
          task: '手动归档当前页面最新 assistant 回复',
          round: agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 0,
          total: agentTasks.length || 0
        };
      }
      case 'PAUSE':
        return pauseAgent();
      case 'STOP':
        return stopAgent();
      case 'NEXT_ROUND':
        agentIndex = Math.min(agentIndex + 1, agentTasks.length);
        setAgentStatus('idle', 'Next round');
        return { ok: true, index: agentIndex };
      case 'PREV_ROUND':
        agentIndex = Math.max(agentIndex - 1, 0);
        setAgentStatus('idle', 'Prev round');
        return { ok: true, index: agentIndex };
      default:
        return { ok: false, error: 'Unknown agent command: ' + msg.command };
    }
  }

  async function waitForDone(timeoutMs = 2 * 60 * 1000) {
    const start = Date.now();
    let stableCount = 0;
    let lastText = '';
    let generatingWasActive = false;
    const stopGraceMs = 20 * 1000;

    while (Date.now() - start < timeoutMs) {
      if (shouldStop) return { done: false, reason: 'stopped' };
      await sleep(1000);

      const gen = isGenerating();
      if (gen) {
        generatingWasActive = true;
        if (Date.now() - start < stopGraceMs) {
          stableCount = 0;
          continue;
        }
      }

      const currentText = getLastAssistantText();
      console.log('[F12 Worker] waitDone: stable='+stableCount+' gen='+generatingWasActive+' text='+currentText.length);

      if (currentText.length > 0 && currentText === lastText) {
        stableCount++;
      } else if (currentText.length > 0) {
        stableCount = 0;
        lastText = currentText;
      }

      // Done: text stable for 4 seconds
      if (stableCount >= 4) {
        console.log('[F12 Worker] waitDone: DONE');
        return { done: true, text: currentText };
      }

      // Fallback: generating was seen, now stopped, 15s passed, no text
      if (generatingWasActive && (Date.now() - start) > 15000) {
        console.log('[F12 Worker] waitDone: fallback DONE');
        return { done: true, text: currentText || '(empty)' };
      }
    }

    console.log('[F12 Worker] waitDone: TIMEOUT');
    return { done: false, text: lastText, reason: 'timeout' };
  }

  function report(event, detail) {
    chrome.runtime.sendMessage({
      type: 'WORKER_REPORT',
      tabId: getTabId(),
      event,
      detail
    }).catch(() => {});
  }

  let _tabId = null;
  function getTabId() {
    return _tabId || 'unknown';
  }

  // ======== Status capsule (small overlay, NOT full controller) ========

  function createCapsule() {
    const existing = document.getElementById(CAPSULE_ID);
    if (existing) existing.remove();

    const capsule = document.createElement('div');
    capsule.id = CAPSULE_ID;
    capsule.innerHTML = `
      <style>
        #${CAPSULE_ID} {
          position: fixed;
          left: 16px;
          top: 16px;
          z-index: 999998;
          background: rgba(18, 18, 22, 0.92);
          color: #e0e0e0;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px;
          font-family: 'Segoe UI', system-ui, sans-serif;
          line-height: 1.4;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.3s;
        }
        #${CAPSULE_ID} .capsule-label {
          font-weight: 600;
          color: #aaa;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        #${CAPSULE_ID}.status-dormant { border-left: 3px solid #555; }
        #${CAPSULE_ID}.status-activated { border-left: 3px solid #4a9eff; }
        #${CAPSULE_ID}.status-running { border-left: 3px solid #ffaa00; }
        #${CAPSULE_ID}.status-waiting { border-left: 3px solid #ffaa00; }
        #${CAPSULE_ID}.status-done { border-left: 3px solid #00cc66; }
        #${CAPSULE_ID}.status-error { border-left: 3px solid #ff4444; }
        #${CAPSULE_ID}.status-paused { border-left: 3px solid #ff8844; }
        #${CAPSULE_ID}.status-stopped { border-left: 3px solid #888; }
      </style>
      <span class="capsule-label">Ten Yuan Worker</span><br>
      <span class="capsule-state">Dormant</span>
    `;
    document.body.appendChild(capsule);
  }

  function updateCapsule(status, text) {
    const capsule = document.getElementById(CAPSULE_ID);
    if (!capsule) return;
    capsule.className = 'status-' + status;
    const stateEl = capsule.querySelector('.capsule-state');
    if (stateEl) stateEl.textContent = text || status;
  }

  // ======== Message listener ========

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.type) {
      case 'PING':
        sendResponse({ ok: true, role: 'worker', capabilities: healthCheck() });
        break;

      case 'WORKER_ACTIVATE':
        isActivated = true;
        _tabId = msg.tabId;
        updateCapsule('activated', 'Armed - Active Tab');
        sendResponse({ ok: true });
        break;

      case 'WORKER_STOP':
        shouldStop = true;
        isRunning = false;
        updateCapsule('stopped', 'Stopped');
        sendResponse({ ok: true });
        break;

      case 'EXECUTE_TASK':
        executeTask(msg.task, { index: msg.index, total: msg.total })
          .then(result => sendResponse(result))
          .catch(err => sendResponse({ ok: false, error: err.message }));
        return true; // 保持异步

      case 'GET_PAGE_STATUS':
        sendResponse(healthCheck());
        break;

      case 'AGENT_COMMAND':
        handleAgentCommand(msg)
          .then(result => sendResponse(result))
          .catch(err => sendResponse({ ok: false, error: err.message }));
        return true;

      default:
        sendResponse({ ok: false, error: 'Unknown command: ' + msg.type });
    }
  });

  // ======== Init ========
  createCapsule();
  console.log('[F12 Worker] Injected. Sending WORKER_READY...');

  // 主动上报：告知 background 工蜂已就绪
  chrome.runtime.sendMessage({
    type: 'WORKER_READY',
    agentTabId,
    url: location.href,
    title: document.title
  }).then(() => {
    console.log('[F12 Worker] WORKER_READY sent OK');
  }).catch(() => {
    console.log('[F12 Worker] WORKER_READY failed (bg may not be ready)');
  });

  window[WORKER_ID] = {
    status: 'dormant',
    healthCheck,
    capsule: () => document.getElementById(CAPSULE_ID)
  };

  if (agentChannel) {
    agentChannel.onmessage = (event) => {
      const msg = event.data || {};
      if (msg.source !== 'ten-yuan-f12-controller') return;
      if (msg.targetTabId && msg.targetTabId !== agentTabId) return;
      handleAgentCommand(msg).then(result => broadcastAgent('RESULT', { result })).catch(error => {
        broadcastAgent('ERROR', { error: error.message });
      });
    };
  }
  broadcastAgent('REGISTER');
  setInterval(() => broadcastAgent('HEARTBEAT'), 3000);
})();




