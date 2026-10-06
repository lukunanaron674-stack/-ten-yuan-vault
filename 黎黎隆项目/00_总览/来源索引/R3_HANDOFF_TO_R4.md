---
title: R3 Handoff to R4
tags:
  - lililong
  - source-ingestion
  - handoff
status: CANDIDATE
linear_issue: 674-102
---

# R3 → R4 交接

## R3 结果

- R2 输入已核验：307 evidence / 58 有证据 session；user/assistant/tool-receipt = 66/241/0。
- 现有 Q 增量候选：仅 Q-ASSET-001 一项（H3 reference asset handoff）；未写原卡。
- 新 Q：0；未分配 candidate_id 或正式 Q-ID。
- CHAR、WORLD、SCENE、PIPE 内容多为参考、候选、assistant proposal 或任务说明，不足以重开/升级当前 Q。
- 有一项问题系统自身状态同步差异：Q-CHAR-001.4 总纲为 BLOCKED，卡片与 Canvas 为 DONE；R3 未裁决。
- 两条 raw session 因文件锁未能实际读取；它们已在 R2 adjudication 标 BLOCKED_RAW_LOCKED。R3 不对其补证。
- R3 输出 6 份文件；未改 Canvas、正式 Q、canonical。

## R4（174 LIKELY sources）建议核验清单

1. 优先回读 `R2E-00059/00060` 对应的原始 session 和当前任务 JSON、H3 workflow、真实 prompt/output receipt：判明 asset handoff 缺口是否仍存在，以及是否只是旧版报告；若仍是同一资产 provenance 范围，追加到原 [[Q-ASSET-001_旧角色设定和新设定谁优先]]，不得建重复卡。
2. 查找能直接支持或反驳 Q-WORLD-001 的用户确认、明确版本文件、SHA 和时间序列；assistant 方案不能作 canonical 证据。
3. 若找到 674-97/98/110 的原始用户确认，核验 Q-CHAR-001.4 的 DONE 证据，再由问题系统维护轮次统一总纲/卡片/Canvas；本轮勿仅凭当前两比一表决。
4. 检查 R2 两条 `BLOCKED_RAW_LOCKED` 对应 raw 是否可安全读取；若锁仍在，继续显式 blocked，不绕过占用进程。
5. 其余 LIKELY 只在存在具体 parent-goal impact、非重复且可写 done condition 时进入 Q 编译；内容/方案/偏好保持 reference-only。

## 交接链接

- 编译总表：[[R3_PROBLEM_COMPILATION]]
- 原 Q delta：[[R3_EXISTING_Q_UPDATES]]
- 新 Q 候选：[[R3_NEW_Q_CANDIDATES]]
- 假设/否决：[[R3_REJECTED_HYPOTHESES]]
- 重复/伪问题：[[R3_DUPLICATE_PSEUDO_MAP]]
- 下一阶段规格：Linear 674-103/R4（按其工单最新正文执行；不能预先替 R4 裁决）。
