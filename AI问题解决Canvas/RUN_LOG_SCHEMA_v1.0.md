# RUN_LOG_SCHEMA v1.0

> status: ACTIVE
> updated: 2026-10-04
> parent: F-LONGRUN / F-STATE / F-RECOVERY
> purpose: 每小时/长流程 Agent 的可恢复、可验证运行日志契约

## 运行记录字段

```yaml
run_id:
cycle_id:
timestamp:
current_node:
selected_reason:
agents_called: []
compute_requirement:          # LIGHT / RTX3070 / READY_FOR_4080
state_before:
invariants: []
work_requested:
work_executed:
artifact_refs: []
receipt_refs: []
evidence_delta:
state_after:
first_failure:
failure_class:
recovery_action:
rollback_target:
retry_count:
retry_budget:
escalation_condition:
status:                       # CYCLE_DONE / NO_OP / USER_REVIEW / BLOCKED / STOP_REACHED
next_min_action:
sync:
  linear:
  md:
  canvas:
  next_action_written:
```

## 完成约束

1. `evidence_delta` 为空，不得标 CYCLE_DONE。
2. Linear + MD + Canvas + Next Action 任一缺失，视为 sync incomplete；下一轮优先 RECOVER。
3. 4090 Cloud = RETIRED。
4. 当前 ACTIVE_COMPUTE = Windows RTX 3070 Laptop。
5. RTX 4080 32GB = PENDING_INTEGRATION；重 GPU 工作记为 READY_FOR_4080，不误报 BLOCKED。
6. Recover before Create；Verify before Expand。
7. Retry 前先分类 failure；禁止无脑重复施工。
8. SUCCESS 自报不是 Completion Evidence，必须有真实 receipt / artifact / verifier 证据。

## Failure Class

- MODEL_ERROR
- TOOL_ERROR
- STATE_ERROR
- ASSET_ERROR
- ENVIRONMENT_ERROR
- EVALUATION_ERROR
- SYNC_INCOMPLETE
- EXTERNAL_PREREQUISITE

## 调度循环

`SCAN → RECOVER → VERIFY → DISPATCH → WORK → UPDATE`
