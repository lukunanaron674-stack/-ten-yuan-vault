# B3 镜头描述词｜2026-09-25 13:05 CST｜MOUSE-EAR-MUTANT-001 × SCENE-01

## 0. 可核实上游
- 最新 B1：`B1素材索引/B1_ASSET_AUDIT_20260925_1300_R61.md`，blob `3fb94daafa3f8cc6ae1d043f0bab875be4f7a02f`。
- 最新 B2：`02_十元动态链研究/B2_20260925_1216_MOUSE-EAR-MUTANT-001_SCENE-01.md`，blob `f17316913fe2f88b013b80f805910d95232949df`。
- B2 source B1 为 R60；本轮同时读取 R61 作为更新后的仓库素材状态。
- MOUSE-EAR-MUTANT-001：远端索引存在，但 Picture 1 真图 binding / same-character / H3 validation 仍 pending，不能宣称成品输入已验证。
- SCENE-01：registered blob `fcbbd771567ad65327d18248466f24b0f4339638`；actual binding / dimensions / geometry visual validation 仍 pending。
- LLL-MAIN-001：继续 `NOT_AVAILABLE_AS_FINISHED_CHARACTER`，不进入本轮。
- H3：本轮只生成文本工单，不宣称已执行。

## 1. 动态链分析字段（禁止进入视频模型正文）
- 主：X8；次：NZ7；变量：N6 / Z5 / XN4。
- 链：`N7 → NZ8克N5 → X9补NZ7 → X9克Z3 → N8补X8 → NZ7`
- 事件：角色先真实响应环境刺激并按住既有侧包带建立保护；刺激没有升级后，她主动松开已经建立的保护，恢复自然移动，不重复抓紧、不向刺激方向扩大行动。
- 状态：`experimental_hypothesis_not_frozen`。

## 2. 本轮纠偏：禁止“会轻微晃动的插画”
B2 内嵌旧规格是 16:9、固定 eye-level waist-up medium、同一连续镜头。它与当前 B3 正式合同（9:16、多景别、明确动态）冲突。本轮以 B3 合同覆盖画幅与镜头设计，但保留 B2 的事件因果，不伪称仍是“固定镜头控制实验”。

### 强制动态验收
1. 9:16。
2. 10–11s 内必须出现至少 3 个肉眼可区分的景别/构图阶段。
3. 至少一次角色整体位移或明显步行动作，不能只动耳、眼、手指。
4. 至少一次可辨认镜头运动：跟拍 / 推近 / 横移 / 小弧线三选一以上。
5. 动作必须形成“移动→刺激→保护→确认无升级→主动解除→继续移动”的完整事件。
6. 若成片从头到尾近似同一中景、角色原地站立或只有局部微动，直接判 B3 镜头失败，不因画质漂亮放行。

## 3. Prompt A｜四段景别，明确切镜
### 镜头参数
- 画幅：9:16
- 时长：10–11s
- 风格：保持 Picture 1 / Picture 2 已有二维手绘视觉身份；不重设计
- 结构：远/全景 → 中全景跟拍 → 近景 → 中景退回
- 运动：前向/侧向跟拍 + 短推近 + 退回重构图
- 空间轴：角色原移动方向固定；刺激来源保持同侧；切镜不翻轴

### 时间轴
- 0.0–2.3s：全身较小，角色沿既定方向真实走过空间，背景产生明显视差。
- 2.3–4.4s：切中全景侧前方跟拍；刺激出现，耳→眼→头依次响应，步伐缩短但不停死。
- 4.4–6.5s：切近景，手明确按住既有侧包带；镜头短促推近，装备因行走产生惯性。
- 6.5–8.3s：刺激没有升级；手指先松，手掌离开包带，头部回正。
- 8.3–10.8s：切回中全景并略拉开，角色恢复完整步幅继续穿过空间，侧包自然摆动，不再抓紧。

### H3 Prompt A
Vertical 9:16, 10–11 second 2D hand-drawn cinematic character sequence with clearly different shot scales and real spatial movement.

Preserve the established mouse-eared mutant girl from Picture 1 exactly. Preserve her identity, face, hair, mouse ears, clothing silhouette, existing side bag and carried items. Do not redesign her. Preserve Picture 2 as the established environment; do not invent unsupported architecture, creatures or props.

SHOT 1, wide full-body: show her relatively small in frame, already walking through the established space. She must visibly travel forward across the environment, with readable background parallax and a clear walking rhythm.

SHOT 2, cut to a medium-full side-front tracking view. A single small harmless environmental cue catches her attention from one consistent side. Her ears react first, then her eyes, then a restrained head turn. She shortens one step but keeps moving.

SHOT 3, cut closer to her upper body, hand and existing side-bag strap. While still carrying forward momentum, her hand reaches the existing strap and presses it securely against her body. Use a short deliberate push-in. Her clothing and bag show believable delayed motion from walking. Hold the protective action long enough to read.

Nothing approaches. The cue does not become stronger and no new warning appears. She confirms this without freezing into a pose.

