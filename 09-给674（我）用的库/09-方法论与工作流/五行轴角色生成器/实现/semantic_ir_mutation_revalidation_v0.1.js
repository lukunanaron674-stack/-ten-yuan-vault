'use strict';

const { validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const { reinterpretCandidateIR, REINTERPRETATION_STATUS } = require('./semantic_ir_reinterpretation_v0.1.js');
const { DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');
const { decideCandidateSymbolValueSensitive } = require('./semantic_ir_value_predicate_v0.1.js');
const { reviewNearestNeighbors, NEAREST_NEIGHBOR_STATUS } = require('./semantic_ir_nearest_neighbor_v0.1.js');
const { compileGateRegistry } = require('./semantic_ir_gate_registry_v0.1.js');

const MUTATION_REVALIDATION_VERSION = 'ten-yuan-semantic-ir-mutation-revalidation-v0.1';
const MUTATION_REVALIDATION_STATUS = Object.freeze({
  PASS: 'PASS',
  MISMATCH: 'MISMATCH',
  AMBIGUOUS: 'AMBIGUOUS',
  NEEDS_MORE_STRUCTURE: 'NEEDS_MORE_STRUCTURE',
  DATA_BLOCKED: 'DATA_BLOCKED'
});
const GATE_SOURCE_STATUS = Object.freeze({
  REGISTRY_VERIFIED: 'REGISTRY_VERIFIED',
  UNVERIFIED_GATE_SOURCE: 'UNVERIFIED_GATE_SOURCE'
});

class SemanticIRMutationRevalidationError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRMutationRevalidationError';
    this.code = code;
    this.detail = detail;
  }
}

function assertOptions(options) {
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRMutationRevalidationError('ERROR_IR_REVALIDATE_OPTIONS_TYPE', 'revalidation options 必须是对象');
  }
  const forbidden = ['symbol', 'previous_symbol', 'inherited_symbol'].filter(key => Object.prototype.hasOwnProperty.call(options, key));
  if (forbidden.length) {
    throw new SemanticIRMutationRevalidationError(
      'ERROR_IR_REVALIDATE_SYMBOL_INHERITANCE_FORBIDDEN',
      'mutation 后不得从调用方继承旧 symbol，必须由重新抽取后的 IR 再判定',
      { forbidden_keys: forbidden }
    );
  }
  if (Object.prototype.hasOwnProperty.call(options, 'gate_registry') && Object.prototype.hasOwnProperty.call(options, 'candidate_gates')) {
    throw new SemanticIRMutationRevalidationError(
      'ERROR_IR_REVALIDATE_GATE_SOURCE_CONFLICT',
      'gate_registry 与裸 candidate_gates 不得同时提供，避免来源歧义'
    );
  }
}

function resolveDecisionGateSource(options) {
  if (Object.prototype.hasOwnProperty.call(options, 'gate_registry')) {
    const compiled = compileGateRegistry(options.gate_registry, {
      allow_pending_review: options.allow_pending_review === true
    });
    return {
      candidate_gates: compiled.candidate_gates,
      data_blocked: options.decision_data_blocked === true || compiled.data_blocked,
      block_reason: options.decision_block_reason ?? (compiled.data_blocked ? 'IR_GATE_REGISTRY_DATA_BLOCKED' : undefined),
      gate_source: {
        status: GATE_SOURCE_STATUS.REGISTRY_VERIFIED,
        gate_registry_version: compiled.gate_registry_version,
        registry_id: compiled.registry_id,
        source_sha: compiled.source_sha,
        selected_gate_ids: compiled.selected_gate_ids,
        pending_gate_ids: compiled.pending_gate_ids,
        rejected_gate_ids: compiled.rejected_gate_ids,
        data_blocked_gate_ids: compiled.data_blocked_gate_ids,
        provenance: compiled.provenance
      }
    };
  }
  return {
    candidate_gates: options.candidate_gates ?? [],
    data_blocked: options.decision_data_blocked === true,
    block_reason: options.decision_block_reason,
    gate_source: {
      status: GATE_SOURCE_STATUS.UNVERIFIED_GATE_SOURCE,
      reason: 'RAW_CANDIDATE_GATES_COMPATIBILITY_PATH'
    }
  };
}

function result(status, stage, detail = {}) {
  return {
    revalidation_version: MUTATION_REVALIDATION_VERSION,
    status,
    pass: status === MUTATION_REVALIDATION_STATUS.PASS,
    stage,
    symbol: detail.symbol ?? null,
    reinterpretation: detail.reinterpretation ?? null,
    decision: detail.decision ?? null,
    nearest_neighbor: detail.nearest_neighbor ?? null,
    gate_source: detail.gate_source ?? null,
    reason: detail.reason ?? null
  };
}

