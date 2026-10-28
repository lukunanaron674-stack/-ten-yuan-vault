---
project: 黎黎隆
type: 场景感受实验记录
status: BASELINES_ONLY
source_issue: 674-297
updated: 2026-10-08
---

# 场景实验日志

## N4 素材补充｜SC-02 与外部场景参考

SC-02 自由锚港 v3 已放入总控 Canvas。画面含水港、船、水上建筑和行人，可作为有人水港的候选参照；不是“漫灌无人”，也不能凭图名/外观定成船房。区域十元与感受 UNKNOWN，详见 [[N4_NX_REFERENCE_REVIEW_20261009]]。


## 粉城三处生活景视

- asset：`SCENE-PINK-001_三处魔法城生活景视_CANDIDATE.png`
- local path：`黎黎隆项目/07_持续发散/2026-10-03_粉色世界_小魔法师锚点_角色与生活景视探索/SCENE-PINK-001_三处魔法城生活景视_CANDIDATE.png`
- bytes：3,279,157；本地 SHA-256：`11b2755917d44e40f35b0c184361a72874b27d40f8f313a1788b9f4e434879ec`。
- 画面基线：三联画分别呈现髓盆咒市、膜染高台、髓腔学徒回声学堂候选空间；遗蜕建筑与粉色中古魔法氛围明显。底部有生成字样；既有记录写明画风尚待用户验收。
- pool：`EXPERIMENT` / `PROVISIONAL`，不作 A_READY、USER_CONFIRMED 或正式场景。
- 当前实验：无。controlled_variable=`NONE`；result/delta=`MISSING`。
- 下一步：先从 674-296/674-68/674-293 对应场景输入核 asset_id、SHA、审核状态；再拆成可单独引用的场景对象。若图风格/标签干扰实验，先标清干扰变量，不擅自修图。

## 白角猎径、镜堂、珊瑚祭场

当前只查到文本候选映射，未核到能代表相应地方/组织/仪式的已审核场景输入。记 `EXISTING_VISUAL=UNKNOWN`、`baseline_feeling_plain=UNKNOWN`、实验 `NOT_STARTED`。不因缺图就自动生成新场景。


## S3 全量素材用途复核｜2026-10-08

289张按 A-001—A-289 保持原编号。146张保留场景族候选，14张是单张空间场景参考但黎黎隆世界锚点未映射，129张为非地点素材。原89张待逐张归位批次已拆为：43张联系表/审计拼图、18张氛围/功能细节实验、14张空间参考、4张角色/生物精灵图、6张道具/部件参考、3张现实人物访谈参考、1张设备结构图。非地点素材的世界区域和组织关系标为 NOT_APPLICABLE；空间参考继续 UNKNOWN/UNASSIGNED。上述仅为用途分类，不是用户审核或A_READY。

## 674-296 输入门复核｜历史快照 2026-10-08 16:37 Asia/Shanghai

- Linear 674-296 当前 Todo，附件 0、评论 1（R3=`BLOCKED_INPUT`）；A_READY verified_count=`NOT_VERIFIED`，可继承 A_READY 场景行 = 0。
- 因此本日志当前是素材基线与候选记录，未启动受控场景实验；实验结果与变量差异仍为 MISSING。
- 粉城三联图继续 `CANDIDATE / EXPERIMENT`，不当作三个过审场景或 A_READY；等正式资产行后再核 asset_id、path/SHA、review_evidence 和 pool。

## 最新 S3/上游状态回读｜2026-10-08 16:53 Asia/Shanghai

- 674-297 已写入 S3 继续回执 `c47503d9-f0b3-4efd-aadb-ce9c9be62a9a`：89 张用途细分、146/14/129 分类、区域字段统计、公开观览台 v10 和继续闸门。
- 674-296 仍 Todo；最新 R3 评论 `f14f3982-7e64-44c1-8823-9fd2b617d1b2` 为 `BLOCKED_INPUT`，verified_count=`NOT_VERIFIED`。没有可继承的 A_READY 场景行，本槽实验数保持 0。

## S3 场景位置/关系覆盖审查｜2026-10-08 16:59 Asia/Shanghai

