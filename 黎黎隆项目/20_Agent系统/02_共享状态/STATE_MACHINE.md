# STATE_MACHINE｜共享状态机

## 目标
所有 Agent 对同一项目、同一场次、同一镜头使用唯一状态源。聊天内容不作为权威状态。

## 状态层级
1. PROJECT：项目总目标与当前阶段
2. SCENE：当前场次目标与完成度
3. SHOT：当前镜头任务与连续性
4. ASSET：当前镜头所需素材
5. RENDER：H3/ComfyUI 执行状态
6. REVIEW：风格/视频审核状态
7. LEARNING：每小时研究与增量知识状态

## 镜头状态枚举
```text
IDLE
→ PLANNING
→ THEME_READY
→ WORLD_READY (conditional)
→ SCRIPT_READY
→ TENYUAN_READY
→ STORYBOARD_READY
→ ASSET_CHECK
→ ASSET_MISSING | ASSET_PENDING_REVIEW | ASSET_READY
→ IMAGE_GENERATING (conditional)
→ STYLE_REVIEWING (conditional)
→ ASSET_READY
→ RENDER_DISPATCH
→ RENDER_QUEUED
→ RENDERING
→ RENDER_DONE
→ REVIEWING
→ PASS | RETRY | REPLAN | BLOCKED
→ DONE
```

## 关键转移
- PLANNING → 主题 Agent 先定义 `theme_result`，再进入 THEME_READY。
- THEME_READY → 若 `world_gate = REQUIRED`，世界观 Agent 执行 WORLD_CHECK，通过后进入 WORLD_READY；若 `world_gate = BYPASS`，直接交给剧本 Agent。
- WORLD_READY → 剧本 Agent 使用已确认 Canon / 区域规则 / 允许机制生成事件。
- THEME_READY → 剧本 Agent 把主题问题转成人物困境与事件。
- ASSET_MISSING → 先由素材 Agent确认缺口；只有真实缺失才进入 IMAGE_GENERATING。
- IMAGE_GENERATING → STYLE_REVIEWING；新图不得直接进入 H3。
- STYLE_REVIEWING PASS → 回 ASSET_CHECK，合并 approved_assets。
- RENDER_DISPATCH → 生成 RENDER_TASK；任务文件写入后仍不可视为 RENDERING。
- 收到 executor_receipt → RENDERING。
- RETRY → 保留已正确字段，只调整失败项，再进入 RENDER_QUEUED。
- REPLAN → 按失败字段回到主题 / 剧本 / 十元 / 分镜对应阶段，不默认整条重跑。
- PASS → 更新 closing_state，并把它复制为下一镜 opening_state。
- BLOCKED → 停止自动推进，记录 blocker 与 owner。

## 写权限
- **导演 Agent**：唯一允许改 PROJECT / SCENE / 当前 SHOT 指针和 next_action。
- **主题 Agent**：只提交 theme_result。
- **世界观 Agent**：仅在 `world_gate = REQUIRED` 时提交 world_result；不得直接改全局 Canon 指针。
- **剧本 Agent**：只提交 script_result。
- **十元 Agent**：只提交 tenyuan_result。
- **分镜 Agent**：只提交 storyboard_result。
- **素材/生图 Agent**：只提交 asset_result。
- **H3 Agent**：只提交 render_result。
- **审核 Agent**：只提交 review_result。
- 导演读取这些结果后合并到全局状态。

## 并发门禁
每次写入必须携带：
- project_id
- job_id
- shot_id
- state_version
- last_writer
- updated_at

若提交结果中的 state_version 不是当前版本，禁止直接覆盖，标记 `STALE_RESULT` 交导演处理。

## 连续性门禁
下一镜创建时：
`next.opening_state = previous.closing_state`

连续性至少包含：
- 人物位置
- 朝向
- 姿态/动作结束点
- 手中物
- 服装/损伤/状态
- 场景位置
- 光线/时间
- 关系状态
- 十元当前体量
- 若主题压力发生不可逆变化：记录该变化供下一镜继承


## 世界观门禁
- 普通镜头：`world_gate = BYPASS`，不增加状态步骤。
- 依赖世界规则：`world_gate = REQUIRED`，必须先得到 `world_result`。
- 若 `new_world_rule_required = true`：进入 REPLAN / BLOCKED，不得进入 RENDER_QUEUED。
- 新规则需走 [[../04_协议/WORLD_PROPOSAL_SCHEMA]]，完成十元复核与导演裁决后，才允许登记为可调用规则。


## 第六轮执行门禁
完整执行流读取 [[../04_协议/PRODUCTION_LOOP_PROTOCOL]]。
- ASSET_READY 必须满足 [[../04_协议/ASSET_RESULT_SCHEMA]]。
- 新素材必须通过 [[../04_协议/STYLE_REVIEW_SCHEMA]]。
- H3 必须使用 [[../04_协议/RENDER_TASK_SCHEMA]]。
- GitHub queue_write_status = WRITTEN 不能推进到 RENDERING；必须有 executor_receipt。
- PASS 才能创建 next_shot_id；RETRY / REPLAN / BLOCKED 均不得前移镜头指针。
