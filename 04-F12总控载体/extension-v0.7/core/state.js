// core/state.js — chrome.storage.local 状态仓 v0.9

import { STATE_KEY, getDefaultState } from './state-schema.js';

async function loadState() {
  const result = await chrome.storage.local.get(STATE_KEY);
  if (result[STATE_KEY]) return result[STATE_KEY];
  const fresh = getDefaultState();
  await chrome.storage.local.set({ [STATE_KEY]: fresh });
  return fresh;
}

async function saveState(state) {
  state.updatedAt = new Date().toISOString();
  await chrome.storage.local.set({ [STATE_KEY]: state });
}

async function patchState(patch) {
  const state = await loadState();
  Object.assign(state, patch);
  state.updatedAt = new Date().toISOString();
  await saveState(state);
  return state;
}

async function resetState() {
  const fresh = getDefaultState();
  await chrome.storage.local.set({ [STATE_KEY]: fresh });
  return fresh;
}

export { STATE_KEY, loadState, saveState, patchState, resetState };
