# EXECUTOR ROUTING

## Roles
- CHATGPT: research, compile, intent interpretation, planning, knowledge maintenance.
- WORKER: asset/file/state/manifest/queue/provenance mechanical execution.
- CODEX: code, automation, pipeline, engineering implementation and machine tests.
- DOMAIN AGENT: load domain-specific knowledge only (Intent=C, Agency=D, Evaluation=E, etc.).

## Routing
- Intent / constraint interpretation → CHATGPT / Intent Agent → C
- Controlled editing / preservation → Visual Agent + CODEX → C-CONTROLLED-EDIT + C-CONSISTENCY
- Autonomy / whether to interrupt 74 → Agency Agent → D-ADJUSTABLE-AUTONOMY + D-CALIBRATION + D-ESCALATION
- Outcome / constraint evaluation → Evaluation Agent → E-TASK-SUCCESS + E-CONSTRAINT-EVAL
- Trajectory evaluation → Evaluation Agent → E-TRAJECTORY
- Benchmark / blind test → Evaluation Agent + CHATGPT → E-BENCHMARK; production executor must not self-author and self-grade the benchmark
- Workflow / state → WORKER + CODEX → F-ORCHESTRATION + F-STATE
- Retry / recovery → WORKER + CODEX → F-RETRY + F-RECOVERY
- Duplicate execution protection → CODEX + WORKER → F-IDEMPOTENCY
- Provenance → WORKER + CODEX → F-PROVENANCE
- Observability → WORKER + CODEX → F-OBSERVABILITY

## Required execution evidence
knowledge_id; knowledge_version/commit; executor; task_id; input_version; timestamp; result/evidence.

ROUTED means a route exists. CONNECTED requires proof the executor actually loads/uses the referenced knowledge. VERIFIED requires behavioral test evidence.