'use strict';
const assert = require('assert');
const { createSemanticIR } = require('./semantic_ir_schema_v0.1.js');
const { revalidateMutationCandidate, MUTATION_REVALIDATION_VERSION, GATE_SOURCE_STATUS } = require('./semantic_ir_mutation_revalidation_v0.1.js');
const { GATE_REGISTRY_VERSION } = require('./semantic_ir_gate_registry_v0.1.js');

let passed = 0;
function test(name, fn) { try { fn(); passed += 1; console.log(`PASS ${name}`); } catch (error) { console.error(`FAIL ${name}`); throw error; } }
function candidate(layer='organization') {
  const ir = createSemanticIR('mutation candidate');
  Object.assign(ir.fields, { actor:'A', object:'approval', object_layer:layer, current_window:'current', changed_variable:'decision_right', relation_source:'institution', relation_shape:'delegated', decision_right:'external', path_set:'open', reentry_right:'conditional', future_endpoint:'approved', reality_anchor:'observed' });
  return ir;
}
const frozen = ['actor','object','current_window','changed_variable','relation_source','relation_shape','decision_right','path_set','reentry_right','future_endpoint','reality_anchor'];
const confirmed = candidate().fields;
const gates = [{ symbol:'nz', required_fields:['object_layer','reentry_right'] }];
const reviews = [{ neighbor_symbol:'nx', outcome:'EXCLUDED', checked_fields:['object_layer','reentry_right'], reason:'object layer and reentry distinguish candidate' }];
function opts(extra={}) { return { frozen_fields:frozen, mutated_fields:['object_layer'], confirmed_fields:confirmed, candidate_gates:gates, nearest_neighbor_reviews:reviews, ...extra }; }

const layerSensitiveGates = [
  { symbol:'nx', required_fields:['actor','object_layer','changed_variable'], field_equals:{ object_layer:'personal' } },
  { symbol:'xn', required_fields:['actor','object_layer','changed_variable'], field_equals:{ object_layer:'organization' } }
];
const layerSensitiveReviews = [{ neighbor_symbol:'nx', outcome:'EXCLUDED', checked_fields:['object_layer','changed_variable'], reason:'mutated object_layer selects organization-level structure' }];

function registry(gatesOverride) {
  return {
    registry_version: GATE_REGISTRY_VERSION,
    registry_id: 'mutation-revalidation-fixture-v0.1',
    source_sha: 'fixture-source-sha',
    gates: gatesOverride ?? [
      {
        gate_id:'xn-organization', symbol:'xn', status:'production',
        required_fields:['actor','object_layer','changed_variable'],
        field_equals:{ object_layer:'organization' },
        provenance:{ source_ref:'fixture/organization', source_version:'v0.1', review_note:'test-only structural fixture' }
      }
    ]
  };
}
function registryOpts(registryValue, extra={}) {
  return {
    frozen_fields:frozen,
    mutated_fields:['object_layer'],
    confirmed_fields:confirmed,
    gate_registry:registryValue,
    nearest_neighbor_reviews:layerSensitiveReviews,
    ...extra
  };
}

