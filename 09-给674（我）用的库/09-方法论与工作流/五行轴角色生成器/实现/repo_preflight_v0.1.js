'use strict';

const fs = require('fs');
const path = require('path');
const checker = require('./data_compile_check_v0.1.js');
const triggerCompiler = require('./trigger_compiler_v0.1.js');

const DATA_DIR = path.resolve(__dirname, '../数据');
const FILES = Object.freeze({
  triggerRegistry: 'trigger_registry_v0.1.json',
  mappingRegistry: 'mapping_registry_v0.1.json',
  mappingData: '世界观_机器映射_v0.1.json'
});

function readJson(filePath, code) {
  let text;
  try { text = fs.readFileSync(filePath, 'utf8'); }
  catch (err) {
    const e = new Error(`无法读取 ${filePath}: ${err.message}`);
    e.code = code || 'PREFLIGHT_FILE_READ_ERROR';
    throw e;
  }
  try { return JSON.parse(text); }
  catch (err) {
    const e = new Error(`JSON 解析失败 ${filePath}: ${err.message}`);
    e.code = 'PREFLIGHT_JSON_PARSE_ERROR';
    throw e;
  }
}

function duplicateValues(list) {
  const seen = new Set();
  const dup = new Set();
  for (const item of list) seen.has(item) ? dup.add(item) : seen.add(item);
  return [...dup];
}

function preflightFail(code, message, detail = {}) {
  const e = new Error(message);
  e.code = code;
  e.detail = detail;
  throw e;
}

function validateCompilerContract(triggerRegistry, compilerContract = triggerCompiler) {
  if (!compilerContract || !Array.isArray(compilerContract.CANONICAL)) {
    preflightFail('PREFLIGHT_COMPILER_CANONICAL_MISSING', 'trigger compiler 未导出 CANONICAL token 集');
  }
  const compilerTokens = [...compilerContract.CANONICAL];
  const duplicates = duplicateValues(compilerTokens);
  if (duplicates.length) {
    preflightFail('PREFLIGHT_COMPILER_CANONICAL_DUPLICATE', 'trigger compiler CANONICAL 存在重复 token', { tokens: duplicates });
  }
  const registryTokens = Array.isArray(triggerRegistry && triggerRegistry.canonical_symbols) ? triggerRegistry.canonical_symbols : [];
  const missing = registryTokens.filter(token => !compilerTokens.includes(token));
  const extra = compilerTokens.filter(token => !registryTokens.includes(token));
  if (missing.length || extra.length || compilerTokens.length !== registryTokens.length) {
    preflightFail('PREFLIGHT_COMPILER_CANONICAL_MISMATCH', 'trigger compiler CANONICAL 与 trigger_registry 不一致', { missing, extra });
  }
  if (!compilerContract.PARSER_VERSION) {
    preflightFail('PREFLIGHT_COMPILER_PARSER_VERSION_MISSING', 'trigger compiler 未导出 PARSER_VERSION');
  }
  if (compilerContract.PARSER_VERSION !== triggerRegistry.parser_version) {
    preflightFail('PREFLIGHT_COMPILER_PARSER_VERSION_MISMATCH', 'trigger compiler PARSER_VERSION 与 trigger_registry 不一致', {
      actual: compilerContract.PARSER_VERSION,
      expected: triggerRegistry.parser_version
    });
  }
  return { canonical_count: compilerTokens.length, parser_version: compilerContract.PARSER_VERSION };
}

function loadRepoBundle(options = {}) {
  const dataDir = path.resolve(options.dataDir || DATA_DIR);
  const paths = {
    triggerRegistry: path.join(dataDir, FILES.triggerRegistry),
    mappingRegistry: path.join(dataDir, FILES.mappingRegistry),
    mappingData: path.join(dataDir, FILES.mappingData)
  };
  return {
    paths,
    triggerRegistry: readJson(paths.triggerRegistry),
    mappingRegistry: readJson(paths.mappingRegistry),
    mappingData: readJson(paths.mappingData)
  };
}

function runRepoPreflight(options = {}) {
  const bundle = loadRepoBundle(options);
  const result = checker.validateBundle({
    triggerRegistry: bundle.triggerRegistry,
    mappingRegistry: bundle.mappingRegistry,
    mappingData: bundle.mappingData,
    expectedParserVersion: options.expectedParserVersion || 'trigger-parser-v0.1',
    expectedMappingVersion: options.expectedMappingVersion || '世界观_机器映射_v0.1'
  });
  const compiler = validateCompilerContract(bundle.triggerRegistry, options.compilerContract || triggerCompiler);
  return {
    status: 'PASS',
    preflight_version: 'repo-preflight-v0.1',
    files: bundle.paths,
    summary: { ...result, compiler }
  };
}

if (require.main === module) {
  try {
    const result = runRepoPreflight();
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
  } catch (err) {
    process.stderr.write(JSON.stringify({
      status: 'FAIL',
      error_code: err.code || 'PREFLIGHT_ERROR',
      message: err.message,
      detail: err.detail || null
    }, null, 2) + '\n');
    process.exitCode = 1;
  }
}

module.exports = { DATA_DIR, FILES, readJson, validateCompilerContract, loadRepoBundle, runRepoPreflight };
