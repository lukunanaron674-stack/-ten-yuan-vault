'use strict';
const assert = require('assert');
const { createSemanticIR } = require('./semantic_ir_schema_v0.1.js');
const { REINTERPRETATION_VERSION, REINTERPRETATION_STATUS, SemanticIRReinterpretationError, reinterpretCandidateIR, createReinterpretationValidationHook } = require('./semantic_ir_reinterpretation_v0.1.js');
let passed = 0;
function test(name, fn){ try { fn(); passed++; } catch (err) { console.error(`FAIL ${name}`, err); process.exitCode = 1; } }
function candidate(){ const ir=createSemanticIR('旧输入：个人同意层'); ir.fields.actor='甲'; ir.fields.object='批准'; ir.fields.object_layer='组织审批层'; ir.fields.current_window='current'; ir.fields.changed_variable='decision_right'; ir.fields.relation_source='explicit_actor_action'; ir.fields.relation_shape='approval'; return ir; }
function confirmed(layer='组织审批层'){ return {actor:'甲',object:'批准',object_layer:layer,current_window:'current',changed_variable:'decision_right',relation_source:'explicit_actor_action',relation_shape:'approval'}; }
function opts(extra={}){ return { frozen_fields:['actor','object','current_window','changed_variable','relation_source','relation_shape'], mutated_fields:['object_layer'], confirmed_fields:confirmed(), ...extra }; }
function expectCode(fn, code){ assert.throws(fn, e => e instanceof SemanticIRReinterpretationError && e.code === code); }
test('stable reinterpretation version',()=>assert.equal(REINTERPRETATION_VERSION,'ten-yuan-semantic-ir-reinterpretation-v0.1'));
test('matching re-extraction passes',()=>{const r=reinterpretCandidateIR(candidate(),'生成候选：组织审批层',opts());assert.equal(r.status,REINTERPRETATION_STATUS.PASS);assert.equal(r.pass,true);assert.equal(r.reinterpreted_ir.raw_input,'生成候选：组织审批层');});
test('candidate fields are not silently inherited',()=>{const r=reinterpretCandidateIR(candidate(),'只有题材皮肤，没有结构确认',{frozen_fields:['actor'],mutated_fields:['object_layer']});assert.equal(r.status,REINTERPRETATION_STATUS.NEEDS_MORE_STRUCTURE);assert.deepEqual(r.missing_fields.sort(),['actor','object_layer'].sort());});
test('mutated field mismatch fails',()=>{const r=reinterpretCandidateIR(candidate(),'生成候选：仍是个人层',opts({confirmed_fields:confirmed('个人同意层')}));assert.equal(r.status,REINTERPRETATION_STATUS.MISMATCH);assert.deepEqual(r.mismatched_fields,['object_layer']);});
test('frozen field drift fails',()=>{const c=confirmed();c.actor='乙';const r=reinterpretCandidateIR(candidate(),'生成候选：主体漂移',opts({confirmed_fields:c}));assert.equal(r.status,REINTERPRETATION_STATUS.MISMATCH);assert.deepEqual(r.mismatched_fields,['actor']);});
test('surface keywords alone stay unknown',()=>{const r=reinterpretCandidateIR(candidate(),'宿命的医生在赛博都市悲伤地审批',{frozen_fields:[],mutated_fields:['object_layer']});assert.equal(r.status,REINTERPRETATION_STATUS.NEEDS_MORE_STRUCTURE);assert.equal(r.reinterpreted_ir.fields.object_layer,null);});
test('DATA_BLOCKED remains explicit',()=>{const r=reinterpretCandidateIR(candidate(),'任意输入',opts({data_blocked:true,block_reason:'XN_RUNTIME_BLOCKED'}));assert.equal(r.status,REINTERPRETATION_STATUS.DATA_BLOCKED);assert.equal(r.reason,'XN_RUNTIME_BLOCKED');assert.equal(r.reinterpreted_ir,null);});
test('validation hook exposes pass contract',()=>{const hook=createReinterpretationValidationHook('生成候选：组织审批层',opts());const r=hook(candidate());assert.equal(r.pass,true);assert.equal(r.status,REINTERPRETATION_STATUS.PASS);});
test('unknown IR field hard fails',()=>expectCode(()=>reinterpretCandidateIR(candidate(),'输入',{frozen_fields:['emotion'],mutated_fields:['object_layer']}),'ERROR_IR_REINTERPRET_FIELD_UNKNOWN'));
test('mutated_fields required',()=>expectCode(()=>reinterpretCandidateIR(candidate(),'输入',{frozen_fields:[],mutated_fields:[]}),'ERROR_IR_REINTERPRET_FIELD_LIST_EMPTY'));
test('frozen and mutated overlap hard fails',()=>expectCode(()=>reinterpretCandidateIR(candidate(),'输入',{frozen_fields:['object_layer'],mutated_fields:['object_layer']}),'ERROR_IR_REINTERPRET_FIELD_OVERLAP'));
test('invalid options hard fails',()=>expectCode(()=>reinterpretCandidateIR(candidate(),'输入',[]),'ERROR_IR_REINTERPRET_OPTIONS_TYPE'));
test('symbol cannot be smuggled through confirmed_fields',()=>assert.throws(()=>reinterpretCandidateIR(candidate(),'输入',{frozen_fields:[],mutated_fields:['object_layer'],confirmed_fields:{object_layer:'组织审批层',symbol:'xz'}}),e=>e.code==='ERROR_IR_CONFIRMED_FIELD_UNKNOWN'));
const total=13;if(!process.exitCode)console.log(JSON.stringify({suite:'semantic_ir_reinterpretation_v0.1',tests:total,passed,failed:total-passed,target:'mutation candidate must be re-extracted from generated input; no candidate-field inheritance; frozen/mutated structure must match'},null,2));
