# STYLE_REVIEW_SCHEMA｜静态素材审核包 v1.1

## 身份
- style_review_id
- project_id
- job_id
- shot_id 或 test_shot_id
- asset_id
- base_state_version
- retry_no

## 对照
- canonical_refs
- character_or_scene_lock_refs
- style_refs
- palette_refs
- usage_target

## 审核维度
- identity
- cognition_alignment
- cross_view_identity
- cross_view_proportion
- costume_structure_consistency
- silhouette
- proportion
- linework
- flat_2d_readability
- palette
- material_feel
- composition_for_usage
- forbidden_redesign

每项：
- status: PASS | FAIL | N_A
- evidence
- instruction

## 决策
- decision: PASS | RETRY | REPLAN | BLOCKED
- keep_fields
- change_fields
- failed_dimensions

## 门禁
- PASS 后素材才可进入 approved_assets。
- RETRY 最多 3 次。
- 任何核心角色冻结项被改动 → REPLAN，不允许靠继续重抽碰运气。

## 四宫格补充门禁（v1.1）
- 四宫格必须逐格审核，不允许只给整张总分。
- 任一格 identity / cognition_alignment 核心 FAIL → REPLAN。
- cross_view_identity != PASS → 不得进入 approved_assets。
- cross_view_proportion 明显冲突 → RETRY/REPLAN，不交给 H3 自行融合。
- 审核 PASS 只证明静态视觉通过；最终 H3资格仍需 CHARACTER_H3_READY_PACKET=READY_FOR_H3。
