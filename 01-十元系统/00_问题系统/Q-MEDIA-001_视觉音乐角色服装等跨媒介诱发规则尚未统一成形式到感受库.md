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


## 7｜R3｜H06 ROUND17机位干预可执行性负证据｜2026-10-12

- receipt_id: `Q-MEDIA-001-R3-H06-R17-CAMERA-F06-20261012`；本轮唯一Q=`Q-MEDIA-001`，只读取已执行H3回执并做跨系统证据分级，不执行五轴感受A/B、不重复投H3、不请求USER、不改十元感受正本。
- source: Linear `674-286` comment `1af35d31-6954-4430-a196-81aea729ee6c`（ROUND17运行、ComfyUI history与抽帧自检报告）；对照 ROUND16 comment `5a371d6c-05a0-4cd5-bf0a-bda207ed045a`。两次均是执行端回执，本WATCHDOG未取得MP4原始字节，不能称独立复算视频SHA或独立目视验证。
- intervention: 固定角色 `H06-CYAN-0929-P3`、场景 `AST-0053`、seed `803783588`、1280×736、345f/24fps、相同双参考，主要改变机位提示 `wide frontal view` → `fixed THREE-QUARTER (≈45°) vantage + CAMERA VANTAGE LOCK`（附nonce）。R17 `prompt_id=725f0d3a-df9f-4944-bce9-b57fcae25e14`；`video_candidate=ROUND17_16x9_3Q_AST0053_286_00001_`；`output_sha256_declared=ffd33eae80a56aca7f66ed9b115deb99b88aa621d8a4df0a5527b20a8c5bdff3`；`bytes_declared=4303052`。
- technical_observation_reported: R17执行端抽帧判断主视位仍回到近正面，只有局部身体轻微转角，明确45°机位未被持续锁住；动作/身份与末帧稳定。这里记录的是**生成器对机位指令的执行失败候选**，不是观众的主观感受差异，更不能推论「正面比3/4更神圣」。
- failure_family=`F06_GENERATOR_CONTROL_FAILURE`（机位目标未被可靠实现）；`mechanism_status=NOT_CALLABLE_AS_CONTROLLED_3Q`；`evidence_scope=ONE_H3_R16_R17_EXECUTION_RECEIPT_PAIR`；`technical_evidence=REPORTED_NOT_BYTE_REVERIFIED`；`feeling_evidence_level=E0`。若未来研究机位→感受，必须先用首帧/姿态硬条件得到可核验的真正机位差异，且在人类感受反馈前预锁预测和盲码；不可将本次失败直接算成有效感受单变量实验。
- `user_review_state=UNVERIFIED_FOR_R17`；`human_free_report=null`；`human_feeling_profile=null`；`MAE=null`；`Top1=null`；`Top3=null`；`research_campaign_started=false`；`effective_feeling_experiment_rounds=0`；独立五轴A/B计数不变。
- 原H06「光影+手势产生神圣感」反馈仍未绑定精确视频版本；R17的机位控制负证据不能给历史反馈补绑定。674-289 VIDEO_ASSET_RECORD 与674-173 USER审美裁决继续由各自责任端确认，WATCHDOG不代签。
- CYCLE_RESULT=`CONTROL_FEASIBILITY_NEGATIVE_EVIDENCE_RECONCILED`；NEXT=`WAIT_VIDEO_ASSET_RECORD_AND_VALID_CONTROLLED_CAMERA_STIMULUS`，若无法取得可执行机位干预，则对该机位→感受子假设STOP/REPLAN，不因漂亮成片继续扩轮。

## 8｜R4｜H06 ROUND18 场景替换可执行性正证据（仅技术层）｜2026-10-12

