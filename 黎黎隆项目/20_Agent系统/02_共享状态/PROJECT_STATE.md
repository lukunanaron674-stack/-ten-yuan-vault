# PROJECT_STATE｜状态看板

> 机器唯一事实源：[[PROJECT_STATE.json]]

## 当前
- schema_version：1.1
- state_version：2
- 项目：黎黎隆
- 模式：LEARNING_AND_TEST
- 正式生产门禁：DIRECTOR_GOAL_REQUIRED
- 正式场次：未设置
- 正式镜头：未设置
- 当前任务：无
- 下一动作：WAIT_FOR_DIRECTOR_GOAL_OR_HOURLY_LEARNING

## 两条轨道
- 正式生产：只有导演目标为 PRODUCTION 才可推进正式场次与镜头。
- 每小时学习：无正式目标时只能产 TEST-SHOT，不得推进正式剧情。

## 状态控制
- 导演 Agent：唯一合并全局状态。
- 其他 Agent：只提交本岗位 delta。
- 旧 state_version：STALE_RESULT，不得覆盖。
- PASS 镜头：closing_state 必须继承给下一镜 opening_state。
- 同镜头最多 RETRY 3 次，超过后升级导演 / 用户处理。

## 新增防事故字段
- director_goal
- cycle
- pending_deltas
- blockers
- escalation
- shot.continuity_check
- render.last_error
- review.failed_dimensions
