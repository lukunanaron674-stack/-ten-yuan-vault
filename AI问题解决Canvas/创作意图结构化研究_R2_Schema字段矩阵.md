# 创作意图结构化研究｜R2 Schema 字段矩阵 v1

> 目标：把 R1 的代表方法全部压进同一套字段，不再按论文名字讨论。
>
> 本轮只回答：
> **社会到底已经把“创作意图”结构化到字段级的什么程度？**
>
> 不回答十元是否更好；R3 才做十元逐项映射。

---

# 0｜统一 Schema

本轮统一使用 14 个字段：

1. **Node**
   - 是否有明确意图单元 / 概念节点。

2. **Edge**
   - 节点之间是否显式连接。

3. **Relation Type**
   - Edge 是否有类型，而不只是“有关联”。

4. **Direction**
   - 关系是否有方向。

5. **Priority**
   - 是否显式表达谁更重要 / 冲突时保谁。

6. **Weight**
   - 是否允许数值或等级强弱。

7. **Constraint**
   - 是否显式表示“不能变 / 必须满足”。

8. **Rationale**
   - 是否记录为什么这样选、这样连、这样改。

9. **State**
   - 是否显式保存某一时刻的意图状态。

10. **Transition**
   - 是否表示 State A → State B 的变化。

11. **Stage**
   - 是否跨需求 / 概念 / 评价 / 生产等阶段。

12. **Evidence**
   - 是否关联参考图、生成结果、用户选择、评价记录等证据。

13. **Editability**
   - 用户是否能直接修改结构本身。

14. **Propagation**
   - 结构变化后，是否会影响后续生成 / 推理 / 阶段。

---

# 1｜字段强度记法

- **● 强**
  - 是核心设计对象；
  - 用户可见或可编辑；
  - 会真实影响后续生成 / 推理。

- **◐ 中**
  - 有，但不是第一等字段；
  - 可能隐含在 prompt / workflow / reasoning 中；
  - 或仅部分可编辑。

- **○ 弱 / 无**
  - 没有独立表示；
  - 只存在于自由文字；
  - 或论文未把它作为结构字段。

- **?**
  - 现有公开信息不足，不做强断言。

---

# 2｜15 个代表方法 × 14 字段矩阵

| 方法 | Node | Edge | Relation Type | Direction | Priority | Weight | Constraint | Rationale | State | Transition | Stage | Evidence | Editable | Propagation |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Promptify | ◐ | ○ | ○ | ○ | ○ | ○ | ◐ | ◐ | ◐ | ◐ | ○ | ● | ● | ● |
| PromptCharm | ◐ | ○ | ○ | ○ | ○ | ○ | ◐ | ◐ | ◐ | ◐ | ○ | ● | ● | ● |
| ContextCam | ● | ◐ | ○ | ◐ | ○ | ○ | ◐ | ◐ | ◐ | ◐ | ○ | ● | ◐ | ● |
| DesignPrompt | ● | ○ | ○ | ○ | ○ | ○ | ◐ | ○ | ◐ | ◐ | ○ | ● | ● | ● |
| Luminate | ● | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ● | ● | ○ | ● | ● | ● |
| IntentTagger | ● | ◐ | ◐ | ◐ | ◐ | ○ | ◐ | ◐ | ● | ● | ◐ | ● | ● | ● |
| DesignWeaver | ● | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ● | ● | ○ | ● | ● | ● |
| GenTune | ● | ● | ◐ | ● | ◐ | ○ | ● | ◐ | ● | ● | ◐ | ● | ● | ● |
| Creative Dialogue | ● | ◐ | ◐ | ● | ◐ | ○ | ◐ | ● | ● | ● | ● | ● | ● | ● |
| Attribute Fashion | ● | ◐ | ◐ | ● | ◐ | ○ | ● | ○ | ● | ● | ◐ | ● | ● | ● |
| Design Keywords + AHP | ● | ◐ | ◐ | ◐ | ● | ● | ◐ | ◐ | ◐ | ◐ | ◐ | ● | ◐ | ● |
| ToMigo | ● | ● | ● | ● | ◐ | ◐ | ◐ | ● | ● | ● | ◐ | ● | ● | ● |
| DesignerlyLoop | ● | ● | ◐ | ● | ● | ◐ | ● | ● | ● | ● | ● | ● | ● | ● |
| Semantic UI | ● | ● | ● | ● | ◐ | ◐ | ● | ● | ● | ◐ | ● | ● | ● | ● |
| GID-HGCC | ● | ◐ | ◐ | ● | ● | ◐ | ● | ● | ● | ● | ● | ● | ◐ | ● |

> 说明：
> 这张表比较的是“公开论文/系统里字段是否被显式操作”，不是评价谁优谁劣。
> 对某些方法，公开摘要/页面无法确认的细节按 ◐ 或 ? 处理，避免过度断言。

---

# 3｜字段级社会成熟度

