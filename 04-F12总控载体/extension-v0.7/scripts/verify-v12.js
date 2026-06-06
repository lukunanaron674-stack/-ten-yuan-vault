const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = {
  background: fs.readFileSync(path.join(root, 'background.js'), 'utf8'),
  content: fs.readFileSync(path.join(root, 'content.js'), 'utf8'),
  sidepanelHtml: fs.readFileSync(path.join(root, 'sidepanel.html'), 'utf8'),
  sidepanelJs: fs.readFileSync(path.join(root, 'sidepanel.js'), 'utf8'),
  cli: fs.readFileSync(path.join(root, 'local-bridge', 'cli.js'), 'utf8'),
  taskParser: fs.readFileSync(path.join(root, 'core', 'task-parser.js'), 'utf8'),
  taskTemplates: fs.readFileSync(path.join(root, 'core', 'task-templates.js'), 'utf8')
};

const taskLibraryBlock = (files.background.match(/const DEFAULT_TASK_LIBRARY = \{[\s\S]*?\n\};/) || [''])[0];

const checks = [
  ['background has task library', files.background.includes('DEFAULT_TASK_LIBRARY')],
  ['background set category route', files.background.includes("case 'SP_SET_CATEGORY'")],
  ['background load category tasks route', files.background.includes("case 'SP_LOAD_CATEGORY_TASKS'")],
  ['background export progress route', files.background.includes("case 'SP_EXPORT_PROGRESS_MD'")],
  ['background category templates avoid old marker', !!taskLibraryBlock && !/TASK_DONE_R/.test(taskLibraryBlock)],
  ['background has task library version lock', files.background.includes('TASK_LIBRARY_VERSION')],
  ['background default generator avoids old marker', !/最后必须输出：TASK_DONE_R/.test(files.background)],
  ['content stores agentCategory', files.content.includes('agentCategory')],
  ['content stores lastError', files.content.includes('lastError')],
  ['content heartbeats include category', files.content.includes('category: agentCategory')],
  ['sidepanel category select', files.sidepanelHtml.includes('task-category-select')],
  ['sidepanel load category button', files.sidepanelHtml.includes('btn-load-category-tasks')],
  ['sidepanel progress export button', files.sidepanelHtml.includes('btn-export-progress')],
  ['sidepanel category action', files.sidepanelJs.includes('SP_SET_CATEGORY')],
  ['sidepanel category load action', files.sidepanelJs.includes('SP_LOAD_CATEGORY_TASKS')],
  ['sidepanel progress export action', files.sidepanelJs.includes('SP_EXPORT_PROGRESS_MD')],
  ['sidepanel default generator avoids old marker', !/最后必须输出：TASK_DONE_R/.test(files.sidepanelJs)],
  ['core task parser avoids old marker', !/最后必须输出：TASK_DONE_R/.test(files.taskParser)],
  ['core task templates avoid old marker', !/最后必须输出：TASK_DONE_/.test(files.taskTemplates)],
  ['cli category command', files.cli.includes("cmd === 'category'")],
  ['cli category-load command', files.cli.includes("cmd === 'category-load'")],
  ['cli progress-md command', files.cli.includes("cmd === 'progress-md'")],
  ['cli multi-status uses wider heartbeat window', files.cli.includes('PAGE_HEARTBEAT_ONLINE_MS')]
];

let failed = 0;
for (const [name, ok] of checks) {
  console.log(`${ok ? 'ok' : 'FAIL'} - ${name}`);
  if (!ok) failed += 1;
}

if (failed) {
  console.error(`v1.2 verification failed: ${failed}`);
  process.exit(1);
}

console.log('v1.2 verification passed');
