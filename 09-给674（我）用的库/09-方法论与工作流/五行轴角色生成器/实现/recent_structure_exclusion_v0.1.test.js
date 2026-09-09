const assert = require('node:assert/strict');
const G = require('./generator_core_v0.2.js');
const E = require('./recent_structure_exclusion_v0.1.js');
const data = require('../数据/世界观_机器映射_v0.1.json');
const mappings = data.mappings;

function test(name, fn) {
  try { fn(); console.log(`PASS ${name}`); }
  catch (err) { console.error(`FAIL ${name}: ${err.message}`); process.exitCode = 1; }
}

function nxIds() {
  return mappings.filter(m => m.symbol === 'nx' && m.module === '世界观').map(G.structureId);
}

test('exclusion list normalizes deterministically', () => {
  assert.deepEqual(E.normalizeExcluded(['b', 'a', 'b']), ['a', 'b']);
});

test('single excludes a recent nx structure without symbol leak', () => {
  const first = G.generate({mode:'single',symbol:'nx',modules:['世界观'],mappings,genre:'中古奇幻',seed:'R9-single'});
  const sid = first.modules['世界观'].structure_id;
  const next = E.generateWithRecentExclusion({mode:'single',symbol:'nx',modules:['世界观'],mappings,genre:'中古奇幻',seed:'R9-single',exclude_structure_ids:[sid]});
  assert.equal(next.modules['世界观'].symbol, 'nx');
  assert.notEqual(next.modules['世界观'].structure_id, sid);
});

test('multi primary exclusion keeps explicit zx secondary contract', () => {
  const sid = nxIds()[0];
  const out = E.generateWithRecentExclusion({
    mode:'multi', modules:['世界观'], mappings, genre:'太空歌剧', seed:'R9-multi', exclude_structure_ids:[sid],
    roles:{modules:{'世界观':{
      primary:{symbol:'nx',responsibility:'沿既有外部方向接口推进'},
      secondary:[{symbol:'zx',responsibility:'仅作为跨轴压力参照',relation_source:'显式指定，不承担 primary 结构身份'}]
    }}}
  });
  assert.equal(out.modules['世界观'].primary.symbol, 'nx');
  assert.equal(out.modules['世界观'].secondary[0].symbol, 'zx');
  assert.equal(G.assertNoPseudoVector(out), true);
});

test('graph remains complete semantic-to-genre path under exclusion', () => {
  const out = E.generateWithRecentExclusion({mode:'graph',symbol:'nx',modules:['世界观'],mappings,genre:'赛博都市',seed:'R9-graph',exclude_structure_ids:[nxIds()[0]]});
  const graph = out.graphs['世界观'];
  assert.ok(graph.nodes.some(n => n.id === 'genre_translation'));
  assert.ok(graph.edges.some(([a,b]) => a === 'concrete_candidate' && b === 'genre_translation'));
  assert.equal(G.assertNoPseudoVector(out), true);
});

test('same seed plus same exclusion policy is reproducible', () => {
  const cfg = {mode:'single',symbol:'nx',modules:['世界观'],mappings,genre:'军事科幻',seed:'R9-repro',exclude_structure_ids:[nxIds()[0], nxIds()[1]]};
  assert.deepEqual(E.generateWithRecentExclusion(cfg), E.generateWithRecentExclusion(cfg));
});

test('exhausting nx structure pool is explicit DATA_BLOCKED', () => {
  assert.throws(
    () => E.generateWithRecentExclusion({mode:'single',symbol:'nx',modules:['世界观'],mappings,seed:'R9-exhaust',exclude_structure_ids:nxIds()}),
    err => err && err.code === 'DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED'
  );
});

test('pending z remains excluded by production gate', () => {
  assert.throws(() => E.generateWithRecentExclusion({mode:'single',symbol:'z',modules:['世界观'],mappings,seed:'R9-z',exclude_structure_ids:[]}), /No mapping/);
});

test('pending z enters only with explicit allowPending', () => {
  const out = E.generateWithRecentExclusion({mode:'single',symbol:'z',modules:['世界观'],mappings,seed:'R9-z',allowPending:true,exclude_structure_ids:[]});
  assert.equal(out.modules['世界观'].source_status, 'pending-review');
});

test('locked module remains unchanged when exclusion changes on reroll', () => {
  const cfg = {mode:'single',symbol:'nx',modules:['世界观'],mappings,genre:'中古奇幻',seed:'R9-lock'};
  const first = G.generate(cfg);
  const second = G.reroll(first, {...cfg, locks:{'世界观':true}, nonce:9, mappings:E.filterMappings({...cfg,mappings}, nxIds().slice(0,2))});
  assert.deepEqual(first.modules['世界观'], second.modules['世界观']);
});

if (!process.exitCode) console.log('ALL_TESTS_PASS');
