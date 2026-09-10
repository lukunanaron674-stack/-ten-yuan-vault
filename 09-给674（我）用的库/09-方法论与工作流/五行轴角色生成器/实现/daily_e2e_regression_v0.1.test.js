'use strict';

const { extractSemanticIR, extractionState } = require('./semantic_ir_extractor_v0.1.js');
const { DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');
const { decideCandidateSymbolValueSensitive } = require('./semantic_ir_value_predicate_v0.1.js');
const { compileGateRegistry, GATE_REGISTRY_VERSION, GATE_STATUS } = require('./semantic_ir_gate_registry_v0.1.js');
const { reviewNearestNeighbors, NEAREST_NEIGHBOR_STATUS, REVIEW_OUTCOME } = require('./semantic_ir_nearest_neighbor_v0.1.js');
const { shiftObjectLayer, SHIFT_OBJECT_LAYER_STATUS } = require('./semantic_ir_shift_object_layer_v0.1.js');
const { revalidateMutationCandidate, MUTATION_REVALIDATION_STATUS, GATE_SOURCE_STATUS } = require('./semantic_ir_mutation_revalidation_v0.1.js');
const triggerRegistry = require('../数据/trigger_registry_v0.1.json');

// Versioned lure/adversarial surface fixtures. The P0 extractor must not infer
// semantic fields from wording alone; unknown/null is correct when structure is unconfirmed.
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
let keywordLureFalsePositive = 0;
let oppositePoleErrors = 0;
const rows = [];
for (const [risk, input] of samples) {
  const ir = extractSemanticIR(input);
  const state = extractionState(ir);
  const known = state.known_fields.length;
  if (known > 0) guessed += 1;
  if (state.status !== 'UNKNOWN_ONLY') silent += 1;
  if ((risk === 'keyword' || risk === 'lure') && known > 0) keywordLureFalsePositive += 1;
  if (risk === 'opposite' && known > 0) oppositePoleErrors += 1;
  rows.push({ risk, input, status: state.status, known });
}

if (!triggerRegistry.rules.longest_match || !triggerRegistry.rules.x并z_is_atomic) {
  throw new Error('E2E_X_PARALLEL_Z_ATOMICITY_REGRESSION');
}
if (!triggerRegistry.canonical_symbols.includes('x并z')) {
  throw new Error('E2E_X_PARALLEL_Z_CANONICAL_MISSING');
}
if (guessed !== 0 || silent !== 0 || keywordLureFalsePositive !== 0 || oppositePoleErrors !== 0) {
  throw new Error('E2E_SURFACE_INFERENCE_REGRESSION');
}

// Regression-only structural gates. They exercise runtime discrimination and are
// not canonical semantic claims; mapping is deliberately not used as an answer driver.
const gateRegistry = {
  registry_version: GATE_REGISTRY_VERSION,
  registry_id: 'daily-e2e-runtime-regression-v0.1',
  source_sha: 'runtime-regression-fixture-not-canonical',
  gates: [
    {
      gate_id: 'runtime-nx-personal-layer',
      symbol: 'nx',
      status: GATE_STATUS.PRODUCTION,
      required_fields: ['actor', 'object_layer', 'changed_variable', 'relation_source'],
      field_equals: { object_layer: 'personal-consent-layer' },
      provenance: {
        source_ref: 'daily_e2e_regression_v0.1.test.js',
        source_version: 'v0.1',
        review_note: 'runtime regression declaration only; not canonical semantic evidence'
      }
    },
    {
      gate_id: 'runtime-xn-organization-layer',
      symbol: 'xn',
      status: GATE_STATUS.PRODUCTION,
      required_fields: ['actor', 'object_layer', 'changed_variable', 'relation_source'],
      field_equals: { object_layer: 'organization-approval-layer' },
      provenance: {
        source_ref: 'daily_e2e_regression_v0.1.test.js',
        source_version: 'v0.1',
        review_note: 'runtime regression declaration only; not canonical semantic evidence'
      }
    }
  ]
};
const compiledRegistry = compileGateRegistry(gateRegistry);

const sourceConfirmed = {
  actor: 'actor-A',
  object: 'approval-event-17',
  object_layer: 'personal-consent-layer',
  current_window: 'current-stage',
  changed_variable: 'decision-right-radius',
  relation_source: 'formal-authorization',
  relation_shape: 'delegated-approval',
  decision_right: 'limited',
  path_set: ['route-A', 'route-B'],
  reentry_right: 'available',
  future_endpoint: 'open',
  reality_anchor: 'signed-authorization-record'
};
const sourceIR = extractSemanticIR(
  '结构观察已由调用方确认；表面词不参与十元判断。',
  { confirmed_fields: sourceConfirmed }
);
const sourceDecision = decideCandidateSymbolValueSensitive(sourceIR, {
  candidate_gates: compiledRegistry.candidate_gates
});
if (sourceDecision.status !== DECISION_STATUS.PASS || sourceDecision.symbol !== 'nx') {
  throw new Error('E2E_SOURCE_COORDINATE_DECISION_REGRESSION');
}

// Z guards: reskin and retrieval-only must be rejected.
const reskin = shiftObjectLayer(sourceIR, { mode: 'reskin' });
const retrievalOnly = shiftObjectLayer(sourceIR, { mode: 'retrieval_only' });
if (reskin.status !== SHIFT_OBJECT_LAYER_STATUS.REJECTED_RESKIN) throw new Error('E2E_RESKIN_NOT_REJECTED');
if (retrievalOnly.status !== SHIFT_OBJECT_LAYER_STATUS.REJECTED_RETRIEVAL_ONLY) throw new Error('E2E_RETRIEVAL_ONLY_NOT_REJECTED');

// Structural Z mutation changes only object_layer; all other fields are frozen.
const mutation = shiftObjectLayer(sourceIR, {
  mode: 'structural_mutation',
  target_object_layer: 'organization-approval-layer'
});
if (mutation.status !== SHIFT_OBJECT_LAYER_STATUS.READY) throw new Error('E2E_STRUCTURAL_MUTATION_NOT_READY');
if (mutation.contract.changed_fields.length !== 1 || mutation.contract.changed_fields[0] !== 'object_layer') {
  throw new Error('E2E_MUTATION_CHANGED_FIELDS_INVALID');
}
const frozenDrift = mutation.contract.frozen_fields.filter(
  field => JSON.stringify(sourceIR.fields[field]) !== JSON.stringify(mutation.candidate_ir.fields[field])
);
if (frozenDrift.length) throw new Error('E2E_FROZEN_FIELD_DRIFT');

// xn/AI knowledge-space proposal is never trusted as conclusion. Re-extract IR
// from the generated candidate with separately confirmed structural observations.
const generatedCandidate =
  '在组织审批层观察同一批准事件：个人仍是 actor-A，但动作现在落在组织审批接口；' +
  '当前窗口、路径集合、回返权和现实记录保持不变。';
const candidateConfirmed = { ...sourceConfirmed, object_layer: 'organization-approval-layer' };
const revalidated = revalidateMutationCandidate(mutation.candidate_ir, generatedCandidate, {
  frozen_fields: mutation.contract.frozen_fields,
  mutated_fields: ['object_layer'],
  confirmed_fields: candidateConfirmed,
  gate_registry: gateRegistry,
  nearest_neighbor_reviews: [
    {
      neighbor_symbol: 'nx',
      outcome: REVIEW_OUTCOME.EXCLUDED,
      checked_fields: ['object_layer', 'changed_variable', 'relation_source'],
      reason: 'runtime regression declaration only; object layer changed'
    },
    {
      neighbor_symbol: 'zx',
      outcome: REVIEW_OUTCOME.EXCLUDED,
      checked_fields: ['object_layer', 'changed_variable', 'relation_source'],
      reason: 'runtime regression declaration only; cross-axis lure excluded'
    }
  ]
});
if (revalidated.status !== MUTATION_REVALIDATION_STATUS.PASS || revalidated.symbol !== 'xn') {
  throw new Error('E2E_DIFFERENT_XN_ACTIVATION_FAILED');
}
if (revalidated.gate_source?.status !== GATE_SOURCE_STATUS.REGISTRY_VERIFIED) {
  throw new Error('E2E_GATE_SOURCE_NOT_REGISTRY_VERIFIED');
}

// Adversarial NN/removal/reverse/counterexample plumbing: non-excluded neighbor
// must remain ambiguous; unknown review must not be silently swallowed.
const nnCounterexample = reviewNearestNeighbors(revalidated.reinterpretation.reinterpreted_ir, {
  candidate_symbol: 'xn',
  reviews: [{
    neighbor_symbol: 'nx',
    outcome: REVIEW_OUTCOME.NOT_EXCLUDED,
    checked_fields: ['object_layer', 'changed_variable'],
    reason: 'counterexample fixture: force unresolved neighbor'
  }]
});
if (nnCounterexample.status !== NEAREST_NEIGHBOR_STATUS.AMBIGUOUS) {
  throw new Error('E2E_NN_COUNTEREXAMPLE_NOT_AMBIGUOUS');
}
const nnUnknown = reviewNearestNeighbors(revalidated.reinterpretation.reinterpreted_ir, {
  candidate_symbol: 'xn',
  reviews: [{
    neighbor_symbol: 'nx',
    outcome: REVIEW_OUTCOME.UNKNOWN,
    checked_fields: ['object_layer', 'changed_variable'],
    reason: 'reverse/removal fixture: evidence intentionally unresolved'
  }]
});
if (nnUnknown.status !== NEAREST_NEIGHBOR_STATUS.NEEDS_MORE_STRUCTURE) {
  throw new Error('E2E_NN_UNKNOWN_SILENTLY_SWALLOWED');
}

const metrics = {
  samples: samples.length,
  ir_field_guess_rate: guessed / samples.length,
  keyword_lure_false_positive_rate: keywordLureFalsePositive / 4,
  nearest_neighbor_confusion_rate: 0,
  object_layer_drift_rate: frozenDrift.length ? 1 : 0,
  window_drift_rate: sourceIR.fields.current_window === mutation.candidate_ir.fields.current_window ? 0 : 1,
  opposite_pole_inference_error_rate: oppositePoleErrors / 2,
  z_reskin_rejection_rate: reskin.status === SHIFT_OBJECT_LAYER_STATUS.REJECTED_RESKIN ? 1 : 0,
  z_retrieval_only_rejection_rate: retrievalOnly.status === SHIFT_OBJECT_LAYER_STATUS.REJECTED_RETRIEVAL_ONLY ? 1 : 0,
  z_structural_mutation_success_rate: mutation.status === SHIFT_OBJECT_LAYER_STATUS.READY ? 1 : 0,
  reinterpretation_stability: revalidated.reinterpretation?.status === 'PASS' ? 1 : 0,
  unknown_silent_swallow: silent,
  x_parallel_z_split_errors: 0,
  different_xn_activation: 'PASS_REGISTRY_VALUE_SENSITIVE',
  removal_reverse_counterexample_runtime: 'PASS_MINIMAL_NN_GUARDS',
  e2e: 'PASS_FOCUSED_CHAIN'
};

console.log(JSON.stringify({
  suite: 'daily_e2e_regression_v0.1',
  metrics,
  source_decision: { status: sourceDecision.status, symbol: sourceDecision.symbol },
  z: {
    reskin_status: reskin.status,
    retrieval_only_status: retrievalOnly.status,
    mutation_status: mutation.status,
    changed_fields: mutation.contract.changed_fields,
    frozen_fields: mutation.contract.frozen_fields
  },
  revalidation: {
    status: revalidated.status,
    stage: revalidated.stage,
    symbol: revalidated.symbol,
    gate_source: revalidated.gate_source?.status
  },
  adversarial_nn: {
    counterexample_status: nnCounterexample.status,
    unknown_status: nnUnknown.status
  },
  rows
}, null, 2));
