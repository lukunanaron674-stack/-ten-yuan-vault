# B端新增15角色｜批量候选入库（元数据入口）
登记日：2026-09-25。此文件登记图片候选关系，**不是15张正式完成角色卡，也不意味着图片已进入 GitHub/云端**。

## 原图证据（当前会话上传，本轮已在工作容器中逐字节处理）
- 全身横排原图：2048×736；SHA-256 `0747a493fe96f77d69b4e971b45b50bdc75e93a2bac032120d76a8d45f17516a`。
- 头像3×5原图：1619×971；SHA-256 `847141c3040e8d8964e84b85301c5dc9a48815a30cd4e17e442a5c6bdbb654d4`。
- 原图、15全身初裁、15头像初裁、15张9:16双视图候选卡和带裁剪坐标的候选JSON已打包为当前会话的 `LLL_B1_new_character_batch_20260925.zip`，由用户下载交本地 Codex；**ZIP和图片不在本仓库**。裁切有相邻角色边缘轻微重叠，须人工核对。双视图不是H3四宫格。
- 头像/全身配对依据：两张总览图按展示顺序对应，逐人身份最终审核仍 pending。

## 15名候选映射（编号非正式角色ID）
| 候选ID | 全身位置 | 头像位置 | B2身份文字用途 | H3身份验证 |
| --- | --- | --- | --- | --- |
| NC25-01 | 全身图从左第 1 人 | 头像图第 1 排第 1 列 | candidate_only | pending |
| NC25-02 | 全身图从左第 2 人 | 头像图第 1 排第 2 列 | candidate_only | pending |
| NC25-03 | 全身图从左第 3 人 | 头像图第 1 排第 3 列 | candidate_only | pending |
| NC25-04 | 全身图从左第 4 人 | 头像图第 1 排第 4 列 | candidate_only | pending |
| NC25-05 | 全身图从左第 5 人 | 头像图第 1 排第 5 列 | candidate_only | pending |
| NC25-06 | 全身图从左第 6 人 | 头像图第 2 排第 1 列 | candidate_only | pending |
| NC25-07 | 全身图从左第 7 人 | 头像图第 2 排第 2 列 | candidate_only | pending |
| NC25-08 | 全身图从左第 8 人 | 头像图第 2 排第 3 列 | candidate_only | pending |
| NC25-09 | 全身图从左第 9 人 | 头像图第 2 排第 4 列 | candidate_only | pending |
| NC25-10 | 全身图从左第 10 人 | 头像图第 2 排第 5 列 | candidate_only | pending |
| NC25-11 | 全身图从左第 11 人 | 头像图第 3 排第 1 列 | candidate_only | pending |
| NC25-12 | 全身图从左第 12 人 | 头像图第 3 排第 2 列 | candidate_only | pending |
| NC25-13 | 全身图从左第 13 人 | 头像图第 3 排第 3 列 | candidate_only | pending |
| NC25-14 | 全身图从左第 14 人 | 头像图第 3 排第 4 列 | candidate_only | pending |
| NC25-15 | 全身图从左第 15 人 | 头像图第 3 排第 5 列 | candidate_only | pending |

## Codex 一次性导入和验收
1. 保存 ZIP 原始文件和两张不可变源图到本地素材区，校验 SHA256；读取包内 `handoff/candidate_manifest.json` 中的15组 crop、坐标、状态与源图哈希，人工确认全身↔头像1:1对应。
2. 查重既有角色池，重合则绑定既有ID而不是重建；未重复者才发正式角色ID；不得改动 LLL-MAIN-001、ADV-001、MOUSE-EAR-MUTANT-001 既有身份。
3. 真正绑定图像：记录可被本地/4090云端读取的实际路径或对象URL、图像SHA256/尺寸、版本；如上传到GitHub，再登记实际 GitHub path/blob。不得把此 MD 的GitHub路径冒充图片路径。
4. 逐角色完成正式9:16 H3四宫格（全身比例、全身45°、头像、头部45°）和身份/比例/识别件审查；没有45°真实素材就留 missing，不凭原图推定已存在。
5. 素材仅在真实验证完成后以正式ID追加进 `assets/character_pool_index.json`；未完成者保留独立候选池，不得把旧索引批量置 `h3_render_eligible=true`。
6. B2可先使用候选的视觉身份文字做单角色、观众感受假设与十元候选研究；B3可先编译文字，但只有正式身份/Picture1和真实场景Picture2均绑定且通过校验，才交4090实际渲染。角色素材参考卡为9:16，视频输出为16:9横屏、10–11秒、同prompt双抽。
7. 同批15个角色可以批量入索引，不代表同一个H3任务允许同框15人；每轮只选一名角色、一个可用SCENE-ID。

## 状态
- 本文件：候选文字索引，待本地Codex素材同步。
- 图片 GitHub 上传：NOT_DONE。云端图片绑定：NOT_DONE。
- 15人正式ID / H3四宫格 / identity / render eligibility：PENDING。
- 场景素材数：0（本批仅角色，不修改正式13张场景池）。
