# A端（Work 渲染端）卡格式规范 —— chat 网页请按此出卡

## A端 只认两种格式（二选一）
1. **结构化 JSON**：`schema_version` 以 `video_tenyuan_prompt_schema` 开头（v1.2/v1.3 均可）。
   角色 ID 全支持（ADV/MOUSE/LLL 通吃），最稳，推荐。
2. **Markdown 任务书**（.md）：执行词放进 ```text 围栏块 或 `## H3 Prompt` 小节。

## 绝对不要发（发了 A端 永久沉默）
- `B-H3-TASK-1.2` 扁平 JSON：A端 is_new_format 只认 `video_tenyuan_prompt_schema_*`，
  会被当未知卡跳过，永不入池。

## JSON 模板（已验证 is_new_format=True）
{
  "schema_version": "video_tenyuan_prompt_schema_v1.2",
  "task_id": "ADV_B_20260925_0001_R41",
  "task_version": "v10",
  "cast": { "character_id": "ADV-001", "display_name": "冒险者" },
  "source_assets": {
    "character": { "path": "B端/assets/character_refs/ADV-001_full_body.png", "scene_asset_id": "SCENE-10" },
    "scene": { "path": "黎黎隆项目/04_场景/五色视觉系统/R2_主导色/assets/R2-01_机械空港_深墨青主导.png", "scene_asset_id": "SCENE-10" }
  },
  "render_spec": { "planned_duration_seconds_each": 10 },
  "clips": [ { "clip_id": "A", "h3_prompt": "英文视觉描述，≤7000字符", "narrative_role": "establish" } ]
}

## Markdown 模板（已验证 parse_md_task 抽中）
# ADV_B_20260925_0001_R41｜示例渲染卡
## 角色
- character_id：ADV-001
- 正式名称：**冒险者**
## 场景
- scene_id：SCENE-10
## 参考图（路径不能有空格；角色图路径须含 character_ref）
- 角色图：`B端/assets/character_refs/ADV-001_full_body.png`
- 场景图：`黎黎隆项目/04_场景/五色视觉系统/R2_主导色/assets/R2-01_机械空港_深墨青主导.png`
## H3 Prompt
```text
A wide shot of a burly bearded adventurer ..., cinematic lighting, highly detailed.
```

## 硬约束（踩中任一条 A端 直接拒卡，绝不硬跑）
- **执行词必须是英文视觉描述，≤7000 字符**；绝不能把整篇卡文档（含 ## 状态/验收/Picture绑定、
  pending_image_validation/work_validation 等标记、中文多级标题）当执行词 —— A端 有卡文档探测器，
  会判 needs_prompt 丢弃。执行词务必单独进 ```text 围栏块。
- **图片路径不能带空格**（中文 / _ - 都行，空格会截断识别）。
- **角色图路径必须含 `character_ref`** 子串，否则会被当场景图、角色形象锁不住。
- **单卡时长 ≤11 秒（264 帧）**；超了 A端 自动钳 10 秒（不崩，但丢时长）。
- md 角色 ID：仅 `LLL-` 前缀会被自动识别为「需角色参考」；ADV/MOUSE 请改用 JSON 的
  `cast.character_id`，或在英文执行词里加一行 `character_id=ADV-001` 兜底。

## 拒卡状态含义（chat 网页读 results/<CARD>_RESULTS.json 的 status 字段）
- `needs_prompt`：A端 没抽到可用的 H3 执行词（词为空 / 像卡文档 / 超 7000 字符）。
- `needs_refs`：A端 没抽到可用的参考图（路径带空格 / 无 character_ref / 角色图缺失）。
修复后重新推卡即可，A端 会自动重抓入池。
