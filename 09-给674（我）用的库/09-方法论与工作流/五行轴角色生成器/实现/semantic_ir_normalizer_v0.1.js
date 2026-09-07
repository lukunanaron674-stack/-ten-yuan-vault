'use strict';

const {
  SEMANTIC_IR_SCHEMA_VERSION,
  SEMANTIC_FIELDS,
  validateSemanticIRShape
} = require('./semantic_ir_schema_v0.1.js');

const SEMANTIC_IR_NORMALIZATION_VERSION = 'ten-yuan-semantic-ir-normalization-v0.1';

class SemanticIRNormalizationError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRNormalizationError';
    this.code = code;
    this.detail = detail;
  }
}

function normalizeText(rawInput) {
  if (typeof rawInput !== 'string') {
    throw new SemanticIRNormalizationError('ERROR_IR_NORMALIZE_INPUT_TYPE', 'raw_input 必须是字符串');
  }
  return rawInput
    .normalize('NFKC')
    .replace(/\s+/gu, ' ')
    .trim();
}

function cloneFields(fields) {
  return Object.fromEntries(SEMANTIC_FIELDS.map(field => [field, fields[field]]));
}

function normalizeSemanticIR(ir, options = {}) {
  validateSemanticIRShape(ir);
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRNormalizationError('ERROR_IR_NORMALIZE_OPTIONS_TYPE', 'normalization options 必须是对象');
  }

  const source = options.source ?? 'semantic_ir_extractor_v0.1';
  if (typeof source !== 'string' || source.trim() === '') {
    throw new SemanticIRNormalizationError('ERROR_IR_NORMALIZE_SOURCE', 'provenance source 必须是非空字符串');
  }

  const confirmedFields = Array.isArray(options.confirmed_fields)
    ? [...new Set(options.confirmed_fields)]
    : [];
  const unknownConfirmed = confirmedFields.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (unknownConfirmed.length) {
    throw new SemanticIRNormalizationError('ERROR_IR_NORMALIZE_CONFIRMED_FIELD_UNKNOWN', 'confirmed_fields 出现未注册字段', { unknown: unknownConfirmed });
  }

  return {
    schema_version: SEMANTIC_IR_SCHEMA_VERSION,
    normalization_version: SEMANTIC_IR_NORMALIZATION_VERSION,
    raw_input: ir.raw_input,
    normalized_input: normalizeText(ir.raw_input),
    fields: cloneFields(ir.fields),
    provenance: {
      source,
      schema_version: SEMANTIC_IR_SCHEMA_VERSION,
      normalization_version: SEMANTIC_IR_NORMALIZATION_VERSION,
      confirmed_fields: confirmedFields,
      guessed_fields: []
    }
  };
}

module.exports = {
  SEMANTIC_IR_NORMALIZATION_VERSION,
  SemanticIRNormalizationError,
  normalizeText,
  normalizeSemanticIR
};