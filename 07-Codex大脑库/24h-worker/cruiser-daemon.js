// cruiser-daemon.js — 8h autonomous cruise daemon v3.0
// Runs continuous deep vault analysis, writes per-batch reports, heartbeats every 5min.

const fs = require('fs');
const path = require('path');
const http = require('http');

const VAULT = 'C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault';
const REPORT_DIR = path.join(VAULT, '07-Codex大脑库', '24h-worker', 'reports');
const BRIDGE_URL = 'http://127.0.0.1:17312';

const BATCHES = [
  { id: 1, name: '命运型 xz+nz', dir: '05-银矿库\\五大主题仓库\\01-命运 xz+nz', files: 9, kb: 38, minutes: 50 },
  { id: 2, name: '时间型 xn+z', dir: '05-银矿库\\五大主题仓库\\02-时间 xn+z', files: 13, kb: 56, minutes: 60 },
  { id: 3, name: '因果型 zx+nx', dir: '05-银矿库\\五大主题仓库\\03-因果 zx+nx', files: 11, kb: 21, minutes: 50 },
  { id: 4, name: '本体型 zn+x', dir: '05-银矿库\\五大主题仓库\\04-本体 zn+x', files: 9, kb: 22, minutes: 50 },
  { id: 5, name: '空间型 x并z+n', dir: '05-银矿库\\五大主题仓库\\05-空间 x并z+n', files: 11, kb: 27, minutes: 50 },
  { id: 6, name: '银矿散点总扫', dir: '05-银矿库', files: 69, kb: 490, minutes: 130 },
  { id: 7, name: 'F12归档体检', dir: '07-Codex大脑库\\F12归档输出', files: 33, kb: 58, minutes: 60 },
];
const TOTAL_MINUTES = BATCHES.reduce((s, b) => s + b.minutes, 0) + 30; // +30 for summary
const TOTAL_MS = TOTAL_MINUTES * 60 * 1000;

// Timing
const startTime = Date.now();
let heartbeatTimer = null;
let currentBatch = null;
let processedInBatch = 0;
let totalProcessed = 0;

// Ten-yuan symbol index (cross-file)
const symbolIndex = {};

