---
type: ten-yuan-fire-axis-strict-precondition-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: x-scope-boundary-temporary-custody-vs-full-disposition
work: 西游记
character: 金池长老
stage: 第16回观音院借看锦襕袈裟一夜至谋求长期占有
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
strict_test_allowed: false
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
negative_guard_mechanism: authorized-temporary-custody-does-not-equal-full-disposition-or-ownership-x
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜金池长老借袈裟：授权临时保管 x 真实，但不得倒灌完整处分 / 归属边界

## 1｜本轮问题

P0 strict v2 搜索未得到 ≥95 的可靠正向。本轮转而测试一个会直接污染 strict 前置端点的 x 范围问题：

> 一个对象被主体合法拿到手、可以保管并观看一夜，是否就能把“对象已经进入完整 x 处分 / 归属边界”锁上？

结论：**不能。必须按权限类型分层。**

## 2｜剧情事实

《西游记》第16回，金池长老见锦襕袈裟后，请求把袈裟拿到后房“细细的看一夜”，并明确约定次日送还；唐僧/悟空允许，且再次强调明早照旧归还、不得损污。随后袈裟被拿入后房，金池长老现实持有并可观看。

但金池随后痛哭，理由正是：即使留下唐僧十日、年载，也终究要把袈裟还回去，不能“长远”拥有。之后广智/广谋才提出杀害/纵火，使袈裟成为“传家之宝”的方案，金池表示同意。

原著事实最小链：

```text
唐僧允许借看一夜
→ 金池现实取得袈裟并带入后房
→ 当前可保管 / 观看
→ 但约定次日必须原物归还
→ 金池自己也知道“终究要还”
→ 为了把临时持有改成长期归属，才另起杀人/纵火方案
```

公开原文参考：
- https://zh.wikisource.org/zh-hans/西游记/第016回
- https://www.shidianguji.com/book/NA11023/chapter/1k2ghsyr5pjjn

## 3｜x 分层判定

### 3.1 当前授权临时保管 / 观看层

成立：

```text
object = 锦襕袈裟
subject = 金池长老
permission = 经唐僧/悟空同意拿入后房看一夜
actual control = 当前现实持有、保管、观看
```

因此本轮不把“借来的东西”粗暴判成 x=0。当前窄权限层可以记为：

> **temporary custody / viewing x = true**

### 3.2 完整处分 / 长期归属层

不成立。

金池没有得到：
- 永久占有；
- 自由转让；
- 自由毁损；
- 排除唐僧取回；
- 把袈裟作为自己的“传家之宝”长期处分。

相反，原著明确保留“明早送还 / 不得损污”的上位边界。金池自己也承认，只要唐僧要走，袈裟仍必须归还。

因此：

```yaml
temporary_custody_x: true
viewing_use_x: true
full_disposition_x: false
ownership_or_permanent_attribution_x: false
```

## 4｜最小差异

本案原著自己提供了最好的反向测试。

阶段 A：

```text
合法借看一夜
→ 当前持有成立
→ 完整处分不成立
```

阶段 B（谋杀 / 纵火计划）：

```text
金池希望长期留下袈裟
→ 发现现有授权不够
→ 必须消灭原主返还请求与现实取回关系
→ 才可能把 temporary custody 改造成 permanent possession
```

所以：

> **主体为了获得更强处分/归属而必须另行消灭原权利节点，本身就是现有 x 范围不足的反证。**

## 5｜strict 前置护栏

本轮新增机制：

> **authorized temporary custody ≠ full disposition / ownership x**

更短：

```text
物在我手
+ 我被允许暂时保管 / 使用
≠
对象完整归我处分
```

strict 测试时必须写清楚被测 x 的“权限类型”，不能把：
- 保管；
- 借用；
- 临时观看；
- 代理操作；
- 受限使用；

自动升级为：
- 永久占有；
- 自由处分；
- 最终归属；
- 排除原权利人；
- 全权限 x。

否则会出现 `x-scope laundering`：用真实存在的窄 x 给并不存在的宽 x 补票，再拿宽 x 去跑 strict。

## 6｜zn 检查

本轮不锁 zn。

“极度喜欢袈裟 / 想永久占有 / 因贪欲愿意杀人”是欲望、情绪和目标强度，不自动满足 current zn 的无奖励、冲突排序、未来调用与不可轻易让渡原则门。

所以：

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
```

## 7｜最近邻排除

- `x vs xn`：把袈裟拿去后房、安排保存是当前操作流程，不等于最终归属。
- `x vs nx`：借看权限来自唐僧/悟空外部许可；当前可同时存在外部许可来源与局部 custody x，不把“借来的”一律写成 x=0。
- `x vs zx`：谋害原主、强行把袈裟留下属于另一个公开/强制改变边界的问题，本轮不据此改写 x 定义。
- 贪婪、宝物价值、佛门身份、年龄、结局都不参与端点判定。

## 8｜拿掉与反向测试

### 拿掉授权
如果唐僧没有同意金池拿入后房，金池就没有合法 temporary custody；必须转成偷取/强夺等另一种事实链。

### 拿掉返还约束
如果唐僧明确把袈裟永久赠与金池，允许其自行保留/处分，则 full x 需要重新评估。

### 保留当前原文
“借一夜 + 明早送还 + 不得损污”同时存在时，只能锁窄 custody/use x，不能锁完整处分/归属 x。

## 9｜关键本体变量

```text
当前成立的不是“袈裟已经成为金池的东西”
而是：
金池在一个明确时限和返还义务内取得局部现实掌握。

本体边界的改变必须看：
谁还能要求返还？
谁能排除谁？
谁能决定长期归属？
谁能合法/现实决定处分范围？
```

因此本案主要服务 x scope，不把阶段欲望误写成 zn。

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
strict_precondition_guard_increment: true
strict_positive_increment: false
strict_negative_guard_increment: false
cross_work_increment: false
```

《西游记》已在 strict precondition guard 的作品集合中，所以 control 增加，independent work 不重复增加。

## 11｜后续高信息增益

P0 继续寻找天然单一、稳定、subject-specific 的对象构成型 x。

更高价值的最小差异可继续找：

```text
同一对象
A：仅保管 / 借用 / 代理 → 窄 x
B：后来真正获得最终归属 / 排除原节点 / 自由处分 → 宽 x
```

用同人同物 off/on 可以进一步压实 `x scope`，比继续堆“手里拿到东西”的普通 pure-x 正例更有价值。
