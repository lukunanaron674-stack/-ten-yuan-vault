# LEARNING_TASK_SCHEMA｜每小时学习包 v1

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

## 三 Agent 交叉验证
- script_view
- tenyuan_view
- storyboard_view
- conflict
- resolved_mapping

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
