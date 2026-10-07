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


# 11｜R9-B DONE｜音频 / 后期 / 跨模态

## 结果

- ROUND = R9-B
- RAW_ADDED = 24
- KNOWLEDGE_ID = K233–K256
- TOTAL_RAW = 256
- MODE = COLLECT_ONLY / GAP_FILL
- INTERNAL_Z_MAPPING = 保持当前272最新状态，不在本轮覆盖
- E0_E5 = 本轮未推进
- CANONICAL_EFFECT_CLAIMS_AUTO_PROMOTED = 0
- NEXT = R9-C｜生产基础设施 / 商业交付

## RAW｜K233–K256

K233｜Movie dubbing 至少同时有四个目标：voice identity、speech naturalness、lip synchronization、timing/context alignment；不能把“声音像”当成“配音完成”。来源：CoSyncDiT 2026。成熟度：B/C。

K234｜Dubbing 的 reference voice 与 target lip motion 是不同约束源；强行只做 duration-level 对齐会伤害自然度/音色，因此语音身份、语义、视觉时序应分账。来源：CoSyncDiT 2026。成熟度：C。

K235｜复杂场景 lip-sync 是独立难题；普通正脸/单人通过不代表遮挡、侧脸、运动、复杂背景仍能同步。来源：ComplexSync 2026 + complex benchmark。成熟度：C。

K236｜Audio-video synchronization 至少应拆成“语义同步”和“时间同步”：声音是不是这个事件的声音，与声音是否在正确时刻发生，是两个指标。来源：AV-SyncBench 2026。成熟度：B。

K237｜同步音视频质量不能用单一总分；VABench同时检查 text↔video、text↔audio、video↔audio、AV sync、lip-speech等多维关系。来源：VABench CVPR 2026。成熟度：B。

K238｜Audio-video aesthetics 高不代表任务可靠；AVGen-Bench发现模型可有较好整体观感，但 speech coherence、physics、music pitch 等仍明显失败。来源：AVGen-Bench ICML 2026。成熟度：B。

K239｜Video→Audio/Foley 需要同时控制“是什么声音”和“什么时候响”；MultiFoley把 text/audio/video 条件分开，说明 timbre/semantic source 与 temporal cue 应独立表示。来源：MultiFoley CVPR 2025。成熟度：B。

K240｜FoleyCrafter将 semantic adapter 与 temporal adapter分离；再次支持“声音语义”和“声音时序”是不同控制维度。来源：FoleyCrafter 2026。成熟度：B。

K241｜Video-Foley用 frame-level RMS/intensity envelope做 temporal event condition，同时用text/audio决定音色；声音强度曲线本身也可成为时间状态，而不只是一个音频文件。来源：IEEE TASLP 2025。成熟度：B。

K242｜长视频声音不能只按每个短块独立生成；SALSA-V说明 long-form V2A需要连续合成/条件续写，否则频谱/音色/环境底容易在块边界跳变。来源：SALSA-V ICML 2026。成熟度：B。

K243｜Reference audio不仅能锁voice，也可用于匹配环境/Foley的spectral character；“声音参考”应区分 voice identity reference 与 environment/SFX character reference。来源：SALSA-V / MultiFoley。成熟度：B。

K244｜物理上“听起来合理”不等于声音真的匹配画面物理；FlatSounds显示文本caption有时提高语义/物理正确，却可能降低temporal alignment，因此物理声效QA应单独检查事件与时刻。来源：FlatSounds CVPR 2026。成熟度：B。

K245｜成熟后期先把音频分类成 Dialogue / Music / SFX / Ambience，再按类别处理；不同类别的降噪、压缩、EQ、ducking、reverb任务不同。来源：Adobe Premiere Essential Sound 2026。成熟度：A。

K246｜Dialogue存在时，Music/Ambience可通过ducking自动降低，但ducking是mix automation，不等于最终创意混音；类别标签是自动化前提。来源：Adobe Premiere 2026。成熟度：A。

K247｜音频和画面不必同一帧切换；J-cut/L-cut是成熟剪辑语法：下镜声音可提前进入，或上镜声音延续到下一画面，用于预示/连续性。来源：Adobe Premiere 2025/2026。成熟度：A。

K248｜因此“shot boundary”与“audio boundary”应分开记录；每个镜头只有一个同步起止点会限制对白、环境音、声桥与反应镜剪辑。来源：J/L-cut + editorial practice。成熟度：A。

K249｜Loudness是交付工程指标，不应靠“听起来差不多”；ITU-R BS.1770定义programme loudness与true-peak测量算法。来源：ITU-R BS.1770-5。成熟度：A。

K250｜具体LUFS/LKFS目标取决于交付平台，不能把一个平台数字写成通用规则；例如Premiere Auto-Match示例使用-23 LUFS，而Netflix近场对白交付使用其特定dialogue-gated loudness规范。来源：Adobe / Netflix。成熟度：A。

K251｜专业交付保留 Dialogue / Music / Effects stems；Netflix要求某些交付中D/M/E或M&E能够重组/支持dubbing，说明最终mix和可复用stem是不同资产。来源：Netflix Post Production / Dubbing specs。成熟度：A。

K252｜M&E不是简单“删掉对白”；ambience、Foley及所有非对白内容必须完整存在并匹配最终mix，才能让后续dub无缝替换对白。来源：Netflix M&E delivery requirements。成熟度：A。

