'use strict';

const CANONICAL = ['x并z','zx','z','zn','nz','n','nx','xn','x','xz'];
const CANONICAL_SET = new Set(CANONICAL);
const ALLOWED_MAPPING_STATUS = new Set(['candidate','evidence-supported','rejected','pending-review']);
const REQUIRED_MAPPING_FIELDS = ['id','symbol','module','sub_semantic','changed_variable','relation_shape','module_grammar','concrete_candidate','genre_context','genre_translation','status'];

class DataCompileError extends Error {
  constructor(code, message, detail = {}) {
    super(message);
    this.name = 'DataCompileError';
    this.code = code;
    this.detail = detail;
  }
}

function fail(code, message, detail) { throw new DataCompileError(code, message, detail); }
function duplicates(list) {
  const seen = new Set();
  const dup = new Set();
  for (const item of list) seen.has(item) ? dup.add(item) : seen.add(item);
  return [...dup];
}
function sameSet(a, b) { return a.length === b.length && a.every(x => b.includes(x)); }
function structureKey(m) { return [m.symbol,m.module,m.changed_variable,m.relation_shape,m.module_grammar].join('||'); }

function validateTriggerRegistry(registry, options = {}) {
  if (!registry || typeof registry !== 'object') fail('DATA_REGISTRY_INVALID', 'trigger_registry 必须是对象');
  if (!Array.isArray(registry.canonical_symbols)) fail('DATA_REGISTRY_CANONICAL_MISSING', 'canonical_symbols 缺失');
  const dupSymbols = duplicates(registry.canonical_symbols);
  if (dupSymbols.length) fail('DATA_REGISTRY_CANONICAL_DUPLICATE', 'canonical_symbols 存在重复 token', { tokens: dupSymbols });
  const illegal = registry.canonical_symbols.filter(s => !CANONICAL_SET.has(s));
  if (illegal.length) fail('DATA_REGISTRY_CANONICAL_ILLEGAL', 'canonical_symbols 存在非法 token', { tokens: illegal });
  if (!sameSet(registry.canonical_symbols, CANONICAL)) {
    fail('DATA_REGISTRY_CANONICAL_MISMATCH', 'trigger_registry 与 P0 canonical token 集不一致', {
      missing: CANONICAL.filter(s => !registry.canonical_symbols.includes(s)),
      extra: registry.canonical_symbols.filter(s => !CANONICAL_SET.has(s))
    });
  }
  if (!registry.aliases || typeof registry.aliases !== 'object') fail('DATA_REGISTRY_ALIASES_MISSING', 'aliases 缺失');
  for (const symbol of CANONICAL) {
    if (!Array.isArray(registry.aliases[symbol]) || !registry.aliases[symbol].length) fail('DATA_REGISTRY_ALIAS_MISSING', `缺少 ${symbol} aliases`, { symbol });
  }
  const aliasOwners = new Map();
  for (const [owner, aliases] of Object.entries(registry.aliases)) {
    if (!CANONICAL_SET.has(owner)) fail('DATA_REGISTRY_ALIAS_OWNER_ILLEGAL', 'alias owner 不是 canonical token', { owner });
    for (const raw of aliases) {
      const key = String(raw).normalize('NFKC').toLowerCase();
      const prev = aliasOwners.get(key);
      if (prev && prev !== owner) fail('DATA_REGISTRY_ALIAS_COLLISION', '同一归一化 alias 指向多个 canonical token', { alias: raw, owners: [prev, owner] });
      aliasOwners.set(key, owner);
    }
  }
  if (!registry.runtime_projection || typeof registry.runtime_projection !== 'object') fail('DATA_REGISTRY_RUNTIME_PROJECTION_MISSING', 'runtime_projection 缺失');
  if (!registry.runtime_projection.mapping_version) fail('DATA_REGISTRY_MAPPING_VERSION_MISSING', 'runtime_projection.mapping_version 缺失');
  if (options.expectedParserVersion && registry.parser_version !== options.expectedParserVersion) fail('DATA_VERSION_PARSER_MISMATCH', 'parser_version 不一致', { actual: registry.parser_version, expected: options.expectedParserVersion });
  if (options.expectedMappingVersion && registry.runtime_projection.mapping_version !== options.expectedMappingVersion) fail('DATA_VERSION_MAPPING_MISMATCH', 'mapping_version 不一致', { actual: registry.runtime_projection.mapping_version, expected: options.expectedMappingVersion });
  return { canonical_count: registry.canonical_symbols.length, alias_count: aliasOwners.size };
}

