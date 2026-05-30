(() => {
  /************************************************************
   * 本体类创作框 F12 总控 v0.1
   * 用途：自动推进"故事种子 → 三幕式 → 排名 → 扩写 → 图像提示词 → 分镜 → 归档"
   * 特点：START / CONTINUE / STOP 面板 + localStorage 断点续跑
   * 注意：默认不直接调用生图工具，而是先生成角色图/场景图/解释图提示词。
   ************************************************************/

  const CONFIG = {
    name: "本体类创作框 F12 总控 v0.1",
    storageKey: "ONTO_CREATION_F12_V01",
    storySeed: "把记忆刻进骨头，骨头开始替他决定。",
    baseScore: "94，高银矿，身体夺权非常本体",
    mode: "stable_prompt_mode",
    waitStableMs: 10000,
    maxWaitMs: 1000 * 60 * 8,
  };

  const ROUNDS = [
    { id: "R1/9", title: "投针：锁故事种子与本体问题", prompt: `进入【本体类创作框｜R1/9 投针】...` },
    { id: "R2/9", title: "多三幕式尝试", prompt: `进入【本体类创作框｜R2/9 多三幕式尝试】...` },
    { id: "R3/9", title: "排名筛矿", prompt: `进入【本体类创作框｜R3/9 排名筛矿】...` },
    { id: "R4/9", title: "主线扩写到合适", prompt: `进入【本体类创作框｜R4/9 主线扩写】...` },
    { id: "R5/9", title: "角色图方向", prompt: `进入【本体类创作框｜R5/9 角色图方向】...` },
    { id: "R6/9", title: "场景图方向", prompt: `进入【本体类创作框｜R6/9 场景图方向】...` },
    { id: "R7/9", title: "故事文字解释图", prompt: `进入【本体类创作框｜R7/9 故事文字解释图】...` },
    { id: "R8/9", title: "分镜脚本", prompt: `进入【本体类创作框｜R8/9 分镜脚本】...` },
    { id: "R9/9", title: "归档包", prompt: `进入【本体类创作框｜R9/9 归档包】...` },
  ];

  function getState() {
    try {
      const saved = localStorage.getItem(CONFIG.storageKey);
      return saved ? JSON.parse(saved) : { currentRound: 0, data: {} };
    } catch (e) {
      return { currentRound: 0, data: {} };
    }
  }

  function saveState(state) {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
  }

  function clearState() {
    localStorage.removeItem(CONFIG.storageKey);
  }

  async function waitForStable() {
    return new Promise((resolve) => {
      const start = Date.now();
      const check = () => {
        const elapsed = Date.now() - start;
        if (elapsed >= CONFIG.waitStableMs) {
          resolve(true);
        } else {
          setTimeout(check, 1000);
        }
      };
      check();
    });
  }

  async function runRound(roundIndex) {
    const state = getState();
    const round = ROUNDS[roundIndex];
    if (!round) {
      console.log("所有轮次已完成");
      return;
    }

    console.log(`执行 ${round.id}: ${round.title}`);
    state.currentRound = roundIndex;
    saveState(state);

    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.value = round.prompt;
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      
      const sendBtn = document.querySelector('button[data-testid="send-button"]') ||
                      document.querySelector('button[aria-label="Send"]') ||
                      document.querySelector('button[type="submit"]');
      if (sendBtn) {
        sendBtn.click();
        await waitForStable();
      }
    }

    if (roundIndex < ROUNDS.length - 1) {
      runRound(roundIndex + 1);
    } else {
      console.log("创作流程完成，准备归档");
      clearState();
    }
  }

  function createControlPanel() {
    const panel = document.createElement("div");
    panel.id = "onto-creation-panel";
    panel.style.cssText = `
      position: fixed; top: 10px; right: 10px; z-index: 99999;
      background: #1a1a2e; padding: 15px; border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3); color: #eee;
      font-family: system-ui; min-width: 200px;
    `;

    const title = document.createElement("div");
    title.textContent = CONFIG.name;
    title.style.cssText = "font-weight: bold; margin-bottom: 10px; color: #4ecdc4;";
    panel.appendChild(title);

    const state = getState();
    const status = document.createElement("div");
    status.id = "onto-status";
    status.textContent = state.currentRound > 0 
      ? `当前: ${ROUNDS[state.currentRound]?.id || "完成"}` 
      : "就绪";
    status.style.cssText = "font-size: 12px; color: #888; margin-bottom: 10px;";
    panel.appendChild(status);

    const btnContainer = document.createElement("div");
    btnContainer.style.cssText = "display: flex; gap: 8px; flex-wrap: wrap;";

    const createBtn = (text, color, action) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.style.cssText = `
        padding: 8px 16px; border: none; border-radius: 4px;
        background: ${color}; color: white; cursor: pointer;
        font-size: 12px; font-weight: 500;
      `;
      btn.onclick = action;
      return btn;
    };

    btnContainer.appendChild(createBtn("▶ 开始", "#27ae60", () => {
      clearState();
      runRound(0);
    }));

    btnContainer.appendChild(createBtn("⏸ 继续", "#f39c12", () => {
      const s = getState();
      runRound(s.currentRound || 0);
    }));

    btnContainer.appendChild(createBtn("⏹ 停止", "#e74c3c", () => {
      clearState();
      document.getElementById("onto-status").textContent = "已停止";
    }));

    panel.appendChild(btnContainer);
    document.body.appendChild(panel);
    return panel;
  }

  function init() {
    if (document.getElementById("onto-creation-panel")) {
      console.log("控制面板已存在");
      return;
    }
    createControlPanel();
    console.log(`${CONFIG.name} 已加载`);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