- receipt_id: `Q-MEDIA-001-R4-H06-R18-SCENE-20261012`；本轮唯一 Q=`Q-MEDIA-001`，只读取 H3 B端/视频/USER审核的既有回执，不执行五轴感受单变量 A/B、不投 H3、不请求 USER、不改十元感受正本。
- sources: Linear `674-286` comment `48a3ce4f-97df-44d0-a7b3-476f9fc82d47`（ROUND18 真实渲染及抽帧技术回执），`674-173` comment `93058491-f3cd-4ba3-a9ba-4ae4c7846df4`（送审，非USER PASS）；技术前轮参照为 286 的 ROUND17 comment `1af35d31-6954-4430-a196-81aea729ee6c`。本 WATCHDOG 未取得本地 MP4/参考图原字节或帧包独立复算，全部为 `EXECUTION_RECEIPT_REPORTED`。
- controlled_factor: 场景输入从 `AST-0053 共鸣庭` 改为 `AST-0064 东裂隙带`；同时同步修改了**场景参考图和场景描述句**，这是一个“场景条件”成组替换，不是仅改一项像素/提示词的纯单变量因果实验。角色 `H06-CYAN-0929-P3`、seed `803783588`、1280×736、345f/24fps、机位与动作骨架沿用 R17。R17 的 `3/4` 机位控制失败未被本轮推翻。
- stimulus_candidate: `ROUND18_16x9_AST0064_286_00001_.mp4`；`prompt_id=fb28d79a-c393-4f41-ad37-7b5a43fa1b1d`；`output_sha256_declared=819cc40113578303184c284321550b8529e4a102f6b38a312a50f5cd6e033b7b`；`bytes_declared=3722951`；源参考 `AST-0064` 的执行端SHA仅在可见回执中提供前缀 `acda5cc6e93ca6fb…`，不得称本 WATCHDOG 复验了完整 SHA。
- technical_observation_reported: 286 执行端抽帧称高耸岩壁、冷雾、紫红藤蔓成功替换原共鸣庭拱顶，H06 身份与尾段主体保持；这只支持“当前 H3 输入通路能够切换场景语境”的**技术可行性候选**，不是跨媒介诱发规则或场景对人的感受影响已证实。
- review: 173 有送审记录，但未找到 ROUND18 的 USER PASS；674-289 当前 HOT 与评论未见该版本的正式 `VIDEO_ASSET_RECORD`。因此 `user_review_state=PENDING`，`video_asset_record=NOT_VERIFIED`，`human_free_report=null`，`human_feeling_profile=null`，`MAE=null`，`Top1=null`，`Top3=null`，`feeling_evidence_level=E0`，`research_campaign_started=false`，`effective_feeling_experiment_rounds=0`。
- failure/control boundary: ROUND17 的 `F06_GENERATOR_CONTROL_FAILURE`（机位）保留；ROUND18 不得被误算为“场景变化诱发神圣感”或独立五轴 A/B。若后续要测“场景→人的感受”，必须另行在实验启动前冻结目标/竞争感受、R17/R18 是否有真正等价的控制项、预测、盲码、样本、阈值、最多6有效轮次；具体生成由有权执行端负责。
- `CYCLE_RESULT=TECHNICAL_SCENE_CONTEXT_FEASIBILITY_RECEIPT_RECONCILED`；`NEXT=WAIT_EXACT_VIDEO_ASSET_RECORD_AND_PRELOCKED_HUMAN_FEELING_TEST`。本轮不升级 C/E、不触发 HUMAN_GATE、不覆盖十元感受正本。


## 9｜R5｜H3 ROUND26 角色锚点与动作对象的联合干预边界审计｜2026-10-13

- `receipt_id=Q-MEDIA-001-R5-H3-R26-COUPLED-FACTOR-AUDIT-20261013`；**本轮唯一Q=Q-MEDIA-001**。本 WATCHDOG 只读取 H3 执行回执与 USER 送审状态，未执行五轴感受 A/B、未发起 H3、未读取本地 MP4/帧原字节，不计任何有效感受实验轮次。
- source: Linear 674-286 comment `69cc9a4f-5c1b-4070-9249-307de24ef6c3`（R26 执行端记录）；674-173 comment `cbb5acd5-6ea2-4ea2-88c8-db1a02857d10`（送审记录，**非USER PASS**）；674-289 HOT 尚未确认 R26 正式 `VIDEO_ASSET_RECORD`。
- stimulus_candidate=`ROUND26_16x9_N14_AST0053_286_00001_.mp4`；`output_sha256_declared=eb09ef4cd0831ad45aa48593dbb8cd656d99e22ac525410dcf6dde06a698f890`；`bytes_declared=3131828`；`345f/24fps=14.375s`；`1280×736`；`seed=803783588`；`prompt_id=f2673ba9-510e-4d71-8610-937ab7775f2f`。这些均是**执行端报告**，本 WATCHDOG 未独立复算原始字节。
- **新发现的可复核控制边界**：R25→R26 不只替换了角色参考图/身份描述，还把动作对象从 `record book` 改为 `red coral ring`，即 `DOCUMENT RAISE → CORAL RING RAISE`。即使动作族、seed、场景、机位、时长等固定，这仍是**角色身份条件+道具/动作对象的联合变化**，不得在“形式→人的感受”研究中称为严格单一感受变量，不能归因“角色身份本身诱发了某感受”。286 对角色锚点生产可行性的内部说法与本 Q 的感受因果判据必须分开。
- 286 报告 R26 主体身份稳定、片尾无消散、珊瑚环举起动作发生，属于 `TECHNICAL_EXECUTION_REPORTED`，并不证明真人感受命中、十元映射、跨媒体泛化、用户审美 PASS。对“光影+手势产生神圣感”的旧反馈，具体旧片版本绑定仍未解决，不可嫁接给 R26。
- `failure_family=F02_COUPLED_INTERVENTION_FOR_FEELING_CAUSAL_INFERENCE`（仅限未来感受因果归因的控制缺口，不是 H3 生成失败）；`rule_status=CANDIDATE_ONLY`；`feeling_evidence_level=E0`；`human_free_report=null`；`human_feeling_profile=null`；`MAE=null`；`Top1=null`；`Top3=null`；`research_campaign_started=false`；`effective_feeling_experiment_rounds=0`；Q-FEEL-001 继续 `C2/E0`，`HUMAN_GATE=NOT_READY`。
- `CYCLE_RESULT=EVIDENCE_CONTROL_BOUNDARY_RECONCILED`；`NEXT=WAIT_EXACT_VIDEO_RECORD_AND_PRELOCKED_STIMULUS_COMPARISON`。如未来确需检验角色身份对人的感受影响，须由有权生产端先提供同一动作对象/场景/机位等条件可比的刺激对，再在真人反馈前预锁预测、盲码、指标与阈值；无真实输入则 WAIT/NO_OP，不无限扩轮。