function validateMappingData(mappingData) {
  if (!mappingData || typeof mappingData !== 'object' || !Array.isArray(mappingData.mappings)) fail('DATA_MAPPING_ROOT_INVALID', 'mapping 数据必须包含 mappings 数组');
  const ids = mappingData.mappings.map(m => m && m.id).filter(Boolean);
  const dupIds = duplicates(ids);
  if (dupIds.length) fail('DATA_MAPPING_ID_DUPLICATE', 'mapping id 重复', { ids: dupIds });
  const structureSeen = new Map();
  let rejected = 0;
  let pending = 0;
  for (let i = 0; i < mappingData.mappings.length; i++) {
    const m = mappingData.mappings[i];
    if (!m || typeof m !== 'object') fail('DATA_MAPPING_ENTRY_INVALID', 'mapping entry 必须是对象', { index: i });
    const missing = REQUIRED_MAPPING_FIELDS.filter(k => !Object.prototype.hasOwnProperty.call(m, k));
    if (missing.length) fail('DATA_MAPPING_FIELD_MISSING', 'mapping entry 缺字段', { index: i, id: m.id || null, missing });
    if (!CANONICAL_SET.has(m.symbol)) fail('DATA_MAPPING_SYMBOL_ILLEGAL', 'mapping 使用非法 canonical token', { id: m.id, symbol: m.symbol });
    if (!ALLOWED_MAPPING_STATUS.has(m.status)) fail('DATA_MAPPING_STATUS_ILLEGAL', 'mapping status 非法', { id: m.id, status: m.status });
    if (m.status === 'rejected') rejected++;
    if (m.status === 'pending-review') pending++;
    const key = structureKey(m);
    if (!structureSeen.has(key)) structureSeen.set(key, []);
    structureSeen.get(key).push(m.id);
  }
  const duplicateStructures = [...structureSeen.entries()].filter(([, ids2]) => ids2.length > 1).map(([key, ids2]) => ({ key, ids: ids2 }));
  return { mapping_count: mappingData.mappings.length, rejected, pending, duplicate_structure_groups: duplicateStructures };
}

function validateMappingRegistry(mappingRegistry, mappingData, options = {}) {
  if (!mappingRegistry || typeof mappingRegistry !== 'object' || !Array.isArray(mappingRegistry.projections)) fail('DATA_MAPPING_REGISTRY_INVALID', 'mapping_registry.projections 缺失');
  const versions = mappingRegistry.projections.map(p => p.mapping_version);
  const dupVersions = duplicates(versions);
  if (dupVersions.length) fail('DATA_MAPPING_REGISTRY_DUPLICATE', 'mapping_registry 存在重复 mapping_version', { versions: dupVersions });
  const targetVersion = options.expectedMappingVersion;
  const projection = targetVersion ? mappingRegistry.projections.find(p => p.mapping_version === targetVersion) : mappingRegistry.projections[0];
  if (!projection) fail('DATA_MAPPING_REGISTRY_VERSION_MISSING', 'mapping_registry 缺少目标 mapping_version', { expected: targetVersion });
  if (!Array.isArray(projection.mapping_ids)) fail('DATA_MAPPING_REGISTRY_IDS_MISSING', 'mapping_registry.mapping_ids 缺失');
  const dupIds = duplicates(projection.mapping_ids);
  if (dupIds.length) fail('DATA_MAPPING_REGISTRY_ID_DUPLICATE', 'mapping_registry.mapping_ids 重复', { ids: dupIds });
  const actualIds = new Set(mappingData.mappings.map(m => m.id));
  const dangling = projection.mapping_ids.filter(id => !actualIds.has(id));
  if (dangling.length) fail('DATA_MAPPING_ID_DANGLING', 'mapping_registry 存在悬空 mapping_id', { ids: dangling });
  const unregistered = mappingData.mappings.map(m => m.id).filter(id => !projection.mapping_ids.includes(id));
  if (unregistered.length) fail('DATA_MAPPING_ID_UNREGISTERED', 'mapping 数据存在未登记 mapping_id', { ids: unregistered });
  return { mapping_version: projection.mapping_version, registered_ids: projection.mapping_ids.length };
}

