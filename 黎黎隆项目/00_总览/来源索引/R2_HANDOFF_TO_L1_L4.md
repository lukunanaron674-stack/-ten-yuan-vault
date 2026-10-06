---
title: R2 Handoff to L1-L4
tags: [lililong, source-ingestion, handoff]
---

# R2 Handoff to L1–L4

本轮仅从 raw session 抽取可定位短证据并区分 role，不判断真实问题、因果、冲突成立与否，不建立 Q、不改 Problem State、Canvas 或 canonical。

- rebuilt sessions: 96 / expected 96
- raw processed: 88; C scope-excluded: 6; blocked: 2
- buckets: A=11; B=34; C=6; D=45
- outcomes: AMBIGUOUS_RAW=25; BLOCKED_RAW_LOCKED=2; DEMOTE_FALSE_POSITIVE=13; MIXED_KEEP_SEGMENTS=22; OTHER_OR_MIXED_SCOPE_EXCLUDED=6; PROMOTE_PROJECT_SOURCE=28
- evidence items: 307; user=66; assistant=241; tool/receipt=0
- conflict candidates: 0 (unresolved candidates only)

## Next

请 L1–L4 回到每条 evidence 的 raw `session_path` 与 line/message locator，判断事实、冲突、rejected、hypothesis；R2 的 bucket/outcome 不是 Problem State 裁决。
