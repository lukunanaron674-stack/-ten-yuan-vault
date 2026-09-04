'use strict';
const assert = require('assert');
const check = require('./data_compile_check_v0.1.js');

let passed = 0, failed = 0;
function test(name, fn) { try { fn(); passed++; } catch (e) { failed++; console.error(`FAIL ${name}:`, e.code || e.name, e.message); } }
function clone(v) { return JSON.parse(JSON.stringify(v)); }
function throwsCode(fn, code) { assert.throws(fn, e => e && e.code === code); }

const registry = {
  schema_version: 'v0.1', parser_version: 'trigger-parser-v0.1',
  canonical_symbols: ['x并z','zx','zn','nz','nx','xn','xz','x','z','n'],
  aliases: { 'x并z':['x并z','X并Z'], zx:['zx','ZX'], z:['z','Z'], zn:['zn','ZN'], nz:['nz','NZ'], n:['n','N'], nx:['nx','NX'], xn:['xn','XN'], x:['x','X'], xz:['xz','XZ'] },
  runtime_projection: { mapping_version:'世界观_机器映射_v0.1', implemented_modules:['世界观'], data_blocked_symbols:['n','nx','xn','x','xz','x并z'], pending_review_symbols:['z'] }
};
function map(id, symbol='zn', status='candidate', suffix=id) { return { id, symbol, module:'世界观', sub_semantic:`s-${suffix}`, changed_variable:`v-${suffix}`, relation_shape:`r-${suffix}`, module_grammar:`g-${suffix}`, concrete_candidate:[], genre_context:[], genre_translation:{}, status }; }
const mappingData = { schema_version:'v0.1', mappings:[map('ZN-W-001'),map('ZX-W-001','zx'),map('Z-W-001','z','pending-review'),map('NZ-W-001','nz')] };
const mappingRegistry = { schema_version:'v0.1', projections:[{ mapping_version:'世界观_机器映射_v0.1', module:'世界观', source:'世界观_机器映射_v0.1.json', mapping_ids:['ZN-W-001','ZX-W-001','Z-W-001','NZ-W-001'] }] };

