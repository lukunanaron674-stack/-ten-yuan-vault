'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { scan } = require('../incremental_cruise');
const CruiseManager = require('../cruise_manager');

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'vault-maintainer-test-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const vault = path.join(root, 'vault');
  const scope = path.join(vault, '黎黎隆项目');
  const stateDir = path.join(root, 'state');
  fs.mkdirSync(scope, { recursive: true });
  fs.writeFileSync(path.join(vault, 'AGENTS.md'), '# Root rules');
  fs.writeFileSync(path.join(scope, 'first.md'), '# A\nhello');
  return { vault, scope, stateDir };
}
test('baseline → NO_OP without creating reports inside vault', (t) => {
  const f = fixture(t);
  const options = { vault: f.vault, scope: '黎黎隆项目', stateDir: f.stateDir };
  const first = scan(options);
  assert.equal(first.status, 'BASELINE');
  assert.equal(first.total_text_files, 1);
  assert.equal(scan(options).status, 'NO_OP');
  assert.deepEqual(fs.readdirSync(f.scope), ['first.md']);
  assert.equal(fs.readdirSync(f.stateDir).filter(n => n.startsWith('latest-')).length, 0);
});
test('detects added, modified, removed and only saves report for real changes', (t) => {
  const f = fixture(t), options = { vault: f.vault, stateDir: f.stateDir };
  scan(options);
  fs.writeFileSync(path.join(f.scope, 'first.md'), '# A\nedited');
  fs.writeFileSync(path.join(f.scope, 'second.md'), '# B');
  const changed = scan(options);
  assert.equal(changed.status, 'REVIEW');
  assert.deepEqual(changed.changes.modified, ['first.md']);
  assert.deepEqual(changed.changes.added, ['second.md']);
  assert.equal(fs.readdirSync(f.stateDir).filter(n => n.startsWith('latest-')).length, 1);
  assert.equal(scan(options).status, 'NO_OP');
  fs.unlinkSync(path.join(f.scope, 'second.md'));
  assert.deepEqual(scan(options).changes.removed, ['second.md']);
});
test('duplicate hashes and invalid Canvas are candidate-only, not source changes', (t) => {
  const f = fixture(t), options = { vault: f.vault, stateDir: f.stateDir };
  fs.copyFileSync(path.join(f.scope, 'first.md'), path.join(f.scope, 'copy.md'));
  fs.writeFileSync(path.join(f.scope, 'broken.canvas'), '{ invalid json');
  const result = scan(options);
  assert.equal(result.duplicate_candidates.length, 1);
  assert.deepEqual(result.duplicate_candidates[0], ['copy.md', 'first.md']);
  assert.equal(result.invalid_canvas[0].file, 'broken.canvas');
  assert.equal(fs.readFileSync(path.join(f.scope, 'broken.canvas'), 'utf8'), '{ invalid json');
});
test('invalid scope or state dir inside vault fails closed', (t) => {
  const f = fixture(t);
  assert.throws(() => scan({ vault: f.vault, scope: '..', stateDir: f.stateDir }), /INVALID_SCOPE/);
  assert.throws(() => scan({ vault: f.vault, stateDir: path.join(f.vault, 'state') }), /STATE_INSIDE_VAULT/);
});
test('existing lock prevents second writer without changing files', (t) => {
  const f = fixture(t), options = { vault: f.vault, stateDir: f.stateDir };
  scan(options);
  const instance = crypto.createHash('sha256').update(fs.realpathSync(f.vault) + '\0' + '黎黎隆项目').digest('hex').slice(0, 16);
  const lock = path.join(f.stateDir, 'writer-' + instance + '.lock');
  fs.writeFileSync(lock, 'other worker');
  assert.throws(() => scan(options), /LOCKED/);
});
test('CruiseManager does not falsely succeed or report placeholder tasks', async (t) => {
  const f = fixture(t);
  const base = path.join(f.stateDir, 'manager');
  const manager = new CruiseManager(base);
  const result = await manager.executeCruise([{ name: 'placeholder', script: null }]);
  assert.equal(result.status, 'NO_OP');
  assert.equal(result.tasks[0].status, 'skipped');
  assert.equal(manager.state.cruiseCount, 0);
  assert.equal(fs.readdirSync(path.join(base, 'reports')).length, 0);
});
test('CruiseManager fails missing script rather than reporting success', async (t) => {
  const f = fixture(t);
  const manager = new CruiseManager(path.join(f.stateDir, 'manager'));
  const result = await manager.executeCruise([{ name: 'missing', script: 'not-a-real-worker.js' }]);
  assert.equal(result.status, 'PARTIAL');
  assert.equal(result.tasks[0].status, 'failed');
});
