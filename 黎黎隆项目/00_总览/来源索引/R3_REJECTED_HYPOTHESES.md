---
title: R3 Rejected Hypotheses
tags:
  - lililong
  - source-ingestion
  - hypothesis-audit
status: CANDIDATE
linear_issue: 674-102
---

# R3｜被否决历史与未证实假设

> R2 只有 307 条 user/assistant evidence，没有 tool/receipt。下列 assistant 叙述不能因为语气确定而成为 `known`。

## 未证实假设 / 待回读

| 假设或报告 | R3 分类 | source_refs | 当前处理 |
|---|---|---|---|
| H3 任务参考图元数据是否真的接入图像/视频节点、SHA 与产物是否一致 | `HYPOTHESIS_ONLY`；`R2E-00060` 是历史 assistant 文件报告 | [[R2_EVIDENCE_PACKET#R2E-00059]]、[[R2_EVIDENCE_PACKET#R2E-00060]] | R4/R5 读取当前 JSON、workflow 与实际 receipt；暂不宣称当前故障或修复完成 |
| 一次森林湖泊视觉失败能否证明 SC-001 的批准背景不合格 | `HYPOTHESIS_ONLY`；`R2E-00100` 为 assistant proposal | [[R2_EVIDENCE_PACKET#R2E-00100]] | 需原始图、prompt、运行记录及 SC-001 批准来源链；Q-SCENE-001 维持 BLOCKED |
| 角色参考图曾被误认为同一身份，或若干头像候选已由用户正式通过/锁定 | `HISTORICAL_ASSISTANT_PROPOSAL`，非用户确认 | [[R2_EVIDENCE_PACKET#R2E-00209]]、[[R2_EVIDENCE_PACKET#R2E-00242]]、[[R2_EVIDENCE_PACKET#R2E-00243]]、[[R2_EVIDENCE_PACKET#R2E-00245]] | 不改角色卡/Canvas，不重开 DONE 卡；需回 raw 找原始 user approval 或逐图审查记录 |
| 青桶规则片段已是世界观 canonical | `NOT_ESTABLISHED`；`R2E-00240/00252` 是用户内容约束但仍需按卡片版本/状态追溯 | [[R2_EVIDENCE_PACKET#R2E-00240]]、[[R2_EVIDENCE_PACKET#R2E-00252]] | 仅作规则内容来源，不作 canonical 晋升或冲突赢家 |

## 用户明确否决 / 用户边界

- `R2E-00013`、`R2E-00014`、`R2E-00015` 是各自镜头任务的 user constraints（如不改 Canvas、不新增动作/不写实血腥），不是对某个现有 Q 的否决，也不能跨项目泛化。
- `R2E-00240`、`R2E-00252` 中“拒绝植入”是世界观内角色/机制约束，不是对现实项目任务的拒绝。
- R3 不从 assistant 复述的用户话语中制造新的 `USER_REJECTION`；以 JSONL 的 `message_role` 和 `evidence_type` 为准。

## 正式文件状态差异（未裁决）

问题总纲把 Q-CHAR-001.4 列作 BLOCKED，现存问题卡和 Canvas 节点写 DONE。该差异不是从 R2 消息推导出的假设，不在本轮改写为 rejected/superseded；作为 unresolved record sync conflict 转交后续维护者核对 674-97/98/110 原始确认。

更多分流见 [[R3_PROBLEM_COMPILATION]] 与 [[R3_DUPLICATE_PSEUDO_MAP]]。
