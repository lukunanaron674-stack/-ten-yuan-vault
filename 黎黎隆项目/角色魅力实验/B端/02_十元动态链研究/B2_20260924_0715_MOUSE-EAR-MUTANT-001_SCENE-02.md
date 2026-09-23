# B2 十元动态链工单｜2026-09-24 07:15 CST

## 0. 上游证据与闸门
- 最新可核实 B1：`logs/B1_素材索引_20260924_0605.md`。B1 明确：角色池基线仍为 `v1.5 @ 59810586...`，场景池仍为 `v1 @ 26384b61...`；没有新增经视觉验证的成品角色。
- 本轮直接复核 `assets/character_pool_index.json`：`MOUSE-EAR-MUTANT-001` 为 `N主8 / NZ次7 / Z潜在5 / XZ潜在4 / ZN辅助4`，`text_task_eligible=true`，但 `identity_validation_status=pending_image_validation`、`h3_render_eligible=false`。
- 本轮直接复核 `assets/scene_pool_13_index.json`：SCENE-02 为森林湖泊双色主导，blob `249b3a0f00aa894772d1049e800f4813723184df`，已登记语义仅包括“暖天空与冷湖面形成双色主导；适合身体路线与环境反光的对照”。
- `LLL-MAIN-001` 虽角色池旧字段写有 render eligible，但最新 B1 明确继续服从“黎黎隆尚未完成，不作为可用成品”的人工生产约束，本轮不使用黎黎隆。
- 本轮只产 B2 文本研究，不声称角色图已完成 Work 绑定，不声称 H3 已渲染，不记录虚构 seed/task_id/视频结果。

## 1. B1 → B2 资产对应
```json
{
  "b1_source": "logs/B1_素材索引_20260924_0605.md",
  "character_pool": {"schema":"lililong-b-character-pool/v1.5","blob":"59810586b7b8ada9c9a263975a4769b3c4f8ca7a"},
  "scene_pool": {"schema":"lililong-b-scene-pool/v1","blob":"26384b61a8ef8314cf8b5cee81934beed846c021"},
  "character": {"id":"MOUSE-EAR-MUTANT-001","status":"pending_image_validation","h3_render_eligible":false},
  "scene": {"id":"SCENE-02","blob":"249b3a0f00aa894772d1049e800f4813723184df","family":"森林湖泊"},
  "production_gate":"B2_TEXT_ONLY"
}
```

## 2. 本轮实验命题
**题名：倒影先动了吗？**

少女独自沿湖岸缓慢前行。冷色湖面出现她的倒影；水面轻微扰动使倒影发生短暂错位，她第一反应是停住并后撤半步。她可以直接远离水边，恢复原来的安全距离；也可以留下来确认这个异常。她选择留下：鼠耳先朝湖面转动，身体仍保持距离，随后只向侧方移动一小步，观察倒影是否同步。确认只是水面扰动后，她没有立刻贴近湖面，而是以一个很小、略带试探性的第二次侧步主动“测试”倒影，最后继续沿岸前行。

魅力点不是“胆小变勇敢”，而是**警觉仍在，但她把警觉转化成了小幅、可撤回的主动试探**。

> 注意：场景索引只确认湖面及反光对照，没有确认石头、桥、树根、码头等具体几何，本轮不新增这些物件。水面轻微扰动属于本轮文本事件变量，须由 B3 标 `needs_environment_inference=true`，不能反写成 B1 已视觉确认事实。

## 3. 十元理论分析
### 3.1 主次与双方
- 角色基线：N8 主 / NZ7 次 / Z5 潜在 / XZ4 潜在 / ZN4 辅助。
- 环境作用对象：SCENE-02 的冷湖面与角色倒影。本轮不把环境强行人格化为第二角色。
- 双方关系：角色的稳定安全距离 ↔ 湖面反光产生的短暂视觉不确定性。

### 3.2 起点 → 变化 → 终点
1. **起点**：N8。低幅移动、身体收束、与湖面保持稳定距离。
2. **扰动**：XZ4→6；作为本轮待验证操作假设，短暂错位的倒影对稳定 N 形成克制，N8→6。
3. **选择**：Z5→7。不是直接靠近，而是“耳先转向 → 身体停住 → 侧移一步”确认因果；Z 对受扰后的 N 提供补偿，N6→7。
4. **主动测试**：Z7 保持，XZ6→4。第二次小侧步由角色主动发起，原本不可预测的错位被转化为可观察反馈。
5. **终点**：N7 + Z7 + NZ7。她继续前行，安全距离仍在，但不再完全由回避维持。

### 3.3 生／克／补方向与体量
| 阶段 | 操作关系 | 体量变化 | 可视证据 |
|---|---|---:|---|
| A | N 建立稳定 | N8 | 小步、收束姿态、沿岸稳定移动 |
| B | XZ 克 N（实验假设） | XZ4→6；N8→6 | 倒影错位；少女停住并后撤半步 |
| C | Z 补 N（实验假设） | Z5→7；N6→7 | 鼠耳先转、身体不前冲、侧移一步验证 |
| D | Z 反向约束 XZ 的不确定性 | Z7；XZ6→4 | 她主动做第二次可撤回侧步，观察同步关系 |
| E | N 与 Z 共存收束 | N7 / Z7 / NZ7 | 恢复前行，但不以逃离湖面作为结局 |

