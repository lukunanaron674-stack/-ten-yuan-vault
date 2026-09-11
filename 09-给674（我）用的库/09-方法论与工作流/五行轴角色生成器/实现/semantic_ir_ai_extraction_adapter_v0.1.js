'use strict';

const { SEMANTIC_IR_SCHEMA_VERSION, SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { extractSemanticIR, extractionState } = require('./semantic_ir_extractor_v0.1.js');

const AI_EXTRACTION_ADAPTER_VERSION = 'ten-yuan-semantic-ir-ai-extraction-adapter-v0.1';
const DEFAULT_MIN_CONFIDENCE = 0.8;

class SemanticIRAIExtractionError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'SemanticIRAIExtractionError';
    this.code = code;
    this.detail = detail;
  }
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateOptions(options) {
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_OPTIONS_TYPE', 'AI extraction options 必须是对象');
  }
  if (typeof options.provider !== 'function') {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_PROVIDER_REQUIRED', '必须提供 provider(raw_input) 提取器');
  }
  if (!isNonEmptyString(options.provider_id) || !isNonEmptyString(options.provider_version)) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_PROVIDER_PROVENANCE_REQUIRED', 'provider_id/provider_version 必须存在且非空');
  }
  const minConfidence = options.min_confidence ?? DEFAULT_MIN_CONFIDENCE;
  if (typeof minConfidence !== 'number' || !Number.isFinite(minConfidence) || minConfidence < 0 || minConfidence > 1) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_MIN_CONFIDENCE', 'min_confidence 必须是 0..1 有限数值');
  }
  return minConfidence;
}

function validateProviderResponse(response) {
  if (!response || typeof response !== 'object' || Array.isArray(response)) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_PROVIDER_RESPONSE_TYPE', 'provider 返回值必须是对象');
  }
  if (!Array.isArray(response.observations)) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_PROVIDER_OBSERVATIONS', 'provider.observations 必须是数组');
  }
}

function validateObservation(observation, index) {
  if (!observation || typeof observation !== 'object' || Array.isArray(observation)) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_OBSERVATION_TYPE', 'observation 必须是对象', { index });
  }
  if (!SEMANTIC_FIELDS.includes(observation.field)) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_OBSERVATION_FIELD_UNKNOWN', 'observation 使用未注册 Semantic IR 字段', {
      index,
      field: observation.field
    });
  }
  if (typeof observation.confidence !== 'number' || !Number.isFinite(observation.confidence) || observation.confidence < 0 || observation.confidence > 1) {
    throw new SemanticIRAIExtractionError('ERROR_IR_AI_OBSERVATION_CONFIDENCE', 'observation.confidence 必须是 0..1 有限数值', {
      index,
      field: observation.field
    });
  }
  if (observation.evidence_span !== null && typeof observation.evidence_span !== 'undefined') {
    const span = observation.evidence_span;
    if (!span || typeof span !== 'object' || Array.isArray(span) || !isNonEmptyString(span.text) || !Number.isInteger(span.start) || !Number.isInteger(span.end) || span.start < 0 || span.end < span.start) {
      throw new SemanticIRAIExtractionError('ERROR_IR_AI_EVIDENCE_SPAN_SHAPE', 'evidence_span 必须是 {text,start,end} 或 null', {
        index,
        field: observation.field
      });
    }
  }
  if (observation.value === null || typeof observation.value === 'undefined') {
    if (!isNonEmptyString(observation.unknown_reason)) {
      throw new SemanticIRAIExtractionError('ERROR_IR_AI_UNKNOWN_REASON_REQUIRED', 'unknown observation 必须声明 unknown_reason', {
        index,
        field: observation.field
      });
    }
  }
}

function assessEvidence(rawInput, observation) {
  if (observation.value === null || typeof observation.value === 'undefined') {
    return { accepted: false, reason: observation.unknown_reason };
  }
  const span = observation.evidence_span;
  if (!span) return { accepted: false, reason: 'MISSING_EVIDENCE_SPAN' };
  if (span.end > rawInput.length || rawInput.slice(span.start, span.end) !== span.text) {
    return { accepted: false, reason: 'EVIDENCE_SPAN_MISMATCH' };
  }
  return { accepted: true, reason: null };
}

async function extractSemanticIRWithAI(rawInput, options = {}) {
  const minConfidence = validateOptions(options);
  // Reuse the existing safe extractor for raw-input validation and the final IR envelope.
  extractSemanticIR(rawInput);

  const response = await options.provider({
    raw_input: rawInput,
    schema_version: SEMANTIC_IR_SCHEMA_VERSION,
    semantic_fields: [...SEMANTIC_FIELDS]
  });
  validateProviderResponse(response);

  const seen = new Set();
  const confirmedFields = {};
  const fieldEvidence = Object.fromEntries(SEMANTIC_FIELDS.map(field => [field, {
    status: 'unknown',
    confidence: null,
    evidence_span: null,
    unknown_reason: 'NOT_OBSERVED'
  }]));

  response.observations.forEach((observation, index) => {
    validateObservation(observation, index);
    if (seen.has(observation.field)) {
      throw new SemanticIRAIExtractionError('ERROR_IR_AI_OBSERVATION_DUPLICATE_FIELD', '同一字段不得重复 observation', {
        field: observation.field
      });
    }
    seen.add(observation.field);

    const evidence = assessEvidence(rawInput, observation);
    const base = {
      confidence: observation.confidence,
      evidence_span: observation.evidence_span ?? null
    };

    if (!evidence.accepted) {
      fieldEvidence[observation.field] = {
        status: 'unknown',
        ...base,
        unknown_reason: evidence.reason
      };
      return;
    }

    if (observation.confidence < minConfidence) {
      fieldEvidence[observation.field] = {
        status: 'unknown',
        ...base,
        unknown_reason: 'LOW_CONFIDENCE'
      };
      return;
    }

    confirmedFields[observation.field] = observation.value;
    fieldEvidence[observation.field] = {
      status: 'known',
      ...base,
      unknown_reason: null
    };
  });

  const ir = extractSemanticIR(rawInput, { confirmed_fields: confirmedFields });
  return {
    adapter_version: AI_EXTRACTION_ADAPTER_VERSION,
    provenance: {
      provider_id: options.provider_id,
      provider_version: options.provider_version,
      min_confidence: minConfidence
    },
    ir,
    extraction_state: extractionState(ir),
    field_evidence: fieldEvidence
  };
}

module.exports = {
  AI_EXTRACTION_ADAPTER_VERSION,
  DEFAULT_MIN_CONFIDENCE,
  SemanticIRAIExtractionError,
  extractSemanticIRWithAI
};