// ---- UTILS ----
function now() { return new Date().toISOString(); }
function stamp() { const d = new Date(); const p = n => String(n).padStart(2,'0'); return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}_${p(d.getHours())}-${p(d.getMinutes())}`; }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function elapsed() { return Math.round((Date.now() - startTime) / 60000); }
function elapsedStr() { const m = elapsed(); const h = Math.floor(m/60); return `${h}h${m%60}m`; }

function log(msg) {
  const ts = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  console.log(`[${ts}][${elapsedStr()}] ${msg}`);
}

fs.mkdirSync(REPORT_DIR, { recursive: true });

// ---- HEARTBEAT ----
function writeHeartbeat() {
  const hb = {
    ts: now(),
    elapsed_min: elapsed(),
    batch: currentBatch ? currentBatch.name : 'init',
    batch_id: currentBatch ? currentBatch.id : 0,
    processed_in_batch: processedInBatch,
    total_processed: totalProcessed,
    total_files_target: BATCHES.reduce((s, b) => s + b.files, 0),
    symbol_index_size: Object.keys(symbolIndex).length,
    status: 'running'
  };
  const hbPath = path.join(REPORT_DIR, `heartbeat_${stamp()}.json`);
  fs.writeFileSync(hbPath, JSON.stringify(hb, null, 2), 'utf8');
}

// ---- F12 INTEGRATION ----
async function checkF12() {
  return new Promise((resolve) => {
    const req = http.get(`${BRIDGE_URL}/status`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const s = JSON.parse(data);
          const ext = s.extension || {};
          const tabs = ext.multiTabs?.tabs || {};
          const online = Object.values(tabs).filter(t => {
            const age = Date.now() - (t.lastHeartbeat || 0);
            return age < 30000 && t.status === 'online';
          });
          resolve({ online: online.length > 0, tabs: online, ext });
        } catch { resolve({ online: false, tabs: [], ext: {} }); }
      });
    });
    req.on('error', () => resolve({ online: false, tabs: [], ext: {} }));
    req.setTimeout(3000, () => { req.destroy(); resolve({ online: false, tabs: [], ext: {} }); });
  });
}

async function tryF12Dispatch(task) {
  const f12 = await checkF12();
  if (!f12.online) { log('F12 offline, skipping dispatch'); return false; }
  const tab = f12.tabs[0];
  log(`F12 online (${tab.title}), dispatching task to tab ${tab.tabId}`);
  return new Promise((resolve) => {
    const body = JSON.stringify({ type: 'MULTI_COMMAND', payload: { tabId: Number(tab.tabId), command: 'LOAD_TASK', tasks: [task], index: 0 } });
    const req = http.request(`${BRIDGE_URL}/commands`, { method: 'POST', headers: { 'content-type': 'application/json', 'content-length': Buffer.byteLength(body) } }, (res) => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => { try { const r = JSON.parse(d); resolve(r.ok); } catch { resolve(false); } });
    });
    req.on('error', () => resolve(false));
    req.setTimeout(3000, () => { req.destroy(); resolve(false); });
    req.write(body); req.end();
  });
}

// ---- DEEP FILE ANALYSIS ----
function countSymbols(text) {
  const patterns = {
    'x并z': /x并z/g, 'xn': /xn/g, 'zx': /zx/g, 'nx': /nx/g, 'zn': /zn/g, 'xz': /xz/g, 'nz': /nz/g,
    'n+nx': /n\+nx/g, 'nx+n': /nx\+n/g, 'z+n': /z\+n/g, 'zx+n': /zx\+n/g, 'nx+zn': /nx\+zn/g, 'zn+x': /zn\+x/g,
    'nx+zn': /nx\+zn/g, 'zx+nx': /zx\+nx/g
  };
  const counts = {};
  for (const [sym, re] of Object.entries(patterns)) {
    const m = text.match(re);
    counts[sym] = m ? m.length : 0;
  }
  counts._total = Object.values(counts).reduce((a, b) => a + b, 0);
  return counts;
}

function extractLinks(content) {
  const links = [];
  const re = /\[\[([^\]|#]+)(?:\|[^\]]+)?\]\]/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    links.push(m[1].trim());
  }
  return links;
}

function checkLinksExist(links, vaultDir) {
  const results = [];
  for (const link of links) {
    // Search vault for matching file
    const candidates = [];
    function search(dir) {
      try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const e of entries) {
          if (e.name.startsWith('.')) continue;
          const fp = path.join(dir, e.name);
          if (e.isDirectory()) { if (e.name !== 'node_modules') search(fp); }
          else if (e.name.replace('.md', '') === link || e.name === link + '.md' || e.name === link) {
            candidates.push(path.relative(vaultDir, fp));
          }
        }
      } catch {}
    }
    search(vaultDir);
    results.push({ link, found: candidates.length > 0, targets: candidates });
  }
  return results;
}

function checkStructure(content) {
  const h1 = (content.match(/^# /gm) || []).length;
  const h2 = (content.match(/^## /gm) || []).length;
  const h3 = (content.match(/^### /gm) || []).length;
  const hasYaml = /^---\n/.test(content);
  const paragraphs = (content.match(/\n\n/g) || []).length;
  const chineseChars = (content.match(/[\u4e00-\u9fff]/g) || []).length;
  return { h1, h2, h3, hasYaml, paragraphs, chineseChars };
}

function scoreQuality(symbols, links, structure) {
  // Five-dimension scoring (0-3 each)
  const structureScore = structure.h2 >= 2 ? 3 : structure.h2 >= 1 ? 2 : structure.h1 >= 1 ? 1 : 0;
  const symbolDensity = symbols._total > 10 ? 3 : symbols._total > 3 ? 2 : symbols._total > 0 ? 1 : 0;
  const linkScore = links.filter(l => l.found).length >= links.length * 0.7 ? 3 : links.length > 0 ? 2 : 1;
  const reusability = structure.chineseChars > 1000 ? 3 : structure.chineseChars > 300 ? 2 : structure.chineseChars > 100 ? 1 : 0;
  const pollutionRisk = structure.chineseChars < 100 ? 3 : structure.chineseChars < 300 ? 2 : !structure.hasYaml ? 1 : 0;
  const total = structureScore + symbolDensity + linkScore + reusability + (3 - pollutionRisk);
  return { structureScore, symbolDensity, linkScore, reusability, pollutionRisk, total, max: 15 };
}

function analyzeFile(filePath, relPath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const symbols = countSymbols(content);
  const rawLinks = extractLinks(content);
  const linkResults = checkLinksExist(rawLinks, VAULT);
  const structure = checkStructure(content);
  const quality = scoreQuality(symbols, linkResults, structure);
  const brokenLinks = linkResults.filter(l => !l.found);

  // Update global symbol index
  for (const [sym, count] of Object.entries(symbols)) {
    if (sym === '_total') continue;
    if (count > 0) {
      if (!symbolIndex[sym]) symbolIndex[sym] = { total: 0, files: [] };
      symbolIndex[sym].total += count;
      if (!symbolIndex[sym].files.find(f => f.path === relPath)) {
        symbolIndex[sym].files.push({ path: relPath, count });
      }
    }
  }

  return {
    file: relPath,
    size: content.length,
    structure,
    symbols,
    links: { total: rawLinks.length, broken: brokenLinks.length, brokenList: brokenLinks.map(l => l.link) },
    quality
  };
}

// ---- BATCH PROCESSING ----
function generateBatchReport(batch, files) {
  const total = files.reduce((s, f) => s + f.structure.chineseChars, 0);
  const avgQuality = Math.round(files.reduce((s, f) => s + f.quality.total, 0) / Math.max(1, files.length));
  const topSymbols = Object.entries(
    files.reduce((acc, f) => { for (const [k, v] of Object.entries(f.symbols)) { if (k !== '_total' && v > 0) acc[k] = (acc[k]||0) + v; } return acc; }, {})
  ).sort((a, b) => b[1] - a[1]).slice(0, 5);

  let md = `# Batch ${batch.id}: ${batch.name} 深度报告\\n\\n`;
  md += `**时间**: ${stamp()} | **用时**: ${elapsedStr()} | **文件**: ${files.length} | **总字数**: ${total} | **均质量分**: ${avgQuality}/15\\n\\n`;

  md += `## 文件质量榜\\n\\n`;
  md += `| # | 文件 | 字数 | 质量分 | 十元密度 | 结构 | 链接 | 复用 | 污染 |\\n`;
  md += `|---|------|------|--------|----------|------|------|------|------|\\n`;
  files.sort((a,b) => b.quality.total - a.quality.total).forEach((f, i) => {
    md += `| ${i+1} | ${f.file.split('/').pop()} | ${f.structure.chineseChars} | **${f.quality.total}** | ${f.symbols._total} | ${f.quality.structureScore} | ${f.quality.linkScore} | ${f.quality.reusability} | ${f.quality.pollutionRisk} |\\n`;
  });

  md += `\\n## 十元符号分布\\n\\n`;
  md += `| 符号 | 出现次数 |\\n`;
  md += `|------|----------|\\n`;
  for (const [sym, count] of topSymbols) {
    md += `| ${sym} | ${count} |\\n`;
  }

  md += `\\n## 断链清单\\n\\n`;
  const allBroken = [...new Set(files.flatMap(f => f.links.brokenList))];
  if (allBroken.length === 0) {
    md += `✅ 无断链\\n`;
  } else {
    md += `| 断链目标 |\\n`;
    md += `|----------|\\n`;
    allBroken.forEach(l => { md += `| [[${l}]] |\\n`; });
  }

  md += `\\n## 质量分级\\n\\n`;
  const excellent = files.filter(f => f.quality.total >= 12);
  const good = files.filter(f => f.quality.total >= 9 && f.quality.total < 12);
  const fair = files.filter(f => f.quality.total >= 6 && f.quality.total < 9);
  const poor = files.filter(f => f.quality.total < 6);
  md += `- ⭐ 优秀 (12-15): ${excellent.length}\\n`;
  md += `- ✅ 良好 (9-11): ${good.length}\\n`;
  md += `- 📝 一般 (6-8): ${fair.length}\\n`;
  md += `- 🦴 薄弱 (<6): ${poor.length}\\n`;

  md += `\\n## 批次结论\\n\\n`;
  if (poor.length > files.length * 0.3) md += `- ⚠️ 薄弱率偏高 (${Math.round(poor.length/files.length*100)}%)，建议F12补强\\n`;
  if (excellent.length >= files.length * 0.5) md += `- ✅ 整体质量优秀，可进入二审\\n`;
  md += `- Top文件: ${files[0]?.file.split('/').pop() || 'N/A'} (质量分 ${files[0]?.quality.total}/15)\\n`;

  return md;
}

