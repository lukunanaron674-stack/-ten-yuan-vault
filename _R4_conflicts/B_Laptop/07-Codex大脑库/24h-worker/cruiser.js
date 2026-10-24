const fs = require('fs');
const path = require('path');

const VAULT = 'C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault';
const REPORT_DIR = path.join(VAULT, '07-Codex大脑库', '24h-worker', 'reports');

const BATCHES = [
  { id: 1, name: '命运型 xz+nz', dir: '05-银矿库\\五大主题仓库\\01-命运 xz+nz' },
  { id: 2, name: '时间型 xn+z', dir: '05-银矿库\\五大主题仓库\\02-时间 xn+z' },
  { id: 3, name: '因果型 zx+nx', dir: '05-银矿库\\五大主题仓库\\03-因果 zx+nx' },
  { id: 4, name: '本体型 zn+x', dir: '05-银矿库\\五大主题仓库\\04-本体 zn+x' },
  { id: 5, name: '空间型 x并z+n', dir: '05-银矿库\\五大主题仓库\\05-空间 x并z+n' },
  { id: 6, name: '银矿散点总扫', dir: '05-银矿库' },
  { id: 7, name: 'F12归档体检', dir: '07-Codex大脑库\\F12归档输出' },
];

function nowStamp() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
}

function countChinese(text) {
  return (text.match(/[\u4e00-\u9fff]/g) || []).length;
}

function extractFirstHeading(content) {
  const m = content.match(/^# +(.+)/m);
  return m ? m[1].trim() : '(无标题)';
}

function extractSummary(content) {
  const lines = content.split('\n').filter(l => {
    const t = l.trim();
    return t && !t.startsWith('#') && !t.startsWith('---') && !t.startsWith('|') && t.length > 15;
  });
  const top = lines.slice(0, 8).join(' ').slice(0, 400);
  return top || '(无正文)';
}

function gradeQuality(content, fileName) {
  const chars = countChinese(content);
  const hasStructure = /^#+/m.test(content);
  const hasSections = (content.match(/^## /gm) || []).length >= 2;
  const hasTenYuan = /xn|zx|nx|zn|xz|x并z/.test(content);
  if (chars < 100) return { grade: '骨架', icon: '🦴' };
  if (chars < 500) return { grade: '待补', icon: '📝' };
  if (hasSections && hasTenYuan) return { grade: '完整', icon: '✅' };
  return { grade: '待补', icon: '📝' };
}

function scanDir(dirPath) {
  const fullPath = path.join(VAULT, dirPath);
  if (!fs.existsSync(fullPath)) return [];
  const results = [];
  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const fp = path.join(d, e.name);
      if (e.isDirectory()) { walk(fp); }
      else if (e.name.endsWith('.md')) {
        const content = fs.readFileSync(fp, 'utf8');
        const lines = content.split('\n').length;
        const chineseChars = countChinese(content);
        const heading = extractFirstHeading(content);
        const summary = extractSummary(content);
        const quality = gradeQuality(content, e.name);
        results.push({
          file: path.relative(fullPath, fp),
          name: e.name,
          size: content.length,
          lines,
          chineseChars,
          heading,
          quality,
          summary: summary.slice(0, 200)
        });
      }
    }
  }
  walk(fullPath);
  return results.sort((a, b) => b.chineseChars - a.chineseChars);
}

function generateReport(batch, files) {
  const stamp = nowStamp();
  const totalChars = files.reduce((s, f) => s + f.chineseChars, 0);
  const grades = { '完整': files.filter(f => f.quality.grade === '完整').length, '待补': files.filter(f => f.quality.grade === '待补').length, '骨架': files.filter(f => f.quality.grade === '骨架').length };

  let md = `# Batch ${batch.id}: ${batch.name}\n\n`;
  md += `**时间**: ${stamp}\n`;
  md += `**文件数**: ${files.length} | **总中文字**: ${totalChars} | **完整**: ${grades['完整']} | **待补**: ${grades['待补']} | **骨架**: ${grades['骨架']}\n\n`;
  md += `## 文件清单\n\n`;
  md += `| 质量 | 文件 | 字数 | 行数 | 标题 |\n`;
  md += `|------|------|------|------|------|\n`;

  for (const f of files) {
    md += `| ${f.quality.icon} ${f.quality.grade} | ${f.file} | ${f.chineseChars} | ${f.lines} | ${f.heading} |\n`;
  }

  md += `\n## 逐文件摘要\n\n`;
  for (const f of files) {
    if (f.summary && f.summary !== '(无正文)') {
      md += `### ${f.quality.icon} ${f.name}\n`;
      md += `> ${f.summary}\n\n`;
    }
  }

  md += `## 批次结论\n\n`;
  md += `- 完整文件: ${grades['完整']} → 可进入二审\n`;
  md += `- 待补文件: ${grades['待补']} → 需补充内容\n`;
  md += `- 骨架文件: ${grades['骨架']} → 需人工填或F12生成\n`;
  if (grades['骨架'] > files.length * 0.3) md += `- ⚠️ 骨架率偏高 (${Math.round(grades['骨架']/files.length*100)}%)，本主题可能缺深度素材\n`;

  return md;
}

// Main
const batchArg = process.argv.find(a => a.startsWith('--batch='));
const batchNum = batchArg ? parseInt(batchArg.split('=')[1]) : 1;
const batch = BATCHES.find(b => b.id === batchNum);

if (!batch) {
  console.log('Usage: node cruiser.js --batch=N');
  console.log('Available batches:');
  BATCHES.forEach(b => console.log(`  ${b.id}: ${b.name}`));
  process.exit(1);
}

fs.mkdirSync(REPORT_DIR, { recursive: true });

const stamp = nowStamp();
console.log(`[cruiser] Batch ${batch.id}: ${batch.name}`);
console.log(`[cruiser] Scanning: ${batch.dir}`);

const files = scanDir(batch.dir);
console.log(`[cruiser] Found ${files.length} files, ${files.reduce((s,f)=>s+f.chineseChars,0)} Chinese chars`);

const report = generateReport(batch, files);
const reportPath = path.join(REPORT_DIR, `batch_${String(batch.id).padStart(2,'0')}_${batch.name.replace(/[\\/:*?"<>|]/g,'_')}_${stamp}.md`);
fs.writeFileSync(reportPath, report, 'utf8');

console.log(`[cruiser] Report: ${path.relative(VAULT, reportPath)}`);
console.log(`[cruiser] Done. Grades: 完整=${files.filter(f=>f.quality.grade==='完整').length} 待补=${files.filter(f=>f.quality.grade==='待补').length} 骨架=${files.filter(f=>f.quality.grade==='骨架').length}`);
