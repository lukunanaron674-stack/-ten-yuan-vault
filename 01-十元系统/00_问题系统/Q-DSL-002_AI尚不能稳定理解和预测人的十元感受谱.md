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
