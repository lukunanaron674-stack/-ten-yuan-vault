# SHOT_TASK_SCHEMA｜正式镜头任务包 v2.1

## 身份
- project_id
- job_id
- scene_id
- shot_id
- base_state_version
- task_mode: PRODUCTION | TEST
- duration_sec
- attempt_no

## 导演输入
- director_goal
- story_goal
- constraints
- opening_state
- previous_shot_id
- forbidden_changes

## 主题 Agent 填写
- primary_dimension
- secondary_dimensions
- theme_question
- theme_experiment
- pressure_mechanism
- character_dilemma_target
- ending_answer_mode
- dimension_relation
- research_refs
- theme_confidence: VERIFIED | RESEARCH_CANDIDATE
- theme_status: READY | REPLAN

> 8–10 秒镜头不要求完整回答大主题；只要求主题压力或主题变化节点可被剧情显影。

## 剧本 Agent 填写
- story_function
- character_goal
- obstacle
- information_change
- action_change
- intended_closing_state
- script_status: READY | REPLAN

## 十元 Agent 填写
- primary_tenyuan
- secondary_tenyuan
- dynamic_chain
- relation
- volume
- evidence_status: VERIFIED | HYPOTHESIS
- forbidden_misread
- tenyuan_status: READY | REPLAN

## 分镜 Agent 填写
- beat_0_3s
- beat_3_6s
- beat_6_10s
- camera
- composition
- motion
- visual_priority
- continuity_requirements
- h3_prompt_draft
- storyboard_status: READY | REPLAN

## 素材 Agent 填写
- character_refs
- scene_refs
- motion_refs
- audio_refs
- missing_assets
- asset_status: READY | MISSING

## H3 Agent 填写
- h3_mode
- steps
- sage
- seed
- resolution
- negative
- render_task_id
- render_status

## 审核结果
- review_id
- decision: PASS | RETRY | REPLAN | BLOCKED
- failed_dimensions
- retry_packet_id
- closing_state
- continuity_check

## READY 门禁
正式镜头只有同时满足以下条件才允许进入 RENDER_QUEUED：
1. theme_status = READY
2. script_status = READY
3. tenyuan_status = READY
4. storyboard_status = READY
5. asset_status = READY
6. opening_state 已确定
7. continuity_check != FAIL
8. 导演确认本 job_id 仍为当前任务