## 3.1 Node｜已成熟

社会已经非常成熟。

常见 Node：
- keyword；
- attribute；
- dimension；
- intent tag；
- purpose；
- content；
- style；
- constraint；
- strategy；
- criterion；
- stage；
- reasoning step。

结论：

> **“把意图拆成节点”已经不是研究缺口。**

十元不能靠“我也把意图拆成 X/Z/N…”证明新意。

---

## 3.2 Edge｜已成熟

ToMigo、DesignerlyLoop、Semantic UI 等已经显式使用 node-link 结构。

所以：

> **“用图表达意图关系”本身也不是新点。**

十元必须进一步回答：

> Edge 具体多了什么语义？

---

## 3.3 Relation Type｜中高成熟

社会已经出现：
- support；
- dependency；
- interdependency；
- semantic relation；
- reasoning relation；
- traceability relation。

但现有系统大量关系仍属于：

> **“A 与 B 有什么解释性联系”**

而不是：

> **“A 会压制 B / A 会补偿 B / A 改变 B 的作用方向”**

这里开始出现十元可能值得比较的位置。

但目前只能叫：

**POSSIBLE GAP / NOT PROVEN**

---

## 3.4 Direction｜成熟

大量 graph / pipeline / reasoning chain 已经有方向。

因此：

> **“十元关系有方向箭头”不能算新增。**

---

## 3.5 Priority｜中等成熟

社会已有：
- AHP weight；
- design dimension selection；
- hierarchy；
- evaluation criteria；
- constraint priority；
- workflow ordering。

但这里有两个不同问题：

### Priority A｜重要程度
哪个更重要。

### Priority B｜冲突决策
当两个意图都正确但无法同时满足：
> **必须保谁、牺牲谁？**

社会对 A 很成熟；
B 在创作意图结构里相对弱。

你的“主 / 次 + LOCK/FLEX”更可能对应 B。

---

# 4｜Weight｜已有，但语义不同

社会已有：
- AHP 数值权重；
- ranking；
- preference score；
- emphasis；
- confidence；
- salience。

因此：

> **“我有强度 1–10”本身绝对不是创新。**

真正要问：

> 十元的体量 / 强度到底是：
> - importance？
> - relation strength？
> - confidence？
> - prevalence？
> - visual dominance？
> - narrative force？

如果一个数字同时承担这些意思，Schema 会污染。

R3 必须拆开。

---

# 5｜Constraint｜高度成熟

现有系统已经大量使用：
- requirement；
- constraint；
- preserve；
- fixed condition；
- attribute scope；
- cross-stage requirement。

结论：

> **LOCK / FLEX 的“Constraint”部分不是新点。**

但 LOCK / FLEX 如果和：
- relation；
- priority；
- state transition

组合起来，仍可能形成不同控制机制。

---

# 6｜Rationale｜已经存在，但仍有空间

DesignerlyLoop、ToMigo 等都已经有：
- explanation；
- reasoning；
- why this supports that；
- design rationale。

所以：

> **“十元能解释为什么”不是新点。**

真正值得研究的是：

> Rationale 是否与真实创作者后续 ACCEPT / REWORK / REJECT 绑定？

也就是：

```
Rationale
不是写一段合理解释
而是
→ 能不能预测下一次选择
```

这仍然是你比较有价值的接口。

---

# 7｜State｜已经成熟

很多系统会保留：
- 当前 design state；
- 当前 intent canvas；
- 当前 tag 集合；
- 当前 dimension 配置；
- 当前 graph。

所以：

> State0 / State1 本身不新。

---

# 8｜Transition｜中高成熟，但“关系转型”较弱

Creative Dialogue、DesignerlyLoop 已经明确处理：

> Intent 会变。

典型是：

```
Intent State0
→ 用户看到结果
→ 反思 / 修改
→ Intent State1
```

但多数现有系统主要记录：

> **节点 / 内容发生了什么变化**

较少把：

> **节点之间的 Relation Type 本身发生转换**

作为第一等对象。

例如：

```
State0
A supports B

↓ event

State1
A conflicts with B

↓ decision

State2
C compensates A
```

这很接近动态链可能真正要比较的地方。

当前标签：

**PROMISING DIFFERENCE / NOT VALIDATED**

---

# 9｜Stage｜已经成熟

GID-HGCC 等已经明确：
- requirements；
- concept；
- evaluation；
- modeling / production。

因此：

> “创作意图跨阶段传递”也不能直接算十元新意。

真正的问题是：

> **同一关系结构跨阶段是否保持？**

例如：
- 镜头阶段的主次关系；
- 到角色生成；
- 到动画；
- 到审核；
- 是否仍然一致。

这可以接你的 F 长流程研究。

---

# 10｜Evidence｜社会已有，但创作决策证据仍有空间

已有 evidence：
- reference image；
- prompt；
- generated output；
- user edit；
- evaluation result；
- cross-stage artifact。