- 新增 `S3_POSITION_RELATION_COVERAGE_STAGING_20261008.md`：区分 48 组规范化 `s4SceneGroup` 与 63 种原始 `sceneGroup` 写法；34 组编号场景/106 张中，17 组有 SC 候选、4 组/44 张冲突并列、8 组/9 张仅有题名级候选。
- 可从当前快照安全确认的只有来源明示候选；8 组未映射项不按颜色、题名或图面补造区域/组织关系。14 张空间参考仍 `UNKNOWN / UNASSIGNED`。
- 最新复读 674-296 为 `Todo`，唯一评论 R3=`BLOCKED_INPUT`，无 4080 实机可达/ SHA 回执；没有可继承 A_READY 场景行。场景实验数仍为 0。
- 继续顺序：逐项查 674-68/场景总 Canvas/世界观文字锚点 → 有证据才补 STAGING 交叉索引 → 保留冲突 → 等 296 合格行后才开始单变量实验。
## 直接来源复核补记｜2026-10-08 17:02 Asia/Shanghai

- I01《旧机械腹腔小窝》在历史 R1 十元样板中另有单帧候选：主 N，次 NZ / X并Z，最终置信度 18；当前 S4_ASSIGN 是 XZ / NZ，状态 PROVISIONAL。二者对象层与来源版本不一致，单独并列为候选差异，不合并为场景感受。A-0268 的 `sceneTenYuanMain/Secondary` 仍是 UNKNOWN。
- 旧机器索引给 AST-0268 的路径指向 `image_handoff/.../assets/scene/LLL-IMG-CD1EEECA39E2.png`，该登记路径本机不存在；SHA 仍出现在场景库/历史 manifest/样板索引中。本次没有扫描所有图片并按 SHA 查找可能的改名副本，因此只记 `REGISTERED_PATH_MISSING; REPLACEMENT_NOT_VERIFIED`，不声称素材已永久丢失。旧样板的画面文字描述作为历史索引，不算本轮重新看图。
- 证据位置：`07_持续发散/r0_semantic_index/R1_十元化样板_2026-09-22.md` §12；机器表 AST-0268；原路径检查结果。无新世界坐标可补，继续 UNKNOWN。
## Linear 回执索引｜2026-10-08

- 工作经验与覆盖审查：674-297 评论 `2c864cc6-9d3a-4f32-a5ae-c03bef9a7f16`。
- I01 十元候选差异与登记路径复核：674-297 评论 `3dba08f3-17a4-4488-8b1e-845fb5bf25c3`。
## AST-0268 仓库副本核验更正｜2026-10-08 17:04 Asia/Shanghai

> 更正上一条：登记源路径失效，但唯一素材仓内找到同 SHA 原图，故素材本体不是未验证/丢失状态。

- 场景库 `uniqueAssets` 记录的中央仓路径：`黎黎隆项目/04_场景/场景库/10_图像仓库/AST-0268__LLL-IMG-CD1EEECA39E2.png`；文件 2,081,051 bytes。实测 SHA-256=`3c86bfbb322fde1dadd36f6a23f73b12b993cce0cfe2c09e2dd50c947e25cf26`，与清单一致。
- 本轮实际看图：大型弧形/舱体金属内室，右侧有床、桌椅、架子、织物等起居陈设；弧形开口外可见荒漠岩柱/峡谷。可描述为“巨构内部的生活空间，外接荒漠峡谷视野”；图像不证明其在 G1/G5/G7 或其他地图坐标，也不证明人物长期居住/组织关系。
- 十元层保留差异：历史 R1 单帧候选 N / (NZ, X并Z)，final 18；当前 S4 为 XZ / NZ、PROVISIONAL；两者都不是用户感受结论。A-0268 `sceneTenYuanMain/Secondary` 仍 UNKNOWN。
- 状态改为：`SOURCE_PATH_STALE; CENTRAL_WAREHOUSE_SHA_VERIFIED`。原 sourcePath 已旧；不改源素材路径、不动图像，不把候选升级为审核通过。
- AST-0268 仓库核验更正：674-297 评论 0bf3d41-4495-420d-bf68-53273ffe3474。


## S3 场景锚点续审接入｜骨骼空港两项 G5 候选关联｜2026-10-08

