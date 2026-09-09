'use strict';

const { isDeepStrictEqual } = require('node:util');
const { SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { CANONICAL_SYMBOLS } = require('./semantic_ir_decision_v0.1.js');

const GATE_REGISTRY_VERSION = 'ten-yuan-semantic-ir-gate-registry-v0.1';
const GATE_STATUS = Object.freeze({
  PRODUCTION: 'production',
  PENDING_REVIEW: 'pending-review',
  REJECTED: 'rejected',
  DATA_BLOCKED: 'DATA_BLOCKED'
});
const ALLOWED_STATUS = Object.freeze(Object.values(GATE_STATUS));

class SemanticIRGateRegistryError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRGateRegistryError';
    this.code = code;
    this.detail = detail;
  }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateProvenance(provenance, index) {
  if (!provenance || typeof provenance !== 'object' || Array.isArray(provenance)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_PROVENANCE_REQUIRED', 'gate 必须声明 provenance', { index });
  }
  for (const key of ['source_ref', 'source_version', 'review_note']) {
    if (!isNonEmptyString(provenance[key])) {
      throw new SemanticIRGateRegistryError('ERROR_IR_GATE_PROVENANCE_FIELD', 'gate provenance 字段缺失或为空', { index, field: key });
    }
  }
  return {
    source_ref: provenance.source_ref,
    source_version: provenance.source_version,
    review_note: provenance.review_note
  };
}

function validateFieldEquals(fieldEquals, index) {
  if (typeof fieldEquals === 'undefined') return undefined;
  if (!fieldEquals || typeof fieldEquals !== 'object' || Array.isArray(fieldEquals)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_FIELD_EQUALS_TYPE', 'field_equals 必须是对象', { index });
  }
  for (const [field, expected] of Object.entries(fieldEquals)) {
    if (!SEMANTIC_FIELDS.includes(field)) {
      throw new SemanticIRGateRegistryError('ERROR_IR_GATE_FIELD_UNKNOWN', 'gate 使用未注册 Semantic IR 字段', { index, field });
    }
    if (expected === null || typeof expected === 'undefined') {
      throw new SemanticIRGateRegistryError('ERROR_IR_GATE_EXPECTATION_UNKNOWN', 'gate 不得以 unknown/null 作为正证据', { index, field });
    }
  }
  return fieldEquals;
}

function validateGate(gate, index) {
  if (!gate || typeof gate !== 'object' || Array.isArray(gate)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_TYPE', 'gate 必须是对象', { index });
  }
  if (!isNonEmptyString(gate.gate_id)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_ID_REQUIRED', 'gate_id 必须是非空字符串', { index });
  }
  if (!CANONICAL_SYMBOLS.includes(gate.symbol)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_SYMBOL_UNKNOWN', 'gate symbol 不是 canonical token', { index, symbol: gate.symbol });
  }
  if (!ALLOWED_STATUS.includes(gate.status)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_STATUS_UNKNOWN', 'gate status 未注册', { index, status: gate.status });
  }
  if (!Array.isArray(gate.required_fields) || gate.required_fields.length === 0) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_REQUIRED_FIELDS', 'gate 必须声明至少一个 required_fields', { index });
  }
  const requiredFields = [...new Set(gate.required_fields)];
  const invalidFields = requiredFields.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (invalidFields.length) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_FIELD_UNKNOWN', 'gate required_fields 使用未注册 Semantic IR 字段', { index, invalid_fields: invalidFields });
  }
  const fieldEquals = validateFieldEquals(gate.field_equals, index);
  return {
    gate_id: gate.gate_id,
    symbol: gate.symbol,
    status: gate.status,
    required_fields: requiredFields,
    ...(fieldEquals ? { field_equals: fieldEquals } : {}),
    provenance: validateProvenance(gate.provenance, index)
  };
}

function validateGateRegistry(registry) {
  if (!registry || typeof registry !== 'object' || Array.isArray(registry)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_REGISTRY_TYPE', 'gate registry 必须是对象');
  }
  if (registry.registry_version !== GATE_REGISTRY_VERSION) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_REGISTRY_VERSION', 'gate registry version 不匹配', {
      expected: GATE_REGISTRY_VERSION,
      actual: registry.registry_version
    });
  }
  if (!isNonEmptyString(registry.registry_id) || !isNonEmptyString(registry.source_sha)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_REGISTRY_PROVENANCE', 'registry_id/source_sha 必须存在且非空');
  }
  if (!Array.isArray(registry.gates)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_REGISTRY_GATES', 'registry.gates 必须是数组');
  }
  const gates = registry.gates.map(validateGate);
  const ids = gates.map(gate => gate.gate_id);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_ID_DUPLICATE', 'gate_id 必须唯一', { gate_ids: duplicateIds });
  }
  return {
    registry_version: registry.registry_version,
    registry_id: registry.registry_id,
    source_sha: registry.source_sha,
    gates
  };
}

function compileGateRegistry(registry, options = {}) {
  const normalized = validateGateRegistry(registry);
  const allowPending = options.allow_pending_review === true;
  const selected = [];
  const rejected = [];
  const pending = [];
  const blocked = [];

  for (const gate of normalized.gates) {
    if (gate.status === GATE_STATUS.REJECTED) {
      rejected.push(gate.gate_id);
      continue;
    }
    if (gate.status === GATE_STATUS.PENDING_REVIEW && !allowPending) {
      pending.push(gate.gate_id);
      continue;
    }
    if (gate.status === GATE_STATUS.DATA_BLOCKED) {
      blocked.push(gate.gate_id);
      continue;
    }
    selected.push(gate);
  }

  const candidate_gates = selected.map(gate => ({
    symbol: gate.symbol,
    required_fields: gate.required_fields,
    ...(gate.field_equals ? { field_equals: gate.field_equals } : {})
  }));

  return {
    gate_registry_version: GATE_REGISTRY_VERSION,
    registry_id: normalized.registry_id,
    source_sha: normalized.source_sha,
    allow_pending_review: allowPending,
    candidate_gates,
    selected_gate_ids: selected.map(gate => gate.gate_id),
    pending_gate_ids: pending,
    rejected_gate_ids: rejected,
    data_blocked_gate_ids: blocked,
    data_blocked: candidate_gates.length === 0 && blocked.length > 0,
    provenance: selected.map(gate => ({ gate_id: gate.gate_id, ...gate.provenance }))
  };
}

function assertCompilationReproducible(a, b) {
  if (!isDeepStrictEqual(a, b)) {
    throw new SemanticIRGateRegistryError('ERROR_IR_GATE_COMPILATION_NONDETERMINISTIC', '相同 registry/options 编译结果必须一致');
  }
  return true;
}

module.exports = {
  GATE_REGISTRY_VERSION,
  GATE_STATUS,
  SemanticIRGateRegistryError,
  validateGateRegistry,
  compileGateRegistry,
  assertCompilationReproducible
};
