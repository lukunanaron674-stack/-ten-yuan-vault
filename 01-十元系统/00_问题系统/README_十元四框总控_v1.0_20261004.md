---
type: ten-yuan-four-frame-control
status: active
version: v1.0
updated: 2026-10-04
authority_level: L3
scope: governance-navigation-only
may_override_canonical: false
---

# 十元四框总控 v1.0

> 本文件只负责导航、职责、版本、状态与执行路由，不定义新的十元本体、生克补或动态链机制。

## 1｜唯一问题入口

- [[01-十元系统/00_问题系统/十元问题系统.canvas|十元问题系统 Canvas]]
- [[01-十元系统/00_问题系统/十元问题总纲|十元问题总纲 v1.0]]

正式问题继续以 Q Markdown + Canvas 为准。Linear 只承担执行与状态调度，不复制第二套问题本体。

## 2｜四框职责

### Lina00｜总控与索引
负责来源、版本、依赖、去重、状态、最终验收。
Linear：674-93。

### Lina01｜理论
负责十元本体、广义/狭义、主次/体量、五轴、五维及其边界。
Linear：674-104。
下游应用不得直接改 canonical。

### Lina02｜关系与动态链
负责生/克/补、对子、Observed Relation、动态链/动态图、长故事、游戏、音乐动态链。
Linear：674-105。

固定读取门：
`endpoint → position → mechanism lifecycle → observed relation → chain causality → chain quality`

固定纪律：
**位置合法 ≠ 机制可调用 ≠ 案例真实发生 ≠ 动态链成立 ≠ 高质量动态链。**

### Lina03｜证据、可视化与应用
负责视觉化、审核器、DSL、Benchmark、H3、Agent、生成与工程。
Linear：674-106。

生成或工程成功不自动构成理论证据。

## 3｜跨框权力顺序

```text
Lina01 定义层
↓
Lina02 关系 / 动态链层
↓
Lina03 证据 / 应用层
↓
Lina00 治理层
```

下游发现稳定 failure 时，只能回写十元问题系统，再由对应上游框处理；不得直接反向覆盖 canonical。

## 4｜统一状态模型

跨框资产至少同时保存：

- `theory_status`
- `mechanism_lifecycle`
- `evidence_level`
- `execution_status`

禁止用一个 `status` 同时表达“理论是否冻结、关系是否可调用、证据有多强、任务是否完成”。

### 常见状态不可混同

- `FROZEN_REGRESSION_ONLY`：理论已冻结，只在真实 failure 时重开。
- `ENDPOINT_REDEFINITION_FREEZE`：旧关系机制因端点变化冻结，当前不可调用。
- `ENGINEERING_PASS`：工程链跑通，不等于理论成立。
- `ARCHIVE_ONLY / LEGACY_NEEDS_CURRENT_GATE`：旧案例只供追溯，不是现行真值。

## 5｜当前版本树

### 理论正本层
- [[01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6|十元本体正本 v1.6]]
- [[01-十元系统/05-十元语义空间/README_五轴V1.0总入口_20260916|五轴 V1.0]]
- 五维 / 五大主题继续按现行叙事狭义正本读取。

### 关系 / 动态链层
- [[01-十元系统/十元生补克表|十元生补克表]]
- [[01-十元系统/关系专项/README_十元关系专项正本索引|关系专项正本索引]]
- [[08-生克补动态链研究/README_生克补动态链研究总索引|动态链研究总索引]]
- [[08-生克补动态链研究/动态链质量评估器_v1.0_20260917|Dynamic Chain Evaluator v1.0]]

Lina02 R3 管理层当前将 30 个有向位置操作分为：
- DOCUMENTED 15
- ENDPOINT_REDEFINITION_FREEZE 12
- RESEARCH 3

该管理状态不替代 GitHub canonical 自身的关系文件。

### 证据 / 视觉 / 工程层
- [[01-十元系统/06-视觉化研发/README_视觉化研发总入口_20260916|视觉化研发总入口]]
- [[01-十元系统/06-视觉化研发/RELEASE_视觉化体系_v0.8.1_20260916|视觉化体系 v0.8.1]]
- 图像审核、Visual DSL、ComfyUI/H3、Benchmark 等按 Lina03 证据等级与真实执行状态调用。

### 问题治理层
- [[01-十元系统/00_问题系统/十元问题总纲|十元问题总纲 v1.0]]
- [[01-十元系统/00_问题系统/十元问题系统.canvas|十元问题系统 Canvas]]
- 本文件：四框治理入口 v1.0

## 6｜当前 OPEN / 后续执行

十元问题系统当前仍有 27 个正式 Q；四框整理完成不等于这些研究问题完成。

当前高优先：
- Q-REL-001.1｜补关系严格语义
- Q-REL-001.3｜自动任务串错关系对子
- Q-DSL-001.1｜Semantic Parser 外部泛化
- Q-VIS-001｜视觉闭环

Lina02 已拆出专项执行：
- 674-107｜补关系严格语义统一判定与五类验收
- 674-108｜旧游戏动态链关系语法迁移
- 674-111｜《进击的巨人》长篇动态链重建
- 674-112｜音乐动态链外部实证闭环

Lina03 底层实验继续按真实状态推进；“总框三轮整理完成”不得把未跑实验标 Done。

## 7｜总控读取顺序

以后 Chat / Agent / Codex 进入十元研究时：

1. 先读本文件确认职责与状态语义；
2. 再读十元问题总纲 / Canvas 确认当前 Q；
3. 理论问题进 Lina01；
4. 关系 / 动态链问题进 Lina02；
5. 证据 / 视觉 / DSL / H3 / Agent 问题进 Lina03；
6. 结果回到 Lina00 做版本、状态和索引验收。

## STOP

不再建立第二套十元问题系统，不再新增平行总控框。
新问题优先更新现有 Q；新执行卡只承载明确实验或迁移任务。
