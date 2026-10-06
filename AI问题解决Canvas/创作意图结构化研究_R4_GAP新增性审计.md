# 创作意图结构化研究｜R4 GAP / 新增性审计 v1

> 目标：审计 R3 留下的三个候选增量，判断它们究竟是：
>
> - 已有方法换名；
> - 领域化细化；
> - 仍值得进入 R5 的研究候选。
>
> 本轮不靠“看起来像新”，只看是否已有结构、是否已有同类操作、是否还能产生新的可验证行为。

---

# 0｜R4 总结

R3 留下：

A｜Typed Effect Relation
- 生 / 克 / 补

B｜Structural Dominance + T / E
- 主 / 次
- T 体量
- E 关系作用量

C｜Relation-Type Transition
- 关系跨阶段继续 / 反转 / 退隐 / 转位

R4 审计结果：

| 候选 | 通用方法层是否新 | 创作意图领域是否仍有空间 | R4 结论 |
|---|---|---|---|
| A 生克补 typed effect | 否 | 有一定领域化价值 | **SPECIALIZATION ONLY** |
| B 主次 + T/E | 否 | 可作为内部控制字段 | **SPECIALIZATION / IMPLEMENTATION VALUE** |
| C Relation-Type Transition | 通用图方法层否 | **在当前 creative-intent baseline 中仍值得验证** | **DOMAIN GAP CANDIDATE** |

因此：

> **R4 没有发现“十元关系语法本身是全新图操作符”的证据。**

但留下一个更窄的研究候选：

> **Decision-Grounded Dynamic Intent Relation**
>
> 创作目标 / 约束之间的关系类型如何跨轮次变化，以及这种关系变化能否预测真实创作者的 ACCEPT / REWORK / REJECT。

这个候选可以进入 R5。

---

# 1｜A：生 / 克 / 补是否是新 Relation Operator？

## 审计结果
**不是。**

### 社会已有更一般的结构

概念设计中的 Signed Directed Graph 早已把：
- positive influence；
- negative influence；
- constraint propagation

作为带方向关系。

Fuzzy Cognitive Maps 也长期使用：
- positive causality；
- negative causality；
- weighted influence；
- feedback。

设计论证系统 IBIS 也长期使用：
- support；
- object / oppose；
- arguments；
- design decision trace。

2026 的 ToMigo 在创作意图领域已经有：
- directed edge；
- supportive influence；
- edge rationale；
- graph propagation；
- evolving graph。

所以：

```
生 ≈ enable / support / establish condition
克 ≈ inhibit / constrain / reduce state space
补 ≈ compensate / restore missing condition
```

这些都能被更通用 relation vocabulary 表达。

---

# 2｜A 的真实价值在哪里

虽然不是新操作符，
生 / 克 / 补仍然可以作为：

> **Creative-domain relation vocabulary**

它的优点可能是：

1. 三类关系统一使用同一证据门；
2. 必须写 source / target / mechanism / target_variable；
3. 不允许只凭共现判关系；
4. 强制排除第三因素和反向解释；
5. 关系可以进入动态链继续审核。

这些是：
**protocol discipline / domain specialization**

不是：
**new graph primitive**

## R4 判定
**SPECIALIZATION ONLY**

不作为“原创关系类型”宣传。

---

# 3｜B：主次 + T / E 是否比普通 Priority / Weight 更有新增性？

## 审计结果
**没有发现基础新增。**

社会已有：
- hierarchy；
- rank；
- priority；
- AHP weight；
- fuzzy causal weight；
- influence magnitude；
- salience；
- activation；
- confidence；
- trade-off reasoning。

所以：

### 主 / 次
更接近：
`compositional dominance / hierarchy`

### T
更接近：
`structural occupancy / component share`

### E
更接近：
`effect magnitude / influence strength`

它们都能落入已有数学 / 图结构字段。

---

# 4｜但 T / M / E / C 分离仍然非常有价值

