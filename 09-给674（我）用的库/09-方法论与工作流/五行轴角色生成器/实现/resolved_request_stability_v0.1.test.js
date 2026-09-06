'use strict';
const assert = require('assert');
const compiler = require('./trigger_compiler_v0.1.js');

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (error) { failed++; console.error(`FAIL ${name}:`, error.message); }
}

test('locked_modules canonicalize by module order', () => {
  const a = compiler.parseTrigger('zn少女', { locked_modules: ['发型', '世界观', '服装'] });
  const b = compiler.parseTrigger('zn少女', { locked_modules: ['服装', '发型', '世界观'] });
  assert.deepStrictEqual(a.locked_modules, ['世界观', '服装', '发型']);
  assert.deepStrictEqual(a.locked_modules, b.locked_modules);
});

test('reroll_modules dedupe equivalent inputs', () => {
  const a = compiler.parseTrigger('nx少女', { reroll_modules: ['道具', '服装', '道具', '服装'] });
  const b = compiler.parseTrigger('nx少女', { reroll_modules: ['服装', '道具'] });
  assert.deepStrictEqual(a.reroll_modules, ['服装', '道具']);
  assert.deepStrictEqual(a.reroll_modules, b.reroll_modules);
});

test('module names normalize NFKC and trim', () => {
  const r = compiler.parseTrigger('n少女', { locked_modules: [' 世界观 ', '　服装　'] });
  assert.deepStrictEqual(r.locked_modules, ['世界观', '服装']);
});

test('resolved_request is reproducible for semantically identical module lists', () => {
  const base = { seed: '8801', mapping_version: '世界观_机器映射_v0.1', genre_context: 'default' };
  const a = compiler.parseTrigger('x并z少女', {
    ...base,
    locked_modules: ['发型', '世界观', '世界观'],
    reroll_modules: ['道具', '服装']
  });
  const b = compiler.parseTrigger('x并z少女', {
    ...base,
    locked_modules: ['世界观', '发型'],
    reroll_modules: ['服装', '道具', '服装']
  });
  assert.deepStrictEqual(a, b);
  assert.deepStrictEqual(a.canonical_symbols, ['x并z']);
});

test('input arrays are not mutated', () => {
  const locked = ['发型', '世界观', '世界观'];
  const reroll = ['道具', '服装', '道具'];
  const lockedBefore = [...locked];
  const rerollBefore = [...reroll];
  compiler.parseTrigger('zx少女', { locked_modules: locked, reroll_modules: reroll });
  assert.deepStrictEqual(locked, lockedBefore);
  assert.deepStrictEqual(reroll, rerollBefore);
});

test('seed normalizes NFKC and trim while raw_trigger remains exact', () => {
  const raw = '  zn少女  ';
  const r = compiler.parseTrigger(raw, { seed: '　８８０１　' });
  assert.strictEqual(r.raw_trigger, raw);
  assert.strictEqual(r.seed, '8801');
});

test('genre_context normalizes NFKC and trim', () => {
  const a = compiler.parseTrigger('zn少女', { genre_context: '　ＳＦ　' });
  const b = compiler.parseTrigger('zn少女', { genre_context: 'SF' });
  assert.strictEqual(a.genre_context, 'SF');
  assert.deepStrictEqual(a, b);
});

test('mapping_version normalizes NFKC and trim', () => {
  const a = compiler.parseTrigger('zn少女', { mapping_version: '　世界观＿机器映射＿ｖ０．１　' });
  const b = compiler.parseTrigger('zn少女', { mapping_version: '世界观_机器映射_v0.1' });
  assert.strictEqual(a.mapping_version, '世界观_机器映射_v0.1');
  assert.deepStrictEqual(a, b);
});

test('graph mode normalizes NFKC case and trim', () => {
  const a = compiler.parseTrigger('zn少女', { mode: '　ＧＲＡＰＨ　' });
  const b = compiler.parseTrigger('zn少女', { mode: 'graph' });
  assert.strictEqual(a.mode, 'graph');
  assert.deepStrictEqual(a, b);
});

test('blank scalar provenance falls back deterministically', () => {
  const r = compiler.parseTrigger('zn少女', { seed: '　', genre_context: ' ', mapping_version: '' });
  assert.strictEqual(r.seed, '74');
  assert.strictEqual(r.genre_context, 'default');
  assert.strictEqual(r.mapping_version, '世界观_机器映射_v0.1');
});

console.log(JSON.stringify({
  suite: 'resolved_request_stability_v0.1',
  tests: passed + failed,
  passed,
  failed,
  target: 'P0-3 resolved_request provenance stability'
}, null, 2));
if (failed) process.exit(1);
