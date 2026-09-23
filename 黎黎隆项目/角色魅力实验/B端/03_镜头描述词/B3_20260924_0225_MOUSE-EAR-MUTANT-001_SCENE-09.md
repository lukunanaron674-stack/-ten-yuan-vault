# B3 镜头描述词｜MOUSE-EAR-MUTANT-001 × SCENE-09｜2026-09-24 02:25 CST

## 0. 输入证据与闸门
- 最新可核实 B1：`logs/B1_素材索引_20260923_2206.md`，角色池 v1.5；未发现更新的独立 B1。
- 最新可核实 B2：`02_十元动态链研究/B2_20260924_0115_MOUSE-EAR-MUTANT-001_SCENE-09.md`，commit/ref `1dc712a05cfd1140be8b1147b09dee0ac23bfbbb`。
- 角色：`MOUSE-EAR-MUTANT-001`。全身原图与半身动态四宫格仍 `github_image_upload=false`，生产闸门=`pending_image_validation`。本轮只生成可执行文本与 C 端排队工单，不宣称已经可渲染。
- 场景：`SCENE-09`，`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-12_异种村庄_五色组合.png`，blob `709a66e1b0a939a6e8443a278f3c12857eb342f8`。

## 1. 独立动态链分析字段（禁止直接送入视频模型）
- 主：N，次：NZ，行动变量：Z，压力：XZ。
- 链：`N8+NZ7 → XZ6克N5 → NZ7补N7 → NZ7生Z7 → N7+NZ8+Z7`。
- 事件：少女与小生命各自保持安全距离 → 环境突发响动，小生命冲进她的遮蔽区 → 她本能退缩 → 停止驱赶 → 主动走到更暴露位置，把遮蔽让给对方 → 回头确认后保持克制距离。
- 角色魅力检验：必须看得出“主动让位”，不能拍成“被挤出去”。耳朵反应必须先于身体行动，保留敏感性而不是突然变成无畏角色。

## 2. H3 Prompt A｜选择瞬间版
### 镜头参数
- 9:16 vertical, 15s, 2D hand-drawn cinematic animation
- 0–3s quiet medium-wide；3–6s compressed medium；6–10s restrained low three-quarter；10–13s lateral medium tracking；13–15s quiet wide ending
- 单一连续事件；不新增第二个人形角色；小生命仅为无害、低细节关系对象。

### final_video_prompt
```text
2D hand-drawn cinematic character sequence, vertical 9:16, 15 seconds. Preserve the exact identity of the small mouse-eared mutant girl: short white hair with eye-covering fringe and a small top curl, large translucent pale-purple mouse-ear structures connected to both sides of her head, small slender body, wide pale short robe with dark collar, cuffs and hem blocks, dark shorts, crossbody strap, side bag, pale socks and oversized dark shoes. Do not redesign her.

Use the established five-color mutant village as the same recognizable location. Begin in a quiet medium-wide shot: the girl stays partly behind a village structure while a small harmless local creature rests across a clear gap, with generous negative space between them. A sudden distant mechanical movement and short environmental clatter startles the creature and it darts into the girl's sheltered space. Cut closer. Her translucent ears fold and turn first, her shoulders tighten, and she takes half a step back.

From a restrained low three-quarter angle, show her foot beginning to retreat. She looks down at the frightened creature. The retreat stops. Her hand lowers instead of pushing it away. Hold this hesitation long enough to read as a choice.

Her ears then turn toward the exposed side of the path before the rest of her body follows. Track laterally as she deliberately steps out from the shelter, leaving the protected position to the smaller creature. Keep the movement small and unmistakably voluntary.

End in a quiet wide shot. The girl stands in the more open part of the village, cautious but steady. The creature remains under cover behind her. She looks back once to confirm it has settled, then faces forward again without approaching or touching it. Preserve clear silhouettes, restrained acting, stable character proportions and the established environment. No weapon, tail, horns, wings, armor, new clothing, duplicate girl, additional humanoid character, text, subtitles, logo, glossy 3D rendering or hard digital edges.
```

