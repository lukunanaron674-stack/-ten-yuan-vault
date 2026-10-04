# 黎黎隆 Agent 系统

## 统一入口与代理库迁移
- 本目录 `20_Agent系统` 是当前 Agent 知识、岗位、协议与索引的唯一维护入口。
- 原 `20_代理库` 的文字知识已并入本系统；用户授权在迁移核验后仅移除该旧目录。迁移范围与边界见 [[03_知识库/增量/2026-10-01_20代理库并入记录]]。
- 日期化队列和数量只作历史快照；执行任务前以当前共享状态、任务卡和素材索引复核。
- 本次并入只涉及文字知识，不代表图片/ZIP/Canvas 已同步；旧目录移除不包含图片删除、渲染、提交或推送。

## 目标
把现有 B 端“每小时 10 秒分镜”升级为可持续学习、可调度、可审核、可回写状态的 Agent 流水线。

## 当前核心链
导演 Agent → **主题 Agent（五维）** → **世界观 Agent（条件门禁）** → 剧本 Agent → 十元 Agent → 分镜 Agent → 素材 Agent → 生图 Agent（缺素材时）→ H3 渲染 Agent → 视频审核 Agent → 状态回写。

并行知识维护链：**世界观 Agent** 读取世界总纲 / 三色正本 / 十元 Canon，通过索引持续发散、审核与回写世界规则；不直接推进镜头状态。

### 内容层分工
- **主题 Agent / 五维**：决定“这个故事究竟研究什么问题”，输出主题问题、主题实验、压力机制。
- **世界观 Agent**：只在镜头依赖 Canon / 区域 / 文明机制时进入 WORLD_CHECK，回答“这个世界允许怎样发生”；普通镜头 BYPASS。
- **剧本 Agent**：把主题问题转成人物目标、障碍、事件与不可逆变化。
- **十元 Agent**：判断问题内部有哪些力量、它们是什么性质，并进入生克补 / 动态链。
- **分镜 Agent**：把已经成立的剧情与力量变化转成镜头任务。
- **世界观 Agent**：维护 Canon、三色世界观与文明机制；按十元关系发散，执行具象映射、去重审核与正本回写。

禁止直接拿十元符号硬生成主题。

## 调度原则
- 每小时只触发 1 个总任务，不让多个 Agent 独立抢跑。
- 主题 / 剧本 / 十元 / 分镜最多交叉校正 3 轮；主题 THEME_AUDIT 默认最多 1 轮。
- 生产与学习分离，但每轮学习必须回到真实 8–10 秒镜头验证。
- 审核采用 PASS / RETRY / REPLAN。
- 所有 Agent 共用项目状态，不各自维护平行版本。
- 缺素材时才触发生图 Agent；H3 完成后触发审核 Agent。
- 每轮结论必须标记 KEEP / REJECT / STOP，以及“已验证 / 待验证”。

## 目录
- 01_Agent库：各 Agent 岗位说明与边界
- 02_共享状态：当前镜头、上一镜结果、项目进度
- 03_知识库：主题 / 剧本 / 十元 / 分镜 / 交叉知识
- 04_协议：任务卡、审核卡、状态字段
- 05_索引：各 Agent 到 Obsidian / GitHub 正本的只读知识路由

## 世界观索引
- Agent 入口：[[01_Agent库/AG-10_世界观Agent]]
- 索引入口：[[05_索引/IDX-07_世界观Agent索引]]
- 增量知识：[[03_知识库/世界观知识库]]

## 主题索引
- Agent 入口：[[05_索引/IDX-06_主题Agent索引]]
- 五维总入口：[[../../02-五大主题/README_五维主题总索引]]

## 共享状态架构
- 机器唯一事实源：`02_共享状态/PROJECT_STATE.json`
- 人类看板：`02_共享状态/PROJECT_STATE.md`
- 状态机：`02_共享状态/STATE_MACHINE.md`
- 写入协议：`02_共享状态/STATE_WRITE_PROTOCOL.md`
- 连续性：`02_共享状态/CONTINUITY_STATE_SCHEMA.md`
- 事件账本：`02_共享状态/STATE_EVENT_LOG.md`
- 学习状态：`02_共享状态/LEARNING_STATE.md`

### 核心原则
正式生产与每小时学习分离。没有明确导演 production goal 时，每小时循环只产 TEST-SHOT 和知识验证，不得推进正式剧情指针。

