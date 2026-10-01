# CHARACTER_RESULT_SCHEMA｜角色 Agent 结果协议 v1

## 用途
规范 AG-11 角色 Agent 的新建、更新、审核与视觉任务输出。

角色任务与镜头任务分轨。角色卡写回不等于镜头状态推进。

## 统一头
```yaml
project_id: LLL
job_id:
character_task_id:
base_state_version:
agent: character
result_type: CHARACTER_RESULT
status: PASS|NEEDS_REVIEW|BLOCKED|STALE_RESULT
submitted_at:
```

## payload
```yaml
mode: CHARACTER_BUILD|CHARACTER_UPDATE|CHARACTER_AUDIT|CHARACTER_VISUAL_BRIEF

character:
  id:
  name:
  aliases: []
  canon: STAGING|LOCKED
  region: cyan|red|pink|cross_region|unassigned
  narrative_level: NPC|RECURRING|KEY|PROTAGONIST
  identity_core:
  story_function:
  organization:
    value:
    status: CONFIRMED|CANDIDATE|NONE
  world_mechanism_refs: []
  world_position_status: CONFIRMED|CANDIDATE|UNKNOWN

tenyuan:
  main:
  secondary: []
  source_refs: []
  source_status: CANON|AUTHOR_INPUT|INFERRED|UNKNOWN
  verification_status: VERIFIED|NEEDS_TENYUAN_REVIEW|NOT_APPLICABLE
  behavior_evidence: []
  forbidden_inferences: []

body_structure:
  status: LOCKED|PARTIAL|EXPLORING|NEEDS_GRAYBODY_TEST
  source_priority:
    - AUTHOR_IMAGE
    - AUTHOR_NUMERIC
    - CHARACTER_CARD
    - TENYUAN_BODY_RESEARCH
    - STANDARD_ANATOMY
  numeric_profile: []
  observed_variables:
    head_body_ratio:
    shoulder_width:
    ribcage_length:
    pelvis_width:
    leg_torso_ratio:
    joint_mass:
    extremity_mass:
    center_of_gravity:
  unknown_regions: []
  candidate_body_types: []
  conflict_notes: []
  graybody_test_required: false

visual:
  identity_anchor: []
  style_anchors: []
  frozen_visuals: []
  variable_visuals: []
  negative_visuals: []
  silhouette_rule:
  proportion_rule:
  palette_rule:
  required_views:
    - medium_full
    - medium_full_alt
    - head_closeup
    - three_quarter_upper
  layout: "9:16 2x2"
  asset_status: EXISTING|MISSING|PENDING_STYLE_REVIEW|APPROVED

asset_gaps: []
conflicts: []
blocked_by: []

writeback:
  character_card_path:
  character_index_path: "黎黎隆项目/03_角色/角色库/00_角色总索引.md"
  card_action: CREATE|UPDATE|NONE
  index_action: UPDATE|NONE
  written: false

next_route: NONE|TENYUAN_REVIEW|WORLD_CHECK|ASSET_CHECK|IMAGE_GENERATE|STYLE_REVIEW|CHARACTER_WRITEBACK|DIRECTOR
```

## 硬门
1. 新角色默认 `canon: STAGING`。
2. LOCKED 需要作者明确确认，不由角色 Agent 自行升级。
3. 新生/克/补关系无正本证据时必须 `NEEDS_TENYUAN_REVIEW`。
4. 需要新世界规则时转 WORLD_CHECK / WORLD_PROPOSAL，不在角色卡里偷偷造 Canon。
5. 视觉任务必须同时给 identity_anchor 与 style_anchors；二者职责不得混淆。
6. 新图经 AG-06 审核总分 <80 时，`visual.asset_status` 不得为 APPROVED。
7. 核心冻结项变化直接 REPLAN，不允许靠平均分蒙混过关。
8. 没有真实 asset_id / source_path / sha256 或仓库真实路径时，不得伪造资产已归档。
9. 角色卡写回后 `writeback.written=true`，但这不改变 SHOT / RENDER 状态。
10. 世界位置、十元、视觉、身体结构、资产状态必须独立记录，禁止互相推导为“都已确认”。
   十元还必须拆成 `source_status` 与 `verification_status`：作者输入可以明确存在，同时理论关系仍需复核。
11. 作者原稿/作者数字比例优先于十元体型研究；理论冲突只能记录，不得自动修正原稿。
12. 原稿未确认的身体区域必须进入 `unknown_regions`，AI首次补全不得直接升级为 LOCKED。
13. XN vs X 分界仍为研究态；需要时 `body_structure.status=NEEDS_GRAYBODY_TEST`。
14. 数字比例必须绑定身体落点、主辅权重、分布与证据状态，不得把单个数字当固定体型标签。

## 角色视觉回写
风格审核 PASS 后，角色 Agent只追加/更新：
- 已审核视觉资产 ID/路径；
- 审核分数与版本；
- 当前主参考；
- 仍待补视图。

失败图只允许记录在探索/失败记录，不得设为主参考。