### audio_design
- `ambient_soundscape`: soft village air, distant mechanical movement, one brief dry clatter, cloth rustle, tiny footstep, restrained environmental reverb.
- `emotional_sound_cue`: sparse suspended low tone entering only during the hesitation, resolving softly after she steps into the open; no lyrics, no dominant beat.
- `audio_role`: support action readability and emotional choice only; do not drive music-video editing or replace visual causality.

## 3. H3 Prompt B｜空间关系版
### 镜头参数
- 9:16 vertical, 15s
- 更少切镜：0–5s wide locked composition；5–9s slow push-in；9–13s side-follow；13–15s wide hold
- 核心变量：用遮蔽区/开放区的位置交换证明关系变化。

### final_video_prompt
```text
Vertical 9:16, 15-second 2D hand-drawn cinematic animation. Keep the exact established mouse-eared mutant girl design and the same five-color mutant village location. Do not redesign the character or simplify away her translucent pale-purple ear structures, white fringe, pale short robe, crossbody strap, side bag, dark shorts, pale socks and oversized dark shoes.

Open on a stable wide composition with the girl partly protected by a village structure on one side and a small harmless creature on the other, separated by visible empty space. Let the calm spatial relationship register before anything changes. A distant village mechanism shifts with a short clatter. The creature panics and runs into the girl's protected area, collapsing the empty space between them.

Slowly push closer. The girl's ears react before her body: they press back and rotate toward the disturbance. She recoils half a step, then notices the creature trembling in the safer position. Her next backward step starts but stops. She does not chase it away.

Without rushing, her ears turn toward the open path. Her body follows. Use a restrained side-follow shot as she crosses the boundary from shelter into exposure by her own choice. Keep the creature under cover and keep both figures spatially readable.

Finish by returning to a wider composition: the protected and exposed positions have exchanged. The creature is safe beneath the structure; the girl stands outside, still visibly sensitive and alert. She gives one brief backward glance to confirm the creature is calm, then maintains distance. No cuddling, no sudden heroic pose, no new threat character, no extra humanoid, no redesign, no text or logo, no glossy 3D look.
```

### audio_design
- `ambient_soundscape`: low village ambience, soft wind through structures, distant mechanism shift, brief clatter, shoe contact and fabric movement.
- `emotional_sound_cue`: nearly inaudible sustained harmonic tension during the spatial compression, easing after the voluntary position exchange; no lyrics and no strong percussion.
- `audio_role`: reinforce the cause, hesitation and spatial choice; audio remains subordinate to behavior and must not turn the sequence into beat-synced MV cutting.

## 4. 双抽样计划
| prompt | run | seed | 唯一测试变量 |
|---|---|---|---|
| A | run_A | null | 主动让位是否清楚 |
| A | run_B | null | 同提示词复抽，检查选择动作稳定性 |
| B | run_A | null | 耳先于身体是否稳定 |
| B | run_B | null | 同提示词复抽，检查空间交换可读性 |

seed 仅由真实执行端返回后写入，不预造。

## 5. C 端交接
- `status`: `text_ready_image_binding_pending`
- `character_ref_required`: 全身身份图 + 9:16 半身动态四宫格，两者必须绑定真实原图/附件ID/SHA。
- `scene_ref`: SCENE-09 上述 GitHub 场景路径/blob。
- `render_count_after_gate_open`: 4（Prompt A×2 + Prompt B×2）。
- 提交 ComfyUI 前检查最终 prompt 与全部 LoadImage 节点，禁止遗留母版旧词/旧角色图。
- H3 结果回传后，B4 对主动/被迫让位、耳先/身体先、克制距离/立即亲昵做 PASS/FAIL/AMBIGUOUS 盲审。

## 6. 当前结论
文本工单完成；由于角色图验证闸门未打开，本轮没有运行 H3，也没有生成 seed 或视频结果。