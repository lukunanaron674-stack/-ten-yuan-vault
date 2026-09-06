'use strict';

const {
  SEMANTIC_FIELDS,
  SemanticIRSchemaError,
  createSemanticIR,
  validateSemanticIRShape
} = require('./semantic_ir_schema_v0.1.js');

class SemanticIRExtractionError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRExtractionError';
    this.code = code;
    this.detail = detail;
  }
}

function assertRawInput(rawInput) {
  if (typeof rawInput !== 'string') {
    throw new SemanticIRExtractionError('ERROR_IR_INPUT_TYPE', 'natural-language input 必须是字符串');
  }
  if (rawInput.trim().length === 0) {
    throw new SemanticIRExtractionError('ERROR_IR_EMPTY_INPUT', 'natural-language input 不得为空');
  }
}

function assertConfirmedFields(confirmedFields) {
  if (confirmedFields === undefined || confirmedFields === null) return;
  if (typeof confirmedFields !== 'object' || Array.isArray(confirmedFields)) {
    throw new SemanticIRExtractionError('ERROR_IR_CONFIRMED_FIELDS_TYPE', 'confirmed_fields 必须是对象');
  }

  const unknown = Object.keys(confirmedFields).filter(field => !SEMANTIC_FIELDS.includes(field));
  if (unknown.length) {
    throw new SemanticIRExtractionError('ERROR_IR_CONFIRMED_FIELD_UNKNOWN', 'confirmed_fields 出现未注册字段', { unknown });
  }
}

function extractSemanticIR(rawInput, options = {}) {
  assertRawInput(rawInput);

  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRExtractionError('ERROR_IR_EXTRACTION_OPTIONS_TYPE', 'extraction options 必须是对象');
  }

  const confirmedFields = options.confirmed_fields ?? null;
  assertConfirmedFields(confirmedFields);

  const ir = createSemanticIR(rawInput);

  // P0-2 hard rule: this interface never guesses from words, genre, profession,
  // emotion, names, or mappings. Only caller-confirmed structural observations
  // may populate IR slots; everything else stays explicit unknown (null).
  if (confirmedFields) {
    for (const [field, value] of Object.entries(confirmedFields)) {
      if (value === undefined) continue;
      ir.fields[field] = value;
    }
  }

  validateSemanticIRShape(ir);
  return ir;
}

function extractionState(ir) {
  validateSemanticIRShape(ir);
  const known = SEMANTIC_FIELDS.filter(field => ir.fields[field] !== null && ir.fields[field] !== undefined);
  return {
    status: known.length === 0 ? 'UNKNOWN_ONLY' : 'PARTIAL',
    known_fields: known,
    unknown_fields: SEMANTIC_FIELDS.filter(field => !known.includes(field))
  };
}

module.exports = {
  SemanticIRExtractionError,
  extractSemanticIR,
  extractionState
};
