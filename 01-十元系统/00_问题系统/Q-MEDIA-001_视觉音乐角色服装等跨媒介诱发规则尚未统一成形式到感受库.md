---
q_id: Q-MEDIA-001
problem_depth: D1
parent: G6
goal: AI能理解、预测、生成并编排人的目标感受
volume: 10
impact_weight: 9
status: OPEN
problem_state_version: v2
updated: 2026-10-07
---

# Q-MEDIA-001｜视觉、音乐、角色、服装等跨媒介诱发规则尚未统一成“形式→感受”库

## 1｜问题一句话
现有刘海、服装、角色、场景、构图、音乐、镜头、叙事拥有大量十元旧知识，但尚未统一改写为“哪些形式变量在什么语境下容易诱发什么人的感受”。

## 2｜保留资产
- 图片与来源
- 结构指纹
- 音乐结构
- 镜头参数
- 角色行为
- 场景构图
- 旧十元标签作为历史候选

## 3｜新统一字段
stimulus / context / human_free_report / feeling_profile / eliciting_features / counterexample / medium / confidence。

## 4｜DONE
- 至少视觉、角色/服装、音乐、镜头/叙事形成同一字段结构。
- 每条规则都能追溯到真实人类反馈。
- 能比较不同媒介是否诱发相近感受，而不是比较名词是否同类。
