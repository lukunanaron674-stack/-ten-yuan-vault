> ⚠️ **R3 术语修正**：R2 暂用的 “Theory-defined Bipolar Semantic Mapping Space” 过强。十元目前尚未定义连续轴、中点、距离函数与轴内插值，因此当前统一改称：**Theory-defined Semantic Mapping Scheme with Paired Oppositional Endpoints**。本文件其余 comparison family 结论继续有效。

# 论文方向3 v2｜十元映射模型研究｜R2 社会映射模型 comparison family

> 前提：旧“十元=关系层”路线已作废。
>
> 本轮问题：
> **十元作为“对象/概念 → 十元语义空间”的映射模型，社会上到底应该和哪一类模型公平比较？**

---

# 0｜R2 最终结论

不能再找一个单一社会术语硬套十元。

更准确的社会参照分成四层：

1. **表示母类｜Conceptual Spaces**
   - 回答：“对象被放进什么样的语义空间？”

2. **映射/测量方式｜Semantic Differential / bipolar semantic profile**
   - 回答：“同一个对象如何沿固定相反维度形成一个多维 profile？”

3. **判定可靠性方法｜Qualitative Coding / Codebook**
   - 回答：“不同人怎样依据同一规则做映射，并验证不是随意贴标签？”

4. **机器形式化｜Ontology / OWL**
   - 回答：“映射结果、类别、属性和关系以后怎样变成机器可读结构？”

因此，十元当前最公平的定位不是单一：
- ontology；
- taxonomy；
- relation graph；
- codebook。

而是：

> **Theory-defined Bipolar Semantic Mapping Space**
> 
> + **Rule-governed Coding Procedure**
> 
> + **Post-mapping Relation System**

大白话：

> 先用固定的结构坐标给对象定位；
> 再用明确规则保证定位可复核；
> 定位完成后才启动关系；
> 最后再机器化。

---

# 1｜Conceptual Spaces｜概念空间

## 它在干什么

Gärdenfors 的 Conceptual Spaces 不是先列一堆符号类目，而是用一组 **quality dimensions** 构成概念空间。

典型：
- temperature
- weight
- brightness
- pitch
- color dimensions

对象：
> 可以被表示为空间里的点 / 位置。

概念：
> 可以被表示为空间里的区域。

相似性：
> 可以用位置之间的距离表达。

自然类别：
> 常被建模为概念空间中的凸区域。

## 与十元相似

### 相似 1｜都是“先有空间，再把对象放进去”
十元也不是每次临时发明标签。

它先有固定十元结构：
- X / Z / N / ZN / NZ
- XN / NX / ZX / XZ / X并Z

然后对象进入这个空间做映射。

### 相似 2｜对象位置比单一词标签更重要
十元概念映射允许：
- 多个十元同时有分数；
- 主 / 次；
- 强弱 profile。

所以它不是单纯：
`对象 → 一个 class`

更接近：
`对象 → 空间中的一个结构 profile`

### 相似 3｜可以做“邻近/易混”研究
十元已经有：
- 最近邻；
- 误判检查；
- 正反证；
- 相反端。

这和概念空间中“哪些位置相近、边界在哪里”的问题高度同构。

## 与十元不同

### 不同 1｜十元目前不是正式连续几何空间
Conceptual Spaces 可以定义：
- dimension
- metric
- distance
- region
- convexity

十元现在还没有严格数学意义上的：
- 距离函数；
- 连续坐标；
- 区域边界方程。

所以不能直接宣称：
> 十元就是 Conceptual Spaces。

### 不同 2｜十元的端点是理论定义位置
Conceptual Spaces 的维度可以来自感觉/科学/经验。

十元的十个端点来自自身理论正本与五组相反结构。

## R2 判定

> **最适合作为“表示母类”的主 comparison family。**

---

# 2｜Semantic Differential｜语义差异法

## 它在干什么

经典 Semantic Differential 做的是：

> 给一个对象 / 概念，
> 让它在多组固定的双极尺度之间取位置。

例如：
- good ↔ bad
- weak ↔ strong
- passive ↔ active

每个对象最后形成：
> 一组多维分数 profile。

经典研究进一步常归纳为：
- Evaluation
- Potency
- Activity

## 为什么它和十元突然很近

十元有五组固定相反端：

```
ZX ↔ NX
ZN ↔ X
N ↔ X并Z
XN ↔ Z
XZ ↔ NZ
```

所以结构上都存在：

> **固定双极轴 + 同一对象沿这些轴形成 profile**

