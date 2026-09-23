# B端版本号与轮次差异记录规范 v1.1

> 在 v1.0 上追加新约束，2026-09-23 起新任务引用 `B-RULE-v1.1`；不覆盖旧版本与旧轮次历史。基础的父任务、before/after、控制变量、commit 如实记录等仍按 v1.0。

## 变更历史

| 版本 | 与前版区别 | 原因 |
|---|---|---|
| v1.0 | 每轮编号、任务修订号、改动字段及版本索引 | 追踪文本版本变化 |
| v1.1 | 停止 MV 模式；每条视频仅选一个出镜角色、画面中禁止同角色双实例；新旧版本对比加入人物数量/分身故障；取消澈 MV 基准作为新任务强制项 | 用户明确修订生产方向与主角数量 |

## 新轮次差异字段

在 `version_tracking` 填写 `rule_version: B-RULE-v1.1`、`schema_version: video_tenyuan_prompt_schema_v1.1`、`style_reference_version: null`（旧版历史澈 MV 案例只保留可追溯性，**不再当作新任务基准**），并把 `video_mode: single_character_narrative`、`cast.on_screen_character_count_max: 1` 和 `cast.duplicate_instance_allowed: false` 列入固定不变量。

对比表须新增：视频形式（MV→连续叙事）、出镜角色数量、同屏同人复制/分身/倒影/多视图故障、角色跨镜头连续性。不同轮选择不同 character_id 属于**不同任务**，而不是同一视频里插播其他主角。旧任务未标记人物数量时填 unknown，不能臆造它已经出现重复人物。

**版本与结果分开**：描述词已经添加「单角色」约束，不等于 H3 已实测没有复制。Work 可自行记录实际首尾帧与视频中的角色数量；B端没有拿到可核实记录时维持 pending/unverified。
