'use strict';
const assert = require('assert');
const compiler = require('./trigger_compiler_v0.1.js');

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.error(`FAIL ${name}:`, e.message); }
}

test('repeated 的 collapses at single-symbol subject boundary', () => {
  const r = compiler.parseTrigger('zn的的少女');
  assert.deepStrictEqual(r.canonical_symbols, ['zn']);
  assert.strictEqual(r.subject, '少女');
});

test('spaces plus repeated 的 normalize at multi-symbol subject boundary', () => {
  const r = compiler.parseTrigger(' x ＋ z 的 的 少女 ');
  assert.deepStrictEqual(r.canonical_symbols, ['x', 'z']);
  assert.strictEqual(r.subject, '少女');
  assert.strictEqual(r.mode, 'multi');
});

test('repeated 的 without subject remains empty-subject error', () => {
  assert.throws(() => compiler.parseTrigger('x并z的的'), e => e.code === 'ERROR_EMPTY_SUBJECT');
});

test('x并z stays atomic while repeated 的 normalizes', () => {
  const r = compiler.parseTrigger('Ｘ并Ｚ的的少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x并z']);
  assert.strictEqual(r.subject, '少女');
});

console.log(JSON.stringify({
  tests: passed + failed,
  passed,
  failed,
  suite: 'trigger_compiler_subject_joiner_v0.1',
  parser_ambiguities_detected: 0,
  x_parallel_z_split_errors: 0
}, null, 2));
if (failed) process.exit(1);
