'use strict';
const assert = require('assert');
const schema = require('./semantic_ir_schema_v0.1.js');

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; }
  catch (error) { failed++; console.error(`FAIL ${name}:`, error.message); }
}

const EXPECTED_FIELDS = [
  'actor','object','object_layer','current_window','changed_variable','relation_source',
  'relation_shape','decision_right','path_set','reentry_right','future_endpoint','reality_anchor'
];

test('schema version is stable and explicit', () => {
  assert.strictEqual(schema.SEMANTIC_IR_SCHEMA_VERSION, 'ten-yuan-semantic-ir-v0.1');
});

test('fixed semantic field set is exact', () => {
  assert.deepStrictEqual([...schema.SEMANTIC_FIELDS], EXPECTED_FIELDS);
});

test('new IR preserves raw_input exactly and guesses nothing', () => {
  const raw = '  他求人帮自己拿到职位  ';
  const ir = schema.createSemanticIR(raw);
  assert.strictEqual(ir.raw_input, raw);
  assert.deepStrictEqual(ir.fields, Object.fromEntries(EXPECTED_FIELDS.map(field => [field, null])));
});

test('inspection separates required optional and unknown', () => {
  const ir = schema.createSemanticIR('还有一条回去的路');
  const status = schema.inspectSemanticIR(ir);
  assert.deepStrictEqual(status.required, ['schema_version', 'raw_input', 'fields']);
  assert.deepStrictEqual(status.optional, EXPECTED_FIELDS);
  assert.deepStrictEqual(status.unknown, EXPECTED_FIELDS);
  assert.deepStrictEqual(status.known, []);
});

test('known values are structural only when explicitly supplied', () => {
  const ir = schema.createSemanticIR('城门被封');
  ir.fields.object = '城门';
  ir.fields.object_layer = 'physical_access';
  const status = schema.inspectSemanticIR(ir);
  assert.deepStrictEqual(status.known, ['object', 'object_layer']);
  assert.strictEqual(status.unknown.includes('changed_variable'), true);
});

test('missing fixed field hard-fails', () => {
  const ir = schema.createSemanticIR('测试');
  delete ir.fields.path_set;
  assert.throws(() => schema.validateSemanticIRShape(ir), error => error.code === 'ERROR_IR_FIELD_MISSING');
});

test('unregistered field hard-fails', () => {
  const ir = schema.createSemanticIR('测试');
  ir.fields.keyword_guess = 'xz';
  assert.throws(() => schema.validateSemanticIRShape(ir), error => error.code === 'ERROR_IR_FIELD_UNKNOWN');
});

test('wrong schema version hard-fails', () => {
  const ir = schema.createSemanticIR('测试');
  ir.schema_version = 'ten-yuan-semantic-ir-v9';
  assert.throws(() => schema.validateSemanticIRShape(ir), error => error.code === 'ERROR_IR_SCHEMA_VERSION');
});

console.log(JSON.stringify({
  suite: 'semantic_ir_schema_v0.1',
  tests: passed + failed,
  passed,
  failed,
  target: 'P0 Semantic IR stable schema/version and explicit unknown'
}, null, 2));
if (failed) process.exit(1);
