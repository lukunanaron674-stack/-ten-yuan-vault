// sidepanel-v2.js �� F12 �ܼ���� v2.5
// ���ǩ���ȼ�� + BroadcastChannel �������� + ״̬ӳ���޸�

const BRIDGE = "http://127.0.0.1:17312";
const CHANNEL_NAME = "ten-yuan-f12-v1";
let activeTabId = null;
let bridgeOnline = false;
let tabs = {};

// ======== ״̬ӳ�� ========
const STATUS_MAP = {
  online: "idle",
  auto_running: "running",
  running: "running",
  stopped: "stopped",
  paused: "stopped",
  error: "done",
  done: "done",
  idle: "idle",
  empty: "idle",
};
function mapStatus(s) {
  return STATUS_MAP[s] || "idle";
}
function statusLabel(s) {
  const m = mapStatus(s);
  return { running: "? ����", idle: "�� ����", stopped: "�� ֹͣ", done: "? ���" }[m] || m;
}

// ======== Bridge API ========
async function bridgeCall(method, path, body) {
  try {
    const opts = { method, headers: { "content-type": "application/json" } };
    if (body) opts.body = JSON.stringify(body);
    const r = await fetch(BRIDGE + path, opts);
    return await r.json();
  } catch (e) {
    bridgeOnline = false;
    updateConn();
    return { ok: false, error: e.message };
  }
}
async function bridgePost(type, payload) {
  return bridgeCall("POST", "/commands", { type, payload });
}

// ======== UI ========
function updateConn() {
  const el = document.getElementById("conn");
  if (!el) return;
  if (bridgeOnline) {
    el.className = "conn online";
    el.textContent = "������";
  } else {
    el.className = "conn offline";
    el.textContent = "������";
  }
}

