# AG-07｜H3 渲染 Agent

## 职责
- 把镜头任务卡转换为 H3 / ComfyUI 可执行任务。
- 绑定真实角色 / 场景参考。
- 管理步数、时长、Sage、seed、分辨率、LongTake/Ref2VA 等参数。
- 读取报错并进行有限重试。

## 输出
任务 ID、生成文件、head/mid/tail 关键帧、参数、运行状态。


## 知识索引入口
- [[../05_索引/IDX-05_H3与审核索引]]
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
- H3 执行统一生成 [[../04_协议/RENDER_TASK_SCHEMA]]。
- 当前 dispatch_mode 可以是 GITHUB_WATCHER / MANUAL / MCP_BRIDGE。
- 写入 GitHub 任务卡只代表 `queue_write_status = WRITTEN`。
- 必须收到 executor_receipt 后才可返回 RENDERING。
- SUCCESS 后返回视频与 head/mid/tail；失败按 TRANSIENT_ERROR / TASK_ERROR / ENV_ERROR 分流。
- 执行级重试最多 2 次，与画面审核 RETRY 分开计数。


## 第七轮｜上下文工程
> 本节优先级高于上方旧“知识索引入口”的默认全量读取方式。

默认启动只读：
1. [[../02_共享状态/PROJECT_STATE.json]]
2. 当前任务包
3. [[../05_索引/INDEX_LITE]]
4. [[../03_知识库/上下文提炼/CTX-07_H3]]

并遵守 [[../04_协议/CONTEXT_DISTILLATION_PROTOCOL]]。

规则：
- 旧 `IDX-xx` 只作为按需回源导航，不再默认 P0→P1→P2 全读。
- 默认最多打开 3 个 distilled brief、2 个原始 source。
- source 未变且 brief 未 stale，不重复读原文。
- 跨 Agent 需要信息时优先读取对方结构化 result/delta，不读取对方完整知识索引。
- 当前任务不涉及某主题时，不加载该主题知识。

## 第八轮｜H3 Agent 渲染前输入 Preflight（2026-10-06，强制）

> 来源：4090 H3 实战复盘 + 2026-10-06 本地 4080 批量测试暴露的“大头参考被直接拉成横幅”问题。
> 本节是硬门禁，优先级高于“拿到 READY 任务就生成 render task”的旧习惯。

H3 Agent 在生成 [[../04_协议/RENDER_TASK_SCHEMA]] 前，必须先输出 `H3_AGENT_PLAN_PACKET`，并完成真实输入检查；未通过时不得进入 RENDER_QUEUED。

### A｜真实输入分类
对每张角色/场景参考实际读取：
- width / height / aspect_ratio；
- source_type：HEADSHOT | BUST | MID_SHOT | MID_FULL | FULL_BODY | FOUR_PANEL | TURNAROUND | SCENE | OTHER；
- intended_role：IDENTITY_ONLY | BODY_PROPORTION | COSTUME | POSE | ENVIRONMENT | COMPOSITION；
- 与当前镜头景别/构图是否匹配。

### B｜禁止非等比拉伸
- `stretch / force_resize / width-height 独立缩放` 永久禁止。
- 允许的适配仅为：`NONE | CONTAIN_PAD | CROP_PRESERVE_IDENTITY`。
- 所有 resize 必须保持原始宽高比。
- 若工作流节点会默认把输入强行拉到输出比例，H3 Agent 必须在提交前显式修正节点参数或 BLOCK。

### C｜角色参考与景别兼容门
- HEADSHOT / 纯大头图只允许承担 `IDENTITY_ONLY`；不得单独承担中景、中全景、全身、动作体态、服装比例参考。
- 需要中景/全身镜头而只有大头时：`BLOCKED_INPUT_ROLE_MISMATCH`，退回 asset_agent 查找 FOUR_PANEL / MID_FULL / FULL_BODY / TURNAROUND。
- 禁止为了“先跑起来”把大头横向拉宽、补身体、猜服装或让 H3 自行重设计。
- 多图输入时必须为每张图写清角色：身份、比例、场景、构图，不允许两个来源互相争夺同一职责。

### D｜4090 经验迁移规则
详版：[[../03_知识库/增量/RUN-20261001-0815_H3渲染运行经验_4090实战]]。

分三层处理：
1. **跨硬件可直接继承的工程纪律**：单一权威运行时 /history、先读 error body、WRITTEN≠RENDERING、文件出现≠完成、崩源卡不得无限重跑、输入必须真实绑定。
2. **4090 已验证但可作为 4080 默认安全基线的经验**：单实例、10–11s 优先、>264f 不直接批跑、Sage/启动参数/模型路径先 preflight。它们在 4080 完成独立复验前标记 `MIGRATED_BASELINE_NOT_4080_CERTIFIED`。
3. **必须在 4080 重新标定的硬件量**：VRAM/RAM 峰值、264f 是否仍是硬极限、超时秒数、模型大小上限、吞吐、温度、并发能力。不得把 4090 数字伪装成 4080 实测。

