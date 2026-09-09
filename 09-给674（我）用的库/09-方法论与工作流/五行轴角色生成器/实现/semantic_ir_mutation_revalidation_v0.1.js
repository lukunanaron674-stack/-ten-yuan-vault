'use strict';

const { validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const { reinterpretCandidateIR, REINTERPRETATION_STATUS } = require('./semantic_ir_reinterpretation_v0.1.js');
const { DECISION_STATUS } = require('./semantic_ir_decision_v0.1.js');
const { decideCandidateSymbolValueSensitive } = require('./semantic_ir_value_predicate_v0.1.js');
const { reviewNearestNeighbors, NEAREST_NEIGHBOR_STATUS } = require('./semantic_ir_nearest_neighbor_v0.1.js');

const MUTATION_REVALIDATION_VERSION = 'ten-yuan-semantic-ir-mutation-revalidation-v0.1';
const MUTATION_REVALIDATION_STATUS = Object.freeze({
  PASS: 'PASS',
  MISMATCH: 'MISMATCH',
  AMBIGUOUS: 'AMBIGUOUS',
  NEEDS_MORE_STRUCTURE: 'NEEDS_MORE_STRUCTURE',
  DATA_BLOCKED: 'DATA_BLOCKED'
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
  const decision = decideCandidateSymbolValueSensitive(ir, {
    candidate_gates: options.candidate_gates ?? [],
    data_blocked: options.decision_data_blocked === true,
    block_reason: options.decision_block_reason
  });

  if (decision.status === DECISION_STATUS.DATA_BLOCKED) {
    return result(MUTATION_REVALIDATION_STATUS.DATA_BLOCKED, 'decision', {
      reinterpretation,
      decision,
      reason: decision.reason
    });
  }
  if (decision.status === DECISION_STATUS.AMBIGUOUS) {
    return result(MUTATION_REVALIDATION_STATUS.AMBIGUOUS, 'decision', {
      reinterpretation,
      decision,
      reason: decision.reason
    });
  }
  if (decision.status === DECISION_STATUS.NEEDS_MORE_STRUCTURE) {
    return result(MUTATION_REVALIDATION_STATUS.NEEDS_MORE_STRUCTURE, 'decision', {
      reinterpretation,
      decision,
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
      reason: nearestNeighbor.reason
    });
  }
  if (nearestNeighbor.status === NEAREST_NEIGHBOR_STATUS.AMBIGUOUS) {
    return result(MUTATION_REVALIDATION_STATUS.AMBIGUOUS, 'nearest_neighbor', {
      reinterpretation,
      decision,
      nearest_neighbor: nearestNeighbor,
      reason: nearestNeighbor.reason
    });
  }
  if (nearestNeighbor.status === NEAREST_NEIGHBOR_STATUS.NEEDS_MORE_STRUCTURE) {
    return result(MUTATION_REVALIDATION_STATUS.NEEDS_MORE_STRUCTURE, 'nearest_neighbor', {
      reinterpretation,
      decision,
      nearest_neighbor: nearestNeighbor,
      reason: nearestNeighbor.reason
    });
  }

  return result(MUTATION_REVALIDATION_STATUS.PASS, 'complete', {
    symbol: decision.symbol,
    reinterpretation,
    decision,
    nearest_neighbor: nearestNeighbor,
    reason: 'REINTERPRETED_VALUE_SENSITIVE_DECISION_AND_NEAREST_NEIGHBOR_REVALIDATED'
  });
}

module.exports = {
  MUTATION_REVALIDATION_VERSION,
  MUTATION_REVALIDATION_STATUS,
  SemanticIRMutationRevalidationError,
  revalidateMutationCandidate
};
