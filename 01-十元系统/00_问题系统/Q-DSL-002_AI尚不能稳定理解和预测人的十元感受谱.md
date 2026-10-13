---
q_id: Q-DSL-002
problem_depth: D1
parent: G5
goal: AI能理解、预测、生成并编排人的目标感受
volume: 10
impact_weight: 10
status: OPEN
problem_state_version: v2
updated: 2026-10-07
---

# Q-DSL-002｜AI尚不能稳定理解和预测人的十元感受谱

## 1｜问题一句话
AI需要从“给对象判十元”升级为“读取刺激、语境和人的反馈，预测这个人可能产生怎样的十元感受谱，并指出可观察诱发依据”。

## 2｜目标能力
输入：
- stimulus
- context
- observer_scope
- 可选的人类历史反馈

输出：
- 预测十元1–10感受谱
- Top1/Top3
- eliciting_features
- competing_interpretations
- confidence

## 3｜评估
AI预测必须在看到真实人类反馈之前冻结。
之后比较：
- 感受谱误差；
- Top1/Top3 命中；
- 排序一致性；
- 置信度校准；
- 诱发依据与人类指认依据的一致程度。

## 4｜DONE
- 在未见答案的情况下，对真实新刺激能稳定优于简单基线。
- 不同模型读取同一感受表示时差异可控。
- AI理由必须可回到可观察形式，不允许用十元词循环解释十元。


## 5｜WATCHDOG R1｜旧映射与新感受预测的证据隔离核验｜2026-10-13

- `receipt_id=Q-DSL-002-R1-DUAL-CONTEXT-EVIDENCE-CONTRACT-20261013`；本轮唯一Q=`Q-DSL-002`。本次是已有文档与下游接口的**只读证据核对+本Q增量登记**，不是新的人类实验、AI预测成绩、五轴A/B实验或正本定义更新。
- 来源A：Linear 674-93 评论 `9d1bd989-2a5c-429d-b046-b0807a0da250` 所登记的GitHub分支 `fix/tenyuan-mapping-first-feeling-second-20261010` 三文件：`OLD_CONTEXT.md` blob `e01ccc695158e337fd72d312651a666d335c4858`、`NEW_CONTEXT.md` blob `a249df8ef8dc4da4846a61b87dad98be1ead7c71`、`COMPARE_AND_BRIDGE.md` blob `f37f7fa884d181e14b1e4b38e0055f0fc5c26a73`；本轮已实际从该分支读取。**三文件均为 REVIEW_CANDIDATE_NOT_CANON / 未合并main**，不得说双链修复已在生产落地。
- 来源B：Linear 674-106 评论 `c8b702a4-dd1c-4365-9bf7-6e9e76c8dcc7`、`202d262f-7b08-4255-a639-a11794f3c8ae`（2026-10-12）：作品评分/方法吸收协议已区分 `F_pred`（AI预测的感受诱发）、`S`（结构映射清晰度）、`T`（迁移实验价值）、`F_human`（真实人类效果；无证据时null），并规定真实视频与复用门槛。此处只确认**协议文字存在**，不声称运行时字段已经实装、预测器已验证或视频已被吸收。
- **识别到的跨系统风险**：旧 `ten_yuan_composition_ratio`（对象结构配比）、`ten_yuan_archetype_accuracy`（结构原型准度）、`S`（结构评分）、`F_pred`（AI感受预测）、`F_human`（人的报告）是五种不同语义；同为十元标签或数字，不允许从映射高分直接填充预测正确、Top1/Top3、MAE或真人感受。对象/行为/关系的映射判断也不能冒充对观众感受的预测。
- **本Q预测记录的候选字段契约（RESEARCH_ONLY，不宣称已部署）**：`stimulus_id, stimulus_sha256, observer_scope, context_version, structure_mapping_candidates, structure_evidence_scope, ai_feeling_prediction_10d, ai_pred_top1, ai_pred_top3, eliciting_features, competing_feelings, prediction_locked_at, blind_code, human_free_report, human_feeling_profile_10d, human_evidence_ref, profile_mae, top1_hit, top3_overlap, prediction_evidence_level`。映射候选与感受预测分列，`prediction_locked_at` 必须早于任何真人反馈；`human_*` 和效果指标无真人证据时保持 `null`。只有 Q-FEEL-001 定义/编码可靠性就绪，才允许计算可比较的十维人类谱误差。
- **评估负控候选**：同一真实刺激比较“仅给结构映射标签的预测”与“给可观察形式+语境、但不泄漏人类答案的预测”；两者都必须在盲化真人反馈前预锁，禁止将结构分数当正确答案。该对照尚未启动：`sample_ready=false`、`human_baseline_ready=false`、`campaign_started=false`、`effective_research_rounds=0`。启动前必须另行冻结独立样本/近邻对照、指标、阈值与最多6有效轮次，不能事后设阈值。
- **核验结果**：`CONTRACT_SEPARATION_DOCUMENTED`；`DOWNSTREAM_RUNTIME_VERIFIED=false`；`Q_DSL_FEELING_EVIDENCE=E0`；`Q_FEEL_001=C2/E0`；`HUMAN_GATE=NOT_READY`；`human_feeling_profile=null`；`MAE=null`；`Top1=null`；`Top3=null`。本Q没有实际模型预测/用户反馈，不能声称能力提升。
- `NEXT=WAIT_Q_FEEL_HUMAN_BASELINE_AND_RUNTIME_SCHEMA`：等 Q-FEEL-001 真实刺激可展示、预测预锁及人类自由描述测量闭环；再只读核验674-286/106实际预测字段与674-289/173的版本/审核指针。五轴感受单变量A/B的实际实验只读其独立receipt，不重复执行/计数。原感受正本不变。
