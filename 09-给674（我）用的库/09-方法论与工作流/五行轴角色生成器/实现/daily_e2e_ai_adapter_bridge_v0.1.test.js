'use strict';
const { extractSemanticIRWithAI } = require('./semantic_ir_ai_extraction_adapter_v0.1.js');
const { decideCandidateSymbolValueSensitive } = require('./semantic_ir_value_predicate_v0.1.js');
const { compileGateRegistry, GATE_REGISTRY_VERSION, GATE_STATUS } = require('./semantic_ir_gate_registry_v0.1.js');
const { shiftObjectLayer, SHIFT_OBJECT_LAYER_STATUS } = require('./semantic_ir_shift_object_layer_v0.1.js');
const { revalidateMutationCandidate, MUTATION_REVALIDATION_STATUS, GATE_SOURCE_STATUS, EXECUTION_MODE } = require('./semantic_ir_mutation_revalidation_v0.1.js');
const { REVIEW_OUTCOME } = require('./semantic_ir_nearest_neighbor_v0.1.js');
const { DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');

const surfaceSamples = [
'这个宿命般悲惨的国王最终死亡，无路可走','她拥有回去的希望，所以一定是回返','悲伤的医生在赛博朋克公司坚持信念','霸道总裁强势控制全局','同一个“拒绝”，个人同意层与组织审批层不是同一对象层','同一个“退出”，成员关系层与任务资格层不同','昨天还能回去，今天对方死亡后已不存在现实回返接口','被封路的一小时与一生完整路径集合不可混同','同样是决定权扩大，一个来自正式授权，一个来自主体自行越界','同样是恢复关系，一个来自双方同意，一个来自第三方强迫','当前选择的路断了，但另有两条真实可用路径','完整可调用路径集合已经全部失效','这条通道暂时维修，明天恢复','唯一接口永久撤销且无替代接口','nz 不成立并不自动推出 xz 成立','x 不成立并不自动推出 zn 成立','存在回返资格与终点持续收窄必须分别证明','借外部关系办成事与扩大自己的最终决定半径不是一回事','x并z 是一个原子 token，不拆成 x 与 z','显式 multi: x + z 与原子 x并z 必须区分','他做了一件改变局势的事','某个人坚持了自己的选择'];
const emptyProvider=async()=>({observations:[]});
function span(raw,text){const start=raw.indexOf(text);if(start<0)throw new Error('fixture span missing: '+text);return{text,start,end:start+text.length};}
function fullProvider(raw, layer){
  const values={actor:'actor-A',object:'approval-event-17',object_layer:layer,current_window:'current-stage',changed_variable:'decision-right-radius',relation_source:'formal-authorization',relation_shape:'delegated-approval',decision_right:'limited',path_set:['route-A','route-B'],reentry_right:'available',future_endpoint:'open',reality_anchor:'signed-authorization-record'};
  const evidence={actor:'actor-A',object:'approval-event-17',object_layer:layer,current_window:'current-stage',changed_variable:'decision-right-radius',relation_source:'formal-authorization',relation_shape:'delegated-approval',decision_right:'limited',path_set:'route-A|route-B',reentry_right:'available',future_endpoint:'open',reality_anchor:'signed-authorization-record'};
  return async()=>({observations:Object.keys(values).map(field=>({field,value:values[field],confidence:0.99,evidence_span:span(raw,evidence[field])}))});
}
const gateRegistry={registry_version:GATE_REGISTRY_VERSION,registry_id:'daily-e2e-ai-adapter-bridge-v0.1',source_sha:'runtime-regression-fixture-not-canonical',gates:[{gate_id:'nx-personal',symbol:'nx',status:GATE_STATUS.PRODUCTION,required_fields:['actor','object_layer','changed_variable','relation_source'],field_equals:{object_layer:'personal-consent-layer'},provenance:{source_ref:'daily_e2e_ai_adapter_bridge_v0.1.test.js',source_version:'v0.1',review_note:'runtime-only bridge fixture'}},{gate_id:'xn-org',symbol:'xn',status:GATE_STATUS.PRODUCTION,required_fields:['actor','object_layer','changed_variable','relation_source'],field_equals:{object_layer:'organization-approval-layer'},provenance:{source_ref:'daily_e2e_ai_adapter_bridge_v0.1.test.js',source_version:'v0.1',review_note:'runtime-only bridge fixture'}}]};
(async()=>{
  let guessed=0;
  for(const raw of surfaceSamples){const out=await extractSemanticIRWithAI(raw,{provider_id:'empty-fixture',provider_version:'v0.1',provider:emptyProvider});if(out.extraction_state.known_fields.length)guessed++;}
  if(guessed!==0)throw new Error('AI_BRIDGE_SURFACE_GUESS_REGRESSION');
  const sourceRaw='actor-A approval-event-17 personal-consent-layer current-stage decision-right-radius formal-authorization delegated-approval limited route-A|route-B available open signed-authorization-record';
  const sourceOut=await extractSemanticIRWithAI(sourceRaw,{provider_id:'structured-fixture',provider_version:'v0.1',provider:fullProvider(sourceRaw,'personal-consent-layer')});
  if(sourceOut.extraction_state.known_fields.length!==12)throw new Error('AI_BRIDGE_SOURCE_NOT_FULL_IR');
  const compiled=compileGateRegistry(gateRegistry);const sourceDecision=decideCandidateSymbolValueSensitive(sourceOut.ir,{candidate_gates:compiled.candidate_gates});if(sourceDecision.status!==DECISION_STATUS.SYMBOL||sourceDecision.symbol!=='nx')throw new Error('AI_BRIDGE_SOURCE_DECISION_FAILED');
  const reskin=shiftObjectLayer(sourceOut.ir,{mode:'reskin'});const retrieval=shiftObjectLayer(sourceOut.ir,{mode:'retrieval_only'});if(reskin.status!==SHIFT_OBJECT_LAYER_STATUS.REJECTED_RESKIN||retrieval.status!==SHIFT_OBJECT_LAYER_STATUS.REJECTED_RETRIEVAL_ONLY)throw new Error('AI_BRIDGE_Z_GUARD_FAILED');
  const mutation=shiftObjectLayer(sourceOut.ir,{mode:'structural_mutation',target_object_layer:'organization-approval-layer'});if(mutation.status!==SHIFT_OBJECT_LAYER_STATUS.READY)throw new Error('AI_BRIDGE_MUTATION_FAILED');
  const targetRaw='actor-A approval-event-17 organization-approval-layer current-stage decision-right-radius formal-authorization delegated-approval limited route-A|route-B available open signed-authorization-record';
  const targetOut=await extractSemanticIRWithAI(targetRaw,{provider_id:'structured-fixture',provider_version:'v0.1',provider:fullProvider(targetRaw,'organization-approval-layer')});
  const revalidated=revalidateMutationCandidate(mutation.candidate_ir,targetRaw,{execution_mode:EXECUTION_MODE.PRODUCTION,frozen_fields:mutation.contract.frozen_fields,mutated_fields:['object_layer'],confirmed_fields:targetOut.ir.fields,gate_registry:gateRegistry,nearest_neighbor_reviews:[{neighbor_symbol:'nx',outcome:REVIEW_OUTCOME.EXCLUDED,checked_fields:['object_layer','changed_variable','relation_source'],reason:'object layer shifted with evidence-backed re-extraction'},{neighbor_symbol:'zx',outcome:REVIEW_OUTCOME.EXCLUDED,checked_fields:['object_layer','changed_variable','relation_source'],reason:'cross-axis lure excluded'}]});
  if(revalidated.status!==MUTATION_REVALIDATION_STATUS.PASS||revalidated.symbol!=='xn'||revalidated.gate_source?.status!==GATE_SOURCE_STATUS.REGISTRY_VERIFIED)throw new Error('AI_BRIDGE_REVALIDATION_FAILED');
  console.log(JSON.stringify({suite:'daily_e2e_ai_adapter_bridge_v0.1',samples:surfaceSamples.length,ir_field_guess_rate:guessed/surfaceSamples.length,source_known_fields:sourceOut.extraction_state.known_fields.length,source_symbol:sourceDecision.symbol,z_reskin_rejected:reskin.status,z_retrieval_only_rejected:retrieval.status,z_mutation:mutation.status,target_known_fields:targetOut.extraction_state.known_fields.length,revalidation:{status:revalidated.status,symbol:revalidated.symbol,gate_source:revalidated.gate_source?.status},e2e:'PASS_AI_EXTRACTION_BRIDGE'},null,2));
})().catch(error=>{console.error(error&&error.stack?error.stack:error);process.exit(1);});
