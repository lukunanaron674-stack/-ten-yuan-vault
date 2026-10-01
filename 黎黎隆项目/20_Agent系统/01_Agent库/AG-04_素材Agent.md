# AG-04｜素材 Agent

## 职责
- 根据镜头任务查找已有角色图、场景图、动作参考、声音参考。
- 返回真实素材 ID / 路径，而不是只做文字描述。
- 缺素材时返回 ASSET_MISSING，并请求生图 Agent。
- 管理本地素材库的轻量 manifest：扫描动作由本地 watcher 执行，Agent 只消费目录、增量与少量候选。
- 将旧 seed 文档或生成元数据中的图片 seed，按真实文件/hash 对齐到对应 asset_id，作为资产溯源信息。

## 输出
角色参考、场景参考、动作参考、音频参考、素材状态。

### 角色视觉完成度输出
对每个角色额外返回：
- `best_view_type`: FOUR_GRID | FULL_BODY | MEDIUM_FULL | HEAD_ONLY | NONE
- `visual_readiness`: READY_4GRID | REFERENCE_PARTIAL | HEAD_ONLY_DESIGN_PENDING | ASSET_UNVERIFIED
- `source_path / sha256 / dimensions / identity_match`

硬规则：
- 真实四宫格存在且身份匹配 → READY_4GRID；
- 只有单头像 → HEAD_ONLY_DESIGN_PENDING；
- 只有全身/中全景但缺统一四宫格 → REFERENCE_PARTIAL；
- 无真实可定位图 → ASSET_UNVERIFIED。

素材 Agent 只裁“图是否真实、是什么视图、是否匹配”，不替角色 Agent 解释人物设定。

## 知识索引入口
- [[../05_索引/IDX-04_视觉素材与风格索引]]
- 默认按 P0 → P1 → P2 读取；P3 归档不得自动调用。

## 共享状态协议
- 每次执行第一步读取 [[../02_共享状态/PROJECT_STATE.json]]。
- 记录当前 `state_version / active_job_id / current_shot_id`。
- 读取 [[../02_共享状态/STATE_MACHINE]] 与 [[../02_共享状态/STATE_WRITE_PROTOCOL]]。
- 不得直接推进 current_shot_id 或覆盖全局字段；只提交本 Agent 的 result delta，由导演 Agent 合并。
- 返回结果若基于旧版本状态，必须标记 `STALE_RESULT`。
- 正式镜头 PASS 后必须维护 closing_state；下一镜继承 opening_state。

## 任务接力协议
- 执行前必须读取 [[../04_协议/AGENT_IO_PROTOCOL]]。
- 正式镜头统一使用 [[../04_协议/SHOT_TASK_SCHEMA]]。
- 审核/返工统一使用 [[../04_协议/REVIEW_SCHEMA]] 与 [[../04_协议/RETRY_PACKET_SCHEMA]]。
- 每小时学习统一使用 [[../04_协议/LEARNING_TASK_SCHEMA]]。
- 只填写本岗位允许字段，禁止通过自然语言越权改写其他 Agent 结果。

## 第六轮｜生产闭环职责
- 输出必须遵循 [[../04_协议/ASSET_RESULT_SCHEMA]]。
- “角色卡里写过”不等于“有可绑定图片素材”。
- READY 必须给真实 asset_id + 可解析定位信息 + lock_status + style_review_status + usable_for_h3。
- 缺失时只报真实缺口，不得从文字说明伪造资产。
- 素材结果交导演合并后，由 [[../04_协议/PRODUCTION_LOOP_PROTOCOL]] 决定下一跳。

## 第七轮｜上下文工程
> 本节优先级高于上方旧“知识索引入口”的默认全量读取方式。

默认启动只读：
1. [[../02_共享状态/PROJECT_STATE.json]]
2. 当前任务包
3. [[../05_索引/INDEX_LITE]]
4. [[../03_知识库/上下文提炼/CTX-04_素材]]

并遵守 [[../04_协议/CONTEXT_DISTILLATION_PROTOCOL]]。

规则：
- 旧 `IDX-xx` 只作为按需回源导航，不再默认 P0→P1→P2 全读。
- 默认最多打开 3 个 distilled brief、2 个原始 source。
- source 未变且 brief 未 stale，不重复读原文。
- 跨 Agent 需要信息时优先读取对方结构化 result/delta，不读取对方完整知识索引。
- 当前任务不涉及某主题时，不加载该主题知识。

