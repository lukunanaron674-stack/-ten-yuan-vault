const assert = require('node:assert/strict');
const G = require('./generator_core_v0.2.js');
const data = require('../数据/世界观_机器映射_v0.1.json');
const mappings = data.mappings;

function test(name, fn) {
  try { fn(); console.log(`PASS ${name}`); }
  catch (err) { console.error(`FAIL ${name}: ${err.message}`); process.exitCode = 1; }
}

test('machine mapping dataset validates', () => {
  const bad = mappings.filter(m => !G.validateMapping(m).ok);
  assert.equal(bad.length, 0);
});

test('structure_id ignores noun and genre skin', () => {
  const a = mappings.find(m => m.id === 'ZX-W-001');
  const clone = {...a, id:'ZX-W-001-SKIN', concrete_candidate:['黄金王座'], genre_context:['宫廷']};
  assert.equal(G.structureId(a), G.structureId(clone));
  assert.equal(G.dedupeMappings([a, clone]).duplicates.length, 1);
});

test('same seed is reproducible on real zx data', () => {
  const cfg = {mode:'single',symbol:'zx',modules:['世界观'],mappings,genre:'学院',seed:'74'};
  assert.deepEqual(G.generate(cfg), G.generate(cfg));
});

test('pending z is excluded unless explicitly allowed', () => {
  assert.throws(() => G.generate({mode:'single',symbol:'z',modules:['世界观'],mappings,seed:'74'}), /No mapping/);
  const out = G.generate({mode:'single',symbol:'z',modules:['世界观'],mappings,seed:'74',allowPending:true});
  assert.equal(out.modules['世界观'].source_status, 'pending-review');
});

test('multi can layer primary and secondary inside the same worldbuilding module', () => {
  const out = G.generate({
    mode:'multi', modules:['世界观'], mappings, genre:'科幻', seed:'74',
    roles:{
      global_primary_symbol:'zx',
      modules:{
        '世界观':{
          primary:{symbol:'zx', responsibility:'决定世界中方向接口如何被公开争夺或扩大'},
          secondary:[{
            symbol:'zn',
            responsibility:'限制争夺后仍不可自动让渡的内部原则边界',
            relation_source:'用户明确指定：zx 主世界方向机制，zn 负责原则边界约束'
          }]
        }
      }
    }
  });
  assert.equal(out.modules['世界观'].primary.symbol, 'zx');
  assert.equal(out.modules['世界观'].secondary[0].symbol, 'zn');
  assert.equal(G.assertNoPseudoVector(out), true);
});

test('multi rejects percentage soup', () => {
  assert.throws(() => G.generate({
    mode:'multi', modules:['世界观'], mappings, seed:'74',
    roles:{modules:{'世界观':{
      primary:{symbol:'zx',responsibility:'方向接口'},
      secondary:[{symbol:'zn',responsibility:'原则边界',relation_source:'显式关系',weight:0.3}]
    }}}
  }), /forbids pseudo-vector weights/);
});

test('graph emits node-edge path and no pseudo vector', () => {
  const out = G.generate({mode:'graph',symbol:'zn',modules:['世界观'],mappings,genre:'科幻',seed:'74'});
  assert.equal(out.mode, 'graph');
  assert.ok(out.graphs['世界观'].nodes.length >= 6);
  assert.equal(G.assertNoPseudoVector(out), true);
});

test('module lock preserves full multi module on reroll', () => {
  const cfg = {
    mode:'multi', modules:['世界观'], mappings, genre:'科幻', seed:'74',
    roles:{modules:{'世界观':{
      primary:{symbol:'zx',responsibility:'方向接口'},
      secondary:[{symbol:'zn',responsibility:'原则边界',relation_source:'显式关系'}]
    }}}
  };
  const first = G.generate(cfg);
  const second = G.reroll(first, {...cfg, locks:{'世界观':true}, nonce:9});
  assert.deepEqual(first.modules['世界观'], second.modules['世界观']);
});

if (!process.exitCode) console.log('ALL_TESTS_PASS');
