'use strict';
const assert = require('assert');
const { SEMANTIC_IR_SCHEMA_VERSION, SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');
const { decideCandidateSymbolValueSensitive } = require('./semantic_ir_value_predicate_v0.1.js');
const {
  GATE_REGISTRY_VERSION,
  GATE_STATUS,
  compileGateRegistry,
  assertCompilationReproducible
} = require('./semantic_ir_gate_registry_v0.1.js');

function makeIR(fields = {}, raw_input = '赛博医生悲伤地审批组织权限') {
  return {
    schema_version: SEMANTIC_IR_SCHEMA_VERSION,
    raw_input,
    fields: Object.fromEntries(SEMANTIC_FIELDS.map(field => [
      field,
      Object.prototype.hasOwnProperty.call(fields, field) ? fields[field] : null
    ]))
  };
}

function provenance(ref) {
  return { source_ref: ref, source_version: 'fixture-v1', review_note: 'structural regression fixture only; not mapping-driven' };
}

function makeRegistry(gates) {
  return {
    registry_version: GATE_REGISTRY_VERSION,
    registry_id: 'fixture-gates-v1',
    source_sha: 'fixture-sha-001',
    gates
  };
}

const tests = []; const t = (name, fn) => tests.push([name, fn]);

t('version stable', () => assert.strictEqual(GATE_REGISTRY_VERSION, 'ten-yuan-semantic-ir-gate-registry-v0.1'));
t('production gate compiles with provenance', () => {
  const c = compileGateRegistry(makeRegistry([{
    gate_id:'g-xn-org', symbol:'xn', status:GATE_STATUS.PRODUCTION,
    required_fields:['actor','object_layer'], field_equals:{object_layer:'organization-approval-layer'}, provenance:provenance('fixture/org')
  }]));
  assert.deepStrictEqual(c.selected_gate_ids,['g-xn-org']);
  assert.strictEqual(c.provenance[0].source_ref,'fixture/org');
});
t('pending-review excluded by default', () => {
  const c = compileGateRegistry(makeRegistry([{
    gate_id:'g-pending', symbol:'nx', status:GATE_STATUS.PENDING_REVIEW,
    required_fields:['actor'], provenance:provenance('fixture/pending')
  }]));
  assert.deepStrictEqual(c.candidate_gates,[]);
  assert.deepStrictEqual(c.pending_gate_ids,['g-pending']);
});
t('pending-review only enters with explicit opt-in', () => {
  const c = compileGateRegistry(makeRegistry([{
    gate_id:'g-pending', symbol:'nx', status:GATE_STATUS.PENDING_REVIEW,
    required_fields:['actor'], provenance:provenance('fixture/pending')
  }]), {allow_pending_review:true});
  assert.deepStrictEqual(c.selected_gate_ids,['g-pending']);
});
t('rejected never enters even with pending opt-in', () => {
  const c = compileGateRegistry(makeRegistry([{
    gate_id:'g-rejected', symbol:'nx', status:GATE_STATUS.REJECTED,
    required_fields:['actor'], provenance:provenance('fixture/rejected')
  }]), {allow_pending_review:true});
  assert.deepStrictEqual(c.candidate_gates,[]);
  assert.deepStrictEqual(c.rejected_gate_ids,['g-rejected']);
});
t('DATA_BLOCKED remains explicit when no usable gate exists', () => {
  const c = compileGateRegistry(makeRegistry([{
    gate_id:'g-blocked', symbol:'xz', status:GATE_STATUS.DATA_BLOCKED,
    required_fields:['actor','object_layer'], provenance:provenance('fixture/blocked')
  }]));
  assert.strictEqual(c.data_blocked,true);
  assert.deepStrictEqual(c.data_blocked_gate_ids,['g-blocked']);
});
t('canonical x并z remains atomic', () => {
  const c = compileGateRegistry(makeRegistry([{
    gate_id:'g-joint', symbol:'x并z', status:GATE_STATUS.PRODUCTION,
    required_fields:['actor','object_layer'], field_equals:{object_layer:'joint-constraint'}, provenance:provenance('fixture/joint')
  }]));
  const r = decideCandidateSymbolValueSensitive(makeIR({actor:'A',object_layer:'joint-constraint'}), c);
  assert.strictEqual(r.symbol,'x并z');
});
t('fake x+z symbol is rejected', () => assert.throws(() => compileGateRegistry(makeRegistry([{
  gate_id:'g-fake', symbol:'x+z', status:GATE_STATUS.PRODUCTION,
  required_fields:['actor'], provenance:provenance('fixture/fake')
}])), e => e.code === 'ERROR_IR_GATE_SYMBOL_UNKNOWN'));
t('non-IR predicate field is rejected', () => assert.throws(() => compileGateRegistry(makeRegistry([{
  gate_id:'g-emotion', symbol:'xn', status:GATE_STATUS.PRODUCTION,
  required_fields:['actor'], field_equals:{emotion:'sad'}, provenance:provenance('fixture/emotion')
}])), e => e.code === 'ERROR_IR_GATE_FIELD_UNKNOWN'));
t('unknown/null predicate expectation is rejected', () => assert.throws(() => compileGateRegistry(makeRegistry([{
  gate_id:'g-null', symbol:'xn', status:GATE_STATUS.PRODUCTION,
  required_fields:['actor'], field_equals:{object_layer:null}, provenance:provenance('fixture/null')
}])), e => e.code === 'ERROR_IR_GATE_EXPECTATION_UNKNOWN'));
t('missing provenance is hard failure', () => assert.throws(() => compileGateRegistry(makeRegistry([{
  gate_id:'g-no-prov', symbol:'xn', status:GATE_STATUS.PRODUCTION, required_fields:['actor']
}])), e => e.code === 'ERROR_IR_GATE_PROVENANCE_REQUIRED'));
t('duplicate gate_id is hard failure', () => assert.throws(() => compileGateRegistry(makeRegistry([
  {gate_id:'dup',symbol:'xn',status:GATE_STATUS.PRODUCTION,required_fields:['actor'],provenance:provenance('a')},
  {gate_id:'dup',symbol:'nx',status:GATE_STATUS.PRODUCTION,required_fields:['actor'],provenance:provenance('b')}
])), e => e.code === 'ERROR_IR_GATE_ID_DUPLICATE'));
t('surface words cannot override confirmed IR through compiled registry', () => {
  const c = compileGateRegistry(makeRegistry([
    {gate_id:'g-personal',symbol:'nx',status:GATE_STATUS.PRODUCTION,required_fields:['actor','object_layer'],field_equals:{object_layer:'personal-consent-layer'},provenance:provenance('p')},
    {gate_id:'g-org',symbol:'xn',status:GATE_STATUS.PRODUCTION,required_fields:['actor','object_layer'],field_equals:{object_layer:'organization-approval-layer'},provenance:provenance('o')}
  ]));
  const a = decideCandidateSymbolValueSensitive(makeIR({actor:'A',object_layer:'organization-approval-layer'},'个人、悲伤、医生、赛博'), c);
  assert.strictEqual(a.status,DECISION_STATUS.SYMBOL);
  assert.strictEqual(a.symbol,'xn');
});
t('same registry/options compilation is reproducible', () => {
  const r = makeRegistry([{gate_id:'g1',symbol:'n',status:GATE_STATUS.PRODUCTION,required_fields:['actor'],provenance:provenance('r1')}]);
  const a = compileGateRegistry(r); const b = compileGateRegistry(r);
  assert.strictEqual(assertCompilationReproducible(a,b),true);
});

let passed = 0;
for (const [name, fn] of tests) {
  try { fn(); passed++; console.log(`PASS ${name}`); }
  catch (error) { console.error(`FAIL ${name}`, error); process.exitCode = 1; }
}
console.log(JSON.stringify({
  suite:'semantic_ir_gate_registry_v0.1',
  static_tests:tests.length,
  actual_runtime_passed:passed,
  actual_runtime_failed:tests.length-passed,
  target:'P0 gate provenance/status registry sidecar; no canonical or mapping-driven predicates added'
}, null, 2));
