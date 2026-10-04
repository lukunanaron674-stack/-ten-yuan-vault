# AGENT_IO_PROTOCOL｜Agent 接力协议 v1.1

## 总原则
所有 Agent 接力都通过结构化任务包，不允许只靠聊天上下文猜测。

## 调度顺序
director
→ **theme**
→ **world（条件触发）**
→ script
→ tenyuan
→ storyboard
→ asset
→ image（仅缺素材时）
→ style_review（仅新素材）
→ h3
→ video_review
→ director merge

必要时允许一次：
`script → theme(THEME_AUDIT) → script`

## 独立角色任务轨
角色创建/更新与正式镜头分轨：
`director/user goal → character → (world/tenyuan review when required) → asset → image(if missing) → style_review → character writeback`

角色任务统一使用 [[CHARACTER_RESULT_SCHEMA]]；不得因为角色卡写回而推进 SHOT / RENDER 状态。

## 统一输入头
每个 Agent 必须收到：
- project_id
- job_id
- shot_id 或 test_shot_id
- base_state_version
- task_mode
- assigned_agent
- input_refs

## 统一输出头
每个 Agent 必须返回：
- project_id
- job_id
- shot_id 或 test_shot_id
- base_state_version
- agent
- result_type
- status
- payload
- submitted_at

## 各 Agent 责任
- **theme_agent**：只定义五维主题问题、主题实验、压力机制和人物困境目标，不写完整剧情；只提交 `theme_result`。
- **world_agent**：仅在 `world_gate = REQUIRED` 时做 Canon / 区域规则 / 文明机制校验；只提交 `world_result`。普通镜头 BYPASS，不强制参与。
- **character_agent**：新建/更新角色正本、定义人物世界位置与视觉冻结项；只提交 `character_result`。不直接生图，不自行改十元/世界 Canon。
- script_agent：根据 theme_result 定义故事变化，不定机位；只提交 `script_result`。
- tenyuan_agent：只定义十元结构与验证状态，不强改主题/剧情；只提交 `tenyuan_result`。
- storyboard_agent：把前三者变成时间镜头；只提交 `storyboard_result`。
- asset_agent：只查真实素材并报告缺口。
- image_agent：只补已确认缺失素材。
- style_review_agent：只审核新参考图。
- h3_agent：只执行镜头任务。
- video_review_agent：只审核生成结果。
- director_agent：唯一合并全局状态并决定下一跳。

## 内容接口
`theme_result → world_result(conditional) → script_result → tenyuan_result → storyboard_result`

- theme_result 回答：**研究什么问题？**
- world_result 回答：**这个世界允许怎样发生？哪些规则不能被临时改？**
- script_result 回答：**人物因此发生什么？**
- tenyuan_result 回答：**内部力量是什么性质、如何作用？**
- storyboard_result 回答：**怎样在 8–10 秒内让变化可见？**

禁止反向覆盖：
- 世界观不得为了服务单镜临时发明高体量规则。
- 世界观不得改主题问题或十元 canonical。
- 十元不得因为映射方便而改写主题问题。
- 分镜不得为了画面方便删除核心剧情变化。
- 主题不得为了“深刻”破坏角色/世界观正本。

## 交叉讨论
主题 / 世界观（条件触发）/ 剧本 / 十元 / 分镜最多 3 轮。WORLD_CHECK 最多 1 轮。
THEME_AUDIT 默认最多 1 轮。
每轮只能返回：
- ACCEPT
- MODIFY
- REJECT
并附具体字段，不允许整段泛聊。

## 串轨禁止
PRODUCTION 使用 shot_id。
LEARNING 使用 test_shot_id。
两者结果禁止互相覆盖。


## 第五轮讨论与裁决
- 内容争议统一读取 [[DISCUSSION_PROTOCOL]]。
- 无法自动收敛时由导演生成 [[DIRECTOR_DECISION_SCHEMA]]。
- 讨论只允许修改冲突字段，禁止重写整张任务卡。
- 主题 / 世界观（条件触发）/ 剧本 / 十元 / 分镜最多 3 轮；THEME_AUDIT 与 WORLD_CHECK 各最多 1 轮。
- 导演裁决后生成 final_patch，并写回当前任务包。


## 第六轮｜执行层闭环
内容层 RESOLVED 后统一进入 [[PRODUCTION_LOOP_PROTOCOL]]。

执行包：
- 素材：[[ASSET_RESULT_SCHEMA]]
- 新素材审核：[[STYLE_REVIEW_SCHEMA]]
- H3 执行：[[RENDER_TASK_SCHEMA]]
- 视频审核：[[REVIEW_SCHEMA]]
- 返工：[[RETRY_PACKET_SCHEMA]]

### 状态推进责任
- asset_agent 只能提交素材结果，不能自己把镜头推进到渲染。
- image_agent 生成的新素材必须先 style_review。
- style_review_agent PASS 后才能成为 approved_assets。
- h3_agent 生成任务包后，只有收到 executor_receipt 才能标记 RENDERING。
- video_review_agent PASS 后只提交 closing_state；next_shot_id 仍由导演合并。


## 集级任务轨（episode 轨）v1.2 增补【STAGING 2026-10-03 作者拍板回灌；来源：SHORTDRAMA_DISCUSSION_PROTOCOL §8.2 兼容性审计】
> 本节为增补条文，不修改上方任何镜级条文；镜级轨与集级轨互不覆盖。

1. **集级任务轨标识**：PRODUCTION 使用 `episode_id`；LEARNING 使用 `test_episode_id`。与 shot_id / test_shot_id 轨隔离，结果禁止互相覆盖。
2. **集级状态机**：`DRAFT（AG-12 写）→ IN_REVIEW（R2/R3 期间）→ SETTLED / RETURNED`。状态字段唯一写入人 = director_agent；AG-12 只能写 DRAFT，tenyuan_agent 只提交 verdict。
3. **result_type 映射登记**：`script_result(episodes)` = episode_entry 数组（schema 见 [[../01_Agent库/AG-12_短剧剧本Agent]] v1.1）；`tenyuan_result(episode)` = tenyuan_claim / SETTLE verdict。下游 AG-01 / AG-03 按映射名读取，不做二次猜测。
4. **回合二分**：集级讨论中 R1（SCRIPT_BEAT_PROPOSAL）/ R2（TENYUAN_CLAIM）为**交付回合**（内容交付，不返回 verdict）；R3（SCRIPT_TENYUAN_MERGE）为**裁决回合**（ACCEPT/MODIFY/REJECT）。"最多 3 轮"上限只约束裁决往返，交付回合不计入。
5. **集级调度顺序**：director → AG-12（script episodes）→ tenyuan（claim/settle）→ director merge（写 SETTLED）→ 下发 AG-01 镜级拆解。镜级五步协议（DISCUSSION_PROTOCOL v1）不变。
