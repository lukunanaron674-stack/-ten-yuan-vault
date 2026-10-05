---
title: R3 Duplicate and Pseudo Problem Map
tags:
  - lililong
  - source-ingestion
  - deduplication
status: CANDIDATE
linear_issue: 674-102
---

# R3｜重复、伪问题与 reference-only 去向

| Evidence cluster / 来源 | 判定 | 去向 | 理由 |
|---|---|---|---|
| H3 B 端角色/场景 reference 缺少 asset ID、路径、SHA；[[R2_EVIDENCE_PACKET#R2E-00059]] / [[R2_EVIDENCE_PACKET#R2E-00060]] | `EXISTING_Q_UPDATE` candidate | [[Q-ASSET-001_旧角色设定和新设定谁优先]] | 资产来源、路径、SHA、批准范围已在 Q-ASSET-001 的 parent goal/done condition 内；不另建重复 Q。assistant 文件报告待复验。 |
| CH-013 当前与旧设定优先级 | `DUPLICATE`（已有覆盖） | [[Q-ASSET-001_旧角色设定和新设定谁优先]] | 已是该卡明确案例，不从不同 session 复制同一问题。 |
| S10/H06 身份错配历史 | `DUPLICATE / CLOSED CASE` | [[Q-CHAR-001.1_头部身份锚是否稳定继承]] 与 [[Q-CHAR-001_头像怎么稳定扩中全景]] | 正式总纲已记录具体案例关闭；R2 的 assistant 候选叙述不构成重开证据。 |
| H04 正面/半侧证据覆盖 | `DUPLICATE / EXISTING CHILD` | [[Q-CHAR-001.4_H04正面半侧身份继承是否有充分证据]] | 使用已有子卡，不复制新 Q；另有 Canvas/总纲状态同步冲突，见 [[R3_REJECTED_HYPOTHESES]]。 |
| 森林湖泊生成 FAIL 的 assistant 叙述（R2E-00100） | `HYPOTHESIS_ONLY` | [[Q-SCENE-001_SC-001森林背景批准来源是否已定位核验]] 暂不关联为状态更新 | 不能证明它就是 SC-001 批准母图，缺独立视觉/运行 receipt。 |
| 世界观里的植入限制与钢铁教派内容（R2E-00240/00252） | `REFERENCE_ONLY` | [[Q-WORLD-001_候选世界观版本如何安全进入实验]] 仅供来源追溯 | 是内容约束，不是版本冲突报告或需要解决的项目阻塞。 |
| 冻结项/可发散/禁止项的批量提示词任务（R2E-00013/14/15） | `REFERENCE_ONLY / PSEUDO_PROBLEM` | [[Q-PIPE-001_冻结项可发散项禁止项怎么进入生图流程]] 仅当真实映射测试结果出现时再增量更新 | 任务描述/解决方案不等于输入漏项或真实失败。 |
| 674-77 只读盘点与 M1–M4 条件（R2E-00277/279/306） | `REFERENCE_ONLY` | 674-77 系统实现工单与当前 R3 流程 | 工单状态/门槛不是《黎黎隆》新增生产 Q。 |
| 候选头像/风格、生成计划、代理职责及“已完成”assistant 自述 | `REFERENCE_ONLY` 或 `PSEUDO_PROBLEM` | 原任务/候选区；不得进入 known 或正式 Q | 没有用户确认/可验证 receipt 时，不能建根因问题或晋升候选状态。 |

## 冲突分流

- R2 `R2_CONFLICT_CANDIDATES.md` 为空：仅表示抽取未可靠识别出可提交的对话版本冲突，不代表不存在冲突。
- 现有记录发现 Q-CHAR-001.4 在项目总纲与其 Markdown/Canvas 间状态不一致；这属于现有问题树的记录同步冲突，不建重复 Q，也不在 R3 选定胜者。来源位置与后续核对动作见 [[R3_PROBLEM_COMPILATION]]。

规则：相同真实问题按既有 Q-ID 去重；方案句、研究任务、内容偏好和没有父目标影响的背景归 pseudo/reference；不因来源 session 不同而重复建卡。
