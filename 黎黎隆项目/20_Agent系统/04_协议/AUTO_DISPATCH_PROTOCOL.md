# AUTO_DISPATCH_PROTOCOL｜自动调度 v1.2｜RUN_UNTIL_EXTERNAL_BLOCKER

## 目标
导演 Agent 每个调度 tick 只根据唯一状态源决定“下一位应该是谁”，不把所有 Agent 全部唤醒。

入口：
1. [[../02_共享状态/PROJECT_STATE.json]]
2. 本协议
3. [[DISPATCH_TABLE.json]]
4. 当前任务包 / blocker / pending_delta

## Macro Tick 原则
一次总调度默认连续执行依赖链，直到遇到**真实外部阻塞**，而不是每个 Agent 执行后就停。

正式生产默认：
`ASSET → STYLE → THEME → SCRIPT → TENYUAN → STORYBOARD → ASSET_RECHECK → H3_QUEUE`

若每一阶段 PASS，可在同一 Macro Tick 中继续下一阶段。

### 必须 STOP 的条件
- 等待真实图片/视频生成结果；
- H3 task 已 WRITTEN，等待 executor_receipt；
- RENDERING，等待 /history 终态；
- 素材缺失且需要真实生图；
- Canon 冲突无法自动裁决；
- REVIEW=REPLAN；
- 需要用户明确创作/资产授权；
- ENV / TASK 错误超过重试上限。

### 不应 STOP 的条件
- 一个文本 Agent 刚输出结果；
- 已有结构化 result/delta 可被下游直接消费；
- 只是在剧本→十元→分镜之间换岗位；
- 当前阶段不需要任何新的外部字节或用户决策。

## 节流
- `dispatch_mode = RUN_UNTIL_EXTERNAL_BLOCKER`
- 单 Macro Tick 可串行调用多个 primary Agent，但同一时刻只执行一个，必须按依赖顺序。
- 每一阶段最多追加 1 个 dependent Agent；禁止无依赖并行开会。
- `max_discussion_rounds = 3`
- `max_theme_audit = 1`
- `max_world_check = 1`
- `max_visual_retry = 3`
- `max_executor_retry = 2`
- 状态 / 输入哈希未变化：`NO_OP`
- 同一 blocker 未变化：不重复生成相同诊断文本
- 已读 P0/P1 内容 hash 未变：不重新全文读取，优先读取索引与变更
- 正式 goal 不存在：禁止唤醒 H3 / video_review 做正式生产

## 优先级
1. 用户显式 production goal
2. BLOCKED / DIRECTOR_REQUIRED
3. 当前 active_job 的 next_action
4. 可合并 pending_delta
5. 当前学习轨
6. 无变化 → NO_OP

## 路由
以 [[DISPATCH_TABLE.json]] 为机器可读正本。

典型（正式生产）：
- IDLE + PRODUCTION goal → director
- PLANNING + ASSET_UNCHECKED → **asset**
- ASSET_MISSING → image（缺口允许自动补图时）
- ASSET_PENDING_REVIEW / IMAGE_GENERATED → style_review
- ASSET_READY + PLANNING → **theme（必须基于已批准素材包）**
- THEME_READY + world_gate REQUIRED → world
- THEME_READY/BYPASS 或 WORLD_READY → script（不得超出素材边界）
- SCRIPT_READY → tenyuan
- TENYUAN_READY → storyboard
- STORYBOARD_READY → asset_recheck（只核验分镜新增需求）
- STORYBOARD_READY + ASSET_READY + asset_recheck PASS → h3_plan_preflight → h3_render；正式模式固定 **LONGTAKE**
- RENDER_QUEUED 无 receipt → NO_OP / 等待回执
- RENDER_DONE → video_review
- RETRY → 根据 retry_packet.route
- REPLAN → 根据 failure_family 回退
- PASS → director 合并 closing_state，并把它作为下一 LongTake segment 的 opening_state
- BLOCKED → blocker.owner；若需要用户决策则 ESCALATE_USER

### 素材前置原则
- 正式生产禁止默认“主题先行再找素材”。
- 素材 Agent 先锁定真实可绑定角色、场景、风格状态和 LongTake 可连续性。
- 主题 / 剧本必须消费已批准的 asset_pack，不能脱离素材包凭空增加必要场景/角色。
- 分镜若新增不可替代素材需求，必须回到 asset_recheck，不得直接把缺口塞进 H3 Prompt。

### H3 渲染前计划门（2026-10-06）
- 路由到 h3 时先执行 AG-07 的 `H3_AGENT_PLAN_PACKET`，不是直接 POST /prompt。
- 真实角色/场景参考必须做 source_type、intended_role、shot_scale、aspect_ratio、resize_mode、role_fit 检查。
- HEADSHOT 只能承担 IDENTITY_ONLY；需要中景/全身而素材不匹配时回 asset，不得 stretch 或让 H3 猜身体。
- 非等比 stretch 永久禁止。
- PLAN != APPROVED_FOR_RENDER 或 preflight != PASS → REPLAN/BLOCKED，不进入队列。

### LongTake 原则
- 正式 H3 默认 `LONGTAKE`；独立短测试才允许普通单段模式。
- 60s 目标默认拆为约 6 个 8–10s segment。
- 同一连续段优先共享主角色参考、场景族、光线和色彩脚本。
- 上一 segment 只有 VIDEO_REVIEW=PASS 后，其 closing_state 才能继承给下一段 opening_state。
- 局部失败优先单 segment RETRY，不因一个坏段重做整分钟。

## 自动调度不可越权
- 不得用自动调度绕过 READY 门禁。
- 不得把 queue file WRITTEN 当 executor receipt。
- 不得在 BLOCKED 时为了“保持流水线运行”伪造替代资产。
- 不得因定时任务到了就自动推进正式剧情。
- 不得重复写入同一 state_version 的结果。

## 学习轨
无 production goal 时，调度器只能：
- 读 LEARNING_STATE；
- 选择当轮一个研究主问题；
- 只唤醒必要的 theme/script/tenyuan/storyboard/world 中的子集；
- test-shot 到真实阻塞点即 STOP；
- 新知识无增量则 NO_OP。

## 输出
每个 Macro Tick 最终只合并一次主状态；中间结果写任务包/子结果。最终记录：
```yaml
dispatch_id:
base_state_version:
state_hash:
selected_route:
primary_agent:
dependent_agent:
reason:
expected_result_type:
no_op: true|false
next_state_if_success:
```


## 上下文工程门控
调度顺序改为：
`STATE → 选 Agent → INDEX_LITE → Agent CTX → 必要时 SOURCE`

在选择 primary_agent 后：
- 只加载该 Agent 的 CTX；
- 跨域优先消费上游结构化 result/delta；
- 默认最多 3 个 distilled brief、2 个 raw source；
- 若 source hash 未变化，不重复全文读取；
- 若当前状态无变化，则连 CTX 都不重复扩展，直接 NO_OP。

AUTO_DISPATCH 决定“谁上场”；[[CONTEXT_DISTILLATION_PROTOCOL]] 决定“它最少读什么”。
