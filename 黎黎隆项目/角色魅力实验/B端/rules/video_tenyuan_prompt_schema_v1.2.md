# B端视频十元描述词编译规范 v1.2｜音效、双抽与四技能执行链

> 继承 v1.1 的单角色连续叙事及身份/13图池/Work原图闸门；本版只新增音效与双抽、可执行文本制作方法。不恢复 MV。2026-09-23 起新轮次生效，旧轮次不覆盖。

## 必须先运行的4项文本技能

`skills/H3动画四技能执行链_v1.0.md` 顺序执行：02 I2V动作编译 → 03四要素场面编排 → 04清晰与冲突扫描（同时布置音频）→ 05负面约束和双抽交接。Skill02-05共用一张角色卡/一张场景图/一个主行动变量，不能各自产出4份不同风格的描述词。

## 任务 JSON 必填增量

```json
{
  "schema_version": "video_tenyuan_prompt_schema_v1.2",
  "video_mode": "single_character_narrative",
  "cast": {"character_id": "<本轮唯一角色ID>", "on_screen_character_count_max": 1, "other_characters_allowed": false, "duplicate_instance_allowed": false},
  "skills_pipeline": {
    "version": "H3动画四技能执行链_v1.0",
    "steps": ["I2V_motion", "four_component_scene", "clarity_and_conflict_audio", "negative_and_sampling"],
    "conflicts_resolved": []
  },
  "audio_design": {
    "ambient_soundscape": "实际场景环境和本轮肢体/物件动作对应的轻量声源",
    "emotional_sound_cue": "与一个情绪转折同步的非歌词声音或乐器质地",
    "audio_role": "supports event and emotional change; not music-video editing",
    "onset_event": "真实可见动作触发点，不强迫剪辑按节拍"
  },
  "sampling_plan": {
    "per_prompt_run_count": 2,
    "clips": [
      {"clip_id":"A_15s","runs":[{"run_id":"run_A","seed":null,"status":"queued_for_workbuddy_validation"},{"run_id":"run_B","seed":null,"status":"queued_for_workbuddy_validation"}]},
      {"clip_id":"B_15s","runs":[{"run_id":"run_A","seed":null,"status":"queued_for_workbuddy_validation"},{"run_id":"run_B","seed":null,"status":"queued_for_workbuddy_validation"}]}
    ],
    "prompt_identical_within_clip": true,
    "same_character_scene_and_parameters": true,
    "seed_policy": "Work writes actual distinct seeds ONLY when supported; otherwise independent reruns with seed=null and separate actual task IDs.",
    "selection_status": "not_evaluated_by_b_end"
  },
  "negative_constraints": ["no second human figure","no duplicate or mirrored character","no split-screen or character-sheet output","no extra limbs","no face/costume redesign","no invented props","no text or watermark"],
  "asset_status": {"image_validation": "pending_image_validation", "render_status": "not_rendered_by_b_end"}
}
```

上述仅为结构示例，实际每段声音要匹配各自场景/动作，`clips` 两段都要独立填写。若 Work 不支持直接生成音轨，音频字段属于音效设计与后期交接，不可宣称H3已经生成声音。

## H3 MD 顺序

角色/参考图Picture映射（四宫格同一人）→起始画面与限制→具体可见动作→环境结果→必要镜头和画面/光照 → ambience/emotional cue的时点 → 适用的负面约束 → 交接两抽元数据。每段 **同一 prompt 不为 run_A/run_B 改字**，两抽使用相同参考资产及设置。B段接续A段通过Work选择的末帧，待Work实际选择时才填真实依赖；不能虚构同一连续生成已成功。

## Work 验证 MD 增加

`prompt_hash`（若未计算写null）/ `clip_id` / `run_A` / `run_B` / 实际seed可用性/真实执行task_id/渲染结果与验收状态、A段选片到B段续接说明。Work 不需要向 B端回传验证才可执行，但未有实测凭据不得将B端文本任务标为渲染成功。
