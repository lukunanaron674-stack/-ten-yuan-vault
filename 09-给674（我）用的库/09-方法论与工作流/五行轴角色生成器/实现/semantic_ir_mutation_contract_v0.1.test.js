'use strict';
const assert = require('assert');
const { createSemanticIR } = require('./semantic_ir_schema_v0.1.js');
const { MUTATION_CONTRACT_VERSION, MUTATION_STATUS, SemanticIRMutationContractError, validateMutationSpec, validateMutationCandidate } = require('./semantic_ir_mutation_contract_v0.1.js');

let passed = 0;
function test(name, fn) { try { fn(); passed += 1; } catch (err) { console.error(`FAIL ${name}`, err); process.exitCode = 1; } }
function expectCode(fn, code) { assert.throws(fn, err => err instanceof SemanticIRMutationContractError && err.code === code); }
function baseIR(){ const ir=createSemanticIR('原始结构'); ir.fields.actor='甲'; ir.fields.object_layer='个人同意层'; ir.fields.current_window='current'; ir.fields.changed_variable='decision_right'; return ir; }
function clone(v){ return JSON.parse(JSON.stringify(v)); }

test('stable contract version', () => assert.equal(MUTATION_CONTRACT_VERSION, 'ten-yuan-semantic-ir-mutation-contract-v0.1'));
test('valid spec accepts semantic fields', () => assert.deepEqual(validateMutationSpec({ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>true }).mutated_fields, ['object_layer']));
test('mutated_fields cannot be empty', () => expectCode(() => validateMutationSpec({ frozen_fields:[], mutated_fields:[], validation_hook:()=>true }), 'ERROR_IR_MUTATION_MUTATED_FIELDS_EMPTY'));
test('unknown field rejected', () => expectCode(() => validateMutationSpec({ frozen_fields:[], mutated_fields:['emotion'], validation_hook:()=>true }), 'ERROR_IR_MUTATION_MUTATED_FIELDS_UNKNOWN'));
test('overlap rejected', () => expectCode(() => validateMutationSpec({ frozen_fields:['actor'], mutated_fields:['actor'], validation_hook:()=>true }), 'ERROR_IR_MUTATION_FIELD_OVERLAP'));
test('validation hook required', () => expectCode(() => validateMutationSpec({ frozen_fields:[], mutated_fields:['object_layer'], validation_hook:'later' }), 'ERROR_IR_MUTATION_VALIDATION_HOOK'));
test('structural mutation becomes READY after validation', () => { const src=baseIR(); const cand=clone(src); cand.fields.object_layer='组织审批层'; const r=validateMutationCandidate(src,cand,{ frozen_fields:['actor','current_window'], mutated_fields:['object_layer'], validation_hook:()=>({pass:true, stage:'reinterpret'}) }); assert.equal(r.status,MUTATION_STATUS.READY); assert.deepEqual(r.changed_fields,['object_layer']); });
test('no actual structural change rejected', () => { const src=baseIR(); const r=validateMutationCandidate(src,clone(src),{ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>true }); assert.equal(r.status,MUTATION_STATUS.REJECTED_NO_STRUCTURAL_CHANGE); });
test('frozen drift hard fails', () => { const src=baseIR(); const cand=clone(src); cand.fields.actor='乙'; cand.fields.object_layer='组织审批层'; expectCode(() => validateMutationCandidate(src,cand,{ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>true }), 'ERROR_IR_MUTATION_FROZEN_DRIFT'); });
test('unauthorized drift hard fails', () => { const src=baseIR(); const cand=clone(src); cand.fields.object_layer='组织审批层'; cand.fields.current_window='later'; expectCode(() => validateMutationCandidate(src,cand,{ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>true }), 'ERROR_IR_MUTATION_UNAUTHORIZED_DRIFT'); });
test('failed reinterpretation blocks candidate', () => { const src=baseIR(); const cand=clone(src); cand.fields.object_layer='组织审批层'; const r=validateMutationCandidate(src,cand,{ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>({pass:false, reason:'AMBIGUOUS'}) }); assert.equal(r.status,MUTATION_STATUS.VALIDATION_FAILED); });
test('unknown may be mutated into known structural evidence', () => { const src=baseIR(); src.fields.reentry_right=null; const cand=clone(src); cand.fields.reentry_right='none'; const r=validateMutationCandidate(src,cand,{ frozen_fields:['actor'], mutated_fields:['reentry_right'], validation_hook:()=>true }); assert.equal(r.status,MUTATION_STATUS.READY); });
test('known may be mutated to explicit unknown only if declared', () => { const src=baseIR(); const cand=clone(src); cand.fields.object_layer=null; const r=validateMutationCandidate(src,cand,{ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>true }); assert.equal(r.status,MUTATION_STATUS.READY); });
test('source IR remains unchanged', () => { const src=baseIR(); const before=clone(src); const cand=clone(src); cand.fields.object_layer='组织审批层'; validateMutationCandidate(src,cand,{ frozen_fields:['actor'], mutated_fields:['object_layer'], validation_hook:()=>true }); assert.deepEqual(src,before); });

const total = 14;
if (!process.exitCode) console.log(JSON.stringify({ suite:'semantic_ir_mutation_contract_v0.1', tests:total, passed, failed:total-passed, target:'P0-7 frozen_fields/mutated_fields/validation_hook runtime contract' }, null, 2));
