# CHARACTER_CODEX_TASK_SCHEMA｜角色本地 Codex 工单 v1

文件位置：
`20_Agent系统/07_本地执行/角色生图/inbox/<task_id>.json`

核心字段：
- schema_version
- task_id
- project_id
- character_id
- character_card_ref
- mode
- status
- execution_owner
- goal
- usage_target
- identity_anchor_requirements
- style_anchor_requirements
- frozen_visuals
- variable_visuals
- negative_visuals
- body_structure
- layout
- asset_lookup
- output_contract

## 硬门
- status 不是 READY_FOR_LOCAL_CODEX 时不得执行。
- identity/style 真实资产未解析成功时 BLOCKED。
- unknown_regions 非空时只能输出探索候选。
- task 不授权角色 Canon、十元 Canon、世界观 Canon 更新。
- 本地 Codex 不得把生成结果自行标 APPROVED/LOCKED。
