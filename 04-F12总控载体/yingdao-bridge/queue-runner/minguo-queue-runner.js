const fs = require("fs");
const path = require("path");

const BRIDGE_DIR = path.resolve(__dirname, "..");
const COMMAND_PATH = path.join(BRIDGE_DIR, "inbox", "command.json");
const RESULT_PATH = path.join(BRIDGE_DIR, "outbox", "minguo-contact-sheet-result.json");
const STATE_DIR = path.join(BRIDGE_DIR, "state");
const STATE_PATH = path.join(STATE_DIR, "minguo-queue-runner.json");
const LOCK_PATH = path.join(STATE_DIR, "minguo-queue-runner.lock");
const LOG_DIR = path.join(BRIDGE_DIR, "logs");
const LOG_PATH = path.join(LOG_DIR, "minguo-queue-runner.log");

const ASSET_DIR = path.resolve(
  BRIDGE_DIR,
  "..",
  "..",
  "09-给674（我）用的库",
  "画画理论",
  "assets",
  "minguo-contact-sheet-batch"
);

const QUEUE_DIR = path.join(ASSET_DIR, "queues");

const TARGET_CHAT = "https://chatgpt.com/c/6a54b960-7854-83ea-ac0d-a4e9fded575f";
const POLL_MS = Number(process.env.MINGUO_POLL_MS || 5000);
const TIMEOUT_MS = Number(process.env.MINGUO_TASK_TIMEOUT_MS || 12 * 60 * 1000);
const BETWEEN_TASKS_MS = Number(process.env.MINGUO_BETWEEN_TASKS_MS || 15000);

function nowIso() {
  return new Date().toISOString();
}

