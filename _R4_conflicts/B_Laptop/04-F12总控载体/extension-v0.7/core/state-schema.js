// core/state-schema.js — 状态 schema 校验与版本管理 v0.9

const SCHEMA_VERSION = '0.9.0';
const STATE_KEY = 'TY_F12_STATE_V09';

function getDefaultState() {
  return {
    schemaVersion: SCHEMA_VERSION,
    controllerSessionId: crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random()*16|0; return (c==='x'?r:(r&0x3|0x8)).toString(16); }),
    activeTabId: null,
    activeUrl: '',
    activeTitle: '',
    running: false,
    stopped: true,
    manualPause: false,
    leaseUntil: 0,
    lastStatus: 'idle',
    tasks: [],taskMetas: [],
    index: 0,
    total: 0,
    logs: [],
    carryPackets: [],
    errors: [],
    projectName: '',
    frameName: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function getStateVersion() {
  return SCHEMA_VERSION;
}

function normalizeState(input) {
  if (!input || typeof input !== 'object') return getDefaultState();

  const def = getDefaultState();
  const out = { ...def };

  // 复制已知字段，类型保护
  const strFields = ['schemaVersion', 'controllerSessionId', 'activeUrl', 'activeTitle', 'lastStatus', 'projectName', 'frameName', 'createdAt', 'updatedAt'];
  const numFields = ['activeTabId', 'index', 'total', 'leaseUntil'];
  const boolFields = ['running', 'stopped', 'manualPause'];
  const arrFields = ['tasks', 'logs', 'carryPackets', 'errors'];

  for (const f of strFields) {
    if (typeof input[f] === 'string') out[f] = input[f];
  }
  for (const f of numFields) {
    if (typeof input[f] === 'number') out[f] = input[f];
  }
  for (const f of boolFields) {
    if (typeof input[f] === 'boolean') out[f] = input[f];
  }
  for (const f of arrFields) {
    if (Array.isArray(input[f])) out[f] = input[f];
  }

  // 确保 index 不越界
  if (out.index < 0) out.index = 0;
  if (out.tasks && out.index >= out.tasks.length) out.index = Math.max(0, (out.tasks.length || 1) - 1);
  if (out.total === 0 && out.tasks) out.total = out.tasks.length;

  // 确保 controllerSessionId 存在
  if (!out.controllerSessionId) {
    out.controllerSessionId = def.controllerSessionId;
  }

  return out;
}

function validateState(input) {
  const errors = [];

  if (!input || typeof input !== 'object') {
    errors.push('Input is not an object');
    return { valid: false, errors };
  }

  if (!Array.isArray(input.tasks)) errors.push('tasks must be an array');
  if (typeof input.index !== 'number' || input.index < 0) errors.push('index must be a non-negative number');

  // 只警告不阻断
  if (!input.schemaVersion) errors.push('schemaVersion is missing');
  if (!input.controllerSessionId) errors.push('controllerSessionId is missing');
  if (!input.createdAt) errors.push('createdAt is missing');

  return { valid: errors.filter(e => !e.includes('missing')).length === 0, errors };
}

function migrateState(input) {
  if (!input || typeof input !== 'object') return getDefaultState();

  const version = input.schemaVersion || '0.7.0';

  // v0.7 → v0.8 迁移：补全缺失字段
  if (!input.stopped) input.stopped = input.running ? false : true;
  if (!input.manualPause && input.manualPause !== false) input.manualPause = false;
  if (!input.total) input.total = input.tasks ? input.tasks.length : 0;
  if (!input.activeTitle) input.activeTitle = '';
  if (!input.errors) input.errors = [];
  if (!input.projectName) input.projectName = '';
  if (!input.frameName) input.frameName = '';

  // v0.8 → v0.9 迁移：加 schemaVersion
  if (!input.schemaVersion || input.schemaVersion < SCHEMA_VERSION) {
    input.schemaVersion = SCHEMA_VERSION;
  }

  return input;
}

function migrateAndNormalize(input) {
  const migrated = migrateState(input);
  return normalizeState(migrated);
}

export {
  SCHEMA_VERSION,
  STATE_KEY,
  getDefaultState,
  getStateVersion,
  normalizeState,
  validateState,
  migrateState,
  migrateAndNormalize
};

