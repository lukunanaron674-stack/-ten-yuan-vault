# CHARACTER_H3_READY_PACKET_SCHEMA｜角色认知 × 视觉资产 × H3 生产对齐包 v1

## 目的

解决“角色文字认知正确，但四宫格/全身参考并未与同一角色对齐，仍被下游直接送入 H3”的问题。

H3 不得直接消费“某张角色图”或“某个四宫格文件名”作为角色生产资格。
必须消费由 **AG-11 角色 Agent + AG-04 素材 Agent + AG-06 静态审核**共同形成的 `CHARACTER_H3_READY_PACKET`。

## 权责

### AG-11 角色 Agent
负责语义与身份一致性：
- 这个角色是谁；
- 世界位置 / 职业 / 叙事功能；
- 身份核心与行为认知；
- 头脸、年龄感、体型、服装结构、特殊肢体等冻结项；
- 四宫格各格是否真的是同一角色；
- 四宫格/全身图是否与角色正本认知一致；
- 哪些未知身体区域不能让 H3 自行补全。

### AG-04 素材 Agent
负责字节与来源事实：
- asset_id / source_path / SHA256；
- width / height / aspect；
- view_type；
- 文件是否真实存在；
- 是否重复 / 串角色 / 错版本。

### AG-06 静态审核
负责画面一致性：
- identity；
- cross_view_identity；
- proportion；
- costume_structure；
- silhouette；
- style；
- forbidden_redesign。

## Packet

```yaml
packet_type: CHARACTER_H3_READY_PACKET
packet_version: 1
character_id:
visual_id:
character_card_path:
character_result_ref:

cognition:
  identity_core:
  world_role:
  narrative_function:
  behavior_core:
  age_read:
  body_type_summary:
  frozen_identity_anchors: []
  frozen_body_anchors: []
  frozen_costume_anchors: []
  special_structures: []
  forbidden_reinterpretations: []
  unknown_regions: []

visual_sources:
  - asset_id:
    source_path:
    sha256:
    width:
    height:
    aspect_ratio:
    view_type: HEADSHOT|BUST|MID_SHOT|MID_FULL|FULL_BODY|FOUR_PANEL|TURNAROUND
    intended_role: IDENTITY|BODY_PROPORTION|COSTUME|POSE|H3_PRIMARY
    identity_match: PASS|FAIL|AMBIGUOUS
    cognition_match: PASS|FAIL|AMBIGUOUS
    proportion_match: PASS|FAIL|N_A
    costume_match: PASS|FAIL|N_A
    usable_shot_scales: []

four_grid_alignment:
  required: true|false
  source_asset_id:
  cells:
    - cell: TL|TR|BL|BR
      intended_view:
      identity_match: PASS|FAIL|AMBIGUOUS
      cognition_match: PASS|FAIL|AMBIGUOUS
      proportion_match: PASS|FAIL|N_A
      role_in_packet:
  cross_cell_identity: PASS|FAIL|AMBIGUOUS
  cross_cell_proportion: PASS|FAIL|AMBIGUOUS
  same_character_compile: PASS|FAIL
  notes: []

production_gate:
  semantic_identity_status: PASS|FAIL|AMBIGUOUS
  visual_identity_status: PASS|FAIL|AMBIGUOUS
  cognition_visual_alignment: PASS|FAIL|AMBIGUOUS
  body_structure_status: PASS|PARTIAL|FAIL
  asset_provenance_status: PASS|FAIL
  style_review_status: PASS|FAIL|PENDING
  h3_scale_coverage: []
  unresolved_blockers: []
  status: READY_FOR_H3|NEEDS_CHARACTER_REPLAN|NEEDS_ASSET_FIX|NEEDS_STYLE_REVIEW|BLOCKED
```

## READY_FOR_H3 硬门

只有同时满足：

1. 角色正本存在，identity_core 明确；
2. 角色认知与视觉冻结项不冲突；
3. H3 主参考真实存在且 path/hash 可核；
4. 四宫格存在时必须逐格通过身份与认知对齐，不能只看“整体像”；
5. cross_cell_identity = PASS；
6. same_character_compile = PASS；
7. 当前镜头所需景别有对应视觉信息；
8. 未知核心身体区域不会由 H3 首次补全；
9. AG-06 静态审核已 PASS；
10. 无用户已否决状态。

任一失败，不得 `READY_FOR_H3`。

## 四宫格特别规则

- 四宫格不是四张“差不多像”的图，而是一个角色的四个受控视图。
- 每格都必须有职责：脸 / 45°头身连接 / 中景比例 / 中全景比例等。
- 一格身份错位，不允许用另外三格平均掉。
- 一格出现新服装、新年龄、新身体结构、新种族特征，直接 FAIL/REPLAN。
- 四格相互比例冲突时，不得交给 H3“自己融合”。
- 单头像 + AI首次补出的三格，不自动构成可信四宫格；必须过 AG-11 对齐审核。

## H3 使用规则

AG-07 只允许读取：
- `production_gate.status=READY_FOR_H3` 的 Packet；
- Packet 中明确列出的 `H3_PRIMARY` / 可用景别资产。

AG-07 不得自行从角色目录挑一张“看起来能用”的图替代 Packet。
