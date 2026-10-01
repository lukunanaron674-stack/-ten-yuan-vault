# NONCH CHARACTER ASSET DISCOVERY｜2026-10-01 20:33

## 调度结论
- primary: AG-04 素材
- dependent: AG-11 角色
- 硬门禁：排除 `CH-*`、`LLL-MAIN-*`、旧 B 端 character_pool_index。
- 允许池：`H01-H30`、`N01-N30`、`S01-S19`、`NPC-*`。

## 素材发现
### NPC-01｜披肩居民
- source_path: `03_角色/角色库/02_H3专用角色库/assets/NPC-01/NPC-01_披肩居民_H3四格候选01.png`
- sha256: `e6bd11543240ec9c37b70fc8b37a2b4817ab5b3e72529e043c51c2d82e72f51d`
- view_type: `FOUR_GRID`
- existence: `VERIFIED_BY_INDEX`
- duplicate_group: 与 `CH-014_未命名角色_图二参考_H3四格卡_v1.png` 同 SHA。该重复组存在身份冲突风险，不能因为路径名是 NPC-01 就直接判定身份。
- style_review: `UNKNOWN`
- h3_bindable: `UNCONFIRMED`
- visual_readiness: `READY_VISUAL`（仅表示图像信息量足够，不等于正式生产 READY）

### S01
- source_path: `03_角色/角色库/03_线A_S卡19人/S01.png`
- sha256: `3481ea1bfff66afafdd8b9aad98cd6ff78d6d0014807564a8ae3868c9faea611`
- view_type: `VISUAL_CANDIDATE`
- existence: `VERIFIED_BY_INDEX`
- style_review: `UNKNOWN`
- h3_bindable: `UNCONFIRMED`
- visual_readiness: `NEEDS_VIEW_AUDIT`

### S01_new
- source_path: `03_角色/角色库/03_线A_S卡19人/S01_new.png`
- sha256: `68a657c6b3507f90a44fb5ceee562165aa89fd2b9412ea0365bb23400c13e797`
- view_type: `VISUAL_CANDIDATE`
- existence: `VERIFIED_BY_INDEX`
- style_review: `UNKNOWN`
- h3_bindable: `UNCONFIRMED`
- visual_readiness: `NEEDS_VIEW_AUDIT`

### S02
- source_path: `03_角色/角色库/03_线A_S卡19人/S02.png`
- sha256: `f5507017b155d1bab1e268163dd6bcb7bfd1bc91f8a71d67ca7c34ef5d57028c`
- view_type: `VISUAL_CANDIDATE`
- existence: `VERIFIED_BY_INDEX`
- style_review: `UNKNOWN`
- h3_bindable: `UNCONFIRMED`
- visual_readiness: `NEEDS_VIEW_AUDIT`

## AG-11 角色审计
当前证据不足以把以上候选升级为正式角色：
- NPC-01 有四格，但与被禁用 CH-014 图像同 SHA，身份存在冲突；`registration/canon/world_position` 未通过本轮证据确认。
- S01/S01_new/S02 是真实视觉候选，但当前只核到路径与 SHA，不能凭文件名补角色身份、世界位置或冻结项。

## 联合判定
`production_eligibility: BLOCKED`

没有任何非 CH 候选满足联合 READY：真实素材 + 身份明确 + 视觉关键项锁定 + 风格审核 PASS + H3 可绑定。

## 最短补齐路径
1. 优先解决 `NPC-01` 与 `CH-014` 同 SHA 的身份冲突，确认 NPC-01 是否为独立合法身份；若合法，再做 AG-06 风格审核与 H3 bindability 核验。
2. 若 NPC-01 冲突不能解除，则继续对 S 池按 `S01_new → S01 → S02 → 其余 S03-S19` 做视图/身份联合审计；只要出现一名身份明确且 READY_VISUAL 的候选，即进入风格审核。
3. H/N 池保持后备，因为当前发现证据主要是头像/批量色块稿，优先级低于有四格或更完整视图的候选。

本轮不写 H3 inbox，不标 RENDERING。