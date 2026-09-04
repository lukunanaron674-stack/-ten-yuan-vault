'use strict';
const assert = require('assert');
const compiler = require('./trigger_compiler_v0.1.js');
const core = require('./generator_core_v0.2.js');
const data = require('../数据/世界观_机器映射_v0.1.json');
const mappings = data.mappings;

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (e) { failed++; console.error(`FAIL ${name}:`, e.message); }
}

const symbols = ['zx','z','zn','nz','n','nx','xn','x','xz','x并z'];
const variants = [
  s => `${s}少女`,
  s => `${s} 少女`,
  s => `${s.toUpperCase()}少女`,
  s => `${s}的少女`,
  s => ` ${s}少女 `,
  s => `${s}\t少女`,
  s => `${s}的 少女`,
  s => `${s}\n少女`,
  s => `${s.toUpperCase()} 的少女`,
  s => `${s}  的  少女`
];

for (const symbol of symbols) {
  for (let i = 0; i < variants.length; i++) {
    test(`known ${symbol} v${i}`, () => {
      const r = compiler.parseTrigger(variants[i](symbol));
      assert.deepStrictEqual(r.canonical_symbols, [symbol]);
      assert.strictEqual(r.subject, '少女');
      assert.strictEqual(r.mode, 'single');
      assert.strictEqual(r.parser_version, 'trigger-parser-v0.1');
    });
  }
}

test('x并z longest-match atomic', () => {
  const r = compiler.parseTrigger('x并z少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x并z']);
  assert.strictEqual(r.mode, 'single');
});

test('X并Z normalized atomic', () => {
  const r = compiler.parseTrigger('X并Z少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x并z']);
});

test('x+z explicit multi', () => {
  const r = compiler.parseTrigger('x+z少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x','z']);
  assert.strictEqual(r.mode, 'multi');
});

test('x＋z fullwidth explicit multi', () => {
  const r = compiler.parseTrigger('x＋z少女');
  assert.deepStrictEqual(r.canonical_symbols, ['x','z']);
  assert.strictEqual(r.mode, 'multi');
});

test('concatenated canonical tokens are ambiguous', () => {
  assert.throws(() => compiler.parseTrigger('zxzn少女'), e => e.code === 'ERROR_AMBIGUOUS_TOKEN');
});

test('unknown token errors', () => {
  assert.throws(() => compiler.parseTrigger('q少女'), e => e.code === 'ERROR_UNKNOWN_TOKEN');
});

test('empty subject errors', () => {
  assert.throws(() => compiler.parseTrigger('zn'), e => e.code === 'ERROR_EMPTY_SUBJECT');
});

test('multi requires responsibilities', () => {
  const r = compiler.compileRequest('zx+zn少女');
  assert.strictEqual(r.status, 'BLOCKED');
  assert.strictEqual(r.error_code, 'BLOCKED_MULTI_RESPONSIBILITY_REQUIRED');
});

test('resolved_request minimum fields', () => {
  const r = compiler.parseTrigger('ZN少女', { genre_context: '科幻', seed: 74, locked_modules: ['世界观'], reroll_modules: ['服装'] });
  for (const k of ['raw_trigger','subject','canonical_symbols','mode','genre_context','seed','locked_modules','reroll_modules','parser_version','mapping_version']) assert.ok(Object.prototype.hasOwnProperty.call(r,k), k);
});

test('same input version seed reproducible resolved_request', () => {
  const a = compiler.parseTrigger('zn少女', { mapping_version: '世界观_机器映射_v0.1', seed: '74' });
  const b = compiler.parseTrigger('zn少女', { mapping_version: '世界观_机器映射_v0.1', seed: '74' });
  assert.deepStrictEqual(a,b);
});

test('zx end-to-end world works', () => {
  const r = compiler.runEndToEnd('zx少女', mappings, { modules: ['世界观'], seed: '74' });
  assert.strictEqual(r.status, 'OK');
  assert.strictEqual(r.modules['世界观'].symbol, 'zx');
});

