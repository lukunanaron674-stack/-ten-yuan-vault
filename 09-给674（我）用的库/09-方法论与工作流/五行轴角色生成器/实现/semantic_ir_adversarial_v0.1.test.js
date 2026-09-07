'use strict';

const assert = require('assert');
const fixtures = require('../数据/semantic_ir_adversarial_fixtures_v0.1.json');
const { SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { extractSemanticIR } = require('./semantic_ir_extractor_v0.1.js');

const REQUIRED_RISK_CLASSES = [
  'keyword_lure',
  'genre_profession_emotion_lure',
  'same_relation_different_object_layer',
  'current_window_shift',
  'chosen_path_vs_complete_path_set',
  'blocked_recoverable_vs_exhausted',
  'state_absence_not_opposite_presence',
  'x_parallel_z_atomicity'
];

function knownFields(ir) {
  return SEMANTIC_FIELDS.filter(field => ir.fields[field] !== null && ir.fields[field] !== undefined).sort();
}

function findCase(id) {
  const item = fixtures.cases.find(testCase => testCase.id === id);
  assert.ok(item, `missing fixture ${id}`);
  return item;
}

const tests = [];
function test(name, fn) { tests.push({ name, fn }); }

test('fixture version and schema version are explicit', () => {
  assert.strictEqual(fixtures.fixture_version, 'ten-yuan-semantic-ir-adversarial-fixtures-v0.1');
  assert.strictEqual(fixtures.schema_version, 'ten-yuan-semantic-ir-v0.1');
});

test('all required adversarial risk classes are covered', () => {
  const actual = new Set(fixtures.cases.map(testCase => testCase.risk_class));
  for (const risk of REQUIRED_RISK_CLASSES) assert.ok(actual.has(risk), `missing risk ${risk}`);
});

test('fixture ids are unique', () => {
  const ids = fixtures.cases.map(testCase => testCase.id);
  assert.strictEqual(new Set(ids).size, ids.length);
});

test('keyword/genre/profession/emotion lure cases do not guess IR fields', () => {
  const lures = fixtures.cases.filter(testCase => ['keyword_lure', 'genre_profession_emotion_lure'].includes(testCase.risk_class));
  for (const item of lures) {
    const ir = extractSemanticIR(item.input, { confirmed_fields: item.confirmed_fields });
    assert.deepStrictEqual(knownFields(ir), []);
  }
});

test('each fixture exposes only caller-confirmed structural fields', () => {
  for (const item of fixtures.cases) {
    const ir = extractSemanticIR(item.input, { confirmed_fields: item.confirmed_fields });
    assert.deepStrictEqual(knownFields(ir), [...item.expect_known_fields].sort(), item.id);
  }
});

test('same relation wording can preserve different object_layer', () => {
  const a = extractSemanticIR(findCase('ADV-005').input, { confirmed_fields: findCase('ADV-005').confirmed_fields });
  const b = extractSemanticIR(findCase('ADV-006').input, { confirmed_fields: findCase('ADV-006').confirmed_fields });
  assert.strictEqual(a.fields.relation_shape, b.fields.relation_shape);
  assert.notStrictEqual(a.fields.object_layer, b.fields.object_layer);
});

test('current-window pair does not collapse across stages', () => {
  const a = extractSemanticIR(findCase('ADV-007').input, { confirmed_fields: findCase('ADV-007').confirmed_fields });
  const b = extractSemanticIR(findCase('ADV-008').input, { confirmed_fields: findCase('ADV-008').confirmed_fields });
  assert.notStrictEqual(a.fields.current_window, b.fields.current_window);
  assert.notStrictEqual(a.fields.relation_source, b.fields.relation_source);
});

test('chosen path is not equal to complete path-set exhaustion', () => {
  const chosen = extractSemanticIR(findCase('ADV-009').input, { confirmed_fields: findCase('ADV-009').confirmed_fields });
  const complete = extractSemanticIR(findCase('ADV-010').input, { confirmed_fields: findCase('ADV-010').confirmed_fields });
  assert.strictEqual(chosen.fields.path_set.scope, 'chosen_path');
  assert.strictEqual(complete.fields.path_set.scope, 'complete_relevant_set');
  assert.notDeepStrictEqual(chosen.fields.path_set, complete.fields.path_set);
});

test('recoverable block is not equal to exhausted reentry', () => {
  const blocked = extractSemanticIR(findCase('ADV-011').input, { confirmed_fields: findCase('ADV-011').confirmed_fields });
  const exhausted = extractSemanticIR(findCase('ADV-012').input, { confirmed_fields: findCase('ADV-012').confirmed_fields });
  assert.strictEqual(blocked.fields.reentry_right, 'recoverable');
  assert.strictEqual(exhausted.fields.reentry_right, 'none');
});

test('state absence is not silently converted to opposite-state presence', () => {
  const absent = extractSemanticIR(findCase('ADV-013').input, { confirmed_fields: findCase('ADV-013').confirmed_fields });
  const opposite = extractSemanticIR(findCase('ADV-014').input, { confirmed_fields: findCase('ADV-014').confirmed_fields });
  assert.strictEqual(absent.fields.relation_shape, 'absent');
  assert.strictEqual(opposite.fields.relation_shape, 'explicit_prohibition');
  assert.notStrictEqual(absent.fields.relation_shape, opposite.fields.relation_shape);
});

test('x并z surface token and x + z surface text do not populate IR by themselves', () => {
  const atomic = extractSemanticIR(findCase('ADV-015').input, { confirmed_fields: {} });
  const split = extractSemanticIR(findCase('ADV-016').input, { confirmed_fields: {} });
  assert.deepStrictEqual(knownFields(atomic), []);
  assert.deepStrictEqual(knownFields(split), []);
});

let passed = 0;
const failures = [];
for (const item of tests) {
  try { item.fn(); passed += 1; }
  catch (error) { failures.push({ name: item.name, message: error.message }); }
}

const result = {
  suite: 'semantic_ir_adversarial_v0.1',
  fixture_cases: fixtures.cases.length,
  risk_classes: REQUIRED_RISK_CLASSES.length,
  tests: tests.length,
  passed,
  failed: failures.length,
  target: 'P0-6 versioned adversarial fixtures; no keyword guessing; preserve object-layer/window/path-set/reentry/opposite-state distinctions',
  failures
};
console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
