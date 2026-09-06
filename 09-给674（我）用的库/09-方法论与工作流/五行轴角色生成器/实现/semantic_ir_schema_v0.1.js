'use strict';

const SEMANTIC_IR_SCHEMA_VERSION = 'ten-yuan-semantic-ir-v0.1';
const UNKNOWN = null;
const SEMANTIC_FIELDS = Object.freeze([
  'actor',
  'object',
  'object_layer',
  'current_window',
  'changed_variable',
  'relation_source',
  'relation_shape',
  'decision_right',
  'path_set',
  'reentry_right',
  'future_endpoint',
  'reality_anchor'
]);

const REQUIRED_ENVELOPE_KEYS = Object.freeze(['schema_version', 'raw_input', 'fields']);
const OPTIONAL_VALUE_FIELDS = SEMANTIC_FIELDS;

class SemanticIRSchemaError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRSchemaError';
    this.code = code;
    this.detail = detail;
  }
}

function createUnknownFields() {
  return Object.fromEntries(SEMANTIC_FIELDS.map(field => [field, UNKNOWN]));
}

function createSemanticIR(rawInput) {
  return {
    schema_version: SEMANTIC_IR_SCHEMA_VERSION,
    raw_input: String(rawInput ?? ''),
    fields: createUnknownFields()
  };
}

function fieldState(value) {
  return value === null || typeof value === 'undefined' ? 'unknown' : 'known';
}

function inspectSemanticIR(ir) {
  validateSemanticIRShape(ir);
  return {
    required: [...REQUIRED_ENVELOPE_KEYS],
    optional: [...OPTIONAL_VALUE_FIELDS],
    unknown: SEMANTIC_FIELDS.filter(field => fieldState(ir.fields[field]) === 'unknown'),
    known: SEMANTIC_FIELDS.filter(field => fieldState(ir.fields[field]) === 'known')
  };
}

function validateSemanticIRShape(ir) {
  if (!ir || typeof ir !== 'object' || Array.isArray(ir)) {
    throw new SemanticIRSchemaError('ERROR_IR_NOT_OBJECT', 'Semantic IR 必须是对象');
  }
  if (ir.schema_version !== SEMANTIC_IR_SCHEMA_VERSION) {
    throw new SemanticIRSchemaError('ERROR_IR_SCHEMA_VERSION', 'Semantic IR schema_version 不匹配', {
      expected: SEMANTIC_IR_SCHEMA_VERSION,
      actual: ir.schema_version
    });
  }
  if (typeof ir.raw_input !== 'string') {
    throw new SemanticIRSchemaError('ERROR_IR_RAW_INPUT_TYPE', 'Semantic IR raw_input 必须是字符串');
  }
  if (!ir.fields || typeof ir.fields !== 'object' || Array.isArray(ir.fields)) {
    throw new SemanticIRSchemaError('ERROR_IR_FIELDS_NOT_OBJECT', 'Semantic IR fields 必须是对象');
  }

  const actualFields = Object.keys(ir.fields);
  const missing = SEMANTIC_FIELDS.filter(field => !Object.prototype.hasOwnProperty.call(ir.fields, field));
  const extra = actualFields.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (missing.length) {
    throw new SemanticIRSchemaError('ERROR_IR_FIELD_MISSING', 'Semantic IR 缺少固定字段', { missing });
  }
  if (extra.length) {
    throw new SemanticIRSchemaError('ERROR_IR_FIELD_UNKNOWN', 'Semantic IR 出现未注册字段', { extra });
  }
  return true;
}

module.exports = {
  SEMANTIC_IR_SCHEMA_VERSION,
  UNKNOWN,
  SEMANTIC_FIELDS,
  REQUIRED_ENVELOPE_KEYS,
  OPTIONAL_VALUE_FIELDS,
  SemanticIRSchemaError,
  createUnknownFields,
  createSemanticIR,
  fieldState,
  inspectSemanticIR,
  validateSemanticIRShape
};