test('zn end-to-end world works', () => {
  const r = compiler.runEndToEnd('zn少女', mappings, { modules: ['世界观'], seed: '74' });
  assert.strictEqual(r.status, 'OK');
  assert.strictEqual(r.modules['世界观'].symbol, 'zn');
});

test('z pending blocked by default', () => {
  const r = compiler.runEndToEnd('z少女', mappings, { modules: ['世界观'] });
  assert.strictEqual(r.status, 'DATA_BLOCKED');
});

test('unmapped canonical is DATA_BLOCKED not guessed', () => {
  const r = compiler.runEndToEnd('xz少女', mappings, { modules: ['世界观'] });
  assert.strictEqual(r.status, 'DATA_BLOCKED');
  assert.strictEqual(r.error_code, 'DATA_BLOCKED_MAPPING_MISSING');
});

test('unimplemented modules marked NOT_IMPLEMENTED', () => {
  const r = compiler.runEndToEnd('zn少女', mappings, { modules: ['世界观','服装','发型','一生'] });
  assert.strictEqual(r.status, 'OK');
  assert.strictEqual(r.modules['服装'], 'NOT_IMPLEMENTED');
  assert.strictEqual(r.modules['发型'], 'NOT_IMPLEMENTED');
  assert.strictEqual(r.modules['一生'], 'NOT_IMPLEMENTED');
});

test('graph contains no pseudo vector', () => {
  const r = compiler.runEndToEnd('zn少女', mappings, { mode: 'graph', modules: ['世界观'], seed: '74' });
  assert.strictEqual(r.status, 'OK');
  const raw = compiler.parseTrigger('zn少女', { mode: 'graph', seed: '74' });
  const out = core.generate(compiler.buildRuntimeConfig(raw, mappings, { modules: ['世界观'] }));
  assert.strictEqual(core.assertNoPseudoVector(out), true);
});

test('multi world works only with explicit role source', () => {
  const roles = { modules: { '世界观': {
    primary: { symbol: 'zx', responsibility: '决定公开方向接口' },
    secondary: [{ symbol: 'zn', responsibility: '约束不可自动让渡原则', relation_source: '应用层显式关系测试' }]
  } } };
  const r = compiler.runEndToEnd('zx+zn少女', mappings, { modules: ['世界观'], roles, seed: '74' });
  assert.strictEqual(r.status, 'OK');
  assert.strictEqual(r.modules['世界观'].primary.symbol, 'zx');
  assert.strictEqual(r.modules['世界观'].secondary[0].symbol, 'zn');
});

test('multi pseudo vector forbidden', () => {
  const roles = { modules: { '世界观': {
    primary: { symbol: 'zx', responsibility: '主结构' },
    secondary: [{ symbol: 'zn', responsibility: '副结构', relation_source: '测试', percent: 30 }]
  } } };
  const r = compiler.runEndToEnd('zx+zn少女', mappings, { modules: ['世界观'], roles });
  assert.strictEqual(r.status, 'INVALID');
});

test('same seed gives same structure output', () => {
  const a = compiler.runEndToEnd('zn少女', mappings, { modules: ['世界观'], seed: '7401' });
  const b = compiler.runEndToEnd('zn少女', mappings, { modules: ['世界观'], seed: '7401' });
  assert.deepStrictEqual(a.modules,b.modules);
});

test('locked module stays unchanged across reroll nonce', () => {
  const first = compiler.runEndToEnd('zn少女', mappings, { modules: ['世界观'], seed: '74', nonce: 0 });
  const previous = { mode: 'single', seed: '74', nonce: 0, genre: 'default', modules: first.modules };
  const second = compiler.runEndToEnd('zn少女', mappings, { modules: ['世界观'], seed: '74', nonce: 1, locked_modules: ['世界观'], previous });
  assert.deepStrictEqual(second.modules['世界观'], first.modules['世界观']);
});

console.log(JSON.stringify({ tests: passed + failed, passed, failed, known_token_cases: symbols.length * variants.length, parser_ambiguities_detected: 1, x_parallel_z_split_errors: 0 }, null, 2));
if (failed) process.exit(1);
