'use strict';

const { SEMANTIC_FIELDS } = require('./semantic_ir_schema_v0.1.js');
const { extractSemanticIRWithAI } = require('./semantic_ir_ai_extraction_adapter_v0.1.js');

const PARAPHRASE_STABILITY_VERSION = 'semantic-ir-paraphrase-stability-v0.1';

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function fieldKnown(value) {
  return value !== null && typeof value !== 'undefined';
}

function validateFixture(fixture) {
  if (!fixture || typeof fixture !== 'object' || !Array.isArray(fixture.samples)) {
    throw new Error('ERROR_PARAPHRASE_FIXTURE_SHAPE');
  }
  if (fixture.samples.length < 20) throw new Error('ERROR_PARAPHRASE_FIXTURE_TOO_SMALL');
  const ids = new Set();
  for (const sample of fixture.samples) {
    if (!sample.id || ids.has(sample.id)) throw new Error('ERROR_PARAPHRASE_SAMPLE_ID');
    ids.add(sample.id);
    if (typeof sample.raw_input !== 'string' || !sample.raw_input.trim()) throw new Error('ERROR_PARAPHRASE_RAW_INPUT');
    if (!sample.expected_fields || typeof sample.expected_fields !== 'object' || Array.isArray(sample.expected_fields)) throw new Error('ERROR_PARAPHRASE_EXPECTED_FIELDS');
    for (const field of Object.keys(sample.expected_fields)) if (!SEMANTIC_FIELDS.includes(field)) throw new Error('ERROR_PARAPHRASE_EXPECTED_FIELD_UNKNOWN');
    for (const field of sample.must_remain_unknown || []) if (!SEMANTIC_FIELDS.includes(field)) throw new Error('ERROR_PARAPHRASE_UNKNOWN_FIELD_UNKNOWN');
  }
  return true;
}

function changedFields(left, right, fields) {
  return fields.filter(field => !deepEqual(left.fields[field], right.fields[field]));
}

async function evaluateParaphraseStability(fixture, options) {
  validateFixture(fixture);
  if (!options || typeof options.provider !== 'function') throw new Error('ERROR_PARAPHRASE_PROVIDER_REQUIRED');

  const outputs = new Map();
  let unexpectedKnownSlots = 0;
  let expectedValueChecks = 0;
  let expectedValueMismatches = 0;
  let explicitUnknownChecks = 0;
  let explicitUnknownViolations = 0;

  for (const sample of fixture.samples) {
    const out = await extractSemanticIRWithAI(sample.raw_input, {
      provider_id: options.provider_id,
      provider_version: options.provider_version,
      min_confidence: options.min_confidence,
      provider: options.provider
    });
    outputs.set(sample.id, out.ir);

    const expectedKnown = new Set(Object.keys(sample.expected_fields));
    for (const field of SEMANTIC_FIELDS) {
      const actual = out.ir.fields[field];
      if (fieldKnown(actual) && !expectedKnown.has(field)) unexpectedKnownSlots += 1;
    }
    for (const [field, expected] of Object.entries(sample.expected_fields)) {
      expectedValueChecks += 1;
      if (!deepEqual(out.ir.fields[field], expected)) expectedValueMismatches += 1;
    }
    for (const field of sample.must_remain_unknown || []) {
      explicitUnknownChecks += 1;
      if (fieldKnown(out.ir.fields[field])) explicitUnknownViolations += 1;
    }
  }

  let invariantComparisons = 0;
  let invariantDrifts = 0;
  const invariantFailures = [];
  for (const group of fixture.invariant_groups || []) {
    const baseline = outputs.get(group.sample_ids[0]);
    for (const sampleId of group.sample_ids.slice(1)) {
      const current = outputs.get(sampleId);
      for (const field of group.invariant_fields) {
        invariantComparisons += 1;
        if (!deepEqual(baseline.fields[field], current.fields[field])) {
          invariantDrifts += 1;
          invariantFailures.push({ group_id: group.group_id, sample_id: sampleId, field, baseline: baseline.fields[field], actual: current.fields[field] });
        }
      }
    }
  }

  let pairFieldChecks = 0;
  let pairOvermutations = 0;
  let pairUnderreactions = 0;
  const pairFailures = [];
  for (const pair of fixture.minimal_pairs || []) {
    const left = outputs.get(pair.left);
    const right = outputs.get(pair.right);
    const actualDelta = changedFields(left, right, pair.compare_fields);
    const expectedDelta = new Set(pair.expected_delta_fields);
    pairFieldChecks += pair.compare_fields.length;
    const over = actualDelta.filter(field => !expectedDelta.has(field));
    const under = pair.expected_delta_fields.filter(field => !actualDelta.includes(field));
    pairOvermutations += over.length;
    pairUnderreactions += under.length;
    if (over.length || under.length) pairFailures.push({ pair_id: pair.pair_id, actual_delta_fields: actualDelta, expected_delta_fields: pair.expected_delta_fields, overmutation_fields: over, underreaction_fields: under });
  }

  const sampleSlots = fixture.samples.length * SEMANTIC_FIELDS.length;
  const status = unexpectedKnownSlots === 0 && expectedValueMismatches === 0 && explicitUnknownViolations === 0 && invariantDrifts === 0 && pairOvermutations === 0 && pairUnderreactions === 0 ? 'PASS' : 'FAIL';

  return {
    suite_version: PARAPHRASE_STABILITY_VERSION,
    status,
    samples: fixture.samples.length,
    invariant_groups: (fixture.invariant_groups || []).length,
    minimal_pairs: (fixture.minimal_pairs || []).length,
    metrics: {
      ir_field_guess_rate: sampleSlots ? unexpectedKnownSlots / sampleSlots : 0,
      expected_value_mismatch_rate: expectedValueChecks ? expectedValueMismatches / expectedValueChecks : 0,
      paraphrase_field_drift_rate: invariantComparisons ? invariantDrifts / invariantComparisons : 0,
      minimal_pair_overmutation_rate: pairFieldChecks ? pairOvermutations / pairFieldChecks : 0,
      minimal_pair_underreaction_rate: pairFieldChecks ? pairUnderreactions / pairFieldChecks : 0,
      unknown_preservation_rate: explicitUnknownChecks ? 1 - (explicitUnknownViolations / explicitUnknownChecks) : 1,
      unknown_silent_swallow: explicitUnknownViolations
    },
    counts: {
      unexpected_known_slots: unexpectedKnownSlots,
      expected_value_checks: expectedValueChecks,
      expected_value_mismatches: expectedValueMismatches,
      invariant_comparisons: invariantComparisons,
      invariant_drifts: invariantDrifts,
      pair_field_checks: pairFieldChecks,
      pair_overmutations: pairOvermutations,
      pair_underreactions: pairUnderreactions,
      explicit_unknown_checks: explicitUnknownChecks,
      explicit_unknown_violations: explicitUnknownViolations
    },
    failures: { invariant: invariantFailures, minimal_pair: pairFailures }
  };
}

module.exports = { PARAPHRASE_STABILITY_VERSION, validateFixture, evaluateParaphraseStability };
