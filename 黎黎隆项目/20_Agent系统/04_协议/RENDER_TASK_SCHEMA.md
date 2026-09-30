# RENDER_TASK_SCHEMA｜H3执行任务包 v1

## 身份
- project_id
- job_id
- scene_id
- shot_id 或 test_shot_id
- render_task_id
- base_state_version
- attempt_no
- task_mode: PRODUCTION | TEST

## dispatch
- dispatch_mode: GITHUB_WATCHER | MANUAL | MCP_BRIDGE
- task_file_path
- watcher_channel
- queue_write_status: NOT_WRITTEN | WRITTEN | RECEIVED | REJECTED
- executor_receipt

> WRITTEN 只代表任务文件已写入，不代表本地 H3 已开始。

## 输入锁
- character_asset_ids
- scene_asset_ids
- other_asset_ids
- approved_style_refs
- opening_state
- forbidden_changes
- keep_fields

## H3
- workflow_id
- h3_mode
- duration_sec
- steps
- sage
- seed
- resolution
- prompt
- negative
- env_binding
- character_binding

## 输出
- render_status: QUEUED | RENDERING | SUCCESS | TRANSIENT_ERROR | TASK_ERROR | ENV_ERROR
- output_video
- head_frame
- mid_frame
- tail_frame
- params_actual
- error_code
- error_message
- executor_started_at
- executor_finished_at

## 重试
- TRANSIENT_ERROR：执行级重试最多 2 次；
- TASK_ERROR：返回 H3 Agent / 分镜修任务；
- ENV_ERROR：BLOCKED；
- 每次新执行必须有新的 render_task_id 或明确 child_attempt_id。