- A-271/AST-0271（I04_骨骼空港）与 A-283/AST-0283（骨骼空港）：674-297 最新 S3 回执依据场景总 Canvas `ext_a_h` 和正式地域表 §1，新增 G5「白骨营地」候选关联。
- 分支处理：S4「模块化生活城交通/维护节点」继续并列；不裁为同一地点，不将 G5 的 R-17 候选关系推给 A-271/A-283。
- 实验字段：两图的场景十元、实际感受、生克补和组合因果仍 `UNKNOWN / NOT_STARTED`。G5 文字关联只是位置来源候选，不是十元结论或用户审核。
- 同批复核：其余 7 组题名候选仍 `UNKNOWN / POSITION_CANDIDATE_ONLY`；14 张空间参考仍未锚定。674-296 仍 `Todo / BLOCKED_INPUT`，没有合格 A_READY 行，场景实验继续 0。
- 来源路径：674-297 最新描述（S3 v12）；本地 `S3_POSITION_RELATION_COVERAGE_STAGING_20261008.md` §“G5 文字锚点复核”；`04_场景/场景总Canvas.canvas` 节点 `ext_a_h`；`01_世界观/00_设定整理_20260925/06_正式地域与势力表_v0.1.md` §1。


## S3 关系字段覆盖复核｜2026-10-08 18:12

- 289 张/289 个唯一 SHA 资产键，类别仍为 146 场景族候选、14 空间参考、129 非地点。146 张场景族候选分属 37 个规范化来源组。
- 17组/47张有 SC 编号候选；6组/19张有区域候选；13组/38张有组织候选；11组/60张有世界结构候选；4组/44张有跨表冲突。分类交叉重叠，不相加统计。
- `relatedLayers` 最新覆盖为30/37组、126张；余下7组里5组有具名组织文字参照（含限制/排除原句），I06/I11暂无组织文字锚。文字参照不能当辖区。冲突宽口径11组/68张；旧5组/46张属较早快照，不可相加/相减。详见 [[S3_FIELD_COVERAGE_AUDIT_20261008]]。
- 这是来源字段覆盖复核，不是 160 张空间图的感受测试；场景十元仍 UNKNOWN，实验仍 0，等 296 的实际 4080 可读/ SHA 回执与合格 A_READY 行。


## 674-296 R3｜AST-0284 湖岸台地氛围概念｜2026-10-08

- 资产：`AST-0284 / SRC-397`，`I13_洛维恩湖岸台地领_氛围概念`；源图位于 `04_场景/场景库/10_图像仓库/AST-0284__LLL-IMG-83F49E191AE1.png`。
- 本机核验：2,436,653 bytes；SHA-256 `ccf676053663eac2e7fa5dd2e724a5f5f582fb51a643b4c8f8cf0a30681e4ed8`；解码通过，1672×941。画面可见冷白雾光、崖壁聚落、临水石阶和码头，远处有山体与桥状结构。
- 来源登记状态：`unprocessed · TASK_R0 生产素材清单`；R3 未找到对应 USER 审图凭据。保留为 `WAIT_REVIEW`，不升 A_READY；当前机器不是 4080，目标端读图/SHA 仍未验证。
- 场景十元、区域归属与实际观者感受：`UNKNOWN / NOT_MEASURED`；场景类型登记仍是非地点氛围概念，本条不新增地图锚点。
- controlled_variable=`NONE`；实验 `NOT_STARTED`；无生成、无渲染、无因果结论。完整审核字段见 R3 清单 `A_ASSET_MANIFEST.md`。

## S3 最新回写｜SC-18 × R13/R15 交叉线候选

- AST-0073/A-073 与 AST-0074/A-074 仍是 SC-18「改泊湾」候选，场景族十元 `nz/n` 为 `PROVISIONAL`。
- S4_ASSIGN 的 R13「退潮水道」`nz/xz`、R15「迁徙路」`nx/zx` 与源文水系/迁徙语义相符，逐图表新增两条 `candidate_route_intersection` 交叉候选。S4 没有明示挂接，湾址、迁徙路线及相交位置没有证据。
- 原 R4/R-04 冲突保留；不把 R13/R15 写成正式位置。实际感受、强度、生克补仍 `UNKNOWN / NOT MEASURED`，没有运行实验。

## 主观感受研究预备池｜2026-10-08

