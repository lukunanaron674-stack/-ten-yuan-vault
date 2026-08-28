---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 刘备
sample_type: false_strict_precondition_guard_cross_stage_endpoint_laundering
stage: 第十二回权领徐州 pure-x ↔ 第四十一回携民渡江 pure-zn 跨阶段对照
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  cooccurrence: zn-x-cooccurrence-v1_20260827
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
fact_confidence: 99
classification_confidence: 98
zn_endpoint_independently_locked_elsewhere: true
x_endpoint_independently_locked_elsewhere: true
same_current_window: false
same_object_layer: false
cooccurrence_locked: false
strict_test_allowed: false
strict_increment: false
negative_guard_mechanism: cross_stage_endpoint_laundering
may_override_canonical: false
created: 2026-08-28
---

# 运行记录｜zn-x 伪 strict 前置护栏｜刘备跨阶段端点拼接

## 1｜本轮问题

P0 strict `zn↔x` 第一正例持续难以通过 `x→zn` 的不可替代现实落点门。

在这种情况下，一个高风险假阳性是：

> 同一人物在阶段 A 有高纯 `x`，在阶段 B 又有高纯 `zn`，于是把两份已经锁定的强端点跨阶段拼起来，伪造成 `zn+x` 当前共现，再继续做 strict 双向补。

本轮只测试这个前置漏洞。

结论：**禁止。**

## 2｜已锁端点 A：第十二回徐州治理 pure-x

既有 L4 `evidence-locked` 记录已经以 99/97 锁定：

> 刘备真正接受“权领徐州事”以后，通过用人、调兵、出榜安民等现实动作，使徐州军政治理对象进入其实际调用/调配/处分边界，因此该窄治理对象层 `x=true`。

同一记录同时明确：

```text
x_current = true
zn_current = not_locked
pure_x = true
```

理由是当前治理窗口里，百姓安危、政治收益、官民推举、汉家城池等因素并存，没有一项内部原则在该窄窗口独立通过完整 `zn` 硬门。

因此第十二回只提供 **pure-x**，不提供 `zn+x`。

## 3｜已锁端点 B：第四十一回携民渡江 pure-zn

另一份既有 L4 `evidence-locked` 记录已经以 99/96 锁定：

> 当曹军逼近、携民严重拖慢撤退、诸将反复建议为了自身脱险先弃百姓时，刘备仍坚持不能主动抛弃已经自愿相随并形成现实托付的百姓。

该原则通过无奖励、现实代价、连续冲突排序与未来调用门，因此该窄责任原则对象层 `zn=true`。

同一记录也明确：

```text
zn_current = true
x_same_object_layer = false
pure_zn = true
```

因为百姓是否跟随由其自愿决定，刘备的保护、组织渡河与共同移动不能证明百姓本人进入其稳定处分 `x` 边界。

因此第四十一回只提供 **pure-zn**，不提供 `zn+x`。

## 4｜为什么两份强端点不能拼成共现

两份证据都很强，但它们回答的是两个不同问题：

```text
第十二回：
对象 = 徐州军政治理范围
x = true
zn = not locked

第四十一回：
对象 = 已自愿相随百姓的责任原则
zn = true
x = false
```

同时存在两个断裂：

1. **时间窗口不同**：第十二回徐州接管与第四十一回长坂撤离并非同一当前窗口；
2. **对象层不同**：一个是地区军政治理对象，一个是对相随百姓的责任原则对象。

所以不能写成：

```text
刘备有 x
+
刘备有 zn
→
刘备有 zn+x 当前共现
```

正确写法是：

```text
阶段 A 有 pure-x
阶段 B 有 pure-zn
≠ 同一窗口 co-occurrence
```

## 5｜为什么 strict 测试在这里根本不允许启动

current `zn补x_补卡` 的 strict 测试前提，是两端先分别独立成立，而且必须针对同一个可审计的当前对象窗口讨论双向缺口。

本例在进入双向拿掉之前就已经失败：

