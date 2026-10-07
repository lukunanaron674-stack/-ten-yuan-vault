---
type: external-knowledge-master
status: frozen-current
version: v2.0
updated: 2026-10-08
parent_linear: 674-272
raw_total: 280
master_total: 66
conflict_clusters: 28
remaining_validation_gaps: 12
broad_research: STOP
---

# SOCIAL→US 外部知识总母库 v2.0｜280 RAW → 66 MASTER

## 0｜最终状态

R1–R8 RAW = 208  
R9-A = 24  
R9-B = 24  
R9-C = 24  

**ALL_EXTERNAL_RAW = 280**

总去重后：

- MASTER_PATTERNS = **66**
- CONFLICT_CLUSTERS = **28**
- REMAINING_PROJECT_VALIDATION_GAPS = **12**
- EXTERNAL_BROAD_RESEARCH = **STOP**

RAW 不删除；MASTER 是路由/吸收入口。

---

# 1｜R9 与旧42 MASTER 的去重

R9-A 10个母知识：
- 新增为MASTER：A01 A02 A03 A04 A05 A07 A09 → 7
- 并回旧MASTER：
  - A06 SHOT BOUNDARY/CUT EXECUTABLE → M22
  - A08 TYPED INHERITANCE → M06
  - A10 DIRECTOR PACKET COMPILE → M06 + M37

R9-B 10个母知识：
- 10个全部新增，因为旧42只把“音频/NLE存在”作为生产环节，没有形成音频/后期知识结构。

R9-C 10个母知识：
- 新增为MASTER：C01, C02+C03合并, C04, C05, C07, C08, C09+C10合并 → 7
- 并回旧MASTER：
  - C06 MODEL-BY-JOB MUST BE CURRENT → 扩展 M41（增加 version/date-stamp）
  - C02/C03 内部高度重复 → 合并为一个 VRAM/OFFLOAD master
  - C09/C10 provenance/compliance → 合并为一个外部交付 provenance/compliance master

因此：

42 old + 24 net-new = **66 MASTER**

---

# 2｜66 MASTER PATTERNS

## A｜生产对象 / 状态 / 可恢复执行

M01 OBJECT MODEL  
Project / Shot / Asset / Task / Version / File 分离。

M02 EXPLICIT STATE  
状态机/Gate显式存在，不靠聊天推断。

M03 NON-DESTRUCTIVE VERSIONING  
版本不覆盖，保留predecessor/provenance。

M04 CHECKPOINT / RESUME  
长流程可暂停、恢复、fork。

M05 IDEMPOTENT SIDE EFFECTS  
重复执行不得重复产生正式副作用。

M06 STRUCTURED / COMPILABLE PACKETS  
阶段之间用结构化packet；共享事实分层继承；Director输出应能被下游编译，而不是重复解释自由文本。

---

## B｜角色 / 场景 / Reference

M07 IDENTITY ≠ FACE  
身份包含脸、发型、比例、服装、结构和识别标记。

M08 REFERENCE DECOMPOSITION  
Identity / Costume / Pose / Shape / Style / Composition 分账。

M09 CONSISTENCY ↔ EDITABILITY  
身份锁定与姿态/镜头/动作自由度存在trade-off。

M10 MULTI-VIEW JOINT ASSET  
三视/四宫格是同一实体的联合资产。

M11 STYLE ≠ CONTENT ≠ LAYOUT  
风格、内容、构图应尽量解耦。

M12 SCENE IDENTITY INCLUDES GEOMETRY  
场景身份包含空间结构，不只是颜色/画风。

---

## C｜素材仓 / 长期记忆 / 检索

M13 ENTITY-FIRST MEMORY  
长期记忆优先围绕角色/道具/场景实体。

M14 CURRENT STATE ≠ HISTORY  
当前状态、历史、失败版、撤销状态分层。

M15 MEMORY TIERS / BUDGET  
Working / episodic / semantic / archive分层并受预算约束。

M16 HYBRID RETRIEVAL  
metadata hard filter + exact/lexical + vector；graph按需。

M17 APPROVED > LATEST  
下游默认消费批准版，不消费“最新”。