function ensureFolders() {
  fs.mkdirSync(path.dirname(COMMAND_PATH), { recursive: true });
  fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function log(message) {
  const line = `[${nowIso()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, `${line}\n`, "utf8");
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function imageIsFresh(task, dispatchedAtMs) {
  if (!fs.existsSync(task.imagePath)) return false;
  const stat = fs.statSync(task.imagePath);
  return stat.size > 10 * 1024 && stat.mtimeMs >= dispatchedAtMs - 1500;
}

function resultMatches(task, dispatchedAtMs) {
  if (!fs.existsSync(RESULT_PATH)) return null;
  const stat = fs.statSync(RESULT_PATH);
  if (stat.mtimeMs < dispatchedAtMs - 1500) return null;

  try {
    const result = readJson(RESULT_PATH);
    const images = Array.isArray(result.images) ? result.images : [];
    const matchingImage = images.find((entry) =>
      entry && (
        entry.id === task.id ||
        entry.sheetId === task.id ||
        entry.imagePath === task.imagePath ||
        entry.title === task.title
      )
    );

    if (result.ok === false) {
      return { ok: false, error: result.error || matchingImage?.error || "影刀返回失败" };
    }
    if (matchingImage?.ok === false) {
      return { ok: false, error: matchingImage.error || "图片任务失败" };
    }
    if (matchingImage?.ok === true || Number(result.completed) > 0) {
      return { ok: true };
    }
  } catch (error) {
    return { ok: false, error: `回执 JSON 无法读取：${error.message}` };
  }
  return null;
}

function createCommand(queue, task, dispatchId) {
  return {
    action: "generate_chatgpt_contact_sheets_for_canvas",
    status: "RUN_NOW",
    dispatchId,
    queueId: queue.id,
    sheetId: task.id,
    title: task.title,
    theme: task.theme,
    promptPath: task.promptPath,
    imagePath: task.imagePath,
    target: queue.target || TARGET_CHAT,
    resultPath: RESULT_PATH,
    createdAt: nowIso(),
    note: "队列驱动器投递。影刀只处理当前一张，完成后写回 resultPath。",
  };
}

function collectCounts(queues) {
  const tasks = queues.flatMap((queue) => queue.tasks || []);
  return tasks.reduce(
    (counts, task) => {
      counts.total += 1;
      counts[task.status || "pending"] = (counts[task.status || "pending"] || 0) + 1;
      return counts;
    },
    { total: 0, pending: 0, running: 0, done: 0, failed: 0, paused: 0, skipped: 0 }
  );
}

function loadQueues() {
  const queuePaths = fs.existsSync(QUEUE_DIR)
    ? fs.readdirSync(QUEUE_DIR)
      .filter((name) => /^minguo-priority-batch-\d+\.json$/i.test(name))
      .sort((left, right) => left.localeCompare(right, "zh-CN", { numeric: true }))
      .map((name) => path.join(QUEUE_DIR, name))
    : [];

  if (!queuePaths.length) {
    throw new Error(`未找到队列文件：${QUEUE_DIR}`);
  }

  return queuePaths.map((queuePath) => {
    if (!fs.existsSync(queuePath)) throw new Error(`队列不存在：${queuePath}`);
    const queue = readJson(queuePath);
    queue.__path = queuePath;
    return queue;
  });
}

function saveQueue(queue) {
  const serializable = { ...queue };
  delete serializable.__path;
  serializable.updatedAt = nowIso();
  serializable.total = Array.isArray(serializable.tasks) ? serializable.tasks.length : 0;
  serializable.currentIndex = Math.max(
    0,
    serializable.tasks.findIndex((task) => task.status !== "done" && task.status !== "skipped")
  );
  if (serializable.tasks.every((task) => task.status === "done" || task.status === "skipped")) {
    serializable.status = "done";
    serializable.currentIndex = serializable.tasks.length;
  }
  writeJson(queue.__path, serializable);
  Object.assign(queue, serializable, { __path: queue.__path });
}

function saveState(state) {
  writeJson(STATE_PATH, { ...state, updatedAt: nowIso() });
}

function acquireLock() {
  ensureFolders();
  try {
    const handle = fs.openSync(LOCK_PATH, "wx");
    fs.writeFileSync(handle, JSON.stringify({ pid: process.pid, startedAt: nowIso() }));
    fs.closeSync(handle);
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error(`队列驱动器已经在运行。锁文件：${LOCK_PATH}`);
    }
    throw error;
  }
}

function releaseLock() {
  try {
    fs.unlinkSync(LOCK_PATH);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

async function waitForTask(task, dispatchedAtMs) {
  const deadline = Date.now() + TIMEOUT_MS;
  while (Date.now() < deadline) {
    if (imageIsFresh(task, dispatchedAtMs)) {
      return { ok: true, source: "image" };
    }

    const result = resultMatches(task, dispatchedAtMs);
    if (result?.ok === false) return result;
    if (result?.ok === true && imageIsFresh(task, dispatchedAtMs)) {
      return { ok: true, source: "result+image" };
    }
    await sleep(POLL_MS);
  }
  return { ok: false, error: `等待超时（${Math.round(TIMEOUT_MS / 60000)} 分钟）` };
}

async function run() {
  acquireLock();
  const queues = loadQueues();
  let stoppedByFailure = false;

  try {
    for (const queue of queues) {
      queue.status = "running";
      saveQueue(queue);

      for (let index = 0; index < queue.tasks.length; index += 1) {
        const task = queue.tasks[index];
        if (task.status === "done" || task.status === "skipped") continue;

        if (!fs.existsSync(task.promptPath)) {
          task.status = "failed";
          task.error = `提示词文件不存在：${task.promptPath}`;
          saveQueue(queue);
          log(`${task.id} 失败：${task.error}`);
          stoppedByFailure = true;
          break;
        }

        const dispatchId = `${task.id}-${Date.now()}`;
        task.status = "running";
        task.attempts = Number(task.attempts || 0) + 1;
        task.sentAt = nowIso();
        task.completedAt = null;
        task.error = null;
        queue.currentIndex = index;
        saveQueue(queue);

        const dispatchedAtMs = Date.now();
        writeJson(COMMAND_PATH, createCommand(queue, task, dispatchId));
        saveState({
          status: "waiting",
          queueId: queue.id,
          queuePath: queue.__path,
          taskId: task.id,
          taskTitle: task.title,
          dispatchId,
          imagePath: task.imagePath,
          sentAt: task.sentAt,
          counts: collectCounts(queues),
        });
        log(`已投递 ${task.id}：${task.title}`);

        const outcome = await waitForTask(task, dispatchedAtMs);
        if (!outcome.ok) {
          task.status = "failed";
          task.error = outcome.error;
          queue.status = "paused";
          saveQueue(queue);
          saveState({
            status: "paused",
            queueId: queue.id,
            taskId: task.id,
            taskTitle: task.title,
            error: outcome.error,
            counts: collectCounts(queues),
          });
          log(`${task.id} 失败并暂停：${outcome.error}`);
          stoppedByFailure = true;
          break;
        }

        task.status = "done";
        task.completedAt = nowIso();
        task.error = null;
        saveQueue(queue);
        saveState({
          status: "running",
          queueId: queue.id,
          taskId: task.id,
          taskTitle: task.title,
          imagePath: task.imagePath,
          completedAt: task.completedAt,
          counts: collectCounts(queues),
        });
        log(`${task.id} 完成：${task.imagePath}`);
        await sleep(BETWEEN_TASKS_MS);
      }

      if (stoppedByFailure) break;
      saveQueue(queue);
    }

    if (!stoppedByFailure) {
      const counts = collectCounts(queues);
      saveState({ status: "done", counts });
      log(`全部完成：${counts.done}/${counts.total}`);
    }
  } finally {
    releaseLock();
  }
}

function showStatus() {
  ensureFolders();
  const queues = loadQueues();
  const state = fs.existsSync(STATE_PATH) ? readJson(STATE_PATH) : { status: "not_started" };
  console.log(JSON.stringify({ state, counts: collectCounts(queues) }, null, 2));
}

function retryFailed() {
  const queues = loadQueues();
  let changed = 0;
  for (const queue of queues) {
    for (const task of queue.tasks || []) {
      if (task.status === "failed" || task.status === "running") {
        task.status = "pending";
        task.error = null;
        changed += 1;
      }
    }
    if (queue.status !== "done") queue.status = "pending";
    saveQueue(queue);
  }
  saveState({ status: "ready", resetTasks: changed, counts: collectCounts(queues) });
  console.log(`已将 ${changed} 个失败/中断任务恢复为 pending。`);
}

const action = (process.argv[2] || "run").toLowerCase();
ensureFolders();

if (action === "status") {
  showStatus();
} else if (action === "retry") {
  retryFailed();
} else if (action === "run") {
  run().catch((error) => {
    releaseLock();
    log(`驱动器异常停止：${error.stack || error.message}`);
    process.exitCode = 1;
  });
} else {
  console.error("用法：node minguo-queue-runner.js [run|status|retry]");
  process.exitCode = 2;
}
