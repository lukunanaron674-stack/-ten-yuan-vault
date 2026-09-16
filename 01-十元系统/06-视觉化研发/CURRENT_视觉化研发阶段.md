---
type: current-visual-rd-phase
status: active
updated: 2026-09-16
version: v0.8.1
release: RELEASE_视觉化体系_v0.8.1_20260916.md
phase: STYLE_RELATION_DYNAMIC_VISUAL_VALIDATION
---

# 当前视觉化研发阶段｜v0.8.1

当前版本：**视觉化体系 v0.8.1 — Style Grammar + Relation + Dynamic Operations Integration**。

当前视觉化正式进入三轨验证：

```text
A｜静态十元 Style Grammar 因果验证
B｜十元生 / 克 / 补关系视觉化 v0.1
C｜Dynamic Visual Operations v1 盲测回归
```

三者职责不同：

```text
Style Grammar
= 某一时刻结构“是什么样”

Relation Visualization
= source 与 target 之间的生 / 克 / 补是否真的发生

Dynamic Visual Operation
= 结构怎样从 A 变到 B
```

不得互相替代。

## 默认策略

```text
停止无边界找图 / Deep Research
→ 保留定向反例与混淆样本搜索
→ 静态语法跑最小 A/B 单变量实验
→ 关系视觉化跑 POS / COEXIST_NEG / SHORTCUT_NEG
→ 动态运算跑 Blind Audit + Freeze Gate
→ 删除测试 / 最近邻 / 去捷径
→ 跨部位 / 跨风格 / 跨对象
→ 通过者冻结
```

当前资源比例继续建议：

```text
20% 定向找图复核
80% 控变量验证 / 审核
```

核心原则：

> 找图 = 外部普适性验证；生图 = 关键因果验证；盲审 = 冻结依据。

## 当前版本成果入口

1. `VERSION_视觉化体系.yaml`
2. `RELEASE_视觉化体系_v0.8.1_20260916.md`
3. `CHANGELOG_视觉化体系.md`
4. `十元角色设计StyleGrammar_研究总整理_20260916.md`
5. `03-十元生克补/LOCAL_RUN_十元生克补视觉实验_v0.1_20260916.md`
6. `03-十元生克补/audit_schema_v0.1.yaml`
7. `02_给我用的知识凝结库/01_动态链条/视觉化/README.md`

## 当前静态冻结状态

```text
X       → FROZEN
Z       → FROZEN
N       → A_B_VALIDATION_REQUIRED
ZN      → A_B_VALIDATION_REQUIRED
NZ      → REVISED_A_B_VALIDATION_REQUIRED
XN      → STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
NX      → REVISED_PRIORITY_A_B_REQUIRED
ZX      → REVISED_PRIORITY_A_B_REQUIRED
XZ      → STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
X并Z    → FREEZE_CANDIDATE_A_B_REQUIRED
```

当前最短十元 Style Grammar：

```text
X       独立自足
Z       方向迁移
N       双向互为条件
ZN      关系规则改写
NZ      终端嵌合
XN      规则槽位化
NX      缺席组织位
ZX      非对称组织锚点
XZ      临界耦合
X并Z    上位包络双读
```

静态验证优先顺序：

```text
ZX → NX → NZ → ZN → N → X并Z → XZ → XN
```

## 十元生克补视觉化 v0.1

当前状态：`LOCAL_REGRESSION_READY`。

协议：

```text
25 条关系
×
POS / COEXIST_NEG / SHORTCUT_NEG
=
75 张 T1 基础样本
```

T1 只看纯结构；通过后进入 T2 中性物体，再进入 T3 项目载体。

审核核心：

```text
source_signature
target_signature
causal_trace
operator_specificity
shortcut_independence
```

优先批次：

```text
SHENG-07  nx -> x
SHENG-05  xn -> xz
SHENG-09  x并z -> z
KE-01     xz -> zn
KE-03     xn -> zx
KE-08     z -> nx
KE-09     nx -> x并z
BU-05     xn <-> z
```

## Dynamic Visual v1 当前状态

路径：`02_给我用的知识凝结库/01_动态链条/视觉化/`

```text
10 Visual Operations        DEFINITION_READY
Generator Prompt v1         READY
Blind Auditor Prompt v1     READY
Audit Schema v1             READY
Freeze Gate v1              READY
Theory / Source Gate v1     READY
100-sample generator v1     READY
bulk blind regression       PENDING
```

下一步不是继续扩母型，而是：

```text
固定 Visual Operation
→ 正样本 / 最近邻 / 负样本
→ Blind Auditor
→ Freeze Gate
→ failure family
→ 仅失败项定点重开
```

Freeze Gate 当前核心阈值：

```text
定位准确率 ≥ 0.90
独立证据率 ≥ 0.80
最近邻拒绝率 ≥ 0.80
捷径依赖 ≤ 0.10
AMBIGUOUS 目标 ≤ 0.20
```

## v0.9.0 下一门槛

```text
十元 Style Grammar 大部分完成关键 A/B 因果验证
+ 最近邻矩阵成型
+ 生克补完成首轮 T1 核心批次
+ Dynamic Visual v1 完成首轮系统盲测
+ 图像审核器统一读取静态语法 / 关系 / 动态操作
```

## v1.0.0 总冻结门槛

```text
十元视觉标准卡 10/10 冻结
+ 最近邻矩阵完成
+ 去视觉捷径回归通过
+ 跨对象/跨题材回归通过
+ 图像审核器重复判定稳定
+ 生克补最小视觉语法完成
+ 动态链视觉回归完成
```

## 允许重新深研的条件

仅限：

- 已有研究核心冲突无法消解
- 最近邻反复不可分
- 跨对象 / 跨风格系统性失败
- 新稳定 failure family
- 真实项目出现现有规则无法解释的结构

否则：`NO_NEW_DEEP_RESEARCH`。
