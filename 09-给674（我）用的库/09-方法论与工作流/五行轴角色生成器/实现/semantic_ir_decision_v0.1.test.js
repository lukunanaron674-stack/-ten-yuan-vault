'use strict';
const assert = require('assert');
const { SEMANTIC_IR_SCHEMA_VERSION, SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { DECISION_STATUS, CANONICAL_SYMBOLS, decideCandidateSymbol } = require('./semantic_ir_decision_v0.1.js');
function makeIR(fields={}){ return {schema_version:SEMANTIC_IR_SCHEMA_VERSION,raw_input:'宿命中的国王回去求人',fields:Object.fromEntries(SEMANTIC_FIELDS.map(f=>[f,Object.prototype.hasOwnProperty.call(fields,f)?fields[f]:null]))}; }
const tests=[]; const t=(name,fn)=>tests.push([name,fn]);
t('canonical tokens come from registry shape',()=>assert.deepStrictEqual(CANONICAL_SYMBOLS,['x并z','zx','zn','nz','nx','xn','xz','x','z','n']));
t('keywords alone never produce symbol',()=>assert.strictEqual(decideCandidateSymbol(makeIR()).status,DECISION_STATUS.NEEDS_MORE_STRUCTURE));
t('explicit data blocked wins before gates',()=>assert.strictEqual(decideCandidateSymbol(makeIR({actor:'A'}),{data_blocked:true,candidate_gates:[{symbol:'nx',required_fields:['actor']}]}).status,DECISION_STATUS.DATA_BLOCKED));
t('one satisfied structural gate returns symbol',()=>{const r=decideCandidateSymbol(makeIR({actor:'A',changed_variable:'v'}),{candidate_gates:[{symbol:'nx',required_fields:['actor','changed_variable']}]});assert.strictEqual(r.status,'symbol');assert.strictEqual(r.symbol,'nx');});
t('missing one required field returns needs more structure',()=>assert.strictEqual(decideCandidateSymbol(makeIR({actor:'A'}),{candidate_gates:[{symbol:'nx',required_fields:['actor','changed_variable']}]}).status,DECISION_STATUS.NEEDS_MORE_STRUCTURE));
t('two satisfied structural gates return ambiguous',()=>assert.strictEqual(decideCandidateSymbol(makeIR({actor:'A',changed_variable:'v'}),{candidate_gates:[{symbol:'nx',required_fields:['actor']},{symbol:'zx',required_fields:['changed_variable']}]}).status,DECISION_STATUS.AMBIGUOUS));
t('x并z remains atomic candidate token',()=>{const r=decideCandidateSymbol(makeIR({object_layer:'L'}),{candidate_gates:[{symbol:'x并z',required_fields:['object_layer']}]});assert.strictEqual(r.symbol,'x并z');assert.deepStrictEqual(r.candidates,['x并z']);});
t('explicit multi is not invented by decision interface',()=>assert.throws(()=>decideCandidateSymbol(makeIR({actor:'A'}),{candidate_gates:[{symbol:'x+z',required_fields:['actor']}]}),e=>e.code==='ERROR_IR_DECISION_SYMBOL_UNKNOWN'));
t('unknown structural field in gate hard fails',()=>assert.throws(()=>decideCandidateSymbol(makeIR(),{candidate_gates:[{symbol:'nx',required_fields:['emotion']}]}),e=>e.code==='ERROR_IR_DECISION_FIELD_UNKNOWN'));
t('gate without structural requirements hard fails',()=>assert.throws(()=>decideCandidateSymbol(makeIR(),{candidate_gates:[{symbol:'nx',required_fields:[]}]}),e=>e.code==='ERROR_IR_DECISION_REQUIRED_FIELDS'));
t('non-array gates hard fail',()=>assert.throws(()=>decideCandidateSymbol(makeIR(),{candidate_gates:{}}),e=>e.code==='ERROR_IR_DECISION_GATES_TYPE'));
t('surface wording does not affect structural result',()=>{const a=makeIR({actor:'A',changed_variable:'v'});const b={...a,raw_input:'赛博朋克悲伤医生的宿命死亡'};const opts={candidate_gates:[{symbol:'nx',required_fields:['actor','changed_variable']}]};assert.deepStrictEqual(decideCandidateSymbol(a,opts),decideCandidateSymbol(b,opts));});
let passed=0; for(const [name,fn] of tests){ try{fn();passed++;}catch(e){console.error('FAIL',name,e);process.exitCode=1;} }
console.log(JSON.stringify({suite:'semantic_ir_decision_v0.1',tests:tests.length,passed,failed:tests.length-passed,target:'P0-4 IR -> candidate symbol decision interface; structural gates only; explicit rejection states'},null,2));
