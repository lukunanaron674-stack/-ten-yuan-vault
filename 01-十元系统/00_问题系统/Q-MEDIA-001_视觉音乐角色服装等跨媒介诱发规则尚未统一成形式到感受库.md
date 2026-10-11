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

## 5｜H06 光影×手势感受反馈：证据入组前的范围核验｜2026-10-10

- receipt_id: `Q-MEDIA-001-H06-LIGHT-HAND-INTAKE-20261010`
- source: Linear `674-286` 评论 `2f17e64a-0136-4718-aaf7-f91091c4b360`（作者直接反馈的文字记录）；技术/版本缺口见同工单 `c5de531b-c1f7-445d-b914-638add200215`。
- 原话（保留来源措辞）：**「14.5s以后只跑 以及神圣感通过光和手达到了」**。
- stimulus: H06 主教相关 H3 视频；`medium=AI_animation`；`eliciting_features_candidate=[light, hand_gesture, light_x_hand_interaction]`；`reported_feeling=神圣感`。
- 这是一条**非盲化、作者自报、H06特定语境**的感受反馈。它支持“组合效果值得保留为候选导演规则”，**不证明**光或手单独的因果贡献、强度大小、十元10维谱、外部泛化或整片 USER PASS。
- `stimulus_version_link=UNRESOLVED`：原反馈未指定具体 video_id/run_id；286 的后续技术回执虽报告 v010/v011 345f 视频与 MP4 SHA，但**不能反向把原作者感受确认绑定到这两片**。674-173 尚需对具体片作独立裁决。
- `asset_provenance=PARTIAL`：286 回执声明角色图 H06 P3 SHA `7681e903c411d7eea9dd37b70665818fd24accbeb67a238b657581a59326d084`、场景 SC-07 SHA `9a876d0fa3e6fe0b0821362b6e3e1c65296db15756fff329d2e1901ca534e732`；本轮**未取得原视频/参考图字节复算**。SC-07 的 173/296 审核准入存在冲突，不能写成合规已锁定。
- `human_direct_feedback=SOURCE_QUOTED`；`human_free_report=null`（不是 Q-FEEL-001 的盲化自由描述）；`human_feeling_profile=null`；`MAE=null`；`Top1=null`；`Top3=null`；`evidence_scope=ONE_USER_ONE_UNBOUND_VIDEO_GROUP`；`rule_status=CANDIDATE_ONLY`；`evidence_level=E0`（未达到个人重复测量）。
- `Q-FEEL-001` 继续 C2/E0、HUMAN_GATE=NOT_READY；不将“神圣感”擅自映射成某个十元，不用本条替代十元最小体验测量。
- `research_campaign_started=false`；`effective_experiment_rounds=0`；独立“五轴感受实验推进”A/B不在本轮执行、写入或计数。
- `NEXT=WAIT_EXACT_VIDEO_BINDING`：由 674-286/289/173 在各自正本核对作者实际看过的具体 video_id、MP4 SHA、版本与审核范围。拿到可复核绑定后，本 Q 才能将该候选进入形式→感受样本记录；如要研究光/手单独贡献，须**先预注册**样本/对照、唯一改变变量、指标、门槛与最多6轮预算，交实际执行端完成，不由 WATCHDOG 代跑。
- `CYCLE_RESULT=EVIDENCE_INTAKE_WITH_EXPLICIT_BLOCKER`；无用户门禁请求，不覆盖十元感受正本，不改 173 USER 裁决。
