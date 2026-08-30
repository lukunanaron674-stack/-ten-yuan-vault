---
type: ten-yuan-fire-axis-x-scope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 刘备
stage: 第51-54回占据/借荆州→第66回东吴索还与刘备决定分还三郡
sample_type: x-scope-boundary-control
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_accuracy: x_准度卡_v0.1
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
strict_increment: false
zn_increment: false
x_scope_boundary_control_increment: true
may_override_canonical: false
created: 2026-08-30
---

# x scope 边界｜刘备借荆州：当前军政治理 x 真实，但不等于永久最终归属 x

## 1｜研究问题

火轴 current canonical 要求 `x` 必须说明：

- 什么对象归谁掌握；
- 主体当前具有什么实际权限；
- 权限是占有、使用、调配、处分、否决还是排除；
- 不能因为名义、称号、一次接触就把所有权限范围写成同一个 `x=true`。

上一轮孙悟空龙宫试兵器已经证明：

```text
临时试用 x
≠
长期占有 / 完整处分 x
```

本轮把同一问题迁到领地/治理对象层：

> 刘备在《三国演义》“借荆州”阶段，已经真实占据并治理荆州相关地盘；但东吴持续索还、刘备此前存在返还承诺，说明“当前治理控制”与“永久最终归属”不能混写成一个没有范围的 `x=true`。

## 2｜剧情事实

### A｜第51回后：现实占据与治理进入刘备一方

南郡、荆州等城池相继进入刘备一方现实控制，刘备不再只是“想得到一块地”，而是获得现实立足点，并由自己阵营的将领、军队占据和运行。

可观察变量：

```text
现实驻军/守城 = true
对地盘的当前军事使用 = true
对本方驻军与守将的调配 = true
现实行政/军事控制持续 = true
```

所以被测对象层至少支持：

> `current territorial-governance / military-control x = true`

这里不是因为刘备有“皇叔”“荆州牧”等称号，而是现实节点已经围绕刘备阵营运行。

### B｜第54回：返还义务仍被东吴明确主张

鲁肃来索荆州时，直接追问刘备此前关于刘琦不在后返还荆州的承诺。

这说明同一阶段同时存在：

```text
刘备现实治理控制 = true
东吴返还请求/原归属主张 = true
永久最终归属 = 有争议
```

也就是说：

> **现实 current x 已经成立，不等于 ultimate-title / permanent-disposition 已经无争议地成立。**

### C｜第66回：刘备能决定“分还三郡”，反而证明 current x 很真实

东吴再次索还荆州时，刘备与诸葛亮可以讨论“还不还”“还多少”，最后决定将长沙、零陵、桂阳三郡交还，并写信要求关羽交割。

这个节点非常关键：

```text
主体能够决定是否交割、交割多少
→ 说明当前治理/处分 x 不是纯名义

但交割议题持续存在
→ 说明当前 x 不等于永久、无条件、无返还义务的最终归属
```

因此“可交割”本身不是在否定 current `x`，而是在进一步证明 `x` 有不同 scope。

## 3｜本轮裁决

同一荆州对象不能粗暴只写：

```text
x = true / false
```

至少应拆成：

```text
当前驻军 / 守城 / 治理 x = true
当前行政军事调用 x = true
当前部分交割处分能力 = true

永久最终归属 / ultimate-title x = 不可由当前控制直接倒推
无条件永久处分 x = 不锁
```

最短规则：

> **当前能管 ≠ 永久归我。**

以及：

> **存在返还义务 / 原节点索还权，不自动抹掉当前现实治理 `x`；但它会限制 `x` 的 scope，禁止把 current-control 倒灌为 permanent-title/full-disposition。**

## 4｜与已有 x scope 控制的最小差异

### 孙悟空龙宫试兵器

```text
trial-use
→ stable personal possession/full disposition
```

主要测试：物件从临时使用到稳定占有。

### 刘备借荆州

```text
stable current governance/control
≠
permanent ultimate title/full disposition
```

主要测试：即使 current `x` 已经很宽、很稳定，也仍然可能在“永久归属/最终所有”维度受限。