test('01 valid registry', () => assert.strictEqual(check.validateTriggerRegistry(registry,{expectedParserVersion:'trigger-parser-v0.1',expectedMappingVersion:'世界观_机器映射_v0.1'}).canonical_count,10));
test('02 missing canonical list', () => { const r=clone(registry); delete r.canonical_symbols; throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_CANONICAL_MISSING'); });
test('03 duplicate canonical', () => { const r=clone(registry); r.canonical_symbols.push('zn'); throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_CANONICAL_DUPLICATE'); });
test('04 illegal canonical', () => { const r=clone(registry); r.canonical_symbols[r.canonical_symbols.indexOf('zn')]='q'; throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_CANONICAL_ILLEGAL'); });
test('05 missing canonical token', () => { const r=clone(registry); r.canonical_symbols=r.canonical_symbols.filter(x=>x!=='nz'); throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_CANONICAL_MISMATCH'); });
test('06 aliases missing', () => { const r=clone(registry); delete r.aliases; throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_ALIASES_MISSING'); });
test('07 one alias missing', () => { const r=clone(registry); delete r.aliases.nz; throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_ALIAS_MISSING'); });
test('08 alias owner illegal', () => { const r=clone(registry); r.aliases.q=['q']; throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_ALIAS_OWNER_ILLEGAL'); });
test('09 alias collision after normalize', () => { const r=clone(registry); r.aliases.zx.push('ZN'); throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_ALIAS_COLLISION'); });
test('10 runtime projection missing', () => { const r=clone(registry); delete r.runtime_projection; throwsCode(()=>check.validateTriggerRegistry(r),'DATA_REGISTRY_RUNTIME_PROJECTION_MISSING'); });
test('11 parser version mismatch', () => throwsCode(()=>check.validateTriggerRegistry(registry,{expectedParserVersion:'wrong'}),'DATA_VERSION_PARSER_MISMATCH'));
test('12 mapping version mismatch', () => throwsCode(()=>check.validateTriggerRegistry(registry,{expectedMappingVersion:'wrong'}),'DATA_VERSION_MAPPING_MISMATCH'));
test('13 valid mapping data', () => assert.strictEqual(check.validateMappingData(mappingData).mapping_count,4));
test('14 mapping root invalid', () => throwsCode(()=>check.validateMappingData({}),'DATA_MAPPING_ROOT_INVALID'));
test('15 mapping entry invalid', () => { const d=clone(mappingData); d.mappings.push(null); throwsCode(()=>check.validateMappingData(d),'DATA_MAPPING_ENTRY_INVALID'); });
test('16 mapping missing field', () => { const d=clone(mappingData); delete d.mappings[0].module_grammar; throwsCode(()=>check.validateMappingData(d),'DATA_MAPPING_FIELD_MISSING'); });
test('17 illegal mapping symbol', () => { const d=clone(mappingData); d.mappings[0].symbol='q'; throwsCode(()=>check.validateMappingData(d),'DATA_MAPPING_SYMBOL_ILLEGAL'); });
test('18 illegal mapping status', () => { const d=clone(mappingData); d.mappings[0].status='canonical'; throwsCode(()=>check.validateMappingData(d),'DATA_MAPPING_STATUS_ILLEGAL'); });
test('19 duplicate mapping id', () => { const d=clone(mappingData); d.mappings.push(map('ZN-W-001')); throwsCode(()=>check.validateMappingData(d),'DATA_MAPPING_ID_DUPLICATE'); });
test('20 pending counted', () => assert.strictEqual(check.validateMappingData(mappingData).pending,1));
test('21 rejected counted', () => { const d=clone(mappingData); d.mappings[0].status='rejected'; assert.strictEqual(check.validateMappingData(d).rejected,1); });
test('22 duplicate structure reported not fatal', () => { const d=clone(mappingData); const x=clone(d.mappings[0]); x.id='ZN-W-099'; d.mappings.push(x); assert.strictEqual(check.validateMappingData(d).duplicate_structure_groups.length,1); });
test('23 valid mapping registry', () => assert.strictEqual(check.validateMappingRegistry(mappingRegistry,mappingData,{expectedMappingVersion:'世界观_机器映射_v0.1'}).registered_ids,4));
test('24 duplicate mapping version', () => { const r=clone(mappingRegistry); r.projections.push(clone(r.projections[0])); throwsCode(()=>check.validateMappingRegistry(r,mappingData),'DATA_MAPPING_REGISTRY_DUPLICATE'); });
test('25 target mapping version missing', () => throwsCode(()=>check.validateMappingRegistry(mappingRegistry,mappingData,{expectedMappingVersion:'missing'}),'DATA_MAPPING_REGISTRY_VERSION_MISSING'));
test('26 duplicate registry mapping id', () => { const r=clone(mappingRegistry); r.projections[0].mapping_ids.push('ZN-W-001'); throwsCode(()=>check.validateMappingRegistry(r,mappingData),'DATA_MAPPING_REGISTRY_ID_DUPLICATE'); });
test('27 dangling mapping id', () => { const r=clone(mappingRegistry); r.projections[0].mapping_ids.push('MISSING'); throwsCode(()=>check.validateMappingRegistry(r,mappingData),'DATA_MAPPING_ID_DANGLING'); });
test('28 unregistered mapping id', () => { const d=clone(mappingData); d.mappings.push(map('XN-W-001','xn')); throwsCode(()=>check.validateMappingRegistry(mappingRegistry,d),'DATA_MAPPING_ID_UNREGISTERED'); });
test('29 runtime valid canonical', () => assert.deepStrictEqual(check.validateRuntimeInput({canonical_symbols:['x并z'],mapping_version:'世界观_机器映射_v0.1',parser_version:'trigger-parser-v0.1'},registry).symbols,['x并z']));
test('30 runtime illegal symbol', () => throwsCode(()=>check.validateRuntimeInput({canonical_symbols:['q']},registry),'DATA_RUNTIME_SYMBOL_ILLEGAL'));
test('31 runtime mapping version mismatch', () => throwsCode(()=>check.validateRuntimeInput({canonical_symbols:['zn'],mapping_version:'wrong'},registry),'DATA_RUNTIME_MAPPING_VERSION_MISMATCH'));
test('33 projection coverage valid', () => { const r=check.validateProjectionCoverage(registry,mappingData); assert.deepStrictEqual(r.pending_only_symbols,['z']); });
test('34 stale blocked mapped symbol fails', () => { const r=clone(registry); r.runtime_projection.data_blocked_symbols.push('nz'); throwsCode(()=>check.validateProjectionCoverage(r,mappingData),'DATA_PROJECTION_STALE_BLOCKED_SYMBOL'); });
test('35 missing blocked unmapped symbol fails', () => { const r=clone(registry); r.runtime_projection.data_blocked_symbols=r.runtime_projection.data_blocked_symbols.filter(x=>x!=='xz'); throwsCode(()=>check.validateProjectionCoverage(r,mappingData),'DATA_PROJECTION_MISSING_BLOCKED_SYMBOL'); });
test('36 pending declaration mismatch fails', () => { const r=clone(registry); r.runtime_projection.pending_review_symbols=[]; throwsCode(()=>check.validateProjectionCoverage(r,mappingData),'DATA_PROJECTION_PENDING_MISMATCH'); });
test('32 bundle pass', () => assert.strictEqual(check.validateBundle({triggerRegistry:registry,mappingRegistry,mappingData,runtimeInput:{canonical_symbols:['zn'],mapping_version:'世界观_机器映射_v0.1',parser_version:'trigger-parser-v0.1'}}).status,'PASS'));

console.log(JSON.stringify({tests:passed+failed,passed,failed,suite:'data_compile_check_v0.1',actual_runtime:true},null,2));
if (failed) process.exit(1);