function validateProjectionCoverage(registry, mappingData) {
  const projection = registry.runtime_projection || {};
  const blocked = Array.isArray(projection.data_blocked_symbols) ? projection.data_blocked_symbols : [];
  const pendingDeclared = Array.isArray(projection.pending_review_symbols) ? projection.pending_review_symbols : [];
  const bySymbol = new Map(CANONICAL.map(s => [s, []]));
  for (const m of mappingData.mappings) if (bySymbol.has(m.symbol)) bySymbol.get(m.symbol).push(m);
  const usableSymbols = CANONICAL.filter(s => bySymbol.get(s).some(m => m.status === 'candidate' || m.status === 'evidence-supported'));
  const pendingOnlySymbols = CANONICAL.filter(s => bySymbol.get(s).length > 0 && bySymbol.get(s).every(m => m.status === 'pending-review'));
  const noMappingSymbols = CANONICAL.filter(s => bySymbol.get(s).length === 0);
  const staleBlocked = blocked.filter(s => usableSymbols.includes(s));
  if (staleBlocked.length) fail('DATA_PROJECTION_STALE_BLOCKED_SYMBOL', '已有可用映射的 symbol 仍被标记 data_blocked', { symbols: staleBlocked });
  const missingBlocked = noMappingSymbols.filter(s => !blocked.includes(s));
  if (missingBlocked.length) fail('DATA_PROJECTION_MISSING_BLOCKED_SYMBOL', '无映射 symbol 未登记 data_blocked', { symbols: missingBlocked });
  const pendingMismatch = pendingOnlySymbols.filter(s => !pendingDeclared.includes(s)).concat(pendingDeclared.filter(s => !pendingOnlySymbols.includes(s)));
  if (pendingMismatch.length) fail('DATA_PROJECTION_PENDING_MISMATCH', 'pending_review_symbols 与实际映射状态不一致', { symbols: [...new Set(pendingMismatch)], actual_pending_only: pendingOnlySymbols });
  return { usable_symbols: usableSymbols, pending_only_symbols: pendingOnlySymbols, data_blocked_symbols: noMappingSymbols };
}

function validateRuntimeInput(runtimeInput, registry) {
  if (!runtimeInput || typeof runtimeInput !== 'object') fail('DATA_RUNTIME_INPUT_INVALID', 'runtime input 必须是对象');
  const symbols = runtimeInput.canonical_symbols || (runtimeInput.symbol ? [runtimeInput.symbol] : []);
  if (!symbols.length) fail('DATA_RUNTIME_SYMBOL_MISSING', 'runtime input 缺 canonical symbol');
  const illegal = symbols.filter(s => !registry.canonical_symbols.includes(s));
  if (illegal.length) fail('DATA_RUNTIME_SYMBOL_ILLEGAL', 'runtime input 含非法 canonical symbol', { symbols: illegal });
  if (runtimeInput.mapping_version && runtimeInput.mapping_version !== registry.runtime_projection.mapping_version) fail('DATA_RUNTIME_MAPPING_VERSION_MISMATCH', 'runtime input mapping_version 与 registry 不一致', { actual: runtimeInput.mapping_version, expected: registry.runtime_projection.mapping_version });
  if (runtimeInput.parser_version && runtimeInput.parser_version !== registry.parser_version) fail('DATA_RUNTIME_PARSER_VERSION_MISMATCH', 'runtime input parser_version 与 registry 不一致', { actual: runtimeInput.parser_version, expected: registry.parser_version });
  return { symbols };
}

function validateBundle({ triggerRegistry, mappingRegistry, mappingData, runtimeInput, expectedParserVersion = 'trigger-parser-v0.1', expectedMappingVersion = '世界观_机器映射_v0.1' }) {
  const registry = validateTriggerRegistry(triggerRegistry, { expectedParserVersion, expectedMappingVersion });
  const mappings = validateMappingData(mappingData);
  const projection = validateMappingRegistry(mappingRegistry, mappingData, { expectedMappingVersion });
  const coverage = validateProjectionCoverage(triggerRegistry, mappingData);
  const runtime = runtimeInput ? validateRuntimeInput(runtimeInput, triggerRegistry) : null;
  return { status: 'PASS', registry, mappings, projection, coverage, runtime };
}

module.exports = { CANONICAL, REQUIRED_MAPPING_FIELDS, DataCompileError, structureKey, validateTriggerRegistry, validateMappingData, validateMappingRegistry, validateProjectionCoverage, validateRuntimeInput, validateBundle };
