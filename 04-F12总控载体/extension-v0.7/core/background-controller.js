// core/background-controller.js — F12 调度控制器 v0.9
// background.js 的 handler 函数集合

import { executeTaskOnWorker, stopWorker } from './message-router.js';
import { isLeaseValid, acquireLease } from './lease-lock.js';
import { STATE_KEY } from './state-schema.js';

// ======== 发送当前 ========

async function handleExecuteCurrent(state, saveState, addLog, addError) {
  if (!state.tasks || state.tasks.length === 0) return { ok: false, error: 'No tasks' };
  if (state.index >= state.tasks.length) return { ok: false, error: 'All tasks completed' };
  if (!state.activeTabId) return { ok: false, error: 'No active tab set' };
  if (state.running) return { ok: false, error: 'Already running' };

  state.running = true;
  state.lastStatus = 'sending';
  const task = state.tasks[state.index];
  addLog(state, 'INFO', `Sending current R${state.index + 1}/${state.tasks.length}`);
  await saveState(state);

  try {
    const result = await executeTaskOnWorker(state.activeTabId, task, state.index, state.tasks.length);
    if (result && result.ok) {
      state.index++;
      state.running = false;
      state.lastStatus = state.index >= state.tasks.length ? 'all_done' : 'ready_next';

      // CarryPacket 检查
      if ((state.index % 5 === 0 || state.index >= state.tasks.length) && state.index > 0) {
        state.lastStatus = 'carry_packet_due';
        addLog(state, 'SYNC', `CarryPacket due at R${state.index}`);
      }
    } else {
      state.running = false;
      state.lastStatus = 'manual_pause';
      state.manualPause = true;
      addError(state, 'Send failed', result?.error || 'unknown');
    }
    await saveState(state);
    return { ok: true, ...result };
  } catch (e) {
    state.running = false;
    state.lastStatus = 'manual_pause';
    state.manualPause = true;
    addError(state, 'Content script unavailable', e.message);
    await saveState(state);
    return { ok: false, error: e.message };
  }
}

// ======== 自动续跑 ========

async function handleStart(state, saveState, addLog, addError, loadStateFn) {
  if (!state.tasks || state.tasks.length === 0) return { ok: false, error: 'No tasks' };
  if (state.index >= state.tasks.length) return { ok: false, error: 'All tasks completed' };
  if (!state.activeTabId) return { ok: false, error: 'No active tab set' };
  if (state.running) return { ok: false, error: 'Already running' };

  state.running = true;
  state.manualPause = false;
  state.lastStatus = 'auto_running';
  addLog(state, 'INFO', `Auto-run started from R${state.index + 1}`);
  await saveState(state);

  return runAutoLoop(state.activeTabId, saveState, addLog, addError, loadStateFn);
}

// ======== 停止 ========

async function handleStop(state, saveState, addLog) {
  state.running = false;
  state.manualPause = false;
  state.lastStatus = 'stopped';
  addLog(state, 'USER', 'Stopped');
  await saveState(state);
  try { await stopWorker(state.activeTabId); } catch (e) {}
  return { ok: true };
}

// ======== 暂停 ========

async function handlePause(state, saveState, addLog) {
  state.running = false;
  state.manualPause = true;
  state.lastStatus = 'manual_pause';
  addLog(state, 'USER', 'Paused', `at R${state.index + 1}`);
  await saveState(state);
  return { ok: true };
}

// ======== 继续 ========

async function handleResume(state, saveState, addLog, addError, loadStateFn) {
  if (!state.tasks || state.tasks.length === 0) return { ok: false, error: 'No tasks' };
  if (state.index >= state.tasks.length) return { ok: false, error: 'All tasks completed' };
  if (!state.activeTabId) return { ok: false, error: 'No active tab set' };

  state.manualPause = false;
  state.running = true;
  state.lastStatus = 'auto_running';
  addLog(state, 'USER', 'Resumed', `from R${state.index + 1}`);
  await saveState(state);

  return runAutoLoop(state.activeTabId, saveState, addLog, addError, loadStateFn);
}

// ======== 试跑 N 轮 ========

async function handleRunNRounds(state, saveState, addLog, addError, loadStateFn, n = 2) {
  if (!state.tasks || state.tasks.length === 0) return { ok: false, error: 'No tasks' };
  if (state.index >= state.tasks.length) return { ok: false, error: 'All tasks completed' };
  if (!state.activeTabId) return { ok: false, error: 'No active tab set' };
  if (state.running) return { ok: false, error: 'Already running' };

  state.running = true;
  state.lastStatus = 'trial_running';
  addLog(state, 'INFO', `Trial run: ${n} rounds from R${state.index + 1}`);
  await saveState(state);

  return runTrialLoop(state.activeTabId, n, saveState, addLog, addError, loadStateFn);
}

// ======== 强制完成 ========

async function handleForceComplete(state, saveState, addLog) {
  if (!state.tasks || state.index >= state.tasks.length) return { ok: false, error: 'All tasks completed' };
  const prev = state.index;
  state.index++;
  state.lastStatus = state.index >= state.tasks.length ? 'all_done' : 'ready_next';
  addLog(state, 'USER', `Force completed R${prev + 1}`);
  await saveState(state);
  return { ok: true, index: state.index };
}

// ======== 强制重试 ========

