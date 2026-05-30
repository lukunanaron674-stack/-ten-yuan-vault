// f12-memory-guard.js v2 — 检查归档文件是否实际落地，保障记忆不丢失
const fs = require('fs');
const http = require('http');
const path = require('path');

const BRIDGE = 'http://127.0.0.1:17312';
const VAULT = 'C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault';
const ARCHIVE_DIR = path.join(VAULT, '07-Codex大脑库', 'F12归档输出');
const GUARD_DIR = path.join(VAULT, '07-Codex大脑库', 'F12归档输出', 'memory_guard');
const INTERVAL_MS = 2 * 60 * 1000;

fs.mkdirSync(GUARD_DIR, { recursive: true });

// Track what archivers we have seen
let seenArchives = new Set();
let lastRound = 0;
let totalRounds = 0;

function fetch(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => { try { resolve(JSON.parse(d)); } catch(e) { reject(e); } });
    }).on('error', reject).setTimeout(5000, () => reject(new Error('timeout')));
  });
}

function getArchiveFiles() {
  if (!fs.existsSync(ARCHIVE_DIR)) return [];
  return fs.readdirSync(ARCHIVE_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'))
    .map(f => {
      const fp = path.join(ARCHIVE_DIR, f);
      const stat = fs.statSync(fp);
      const content = fs.readFileSync(fp, 'utf8');
      const chineseChars = (content.match(/[\u4e00-\u9fff]/g) || []).length;
      return { name: f, path: fp, size: stat.size, chineseChars, mtime: stat.mtime.toISOString() };
    })
    .sort((a, b) => b.mtime.localeCompare(a.mtime));
}

async function check() {
  const t = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  
  let bridgeOk = false;
  let expectedRound = 0;
  let expectedTotal = 0;
  let isRunning = false;
  
  try {
    const status = await fetch(`${BRIDGE}/status`);
    bridgeOk = status.ok;
    const ext = status.extension || {};
    expectedTotal = ext.total || 0;
    expectedRound = ext.total > 0 ? Math.min((ext.index || 0) + 1, ext.total) : 0;
    isRunning = ext.running;
    lastRound = expectedRound;
    totalRounds = expectedTotal;
  } catch (e) {
    // Bridge offline - use last known values
    expectedRound = lastRound;
    expectedTotal = totalRounds;
  }

  const archives = getArchiveFiles();
  
  // Check for new archives since last check
  const newArchives = archives.filter(a => !seenArchives.has(a.name));
  const recentArchives = archives.filter(a => {
    const age = Date.now() - new Date(a.mtime).getTime();
    return age < 10 * 60 * 1000; // last 10 minutes
  });

  // Count completed rounds from archive file names (R数字-数字 pattern)
  const completedRounds = new Set();
  archives.forEach(a => {
    const m = a.name.match(/_R(\d+)-(\d+)_/);
    if (m) completedRounds.add(parseInt(m[1]));
  });

  // Report
  const report = {
    ts: new Date().toISOString(),
    bridge_ok: bridgeOk,
    expected: { round: expectedRound, total: expectedTotal, running: isRunning },
    archives_total: archives.length,
    archives_recent: recentArchives.length,
    archives_new_since_last: newArchives.length,
    completed_rounds: [...completedRounds].sort((a,b)=>a-b),
    top_3_archives: archives.slice(0, 3).map(a => ({ name: a.name, chars: a.chineseChars, age_sec: Math.round((Date.now() - new Date(a.mtime).getTime())/1000) })),
    alerts: []
  };

  // ALERT: Running but no new archives
  if (isRunning && expectedRound > 0 && newArchives.length === 0 && recentArchives.length === 0) {
    report.alerts.push(`F12 running (R${expectedRound}/${expectedTotal}) but NO archive files in last 10min — possible memory loss!`);
  }

  // ALERT: Archive exists but is too small
  newArchives.forEach(a => {
    if (a.chineseChars < 100) {
      report.alerts.push(`Archive ${a.name} has only ${a.chineseChars} Chinese chars — may be empty/skeleton`);
    }
  });

  // ALERT: Round gap
  if (completedRounds.size > 0 && expectedTotal > 0) {
    const maxR = Math.max(...completedRounds);
    if (maxR < expectedRound - 1) {
      report.alerts.push(`Archive gap: completed up to R${maxR} but expected R${expectedRound}`);
    }
  }

  // Track seen
  archives.forEach(a => seenArchives.add(a.name));

  // Write guardian report
  fs.writeFileSync(path.join(GUARD_DIR, 'latest.json'), JSON.stringify(report, null, 2), 'utf8');

  // Log
  const statusLine = isRunning ? `R${expectedRound}/${expectedTotal}` : 'idle';
  const archiveLine = `${archives.length} archives, ${newArchives.length} new`;
  const alertLine = report.alerts.length > 0 ? ` ⚠️ ${report.alerts.join('; ')}` : '';
  console.log(`[${t}] ${statusLine} | ${archiveLine}${alertLine}`);

  // Write alert log if any
  if (report.alerts.length > 0) {
    const alertPath = path.join(GUARD_DIR, 'alerts.log');
    const alertEntry = `[${new Date().toISOString()}] ${report.alerts.join(' | ')}\n`;
    fs.appendFileSync(alertPath, alertEntry, 'utf8');
  }

  // Auto-stop if done and idle for 5+ minutes
  if (!isRunning && expectedRound >= expectedTotal && expectedTotal > 0) {
    const lastArchive = archives[0];
    if (lastArchive) {
      const idleSec = Math.round((Date.now() - new Date(lastArchive.mtime).getTime()) / 1000);
      if (idleSec > 300) {
        console.log(`[${t}] F12 complete. All archives saved. Guard exiting.`);
        process.exit(0);
      }
    }
  }
}

console.log('[guard v2] Monitoring archive files every 2min');
console.log('[guard v2] Vault:', path.relative(VAULT, ARCHIVE_DIR));
check();
setInterval(check, INTERVAL_MS);
setTimeout(() => { console.log('[guard] 8h max. Exiting.'); process.exit(0); }, 8 * 3600 * 1000);