# AI_LEARN VERIFICATION MATRIX

R3 purpose: prevent KNOWLEDGE_READY/CONNECTED from being mistaken for AI_LEARNED.

## State gate
DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

AI_LEARNED requires evidence. No evidence = PARTIAL / WAIT_TEST.

## MACHINE_VERIFY — do not consume 74 attention when objective tests suffice

| knowledge_id | test | PASS evidence |
|---|---|---|
| F-IDEMPOTENCY | execute same task/execution key twice | official side effect occurs once; execution records/hashes retained |
| F-RECOVERY | force interruption mid-run then resume | resumes from valid checkpoint without corrupt/duplicate official output |
| F-PROVENANCE | sample an output asset | can reconstruct task, input, model/tool, parameters/version and producing executor |
| F-VERSION-MANIFEST | change/re-run versioned input | manifest identifies exact input/output versions and hashes |
| F-OBSERVABILITY | inject/observe a failure | evidence answers who/when/where/what/why sufficiently to locate first failure |
| F-BACKPRESSURE | overload queue/worker capacity | work queues/degrades safely; no silent loss or uncontrolled duplicate execution |
| E-CONSTRAINT-EVAL | frozen constraints with known violations | evaluator detects required violations at agreed threshold before deployment |
| E-TRAJECTORY | seeded first-failure traces | evaluator identifies first meaningful failure rather than only terminal failure |
| D-CALIBRATION | historical/held-out tasks | stated confidence bands correspond to observed success/failure rates within frozen tolerance |

## HUMAN_AI_VALIDATE — 74 is ground truth

| knowledge_id | frozen protocol | comparison |
|---|---|---|
| C-PREFERENCE | AI predicts 74 choice before reveal | prediction vs actual accept/reject/choice |
| C-CONTROLLED-EDIT | freeze allowed variable A and protected B/C/D | 74 judges protected-variable drift |
| C-CONSISTENCY | freeze asset and edit sequence; run 5–10 turns | 74 judges cumulative identity/style/structure drift |
| D-ADJUSTABLE-AUTONOMY / D-ESCALATION | freeze task set and gate policy | False Escalation + Missed Escalation |
| E-HUMAN-PREFERENCE | evaluator predicts accept/rework/reject before 74 review | prediction vs 74 decision |
| E-BENCHMARK | freeze cases and ground truth before evaluated system sees answers | no self-authored/self-graded success claim |
| E-LONG-HORIZON | freeze long-run task and checkpoints | quality/error accumulation compared with 74 acceptance and machine metrics |

## Promotion rules
1. Knowledge documentation alone → KNOWLEDGE_READY only.
2. Routing table alone → ROUTED only.
3. Runtime proof of loading/using rule → CONNECTED.
4. Passing the appropriate frozen test → VERIFIED.
5. AI_LEARNED only after VERIFIED and registration of evidence/version.
6. If the required ground truth is 74, AI may not self-promote to VERIFIED.
7. Machine-verifiable engineering tests should not be sent to 74 for manual review.

## Current audit
The architecture and verification protocols are frozen by AI_LEARN R1–R3. This file does NOT claim that every listed capability is already CONNECTED or VERIFIED. Individual capabilities remain KNOWLEDGE_READY/ROUTED/PARTIAL until implementation evidence exists.

## External knowledge promotion gate

外部知识接入使用双轨门：

1. AI_LEARN 状态：DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED。
2. 接入证据：E0 → E1 → E2 → E3 → E4 → E5。

只有同时满足：
- 已 ROUTED 到明确 target_z / target_canonical；
- frozen experiment 通过；
- evidence_level = E5；
- regression checks PASS；
- pre_promotion_ref 已记录；
- rollback_ref 已准备并完成 E4 shadow/rollback 演练；
- 需要 74 Ground Truth 时已过 HUMAN_GATE；

才进入 PROMOTION_ELIGIBLE。PROMOTION_ELIGIBLE 仍需目标 canonical gate 才能写正本。

发生回归或证据降级时：
PROMOTED → ROLLED_BACK，并 revert promotion commit；保留 negative evidence，不删除实验历史。
