const assert = require('node:assert/strict');
const G = require('./generator_core_v0.1.js');

const mappings = [
  {
    id: 'ZX-W-001', symbol: 'zx', module: '世界观', status: 'candidate',
    sub_semantic: '公开显权/夺取方向源', changed_variable: '当前局部方向的最终决定席由谁占据',
    relation_shape: '既有决定席→主体公开挑战→持席者回应→决定席转移',
    module_grammar: '挑战接口改变决定席',
    concrete_candidate: ['挑战席', '决定者高座'], genre_context: ['中古奇幻','学院'],
    genre_translation: { '学院': ['首席挑战台'], '科幻': ['权限挑战节点'] }
  },
  {
    id: 'ZX-W-001-SKIN', symbol: 'zx', module: '世界观', status: 'candidate',
    sub_semantic: '公开显权/夺取方向源', changed_variable: '当前局部方向的最终决定席由谁占据',
    relation_shape: '既有决定席→主体公开挑战→持席者回应→决定席转移',
    module_grammar: '挑战接口改变决定席',
    concrete_candidate: ['黄金挑战王座'], genre_context: ['宫廷']
  },
  {
    id: 'ZN-W-001', symbol: 'zn', module: '世界观', status: 'candidate',
    sub_semantic: '原则跨阶段调用', changed_variable: '主体内部原则是否保留未来调用与冲突排序资格',
    relation_shape: '阶段变化→可放弃机会→主体再次调用原则→原则继续参与排序',
    module_grammar: '跨阶段原则锚',
    concrete_candidate: ['誓约档案', '个人原则册'], genre_context: ['现代幻想','学院'],
    genre_translation: { '科幻': ['人格原则备份'], '学院': ['毕业誓约簿'] }
  },
  {
    id: 'ZX-C-001', symbol: 'zx', module: '服装', status: 'candidate',
    sub_semantic: '决定接口外显', changed_variable: '主体当前决定位置是否被结构性显露',
    relation_shape: '身体中心→决定接口标记→外部读取主体决定位置',
    module_grammar: '单一结构中心+明确外展边界',
    concrete_candidate: ['结构肩片', '中心扣带'], genre_context: ['学院','科幻']
  },
  {
    id: 'ZN-C-001', symbol: 'zn', module: '服装', status: 'candidate',
    sub_semantic: '内部原则可持续携带', changed_variable: '原则是否在身份变化后仍能被主体调用',
    relation_shape: '身份表层变化→内部锚保留→未来阶段再次调用',
    module_grammar: '可替换外层+不可轻易让渡的内层标记',
    concrete_candidate: ['内衬誓约带', '私人缝记'], genre_context: ['学院','科幻']
  }
];

function test(name, fn) {
  try { fn(); console.log(`PASS ${name}`); }
  catch (err) { console.error(`FAIL ${name}: ${err.message}`); process.exitCode = 1; }
}

test('structure_id ignores concrete noun skin', () => {
  assert.equal(G.structureId(mappings[0]), G.structureId(mappings[1]));
  const d = G.dedupeMappings(mappings.slice(0,2));
  assert.equal(d.unique.length, 1);
  assert.equal(d.duplicates.length, 1);
});

test('same seed is reproducible', () => {
  const cfg = { mode:'single', symbol:'zx', modules:['世界观','服装'], mappings, genre:'学院', seed:'74' };
  assert.deepEqual(G.generate(cfg), G.generate(cfg));
});

test('different nonce can reroll unlocked module while lock preserves locked module', () => {
  const cfg = { mode:'single', symbol:'zx', modules:['世界观','服装'], mappings, genre:'学院', seed:'74' };
  const first = G.generate(cfg);
  const second = G.reroll(first, { ...cfg, locks:{世界观:true}, nonce:5 });
  assert.deepEqual(first.modules['世界观'], second.modules['世界观']);
  assert.equal(second.nonce, 5);
});

test('multi requires explicit secondary relation_source and module ownership', () => {
  assert.throws(() => G.generate({
    mode:'multi', modules:['世界观','服装'], mappings, genre:'学院', seed:'74',
    roles:{ primary:{symbol:'zx',modules:['世界观']}, secondary:[{symbol:'zn',modules:['服装']}] }
  }), /relation_source/);

  const out = G.generate({
    mode:'multi', modules:['世界观','服装'], mappings, genre:'学院', seed:'74',
    roles:{
      primary:{symbol:'zx',modules:['世界观']},
      secondary:[{symbol:'zn',modules:['服装'],relation_source:'用户明确指定：主轴负责世界方向，副轴负责服装原则锚'}]
    }
  });
  assert.equal(out.modules['世界观'].symbol, 'zx');
  assert.equal(out.modules['服装'].symbol, 'zn');
});

test('graph mode emits no pseudo-vector weight', () => {
  const out = G.generate({mode:'graph',symbol:'zn',modules:['世界观','服装'],mappings,genre:'科幻',seed:'74'});
  assert.equal(out.mode, 'graph');
  assert.equal(G.assertNoPseudoVector(out), true);
  assert.ok(Array.isArray(out.graphs['世界观'].nodes));
});

test('rejected and pending are excluded by default', () => {
  const bad = {...mappings[0], id:'BAD', status:'rejected', concrete_candidate:['王冠']};
  const pending = {...mappings[0], id:'PENDING', status:'pending-review'};
  const onlyBad = [bad,pending];
  assert.throws(() => G.generate({mode:'single',symbol:'zx',modules:['世界观'],mappings:onlyBad,seed:'1'}), /No mapping/);
  const allowed = G.generate({mode:'single',symbol:'zx',modules:['世界观'],mappings:[pending],seed:'1',allowPending:true});
  assert.equal(allowed.modules['世界观'].source_status, 'pending-review');
});

if (!process.exitCode) console.log('ALL_TESTS_PASS');