- 方法只做预备：先本人自由原话，再本人确认中性结构，最后研究者后置十元候选；未收真人报告，未做正式实验。
- 本机筛到 3 张来源可追溯的候选图（2 张 SC-18 + AST-0284），均解码/ SHA 通过；按当前审查口径全保持 WAIT_REVIEW / PREPARATION_ONLY。
- A-073 与 A-074 同时改变水位/浪涌、巨物表现、人物/物件分布和构图，不能做单变量因果对照；有效版本对 0。
- 674-296 R3 当前 A_READY=0 / WAIT_REVIEW=5 / BLOCKED_4080=5；真人原话 0，正式场景实验 0。
- 清单：[[SCENE_STIMULUS_MANIFEST]]；空白卡：[[SUBJECTIVE_REPORT_TEMPLATE]]；对照审查：[[CONTROLLED_PAIR_AUDIT]]；门槛：[[EXPERIMENT_READINESS]]。

## S6｜角色关联场景候选值来源核对｜2026-10-08

只核来源字段，不计实验：S4_ASSIGN.staging_objects中镜堂（青镜圣堂）为 zn+xn 候选，珊祭（珊瑚滩祭场）为 zn+xn 候选；二者的挂靠分别写 O1、O5候选。当前没有仪式/圣堂场景的观者报告或受控对照，场景关系与实际感受仍UNKNOWN。完整四角色对象对照及N14-R13缺口见 [[S6_TENYUAN_CROSSWALK_AUDIT_20261008]]。
## S6｜关联场景对象Ten Yuan全量来源核对｜2026-10-08

17个具名小世界对象候选中，船队锚港SC02、离船碑SC14、青镜圣堂（staging镜堂）、珊瑚滩祭场（staging珊祭）等场景对象字段均与地图短码一致，且见于相应角色的S4位置字段。该结果不等于场景挂靠或观者感受已通过审核；无新的场景实验结果。详情见 [[S6_TENYUAN_CROSSWALK_AUDIT_20261008]]。

## S6 接入 S3 场景设计十元标签来源｜2026-10-08 22:56 CST

S3 最新回执把五张场景风格 Canvas 的原始设计标签分开登记。下面照录来源序列，并与 S4 场景族十元候选并列；**不从序列推主次、强度、实际感受或因果**。五项实际感受仍 `UNKNOWN / NOT_MEASURED`；位置和组织挂靠沿用逐图原记录，不因标签变化而确认。详表见 `S3_FIELD_COVERAGE_AUDIT_20261008.md` 和 `SCENE_STIMULUS_MANIFEST.md`。

| 图像 | 来源场景组 | 原始设计标签（来源顺序） | S4 场景族候选 | 位置/组织与实验状态 |
|---|---|---|---|---|
| A-273 / AST-0273 | I06 空白禁区观景台 | X并Z + Z | xz / nz | 位置、组织 UNKNOWN；候选/STAGING；非实验输入 |
| A-274 / AST-0274 | I07 巨根雨林导航 | NZ + Z | xn / xz | R-06 词面冲突和 O5 限制语境保留；候选/STAGING |
| A-275 / AST-0275 | I08 奇美拉断层巢穴 | NZ + XZ + X并Z | x并z / nz | “不自动归 O5”原句保留；候选/STAGING |
| A-279 / AST-0279 | I11 废设施训练场 | ZN + N + X并Z | zx / nz | 位置、组织 UNKNOWN；候选/STAGING；非实验输入 |
| A-280 / AST-0280 | I12 脊椎夜市 | NZ + N + Z | zn / nx | O7/O5 自动挂靠限制、R-06 冲突保留；候选/STAGING |

来源回执：674-297 评论 `53085fa5-6be9-4ee4-b60f-f80c83debcf8`；五项原图 SHA 以当前场景机器表/审核 Canvas 为追溯入口。此处只把来源标签接入 S6，不改变十元审核状态。


## S6 接入 S3 全量场景覆盖复核 v2｜2026-10-08 23:07 CST

