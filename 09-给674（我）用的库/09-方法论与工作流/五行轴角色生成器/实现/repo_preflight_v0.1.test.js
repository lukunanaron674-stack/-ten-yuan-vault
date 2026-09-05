'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const preflight = require('./repo_preflight_v0.1.js');

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log(`PASS ${name}`); }
  catch (err) { failed++; console.error(`FAIL ${name}: ${err.stack || err}`); }
}

function fixture() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'five-axis-preflight-'));
  const trigger = {
    schema_version:'v0.1', parser_version:'trigger-parser-v0.1',
    canonical_symbols:['x并z','zx','zn','nz','nx','xn','xz','x','z','n'],
    aliases:{'x并z':['x并z'],'zx':['zx'],'zn':['zn'],'nz':['nz'],'nx':['nx'],'xn':['xn'],'xz':['xz'],'x':['x'],'z':['z'],'n':['n']},
    runtime_projection:{mapping_version:'世界观_机器映射_v0.1',implemented_modules:['世界观'],data_blocked_symbols:['x并z','zn','nz','nx','xn','xz','x','z','n'],pending_review_symbols:[]}
  };
  const mapping = {schema_version:'v0.1',mappings:[{
    id:'ZX-W-001',symbol:'zx',module:'世界观',sub_semantic:'s',changed_variable:'v',relation_shape:'r',module_grammar:'g',concrete_candidate:['c'],genre_context:['default'],genre_translation:{},status:'candidate'
  }]};
  const registry = {schema_version:'v0.1',projections:[{mapping_version:'世界观_机器映射_v0.1',module:'世界观',source:'世界观_机器映射_v0.1.json',mapping_ids:['ZX-W-001']}]};
  fs.writeFileSync(path.join(dir,'trigger_registry_v0.1.json'), JSON.stringify(trigger));
  fs.writeFileSync(path.join(dir,'mapping_registry_v0.1.json'), JSON.stringify(registry));
  fs.writeFileSync(path.join(dir,'世界观_机器映射_v0.1.json'), JSON.stringify(mapping));
  return {dir,trigger,mapping,registry};
}

test('loads the three real-named registry/mapping files', () => {
  const f = fixture();
  const b = preflight.loadRepoBundle({dataDir:f.dir});
  assert.equal(b.mappingData.mappings[0].id,'ZX-W-001');
});

test('valid fixture passes repo preflight', () => {
  const f = fixture();
  const out = preflight.runRepoPreflight({dataDir:f.dir});
  assert.equal(out.status,'PASS');
  assert.equal(out.summary.registry.canonical_count,10);
});

test('missing file fails closed', () => {
  const f = fixture();
  fs.unlinkSync(path.join(f.dir,'mapping_registry_v0.1.json'));
  assert.throws(() => preflight.runRepoPreflight({dataDir:f.dir}), e => e.code === 'PREFLIGHT_FILE_READ_ERROR');
});

test('malformed JSON fails closed', () => {
  const f = fixture();
  fs.writeFileSync(path.join(f.dir,'trigger_registry_v0.1.json'), '{bad json');
  assert.throws(() => preflight.runRepoPreflight({dataDir:f.dir}), e => e.code === 'PREFLIGHT_JSON_PARSE_ERROR');
});

test('stale blocked symbol is rejected by real bundle path', () => {
  const f = fixture();
  f.trigger.runtime_projection.data_blocked_symbols.push('zx');
  fs.writeFileSync(path.join(f.dir,'trigger_registry_v0.1.json'), JSON.stringify(f.trigger));
  assert.throws(() => preflight.runRepoPreflight({dataDir:f.dir}), e => e.code === 'DATA_PROJECTION_STALE_BLOCKED_SYMBOL');
});

console.log(JSON.stringify({tests:passed+failed,passed,failed},null,2));
if (failed) process.exit(1);