## 10｜R33｜R318/R319 声画时序外部心理物理证据跨系统归档｜2026-10-26

- **唯一 Q：Q-MEDIA-001**。来源：Linear 674-297 R320 评论 `2009c60d-1d48-4eb1-8cc5-896bf3ef2348`；证据总控 674-106 R320 评论 `3ea6c6cb-4992-4cb8-93cf-2b79253e57bb`。本节将既有证据归入原Q，不新建METHOD、MASTER或平行问题树。
- **独立核验的外部论文元数据/摘要**：Jaekl et al. (2015), DOI `10.1371/journal.pone.0141125`，视听时延可影响点群相对距离判断（原论文公开文本含实验1 40/60ms条件）；Jaekl et al. (2012), DOI `10.1007/s00221-011-2948-9`，研究声画时延对视觉大小判断的影响；Fornaciai & Di Luca (2020), DOI `10.1037/xhp0000754`，在stream/bounce实验中事件因果解释可系统性偏移声画先后判断。来源：https://pubmed.ncbi.nlm.nih.gov/26509795/ ; https://pubmed.ncbi.nlm.nih.gov/22105336/ ; https://pubmed.ncbi.nlm.nih.gov/32352821/ 。独立核验限公开摘要、论文身份和2015公开实验摘录；本轮未重新统计原始数据。
- **严格边界**：以上外部受试者任务≠十元感受自由描述、H3视觉成片、173用户盲审或R319目标感受验证；2015论文短时延的距离判断结果**不能**外推为原创`800ms`火箭音画错位的已证感受规律，亦不能据此判定800ms在叙事中绝对无效。R318感官动作同步与R319远距事件声迟到属相邻时序机制，不合并为同一因果命题，也不重复记为已验证方法。
- **既有候选路由**：`FEEL-CANDIDATE-DISTANT_EVENT_SOUND_GAP_AS_PERCEIVED_SCALE-01` → `REPLAN_PARAMETER / STOP_REPLAN_PENDING_EVIDENCE / DUP_PENDING_GLOBAL / NOT_MASTER`；`FEEL-CANDIDATE-CROSSMODAL_INACCESSIBLE_SENSE_PROXY_WITH_CAUSAL_SYNC-01` 仍是独立的未验证候选。参数0ms/50ms/800ms和无关提示音负控只是待预注册的研究设计建议，**未启动实验、未执行CPU/GPU A/B**。
- **证据分账**：`external_psychophysics=SOURCE_SUPPORTED_FOR_OWN_TASK`；`Q_MEDIA_FEELING_EVIDENCE=E0`；`Q_FEEL_001=C2/E0`；`human_free_report=null`；`human_feeling_profile=null`；`MAE=null`；`Top1=null`；`Top3=null`；`human_n=0`；`effective_feeling_experiment_rounds=0`；`five_axis_ab_counted=0`；`HUMAN_GATE=NOT_READY`；`173_USER_PASS=NOT_CLAIMED`。
- **阻塞/停止**：没有可展示且SHA可复核的同源刺激、预测预锁、盲码和173真人反馈，R318/R319同族研究不扩轮；只在原素材/授权/去重READY后重启预注册，最多6有效轮次。Q-FEEL BLIND-R0父图与裁切manifest及用户端盲化展示未闭环。
- **NEXT**：`WAIT_GLOBAL_DEDUPE_AND_VERIFIABLE_STIMULUS`；下轮无真实增量则`NO_OP`。本节不修改十元感受正本、104/105、293/286/289/173职责内资产或用户裁决。
