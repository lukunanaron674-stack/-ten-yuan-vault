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

## 世界观 Agent 填写（条件触发）
- world_gate: REQUIRED | BYPASS
- canon_refs
- region_rules
- allowed_mechanisms
- forbidden_world_changes
- new_world_rule_required: true | false
- world_status: READY | REPLAN | NOT_APPLICABLE

> 普通镜头默认 BYPASS。只有镜头依赖世界规则、组织制度、区域机制、技术/魔法规则，或需要新增世界设定时才进入 WORLD_CHECK。

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
2. world_gate = BYPASS，或 world_status = READY
3. new_world_rule_required = false
4. script_status = READY
5. tenyuan_status = READY
6. storyboard_status = READY
7. asset_status = READY
8. opening_state 已确定
9. continuity_check != FAIL
10. 导演确认本 job_id 仍为当前任务

若 `new_world_rule_required = true`，镜头不得直接进入渲染；必须先完成 WORLD_PROPOSAL → 十元复核 → 导演确认 → Canon 回写/登记，再重新回到镜头 READY 门禁。


## 讨论状态
- discussion_id
- discussion_status: NOT_STARTED | ACTIVE | RESOLVED | DIRECTOR_REQUIRED
- rounds_used
- conflict_fields
- decision_id
- final_patch
- world_gate: REQUIRED | BYPASS
- world_check
