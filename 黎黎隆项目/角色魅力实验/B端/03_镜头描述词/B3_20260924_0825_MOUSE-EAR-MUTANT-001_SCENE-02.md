# B3 镜头描述词｜2026-09-24 08:25 CST

## 0. 可核实输入与闸门
- B1：`logs/B1_素材索引_20260924_0605.md`，blob `fc5adc48d021ac46a665986f9264a4badce7982f`。角色池基线 v1.5，场景池 v1 / 13图；鼠耳少女仍 `pending_image_validation`。
- B2：`02_十元动态链研究/B2_20260924_0715_MOUSE-EAR-MUTANT-001_SCENE-02.md`，blob `e2fe7938e07b49ea9930c18ef8a643b617ea31fe`。
- Character：`MOUSE-EAR-MUTANT-001`，只允许文本预研，不声称角色图已完成绑定或可渲染。
- Scene：`SCENE-02`，可核实语义仅为森林湖泊、暖天空/冷湖面双色主导、身体路线与环境反光对照。
- production_status：`text_ready_image_binding_pending`。
- `needs_environment_inference=true`：水面轻微扰动、倒影短暂错位及新增机位均须在 Picture 2 真图绑定后验证。

## 1. 动态链分析字段（不进入 H3 正文）
```json
{
  "primary":"N8",
  "secondary":"NZ7",
  "activated":["XZ4->6->4","Z5->7"],
  "chain":[
    "N8 稳定沿岸移动",
    "XZ4->6 克 N8->6：倒影短暂错位触发后撤",
    "Z5->7 补 N6->7：耳先转向，身体保持距离，侧移验证",
    "Z7 约束 XZ6->4：主动第二次小侧步，把不可预测变成反馈",
    "N7 + Z7 + NZ7：继续沿岸前行，不以逃离收束"
  ],
  "hypothesis_status":"pending_test"
}
```

## 2. 角色魅力事件
题名：**倒影先动了吗？**

魅力不来自突然勇敢，而来自她保留警觉和撤退余地，却把警觉转成两次小幅、可撤回的主动测试。核心识别动作固定为：**鼠耳先转，身体后动**。

## 3. 共同镜头约束
- 画幅：9:16 vertical。
- 时长：15 s / prompt。
- Picture 1：只负责鼠耳少女身份、比例、服装、鼠耳结构；禁止重设计、复制、第二角色。
- Picture 2：只锁森林湖泊身份、暖天空/冷湖面对照、既有空间和画风，不锁死景别/机位。
- STYLE：清晰二维手绘形体、可见粗细变化线条、轻薄晕染、柔和漫射光；以真实参考图画风为最高优先级，不强制覆盖其色卡。
- 不新增桥、码头、石头、树根、建筑、道具。
- 多景别服务事件因果，不按节拍做纯 MV montage。

## 4. Prompt A｜选择瞬间优先
### 镜头参数
1. 0–3.0s｜大远景/中远景，静稳轻跟：少女沿岸缓慢前行，人物小，暖天空与冷湖面建立空间。
2. 3.0–6.0s｜中景三分之二侧面，人物与倒影同框：水面轻微扰动，倒影短暂错位；她立刻停住并后撤半步。
3. 6.0–9.5s｜近中景，几乎固定：停顿；鼠耳先转向湖面，身体仍不靠近；随后侧移一小步。
4. 9.5–12.5s｜稍低中全景，极短柔和横移：她主动做第二次小侧步，观察倒影同步，动作仍可撤回。
5. 12.5–15s｜大远景，慢慢放开空间：她恢复沿岸前行，湖面趋于平静。

### H3 executable prompt
```text
2D hand-drawn cinematic character sequence, 15 seconds, vertical 9:16.

STYLE: Preserve the exact drawing language of the supplied references. Clear readable 2D shapes, visible variable-weight hand-drawn lines, thin restrained watercolor-like shading where consistent with the references, soft diffuse light, coherent foreground-to-background depth, and no glossy 3D rendering. Keep the character and environment visually unified across every camera distance.

CHARACTER (Picture 1): Keep the exact identity of the mouse-ear mutant girl shown in Picture 1: the established face, short white hair, mouse-ear structure, small body proportion, wide short robe, dark edge blocks, crossbody strap and side bag. Do not redesign her. Only one physical instance of her exists in the scene.

ENVIRONMENT (Picture 2): Use Picture 2 only as the identity and art reference for the same forest-lake location. Preserve the warm sky against the cool lake, the existing forest-lake atmosphere, spatial continuity and negative-space logic. Picture 2 does not lock one camera angle. Do not invent bridges, docks, buildings, stones, roots or unrelated props.

CAMERA AND ACTION: Begin with a quiet wide-to-medium-wide view. The small girl walks slowly along the lakeshore while keeping a comfortable distance from the water. Keep her reflection readable in the cool lake surface. Move into a medium three-quarter side view that keeps both her body and reflection visible in the same frame. A subtle ripple crosses the water and the reflection appears briefly offset. She stops immediately and takes only half a step backward.

Hold the pause instead of cutting away. Her mouse ears turn toward the lake first while the rest of her body stays still and keeps the same safe distance. Only after watching does she make one small sideways step, checking whether the reflection follows. The camera remains restrained and readable.

As the reflection settles, move to a slightly lower medium-full view with a very short gentle lateral move. She deliberately makes a second small sideways step, almost playfully testing the reflection again. The movement is small, controlled and easy to reverse; she never suddenly approaches the water.

End by opening back into a wide shot as she resumes walking along the same lakeshore rather than fleeing from it. The lake becomes relatively calm again. Preserve the same direction of travel and continuous shoreline relationship throughout.

NEGATIVE: no second character, no clone, no split-screen character sheet, no new clothing, wings, weapons or body structure, no unrelated fantasy redesign, no bridge, dock, architecture or invented prop, no glossy 3D render, no hard digital edges, no text, subtitle, logo or watermark.
```

