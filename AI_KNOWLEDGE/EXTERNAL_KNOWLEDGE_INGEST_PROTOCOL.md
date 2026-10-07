# 674-272｜第二阶段：外部知识接入协议 v1.0

> status: STAGING
> master_issue: 674-272
> internal_router: 00-中枢索引/Linear_内部库到22工单路由表_v1.0_20261008.md
> issue_registry: 674-294
> problem_router: 674-116 / 674-276
> rule: 外部知识只做候选，不得直接覆盖 canonical。

## 0｜固定主链

论文 / GitHub项目 / 技术报告 / 行业方法
→ 674-272 收件、去重、provenance
→ 查“内部库 → 22 工单路由表”
→ 查 674-294 工单注册表
→ 判断“它解决哪个已有 Z？”
→ 104 / 105 / 106 / 118 / 282 / 286 / 124 / 216 / ...
→ 候选知识
→ 冻结实验 / 复现 / 对照
→ E0 → E1 → E2 → E3 → E4 → E5
→ PROMOTION_ELIGIBLE
→ 目标 Z canonical gate
→ 正本

如果无法命中已有 Z：
→ 674-116 查现有 MAIN/SUB
→ 必要时 674-276 做架构路由
→ 仍无职责承接时才允许 674-294 preflight CREATE。

## 1｜候选知识最小记录

external_knowledge_id
title
source_type = paper | github | technical_report | industry_method | other
source_locator
source_version
source_date
captured_at
claim
solves_problem
target_issue
target_z
target_canonical
secondary_targets
route_status = UNROUTED | ROUTED | ROUTE_CONFLICT
candidate_state = COLLECTED | CANDIDATE | EXPERIMENTING | PROMOTION_ELIGIBLE | PROMOTED | REJECTED | ROLLED_BACK
evidence_profile
evidence_level = E0 | E1 | E2 | E3 | E4 | E5
evidence_refs
negative_evidence_refs
experiment_id
frozen_protocol
result
regression_checks
promotion_id
promotion_commit
pre_promotion_ref
rollback_ref
rollback_status

## 2｜接入证据 E0–E5

- E0｜SOURCE_ONLY：有来源、有 claim，但尚未证明适合本系统。
- E1｜LOCAL_REPRO：在现有工具链完成一次可复现测试，保留版本、输入、输出、失败。
- E2｜CONTROLLED_REPEAT：同一目标 Z 下重复或 A/B / 对照成立，排除一次碰巧成功。
- E3｜CROSS_CASE：跨至少一个角色 / 场景 / 任务 / 样本仍成立，或通过目标 Z 规定的独立案例。
- E4｜SHADOW_INTEGRATION：进入真实链路的 shadow / staging 路径，不写 canonical；完成回归检查和 rollback 演练。
- E5｜PROMOTION_ELIGIBLE：达到目标 Z 的领域门槛，provenance 完整，回归通过，rollback 可执行。

只有 E5 才允许申请升级正本；E5 不等于自动覆盖正本。

若目标 Z 已有自己的 E0–E5 定义，例如十元感受系统，优先使用目标 Z 的领域定义；本协议只规定外部知识的接入、路由、回滚和晋级纪律。

## 3｜双轨状态

知识接入状态：
DRAFT → KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

证据状态：
E0 → E1 → E2 → E3 → E4 → E5

两者不能互相替代：
- 有文档 ≠ VERIFIED
- 有路由 ≠ CONNECTED
- CONNECTED ≠ E5
- AI_LEARNED ≠ 自动取得 canonical 权

## 4｜Canonical 晋级硬门

同时满足以下条件才允许写正本：

1. target_issue / target_z / target_canonical 已明确；
2. 已通过 22 工单内部路由与 674-294 注册表核验；
3. evidence_level = E5；
4. 冻结实验在结果揭晓前完成；
5. 有成功、失败或反例记录，不能只保留成功样本；
6. regression_checks PASS；
7. pre_promotion_ref 已保存；
8. rollback_ref 已生成并完成 E4 演练；
9. 涉及审美、感受、角色身份、Canon 等 USER 主权时经过 HUMAN_GATE；
10. 通过独立 commit / PR 写入，不做无 provenance 的直接覆盖。

## 5｜Rollback

每次 PROMOTED 都必须写 promotion record：
promotion_id / external_knowledge_id / target_z / target_canonical /
pre_promotion_ref / promotion_commit / changed_paths /
evidence_snapshot / regression_snapshot / rollback_ref / rollback_tested。

回滚触发：
- 合入后出现回归；
- 与更高权重 canonical 冲突；
- 新证据使原 E5 失效；
- HUMAN_GATE / 目标 Z owner 否决；
- provenance 丢失或无法重现；
- 接入导致错误扩散到其它 Z。

回滚动作：
1. 禁止 force reset 或改写 main 历史；
2. revert promotion commit 或反向 PR 恢复 pre_promotion_ref；
3. candidate_state → ROLLED_BACK；
4. 保留来源、实验、负样本和失败证据；
5. evidence_level 降回现有证据支持的最高等级；
6. 记录 rollback_reason / affected_z；
7. 修复后重新晋级必须生成新的 promotion_id。

## 6｜禁止项

- 未查内部 22 工单路由就创建新问题或新工单；
- 外部论文 / GitHub 项目因为“先进”就直接写正本；
- 674-272 建第二套问题树；
- 生产执行器自产、自测、自宣 E5；
- 删除失败样本；
- 为工单适配而改 Canvas 原知识结构；
- 没有 pre_promotion_ref 的 canonical 修改；
- rollback 只写“可回滚”但没有真实可恢复版本。

## 7｜GitHub 接口

- 内部路由正本：00-中枢索引/Linear_内部库到22工单路由表_v1.0_20261008.md
- 工单注册：674-294
- SOCIAL→US：AI_KNOWLEDGE/BASE_SOCIAL_TO_US_TASKS.md
- AI_LEARN：AI_KNOWLEDGE/AI_LEARN_MASTER_INDEX.md
- 执行器路由：AI_KNOWLEDGE/EXECUTOR_ROUTING.md
- 验证门：AI_KNOWLEDGE/VERIFICATION_MATRIX.md
- 回滚账：AI_KNOWLEDGE/ROLLBACK_LEDGER.md

本协议只规定“外部知识如何安全接入已有内部系统”，不改变任何领域 canonical 本身。