这比普通 ontology 更接近十元实际“怎么映射”。

## 但有关键不同

Semantic Differential 主要测：
> 人对某概念的 connotative / affective meaning。

它通常是：
> 让被试直接在量表上评分。

十元不是“你觉得它多好/多强/多主动”。

十元要求：
- 对象层；
- 端点定义；
- 必要条件；
- 反证；
- 最近邻；
- current window；
- 主/次；
- 三元复核。

因此十元更像：

> **理论约束的 bipolar semantic profile**

而不是传统态度量表。

## R2 判定

> **最适合作为“映射操作形式”的直接 comparison family。**

也就是说：

Conceptual Spaces 回答：
> “它是什么类型的表示？”

Semantic Differential 回答：
> “它像怎样的 profile 映射？”

---

# 3｜Qualitative Coding / Codebook｜编码体系

## 它在干什么

Codebook 的核心不是画空间。

而是让多人面对同一材料时知道：

- 这个 code 是什么意思；
- 什么情况算；
- 什么情况不算；
- 哪些是最近邻；
- 哪些例子是正例；
- 怎样处理边界案例。

成熟 coding research 还会测：
- intercoder reliability；
- intercoder agreement；
- discriminant capability。

## 和十元极其重要的连接

十元已经在做非常类似的事情：

- 信息卡；
- 准度卡；
- 必要条件；
- 最近邻；
- 反向测试；
- 拿掉测试；
- 正证据 / 反证据；
- 候选 / 已成立 / 未判定。

这说明：

> 十元要证明“映射可靠”，最应该借的不是图论，而是 **coding reliability** 的方法。

## 未来真正该测

同一个对象 O：

Coder A：
`ZX 8 / Z 5 / XN 2`

Coder B：
`ZX 7 / Z 6 / XN 2`

这是合理接近？

还是：

Coder A：
`ZX主`

Coder B：
`XN主`

说明十元映射规则不稳定？

这些问题应该用：
- unitization；
- agreement；
- reliability；
- confusion / nearest-neighbor

来研究。

## R2 判定

> **不是十元的理论母类，但几乎是最重要的验证方法母类。**

---

# 4｜Ontology / OWL｜本体与机器知识表示

## 它在干什么

Ontology 主要定义：

- Classes
- Individuals
- Properties
- Relations
- Restrictions / Axioms

并允许机器依据形式语义进行推理。

## 与十元相似

十元以后完全可以形式化成：

```
Object
hasTenYuanMapping
hasPrimaryTenYuan
hasSecondaryTenYuan
hasT
hasM
hasConfidence

TenYuanEndpoint
oppositeTo
belongsToAxis
...
```

映射完成后：
- 生克补；
- 动态链；
- 对象层；
- stage

也可以进入 machine-readable ontology。

## 但为什么它不是主 comparison family

Ontology 主要回答：

> “有哪些类、属性、关系，以及机器如何推理？”

它不天然回答：

> “为什么一个现实对象应该映射到 ZX 8 / Z 5？”

也就是说：

> Ontology 擅长**保存和推理映射结果**，
> 不负责证明**映射本身是否可靠**。

## R2 判定

> **机器实现层，不是十元最公平的理论母类。**

---

# 5｜四类统一比较矩阵

| 字段 | Conceptual Spaces | Semantic Differential | Coding / Codebook | Ontology | 十元当前 |
|---|---|---|---|---|---|
| 输入 | 对象/感知/概念 | 任意待评价概念 | 文本/行为/材料 | 已定义领域对象 | 对象/概念/状态/创作意图 |
| 输出 | 空间位置/区域 | 多维双极 profile | code 标签 | class/property/relations | 十元多位置 profile |
| 固定结构空间 | **强** | **强** | 中 | 强 | **强** |
| 双极结构 | 可有 | **核心** | 非核心 | 可定义 | **核心：5组** |
| 多维 profile | **强** | **强** | 可多标签 | 可多类 | **强** |
| 强度 | 可连续 | **核心量表** | 可有 | 可定义 | T/M/C 等 |
| 距离 / 相似性 | **核心** | 可计算 | 通常无 | 非核心 | 当前未正式定义 |
| 区域 / 原型 | **核心** | 弱 | code 边界 | class hierarchy | 有最近邻，但未几何化 |
| 纳入/排除规则 | 中 | 量表说明 | **核心** | axioms/restrictions | **核心** |
| 跨编码可靠性 | 非核心 | 测量信效度 | **核心** | 非核心 | 未来必须补 |
| 机器推理 | 中 | 弱 | 弱 | **核心** | 未来可做 |
| 映射后关系系统 | 非核心 | 无 | 无 | **强** | **强：生克补/动态链** |
| 动态重映射 | 可扩展 | 通常弱 | 可重复编码 | 可版本化 | **核心候选** |