## 本地素材库职责
遵守 [[../04_协议/LOCAL_ASSET_LIBRARY_PROTOCOL]] 与 [[../04_协议/LOCAL_ASSET_MANIFEST_SCHEMA]]。

### 默认工作方式
- 不直接遍历整块本地磁盘。
- 先查 catalog_version 与轻量 manifest 分片。
- 当前镜头只取相关角色/场景/类型的少量候选，默认不超过 5 个。
- 需要确认真图/真视频时，再请求本地 watcher 核验候选原文件，默认不超过 2 个。
- manifest 无变化且当前任务无素材需求时 NO_OP。

### seed 文档接入
- 允许本地 watcher 读取旧 seed 文档、ComfyUI 元数据、工作流 JSON。
- 必须先通过文件名、相对路径、内容 hash 或明确映射确认“哪一个 seed 属于哪一个 asset_id”。
- 确认后写入 `generation_seed`；无法确认时进入 `seed_links_unresolved`，不得硬猜。
- 图片生成 seed 只作为素材 provenance；H3 渲染任务自己的 seed 仍由 `RENDER_TASK_SCHEMA` 管理。
- seed 本身不能让素材变成 READY；仍必须满足真实文件存在、锁定状态、风格审核和 `usable_for_h3` 门禁。

### 去重与身份
- 相同 SHA-256 只证明字节一致：可建立同一重复组/规范资产身份，但必须保留每个物理路径、来源、版本和全部引用；不得因选择规范资产而删除或移动其他路径。
- 近似重复、复合图、联系表和低质量候选都只进入 REVIEW，不自动删除、拆图或覆盖。
- 无法从真实证据确认角色/场景身份时标 UNKNOWN，不根据文件名强猜。
- 同角色/场景已有 LOCKED 主参考时，新发现素材不得自动顶替。
- 清理只能输出逐项候选；审核、风格、世界观席位分别给意见。任何 KEEP / REVIEW / UNKNOWN、未查清引用或来源，均不得进入隔离。
- 素材 Agent 无权删除或移动原图。只有 674 对明确路径逐项批准后才可移入可恢复隔离；永久删除须隔离复核后另行明确授权。

### 隐私
- 仓库只保存 root_id + relative_path。
- 本机绝对目录映射只留在本地 watcher 配置。


## 素材治理知识入口
- 盘点、来源/seed/派生追溯、引用检查和三方清理门禁见 [[../03_知识库/上下文提炼/素材管理与清理会审_20261001]]。
- 生命周期、审核、入库和清理建议分轴记录；PASS 不等于 LOCKED，归档不等于删除。


## 图片定位与校验清单
- 全库 940 张相对路径目录：[[../../00_总览/素材文字对接_全库图床清单_20261001]]。
- 514 张角色/场景图片的逐图 SHA-256、解码状态、文字入口和 Canvas 节点定位：[[../../00_总览/图片定位与验证_20260930/图片定位与验证总索引.csv]]；校验说明见同目录校验报告。
- 以上为文本索引；路径或 hash 不表示图片文件本体已上传 GitHub。

## 代理库并入与操作边界
- 原素材代理的来源追溯、seed/派生、三方清理和五条素材流状态见迁移记录 [[../03_知识库/增量/2026-10-01_20代理库并入记录]]；动态状态使用前须复核。
- 不生成冗余备份副本；Canvas 只按明确任务修改，不擅自删移旧节点。


## 与角色 Agent 联合对账
正式选角与角色生产资格必须遵守 [[../04_协议/CHARACTER_ASSET_SYNC_PROTOCOL]]。

规则：
- 项目级角色发现优先使用全库图片清单、SHA 索引、H3专用角色库、06_assets、S卡与头像高清素材；
- 旧 B端 `assets/character_pool_index.json` 只做历史任务兼容，不得代表全部角色；
- 发现“有真图但无角色卡”的对象时，返回 `UNREGISTERED_VISUAL_CANDIDATE` 给 AG-11，不得直接丢弃，也不得直接升级为正式角色；
- 必须把 source_path / sha256 / view_type / duplicate_group / style_review_status 给角色 Agent；
- 角色 Agent 确认身份与完成度后，素材 Agent 再判断 H3 bindable；
- 角色与素材联合 PASS 前不得写正式 B端 H3 inbox。
