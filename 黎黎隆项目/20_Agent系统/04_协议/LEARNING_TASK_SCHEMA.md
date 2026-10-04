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
