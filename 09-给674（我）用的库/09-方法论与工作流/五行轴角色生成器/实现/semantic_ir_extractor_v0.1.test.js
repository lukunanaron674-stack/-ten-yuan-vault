'use strict';

const assert = require('assert');
const schema = require('./semantic_ir_schema_v0.1.js');
const extractor = require('./semantic_ir_extractor_v0.1.js');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${name}`);
    console.error(error && error.stack ? error.stack : error);
  }
}

function expectCode(fn, code) {
  assert.throws(fn, error => error && error.code === code);
}

test('plain natural language preserves raw_input and guesses nothing', () => {
  const raw = '他求人帮自己拿到职位';
  const ir = extractor.extractSemanticIR(raw);
  assert.strictEqual(ir.raw_input, raw);
  assert.strictEqual(ir.schema_version, schema.SEMANTIC_IR_SCHEMA_VERSION);
  assert.deepStrictEqual(ir.fields, schema.createUnknownFields());
  assert.strictEqual(extractor.extractionState(ir).status, 'UNKNOWN_ONLY');
});

test('keyword lure does not infer symbol-facing structure', () => {
  const ir = extractor.extractSemanticIR('宿命中的国王最终死亡，无路可走');
  assert.deepStrictEqual(ir.fields, schema.createUnknownFields());
});

test('genre profession and emotion lure stay unknown', () => {
  const ir = extractor.extractSemanticIR('赛博朋克公司的悲伤骑士坚持自己的信念');
  assert.deepStrictEqual(ir.fields, schema.createUnknownFields());
});

test('only confirmed structural observations populate fields', () => {
  const ir = extractor.extractSemanticIR('林澈坚持实验动画线，另一位合伙人的商业线继续独立运营', {
    confirmed_fields: {
      actor: '林澈',
      object_layer: '各自路线的独立运营资格层',
      relation_shape: 'parallel_independent_endpoints'
    }
  });
  assert.strictEqual(ir.fields.actor, '林澈');
  assert.strictEqual(ir.fields.object_layer, '各自路线的独立运营资格层');
  assert.strictEqual(ir.fields.relation_shape, 'parallel_independent_endpoints');
  assert.strictEqual(ir.fields.changed_variable, null);
  assert.strictEqual(ir.fields.path_set, null);
  assert.deepStrictEqual(extractor.extractionState(ir).known_fields, ['actor', 'object_layer', 'relation_shape']);
});

test('explicit null remains unknown', () => {
  const ir = extractor.extractSemanticIR('还有一条回去的路', {
    confirmed_fields: { actor: null, reentry_right: null }
  });
  const state = extractor.extractionState(ir);
  assert.strictEqual(state.status, 'UNKNOWN_ONLY');
  assert.ok(state.unknown_fields.includes('actor'));
  assert.ok(state.unknown_fields.includes('reentry_right'));
});

test('undefined confirmed value does not become known', () => {
  const ir = extractor.extractSemanticIR('测试输入', {
    confirmed_fields: { actor: undefined }
  });
  assert.strictEqual(ir.fields.actor, null);
});

test('unknown confirmed field hard fails', () => {
  expectCode(
    () => extractor.extractSemanticIR('测试输入', { confirmed_fields: { symbol: 'xz' } }),
    'ERROR_IR_CONFIRMED_FIELD_UNKNOWN'
  );
});

test('non-object confirmed_fields hard fails', () => {
  expectCode(
    () => extractor.extractSemanticIR('测试输入', { confirmed_fields: ['actor'] }),
    'ERROR_IR_CONFIRMED_FIELDS_TYPE'
  );
});

test('non-string natural language input hard fails', () => {
  expectCode(() => extractor.extractSemanticIR(123), 'ERROR_IR_INPUT_TYPE');
});

test('empty natural language input hard fails', () => {
  expectCode(() => extractor.extractSemanticIR('　 \n\t '), 'ERROR_IR_EMPTY_INPUT');
});

test('invalid extraction options hard fail', () => {
  expectCode(() => extractor.extractSemanticIR('测试输入', []), 'ERROR_IR_EXTRACTION_OPTIONS_TYPE');
});

console.log(JSON.stringify({
  suite: 'semantic_ir_extractor_v0.1',
  tests: passed + failed,
  passed,
  failed,
  target: 'P0-2 natural-language input -> Semantic IR extraction interface skeleton; no guessing'
}));

if (failed > 0) process.exit(1);
