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
- render_fix → H3 Agent
- asset_fix → 生图 Agent → 风格审核
- storyboard_fix → 分镜 Agent
- script_fix → 剧本 Agent
- core_conflict → 导演 Agent

## 门禁
- retry_no > 3：禁止继续，转 ESCALATE
- 新返工不得擅自修改 keep_fields
- 新 render 必须生成新的 render_task_id
