'use strict';

const fs = require('fs');
const path = require('path');
const checker = require('./data_compile_check_v0.1.js');

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
  return {
    status: 'PASS',
    preflight_version: 'repo-preflight-v0.1',
    files: bundle.paths,
    summary: result
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

module.exports = { DATA_DIR, FILES, readJson, loadRepoBundle, runRepoPreflight };