- 289/289 机器表行 asset_id 唯一且编号连续；审核 Canvas 289 张编号卡；源图存在、SHA 匹配和 PNG 解码均为 289/289。**这是源端文件核验，不代表 4080 读取或审核通过。**
- 146 张场景族候选 / 37 个来源组：位置文字候选与 S4 场景族十元候选 146/146；所有值保持 `PROVISIONAL / CANDIDATE`。文字位置不是精确坐标。
- `relatedLayers` 候选 30/37 组、126 张、211 条（世界结构150/组织38/区域23）；逐图组织文本参照 27 组/119 张，包含限制/排除语境。两类来源并集 35/37 组，不可把文字提及等同关系。
- I06/I11 没有组织、区域或世界结构锚点，`UNKNOWN / UNASSIGNED`。68 张冲突候选未裁。29 张视觉研究、14 张空间参考、129 张非地点素材分类有交叉，不相加作为地点数。
- 真实感受/强度/用户确认未知；正式场景实验仍 0，等 674-296 合格 A_READY 行及目标端回执。详见 [[S3_FULL_COVERAGE_SOURCE_RECEIPT]] 与 [[S3_FIELD_COVERAGE_AUDIT_20261008]]。


## S6 独立机器表复算｜2026-10-08 23:11 CST

来源机器表 `黎黎隆项目/04_场景/场景库/A端289张世界位置与组织十元关系_STAGING_20261008.json`，文件 SHA-256：`2c7904735e2679aa6a5945bca3637526006d4e7612c50b42d26c58b149372fc3`。按 `assets` 数组、`s4AssignmentState`、`crossLayerMap.relatedLayers` 和 `organizationTextTenYuanReferences` 逐行复算：

- 289 行 / 289 个唯一 assetId / A-001—A-289 编号无重复；146 行 `SCENE_FAMILY_CANDIDATE`，规范化为 37 组。146/146 同时有 `s4WorldPositionCandidate` 和 `s4SceneTenYuanCandidate`。
- 结构化 `relatedLayers`：30/37 组、126 个资产行；world_structure 150 条、organization 38 条、region 23 条，共 211 条。
- `organizationTextTenYuanReferences`：27/37 组、119 个资产行；与结构化关系并集 35/37 组。剩余无两类锚点的组恰为 I06 空白禁区观景台、I11 废设施训练场。
- 冲突字段统计 68 行。状态字段计数：`CONFLICT_OPEN` 68、`CANDIDATE_LINKS` 47、`VISUAL_STUDY_NOT_WORLD_PLACE` 29、`SPACE_REFERENCE_UNASSIGNED` 14、`POSITION_CANDIDATE_ONLY` 2、`NOT_APPLICABLE` 129。分类状态交叉，勿相加。
- A-273/A-274/A-275/A-279/A-280 的 `sceneDesignTenYuanSourceCandidate.notation`、S4 快照与 S3 回执逐项相符；A-275 快照为 `x并z / nz`。

**复算结论：**上列整数与 S3 评论 `f705d79f-3ec5-423b-b6a5-246dcdb49b4b` 一致。本复算只核字段和值覆盖，不重验 289 张图片的文件/解码，也不代表 4080 可读、USER 审核、正式位置、真实感受或实验结果。


## S6｜674-296 AST-0284 本机源图当前复核｜2026-10-08 23:15 CST

AST-0284 当前路径、2,436,653 bytes、SHA `ccf676053663eac2e7fa5dd2e724a5f5f582fb51a643b4c8f8cf0a30681e4ed8` 与 R3 清单一致，PNG 解码 1672×941 通过。仍是 `unprocessed · TASK_R0` 氛围概念，未找到 USER 审图凭据；不定地点、不进 A_READY、不启动实验。目标4080读取未验证。


## G3 场景名词对照｜设计问题，不是实验｜2026-10-08

用户报告的航船 ZN / 船房 NX 与末日 XZ / 大海漫灌无人 NX 已拆成对象/功能焦点不同的对照。船房物理形态仍 UNKNOWN；“无人”具体是局部画面没人、缺少可见回应，还是整个世界绝对无人，也未有素材确认。词语预期、空间关系、行动机会、真实发生的行为和观者报告应分栏记录。

当前无对应刺激图或视频、无体验者、无行为结果；不是有效控变量配对，不开跑、不记效果。场景族、地点、区域和场景十元不从这些词语直接生成。详见 [[G3_USER_SCENE_READING_CONTRAST_CARDS_20261008]]、[[G3_USER_READ_N1_N3_MODEL_v2_20261008]]。
