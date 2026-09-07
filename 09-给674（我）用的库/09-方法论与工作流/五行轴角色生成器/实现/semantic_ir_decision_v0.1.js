'use strict';

const { SEMANTIC_FIELDS, validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const triggerRegistry = require('../数据/trigger_registry_v0.1.json');

const DECISION_VERSION = 'ten-yuan-semantic-ir-decision-v0.1';
const DECISION_STATUS = Object.freeze({
  SYMBOL: 'symbol',
  AMBIGUOUS: 'AMBIGUOUS',
  NEEDS_MORE_STRUCTURE: 'NEEDS_MORE_STRUCTURE',
  DATA_BLOCKED: 'DATA_BLOCKED'
});
const CANONICAL_SYMBOLS = Object.freeze([...triggerRegistry.canonical_symbols]);

class SemanticIRDecisionError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRDecisionError';
    this.code = code;
    this.detail = detail;
  }
}

function isKnown(value) {
  return value !== null && typeof value !== 'undefined';
}

function validateGate(gate, index) {
  if (!gate || typeof gate !== 'object' || Array.isArray(gate)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_GATE_TYPE', 'candidate gate 必须是对象', { index });
  }
  if (!CANONICAL_SYMBOLS.includes(gate.symbol)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_SYMBOL_UNKNOWN', 'candidate gate symbol 不是 canonical token', { index, symbol: gate.symbol });
  }
  if (!Array.isArray(gate.required_fields) || gate.required_fields.length === 0) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_REQUIRED_FIELDS', 'candidate gate 必须声明至少一个 required_fields', { index });
  }
  const invalidFields = gate.required_fields.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (invalidFields.length) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_FIELD_UNKNOWN', 'candidate gate 使用未注册 IR 字段', { index, invalid_fields: invalidFields });
  }
  return {
    symbol: gate.symbol,
    required_fields: [...new Set(gate.required_fields)]
  };
}

function decideCandidateSymbol(ir, options = {}) {
  validateSemanticIRShape(ir);
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_OPTIONS_TYPE', 'decision options 必须是对象');
  }

  if (options.data_blocked === true) {
    return {
      decision_version: DECISION_VERSION,
      status: DECISION_STATUS.DATA_BLOCKED,
      symbol: null,
      candidates: [],
      missing_fields: [],
      reason: options.block_reason || 'UPSTREAM_DATA_BLOCKED'
    };
  }

  const rawGates = options.candidate_gates ?? [];
  if (!Array.isArray(rawGates)) {
    throw new SemanticIRDecisionError('ERROR_IR_DECISION_GATES_TYPE', 'candidate_gates 必须是数组');
  }
  if (rawGates.length === 0) {
    return {
      decision_version: DECISION_VERSION,
      status: DECISION_STATUS.NEEDS_MORE_STRUCTURE,
      symbol: null,
      candidates: [],
      missing_fields: SEMANTIC_FIELDS.filter(field => !isKnown(ir.fields[field])),
      reason: 'NO_STRUCTURAL_GATES'
    };
  }

  const gates = rawGates.map(validateGate);
  const evaluated = gates.map(gate => {
    const missing_fields = gate.required_fields.filter(field => !isKnown(ir.fields[field]));
    return { ...gate, missing_fields, satisfied: missing_fields.length === 0 };
  });
  const satisfied = evaluated.filter(item => item.satisfied);

  if (satisfied.length === 1) {
    return {
      decision_version: DECISION_VERSION,
      status: DECISION_STATUS.SYMBOL,
      symbol: satisfied[0].symbol,
      candidates: [satisfied[0].symbol],
      missing_fields: [],
      reason: 'SINGLE_STRUCTURAL_GATE_SATISFIED'
    };
  }
  if (satisfied.length > 1) {
    return {
      decision_version: DECISION_VERSION,
      status: DECISION_STATUS.AMBIGUOUS,
      symbol: null,
      candidates: satisfied.map(item => item.symbol),
      missing_fields: [],
      reason: 'MULTIPLE_STRUCTURAL_GATES_SATISFIED'
    };
  }

  return {
    decision_version: DECISION_VERSION,
    status: DECISION_STATUS.NEEDS_MORE_STRUCTURE,
    symbol: null,
    candidates: [],
    missing_fields: [...new Set(evaluated.flatMap(item => item.missing_fields))],
    reason: 'NO_STRUCTURAL_GATE_SATISFIED'
  };
}

module.exports = {
  DECISION_VERSION,
  DECISION_STATUS,
  CANONICAL_SYMBOLS,
  SemanticIRDecisionError,
  decideCandidateSymbol
};
