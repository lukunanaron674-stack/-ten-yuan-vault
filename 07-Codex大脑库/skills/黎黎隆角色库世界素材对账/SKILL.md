---
name: 黎黎隆角色库世界素材对账
description: 对齐角色卡、世界观正本与本地真实角色素材，建立五色排序和角色视觉完成度；只做核验与结构化回执，不移动删除原图。
version: 1.0
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# 黎黎隆角色库世界素材对账 Skill

## 执行入口
收到指定 task 路径且：
- status = READY_FOR_LOCAL_CODEX
- execution_owner = LOCAL_CODEX

则**直接执行，不再要求第二次确认**。

默认任务：
`黎黎隆项目/20_Agent系统/07_本地执行/角色生图/inbox/CHAR-LIB-RECONCILE-5COLOR-001.json`

## 目标
逐个把“角色文字、世界位置、真实视觉素材”对上。

### 角色轴
- REGISTERED / UNREGISTERED / CONFLICT
- world_alignment
- world_region
- color_bucket
- visual_readiness

### 素材轴
- 真文件是否存在
- view_type
- relative_path
- sha256
- dimensions
- style_review_status

## 视觉完成度口径
- 身份匹配四宫格 → READY_4GRID
- 全身或中全景，无四宫格 → REFERENCE_PARTIAL
- 只有头像 → HEAD_ONLY_DESIGN_PENDING
- 无真实图 → ASSET_UNVERIFIED

## 五色
P00 五色：
- C01 深墨青 #142A34
- C02 灰紫 #855D8F
- C03 暗红 #913840
- C04 青蓝绿 #69D4CE
- C05 淡青灰 #CDE7E6

必须看真实主参考后分桶。
世界青/红/粉与 P00 五色不得互相推导。

## 世界同化
读 `世界观/00_世界观总索引.md` 与对应区域正本。
检查 geography / organization / world mechanism 是否真的存在。
缺口只报 PARTIAL/CONFLICT，不在本任务里创造新世界正本。

## 禁止
- 不移动/删除/覆盖图。
- 不因为文件名就认角色。
- 不因为单头像就写角色完成。
- 不因为四宫格存在就自动 LOCKED。
- 不用世界色区替代视觉五色桶。

## 输出
写：
`黎黎隆项目/20_Agent系统/06_验证/CHARACTER_WORLD_ASSET_RECONCILE_5COLOR.md`

报告必须包含：
1. 五色桶 C01-C05
2. 每角色主 ID
3. world_region + world_alignment
4. best_view_type + visual_readiness
5. 真实 path/hash
6. 未登记视觉候选
7. 冲突/重复
8. 建议 AG-11 的下一动作

完成后可提交/推送文本报告；不要提交大图二进制，除非已有项目规则明确要求。
