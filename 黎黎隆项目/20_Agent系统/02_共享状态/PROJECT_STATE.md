# PROJECT_STATE｜人类可读状态看板

> **机器唯一事实源**：[[PROJECT_STATE.json]]  
> 本文件只做 Obsidian 人类查看摘要，不作为自动化主状态。

## 当前模式
- project_id: LLL
- pipeline: B端_Agent
- run_mode: LEARNING_AND_TEST
- production_gate: DIRECTOR_GOAL_REQUIRED
- project_status: ACTIVE

## 正式生产
- 当前场次：未设置
- 当前正式镜头：未设置
- 当前任务：无
- 状态：IDLE

## 每小时学习
- 已启用：是
- 无正式导演目标时：只允许生成 TEST-SHOT
- TEST-SHOT：不得自动推进正式剧情

## 状态写入规则
- 全局状态合并：导演 Agent
- 剧本 / 十元 / 分镜 / 素材 / H3 / 审核 Agent：只提交自己的 result delta
- 旧 state_version：标记 STALE_RESULT，不得覆盖当前状态
- 每次正式状态变化：追加到 [[STATE_EVENT_LOG]]

## 连续性
PASS 镜头必须写 closing_state；下一镜 opening_state 必须继承它。详见：
- [[CONTINUITY_STATE_SCHEMA]]
- [[STATE_MACHINE]]
- [[STATE_WRITE_PROTOCOL]]

## 下一步
- next_action: WAIT_FOR_DIRECTOR_GOAL_OR_HOURLY_LEARNING
- assigned_agent: director
