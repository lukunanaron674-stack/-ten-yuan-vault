# WORLD_PROPOSAL_SCHEMA｜世界规则提案包 v1

## 用途
仅当正式镜头或学习实验发现 `new_world_rule_required = true` 时使用。
它不是镜头卡，也不自动等于 Canon。

## 身份
- world_proposal_id
- project_id
- source_job_id
- source_shot_id 或 test_shot_id
- region
- base_state_version

## 提案
- proposed_rule
- problem_it_solves
- canon_refs
- primary_tenyuan
- secondary_tenyuan
- relation_chain
- concrete_mappings
- civilization_effects
- continuity_impact
- affected_existing_rules

## 审核
- world_agent_verdict: KEEP | MERGE | LOW | REJECT
- tenyuan_review: PASS | MODIFY | REJECT
- duplicate_check
- risk_level: LOW | MEDIUM | HIGH
- director_decision: ACCEPT | MERGE | REJECT | ESCALATE_USER

## Canon 门禁
只有以下全部满足才允许登记为可调用世界规则：
1. world_agent_verdict = KEEP 或 MERGE
2. tenyuan_review = PASS
3. 与现有 Canon 无冲突，或已有明确 merge_target
4. director_decision = ACCEPT 或 MERGE
5. HIGH 风险或修改核心世界硬门时必须 ESCALATE_USER

## 输出
- final_rule
- write_target
- merge_target
- effective_scope
- status: CANDIDATE | APPROVED | REJECTED | USER_REQUIRED

> 镜头不得把 CANDIDATE 当 APPROVED 使用。
