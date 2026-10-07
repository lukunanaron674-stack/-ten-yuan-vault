# Z1–Z6 状态字段冻结｜角色代理系统

> Linear 674-282 ｜ 正本：本文件 ｜ 版本 v1.0 ｜ 2026-10-07
> 上游结构：[[角色代理.canvas]] ｜ 素材身份：674-154 Asset Index（本目录 `experiments_manifest.json` 为角色域种子账）

## 每个「实验对象」必须持有的状态字段

```yaml
subject_id: <H04 / H06 / …>          # 与 674-219 visual_id 对齐，不另起名
subject_type: red-heart-character | npc   # ♥红心角色 = 用户明确选过/ Favorited；其余一律 NPC
z_stage: Z1_SOURCE | Z2_STANDARDIZED | Z3_REVIEWED | Z4_ROUTED | Z5_NX_XN | Z6_BASE_WRITTEN
xn_level: none | candidate | locked    # locked 必须有 USER 拍板记录，AI 不得代锁
nx_count: <int>                        # 已登记 NX 条数，见 NX_XN_LOG.json
asset_count: <int>                     # experiments_manifest.json 中该对象 asset 数
main_ref: <asset_id>                   # 主参考（★），必须是 CURRENT_CANON
review_status: PASS | FAIL | MACHINE_PREPASS_ONLY | PENDING_USER
review_source: <receipt/工单号>         # 人工结论必须能回指 674-173 或历史审核记录
red_heart: true | false
routing: core-character-pool | npc-pool | rework-125 | none
new_z_generated: <Z-id | none>          # Base 回写后由缺口产生的新 Z
character_pack: <pack 路径 | none>       # 红心角色 → CHARACTER_H3_PRODUCTION_PACK；NPC → NPC_Character_Pack_v0+
authority_note: <一句话权力边界备注>
updated: <ISO 日期>
```

## Z1–Z6 阶段定义（不另开六张 Linear 工单）

| 阶段 | 名称 | 进入条件 | 证据落点 |
|---|---|---|---|
| Z1 | 实验对象来源 | 每小时生图 / 已有角色 / 红心 / NPC 进入登记 | 实验对象 note 建立 |
| Z2 | 素材标准化 | 原图/四宫格/裁切派生全部有 asset_id + sha256 + parent_asset_id | experiments_manifest.json |
| Z3 | 人工审核 | 674-173 唯一入口给出 PASS/FAIL/★主参考/♥红心/USER_NX；机器预审结果只能标 MACHINE_PREPASS_ONLY | review_source 字段 |
| Z4 | 素材分流 | FAIL→674-125 返工；普通 PASS→NPC 池；♥红心→核心角色池 | routing 字段 |
| Z5 | NX→候选XN | 图像证据 + USER_NX 满足升级条件 → candidate；验证（证据 vs 反例）通过 → 待 USER 锁 | NX_XN_LOG.json |
| Z6 | Base 回写 | 本目录实验对象 note + .base/索引更新；缺口识别 → 产生新 Z | new_z_generated 字段 |

## 硬闸

1. **USER_NX 不得被 AI 冒充为正式 XN**；`xn_level=locked` 必须有 USER 拍板记录（人在环外模式下一律停在 `candidate`）。
2. 机器预审（AG-06 静态审核、cross-cell 一致性）**不算**人工审核，review_status 只能写 `MACHINE_PREPASS_ONLY`。
3. HEAD_ONLY 素材不得承担 BODY/COSTUME/POSE 职责。
4. 同一 asset_id 全系统唯一：Inner 视觉墙、Base、canvas 引用同一 id，不建第二资产身份。
5. 裁切派生图必须保留 `parent_asset_id`，派生图回 154 账，不建独立裁切仓库。
