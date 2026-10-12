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

## 6｜R2｜H06 ROUND16真实视频输入链与感受证据隔离核验｜2026-10-11

- receipt_id: `Q-MEDIA-001-R2-H06-R16-VIDEO-PROVENANCE-20261011`；本轮唯一Q=`Q-MEDIA-001`，只做已有生产/审核证据的增量对账，不执行五轴A/B、不运行H3、不向用户索取反馈。
- 新增来源：Linear 674-286 评论 `5a371d6c-05a0-4cd5-bf0a-bda207ed045a`（ComfyUI history、双参考、MP4字节和帧数的执行端回执）及 `d76ef21f-5de7-4b16-9b5d-e82ae3486016`；674-173 送审评论 `73faffcf-0ded-475b-bfc5-b0e13c7b462a`。本 WATCHDOG 未读取本地 MP4 原字节，不独立复算视频SHA；以下标记 `EXECUTION_RECEIPT_REPORTED`。
- `video_candidate=ROUND16_16x9_AST0053_286_00001_`；`output_sha256_declared=63540f62dff07dc5df2a663572c46c49c45ee5b22398ed6e69e88309526e1e4f`；`bytes_declared=3859318`；`345f/24fps=14.375s`；`1280×736`；`prompt_id=c4c47021-47b4-48cf-90e1-f2efc7743625`；`seed=803783588`（取完整回执）。
- 角色参考 `H06-CYAN-0929-P3`，执行端复核SHA `7681e903c411d7eea9dd37b70665818fd24accbeb67a238b657581a59326d084`；场景参考为 **674-293登记正本** `AST-0053`，执行端复核SHA `672e16ef704dd94ccdc59c29e871510a0f63839a5e220daa65fc998e0122a034`。两参考独立且节点实际绑定；只对 **ROUND16这条新片** 认定旧SC-07本地副本来源冲突已规避，**不得倒填旧v007–R14的来源合规性**。
- 该片同时更改了 `aspect_ratio` 与 `scene_source` 两项；技术结果“尾段未消散、主体在位”只作生产证据，不能作为任何单变量感受因果结论。
- `user_review_state=PENDING`：173已送审但无本片PASS/FAIL；674-289本轮可见HOT尚无该片正式 `VIDEO_ASSET_RECORD`。先用后审的生产政策不等于USER PASS或已入正式视频仓。
- **关键隔离**：既有作者反馈“神圣感通过光和手达到了”仍是**未绑定精确视频版本的历史片组自报**，不得转嫁给ROUND16；`stimulus_version_link_for_prior_feedback=UNRESOLVED`，`human_free_report_for_R16=null`，`human_feeling_profile=null`，`MAE=null`，`Top1=null`，`Top3=null`，`feeling_evidence_level=E0`。
- `CYCLE_RESULT=PROVENANCE_DELTA_RECONCILED`：新片的技术输入证据与旧片的感受反馈已隔离；本轮**没有真人感受新证据、没有启动研究子Campaign、有效实验轮次=0**。独立五轴A/B不执行、不计数。
- NEXT：由286/289按原权限提交可读取的精确 `VIDEO_ASSET_RECORD` 和源MP4/抽帧校验；173在真实可展示且预锁预测的条件下独立审片。WATCHDOG只读核验，不要求用户重复回答旧片的感受，不擅自升级C/E或覆盖感受正本。