async function handleRetry(state, saveState, addLog, addError) {
  if (!state.tasks || state.tasks.length === 0) return { ok: false, error: 'No tasks' };
  if (state.index >= state.tasks.length) return { ok: false, error: 'All tasks completed' };
  if (!state.activeTabId) return { ok: false, error: 'No active tab set' };

  addLog(state, 'USER', `Force retry R${state.index + 1}`);
  state.lastStatus = 'force_retry';
  await saveState(state);

  try {
    const result = await executeTaskOnWorker(state.activeTabId, state.tasks[state.index], state.index, state.tasks.length);
    if (result && result.ok) {
      state.index++;
      state.lastStatus = state.index >= state.tasks.length ? 'all_done' : 'ready_next';
    } else {
      addError(state, 'Force retry failed', result?.error || 'unknown');
    }
    await saveState(state);
    return { ok: true, result };
  } catch (e) {
    addError(state, 'Force retry: worker lost', e.message);
    await saveState(state);
    return { ok: false, error: e.message };
  }
}

// ======== 生成 CarryPacket ========

async function handleGenerateCarry(state, saveState, addLog, markdown, project, frame) {
  const start = Math.floor((state.index) / 5) * 5 + 1;
  const end = state.index;
  const rangeStr = `R${String(start).padStart(3, '0')}-R${String(end).padStart(3, '0')}`;
  const suggestedPath = `99-归档包/${project}/${frame}/carry/${rangeStr}-记忆承载包.md`;

  const packet = {
    range: rangeStr,
    round_from: start,
    round_to: end,
    status: 'generated',
    markdown,
    suggestedPath,
    project,
    frame,
    createdAt: new Date().toISOString()
  };

  if (!state.carryPackets) state.carryPackets = [];
  state.carryPackets.push(packet);
  addLog(state, 'SYNC', `CarryPacket recorded: ${rangeStr}`);
  await saveState(state);
  return { ok: true, packet };
}

// ======== 自动续跑循环 ========

async function runAutoLoop(activeTabId, saveState, addLog, addError, loadStateFn) {
  let state = await loadStateFn();

  while (state.running && state.index < state.tasks.length) {
    const task = state.tasks[state.index];
    addLog(state, 'INFO', `Auto-run: sending R${state.index + 1}/${state.tasks.length}`);

    let result;
    try {
      result = await executeTaskOnWorker(activeTabId, task, state.index, state.tasks.length);
    } catch (e) {
      state.running = false;
      state.lastStatus = 'manual_pause';
      state.manualPause = true;
      addError(state, 'Auto-run: worker lost', e.message);
      await saveState(state);
      return { ok: false, error: 'Worker lost: ' + e.message };
    }

    if (!result || !result.ok) {
      state.running = false;
      state.lastStatus = 'manual_pause';
      state.manualPause = true;
      addError(state, 'Auto-run: task failed', result?.error || 'unknown');
      await saveState(state);
      return { ok: false, error: 'Task failed: ' + (result?.error || 'unknown') };
    }

    state.index++;
    state.lastStatus = state.index >= state.tasks.length ? 'all_done' : 'ready_next';
    addLog(state, 'INFO', `Auto-run: R${state.index} done`);

    if ((state.index % 5 === 0 || state.index >= state.tasks.length) && state.index > 0) {
      state.lastStatus = 'carry_packet_due';
      addLog(state, 'SYNC', `CarryPacket due at R${state.index}`);
    }

    await saveState(state);
    state = await loadStateFn();

    if (!state.running || state.manualPause) return { ok: true, paused: true };
  }

  if (state.index >= state.tasks.length) {
    state.running = false;
    state.lastStatus = 'all_done';
    addLog(state, 'SYNC', 'All tasks completed');
    await saveState(state);
  }

  return { ok: true };
}

// ======== 试跑循环 ========

async function runTrialLoop(activeTabId, count, saveState, addLog, addError, loadStateFn) {
  let state = await loadStateFn();
  let runCount = 0;

  while (state.running && state.index < state.tasks.length && runCount < count) {
    const task = state.tasks[state.index];
    addLog(state, 'INFO', `Trial: R${state.index + 1} (${runCount + 1}/${count})`);

    let result;
    try {
      result = await executeTaskOnWorker(activeTabId, task, state.index, state.tasks.length);
    } catch (e) {
      state.running = false;
      addError(state, 'Trial: worker lost', e.message);
      await saveState(state);
      return { ok: false, error: e.message };
    }

    if (!result || !result.ok) {
      state.running = false;
      addError(state, 'Trial: task failed', result?.error || 'unknown');
      await saveState(state);
      return { ok: false, error: result?.error || 'unknown' };
    }

    state.index++;
    runCount++;
    state.lastStatus = 'trial_running';
    await saveState(state);
    state = await loadStateFn();
  }

  state.running = false;
  state.lastStatus = state.index >= state.tasks.length ? 'all_done' : 'ready_next';
  addLog(state, 'INFO', `Trial done: ${runCount} rounds`);
  await saveState(state);
  return { ok: true, rounds: runCount };
}

export {
  handleExecuteCurrent,
  handleStart,
  handleStop,
  handlePause,
  handleResume,
  handleRunNRounds,
  handleForceComplete,
  handleRetry,
  handleGenerateCarry
};
