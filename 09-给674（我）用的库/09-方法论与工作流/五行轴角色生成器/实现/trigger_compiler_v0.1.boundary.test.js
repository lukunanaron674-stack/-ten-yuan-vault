'use strict';
const assert = require('assert');
const compiler = require('./trigger_compiler_v0.1.js');
const data = require('../数据/世界观_机器映射_v0.1.json');
const mappings = data.mappings;

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.error(`FAIL ${name}:`, e.message); }
}

// 10 explicit-multi / longest-match boundaries.
const multiCases = [
  ['zx+zn少女', ['zx','zn']],
  ['zn ＋ nz 少女', ['zn','nz']],
  ['nz+n少女', ['nz','n']],
  ['n ＋ nx的少女', ['n','nx']],
  ['nx+xn 少女', ['nx','xn']],
  ['xn ＋ x 少女', ['xn','x']],
  ['x+xz少女', ['x','xz']],
  ['xz ＋ x并z 少女', ['xz','x并z']],
  ['x并z+zx少女', ['x并z','zx']],
  ['z ＋ zn 的 少女', ['z','zn']]
];
for (const [raw, expected] of multiCases) {
  test(`explicit multi ${raw}`, () => {
    const r = compiler.parseTrigger(raw);
    assert.deepStrictEqual(r.canonical_symbols, expected);
    assert.strictEqual(r.subject, '少女');
    assert.strictEqual(r.mode, 'multi');
  });
}

// 5 concatenated-token ambiguity guards.
for (const raw of ['zxzn少女','zzn少女','znx少女','nxx少女','xzx并z少女']) {
  test(`ambiguous concatenation ${raw}`, () => {
    assert.throws(() => compiler.parseTrigger(raw), e => e.code === 'ERROR_AMBIGUOUS_TOKEN');
  });
}

// 5 normalization / surface-word / empty-subject guards.
test('fullwidth latin x并z remains atomic', () => {
  const r = compiler.parseTrigger('Ｘ并Ｚ少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x并z']);
});
test('spaces fullwidth plus and 的 normalize in multi', () => {
  const r = compiler.parseTrigger(' x ＋ z 的 少女 ');
  assert.deepStrictEqual(r.canonical_symbols, ['x','z']);
  assert.strictEqual(r.subject, '少女');
});
test('genre surface word never back-infers symbol', () => {
  assert.throws(() => compiler.parseTrigger('科幻少女'), e => e.code === 'ERROR_UNKNOWN_TOKEN');
});
test('的 without subject is empty-subject', () => {
  assert.throws(() => compiler.parseTrigger('zn的'), e => e.code === 'ERROR_EMPTY_SUBJECT');
});
test('explicit plus without second canonical errors', () => {
  assert.throws(() => compiler.parseTrigger('zx+少女'), e => e.code === 'ERROR_UNKNOWN_TOKEN');
});

// 5 resolved-request provenance / reproducibility boundaries.
test('raw_trigger is preserved exactly', () => {
  const raw = '  ZN 的 少女  ';
  const r = compiler.parseTrigger(raw, { seed: '8801' });
  assert.strictEqual(r.raw_trigger, raw);
});
test('subject surface genre does not alter canonical symbol', () => {
  const r = compiler.parseTrigger('zn科幻偶像少女', { genre_context: '废土' });
  assert.deepStrictEqual(r.canonical_symbols, ['zn']);
  assert.strictEqual(r.subject, '科幻偶像少女');
});
test('mapping version override is preserved', () => {
  const r = compiler.parseTrigger('nx少女', { mapping_version: '世界观_机器映射_v0.1' });
  assert.strictEqual(r.mapping_version, '世界观_机器映射_v0.1');
});
test('locked and reroll module arrays are copied', () => {
  const locked = ['世界观'];
  const reroll = ['服装'];
  const r = compiler.parseTrigger('n少女', { locked_modules: locked, reroll_modules: reroll });
  locked.push('发型'); reroll.push('道具');
  assert.deepStrictEqual(r.locked_modules, ['世界观']);
  assert.deepStrictEqual(r.reroll_modules, ['服装']);
});
test('same normalized semantics but different raw keeps raw provenance distinct', () => {
  const a = compiler.parseTrigger('zn少女', { seed: '74' });
  const b = compiler.parseTrigger(' ZN 的 少女 ', { seed: '74' });
  assert.deepStrictEqual(a.canonical_symbols, b.canonical_symbols);
  assert.strictEqual(a.subject, b.subject);
  assert.notStrictEqual(a.raw_trigger, b.raw_trigger);
});

// 5 runtime gate boundaries.
test('pending z becomes usable only with allowPending', () => {
  const blocked = compiler.runEndToEnd('z少女', mappings, { modules: ['世界观'], seed: '74' });
  const allowed = compiler.runEndToEnd('z少女', mappings, { modules: ['世界观'], seed: '74', allowPending: true });
  assert.strictEqual(blocked.status, 'DATA_BLOCKED');
  assert.strictEqual(allowed.status, 'OK');
  assert.strictEqual(allowed.modules['世界观'].source_status, 'pending-review');
});
test('rejected mapping never enters pool even when pending allowed', () => {
  const rejectedOnly = [{
    id:'XZ-W-REJECTED', symbol:'xz', module:'世界观', sub_semantic:'test', changed_variable:'test-v',
    relation_shape:'test-r', module_grammar:'test-g', concrete_candidate:['test-c'], genre_context:['default'],
    genre_translation:{}, status:'rejected'
  }];
  const r = compiler.runEndToEnd('xz少女', rejectedOnly, { modules: ['世界观'], allowPending: true });
  assert.strictEqual(r.status, 'DATA_BLOCKED');
  assert.strictEqual(r.error_code, 'DATA_BLOCKED_MAPPING_MISSING');
});
test('only unimplemented modules fail explicitly with markers', () => {
  const r = compiler.runEndToEnd('zn少女', mappings, { modules: ['服装','发型'] });
  assert.strictEqual(r.status, 'DATA_BLOCKED');
  assert.strictEqual(r.error_code, 'DATA_BLOCKED_NO_IMPLEMENTED_MODULE');
  assert.strictEqual(r.modules['服装'], 'NOT_IMPLEMENTED');
  assert.strictEqual(r.modules['发型'], 'NOT_IMPLEMENTED');
});
test('explicit multi without roles stays blocked', () => {
  const r = compiler.runEndToEnd('zx+nx少女', mappings, { modules: ['世界观'] });
  assert.strictEqual(r.status, 'BLOCKED');
  assert.strictEqual(r.error_code, 'BLOCKED_MULTI_RESPONSIBILITY_REQUIRED');
});
test('x并z unmapped runtime blocks without splitting', () => {
  const r = compiler.runEndToEnd('x并z少女', mappings, { modules: ['世界观'] });
  assert.strictEqual(r.status, 'DATA_BLOCKED');
  assert.strictEqual(r.error_code, 'DATA_BLOCKED_MAPPING_MISSING');
  assert.deepStrictEqual(r.resolved_request.canonical_symbols, ['x并z']);
});

console.log(JSON.stringify({
  tests: passed + failed,
  passed,
  failed,
  suite: 'trigger_compiler_v0.1.boundary',
  expected_total_with_baseline: 150,
  parser_ambiguities_detected: 5,
  x_parallel_z_split_errors: 0
}, null, 2));
if (failed) process.exit(1);
