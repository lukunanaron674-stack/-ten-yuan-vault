'use strict';

const { isDeepStrictEqual } = require('node:util');
const { SEMANTIC_FIELDS, validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const { DECISION_STATUS, SemanticIRDecisionError, decideCandidateSymbol } = require('./semantic_ir_decision_v0.1.js');

const VALUE_PREDICATE_VERSION = 'ten-yuan-semantic-ir-value-predicate-v0.1';

function isKnown(value) {
  return value !== null && typeof value !== 'undefined';
}

function validatePredicate(predicate, index) {
  if (typeof predicate === 'undefined') return {};
  if (!predicate || typeof predicate !== 'object' || Array.isArray(predicate)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_FIELD_EQUALS_TYPE', 'field_equals 必须是对象', { index });
  }
  const fields = Object.keys(predicate);
  const invalid = fields.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (invalid.length) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_FIELD_UNKNOWN', 'field_equals 使用未注册 IR 字段', {
      index,
      invalid_fields: invalid
    });
  }
  const unknownExpectations = fields.filter(field => !isKnown(predicate[field]));
  if (unknownExpectations.length) {
    throw new SemanticIRDecisionError(
      'ERROR_IR_DECISION_PREDICATE_EXPECTATION_UNKNOWN',
      'field_equals 不得把 unknown/null 当作候选证据',
      { index, fields: unknownExpectations }
    );
  }
  return predicate;
}

function decideCandidateSymbolValueSensitive(ir, options = {}) {
  validateSemanticIRShape(ir);
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_OPTIONS_TYPE', 'decision options 必须是对象');
  }

  const rawGates = options.candidate_gates ?? [];
  if (!Array.isArray(rawGates)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_GATES_TYPE', 'candidate_gates 必须是数组');
  }

  if (options.data_blocked === true || rawGates.length === 0) {
    return decideCandidateSymbol(ir, options);
  }

  const matched = [];
  const unknownPredicateFields = new Set();

  rawGates.forEach((gate, index) => {
    const predicate = validatePredicate(gate.field_equals, index);
    const predicateFields = Object.keys(predicate);
    const unknown = predicateFields.filter(field => !isKnown(ir.fields[field]));
    unknown.forEach(field => unknownPredicateFields.add(field));
    if (unknown.length) return;

    const matches = predicateFields.every(field => isDeepStrictEqual(ir.fields[field], predicate[field]));
    if (matches) {
      const { field_equals, ...legacyGate } = gate;
      matched.push(legacyGate);
    }
  });

  if (unknownPredicateFields.size > 0) {
    return {
      decision_version: VALUE_PREDICATE_VERSION,
      status: DECISION_STATUS.NEEDS_MORE_STRUCTURE,
      symbol: null,
      candidates: [],
      missing_fields: [...unknownPredicateFields],
      reason: 'VALUE_PREDICATE_FIELDS_UNKNOWN'
    };
  }

  const result = decideCandidateSymbol(ir, { ...options, candidate_gates: matched });
  return {
    ...result,
    decision_version: VALUE_PREDICATE_VERSION,
    reason: matched.length === 0 && result.status === DECISION_STATUS.NEEDS_MORE_STRUCTURE
      ? 'KNOWN_STRUCTURE_MATCHES_NO_VALUE_PREDICATE'
      : result.reason
  };
}

module.exports = {
  VALUE_PREDICATE_VERSION,
  decideCandidateSymbolValueSensitive
};