本轮**不新增“Z生某元”为冻结公理**。数据只登记为：在此角色/此事件中，Z 的可见试探是否能补回被不确定性削弱的 N。若后续 A/B 不支持，则关系降级或删除。

## 4. 镜头可视化证据
1. **大远景/中远景**：暖天空、冷湖面、少女小体量剪影；先证明她与湖岸路线关系。
2. **中景三分之二侧面**：水面倒影发生轻微错位；必须同框看见人物与倒影，避免靠表情解释。
3. **近中景**：鼠耳先转向湖面，身体仍保持原位；随后只侧移一步。此镜是“警觉→试探”的核心证据。
4. **稍低的中全景**：第二次侧步由她主动发起，倒影同步后她停一下，再继续前行。
5. **终场大远景**：她没有逃离湖岸，仍沿原方向走；湖面恢复相对稳定。

镜头改变不等于场景重设计。B3 必须保持 SCENE-02 的森林湖泊身份、暖天空/冷湖面对照与空间连续性；未被 B1 核实的新视角或水面动态标 `needs_environment_inference=true`。

## 5. 独立检验点
- **T1 选择权**：A=倒影错位后直接远离；B=停下后主动侧移验证。其余保持一致。测“有选择的试探”是否提升魅力。
- **T2 行动顺序**：A=身体先靠近；B=鼠耳先转、身体后侧移。测角色识别件是否能承担心理变化而非只当装饰。
- **T3 幅度**：A=大步靠近水面；B=小幅、可撤回的侧步。测 N 主角色是否需要保留克制才能维持身份魅力。
- **T4 镜头证据**：A=人物与倒影分镜；B=关键扰动时人物与倒影同框。测因果可读性，不能把镜头差异误记为十元关系胜负。

每组只改一个变量；没有真实视频与盲审前，全部状态为 `hypothesis_pending_test`。

## 6. B3 结构化动态链 JSON
```json
{
  "task_type":"B2_DYNAMIC_CHAIN_TO_B3",
  "round":"B2_20260924_0715",
  "character_id":"MOUSE-EAR-MUTANT-001",
  "scene_id":"SCENE-02",
  "render_gate":"blocked_pending_image_validation",
  "tenyuan_analysis":{
    "primary":"N8",
    "secondary":"NZ7",
    "activated":["Z5->7","XZ4->6->4"],
    "chain":[
      {"phase":"start","state":"N8","relation":"stable"},
      {"phase":"disturbance","state":"XZ6 / N6","relation":"XZ克N","status":"experimental_hypothesis"},
      {"phase":"choice","state":"Z7 / N7","relation":"Z补N","status":"experimental_hypothesis"},
      {"phase":"test","state":"Z7 / XZ4","relation":"主动试探降低不可预测性","status":"experimental_hypothesis"},
      {"phase":"end","state":"N7 / Z7 / NZ7","relation":"coexistence"}
    ]
  },
  "choice":{"option_A":"远离湖面恢复安全距离","option_B":"保持距离并侧移验证倒影","selected":"B"},
  "observable_evidence":["倒影短暂错位","后撤半步","鼠耳先转向","小幅侧移一次","主动第二次侧移","继续沿岸前行"],
  "tests":["choice_vs_retreat","ear_first_vs_body_first","small_reversible_move_vs_large_approach","same_frame_causality_vs_split_shots"],
  "needs_environment_inference":true,
  "result_status":"hypothesis_pending_test"
}
```

## 7. 最终视频描述词（不含十元术语）
```text
2D hand-drawn cinematic character sequence, 15 seconds.

Keep the exact identity of the mouse-ear mutant girl from Picture 1. Do not redesign her, merge her with another character, duplicate her, or add another visible person.

Use Picture 2 only as the identity and art reference for the forest-lake environment. Preserve the warm-sky and cool-lake contrast, the forest-lake atmosphere, and spatial continuity. Camera distance and angle may change to make the event readable without inventing unrelated structures.

Begin with a quiet wide shot. The small girl walks slowly along the lakeshore, keeping a comfortable distance from the water. Her reflection is visible in the cool lake surface.

Move to a medium three-quarter shot that keeps both the girl and her reflection readable in the same frame. A subtle disturbance crosses the water and briefly offsets the reflection. She stops immediately and takes half a step back.

Hold the pause. She could leave, but does not.

Her mouse ears turn toward the lake first while the rest of her body remains still. Only after listening and watching does she make one small sideways step, keeping the same distance from the water, checking whether the reflection follows her.

The reflection settles. She waits for a moment, then deliberately makes a second small sideways step, almost playfully testing it again. The movement remains restrained and easy to reverse, never turning into a bold approach toward the water.

End on a wide shot as she resumes walking along the lakeshore instead of fleeing from it. Keep the lake calm again and preserve the warm sky against the cool water.

Clear readable 2D shapes, restrained hand-drawn motion, soft diffuse light, no glossy 3D rendering. No extra character, no clone, no new prop, no bridge, no dock, no subtitle, no text, no logo.
```

## 8. 数据登记结论
- 本轮新增实验样本：`MOUSE-EAR-MUTANT-001 × SCENE-02`。
- 核心待验关系：`视觉不确定性克稳定 → 小幅主动试探补回稳定`。
- 与既往鼠耳轮次区别：不再依赖第二生命/接口作为关系对象，改测**角色面对自身倒影造成的不确定性时，Z 是否能在不破坏 N 身份的情况下增长**。
- 未运行 B3/H3，未产生真实 seed、task_id、视频、盲审分数或胜负结论。