async function processBatch(batch) {
  currentBatch = batch;
  processedInBatch = 0;
  const dirPath = path.join(VAULT, batch.dir);
  if (!fs.existsSync(dirPath)) { log(`SKIP: dir not found: ${batch.dir}`); return []; }

  const files = [];
  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith('.')) continue;
      const fp = path.join(d, e.name);
      if (e.isDirectory()) walk(fp);
      else if (e.name.endsWith('.md')) files.push(fp);
    }
  }
  walk(dirPath);

  const paceMs = Math.floor((batch.minutes * 60 * 1000) / Math.max(1, files.length));
  log(`Batch ${batch.id}: ${batch.name} — ${files.length} files, pace ${Math.round(paceMs/1000)}s/file, target ${batch.minutes}min`);

  const results = [];
  for (let i = 0; i < files.length; i++) {
    const fp = files[i];
    const relPath = path.relative(VAULT, fp);
    try {
      const analysis = analyzeFile(fp, relPath);
      results.push(analysis);
      processedInBatch = i + 1;
      totalProcessed++;
      if ((i + 1) % 5 === 0 || i === files.length - 1) {
        log(`  ${i+1}/${files.length} done, last: ${relPath.split('\\').pop()} (q=${analysis.quality.total})`);
      }
    } catch (e) {
      log(`  ERROR: ${relPath}: ${e.message}`);
      results.push({ file: relPath, error: e.message, quality: { total: 0 } });
    }
    // Pace to fill allocated time
    if (i < files.length - 1) await sleep(paceMs);
  }

  return results;
}