M18 RETRIEVE → USE → UPDATE  
读取实体状态→生产→按真实结果更新/撤销。

---

## D｜多镜头 / LongTake / Continuity

M19 CONTINUITY IS MULTI-LAYER  
镜内运动、接缝、身份/场景、长程漂移分开处理。

M20 SHORT MEMORY ≠ LONG ANCHOR  
最近运动状态与长期身份/场景anchor不同。

M21 SELECT HISTORY  
长程只检索相关历史，不默认全量灌入。

M22 SHOT BOUNDARY IS EXECUTABLE DATA  
shot duration / cut point / transition / opening / closing state显式存在。

M23 FIRST-LAST ≠ CONTINUATION  
双端插值与沿运动继续是不同任务。

M24 ANCHOR AGAINST DRIFT  
长程AR的周期锚/recache/global memory属于待验证抗漂方法族。

M25 WORLD / CINEMATIC STATE  
world geometry、screen direction、eyeline、axis、action phase、velocity等属于连续性状态。

---

## E｜QA / Retake

M26 QUALITY IS A VECTOR  
画质、时序、身份、任务遵从、物理/逻辑、审美分维。

M27 DETECT → LOCALIZE → EXPLAIN  
QA输出time range / region / taxonomy / severity。

M28 UNCERTAINTY IS A STATE  
AMBIGUOUS / low-confidence / needs-human正式存在；pairwise效果单独验证。

M29 TASK SUCCESS ≠ VISUAL QUALITY  
好看、完成任务、保持未改区、时间稳定分开。

M30 LOCAL REPAIR + REGRESSION  
局部修后同时检查原failure与新增failure。

M31 MACHINE REVIEW ≠ FINAL APPROVAL  
机器做预审/定位/比较；作者最终批准绑定确切版本。

---

## F｜Multi-Agent / 人在环外

M32 CLEAR OWNERSHIP / DEPENDENCY ORCHESTRATION  
按职责与依赖选择Sequential/Concurrent/Handoff/Manager。

M33 BOUNDED SHARED STATE  
共享必要事实，其他private；不默认全历史共享。

M34 TERMINATION / STALL / HUMAN GATE  
DONE / STALL / REPLAN / WAIT_HUMAN / TIMEOUT显式。

M35 DURABLE + ISOLATED EXECUTION  
checkpoint/resume、job隔离、fan-out/fan-in、锁/去重支撑无人值守。

M36 OBSERVABILITY + INDEPENDENT VERIFICATION  
trace完整因果链；多Agent共识不替代独立验证。

---

## G｜商业生产经济

M37 PREPRODUCTION BEFORE EXPENSIVE GENERATION  
剧本可执行性、资产、分镜、节奏先锁，再进入昂贵生成。

M38 APPROVED STILL → MOTION  
一致性敏感镜头先静帧PASS再I2V，项目收益需验证。

M39 SHOT-BEAT ECONOMICS  
短beat coverage vs完整longtake的经济边界需项目验证。

M40 COARSE → SELECT → REFINE  
低成本preview/粗产→筛选→只精修赢家；实际节省需验证。

M41 MODEL BY JOB / VERSION / DATE  
按任务族选模型；model matrix必须绑定version、date、cost、locality，禁止永久总冠军。

M42 LOG + TEMPLATE THE REPEATABLE PARTS  
记录take/失败/成本/参数并把稳定流程固化成recipe。

---

# H｜导演 / Script→Shot / Camera（R9新增）

M43 BEAT → SHOT IS FUNCTIONAL COMPILATION  
不能按句号拆镜；先判断叙事功能、信息变化、动作变化，再决定shot。

M44 SHOT PURPOSE + COVERAGE  
每镜必须知道为什么存在，并确保剪辑所需coverage；镜头不是越多越好。

M45 SPATIAL PLAN BEFORE PROMPT  
角色/道具/场景位置先明确，再让相机和生成模型执行。

M46 BLOCKING × CAMERA ARE COUPLED  
人物走位和camera path联合规划，特别是多角色/追踪/遮挡。

M47 CAMERA HAS SEMANTIC + PARAMETRIC LAYERS  
语义层：shot size / angle / relation / reveal；参数层：pose / lens / trajectory / intrinsics。

