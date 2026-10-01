# ❌ REJECTED BY USER｜2026-10-01

> 本故事方案已被用户明确否决。禁止自动复活、改写后继续使用、或作为当前一分钟正式方案。
> 被否决核心：机械空港抢跑 → 设施重排 → 假动作骗过。

# GOAL-LLL-60S-001｜MACRO RUN 001

## 调度
- mode: PRODUCTION
- dispatch_mode: RUN_UNTIL_EXTERNAL_BLOCKER
- asset_policy: ASSET_FIRST
- h3_mode: LONGTAKE
- target: 60.75s
- segments: 6 × 243f @24fps ≈ 10.125s
- primary_character: LLL-MAIN-001
- primary_scene_family: 机械空港

## 01｜风格审核 Agent
### 输入
- LLL-MAIN-001：`LLL_H3_character_card_001.jpg`，仓库索引登记 h3_render_eligible=true。
- SCENE-11 / 12 / 13：R4 机械空港“起 / 承 / 合”，均为正式场景池、available_by_github_path。

### 决策
**PASS_FOR_QUEUE_WITH_EXECUTOR_PREFLIGHT**

说明：
- 本轮未宣称完成像素级人工视觉复核；
- 这些不是新生成素材，而是既有正式角色/场景资产；
- 允许进入正式队列，但 executor 必须实际绑定 LoadImage 并核路径、图像可读、单角色实例、场景身份；
- executor preflight 失败则 BLOCK，不得继续渲染。

锁定：
- 二维线稿/平涂薄影；
- 保持黎黎隆脸型、红发、红白黑机械装甲、青蓝功能信号、机械龙爪脚、单条长机械龙尾；
- 场景保持机械空港原有空间与色彩逻辑；
- 禁止 3D 光滑材质、额外角色、额外肢体、第二条尾巴、文字/Logo、突然改设。

## 02｜主题 Agent｜基于素材
- primary_dimension: 因果
- theme_question: **当黎黎隆为了抢先一步而主动进入尚在切换的导引区时，她能否看见“新的阻碍正是自己抢跑造成的”，并把这种认识转成更聪明的行动？**
- experiment: 只改变“她的动作→设施导引变化”的可见度。
- pressure: 每次她提前承诺方向，机械空港的既有导引/照明状态随之重排，使捷径变成新限制。
- dilemma_target: 继续硬抢，还是利用自己已看懂的因果关系做一次真正的变招。
- world_gate: BYPASS；不新增世界规则，只使用“技术接口 / 导引状态 / 既有设施响应”作为本场局部机制。

## 03｜剧本 Agent｜60秒
### 一句话
黎黎隆想抢在机械空港导引切换前穿过一段区域，却因每次抢先动作都让导引状态提前重排；她先和设施较劲，随后发现“它在回应自己”，于是故意做一次假动作骗出重排，再从真正空出的方向穿过去。

### 六段事件
1. **SEG-01｜抢跑**：安静的机械空港。黎黎隆盯住即将变化的既有导引光区，在状态完全稳定前先迈出一步。
2. **SEG-02｜反作用**：她的提前进入使前方导引强度/方向发生一次明确重排，她被迫刹住；新阻碍与她刚才的动作直接相连。
3. **SEG-03｜加码**：她不服，做出更明确的前向承诺想抢过去；设施再次提前响应，前路更难读，局面被她自己进一步复杂化。
4. **SEG-04｜看懂**：她停住，不再猛冲，只用脚尖/尾尖做一个极小试探；导引随微动作响应，她确认“不是随机，是在回应我的方向”。
5. **SEG-05｜骗过**：她故意把视线、肩和抬脚都交给假方向，等导引重排后，尾尖先暴露真正方向，同一只爪足侧向落地，身体随即变向通过。
6. **SEG-06｜结算**：她在新的稳定位置停住，回看刚才没走的方向，露出克制得意的半笑；设施状态稳定下来。她赢了，但靠的是读懂自己与环境的因果，而不是更猛地撞。

不可增加：
- 第二角色；
- 新武器；
- 新过去经历；
- 新组织设定；
- 必须靠新场景才能成立的事件。

