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

## VERIFY_FULL｜7 master claims

These are not internal effect rules until tested:

| master | validation target |
|---|---|
| M09 | Identity locking ↔ editability sweet spot |
| M20 | short memory + long anchor benefit |
| M21 | selected history vs full history benefit |
| M24 | anchor/recache effect on long drift |
| M38 | approved still → motion production benefit |
| M39 | short-beat vs longtake economic boundary |
| M62 | cache speedup ↔ quality regression Pareto |

## Remaining project validation gaps｜12

1. V-GAP01｜4080 VRAM/RAM/temperature/264f/timeout/concurrency/throughput
2. V-GAP02｜H3 local quant/cache/offload/steps/resolution/frame Pareto
3. V-GAP03｜Wan local optimization Pareto
4. V-GAP04｜real TASK×MODEL×VERSION matrix for project assets
5. V-GAP05｜reference-slot sweet spot
6. V-GAP06｜identity↔editability threshold
7. V-GAP07｜30s/60s LongTake memory/anchor strategy
8. V-GAP08｜Local Retake real benefit + preservation
9. V-GAP09｜VLM per-failure-family recall/precision/false-positive/uncertain-rate
10. V-GAP10｜USER preference vs machine-metric calibration
11. V-GAP11｜dialogue/lip-sync/voice/room-tone/audio continuity
12. V-GAP12｜project-specific jurisdiction/provider/input-rights/disclosure/C2PA profile

## Absorbed pack promotion rule

ABS-R1 / ABS-R2 / ABS-R3 / ABS-R4 are currently ROUTED.

- DIRECT structural rules may be used while ROUTED.
- SPLIT exposes only structural fields/guards; effect claims remain WAIT_TEST.
- VERIFY_FULL entries remain validation candidates.
- CONNECTED requires proof an executor actually loaded/used the rule.
- VERIFIED requires frozen test evidence.
- USER-ground-truth tests cannot self-promote.