---

# 6｜最关键的判定：谁是“主比较对象”

## 主比较母类
### **Conceptual Spaces**

因为论文首先需要回答：

> 十元是不是一种合理的“对象 → 结构化语义空间”的表示？

这里 Conceptual Spaces 最公平。

---

## 最直接结构邻居
### **Semantic Differential**

因为十元有：

> 5 组相反端 + 多位置强度 profile

这个外形和 bipolar semantic profile 最接近。

所以如果未来做实验，Semantic Differential 类的方法非常值得作为一个强 baseline。

---

## 验证方法
### **Qualitative Coding / Codebook**

因为十元真正的第一道科学门不是：
> “关系预测准不准？”

而是：

> **不同编码者能不能把同一个对象稳定映射到相近的十元位置？**

如果这一步过不了：
> 后面的生克补、动态链全没有可靠端点。

---

## 实现方法
### **Ontology / OWL**

如果十元以后要：
- 给 AI 调用；
- 做机器读写；
- 建规则推理；
- 接 Agent；

Ontology 是很好的实现语言。

但它不是论文现在最该比较的对象。

---

# 7｜这让十元的“科学验证顺序”也必须重排

旧路线太快跳到：
> 生克补 / 动态链 → 预测创作决策。

现在正确顺序应该是：

## Gate 1｜Mapping Reliability
同一对象，多人/多轮映射：
> 十元结果是否稳定？

## Gate 2｜Discriminant Validity
ZX / NX、ZN / X 等最近邻：
> 能不能稳定区分？

## Gate 3｜Mapping Utility
把对象映射成十元 profile：
> 对后续任务有没有信息增量？

## Gate 4｜Relation Utility
十元端点成立后：
> 生克补是否比通用关系判断更稳定？

## Gate 5｜Dynamic Utility
跨阶段：
> 重映射 + 动态链是否帮助保持/预测创作意图？

所以：

> **先验证“映射”，后验证“关系”。**

---

# 8｜与论文方向3的重新连接

方向3现在可以拆成两个子问题：

## Q1｜表示问题
> 创作者模糊的创作对象/意图，能否被稳定映射到一个结构化语义空间？

这是：
**Semantic Mapping**

## Q2｜效用问题
> 十元映射结果是否比通用语义 profile 更能保持和预测后续创作选择？

这是：
**Mapping Utility**

生克补与动态链：
> 放到 Q2 之后，不再抢在映射可靠性前面。

---

# 9｜R2 最终冻结

当前最准确的社会 comparison family：

```
THEORY / REPRESENTATION
Conceptual Spaces
        ↓
MAPPING FORM
Semantic Differential / Bipolar Semantic Profile
        ↓
VALIDATION
Qualitative Coding / Codebook Reliability
        ↓
MACHINE FORMALIZATION
Ontology / OWL
```

十元当前可以暂时写成：

> **A theory-defined bipolar semantic mapping space with rule-governed coding and a post-mapping relation system.**

中文：

> **一种由理论定义的双极语义映射空间：使用规则化编码把对象映射成十元分布，并在映射端点成立后进入生克补与动态链。**

注意：
这是当前**研究定位**，不是已经证明的学术定义。

---

# 10｜R2 DONE

完成：
- 四类社会映射模型统一比较；
- 主比较母类确定为 Conceptual Spaces；
- 直接结构邻居确定为 Semantic Differential；
- 验证方法确定为 Coding / Codebook reliability；
- Ontology 降到机器实现层；
- 科学验证顺序改为 Mapping Reliability → Utility → Relation → Dynamic。

# 11｜R3 READY

R3 不再问“十元像谁”。

只做：

> **Conceptual Spaces + Semantic Differential + Coding Scheme 已经能做到什么，而十元还剩哪些真实差异？**

重点只审：

1. 十元 10 个位置是否只是预定义 code？
2. 五组相反端是否只是 bipolar scales？
3. 主次 / T/M/C 是否只是 profile / weight？
4. 三元复核是否只是第二套编码？
5. 生克补是否构成 post-mapping inference？
6. 动态重映射是否有独立价值？
7. 哪些差异可被实验，而不是只靠理论解释？
