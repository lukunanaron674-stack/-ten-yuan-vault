---
type: social-to-us-gap-scan-checkpoint
status: canonical-current
version: v1.0
updated: 2026-10-08
parent_linear: 674-272
mode: PRE_R9_FREEZE
internal_router: INTERNAL_ROUTER_V1_FROZEN
human_entry: 黎黎隆项目/00_总览/674总览.canvas
machine_entry: 黎黎隆项目/00_总览/AI后台/00_AI后台总索引.md
---

# R9 外部知识补洞前检查点｜2026-10-08

## 0｜为什么记录这份文件

防止聊天上下文、记忆或执行器切换后丢失以下关键状态。

这不是新知识正本，也不是实验结果。
它只冻结：
- 已完成到哪里；
- 新内部路由现在长什么样；
- 为什么还需要最后一批补洞搜索；
- 下一批只允许搜哪些方向；
- 什么时候停止继续搜索。

---

# 1｜当前内部架构事实

## 两层制已经成为现行入口

第一层｜USER Human View
- `黎黎隆项目/00_总览/674总览.canvas`
- 三张分控：项目 / B端 / H3
- 只显示：目标、分目标、体量、可行度、当前进度、下一步、needs_user、当前唯一关键 NX

第二层｜AI 后台
- 唯一机器入口：`黎黎隆项目/00_总览/AI后台/00_AI后台总索引.md`
- 承载 Markdown + Linear + Git + 真实资产仓
- 原 `AI数据库` 已 DEPRECATED AS PRIMARY ENTRY，只保留 schema / 历史协议 / 适配文档

## 当前内部路由状态

- INTERNAL_ROUTER_V1_FROZEN
- ACTIVE_CANONICAL / ACTIVE_EXECUTION 总量按 R5 反向验收为 22
- 674-294 = Linear Issue Registry / Recover Before Create
- 674-116 = 项目问题判断 / L1-L4 / 调度
- 674-115 = 旧记忆 / 来源 / 文件证据施工
- 674-272 = SOCIAL→US 外部知识总控
- 674-273 已 Duplicate → 674-272，不得复活为独立 AI_LEARN 入口
- Search ranking 不等于正本主权
- 工单适应 Canvas / 内部知识，不反向为了 Linear 重构 Canvas

---

# 2｜已完成的外部知识收集

R1–R7：
- R1 28
- R2 30
- R3 30
- R4 30
- R5 30
- R6 30
- R7 30

TOTAL_RAW = 208

R8 总收束：
- MASTER_PATTERNS = 42
- CONFLICT_CLUSTERS = 16
- KNOWN_GAPS = 10
- COLLECTION = FROZEN

POST-FREEZE DISPOSITION：
- DIRECT_FULL = 21
- SPLIT = 15
- VERIFY_FULL = 6

说明：
- DIRECT = 结构/治理知识可以直接吸收，但不自动声称有项目效果增益
- SPLIT = 结构部分可吸收；“更稳/更准/更省”的效果部分仍验证
- VERIFY = 核心本身就是项目效果假设，不能直接升级

验证 Canvas 已建立于：
`AI问题解决Canvas/四主问题与社会映射/SOCIAL_TO_US_社会到我们_学习与吸收.canvas`

其中已有大白话 V01–V20，但后续应把“社会已经回答的前半”吸收，仅保留项目特定未知量。

---

# 3｜为什么吸收 R1–R4 暂缓

原计划：
外部208条冻结 → 直接吸收 R1–R4 → 验证。

读取最新 22 工单内部路由和现行 AI后台后，发现已有 208 条对 AI动画生产的几个重要执行域覆盖不足。

因此当前正确顺序调整为：

208 RAW / 42 MASTER 已冻结
→ 最新22工单路由核对 DONE
→ 最新AI后台核对 DONE
→ R9 最后一批补洞
→ 总去重
→ 再执行最终吸收 R1–R4
→ 剩余项目特定未知进入验证 Canvas / E0→E5

禁止现在先大规模吸收、R9 后又二次重构同一批知识。

