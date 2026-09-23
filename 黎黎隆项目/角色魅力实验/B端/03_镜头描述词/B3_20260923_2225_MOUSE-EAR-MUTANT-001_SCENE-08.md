# B3 镜头描述词｜2026-09-23 22:25｜MOUSE-EAR-MUTANT-001 × SCENE-08

## 0. 可核实输入

- B1：`logs/B1_素材索引_20260923_2206.md`，commit `0c56acd7f9e75374b98dbf51703dfe51278dbde7`。B1 已核对13/13正式场景路径与SHA；本角色全身身份图与半身动态四宫格仍为 `github_image_upload=false`，必须由 Work 绑定原图后才能渲染。
- B2：`02_十元动态链研究/B2_20260923_2215_MOUSE-EAR-MUTANT-001_SCENE-08.md`，blob `d182332d12847dc8ee8107327d72e4bd07233f98`，commit `9051efcdf3cd793cb6670efd7dbfdfcd289f3a1d`。
- 角色池：`lililong-b-character-pool/v1.5`。本轮唯一角色 `MOUSE-EAR-MUTANT-001`。
- 场景池：`GITHUB_13_SCENE_POOL_V1`。本轮 `SCENE-08`：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-10_异种村庄_双色主导.png`，blob `3f0a6664e66899a228a8513bfc70688c0a866908`。
- 本轮未直接视觉审核 SCENE-08 PNG，因此不发明门、桥、绳、NPC、动物、摊位或其他具体道具。
- 黎黎隆角色未完成，本轮不使用黎黎隆。

## 1. 动态链分析字段（只供研究，不进入 H3 prompt）

`N8 → NZ7 → Z5→7`。主验证关系：`NZ 生 Z`。起：谨慎收束；承：第一次场外轻响后只建立方向关系，不位移；转：同方向第二次轻响，耳朵先转，角色停顿后主动靠近一步；合：一步后停止，保留谨慎，但朝向与站位已经改变。

本轮镜头证据优先级：**鼠耳方向变化 > 头部/视线跟随 > 单步位移 > 末态停顿**。不靠第二角色、换装或战斗制造魅力。

## 2. 资产与 Picture 绑定

- Picture 1：`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`，`half_body_dynamic`，9:16，Library ID `libfile_36caaef442b08191b0acddf57f8d85e2`。作用：脸、白短发、半透明浅紫鼠耳、眼神、上半身动态。`github_image_upload=false`。
- Picture 2：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`，`full_body_identity`。作用：小体型、宽大浅色短袍、深色边块、斜挎带、侧包、腿脚比例。`github_image_upload=false`。
- Picture 3：SCENE-08 场景图，GitHub路径和blob如上，只作环境、构图、双色光线与空间参考，不覆盖角色。

**三张参考必须由 Work 实际绑定；Picture 1/2 是同一个人，不得把四宫格理解成多人。**

## 3. 镜头设计

### Clip A｜15s｜听见但不追

- 画幅：9:16。
- 景别：膝上三分之四中景，角色位于画面中下部，给鼠耳上方保留运动空间。
- 机位：固定略低于眼平，禁止环绕、推拉和突然切镜。
- 0–4s：角色安静站定，双手靠近身体，脚不移动；只有轻呼吸、发梢与袍袖极小自然摆动。
- 4–8s：画外同一侧出现第一次轻响；不显示声源。先只有一侧鼠耳小幅偏转，另一侧随后跟随，身体不动。
- 8–12s：双耳逐渐对准同一方向，眼睛随后移动，头部只抬起/转动很小角度。
- 12–15s：保持位置和距离，停一拍。结尾必须清楚读到“注意力已建立，但她没有追过去”。

### Clip B｜15s｜第二次声音后主动一步

- 续接：只能从 Work 实际选中的 Clip A 尾帧续接，当前 `selected_A_run=null`。
- 景别：先保持同一三分之四中景；真正迈步时只做非常轻微的跟随修正，不改变轴线，不突然变成大全景。
- 0–4s：保持 A 尾姿，耳朵和视线朝同一方向。
- 4–7s：同方向第二次轻响；耳朵比身体更快地再次锁定方向。
- 7–10s：角色停顿约一拍，重心先向前轻移，形成“可以退，但选择靠近”的可见犹豫。
- 10–13s：只向该方向迈一步，不能跑、跳或连续走；侧包与袍袖因一步产生一次滞后摆动。
- 13–15s：一步后立刻停住，身体仍收束，耳朵保持朝向；用站位和身体朝向变化结束。

## 4. H3 最终描述词（不含十元术语）

### A_15s