M48 STORYBOARD / ANIMATIC = APPROVAL + EXECUTION PLAN  
Storyboard/animatic用于低成本冻结timing、blocking、camera、edit，不只是漂亮预览。

M49 PREVIS TARGET = UNAMBIGUOUS, NOT BEAUTIFUL  
复杂镜头的greybox/blockout首先解决空间与运动歧义。

---

# I｜Audio / Post / Cross-modal（R9新增）

M50 AUDIO IS MULTI-LAYER STATE  
Dialogue / Voice / Music / SFX / Ambience分轨分职责。

M51 VOICE IDENTITY ≠ NATURALNESS ≠ LIP-SYNC ≠ TIMING  
声音像谁、说得自然、嘴同步、句子落点是不同维度。

M52 SEMANTIC SYNC ≠ TEMPORAL SYNC  
“声音属于这个事件”和“声音在正确时刻发生”分开评估。

M53 AUDIO NEEDS TIMELINE EVENTS  
对白、SFX、music cue、ambience bed、intensity envelope作为时间线事件。

M54 SHOT CUT ≠ AUDIO CUT  
J/L-cut、声桥要求video in/out和audio in/out可独立。

M55 LONG-FORM AUDIO CONTINUITY  
voice timbre / ambience / room tone / music texture的长程连续性是独立问题；具体解决方法需验证。

M56 MIX ≠ STEMS  
Final mix与Dialogue / Music / Effects / M&E等生产stem分开。

M57 LOUDNESS / TRUE-PEAK ARE DELIVERY METRICS  
按目标平台profile测量，不设全局单一LUFS。

M58 COLOR MANAGEMENT IS A PIPELINE  
Input → working/timeline → creative grade → output transform分层。

M59 FINAL DELIVERY IS A PACKAGE  
Picture + mix/stems + captions + timeline/composition metadata + color/output profile + version/provenance共同交付。

---

# J｜Inference / Model Ops / Commercial Compliance（R9新增）

M60 OPTIMIZATION IS A PROFILE, NOT A SWITCH  
quantization/cache/offload/compile必须绑定model×version×hardware×resolution×frames×workflow。

M61 VRAM BUDGET + OFFLOAD LADDER  
峰值显存包含weights/activations/latents/VAE/cache/buffers；model/group/leaf offload是memory↔latency梯子。

M62 CACHE NEEDS QUALITY REGRESSION  
TeaCache/MagCache类方法可能提速，但项目中必须同时验证identity/structure/action/prompt-following。

M63 SUBMIT IS A COST GATE  
不可逆远程credit/queue任务必须在submit前做preflight、dedupe、budget、stop-rule。

M64 LICENSE IS A VERSIONED ASSET FACT  
每个model artifact绑定license/version/territory/commercial conditions；open model不等于同许可。

M65 COMMERCIAL RIGHTS ARE MULTI-LAYER  
provider permission、input rights、output copyright、likeness/trademark/audio、data terms、AI disclosure分开检查。

M66 PROVENANCE ≠ COPYRIGHT ≠ TRUTH + COMPLIANCE PROFILE  
SHA/C2PA回答来源/修改；copyright回答权利；真实性另论。交付还需jurisdiction/terms/disclosure/credential profile。

---

# 3｜最终分流：吸收 vs 验证

## DIRECT_FULL = 40

旧21 DIRECT，加R9新增19条结构知识。

新增DIRECT：
M43 M44 M45 M46 M47 M48
M50 M51 M52 M53 M54 M56 M57 M58 M59
M60 M64 M65 M66

说明：
这些可以作为对象/字段/流程/治理结构直接吸收。
“直接吸收”不等于已证明项目增益。

## SPLIT = 19

旧15 SPLIT，加：
- M55 LONG-FORM AUDIO CONTINUITY：连续性状态吸收；具体续写方法/收益验证
- M61 VRAM/OFFLOAD：结构与profile吸收；本机最佳组合验证
- M63 SUBMIT COST GATE：preflight结构吸收；具体平台成本策略按当前服务验证
- M49 PREVIS：blockout作为可选生产结构吸收；是否显著提升当前H3成功率验证