## 04｜十元 Agent
- character baseline: ZX 主 / Z 次 / XN 微量。
- verified: **XN → 克 → ZX** 可用于 SEG-02/03 的“既有结构限制即时行动范围”。
- verified restraint: **XN→NX 不自动成立**，本片不把她被限制后直接改写成 NX。
- Z：用于可观察的“假动作、转向、灵活变通”；本轮不把 Z→ZX 强写成新的固定生/补 Canon。
- dynamic progression:
  - SEG-01: ZX8 主动抢先
  - SEG-02: XN6 克 ZX5
  - SEG-03: ZX7 再加码，限制进一步显影
  - SEG-04: Z6 进入行为层试探，ZX暂降
  - SEG-05: Z7 假动作/变向 + ZX7 执行
  - SEG-06: ZX7 稳定，Z6 保留
- REJECT: “被克后自动 NX”
- KEEP: “ZX 被结构限制后，通过 Z 的灵活行为重新组织行动，但不冒充固定生补关系”

## 05｜分镜 Agent｜LongTake 六段
统一：
- 16:9 横屏；
- 单角色；
- 同一机械空港场景族；
- 中全景为主；
- 机位变化克制；
- 每段一个核心变化；
- 每段 closing_state 供下一段 opening_state；
- 无 MV 卡点。

### SEG-01 243f
opening: 双脚稳定，观察导引区。
0–3s：中全景，黎黎隆确认前方既有导引光区。
3–7s：她身体微前压，尾部收紧，明显想抢先。
7–10.1s：状态尚未完全稳定，她先迈出一只机械爪足。
closing: 一脚刚越出，环境导引开始变化。

### SEG-02 243f
opening: 承接一脚越出。
0–3s：前方既有照明/导引关系重排一次。
3–7s：她急刹，头肩先停、尾巴做配重。
7–10.1s：她盯住刚刚变化的位置，意识到路线被自己触发改变。
closing: 身体仍前倾，但不再继续迈步。

### SEG-03 243f
opening: 停在前倾姿态。
0–3s：她露出不服的表情，再次向前承诺方向。
3–7s：抬脚幅度比第一次更明确，但仍控制在稳定动作范围。
7–10.1s：导引再次提前响应，她被迫停在更尴尬的半步位置。
closing: 路线更难读，她第一次真正收住劲。

### SEG-04 243f
opening: 半步停住。
0–3s：她把脚收回，身体回到稳定重心。
3–7s：只让尾尖/脚尖向一侧做极小试探。
7–10.1s：环境同方向出现一次对应变化；她眼神从恼火变成“看懂了”。
closing: 身体不动，只有一个克制的会意表情。

### SEG-05 243f
opening: 已理解响应关系。
0–3s：视线、肩和抬脚都明显朝“假方向”承诺。
3–6s：等待既有导引状态向假方向响应。
6–8s：单条长尾尾尖先朝真正侧向轻弹。
8–10.1s：同一只抬起的爪足只侧向落地一次，身体跟随。
closing: 已完成一次小幅侧移，真实方向成立。

### SEG-06 243f
opening: 承接侧向落地。
0–4s：她继续一个很小的身体转向，到达稳定位置。
4–7s：尾部展开配平，机械空港导引恢复稳定。
7–10.1s：她回看原本硬闯的方向，半笑，完全停住。
closing: 稳定终态，可直接作为一分钟段落结束。

## 06｜素材复核
- 新角色：0
- 新场景：0
- 新武器/道具：0
- required: LLL-MAIN-001 + SCENE-11/12/13
- optional fallback: SCENE-05/06/10
- result: PASS
- 注意：若 executor 实图发现某张 R4 场景不支持“导引光区/方向变化”的可读性，优先用已有整体照明强弱变化表达，不发明新机器/门体。

## 07｜H3 LongTake
- executor route: H3LongTakeImageRender 优先；若本地 wrapper 只实现 H3LongTakeRender，则由执行器按 /object_info 实际注册参数选择正确图生长镜头入口，不按 widgets 位置猜。
- project_name: `lll_60s_airport_001`
- clip_frames: 243
- context_frames: 5
- max_clips: 0
- mode: continue
- anchor_mode: keyframe
- seam_match: color
- steps: 4
- sampler: euler / simple
- output: 16:9
- single_instance: true
- retry: 单段失败 → redo_one + 新 seed
- preflight: 单实例、LoadImage 路径、模型目录、Sage、输入目录、prompt 必填。
