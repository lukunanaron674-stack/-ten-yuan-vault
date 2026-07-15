const fs = require("fs");
const path = require("path");

const ART_DIR = "C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault\\09-给674（我）用的库\\画画理论";
const ASSET_DIR = path.join(ART_DIR, "assets", "minguo-contact-sheet-batch");
const QUEUE_DIR = path.join(ASSET_DIR, "queues");
const PROMPT_DIR = path.join(ASSET_DIR, "prompts");
const TARGET_CHAT = "https://chatgpt.com/c/6a54b960-7854-83ea-ac0d-a4e9fded575f";
const INVALID_SHEETS = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function main() {
  const sourceTasks = new Map();
  for (const name of fs.readdirSync(QUEUE_DIR)) {
    if (!/^minguo-priority-batch-0[1-4]\.json$/i.test(name)) continue;
    const queue = readJson(path.join(QUEUE_DIR, name));
    for (const task of queue.tasks || []) {
      const match = String(task.id).match(/minguo_sheet_(\d+)/);
      if (match) sourceTasks.set(Number(match[1]), task);
    }
  }

  fs.mkdirSync(PROMPT_DIR, { recursive: true });
  const tasks = INVALID_SHEETS.map((number) => {
    const source = sourceTasks.get(number);
    if (!source) throw new Error(`找不到第 ${number} 张的原任务数据`);
    const promptPath = path.join(PROMPT_DIR, `修复旧图_${String(number).padStart(2, "0")}.txt`);
    fs.writeFileSync(promptPath, `__DOWNLOAD_EXISTING_INDEX__:${number}\n`, "utf8");
    return {
      ...source,
      id: `repair_minguo_sheet_${String(number).padStart(2, "0")}`,
      title: `修复旧图_${String(number).padStart(2, "0")}`,
      promptPath,
      status: "pending",
      attempts: 0,
      sentAt: null,
      completedAt: null,
      error: null,
    };
  });

  const now = new Date().toISOString();
  const queue = {
    id: "minguo-repair-batch-00",
    title: "民国素材板不完整截图原图修复",
    target: TARGET_CHAT,
    status: "pending",
    currentIndex: 0,
    total: tasks.length,
    autoContinue: true,
    createdAt: now,
    updatedAt: now,
    tasks,
  };
  const output = path.join(QUEUE_DIR, "minguo-priority-batch-00.json");
  writeJson(output, queue);
  console.log(JSON.stringify({ output, total: tasks.length }, null, 2));
}

main();
