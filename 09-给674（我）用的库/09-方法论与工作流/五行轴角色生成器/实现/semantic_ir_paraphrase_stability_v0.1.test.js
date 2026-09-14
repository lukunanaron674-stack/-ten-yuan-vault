'use strict';
const assert=require('assert');
const {evaluateParaphraseStability}=require('./semantic_ir_paraphrase_stability_v0.1.js');
const F='semantic-ir-paraphrase-stability-fixture-v0.1';
const samples=[];
function S(id,group,raw,expected,evidence,unknown=[]){samples.push({id,kind:'paraphrase',group_id:group,raw_input:raw,expected_fields:expected,evidence_text:evidence,must_remain_unknown:unknown});}
function P(id,pair,raw,expected,evidence){samples.push({id,kind:'minimal_pair',pair_id:pair,raw_input:raw,expected_fields:expected,evidence_text:evidence,must_remain_unknown:[]});}
S('G1-A','G1','林澈借导师已有审批权限取得准入，自己不能改审批规则。',{object_layer:'access-layer',relation_source:'external-existing-approval'},{object_layer:'取得准入',relation_source:'导师已有审批权限'});
S('G1-B','G1','林澈通过导师原本的批准通道获得资格，规则仍不是他来改。',{object_layer:'access-layer',relation_source:'external-existing-approval'},{object_layer:'获得资格',relation_source:'导师原本的批准通道'});
S('G1-C','G1','林澈靠导师现成审批接口拿到进入资格，而非自行重写规则。',{object_layer:'access-layer',relation_source:'external-existing-approval'},{object_layer:'进入资格',relation_source:'导师现成审批接口'});
S('G2-A','G2','周宁退出的是本周任务，但仍是组织成员。',{object_layer:'task-participation-layer'},{object_layer:'本周任务'});
S('G2-B','G2','周宁只是离开这次任务，成员身份仍保留。',{object_layer:'task-participation-layer'},{object_layer:'这次任务'});
S('G2-C','G2','周宁结束当前任务参与，不等于离开组织。',{object_layer:'task-participation-layer'},{object_layer:'当前任务参与'});
S('G3-A','G3','今天这个阶段仍可返回；更远未来没有证据。',{current_window:'present-stage',reentry_right:'available-now'},{current_window:'今天这个阶段',reentry_right:'仍可返回'},['future_endpoint']);
S('G3-B','G3','就当前阶段而言返回通道还能用；之后未知。',{current_window:'present-stage',reentry_right:'available-now'},{current_window:'当前阶段',reentry_right:'返回通道还能用'},['future_endpoint']);
S('G3-C','G3','此刻可以回去，但后续是否开放无法确认。',{current_window:'present-stage',reentry_right:'available-now'},{current_window:'此刻',reentry_right:'可以回去'},['future_endpoint']);
S('G4-A','G4','正门被封，但侧门和地下通道仍能实际通行。',{path_set:['side','underground'],reentry_right:'recoverable'},{path_set:'侧门和地下通道',reentry_right:'仍能实际通行'});
S('G4-B','G4','主入口走不通，不过侧门、地下通道仍可用。',{path_set:['side','underground'],reentry_right:'recoverable'},{path_set:'侧门、地下通道',reentry_right:'仍可用'});
S('G4-C','G4','当前路线失效，完整可用集合里还有侧门与地下通道。',{path_set:['side','underground'],reentry_right:'recoverable'},{path_set:'侧门与地下通道',reentry_right:'还有侧门与地下通道'});
S('G5-A','G5','正门、侧门和地下通道都永久关闭，没有替代入口。',{path_set:[],reentry_right:'exhausted'},{path_set:'正门、侧门和地下通道都永久关闭',reentry_right:'没有替代入口'});
S('G5-B','G5','所有已知返回路径都失效，现实中不存在替代通道。',{path_set:[],reentry_right:'exhausted'},{path_set:'所有已知返回路径都失效',reentry_right:'不存在替代通道'});
S('G5-C','G5','完整返回路径集合已经耗尽，不再有可调用替代入口。',{path_set:[],reentry_right:'exhausted'},{path_set:'返回路径集合已经耗尽',reentry_right:'不再有可调用替代入口'});
S('G6-A','G6','审批范围变大，来源是上级正式授权。',{changed_variable:'decision-right-radius',relation_source:'formal-delegation'},{changed_variable:'审批范围变大',relation_source:'上级正式授权'});
S('G6-B','G6','能批准的范围扩大了，因为上级下放权限。',{changed_variable:'decision-right-radius',relation_source:'formal-delegation'},{changed_variable:'范围扩大了',relation_source:'上级下放权限'});
S('G6-C','G6','审批半径扩大，依据是正式授权文件。',{changed_variable:'decision-right-radius',relation_source:'formal-delegation'},{changed_variable:'审批半径扩大',relation_source:'正式授权文件'});
P('P1-L','P1','顾澄面对的是自己是否参加计划。',{object_layer:'personal-consent-layer'},{object_layer:'自己是否参加'});
P('P1-R','P1','顾澄面对的是组织是否批准他参加计划。',{object_layer:'organization-approval-layer'},{object_layer:'组织是否批准'});
P('P2-L','P2','许可范围扩大，来源是上级正式授权。',{changed_variable:'decision-right-radius',relation_source:'formal-delegation'},{changed_variable:'许可范围扩大',relation_source:'上级正式授权'});
P('P2-R','P2','许可范围扩大，来源是她自行越过原权限边界。',{changed_variable:'decision-right-radius',relation_source:'self-generated-override'},{changed_variable:'许可范围扩大',relation_source:'自行越过原权限边界'});
P('P3-L','P3','只看今天这一小时，通道不可用。',{current_window:'one-hour-window',changed_variable:'availability'},{current_window:'今天这一小时',changed_variable:'不可用'});
P('P3-R','P3','只看整个生命周期阶段，通道不可用。',{current_window:'lifecycle-stage-window',changed_variable:'availability'},{current_window:'整个生命周期阶段',changed_variable:'不可用'});
const fixture={fixture_version:F,sample_count:samples.length,samples,invariant_groups:[
{group_id:'G1',sample_ids:['G1-A','G1-B','G1-C'],invariant_fields:['object_layer','relation_source']},
{group_id:'G2',sample_ids:['G2-A','G2-B','G2-C'],invariant_fields:['object_layer']},
{group_id:'G3',sample_ids:['G3-A','G3-B','G3-C'],invariant_fields:['current_window','reentry_right']},
{group_id:'G4',sample_ids:['G4-A','G4-B','G4-C'],invariant_fields:['path_set','reentry_right']},
{group_id:'G5',sample_ids:['G5-A','G5-B','G5-C'],invariant_fields:['path_set','reentry_right']},
{group_id:'G6',sample_ids:['G6-A','G6-B','G6-C'],invariant_fields:['changed_variable','relation_source']}],minimal_pairs:[
{pair_id:'P1',left:'P1-L',right:'P1-R',compare_fields:['object_layer'],expected_delta_fields:['object_layer']},
{pair_id:'P2',left:'P2-L',right:'P2-R',compare_fields:['changed_variable','relation_source'],expected_delta_fields:['relation_source']},
{pair_id:'P3',left:'P3-L',right:'P3-R',compare_fields:['current_window','changed_variable'],expected_delta_fields:['current_window']}]};
function span(raw,text){const start=raw.indexOf(text);if(start<0)throw new Error('fixture evidence missing: '+text);return{text,start,end:start+text.length};}
function provider(mutator=null){const byRaw=new Map(samples.map(x=>[x.raw_input,x]));return async({raw_input})=>{const x=byRaw.get(raw_input);if(!x)return{observations:[]};let obs=Object.entries(x.expected_fields).map(([field,value])=>({field,value,confidence:.99,evidence_span:span(raw_input,x.evidence_text[field])}));return{observations:mutator?mutator(x,obs,raw_input):obs};};}
async function run(p,id){return evaluateParaphraseStability(fixture,{provider_id:id,provider_version:'v0.1',provider:p});}
(async()=>{
const base=await run(provider(),'fixture-contract-provider');assert.equal(base.status,'PASS');assert.equal(base.samples,24);
const drift=await run(provider((x,o)=>x.id==='G1-C'?o.map(v=>v.field==='object_layer'?{...v,value:'wrong-layer'}:v):o),'bad-drift');assert.equal(drift.status,'FAIL');assert.ok(drift.metrics.paraphrase_field_drift_rate>0);
const over=await run(provider((x,o)=>x.id==='P2-R'?o.map(v=>v.field==='changed_variable'?{...v,value:'wrong-variable'}:v):o),'bad-overmutation');assert.equal(over.status,'FAIL');assert.ok(over.metrics.minimal_pair_overmutation_rate>0);
const extra=await run(provider((x,o,raw)=>x.id==='P1-R'?[...o,{field:'relation_source',value:'invented',confidence:.99,evidence_span:span(raw,'组织是否批准')}]:o),'bad-extra');assert.equal(extra.status,'FAIL');assert.ok(extra.metrics.ir_field_guess_rate>0);
const unknown=await run(provider((x,o,raw)=>x.id==='G3-A'?[...o,{field:'future_endpoint',value:'guessed-open',confidence:.99,evidence_span:span(raw,'更远未来没有证据')}]:o),'bad-unknown');assert.equal(unknown.status,'FAIL');assert.ok(unknown.metrics.unknown_silent_swallow>0);
console.log(JSON.stringify({suite:'semantic_ir_paraphrase_stability_v0.1',fixture_version:F,samples:base.samples,invariant_groups:base.invariant_groups,minimal_pairs:base.minimal_pairs,metrics:base.metrics,adversarial_guards:{paraphrase_drift_detected:true,minimal_pair_overmutation_detected:true,extra_field_guess_detected:true,unknown_guess_detected:true},provider_runtime:'FIXTURE_CONTRACT_ONLY',real_provider_status:'PROVIDER_RUNTIME_NOT_AVAILABLE',result:'PASS_EVALUATOR_CONTRACT'},null,2));
})().catch(e=>{console.error(e&&e.stack?e.stack:e);process.exit(1);});