注：M49只归SPLIT，不重复计入DIRECT；吸收“previs/blockout可作为生产结构”，不直接宣称“必然提高成功率”。

## VERIFY_FULL = 7

旧6：
M09 M20 M21 M24 M38 M39

新增：
M62 CACHE PERFORMANCE/QUALITY CLAIM

这些核心就是项目效果假设，不能只凭外部资料升级成“我们的规律”。

---

# 4｜最终冲突簇｜28

保留旧CF01–CF16：

CF01 万能模型/Agent vs模块化  
CF02 全历史 vs选择性检索  
CF03 全图谱化 vshybrid memory  
CF04 整帧历史 vsentity memory  
CF05 last-frame vs多层continuity  
CF06 joint all-shots vs autoregressive/chunk  
CF07 first-last vs continuation  
CF08 all-shared vs bounded shared/private  
CF09 manager vs swarm/handoff  
CF10 all-HITL vs impact-based gate  
CF11 VLM final judge vs machine-prepass+USER  
CF12 scalar score vs multi-axis/pairwise  
CF13 full rerender vs local retake  
CF14 final-quality-first vs coarse-to-fine  
CF15 full longtake coverage vs short-beat coverage  
CF16 single best model vs model-by-job

新增：

CF17｜精确几何/framing vs 动作自然度  
CF18｜完整shot schema vs 执行简洁度  
CF19｜纯文本camera vs 全手工trajectory  
CF20｜画面切点 vs 声音切点  
CF21｜联合音画生成 vs 模块化后期可修复性  
CF22｜固定LUFS/交付数字 vs platform profile  
CF23｜完整ACES/高规格色管 vs 小项目轻量色管  
CF24｜量化省显存 vs kernel兼容/速度/质量  
CF25｜更激进offload vs throughput/PCIe/RAM压力  
CF26｜cache speedup vs identity/structure/action回归  
CF27｜open-source/open-weight vs unrestricted commercial  
CF28｜provider commercial permission vs copyright ownership vs provenance真实性

---

# 5｜真正剩余的12个项目验证缺口

这些不是“还要大搜资料”，而是必须在自己的工具链/项目里测。

V-GAP01｜4080真实性能profile  
VRAM/RAM/温度/264f/timeout/并发/吞吐。

V-GAP02｜H3本地优化profile  
quantization/cache/offload/steps/resolution/frames的Pareto。

V-GAP03｜Wan本地优化profile  
同上，独立于H3。

V-GAP04｜真实MODEL-BY-JOB矩阵  
H3/Wan/Vidu/Runway等在黎黎隆角色、复杂动作、多角色、camera、长镜、声音上的真实边界。

V-GAP05｜Reference槽位甜点  
Identity/Costume/Pose/Style/Composition如何分槽最稳。

V-GAP06｜Identity↔Editability甜点  
锁定到什么强度开始伤动作/镜头。

V-GAP07｜LongTake memory/anchor策略  
recent motion window、selected history、anchor cadence在30s/60s的真实drift。

V-GAP08｜Local Retake真实收益  
修复成功率、接缝、preservation、成本。

V-GAP09｜VLM预审按failure-family的准确率  
recall / precision / false-positive / uncertain-rate。

V-GAP10｜USER审美与机器指标标定  
pairwise/评分/技术指标与USER最终选择的关系。

V-GAP11｜Dialogue/Lip-sync/Audio continuity实际链  
声线、嘴型、room tone、声桥在当前动画风格/工具下是否稳定。

V-GAP12｜目标市场商业合规profile  
真实发布/客户项目的provider terms、输入权利、地区披露、C2PA策略；按项目检查，不做全球统一结论。

---

# 6｜STOP

**EXTERNAL_BROAD_RESEARCH = STOP**

后续顺序：

1. 66 MASTER 按最新22工单/AI后台做 recover-before-create；
2. DIRECT 结构知识正式吸收；
3. SPLIT 只吸收结构部分；
4. VERIFY_FULL + 12个项目缺口压缩进验证Canvas；
5. 真实验证按成本从低到高推进；
6. 只有真实实验暴露“社会知识不足”，才允许重新开外搜。

