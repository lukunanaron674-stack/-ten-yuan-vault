# B3 镜头描述词｜MOUSE-EAR-MUTANT-001 × SCENE-02｜2026-09-25 00:25 CST

## 0. 可核实输入与阻塞
- 最新仓库级 B1：`B1素材索引/B1_ASSET_AUDIT_20260925_0003_R48.md`，commit `ecddf3c799ebe4c375522f46f785545a48ea71f8`。它核实到 R47 的鼠耳少女候选图有 path/hash/941×1672，但 same-character 与 H3 四宫格均未视觉验证；SCENE-08 也未完成实际绑定。
- 最新 B2：`02_十元动态链研究/B2_20260925_0015_MOUSE-EAR-MUTANT-001_SCENE-02.md`，commit `eed30ace1d63ea88b75cfafbc9e86f4843767050`。
- 注意：最新 B2 自己引用的上游 B1 仍是 `logs/B1_素材索引_20260924_0905.md`，而不是 00:03 R48；因此本轮只把 R48 当“更新的仓库素材状态”，不伪称 B2 已基于 R48 重算。
- B2 对本组合的闸门：Picture 1=`pending_image_validation`；Picture 2 blob=`249b3a0f00aa894772d1049e800f4813723184df`；geometry=`pending_work_visual_check`。
- 黎黎隆主角仍未完成，不作为成品生产输入。

## 1. 动态链分析（仅研究字段，不进入 H3 正文）
- 主/次：N8 / NZ7；变量 Z5、XZ4、X并Z5。
- 链：`N8 → X并Z5克N6 → NZ9克X并Z3 → XZ4补Z6 → N9克Z3 → N9+NZ7`。
- 事件：稳定沿岸行走 → 水面短扰动侵入路线关系 → 主动横移半步让位 → 扰动无反馈消失 → 出现再次确认的机会 → 她主动不追加确认 → 恢复原节奏。
- 魅力证据：不是“没发现所以走掉”，而是明确给她 0.5–1.0 秒再次调查的机会，她选择不用这个机会。耳朵短暂关注后放松，身体不回头。

## 2. 镜头方案 A｜选择窗口清晰
- 画幅：9:16 竖屏。
- 时长：10–11s。
- 0.0–2.2s 中远景，轻微侧向跟拍：少女沿湖岸稳定前进，人物保持可读全身轮廓。
- 2.2–4.0s 中全景：水面只出现一次小扰动；鼠耳先反应，身体随后横移半步。
- 4.0–6.2s 中景，镜头近乎固定：扰动自然消失，留出约0.8s“可以再确认”的空白时间。
- 6.2–8.0s 近中景：耳朵短暂保持朝向水面，随后放松；头和躯干不回转。
- 8.0–10.8s 中远景轻微后拉：恢复原步速继续同一方向，事件留在画面后部。
- 运动限制：不绕拍、不突然推脸、不新增第二角色，不让水面出现实体。

### H3 prompt A
```text
Vertical 9:16, 2D hand-drawn cinematic character animation, 10–11 seconds. Preserve the mouse-eared mutant girl from Picture 1 exactly: same identity, face, hair, mouse ears, clothing silhouette, proportions and restrained body language. Use Picture 2 only for the established forest-lakeshore environmental identity and its existing color relationship; do not invent structures not visible in the reference.

Start in a medium-wide vertical composition with a gentle lateral follow as the girl walks at a calm, steady pace beside the visible water. Keep her full-body silhouette readable. A single small harmless disturbance spreads across the nearby water beside her intended path. Her mouse ears react first; her body follows a fraction later. Without panic, she shifts only half a step sideways, leaving a little extra space.

The water disturbance fades completely. Nothing appears and nothing answers her. Hold the camera nearly still for a clear brief decision window, about 0.8 seconds, where she visibly has time to stop, turn back or investigate. Her ears remain attentive for a fraction of a second and then relax. Her head and torso do not turn back. She does not approach the water and does not wait for an explanation.

She restores the exact calm walking rhythm from the opening and continues in the same overall direction. Finish by easing back to a wider vertical view, leaving the vanished disturbance behind her. The character appeal comes from a small considerate adjustment followed by the confidence to end the response without recognition, certainty or reward.

Restrained hand-drawn motion, clean readable silhouette, subtle mouse-ear acting, precise half-step, quiet pacing, soft environmental motion, generous negative space. No second character, no creature from the water, no magical reveal, no reward, no invented bridge, dock, building, rock or unsupported prop, no character redesign, no text, no subtitles, no logo, no glossy 3D look.
```

