# B2 十元动态链工单｜2026-09-23 22:15｜MOUSE-EAR-MUTANT-001 × SCENE-08

## 0. 本轮证据状态

- `B1_latest_index`: **missing / not found**。本轮未检索到 B1 新生成的独立索引文件，因此没有伪称已承接 B1 本轮结果。
- 回退依据 1：`assets/character_pool_index.json`，schema `lililong-b-character-pool/v1.5`，blob `59810586b7b8ada9c9a263975a4769b3c4f8ca7a`。
- 回退依据 2：`assets/scene_pool_13_index.json`，pool `GITHUB_13_SCENE_POOL_V1`，blob `26384b61a8ef8314cf8b5cee81934beed846c021`。
- 回退依据 3：`assets/character_refs/MOUSE-EAR-MUTANT-001_角色身份验证与十元分析_v1.1.md`，blob `f38ba601045c6ae3b763983aaeee6a11987b9204`。
- 本轮不使用黎黎隆成品角色图。
- 本轮角色：`MOUSE-EAR-MUTANT-001 / 鼠耳异变少女`。
- 本轮场景：`SCENE-08 / 异种村庄_双色主导`。
- 场景图路径：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-10_异种村庄_双色主导.png`，blob `3f0a6664e66899a228a8513bfc70688c0a866908`。
- 场景索引只确认“双色村庄环境；适合角色与异常生命建立初始关系”。本轮没有直接视觉读取该 PNG，因此**不规定未核实的门、桥、绳索、摊位、具体生物等物件**。
- 角色四宫格结构已通过，但 `h3_verification = pending_workbuddy_render`；因此本工单是 **B2 文本实验，可交 B3 转译，不等于 H3 已可渲染**。

## 1. 本轮研究问题

能否不用第二个角色、不靠大动作，把该角色的 `N主8 / NZ次7 / Z潜在5` 转成一个明确的“事件 + 选择 + 结果”，并让角色魅力来自**谨慎之后仍主动靠近一步**？

本轮控制：单角色；不增加武器、尾巴、角、翅膀；不把鼠耳改成兔耳；不把短袍改成战斗服。

## 2. 动态链主方案

### 链：N8 → NZ7 → Z5→7

**一句话结构：**

> 她在陌生村庄边缘保持收束和静止；场外出现细小、非威胁性的未知声响，她先建立“可接近但仍保留距离”的安全关系；当声响再次出现时，她本可退后，却让鼠耳先转向声源，迟疑后主动迈出一步。

### 阶段表

| 阶段 | 主/次 | 体量 | 作用方向 | 生/克/补 | 可观察证据 | 独立检验点 |
|---|---|---:|---|---|---|---|
| 起 | N 主 | N=8, NZ=3, Z=2 | 角色→自身边界 | N维持 | 身体收束、双手靠近身体、步幅小；先停而不是冲入空间 | 去掉后续声音，观众是否仍能读到“安静、低攻击、谨慎存在” |
| 承 | NZ 次上升 | N=7, NZ=7, Z=3 | 角色↔未知声源/空间 | NZ补N，并建立可接近关系 | 头部轻抬但身体不追；与声源方向保持距离；鼠耳出现第一次细小方向变化 | 保持角色不位移，只改变耳与头部方向，是否能读到“开始建立关系而非逃跑” |
| 转 | Z 被 NZ 生成 | N=5, NZ=6, Z=7 | NZ→Z | **NZ生Z** | 第二次声响后，鼠耳先于身体快速转向；停顿；角色选择向声源方向迈一步 | 固定身份与场景，只比较“后退”vs“向前一步”，角色魅力是否因主动选择显著提升 |
| 合 | Z 回落，NZ保留 | N=5, NZ=6, Z=5 | 角色→空间 | Z完成一次小改道，NZ保留关系 | 一步后停止，不追逐、不突然兴奋；身体仍谨慎，但朝向已改变 | 末态与首态并排时，能否仅从朝向/站位读出“关系已改变” |

## 3. 双方关系定义

- A：鼠耳异变少女。
- B：**场外未知声源/空间方向**，不是第二个人物；B3 不得把它自动具体化成人形配角。
- 起点：A 与 B 无明确关系，A 以 N 保持边界。
- 变化：A 用 NZ 建立“可以靠近但仍保留距离”的关系条件。
- 生：`NZ → Z`，关系安全感为一次主动、小幅、机灵的方向改变提供条件。
- 终点：不是“变勇敢”这种抽象结论，而是 **A 的身体朝向和位置发生一次可见改变，并主动承担了靠近一步的选择**。

## 4. 为什么本轮不用“克”作为主关系

本轮目标是验证角色自身 `N → NZ → Z` 的魅力增长，不把陌生环境强行判成某个十元再制造冲突。当前只有场景文字索引，没有直接图像审查；若此时宣称某设施以 XN/X 并 Z 克角色，会把想象当成资产事实。等 B1 或 Work 对 SCENE-08 实图补完结构标注后，再做环境克制对照组。

这轮因此是**生/补主实验**，不是为了凑齐“生克补”三个字就凭空造敌人。人类很爱把表格填满，模型也很爱跟着犯病，这里先不干这种事。

## 5. B3 镜头可视化接口

B3 只需要转译以下可见变量，不要把十元术语写进最终 H3 prompt：

1. 首态：单人，小体型，收束姿态，安静停留；保持白短发、半透明浅紫鼠耳、浅色宽短袍、深色边块、斜挎带和侧包。
2. 事件 1：一个很轻的**场外声音**，不出现第二人物；耳朵先有细小反应，身体不移动。
3. 关系建立：她轻抬头，朝声音方向看，但保留原位置和距离。
4. 事件 2：同方向声音再次出现。
5. 选择：耳朵先快速转向，短暂停顿，然后她主动向该方向迈**一步**；不是奔跑、战斗或夸张惊吓。
6. 末态：一步后停住，身体仍谨慎，但朝向/站位已改变。
7. 镜头证据优先级：耳部方向变化 > 头部朝向 > 单步位移 > 末态停顿。
8. SCENE-08 只作为环境参考；没有实图核验前，B3 不得新增具体建筑机关、桥、绳、NPC、异常生物实体。
9. 全片单角色单实例，不用镜面/倒影制造第二个完整人物。

### 给视频生成端的无十元版本（B3 可继续加工）

> A small white-haired girl with large translucent pale-purple mouse-like mutated ears stands quietly at the edge of a strange village environment, hands held close to her body and posture restrained. A faint off-screen sound occurs. Her ears make a small directional movement before she slowly raises her head, while her feet remain still. The sound repeats from the same direction. Her ears turn first, she hesitates for a brief beat, then deliberately takes one small step toward the sound and stops. She remains cautious rather than suddenly excited; the final body direction and position clearly differ from the opening. Keep exactly one character on screen, preserve her face, hair, ears, loose pale tunic, dark trim, cross-body strap and side bag, and do not introduce another person or invented prop.

## 6. 独立验证设计

### Test A｜选择变量
- A1：第二次声音后后退一步。
- A2：第二次声音后主动向前一步。
- 其余身份、场景、机位、动作幅度尽量固定。
- 观察：A2 是否更能体现“谨慎但有主动性”，而不是单纯受惊。

### Test B｜耳朵先行变量
- B1：身体先转，耳朵随后。
- B2：耳朵先转，身体随后。
- 观察：B2 是否更稳定地表现该角色的敏感/细小变向，而不需要大表情。

### Test C｜关系阶段删除
- C1：直接从静止跳到向前一步。
- C2：保留第一次声音后的“抬头但不位移”阶段。
- 观察：C2 是否让主动一步更像经过选择，而不是随机运动。

> B3/H3 若实际执行测试，应按既定规则每条最终描述词 run_A/run_B 双抽；B2 不伪造 seed 或视频结果。

## 7. 预期与失败判据

### 预期
- 角色魅力不是靠换装、战斗或第二角色衬托，而来自“敏感 → 判断 → 小幅主动选择”。
- `NZ生Z` 在画面上对应：先建立可接近关系条件，再出现主动方向改变。

### FAIL
- 生成第二人物来解释声源。
- 把鼠耳变成兔耳、翅膀或普通装饰耳。
- 直接狂奔/战斗，导致 N/NZ 阶段消失。
- 只有耳朵随机抖动，没有第一次保持距离与第二次主动迈步的阶段差。
- 场景自行长出索引未确认的关键道具并成为剧情核心。

### AMBIGUOUS
- 末态朝向变化太小，看不出主动选择。
- 耳先于身体的时序不稳定。
- 角色身份尚未通过 WorkBuddy H3 实跑验证。

## 8. 交接状态

```yaml
b2_task: B2_20260923_2215_MOUSE-EAR-MUTANT-001_SCENE-08
character_id: MOUSE-EAR-MUTANT-001
scene_id: SCENE-08
character_pool_schema: lililong-b-character-pool/v1.5
scene_pool: GITHUB_13_SCENE_POOL_V1
b1_latest_index: missing
text_task_eligible: true
identity_validation: pending_image_validation
h3_render_eligible: false
chain: N8 -> NZ7 -> Z5_to_7
primary_relation: NZ_generates_Z
choice_variable: retreat_vs_one_step_toward_sound
b3_ready: true
render_claim: none
```
