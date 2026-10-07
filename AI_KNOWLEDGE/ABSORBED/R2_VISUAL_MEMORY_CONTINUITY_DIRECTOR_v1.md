---
type: absorbed-knowledge-pack
pack_id: ABS-R2
status: ROUTED
version: v1.0
updated: 2026-10-08
source_master: AI_KNOWLEDGE/EXTERNAL_KNOWLEDGE_MASTER_v2_20261008.md
scope: [reference, memory, continuity, director, storyboard, camera]
primary_linear: 674-286
secondary_linear: [674-282, 674-293, 674-124, 674-173, 674-289, 674-216, 674-76]
---

# ABS-R2｜Reference / Memory / Continuity / Director

## DIRECT｜正式吸收

### M13 ENTITY-FIRST MEMORY
长期记忆以角色 / 道具 / 场景等实体为主，不以整帧历史作为唯一记忆单位。

### M14 CURRENT STATE ≠ HISTORY
当前状态、历史版本、失败版本、撤销状态分层保存。

### M17 APPROVED > LATEST
生产默认读取 approved / canonical asset，不自动消费最新生成。

### M18 RETRIEVE → USE → UPDATE
镜头生产前检索实体状态；生产后根据真实结果更新或撤销状态。

### M19 CONTINUITY IS MULTI-LAYER
连续性至少拆分：镜内运动 / 镜头边界 / 身份与场景 / 长程漂移。

### M22 SHOT BOUNDARY IS EXECUTABLE DATA
shot duration / cut point / transition / opening_state / closing_state 为执行字段。

### M23 FIRST-LAST ≠ CONTINUATION
首尾帧插值与沿已有运动继续是不同任务，不互相冒充。

### M43 BEAT → SHOT IS FUNCTIONAL COMPILATION
Script不能按句号机械拆镜；先识别叙事功能、信息变化、动作变化，再形成shot。

### M44 SHOT PURPOSE + COVERAGE
每个shot必须有 shot_purpose / coverage_role；镜头数量服从剪辑与信息需要。

### M45 SPATIAL PLAN BEFORE PROMPT
角色、道具、场景位置先明确，再生成camera/prompt；不把blocking交给模型自由猜。

### M46 BLOCKING × CAMERA ARE COUPLED
人物走位与camera path联合规划，特别是多角色、追踪、遮挡、交互镜头。

### M47 CAMERA = SEMANTIC + PARAMETRIC
相机同时保留：
- semantic：shot size / angle / relation / reveal
- parametric：pose / lens / trajectory / intrinsics（能力允许时）

### M48 STORYBOARD / ANIMATIC = APPROVAL + EXECUTION PLAN
Storyboard/animatic同时承担视觉预演、timing、blocking、camera、edit冻结，不只是概念图。

## SPLIT｜只吸收结构

### M07 IDENTITY ≠ FACE
**吸收**：Identity字段覆盖脸、发型、比例、服装、结构、识别标记。
**待验证**：各字段对当前模型一致性的权重。

### M08 REFERENCE DECOMPOSITION
**吸收**：Identity / Costume / Pose / Shape / Style / Composition 分账。
**待验证**：H3/Wan/Vidu各自最佳reference槽位组合。

### M10 MULTI-VIEW JOINT ASSET
**吸收**：三视/四宫格属于同一实体的联合资产。
**待验证**：它相对单参考对当前产线增益多少。

### M11 STYLE ≠ CONTENT ≠ LAYOUT
**吸收**：风格、内容、布局分字段/分控制职责。
**待验证**：具体模型解耦强度。

### M12 SCENE IDENTITY INCLUDES GEOMETRY
**吸收**：场景状态包含空间结构/位置关系。
**待验证**：需要保存到多细才能达到成本最优。

### M15 MEMORY TIERS / BUDGET
**吸收**：Working / episodic / semantic / archive 分层并设上下文预算。
**待验证**：各层容量/top-k。

### M16 HYBRID RETRIEVAL
**吸收**：metadata hard filter + exact/lexical + vector；graph按关系查询需求使用。
**待验证**：当前素材库最简高收益组合。

### M25 WORLD / CINEMATIC STATE
**吸收**：world geometry / screen direction / eyeline / axis / action phase / velocity 可进入continuity state。
**待验证**：哪些字段对当前H3最有效。

### M49 PREVIS TARGET = UNAMBIGUOUS
**吸收**：复杂镜头允许用greybox/blockout作为previs输入结构。
**待验证**：它是否显著提高当前H3/Wan镜头成功率。

## VERIFY POINTERS｜不得吸收成效果规则

- M09 Identity ↔ Editability trade-off 的项目甜点
- M20 short-memory + long-anchor 的实际收益
- M21 selected-history 相对全历史的项目收益
- M24 anchor/recache 对30s/60s drift的真实收益

## 最小 Director / Shot Packet

```yaml
scene_id:
beat_id:
shot_id:
shot_purpose:
story_change:
coverage_role:

subjects:
required_props:
scene_geometry_ref:

blocking:
  subject_positions:
  subject_motion:
  interaction_target:

camera:
  shot_size:
  angle:
  lens_or_focal_behavior:
  camera_pose:
  camera_motion:
  trajectory_ref:

timing:
  duration:
  action_beats:
  cut_in:
  cut_out:
  transition_intent:

continuity:
  opening_state:
  closing_state:
  screen_direction:
  eyeline:
  action_phase:
```

## 路由

- 角色规则/语义：674-282
- 静态生产：674-124
- 角色资产/provenance：674-293
- USER canonical审核：674-173
- B端/Director/H3编排：674-286
- H3视频版本/证据：674-289
- 非黎黎隆多角色验证：674-216
- 项目视觉总控：674-76

## 状态

KNOWLEDGE_READY = true
ROUTED = true
CONNECTED = false
VERIFIED = false
AI_LEARNED = false
