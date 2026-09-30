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
→ SCRIPT_READY
→ TENYUAN_READY
→ STORYBOARD_READY
→ ASSET_CHECK
→ ASSET_MISSING | ASSET_READY
→ RENDER_QUEUED
→ RENDERING
→ RENDER_DONE
→ REVIEWING
→ PASS | RETRY | REPLAN | BLOCKED
→ DONE
```

## 关键转移
- ASSET_MISSING → 素材 Agent / 生图 Agent
- RETRY → 保留已正确字段，只调整失败项，再进入 RENDER_QUEUED
- REPLAN → 回到 STORYBOARD_READY 之前，由分镜/导演修改任务设计
- PASS → 更新 closing_state，并把它复制为下一镜 opening_state
- BLOCKED → 停止自动推进，记录 blocker 与 owner

## 写权限
- **导演 Agent**：唯一允许改 PROJECT / SCENE / 当前 SHOT 指针和 next_action。
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
