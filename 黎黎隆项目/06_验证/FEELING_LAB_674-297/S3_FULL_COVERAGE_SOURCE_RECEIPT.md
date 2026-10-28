---
project: 黎黎隆
source_issue: 674-297
source_comment: f705d79f-3ec5-423b-b6a5-246dcdb49b4b
source_attachment: 47401290-f74a-4a66-9a00-b9d0725443e7
source_attachment_title: A端289张｜位置与组织/区域/场景十元候选映射｜全量覆盖复核 v2
source_attachment_bytes: 137649
source_attachment_sha256: 3f362613c40e64301527c91150a3251f7c405756a57de3885bb4a8e3bcd00173
status: SOURCE_RECEIPT / CANDIDATE_ONLY
verified_at: 2026-10-08 23:07 CST
---

# S3 全量覆盖复核 v2｜来源回执

本页记录 S3 在 674-297 的原回执和附件摘要；附件 ZIP 原始字节 SHA-256 已与评论所报值核对一致。只把字段覆盖和候选状态接入 S6，不把文字位置当精确地图坐标，也不把机器映射/图像可读升级为用户审核或 A_READY。

## 复核数据

- 机器表 289 行，asset_id 唯一；A-001—A-289 连续；审核 Canvas 289 张编号卡。
- 中央图像仓 289/289 原图存在，文件 SHA 与机器表匹配、PNG 解码 289/289 通过。这只证明源端完整可读，不代表 4080 端可读。
- 146 张场景族候选分布在 37 个来源组；146/146 有世界位置文字候选和 S4 场景族十元候选，仍为 `PROVISIONAL / CANDIDATE`。
- 结构化 `relatedLayers` 关系候选：30/37 组、126 张、211 条（世界结构 150、组织 38、区域 23）。逐图组织文字参照：27 组、119 张，保留限制/排除语境。两类证据并集覆盖 35/37 组。
- I06 空白禁区观景台与 I11 废设施训练场没有组织、区域或世界结构锚点；仍 `UNKNOWN / UNASSIGNED`。不能因为有场景描述就强配跨层关系。
- 29 张视觉研究不另算世界地点，14 张空间参考未锚定，129 张非地点素材为 `NOT_APPLICABLE`；分类有交叉，不能直接相加。68 张资产行仍有并列冲突候选，未裁决。
- 观者实际感受、强度、用户确认仍未知。674-296 仍 Todo、A_READY=0、WAIT_REVIEW=5、BLOCKED_4080=5；实验不启动。

## 来源追溯

- 674-297 评论：`f705d79f-3ec5-423b-b6a5-246dcdb49b4b`
- 674-297 附件：`47401290-f74a-4a66-9a00-b9d0725443e7`
- 本地字段审计：[[S3_FIELD_COVERAGE_AUDIT_20261008]]


## S6 独立机器表复算｜2026-10-08 23:11 CST

来源机器表 `黎黎隆项目/04_场景/场景库/A端289张世界位置与组织十元关系_STAGING_20261008.json`，文件 SHA-256：`2c7904735e2679aa6a5945bca3637526006d4e7612c50b42d26c58b149372fc3`。按 `assets` 数组、`s4AssignmentState`、`crossLayerMap.relatedLayers` 和 `organizationTextTenYuanReferences` 逐行复算：

- 289 行 / 289 个唯一 assetId / A-001—A-289 编号无重复；146 行 `SCENE_FAMILY_CANDIDATE`，规范化为 37 组。146/146 同时有 `s4WorldPositionCandidate` 和 `s4SceneTenYuanCandidate`。
- 结构化 `relatedLayers`：30/37 组、126 个资产行；world_structure 150 条、organization 38 条、region 23 条，共 211 条。
- `organizationTextTenYuanReferences`：27/37 组、119 个资产行；与结构化关系并集 35/37 组。剩余无两类锚点的组恰为 I06 空白禁区观景台、I11 废设施训练场。
- 冲突字段统计 68 行。状态字段计数：`CONFLICT_OPEN` 68、`CANDIDATE_LINKS` 47、`VISUAL_STUDY_NOT_WORLD_PLACE` 29、`SPACE_REFERENCE_UNASSIGNED` 14、`POSITION_CANDIDATE_ONLY` 2、`NOT_APPLICABLE` 129。分类状态交叉，勿相加。
- A-273/A-274/A-275/A-279/A-280 的 `sceneDesignTenYuanSourceCandidate.notation`、S4 快照与 S3 回执逐项相符；A-275 快照为 `x并z / nz`。

**复算结论：**上列整数与 S3 评论 `f705d79f-3ec5-423b-b6a5-246dcdb49b4b` 一致。本复算只核字段和值覆盖，不重验 289 张图片的文件/解码，也不代表 4080 可读、USER 审核、正式位置、真实感受或实验结果。
