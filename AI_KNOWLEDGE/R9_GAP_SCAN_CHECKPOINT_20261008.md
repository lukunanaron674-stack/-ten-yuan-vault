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
