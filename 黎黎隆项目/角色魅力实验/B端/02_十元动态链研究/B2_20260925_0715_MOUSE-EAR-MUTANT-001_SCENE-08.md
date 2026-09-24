# B2 十元动态链｜MOUSE-EAR-MUTANT-001 × SCENE-08｜2026-09-25 07:15 CST

## 0. B1 可核实输入
- source: `黎黎隆项目/角色魅力实验/B端/B1素材索引/B1_ASSET_AUDIT_20260925_0003_R48.md`
- B1 blob: `f9b934b8e7ddcb02e74974becc5327762c460489`
- upstream: `MOUSE_B_20260924_2310_R47 v1.0`
- character: `MOUSE-EAR-MUTANT-001`
- character SHA-256: `417ce97887ba92b6d1c526bb8e6604a6f6d6d81a58a8eb94f0e1309192ea90ef`
- dimensions: `941×1672`
- same_character_visual_verified: null
- h3_four_grid_layout_verified: null
- scene: `SCENE-08`
- scene Git blob: `3f0a6664e66899a228a8513bfc70688c0a866908`
- scene_actual_bound_path / sha256 / dimensions / geometry_check: null
- 黎黎隆本人：继续排除，不作为完成角色使用。
- 边界：B1 未读取图片像素；本轮同样不把 prompt、文件名或旧描述当成视觉事实。

## 1. 本轮研究问题
前序轮次已覆盖“是否继续追索”“是否让身体跟随”“是否先恢复自身携带边界”。本轮改测**主动发起之后的撤回权**：

> 角色已经主动把自己的现有随身包向外界方向抬起，形成“准备提供/展示/介入”的明确动作后，如果外界条件在接触前发生变化，她能否取消自己刚刚发起的动作，而不是因为动作已经开始就强行完成？

这不是“没有行动”，而是“行动已启动后主动撤回”。

## 2. 十元动态链
- 主：`N8`
- 次：`NZ7`
- 变量：`Z6 / X7 / XN5`
- 起点：稳定行进，现有随身包处于自身控制范围内。
- 变化：外界刺激得到确认；角色主动抬起现有包，准备进一步介入；接触发生前，刺激停止或条件消失。
- 选择：
  - A：因为动作已经启动，仍把包继续递到原目标位置；
  - B：承认条件已经改变，在接触前取消递出，把包收回自身边界。
- 本轮选择：B。
- 终点：包重新稳定在自身位置；角色保留一次短暂确认后继续原路线。

候选链：
`N8 + X7 → NZ8克N6 → Z6补NZ8 → Z6克X5 → XN5→8克Z6→3 → N8补X5→8 → N9 + NZ7`

### 生／克／补方向
1. `NZ6→8 克 N8→6`：外界事件获得真实回应权。
2. `Z4→6 补 NZ8`：回应从感知升级为主动介入方案。
3. `Z6 克 X7→5`：包离开原稳定位置，自身边界暂时降低。
4. `XN5→8 克 Z6→3`：条件已变化，更新后的判断终止旧方案继续执行。
5. `N6→8 补 X5→8`：撤回后恢复自身携带稳定。
6. `N8→9 补 NZ8→7`：不否认此前关心，但结束本次响应扩张。

> 候选命题：`XN` 可能承担“更新已启动方案”的作用。行动已经开始，不等于必须完成；条件改变后，XN 可以克制旧 Z 方案，并由 N/X 回收到稳定边界。仅登记为实验假设，不冻结。

## 3. 阶段变化与体量
| 阶段 | 体量 | 镜头可视化证据 |
|---|---|---|
| 稳定 | N8 / X7 / NZ6 / Z4 | 原路线、原步速，包稳定在身体侧 |
| 回应 | NZ8 / N6 | 耳→眼→头完成一次明确确认 |
| 主动发起 | Z6 / X5 | 手抓住现有包并向外抬起，包明显离开原稳定位置 |
| 条件改变 | XN5→8 / Z6→3 | 接触前外界刺激停止；手在半途停住 |
| 撤回 | N8 / X7→8 | 手改变方向，把包收回原位，而不是继续递出 |
| 回收 | N9 / NZ7 / Z3 | 一次短暂复核后继续原路线，不重新启动递出动作 |

## 4. 决定性视觉证据
必须连续看见：**已经主动抬包 → 包确实离开原位置 → 接触前条件变化 → 手在半途停住 → 包沿反方向收回 → 收稳后不再次递出**。

如果从未抬包，只能证明“没有介入”；如果包已经完成接触，只能证明“接触后撤回”；如果条件未变化就撤回，会污染成犹豫/胆怯。本轮只测试“条件更新后的主动取消”。

## 5. 独立检验
主 A/B：固定刺激、初始步速、抬包时刻、抬包距离、条件消失时刻，仅改变：
- A：条件消失后仍完成递出；
- B：条件消失后半途撤回并收稳。

