# B端 H3 时间分镜、双抽样与音频稳定规则 v1.2

## 适用范围

本规则从下一轮 B 端任务开始生效。GitHub 只保存结构化文字、JSON 任务、索引、规则和验证记录；图片、视频和实际 H3 渲染由 Work / Codex / 云端执行侧按素材 ID 绑定。

## 固定生产方式

每条任务固定使用：

- 一个角色参考图
- 一个场景参考图
- 一个主角
- 一个场景
- 一条连续时间分镜
- 两次 15 秒执行：run_A、run_B

视频模式固定为：

`single_character_narrative`

不做 MV 式多人发散，不出现分身、重复角色、镜像双人、分屏或第二个表演主体。

## 任务结构

每条任务必须保留：

- `character_id`
- `scene_asset_id`
- `reference_view`
- `video_mode`
- `duration_seconds: 15`
- `subject_definition`
- `retention_analysis`
- `changed_variable`
- `dynamic_chain`
- `shot_grammar`
- `h3_prompt`
- `audio_design`
- `sampling_plan`
- `negative_constraints`
- `must_keep`
- `must_avoid`
- `validation_target`

## 时间分镜

15 秒描述词按因果顺序写：

```text
0–2秒：起始状态，角色安静存在
2–4秒：唯一外部刺激
4–6秒：局部身体先出现反应
6–8秒：视线或轻微头部回应
8–10秒：一个小幅手部或姿态变化
10–12秒：角色完成一次小回应
12–15秒：动作停住，形成清楚结果
```

每个时间段只改变一个小变量。后一动作必须由前一状态导致。不要塞入跳切、复杂连环动作或多个叙事事件。

## 音频字段

每条任务新增：

- `ambient_soundscape`：场景环境声，帮助空间和动作可读
- `emotional_sound_cue`：克制的情绪音提示
- `audio_role`：明确音频只辅助动作和情绪，不承担 MV 剪辑

默认要求：

- 无歌词
- 无强节拍
- 不以音乐节奏驱动转场
- 不把音频写成 MV 结构
- 环境音必须服务画面中的动作或空间

示例：

```yaml
audio_design:
  ambient_soundscape: >
    soft wind, distant mechanical hum, light footsteps, cloth rustle, subtle environmental reverb
  emotional_sound_cue: >
    restrained low drone, sparse bell accents, soft suspended strings, no lyrics, no strong beat
  audio_role: >
    support the scene mood and action readability, not music-video editing
```

## 双抽样执行

每条描述词固定交给 Work 端执行两遍：

```yaml
sampling_plan:
  run_count: 2
  duration_seconds: 15
  run_A:
    seed: auto_or_explicit
  run_B:
    seed: auto_or_explicit
  compare_axes:
    - character_consistency
    - action_readability
    - camera_stability
    - atmosphere_fit
    - no_duplicate_character
```

如果 Work 端支持显式 seed，记录真实 `seed_A` 和 `seed_B`。如果不支持，记录：

- `run_A: first execution`
- `run_B: second execution`

B 端只能生成任务和比较字段，不能把计划当成已经执行；没有真实输出时必须标记为“待 Work 执行”。

## 镜头与风格稳定

默认固定机位、固定景别、固定光线。禁止推镜、摇镜、转场、换天气和突然改色；只有在任务明确需要时才允许一个主要运镜。

风格与身份优先级：

脸型与身份
→ 体型比例和剪影
→ 发型与识别件
→ 服装结构
→ 材质与颜色
→ 动作和镜头

风格不稳定时先缩小动作，不重设角色，不先修改颜色。

动作幅度：

```text
静止
→ 视线变化
→ 局部先动
→ 轻微转头
→ 小幅抬手或迈步
```

## 负面约束

每条任务都必须包含：

```yaml
negative_constraints:
  - no duplicate character
  - no second human figure
  - no split screen
  - no clone or mirror-double
  - no extra limbs
  - no text overlay
  - no watermark
  - no abrupt redesign
```

## 最终 H3 提示词顺序

最终 `h3_prompt` 固定按以下顺序：

**Subject → Movement → Scene → Camera → Lighting → Atmosphere → Audio → Negative**

最终 H3 描述词只写人物、场景、动作、变化、结果、镜头、光照和音频辅助；十元术语和内部分析不直接写入最终提示词。

## 澈式经验的吸收范围

只吸收生产结构：

- 角色图＋场景图
- 单角色
- 固定镜头优先
- 清楚线面
- 软光
- 连续身份
- 小幅可观察动作
- 双抽样后按证据比较

不复制澈的角色造型、颜色、性格或构图。