Picture 1 and Picture 2 show the same single white-haired mouse-ear mutant girl; Picture 3 is only the strange-village environment reference. Vertical 9:16, exactly one character on screen. Use a fixed three-quarter knee-up medium shot with enough empty space above her large translucent pale-purple ears. She stands quietly with her hands close to her body and both feet still. During the first four seconds, only subtle breathing, hair tips and loose tunic edges move gently. A faint nonverbal sound occurs off screen from one side, but no source or second character appears. One ear turns slightly toward the sound first, then the other ear follows while her body remains still. Her eyes follow next and her head turns only a few degrees. By the end she keeps the same position and distance, holding her attention toward that direction without approaching. Preserve exactly the same face, white short hair, translucent pale-purple mutated mouse ears, small body proportions, loose pale short tunic, dark trim, cross-body strap and side bag. No second person, no clone, no split screen, no character-sheet layout, no mirror duplicate, no rabbit ears, no tail, horns, wings, armor, weapon, text or watermark.

### B_15s

Continue only from the actually selected ending frame of Clip A, with the same single girl, same strange-village environment, same vertical 9:16 composition, same identity and lighting. She begins still, with both ears, eyes and head already oriented toward the off-screen direction. The same faint nonverbal sound occurs again from that direction; never reveal a person, creature or invented prop as its source. Her ears lock toward the direction before her body moves. She pauses briefly, shifts her weight forward as if deciding whether to retreat or approach, then deliberately takes exactly one small step toward the sound. Do not make her run, jump, fight or continue walking. Her loose sleeve, cross-body strap and side bag make one restrained delayed sway caused by that single step. She stops immediately after the step, still cautious, with her body position and facing direction clearly changed from the opening. Preserve exactly the same face, white short hair, translucent pale-purple mutated mouse ears, small proportions, loose pale short tunic, dark trim, strap and side bag. No second person, no clone, no split screen, no mirror duplicate, no character-sheet output, no rabbit-ear redesign, no extra limbs, no tail, horns, wings, armor, weapon, invented story prop, text or watermark.

## 5. 音频设计

### A_15s

```yaml
ambient_soundscape: >
  very light village wind, faint distant wood/structure creak without identifiable speaker,
  soft cloth movement; first off-screen cue is a tiny nonverbal dry tap or air resonance
emotional_sound_cue: >
  a restrained thin glass-like tone enters only when both ears settle toward the same direction,
  then fades before the final hold; no lyrics and no beat-driven editing
audio_role: >
  support the ear-first attention change and the cautious hold; not MV editing
onset_event: first faint off-screen sound at 4–8s
audio_output_status: post_sound_design_if_h3_node_has_no_audio
```

### B_15s

```yaml
ambient_soundscape: >
  same light village wind and distant structural ambience as Clip A;
  repeat the same nonverbal off-screen cue once, then one soft foot contact and restrained cloth/bag sway
emotional_sound_cue: >
  a short low-to-mid suspended tone begins during the hesitation and resolves softly on the single step;
  no lyrics, no strong beat, no montage cue
audio_role: >
  make the hesitation-to-choice readable without controlling the edit; not MV editing
onset_event: second off-screen sound at 4–7s, resolve on the one-step action at 10–13s
audio_output_status: post_sound_design_if_h3_node_has_no_audio
```

## 6. 双抽样计划

每个 clip 的 `run_A` 与 `run_B` 使用**完全相同 prompt、Picture绑定、9:16和其他参数**，只允许实际随机性/seed不同。

| clip | run | seed | status | actual_task_id |
|---|---|---|---|---|
| A_15s | run_A | null | queued_for_workbuddy_validation | null |
| A_15s | run_B | null | queued_for_workbuddy_validation | null |
| B_15s | run_A | null | blocked_until_A_selection | null |
| B_15s | run_B | null | blocked_until_A_selection | null |

若 Work/H3 接口支持显式 seed，执行后填真实 `seed_A/seed_B`；不支持则 seed 保持 null，用真实 task_id 区分两次独立生成。B段必须记录 `selected_A_run` 后再开始双抽。

## 7. Work / C端验收

1. 先找到并绑定 Picture 1/2 原图；两者任一缺失则 `pending_image_validation`，不得拿其他少女/澈/兔耳角色替代。
2. 核对 Picture 3 为 SCENE-08 对应GitHub场景图。
3. 角色始终只有一个实体；场外声音不生成第二人物/生物。
4. A段验证：耳先于眼/头，身体和脚不位移。
5. B段验证：第二次声音→耳先行→犹豫→只走一步→停止。
6. 比较每段 run_A/run_B：identity stability、ear timing、motion readability、camera stability、no duplicate character、scene consistency。
7. 未实际渲染前，本文件只代表可执行文本方案，不代表H3通过。

## 8. 状态

```yaml
b1_source: logs/B1_素材索引_20260923_2206.md
b2_source: 02_十元动态链研究/B2_20260923_2215_MOUSE-EAR-MUTANT-001_SCENE-08.md
character_id: MOUSE-EAR-MUTANT-001
scene_id: SCENE-08
aspect_ratio: 9:16
video_mode: single_character_narrative
identity_validation: pending_image_validation
render_status: not_rendered_by_b_end
seed_status: unknown_until_work_execution
c_handoff_ready: text_ready_image_binding_pending
```
