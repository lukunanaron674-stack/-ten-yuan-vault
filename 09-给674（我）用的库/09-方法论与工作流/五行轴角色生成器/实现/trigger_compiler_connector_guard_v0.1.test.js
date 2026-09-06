'use strict';
const assert = require('assert');
const compiler = require('./trigger_compiler_v0.1.js');

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.error(`FAIL ${name}:`, e.message); }
}

for (const raw of ['zx++zn少女', 'zx＋＋zn少女', 'zx+的少女', 'zx+zn+少女']) {
  test(`malformed connector ${raw}`, () => {
    assert.throws(() => compiler.parseTrigger(raw), e => e.code === 'ERROR_UNKNOWN_TOKEN' && e.detail.after_connector === true);
  });
}

test('valid explicit multi remains valid', () => {
  const r = compiler.parseTrigger('zx+zn的少女');
  assert.deepStrictEqual(r.canonical_symbols, ['zx', 'zn']);
  assert.strictEqual(r.subject, '少女');
  assert.strictEqual(r.mode, 'multi');
});

test('x并z stays atomic beside valid explicit multi', () => {
  const r = compiler.parseTrigger('x并z+zx少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x并z', 'zx']);
  assert.strictEqual(r.subject, '少女');
});

console.log(JSON.stringify({
  tests: passed + failed,
  passed,
  failed,
  suite: 'trigger_compiler_connector_guard_v0.1',
  parser_ambiguities_detected: 0,
  x_parallel_z_split_errors: 0
}, null, 2));
if (failed) process.exit(1);