## 3. 镜头方案 B｜空间关系优先
- 画幅/时长：9:16，10–11s。
- 核心差异：尽量保持人物、水面扰动、原路线同框，减少心理特写，让“让位后不索取反馈”由空间连续性证明。
- 0.0–3.0s 高一点的中远景缓慢前移；3.0–5.0s 同框完成扰动与半步让位；5.0–7.0s 固定构图保留选择窗口；7.0–10.8s 人物继续前行，镜头停止追随，让她自然离开扰动区域。

### H3 prompt B
```text
Vertical 9:16, restrained 2D hand-drawn cinematic sequence, 10–11 seconds. Preserve the established mouse-eared mutant girl from Picture 1 without redesign. Preserve Picture 2 as the forest-lakeshore environment and existing color identity only.

Favor one continuous spatial relationship between the girl, her walking line and the visible water. Begin slightly elevated in a medium-wide shot and move forward very slowly while she walks with a steady, unhurried rhythm. A small water disturbance briefly occupies the area beside her path. Her mouse ears turn first. She shifts half a step sideways, calmly giving the disturbance more room while keeping her overall travel direction.

Keep the girl and the fading disturbance in the same composition. The disturbance disappears by itself and gives her no answer, reward or new information. Hold the composition long enough that another check is clearly possible. She chooses not to use that opportunity: no turn back, no approach, no extra pause. Her ears relax and her original walking rhythm returns.

For the ending, stop following her and let her continue naturally through the vertical frame while the now-calm water remains behind. Emphasize quiet consideration, self-control and the ability to leave an unanswered event finished.

Clean 2D shapes, readable proportions, subtle ear motion, minimal camera movement, natural cloth response, soft water motion. No additional character, no creature, no supernatural explanation, no invented architecture or props, no dramatic fear reaction, no redesign, no typography, no logo, no 3D rendering.
```

## 4. 音频字段
```yaml
ambient_soundscape: "soft lakeshore wind, faint leaf movement, restrained footsteps, light cloth movement, one subtle water ripple event, natural open-air ambience"
emotional_sound_cue: "very sparse soft sustained tone entering only around the brief decision window, then fading as normal walking resumes; no beat-driven cutting"
audio_role: "Audio supports action readability, the brief decision window and restrained emotion only; it must not drive pure music-video editing or replace visual causality."
```

## 5. 双抽样
| prompt | run | seed | task_id | output_id | status |
|---|---|---|---|---|---|
| A | run_A | null | null | null | blocked_pending_picture_validation |
| A | run_B | null | null | null | blocked_pending_picture_validation |
| B | run_A | null | null | null | blocked_pending_picture_validation |
| B | run_B | null | null | null | blocked_pending_picture_validation |

## 6. C端交接
- Picture 1：必须先真实绑定并核实 path/SHA/尺寸、same-character、H3四宫格；当前不得宣称通过。
- Picture 2：绑定 SCENE-02 blob `249b3a0f00aa894772d1049e800f4813723184df` 对应素材后，视觉确认水面、岸线与可用负空间；不从 prompt 反推不存在的几何。
- workflow：9:16；目标10–11s；同一 prompt 做 run_A/run_B；只有执行端真实返回时才写 seed/task/output。
- 运行前检查最终 H3 prompt 与全部 LoadImage 节点，避免旧 prompt/旧图残留。
- 状态：`text_ready_image_binding_pending`。
