// core/adapter-chatgpt.js — ChatGPT 页面适配器
// 负责 DOM selector、健康检测、完成判定。不负责发送逻辑。

// ========== 输入框 ==========
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
  if (style.visibility === 'hidden' || style.display === 'none') return false;
  return true;
}

// ========== 发送按钮 ==========
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
  // fallback: 查找输入框所在 form 的最后一个可见 button
  const input = findInput();
  if (input) {
    const form = input.closest('form');
    if (form) {
      const buttons = [...form.querySelectorAll('button')].filter(visible);
      if (buttons.length > 0) return buttons[buttons.length - 1];
    }
  }
  return null;
}

// ========== 停止按钮 ==========
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

// ========== 是否生成中 ==========
function isGenerating() {
  return !!findStopButton();
}

// ========== 最后回复节点 ==========
function getLastAssistantNode() {
  const selectors = [
    '[data-message-author-role="assistant"]',
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
  return node ? node.innerText : '';
}

// ========== 回复完成检测（多信号） ==========
// 信号1: 停止按钮消失
// 信号2: 最后回复文本稳定 6 秒
// 信号3: DOM quiet time（无新节点插入）
async function waitForDone(timeoutMs = 10 * 60 * 1000) {
  const start = Date.now();
  let stableCount = 0;
  let lastText = '';
  const STABLE_THRESHOLD = 6; // 6 秒稳定

  while (Date.now() - start < timeoutMs) {
    await sleep(1000);

    // 信号1: 还在生成中就继续等
    if (isGenerating()) {
      stableCount = 0;
      continue;
    }

    // 信号2: 文本稳定
    const currentText = getLastAssistantText();
    if (currentText === lastText && currentText.length > 0) {
      stableCount++;
    } else {
      stableCount = 0;
      lastText = currentText;
    }

    // 信号3: DOM 变化检测
    const node = getLastAssistantNode();
    const childCount = node ? node.children.length : -1;

    if (stableCount >= STABLE_THRESHOLD) {
      return { done: true, text: currentText };
    }

    if (stableCount >= 3) {
      // 额外确认 DOM 稳定
      await sleep(1000);
      if (getLastAssistantText() === currentText) {
        return { done: true, text: currentText };
      }
    }
  }

  return { done: false, text: lastText, reason: 'timeout' };
}

// ========== Selector 健康检测 ==========
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

// ========== 工具 ==========
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { findInput, findSendButton, findStopButton, isGenerating, getLastAssistantText, getLastAssistantNode, waitForDone, healthCheck, sleep, visible };