// ---- FINAL REPORT ----
function generateFinalReport(allResults, totalFiles) {
  const allAnalyses = allResults.flat();
  const totalChars = allAnalyses.reduce((s, f) => s + (f.structure?.chineseChars || 0), 0);
  const avgQ = Math.round(allAnalyses.reduce((s, f) => s + (f.quality?.total || 0), 0) / Math.max(1, allAnalyses.length));
  const brokenTotal = [...new Set(allAnalyses.flatMap(f => f.links?.brokenList || []))];

  // Top symbols across all files
  const topSymbols = Object.entries(symbolIndex)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 10);

  let md = `# 8小时巡航总报告\\n\\n`;
  md += `**完成时间**: ${stamp()} | **总用时**: ${elapsedStr()} | **文件**: ${allAnalyses.length}/${totalFiles}\\n\\n`;

  md += `## 各批次汇总\\n\\n`;
  md += `| 批次 | 文件 | 字数 | 均质量分 | 断链 |\\n`;
  md += `|------|------|------|----------|------|\\n`;
  BATCHES.forEach((b, i) => {
    const batchFiles = allResults[i] || [];
    const chars = batchFiles.reduce((s, f) => s + (f.structure?.chineseChars || 0), 0);
    const q = batchFiles.length > 0 ? Math.round(batchFiles.reduce((s, f) => s + (f.quality?.total || 0), 0) / batchFiles.length) : 0;
    const broken = batchFiles.reduce((s, f) => s + (f.links?.broken || 0), 0);
    md += `| ${b.id}. ${b.name} | ${batchFiles.length}/${b.files} | ${chars} | ${q}/15 | ${broken} |\\n`;
  });

  md += `\\n## 十元符号全库索引\\n\\n`;
  md += `| 符号 | 总出现次数 | 涉及文件数 |\\n`;
  md += `|------|------------|------------|\\n`;
  for (const [sym, data] of topSymbols) {
    md += `| ${sym} | ${data.total} | ${data.files.length} |\\n`;
  }

  md += `\\n## 全库断链 (${brokenTotal.length})\\n\\n`;
  brokenTotal.slice(0, 20).forEach(l => { md += `- [[${l}]]\\n`; });
  if (brokenTotal.length > 20) md += `- ...还有 ${brokenTotal.length - 20} 个\\n`;

  md += `\\n## 巡航结论\\n\\n`;
  md += `- 总处理文件: ${allAnalyses.length}\\n`;
  md += `- 总中文字: ${totalChars}\\n`;
  md += `- 平均质量分: ${avgQ}/15\\n`;
  md += `- 十元符号种类: ${Object.keys(symbolIndex).length}\\n`;
  md += `- 全库断链: ${brokenTotal.length}\\n`;

  return md;
}

