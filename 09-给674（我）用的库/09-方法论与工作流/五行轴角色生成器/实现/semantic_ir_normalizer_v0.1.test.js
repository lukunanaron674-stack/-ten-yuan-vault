'use strict';

const assert = require('assert');
const { createSemanticIR, SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const {
  SEMANTIC_IR_NORMALIZATION_VERSION,
  normalizeText,
  normalizeSemanticIR
} = require('./semantic_ir_normalizer_v0.1.js');

const tests = [];
function test(name, fn) { tests.push({ name, fn }); }

test('NFKC + whitespace normalization is deterministic', () => {
  assert.strictEqual(normalizeText('  ＡＩ\t解释器\n测试  '), 'AI 解释器 测试');
});

test('raw_input remains byte-for-byte JS string identical', () => {
  const ir = createSemanticIR('  ＡＩ\t解释器  ');
  const out = normalizeSemanticIR(ir);
  assert.strictEqual(out.raw_input, ir.raw_input);
  assert.strictEqual(out.normalized_input, 'AI 解释器');
});

test('normalization version is fixed', () => {
  const out = normalizeSemanticIR(createSemanticIR('测试'));
  assert.strictEqual(out.normalization_version, SEMANTIC_IR_NORMALIZATION_VERSION);
});

test('normalization does not guess semantic fields', () => {
  const out = normalizeSemanticIR(createSemanticIR('宿命中的国王最终死亡，无路可走'));
  for (const field of SEMANTIC_FIELDS) assert.strictEqual(out.fields[field], null);
  assert.deepStrictEqual(out.provenance.guessed_fields, []);
});

test('known fields survive normalization unchanged', () => {
  const ir = createSemanticIR('他请求同事帮忙');
  ir.fields.actor = '他';
  ir.fields.relation_source = 'caller-confirmed';
  const out = normalizeSemanticIR(ir, { confirmed_fields: ['actor', 'relation_source'] });
  assert.strictEqual(out.fields.actor, '他');
  assert.strictEqual(out.fields.relation_source, 'caller-confirmed');
});

test('normalization does not mutate source IR fields object', () => {
  const ir = createSemanticIR('测试');
  const out = normalizeSemanticIR(ir);
  assert.notStrictEqual(out.fields, ir.fields);
  out.fields.actor = '修改';
  assert.strictEqual(ir.fields.actor, null);
});

test('provenance records source and confirmed fields', () => {
  const out = normalizeSemanticIR(createSemanticIR('测试'), { source: 'unit-test', confirmed_fields: ['actor'] });
  assert.strictEqual(out.provenance.source, 'unit-test');
  assert.deepStrictEqual(out.provenance.confirmed_fields, ['actor']);
});

test('duplicate confirmed fields collapse deterministically', () => {
  const out = normalizeSemanticIR(createSemanticIR('测试'), { confirmed_fields: ['actor', 'actor'] });
  assert.deepStrictEqual(out.provenance.confirmed_fields, ['actor']);
});

test('unknown confirmed field hard fails', () => {
  assert.throws(() => normalizeSemanticIR(createSemanticIR('测试'), { confirmed_fields: ['symbol'] }), err => err.code === 'ERROR_IR_NORMALIZE_CONFIRMED_FIELD_UNKNOWN');
});

test('empty provenance source hard fails', () => {
  assert.throws(() => normalizeSemanticIR(createSemanticIR('测试'), { source: ' ' }), err => err.code === 'ERROR_IR_NORMALIZE_SOURCE');
});

test('invalid options hard fail', () => {
  assert.throws(() => normalizeSemanticIR(createSemanticIR('测试'), []), err => err.code === 'ERROR_IR_NORMALIZE_OPTIONS_TYPE');
});

let passed = 0;
for (const { name, fn } of tests) {
  try { fn(); passed += 1; }
  catch (error) { console.error('FAIL', name, error); process.exitCode = 1; }
}
console.log(JSON.stringify({ suite: 'semantic_ir_normalizer_v0.1', tests: tests.length, passed, failed: tests.length - passed, target: 'P0-3 IR normalization + provenance; raw_input preserved; zero field guessing' }, null, 2));