K253｜声音空间也是连续性：reverb/delay、panning、perspective表达人物所处空间；跨镜或dub时若这些变化不对应场景，会破坏空间感。来源：Netflix dubbing creative guidelines。成熟度：A。

K254｜Color management应区分 input / working(timeline) / output transform，并依赖正确source tagging；调色和显示转换不能混成一个LUT步骤。来源：Adobe Premiere Color Management / ACES / DaVinci Resolve。成熟度：A。

K255｜ACES的核心价值之一是把不同输入统一到scene-referred工作空间，再通过Output Transform适配不同显示/交付；“调色结果”和“显示设备变换”是不同层。来源：ACES官方文档。成熟度：A。

K256｜Final delivery不是单个MP4：成熟流程还包含timeline metadata、audio stems、timed text/subtitles、color/output metadata、版本/组合关系；OTIO负责剪辑结构，IMF用Composition Playlist组织完成版essence，字幕也有独立timing/file规范。来源：OpenTimelineIO / SMPTE IMF / Netflix timed text。成熟度：A。

## MERGED｜R9-B 母知识

B01｜AUDIO IS MULTI-LAYER STATE
Dialogue / Voice / Music / SFX / Ambience必须分轨/分职责；“音频”不是一个单字段。

B02｜IDENTITY ≠ LIP SYNC ≠ NATURALNESS
声音像谁、说得自然不自然、嘴是否同步、句子是否落在正确动作/上下文，是不同维度。

B03｜SEMANTIC SYNC ≠ TEMPORAL SYNC
“这个声音属于这个事件”与“它在这一帧响”分开记录与审核。

B04｜AUDIO NEEDS TIMELINE EVENTS
对白start/end、SFX event、music cue、ambience bed、intensity envelope、audio lead/lag都应是时间线事件，而不是Prompt段落。

B05｜SHOT CUT ≠ AUDIO CUT
J/L-cut、声桥、reaction over dialogue要求video in/out与audio in/out可独立。

B06｜LONG-FORM AUDIO NEEDS CONTINUITY
长段生成要保持voice timbre、ambience spectral character、room tone、music key/texture等连续状态；不能每10秒完全重新起音。

B07｜MIX ≠ STEMS
Final mix是观看版本；Dialogue / Music / Effects / M&E等stems是返工、dub、归档、交付用生产资产。

B08｜LOUDNESS / TRUE-PEAK ARE DELIVERY METRICS
响度和true-peak要按目标平台测；平台规范是profile，不是全局常数。

B09｜COLOR MANAGEMENT IS A PIPELINE
Input transform → working/timeline color space → creative grade → output transform；显示转换与创意调色分离。

B10｜FINAL DELIVERY IS A PACKAGE
Picture + mix/stems + captions/timed text + timeline/composition metadata + color/output profile + version/provenance共同构成交付。

## 推荐的最小 Audio / Post Packet（仅外部收集结果，不写入内部正本）

```yaml
sequence_id:
shot_id:
timebase:

dialogue:
  speaker_id:
  voice_identity_ref:
  text:
  in:
  out:
  lip_sync_required:
  spatial_perspective:
  room_character:

sfx_events:
  - event_id:
    semantic_source:
    in:
    peak_or_envelope:
    reference_audio:

ambience:
  environment_id:
  bed_ref:
  in:
  out:
  continuity_group:

music:
  cue_id:
  in:
  out:
  role:
  transition:
  duck_against_dialogue:

split_edit:
  audio_in:
  audio_out:
  video_in:
  video_out:
  j_or_l_cut:

mix:
  dialogue_stem:
  music_stem:
  effects_stem:
  ambience_or_me_stem:
  loudness_profile:
  true_peak_profile:

color:
  source_color_space:
  timeline_space:
  output_space:
  output_transform:

captions:
  language:
  timed_text_asset:
  timing_verified:

delivery:
  picture_master:
  mix_master:
  stems:
  captions:
  timeline_or_cpl:
  qc_profile:
```

## 冲突 / 边界

- **自动同步 ≠ 创意声音设计**：V2A可以对齐事件，但拟音的夸张、象征、主观声仍需要设计意图。
- **统一生成音画 ≠ 必然更可控**：联合模型能提高耦合，但也可能更难单独修音频或画面；模块化后期仍有明确价值。
- **字幕跟音频 ≠ 字幕跟镜头**：timed text同时受speech timing和shot change影响，不能机械只贴waveform。
- **固定LUFS ≠ 通用交付**：不同平台/用途目标不同；只吸收“必须profile化测量”，不吸收单一数字。
- **ACES ≠ 必须所有小项目都全套使用**：吸收其input/working/output分层思想；具体色管线按项目复杂度决定。
- **Final MP4 ≠ Master Package**：社交发布可以只有单文件，但可持续生产/商业交付需要可返工的timeline、stems、captions与版本信息。

## COVERAGE

R9-B 已覆盖：
- dubbing / voice identity / naturalness
- lip-sync复杂场景
- semantic vs temporal AV synchronization
- video-to-audio / Foley
- long-form audio continuity
- reference audio roles
- Dialogue / Music / SFX / Ambience分类
- ducking / J-cut / L-cut
- loudness / true peak
- D/M/E stems / M&E / dubbing
- reverb / panning / perspective
- color management / ACES
- OTIO / IMF / captions / delivery packaging

R9-C 不再重复这些内容；转向：
VRAM / quantization / cache / offload / throughput / queue economics / current model-by-job capability / Rights / Licensing / C2PA / commercial provenance。
