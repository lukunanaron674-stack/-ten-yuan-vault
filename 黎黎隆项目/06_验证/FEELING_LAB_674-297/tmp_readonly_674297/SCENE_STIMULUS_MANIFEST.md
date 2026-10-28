---
project: 黎黎隆
source_issue: 674-297
status: PREPARATION_ONLY
updated: 2026-10-08
---

# 场景刺激预备清单（最多 4 张）

本轮只登记 3 张本机可读候选，不收体验数据。文件 SHA 与 674-297 当前 S3 机器映射或 674-296 R3 清单对齐；Canvas 内的图像节点直接引用 Vault 文件。

| scene_id | asset_id | local_path | source_issue / provenance | image_version | file_sha256 / bytes | decode_ok | user_review_scope | experiment_permission | gate |
|---|---|---|---|---|---|---|---|---|---|
| SC-18 改泊湾候选 | AST-0073 / A-073 | `黎黎隆项目/04_场景/场景库/10_图像仓库/AST-0073__SC-18_巨物迁徙改泊湾_潮位变化_v1.png` | 674-68 场景素材盘点；674-297 S3/A端机器映射；机器表 sourcePath 指向 SC-18 五色视觉系统原记录。此处登记 Vault 副本，不声称独立重验上游生成收据。 | `潮位变化_v1` | `2655757f942eefc7592cae1ce38e6cc548993330b32f349127216ccdc7884564` / 2,938,845 | PASS（PNG 解码及 SHA） | 本轮未找到该 asset 的 USER PASS / 指定 review_scope；UNKNOWN | PREPARATION_ONLY；无正式实验授权，不是 A_READY | WAIT_REVIEW / CANDIDATE |
| SC-18 改泊湾候选 | AST-0074 / A-074 | `黎黎隆项目/04_场景/场景库/10_图像仓库/AST-0074__SC-18_巨物迁徙改泊湾_环境改写_动作证据_v2.png` | 674-68 场景素材盘点；674-297 S3/A端机器映射；机器表 sourcePath 指向 SC-18 五色视觉系统原记录。此处登记 Vault 副本，不声称独立重验上游生成收据。 | `环境改写_动作证据_v2` | `669b3fc1ff23540e038b7b28f2d9b44d6d77f7dbf5a96603528a59e17426fb81` / 3,390,714 | PASS（PNG 解码及 SHA） | 本轮未找到该 asset 的 USER PASS / 指定 review_scope；UNKNOWN | PREPARATION_ONLY；无正式实验授权，不是 A_READY | WAIT_REVIEW / CANDIDATE |
| I13 湖岸台地氛围概念 | AST-0284 / A-284 / SRC-397 | `黎黎隆项目/04_场景/场景库/10_图像仓库/AST-0284__LLL-IMG-83F49E191AE1.png` | 674-296 R3 `A_ASSET_MANIFEST`；原登记为 TASK_R0 生产素材清单。本图是氛围概念，不据此认定正式地点或世界锚点。 | `LLL-IMG-83F49E191AE1`；锁定版本未知 | `ccf676053663eac2e7fa5dd2e724a5f5f582fb51a643b4c8f8cf0a30681e4ed8` / 2,436,653 | PASS（PNG 解码及 SHA；与 R3 清单一致） | 674-296 R3 未找到对应 USER 审图凭据；范围 UNKNOWN | PREPARATION_ONLY；296 明确 WAIT_REVIEW，不能当 A_READY | WAIT_REVIEW / BLOCKED_4080 |
| SC-06 门站带 | AST-0048 / A-048 | `黎黎隆项目/04_场景/场景库/10_图像仓库/AST-0048__SC-06_返身门站一次完整使用_v1.png` | 674-68 场景素材盘点；674-297 S3/A端机器映射；Vault 图像仓库副本 SHA 与 289 张逐图映射表一致。 | `返身门站一次完整使用_v1` | `9e1afc8dedebfdb9df9298e7f270acae2de39420b225f13351c267baeb9a24ed` / 2,790,196 | PASS（PNG 解码及 SHA） | `SCENE_FAMILY_CANDIDATE`；未在本条记录中确认精确 USER PASS/格位范围，保持 UNKNOWN | PREPARATION_ONLY；非 A_READY，正式实验未获准 | SOURCE_VERIFIED / WAIT_REVIEW / CANDIDATE |

## 画面可见线索（不等于观者感受）

- AST-0073：可见高水位港湾/栈道、多人活动、上方巨物形体；此为画面描述，不表示“紧张/宏大”等感受。
- AST-0074：可见港湾、明显水花/浪涌、栈道与人群、上方巨物形体；此为画面描述，不表示因果结论。
- AST-0284：可见临水台地/聚落、崖壁与雾光、石阶及码头；其正式审核状态仍按 674-296 R3 的 WAIT_REVIEW。
- AST-0048：可见拱形门站装置、数名人物在装置两侧操作/经过、潮湿地面与远处栈道；只记画面元素，不推断体验或机制效果。

## 本预备池对应的世界位置与跨层十元候选

以下是逐图机器映射的候选快照，不是已定地点或观者感受；全量 289 行以 [[A端289张世界位置与组织十元关系_STAGING_20261008]] 为准。

| 资产 | 世界位置/区域候选 | 组织与结构候选 | 场景十元与层间关系 |
|---|---|---|---|
| AST-0048 / A-048 / SC-06 | 模块化生活城东门/门站通路；青色参照；布局未定 | R04 东门站 `z/xn` PROVISIONAL；O1 钢铁教派 `n/xn` PROVISIONAL；G1 生活城 `n/x` PROVISIONAL | 场景族 `z/xn` PROVISIONAL；实际场景主次 UNKNOWN；与区域/组织/结构的互动均未测；R 编号口径仍保留冲突 |
| AST-0073/0074 / A-073/074 / SC-18 | 水系与巨物迁徙路线相交的改泊湾候选；正式区域未分配 | O4 航线经过、O5 生态边界权限仅为原文关系可能；R13 退潮水道 `nz/xz`、R15 迁徙路 `nx/zx` 为语义交叉候选 | 场景族 `nz/n` PROVISIONAL；实际场景主次 UNKNOWN；湾址/路线交点、组织辖区和跨层感受均未证实 |
| AST-0284 / A-284 / I13 | 非单一地点氛围概念；不分配世界坐标 | 组织/区域关系 NOT_APPLICABLE | 场景十元 NOT_APPLICABLE；不得作为某个已定地点的代用品 |

## 门禁汇总

- 预备条目：4 张，其中 3 张场景/场景族候选，1 张非地点氛围概念对照项；本机文件存在：4/4；SHA 与当前可得来源表匹配：4/4；解码通过：4/4。
- 对应 674-296 严格 A_READY 行：0；4080 端读取回执：0；因此不能进入 674-297 正式受控实验池。
- 当前没有任何真人原话、主次、强度或体验结论。图面描述不能代替人的报告。
