# PROJECT_STATE｜状态看板

> 机器唯一事实源：[[PROJECT_STATE.json]]

## 当前
- schema_version：1.6
- state_version：8
- 项目：黎黎隆
- 模式：LEARNING_AND_TEST
- 正式生产门禁：DIRECTOR_GOAL_REQUIRED
- 正式场次：未设置
- 正式镜头：未设置
- 当前任务：无
- 下一动作：WAIT_FOR_DIRECTOR_GOAL_OR_HOURLY_LEARNING

## 内容决策链
导演 → **主题 Agent（五维）** → **世界观 Agent（条件门禁）** → 剧本 Agent → 十元 Agent → 分镜 Agent。

- 主题：故事研究什么问题。
- 世界观：仅在 world_gate = REQUIRED 时检查“这个世界允许怎样发生”；普通镜头 BYPASS。
- 剧本：人物因此发生什么。
- 十元：内部力量是什么性质、怎样作用。
- 分镜：怎样把变化做成 8–10 秒可见镜头。

## 两条轨道
- 正式生产：只有导演目标为 PRODUCTION 才可推进正式场次与镜头。
- 每小时学习：无正式目标时只能产 TEST-SHOT，不得推进正式剧情。

## 状态控制
- 导演 Agent：唯一合并全局状态。
- 主题 Agent：只提交 `theme_result`。
- 其他 Agent：只提交本岗位 delta。
- 旧 state_version：STALE_RESULT，不得覆盖。
- PASS 镜头：closing_state 必须继承给下一镜 opening_state。
- 同镜头最多 RETRY 3 次，超过后升级导演 / 用户处理。

## schema 1.2 新增
- `shot.theme_result`
- `learning.last_topic_theme`
- 状态机新增 `THEME_READY`
- 五维知识入口：[[../05_索引/IDX-06_主题Agent索引]]

## 防事故字段
- director_goal
- cycle
- pending_deltas
- blockers
- escalation
- shot.continuity_check
- render.last_error
- review.failed_dimensions


## schema 1.3 世界观门禁
- `shot.world_gate`: REQUIRED | BYPASS
- `shot.world_result`: 条件结果
- `new_world_rule_required = true` 时禁止进入 RENDER_QUEUED
- 新世界规则必须先完成 WORLD_PROPOSAL / 十元复核 / 导演确认 / Canon 登记


## 第六轮｜生产闭环
- 协议：READY
- 正式生产仍要求明确 `director_goal.mode = PRODUCTION`
- GitHub 任务写入不等于 H3 已执行；必须收到 executor receipt
- PASS 才能推进 next_shot；RETRY / REPLAN / BLOCKED 均停留当前镜头

### 干跑验证
- test_shot：`TEST-20261001-0535-XNZX-01`
- 结果：`ASSET_MISSING_VALIDATED`
- CH-003：角色卡确认原稿/探索图尚未归档为 GitHub 图片资产
- 付费魔法入口场景：仓库检索无对应命中
- 因此未生成虚假 asset_id，也未伪报 H3 已启动
- next_action：`RESOLVE_REAL_ASSETS_BEFORE_RENDER`


## 第七轮｜自动调度 + 上下文工程
- 调度器：READY
- 默认入口：`05_索引/INDEX_LITE.md`
- 11 个 Agent 均已绑定各自 CTX 工作记忆
- 旧 IDX：仅按需回源，不再默认全读
- 每 tick：最多 1 个 primary Agent
- 默认上下文预算：最多 3 个 distilled brief + 2 个 raw source
- 相同 state_hash：NO_OP

默认读取链已经改为：
`PROJECT_STATE → 当前任务 → INDEX_LITE → 当前 Agent CTX → 必要时 SOURCE`

## 第八轮｜连续镜头门禁
- 连续性协议：READY
- 历史真实 H3 回放：AMBIGUOUS_VALIDATED
- 原因：旧 B 端确有真实渲染证据，但旧任务没有标准化 previous_shot_id / lineage_id / closing_state→opening_state
- 新生产从现在起强制：上一镜 review=PASS 后，`previous.closing_state = next.opening_state`
- revision / retry 不得冒充剧情下一镜
