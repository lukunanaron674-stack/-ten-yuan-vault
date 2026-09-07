'use strict';

const { SEMANTIC_FIELDS, validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const triggerRegistry = require('../数据/trigger_registry_v0.1.json');

const NEAREST_NEIGHBOR_VERSION = 'ten-yuan-semantic-ir-nearest-neighbor-v0.1';
const NEAREST_NEIGHBOR_STATUS = Object.freeze({
  EXCLUDED: 'EXCLUDED',
  AMBIGUOUS: 'AMBIGUOUS',
  NEEDS_MORE_STRUCTURE: 'NEEDS_MORE_STRUCTURE',
  DATA_BLOCKED: 'DATA_BLOCKED'
});
const REVIEW_OUTCOME = Object.freeze({
  EXCLUDED: 'EXCLUDED',
  NOT_EXCLUDED: 'NOT_EXCLUDED',
  UNKNOWN: 'UNKNOWN'
});
const CANONICAL_SYMBOLS = Object.freeze([...triggerRegistry.canonical_symbols]);

class SemanticIRNearestNeighborError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRNearestNeighborError';
    this.code = code;
    this.detail = detail;
  }
}

function isKnown(value) {
  return value !== null && typeof value !== 'undefined';
}

function validateReview(review, index, candidateSymbol) {
  if (!review || typeof review !== 'object' || Array.isArray(review)) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_REVIEW_TYPE', 'nearest-neighbor review 必须是对象', { index });
  }
  if (!CANONICAL_SYMBOLS.includes(review.neighbor_symbol)) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_SYMBOL_UNKNOWN', 'neighbor_symbol 不是 canonical token', { index, symbol: review.neighbor_symbol });
  }
  if (review.neighbor_symbol === candidateSymbol) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_SAME_SYMBOL', 'nearest neighbor 不得与 candidate symbol 相同', { index, symbol: review.neighbor_symbol });
  }
  if (!Object.values(REVIEW_OUTCOME).includes(review.outcome)) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_OUTCOME', 'review outcome 非法', { index, outcome: review.outcome });
  }
  if (!Array.isArray(review.checked_fields) || review.checked_fields.length === 0) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_CHECKED_FIELDS', 'review 必须声明 checked_fields', { index });
  }
  const checkedFields = [...new Set(review.checked_fields)];
  const invalidFields = checkedFields.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (invalidFields.length) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_FIELD_UNKNOWN', 'review 使用未注册 IR 字段', { index, invalid_fields: invalidFields });
  }
  return {
    neighbor_symbol: review.neighbor_symbol,
    outcome: review.outcome,
    checked_fields: checkedFields,
    reason: typeof review.reason === 'string' ? review.reason : null
  };
}

function reviewNearestNeighbors(ir, options = {}) {
  validateSemanticIRShape(ir);
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_OPTIONS_TYPE', 'nearest-neighbor options 必须是对象');
  }
  if (options.data_blocked === true) {
    return {
      nearest_neighbor_version: NEAREST_NEIGHBOR_VERSION,
      status: NEAREST_NEIGHBOR_STATUS.DATA_BLOCKED,
      candidate_symbol: null,
      unresolved_neighbors: [],
      missing_fields: [],
      reason: options.block_reason || 'UPSTREAM_DATA_BLOCKED'
    };
  }
  if (!CANONICAL_SYMBOLS.includes(options.candidate_symbol)) {
    throw new SemanticIRNearestNeighborError('ERROR_IR_NN_CANDIDATE_UNKNOWN', 'candidate_symbol 不是 canonical token', { symbol: options.candidate_symbol });
  }
  if (!Array.isArray(options.reviews) || options.reviews.length === 0) {
    return {
      nearest_neighbor_version: NEAREST_NEIGHBOR_VERSION,
      status: NEAREST_NEIGHBOR_STATUS.NEEDS_MORE_STRUCTURE,
      candidate_symbol: options.candidate_symbol,
      unresolved_neighbors: [],
      missing_fields: [],
      reason: 'NO_NEAREST_NEIGHBOR_REVIEWS'
    };
  }

  const reviews = options.reviews.map((review, index) => validateReview(review, index, options.candidate_symbol));
  const evaluated = reviews.map(review => {
    const missing_fields = review.checked_fields.filter(field => !isKnown(ir.fields[field]));
    return { ...review, missing_fields };
  });
  const missingFields = [...new Set(evaluated.flatMap(review => review.missing_fields))];
  if (missingFields.length) {
    return {
      nearest_neighbor_version: NEAREST_NEIGHBOR_VERSION,
      status: NEAREST_NEIGHBOR_STATUS.NEEDS_MORE_STRUCTURE,
      candidate_symbol: options.candidate_symbol,
      unresolved_neighbors: evaluated.filter(review => review.missing_fields.length).map(review => review.neighbor_symbol),
      missing_fields: missingFields,
      reason: 'NEIGHBOR_CHECK_FIELDS_UNKNOWN'
    };
  }

  const notExcluded = evaluated.filter(review => review.outcome === REVIEW_OUTCOME.NOT_EXCLUDED);
  if (notExcluded.length) {
    return {
      nearest_neighbor_version: NEAREST_NEIGHBOR_VERSION,
      status: NEAREST_NEIGHBOR_STATUS.AMBIGUOUS,
      candidate_symbol: options.candidate_symbol,
      unresolved_neighbors: notExcluded.map(review => review.neighbor_symbol),
      missing_fields: [],
      reason: 'NEAREST_NEIGHBOR_NOT_EXCLUDED'
    };
  }
  const unknown = evaluated.filter(review => review.outcome === REVIEW_OUTCOME.UNKNOWN);
  if (unknown.length) {
    return {
      nearest_neighbor_version: NEAREST_NEIGHBOR_VERSION,
      status: NEAREST_NEIGHBOR_STATUS.NEEDS_MORE_STRUCTURE,
      candidate_symbol: options.candidate_symbol,
      unresolved_neighbors: unknown.map(review => review.neighbor_symbol),
      missing_fields: [],
      reason: 'NEAREST_NEIGHBOR_REVIEW_UNKNOWN'
    };
  }

  return {
    nearest_neighbor_version: NEAREST_NEIGHBOR_VERSION,
    status: NEAREST_NEIGHBOR_STATUS.EXCLUDED,
    candidate_symbol: options.candidate_symbol,
    unresolved_neighbors: [],
    missing_fields: [],
    reason: 'ALL_DECLARED_NEAREST_NEIGHBORS_EXCLUDED'
  };
}

module.exports = {
  NEAREST_NEIGHBOR_VERSION,
  NEAREST_NEIGHBOR_STATUS,
  REVIEW_OUTCOME,
  CANONICAL_SYMBOLS,
  SemanticIRNearestNeighborError,
  reviewNearestNeighbors
};
