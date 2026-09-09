'use strict';
const G = require('./generator_core_v0.2.js');
const POLICY_VERSION = 'recent-structure-exclusion-v0.1';

function normalizeExcluded(value) {
  if (value == null) return [];
  if (!Array.isArray(value)) throw new Error('exclude_structure_ids must be an array');
  return [...new Set(value.map(v => String(v).trim()).filter(Boolean))].sort();
}

function requestedPairs(config) {
  if (config.mode === 'single' || config.mode === 'graph') {
    return (config.modules || []).map(module => [config.symbol, module]);
  }
  if (config.mode === 'multi') {
    const pairs = [];
    for (const module of config.modules || []) {
      const spec = config.roles && config.roles.modules && config.roles.modules[module];
      if (!spec) continue;
      if (spec.primary && spec.primary.symbol) pairs.push([spec.primary.symbol, module]);
      const secondary = Array.isArray(spec.secondary) ? spec.secondary : (spec.secondary ? [spec.secondary] : []);
      for (const role of secondary) if (role.symbol) pairs.push([role.symbol, module]);
    }
    return pairs;
  }
  return [];
}

function usable(mapping, config) {
  if (!G.validateMapping(mapping).ok) return false;
  if (mapping.status === 'rejected') return false;
  if (mapping.status === 'pending-review' && !config.allowPending) return false;
  return true;
}

function filterMappings(config, excluded) {
  const blocked = new Set(excluded);
  return (config.mappings || []).filter(mapping => !blocked.has(G.structureId(mapping)));
}

function assertNoExhaustedPair(config, filtered, excluded) {
  if (!excluded.length) return;
  for (const [symbol, module] of requestedPairs(config)) {
    const before = (config.mappings || []).filter(m => m.symbol === symbol && m.module === module && usable(m, config));
    if (!before.length) continue;
    const after = filtered.filter(m => m.symbol === symbol && m.module === module && usable(m, config));
    if (!after.length) {
      const err = new Error(`DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED: ${symbol} × ${module}`);
      err.code = 'DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED';
      err.symbol = symbol;
      err.module = module;
      throw err;
    }
  }
}

function generateWithRecentExclusion(config) {
  if (!config || typeof config !== 'object') throw new Error('config object required');
  const excluded = normalizeExcluded(config.exclude_structure_ids);
  const filtered = filterMappings(config, excluded);
  assertNoExhaustedPair(config, filtered, excluded);
  const out = G.generate({ ...config, mappings: filtered });
  return {
    ...out,
    recent_structure_exclusion: {
      policy_version: POLICY_VERSION,
      excluded_structure_ids: excluded
    }
  };
}

module.exports = {
  POLICY_VERSION,
  generateWithRecentExclusion,
  normalizeExcluded,
  filterMappings,
  requestedPairs
};