你的区别如果存在，更可能是：

> **把真实创作者的 ACCEPT / REWORK / REJECT 作为关系结构的验证证据。**

这不是简单“有日志”。

而是：

```
结构化 Intent
→ 预测
→ 冻结
→ 真实创作者选择
→ 揭盲
```

---

# 11｜Editability｜非常成熟

现在好的 HCI 系统普遍都强调：
- add；
- delete；
- reorder；
- reconnect；
- revise；
- regenerate。

所以：

> “十元 Canvas 可以编辑”没有研究增量。

---

# 12｜Propagation｜高度成熟，但值得细分

现有系统已经做到：

> 修改结构
→ 改 Prompt / reasoning / output

所以 propagation 本身不新。

但可以拆成：

### P1｜Node Propagation
改一个节点影响输出。

### P2｜Constraint Propagation
一个约束跨阶段保留。

### P3｜Relation Propagation
改“两个意图之间的关系”
→ 是否改变生成策略？

### P4｜Priority Propagation
改主次
→ 是否自动调整冲突解决顺序？

### P5｜Transition Propagation
关系从“补”变“克”
→ 后续生成是否真的改变？

目前 P3–P5 在已有系统里明显更弱。

这可能是十元真正应该验证的操作层。

---

# 13｜社会已经成熟 vs 仍值得研究

## 已经非常成熟｜不要抢创新
- Node
- basic Edge
- Direction
- Constraint
- State
- Stage
- Editability
- basic Propagation

## 已有很多工作｜只能做增量
- Relation Type
- Priority
- Weight
- Rationale
- Transition
- Evidence

## 当前最值得继续追的 4 个小缺口

### GAP-1｜Typed relational effect
不是“support / related”。

而是：
> **A 对 B 产生什么作用：增强、压制、补偿、改道。**

### GAP-2｜Conflict priority
不是“哪个更重要”。

而是：
> **两个意图冲突时，谁必须让位，为什么。**

### GAP-3｜Relation transition
不是“意图会变化”。

而是：
> **意图之间的关系类型怎样随创作事件发生转型。**

### GAP-4｜Decision-grounded rationale
不是“AI 给出合理解释”。

而是：
> **这个理由能不能预测创作者下一步真实收 / 改 / 扔。**

---

# 14｜R2 对十元最重要的修正

之前容易把十元拆成：

```
十元
= Node + Relation + Weight + Dynamic Chain
```

R2 以后必须改成：

```
普通 Creative Intent Schema
负责：
Goal / Object / Constraint / Attribute / Stage / Evidence

十元候选层
只负责：
Relation Type
Conflict Priority
Relation Strength
Relation Transition
```

换句话说：

> **十元不再竞争“整个意图表示系统”。**
>
> 它只竞争：
> **Intent Graph 里面的 Relation / Priority / Transition 层。**

这会让研究问题大幅缩小，也更公平。

---

# 15｜Generic Intent Graph 基线 v0.1

R3 必须先建立一个**没有十元**的强基线：

```
Node:
- Goal
- Choice
- Constraint
- Property
- Reference
- Stage

Edge:
- supports
- conflicts_with
- depends_on
- preserves
- replaces

Control:
- priority
- strength
- lock/flex

Rationale:
- why
- evidence

State:
- active / frozen / deprecated

Transition:
- added / removed / strengthened / weakened / replaced

Evidence:
- prompt
- reference
- output
- user choice
```

这个就是 B3。

然后十元只能在 B3 上增加：

```
生 / 克 / 补
主 / 次
体量
动态链
```

如果没有额外效果：

> 十元只是不同词汇。

---

# 16｜R2 DONE

本轮已经完成：
- 统一 14 字段 Schema；
- 15 个代表方法进入同一矩阵；
- 字段级成熟度分析；
- 找到 4 个较值得继续追的 GAP；
- 把十元从“完整意图系统”缩到 Relation / Priority / Transition 候选层；
- 建立 Generic Intent Graph v0.1 作为未来公平 baseline。

**R2 DONE。**

---

# 17｜R3 READY

R3 不再研究别人。

只做：

> **十元逐项映射。**

逐项检查：
- X / Z / N / … 是 Node type、state 还是 semantic class？
- 生 / 克 / 补 是 relation type 还是 transition operator？
- 主 / 次 是 hierarchy 还是 conflict priority？
- 体量 1–10 是 weight、salience 还是 intensity？
- 动态链是 temporal graph、state machine 还是 process trace？
- 五维 / 五轴是否与 Intent Schema 有必要关系？

每一项只能落入：

1. **ISOMORPHIC｜已有字段同构**
2. **SPECIALIZATION｜已有字段细化**
3. **NEW OPERATOR CANDIDATE｜可能新增操作符**
4. **OUT OF SCOPE｜不该塞进这个系统**

禁止硬映射。