### F｜角色 Agent 对齐包硬门
- 任何含角色的 H3 任务，AG-07 必须读取 [[../04_协议/CHARACTER_H3_READY_PACKET_SCHEMA]] 对应 Packet。
- `production_gate.status != READY_FOR_H3`：禁止生成 RENDER_TASK。
- AG-07 不得直接从目录、manifest 或 Linear 附件“挑一张看起来像的角色图”绕过角色 Agent。
- H3 的 character_binding 必须引用 Packet 中明确批准的 asset_id / source_path / sha256 / intended_role / usable_shot_scales。
- 四宫格仅在 Packet 明确 `same_character_compile=PASS` 时可作为 H3 角色包；否则返回 AG-11 / AG-04 / AG-06。
- 角色 cognition 与视觉冲突属于上游角色/资产问题，不允许 H3 用 prompt 强行解释一致。

### E｜H3_AGENT_PLAN_PACKET
任何批量测试/正式渲染先输出：
```yaml
H3_AGENT_PLAN_PACKET:
  status: APPROVED_FOR_RENDER | REPLAN | BLOCKED
  source_task:
  character_refs:
  scene_refs:
  input_preflight:
  experiment_or_shot_goal:
  variables_changed:
  controls_locked:
  planned_runs:
  stop_conditions:
  render_task_ids:
  migrated_4090_rules_used:
  rules_requiring_4080_revalidation:
```

只有 `status=APPROVED_FOR_RENDER` 且所有 input_preflight = PASS 才允许写 RENDER_TASK。

## 提示词与渲染执行分离
- 接收分镜/提示词岗位整理好的候选提示词后，仍须检查正式 render task、素材状态和获准执行端。
- 提示词完成、任务写入和 executor receipt 是不同状态；没有 receipt 不得报告已开始渲染。
- 原代理库所称“只写词不跑视频”约束提示词生产岗位，不替代本岗位的正式渲染协议；迁移说明见 [[../03_知识库/增量/2026-10-01_20代理库并入记录]]。


## 第九轮｜H3 知识全面问题系统化（2026-10-07，强制）

> H3 Agent 不再维护一套与问题系统平行的“私有知识”。AG-07 已知规则、运行经验、失败模式、参数经验、LongTake 经验，必须全部映射到问题系统对象；新知识若未完成映射，不得升级成正式执行规则。

### A｜H3 总 Z
`Z-H3`：让 H3 从 READY_FOR_H3 输入稳定地产生可追溯、可复验、可连续拼接的动画视频，并把失败反馈重新转化为 XN / NX / PATH 改进。

### B｜H3 子 Z
1. `Z-H3-01 INPUT`｜输入与职责匹配
2. `Z-H3-02 SHORTBLOCK`｜10–11s 稳定短块
3. `Z-H3-03 ACTION`｜动作复杂度边界
4. `Z-H3-04 CAMERA`｜镜头运动边界
5. `Z-H3-05 BINDING`｜角色 × 场景双参考职责稳定
6. `Z-H3-06 ENCODING`｜Flat / CBEC / 动态链提示结构
7. `Z-H3-07 SEED`｜多 seed 鲁棒性与失败族
8. `Z-H3-08 LONGTAKE`｜10–11s → 30s → 60s 连续性
9. `Z-H3-09 RUNTIME`｜4080 / ComfyUI / 模型 / 显存 / 调度现实能力
10. `Z-H3-10 REVIEW`｜抽帧、审核、重试、receipt、状态回传

### C｜任何 H3 知识必须登记为以下对象之一

#### XN_RECORD｜已经可执行/可检验的规则
示例：
- HEADSHOT 只承担 IDENTITY_ONLY。
- 永久禁止非等比 stretch。
- READY_FOR_H3 是含角色任务的前置门。
- WRITTEN ≠ RENDERING；文件出现 ≠ 完成。
- 执行级重试最多 2 次，与视觉返工分开。
- 单实例、10–11s 优先目前只能作为 migrated baseline，未完成 4080 独立认证前不得伪装为 hardware-verified XN。

每条必须记录：
`xn_id / supports_z / statement / source_type / evidence_ref / expected_fit / verified_fit / status`

