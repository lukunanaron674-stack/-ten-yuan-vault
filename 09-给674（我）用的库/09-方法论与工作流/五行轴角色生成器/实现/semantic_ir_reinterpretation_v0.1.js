'use strict';

const { SEMANTIC_FIELDS, validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const { extractSemanticIR } = require('./semantic_ir_extractor_v0.1.js');

const REINTERPRETATION_VERSION = 'ten-yuan-semantic-ir-reinterpretation-v0.1';
const REINTERPRETATION_STATUS = Object.freeze({
  PASS: 'PASS',
  NEEDS_MORE_STRUCTURE: 'NEEDS_MORE_STRUCTURE',
  MISMATCH: 'MISMATCH',
  DATA_BLOCKED: 'DATA_BLOCKED'
});

class SemanticIRReinterpretationError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRReinterpretationError';
    this.code = code;
    this.detail = detail;
  }
}

function isKnown(value) {
  return value !== null && typeof value !== 'undefined';
}

function sameValue(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function validateFieldList(name, fields, { allowEmpty = true } = {}) {
  if (!Array.isArray(fields)) {
    throw new SemanticIRReinterpretationError('ERROR_IR_REINTERPRET_FIELD_LIST_TYPE', `${name} 必须是数组`, { name });
  }
  if (!allowEmpty && fields.length === 0) {
    throw new SemanticIRReinterpretationError('ERROR_IR_REINTERPRET_FIELD_LIST_EMPTY', `${name} 不得为空`, { name });
  }
  const unique = [...new Set(fields)];
  const invalid = unique.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (invalid.length) {
    throw new SemanticIRReinterpretationError('ERROR_IR_REINTERPRET_FIELD_UNKNOWN', `${name} 出现未注册 IR 字段`, { name, invalid_fields: invalid });
  }
  return unique;
}

function reinterpretCandidateIR(candidateIR, generatedInput, options = {}) {
  validateSemanticIRShape(candidateIR);
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRReinterpretationError('ERROR_IR_REINTERPRET_OPTIONS_TYPE', 'reinterpretation options 必须是对象');
  }

  const frozenFields = validateFieldList('frozen_fields', options.frozen_fields ?? []);
  const mutatedFields = validateFieldList('mutated_fields', options.mutated_fields ?? [], { allowEmpty: false });
  const overlap = frozenFields.filter(field => mutatedFields.includes(field));
  if (overlap.length) {
    throw new SemanticIRReinterpretationError('ERROR_IR_REINTERPRET_FIELD_OVERLAP', 'frozen_fields 与 mutated_fields 不得重叠', { overlap });
  }

  if (options.data_blocked === true) {
    return {
      reinterpretation_version: REINTERPRETATION_VERSION,
      status: REINTERPRETATION_STATUS.DATA_BLOCKED,
      pass: false,
      reinterpreted_ir: null,
      missing_fields: [],
      mismatched_fields: [],
      reason: options.block_reason || 'UPSTREAM_DATA_BLOCKED'
    };
  }

  const reinterpretedIR = extractSemanticIR(generatedInput, {
    confirmed_fields: options.confirmed_fields ?? null
  });
  const checkedFields = [...new Set([...frozenFields, ...mutatedFields])];
  const missingFields = checkedFields.filter(field => !isKnown(reinterpretedIR.fields[field]));
  if (missingFields.length) {
    return {
      reinterpretation_version: REINTERPRETATION_VERSION,
      status: REINTERPRETATION_STATUS.NEEDS_MORE_STRUCTURE,
      pass: false,
      reinterpreted_ir: reinterpretedIR,
      missing_fields: missingFields,
      mismatched_fields: [],
      reason: 'REEXTRACTION_MISSING_REQUIRED_STRUCTURE'
    };
  }

  const mismatchedFields = checkedFields.filter(field => !sameValue(reinterpretedIR.fields[field], candidateIR.fields[field]));
  if (mismatchedFields.length) {
    return {
      reinterpretation_version: REINTERPRETATION_VERSION,
      status: REINTERPRETATION_STATUS.MISMATCH,
      pass: false,
      reinterpreted_ir: reinterpretedIR,
      missing_fields: [],
      mismatched_fields: mismatchedFields,
      reason: 'REEXTRACTION_DOES_NOT_MATCH_MUTATION_CANDIDATE'
    };
  }

  return {
    reinterpretation_version: REINTERPRETATION_VERSION,
    status: REINTERPRETATION_STATUS.PASS,
    pass: true,
    reinterpreted_ir: reinterpretedIR,
    missing_fields: [],
    mismatched_fields: [],
    reason: 'REEXTRACTION_MATCHES_DECLARED_MUTATION'
  };
}

function createReinterpretationValidationHook(generatedInput, options = {}) {
  return candidateIR => reinterpretCandidateIR(candidateIR, generatedInput, options);
}

module.exports = {
  REINTERPRETATION_VERSION,
  REINTERPRETATION_STATUS,
  SemanticIRReinterpretationError,
  reinterpretCandidateIR,
  createReinterpretationValidationHook
};
