---
type: ten-yuan-fire-axis-x-scope-minimal-difference
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 西游记
character: 孙悟空
stage: 第3回东海龙宫试兵器→金箍棒获赠并带离
sample_type: x-scope-minimal-difference
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
strict_increment: false
zn_increment: false
x_scope_boundary_control_increment: true
may_override_canonical: false
created: 2026-08-30
---

# x scope 最小差异｜孙悟空龙宫试兵器→金箍棒稳定占有

## 1｜研究问题

同一人物、同一地点、同一类对象连续出现两种掌握关系：

1. 龙王先后拿出大杆刀、九股叉、画杆方天戟，孙悟空可以接手、试使、评价后放下；
2. 龙婆提出把海藏神珍铁“送与他”，孙悟空实际取出、按意变化、带离龙宫，之后长期随身使用。

问题：前后是否都能用同一个笼统 `x=true` 覆盖？

结论：不能。必须按权限范围拆开。

## 2｜剧情事实

### A｜试用兵器阶段

龙王主动命下属把大杆刀、九股叉、画杆方天戟拿出。孙悟空可接在手中试使、评价轻重，但不满意即放下，原对象继续属于龙宫兵器体系。

可观察变量：

```text
接触 = true
临时使用 = true
测试/评价 = true
带离 = false
排除原节点 = false
长期归属 = false
```

所以这里至多支持：

> `temporary handling / trial-use x`

不能倒灌为：

> `ownership / full disposition x`

### B｜金箍棒阶段

龙婆明确提出把神珍铁“送与他，凭他怎么改造，送出宫门便了”。孙悟空随后亲手取出，按自己意图改变大小，持续执持，并实际带离龙宫；回花果山后还能反复变大、变小、藏入耳中，其他猴子不能挪动，之后长期成为其个人持续调用兵器。

可观察变量：

```text
明确赠与/放弃原节点当前控制 = true
主体按意改造 = true
带离原系统 = true
持续随身持有 = true
反复调用 = true
他人不能等价调用 = true
稳定个人处分边界 = true
```

所以这一阶段支持：

> `stable personal possession/use/disposition x = true`

## 3｜关键边界

```text
临时拿在手里
+ 可以试用
≠
完整归属 / 稳定处分 x
```

更严格：

```text
x 不是单一布尔量。
同一个对象可以分别存在：
接触 x
临时使用 x
保管 x
长期占有 x
排他调用 x
完整处分 x
```

因此以后火轴不得用“物在我手 / 我能用”给“长期归属 / 完整处分”补票。

## 4｜拿掉测试

### 拿掉临时试用

若孙悟空不能试刀、叉、戟，只会失去评价兵器是否趁手的机会；这些兵器仍属于龙宫，说明临时试用并非完整 `x` 的证明。

### 拿掉赠与与稳定带离

若金箍棒只允许原地试用、试完必须归还，则即使孙悟空能使它变化，也只能支持窄 `trial-use x`，不能锁稳定个人归属。

### 反向

保留“赠与 + 带离 + 长期反复调用 + 原节点不再逐次许可”，即使删掉“第一次拿到手”的戏剧性，稳定宽 `x` 仍成立。

所以真正分水岭不是“第一次能不能拿”，而是：

> **对象是否从原节点的稳定控制范围退出，并进入主体可持续、无需逐次重新许可的调用/占有/处分边界。**

## 5｜最近邻与第三因素冻结

- 能拿得动金箍棒是能力事实，不等于 `x`；决定性证据是赠与、带离、持续调用与控制范围改变。
- 龙王害怕孙悟空、后来上奏不满，不改变“对象后来长期稳定在孙悟空控制中”的事实，但也不能把龙王恐惧本身当 `x` 证据。
- “金箍棒认主/如意变化”属于对象特性支持，不代替现实归属证据。
- 本轮不锁 `zn`；寻求趁手兵器、喜欢宝物、威逼龙王均不足独立证明内部不可让渡原则。

## 6｜结论

```yaml
stage_A_trial_weapons:
  temporary_use_x: true
  full_disposition_x: false

stage_B_ruyi_jingu_bang:
  stable_personal_possession_x: true
  repeated_use_x: true
  full_disposition_boundary: true

zn: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
```

事实置信：99。
分类置信：98。

本轮新增的是 `x scope` 权限宽度控制，不计 strict positive/negative，不修改 L1/L2 canonical。

## 7｜可复用规则

> **temporary handling / trial-use / custody / agency 必须与 stable possession / exclusion / full disposition 分账。**

> **“能用”不是“归我”；真正宽 `x` 的分水岭是对象控制范围是否稳定迁移，并且主体之后无需逐次重新取得原节点许可。**

> **同人同物的权限宽度变化，应优先用 scope transition 表达，而不是把两个阶段都粗写成同一个 `x=true`。**
