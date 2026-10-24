// core/lease-lock.js — 租约锁 v0.9
// 防止多页面同时执行

const DEFAULT_LEASE_MS = 120000; // 2 分钟

function isLeaseValid(state) {
  if (!state || !state.leaseUntil) return false;
  return state.leaseUntil > Date.now();
}

function clearExpiredLease(state) {
  if (state.leaseUntil && state.leaseUntil <= Date.now()) {
    state.leaseUntil = 0;
  }
  return state;
}

function computeLeaseUntil(leaseMs = DEFAULT_LEASE_MS) {
  return Date.now() + leaseMs;
}

function acquireLease(state, leaseMs = DEFAULT_LEASE_MS) {
  clearExpiredLease(state);
  if (isLeaseValid(state)) return false;
  state.leaseUntil = computeLeaseUntil(leaseMs);
  return true;
}

function releaseLease(state) {
  state.leaseUntil = 0;
  return state;
}

function getLeaseRemaining(state) {
  if (!isLeaseValid(state)) return 0;
  return Math.max(0, state.leaseUntil - Date.now());
}

function getLeaseStatus(state) {
  if (!state) return { locked: false, remaining: 0 };
  const locked = isLeaseValid(state);
  return {
    locked,
    remaining: locked ? getLeaseRemaining(state) : 0,
    activeTabId: locked ? state.activeTabId : null
  };
}

export {
  DEFAULT_LEASE_MS,
  isLeaseValid,
  clearExpiredLease,
  computeLeaseUntil,
  acquireLease,
  releaseLease,
  getLeaseRemaining,
  getLeaseStatus
};
