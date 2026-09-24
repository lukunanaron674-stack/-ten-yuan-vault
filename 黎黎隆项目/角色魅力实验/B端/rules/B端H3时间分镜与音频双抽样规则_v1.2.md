# B端 H3 时间分镜、音频双抽样与稳定规则 v1.2

## 固定生产方式

每条任务固定使用一个角色参考图、一个场景参考图、一个主角、一个场景和一条连续时间分镜。

目标时长改为 **10–11 秒**，并固定执行两次：

- run_A
- run_B

视频模式固定为 `single_character_narrative`。不做 MV 式多人发散，不出现分身、重复角色、镜像双人、分屏或第二个表演主体。

## 必填任务字段

- `character_id`
- `scene_asset_id`
- `reference_view`
- `video_mode`
- `duration_seconds_range: [10, 11]`
- `subject_definition`
- `retention_analysis`
- `changed_variable`
- `dynamic_chain`
- `time_beats`
- `shot_grammar`
- `h3_prompt`
- `audio_design`
- `sampling_plan`
- `negative_constraints`
- `must_keep`
- `must_avoid`
- `validation_target`

## 10–11秒时间分镜

按因果顺序写：

```text
0–2秒：起始状态，角色安静存在
2–4秒：唯一外部刺激
4–6秒：局部身体先出现反应
6–8秒：视线或轻微头部回应
8–10秒：一个小幅手部或姿态变化
10–11秒：动作停住，形成清楚结果
```

每段只改变一个小变量。后一动作必须由前一状态导致。不要塞入跳切、复杂连环动作或多个叙事事件。

## 音频字段

```yaml
audio_design:
  ambient_soundscape: >
    soft environmental sound that supports space and action readability
  emotional_sound_cue: >
    restrained low cue, no lyrics, no strong beat
  audio_role: >
    support the scene mood and action readability, not music-video editing
```

无歌词、无强节拍，不以音乐节奏驱动转场；音频只辅助空间、动作可读性和情绪。

## 双抽样执行

```yaml
sampling_plan:
  run_count: 2
  duration_seconds_range: [10, 11]
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

Work 端支持 seed 时记录真实 `seed_A`、`seed_B`；不支持时记录：

- `run_A: first execution`
- `run_B: second execution`

B 端只生成任务和比较字段，不能把计划当成已经执行；没有真实输出时标记为“待 Work 执行”。

## 镜头与风格稳定

默认固定机位、固定景别、固定光线。禁止推镜、摇镜、转场、换天气和突然改色；只有任务明确需要时才允许一个主要运镜。

身份与风格优先级：

脸型与身份 → 体型比例和剪影 → 发型与识别件 → 服装结构 → 材质与颜色 → 动作和镜头

风格不稳定时先缩小动作，不重设角色，不先修改颜色。

动作幅度：

```text
静止 → 视线变化 → 局部先动 → 轻微转头 → 小幅抬手或迈步
```

## 负面约束

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

`Subject → Movement → Scene → Camera → Lighting → Atmosphere → Audio → Negative`

最终 H3 描述词只写人物、场景、动作、变化、结果、镜头、光照和音频辅助；十元术语和内部分析不直接写入最终提示词。

## 澈式经验的吸收范围

只吸收角色图＋场景图、单角色、固定镜头、清楚线面、软光、连续身份、小幅动作和双抽样比较的生产结构；不复制澈的角色造型、颜色、性格或构图。
