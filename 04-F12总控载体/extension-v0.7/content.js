// content.js - Ten Yuan F12 Page Kernel
// A page-local worker. It only controls its own page DOM and uses role-lock
// completion: baseline before send, lock the newly-added assistant node, then
// advance only after the expected marker appears in that locked node.

(() => {
  const WORKER_ID = 'TY_F12_PAGE_KERNEL_V12';
  const CAPSULE_ID = 'TY_F12_CAPSULE_V12';
  const PANEL_ID = 'TY_F12_PAGE_PANEL_V12';
  const CHANNEL_NAME = 'ten-yuan-f12-v1';
  const STORAGE_KEY = 'TY_F12_PAGE_KERNEL_STATE_V12';
  const INSTANCE_ID = 'kernel-' + Date.now() + '-' + Math.random().toString(16).slice(2);
  const POLL_MS = 900;
  const SETTLE_MS = 2800;
  const MAX_WAIT_MS = 1000 * 60 * 25;

  if (window.TY_F12_WORKER_V11?.stop) {
    try { window.TY_F12_WORKER_V11.stop(); } catch {}
  }

  if (window[WORKER_ID]?.destroy) {
    try { window[WORKER_ID].destroy(); } catch {}
  }
  window.__TY_F12_ACTIVE_KERNEL_INSTANCE_ID = INSTANCE_ID;

  let isRunning = false;
  let shouldStop = false;
  let agentStatus = 'online';
  let agentTabId = sessionStorage.getItem('TY_F12_AGENT_TAB_ID') ||
    ('agent-' + Date.now() + '-' + Math.random().toString(16).slice(2));
  let agentTasks = [];
  let agentIndex = 0;
  let autoTimer = null;
  let observer = null;
  let runId = 0;
  let cancelToken = 0;
  let lockedAssistant = null;
  let destroyed = false;
  let heartbeatTimer = null;
  let panelLogs = [];
  let agentCategory = 'dynamic';
  let agentProject = '';
  let lastError = '';
  let completionMode = 'text';
  let imageWaitMs = 120000;

  sessionStorage.setItem('TY_F12_AGENT_TAB_ID', agentTabId);
  const agentChannel = safeBroadcastChannel(CHANNEL_NAME);
  loadKernelState();

  function safeBroadcastChannel(name) {
    try { return new BroadcastChannel(name); } catch { return null; }
  }

  function saveKernelState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        agentTasks,
        agentIndex,
        agentStatus,
        agentCategory,
        agentProject,
        lastError,
        completionMode,
        imageWaitMs,
        updatedAt: Date.now()
      }));
    } catch {}
    renderPanel();
  }

  function loadKernelState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.agentTasks)) agentTasks = saved.agentTasks;
      if (typeof saved.agentIndex === 'number') agentIndex = saved.agentIndex;
      if (typeof saved.agentStatus === 'string') agentStatus = saved.agentStatus;
      if (typeof saved.agentCategory === 'string') agentCategory = saved.agentCategory;
      if (typeof saved.agentProject === 'string') agentProject = saved.agentProject;
      if (typeof saved.lastError === 'string') lastError = saved.lastError;
      if (typeof saved.completionMode === 'string') completionMode = saved.completionMode;
      if (typeof saved.imageWaitMs === 'number') imageWaitMs = saved.imageWaitMs;
    } catch {}
  }

  function agentPayload(extra = {}) {
    const total = agentTasks.length;
    const currentRound = total > 0 ? Math.min(agentIndex + 1, total) : 0;
    return {
      source: 'ten-yuan-f12-agent',
      kernel: 'page-role-lock-v12',
      tabId: agentTabId,
      url: location.href,
      title: document.title,
      status: agentStatus,
      category: agentCategory,
      project: agentProject,
      lastError,
      completionMode,
      imageWaitMs,
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
    saveKernelState();
    if (message) updateCapsule(status === 'idle' ? 'activated' : status, message);
    broadcastAgent('HEARTBEAT');
  }

  function visible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return false;
    const style = getComputedStyle(el);
    return style.visibility !== 'hidden' && style.display !== 'none';
  }

  function notKernel(el) {
    return el && !el.closest(`#${CAPSULE_ID}`) && !el.closest(`#${PANEL_ID}`);
  }

  function textOf(el) {
    return (el?.innerText || el?.textContent || '').trim();
  }

  function unique(nodes) {
    const seen = new Set();
    return nodes.filter(node => {
      if (!node || seen.has(node)) return false;
      seen.add(node);
      return true;
    });
  }

  function queryVisible(selectors) {
    return unique(selectors.flatMap(selector => [...document.querySelectorAll(selector)]))
      .filter(notKernel)
      .filter(visible);
  }

  function siteKind() {
    const host = location.hostname.toLowerCase();
    if (host.includes('lazymanchat.com')) return 'lazyman';
    if (host.includes('chatgpt.com') || host.includes('chat.openai.com')) return 'chatgpt';
    return 'generic';
  }

  function isLazyManSite() {
    return siteKind() === 'lazyman';
  }

  function isLazyManDialogControl(el) {
    if (!el) return false;
    const dialog = el.closest?.('.ant-modal,[role="dialog"]');
    if (!dialog) return false;
    const label = `${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''}`;
    return hasAny(label, ['确定', '确 定', '取消', '取 消', 'ok', 'cancel', 'close']);
  }

  async function closeLazyManBlockingModal() {
    if (!isLazyManSite()) return false;
    const dialogs = queryVisible(['.ant-modal', '[role="dialog"]']);
    const dialog = dialogs.find(el => /权限检查失败|Failed to fetch|消息发送失败|请稍后重试/i.test(textOf(el)));
    if (!dialog) return false;
    const button = [...dialog.querySelectorAll('button,[role="button"]')]
      .filter(visible)
      .find(el => /确定|确 定|OK|ok|Close|close|取消|取 消/.test(`${textOf(el)} ${el.getAttribute('aria-label') || ''}`));
    if (button) {
      dispatchUserClick(button);
      await sleep(450);
      report('LAZYMAN_MODAL_CLOSED', textOf(dialog).slice(0, 120));
      return true;
    }
    return false;
  }

  const CJK = {
    search: '\u641c\u7d22',
    chat: '\u804a\u5929',
    input: '\u8f93\u5165',
    inputChatContent: '\u8f93\u5165\u804a\u5929\u5185\u5bb9',
    send: '\u53d1\u9001',
    submit: '\u63d0\u4ea4',
    stop: '\u505c\u6b62',
    upload: '\u4e0a\u4f20',
    attach: '\u9644\u4ef6',
    newItem: '\u65b0\u5efa',
    clear: '\u6e05\u7a7a',
    prev: '\u4e0a\u4e00',
    next: '\u4e0b\u4e00',
    jump: '\u8df3\u8f6c',
    close: '\u5173\u95ed',
    cancel: '\u53d6\u6d88'
  };

  function hasAny(text, words) {
    const value = String(text || '').toLowerCase();
    return words.some(word => value.includes(String(word).toLowerCase()));
  }

  function roleNodes(role) {
    return queryVisible([
      `[data-message-author-role="${role}"]`,
      `article[data-message-author-role="${role}"]`,
      `[data-author="${role}"]`,
      `[data-role="${role}"]`,
      `[class*="${role}-message"]`,
      `[class*="${role}Message"]`
    ]);
  }

  function userNodes() {
    return roleNodes('user');
  }

  function assistantNodes() {
    return unique([
      ...roleNodes('assistant'),
      ...queryVisible([
        'article[data-testid*="conversation-turn"] [data-message-author-role="assistant"]',
        'article[data-testid*="turn"] [data-message-author-role="assistant"]',
        '[data-testid*="assistant"]',
        '[data-testid*="answer"]',
        '[data-testid*="reply"]',
        '[data-testid*="message"]',
        '.agent-turn',
        '[class*="assistant"]',
        '[class*="bot-message"]',
        '[class*="ai-message"]',
        '[class*="answer"]',
        '[class*="reply"]',
        '[class*="message"]',
        '[class*="Message"]',
        '[class*="bubble"]',
        '[class*="Bubble"]',
        '[class*="prose"]',
        '.markdown'
      ])
    ]);
  }

  function chatRoot() {
    const selectors = [
      'main',
      '[role="main"]',
      '[data-testid*="conversation"]',
      '[class*="conversation"]',
      '[class*="chat"]',
      '#__next',
      '#root'
    ];
    for (const selector of selectors) {
      const node = document.querySelector(selector);
      if (node && visible(node)) return node;
    }
    return document.documentElement;
  }

  function findInput() {
    if (isLazyManSite()) {
      const lazyInput = findLazyManInputV2();
      if (lazyInput) return lazyInput;
    }

    const selectors = [
      '#prompt-textarea',
      'textarea[data-testid="prompt-textarea"]',
      'div[data-testid="prompt-textarea"][contenteditable="true"]',
      'div.ProseMirror[contenteditable="true"]',
      'div[contenteditable="true"][role="textbox"]',
      'div[contenteditable="true"]',
      'textarea',
      'input[type="text"]',
      '[role="textbox"]'
    ];
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el && visible(el) && notKernel(el)) return el;
    }
    return null;
  }

  function findLazyManInput() {
    const candidates = queryVisible([
      'textarea',
      'textarea[placeholder]',
      'input[type="text"]',
      '[contenteditable="true"]',
      '[role="textbox"]'
    ]).filter(el => {
      const label = `${el.getAttribute('placeholder') || ''} ${el.getAttribute('aria-label') || ''} ${textOf(el)}`;
      if (/搜索|search/i.test(label)) return false;
      if (el.closest('[class*="search"],[class*="Search"]')) return false;
      return true;
    }).sort((a, b) => b.getBoundingClientRect().bottom - a.getBoundingClientRect().bottom);

    const explicit = candidates.find(el => {
      const label = `${el.getAttribute('placeholder') || ''} ${el.getAttribute('aria-label') || ''}`;
      return /输入聊天内容|聊天|message|prompt|输入/i.test(label);
    });
    return explicit || candidates[0] || null;
  }

  function findSendButton() {
    if (isLazyManSite()) {
      return findLazyManSendButtonV2();
    }

    const selectors = [
      '[data-testid="send-button"]',
      '[data-testid="composer-submit-button"]',
      'button[aria-label*="Send"]',
      'button[aria-label*="send"]',
      'button[aria-label*="发送"]',
      'button[aria-label*="提交"]',
      'button[title*="Send"]',
      'button[title*="send"]',
      'button[title*="发送"]',
      'button[title*="提交"]',
      'button[class*="send"]',
      'button[class*="submit"]',
      '[role="button"][aria-label*="Send"]',
      '[role="button"][aria-label*="send"]',
      '[role="button"][aria-label*="发送"]',
      '[role="button"][title*="Send"]',
      '[role="button"][title*="发送"]',
      '[role="button"][class*="send"]',
      'button[type="submit"]'
    ];
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el && visible(el) && notKernel(el) && !el.disabled) return el;
    }

    const input = findInput();
    const form = input ? input.closest('form') : null;
    const buttons = form
      ? [...form.querySelectorAll('button')].filter(btn => visible(btn) && notKernel(btn) && !btn.disabled)
      : [];
    if (buttons.length) {
      const explicit = buttons.find(el => {
        const label = `${el.innerText || ''} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${el.className || ''}`.toLowerCase();
        return /send|submit|发送|提交/.test(label) && !/dropdown|compact-last/.test(label);
      });
      if (explicit) return explicit;
      const lazyManSend = buttons.find(el => {
        const cls = String(el.className || '').toLowerCase();
        return /compact-first|zzpodm|send|submit/.test(cls) && !/dropdown|compact-last/.test(cls);
      });
      if (lazyManSend) return lazyManSend;
      const nonDropdown = buttons.filter(el => {
        const cls = String(el.className || '').toLowerCase();
        return !/dropdown|compact-last/.test(cls);
      });
      if (nonDropdown.length) return nonDropdown[nonDropdown.length - 1];
      return buttons[buttons.length - 1];
    }

    let scope = input;
    for (let depth = 0; scope && depth < 6; depth += 1, scope = scope.parentElement) {
      const nearby = [...scope.querySelectorAll('button,[role="button"]')]
        .filter(el => visible(el) && notKernel(el) && !el.disabled && el.getAttribute('aria-disabled') !== 'true');
      const explicit = nearby.find(el => {
        const label = `${el.innerText || ''} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${el.className || ''}`.toLowerCase();
        return /send|submit|发送|提交/.test(label);
      });
      if (explicit) return explicit;
      const iconButtons = nearby.filter(el => {
        const label = `${el.innerText || ''} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''}`.toLowerCase();
        if (/stop|停止|upload|上传|attach|附件|new|新建|clear|清空/.test(label)) return false;
        return !!el.querySelector('svg,img') || el.textContent.trim().length <= 4;
      });
      const lazyManSend = iconButtons.find(el => {
        const cls = String(el.className || '').toLowerCase();
        return /compact-first|zzpodm|send|submit/.test(cls) && !/dropdown|compact-last/.test(cls);
      });
      if (lazyManSend) return lazyManSend;
      const nonDropdown = iconButtons.filter(el => {
        const cls = String(el.className || '').toLowerCase();
        return !/dropdown|compact-last/.test(cls);
      });
      if (nonDropdown.length) return nonDropdown[nonDropdown.length - 1];
      if (iconButtons.length) return iconButtons[iconButtons.length - 1];
    }

    return null;
  }

  function findLazyManSendButton() {
    const input = findLazyManInput();
    const allButtons = queryVisible(['button', '[role="button"]'])
      .filter(el => !el.disabled && el.getAttribute('aria-disabled') !== 'true')
      .filter(el => {
        const label = `${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''}`.toLowerCase();
        if (/上一条|下一条|跳转|搜索|新建|附件|上传|关闭|取消|clear|search|upload|attach|jump|next|previous/.test(label)) return false;
        return true;
      });

    if (!input) {
      return allButtons.find(el => /send|submit|发送|提交/.test(`${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''}`.toLowerCase())) || null;
    }

    let scope = input;
    for (let depth = 0; scope && depth < 8; depth += 1, scope = scope.parentElement) {
      const buttons = allButtons.filter(btn => scope.contains(btn));
      const explicit = buttons.find(el => /send|submit|发送|提交/.test(`${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${el.className || ''}`.toLowerCase()));
      if (explicit) return explicit;

      const iconButtons = buttons.filter(el => {
        const rect = el.getBoundingClientRect();
        const text = textOf(el);
        return (!!el.querySelector('svg,img') || text.length <= 3) && rect.width >= 20 && rect.height >= 20;
      }).sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right);
      if (iconButtons.length) return iconButtons[0];
    }

    return allButtons.find(el => /send|submit|发送|提交/.test(`${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''}`.toLowerCase())) || null;
  }

  function findLazyManInputV2() {
    const candidates = queryVisible([
      'textarea',
      'input[type="text"]',
      'div.ProseMirror[contenteditable="true"]',
      '[data-slate-editor="true"]',
      '[class*="ProseMirror"][contenteditable="true"]',
      '[contenteditable="true"]',
      '[role="textbox"]'
    ]).filter(el => {
      const label = `${el.getAttribute('placeholder') || ''} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${textOf(el)}`;
      if (hasAny(label, [CJK.search, 'search'])) return false;
      if (el.closest('[class*="search"],[class*="Search"],[role="search"]')) return false;
      return true;
    }).sort((a, b) => {
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      return br.bottom - ar.bottom || br.right - ar.right;
    });

    const composerLike = candidates.find(el => {
      const rect = el.getBoundingClientRect();
      const cls = String(el.className || '').toLowerCase();
      return rect.width >= 260
        && rect.height >= 36
        && (cls.includes('prosemirror') || el.isContentEditable || el.getAttribute('role') === 'textbox');
    });
    if (composerLike) return composerLike;

    const explicit = candidates.find(el => {
      const label = `${el.getAttribute('placeholder') || ''} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''}`;
      return hasAny(label, [CJK.inputChatContent, CJK.chat, CJK.input, 'message', 'prompt']);
    });

    const multiline = candidates.find(el => {
      const rect = el.getBoundingClientRect();
      return rect.height >= 40 && rect.width >= 240;
    });

    return explicit || multiline || candidates[0] || null;
  }

  function findLazyManSendButtonV2() {
    const hardAntdSend = [...document.querySelectorAll([
      'button.ant-btn-primary.ant-btn-compact-first-item:not(.ant-btn-compact-last-item)',
      'button.ant-btn-primary:not(.ant-btn-compact-last-item)',
      'button[class*="ant-btn-primary"][class*="compact-first"]:not([class*="compact-last"])'
    ].join(','))]
      .filter(el => visible(el) && notKernel(el) && !el.disabled && el.getAttribute('aria-disabled') !== 'true')
      .filter(el => !isLazyManDialogControl(el))
      .filter(el => {
        const label = `${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${el.className || ''}`;
        return !hasAny(label, [CJK.search, CJK.newItem, CJK.attach, CJK.upload, CJK.close, CJK.cancel, 'search', 'upload', 'attach', 'new topic']);
      })
      .sort((a, b) => {
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        return br.bottom - ar.bottom || br.right - ar.right;
      });
    if (hardAntdSend.length) return hardAntdSend[0];

    const input = findLazyManInputV2();
    const inputRect = input ? input.getBoundingClientRect() : null;
    const isNearInput = btn => {
      if (!inputRect) return true;
      const rect = btn.getBoundingClientRect();
      const horizontalGap = rect.left - inputRect.right;
      const verticalOverlap = Math.min(rect.bottom, inputRect.bottom + 48) - Math.max(rect.top, inputRect.top - 48);
      const besideComposer = horizontalGap >= -16 && horizontalGap <= 220 && verticalOverlap > 0;
      const belowComposer = rect.top >= inputRect.bottom - 4
        && rect.top <= inputRect.bottom + 72
        && rect.right >= inputRect.left - 16
        && rect.left <= inputRect.right + 220;
      return besideComposer || belowComposer;
    };
    const isBadLazyManButton = el => {
      if (isLazyManDialogControl(el)) return true;
      const label = `${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${el.className || ''}`;
      if (hasAny(label, [
        CJK.search, CJK.newItem, CJK.attach, CJK.upload, CJK.close, CJK.cancel,
        CJK.clear, CJK.prev, CJK.next, CJK.jump,
        'search', 'upload', 'attach', 'clear', 'close', 'cancel', 'ok', 'next', 'previous',
        'jump', 'new topic', 'new chat', 'new conversation'
      ])) return true;
      if (/开启新话题|新话题|新建话题/.test(label)) return true;
      return false;
    };
    const allButtons = queryVisible(['button', '[role="button"]'])
      .filter(el => !el.disabled && el.getAttribute('aria-disabled') !== 'true')
      .filter(el => !isBadLazyManButton(el));

    const primaryCompactAny = allButtons.filter(el => {
      const cls = String(el.className || '').toLowerCase();
      return el.tagName === 'BUTTON'
        && cls.includes('ant-btn-primary')
        && cls.includes('ant-btn-compact-first')
        && !cls.includes('ant-btn-compact-last');
    }).sort((a, b) => {
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      return br.bottom - ar.bottom || br.right - ar.right;
    });
    if (primaryCompactAny.length) return primaryCompactAny[0];

    const primaryCompact = allButtons.find(el => {
      const cls = String(el.className || '').toLowerCase();
      return isNearInput(el)
        && cls.includes('ant-btn-primary')
        && cls.includes('ant-btn-compact-first')
        && !cls.includes('ant-btn-compact-last');
    });
    if (primaryCompact) return primaryCompact;

    const hasSendLabel = el => {
      const label = `${textOf(el)} ${el.getAttribute('aria-label') || ''} ${el.getAttribute('title') || ''} ${el.className || ''}`;
      return hasAny(label, [CJK.send, CJK.submit, 'send', 'submit']);
    };

    const explicit = allButtons.find(el => hasSendLabel(el) && isNearInput(el));
    if (explicit) return explicit;
    if (!input) return null;

    let scope = input;
    for (let depth = 0; scope && depth < 8; depth += 1, scope = scope.parentElement) {
      const nearby = allButtons.filter(btn => scope.contains(btn));
      const explicitNearby = nearby.find(hasSendLabel);
      if (explicitNearby) return explicitNearby;

      const iconLike = nearby.filter(btn => {
        const rect = btn.getBoundingClientRect();
        const text = textOf(btn);
        return isNearInput(btn) && rect.width >= 20 && rect.height >= 20 && (!!btn.querySelector('svg,img') || text.length <= 4);
      }).sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right);

      if (iconLike.length) return iconLike[0];
    }

    return null;
  }

  function findStopButton() {
    return queryVisible([
      '[data-testid="stop-button"]',
      'button[aria-label*="Stop"]',
      'button[aria-label*="stop"]',
      'button[aria-label*="停止"]'
    ]).find(btn => !btn.disabled) || null;
  }

  function isGenerating() {
    return !!findStopButton();
  }

  function isPromptEchoText(text) {
    const value = String(text || '');
    return (
      value.includes('[Completion marker rule]') ||
      value.includes('Join these three segments') ||
      value.includes('segment 1: TASK_DONE') ||
      value.includes('Do not add spaces. Do not put it in a code block.') ||
      value.includes('\u7ed3\u5c3e\u5fc5\u987b\u8f93\u51fa')
    );
  }

  function isReplyCandidateNode(node) {
    const text = textOf(node);
    if (!text || text.length < 2) return false;
    if (isPromptEchoText(text)) return false;
    if (/Ten Yuan (?:Page Kernel|F12)/i.test(text)) return false;
    return true;
  }

  function getLastAssistantNode() {
    const nodes = assistantNodes().filter(isReplyCandidateNode);
    return nodes.length ? nodes[nodes.length - 1] : null;
  }

  function getLastAssistantText() {
    const node = getLastAssistantNode();
    const text = node ? textOf(node) : '';
    if (text) return text;
    return getLastReadableBlockText();
  }

  function getLazyManMarkerMatch(marker, baseline) {
    const wanted = String(marker || '');
    if (!wanted || !isLazyManSite()) return { count: 0, text: '' };

    let count = 0;
    let latestText = '';

    const title = String(document.title || '').trim();
    if (title.includes(wanted) && !isPromptEchoText(title)) {
      count += 1;
      latestText = title;
    }

    const candidates = queryVisible([
      'main article',
      '[role="main"] article',
      'article',
      '[class*="message"]',
      '[class*="Message"]',
      '[class*="answer"]',
      '[class*="reply"]',
      '[class*="bubble"]',
      '[class*="Bubble"]',
      '[class*="markdown"]',
      '[class*="prose"]'
    ])
      .filter(el => !el.closest('button,textarea,input,select,option,[contenteditable="true"]'))
      .map(el => ({ el, text: textOf(el) }))
      .filter(item => item.text.includes(wanted))
      .filter(item => !isPromptEchoText(item.text))
      .filter(item => !/Ten Yuan (?:Page Kernel|F12)|十元 F12 页面控制器/i.test(item.text))
      .sort((a, b) => {
        const pos = a.el.compareDocumentPosition(b.el);
        return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });

    count += candidates.length;
    if (candidates.length) latestText = candidates[candidates.length - 1].text;

    const baselineCount = Number(baseline?.lazyManMarkerCount || 0);
    if (count > baselineCount) return { count, text: latestText };
    return { count, text: '' };
  }

  function lazyManReplyBlocks() {
    if (!isLazyManSite()) return [];
    return queryVisible([
      'main article',
      '[role="main"] article',
      'article',
      '[class*="message"]',
      '[class*="Message"]',
      '[class*="answer"]',
      '[class*="reply"]',
      '[class*="bubble"]',
      '[class*="Bubble"]'
    ])
      .filter(el => !el.closest('button,textarea,input,select,option,[contenteditable="true"]'))
      .map(el => ({ el, text: textOf(el) }))
      .filter(item => item.text.length >= 20)
      .filter(item => !isPromptEchoText(item.text))
      .filter(item => !/Ten Yuan (?:Page Kernel|F12)|十元 F12 页面控制器/i.test(item.text))
      .filter(item => !/消息发送失败|Failed to fetch/i.test(item.text))
      .sort((a, b) => {
        const pos = a.el.compareDocumentPosition(b.el);
        return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
  }

  function getLazyManReplyMatch(baseline) {
    const blocks = lazyManReplyBlocks();
    const baselineCount = Number(baseline?.lazyManReplyCount || 0);
    if (blocks.length > baselineCount) {
      return { count: blocks.length, text: blocks[blocks.length - 1].text };
    }
    return { count: blocks.length, text: '' };
  }

  function getLastReadableBlockText() {
    const selectors = [
      'main article',
      'main section',
      'main [class*="message"]',
      'main [class*="Message"]',
      'main [class*="answer"]',
      'main [class*="reply"]',
      'main [class*="bubble"]',
      'main [class*="Bubble"]',
      'main [class*="prose"]',
      'main [class*="markdown"]',
      '[role="main"] article',
      '[role="main"] section',
      '[role="main"] [class*="message"]',
      '[role="main"] [class*="Message"]',
      '[role="main"] [class*="answer"]',
      '[role="main"] [class*="reply"]',
      '[role="main"] [class*="bubble"]',
      '[role="main"] [class*="Bubble"]',
      '[role="main"] [class*="prose"]',
      '[role="main"] [class*="markdown"]',
      'article',
      'section',
      '[class*="message"]',
      '[class*="Message"]',
      '[class*="answer"]',
      '[class*="reply"]',
      '[class*="bubble"]',
      '[class*="Bubble"]',
      '[class*="prose"]',
      '[class*="markdown"]'
    ];
    const badTags = new Set(['BUTTON', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'SCRIPT', 'STYLE']);
    const blocks = queryVisible(selectors)
      .filter(el => !badTags.has(el.tagName))
      .filter(el => !el.closest('button,textarea,input,select,option'))
      .map(el => ({ el, text: textOf(el) }))
      .filter(item => item.text.length >= 20)
      .filter(item => !isPromptEchoText(item.text))
      .filter(item => !/^(发送当前|自动续跑|暂停|停止|上一轮|下一轮|载入文本|生成轮次)/.test(item.text))
      .filter(item => item.text !== document.body.innerText.trim())
      .sort((a, b) => {
        const pos = a.el.compareDocumentPosition(b.el);
        return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
    if (blocks.length) return blocks[blocks.length - 1].text;
    return '';
  }

  function debugDumpPageText() {
    const selectors = [
      'main',
      '[role="main"]',
      'article',
      'section',
      '[class*="message"]',
      '[class*="Message"]',
      '[class*="assistant"]',
      '[class*="answer"]',
      '[class*="reply"]',
      '[class*="bubble"]',
      '[class*="Bubble"]',
      '[class*="prose"]',
      '[class*="markdown"]',
      'textarea',
      '[contenteditable="true"]',
      'button'
    ];
    const snippets = queryVisible(selectors)
      .map((el, index) => ({
        index,
        tag: el.tagName,
        id: el.id || '',
        role: el.getAttribute('role') || '',
        aria: el.getAttribute('aria-label') || '',
        className: String(el.className || '').slice(0, 180),
        text: textOf(el).slice(0, 1500)
      }))
      .filter(item => item.text || item.aria || item.id || item.className)
      .slice(-120);

    const frames = [...document.querySelectorAll('iframe')].map((frame, index) => {
      try {
        return {
          index,
          src: frame.src || '',
          text: textOf(frame.contentDocument?.body).slice(0, 4000)
        };
      } catch (error) {
        return { index, src: frame.src || '', error: error.message };
      }
    });

    const inspectNode = (el, index = 0) => {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        index,
        tag: el.tagName,
        id: el.id || '',
        role: el.getAttribute('role') || '',
        aria: el.getAttribute('aria-label') || '',
        title: el.getAttribute('title') || '',
        placeholder: el.getAttribute('placeholder') || '',
        className: String(el.className || '').slice(0, 180),
        text: textOf(el).slice(0, 500),
        rect: {
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          w: Math.round(rect.width),
          h: Math.round(rect.height),
          right: Math.round(rect.right),
          bottom: Math.round(rect.bottom)
        }
      };
    };

    const selectedInput = findInput();
    const selectedSendButton = findSendButton();
    const inputCandidates = queryVisible(['textarea', 'input[type="text"]', '[contenteditable="true"]', '[role="textbox"]'])
      .map(inspectNode)
      .slice(-20);
    const sendCandidates = queryVisible(['button', '[role="button"]'])
      .filter(el => !el.disabled && el.getAttribute('aria-disabled') !== 'true')
      .map(inspectNode)
      .slice(-40);
    const imageCandidates = queryVisible(['img', 'picture img', '[style*="background-image"]'])
      .map((el, index) => {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        const parentButton = el.closest('button,[role="button"]');
        return {
          index,
          tag: el.tagName,
          id: el.id || '',
          alt: el.getAttribute('alt') || '',
          src: el.currentSrc || el.src || el.getAttribute('src') || '',
          srcset: el.getAttribute('srcset') || '',
          backgroundImage: style.backgroundImage && style.backgroundImage !== 'none' ? style.backgroundImage : '',
          className: String(el.className || '').slice(0, 180),
          parentButton: parentButton ? inspectNode(parentButton) : null,
          rect: {
            x: Math.round(rect.x),
            y: Math.round(rect.y),
            w: Math.round(rect.width),
            h: Math.round(rect.height),
            right: Math.round(rect.right),
            bottom: Math.round(rect.bottom)
          }
        };
      })
      .filter(item => item.src || item.srcset || item.backgroundImage || item.rect.w > 80 || item.rect.h > 80)
      .slice(-40);

    return {
      ok: true,
      status: 'debug_dump',
      siteKind: siteKind(),
      href: location.href,
      title: document.title,
      agentStatus,
      agentIndex,
      agentTaskCount: agentTasks.length,
      inputFound: !!findInput(),
      sendButtonFound: !!findSendButton(),
      selectedInput: inspectNode(selectedInput),
      selectedSendButton: inspectNode(selectedSendButton),
      inputCandidates,
      sendCandidates,
      isGenerating: isGenerating(),
      lastAssistantText: getLastAssistantText().slice(0, 12000),
      bodyText: (document.body?.innerText || document.body?.textContent || '').slice(0, 30000),
      imageCandidates,
      snippets,
      frames
    };
  }

  async function exportLatestImage() {
    const candidates = queryVisible(['img', 'picture img'])
      .map((el, index) => {
        const rect = el.getBoundingClientRect();
        const assistantRoot = el.closest('[data-message-author-role="assistant"], article[data-testid^="conversation-turn"], article');
        return {
          index,
          el,
          src: el.currentSrc || el.src || el.getAttribute('src') || '',
          alt: el.getAttribute('alt') || '',
          w: Math.round(rect.width),
          h: Math.round(rect.height),
          naturalWidth: Number(el.naturalWidth || 0),
          naturalHeight: Number(el.naturalHeight || 0),
          area: Math.round(rect.width * rect.height),
          naturalArea: Number(el.naturalWidth || 0) * Number(el.naturalHeight || 0),
          assistantRoot: !!assistantRoot
        };
      })
      .filter(item => item.src && !/^data:image\/svg/i.test(item.src))
      .filter(item => item.w > 180 && item.h > 180)
      .filter(item => item.naturalWidth >= 512 || item.naturalHeight >= 512 || item.area >= 120000);

    // ChatGPT may keep older generated images mounted. Prefer the last large
    // image inside the newest assistant turn instead of the largest page image.
    const assistantCandidates = candidates.filter(item => item.assistantRoot);
    const pool = assistantCandidates.length ? assistantCandidates : candidates;
    const picked = pool[pool.length - 1];
    if (!picked) {
      return { ok: false, error: 'No exportable image found' };
    }

    const response = await fetch(picked.src, { credentials: 'include' });
    if (!response.ok) {
      return { ok: false, error: `Image fetch failed: ${response.status}`, src: picked.src, alt: picked.alt };
    }

    const blob = await response.blob();
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('FileReader failed'));
      reader.readAsDataURL(blob);
    });

    return {
      ok: true,
      status: 'image_exported',
      href: location.href,
      title: document.title,
      src: picked.src,
      alt: picked.alt,
      width: picked.w,
      height: picked.h,
      naturalWidth: picked.naturalWidth,
      naturalHeight: picked.naturalHeight,
      mime: blob.type || 'image/png',
      size: blob.size,
      dataUrl
    };
  }

  function markerFor(index, total) {
    return `TASK_DONE:R${index + 1}/${total}`;
  }

  function completionInstruction(index, total) {
    const round = `R${index + 1}/${total}`;
    return [
      '',
      '[Completion marker rule]',
      'At the very last line of your answer, output exactly one completion marker.',
      'Join these three segments into one line:',
      'segment 1: TASK_DONE',
      'segment 2: :',
      `segment 3: ${round}`,
      'Do not add spaces. Do not put it in a code block.'
    ].join('\n');
  }

  function taskWithMarker(task, index, total) {
    return `${String(task || '').trim()}\n\n${completionInstruction(index, total)}`;
  }

  function normalizeCompletionMode(mode) {
    return ['text', 'image', 'manual'].includes(mode) ? mode : 'text';
  }

  function taskForMode(task, index, total, mode) {
    const normalized = normalizeCompletionMode(mode);
    if (normalized === 'text') return taskWithMarker(task, index, total);
    return String(task || '').trim();
  }

  function completionModeLabel(mode) {
    const normalized = normalizeCompletionMode(mode);
    if (normalized === 'image') return '图像倒计时';
    if (normalized === 'manual') return '手动确认';
    return '文本 TASK_DONE';
  }

  function takeBaseline(index, total) {
    const assistant = assistantNodes();
    return {
      index,
      total,
      marker: markerFor(index, total),
      userCount: userNodes().length,
      assistantCount: assistant.length,
      assistantSet: new WeakSet(assistant),
      lazyManMarkerCount: getLazyManMarkerMatch(markerFor(index, total)).count,
      lazyManReplyCount: lazyManReplyBlocks().length,
      ts: Date.now()
    };
  }

  function getLockedAssistantAfter(baseline) {
    const nodes = assistantNodes();
    const added = nodes
      .filter(node => !baseline.assistantSet.has(node))
      .filter(isReplyCandidateNode);
    return added.length ? added[added.length - 1] : null;
  }

  function setInputText(input, text) {
    input.focus();

    if (input.tagName === 'TEXTAREA' || input.tagName === 'INPUT') {
      const proto = input.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
      if (setter) setter.call(input, text);
      else input.value = text;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(input);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('delete', false);
    input.innerHTML = '';
    input.textContent = '';
    input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'deleteContentBackward' }));
    document.execCommand('insertText', false, text);
    input.dispatchEvent(new InputEvent('input', {
      bubbles: true,
      inputType: 'insertText',
      data: text
    }));
    const inserted = textOf(input);
    if (!inserted || inserted.length < Math.min(20, String(text || '').length)) {
      input.focus();
      input.innerHTML = '';
      input.textContent = String(text || '');
      input.dispatchEvent(new InputEvent('beforeinput', {
        bubbles: true,
        cancelable: true,
        inputType: 'insertText',
        data: text
      }));
      input.dispatchEvent(new InputEvent('input', {
        bubbles: true,
        inputType: 'insertText',
        data: text
      }));
    }
    return true;
  }

  function dispatchUserClick(target) {
    if (!target) return false;
    const el = target.closest?.('button,[role="button"]') || target;
    if (!visible(el) || el.disabled || el.getAttribute('aria-disabled') === 'true') return false;

    try {
      el.scrollIntoView({ block: 'center', inline: 'center' });
    } catch {}

    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const eventInit = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y,
      button: 0,
      buttons: 1
    };

    for (const type of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) {
      const EventCtor = type.startsWith('pointer') && typeof PointerEvent !== 'undefined'
        ? PointerEvent
        : MouseEvent;
      el.dispatchEvent(new EventCtor(type, eventInit));
    }

    try {
      el.click();
    } catch {}

    return true;
  }

  async function submitPrompt(input, sendButton) {
    if (isLazyManSite()) {
      await closeLazyManBlockingModal();
      input.focus();
      const valueBefore = input.tagName === 'TEXTAREA' || input.tagName === 'INPUT'
        ? input.value
        : textOf(input);
      const userCountBefore = userNodes().length;
      const bodyBefore = textOf(document.body);

      let currentSendButton = sendButton || findLazyManSendButtonV2();
      const waitUntil = Date.now() + 3000;
      while ((!currentSendButton || currentSendButton.disabled || currentSendButton.getAttribute('aria-disabled') === 'true') && Date.now() < waitUntil) {
        await sleep(150);
        currentSendButton = findLazyManSendButtonV2();
      }

      if (currentSendButton && !currentSendButton.disabled && currentSendButton.getAttribute('aria-disabled') !== 'true') {
        dispatchUserClick(currentSendButton);
        await sleep(500);
      }

      const eventInit = {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13
      };
      input.dispatchEvent(new KeyboardEvent('keydown', eventInit));
      input.dispatchEvent(new KeyboardEvent('keypress', eventInit));
      input.dispatchEvent(new KeyboardEvent('keyup', eventInit));
      await sleep(350);
      currentSendButton = findLazyManSendButtonV2() || currentSendButton;
      if (currentSendButton && !currentSendButton.disabled && currentSendButton.getAttribute('aria-disabled') !== 'true') {
        const currentValue = input.tagName === 'TEXTAREA' || input.tagName === 'INPUT'
          ? input.value
          : textOf(input);
        if (String(currentValue || '').trim()) dispatchUserClick(currentSendButton);
      }
      const deadline = Date.now() + 5200;
      let valueAfter = input.tagName === 'TEXTAREA' || input.tagName === 'INPUT'
        ? input.value
        : textOf(input);
      while (Date.now() < deadline) {
        valueAfter = input.tagName === 'TEXTAREA' || input.tagName === 'INPUT'
          ? input.value
          : textOf(input);
        if (!String(valueAfter || '').trim()) return true;
        if (valueAfter.length < valueBefore.length * 0.2) return true;
        if (userNodes().length > userCountBefore) return true;
        if (textOf(document.body).length > bodyBefore.length + Math.min(80, String(valueBefore || '').length * 0.1)) return true;
        await sleep(180);
      }
      return !String(valueBefore || '').trim() || !String(valueAfter || '').trim() || valueAfter.length < valueBefore.length * 0.2;
    }

    if (!sendButton || sendButton.disabled || sendButton.getAttribute('aria-disabled') === 'true') return false;
    dispatchUserClick(sendButton);
    return true;
  }

  function healthCheck() {
    return {
      ok: true,
      kernel: 'page-role-lock-v12',
      siteKind: siteKind(),
      input: !!findInput(),
      sendButton: !!findSendButton(),
      stopButton: !!findStopButton(),
      assistantNode: !!getLastAssistantNode(),
      userNodes: userNodes().length,
      assistantNodes: assistantNodes().length,
      generating: isGenerating(),
      url: location.href,
      title: document.title,
      category: agentCategory,
      project: agentProject,
      currentRound: agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 0,
      total: agentTasks.length,
      status: agentStatus,
      lastError
    };
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function addPanelLog(message) {
    panelLogs = [...panelLogs, `[${new Date().toLocaleTimeString()}] ${message}`].slice(-80);
    renderPanel();
  }

  function cleanPanelTaskText(text) {
    return String(text || '')
      .replace(/^\s*```(?:text|txt|md|markdown)?\s*$/gim, '')
      .replace(/^\s*```\s*$/gim, '')
      .trim();
  }

  function detectPanelTemplateTotal(text) {
    const patterns = [
      /TASK_DONE\s*:\s*R\s*[\{｛][^}｝]+[}｝]\s*\/\s*(\d+)/i,
      /R\s*[\{｛][^}｝]+[}｝]\s*\/\s*(\d+)/i,
      /TASK_DONE\s*:\s*R\s*\d+\s*\/\s*(\d+)/i,
      /R\s*1\s*\/\s*(\d+)/i,
      /(\d+)\s*轮/
    ];
    for (const pattern of patterns) {
      const match = String(text || '').match(pattern);
      if (match) return Number(match[1]);
    }
    return 0;
  }

  function fillPanelRoundPlaceholders(text, round, total) {
    return cleanPanelTaskText(text)
      .replace(/R\s*[\{｛]\s*(?:轮数|round|n)\s*[}｝]\s*\/\s*\d+/gi, `R${round}/${total}`)
      .replace(/R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/g, `R${round}/${total}`)
      .replace(/TASK_DONE\s*:\s*R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/gi, `TASK_DONE:R${round}/${total}`);
  }

  function expandPanelRoundTemplate(raw) {
    const text = String(raw || '').trim();
    const total = detectPanelTemplateTotal(text);
    if (!total || total < 2 || total > 300) return [];
    if (!/R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/i.test(text)) return [];

    const placeholderMatch = /R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/i.exec(text);
    if (!placeholderMatch) return [];
    const templateStart = text.lastIndexOf('\n', placeholderMatch.index) + 1;

    const afterTemplate = text.slice(templateStart);
    const stopMarks = ['推荐跑法', '```text\nR1 ', '```txt\nR1 ', '\nR1 总校准'];
    const templateEndOffset = stopMarks
      .map(mark => afterTemplate.indexOf(mark))
      .filter(index => index > 0)
      .sort((a, b) => a - b)[0] || afterTemplate.length;
    const template = cleanPanelTaskText(afterTemplate.slice(0, templateEndOffset));
    if (!template) return [];

    const firstStart = text.search(/进入【/);
    let firstTask = '';
    if (firstStart >= 0 && firstStart < templateStart) {
      const firstStopCandidates = [
        text.indexOf('后续续跑用这个', firstStart),
        text.indexOf('推荐跑法', firstStart),
        templateStart
      ].filter(index => index > firstStart);
      const firstEnd = firstStopCandidates.sort((a, b) => a - b)[0] || templateStart;
      firstTask = cleanPanelTaskText(text.slice(firstStart, firstEnd));
    }

    const tasks = [];
    if (firstTask) tasks.push(fillPanelRoundPlaceholders(firstTask, 1, total));
    else tasks.push(fillPanelRoundPlaceholders(template, 1, total));
    for (let round = 2; round <= total; round += 1) {
      tasks.push(fillPanelRoundPlaceholders(template, round, total));
    }
    return tasks.filter(Boolean);
  }

  function splitPanelRoundHeadings(raw) {
    const text = String(raw || '').trim();
    const matches = [...text.matchAll(/(?:^|\n)\s*(?:【\s*)?(R\d+\s*\/\s*\d+[^】\n]*(?:】)?)/gi)];
    if (matches.length <= 1) return [];
    return matches.map((match, index) => {
      const start = match.index + (match[0].startsWith('\n') ? 1 : 0);
      const end = index + 1 < matches.length
        ? matches[index + 1].index + (matches[index + 1][0].startsWith('\n') ? 1 : 0)
        : text.length;
      return cleanPanelTaskText(text.slice(start, end));
    }).filter(Boolean);
  }

  function parsePanelTasks(raw) {
    const text = String(raw || '').trim();
    if (!text) return [];

    if (/\s*(?:---\s*task\s*---|--\s*task\s*--)\s*/i.test(text)) {
      return text
        .split(/\s*(?:---\s*task\s*---|--\s*task\s*--)\s*/gi)
        .map(cleanPanelTaskText)
        .filter(Boolean);
    }

    const expanded = expandPanelRoundTemplate(text);
    if (expanded.length) return expanded;

    const headingTasks = splitPanelRoundHeadings(text);
    if (headingTasks.length) return headingTasks;

    return [cleanPanelTaskText(text)].filter(Boolean);
  }

  function normalizeRoundText(text, round, total) {
    const marker = `TASK_DONE:R${round}/${total}`;
    let task = cleanPanelTaskText(text)
      .replace(/TASK_DONE\s*:\s*R\s*\d+\s*\/\s*\d+/gi, marker)
      .replace(/TASK_DONE\s*:\s*R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/gi, marker)
      .replace(/R\s*\d+\s*\/\s*\d+/g, `R${round}/${total}`)
      .replace(/R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/g, `R${round}/${total}`);

    if (!/TASK_DONE\s*:\s*R\s*\d+\s*\/\s*\d+/i.test(task)) {
      task += `\n\n结尾必须输出：\n${marker}`;
    }
    return task.trim();
  }

  function generatePanelRoundTasks(raw, requestedTotal) {
    const text = String(raw || '').trim();
    if (!text) return [];

    const separated = parsePanelTasks(text);
    if (separated.length > 1 && !/R\s*[\{｛][^}｝]+[}｝]\s*\/\s*\d+/i.test(text)) {
      return separated;
    }

    const expanded = expandPanelRoundTemplate(text);
    if (expanded.length) return expanded;

    const total = Math.max(1, Math.min(300, Number(requestedTotal) || detectPanelTemplateTotal(text) || 12));
    const base = cleanPanelTaskText(text);
    const tasks = [];
    for (let round = 1; round <= total; round += 1) {
      tasks.push(normalizeRoundText(base, round, total));
    }
    return tasks;
  }

  // Clean override for real UTF-8 Chinese prompts. The older parser helpers
  // above may contain mojibake on Windows, so match by code fences and Rn/N.
  function detectPanelTemplateTotal(text) {
    const value = String(text || '');
    const patterns = [
      /TASK_DONE\s*:\s*R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*(\d+)/i,
      /R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*(\d+)/i,
      /TASK_DONE\s*:\s*R\s*\d+\s*\/\s*(\d+)/i,
      /R\s*1\s*\/\s*(\d+)/i,
      /(\d+)\s*\u8F6E/
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) return Number(match[1]);
    }
    return 0;
  }

  function panelPlaceholderRoundPattern() {
    return /R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/i;
  }

  function fillPanelRoundPlaceholders(text, round, total) {
    return cleanPanelTaskText(text)
      .replace(/TASK_DONE\s*:\s*R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/gi, `TASK_DONE:R${round}/${total}`)
      .replace(/R\s*[\{\uFF5B]\s*(?:\u8F6E\u6570|round|n)\s*[\}\uFF5D]\s*\/\s*\d+/gi, `R${round}/${total}`)
      .replace(/R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/g, `R${round}/${total}`);
  }

  function panelFencedBlocks(text) {
    return [...String(text || '').matchAll(/```(?:text|txt|md|markdown)?\s*\n([\s\S]*?)\n```/gi)]
      .map(match => ({ index: match.index, body: match[1] }));
  }

  function trimAfterPanelGuideText(text) {
    const stops = [
      /\n\s*\u63A8\u8350\u8DD1\u6CD5\s*[:\uFF1A]?/i,
      /\n\s*\u540E\u7EED/i
    ];
    const offsets = stops
      .map(pattern => pattern.exec(text))
      .filter(Boolean)
      .map(match => match.index)
      .filter(index => index > 0);
    if (!offsets.length) return text;
    return text.slice(0, offsets.sort((a, b) => a - b)[0]);
  }

  function expandPanelRoundTemplate(raw) {
    const text = String(raw || '').trim();
    const total = detectPanelTemplateTotal(text);
    if (!total || total < 2 || total > 300) return [];

    const placeholder = panelPlaceholderRoundPattern();
    if (!placeholder.test(text)) return [];

    const blocks = panelFencedBlocks(text);
    const templateBlock = blocks.find(block => placeholder.test(block.body));
    const templateText = templateBlock ? templateBlock.body : text;
    const placeholderMatch = placeholder.exec(templateText);
    if (!placeholderMatch) return [];

    const templateStart = templateBlock
      ? templateBlock.index
      : text.lastIndexOf('\n', placeholderMatch.index) + 1;

    let template = '';
    if (templateBlock) {
      template = cleanPanelTaskText(templateBlock.body);
    } else {
      const afterTemplate = text.slice(templateStart);
      const guideMatch = /\n\s*\u63A8\u8350\u8DD1\u6CD5\s*[:\uFF1A]?/i.exec(afterTemplate);
      template = cleanPanelTaskText(afterTemplate.slice(0, guideMatch && guideMatch.index > 0 ? guideMatch.index : afterTemplate.length));
    }
    if (!template) return [];

    const firstBlock = blocks.find(block =>
      block.index < templateStart &&
      !placeholder.test(block.body) &&
      new RegExp(`R\\s*1\\s*\\/\\s*${total}`, 'i').test(block.body)
    );

    let firstTask = '';
    if (firstBlock) {
      firstTask = cleanPanelTaskText(firstBlock.body);
    } else {
      const beforeTemplate = text.slice(0, templateStart);
      const firstMatch = new RegExp(`R\\s*1\\s*\\/\\s*${total}`, 'i').exec(beforeTemplate);
      if (firstMatch) {
        const firstStart = beforeTemplate.lastIndexOf('\n', firstMatch.index) + 1;
        firstTask = cleanPanelTaskText(trimAfterPanelGuideText(beforeTemplate.slice(firstStart)));
      }
    }

    const tasks = [];
    tasks.push(fillPanelRoundPlaceholders(firstTask || template, 1, total));
    for (let round = 2; round <= total; round += 1) {
      tasks.push(fillPanelRoundPlaceholders(template, round, total));
    }
    return tasks.filter(Boolean);
  }

  function splitPanelRoundHeadings(raw) {
    const text = String(raw || '').trim();
    const matches = [...text.matchAll(/(?:^|\n)([^\n]*R\d+\s*\/\s*\d+[^\n]*)/gi)];
    if (matches.length <= 1) return [];
    return matches.map((match, index) => {
      const start = match.index + (match[0].startsWith('\n') ? 1 : 0);
      const end = index + 1 < matches.length
        ? matches[index + 1].index + (matches[index + 1][0].startsWith('\n') ? 1 : 0)
        : text.length;
      return cleanPanelTaskText(text.slice(start, end));
    }).filter(Boolean);
  }

  function parsePanelTasks(raw) {
    const text = String(raw || '').trim();
    if (!text) return [];

    if (/\s*(?:---\s*task\s*---|--\s*task\s*--)\s*/i.test(text)) {
      return text
        .split(/\s*(?:---\s*task\s*---|--\s*task\s*--)\s*/gi)
        .map(cleanPanelTaskText)
        .filter(Boolean);
    }

    const expanded = expandPanelRoundTemplate(text);
    if (expanded.length) return expanded;

    const headingTasks = splitPanelRoundHeadings(text);
    if (headingTasks.length) return headingTasks;

    return [cleanPanelTaskText(text)].filter(Boolean);
  }

  function normalizeRoundText(text, round, total) {
    const marker = `TASK_DONE:R${round}/${total}`;
    let task = cleanPanelTaskText(text)
      .replace(/TASK_DONE\s*:\s*R\s*\d+\s*\/\s*\d+/gi, marker)
      .replace(/TASK_DONE\s*:\s*R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/gi, marker)
      .replace(/R\s*\d+\s*\/\s*\d+/g, `R${round}/${total}`)
      .replace(/R\s*[\{\uFF5B][^\}\uFF5D]+[\}\uFF5D]\s*\/\s*\d+/g, `R${round}/${total}`);

    if (!/TASK_DONE\s*:\s*R\s*\d+\s*\/\s*\d+/i.test(task)) {
      task += `\n\n\u7ED3\u5C3E\u5FC5\u987B\u8F93\u51FA:\n${marker}`;
    }
    return task.trim();
  }

  function generatePanelRoundTasks(raw, requestedTotal) {
    const text = String(raw || '').trim();
    if (!text) return [];

    const separated = parsePanelTasks(text);
    if (separated.length > 1 && !panelPlaceholderRoundPattern().test(text)) {
      return separated;
    }

    const expanded = expandPanelRoundTemplate(text);
    if (expanded.length) return expanded;

    const total = Math.max(1, Math.min(300, Number(requestedTotal) || detectPanelTemplateTotal(text) || 12));
    const base = cleanPanelTaskText(text);
    const tasks = [];
    for (let round = 1; round <= total; round += 1) {
      tasks.push(normalizeRoundText(base, round, total));
    }
    return tasks;
  }

  function tasksText() {
    return agentTasks.map(task => `---TASK---\n${task}`).join('\n\n');
  }

  function panelStatusText() {
    const total = agentTasks.length;
    const current = total ? Math.min(agentIndex + 1, total) : 0;
    return `状态：${agentStatus} | R${current}/${total} | 完成方式：${completionModeLabel(completionMode)} | ${document.title || location.hostname}`;
  }

  function panelRunBox() {
    if (isRunning || agentStatus === 'running') {
      return { text: '☑ 跑 | running', className: 'running' };
    }
    if (/pause|paused|confirm_needed/.test(agentStatus)) {
      return { text: `☐ 暂停 | ${lastError || agentStatus}`, className: 'paused' };
    }
    if (lastError) {
      return { text: `☐ 停 | ${lastError}`, className: 'stopped' };
    }
    return { text: `☐ 停 | ${agentStatus || 'idle'}`, className: 'stopped' };
  }

  async function waitForDone(ctx) {
    const myCancelToken = cancelToken;
    let lastMutationAt = Date.now();
    let target = null;
    let sawUser = ctx.baseline.userCount === 0;
    let sawAssistant = false;
    let sawMarkerAt = 0;

    if (observer) {
      try { observer.disconnect(); } catch {}
      observer = null;
    }

    observer = new MutationObserver(() => {
      lastMutationAt = Date.now();
    });
    observer.observe(chatRoot(), {
      subtree: true,
      childList: true,
      characterData: true
    });

    report('WAITING', `R${ctx.index + 1}/${ctx.total} marker=${ctx.marker}`);
    const start = Date.now();

    while (Date.now() - start < MAX_WAIT_MS) {
      if (destroyed || shouldStop) return { done: false, reason: 'stopped' };
      if (cancelToken !== myCancelToken) return { done: false, reason: 'cancelled' };

      const lazyManMarker = getLazyManMarkerMatch(ctx.marker, ctx.baseline);
      if (lazyManMarker.text) {
        if (!sawMarkerAt) {
          sawMarkerAt = Date.now();
          report('LAZYMAN_MARKER_SEEN', ctx.marker);
        }

        const quiet = Date.now() - lastMutationAt >= SETTLE_MS;
        const markerSettled = Date.now() - sawMarkerAt >= SETTLE_MS;
        if (quiet && markerSettled) {
          try { observer.disconnect(); } catch {}
          observer = null;
          lockedAssistant = null;
          report('ROUND_DONE', `${ctx.marker} via LazyMan fallback`);
          return { done: true, text: lazyManMarker.text, marker: ctx.marker };
        }
      }

      const lazyManReply = getLazyManReplyMatch(ctx.baseline);
      if (lazyManReply.text && Date.now() - start >= 8000) {
        const quiet = Date.now() - lastMutationAt >= SETTLE_MS;
        if (quiet) {
          try { observer.disconnect(); } catch {}
          observer = null;
          lockedAssistant = null;
          report('ROUND_DONE', `${ctx.marker} via LazyMan stable reply fallback`);
          return { done: true, text: lazyManReply.text, marker: ctx.marker, markerMissing: true };
        }
      }

      if (!sawUser && userNodes().length > ctx.baseline.userCount) {
        sawUser = true;
        report('USER_POSTED', `userCount=${userNodes().length}`);
      }

      if (sawUser && !target) {
        target = getLockedAssistantAfter(ctx.baseline);
        if (target) {
          lockedAssistant = target;
          sawAssistant = true;
          report('ASSISTANT_LOCKED', `assistantCount=${assistantNodes().length}`);
        }
      }

      if (sawUser && !target) {
        await sleep(POLL_MS);
        continue;
      }

      if (target) {
        const text = textOf(target);
        if (!sawMarkerAt && !isPromptEchoText(text) && text.includes(ctx.marker)) {
          sawMarkerAt = Date.now();
          report('MARKER_SEEN', ctx.marker);
        }

        const quiet = Date.now() - lastMutationAt >= SETTLE_MS;
        const markerSettled = sawMarkerAt && Date.now() - sawMarkerAt >= SETTLE_MS;
        const stopGone = !findStopButton();

        if (sawMarkerAt && quiet && markerSettled && stopGone) {
          try { observer.disconnect(); } catch {}
          observer = null;
          report('ROUND_DONE', ctx.marker);
          return { done: true, text, marker: ctx.marker };
        }
      }

      await sleep(POLL_MS);
    }

    try { observer.disconnect(); } catch {}
    observer = null;

    if (!sawUser) return { done: false, reason: 'no_new_user_node' };
    if (!sawAssistant) return { done: false, reason: 'no_new_assistant_node' };
    return {
      done: false,
      reason: 'marker_missing_or_unsettled',
      text: target ? textOf(target) : ''
    };
  }

  async function executeTask(task, options = {}) {
    const index = Number(options.index || 0);
    const total = Number(options.total || agentTasks.length || 1);
    const mode = normalizeCompletionMode(options.completionMode || completionMode);
    const waitMs = Math.max(1000, Number(options.imageWaitMs || imageWaitMs || 120000));
    if (isRunning) return { ok: false, status: 'busy', error: 'Already executing a task' };
    shouldStop = false;
    lastError = '';

    isRunning = true;
    lockedAssistant = null;
    updateCapsule('running', `Running R${index + 1}/${total} · ${completionModeLabel(mode)}`);
    report('TASK_START', `Start R${index + 1}/${total} mode=${mode}`);

    try {
      if (isLazyManSite()) await closeLazyManBlockingModal();
      const input = findInput();
      if (!input) {
        isRunning = false;
        lastError = 'Input element not found';
        saveKernelState();
        updateCapsule('error', 'No input');
        report('ERROR', 'Input not found');
        return { ok: false, status: 'input_missing', error: 'Input element not found' };
      }

      const baseline = takeBaseline(index, total);
      const safePrompt = taskForMode(task, index, total, mode);
      setInputText(input, safePrompt);

      await sleep(500);
      const sendButton = findSendButton();
      if (!sendButton && !isLazyManSite()) {
        isRunning = false;
        lastError = 'Send button not found. Input preserved for manual send.';
        saveKernelState();
        updateCapsule('paused', 'No send button');
        report('ERROR', 'Send button not found');
        return { ok: false, status: 'send_button_missing', error: 'Send button not found. Input preserved for manual send.' };
      }

      const submitted = await submitPrompt(input, sendButton);
      if (!submitted) {
        isRunning = false;
        lastError = 'Submit failed. Input preserved for manual send.';
        saveKernelState();
        updateCapsule('paused', 'Submit failed');
        report('ERROR', 'Submit failed');
        return { ok: false, status: 'send_failed', error: 'Submit failed. Input preserved for manual send.' };
      }
      updateCapsule('waiting', `Sent R${index + 1}/${total}`);
      report('SENT', `Task sent, mode=${mode}`);

      if (mode === 'manual') {
        isRunning = false;
        lastError = '';
        setAgentStatus('confirm_needed', '请人工确认本轮');
        updateCapsule('paused', `待确认 R${index + 1}/${total}`);
        report('CONFIRM_NEEDED', `Manual confirm R${index + 1}/${total}`);
        return {
          ok: false,
          status: 'confirm_needed',
          error: 'Manual confirmation required',
          task: String(task || '').slice(0, 2000),
          round: index + 1,
          total,
          mode
        };
      }

      if (mode === 'image') {
        const myCancelToken = cancelToken;
        const startedAt = Date.now();
        updateCapsule('waiting', `图像等待 ${Math.ceil(waitMs / 1000)}s`);
        while (Date.now() - startedAt < waitMs) {
          if (destroyed || shouldStop || cancelToken !== myCancelToken) {
            shouldStop = false;
            isRunning = false;
            setAgentStatus('paused', '已暂停');
            updateCapsule('paused', '已暂停');
            report('STOPPED', 'Image timer stopped');
            return { ok: false, status: 'stopped', error: 'Image timer stopped', round: index + 1, total, mode };
          }
          await sleep(1000);
        }
        isRunning = false;
        lastError = '';
        setAgentStatus('confirm_needed', '图像可能完成，请人工确认');
        updateCapsule('paused', `图像可能完成 R${index + 1}/${total}`);
        report('CONFIRM_NEEDED', `Image timer done R${index + 1}/${total}`);
        return {
          ok: false,
          status: 'confirm_needed',
          error: 'Image timer finished; manual confirmation required',
          task: String(task || '').slice(0, 2000),
          round: index + 1,
          total,
          mode,
          waitedMs: waitMs
        };
      }

      updateCapsule('waiting', `Waiting TASK_DONE R${index + 1}/${total}`);
      report('WAIT_MARKER', 'Task sent, role-lock waiting');

      const result = await waitForDone({ index, total, marker: baseline.marker, baseline });
      if (shouldStop) {
        shouldStop = false;
        isRunning = false;
        updateCapsule('stopped', 'Stopped');
        report('STOPPED', 'Stopped by user');
        return { ok: false, status: 'stopped', error: 'Stopped by user' };
      }

      if (!result.done) {
        isRunning = false;
        setAgentStatus('paused', 'Paused');
        lastError = result.reason || 'Role-lock not done';
        saveKernelState();
        updateCapsule('paused', result.reason || 'Not done');
        report('ERROR', `Role-lock not done: ${result.reason || 'unknown'}`);
        broadcastAgent('ERROR', { status: 'paused', error: result.reason || 'Role-lock not done' });
        return {
          ok: false,
          status: 'manual_pause',
          error: result.reason || 'Role-lock not done',
          text: result.text || '',
          task: String(task || '').slice(0, 2000),
          round: index + 1,
          total
        };
      }

      isRunning = false;
      lastError = '';
      setAgentStatus('idle', 'Idle');
      updateCapsule('done', `Done R${index + 1}/${total}`);
      report('DONE', `Reply done ${result.marker}`);
      const payload = {
        ok: true,
        status: 'done',
        text: result.text,
        marker: result.marker,
        task: String(task || '').slice(0, 2000),
        round: index + 1,
        total
      };
      broadcastAgent('RESULT', { status: 'idle', lastMessage: result.text, result: payload });
      return payload;
    } catch (error) {
      isRunning = false;
      lastError = error.message;
      setAgentStatus('error', 'Error');
      saveKernelState();
      updateCapsule('error', 'Error');
      report('ERROR', error.message);
      broadcastAgent('ERROR', { status: 'error', error: error.message });
      return { ok: false, status: 'error', error: error.message };
    }
  }

  async function sendAgentCurrent(options = {}) {
    if (!agentTasks.length) return { ok: false, error: 'No agent tasks' };
    if (agentIndex >= agentTasks.length) {
      setAgentStatus('done', 'All done');
      return { ok: false, error: 'All agent tasks completed' };
    }

    shouldStop = false;
    if (!options.preserveRunId) runId += 1;
    setAgentStatus('running', 'Running...');
    const result = await executeTask(agentTasks[agentIndex], {
      index: agentIndex,
      total: agentTasks.length
    });

    if (result && result.ok && result.status === 'done') {
      agentIndex += 1;
      saveKernelState();
      if (agentIndex >= agentTasks.length) {
        setAgentStatus('done', 'All done');
      } else if (options.autoMode) {
        setAgentStatus('running', 'Auto running...');
      } else {
        setAgentStatus('idle', 'Idle');
      }
    } else if (result && result.status === 'confirm_needed') {
      setAgentStatus('confirm_needed', '等待人工确认');
    } else {
      setAgentStatus('paused', 'Paused');
    }
    broadcastAgent('HEARTBEAT');
    return result;
  }

  async function autoAgentRun() {
    if (normalizeCompletionMode(completionMode) !== 'text') {
      setAgentStatus('confirm_needed', '当前模式需要人工确认');
      return { ok: false, status: 'confirm_needed', error: 'Auto run is only enabled for text TASK_DONE mode' };
    }
    if (autoTimer) clearTimeout(autoTimer);
    shouldStop = false;
    setAgentStatus('running', 'Auto running...');
    const myRun = ++runId;

    const loop = async () => {
      if (runId !== myRun || agentStatus !== 'running') return;
      if (agentIndex >= agentTasks.length) {
        setAgentStatus('done', 'All done');
        return;
      }
      const result = await sendAgentCurrent({ preserveRunId: true, autoMode: true });
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
    runId += 1;
    cancelToken += 1;
    if (autoTimer) clearTimeout(autoTimer);
    autoTimer = null;
    setAgentStatus('paused', 'Paused');
    return { ok: true };
  }

  function stopAgent() {
    runId += 1;
    cancelToken += 1;
    if (autoTimer) clearTimeout(autoTimer);
    autoTimer = null;
    shouldStop = true;
    isRunning = false;
    lockedAssistant = null;
    if (observer) {
      try { observer.disconnect(); } catch {}
      observer = null;
    }
    setAgentStatus('stopped', 'Stopped');
    return { ok: true };
  }

  async function handleAgentCommand(msg) {
    const requestedChannel = String(msg.channel || '').toLowerCase();
    if (requestedChannel === 'lazyman' && siteKind() !== 'lazyman') {
      return { ok: false, status: 'channel_mismatch', error: 'LazyMan channel requires lazymanchat.com page', siteKind: siteKind() };
    }
    if (requestedChannel === 'chatgpt' && siteKind() !== 'chatgpt') {
      return { ok: false, status: 'channel_mismatch', error: 'ChatGPT channel requires chatgpt.com page', siteKind: siteKind() };
    }

    switch (msg.command) {
      case 'LOAD_TASK': {
        const tasks = Array.isArray(msg.tasks) ? msg.tasks : (msg.task ? [msg.task] : []);
        shouldStop = false;
        isRunning = false;
        lockedAssistant = null;
        runId += 1;
        cancelToken += 1;
        if (autoTimer) clearTimeout(autoTimer);
        autoTimer = null;
        if (observer) {
          try { observer.disconnect(); } catch {}
          observer = null;
        }
        agentTasks = tasks;
        agentIndex = Number(msg.index || 0);
        agentCategory = msg.category || agentCategory || 'dynamic';
        agentProject = msg.project || agentProject || '';
        completionMode = normalizeCompletionMode(msg.completionMode || completionMode);
        if (Number(msg.imageWaitMs) > 0) imageWaitMs = Number(msg.imageWaitMs);
        lastError = '';
        saveKernelState();
        setAgentStatus(tasks.length ? 'idle' : 'empty', tasks.length ? 'Tasks loaded' : 'No tasks');
        return { ok: true, count: agentTasks.length, index: agentIndex };
      }
      case 'SET_COMPLETION_MODE':
        completionMode = normalizeCompletionMode(msg.completionMode || msg.mode || completionMode);
        if (Number(msg.imageWaitMs) > 0) imageWaitMs = Number(msg.imageWaitMs);
        saveKernelState();
        setAgentStatus(agentTasks.length ? 'idle' : agentStatus, `完成方式：${completionModeLabel(completionMode)}`);
        return { ok: true, completionMode, imageWaitMs };
      case 'CONFIRM_CURRENT':
        if (!agentTasks.length) return { ok: false, error: 'No agent tasks' };
        agentIndex = Math.min(agentIndex + 1, agentTasks.length);
        saveKernelState();
        setAgentStatus(agentIndex >= agentTasks.length ? 'done' : 'idle', agentIndex >= agentTasks.length ? 'All done' : 'Confirmed');
        return { ok: true, index: agentIndex, total: agentTasks.length };
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
          task: 'manual archive latest assistant reply',
          round: agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 0,
          total: agentTasks.length || 0
        };
      }
      case 'DEBUG_DUMP':
        return debugDumpPageText();
      case 'EXPORT_LATEST_IMAGE':
        return await exportLatestImage();
      case 'SHOW_PANEL':
        createPanel();
        addPanelLog('Panel opened');
        return { ok: true, status: 'panel_opened' };
      case 'HIDE_PANEL': {
        const panel = document.getElementById(PANEL_ID);
        if (panel) panel.remove();
        return { ok: true, status: 'panel_hidden' };
      }
      case 'PAUSE':
        return pauseAgent();
      case 'STOP':
        return stopAgent();
      case 'NEXT_ROUND':
        agentIndex = Math.min(agentIndex + 1, agentTasks.length);
        saveKernelState();
        setAgentStatus('idle', 'Next round');
        return { ok: true, index: agentIndex };
      case 'PREV_ROUND':
        agentIndex = Math.max(agentIndex - 1, 0);
        saveKernelState();
        setAgentStatus('idle', 'Prev round');
        return { ok: true, index: agentIndex };
      default:
        return { ok: false, error: 'Unknown agent command: ' + msg.command };
    }
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
          font-family: "Segoe UI", system-ui, sans-serif;
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
      <span class="capsule-label">Ten Yuan Page Kernel</span><br>
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

  function createLegacyPanel() {
    const existing = document.getElementById(PANEL_ID);
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = PANEL_ID;
    panel.innerHTML = `
      <style>
        #${PANEL_ID} {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: min(760px, calc(100vw - 44px));
          max-height: min(760px, calc(100vh - 44px));
          z-index: 999999;
          background: rgba(12, 13, 18, 0.96);
          color: #f4f4f5;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 18px 60px rgba(0,0,0,0.42);
          border-radius: 12px;
          padding: 14px;
          font-family: "Segoe UI", system-ui, sans-serif;
          font-size: 13px;
          line-height: 1.45;
        }
        #${PANEL_ID} * { box-sizing: border-box; }
        #${PANEL_ID} .ty-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        #${PANEL_ID} .ty-head { justify-content: space-between; margin-bottom: 10px; }
        #${PANEL_ID} .ty-title { font-weight: 750; font-size: 15px; }
        #${PANEL_ID} .ty-status { color: #a8b3cf; margin: 6px 0 10px; }
        #${PANEL_ID} .ty-runbox {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          margin: 0 0 10px;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.16);
          background: #11131a;
          font-weight: 800;
          color: #cbd5e1;
        }
        #${PANEL_ID} .ty-runbox.running {
          color: #86efac;
          border-color: rgba(34,197,94,0.55);
          background: rgba(20,83,45,0.42);
        }
        #${PANEL_ID} .ty-runbox.paused {
          color: #fdba74;
          border-color: rgba(249,115,22,0.55);
          background: rgba(124,45,18,0.38);
        }
        #${PANEL_ID} .ty-runbox.stopped {
          color: #cbd5e1;
        }
        #${PANEL_ID} .ty-field {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          font-weight: 650;
        }
        #${PANEL_ID} input[type="number"] {
          width: 76px;
          background: #07080c;
          color: #f7f7f8;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 7px;
          padding: 7px 8px;
          font: 13px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        #${PANEL_ID} textarea {
          width: 100%;
          height: 210px;
          resize: vertical;
          background: #07080c;
          color: #f7f7f8;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          padding: 10px;
          margin: 10px 0;
          font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          white-space: pre;
        }
        #${PANEL_ID} button {
          border: 0;
          border-radius: 7px;
          padding: 8px 11px;
          color: white;
          background: #3f4656;
          cursor: pointer;
          font-weight: 650;
        }
        #${PANEL_ID} button[data-main="send"] { background: #4858e8; }
        #${PANEL_ID} button[data-main="auto"] { background: #159947; }
        #${PANEL_ID} button[data-main="stop"] { background: #c8243a; }
        #${PANEL_ID} button[data-main="load"] { background: #7b35e8; }
        #${PANEL_ID} button[data-main="generate"] { background: #0d8ca8; }
        #${PANEL_ID} button[data-main="complete"] { background: #7a6424; }
        #${PANEL_ID} .ty-log {
          margin-top: 10px;
          max-height: 120px;
          overflow: auto;
          background: #07080c;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 8px;
          color: #c8d0e0;
          white-space: pre-wrap;
          font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
      </style>
      <div class="ty-row ty-head">
        <div class="ty-title">十元 F12 页面控制器 v1.3</div>
        <button id="ty-kernel-hide">隐藏</button>
      </div>
      <div id="ty-kernel-status" class="ty-status"></div>
      <div id="ty-kernel-runbox" class="ty-runbox stopped">☐ 停</div>
      <div class="ty-row">
        <button id="ty-kernel-load" data-main="load">载入文本</button>
        <label class="ty-field">总轮数 <input id="ty-kernel-round-total" type="number" min="1" max="300" value="12"></label>
        <button id="ty-kernel-generate" data-main="generate">生成轮次</button>
        <button id="ty-kernel-send" data-main="send">发送当前</button>
        <button id="ty-kernel-auto" data-main="auto">自动续跑</button>
        <button id="ty-kernel-pause">暂停</button>
        <button id="ty-kernel-stop" data-main="stop">停止</button>
      </div>
      <div class="ty-row" style="margin-top:8px">
        <button id="ty-kernel-prev">上一轮</button>
        <button id="ty-kernel-complete" data-main="complete">手动确认本轮</button>
        <button id="ty-kernel-next">下一轮</button>
        <label class="ty-field">跳到 <input id="ty-kernel-jump-round" type="number" min="1" max="300" value="1"></label>
        <button id="ty-kernel-jump">跳转</button>
        <button id="ty-kernel-reset">重置</button>
      </div>
      <textarea id="ty-kernel-textarea" spellcheck="false"></textarea>
      <div id="ty-kernel-log" class="ty-log"></div>
    `;

    document.body.appendChild(panel);

    function setTextareaFromTasks() {
      const textarea = panel.querySelector('#ty-kernel-textarea');
      if (textarea) textarea.value = tasksText();
      renderPanel();
    }

    function loadTasksFromTextarea({ generated = false } = {}) {
      const textarea = panel.querySelector('#ty-kernel-textarea');
      const raw = textarea?.value || '';
      const totalInput = panel.querySelector('#ty-kernel-round-total');
      const requestedTotal = Number(totalInput?.value || 12);
      const parsed = generated ? generatePanelRoundTasks(raw, requestedTotal) : parsePanelTasks(raw);
      agentTasks = parsed;
      agentIndex = Math.min(agentIndex, Math.max(agentTasks.length - 1, 0));
      if (!generated) agentIndex = 0;
      lastError = '';
      saveKernelState();
      setAgentStatus(parsed.length ? 'idle' : 'empty', parsed.length ? '任务已载入' : '没有任务');
      setTextareaFromTasks();
      addPanelLog(`${generated ? '生成并载入' : '载入'} ${parsed.length} 个任务`);
      return parsed;
    }

    function ensureTasksLoaded() {
      if (agentTasks.length) return true;
      const textarea = panel.querySelector('#ty-kernel-textarea');
      if (!String(textarea?.value || '').trim()) return false;
      return loadTasksFromTextarea().length > 0;
    }

    function syncRoundInputs() {
      const totalInput = panel.querySelector('#ty-kernel-round-total');
      if (totalInput && agentTasks.length) totalInput.value = String(agentTasks.length);
      const jumpInput = panel.querySelector('#ty-kernel-jump-round');
      if (jumpInput) jumpInput.value = String(agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 1);
    }

    panel.querySelector('#ty-kernel-hide').onclick = () => panel.remove();
    panel.querySelector('#ty-kernel-load').onclick = () => {
      agentIndex = 0;
      loadTasksFromTextarea();
      syncRoundInputs();
    };
    panel.querySelector('#ty-kernel-generate').onclick = () => {
      agentIndex = 0;
      loadTasksFromTextarea({ generated: true });
      syncRoundInputs();
    };
    panel.querySelector('#ty-kernel-send').onclick = () => {
      if (!ensureTasksLoaded()) {
        addPanelLog('没有任务：请先粘贴文本或点击生成轮次');
        return;
      }
      addPanelLog('发送当前');
      sendAgentCurrent().then(result => addPanelLog(JSON.stringify({ ok: result?.ok, status: result?.status || result?.error }))).catch(error => addPanelLog(error.message));
    };
    panel.querySelector('#ty-kernel-auto').onclick = () => {
      if (!ensureTasksLoaded()) {
        addPanelLog('没有任务：请先粘贴文本或点击生成轮次');
        return;
      }
      addPanelLog('自动续跑');
      autoAgentRun().then(result => addPanelLog(JSON.stringify(result))).catch(error => addPanelLog(error.message));
    };
    panel.querySelector('#ty-kernel-pause').onclick = () => {
      pauseAgent();
      addPanelLog('已暂停');
    };
    panel.querySelector('#ty-kernel-stop').onclick = () => {
      stopAgent();
      addPanelLog('已停止');
    };
    panel.querySelector('#ty-kernel-prev').onclick = () => {
      agentIndex = Math.max(agentIndex - 1, 0);
      saveKernelState();
      setAgentStatus('idle', '上一轮');
      setTextareaFromTasks();
      syncRoundInputs();
      addPanelLog(`上一轮 -> R${agentTasks.length ? agentIndex + 1 : 0}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-complete').onclick = () => {
      if (!agentTasks.length) {
        addPanelLog('没有任务可确认');
        return;
      }
      agentIndex = Math.min(agentIndex + 1, agentTasks.length);
      saveKernelState();
      setAgentStatus(agentIndex >= agentTasks.length ? 'done' : 'idle', agentIndex >= agentTasks.length ? '全部完成' : '已确认本轮');
      syncRoundInputs();
      addPanelLog(`手动确认 -> R${Math.min(agentIndex + 1, agentTasks.length)}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-next').onclick = () => {
      agentIndex = Math.min(agentIndex + 1, Math.max(agentTasks.length - 1, 0));
      saveKernelState();
      setAgentStatus('idle', '下一轮');
      setTextareaFromTasks();
      syncRoundInputs();
      addPanelLog(`下一轮 -> R${agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 0}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-jump').onclick = () => {
      const jump = Number(panel.querySelector('#ty-kernel-jump-round')?.value || 1);
      if (!agentTasks.length) {
        addPanelLog('没有任务可跳转');
        return;
      }
      agentIndex = Math.max(0, Math.min(jump - 1, agentTasks.length - 1));
      saveKernelState();
      setAgentStatus('idle', '已跳转');
      setTextareaFromTasks();
      syncRoundInputs();
      addPanelLog(`跳转 -> R${agentIndex + 1}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-reset').onclick = () => {
      agentTasks = [];
      agentIndex = 0;
      saveKernelState();
      setAgentStatus('empty', '已重置');
      syncRoundInputs();
      addPanelLog('已重置');
    };

    const textarea = panel.querySelector('#ty-kernel-textarea');
    if (textarea) textarea.value = tasksText();
    syncRoundInputs();
    renderPanel();
  }

  function createPanel() {
    const existing = document.getElementById(PANEL_ID);
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id = PANEL_ID;
    panel.innerHTML = `
      <style>
        #${PANEL_ID} {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: min(820px, calc(100vw - 44px));
          max-height: min(780px, calc(100vh - 44px));
          z-index: 999999;
          background: rgba(12, 13, 18, 0.96);
          color: #f4f4f5;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 18px 60px rgba(0,0,0,0.42);
          border-radius: 12px;
          padding: 14px;
          font-family: "Segoe UI", system-ui, sans-serif;
          font-size: 13px;
          line-height: 1.45;
        }
        #${PANEL_ID} * { box-sizing: border-box; }
        #${PANEL_ID} .ty-row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        #${PANEL_ID} .ty-head { justify-content: space-between; margin-bottom: 10px; }
        #${PANEL_ID} .ty-title { font-weight: 750; font-size: 15px; }
        #${PANEL_ID} .ty-status { color: #a8b3cf; margin: 6px 0 10px; }
        #${PANEL_ID} .ty-field {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          font-weight: 650;
        }
        #${PANEL_ID} input[type="number"], #${PANEL_ID} select {
          background: #07080c;
          color: #f7f7f8;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 7px;
          padding: 7px 8px;
          font: 13px/1.2 "Segoe UI", system-ui, sans-serif;
        }
        #${PANEL_ID} input[type="number"] {
          width: 76px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        #${PANEL_ID} textarea {
          width: 100%;
          height: 210px;
          resize: vertical;
          background: #07080c;
          color: #f7f7f8;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          padding: 10px;
          margin: 10px 0;
          font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          white-space: pre;
        }
        #${PANEL_ID} button {
          border: 0;
          border-radius: 7px;
          padding: 8px 11px;
          color: white;
          background: #3f4656;
          cursor: pointer;
          font-weight: 650;
        }
        #${PANEL_ID} button[data-main="send"] { background: #4858e8; }
        #${PANEL_ID} button[data-main="auto"] { background: #159947; }
        #${PANEL_ID} button[data-main="stop"] { background: #c8243a; }
        #${PANEL_ID} button[data-main="load"] { background: #7b35e8; }
        #${PANEL_ID} button[data-main="generate"] { background: #0d8ca8; }
        #${PANEL_ID} button[data-main="complete"] { background: #7a6424; }
        #${PANEL_ID} button[data-main="archive"] { background: #a36b18; }
        #${PANEL_ID} .ty-log {
          margin-top: 10px;
          max-height: 132px;
          overflow: auto;
          background: #07080c;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 8px;
          color: #c8d0e0;
          white-space: pre-wrap;
          font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
      </style>
      <div class="ty-row ty-head">
        <div class="ty-title">十元 F12 页面控制器 v1.4 手动稳定版</div>
        <button id="ty-kernel-hide">隐藏</button>
      </div>
      <div id="ty-kernel-status" class="ty-status"></div>
      <div class="ty-row">
        <button id="ty-kernel-load" data-main="load">载入文本</button>
        <label class="ty-field">总轮数 <input id="ty-kernel-round-total" type="number" min="1" max="300" value="12"></label>
        <button id="ty-kernel-generate" data-main="generate">生成轮次</button>
        <label class="ty-field">完成方式
          <select id="ty-kernel-mode">
            <option value="text">文本 TASK_DONE</option>
            <option value="image">图像倒计时</option>
            <option value="manual">手动确认</option>
          </select>
        </label>
        <label class="ty-field">等待秒 <input id="ty-kernel-image-wait" type="number" min="10" max="1800" value="120"></label>
      </div>
      <div class="ty-row" style="margin-top:8px">
        <button id="ty-kernel-send" data-main="send">发送当前</button>
        <button id="ty-kernel-auto" data-main="auto">文本自动续跑</button>
        <button id="ty-kernel-pause">暂停</button>
        <button id="ty-kernel-stop" data-main="stop">停止</button>
        <button id="ty-kernel-archive" data-main="archive">抓最新回复</button>
      </div>
      <div class="ty-row" style="margin-top:8px">
        <button id="ty-kernel-prev">上一轮</button>
        <button id="ty-kernel-complete" data-main="complete">确认完成并下一轮</button>
        <button id="ty-kernel-next">下一轮</button>
        <label class="ty-field">跳到 <input id="ty-kernel-jump-round" type="number" min="1" max="300" value="1"></label>
        <button id="ty-kernel-jump">跳转</button>
        <button id="ty-kernel-reset">重置</button>
      </div>
      <textarea id="ty-kernel-textarea" spellcheck="false"></textarea>
      <div id="ty-kernel-log" class="ty-log"></div>
    `;

    document.body.appendChild(panel);

    function readModeInputs() {
      const modeInput = panel.querySelector('#ty-kernel-mode');
      const waitInput = panel.querySelector('#ty-kernel-image-wait');
      completionMode = normalizeCompletionMode(modeInput?.value || completionMode);
      imageWaitMs = Math.max(10000, Number(waitInput?.value || 120) * 1000);
      saveKernelState();
    }

    function syncModeInputs() {
      const modeInput = panel.querySelector('#ty-kernel-mode');
      if (modeInput) modeInput.value = normalizeCompletionMode(completionMode);
      const waitInput = panel.querySelector('#ty-kernel-image-wait');
      if (waitInput) waitInput.value = String(Math.round((imageWaitMs || 120000) / 1000));
    }

    function setTextareaFromTasks() {
      const textarea = panel.querySelector('#ty-kernel-textarea');
      if (textarea) textarea.value = tasksText();
      renderPanel();
    }

    function loadTasksFromTextarea({ generated = false } = {}) {
      readModeInputs();
      const textarea = panel.querySelector('#ty-kernel-textarea');
      const raw = textarea?.value || '';
      const totalInput = panel.querySelector('#ty-kernel-round-total');
      const requestedTotal = Number(totalInput?.value || 12);
      const parsed = generated ? generatePanelRoundTasks(raw, requestedTotal) : parsePanelTasks(raw);
      agentTasks = parsed;
      agentIndex = Math.min(agentIndex, Math.max(agentTasks.length - 1, 0));
      if (!generated) agentIndex = 0;
      lastError = '';
      saveKernelState();
      setAgentStatus(parsed.length ? 'idle' : 'empty', parsed.length ? '任务已载入' : '没有任务');
      setTextareaFromTasks();
      addPanelLog(`${generated ? '生成并载入' : '载入'} ${parsed.length} 个任务，完成方式：${completionModeLabel(completionMode)}`);
      return parsed;
    }

    function ensureTasksLoaded() {
      if (agentTasks.length) return true;
      const textarea = panel.querySelector('#ty-kernel-textarea');
      if (!String(textarea?.value || '').trim()) return false;
      return loadTasksFromTextarea().length > 0;
    }

    function syncRoundInputs() {
      const totalInput = panel.querySelector('#ty-kernel-round-total');
      if (totalInput && agentTasks.length) totalInput.value = String(agentTasks.length);
      const jumpInput = panel.querySelector('#ty-kernel-jump-round');
      if (jumpInput) jumpInput.value = String(agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 1);
      syncModeInputs();
    }

    panel.querySelector('#ty-kernel-hide').onclick = () => panel.remove();
    panel.querySelector('#ty-kernel-mode').onchange = () => {
      readModeInputs();
      setAgentStatus(agentTasks.length ? 'idle' : agentStatus, `完成方式：${completionModeLabel(completionMode)}`);
      addPanelLog(`完成方式改为：${completionModeLabel(completionMode)}`);
    };
    panel.querySelector('#ty-kernel-image-wait').onchange = () => {
      readModeInputs();
      addPanelLog(`图像等待改为：${Math.round(imageWaitMs / 1000)} 秒`);
    };
    panel.querySelector('#ty-kernel-load').onclick = () => {
      agentIndex = 0;
      loadTasksFromTextarea();
      syncRoundInputs();
    };
    panel.querySelector('#ty-kernel-generate').onclick = () => {
      agentIndex = 0;
      loadTasksFromTextarea({ generated: true });
      syncRoundInputs();
    };
    panel.querySelector('#ty-kernel-send').onclick = () => {
      readModeInputs();
      if (!ensureTasksLoaded()) {
        addPanelLog('没有任务：请先粘贴文本或点击生成轮次');
        return;
      }
      addPanelLog(`发送当前：R${agentIndex + 1}/${agentTasks.length}，${completionModeLabel(completionMode)}`);
      sendAgentCurrent()
        .then(result => addPanelLog(JSON.stringify({ ok: result?.ok, status: result?.status || result?.error })))
        .catch(error => addPanelLog(error.message));
    };
    panel.querySelector('#ty-kernel-auto').onclick = () => {
      readModeInputs();
      if (!ensureTasksLoaded()) {
        addPanelLog('没有任务：请先粘贴文本或点击生成轮次');
        return;
      }
      if (normalizeCompletionMode(completionMode) !== 'text') {
        addPanelLog('当前不是文本 TASK_DONE 模式：不会自动续跑，请人工确认后点“确认完成并下一轮”。');
        return;
      }
      addPanelLog('文本自动续跑');
      autoAgentRun().then(result => addPanelLog(JSON.stringify(result))).catch(error => addPanelLog(error.message));
    };
    panel.querySelector('#ty-kernel-pause').onclick = () => {
      pauseAgent();
      addPanelLog('已暂停');
    };
    panel.querySelector('#ty-kernel-stop').onclick = () => {
      stopAgent();
      addPanelLog('已停止');
    };
    panel.querySelector('#ty-kernel-archive').onclick = () => {
      const text = getLastAssistantText();
      addPanelLog(text ? `已抓最新回复：${text.length} 字` : '没有抓到最新回复');
    };
    panel.querySelector('#ty-kernel-prev').onclick = () => {
      agentIndex = Math.max(agentIndex - 1, 0);
      saveKernelState();
      setAgentStatus('idle', '上一轮');
      setTextareaFromTasks();
      syncRoundInputs();
      addPanelLog(`上一轮 -> R${agentTasks.length ? agentIndex + 1 : 0}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-complete').onclick = () => {
      if (!agentTasks.length) {
        addPanelLog('没有任务可确认');
        return;
      }
      agentIndex = Math.min(agentIndex + 1, agentTasks.length);
      saveKernelState();
      setAgentStatus(agentIndex >= agentTasks.length ? 'done' : 'idle', agentIndex >= agentTasks.length ? '全部完成' : '已确认本轮');
      syncRoundInputs();
      addPanelLog(`确认完成 -> R${Math.min(agentIndex + 1, agentTasks.length)}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-next').onclick = () => {
      agentIndex = Math.min(agentIndex + 1, Math.max(agentTasks.length - 1, 0));
      saveKernelState();
      setAgentStatus('idle', '下一轮');
      setTextareaFromTasks();
      syncRoundInputs();
      addPanelLog(`下一轮 -> R${agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 0}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-jump').onclick = () => {
      const jump = Number(panel.querySelector('#ty-kernel-jump-round')?.value || 1);
      if (!agentTasks.length) {
        addPanelLog('没有任务可跳转');
        return;
      }
      agentIndex = Math.max(0, Math.min(jump - 1, agentTasks.length - 1));
      saveKernelState();
      setAgentStatus('idle', '已跳转');
      setTextareaFromTasks();
      syncRoundInputs();
      addPanelLog(`跳转 -> R${agentIndex + 1}/${agentTasks.length}`);
    };
    panel.querySelector('#ty-kernel-reset').onclick = () => {
      agentTasks = [];
      agentIndex = 0;
      saveKernelState();
      setAgentStatus('empty', '已重置');
      syncRoundInputs();
      addPanelLog('已重置');
    };

    const textarea = panel.querySelector('#ty-kernel-textarea');
    if (textarea) textarea.value = tasksText();
    syncRoundInputs();
    renderPanel();
  }

  function renderPanel() {
    const panel = document.getElementById(PANEL_ID);
    if (!panel) return;
    const status = panel.querySelector('#ty-kernel-status');
    if (status) status.textContent = panelStatusText();
    const runbox = panel.querySelector('#ty-kernel-runbox');
    if (runbox) {
      const info = panelRunBox();
      runbox.textContent = info.text;
      runbox.className = `ty-runbox ${info.className}`;
    }
    const log = panel.querySelector('#ty-kernel-log');
    if (log) log.textContent = panelLogs.slice(-24).join('\n') || '就绪：可用 ---TASK--- 分隔，或粘贴 R{轮数}/N 模板后点击“生成轮次”。';
  }

  function destroy() {
    destroyed = true;
    stopAgent();
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
    if (agentChannel) {
      try { agentChannel.close(); } catch {}
    }
    const capsule = document.getElementById(CAPSULE_ID);
    if (capsule) capsule.remove();
    const panel = document.getElementById(PANEL_ID);
    if (panel) panel.remove();
  }

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (window.__TY_F12_ACTIVE_KERNEL_INSTANCE_ID !== INSTANCE_ID) return false;
    switch (msg.type) {
      case 'PING':
        sendResponse({ ok: true, role: 'page-kernel', capabilities: healthCheck() });
        break;

      case 'WORKER_ACTIVATE':
        _tabId = msg.tabId;
        updateCapsule('activated', 'Armed');
        sendResponse({ ok: true, kernel: 'page-role-lock-v12' });
        break;

      case 'WORKER_STOP':
        sendResponse(stopAgent());
        break;

      case 'EXECUTE_TASK':
        runId += 1;
        executeTask(msg.task, { index: msg.index, total: msg.total })
          .then(result => sendResponse(result))
          .catch(error => sendResponse({ ok: false, error: error.message }));
        return true;

      case 'GET_PAGE_STATUS':
        sendResponse(healthCheck());
        break;

      case 'SHOW_PANEL':
        createPanel();
        addPanelLog('Panel opened by message');
        sendResponse({ ok: true, status: 'panel_opened' });
        break;

      case 'AGENT_COMMAND':
        handleAgentCommand(msg)
          .then(result => sendResponse(result))
          .catch(error => sendResponse({ ok: false, error: error.message }));
        return true;

      default:
        sendResponse({ ok: false, error: 'Unknown command: ' + msg.type });
    }
  });

  createCapsule();
  updateCapsule('dormant', 'Dormant');

  chrome.runtime.sendMessage({
    type: 'WORKER_READY',
    agentTabId,
    url: location.href,
    title: document.title,
    currentRound: agentTasks.length ? Math.min(agentIndex + 1, agentTasks.length) : 0,
    total: agentTasks.length
  }).catch(() => {});

  window[WORKER_ID] = {
    destroy,
    stop: stopAgent,
    showPanel: createPanel,
    healthCheck,
    executeTask,
    getState: () => ({ agentTasks, agentIndex, agentStatus, lockedAssistantText: lockedAssistant ? textOf(lockedAssistant) : '' })
  };

  if (agentChannel) {
    agentChannel.onmessage = event => {
      if (window.__TY_F12_ACTIVE_KERNEL_INSTANCE_ID !== INSTANCE_ID) return;
      const msg = event.data || {};
      if (msg.source !== 'ten-yuan-f12-controller') return;
      if (msg.targetTabId && msg.targetTabId !== agentTabId) return;
      handleAgentCommand(msg)
        .then(result => broadcastAgent('RESULT', { result }))
        .catch(error => broadcastAgent('ERROR', { error: error.message }));
    };
  }

  broadcastAgent('REGISTER');
  heartbeatTimer = setInterval(() => broadcastAgent('HEARTBEAT'), 3000);
})();
