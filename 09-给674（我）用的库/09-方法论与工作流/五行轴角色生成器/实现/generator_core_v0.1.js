(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.FiveAxisGenerator = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const VALID_MODES = new Set(['single', 'multi', 'graph']);
  const VALID_STATUS = new Set(['candidate', 'evidence-supported', 'pending-review', 'rejected']);
  const REQUIRED_MAPPING_FIELDS = [
    'symbol', 'module', 'sub_semantic', 'changed_variable', 'relation_shape',
    'module_grammar', 'concrete_candidate', 'genre_context', 'status'
  ];

  function normalizeText(value) {
    return String(value ?? '')
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[，、；;]+/g, ',')
      .toLowerCase();
  }

  function fnv1a32(text) {
    let h = 0x811c9dc5;
    const s = String(text);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    let t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5;
      let r = t;
      r = Math.imul(r ^ (r >>> 15), r | 1);
      r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function rngFrom(seed, nonce = 0) {
    return mulberry32(fnv1a32(`${seed}::${nonce}`));
  }

  function asArray(value) {
    if (Array.isArray(value)) return value.slice();
    if (value === undefined || value === null || value === '') return [];
    return [value];
  }

  function validateMapping(mapping) {
    const errors = [];
    for (const key of REQUIRED_MAPPING_FIELDS) {
      if (mapping[key] === undefined || mapping[key] === null || mapping[key] === '') {
        errors.push(`missing:${key}`);
      }
    }
    if (mapping.status && !VALID_STATUS.has(mapping.status)) errors.push(`invalid_status:${mapping.status}`);
    return { ok: errors.length === 0, errors };
  }

  function structureId(mapping) {
    const checked = validateMapping(mapping);
    if (!checked.ok) throw new Error(`Invalid mapping: ${checked.errors.join(', ')}`);
    const parts = [
      mapping.symbol,
      mapping.module,
      mapping.changed_variable,
      mapping.relation_shape,
      mapping.module_grammar
    ].map(normalizeText);
    return parts.join('::');
  }

  function dedupeMappings(mappings) {
    const seen = new Map();
    const duplicates = [];
    for (const mapping of mappings) {
      const id = structureId(mapping);
      if (!seen.has(id)) seen.set(id, mapping);
      else duplicates.push({ structure_id: id, kept: seen.get(id), duplicate: mapping });
    }
    return { unique: Array.from(seen.values()), duplicates };
  }

  function isUsableMapping(mapping, options = {}) {
    const allowPending = Boolean(options.allowPending);
    if (mapping.status === 'rejected') return false;
    if (mapping.status === 'pending-review' && !allowPending) return false;
    return true;
  }

  function pick(list, rng) {
    if (!list.length) throw new Error('Cannot pick from empty list');
    return list[Math.floor(rng() * list.length)];
  }

  function chooseConcrete(mapping, genre, rng) {
    const translations = mapping.genre_translation || {};
    const genreCandidates = asArray(translations[genre]);
    if (genreCandidates.length) return pick(genreCandidates, rng);
    const candidates = asArray(mapping.concrete_candidate);
    if (candidates.length) return pick(candidates, rng);
    return null;
  }

  function materialize(mapping, genre, rng) {
    return {
      symbol: mapping.symbol,
      module: mapping.module,
      sub_semantic: mapping.sub_semantic,
      changed_variable: mapping.changed_variable,
      relation_shape: mapping.relation_shape,
      module_grammar: mapping.module_grammar,
      structure_id: structureId(mapping),
      concrete_candidate: chooseConcrete(mapping, genre, rng),
      genre_translation: genre,
      source_status: mapping.status,
      mapping_id: mapping.id || null
    };
  }

  function candidatesFor(mappings, symbol, module, options) {
    return mappings.filter(m =>
      m.symbol === symbol &&
      m.module === module &&
      validateMapping(m).ok &&
      isUsableMapping(m, options)
    );
  }

  function resolveLocked(module, locks, previous) {
    return Boolean(locks && locks[module] && previous && previous.modules && previous.modules[module]);
  }

  function composeSingle(config) {
    const { symbol, modules, mappings, genre = 'default', seed = '0', nonce = 0, locks = {}, previous = null } = config;
    if (!symbol) throw new Error('single mode requires symbol');
    if (!Array.isArray(modules) || !modules.length) throw new Error('single mode requires modules[]');
    const rng = rngFrom(seed, nonce);
    const out = { mode: 'single', seed: String(seed), nonce, symbol, genre, modules: {} };
    for (const module of modules) {
      if (resolveLocked(module, locks, previous)) {
        out.modules[module] = previous.modules[module];
        continue;
      }
      const pool = candidatesFor(mappings, symbol, module, config);
      if (!pool.length) throw new Error(`No mapping for ${symbol} × ${module}`);
      out.modules[module] = materialize(pick(pool, rng), genre, rng);
    }
    return out;
  }

  function buildOwnership(roles) {
    if (!roles || !roles.primary) throw new Error('multi mode requires roles.primary');
    const owners = new Map();
    const assign = (roleName, role) => {
      if (!role || !role.symbol || !Array.isArray(role.modules) || !role.modules.length) {
        throw new Error(`${roleName} requires symbol and modules[]`);
      }
      for (const module of role.modules) {
        if (owners.has(module)) throw new Error(`Module ownership collision: ${module}`);
        owners.set(module, { role: roleName, symbol: role.symbol, relation_source: role.relation_source || null });
      }
    };
    assign('primary', roles.primary);
    for (const [i, role] of asArray(roles.secondary).entries()) {
      if (!role.relation_source) throw new Error(`secondary[${i}] requires explicit relation_source`);
      assign(`secondary:${i}`, role);
    }
    return owners;
  }

  function composeMulti(config) {
    const { modules, mappings, genre = 'default', seed = '0', nonce = 0, locks = {}, previous = null, roles } = config;
    if (!Array.isArray(modules) || !modules.length) throw new Error('multi mode requires modules[]');
    const owners = buildOwnership(roles);
    const rng = rngFrom(seed, nonce);
    const out = { mode: 'multi', seed: String(seed), nonce, genre, roles, modules: {} };
    for (const module of modules) {
      if (resolveLocked(module, locks, previous)) {
        out.modules[module] = previous.modules[module];
        continue;
      }
      const owner = owners.get(module);
      if (!owner) throw new Error(`No explicit role owner for module: ${module}`);
      const pool = candidatesFor(mappings, owner.symbol, module, config);
      if (!pool.length) throw new Error(`No mapping for ${owner.symbol} × ${module}`);
      out.modules[module] = {
        ...materialize(pick(pool, rng), genre, rng),
        role: owner.role,
        relation_source: owner.relation_source
      };
    }
    return out;
  }

  function composeGraph(config) {
    const single = composeSingle({ ...config });
    const graphs = {};
    for (const [module, item] of Object.entries(single.modules)) {
      graphs[module] = {
        nodes: [
          { id: 'symbol', value: item.symbol },
          { id: 'sub_semantic', value: item.sub_semantic },
          { id: 'changed_variable', value: item.changed_variable },
          { id: 'relation_shape', value: item.relation_shape },
          { id: 'module_grammar', value: item.module_grammar },
          { id: 'concrete_candidate', value: item.concrete_candidate }
        ],
        edges: [
          ['symbol', 'sub_semantic'],
          ['sub_semantic', 'changed_variable'],
          ['changed_variable', 'relation_shape'],
          ['relation_shape', 'module_grammar'],
          ['module_grammar', 'concrete_candidate']
        ]
      };
    }
    return { ...single, mode: 'graph', graphs };
  }

  function generate(config) {
    if (!VALID_MODES.has(config.mode)) throw new Error(`Invalid mode: ${config.mode}`);
    if (config.mode === 'single') return composeSingle(config);
    if (config.mode === 'multi') return composeMulti(config);
    return composeGraph(config);
  }

  function reroll(previous, config = {}) {
    if (!previous || !previous.mode) throw new Error('reroll requires previous result');
    return generate({
      ...config,
      mode: config.mode || previous.mode,
      seed: config.seed ?? previous.seed,
      nonce: config.nonce ?? ((previous.nonce || 0) + 1),
      genre: config.genre || previous.genre,
      previous
    });
  }

  function assertNoPseudoVector(result) {
    const text = JSON.stringify(result);
    const bad = /\b\d{1,3}%\b|\b0\.\d+\b|强zn|弱zn|强zx|弱zx|强z|弱z/i.test(text);
    return !bad;
  }

  return {
    VALID_MODES,
    validateMapping,
    structureId,
    dedupeMappings,
    generate,
    composeSingle,
    composeMulti,
    composeGraph,
    reroll,
    assertNoPseudoVector,
    _internals: { normalizeText, fnv1a32, rngFrom }
  };
});