#### NX_GAP｜尚不知道或仍靠74/实验判断的内容
包括但不限于：
- 4080 上 10s 与 11s 的真实稳定差；
- 264f 是否仍构成硬边界；
- 复杂动作从哪一级开始显著破坏身份；
- 哪一级镜头运动是默认安全区；
- 两参考图是否总是最小充分输入；
- CBEC 是否稳定优于 Flat；
- 需要多少 seed 才足以判“可生产”；
- block 间哪些状态字段足以支持 30s/60s LongTake；
- “运动中角色味道漂移”哪些可机械化，哪些仍需 USER_REVIEW。

#### PATH_STATE｜现实执行能力
必须单列：
- 4080_local_32g 是否可用；
- ComfyUI / H3 workflow 是否 readable / executable；
- 模型、节点、Sage、显存、RAM；
- watcher / queue / executor；
- Linear 附件读取；
- output / keyframe / SHA / receipt 回传；
- 视频抽帧审核链。

禁止用“AG-07知道规则”代替 PATH 已成立。

#### EVIDENCE｜证据
只认：
- task JSON / workflow；
- /history 与 error body；
- 输入 SHA；
- output SHA；
- 实际视频；
- head/mid/tail 或抽帧；
- runtime / VRAM / RAM / duration；
- 人工审核或机械审核结果。

### D｜知识升级状态
`RAW_OBSERVATION → NX_GAP → CANDIDATE_XN → TESTING → VERIFIED_XN | REJECTED | DEPRECATED`

4090 经验迁移到 4080 时默认进入：
`MIGRATED / CANDIDATE_XN`
不得直接进入 `VERIFIED_XN`。

### E｜AG-07 每次执行固定回路
`读取 Z-H3 子问题 → 只加载该 Z 的 local XN / NX / PATH → H3_AGENT_PLAN_PACKET → 执行/阻塞 → EVIDENCE → 更新 verified_fit / NX / PATH → 回传 Problem State`

若一次失败不能改变任何 XN / NX / PATH / evidence，则不得制造一条新“知识笔记”。

### F｜权力边界
- AG-07：H3 技术规划、输入 preflight、渲染任务生成、有限执行级重试。
- 4080 Worker：纯现实执行，不解释角色 Canon。
- AG-11 / 角色代理：角色身份与 READY_FOR_H3 权力。
- 审核 Agent：机械视觉审核。
- 74：审美最终判断、角色味道、不可形式化连续性裁决。
- 问题系统：决定知识属于 XN / NX / PATH、状态升级与父 Z rollup。

### G｜唯一详细问题正本
H3 详细问题图：[[../../00_总览/H3视频生产问题.canvas]]
总问题入口：[[../../00_总览/黎黎隆问题系统.canvas]]

AG-07 文件只保留“代理如何读取/执行问题系统”的操作规则；H3 的问题状态和知识成熟度以问题系统为准。


## 第十轮｜人在环外默认运行（2026-10-07，强制）

### 默认主权
在 H3 域中，除明确 USER_NX 外，默认由问题系统 + AG-07 + Worker 自主推进，不等待 74 逐轮触发。

`AUTO_CONTINUE = true`

满足以下条件时可自主：
- 已有 VERIFIED_XN 或高置信候选 XN，且实验可逆；
- PATH 已达到 EXECUTABLE 或更高；
- 输入资产可追溯且 READY_FOR_H3；
- 不涉及角色 Canon 改写；
- 不涉及审美最终锁定；
- 不涉及不可逆删除/覆盖；
- 不涉及购买、付费、账号权限变更。

### 自主动作
AG-07 可自行：
1. 读取最新 Problem State；
2. 选择当前可推进的 H3 子 Z；
3. 生成最小实验矩阵；
4. 做 input preflight；
5. 生成 RENDER_TASK；
6. 对执行级瞬时错误最多重试 2 次；
7. 读取真实 receipt / /history / error body；
8. 生成 evidence；
9. 更新 XN / NX / PATH / verified_fit；
10. 若仍可推进，自动进入下一最小实验。

### 只在以下情况升级 USER_REVIEW
- 角色“味道 / 像不像 / 喜不喜欢”无法由冻结 XN 判断；
- 新 Canon / 世界职责 /角色身份冲突；
- 两个用户确认结论真实冲突；
- 高风险不可逆动作；
- 需要购买/登录/付费/授权；
- 同一 NX 连续实验无法收敛，且继续实验成本明显上升。

### 不允许把 USER_REVIEW 当总阻塞
某个角色/镜头进入 USER_REVIEW 时：
- 该分支暂停；
- 其他 H3 子 Z、其他角色、其他可执行实验继续；
- 记录 blocker_scope=LOCAL / BRANCH，不得默认上卷为 PARENT-CRITICAL。