// ---- MAIN ----
async function main() {
  const args = process.argv.slice(2);
  const hoursArg = args.find(a => a.startsWith('--hours='));
  const targetHours = hoursArg ? parseFloat(hoursArg.split('=')[1]) : 8;

  log(`========================================`);
  log(`CRUISER DAEMON v3.0 START`);
  log(`Target: ${targetHours}h | Batches: ${BATCHES.length} | Files: ${BATCHES.reduce((s,b)=>s+b.files,0)}`);
  log(`========================================`);

  // Heartbeat every 5 minutes
  heartbeatTimer = setInterval(writeHeartbeat, 5 * 60 * 1000);
  writeHeartbeat();

  const allResults = [];
  let totalTarget = BATCHES.reduce((s, b) => s + b.files, 0);

  for (let i = 0; i < BATCHES.length; i++) {
    const batch = BATCHES[i];
    const remaining = BATCHES.slice(i).reduce((s, b) => s + b.minutes, 0) + 30;
    log(`--- Batch ${batch.id}/${BATCHES.length}: ${batch.name} (${batch.minutes}min allocated, ${remaining}min remaining) ---`);

    const results = await processBatch(batch);
    allResults.push(results);

    // Write batch report
    const report = generateBatchReport(batch, results);
    const reportName = `batch_${String(batch.id).padStart(2,'0')}_${batch.name.replace(/[\\/:*?"<>|]/g,'_')}_深度_${stamp()}.md`;
    fs.writeFileSync(path.join(REPORT_DIR, reportName), report, 'utf8');
    log(`Report: ${reportName}`);

    // Write symbol index snapshot
    fs.writeFileSync(path.join(REPORT_DIR, 'ten_yuan_symbol_index.json'), JSON.stringify(symbolIndex, null, 2), 'utf8');

    // Try F12 dispatch
    if (results.length > 0) {
      const topFile = results.sort((a,b)=>(b.quality?.total||0)-(a.quality?.total||0))[0];
      if (topFile) {
        const task = `请分析以下十元语义材料，判断其五大主题归属和十元符号标注是否正确，并给出修正建议：文件=${topFile.file}`;
        await tryF12Dispatch(task);
      }
    }

    writeHeartbeat();
    log(`Batch ${batch.id} complete. Processed: ${results.length}/${batch.files}`);
  }

  // Summary
  log('--- Generating final report ---');
  const finalReport = generateFinalReport(allResults, totalTarget);
  const finalName = `final_report_${stamp()}.md`;
  fs.writeFileSync(path.join(REPORT_DIR, finalName), finalReport, 'utf8');
  fs.writeFileSync(path.join(REPORT_DIR, 'ten_yuan_symbol_index.json'), JSON.stringify(symbolIndex, null, 2), 'utf8');

  clearInterval(heartbeatTimer);
  writeHeartbeat();

  log(`========================================`);
  log(`CRUISER DAEMON COMPLETE`);
  log(`Total elapsed: ${elapsedStr()}`);
  log(`Files: ${totalProcessed} | Reports: ${BATCHES.length + 1}`);
  log(`Final: ${finalName}`);
  log(`========================================`);

  process.exit(0);
}

main().catch(e => {
  log(`FATAL: ${e.message}`);
  console.error(e);
  if (heartbeatTimer) clearInterval(heartbeatTimer);
  process.exit(1);
});
