'use strict';
const assert=require('assert');
const {createSemanticIR}=require('./semantic_ir_schema_v0.1.js');
const {SHIFT_OBJECT_LAYER_VERSION,SHIFT_OBJECT_LAYER_STATUS,ShiftObjectLayerError,shiftObjectLayer}=require('./semantic_ir_shift_object_layer_v0.1.js');
let passed=0;
function test(name,fn){try{fn();passed++;}catch(err){console.error(`FAIL ${name}`,err);process.exitCode=1;}}
function base(){const ir=createSemanticIR('同一个拒绝，从个人同意层改看组织审批层'); ir.fields.actor='甲'; ir.fields.object='批准'; ir.fields.object_layer='个人同意层'; ir.fields.current_window='current'; ir.fields.changed_variable='decision_right'; ir.fields.relation_source='explicit_actor_action'; ir.fields.relation_shape='approval'; return ir;}
function expectCode(fn,code){assert.throws(fn,e=>e instanceof ShiftObjectLayerError&&e.code===code);}
test('stable operator version',()=>assert.equal(SHIFT_OBJECT_LAYER_VERSION,'ten-yuan-z-shift-object-layer-v0.1'));
test('true layer shift is READY',()=>{const r=shiftObjectLayer(base(),{target_object_layer:'组织审批层'});assert.equal(r.status,SHIFT_OBJECT_LAYER_STATUS.READY);assert.equal(r.candidate_ir.fields.object_layer,'组织审批层');assert.deepEqual(r.contract.changed_fields,['object_layer']);});
test('actor is frozen',()=>{const src=base();const r=shiftObjectLayer(src,{target_object_layer:'组织审批层'});assert.equal(r.candidate_ir.fields.actor,src.fields.actor);});
test('current_window is frozen',()=>{const src=base();const r=shiftObjectLayer(src,{target_object_layer:'组织审批层'});assert.equal(r.candidate_ir.fields.current_window,src.fields.current_window);});
test('changed_variable is frozen',()=>{const src=base();const r=shiftObjectLayer(src,{target_object_layer:'组织审批层'});assert.equal(r.candidate_ir.fields.changed_variable,src.fields.changed_variable);});
test('reskin explicitly rejected',()=>assert.equal(shiftObjectLayer(base(),{mode:'reskin'}).status,SHIFT_OBJECT_LAYER_STATUS.REJECTED_RESKIN));
test('retrieval-only explicitly rejected',()=>assert.equal(shiftObjectLayer(base(),{mode:'retrieval_only'}).status,SHIFT_OBJECT_LAYER_STATUS.REJECTED_RETRIEVAL_ONLY));
test('unknown source layer needs more structure',()=>{const src=base();src.fields.object_layer=null;assert.equal(shiftObjectLayer(src,{target_object_layer:'组织审批层'}).status,SHIFT_OBJECT_LAYER_STATUS.NEEDS_MORE_STRUCTURE);});
test('missing target layer needs more structure',()=>assert.equal(shiftObjectLayer(base(),{}).status,SHIFT_OBJECT_LAYER_STATUS.NEEDS_MORE_STRUCTURE));
test('same layer is not accepted as structural success',()=>assert.equal(shiftObjectLayer(base(),{target_object_layer:'个人同意层'}).status,SHIFT_OBJECT_LAYER_STATUS.NEEDS_MORE_STRUCTURE));
test('failed reinterpretation validation blocks candidate',()=>assert.equal(shiftObjectLayer(base(),{target_object_layer:'组织审批层',validation_hook:()=>({pass:false,reason:'AMBIGUOUS'})}).status,SHIFT_OBJECT_LAYER_STATUS.VALIDATION_FAILED));
test('source IR remains unchanged',()=>{const src=base();const before=JSON.stringify(src);shiftObjectLayer(src,{target_object_layer:'组织审批层'});assert.equal(JSON.stringify(src),before);});
test('invalid mode hard fails',()=>expectCode(()=>shiftObjectLayer(base(),{mode:'paint_it_blue'}),'ERROR_SHIFT_OBJECT_LAYER_MODE'));
test('invalid options hard fails',()=>expectCode(()=>shiftObjectLayer(base(),[]),'ERROR_SHIFT_OBJECT_LAYER_OPTIONS_TYPE'));
const total=14;if(!process.exitCode)console.log(JSON.stringify({suite:'semantic_ir_shift_object_layer_v0.1',tests:total,passed,failed:total-passed,target:'first executable Z operator: SHIFT_OBJECT_LAYER with frozen fields, structural change, reskin/retrieval rejection, reinterpretation gate'},null,2));