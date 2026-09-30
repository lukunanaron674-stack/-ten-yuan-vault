# AGENT_IO_PROTOCOL｜Agent 接力协议 v1

## 总原则
所有 Agent 接力都通过结构化任务包，不允许只靠聊天上下文猜测。

## 调度顺序
director
→ script
→ tenyuan
→ storyboard
→ asset
→ image（仅缺素材时）
→ style_review（仅新素材）
→ h3
→ video_review
→ director merge

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
- script_agent：只定义故事变化，不定机位
- tenyuan_agent：只定义十元结构与验证状态，不强改剧情
- storyboard_agent：把前两者变成时间镜头
- asset_agent：只查真实素材并报告缺口
- image_agent：只补已确认缺失素材
- style_review_agent：只审核新参考图
- h3_agent：只执行镜头任务
- video_review_agent：只审核生成结果
- director_agent：唯一合并全局状态并决定下一跳

## 交叉讨论
剧本 / 十元 / 分镜最多 3 轮。
每轮只能返回：
- ACCEPT
- MODIFY
- REJECT
并附具体字段，不允许整段泛聊。

## 串轨禁止
PRODUCTION 使用 shot_id。
LEARNING 使用 test_shot_id。
两者结果禁止互相覆盖。
