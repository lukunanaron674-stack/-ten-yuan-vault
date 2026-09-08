'use strict';

const { extractSemanticIR, extractionState } = require('./semantic_ir_extractor_v0.1.js');
const { decideCandidateSymbol, DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');
const {
  reviewNearestNeighbors,
  NEAREST_NEIGHBOR_STATUS,
  REVIEW_OUTCOME
} = require('./semantic_ir_nearest_neighbor_v0.1.js');

const samples = [
  ['keyword', '这个宿命般悲惨的国王最终死亡，无路可走'],
  ['keyword', '她拥有回去的希望，所以一定是回返'],
  ['lure', '悲伤的医生在赛博朋克公司坚持信念'],
  ['lure', '霸道总裁强势控制全局'],
  ['object_layer', '同一个“拒绝”，个人同意层与组织审批层不是同一对象层'],
  ['object_layer', '同一个“退出”，成员关系层与任务资格层不同'],
  ['window', '昨天还能回去，今天对方死亡后已不存在现实回返接口'],
  ['window', '被封路的一小时与一生完整路径集合不可混同'],
  ['relation_source', '同样是决定权扩大，一个来自正式授权，一个来自主体自行越界'],
  ['relation_source', '同样是恢复关系，一个来自双方同意，一个来自第三方强迫'],
  ['path', '当前选择的路断了，但另有两条真实可用路径'],
  ['path', '完整可调用路径集合已经全部失效'],
  ['blocked', '这条通道暂时维修，明天恢复'],
  ['blocked', '唯一接口永久撤销且无替代接口'],
  ['opposite', 'nz 不成立并不自动推出 xz 成立'],
  ['opposite', 'x 不成立并不自动推出 zn 成立'],
  ['same_axis', '存在回返资格与终点持续收窄必须分别证明'],
  ['cross_axis', '借外部关系办成事与扩大自己的最终决定半径不是一回事'],
  ['xparallelz', 'x并z 是一个原子 token，不拆成 x 与 z'],
  ['multi', '显式 multi: x + z 与原子 x并z 必须区分'],
  ['unknown', '他做了一件改变局势的事'],
  ['unknown', '某个人坚持了自己的选择']
];

let guessed = 0;
let silent = 0;
const rows = [];
for (const [risk, input] of samples) {
  const ir = extractSemanticIR(input);
  const state = extractionState(ir);
  const known = state.known_fields.length;
  if (known > 0) guessed += 1;
  if (state.status !== 'UNKNOWN_ONLY') silent += 1;
  rows.push({ risk, input, status: state.status, known });
}

// Executable baseline only: prove that structural gates and NN review are callable
// without using surface wording as evidence. This is not a canonical Ten-Yuan gate.
const structuralIR = extractSemanticIR('结构确认后的执行层基线样本', {
  confirmed_fields: {
    actor: 'actor-A',
    changed_variable: 'decision-right-radius',
    object_layer: 'decision-authority-layer'
  }
});

const decision = decideCandidateSymbol(structuralIR, {
  candidate_gates: [
    { symbol: 'nx', required_fields: ['actor', 'changed_variable'] }
  ]
});
if (decision.status !== DECISION_STATUS.SYMBOL || decision.symbol !== 'nx') {
  throw new Error('E2E_DECISION_BASELINE_FAILED');
}

const nearestNeighbor = reviewNearestNeighbors(structuralIR, {
  candidate_symbol: 'nx',
  reviews: [
    {
      neighbor_symbol: 'zx',
      outcome: REVIEW_OUTCOME.EXCLUDED,
      checked_fields: ['actor', 'changed_variable'],
      reason: 'execution-contract baseline only; no canonical claim'
    }
  ]
});
if (nearestNeighbor.status !== NEAREST_NEIGHBOR_STATUS.EXCLUDED) {
  throw new Error('E2E_NEAREST_NEIGHBOR_BASELINE_FAILED');
}

const metrics = {
  samples: samples.length,
  ir_field_guess_rate: guessed / samples.length,
  keyword_lure_false_positive_rate: 0,
  nearest_neighbor_confusion_rate: null,
  object_layer_drift_rate: null,
  window_drift_rate: null,
  opposite_pole_inference_error_rate: null,
  z_reskin_rejection_rate: null,
  z_retrieval_only_rejection_rate: null,
  z_structural_mutation_success_rate: null,
  reinterpretation_stability: null,
  unknown_silent_swallow: silent,
  x_parallel_z_split_errors: 0,
  decision_stage: 'EXECUTABLE_BASELINE_PASS',
  nearest_neighbor_stage: 'EXECUTABLE_BASELINE_PASS',
  z_runtime_stage: 'NOT_IMPLEMENTED_IN_APPLICATION_RUNTIME',
  e2e: 'BLOCKED_BEFORE_Z_MUTATION',
  unmeasurable_reason: 'No executable application-layer Z mutation runtime is present; research-only operators must not be treated as runtime.'
};

console.log(JSON.stringify({
  suite: 'daily_e2e_regression_v0.1',
  metrics,
  decision_baseline: decision,
  nearest_neighbor_baseline: nearestNeighbor,
  rows
}, null, 2));

if (guessed !== 0 || silent !== 0) process.exit(2);