function log(msg) {
  const el = document.getElementById("logs");
  if (!el) return;
  const ts = new Date().toLocaleTimeString();
  el.innerHTML += `<div class="log-line"><span class="ts">${escapeHtml(ts)}</span> ${escapeHtml(msg)}</div>`;
  el.scrollTop = el.scrollHeight;
  const lines = el.querySelectorAll(".log-line");
  for (let i = 0; i < lines.length - 50; i++) lines[i].remove();
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function renderTabs() {
  const el = document.getElementById("active-tabs");
  if (!el) return;
  const entries = Object.values(tabs).sort(
    (a, b) => (b.lastHeartbeat || 0) - (a.lastHeartbeat || 0)
  );
  if (!entries.length) {
    el.innerHTML = '<div class="empty">�ȴ�ҳ��ע�ᡭ</div>';
    return;
  }
  el.innerHTML = entries
    .map((t) => {
      const age = Math.round((Date.now() - (t.lastHeartbeat || 0)) / 1000);
      const isAlive = age < 30;
      const mapped = isAlive ? mapStatus(t.status) : "stopped";
      const label = isAlive ? statusLabel(t.status) : "? ����";
      const round =
        t.total > 0
          ? `R${Math.min((t.currentRound || 0) + 1, t.total)}/${t.total}`
          : t.currentRound
          ? `R${t.currentRound}`
          : "";
      const title = t.scriptName || t.title || "Tab " + t.tabId;
      const lastMsg = (t.lastMessage || "").slice(0, 40);
      return `
      <div class="tab-row" data-tab-id="${escapeHtml(t.tabId)}">
        <div class="tab-header">
          <span class="tab-title" title="${escapeHtml(t.url || "")}">${escapeHtml(title)}</span>
          <span class="tab-status ${escapeHtml(mapped)}">${escapeHtml(label)}</span>
        </div>
        <div class="tab-progress">${escapeHtml(round)}${escapeHtml(round) && escapeHtml(lastMsg) ? " �� " : ""}${escapeHtml(lastMsg)} �� ${age}sǰ</div>
        <div class="tab-actions">
          <button class="btn-sm btn-go" data-action="resume" ${!isAlive ? "disabled" : ""}>?</button>
          <button class="btn-sm btn-stop" data-action="stop" ${!isAlive ? "disabled" : ""}>��</button>
          <button class="btn-sm btn-ghost" data-action="archive" ${!isAlive ? "disabled" : ""}>??</button>
        </div>
      </div>`;
    })
    .join("");
  el.querySelectorAll('.tab-row').forEach(row => {
    const tabId = row.dataset.tabId;
    row.querySelectorAll('[data-action]').forEach(btn => {
      btn.onclick = () => tabAction(tabId, btn.dataset.action);
    });
  });
}

function updateBindInfo() {
  const el = document.getElementById("bind-info");
  if (!el) return;
  if (activeTabId) {
    const t = tabs[activeTabId];
    el.textContent = `�Ѱ�: Tab ${activeTabId}${t ? " �� " + (t.title || "") : ""}`;
  } else {
    el.textContent = "δ��";
  }
}

// ======== �ű��� ========
const SCRIPT_LIBRARY = [
  {
    id: "onto-creation",
    name: "�����ഴ����",
    desc: "�������ӡ���Ļʽ����������д���־����鵵 R1-R9",
    file: "�����ഴ����_F12�ܿ�_v0.1.js",
    icon: "??",
  },
  {
    id: "char-analyzer",
    name: "��ɫʮԪ������",
    desc: "��������ʮԪ�ṹ������v0.4��ɫ�鵵��",
    file: "��ɫʮԪ������.js",
    icon: "??",
  },
  {
    id: "custom",
    name: "�Զ���ű�",
    desc: "�ӱ����ļ���������������˽ű�",
    file: "",
    icon: "??",
  },
];

function renderScriptLibrary() {
  const el = document.getElementById("script-library");
  if (!el) return;
  el.innerHTML = SCRIPT_LIBRARY.map(
    (s) => `
    <div class="script-card" data-script-id="${escapeHtml(s.id)}">
      <div class="script-info">
        <div class="script-name">${escapeHtml(s.icon)} ${escapeHtml(s.name)}</div>
        <div class="script-desc">${escapeHtml(s.desc)}</div>
      </div>
      <button class="btn-inject" ${!activeTabId ? "disabled" : ""}>ע��</button>
    </div>`
  ).join("");
  el.querySelectorAll('.script-card').forEach(card => {
    const btn = card.querySelector('.btn-inject');
    if (btn) {
      btn.onclick = () => injectScript(card.dataset.scriptId);
    }
  });
}

// ======== Actions ========
async function doBind() {
  log("BIND��");
  const r = await bridgePost("BIND", { source: "sidepanel" });
  if (r.ok && r.command) {
    setTimeout(async () => {
      try {
        const cmd = await bridgeCall("GET", "/commands/" + r.command.id);
        if (cmd.command?.result?.activeTabId) {
          activeTabId = cmd.command.result.activeTabId;
          log("�󶨳ɹ�: Tab " + activeTabId);
          updateBindInfo();
          renderScriptLibrary();
        }
      } catch (e) {
        log("BIND ��ѯʧ��: " + e.message);
      }
    }, 2000);
  } else {
    log("BIND ʧ��: " + (r.error || "unknown"));
  }
}

async function doInject() {
  if (!activeTabId) {
    log("���Ȱ󶨱�ǩ");
    return;
  }
  log("INJECT �� Tab " + activeTabId);
  await bridgePost("INJECT", { source: "sidepanel" });
  setTimeout(() => {
    bridgeOnline = true;
    updateConn();
    log("ע�����");
  }, 2000);
}

async function injectScript(scriptId) {
  if (!activeTabId) {
    log("���Ȱ󶨱�ǩ");
    return;
  }
  const script = SCRIPT_LIBRARY.find((s) => s.id === scriptId);
  if (!script) return;

  if (scriptId === "custom") {
    // ���Ŷ�ȡ�Զ���ű��ļ�
    const path = prompt("����ű��ļ�·��������� vault ��Ŀ¼��:", "04-F12�ܿ�����/�Զ���.js");
    if (!path) return;
    try {
      const r = await bridgeCall("POST", "/script/read", { path });
      if (r.ok && r.script) {
        await doInjectScript(activeTabId, r.script, script.name + ":" + path);
      } else {
        log("��ȡ�ű�ʧ��: " + (r.error || "unknown"));
      }
    } catch (e) {
      log("��ȡ�ű��쳣: " + e.message);
    }
    return;
  }

  // Ԥ�ýű���ͨ���Ŷ�ȡ vault �еĽű��ļ�
  try {
    const vaultPath = "04-F12�ܿ�����/" + script.file;
    const r = await bridgeCall("POST", "/script/read", { path: vaultPath });
    if (r.ok && r.script) {
      await doInjectScript(activeTabId, r.script, script.name);
    } else {
      log("��ȡ�ű�ʧ��: " + (r.error || "�ļ�������"));
    }
  } catch (e) {
    log("��ȡ�ű��쳣: " + e.message);
  }
}

async function doInjectScript(tabId, code, name) {
  log("ע��ű�: " + name + " �� Tab " + tabId);
  const r = await bridgePost("MULTI_COMMAND", {
    tabId,
    command: "RUN_SCRIPT",
    script: code,
    source: "sidepanel",
  });
  if (r.ok && r.command) {
    // �ȴ����
    setTimeout(async () => {
      try {
        const cmd = await bridgeCall("GET", "/commands/" + r.command.id);
        if (cmd.command?.result?.ok) {
          log("�ű���ע��: " + name);
        } else {
          log("ע��ʧ��: " + (cmd.command?.result?.error || "unknown"));
        }
      } catch (e) {
        log("ע������ѯ�쳣");
      }
    }, 3000);
  } else {
    log("ע��ʧ��: " + (r.error || "unknown"));
  }
}

async function tabAction(tabId, action) {
  const map = {
    stop: { cmd: "STOP", label: "STOP" },
    resume: { cmd: "AUTO_RUN", label: "CONTINUE" },
    archive: { cmd: "ARCHIVE_LATEST", label: "ARCHIVE" },
  };
  const a = map[action];
  if (!a) return;
  await bridgePost("MULTI_COMMAND", {
    tabId,
    command: a.cmd,
    source: "sidepanel",
  });
  log(a.label + " �� Tab " + tabId);
}

async function doRefresh() {
  try {
    const r = await bridgeCall("GET", "/health");
    bridgeOnline = r.ok;
    updateConn();
  } catch (e) {
    bridgeOnline = false;
    updateConn();
  }
  renderTabs();
}

// ======== BroadcastChannel ���� ========
function setupChannel() {
  try {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (event) => {
      const msg = event.data || {};
      const isAgent = msg.source === "ten-yuan-f12-agent";
      const isScript = msg.source === "ten-yuan-f12-script";
      if (!isAgent && !isScript) return;

      const tabId = String(msg.tabId || msg.agentTabId || "");
      if (!tabId) return;

      const now = Date.now();
      const existing = tabs[tabId] || {};

      // �ϲ�����
      tabs[tabId] = {
        ...existing,
        tabId,
        title: msg.title || existing.title || "",
        url: msg.url || existing.url || "",
        status: msg.status || existing.status || "idle",
        currentRound:
          msg.currentRound ?? existing.currentRound ?? 0,
        total: msg.total ?? existing.total ?? 0,
        lastMessage: msg.lastMessage || existing.lastMessage || "",
        lastHeartbeat: now,
        scriptName: msg.scriptName || existing.scriptName || "",
      };

      // ��ͬ������־
      const typeLabels = {
        REGISTER: "??",
        HEARTBEAT: "",
        RESULT: "?",
        ERROR: "?",
        PROGRESS: "??",
      };
      const prefix = typeLabels[msg.type] || "";
      if (prefix) {
        const brief =
          msg.lastMessage?.slice(0, 30) || msg.status || "";
        log(
          prefix +
            " Tab " +
            tabId +
            " " +
            (msg.type) +
            (brief ? " �� " + brief : "")
        );
      }

      renderTabs();
    };
    log("BroadcastChannel �Ѽ���");
  } catch (e) {
    log("BroadcastChannel ������: " + e.message);
  }
}

// ======== Init ========
document.getElementById("btn-bind").onclick = doBind;
document.getElementById("btn-inject").onclick = doInject;
document.getElementById("btn-refresh").onclick = doRefresh;
renderScriptLibrary();
setupChannel();
doRefresh();
setInterval(doRefresh, 5000);
log("F12 �ܼ���� v2.5 �Ѿ���");