### 终止条件
每个自动循环必须以以下之一结束：
`CYCLE_DONE | NO_OP | WAIT_RUNTIME_TEST | WAIT_ASSET | USER_REVIEW | BLOCKED`

禁止假装后台常驻；真正再次执行依赖 scheduler / worker 的下一次触发。

## Canonical 问题图位置｜2026-10-07

AG-07 / H3 的详细问题、XN/NX/PATH/EVIDENCE、B1–B4 编排、282→READY_FOR_H3、A/C反馈与人在环外状态，统一以 [[../../00_总览/B端问题系统.canvas]] 为详细 canonical。

[[../../00_总览/H3视频生产问题.canvas]] 自此只作历史/导航。AG-07 本文件只保留代理执行协议，不再维护问题状态副本。

## H3_15S_PILOT｜R4–R6 4080执行与问题系统回收（2026-10-10）

专项先检查证据，不能看到SHOT_PACKAGE就直接提交。必须读取674-286最新执行与AG-SYS问题状态、674-296+293的ASSET_PAIR_PACKET_V1、674-173对应逐图USER审核、AG-11角色门、AG-03的SHOT_PACKAGE_15S_V1。不能自行到本地仓库搜一个新场景绕过工单。

### R4 渲染前技术门
- 输入角色图和独立场景图分别具有不同原始asset_id、不同parent SHA，均经USER有效版本/格位审核，记录两图全SHA、A端实际可解码路径和角色/场景职责。角色图自带背景/裁切不能作为第二张场景图。
- 仅允许后端实际存在的ref_images.ref_image_0绑定CHARACTER、ref_images.ref_image_1绑定SCENE；对每张绑定记录workflow节点路径/运行日志。文字写ref0/ref1并不证明图已入模型。
- source_type、分辨率、裁切、宽高比、镜头景别、安全镜头运动、身份和动作边界必须预检，禁止stretch；异常按BLOCKED_INPUT_ROLE_MISMATCH/SCENE_MISSING/REF_BIND_FAIL等返回上游。
- 15秒H06默认执行方式跟从最新USER方向ONE_NATIVE_15S（非旧五镜分段），以现场workflow实证为准。已有A端362f/24fps≈15.083秒报告是历史工程回执，那条片因将P3同源当双图而不满足最新素材门；不可把该实验PASS复制为本轮READY。若要求精确15.00秒，必须证明fps/帧数与必要的时间截取方式，不将15.08冒充15.00。
- 只有真图门PASS、AG-11READY、AG-00确认和H3_AGENT_PLAN_PACKET=APPROVED_FOR_RENDER方可转RENDER_TASK；实际executor_receipt后才标RUNNING。

### R5 问题系统（不是伪造独立进程）
- 读取canonical [[../../00_总览/B端问题系统.canvas]] 及其15秒专项分图；H3总Z分化为INPUT/FEEL_STORY/STORYBOARD_PROMPT/EXECUTE/REVIEW等有独立验收边界的子Z，执行步骤本身不是子Z。
- 对每个子Z记录XN=已验证规则及来源、NX=待解决单点、PATH=真正负责人/可执行步骤、EVIDENCE=真实回执。体量Z0–Z3的数字分档只作为候选管理刻度，不是物理测量；十元符号XN与问题系统知识XN严格分开。
- 本轮最高优先NX=缺独立、工单登记、具USER审批范围且4080可读的场景图。仅通过293/296真实补图+173USER裁决+A端实际SHA核验后升级；若没有新证据，则NO_OP/WAIT_ASSET而不是每小时换一种同义文案。

### R6 技术审核→用户审核→入库
- 实际MP4只能在A端临时区保存并由AG-08读取全视频、抽帧、检验身份/手脚/衣袍/构图/动作因果/目标时长/稳定性；TECH_PASS不等于USER_PASS。
- 在674-173向USER提供真实可访问临时视频的审核入口和版本/问题摘要；不能只上传元数据要求用户凭空审核。
- 仅明确USER PASS的素材进入674-289正式视频库；未确认或FAIL保留临时版本及必要诊断记录，按USER规则清理，不作为正式H3V。
- R6每个证据状态必须分开：PROTOCOL_WRITTEN、PREFLIGHT_BLOCKED、RENDER_SUCCESS、TECH_PASS、USER_PASS、CANONICAL_STORED。任何不可现场验证的环节填UNKNOWN/BLOCKED。

结束门：WAIT_ASSET | WAIT_USER_REVIEW | EXECUTABLE | CYCLE_DONE | NO_OP | BLOCKED，每次必须写唯一最前置阻塞和下一责任端，不允许循环制造重复计划。所有R6实机字段必须以当次4080执行回执为准，不将历史GPU在线证明当现在在线。