Her fingers deliberately loosen first, then her palm leaves the strap. Her head returns toward the travel direction.

SHOT 4, cut back to a medium-full moving view and open the framing slightly. She restores a full natural stride and continues through the space. The side bag resumes natural swing. She does not grab it again and does not turn toward the cue.

Make the visual rhythm obvious: travel → notice → protect → reassess → release → travel. Use shot-scale contrast, tracking, a brief push-in, readable parallax, full-body locomotion and equipment inertia. The sequence must not look like one static illustration with tiny facial or ear motion.

No second physical character, no invented creature, no new prop, no danger escalation, no route reversal, no repeated grabbing, no character redesign, no text, subtitle, logo or glossy 3D rendering.

ambient_soundscape: soft environmental room tone from the bound scene, light footsteps, cloth movement, side-bag strap tension and release; no invented alarm or creature sound.
emotional_sound_cue: a restrained low tonal accent at the first notice, slight tension during the protective hold, then a gentle release as the hand lets go; no lyrics and no beat-driven editing.
audio_role: audio supports action timing, body movement and emotional readability only; it does not dictate cuts and must not turn the sequence into a pure music-video montage.

## 4. Prompt B｜连续镜头，但机位与景别必须显著变化
### 镜头参数
- 画幅：9:16
- 时长：10–11s
- 结构：连续运动镜头；远中景→中全景→中近景→重新拉开
- 运动：跟拍 + 小弧线绕侧 + 推近 + 后撤
- 目的：测试不依赖硬切时 H3 是否仍能产生明显景别与动态

### H3 Prompt B
Vertical 9:16, 10–11 second 2D hand-drawn cinematic continuous moving shot. Preserve the established mouse-eared mutant girl from Picture 1 exactly and preserve Picture 2 as the established environment. Do not redesign either.

Begin with the girl smaller in a medium-wide full-body composition, walking decisively through the established space. The camera tracks with her and the background must show clear parallax.

As a single harmless environmental cue catches her attention, the camera moves on a small side-front arc and closes to a medium-full view. Her ears react first, eyes second, head third. Her feet continue carrying her forward so the body is never reduced to a stationary portrait.

While she keeps moving, the camera pushes closer to include her face, upper torso, hand and existing side-bag strap. Her hand presses the strap securely against her body. Her bag and clothing settle with believable delayed inertia.

The cue does not escalate. Without stopping the scene, she decides the extra tension is unnecessary. Her fingers loosen, her palm leaves the strap, her head returns forward.

The camera then eases backward and slightly sideways, restoring a medium-full composition as she lengthens her stride and continues through the environment. End with visible forward travel, natural bag swing and more open space around her body.

The camera path itself must create obvious scale change: smaller moving figure → medium-full response → close protective action → opened moving composition. Do not remain at one waist-up distance. Do not let the character stand still for most of the clip.

No second physical character, invented creature, new prop, danger escalation, route reversal, repeated grabbing, redesign, text, subtitle, logo or glossy 3D rendering.

ambient_soundscape: scene-consistent ambience, rhythmic but natural footsteps, cloth and bag movement, one clear strap-contact sound and a soft release; no alarm.
emotional_sound_cue: subtle tension rise during the camera approach and protective hold, then a quiet release as the framing opens; no lyrics and no beat-synced cutting.
audio_role: audio reinforces locomotion, protective action and emotional release; it remains subordinate to the visual event and is not used as pure MV structure.

## 5. 双抽样
| prompt | run | seed | task_id | output_id | status |
|---|---|---|---|---|---|
| A | run_A | null | null | null | blocked_pending_picture_validation |
| A | run_B | null | null | null | blocked_pending_picture_validation |
| B | run_A | null | null | null | blocked_pending_picture_validation |
| B | run_B | null | null | null | blocked_pending_picture_validation |

不得复制 R36 或任何历史 seed/task/output。

## 6. C端交接
1. 先绑定并验证 MOUSE Picture 1：path / SHA-256 / dimensions / same-character / H3 layout。
2. 绑定 SCENE-01 Picture 2：path / SHA-256 / dimensions / scene identity / geometry。
3. 只允许从 Picture 2 真图选择“环境刺激”的具体来源；若真图不支持，回退 B2/B3，不凭空添加机关、动物或人物。
4. 通过素材闸门后执行 A/run_A、A/run_B、B/run_A、B/run_B。
5. 每次保存真实 seed / task_id / output_id / output hash / fps / frames，并抽取首中尾帧。
6. B4 新增强制审查：shot_scale_change、character_translation、camera_motion、parallax、event_completion。任一“全片近似固定中景 + 原地微动”结果直接 FAIL。
7. A 与 B 对照目的：A 检验 H3 是否能执行明确硬切多景别；B 检验连续镜头能否通过机位移动形成显著景别变化。
8. 音频只辅助动作和情绪，不用节拍替代画面事件。

## 7. 状态
- B3 text：complete
- GitHub：只有 create_file 返回 commit SHA 后记 uploaded
- Picture validation：pending
- H3：not executed
- seed/task/output：无真实返回，全部 null
