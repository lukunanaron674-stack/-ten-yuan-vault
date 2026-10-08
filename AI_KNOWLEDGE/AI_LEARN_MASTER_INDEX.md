# AI_LEARN MASTER INDEX

Status model: DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

GitHub is the versioned Single Source of Truth. ChatGPT researches/compiles; Worker/Codex/Domain Agents load only the minimum relevant knowledge IDs or absorbed pack needed for a task.

## 0｜SOCIAL→US absorbed pack registry

Source master:
- `AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_MASTER_v2_20261008.md`
- RAW = 280
- MASTER = 66
- DIRECT = 40
- SPLIT = 19
- VERIFY = 7
- BROAD_RESEARCH = STOP

Absorbed packs:

| pack_id | file | status | scope |
|---|---|---|---|
| ABS-R1 | `AI_KNOWLEDGE/ABSORBED/R1_RELIABLE_PRODUCTION_AND_AGENCY_v1.md` | ROUTED | reliable production / state / multi-agent / HITL |
| ABS-R2 | `AI_KNOWLEDGE/ABSORBED/R2_VISUAL_MEMORY_CONTINUITY_DIRECTOR_v1.md` | ROUTED | reference / memory / continuity / director / camera |
| ABS-R3 | `AI_KNOWLEDGE/ABSORBED/R3_QA_RETAKE_AND_HUMAN_GATE_v1.md` | ROUTED | QA / retake / uncertainty / USER gate |
| ABS-R4 | `AI_KNOWLEDGE/ABSORBED/R4_PRODUCTION_AUDIO_MODEL_OPS_COMPLIANCE_v1.md` | ROUTED | production economics / audio-post / model ops / compliance |

Rules:
- DIRECT content may be used as structure/process knowledge.
- SPLIT content may use only the absorbed structure; its effect claim remains WAIT_TEST.
- VERIFY content is not an execution rule; it is only a validation candidate.
- `ROUTED` does not mean `CONNECTED`.
- No pack may self-promote to VERIFIED/AI_LEARNED.

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

```text
TASK
→ classify domain / target issue
→ MASTER INDEX
→ load minimum capability IDs or one ABS-Rx pack
→ load only task-relevant Mxx sections
→ executor
→ evidence
```

Do not load all 66 MASTER entries by default.
Do not load all four absorbed packs when one pack or a few Mxx sections are enough.
Do not treat model familiarity with a concept as AI_LEARNED.


## SOCIAL→US absorbed pack registry

Source master: `AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_MASTER_v2_20261008.md`

- RAW = 280
- MASTER = 66
- DIRECT = 40
- SPLIT = 19
- VERIFY = 7
- BROAD_RESEARCH = STOP

| pack_id | file | status |
|---|---|---|
| ABS-R1 | `AI_KNOWLEDGE/ABSORBED/R1_RELIABLE_PRODUCTION_AND_AGENCY_v1.md` | ROUTED |
| ABS-R2 | `AI_KNOWLEDGE/ABSORBED/R2_VISUAL_MEMORY_CONTINUITY_DIRECTOR_v1.md` | ROUTED |
| ABS-R3 | `AI_KNOWLEDGE/ABSORBED/R3_QA_RETAKE_AND_HUMAN_GATE_v1.md` | ROUTED |
| ABS-R4 | `AI_KNOWLEDGE/ABSORBED/R4_PRODUCTION_AUDIO_MODEL_OPS_COMPLIANCE_v1.md` | ROUTED |

Rules:
- DIRECT may be used as structural/process knowledge.
- SPLIT exposes only the structural half; effect claims remain WAIT_TEST.
- VERIFY is a validation candidate, not a production guarantee.
- ROUTED does not mean CONNECTED / VERIFIED / AI_LEARNED.
- Load only the minimum pack/Mxx sections needed for the task.
