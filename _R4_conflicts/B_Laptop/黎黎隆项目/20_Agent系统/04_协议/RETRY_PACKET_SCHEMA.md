# RETRY_PACKET_SCHEMA｜返工包 v1

## 身份
- retry_packet_id
- project_id
- job_id
- shot_id
- render_task_id
- base_state_version
- retry_no
- source_review_id

## 必须保留
- keep_fields
- approved_assets
- approved_identity
- approved_style
- approved_composition
- approved_storyboard_fields

## 只允许修改
- failed_dimensions
- change_fields
- retry_instructions

## 分流
- render_fix → H3 Agent → [[RENDER_TASK_SCHEMA]]
- asset_fix → 素材 Agent复核 → 必要时生图 Agent → [[STYLE_REVIEW_SCHEMA]]
- storyboard_fix → 分镜 Agent
- script_fix → 剧本 Agent
- core_conflict → 导演 Agent

## 门禁
- retry_no > 3：禁止继续，转 ESCALATE
- 新返工不得擅自修改 keep_fields
- 新 render 必须生成新的 render_task_id


## 第六轮重试分层
- executor_retry：H3 执行错误，最多 2 次，不计入画面 RETRY 3 次上限。
- visual_retry：视频审核失败，计入 retry_no，最多 3 次。
- asset_retry：新素材风格审核失败，独立最多 3 次。
禁止三种重试共用同一个计数器，否则会把“机器崩了一次”和“画面烂了三次”混成一锅。
