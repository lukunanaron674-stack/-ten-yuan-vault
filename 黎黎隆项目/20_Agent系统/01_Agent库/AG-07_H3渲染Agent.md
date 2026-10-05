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
