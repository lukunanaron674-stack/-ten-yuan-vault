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

## External knowledge routing

外部知识不得直接进入执行器。固定入口：

674-272 intake
→ INTERNAL_Z_ROUTE_REGISTRY
→ existing target Z
→ candidate experiment
→ verification
→ optional canonical promotion.

已注册主路由：
- 674-104：十元感受核 / 五轴 / 五维
- 674-105：生克补 / 对子 / 动态链
- 674-106：跨媒介 / AI理解 / 生成 / Benchmark / H3 / Agent
- 674-118：论文 / RQ / EXP
- 674-282：角色身份 / 多视图 / Canon / 角色实验
- 674-286：B端 / 镜头编排 / H3生产闭环
- 674-276 / 674-116：无法命中或路由冲突时的问题发现

执行器必须记录 external_knowledge_id + target_z + knowledge_version/commit + experiment_id。
未达到 E5 或未通过 canonical gate 时，只能在 candidate/shadow 路径加载，不得覆盖正本。
