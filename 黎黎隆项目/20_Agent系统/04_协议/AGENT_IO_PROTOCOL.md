# AGENT_IO_PROTOCOL｜Agent 接力协议 v1.1

## 总原则
所有 Agent 接力都通过结构化任务包，不允许只靠聊天上下文猜测。

## 调度顺序
director
→ **theme**
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
`theme_result → script_result → tenyuan_result → storyboard_result`

- theme_result 回答：**研究什么问题？**
- script_result 回答：**人物因此发生什么？**
- tenyuan_result 回答：**内部力量是什么性质、如何作用？**
- storyboard_result 回答：**怎样在 8–10 秒内让变化可见？**

禁止反向覆盖：
- 十元不得因为映射方便而改写主题问题。
- 分镜不得为了画面方便删除核心剧情变化。
- 主题不得为了“深刻”破坏角色/世界观正本。

## 交叉讨论
主题 / 剧本 / 十元 / 分镜最多 3 轮。
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