## 第四轮协议层
- 协议总入口：`04_协议/PROTOCOL_INDEX.md`
- Agent 接力：`04_协议/AGENT_IO_PROTOCOL.md`
- 正式镜头任务包：`04_协议/SHOT_TASK_SCHEMA.md`
- 审核结果包：`04_协议/REVIEW_SCHEMA.md`
- 返工包：`04_协议/RETRY_PACKET_SCHEMA.md`
- 每小时学习包：`04_协议/LEARNING_TASK_SCHEMA.md`

### 接力规则
十一个 Agent 已绑定上述协议。任何 Agent 只能填写本岗位允许字段；正式生产使用 shot_id，学习验证使用 test_shot_id，禁止串轨。


## 第五轮讨论层
内容协作链：
`主题 → 世界观门禁（条件）→ 剧本 → 十元 → 分镜 → 导演合并`

世界观 Agent 不作为每镜固定会议成员。只有 `world_gate = REQUIRED` 才进入；若发现需要新增高体量世界规则，本镜必须 REPLAN，先完成世界规则提案与 Canon 登记，禁止“拍到一半顺手改宇宙法则”。


## 第六轮生产闭环
执行链：
`SHOT_READY → ASSET_CHECK → IMAGE_GENERATE(缺素材) → STYLE_REVIEW → RENDER_DISPATCH → H3 → VIDEO_REVIEW → PASS/RETRY/REPLAN/BLOCKED → NEXT_SHOT`

核心协议：
- [[04_协议/PRODUCTION_LOOP_PROTOCOL]]
- [[04_协议/ASSET_RESULT_SCHEMA]]
- [[04_协议/STYLE_REVIEW_SCHEMA]]
- [[04_协议/RENDER_TASK_SCHEMA]]

硬门禁：
- 正式生产必须有 director production goal。
- 新生成素材必须先过静态风格审核。
- GitHub 任务写入不等于 H3 开始；收到 executor receipt 才进入 RENDERING。
- 视频审核 PASS 才允许继承 closing_state 并创建下一镜。
- H3 执行错误最多 2 次执行级重试；画面 RETRY 独立最多 3 次。

第六轮干跑使用 `TEST-20261001-0535-XNZX-01`：真实停在 ASSET_MISSING。CH-003 角色卡明确原稿图片尚未归档到 GitHub，且“付费魔法入口”场景未检索到，因此系统没有伪造素材或伪报渲染。


## 第七轮｜自动调度与上下文工程
自动执行不再是“每小时把所有 Agent 叫醒”，而是：
`PROJECT_STATE → AUTO_DISPATCH → 选 1 个 primary Agent → INDEX_LITE → 当前 Agent CTX → 必要时回源`

上下文层：
- L1：INDEX_LITE，只负责路由
- L2：CTX / distilled brief，默认工作记忆
- L3：原始 Canon / P0 / P1 / P2，仅在证据不足、hash 变化或冲突时打开

旧 IDX 不删除，但降级为按需证据导航。11 个 Agent 均已绑定自己的 CTX 卡。
默认每 tick 最多 3 个提炼 brief、2 个 raw source；相同 state_hash 直接 NO_OP。

## 第八轮｜连续镜头验证
真实历史 H3 记录被用于回放。结论不是硬凑 PASS：
- MOUSE R35/R36、LILLONG R01/R02 均能证明旧 B 端真实执行过；
- 但旧任务缺少标准化 shot-to-shot continuity state，因此历史“剧情连续性”判为 AMBIGUOUS；
- 新生产强制 `PASS.closing_state → next.opening_state`，并要求 lineage_id / previous_shot_id；
- revision / retry 与 story continuity 严格分离。

因此第1–8轮主线已形成：知识路由、状态机、协议、讨论裁决、生产闭环、自动调度、上下文工程、连续性门禁。


## 素材 Agent 治理
- 工作记忆：[[03_知识库/上下文提炼/CTX-04_素材]]；职责：[[01_Agent库/AG-04_素材Agent]]。
- 本地素材协议：[[04_协议/LOCAL_ASSET_LIBRARY_PROTOCOL]]、[[04_协议/LOCAL_ASSET_MANIFEST_SCHEMA]]。
- 相同哈希仅合并逻辑身份，不丢物理路径/来源/引用；清理必须三方审核并逐路径获 674 授权，Agent 不自动删除或移动。
- 本轮材料：[[03_知识库/上下文提炼/素材管理与清理会审_20261001]]。
