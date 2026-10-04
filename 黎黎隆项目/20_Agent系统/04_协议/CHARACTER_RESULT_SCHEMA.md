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

tenyuan:
  main:
  secondary: []
  source_refs: []
  status: VERIFIED|AUTHOR_INPUT|NEEDS_TENYUAN_REVIEW
  behavior_evidence: []
  forbidden_inferences: []

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

## 角色视觉回写
风格审核 PASS 后，角色 Agent只追加/更新：
- 已审核视觉资产 ID/路径；
- 审核分数与版本；
- 当前主参考；
- 仍待补视图。

失败图只允许记录在探索/失败记录，不得设为主参考。
