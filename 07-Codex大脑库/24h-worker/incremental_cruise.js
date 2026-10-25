'use strict';
// Read-only, scope-aware incremental audit. Never edit vault contents.
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

const TEXT_EXT = new Set(['.md', '.canvas', '.json', '.yml', '.yaml']);
const IGNORE_DIR = new Set(['.git', '.obsidian', '.trash', '.stfolder', 'node_modules', '__pycache__', 'reports', 'logs', '.tmp']);
const MAX_BYTES = 8 * 1024 * 1024;

function inside(root, target) {
  const rel = path.relative(root, target);
  return rel === '' || (rel !== '..' && !rel.startsWith('..' + path.sep) && !path.isAbsolute(rel));
}
function resolveVault(given) {
  let root = given || process.env.OBSIDIAN_VAULT;
  if (!root) {
    let cursor = __dirname;
    while (true) {
      if (fs.existsSync(path.join(cursor, 'AGENTS.md'))) { root = cursor; break; }
      const parent = path.dirname(cursor);
      if (parent === cursor) break;
      cursor = parent;
    }
  }
  if (!root || !fs.existsSync(root)) throw new Error('VAULT_NOT_FOUND: set --vault or OBSIDIAN_VAULT');
  root = fs.realpathSync(root);
  if (!fs.statSync(root).isDirectory() || !fs.existsSync(path.join(root, 'AGENTS.md'))) {
    throw new Error('INVALID_VAULT: AGENTS.md is required');
  }
  return root;
}
function resolveScope(vault, name) {
  name = name || '黎黎隆项目';
  if (path.isAbsolute(name) || name.split(/[\\/]/).includes('..') || name === '.') {
    throw new Error('INVALID_SCOPE: scope must be a specific subdirectory');
  }
  const scope = path.resolve(vault, name);
  if (!inside(vault, scope) || scope === vault || !fs.existsSync(scope) || !fs.statSync(scope).isDirectory() ||
      !inside(vault, fs.realpathSync(scope))) throw new Error('INVALID_SCOPE: missing or outside vault');
  return { scope, name: path.relative(vault, scope).split(path.sep).join('/') };
}
function resolveStateDir(vault, arg) {
  const dir = path.resolve(arg || process.env.OBSIDIAN_WORKER_STATE_DIR ||
    path.join(os.homedir(), '.74-obsidian-maintainer'));
  if (inside(vault, dir) || (fs.existsSync(dir) && inside(vault, fs.realpathSync(dir)))) {
    throw new Error('STATE_INSIDE_VAULT: state/reports must be outside Obsidian');
  }
  fs.mkdirSync(dir, { recursive: true });
  return fs.realpathSync(dir);
}
function walkFiles(scope) {
  const out = [];
  function visit(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ent.isSymbolicLink()) continue;
      const filename = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        if (!IGNORE_DIR.has(ent.name) && !ent.name.startsWith('.')) visit(filename);
      } else if (ent.isFile() && TEXT_EXT.has(path.extname(ent.name).toLowerCase())) {
        out.push(filename);
      }
    }
  }
  visit(scope);
  return out.sort();
}
function inventory(scope) {
  const entries = {};
  const invalidCanvas = [];
  const skippedOversize = [];
  const hashes = new Map();
  for (const full of walkFiles(scope)) {
    const rel = path.relative(scope, full).split(path.sep).join('/');
    const size = fs.statSync(full).size;
    if (size > MAX_BYTES) { skippedOversize.push(rel); continue; }
    const bytes = fs.readFileSync(full);
    const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
    entries[rel] = { sha256, size: bytes.length };
    if (path.extname(rel).toLowerCase() === '.md') {
      if (!hashes.has(sha256)) hashes.set(sha256, []);
      hashes.get(sha256).push(rel);
    }
    if (rel.endsWith('.canvas')) {
      try {
        const doc = JSON.parse(bytes.toString('utf8'));
        if (!Array.isArray(doc.nodes) || !Array.isArray(doc.edges)) throw new Error('nodes/edges missing');
      } catch (error) { invalidCanvas.push({ file: rel, error: String(error.message) }); }
    }
  }
  const duplicateCandidates = [...hashes.values()].filter(a => a.length > 1).map(a => a.sort());
  return { entries, invalidCanvas, skippedOversize, duplicateCandidates };
}
function delta(before, after) {
  const added = [], modified = [], removed = [];
  for (const [file, info] of Object.entries(after)) {
    if (!before[file]) added.push(file);
    else if (before[file].sha256 !== info.sha256) modified.push(file);
  }
  for (const file of Object.keys(before)) if (!after[file]) removed.push(file);
  return { added: added.sort(), modified: modified.sort(), removed: removed.sort() };
}
function safeWrite(file, data) {
  const tmp = file + '.tmp.' + process.pid;
  try { fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n', 'utf8'); fs.renameSync(tmp, file); }
  finally { if (fs.existsSync(tmp)) fs.unlinkSync(tmp); }
}
function scan(options) {
  const vault = resolveVault(options.vault);
  const { scope, name } = resolveScope(vault, options.scope);
  const stateDir = resolveStateDir(vault, options.stateDir);
  const instance = crypto.createHash('sha256').update(vault + '\0' + name).digest('hex').slice(0, 16);
  const statePath = path.join(stateDir, 'inventory-' + instance + '.json');
  const reportPath = path.join(stateDir, 'latest-' + instance + '.json');
  const lockPath = path.join(stateDir, 'writer-' + instance + '.lock');
  // Exclusive lock: do not steal unknown locks, especially across two machines.
  let fd;
  try { fd = fs.openSync(lockPath, 'wx'); }
  catch (e) { if (e.code === 'EEXIST') throw new Error('LOCKED: existing worker detected; do not run concurrently'); throw e; }
  try {
    fs.writeFileSync(fd, String(process.pid) + '\n');
    let previous = null;
    if (fs.existsSync(statePath)) {
      previous = JSON.parse(fs.readFileSync(statePath, 'utf8'));
      if (previous.vault !== vault || previous.scope !== name || !previous.files) {
        throw new Error('STATE_MISMATCH: manual recovery required');
      }
    }
    const result = inventory(scope);
    // Ignore missing/oversize files for delta purposes; do not infer deletion.
    const protectedFiles = new Set([...(previous ? Object.keys(previous.files) : []), ...result.skippedOversize]);
    const visibleBefore = previous ? Object.fromEntries(Object.entries(previous.files).filter(([k]) =>
      !result.skippedOversize.includes(k))) : {};
    const changes = delta(visibleBefore, result.entries);
    const hasDelta = !!(changes.added.length || changes.modified.length || changes.removed.length);
    const status = !previous ? 'BASELINE' : hasDelta ? 'REVIEW' : 'NO_OP';
    const summary = {
      status, vault, scope: name,
      total_text_files: Object.keys(result.entries).length,
      changes, duplicate_candidates: result.duplicateCandidates,
      invalid_canvas: result.invalidCanvas, skipped_oversize: result.skippedOversize,
      note: 'CANDIDATES_ONLY: no vault edits; duplicate hashes do not authorize merges/deletions',
      state_path: statePath
    };
    // Failure-safe: an invalid canvas or skipped large file must never be silently fixed.
    const savedFiles = { ...(previous ? previous.files : {}), ...result.entries };
    for (const file of changes.removed) delete savedFiles[file];
    safeWrite(statePath, { version: 1, vault, scope: name, files: savedFiles });
    // Only meaningful change writes a report; baseline emits only stdout.
    if (status === 'REVIEW') safeWrite(reportPath, summary);
    return summary;
  } finally { fs.closeSync(fd); fs.unlinkSync(lockPath); }
}
function parseArgs(args) {
  const options = {};
  for (const a of args) {
    if (a === '--help') { options.help = true; continue; }
    const match = /^--(vault|scope|state-dir)=(.+)$/.exec(a);
    if (!match) throw new Error('INVALID_ARGUMENT: ' + a);
    options[match[1] === 'state-dir' ? 'stateDir' : match[1]] = match[2];
  }
  return options;
}
function runCli(argv = process.argv.slice(2)) {
  try {
    const opts = parseArgs(argv);
    if (opts.help) {
      console.log('node incremental_cruise.js [--vault=ABS_PATH] [--scope=黎黎隆项目] [--state-dir=ABS_PATH]');
      return 0;
    }
    const result = scan(opts);
    console.log(JSON.stringify(result, null, 2));
    return 0;
  } catch (error) {
    console.error('STOP: ' + error.message);
    return 2;
  }
}
if (require.main === module) process.exitCode = runCli();
module.exports = { scan, runCli, resolveVault, resolveScope, resolveStateDir, delta };
