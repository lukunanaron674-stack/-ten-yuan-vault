---
type: visual-system-release
version: v0.8.1
released_at: 2026-09-16
status: active-validation
codename: Style Grammar + Dynamic Operations Integration
---

# Ten-Yuan Visualization v0.8.1

## 0｜版本定位

v0.8.1 是 v0.8.0 之后的整合版本，收录两批实质性新增：

1. **十元角色 Style Grammar 因果验证版**：从“视觉描述词”进一步压缩到底层造型语法，并把未冻结对象推进到最小 A/B、删除测试、跨部位与跨风格验证。
2. **Dynamic Visual Operations v1**：把“动态变化如何被画出来”独立成视觉运算层，不再与静态十元造型语法混为一层。

该版本仍属于 active-validation，不宣称十元视觉体系 10/10 完全冻结。

---

## 1｜静态 Style Grammar 当前成果

```text
X       FROZEN
Z       FROZEN
N       A_B_VALIDATION_REQUIRED
ZN      A_B_VALIDATION_REQUIRED
NZ      REVISED_A_B_VALIDATION_REQUIRED
XN      STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
NX      REVISED_PRIORITY_A_B_REQUIRED
ZX      REVISED_PRIORITY_A_B_REQUIRED
XZ      STRONG_FREEZE_CANDIDATE_A_B_REQUIRED
X并Z    FREEZE_CANDIDATE_A_B_REQUIRED
```

当前最短语法：

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

本版保留 v0.8.0 之后已经形成的修正，不退回旧的性格、题材、颜色或情绪映射。

---

## 2｜Dynamic Visual Operations v1

新增完整动态视觉工程层，位于：

`02_给我用的知识凝结库/01_动态链条/视觉化/`

当前已具备：

- 10 个 Visual Operation 母型；
- Dynamic Visual Generator Prompt v1；
- Dynamic Visual Blind Auditor Prompt v1；
- machine-readable Audit Schema v1；
- Dynamic Visual Freeze Gate v1；
- Theory / Source Input Gate v1；
- 100-sample blind-test generator v1；
- quickstart / README / 首轮理论闸门记录。

这意味着动态链视觉化从“用自然语言解释变化”升级为：

```text
结构起点
→ Visual Operation
→ 结构变化
→ 视觉终点
→ 盲审
→ Freeze Gate
```

---

## 3｜静态与动态正式分层

### 静态视觉语法

回答：

> **这个十元在某一时刻，画面结构是什么样。**

主要处理：

- 单元关系
- 边界
- 间隔
- 组织位
- 槽位
- 锚点
- 临界余量
- 包络与层级读取

### Dynamic Visual Operations

回答：

> **结构怎样从 A 变化到 B。**

主要处理：

- 起始状态
- 操作发生
- 路径改变
- 关系重组
- 约束传播
- 阶段变化
- 最终端点

两层不得互相替代。

```text
静态十元语法 ≠ 动态过程
动态操作 ≠ 新十元定义
```

---

## 4｜v0.8.1 统一视觉链

```text
十元 / 五轴 canonical
↓
静态 Style Grammar / 十元视觉标准卡
↓
Visual DSL
↓
Dynamic Visual Operation（需要变化时）
↓
低成本结构草图 / A-B 控变量样本
↓
Generator Prompt
↓
正式关键样本
↓
Blind Auditor + Audit Schema
↓
Freeze Gate
↓
Visual Inbox / GitHub 回归库
```

---

## 5｜动态视觉 Freeze Gate

Dynamic Visual v1 已建立独立冻结闸门。当前工程阈值包括：

```yaml
required_image_suite:
  true_positive: 1
  nearest_neighbor: 1
  negative_control: 1
localization_accuracy_min: 0.90
independent_evidence_rate_min: 0.80
nearest_neighbor_rejection_rate_min: 0.80
shortcut_dependency_max: 0.10
ambiguous_rate_target_max: 0.20
```

状态机：

```text
RESEARCHING
→ CANDIDATE_FROZEN
→ FROZEN
→ REOPENED（仅 failure-driven）
```

因此“定义写完”不等于“视觉运算已冻结”。实际盲测回归仍是必要条件。

---

## 6｜当前验证优先级

静态 Style Grammar：

```text
ZX → NX → NZ → ZN → N → X并Z → XZ → XN
```

动态视觉：

```text
10 Visual Operations
→ 生成对照样本
→ Blind Auditor
→ Freeze Gate
→ failure family
→ 定点修正
```

默认继续执行低图耗策略：找图负责反例与外部普适性验证，生图负责关键因果验证。

---

## 7｜为什么不是 v0.9.0

虽然 Dynamic Visual v1 已形成完整工程骨架，十元 Style Grammar 也有明显推进，但整体视觉体系尚未达到 v0.9 的收束门槛：

- 十元视觉标准卡尚未 10/10 进入冻结或强候选状态；
- 最近邻矩阵尚未完成；
- 未冻结 Style Grammar 的 A/B 因果回归仍在进行；
- Dynamic Visual v1 的大规模盲测回归尚未完成；
- 图像审核器跨模块重复判定仍需继续积累真实样本。

因此本次按整体体系记为 **v0.8.1**，Dynamic Visual 子系统自身记为 **v1.0 definition-ready / regression-pending**。

---

## 8｜下一版本门槛

### v0.9.0

目标：

```text
十元 Style Grammar 大部分完成关键 A/B 因果验证
+ 最近邻矩阵成型
+ Dynamic Visual v1 完成首轮系统盲测
+ 图像审核器能统一读静态语法与动态操作
```

### v1.0.0

仍严格要求：

```text
十元视觉标准卡 10/10 冻结
+ 最近邻矩阵完成
+ 去捷径回归通过
+ 跨对象/跨题材回归通过
+ 图像审核器重复判定稳定
+ 生克补最小视觉语法完成
+ 动态链视觉回归完成
```

---

## 9｜一句话结论

> v0.8.1 的核心升级不是“多了一批图”，而是视觉体系正式拥有了两种不同语法：**静态结构语法**与**动态结构运算语法**。