test('version stable', () => assert.strictEqual(MUTATION_REVALIDATION_VERSION, 'ten-yuan-semantic-ir-mutation-revalidation-v0.1'));
test('full revalidation passes only after reinterpretation decision and NN exclusion', () => { const r=revalidateMutationCandidate(candidate(),'生成后的结构候选',opts()); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.stage,'complete'); assert.strictEqual(r.symbol,'nz'); assert.strictEqual(r.reinterpretation.status,'PASS'); assert.strictEqual(r.decision.status,'symbol'); assert.strictEqual(r.nearest_neighbor.status,'EXCLUDED'); });
test('old symbol inheritance is hard rejected', () => assert.throws(()=>revalidateMutationCandidate(candidate(),'候选',opts({previous_symbol:'nx'})), e=>e.code==='ERROR_IR_REVALIDATE_SYMBOL_INHERITANCE_FORBIDDEN'));
test('surface words cannot replace confirmed structure', () => { const r=revalidateMutationCandidate(candidate(),'赛博医生悲伤地说这是宿命',{...opts(),confirmed_fields:{}}); assert.strictEqual(r.status,'NEEDS_MORE_STRUCTURE'); assert.strictEqual(r.stage,'reinterpretation'); });
test('mutated object layer mismatch blocks before decision', () => { const wrong={...confirmed,object_layer:'person'}; const r=revalidateMutationCandidate(candidate(),'候选',{...opts(),confirmed_fields:wrong}); assert.strictEqual(r.status,'MISMATCH'); assert.strictEqual(r.stage,'reinterpretation'); assert.strictEqual(r.decision,null); });
test('frozen field drift blocks before decision', () => { const wrong={...confirmed,actor:'B'}; const r=revalidateMutationCandidate(candidate(),'候选',{...opts(),confirmed_fields:wrong}); assert.strictEqual(r.status,'MISMATCH'); assert.ok(r.reinterpretation.mismatched_fields.includes('actor')); });
test('ambiguous structural gates propagate AMBIGUOUS', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({candidate_gates:[...gates,{symbol:'nx',required_fields:['object_layer','reentry_right']}]})); assert.strictEqual(r.status,'AMBIGUOUS'); assert.strictEqual(r.stage,'decision'); });
test('missing decision structure propagates NEEDS_MORE_STRUCTURE', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({candidate_gates:[{symbol:'nz',required_fields:['object_layer','future_endpoint'] }], confirmed_fields:{...confirmed,future_endpoint:null}})); assert.strictEqual(r.status,'NEEDS_MORE_STRUCTURE'); assert.strictEqual(r.stage,'reinterpretation'); });
test('no nearest neighbor review cannot pass silently', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({nearest_neighbor_reviews:[]})); assert.strictEqual(r.status,'NEEDS_MORE_STRUCTURE'); assert.strictEqual(r.stage,'nearest_neighbor'); });
test('nearest neighbor not excluded propagates AMBIGUOUS', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({nearest_neighbor_reviews:[{neighbor_symbol:'nx',outcome:'NOT_EXCLUDED',checked_fields:['object_layer']}]})); assert.strictEqual(r.status,'AMBIGUOUS'); assert.strictEqual(r.stage,'nearest_neighbor'); });
test('reinterpretation DATA_BLOCKED propagates', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({data_blocked:true,block_reason:'XN_UNAVAILABLE'})); assert.strictEqual(r.status,'DATA_BLOCKED'); assert.strictEqual(r.stage,'reinterpretation'); });
test('decision DATA_BLOCKED propagates', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({decision_data_blocked:true})); assert.strictEqual(r.status,'DATA_BLOCKED'); assert.strictEqual(r.stage,'decision'); });
test('x并z remains a single canonical decision token', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts({candidate_gates:[{symbol:'x并z',required_fields:['object_layer']}],nearest_neighbor_reviews:[{neighbor_symbol:'x',outcome:'EXCLUDED',checked_fields:['object_layer']}]})); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.symbol,'x并z'); });
test('explicit fake multi x+z is rejected by decision', () => assert.throws(()=>revalidateMutationCandidate(candidate(),'候选',opts({candidate_gates:[{symbol:'x+z',required_fields:['object_layer']}]})), e=>e.code==='ERROR_IR_DECISION_SYMBOL_UNKNOWN'));
test('mutation revalidation uses object_layer value to activate a different candidate', () => { const r=revalidateMutationCandidate(candidate('organization'),'生成后的组织审批结构',opts({candidate_gates:layerSensitiveGates,nearest_neighbor_reviews:layerSensitiveReviews})); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.symbol,'xn'); assert.strictEqual(r.decision.decision_version,'ten-yuan-semantic-ir-value-predicate-v0.1'); });
test('presence-identical candidates stay ambiguous when no value predicate is supplied', () => { const samePresence=[{symbol:'nx',required_fields:['actor','object_layer','changed_variable']},{symbol:'xn',required_fields:['actor','object_layer','changed_variable']}]; const r=revalidateMutationCandidate(candidate(),'候选',opts({candidate_gates:samePresence})); assert.strictEqual(r.status,'AMBIGUOUS'); assert.deepStrictEqual(r.decision.candidates,['nx','xn']); });
test('unknown value-predicate field cannot be silently guessed at decision stage', () => { const confirmedWithoutWindow={...confirmed,current_window:null}; const frozenWithoutWindow=frozen.filter(field=>field!=='current_window'); const r=revalidateMutationCandidate(candidate(),'赛博医生在当前窗口审批',{...opts(),frozen_fields:frozenWithoutWindow,confirmed_fields:confirmedWithoutWindow,candidate_gates:[{symbol:'xn',required_fields:['actor','object_layer'],field_equals:{current_window:'current'}}]}); assert.strictEqual(r.status,'NEEDS_MORE_STRUCTURE'); assert.strictEqual(r.stage,'decision'); assert.ok(r.decision.missing_fields.includes('current_window')); });
test('surface wording cannot override confirmed mutated object_layer value', () => { const r=revalidateMutationCandidate(candidate('organization'),'个人同意层，悲伤医生，赛博都市',{...opts(),candidate_gates:layerSensitiveGates,nearest_neighbor_reviews:layerSensitiveReviews}); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.symbol,'xn'); });