控制组：
1. 条件不消失，验证正常情况下递出动作能继续；
2. 从未抬包，区分“未介入”与“撤回介入”；
3. 完成接触后才收回，区分“预接触撤回”与“完成后回收”；
4. 撤回后再次递出，检验是否真正结束旧方案。

盲审问题：**观众能否读出“她本来真的准备进一步介入，但发现条件已经变了，于是自己取消了刚刚启动的动作”，而不是“她一开始就不想做”？**

## 6. B3 结构化工单
```json
{
  "task": "B2_20260925_0715_MOUSE-EAR-MUTANT-001_SCENE-08",
  "character": "MOUSE-EAR-MUTANT-001",
  "scene": "SCENE-08",
  "upstream": "MOUSE_B_20260924_2310_R47",
  "source_b1": {
    "path": "黎黎隆项目/角色魅力实验/B端/B1素材索引/B1_ASSET_AUDIT_20260925_0003_R48.md",
    "blob": "f9b934b8e7ddcb02e74974becc5327762c460489"
  },
  "asset_state": {
    "character_sha256": "417ce97887ba92b6d1c526bb8e6604a6f6d6d81a58a8eb94f0e1309192ea90ef",
    "character_dimensions": "941x1672",
    "same_character_visual_verified": null,
    "h3_four_grid_layout_verified": null,
    "scene_git_blob": "3f0a6664e66899a228a8513bfc70688c0a866908",
    "scene_actual_bound_path": null,
    "scene_geometry_check": null
  },
  "theory": {
    "primary": "N8",
    "secondary": "NZ7",
    "variables": ["Z6", "X7", "XN5"],
    "start": "稳定行进，随身包处于自身控制范围",
    "change": "角色已主动抬包准备介入，但接触前外界条件消失",
    "choice": "不因动作已经启动而强行完成，半途撤回",
    "end": "包恢复自身稳定位置，角色继续原路线",
    "chain": "N8+X7 -> NZ8克N6 -> Z6补NZ8 -> Z6克X5 -> XN8克Z3 -> N8补X8 -> N9+NZ7",
    "status": "experimental_hypothesis_not_frozen"
  },
  "independent_tests": [
    "条件消失后仍完成递出 vs 条件消失后半途撤回",
    "条件持续存在控制",
    "从未抬包控制",
    "完成接触后才收回控制",
    "撤回后再次递出控制"
  ],
  "b3_spec": {
    "duration_seconds": 11,
    "aspect_ratio": "16:9",
    "paired_runs": 2,
    "gate": "text_ready_image_binding_pending"
  }
}
```

## 7. 最终视频描述词（不含十元术语）
```text
2D hand-drawn cinematic character sequence, 11 seconds, 16:9.

Preserve the established mouse-eared mutant girl from Picture 1 exactly. Do not redesign her identity, face, hair, mouse ears, clothing silhouette, bag, or other existing carried items.

Use Picture 2 only as the visual identity of the established environment. Do not invent architecture, creatures, props, or spatial structures unsupported by the bound reference.

Use a stable medium-wide view that keeps her ears, eyes, head, hands, bag, pelvis, and feet readable.

She is already walking calmly along a clear route.

A small harmless environmental change catches her attention. Her mouse ears react first, followed by her eyes and a restrained turn of the head.

She deliberately takes hold of her existing bag and begins lifting it outward, clearly preparing to become more involved. Let the bag move far enough away from its resting position that the intention is unmistakable.

Before the bag reaches anything and before any contact occurs, the environmental change ends.

Her hand pauses halfway.

She notices that the reason for continuing is gone.

Instead of completing the gesture simply because it has already begun, she reverses the movement and brings the bag calmly back to its normal position against her body.

She secures it, gives the former direction of the event one brief final glance, then returns her eyes forward and continues along the same route at the same pace.

Do not restart the outward bag movement.

End without revealing or explaining the source of the environmental change.

The emotional emphasis is on someone who can genuinely initiate an act of involvement and still change her mind cleanly when the situation changes, without embarrassment, panic, or stubbornly completing an unnecessary gesture.

Restrained 2D hand-drawn animation, precise ear-eye-head-hand timing, readable bag trajectory, controlled reversal of motion, clear silhouette, quiet pacing.

No second physical character, no invented creature, no new prop, no contact with an unseen object, no danger, no fear reaction, no route change, no character redesign, no text, no subtitle, no logo, no glossy 3D rendering.
```

## 8. 结果边界
- 本轮只完成 B2 理论设计与 B3 可转化文本。
- 未执行 H3。
- 无真实 seed / work_task_id / output_id / node frame。
- 无盲审结果。
- 图片绑定与视觉身份闸门仍 pending。
