# LEARNING_TASK_SCHEMA｜每小时学习包 v1.1

## 身份
- learning_run_id
- test_shot_id
- base_state_version
- topic
- source_index
- target_agent

## 单 Agent 研究输出
- question
- source_notes
- proposed_rule
- confidence
- counterexample
- practical_use

## 四 Agent 交叉验证
- theme_view
- script_view
- tenyuan_view
- storyboard_view
- conflict
- resolved_mapping

### 四层问题
- theme_view：这个故事 / 镜头究竟研究什么五维问题？
- script_view：人物目标、障碍、事件怎样让问题受压？
- tenyuan_view：内部力量是什么性质，生/克/补怎样运行？
- storyboard_view：怎样把变化压进可见的 8–10 秒？

## TEST-SHOT 验证
- test_goal
- test_shot
- observed_result
- decision: KEEP | REJECT | STOP
- evidence_status: VERIFIED | PARTIAL | HYPOTHESIS

## 写回规则
- KEEP：写增量知识 / 交叉知识库
- REJECT：记录反例，不写正式规则
- STOP：停止继续研究该方向
- 所有学习结果不得直接推进正式剧情
- 五维电影研究属于研究层；可作为 theme_view 的 P2 证据，但不得自动覆盖五维 canonical


## v1.2｜作品→十元→H3→反馈→复用的真正吸收验收（2026-10-12）

此节覆盖旧版“KEEP即吸收”的宽松用法；一次定时运行完成四轮工作评估，真实H3验证可跨多个定时运行。无真片不伪报。

### 四轮在同一次工作单元执行
R1 FIND：查找真实作品具体片段/现有H3真片，源地址、时间窗、作者、版权与素材使用边界、去重。无来源则SOURCE_BLOCKED。
R2 SCORE+EXPLAIN：分别记录目标感受预测F_pred、十元结构S、迁移价值T；不以十元覆盖数量评分。区分单感受增强、两感受顺序变化、两感受并置。未经真人反馈，F_human=null。
R3 EXTRACT+MATCH：一次提炼一个可执行方法，写 mechanism→perception→target_feeling；匹配《黎黎隆》确实存在的角色/组织/场景对象与asset_id及其单独的十元，明确适用位置、前后状态、唯一改变变量、锁定条件、负控。对象不存在则NO_MATCH。
R4 APPLY+RECEIPT：方法→674-286 B端→AG-03镜头包→674-293/296/AG-04/AG-11素材验收→674-216 A端真实H3（仅READY时）→AG-08真片技术审核→674-289视频版本登记→674-173 USER感受→674-106/297更新方法证据。无GPU/素材或USER证据时记录阻塞或下个明确动作，不能宣称已测试。

### 全链路追踪字段
learning_run_id → source_work/scene/clip → METHOD_ID → target_object_ids → MATCH_PACKET_ID → DIRECTOR_PACKET_ID → render_run_id → H3V_version/SHA → AG08_technical_review → 173_USER_REVIEW → adoption_status → next_test

### 三种验收层级（禁止混用）
KNOWLEDGE_CAPTURED：来源查清，方法准确提取；尚未真实应用。
APPLICATION_TESTED：方法已真实用于《黎黎隆》H3或实际动画工作流，存在prompt/参数/影片/可追溯回执；成功或失败均算已测试，不等于吸收。
ABSORBED_VERIFIED：结果符合事先锁定的目标感受和技术指标，具备用户或其他合格真人感受评审证据，并在另一条可比真实镜头或另一个对象上至少复用一次且没有不可接受的新失败。必须有完整回执。AI自评不可代替真人感受；未经重复验证只标CANDIDATE/PARTIAL/FAILED/WAIT。

### 真实H3反馈评估
对每个真实run分别填写 planned_effect / actually_visible_change / USER_first_feeling / technical_result / failure_family / why_mismatch / one_variable_to_adjust / keep_or_reject_or_retest。失败先调一个变量或换对象；连续2轮无新增证据则STOP/REPLAN。H06的“光＋手部姿态有助神圣感”已是USER定性反馈；未做A/B前不得声称已分离定量贡献。

### 每天真实进度（与74双主任务日报合并）
报告上期以来 sources_new / methods_new / matched_objects_new / H3_video_receipts_new / USER_reviews_new / verified_reuse_new / blocked_or_rejected / next_one_action。每个非零量附method_id、run_id、H3V、issue/comment、commit或SHA。只写计划或评论单列PROTOCOL_DELTA，不算影像效果进步。无真实增量时如实写0、真实阻塞及最小可操作解阻步骤；不为数字造GPU任务、不另增第三主任务。