test('registry-backed mutation revalidation carries verified provenance', () => { const r=revalidateMutationCandidate(candidate('organization'),'组织审批结构',registryOpts(registry())); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.symbol,'xn'); assert.strictEqual(r.gate_source.status,GATE_SOURCE_STATUS.REGISTRY_VERIFIED); assert.strictEqual(r.gate_source.registry_id,'mutation-revalidation-fixture-v0.1'); assert.deepStrictEqual(r.gate_source.selected_gate_ids,['xn-organization']); assert.strictEqual(r.gate_source.provenance[0].source_ref,'fixture/organization'); });
test('raw candidate_gates compatibility path is explicitly unverified', () => { const r=revalidateMutationCandidate(candidate(),'候选',opts()); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.gate_source.status,GATE_SOURCE_STATUS.UNVERIFIED_GATE_SOURCE); });
test('gate registry and raw candidate_gates cannot be supplied together', () => assert.throws(()=>revalidateMutationCandidate(candidate(),'候选',{...registryOpts(registry()),candidate_gates:gates}), e=>e.code==='ERROR_IR_REVALIDATE_GATE_SOURCE_CONFLICT'));
test('pending-review gate stays out of production revalidation by default', () => { const pending=registry([{ gate_id:'xn-pending', symbol:'xn', status:'pending-review', required_fields:['object_layer'], field_equals:{object_layer:'organization'}, provenance:{source_ref:'fixture/pending',source_version:'v0.1',review_note:'pending only'} }]); const r=revalidateMutationCandidate(candidate(),'候选',registryOpts(pending)); assert.strictEqual(r.status,'NEEDS_MORE_STRUCTURE'); assert.strictEqual(r.stage,'decision'); assert.deepStrictEqual(r.gate_source.pending_gate_ids,['xn-pending']); });
test('pending-review gate requires explicit opt-in', () => { const pending=registry([{ gate_id:'xn-pending', symbol:'xn', status:'pending-review', required_fields:['object_layer'], field_equals:{object_layer:'organization'}, provenance:{source_ref:'fixture/pending',source_version:'v0.1',review_note:'pending only'} }]); const r=revalidateMutationCandidate(candidate(),'候选',registryOpts(pending,{allow_pending_review:true})); assert.strictEqual(r.status,'PASS'); assert.strictEqual(r.symbol,'xn'); assert.deepStrictEqual(r.gate_source.selected_gate_ids,['xn-pending']); });
test('rejected gate never enters mutation decision pool', () => { const rejected=registry([{ gate_id:'xn-rejected', symbol:'xn', status:'rejected', required_fields:['object_layer'], field_equals:{object_layer:'organization'}, provenance:{source_ref:'fixture/rejected',source_version:'v0.1',review_note:'rejected'} }]); const r=revalidateMutationCandidate(candidate(),'候选',registryOpts(rejected)); assert.strictEqual(r.status,'NEEDS_MORE_STRUCTURE'); assert.deepStrictEqual(r.gate_source.rejected_gate_ids,['xn-rejected']); });
test('DATA_BLOCKED registry gate propagates explicitly at decision stage', () => { const blocked=registry([{ gate_id:'xn-blocked', symbol:'xn', status:'DATA_BLOCKED', required_fields:['object_layer'], field_equals:{object_layer:'organization'}, provenance:{source_ref:'fixture/blocked',source_version:'v0.1',review_note:'blocked data'} }]); const r=revalidateMutationCandidate(candidate(),'候选',registryOpts(blocked)); assert.strictEqual(r.status,'DATA_BLOCKED'); assert.strictEqual(r.stage,'decision'); assert.deepStrictEqual(r.gate_source.data_blocked_gate_ids,['xn-blocked']); });

const total = 24;
console.log(JSON.stringify({ suite:'semantic_ir_mutation_revalidation_v0.1', static_tests:total, actual_runtime_passed:passed, actual_runtime_failed:total-passed }));
