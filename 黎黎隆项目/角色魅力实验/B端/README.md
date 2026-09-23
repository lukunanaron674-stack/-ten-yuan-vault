# 黎黎隆角色魅力实验｜B端

本目录是 B 端的唯一交接入口：读取 GitHub 角色池、场景素材路径、角色卡和十元动态链，生成可交给云端 Work/H3 的结构化视频描述词任务。

## 核心链路

GitHub角色池 + GitHub 13张场景池
→ 角色/场景选择
→ 十元动态链编译
→ 可观察动作
→ MV镜头语言
→ H3视频描述词
→ 写入GitHub tasks/inbox 与 prompts/generated
→ 云端Work绑定图片、渲染并回写结果

## B端每小时任务

1. 先读取 `assets/character_pool_index.json`，仅从 `status=available` 且 `asset_role=h3_character_reference`、`b_end_h3_eligible=true` 的角色中选择主体，并把选中角色的 `character_id` 与 `asset_paths` 写入任务。
2. 从 `assets/scene_pool_13_index.json` 的13张正式场景池中选择1张主场景，必要时选择辅助场景。
3. 读取角色冻结项、场景约束和十元动态链。
4. 生成 `subject_definitions`、`retention_analysis`、`changed_variable`、`dynamic_chain`、`shot_grammar` 与 `h3_prompt`。
5. 将角色参考图路径和场景参考图路径保留在任务中，供云端Work绑定实际图片。
6. 写入 `tasks/inbox/*.json` 和 `prompts/generated/*.json`。
7. 将资产状态写入任务，不因为图片绑定尚未完成而阻断上传。
8. 每轮提交并推送 GitHub `main`。

## 角色池索引（用户2026-09-23确认）

唯一角色：LLL-MAIN-001｜黎黎隆本人。

唯一角色参考图：

`assets/character_refs/LLL_H3_character_card_001.jpg`

角色池索引：`assets/character_pool_index.json`，仅列黎黎隆一人、一张图。B端禁止把R3预跑角色与场景组合图、黎黎、大叔、奇美拉、CH-003或旧任务中的任何图片当成当前角色图；历史非黎黎隆任务不得作为新的生产依据。R3合成图属于历史场景实验资料，不增加到正式13张场景池；若需要使用，必须单独经过场景索引选择，不得从角色目录读取。

## 13张场景池

正式索引：

`assets/scene_pool_13_index.json`

场景图只定义环境、空间关系、氛围和构图倾向，不能覆盖角色设计。任务引用 GitHub 中的 `source_path`；不把图片字节嵌入任务 JSON。

## 资产状态规则

统一记录：

```json
{
  "character_ref_status": "github_direct_read",
  "scene_ref_status": "github_direct_read",
  "asset_note": "image submission and H3 binding handled by cloud work"
}
```

资产状态是交接备注，不是 B 端阻断条件。B 端不声称已经完成 H3 渲染。

## 云端 Work 负责

- 按 `character_id` 和 `asset_paths` 拉取角色参考；
- 按 `selected_scene_refs` / `source_path` 拉取场景参考；
- 将图片输入绑定到 H3 工作流；
- 执行渲染；
- 回写角色一致性、场景一致性、动态链可读性和失败族评分。

## B端禁止

- 不把场景图当成角色图；
- 不重设计角色；
- 不新增未冻结服装、武器、翅膀、身体结构或下半身；
- 不把十元术语直接当成 H3 可见动作；
- 不因为 `sha256` 或图片绑定未完成而停止上传；
- 不伪造云端渲染结果、视频结果或评分。

## 当前示例

- 任务：`tasks/inbox/BEND_HOURLY_20260923_001.json`
- 生成描述词：`prompts/generated/BEND_HOURLY_20260923_001.json`
- 角色：`LLL-CHAR-003｜逃票魔法学徒`
- 场景：`SCENE-05｜机械空港_单色`
- 动态链：`XN → Z → ZX → NZ`