---

# 4｜R9 只允许补的 6 个缺口

## GAP-01｜Script → Beat → Shot / Storyboard / Coverage

上一批只确认“先做 Storyboard”，没有系统深搜：
- Script event 如何拆 Beat
- Beat 如何转 Shot
- Shot purpose / coverage
- shot package 的最小结构
- 镜头可剪辑性与信息覆盖

直接对应 AI后台 / B端：
THEME → SCRIPT → STORYBOARD → H3_PLAN

## GAP-02｜Camera / Blocking / Choreography

R4重点是 continuity，不是导演调度。

需补：
- camera trajectory
- actor blocking
- staging
- action choreography
- camera ↔ actor joint planning
- screen direction / lens / distance / movement 的可执行表达
- 复杂多角色交互如何降低生成失败

## GAP-03｜Audio / Dialogue / Lip-sync / Voice Continuity

当前最明显缺口。

内部已有需求：
- ambient
- emotional
- role
- H3 block 输入包中的 audio
- 对白 / 口型 / 动作与声音同步

需补：
- voice identity consistency
- dubbing
- dialogue timing
- lip-sync
- speaker attribution
- speech ↔ facial motion
- AMB / SFX / BGM 与镜头状态
- 跨镜头音频连续性

## GAP-04｜Post / Color / Sound / Delivery

R7只提到 NLE，未形成完整生产知识。

需补：
- editorial / NLE assembly
- color management
- ACES / display / mastering（只收成熟通用方法）
- audio mix / loudness
- subtitles / captions
- proxy / conform
- final deliverables
- 版本交付和QC

## GAP-05｜Local Inference / VRAM / Throughput / Cost

内部明确 UNKNOWN：
- 4080真实 RAM / VRAM
- 264f 边界
- timeout
- throughput
- temperature
- concurrency

需补外部成熟方法：
- quantization
- FP8 / INT8 / INT4 的适用边界
- cache / activation cache
- TeaCache / MagCache 类方法的通用原则
- tiled VAE / offload / block swap
- batching / queue / backpressure
- throughput / cost accounting
- local vs cloud economics

注意：
外部方法可以收，具体 4080 / H3 / Wan 数字必须本地实测。

## GAP-06｜Rights / License / Provenance / Commercial Delivery

前208条几乎未系统覆盖。

需补：
- model license
- input/reference asset rights
- generated-output commercial use
- attribution
- provenance / content credentials
- C2PA
- human oversight record
- commercial handoff需要哪些来源/版本/修改记录

目标：
让现有 asset_id / SHA / parent_asset / version / source_task provenance 能支持对外交付解释。

---

# 5｜R9 三轮结构

## R9-A｜导演 / 镜头 / 剧本编译

范围：
- Script → Beat → Shot
- Storyboard / Coverage
- Camera
- Blocking
- Action choreography

目标新增 RAW：20–25

## R9-B｜音频 / 后期 / 跨模态

范围：
- Voice
- Dialogue
- Lip-sync
- Sound continuity
- AMB / SFX / Music
- Cross-modal QA
- NLE
- Color / Delivery

目标新增 RAW：20–25

## R9-C｜生产基础设施 / 商业交付

范围：
- VRAM / quantization / cache / offload
- throughput / queue economics
- current model-by-job capability
- Rights / Licensing / C2PA / provenance

目标新增 RAW：20–25

预计新增：
R9 TOTAL RAW ≈ 60–75

---

# 6｜优先级

P0：
1. Audio / Dialogue / Lip-sync / Cross-modal continuity
2. Camera / Blocking / Script→Shot
3. 4080 / Wan / H3 真实推理性能与生产经济

P1：
4. Post / Color / Delivery
5. Current model-by-job capability matrix
6. Rights / C2PA / commercial provenance

---

# 7｜R9 搜索边界

允许：
- 论文
- 官方技术文档
- 开源项目
- 行业工作流
- 高质量社区生产经验
- 成熟影视/VFX/声音/后期相邻行业方法