```text
same_current_window = false
same_object_layer = false
```

因此：

> **P0 strict 不是“先搜到一个人物有强 zn，再搜到他另一个阶段有强 x”。**

必须先证明：

```text
同一当前窗口
+
同一可比对象层
+
zn 独立过门
+
x 独立过门
```

只有这四项同时满足，才允许继续测试：

```text
拿掉 x → zn 是否出现不可替代现实落点缺口？
拿掉 zn → x 是否出现不可替代原则/排序缺口？
```

## 6｜拿掉测试

### 拿掉第四十一回 pure-zn

第十二回徐州治理 `x` 仍然独立成立。

说明第四十一回原则不是第十二回 `x` 成立的必要共现端。

### 拿掉第十二回 pure-x

第四十一回“不为自身脱险主动抛弃相随百姓”的 `zn` 仍然独立成立。

说明徐州治理 `x` 不是第四十一回该原则的必要当前现实端。

因此两份端点的强度不能弥补窗口与对象层不一致。

## 7｜反向测试

如果要把同一人物的两个历史端点升级为真实 `zn+x`，至少需要另找到一个新的当前窗口，在那里：

```text
同一原则 zn 仍真实进入排序
+
同一被测 x 仍真实处于掌握边界
+
两端针对同一对象结构互动
```

不能仅用“这个人以前有过 x”“这个人后来有过 zn”完成拼接。

若该新窗口存在，再重新独立验端点；不得沿用历史标签直接继承。

## 8｜最近邻排除

- `稳定人物本体`：本轮禁止。历史上分别出现两个端点，不等于稳定人格两端永久共存；
- `lifecycle`：本轮不研究端点是否跨时间持续，只研究跨阶段证据能否被拼接；
- `pressure-display`：本轮没有同一原则受压后复位问题；
- `co-occurrence`：只有同一当前窗口两端同时过门才允许计数；
- `strict complement`：co-occurrence 前置门未过，因此 strict 根本不启动。

## 9｜第三因素冻结

冻结：

- “刘备仁义”总标签；
- 汉室身份；
- 徐州百姓拥戴；
- 长坂百姓拥戴；
- 后世评价；
- 刘备整个人物是否长期稳定具有某种火轴本体。

只保留两份既有 `evidence-locked` 的窄对象结论与它们的时间/对象元数据，结论不变。

## 10｜本轮新增纪律

### 纪律 A｜端点强度不能替代同窗性

> **两个 99% 端点若不在同一当前窗口，也不能相加成 co-occurrence。**

### 纪律 B｜同一人物不能充当对象层胶水

> **“都是刘备”不是关系证明。人物身份连续不能把徐州治理对象和长坂百姓责任对象自动粘成同一火轴关系。**

### 纪律 C｜strict 搜索禁止跨阶段端点洗钱

```text
阶段 A pure-x
+
阶段 B pure-zn
≠
zn+x
≠
strict zn↔x
```

本轮将该错误命名为：

> **cross-stage endpoint laundering｜跨阶段端点洗钱**

这里只是研究术语，指把不同时窗/对象的已锁端点错误拼成更高阶关系，不修改任何 L2 端点定义。

## 11｜成熟度与统计

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98

cooccurrence_positive_increment: false
cooccurrence_negative_guard_increment: true
strict_positive_increment: false
strict_negative_guard_increment: false

same_current_window: false
same_object_layer: false
strict_test_allowed: false
stable_character_essence_locked: false
may_override_canonical: false
```

本例增加的是 **co-occurrence / strict 前置门反向护栏机制**，不增加 strict negative guard，因为 strict 双向测试尚未合法启动。

## 12｜最短结论

> **同一人物在不同阶段分别拥有高纯 `x` 与高纯 `zn`，不能跨阶段拼接成当前 `zn+x`，更不能据此进入 strict。strict 的第一道门不是“这个人两端都曾出现过”，而是“同一当前窗口、同一可比对象层，两端分别独立过门”。**