function revalidateMutationCandidate(candidateIR, generatedInput, options = {}) {
  validateSemanticIRShape(candidateIR);
  assertOptions(options);

  const reinterpretation = reinterpretCandidateIR(candidateIR, generatedInput, {
    frozen_fields: options.frozen_fields ?? [],
    mutated_fields: options.mutated_fields ?? [],
    confirmed_fields: options.confirmed_fields ?? null,
    data_blocked: options.data_blocked === true,
    block_reason: options.block_reason
  });

  if (reinterpretation.status === REINTERPRETATION_STATUS.DATA_BLOCKED) {
    return result(MUTATION_REVALIDATION_STATUS.DATA_BLOCKED, 'reinterpretation', {
      reinterpretation,
      reason: reinterpretation.reason
    });
  }
  if (reinterpretation.status === REINTERPRETATION_STATUS.MISMATCH) {
    return result(MUTATION_REVALIDATION_STATUS.MISMATCH, 'reinterpretation', {
      reinterpretation,
      reason: reinterpretation.reason
    });
  }
  if (reinterpretation.status === REINTERPRETATION_STATUS.NEEDS_MORE_STRUCTURE) {
    return result(MUTATION_REVALIDATION_STATUS.NEEDS_MORE_STRUCTURE, 'reinterpretation', {
      reinterpretation,
      reason: reinterpretation.reason
    });
  }

  const ir = reinterpretation.reinterpreted_ir;
  const resolvedGateSource = resolveDecisionGateSource(options);
  const decision = decideCandidateSymbolValueSensitive(ir, {
    candidate_gates: resolvedGateSource.candidate_gates,
    data_blocked: resolvedGateSource.data_blocked,
    block_reason: resolvedGateSource.block_reason
  });

  if (decision.status === DECISION_STATUS.DATA_BLOCKED) {
    return result(MUTATION_REVALIDATION_STATUS.DATA_BLOCKED, 'decision', {
      reinterpretation,
      decision,
      gate_source: resolvedGateSource.gate_source,
      reason: decision.reason
    });
  }
  if (decision.status === DECISION_STATUS.AMBIGUOUS) {
    return result(MUTATION_REVALIDATION_STATUS.AMBIGUOUS, 'decision', {
      reinterpretation,
      decision,
      gate_source: resolvedGateSource.gate_source,
      reason: decision.reason
    });
  }
  if (decision.status === DECISION_STATUS.NEEDS_MORE_STRUCTURE) {
    return result(MUTATION_REVALIDATION_STATUS.NEEDS_MORE_STRUCTURE, 'decision', {
      reinterpretation,
      decision,
      gate_source: resolvedGateSource.gate_source,
      reason: decision.reason
    });
  }

  const nearestNeighbor = reviewNearestNeighbors(ir, {
    candidate_symbol: decision.symbol,
    reviews: options.nearest_neighbor_reviews ?? [],
    data_blocked: options.nearest_neighbor_data_blocked === true,
    block_reason: options.nearest_neighbor_block_reason
  });

  if (nearestNeighbor.status === NEAREST_NEIGHBOR_STATUS.DATA_BLOCKED) {
    return result(MUTATION_REVALIDATION_STATUS.DATA_BLOCKED, 'nearest_neighbor', {
      reinterpretation,
      decision,
      nearest_neighbor: nearestNeighbor,
      gate_source: resolvedGateSource.gate_source,
      reason: nearestNeighbor.reason
    });
  }
  if (nearestNeighbor.status === NEAREST_NEIGHBOR_STATUS.AMBIGUOUS) {
    return result(MUTATION_REVALIDATION_STATUS.AMBIGUOUS, 'nearest_neighbor', {
      reinterpretation,
      decision,
      nearest_neighbor: nearestNeighbor,
      gate_source: resolvedGateSource.gate_source,
      reason: nearestNeighbor.reason
    });
  }
  if (nearestNeighbor.status === NEAREST_NEIGHBOR_STATUS.NEEDS_MORE_STRUCTURE) {
    return result(MUTATION_REVALIDATION_STATUS.NEEDS_MORE_STRUCTURE, 'nearest_neighbor', {
      reinterpretation,
      decision,
      nearest_neighbor: nearestNeighbor,
      gate_source: resolvedGateSource.gate_source,
      reason: nearestNeighbor.reason
    });
  }

  return result(MUTATION_REVALIDATION_STATUS.PASS, 'complete', {
    symbol: decision.symbol,
    reinterpretation,
    decision,
    nearest_neighbor: nearestNeighbor,
    gate_source: resolvedGateSource.gate_source,
    reason: 'REINTERPRETED_VALUE_SENSITIVE_DECISION_AND_NEAREST_NEIGHBOR_REVALIDATED'
  });
}

module.exports = {
  MUTATION_REVALIDATION_VERSION,
  MUTATION_REVALIDATION_STATUS,
  GATE_SOURCE_STATUS,
  SemanticIRMutationRevalidationError,
  revalidateMutationCandidate
};