它不是理论新发明，
但它是一个很好的 **schema hygiene**：

```
T = 结构里占多少
M = 当前阶段显得多明显
E = 实际改变对方多少
C = 判断有多可靠
```

这个分离能避免四种常见污染：

1. 高占位 ≠ 当前高显影
2. 高显影 ≠ 高作用量
3. 高作用量 ≠ 高置信
4. 低置信 ≠ 低体量

因此 B 的价值更适合写成：

> **representation discipline / measurement separation**

而不是：
> 新权重理论。

## R4 判定
**SPECIALIZATION / IMPLEMENTATION VALUE**

留在系统里，
但不作为论文创新主张。

---

# 5｜C：关系类型跨阶段变化是不是新东西？

## 通用图方法层

**不是。**

已有：
- temporal knowledge graph；
- dynamic relation graph；
- fuzzy time cognitive map；
- temporal causal graph；
- relation evolution modeling。

这些领域都已经研究：
> 关系随时间建立、消失、增强、减弱甚至改变。

所以：

> **“关系会变化”不能作为新图论操作。**

---

# 6｜为什么 C 仍然没有被完全淘汰

因为我们当前研究对象不是一般知识图谱，
而是：

> **Creative Intent Representation**

当前最强直接 baseline：ToMigo。

ToMigo 已经做到了：
- design concept graph；
- directed supportive influence edge；
- edge rationale；
- 用户编辑 node / edge；
- graph 随 evolving intent 更新；
- 修改会沿关系传播；
- 设计重新对齐新的 graph。

非常强。

但 ToMigo 的论文中为了统一图结构：

> edge direction 被统一为“低层设计选择支持高层目标”的 supportive influence。

也就是说，它主要问：

> 这个设计选择如何支持那个设计目标？

当用户意图变化时：
- node 可被修改；
- graph 可被更新；
- related nodes 可重对齐；

但论文没有把下面这种东西作为核心第一等结构来研究：

```
同一对 Intent A / B

Round 1:
A supports B

Round 2:
A conflicts_with B

Round 3:
C compensates B

Round 4:
A 被降为次要 / 退隐
```

也就是：

> **Relation semantics 本身的历史与转型**

而不只是 graph 内容整体更新。

---

# 7｜C 的真正候选不能叫“新图结构”

R4 后必须改名。

不能说：

> 动态链发明了 temporal relation graph。

更准确：

> **把 typed relation transition 作为创作意图演化中的第一等可编辑 / 可追踪对象。**

这是：

**DOMAIN SPECIALIZATION CANDIDATE**

不是：
**GENERAL NEW OPERATOR**

---

# 8｜这一候选为什么和第 2 个论文方向突然接上了

三个论文方向：

1. 创作主权 / 个性
2. 审美判断 / 最终否决权
3. 创作意图 / 灵感架构

方向 3 如果只做：

> 关系图看起来更丰富

没有意义。

它真正可以验证的出口来自方向 2：

> **关系结构能不能预测我的真实创作决策？**

于是形成：

```
Direction 3｜REPRESENT
结构化创作意图关系
        ↓
freeze prediction
        ↓
Direction 2｜JUDGE
真实 ACCEPT / REWORK / REJECT
        ↓
验证 Relation Graph 是否有用
```

这非常关键。

---

# 9｜R4 最终保留的唯一核心候选

## Decision-Grounded Dynamic Intent Relation

暂译：

> **基于真实创作决策验证的动态创作意图关系表示**

核心不是“十元”三个字。

结构：

```
Intent Nodes
Goal / Constraint / Choice / Property
        ↓
Typed Relations
support / inhibit / compensate / preserve / conflict ...
        ↓
Relation State
primary / secondary
T / M / E / C
        ↓
Relation Transition
continue / strengthen / weaken / reverse / fade / shift
        ↓
Prediction
ACCEPT / REWORK / REJECT
        ↓
Real Creator Decision
        ↓
Evidence Delta
```