禁止重复大搜：
- Version / provenance 基础
- 普通角色 Reference / 四宫格
- 一般向量数据库
- 普通LongTake continuation
- 基础 VLM judge
- 基础 multi-agent orchestration
- coarse-to-fine 的一般论证

这些已被 R1–R8 覆盖。

---

# 8｜STOP 条件

R9-A / R9-B / R9-C 完成后：

1. 与已有 208 RAW 去重；
2. 更新 MASTER PATTERN；
3. 更新冲突簇和缺口；
4. STOP 外部无限搜索；
5. 开始最终知识吸收 R1–R4；
6. 项目特定效果问题进入验证 Canvas / E0→E5。

除非后续真实实验暴露“现有社会知识不足”，否则不再启动大规模 Research。

---

# 9｜恢复执行时只需读这里

恢复口令：

`R9-A` → 导演 / 镜头 / 剧本编译
`R9-B` → 音频 / 后期 / 跨模态
`R9-C` → 生产基础设施 / 商业交付

如果执行器不知道当前状态：
先读本文件
→ 再读 `AI后台/00_AI后台总索引.md`
→ 再读 674-272 HOT_HEADER
→ 不重新发散 R1–R8。


# 10｜R9-A DONE｜导演 / 镜头 / 剧本编译

## 结果

- ROUND = R9-A
- RAW_ADDED = 24
- KNOWLEDGE_ID = K209–K232
- TOTAL_RAW = 232
- MODE = COLLECT_ONLY / GAP_FILL
- INTERNAL_Z_MAPPING = NOT_STARTED
- E0_E5 = NOT_STARTED
- CANONICAL_MUTATION = NONE
- NEXT = R9-B｜音频 / 后期 / 跨模态

## RAW｜K209–K232

K209｜Script 到生产不是“按句拆 Prompt”；成熟影视流程会把 screenplay 继续转成 shooting script / storyboard / shot list，并补齐每镜所需的人物、动作、地点、道具、机位、特殊效果等执行信息。来源：Adobe shooting script / shot list。成熟度：A。

K210｜Shot 是生产与剪辑单位，不只是故事段落。Shot list 的价值之一是保证 editor 需要的 coverage，并减少现场/生成阶段遗漏必要镜头。来源：Adobe shot list。成熟度：A。

K211｜Coverage 不是“镜头越多越好”；shot list 必须可扫读、围绕必要 coverage 组织，过度详细会降低可执行性。来源：Adobe shot list。成熟度：A。

K212｜Master shot 可以承担场景地理、关键动作和 timing/blocking 的基准，然后 close-up / reverse / insert 等 coverage 围绕它展开。来源：Adobe master shot。成熟度：A。

K213｜动画工作流中的 animatic 本质上是“先剪后做”：在粗图阶段先决定 timing、camera blocking、character action 与设计，再进入昂贵动画/生成。来源：Frame.io animation editing。成熟度：A。

K214｜Storyboard 不只是漂亮预览，而是把 script 中的叙事意图变成 shot angle / size / composition / visual relationship 的决策层。来源：Adobe storyboarding。成熟度：A。

K215｜PACE把 screenplay→film 中间层定义为“空间优先”的 planning：先明确角色、道具、场景、主体位置和相机，而不是把这些都留给自由文本 Prompt 自己猜。来源：PACE arXiv 2609.19853。成熟度：C（新研究）。

K216｜PACE的 typed hierarchy 将信息分到 script / scene / shot / panel 层，并向下继承；同一事实只在正确层写一次，避免每镜重复描述造成漂移。来源：PACE。成熟度：C。

K217｜同一 Director Plan 可以同时编译成 diffusion prompt 与 metric 3D scene，再由 camera solver 让声明的 framing 尽量变成真正的 staged framing；说明“导演意图”可拆成可计算字段，而非只写自然语言。来源：PACE。成熟度：C。

K218｜PACE结果也暴露重要边界：几何/构图控制与动作表达可能发生冲突；更强的 framing control 不等于动作也更对。因此 camera/blocking/action 不能压成单一 prompt-strength。来源：PACE。成熟度：C。