因此本轮新增的是另一种 scope 轴：

```text
权限强度 / 稳定度
≠
权限期限 / 最终归属层级
```

## 5｜拿掉测试

### 拿掉刘备的现实驻军和治理能力

如果荆州只剩“刘备被称作管理者”或“别人说借给他”，但刘备不能驻军、守城、调配将领和现实治理，那么 current territorial `x` 不成立。

因此：

> 名义借用 ≠ current x。

### 拿掉“永久归属”假设

保留刘备现实驻军、治理和交割决定能力，即使承认东吴仍有返还主张，current `x` 仍然成立。

因此：

> future return obligation ≠ current x never existed。

### 反向

如果一个主体可以当前治理，但：

- 明确有期限；
- 原节点保留最终收回权；
- 主体不能自由出售、永久转让或排除原节点；

则只能按对应权限类型和期限锁 `x`，不能自动写成 full ownership/full disposition。

## 6｜最近邻排除

### x vs nx

荆州最初取得可能涉及外部关系、联盟、借用与许可来源；这些回答“通过什么关系获得当前控制”。

但一旦现实驻军、治理和交割决定已经进入刘备一方，不能因为权限来源于外部就否认 current `x`。

需要分别记录：

```text
授权/借用来源
≠
授权生效后当前现实掌握
```

### x vs xn

驻军安排、城池管理、将领部署可有 `xn` 流程邻近；但本轮 `x` 只回答：

> 当前谁能对这个地盘直接治理、调配、守卫与交割。

### x vs zx

扩大地盘、夺取城池可有 `zx` 邻近，但本轮只锁夺取以后已经存在的稳定 current control，不把每次扩张动作重复计成 `x` 定义。

## 7｜对象层与本体变量

本轮不是在判“刘备是什么样的人”，也不讨论其仁义、汉室身份或政治正当性。

被测本体变量只锁：

```text
对象：荆州相关现实治理范围
主体：刘备阵营
变量：该对象当前进入谁的实际治理/调配/处分边界，以及该边界的期限与最终归属范围
```

可观察的“本体如何成立/被规定”过程：

```text
现实占据/治理节点围绕刘备运行
→ current territorial x 成立

返还承诺与东吴索还持续存在
→ permanent-title/full-disposition 不可由 current x 倒推
```

## 8｜zn 与 strict

本轮不锁 `zn`。

刘备为什么坚持不还、愿意还多少，可以被：

- 战略生存；
- 地盘利益；
- 联盟博弈；
- 汉室/继承话语；
- 当前军事格局

多组因素解释。

当前没有一项内部原则在本窄窗口独立通过 `zn` 六项门，因此：

```text
zn = not locked
zn+x = false
strict_test_allowed = false
```

本轮不是 strict positive/negative，只增加 `x scope` 边界证据。

## 9｜新增方法纪律

```text
x 不是单一布尔值。
```

以后面对地盘、资产、权限、关系，至少分开检查：

```text
current use
current operation/governance
current exclusion
transfer/disposal
term/expiry
revocability
return obligation
ultimate title / permanent ownership
```

其中：

> **current-control 可以很强、很稳定，同时 ultimate-title 仍有争议或受返还义务限制。**

禁止两种相反误判：

1. 因为以后可能归还，就说当前从未有 `x`；
2. 因为当前能治理，就说对象已经永久、无条件、完整归主体所有。

## 10｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked

x_scope_boundary_control_increment: true
strict_increment: false
zn_increment: false
cooccurrence_increment: false
may_override_canonical: false
```

## 11｜下一步

P0/P1 继续优先寻找 strict v2 / protected-range 的真正正向风险测试。

若没有 ≥95 的高纯材料，x-scope 下一条优先做同一对象最小差异：

```text
代理 / 借用 / 保管 / 有期限控制
→
真正排除原节点 + 长期自由处分
```

重点继续区分：

> **现实 current x** 与 **永久 full-disposition x**，而不是把所有“归我”关系压成一个没有范围的开关。
