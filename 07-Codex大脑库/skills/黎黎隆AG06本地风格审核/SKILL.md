---
name: 黎黎隆AG06本地风格审核
description: 以 AG-06 身份独立读取本地真实候选图，对照角色冻结项与风格锚点完成静态视觉审核。不得复用生图 Codex 的自评分作为结论。
version: 1.0
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# 黎黎隆 AG-06 本地风格审核 Skill

## 原则
这是独立审核，不是生图执行器自检。

必须重新打开真实候选图，并独立判断。
不得仅根据上一份 `LOCAL_CODEX_SELF_REVIEW` 抄结论。

## 读取
1. 指定 AG06 review task
2. AG-06_风格审核Agent.md
3. STYLE_REVIEW_SCHEMA.md
4. 目标角色卡
5. 原生成 task
6. identity/style 参考资产
7. 真实 candidate 图片

## 真实图门禁
必须通过 asset_id / sha256 / local catalog 定位并实际读取候选图。
找不到图：
`decision=BLOCKED`
不得用文字审核代替。

## 角色审核权重
- 角色一致性：40
  - 至少20分检查头身、肩胸、骨盆/腿躯比、重心、冻结身体结构
- 项目风格：30
- 中景/中全景生产可用性：20
- 异常、AI味、无依据新增：10

总分 <80 → RETRY。
核心冻结项变化 → REPLAN。

## 输出
写到：
`黎黎隆项目/20_Agent系统/07_本地执行/角色生图/reviews/<task_id>.ag06-review.json`

必须包含：
- reviewer: AG-06
- review_scope: ACTUAL_IMAGE_REVIEW
- asset_id / asset_sha256
- dimensions
- weighted_scores
- total_score
- decision
- keep_fields / change_fields / failed_dimensions
- next_route

PASS：
`next_route=CHARACTER_WRITEBACK`

RETRY：
`next_route=LOCAL_CODEX_RENDER`

## 禁止
- 不修改角色卡。
- 不自行 LOCKED。
- 不因为生图端 self-review PASS 就直接 PASS。
- 不改变世界观/十元。