K219｜STAGE不把 storyboard 仅当若干孤立 keyframe，而是为每个 shot 预测 start-end frame pair，使镜头本身带有“从哪里开始、到哪里结束”的结构。来源：STAGE, CVPR 2026。成熟度：B。

K220｜结构化 storyboard 可以作为 multi-shot narrative 的主锚；shot 内与 shot 间需要不同机制，说明 storyboard packet 应区分 per-shot temporal intent 与 cross-shot story progression。来源：STAGE。成熟度：B。

K221｜ShotPlan证明 multi-shot 需要显式的 cut/transition timing；planning token 可在 frame level 控制 shot transition timestamp。来源：ShotPlan arXiv 2607.17675。成熟度：C。

K222｜因此“然后切到近景”不应只存在于自然语言里；cut frame / shot duration / transition point 应成为可执行字段。来源：ShotPlan + 传统剪辑实践。成熟度：B/C convergence。

K223｜ShotDirector指出低层视觉连续并不等于导演表达；shot transition 本身承载 narrative expression，需要 editing-pattern-aware hierarchy。来源：ShotDirector, CVPR 2026。成熟度：B。

K224｜ShotDirector把 camera control 拆成 parameter-level 6-DoF pose / intrinsic settings + hierarchical semantic prompt，说明镜头控制至少有“数值相机层”和“叙事语义层”两套表示。来源：ShotDirector。成熟度：B。

K225｜ShotVerse提出 Plan-then-Control：Planner先从文本/空间先验得到全局对齐 camera trajectories，再由 Controller 执行；这是“导演规划”和“视频渲染”分离的外部证据。来源：ShotVerse 2026。成熟度：C。

K226｜ShotVerse也指出两种极端都不好：纯文字 camera prompt 不够精确；完全手绘 trajectory 又太重。更实际的是自动规划 + 人可改 + 精确执行。来源：ShotVerse。成熟度：C。

K227｜Towards Storytelling Animations 将角色运动与相机运动视为同等重要并联合建模；故事性动作里 camera 不应是动作完成后才附加的装饰变量。来源：CVPR 2026。成熟度：B。

K228｜多角色故事镜头中，camera placement/motion决定角色在画面中的大小、构图和关系读取，因此 actor blocking 与 camera path 是耦合问题。来源：Towards Storytelling Animations。成熟度：B。

K229｜GenCine进一步指出：当 camera 与 foreground 同时运动时，单纯2D拖拽轨迹存在歧义；把 camera/object motion 放进同一3D world coordinate scaffold 更容易保持“物体相对世界怎么动”。来源：Generative Cinematographer 2026。成熟度：C。

K230｜PlayLife显示 tracking shot 的可靠执行需要把 human motion sequence 与 camera/view control协调；appearance anchor、动作序列和 camera follow 可以是分开的输入职责。来源：PlayLife, IJCV 2026。成熟度：B/C。

K231｜AI-native previs 的 practical pattern 是“低保真但无歧义”的 blockout：简单3D人偶/mark/camera path 只要能说清走位和机位，就能作为 motion-reference package；不需要先做漂亮3D。来源：Blockout 2026 design + PACE geometry-control方向。成熟度：D/C。

K232｜多镜头“看起来连贯”不等于会执行专业剪辑语法；CutCraft显示当前系统对 shot structure、transition grammar、J/L-cut、更高阶 montage 的执行仍明显不稳定，因此 Director Packet 还应把 editing intent 显式保存，不能指望模型自动“电影化”。来源：CutCraft 2026。成熟度：C。

## MERGED｜R9-A 母知识

A01｜BEAT / SHOT = FUNCTIONAL UNIT
不要按句号拆镜。先判断这一段剧情的叙事功能、信息变化、动作变化，再决定一镜还是多镜。

A02｜SHOT PURPOSE + COVERAGE
每镜必须知道“为什么存在”，并考虑编辑需要的 coverage；不是镜头越多越好。

