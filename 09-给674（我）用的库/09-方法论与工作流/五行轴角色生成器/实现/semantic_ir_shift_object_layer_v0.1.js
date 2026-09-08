'use strict';
const { validateSemanticIRShape } = require('./semantic_ir_schema_v0.1.js');
const { validateMutationCandidate, MUTATION_STATUS } = require('./semantic_ir_mutation_contract_v0.1.js');

const SHIFT_OBJECT_LAYER_VERSION = 'ten-yuan-z-shift-object-layer-v0.1';
const SHIFT_OBJECT_LAYER_STATUS = Object.freeze({
  READY: 'READY',
  NEEDS_MORE_STRUCTURE: 'NEEDS_MORE_STRUCTURE',
  REJECTED_RESKIN: 'REJECTED_RESKIN',
  REJECTED_RETRIEVAL_ONLY: 'REJECTED_RETRIEVAL_ONLY',
  VALIDATION_FAILED: 'VALIDATION_FAILED'
});

class ShiftObjectLayerError extends Error {
  constructor(code, message, detail = {}) { super(message); this.name='ShiftObjectLayerError'; this.code=code; this.detail=detail; }
}

function clone(v){ return JSON.parse(JSON.stringify(v)); }

function shiftObjectLayer(sourceIR, options = {}) {
  validateSemanticIRShape(sourceIR);
  if (!options || typeof options !== 'object' || Array.isArray(options)) throw new ShiftObjectLayerError('ERROR_SHIFT_OBJECT_LAYER_OPTIONS_TYPE','options 必须是对象');
  const mode = options.mode || 'structural_mutation';
  if (mode === 'reskin') return { operator_version:SHIFT_OBJECT_LAYER_VERSION, status:SHIFT_OBJECT_LAYER_STATUS.REJECTED_RESKIN, candidate_ir:null };
  if (mode === 'retrieval_only') return { operator_version:SHIFT_OBJECT_LAYER_VERSION, status:SHIFT_OBJECT_LAYER_STATUS.REJECTED_RETRIEVAL_ONLY, candidate_ir:null };
  if (mode !== 'structural_mutation') throw new ShiftObjectLayerError('ERROR_SHIFT_OBJECT_LAYER_MODE','未知 mode',{mode});
  const targetLayer = options.target_object_layer;
  if (targetLayer === null || typeof targetLayer === 'undefined' || (typeof targetLayer === 'string' && targetLayer.trim()==='')) {
    return { operator_version:SHIFT_OBJECT_LAYER_VERSION, status:SHIFT_OBJECT_LAYER_STATUS.NEEDS_MORE_STRUCTURE, reason:'target_object_layer_required', candidate_ir:null };
  }
  if (sourceIR.fields.object_layer === null || typeof sourceIR.fields.object_layer === 'undefined') {
    return { operator_version:SHIFT_OBJECT_LAYER_VERSION, status:SHIFT_OBJECT_LAYER_STATUS.NEEDS_MORE_STRUCTURE, reason:'source_object_layer_unknown', candidate_ir:null };
  }
  const candidate = clone(sourceIR);
  candidate.fields.object_layer = targetLayer;
  const frozenFields = ['actor','object','current_window','changed_variable','relation_source','relation_shape','decision_right','path_set','reentry_right','future_endpoint','reality_anchor'];
  const validationHook = typeof options.validation_hook === 'function'
    ? options.validation_hook
    : (ir) => ({ pass: ir.fields.object_layer !== null && typeof ir.fields.object_layer !== 'undefined', stage:'reinterpret_required' });
  const contract = validateMutationCandidate(sourceIR, candidate, {
    frozen_fields: frozenFields,
    mutated_fields: ['object_layer'],
    validation_hook: validationHook
  });
  const status = contract.status === MUTATION_STATUS.READY ? SHIFT_OBJECT_LAYER_STATUS.READY
    : contract.status === MUTATION_STATUS.VALIDATION_FAILED ? SHIFT_OBJECT_LAYER_STATUS.VALIDATION_FAILED
    : SHIFT_OBJECT_LAYER_STATUS.NEEDS_MORE_STRUCTURE;
  return { operator_version:SHIFT_OBJECT_LAYER_VERSION, status, candidate_ir:candidate, contract };
}

module.exports = { SHIFT_OBJECT_LAYER_VERSION, SHIFT_OBJECT_LAYER_STATUS, ShiftObjectLayerError, shiftObjectLayer };