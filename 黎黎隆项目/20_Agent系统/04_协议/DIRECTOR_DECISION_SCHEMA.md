# DIRECTOR_DECISION_SCHEMA｜导演裁决包 v1

## 身份
- decision_id
- discussion_id
- project_id
- job_id
- shot_id 或 test_shot_id
- base_state_version

## 冲突
- conflict_fields
- participants
- positions
- evidence_refs
- protected_fields
- conflict_type: CANON | WORLD_RULE | CONTINUITY | STORY_GOAL | TENYUAN | EXECUTION | OTHER

## 裁决
- decision: ACCEPT_A | ACCEPT_B | MERGE | REPLAN | ESCALATE_USER
- selected_patch
- rejected_patch
- reason
- priority_basis
- confidence
- world_rule_action: NONE | USE_EXISTING | REJECT_NEW_RULE | SEND_WORLD_PROPOSAL | ESCALATE_USER

## priority_basis 只能引用
- USER_GOAL
- CANONICAL
- CONTINUITY
- STORY_GOAL
- VERIFIED_RULE
- HYPOTHESIS
- EXECUTION_LIMIT

## 裁决后
- 锁定 final_patch
- 写回对应任务包
- rounds_used 清零
- 若 conflict_type = WORLD_RULE 且需要新增规则：生成 [[WORLD_PROPOSAL_SCHEMA]]，不得直接把临时设定写成 Canon
- 若 decision = REPLAN：返回对应 Agent
- 若 decision = ESCALATE_USER：停止自动推进