---

# 10｜十元在这个候选里的位置

十元降到：

> **一种候选 Relation Coding Scheme**

而不是整个方法本体。

R5 必须公平比较：

### B3｜Generic Dynamic Intent Graph
普通：
- semantic node
- typed relation
- priority
- rationale
- relation history
- transition

### B4｜Ten-Yuan Dynamic Relation Layer
在 B3 上增加：
- 十元语义类；
- 生 / 克 / 补编码；
- 主 / 次；
- T / M / E / C；
- 动态链关系转型规则。

如果：

```
B4 ≈ B3
```

结论：

> 十元编码没有额外预测价值。

如果：

```
B4 > B3
```

才可以主张：

> 十元关系编码在创作意图动态关系建模中提供额外增量。

---

# 11｜R4 对三个候选的最终生杀

## A｜生克补
**砍掉“新关系操作符”主张。**

保留：
> creative relation vocabulary / protocol discipline。

---

## B｜主次 + T/E
**砍掉“新 priority / weight”主张。**

保留：
> compositional dominance + T/M/E/C measurement separation。

---

## C｜动态链 Relation Transition
**砍掉“新 temporal graph”主张。**

但保留：

> **creative-intent-specific relation transition + creator-decision validation**

进入 R5。

---

# 12｜这反而让论文方向 3 更稳

原来：

> 十元能结构化创作意图。

太大，而且很容易被已有研究击穿。

现在：

> **在多轮 AIGC 创作中，将创作目标与约束之间的动态关系显式记录，是否能更好地预测创作者后续的接受、修改和否决决策？**

这已经是一条很正常、可证伪的论文问题。

然后十元变成实验变量：

> **十元关系编码是否比通用关系编码提供额外增量？**

即使十元最后失败，
论文仍然成立。

这是一个非常重要的安全结构。

---

# 13｜R4 外部基线结论

本轮外部审计确认：

1. Signed Directed Graph 已能表达正/负方向作用与约束传播；
2. Fuzzy Cognitive Map 已能表达正/负因果、作用权重与反馈；
3. Fuzzy Time Cognitive Map 已把时间关系引入箭头，并分析 causalities 随时间变化；
4. Temporal Knowledge Graph 研究已长期处理关系随时间演化；
5. IBIS / Design Rationale 已长期表示 support / object / tradeoff 和设计决策理由；
6. ToMigo 已在 creative intent 领域实现 directed concept graph、edge rationale、editable/evolving graph 与 propagation。

因此：

> **十元不能再从图结构、正负关系、权重、时间演化本身声称基础新增。**

可能的贡献只能发生在：

> **特定创作场景中的关系编码纪律 + 动态关系历史 + 真实创作者决策验证。**

---

# 14｜R4 DONE

R4 已完成：
- A 生克补新增性审计；
- B 主次 / T/E 新增性审计；
- C 动态链新增性审计；
- 排除三个“基础图操作原创”主张；
- 保留一个 domain-level candidate；
- 把方向 3 与方向 2 建立验证接口；
- 十元降级为可对照的 coding scheme。

**R4 DONE。**

---

# 15｜R5 READY

R5 不继续研究理论。

只设计一个能杀死或保住十元的实验：

```
B0 Natural Language
B1 Attribute Structure
B2 Static Concept Graph
B3 Generic Dynamic Intent Graph
B4 Ten-Yuan Dynamic Relation Layer
```

数据：
- 历史创作轮次；
- 每轮当时可见信息；
- 下一轮真实 ACCEPT / REWORK / REJECT；
- 修改对象；
- 被保留 / 被牺牲的约束。

核心指标：
1. 决策预测；
2. 被保留约束预测；
3. 被牺牲约束预测；
4. relation transition 预测；
5. explanation calibration；
6. 跨项目泛化。

R5 的唯一问题：

> **在强 B3 已经存在的情况下，B4 是否仍有稳定增量？**