### audio_design
```yaml
ambient_soundscape: "soft lakeside wind, faint leaf movement, restrained footsteps, cloth and bag rustle, one subtle water ripple, quiet natural spatial reverb"
emotional_sound_cue: "very sparse suspended tonal bed that thins during the pause and gently resolves after the second test step; no lyrics and no dominant beat"
audio_role: "Audio supports action readability, hesitation and emotional transition only; it must not turn the sequence into beat-driven MV editing."
```

## 5. Prompt B｜识别动作与因果同框优先
### 镜头参数
1. 0–4s｜中远景侧面，缓慢跟拍：人物、路线、湖面倒影持续同框。
2. 4–7s｜中景保持同框，不切反应特写：扰动→倒影错位→停步→半步后撤连续发生。
3. 7–11s｜近中景轻推：鼠耳先转；身体延迟后只做侧移，不靠近水面。
4. 11–13s｜中全景短横移：第二次主动侧移，与倒影同步成为可见反馈。
5. 13–15s｜中远景跟回原行进方向：她继续走，保留安全距离。

### H3 executable prompt
```text
2D hand-drawn cinematic character sequence, 15 seconds, vertical 9:16.

Preserve the exact character identity from Picture 1 and the exact forest-lake visual identity from Picture 2. Maintain the original drawing style, palette logic and spatial continuity. Only one mouse-ear girl is physically present.

Start in a medium-wide side view and gently track with the girl as she walks beside the lake. Keep her body, her direction of travel and her reflection visible together so the spatial cause is clear. The warm sky and cool water remain the dominant environmental contrast.

Without changing location, hold a medium view when a small ripple disturbs the lake. Her reflection appears briefly misaligned. Show the disturbance, the reflection and her response in the same continuous visual relationship: she stops, then shifts only half a step backward.

Do not immediately cut to a facial close-up. Let the mouse ears react first. They turn toward the lake while her torso and feet remain still. After a short delay, use a gentle close-medium push as she makes one restrained sideways step while maintaining her distance from the water. She watches whether the reflection follows.

Shift into a medium-full view with a short lateral camera move as she intentionally repeats the same small sideways test once more. The reflection now follows coherently. Her posture loosens only slightly; she remains cautious rather than suddenly fearless.

Finish in a medium-wide tracking view as she continues in the original walking direction along the lakeshore. She does not escape from the lake and does not move closer to it. Keep the environment continuous and quiet.

No additional person or creature, no duplicate girl, no invented structures or props, no bridge or dock, no redesign, no glossy 3D look, no text, subtitle, logo or watermark.
```

### audio_design
```yaml
ambient_soundscape: "quiet wind over the lake, distant leaves, soft footsteps, fabric movement, one localized ripple and faint water settling"
emotional_sound_cue: "minimal held tones with a brief tension swell at the reflection mismatch and a small release after the second controlled step; no strong rhythm"
audio_role: "Audio reinforces the physical event and emotional hesitation; picture causality controls the edit, not musical beats, so this is not a pure MV sequence."
```

## 6. 双抽样清单
```json
[
  {"prompt_id":"B3-0825-A","run":"run_A","seed":null,"task_id":null,"status":"pending_image_binding"},
  {"prompt_id":"B3-0825-A","run":"run_B","seed":null,"task_id":null,"status":"pending_image_binding"},
  {"prompt_id":"B3-0825-B","run":"run_A","seed":null,"task_id":null,"status":"pending_image_binding"},
  {"prompt_id":"B3-0825-B","run":"run_B","seed":null,"task_id":null,"status":"pending_image_binding"}
]
```
同一 prompt 的 A/B 抽样必须使用完全相同正文和参考图；只有执行端真实返回时才写 seed/task_id。

## 7. C端交接
- 交接状态：`text_ready_image_binding_pending`。
- Picture 1 必须先绑定并验证 `MOUSE-EAR-MUTANT-001` 的真实角色参考；当前角色池明确 `h3_render_eligible=false`。
- Picture 2 必须绑定 SCENE-02 真图并检查湖面反光、可见岸线和拟用机位；若真图不支持某角度，收缩镜头，不重设计场景。
- 水面扰动/倒影错位是本轮事件变量，保持 `needs_environment_inference=true`。
- 提交 H3 前检查最终 workflow prompt 与全部 LoadImage 节点，避免母版旧词/旧图覆盖本轮输入。
- 实际运行后回填四次抽样的真实 seed、task_id、输出 ID；未运行不得伪造。

## 8. B4建议盲审变量
优先比较 A/B 哪个更清楚证明“耳先转、身体后动”和“两次小幅可撤回测试”；角色身份保持、空间连续性、倒影因果可读性分别评分，不把镜头优劣误记为动态链理论胜负。