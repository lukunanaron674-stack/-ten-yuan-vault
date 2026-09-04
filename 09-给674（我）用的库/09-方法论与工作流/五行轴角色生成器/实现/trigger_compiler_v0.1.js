(function (root, factory) {
  const api = factory(
    typeof module !== 'undefined' && module.exports ? require('./generator_core_v0.2.js') : root.FiveAxisGenerator
  );
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.FiveAxisTriggerCompiler = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (core) {
  'use strict';

  const PARSER_VERSION = 'trigger-parser-v0.1';
  const CANONICAL = ['x并z','zx','zn','nz','nx','xn','xz','x','z','n'];
  const CANONICAL_SET = new Set(CANONICAL);
  const IMPLEMENTED_MODULES = ['世界观'];
  const ALL_MODULES = ['世界观','服装','发型','身体/脸','道具','身份/行为','关系','一生','构图','具象名词'];

  class TriggerError extends Error {
    constructor(code, message, detail = {}) {
      super(message);
      this.name = 'TriggerError';
      this.code = code;
      this.detail = detail;
    }
  }

  function normalizeRaw(raw) {
    return String(raw ?? '')
      .normalize('NFKC')
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[＋]/g, '+');
  }

  function stripSpaces(text) {
    return text.replace(/\s+/g, '');
  }

  function parseLeadingSymbols(normalized) {
    let s = stripSpaces(normalized);
    const symbols = [];
    let explicitMulti = false;

    while (s.length) {
      let match = null;
      for (const token of CANONICAL) {
        if (s.toLowerCase().startsWith(token.toLowerCase())) {
          match = token;
          break;
        }
      }
      if (!match) break;
      symbols.push(match);
      s = s.slice(match.length);
      if (s.startsWith('+')) {
        explicitMulti = true;
        s = s.slice(1);
        if (!s.length) throw new TriggerError('ERROR_EMPTY_SUBJECT', '连接符后缺少第二个十元或主体');
        continue;
      }
      break;
    }

    if (!symbols.length) {
      const head = (s.match(/^[A-Za-z并]+/) || [''])[0];
      throw new TriggerError('ERROR_UNKNOWN_TOKEN', `未知十元触发词: ${head || normalized}`, { token: head || normalized });
    }

    if (explicitMulti) {
      if (symbols.length < 2) {
        const next = (s.match(/^[A-Za-z并]+/) || [''])[0];
        throw new TriggerError('ERROR_UNKNOWN_TOKEN', `多符号连接后不是合法十元: ${next || s}`, { token: next || s });
      }
    }

    if (!explicitMulti && symbols.length > 1) {
      throw new TriggerError('ERROR_AMBIGUOUS_TOKEN', '多个十元必须使用 + 或 ＋ 明确连接');
    }

    if (s.startsWith('的')) s = s.slice(1);
    const subject = s.trim();
    if (!subject) throw new TriggerError('ERROR_EMPTY_SUBJECT', '触发词后缺少主体');

    return { symbols, subject, explicitMulti };
  }

  function parseTrigger(raw, options = {}) {
    const normalized = normalizeRaw(raw);
    if (!normalized) throw new TriggerError('ERROR_UNKNOWN_TOKEN', '空触发输入');
    const parsed = parseLeadingSymbols(normalized);
    for (const symbol of parsed.symbols) {
      if (!CANONICAL_SET.has(symbol)) throw new TriggerError('ERROR_UNKNOWN_TOKEN', `非法十元: ${symbol}`);
    }
    const mode = options.mode === 'graph' ? 'graph' : (parsed.symbols.length === 1 ? 'single' : 'multi');
    const mappingVersion = options.mapping_version || '世界观_机器映射_v0.1';
    return {
      raw_trigger: raw,
      subject: parsed.subject,
      canonical_symbols: parsed.symbols,
      mode,
      genre_context: options.genre_context || 'default',
      seed: String(options.seed ?? '74'),
      locked_modules: Array.isArray(options.locked_modules) ? [...options.locked_modules] : [],
      reroll_modules: Array.isArray(options.reroll_modules) ? [...options.reroll_modules] : [],
      parser_version: PARSER_VERSION,
      mapping_version: mappingVersion
    };
  }

  function compileRequest(raw, options = {}) {
    const resolved = parseTrigger(raw, options);
    if (resolved.mode === 'multi' && !options.roles) {
      return {
        status: 'BLOCKED',
        error_code: 'BLOCKED_MULTI_RESPONSIBILITY_REQUIRED',
        resolved_request: resolved,
        reason: 'multi 需要显式 primary/secondary responsibility 与 relation_source，禁止自动百分比混合或私自补职责'
      };
    }
    return { status: 'READY', resolved_request: resolved };
  }

  function buildRuntimeConfig(resolved, mappings, options = {}) {
    const modules = options.modules || IMPLEMENTED_MODULES;
    const config = {
      mode: resolved.mode,
      modules,
      mappings,
      genre: resolved.genre_context,
      seed: resolved.seed,
      nonce: Number(options.nonce || 0),
      locks: Object.fromEntries((resolved.locked_modules || []).map(m => [m, true])),
      previous: options.previous || null,
      allowPending: Boolean(options.allowPending)
    };
    if (resolved.mode === 'single' || resolved.mode === 'graph') config.symbol = resolved.canonical_symbols[0];
    if (resolved.mode === 'multi') config.roles = options.roles;
    return config;
  }

  function runEndToEnd(raw, mappings, options = {}) {
    let compiled;
    try {
      compiled = compileRequest(raw, options);
    } catch (err) {
      if (err instanceof TriggerError) return { status: 'INVALID', error_code: err.code, message: err.message, detail: err.detail };
      throw err;
    }
    if (compiled.status !== 'READY') return compiled;

    const resolved = compiled.resolved_request;
    const requestedModules = options.modules || ALL_MODULES;
    const implemented = requestedModules.filter(m => IMPLEMENTED_MODULES.includes(m));
    const notImplemented = requestedModules.filter(m => !IMPLEMENTED_MODULES.includes(m));

    if (!implemented.length) {
      return { status: 'DATA_BLOCKED', error_code: 'DATA_BLOCKED_NO_IMPLEMENTED_MODULE', resolved_request: resolved, modules: Object.fromEntries(notImplemented.map(m => [m, 'NOT_IMPLEMENTED'])) };
    }

    try {
      const runtimeConfig = buildRuntimeConfig(resolved, mappings, { ...options, modules: implemented });
      const output = core.generate(runtimeConfig);
      const modules = { ...output.modules };
      for (const m of notImplemented) modules[m] = 'NOT_IMPLEMENTED';
      return {
        status: 'OK',
        resolved_request: resolved,
        provenance: { parser_version: PARSER_VERSION, mapping_version: resolved.mapping_version, seed: resolved.seed },
        mode: output.mode,
        subject: resolved.subject,
        modules
      };
    } catch (err) {
      const msg = String(err && err.message || err);
      if (/No mapping/.test(msg)) {
        return { status: 'DATA_BLOCKED', error_code: 'DATA_BLOCKED_MAPPING_MISSING', resolved_request: resolved, message: msg, modules: Object.fromEntries(notImplemented.map(m => [m, 'NOT_IMPLEMENTED'])) };
      }
      return { status: 'INVALID', error_code: 'ERROR_RUNTIME_COMPOSER', resolved_request: resolved, message: msg };
    }
  }

  return {
    PARSER_VERSION,
    CANONICAL,
    IMPLEMENTED_MODULES,
    ALL_MODULES,
    TriggerError,
    normalizeRaw,
    parseTrigger,
    compileRequest,
    buildRuntimeConfig,
    runEndToEnd
  };
});
