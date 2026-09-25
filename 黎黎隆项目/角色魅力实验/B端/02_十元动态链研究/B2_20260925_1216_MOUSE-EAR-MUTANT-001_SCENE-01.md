# B2 十元动态链｜2026-09-25 12:16 CST｜MOUSE-EAR-MUTANT-001 × SCENE-01

## 0. B1 对应与证据边界
- source B1: `B1素材索引/B1_ASSET_AUDIT_20260925_1204_R60.md`
- B1 blob: `03c7679a70bf823201337fca7bda892e26957339`
- asset contract: `MOUSE-EAR-MUTANT-001 × SCENE-01 @ MOUSE_B_20260925_1110_R59 v1.0`
- R59 task blob: `29f153d214fb91170e88c24e6a6a5e19f710e604`
- 已核实：11s、16:9、eye-level waist-up medium、单刺激→耳→眼→头→既有侧包带按压；单 prompt 双抽。
- 未核实：Picture1/2 真图绑定、SHA-256、dimensions、same-character/H3、SCENE-01 geometry、R59真实渲染。
- LLL-MAIN-001 未完成，排除。
- 本轮只产文本动态链，不宣称任何视觉验证或执行结果。

## 1. 本轮问题
**角色已经决定保护自己的随身物后，外界刺激再次出现，她是持续防御，还是在确认风险没有升级后主动解除防御？**

与前轮“是否介入”不同，本轮研究**防御动作的解除条件**：建立边界并不等于把边界永久锁死。

## 2. 理论分析字段
- 主：X 8
- 次：NZ 7
- 变量：N 6 / Z 5 / XN 4
- 起点：X7 + NZ6 + N7。正常移动，侧包带处于自然状态。
- 变化1：单一环境刺激触发耳→眼→头确认，NZ6→8，N7→5。
- 变化2：她按住既有侧包带，X7→9；这是明确的自我边界保护动作。
- 决定点：刺激没有升级、没有第二实体接近、没有新的危险信息。此时可选：
  - A：继续死死按住包带，保持高防御。
  - B：确认无升级后主动松开手，恢复自然持物状态，但保留一次短暂注意。
- 本轮选择：B。
- 终点：X8 + NZ7 + N8 + Z3。边界恢复稳定，但不维持过量防御。

### 候选链
`N7 → NZ8克N5 → X9补NZ7 → X9克Z3 → N8补X8 → NZ7`

### 双方关系
外界获得一次真实注意，并触发角色保护自身携带边界；但当刺激没有升级时，角色不让“保护”自动固化成持续紧张。

### 生／克／补方向
1. `NZ6→8 克 N7→5`：刺激打断自然节奏，注意被外界取得。
2. `X7→9 补 NZ8→7`：按住侧包带，把回应从纯感知转成边界保护。
3. `X9 克 Z5→3`：不继续向未知刺激扩张行动。
4. `N5→8 补 X9→8`：无新增信息后恢复稳定，使高强度保护回落为正常边界。
5. NZ 保留 7：解除防御不等于否认曾经的回应。

> 候选命题：**X 的建立与解除可以是两个独立决策；N 可能负责在风险未升级时把高强度 X 回收到常态 X，而不是把 X 清零。**
> 状态：experimental_hypothesis_not_frozen。

## 3. 体量与阶段
| 阶段 | X | NZ | N | Z | 镜头证据 |
|---|---:|---:|---:|---:|---|
| 基线 | 7 | 6 | 7 | 3 | 手自然、侧包带未被按压 |
| 刺激 | 7 | 8 | 5 | 5 | 耳→眼→头依次确认 |
| 建立保护 | 9 | 7 | 5 | 3 | 手明确按住既有侧包带 |
| 判断无升级 | 9 | 7 | 7 | 3 | 仍按住，但头部回正趋势出现 |
| 主动解除 | 8 | 7 | 8 | 3 | 手指先松、手掌离开包带 |
| 终点 | 8 | 7 | 8 | 3 | 手恢复自然状态，继续原节奏 |

## 4. 决定性可视证据
必须在同一连续镜头中读到：
1. 刺激先发生；
2. 耳→眼→头真实确认；
3. 手随后明确按住既有侧包带；
4. 刺激没有升级；
5. **她主动松开已经建立的保护动作**；
6. 松开后不再次按紧，也不向刺激方向扩大行动。

