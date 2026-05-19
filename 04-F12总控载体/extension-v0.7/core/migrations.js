// core/migrations.js — 版本迁移系统 v0.9

import { normalizeState, getDefaultState } from './state-schema.js';

function migrate_0_7_to_0_8(state) {
  if (!state) return getDefaultState();

  const migrated = { ...state };

  // 补全 v0.8 字段
  if (migrated.stopped === undefined) migrated.stopped = migrated.running ? false : true;
  if (migrated.manualPause === undefined) migrated.manualPause = false;
  if (!migrated.total) migrated.total = migrated.tasks ? migrated.tasks.length : 0;
  if (!migrated.activeTitle) migrated.activeTitle = '';
  if (!migrated.errors) migrated.errors = [];
  if (!migrated.projectName) migrated.projectName = '';
  if (!migrated.frameName) migrated.frameName = '';
  migrated.schemaVersion = '0.8.0';

  return migrated;
}

function migrate_0_8_to_0_9(state) {
  if (!state) return getDefaultState();

  const migrated = { ...state };

  // v0.9 字段
  if (!migrated.schemaVersion) migrated.schemaVersion = '0.9.0';
  else migrated.schemaVersion = '0.9.0';

  // 确保 leaseUntil 合理
  if (migrated.leaseUntil && migrated.leaseUntil < Date.now()) {
    migrated.leaseUntil = 0;
  }

  return migrated;
}

function migrateStateToLatest(input) {
  if (!input || typeof input !== 'object') return getDefaultState();

  let state = { ...input };
  const version = state.schemaVersion || '0.0.0';

  if (version < '0.8.0') {
    state = migrate_0_7_to_0_8(state);
  }
  if (state.schemaVersion < '0.9.0') {
    state = migrate_0_8_to_0_9(state);
  }

  return normalizeState(state);
}

function getMigrationPath(version) {
  const path = [];
  if (!version || version < '0.8.0') path.push('migrate_0_7_to_0_8');
  if (version < '0.9.0') path.push('migrate_0_8_to_0_9');
  if (path.length === 0) path.push('current');
  return path;
}

export {
  migrate_0_7_to_0_8,
  migrate_0_8_to_0_9,
  migrateStateToLatest,
  getMigrationPath
};