A03｜SPATIAL PLAN BEFORE PROMPT
人物/道具/场景位置先明确，再让相机看；否则 Prompt 会替导演偷偷决定 blocking。

A04｜BLOCKING × CAMERA ARE COUPLED
人物怎么走和相机怎么走必须联合规划，尤其多角色/追踪/遮挡镜头。

A05｜CAMERA HAS TWO LAYERS
语义层：shot size / angle / relationship / reveal。
参数层：pose / 6DoF / lens/intrinsics / trajectory。
两层都需要，不能只留一句“cinematic dolly”。

A06｜SHOT BOUNDARY / CUT TIMING IS EXECUTABLE DATA
shot duration、cut point、transition type、start/end state 都应该是字段，不是散落在Prompt文字里。

A07｜STORYBOARD / ANIMATIC = APPROVAL + EXECUTION PLAN
它既是视觉预演，也是 timing / blocking / camera / edit 的低成本冻结层。

A08｜TYPED INHERITANCE REDUCES RESTATEMENT DRIFT
script/scene/shot/panel 分层；共享事实向下继承，局部差异在局部覆盖。

A09｜PREVIS TARGET = UNAMBIGUOUS, NOT BEAUTIFUL
复杂镜头必要时用 greybox / blockout；其价值是让空间和运动不歧义，而不是作为最终画面。

A10｜DIRECTOR PACKET SHOULD COMPILE, NOT JUST DESCRIBE
导演输出应能同时喂给 storyboard、previs、video prompt、camera control、review，而不是每个阶段重新理解自然语言。

## 推荐的最小 Director / Shot Packet（仅外部收集结果，不写入内部正本）

```yaml
scene_id:
beat_id:
shot_id:
shot_purpose:
story_change:
subjects:
required_props:
scene_geometry_ref:

blocking:
  subject_positions:
  subject_motion:
  interaction_target:

camera:
  shot_size:
  angle:
  lens_or_focal_behavior:
  camera_pose:
  camera_motion:
  trajectory_ref:

timing:
  duration:
  action_beats:
  cut_in:
  cut_out:
  transition_intent:

visual:
  composition_goal:
  lighting_intent:
  reference_assets:

continuity:
  opening_state:
  closing_state:
  screen_direction:
  eyeline:
  action_phase:

coverage_role:
  master | wide | medium | close | reverse | insert | reaction | transition | other

editability:
  must_have:
  optional:
  alternate:
```

## 冲突 / 边界

- **精确几何 vs 动作自然**：PACE表明 framing 锁得更准，不代表 action 也更准；需要分目标。
- **完整规划 vs 可执行简洁**：Adobe强调 shot list 过度详细会失去可用性；typed schema应有核心字段与可选字段，不能每镜写百科。
- **全手工 trajectory vs 纯文本 camera**：ShotVerse显示两端都有成本/精度问题；更值得保留“自动计划→必要时人工改→控制器执行”。
- **一个长take vs coverage**：长take适合连续体验，但会降低剪辑选择；coverage提供编辑自由，二者是导演选择，不是一方永久优于另一方。
- **漂亮 storyboard vs 可执行 storyboard**：DreamShot/STAGE更强调跨镜一致与shot结构；工业previs更强调time/blocking/camera。最终生成前需要的是“能执行”，不是“单张最漂亮”。

## COVERAGE

R9-A 已覆盖：
- Script / shooting script / storyboard / shot list
- Beat→Shot 的功能性拆解
- coverage / master shot / reverse / insert / reaction
- animatic / edit-first
- typed script→scene→shot→panel hierarchy
- spatial blocking
- camera shot size / angle / lens / pose / trajectory
- actor-camera joint motion
- start/end storyboard pair
- explicit cut timing / transition grammar
- greybox / 3D previs
- plan-then-control

R9-B 不再重复这些内容；转向：
Audio / Dialogue / Voice identity / Lip-sync / AMB/SFX/BGM / cross-modal timing / NLE / color / delivery。
