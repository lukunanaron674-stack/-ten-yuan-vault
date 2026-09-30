# AG-04｜素材 Agent

## 职责
- 根据镜头任务查找已有角色图、场景图、动作参考、声音参考。
- 返回真实素材 ID / 路径，而不是只做文字描述。
- 缺素材时返回 ASSET_MISSING，并请求生图 Agent。

## 输出
角色参考、场景参考、动作参考、音频参考、素材状态。


## 知识索引入口
- [[../05_索引/IDX-04_视觉素材与风格索引]]
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
- 输出必须遵循 [[../04_协议/ASSET_RESULT_SCHEMA]]。
- “角色卡里写过”不等于“有可绑定图片素材”。
- READY 必须给真实 asset_id + 路径 + lock_status + style_review_status + usable_for_h3。
- 缺失时只报真实缺口，不得从文字说明伪造资产。
- 素材结果交导演合并后，由 [[../04_协议/PRODUCTION_LOOP_PROTOCOL]] 决定下一跳。


## 第七轮｜上下文工程
> 本节优先级高于上方旧“知识索引入口”的默认全量读取方式。

默认启动只读：
1. [[../02_共享状态/PROJECT_STATE.json]]
2. 当前任务包
3. [[../05_索引/INDEX_LITE]]
4. [[../03_知识库/上下文提炼/CTX-04_素材]]

并遵守 [[../04_协议/CONTEXT_DISTILLATION_PROTOCOL]]。

规则：
- 旧 `IDX-xx` 只作为按需回源导航，不再默认 P0→P1→P2 全读。
- 默认最多打开 3 个 distilled brief、2 个原始 source。
- source 未变且 brief 未 stale，不重复读原文。
- 跨 Agent 需要信息时优先读取对方结构化 result/delta，不读取对方完整知识索引。
- 当前任务不涉及某主题时，不加载该主题知识。
