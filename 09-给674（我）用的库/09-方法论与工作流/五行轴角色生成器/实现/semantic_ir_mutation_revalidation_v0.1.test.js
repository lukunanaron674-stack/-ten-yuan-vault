'use strict';
const assert = require('assert');
const { createSemanticIR } = require('./semantic_ir_schema_v0.1.js');
const { revalidateMutationCandidate, MUTATION_REVALIDATION_VERSION } = require('./semantic_ir_mutation_revalidation_v0.1.js');

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

console.log(JSON.stringify({ suite:'semantic_ir_mutation_revalidation_v0.1', static_tests:14, actual_runtime_passed:passed, actual_runtime_failed:14-passed }));
