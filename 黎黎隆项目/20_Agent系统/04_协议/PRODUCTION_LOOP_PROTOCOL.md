# PRODUCTION_LOOP_PROTOCOL｜第六轮生产闭环 v1

## 目标
把已经完成内容讨论的镜头，稳定推进到可执行、可审核、可返工、可继承下一镜的生产闭环。

闭环：
`SHOT_READY → ASSET_CHECK → ASSET_READY / ASSET_MISSING → IMAGE_GENERATE → STYLE_REVIEW → RENDER_DISPATCH → RENDER_DONE → VIDEO_REVIEW → PASS / RETRY / REPLAN / BLOCKED → NEXT_SHOT`

## 总门禁
正式生产必须同时满足：
- director_goal.mode = PRODUCTION
- active_job_id 已设置
- current_shot_id 已设置
- SHOT_TASK_SCHEMA READY 门禁通过
- task_mode = PRODUCTION

若上述任一不满足：
- 不得推进正式镜头；
- 学习轨仅允许 test_shot_id；
- 不得写入正式 current_shot_id。

## Stage 1｜SHOT_READY
导演确认内容层：
主题 → 世界观门禁（条件）→ 剧本 → 十元 → 分镜

通过后：
- shot.status = STORYBOARD_READY
- next_action = ASSET_CHECK
- assigned_agent = asset

## Stage 2｜ASSET_CHECK
素材 Agent 必须返回真实可绑定素材，不接受“概念上有”。

### H3-bindable 最小条件
每个角色 / 场景主参考至少有：
- asset_id
- repository_path 或 watcher 可解析路径
- asset_type
- lock_status
- source_status
- version
- style_review_status
- usable_for_h3: true

只有满足以上条件才算 resolved。

### 分流
- 所需素材全部 resolved → ASSET_READY
- 缺素材 → ASSET_MISSING
- 找到候选但未锁定 / 未审核 → ASSET_PENDING_REVIEW
- 文件路径不存在 / watcher 不可读 → BLOCKED

## Stage 3｜IMAGE_GENERATE（仅缺素材）
只有 ASSET_MISSING 才允许触发生图 Agent。

输出必须进入 [[ASSET_RESULT_SCHEMA]]：
- generated_asset_id
- target_usage
- constraints_inherited
- file_path
- version
- review_status = PENDING

新图不能直接给 H3。

## Stage 4｜STYLE_REVIEW
所有新生成参考必须按 [[STYLE_REVIEW_SCHEMA]] 审核。

- PASS → 写入 approved_assets，回 ASSET_CHECK
- RETRY → 只改失败项，最多 3 次
- REPLAN → 返回生图/导演
- BLOCKED → 停止该镜头自动推进

## Stage 5｜RENDER_DISPATCH
满足：
- SHOT READY
- ASSET_READY
- 所有新素材 STYLE PASS
- continuity_check != FAIL

生成 [[RENDER_TASK_SCHEMA]]。

当前允许的 dispatch_mode：
- GITHUB_WATCHER
- MANUAL
- MCP_BRIDGE

不得把“任务文件已写入 GitHub”等同于“H3 已开始渲染”。
必须收到 watcher / executor receipt 后才进入 RENDERING。

## Stage 6｜RENDER_RESULT
H3 Agent 返回：
- render_task_id
- executor_receipt
- output_video
- head_frame
- mid_frame
- tail_frame
- params_actual
- render_status
- error

### 分流
- SUCCESS → REVIEWING
- TRANSIENT_ERROR → 同参数或有限参数修复，最多 2 次执行级重试
- TASK_ERROR → REPLAN 到 H3 task / storyboard
- ENV_ERROR → BLOCKED

执行级重试不计入画面审核 RETRY 3 次上限。

## Stage 7｜VIDEO_REVIEW
视频审核 Agent 按 [[REVIEW_SCHEMA]] 输出：
- PASS
- RETRY
- REPLAN
- BLOCKED

### PASS
必须：
- closing_state 存在
- continuity_check = PASS | NOT_REQUIRED
- review.failed_dimensions = []
- 将 closing_state 作为下一镜 opening_state

### RETRY
生成 [[RETRY_PACKET_SCHEMA]]。
只修改失败项，不得碰 keep_fields。
同一镜画面返工最多 3 次。

### REPLAN
按失败来源回退：
- asset → ASSET_CHECK / IMAGE_GENERATE
- storyboard → STORYBOARD_READY 前对应步骤
- script → SCRIPT_READY 前对应步骤
- world/core → DIRECTOR_REQUIRED
- execution → RENDER_TASK

### BLOCKED
写 blocker + owner + reason，停止自动推进。

## Stage 8｜NEXT_SHOT
只有 PASS 才允许：
1. 当前镜头标记 DONE；
2. scene.completed_duration_sec += duration_sec；
3. previous_shot_id = 当前 shot_id；
4. 创建 next_shot_id；
5. next.opening_state = previous.closing_state；
6. next_action = PLANNING；
7. state_version + 1。

不得在 RETRY / REPLAN / BLOCKED 时偷偷推进 next_shot_id。

## 幂等与防重复
- 同一 job_id + shot_id + stage + attempt_no 只能存在一个 active packet。
- 重复 receipt 不得二次推进状态。
- 旧 base_state_version → STALE_RESULT。
- 所有 stage transition 写入 STATE_EVENT_LOG。

## TEST 干跑
学习轨可执行完整协议到 ASSET_CHECK / RENDER_TASK 生成，但：
- 不得推进正式 scene / shot 指针；
- 缺真实素材时应停在 ASSET_MISSING；
- 不得为通过测试而虚构 asset_id、路径或 render receipt。
