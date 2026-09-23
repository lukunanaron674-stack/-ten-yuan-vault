# B2 十元动态链｜MOUSE-EAR-MUTANT-001 × SCENE-11｜2026-09-24 04:15 CST

## 0. 可核实输入
- 最新 B1：`logs/B1_素材索引_20260924_0305.md`，blob `408bc3f28312b97f1db9678bb7a4626d4741e7e8`。
- 角色池：v1.5 @ `59810586b7b8ada9c9a263975a4769b3c4f8ca7a`。
- 场景池：v1 @ `26384b61a8ef8314cf8b5cee81934beed846c021`。
- 角色：`MOUSE-EAR-MUTANT-001`；身份分析 v1.1 blob `f38ba601045c6ae3b763983aaeee6a11987b9204`。角色图仍 `github_image_upload=false`、`h3_verification=pending_workbuddy_render`，因此本轮只做 B2/B3 文本结构，不宣称已可渲染。
- 场景：`SCENE-11`，`黎黎隆项目/04_场景/五色视觉系统/R4_色彩脚本/assets/R4-01_机械空港_起_安静生命.png`，blob `c87915a6d7232e6a485a8904d32b3f8001941283`；语义为“安静生命与尚未启动的设施关系”。
- 黎黎隆继续按未完成角色处理，本轮不用作成品。

## 1. 本轮命题｜《先听，再碰》
少女独自进入尚未启动的机械空港。她可以绕开一处沉默的技术接口继续走，也可以主动靠近。接口突然发出一次轻微启动声，她本能后退半步；第二次声音出现后，她没有再次退，而是先让鼠耳转向声源，停顿确认，再用一根手指轻触接口。设施只亮起一个克制的局部回应，她立刻收手，但没有离开。

魅力选择：不是“胆小变勇敢”，而是“仍然谨慎，却愿意在确认后主动建立第一次接触”。

## 2. 十元动态链（理论字段）
### 主次
- 主：N 8 → 6 → 7
- 次：NZ 7 → 8
- 变化：XZ 4 → 6 → 4；Z 5 → 7
- 环境功能：未启动设施先形成 X 7 的边界；启动声以 XZ 6 突发克制 N。

### 起点 → 变化 → 终点
1. 起点：N8 + NZ7。人物保持距离观察，环境静止。
2. 第一次声响：XZ6 克 N8→6。可见证据：鼠耳先抖、肩缩、后退半步。
3. 关系确认：NZ7→8 补 N6→7。可见证据：不逃离，停住，耳朵持续朝向接口，身体保持安全距离。
4. 主动选择：NZ8 生 Z5→7。可见证据：第二次轻响后不再后退，改为小步靠近；只伸一根手指触碰。
5. 终点：N7 + NZ8 + Z7，XZ回落4。接口只亮局部，人物收手但留在原位，关系从“未知边界”变为“谨慎接触”。

### 方向与双方关系
- 设施 X7：提供明确边界，不新增角色结构。
- 突发声 XZ6 → 克 → 人物 N8→6。
- 人物 NZ8 → 补 → N6→7：通过保持安全距离恢复稳定。
- 人物 NZ8 → 生 → Z5→7：安全关系不是终点，而是允许一次主动小动作。
- 不宣称场景自身具有冻结十元属性；上述 X/XZ 只是本轮事件功能标注。

## 3. 镜头可视化证据
- 镜头A｜大远景/轻高机位：少女很小，空港设施尚未启动，证明 N8 与环境尺度关系。
- 镜头B｜近中景三分之二侧面：第一次轻响时耳朵先动、肩缩、后退半步；必须看清“受惊但没跑”。
- 镜头C｜耳部+手部近景：第二次声响，耳朵先转，手随后抬起，证明动作顺序而非随机靠近。
- 镜头D｜中景：单指触碰后接口局部亮起；少女立刻收手但站位不退回起点。
- 镜头E｜安静中远景：人物与接口之间仍有距离，局部微光保留，终点是关系改变而非设施全面启动。

