# AI_LEARN MASTER INDEX

Status model: DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

GitHub is the versioned Single Source of Truth. ChatGPT researches/compiles; Worker/Codex/Domain Agents load only the minimum relevant knowledge IDs for a task.

## C — Intent & Constraint
- C-PREFERENCE — Preference Learning
- C-CONSTRAINT — Constraint Satisfaction
- C-CONTROLLED-EDIT — Controlled Editing / Disentanglement
- C-REFERENCE — Reference Conditioning
- C-CONSISTENCY — Multi-turn Consistency
- C-CONFLICT — Constraint Conflict Resolution

## D — Agency Control
- D-HITL — Human-in-the-loop
- D-ADJUSTABLE-AUTONOMY — Adjustable Autonomy
- D-MIXED-INITIATIVE — Mixed Initiative
- D-CALIBRATION — Uncertainty Calibration
- D-ABSTENTION — Abstention
- D-RISK — Risk-sensitive Decision
- D-ESCALATION — Escalation Policy
- D-LEAST-PRIVILEGE — Least Privilege / Approval Gate

## E — Evaluation
- E-TASK-SUCCESS
- E-CONSTRAINT-EVAL
- E-TRAJECTORY
- E-PROCESS
- E-HUMAN-PREFERENCE
- E-PAIRWISE
- E-INTERRATER
- E-LLM-JUDGE
- E-FAILURE-TAXONOMY
- E-BENCHMARK
- E-LONG-HORIZON
- E-ONLINE

## F — Reliable Production
- F-ORCHESTRATION
- F-STATE
- F-CHECKPOINT
- F-RETRY
- F-RECOVERY
- F-IDEMPOTENCY
- F-SAGA
- F-EVENT-SOURCING
- F-OBSERVABILITY
- F-PROVENANCE
- F-BACKPRESSURE
- F-SCHEDULING
- F-CIRCUIT-BREAKER
- F-SLO
- F-FAILURE-TEST
- F-VERSION-MANIFEST

## Loading rule
TASK → classify capability → MASTER INDEX → minimum knowledge_id set → executor → evidence.

Do not load all 42 entries by default. Do not treat model familiarity with a concept as AI_LEARNED.

## External ingest entry

外部论文 / GitHub / 技术报告 / 行业方法先进入：
- `EXTERNAL_KNOWLEDGE_INGEST_PROTOCOL.md`
- `INTERNAL_Z_ROUTE_REGISTRY.md`
- `ROLLBACK_LEDGER.md`

MASTER INDEX 只在知识完成内部路由后选择最小 knowledge_id set。不得把“外部来源存在”当成 AI_LEARNED，也不得跳过目标 Z 的 E0–E5 / 验证门。
