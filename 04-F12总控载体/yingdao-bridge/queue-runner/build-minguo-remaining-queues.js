const fs = require("fs");
const path = require("path");

const VAULT_DIR = "C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault";
const ART_DIR = path.join(VAULT_DIR, "09-给674（我）用的库", "画画理论");
const CANVAS_PATH = path.join(ART_DIR, "民国_is-a名词素材库.canvas");
const ASSET_DIR = path.join(ART_DIR, "assets", "minguo-contact-sheet-batch");
const PROMPT_DIR = path.join(ASSET_DIR, "prompts");
const IMAGE_DIR = path.join(ASSET_DIR, "images");
const QUEUE_DIR = path.join(ASSET_DIR, "queues");
const TARGET_CHAT = "https://chatgpt.com/c/6a54b960-7854-83ea-ac0d-a4e9fded575f";

const CATEGORIES = [
  { prefix: "iam", theme: "建筑", batch: 3, detail: "建筑外形、材料、入口、尺度与时代用途" },
  { prefix: "icom", theme: "构件", batch: 4, detail: "构件结构、材料、尺度、装配方式与建筑位置" },
  { prefix: "imm", theme: "元素", batch: 5, detail: "物件或符号的轮廓、材质、使用痕迹与时代语境" },
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function naturalSort(left, right) {
  return String(left.id).localeCompare(String(right.id), "zh-CN", { numeric: true });
}

function parseItem(node) {
  const lines = String(node.text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const title = lines[0] || node.id;
  const isaLine = lines.find((line) => line.toLowerCase().startsWith("is-a ")) || "";
  const sceneLine = lines.find((line, index) => index > 0 && line !== isaLine) || "";
  return {
    id: node.id,
    title,
    isa: isaLine.replace(/^is-a\s+/i, "").trim(),
    scene: sceneLine.replace(/^[^\p{L}\p{N}]+/u, "").trim(),
    nodeText: node.text,
  };
}

function buildPrompt(theme, detail, items) {
  const itemLines = items.map((item, index) =>
    `${index + 1}. ${item.title}｜is-a：${item.isa}｜场景：${item.scene}`
  ).join("\n");

  return `请生成一张「民国 is-a 名词素材库」概念素材板，用于 Obsidian Canvas 配图。

一张图放 4 个指定素材，采用严格的 2x2 四宫格。不要文字、不要编号、不要水印。每格都是独立的小型概念图，整体摄影风格统一，但主体必须明显不同。

本图主题：${theme}

本图素材：
${itemLines}

时代与风格：
- 中国民国时期，约 1930 年代。
- 真实、沉稳、有时代重量，物件、建筑和空间符合当时社会身份。
- 避免现代网红感、赛博朋克、日漫夸张和过度玄幻。

画面要求：
- 严格 2x2 四宫格，四格边界清楚，每格只表现对应的一项。
- 不要在画面中写任何文字。
- 每格突出${detail}。
- 适合作为素材库总览图，不是单张海报。

生成完成后只展示图片，不需要长篇解释。
`;
}

function chunks(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

function main() {
  fs.mkdirSync(PROMPT_DIR, { recursive: true });
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  fs.mkdirSync(QUEUE_DIR, { recursive: true });

  const canvas = readJson(CANVAS_PATH);
  const covered = new Set(
    (canvas.edges || [])
      .filter((edge) => String(edge.toNode || "").startsWith("img_minguo_sheet_"))
      .map((edge) => edge.fromNode)
  );

  let sheetNumber = 24;
  const summary = [];

  for (const category of CATEGORIES) {
    const nodes = (canvas.nodes || [])
      .filter((node) =>
        node.type === "text" &&
        String(node.id).startsWith(category.prefix) &&
        String(node.text || "").includes("is-a ") &&
        !covered.has(node.id)
      )
      .sort(naturalSort);

    if (nodes.length % 4 !== 0) {
      throw new Error(`${category.theme}剩余 ${nodes.length} 项，不能整除为四宫格。`);
    }

    const tasks = chunks(nodes.map(parseItem), 4).map((items) => {
      const number = String(sheetNumber).padStart(2, "0");
      const id = `minguo_sheet_${number}`;
      const fileBase = `民国素材板_${number}_${category.theme}`;
      const promptPath = path.join(PROMPT_DIR, `${fileBase}.txt`);
      const imagePath = path.join(IMAGE_DIR, `${fileBase}.png`);
      fs.writeFileSync(promptPath, buildPrompt(category.theme, category.detail, items), "utf8");
      sheetNumber += 1;
      return {
        id,
        title: `${fileBase}_${items.map((item) => item.title).join("_")}`,
        theme: category.theme,
        promptPath,
        imagePath,
        imageNodeId: `img_${id}`,
        sourceIds: items.map((item) => item.id),
        status: "pending",
        attempts: 0,
        sentAt: null,
        completedAt: null,
        error: null,
        items,
      };
    });

    const now = new Date().toISOString();
    const queue = {
      id: `minguo-priority-batch-${String(category.batch).padStart(2, "0")}`,
      title: `民国素材批次 ${category.batch}（${category.theme}）`,
      target: TARGET_CHAT,
      canvasPath: CANVAS_PATH,
      status: "pending",
      currentIndex: 0,
      total: tasks.length,
      autoContinue: true,
      createdAt: now,
      updatedAt: now,
      tasks,
    };

    const queuePath = path.join(
      QUEUE_DIR,
      `minguo-priority-batch-${String(category.batch).padStart(2, "0")}.json`
    );
    if (fs.existsSync(queuePath) && !process.argv.includes("--force")) {
      throw new Error(`队列已存在，未覆盖：${queuePath}`);
    }
    writeJson(queuePath, queue);
    summary.push({ theme: category.theme, items: nodes.length, sheets: tasks.length, queuePath });
  }

  console.log(JSON.stringify({ nextSheetNumber: sheetNumber, summary }, null, 2));
}

main();
