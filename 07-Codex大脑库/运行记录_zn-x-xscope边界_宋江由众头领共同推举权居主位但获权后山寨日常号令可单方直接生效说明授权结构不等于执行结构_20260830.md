---
type: ten-yuan-fire-axis-x-scope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 宋江
stage: 晁盖死后众头领推举宋江权居主位并重整梁山山寨组织
sample_type: x-scope-decision-structure-boundary
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_positive_increment: false
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜zn-x x scope 边界｜宋江由众头领共同推举权居主位，但获权后山寨日常号令可单方直接生效

## 0｜本轮问题

本轮不测试宋江整体人物，也不测试 strict `zn↔x`。

只测试一个 `x scope / decision_structure` 问题：

> **一项现实权限由多个节点共同授予 / 推举，是否意味着主体获得该权限后，每一个 current 同层执行决定都仍必须由同一批节点共同决定？**

结论：**不意味着。**

本轮锁定：

> **collective conferral / joint appointment ≠ joint execution on every current decision。**

更短：

> **“我们一起把权交给你” ≠ “你以后每个决定都只能和我们一起做”。**

---

## 1｜剧情事实

### 1.1 触发

晁盖死后，梁山出现当前治理空位。

### 1.2 授权来源

林冲、吴用等人与众头领共同请宋江暂居主位，理由是山寨不可一日无主，并明确表示诸人将听其号令。

宋江最初以晁盖遗言为由拒绝正式继任，随后接受的是“权且尊临此位 / 权当此位”，仍保留日后按遗言重新处理最终寨主归属的边界。

因此：

```text
source_node = 众头领共同推举 / 共同认可
ultimate_title = 尚未最终锁死
term = 权居 / 当前阶段
```

### 1.3 获权后的 current 现实执行

宋江权居主位后，马上进入山寨现实组织与号令链：

- 调整山寨驻扎结构；
- 改聚义厅为忠义堂；
- 分设旱寨、水寨、关隘；
- 安排头领分投管理；
- 后续可以直接传将令，使大小将校按令执行。

当前文本给出的不是“宋江每提出一个日常组织决定，都必须重新由众头领表决后才能生效”，而是：

```text
众头领共同赋予当前主位
→ 宋江获得 current 山寨号令 / 组织处分接口
→ 决定可以直接进入现实执行
```

---

## 2｜x 判定

被测对象严格限定为：

> **晁盖死后这一阶段，宋江对梁山山寨当前日常组织、驻扎、号令与部分人事部署的现实管理 / 调度 `x`。**

不锁：

- 永久最终寨主 title；
- 整个梁山所有重大事项的绝对无条件最终处分；
- “宋江从此所有事情都不受任何共同节点影响”。

本轮只锁：

```yaml
current_operational_x: true
source_structure: collective_conferral
current_execution_structure: substantially_unilateral_on_tested_operational_layer
ultimate_title: not-finally-locked-in-this-window
```

因此 current `x=true`，且权限来源结构与执行结构必须分账。

---

## 3｜核心 x-scope 变量

### 3.1 source decision structure

```text
众头领共同推举 / 共同赋权
= collective / joint conferral
```

### 3.2 current execution structure

在被测日常组织与号令层：

```text
宋江作出当前组织决定
→ 决定进入山寨执行链
→ 不需要对同一决定逐次重新取得众头领共同许可
```

因此：

```text
collective conferral
≠
mandatory joint co-decision on every current operational act
```

### 3.3 ultimate title

宋江自己仍以晁盖遗言为边界，只“权居此位”。

所以：

```text
current operational x = true
+
ultimate succession/title = unresolved / conditional
```

再次说明：

> **当前现实号令 `x` 与永久最终归属必须分层。**

---

## 4｜拿掉测试

### 4.1 拿掉“众头领以后仍对每个日常决定共同表决”的假设

只保留：

```text
众头领共同推举宋江权居主位
+
宋江获得现实号令接口
+
当前组织命令可直接进入执行
```

仍足以解释山寨重组、分寨驻扎与将令执行。

因此：

> **mandatory joint execution 不是当前 operational `x` 成立的必要条件。**

### 4.2 拿掉共同推举 / 授权来源

若完全删去众头领赋予主位这一来源，仅保留宋江本人声望或“及时雨”名号，则不能由名望直接锁定整个山寨 current 主位 `x`。

因此：

> **授权来源仍重要，但来源结构不等于后续每个执行决定的结构。**

---

## 5｜反向测试

如果文本实际呈现为：

```text
宋江只能提出分寨 / 任命方案
→ 每一项必须再次由众头领表决
→ 众头领任一同层节点可以在结果生效前逐项否决
→ 未共同通过就不能执行
```

那么被测层应更接近：

```text
joint / shared governance x
```

而不是 current unilateral operational `x`。

现有本窄窗口没有出现这种逐项 pre-effect joint veto 链。

---

## 6｜最近邻排除

### x vs z

宋江声望高、众人敬服属于外部认可邻近，不能单独生成 `x`。本轮 `x` 来自现实主位授权 + 当前号令直接进入执行。

### x vs nx

主位来源来自众头领共同授予，可有外部授权来源邻近；但授权生效后，当前 operational 对象进入宋江现实管理 / 号令边界，不能因为来源在外部就否定 current `x`。

### x vs xn

分寨、驻扎、组织流程本身有运行设计邻近；但本轮测试的是“谁能让这些组织决定直接进入现实执行”，不是“流程如何设计”。

### x vs zx

宋江接权后重组山寨可能出现公开权力显影，但本轮不测试扩权，只测试获权后的 current scope 与 decision structure。

---

## 7｜对象层纪律

本轮只锁：

```text
梁山 current 山寨日常组织 / 号令层
```

不倒灌：

```text
整个梁山所有重大事务
永久寨主最终归属
对众头领的一切单方最终处分
```

所以不能写成“宋江被共同推举后就拥有梁山全部绝对 unilateral x”。

---

## 8｜本轮新增规则

### 规则 A｜授权结构 ≠ 执行结构

> **collective conferral / joint appointment ≠ joint execution on every current decision。**

### 规则 B｜共同来源不抹掉 current unilateral x

> **如果权限经共同节点授予，但授予后被测同层决定可以由主体直接生效、无需逐次重新共同批准，则 current operational `x` 可以是真实的。**

### 规则 C｜最终 title 另算

> **current operational x=true 与 ultimate title / permanent ownership 未定可以同时成立。**

---

## 9｜与现有 x-scope 护栏的关系

现有《水浒传》晁盖共同财物控制锁：

> **shared governance x ≠ leader unilateral disposition x。**

本轮不是反驳它，而是补另一侧：

```text
共同治理对象本身仍由多人共同处分
→ 不能私有化给领导者

但

多人共同完成“授权一个主位”
→ 不代表主位获得后每个 operational 决定仍必须共同处分
```

所以必须把：

```yaml
source_decision_structure: collective / joint / unilateral
current_execution_structure: unilateral / joint / shared / vetoed
```

作为两个不同字段。

---

## 10｜成熟度

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
criterion_version: current-x-scope-distinction-v1_20260830
x_scope_boundary_guard_increment: true
x_scope_positive_increment: false
strict_increment: false
zn_increment: false
may_override_canonical: false
```

本轮属于 x-scope pending-review 之后的**新机制边界护栏**，不是普通正例堆量。

不自动修改 L1、`zn/x` 信息卡、准度卡、`zn补x_补卡` 或 strict v2 gate。

TASK_DONE:ZNX_XSCOPE_COLLECTIVE_CONFERRAL_NOT_JOINT_EXECUTION_SONGJIANG_20260830
