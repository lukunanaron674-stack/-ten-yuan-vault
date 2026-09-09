'use strict';
const assert = require('assert');
const { SEMANTIC_IR_SCHEMA_VERSION, SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');
const { VALUE_PREDICATE_VERSION, decideCandidateSymbolValueSensitive } = require('./semantic_ir_value_predicate_v0.1.js');

function makeIR(fields={}) {
  return {
    schema_version: SEMANTIC_IR_SCHEMA_VERSION,
    raw_input: '赛博医生悲伤地审批组织权限',
    fields: Object.fromEntries(SEMANTIC_FIELDS.map(field => [
      field,
      Object.prototype.hasOwnProperty.call(fields, field) ? fields[field] : null
    ]))
  };
}

const tests=[]; const t=(name,fn)=>tests.push([name,fn]);

t('version stable',()=>assert.strictEqual(VALUE_PREDICATE_VERSION,'ten-yuan-semantic-ir-value-predicate-v0.1'));
t('same field presence can resolve by object_layer value',()=>{
  const r=decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',object_layer:'organization-approval-layer',changed_variable:'decision_right'}),
    {candidate_gates:[
      {symbol:'nx',required_fields:['actor','object_layer','changed_variable'],field_equals:{object_layer:'personal-consent-layer'}},
      {symbol:'xn',required_fields:['actor','object_layer','changed_variable'],field_equals:{object_layer:'organization-approval-layer'}}
    ]}
  );
  assert.strictEqual(r.status,DECISION_STATUS.SYMBOL);
  assert.strictEqual(r.symbol,'xn');
});
t('unknown predicate field stays NEEDS_MORE_STRUCTURE',()=>{
  const r=decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',changed_variable:'decision_right'}),
    {candidate_gates:[{symbol:'xn',required_fields:['actor','changed_variable'],field_equals:{object_layer:'organization-approval-layer'}}]}
  );
  assert.strictEqual(r.status,DECISION_STATUS.NEEDS_MORE_STRUCTURE);
  assert.deepStrictEqual(r.missing_fields,['object_layer']);
});
t('known mismatch does not become symbol',()=>{
  const r=decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',object_layer:'personal-consent-layer'}),
    {candidate_gates:[{symbol:'xn',required_fields:['actor','object_layer'],field_equals:{object_layer:'organization-approval-layer'}}]}
  );
  assert.strictEqual(r.status,DECISION_STATUS.NEEDS_MORE_STRUCTURE);
  assert.strictEqual(r.reason,'KNOWN_STRUCTURE_MATCHES_NO_VALUE_PREDICATE');
});
t('surface words do not override structural value',()=>{
  const a=makeIR({actor:'A',object_layer:'personal-consent-layer'});
  const b={...a,raw_input:'组织审批官在赛博都市悲伤地控制权限'};
  const opts={candidate_gates:[{symbol:'xn',required_fields:['actor','object_layer'],field_equals:{object_layer:'organization-approval-layer'}}]};
  assert.deepStrictEqual(decideCandidateSymbolValueSensitive(a,opts),decideCandidateSymbolValueSensitive(b,opts));
});
t('same changed_variable can separate by relation_source value',()=>{
  const r=decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',changed_variable:'decision_right',relation_source:'institutional_delegation'}),
    {candidate_gates:[
      {symbol:'x',required_fields:['actor','changed_variable','relation_source'],field_equals:{relation_source:'ownership'}},
      {symbol:'nx',required_fields:['actor','changed_variable','relation_source'],field_equals:{relation_source:'institutional_delegation'}}
    ]}
  );
  assert.strictEqual(r.symbol,'nx');
});
t('predicate can compare structured path_set without weights',()=>{
  const r=decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',path_set:['allocate','freeze']}),
    {candidate_gates:[
      {symbol:'x',required_fields:['actor','path_set'],field_equals:{path_set:['allocate','freeze']}}
    ]}
  );
  assert.strictEqual(r.symbol,'x');
});
t('predicate non-IR field hard fails',()=>assert.throws(
  ()=>decideCandidateSymbolValueSensitive(makeIR({actor:'A'}),{candidate_gates:[
    {symbol:'nx',required_fields:['actor'],field_equals:{emotion:'sad'}}
  ]}),
  e=>e.code==='ERROR_IR_DECISION_FIELD_UNKNOWN'
));
t('predicate cannot use null as positive evidence',()=>assert.throws(
  ()=>decideCandidateSymbolValueSensitive(makeIR({actor:'A'}),{candidate_gates:[
    {symbol:'nx',required_fields:['actor'],field_equals:{object_layer:null}}
  ]}),
  e=>e.code==='ERROR_IR_DECISION_PREDICATE_EXPECTATION_UNKNOWN'
));
t('x并z remains atomic with value predicate',()=>{
  const r=decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',object_layer:'joint-constraint'}),
    {candidate_gates:[{symbol:'x并z',required_fields:['actor','object_layer'],field_equals:{object_layer:'joint-constraint'}}]}
  );
  assert.strictEqual(r.symbol,'x并z');
  assert.deepStrictEqual(r.candidates,['x并z']);
});
t('fake explicit multi x+z still rejected by base decision',()=>assert.throws(
  ()=>decideCandidateSymbolValueSensitive(
    makeIR({actor:'A',object_layer:'joint-constraint'}),
    {candidate_gates:[{symbol:'x+z',required_fields:['actor','object_layer'],field_equals:{object_layer:'joint-constraint'}}]}
  ),
  e=>e.code==='ERROR_IR_DECISION_SYMBOL_UNKNOWN'
));
t('data blocked wins without predicate guessing',()=>{
  const r=decideCandidateSymbolValueSensitive(makeIR({actor:'A'}),{
    data_blocked:true,
    candidate_gates:[{symbol:'nx',required_fields:['actor'],field_equals:{object_layer:'L'}}]
  });
  assert.strictEqual(r.status,DECISION_STATUS.DATA_BLOCKED);
});
t('legacy gate behavior remains available when no field_equals supplied',()=>{
  const r=decideCandidateSymbolValueSensitive(makeIR({actor:'A',changed_variable:'v'}),{
    candidate_gates:[{symbol:'nx',required_fields:['actor','changed_variable']}]
  });
  assert.strictEqual(r.symbol,'nx');
});

let passed=0;
for(const [name,fn] of tests){
  try{fn();passed++;console.log(`PASS ${name}`);}
  catch(error){console.error(`FAIL ${name}`,error);process.exitCode=1;}
}
console.log(JSON.stringify({
  suite:'semantic_ir_value_predicate_v0.1',
  static_tests:tests.length,
  actual_runtime_passed:passed,
  actual_runtime_failed:tests.length-passed,
  target:'P0 additive value-sensitive structural gate sidecar; mapping and surface wording cannot drive symbol'
},null,2));