Picture 2 只锁 SCENE-11 的机械空港身份、已有空间/色彩/设施逻辑；景别、机位和构图由本轮文字设计。若真实图无法支持所写接口位置或反向机位，B3 标 `needs_environment_inference=true` 并收缩镜头，不虚构几何。

## 4. 独立检验点
1. Choice A/B：第二次声响后“主动靠近并触碰” vs “继续后退离开”；其余镜头不变。测选择本身。
2. Order A/B：鼠耳先转→手抬起 vs 身体/手直接靠近。测 Z 的前置微反应是否增加角色辨识度。
3. Contact A/B：单指短触→立即收手 vs 整掌持续按住。测克制接触是否更符合 N/NZ 基底。
4. Camera A/B：动态景别链 vs 固定参考构图。测 v1.3 的文字景别设计是否提高事件可读性。

任何比较都需在角色图真实绑定、相同模型/场景/完整prompt与可记录运行条件下执行；本轮无渲染结果，不填写胜负。

## 5. B3 结构化工单
```json
{
  "task_id": "B2_20260924_0415_MOUSE-EAR-MUTANT-001_SCENE-11",
  "upstream_b1": "logs/B1_素材索引_20260924_0305.md",
  "character_id": "MOUSE-EAR-MUTANT-001",
  "character_ref_status": "pending_image_validation",
  "scene_id": "SCENE-11",
  "scene_blob": "c87915a6d7232e6a485a8904d32b3f8001941283",
  "chain": "N8 -> XZ6克N6 -> NZ8补N7 -> NZ8生Z7 -> N7+NZ8+Z7",
  "choice": "retreat_or_confirm_then_touch",
  "b3_ready": true,
  "h3_render_eligible": false,
  "needs_environment_inference": "B3 must decide after actual Picture 2 inspection",
  "experiment_results": null
}
```

## 6. 最终视频描述词（不含十元术语）
```text
2D hand-drawn cinematic character sequence, 15 seconds.

Keep the exact identity of the small mouse-ear mutant girl shown in Picture 1: short white hair, large translucent pale-purple mouse-ear structures, small slender body, wide pale short robe with dark edge blocks, crossbody strap and side bag. Do not redesign her.

Use Picture 2 only as the identity and visual foundation of the quiet mechanical air-port environment. Preserve its existing architecture, spatial logic, palette and inactive technical atmosphere, while allowing shot scale and camera position to change for clear storytelling.

Begin with a quiet wide shot from a slightly elevated angle. The girl stands small within the inactive mechanical space, keeping a cautious distance from a nearby existing interface or control structure visible in the reference environment.

A faint mechanical activation sound occurs. Cut to a medium-close three-quarter view: her translucent ears react first, her shoulders tighten, and she takes half a step backward. She does not run.

Hold the pause. A second soft sound comes from the same direction. Her ears turn toward it before the rest of her body moves. She watches for a moment, then takes one careful step closer.

Move to a restrained close shot of the existing interface and her hand. She extends only one finger and gives it a brief, cautious touch.

The interface responds with one small localized light or subtle mechanical reaction. She immediately pulls her hand back, startled but controlled. She does not retreat to her original position.

End on a quiet medium-wide shot. The girl remains near the interface with a small but deliberate safety gap between them. The localized response stays visible while the larger environment remains calm and inactive.

Restrained 2D hand-drawn animation, clean readable shapes, variable-weight ink lines, thin watercolor-like shading, soft diffuse light and generous negative space, while remaining faithful to the actual visual style and palette of Pictures 1 and 2.

No second character, no duplicate girl, no new weapon, wings, tail, horns, armor or clothing, no full facility transformation, no unrelated location change, no text, subtitle, logo or glossy 3D rendering.
```

## 7. 状态
`B2 complete / B3 structure ready / GitHub text committed / H3 render blocked pending real character-image validation / no experiment result claimed`.
