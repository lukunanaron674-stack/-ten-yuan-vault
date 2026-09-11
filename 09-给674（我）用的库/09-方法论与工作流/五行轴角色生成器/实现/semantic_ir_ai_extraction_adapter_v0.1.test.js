'use strict';

const assert = require('assert');
const { createUnknownFields } = require('./semantic_ir_schema_v0.1.js');
const { extractSemanticIRWithAI, AI_EXTRACTION_ADAPTER_VERSION } = require('./semantic_ir_ai_extraction_adapter_v0.1.js');

let passed = 0;
let failed = 0;
async function test(name, fn) {
  try { await fn(); passed += 1; }
  catch (error) { failed += 1; console.error(`FAIL ${name}`); console.error(error && error.stack ? error.stack : error); }
}
async function expectCode(fn, code) {
  let caught = null;
  try { await fn(); } catch (error) { caught = error; }
  assert.ok(caught, `expected ${code}`);
  assert.strictEqual(caught.code, code);
}
function provider(observations) { return async () => ({ observations }); }

(async () => {
  await test('high-confidence evidence-backed actor is accepted', async () => {
    const raw = '林澈请求顾问帮助取得岗位。';
    const out = await extractSemanticIRWithAI(raw, {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'actor', value: '林澈', confidence: 0.97, evidence_span: { text: '林澈', start: 0, end: 2 } }
      ])
    });
    assert.strictEqual(out.adapter_version, AI_EXTRACTION_ADAPTER_VERSION);
    assert.strictEqual(out.ir.fields.actor, '林澈');
    assert.strictEqual(out.field_evidence.actor.status, 'known');
  });

  await test('multiple backed observations yield partial IR', async () => {
    const raw = '林澈请求顾问帮助取得岗位。';
    const out = await extractSemanticIRWithAI(raw, {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'actor', value: '林澈', confidence: 0.95, evidence_span: { text: '林澈', start: 0, end: 2 } },
        { field: 'relation_source', value: 'external-advisor-help', confidence: 0.9, evidence_span: { text: '顾问帮助', start: 4, end: 8 } }
      ])
    });
    assert.deepStrictEqual(out.extraction_state.known_fields, ['actor', 'relation_source']);
  });

  await test('unobserved fields stay explicit unknown', async () => {
    const out = await extractSemanticIRWithAI('测试文本', {
      provider_id: 'stub', provider_version: '1', provider: provider([])
    });
    assert.deepStrictEqual(out.ir.fields, createUnknownFields());
    assert.strictEqual(out.field_evidence.object.unknown_reason, 'NOT_OBSERVED');
  });

  await test('low confidence never populates IR', async () => {
    const raw = '林澈请求帮助';
    const out = await extractSemanticIRWithAI(raw, {
      provider_id: 'stub', provider_version: '1', min_confidence: 0.8, provider: provider([
        { field: 'actor', value: '林澈', confidence: 0.61, evidence_span: { text: '林澈', start: 0, end: 2 } }
      ])
    });
    assert.strictEqual(out.ir.fields.actor, null);
    assert.strictEqual(out.field_evidence.actor.unknown_reason, 'LOW_CONFIDENCE');
  });

  await test('known value without evidence stays unknown', async () => {
    const out = await extractSemanticIRWithAI('林澈请求帮助', {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'actor', value: '林澈', confidence: 0.99, evidence_span: null }
      ])
    });
    assert.strictEqual(out.ir.fields.actor, null);
    assert.strictEqual(out.field_evidence.actor.unknown_reason, 'MISSING_EVIDENCE_SPAN');
  });

  await test('mismatched evidence span stays unknown', async () => {
    const out = await extractSemanticIRWithAI('林澈请求帮助', {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'actor', value: '林澈', confidence: 0.99, evidence_span: { text: '顾问', start: 0, end: 2 } }
      ])
    });
    assert.strictEqual(out.ir.fields.actor, null);
    assert.strictEqual(out.field_evidence.actor.unknown_reason, 'EVIDENCE_SPAN_MISMATCH');
  });

  await test('provider may explicitly mark a field unknown with reason', async () => {
    const out = await extractSemanticIRWithAI('还有一条回去的路', {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'reentry_right', value: null, confidence: 0.55, evidence_span: null, unknown_reason: 'REALITY_ELIGIBILITY_UNPROVEN' }
      ])
    });
    assert.strictEqual(out.ir.fields.reentry_right, null);
    assert.strictEqual(out.field_evidence.reentry_right.unknown_reason, 'REALITY_ELIGIBILITY_UNPROVEN');
  });

  await test('keyword lure with no structural observation guesses nothing', async () => {
    const out = await extractSemanticIRWithAI('宿命中的国王最终死亡，无路可走', {
      provider_id: 'stub', provider_version: '1', provider: provider([])
    });
    assert.deepStrictEqual(out.ir.fields, createUnknownFields());
  });

  await test('symbol field injection hard fails', async () => {
    await expectCode(() => extractSemanticIRWithAI('测试文本', {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'symbol', value: 'xz', confidence: 1, evidence_span: { text: '测试', start: 0, end: 2 } }
      ])
    }), 'ERROR_IR_AI_OBSERVATION_FIELD_UNKNOWN');
  });

  await test('duplicate field observations hard fail', async () => {
    await expectCode(() => extractSemanticIRWithAI('林澈', {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'actor', value: '林澈', confidence: 1, evidence_span: { text: '林澈', start: 0, end: 2 } },
        { field: 'actor', value: '林澈', confidence: 1, evidence_span: { text: '林澈', start: 0, end: 2 } }
      ])
    }), 'ERROR_IR_AI_OBSERVATION_DUPLICATE_FIELD');
  });

  await test('invalid confidence hard fails', async () => {
    await expectCode(() => extractSemanticIRWithAI('林澈', {
      provider_id: 'stub', provider_version: '1', provider: provider([
        { field: 'actor', value: '林澈', confidence: 1.2, evidence_span: { text: '林澈', start: 0, end: 2 } }
      ])
    }), 'ERROR_IR_AI_OBSERVATION_CONFIDENCE');
  });

  await test('missing provider hard fails', async () => {
    await expectCode(() => extractSemanticIRWithAI('测试文本', {
      provider_id: 'stub', provider_version: '1'
    }), 'ERROR_IR_AI_PROVIDER_REQUIRED');
  });

  await test('anonymous provider hard fails provenance gate', async () => {
    await expectCode(() => extractSemanticIRWithAI('测试文本', {
      provider: provider([]), provider_version: '1'
    }), 'ERROR_IR_AI_PROVIDER_PROVENANCE_REQUIRED');
  });

  await test('raw_input is preserved exactly', async () => {
    const raw = '  林澈 请求帮助  ';
    const out = await extractSemanticIRWithAI(raw, {
      provider_id: 'stub', provider_version: '1', provider: provider([])
    });
    assert.strictEqual(out.ir.raw_input, raw);
  });

  await test('malformed provider response hard fails', async () => {
    await expectCode(() => extractSemanticIRWithAI('测试文本', {
      provider_id: 'stub', provider_version: '1', provider: async () => ({})
    }), 'ERROR_IR_AI_PROVIDER_OBSERVATIONS');
  });

  console.log(JSON.stringify({
    suite: 'semantic_ir_ai_extraction_adapter_v0.1',
    tests: passed + failed,
    passed,
    failed,
    target: 'P0 natural-language -> evidence-backed Semantic IR adapter; confidence/evidence gated; no symbol guessing'
  }));
  if (failed > 0) process.exit(1);
})();
