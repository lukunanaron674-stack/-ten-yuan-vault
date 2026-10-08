# EXECUTOR ROUTING

## Roles
- CHATGPT: research, compile, intent interpretation, planning, knowledge maintenance.
- WORKER: asset/file/state/manifest/queue/provenance mechanical execution.
- CODEX: code, automation, pipeline, engineering implementation and machine tests.
- DOMAIN AGENT: load domain-specific knowledge only.

## Base routing
- Intent / constraint interpretation → CHATGPT / Intent Agent → C
- Controlled editing / preservation → Visual Agent + CODEX → C-CONTROLLED-EDIT + C-CONSISTENCY
- Autonomy / whether to interrupt USER → Agency Agent → D-ADJUSTABLE-AUTONOMY + D-CALIBRATION + D-ESCALATION
- Outcome / constraint evaluation → Evaluation Agent → E-TASK-SUCCESS + E-CONSTRAINT-EVAL
- Trajectory evaluation → Evaluation Agent → E-TRAJECTORY
- Benchmark / blind test → Evaluation Agent + CHATGPT → E-BENCHMARK
- Workflow / state → WORKER + CODEX → F-ORCHESTRATION + F-STATE
- Retry / recovery → WORKER + CODEX → F-RETRY + F-RECOVERY
- Duplicate execution protection → CODEX + WORKER → F-IDEMPOTENCY
- Provenance → WORKER + CODEX → F-PROVENANCE
- Observability → WORKER + CODEX → F-OBSERVABILITY

Production executor must not self-author and self-grade its benchmark.

---

# Absorbed pack routing｜2026-10-08

## ABS-R1｜Reliable Production + Agency

Load:
`AI_KNOWLEDGE/ABSORBED/R1_RELIABLE_PRODUCTION_AND_AGENCY_v1.md`

Primary:
- 674-77｜系统协议 / agent runtime

Secondary:
- 674-116｜问题判断 / 去重 / 调度
- 674-276｜Z→XN→PATH
- 674-294｜Recover Before Create

Executors:
WORKER + CODEX + orchestration agent

Use for:
object/state/version/checkpoint/idempotency/packet/handoff/termination/trace.

## ABS-R2｜Visual / Memory / Continuity / Director

Load:
`AI_KNOWLEDGE/ABSORBED/R2_VISUAL_MEMORY_CONTINUITY_DIRECTOR_v1.md`

Routes:
- M07–M18 → 674-282 / 293 / 124 / 173
- M19–M25 → 674-286 / 289 / 216
- M43–M49 → 674-76 / 286 / 289

Executors:
Visual Agent + B-end/Director Agent + WORKER + H3 executor

Use for:
reference roles, entity memory, approved asset resolution, continuity state, shot packet, blocking, camera, storyboard/animatic, previs.

## ABS-R3｜QA / Retake / USER Gate

Load:
`AI_KNOWLEDGE/ABSORBED/R3_QA_RETAKE_AND_HUMAN_GATE_v1.md`

Routes:
- USER canonical decision → 674-173
- H3 review evidence/version → 674-289
- repair/retry/replan → 674-286
- evidence method / benchmark → 674-106

Executors:
Evaluation Agent + review agent + USER gate

Use for:
quality axes, failure localization, ambiguity state, local repair regression, machine-prepass vs USER final approval.

## ABS-R4｜Production / Audio / Model Ops / Compliance

Load:
`AI_KNOWLEDGE/ABSORBED/R4_PRODUCTION_AUDIO_MODEL_OPS_COMPLIANCE_v1.md`

Routes:
- project / commercial production policy → 674-76
- model-by-job / B-end production → 674-286
- video/delivery/version facts → 674-289
- runtime / queue / performance implementation → 674-77
- external terms / license / source refresh → 674-272

Executors:
B-end/Director Agent + Audio/Post Agent + WORKER + CODEX

Use for:
preproduction gates, recipe/take logs, audio timeline, post/delivery package, performance profiles, model-version routing, rights/license/provenance.

---

# Loading constraints

1. Resolve the target issue through the 22-issue router before loading a pack.
2. Load only the pack and Mxx sections required by the task.
3. VERIFY pointers are not execution rules.
4. SPLIT claims may use structure but not unverified effect assertions.
5. If a task requires current provider/model/license facts, refresh the date-stamped external fact before acting.
6. USER canonical review remains 674-173; machine review cannot override it.

## Required execution evidence

```text
knowledge_id / pack_id
knowledge_version / commit
executor
target_issue
task_id
input_version
timestamp
result / evidence
```

ROUTED means a route exists.
CONNECTED requires proof the executor actually loads/uses the referenced knowledge.
VERIFIED requires behavioral test evidence.
