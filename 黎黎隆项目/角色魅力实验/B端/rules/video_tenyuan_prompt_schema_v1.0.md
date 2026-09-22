# B端视频十元描述词编译规范 v1.0

## 作用

把 GitHub 中的角色卡、角色参考、13 张场景池索引和十元动态链，编译成云端 Work 可执行的 H3 视频任务。

本文件是规则，不是结果；每轮实际产物写入 `tasks/inbox/` 与 `prompts/generated/`。

## 输入

- 角色：`character_id`、角色卡路径、已确认外形与禁止新增项。
- 场景：`selected_scene_refs`，来自 `assets/scene_pool_13_index.json`。
- 动态链：主元/次元、起始状态、受限或受克、变招、关系新状态。
- 任务模式：时长、镜头数量、云端交接说明。

## 固定输出字段

每个 B 端任务必须包含：

```json
{
  "subject_definitions": {},
  "retention_analysis": {},
  "changed_variable": "",
  "dynamic_chain": {},
  "shot_grammar": {},
  "h3_prompt": "",
  "asset_status": {
    "character_ref_status": "github_direct_read",
    "scene_ref_status": "github_direct_read",
    "asset_note": "image submission and H3 binding handled by cloud work"
  }
}
```

## 编译顺序

1. 选定角色；只使用角色卡中已确认的外形、身份和行为，不新增服装、武器、身体结构或未冻结下半身。
2. 从 13 张场景池选择 1 张主场景，必要时再选 1 张辅助场景。场景只负责环境、空间关系、氛围和构图倾向，不能覆盖角色设计。
3. 写 `subject_definitions`：角色主体、辅助主体、场景图作用。
4. 写 `retention_analysis`：必须保持、场景必须保持、弱参考项、禁止改变项。
5. 写 `changed_variable`：用一句话回答“谁改变了谁的什么变量”。
6. 把动态链编译成可见的起始状态 → 受限/变化 → 变招/转折 → 关系新状态。
7. 写 `shot_grammar`：景别、机位、运镜、节奏和每段可观察动作。
8. 写英文 `h3_prompt`。十元术语留在结构字段里；H3 prompt 只写可拍摄、可观察的动作与镜头。
9. 写资产状态备注并上传。资产状态是交接信息，不是 B 端阻断条件。

## 动态链落地要求

不能只写“角色很机灵”“关系紧张”。必须写出：

- 谁施加限制；
- 限制改变了哪条行动路径；
- 角色用什么动作改道；
- 改道后谁与谁形成了什么新关系；
- 镜头怎样让观众看见这个变化。

## 云端 Work 边界

B端负责选择、理解、编译和上传文字任务。云端 Work 负责：

- 按 `character_id` 和角色路径拉取角色参考；
- 按 `selected_scene_refs` / `source_path` 拉取场景参考；
- 将图片输入绑定到 H3 工作流；
- 渲染并回写结果评分。

B端不因为图片绑定尚未完成而阻断任务，也不得声称已经完成 H3 渲染。

## 禁止

- 不把场景图当角色图；
- 不重设计角色；
- 不把场景参考扩大成角色外形参考；
- 不因为资产状态未验证而停止上传；
- 不伪造云端渲染结果；
- 不新增字幕、logo、随机文字或无授权结构。