若从未按住，则无法证明“解除”；若刺激先消失才松手，只能证明被动结束；若反复按紧/松开，则会混入犹豫变量。

## 5. 独立检验
固定：刺激类型/强度/持续时间、镜头、角色姿态、按包时刻。
- A：刺激无升级后仍持续按紧至片尾。
- B：刺激无升级后主动松开并恢复自然状态。**本轮实验组。**
- C1：从未按包，检验是否真正建立保护。
- C2：刺激明显升级后仍松开，检验解除是否依赖“无新增风险”。
- C3：松开后再次按紧，排除犹豫/循环行为。

盲审问题：
**“她是否先认真保护了自己的东西，然后在确认情况没有变坏后，自己决定解除过量防御？”**

## 6. B3 结构化工单
```json
{
  "task": "B2_20260925_1216_MOUSE-EAR-MUTANT-001_SCENE-01",
  "character": "MOUSE-EAR-MUTANT-001",
  "scene": "SCENE-01",
  "upstream": "MOUSE_B_20260925_1110_R59",
  "source_b1": {
    "path": "黎黎隆项目/角色魅力实验/B端/B1素材索引/B1_ASSET_AUDIT_20260925_1204_R60.md",
    "blob": "03c7679a70bf823201337fca7bda892e26957339"
  },
  "asset_gate": "text_ready_picture_validation_pending",
  "theory": {
    "primary": "X8",
    "secondary": "NZ7",
    "variables": ["N6", "Z5", "XN4"],
    "start": "自然移动，携带边界稳定",
    "change": "刺激触发真实注意并建立按住侧包带的保护动作",
    "choice": "刺激未升级时主动解除高强度保护，而非持续紧张",
    "end": "恢复自然持物状态与原节奏，保留一次短暂注意",
    "chain": "N7 -> NZ8克N5 -> X9补NZ7 -> X9克Z3 -> N8补X8 -> NZ7",
    "status": "experimental_hypothesis_not_frozen"
  },
  "independent_tests": [
    "无升级后持续按紧 vs 主动松开",
    "从未按包控制",
    "刺激升级后松开控制",
    "松开后再次按紧控制"
  ],
  "b3_spec": {
    "duration_seconds": 11,
    "aspect_ratio": "16:9",
    "shot": "eye-level waist-up medium",
    "paired_runs": 2,
    "gate": "blocked_pending_picture_validation"
  }
}
```

## 7. 最终视频描述词（无十元术语）
```text
2D hand-drawn cinematic character sequence, 11 seconds, 16:9.

Preserve the established mouse-eared mutant girl from Picture 1 exactly. Do not redesign her identity, face, hair, ears, clothing silhouette, side bag, or existing carried items.

Use Picture 2 only for the established visual identity of the environment. Do not invent architecture, creatures, props, or spatial mechanisms unsupported by the bound reference.

Use one stable eye-level waist-up medium shot. Keep both mouse ears, eyes, head, hand, and the existing side-bag strap readable.

She is moving calmly with one hand relaxed away from the bag strap.

A single small harmless environmental cue catches her attention.

Her mouse ears react first. Her eyes turn next, followed by a restrained turn of the head.

After clearly noticing the cue, her hand moves to the existing side-bag strap and presses it securely against her body. Hold this protective action long enough to read clearly.

Nothing approaches her. The cue does not become stronger and no new warning appears.

She keeps the strap secured for one brief beat, confirms that the situation is not escalating, then deliberately relaxes.

Her fingers loosen first. Her palm leaves the strap and returns to a natural resting position.

Her head settles forward and her normal movement rhythm resumes. She does not press the strap again and does not move toward the source of the cue.

End with the bag still secure and her posture calm.

The emotional emphasis is on someone who protects what is hers when something uncertain appears, but can release unnecessary tension once she has enough information.

Restrained 2D hand-drawn animation, precise ear-eye-head-hand timing, readable finger release, quiet pacing, no repeated hesitation.

No second physical character, no invented creature, no new prop, no danger escalation, no route change, no repeated grabbing, no character redesign, no text, no subtitle, no logo, no glossy 3D rendering.
```

## 8. 执行状态
- B2：complete
- B3：text-ready
- Picture validation：pending
- H3：not executed
- seed / Work task ID / output / blind review：本轮无可核实结果，不填写。
