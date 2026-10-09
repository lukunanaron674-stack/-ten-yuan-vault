---
type: feeling-generation-protocol
status: R4_XN_CANDIDATE_PROTOCOL_READY_NO_RENDER
authority_level: L5
date: 2026-10-09
owner_issue: 674-104
handoff_consumer: [674-106,674-286,674-289]
canonical_override: false
verified_h3_runs: 0
---
# R4｜感受目标编译 → H3生成 → 真人验收

## Z0
AI给定“我想要的感受”后，能理解它与近邻感受的微小差别、推测有效刺激与时间变化方式，通过图像/角色/场景/音乐/H3真正激发出来，并让真人验证。

## 三种准度不能混
| 准度 | 目标 | 验收人 |
|---|---|---|
| semantic_fit | 旧词源/描述词是否解释得准确 | 旧研究证据，不能替代真人 |
| feeling_understanding_fit | AI能否正确复述用户想要的体验和禁忌近邻 | USER确认，不由AI自给分 |
| feeling_realization_fit | 输出作品是否真的激发目标感受、强度是否到位、近邻是否控制住 | USER盲评/独立真人复评 |

## L1/L2/L3转译
L1 人实际描述的目标感受；L2 列候选诱发机制、竞争机制和排除解释；L3 翻译成可生成角色、空间、镜头、时间、声音、动作变量。旧五轴“方向权、归属、内外、裁定、回返”为L2候选，只能经过验证入库。**不能从“目标是NX”直接跳到“找外部通道”。**

## 目标数据结构（示例草案，不是已获USER审核目标）
```yaml
FEELING_TARGET_PACKET:
  target_phrase: "孤僻，像主动不回应世界，而非宁静地独处"
  target_strength_1_10: 7
  forbidden_neighbours:
    - {feeling: "宁静", max_1_10: 3}
    - {feeling: "恐惧", max_1_10: 3}
  current_context: "已有角色，在旧船房"
  intended_feeling_arc: "存在互动期待→回应落空→隔膜持续"
  user_confirmed: false
  historic_five_axis_labels: null
```

## 10秒H3 A/B实验准备：回应与隔绝
- 场景：同一已过审角色在同一船房，同一画幅/镜头/灯光/色卡/环境水声。
- 0–2s：窗外远船灯和独处少年，建立远处可能的联系。
- 2–5s：一声远处熟悉呼唤，少年抬头，证明他听见。
- 5–7.5s：A自然回应；B听见仍选择不回应（核心自变量）。
- 7.5–10s：双方仍在同一位置，镜头同长停顿，不额外加入悲伤音乐。
- AI预测：B更可能产生“孤僻/隔膜”，A更可能产生“联系/安心”；但B也可能被评价为“冷漠/倔强/没听清”。必须允许 FAIL。
- 负控：同人物没有远处呼唤的独处片段；用于检测是不是只因“无人”便生孤僻。
- USER盲评：先写自由感受，再评孤僻/宁静/恐惧1–10；记录“看懂互动是否发生”；不呈现A/B标签含义。

## 另一对照：退路逐段丧失
- A版：多条路径在镜头内维持可行。
- B版：0–2s多条真实路径可行；2–5s封一道；5–8s封第二道；8–10s最后退路失效。
- 预测：B更可能激发不可逆逼近感，不代表自动“恐惧”；若A/B观看者不能看懂“路在关”，实验不成立。
- 镜头和声音强度一致，勿用快切、突发惊吓、黑暗增加造成表面替代效应。

## 素材门禁和生产工单
旧资产只在取得 `asset_id/source_path/SHA256/user_review_state/4080_a_path/render_readable` 后进入A_READY；否则记 BLOCKED_ASSET，不得声称已真实跑H3。复用现有已过审角色/场景，不重生角色。B端674-286负责编排；C端674-293素材事实；A端4080实际生成；674-289储存视频事实和首中尾帧；674-106消费真人感受证据。
依本地实测选择约10–11s短片；真正的生成参数和时间分镜随A端能力验证后锁定。A/B若没能严格锁同一内容，记录 uncontrolled_drift。

## 实验记录格式
```yaml
FEELING_IMPLEMENTATION_PACKET:
  target_phrase: ""
  target_1_10: null
  forbidden_neighbours: []
  candidate_mechanism: ""
  expected_primary_shift: ""
  controlled_variable: ""
  asset_manifest: []
  A_B_storyboard_by_seconds: []
  A_B_generation_prompts: []
  generation_params: null
  video_ids: []
  preview_frame_ids: []
  human_free_report: null
  human_strengths_1_10: null
  target_error: null
  misleading_neighbour: null
  evidence_level: E0
  verdict: NOT_TESTED
```

## 状态/验收
R4完成：目标感受→体验与近邻→候选机制→H3镜头→真人盲测→修订的流程与候选XN字段。
尚未完成：任何A端H3实际出片、真实素材A_READY、真人感受命中测量、跨场景复测。
证据梯度E0旧假设与设计→E1单人重复→E2多人→E3跨场景→E4跨媒介→E5 AI反向稳定制造目标体验；未达E5不得把诱发机制锁为生产规则。
NEXT R5：真实素材+图像或H3 A/B，用户只评价“感受到什么、强度多少”，自动归因必须遵守统计限制。
