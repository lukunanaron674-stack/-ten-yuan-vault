'use strict';

const { SEMANTIC_FIELDS, validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');

const MUTATION_CONTRACT_VERSION = 'ten-yuan-semantic-ir-mutation-contract-v0.1';
const MUTATION_STATUS = Object.freeze({
  READY: 'READY',
  REJECTED_NO_STRUCTURAL_CHANGE: 'REJECTED_NO_STRUCTURAL_CHANGE',
  VALIDATION_FAILED: 'VALIDATION_FAILED'
});

class SemanticIRMutationContractError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRMutationContractError';
    this.code = code;
    this.detail = detail;
  }
}

function assertFieldList(name, fields, { allowEmpty = false } = {}) {
  if (!Array.isArray(fields)) {
    throw new SemanticIRMutationContractError(`ERROR_IR_MUTATION_${name.toUpperCase()}_TYPE`, `${name} 必须是数组`);
  }
  const unique = [...new Set(fields)];
  if (unique.length !== fields.length) {
    throw new SemanticIRMutationContractError(`ERROR_IR_MUTATION_${name.toUpperCase()}_DUPLICATE`, `${name} 不得包含重复字段`);
  }
  const unknown = unique.filter(field => !SEMANTIC_FIELDS.includes(field));
  if (unknown.length) {
    throw new SemanticIRMutationContractError(`ERROR_IR_MUTATION_${name.toUpperCase()}_UNKNOWN`, `${name} 只能引用 Semantic IR 固定字段`, { unknown });
  }
  if (!allowEmpty && unique.length === 0) {
    throw new SemanticIRMutationContractError(`ERROR_IR_MUTATION_${name.toUpperCase()}_EMPTY`, `${name} 不得为空`);
  }
  return unique;
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function validateMutationSpec(spec) {
  if (!spec || typeof spec !== 'object' || Array.isArray(spec)) {
    throw new SemanticIRMutationContractError('ERROR_IR_MUTATION_SPEC_TYPE', 'mutation spec 必须是对象');
  }
  const frozenFields = assertFieldList('frozen_fields', spec.frozen_fields, { allowEmpty: true });
  const mutatedFields = assertFieldList('mutated_fields', spec.mutated_fields);
  const overlap = frozenFields.filter(field => mutatedFields.includes(field));
  if (overlap.length) {
    throw new SemanticIRMutationContractError('ERROR_IR_MUTATION_FIELD_OVERLAP', 'frozen_fields 与 mutated_fields 不得重叠', { overlap });
  }
  if (typeof spec.validation_hook !== 'function') {
    throw new SemanticIRMutationContractError('ERROR_IR_MUTATION_VALIDATION_HOOK', 'validation_hook 必须是可执行函数');
  }
  return { frozen_fields: frozenFields, mutated_fields: mutatedFields, validation_hook: spec.validation_hook };
}

function validateMutationCandidate(sourceIR, candidateIR, spec) {
  validateSemanticIRShape(sourceIR);
  validateSemanticIRShape(candidateIR);
  const normalized = validateMutationSpec(spec);

  const frozenDrift = normalized.frozen_fields.filter(field => !deepEqual(sourceIR.fields[field], candidateIR.fields[field]));
  if (frozenDrift.length) {
    throw new SemanticIRMutationContractError('ERROR_IR_MUTATION_FROZEN_DRIFT', 'frozen_fields 发生漂移', { frozen_drift: frozenDrift });
  }

  const unauthorizedDrift = SEMANTIC_FIELDS.filter(field =>
    !normalized.mutated_fields.includes(field) &&
    !deepEqual(sourceIR.fields[field], candidateIR.fields[field])
  );
  if (unauthorizedDrift.length) {
    throw new SemanticIRMutationContractError('ERROR_IR_MUTATION_UNAUTHORIZED_DRIFT', 'mutated_fields 之外出现结构漂移', { unauthorized_drift: unauthorizedDrift });
  }

  const changed = normalized.mutated_fields.filter(field => !deepEqual(sourceIR.fields[field], candidateIR.fields[field]));
  if (changed.length === 0) {
    return {
      contract_version: MUTATION_CONTRACT_VERSION,
      status: MUTATION_STATUS.REJECTED_NO_STRUCTURAL_CHANGE,
      changed_fields: [],
      frozen_fields: normalized.frozen_fields,
      mutated_fields: normalized.mutated_fields,
      validation: null
    };
  }

  const validation = normalized.validation_hook(candidateIR, {
    source_ir: sourceIR,
    frozen_fields: normalized.frozen_fields,
    mutated_fields: normalized.mutated_fields,
    changed_fields: changed
  });
  const validationPass = validation === true || (validation && typeof validation === 'object' && validation.pass === true);

  return {
    contract_version: MUTATION_CONTRACT_VERSION,
    status: validationPass ? MUTATION_STATUS.READY : MUTATION_STATUS.VALIDATION_FAILED,
    changed_fields: changed,
    frozen_fields: normalized.frozen_fields,
    mutated_fields: normalized.mutated_fields,
    validation
  };
}

module.exports = {
  MUTATION_CONTRACT_VERSION,
  MUTATION_STATUS,
  SemanticIRMutationContractError,
  validateMutationSpec,
  validateMutationCandidate
};
