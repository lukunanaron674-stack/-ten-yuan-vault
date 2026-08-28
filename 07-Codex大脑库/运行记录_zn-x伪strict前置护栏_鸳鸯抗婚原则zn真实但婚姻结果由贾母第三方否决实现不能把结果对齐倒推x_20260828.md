---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 红楼梦
character: 鸳鸯
sample_type: false_strict_precondition_guard_third_party_veto_result_congruence
stage: 第46回鸳鸯抗婚公开誓绝→贾母介入阻断贾赦强纳
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
x_endpoint_for_tested_marriage_relation: false
same_current_window: true
same_object_layer: true
result_aligned_with_zn: true
third_party_real_veto_present: true
cooccurrence_locked: false
strict_test_allowed: false
strict_increment: false
negative_guard_mechanism: third_party_veto_result_congruence
may_override_canonical: false
created: 2026-08-28
---

# 运行记录｜zn-x 伪 strict 前置护栏｜鸳鸯抗婚：结果符合 zn 不等于主体拥有 x

## 1｜本轮问题

P0 strict `zn↔x` 第一正例长期无法通过 `x→zn` 的不可替代现实落点门。最新研究又补了“跨阶段端点不能拼接”的前置护栏。

本轮继续压 strict 的启动门，专测另一种更隐蔽的假阳性：

> **同一当前窗口、同一对象层里，主体的 `zn` 已经成立，而且最终现实结果也恰好与该 `zn` 一致，是否就能从“原则成功保护了结果”倒推出主体拥有该对象层的现实 `x`？**

结论：**不能。若结果主要由第三方现实否决节点完成，就必须把第三方冻结出来；结果与原则同向，不等于掌握权归主体。**

## 2｜既有 zn 端点

仓库已有 L4 `evidence-locked` pure-zn 记录以 99/96 锁定：

> 鸳鸯面对贾赦强纳为妾、邢夫人和兄嫂持续劝说、姨娘身份与家族收益利诱以及未来婚配被封锁的威胁，仍明确坚持“不能由权势、家属或身份收益替自己决定婚姻”，并把边界扩展到未来其他高位对象、终身不嫁、出家甚至死亡代价。

该原则满足：

```text
无奖励/认可仍进入判断
+
强利益与安全压力下仍完成冲突排序
+
未来调用边界明确
+
让渡代价明确
→ zn = true
```

所以本轮不重新证明 `zn`，只复用已锁端点。

## 3｜为什么表面上很容易误判 x

同一第46回窗口里，最终现实结果确实与鸳鸯的原则一致：

```text
鸳鸯：不接受被贾赦强纳
→ 最终贾赦没有把这段强纳关系做成
```

如果只看结果，很容易写成：

```text
鸳鸯拒绝
→ 婚姻结果按鸳鸯方向停住
→ 她拥有婚姻关系的现实否决 x
```

但 current `x` 不能从“我的方向最后赢了”倒推。必须继续问：

```text
谁真正拥有让这个关系停住的现实处分/否决能力？
```

## 4｜第三方现实否决：贾母

原著第46回的因果链不是“鸳鸯单独一拒绝，贾赦就自动失去强纳路径”。

更准确是：

```text
鸳鸯多轮拒绝、公开誓绝
+
贾赦仍以家内权势和未来婚配威胁持续施压
+
鸳鸯到贾母面前公开陈述
+
贾母现实介入、震怒并把家内最高保护/否决压进同一关系链
→ 贾赦强纳路径被现实阻断
```

因此：

```text
zn = 鸳鸯自己的内部原则
现实停止强纳的关键 x/veto 节点 = 贾母的上位现实权力
```

这两个来源不能因为最终结果一致而合并。

## 5｜x 判定

本轮被测对象层严格限定为：

> **“贾赦是否能把鸳鸯纳为妾”这一当前婚姻/强纳关系结果，是否已经进入鸳鸯本人稳定直接处分、否决或排除的 `x` 边界。**

结论：**不独立过门。**

理由：

1. 鸳鸯有非常强的内部拒绝原则，但意志强度不是 `x`；
2. 贾赦在鸳鸯拒绝以后仍继续以现实家内权势施压，说明“主体拒绝”本身尚未稳定关闭外部路径；
3. 最终让强纳路径现实停住，需要贾母这个第三方上位节点介入；
4. 因此本例最多证明鸳鸯拥有高纯 `zn`，不能把第三方否决产生的现实结果记到鸳鸯的 `x` 账上。

机器裁决：

```yaml
zn_current: true
x_current_for_tested_marriage_relation: false
same_current_window: true
same_object_layer: true
third_party_real_veto_present: true
result_aligned_with_zn: true
zn_x_cooccurrence: false
strict_test_allowed: false
```

## 6｜拿掉测试

### 拿掉贾母第三方否决

保留：

```text
鸳鸯内部原则
+
公开拒绝
+
承担高代价意愿
```

则 `zn` 仍成立。

但从现有文本不能推出：

> 贾赦的强纳路径已经仅靠鸳鸯本人获得稳定现实关闭。

因此第三方否决不是 `zn` 的必要条件，却是当前“关系结果现实停住”的关键因果节点。

### 拿掉鸳鸯 zn

即使贾母因为自己的利益、控制或别的原因阻止贾赦，也只能证明贾母拥有现实否决；不能由贾母的权力反向生成鸳鸯内部原则。

两端来源仍然独立。

## 7｜反向测试

若要把同一婚姻对象层的鸳鸯 `x` 真正锁上，至少需要另有材料证明：

```text
不依赖贾母或等价上位节点
+
鸳鸯本人可以稳定直接使该关系退出/拒绝生效
+
贾赦或其他节点无法绕过她的决定继续完成同一结果
```

如果这条因果拨动成立，才可重新检查 `x`。

反之，只要结构仍是：

```text
主体原则方向
+
第三方上位现实否决
→ 结果与主体方向一致
```

就不得由结果对齐倒推主体 `x`。

## 8｜最近邻排除

- `zn vs z`：鸳鸯原则先于贾母公开支持成立，不能由支持生成；
- `zn vs zx`：公开誓绝、剪发与迫使家内秩序回应有显权邻近，但不是现实婚姻处分 `x`；
- `x vs 第三方 veto`：本轮核心。结果停住必须追踪真正现实否决节点归属；
- `x vs nx`：鸳鸯求助/进入贾母保护通道可有关系通道邻近，但不能把借来的/外置的现实否决记成主体自身 `x`；
- `co-occurrence`：同窗、同对象只是必要前置，不是充分条件，两端仍需各自独立过门；
- `strict`：`x` 端未过门，因此 strict 根本不允许启动。

## 9｜第三因素冻结

本轮第三因素不是抽象借口，而是原著中真实存在、能改变同一结果的因果节点：

> **贾母的上位现实保护/否决。**

冻结方法：

```text
保留鸳鸯 zn
保留贾赦强纳压力
先移除贾母现实否决
→ 检查鸳鸯本人是否仍有足够现实处分证据关闭同一关系
```

当前答案：证据不足。

所以第三方否决可以完整解释“为什么最终结果与鸳鸯原则一致”，不需要假设鸳鸯拥有稳定婚姻 `x`。

## 10｜与最新 strict 前置护栏的关系

上一份刘备控制锁出：

```text
同一人物
但不同阶段 / 不同对象层
→ 两个强端点不能跨阶段拼共现
```

本轮进一步锁出：

```text
同一窗口
+
同一对象层
+
zn 真
+
结果与 zn 一致
仍然不够
```

还必须继续证明：

> **这个现实结果确实由主体自己的 `x` 造成，而不是第三方替主体完成。**

因此 strict 合法启动门现在至少应写成：

```text
same_current_window
+
same_object_layer
+
zn independently true
+
x independently true
+
result causality belongs to tested x rather than third-party substitute
→ only then strict test may start
```

## 11｜本轮新增纪律

### 纪律 A｜结果对齐不能替代 x

> **最终结果与主体 `zn` 一致，不等于主体拥有使结果生效的现实 `x`。**

### 纪律 B｜第三方否决必须归第三方

> **若外部保护者/上位节点的现实否决足以解释同一结果，不能把这份现实作用权记到主体名下。**

### 纪律 C｜同窗同对象仍需独立端点

> **same window + same object layer 只是 strict 前置门，不是 co-occurrence 的自动证明。**

## 12｜成熟度与统计

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98

cooccurrence_positive_increment: false
cooccurrence_negative_guard_increment: true
strict_positive_increment: false
strict_negative_guard_increment: false

same_current_window: true
same_object_layer: true
zn_endpoint_independently_locked: true
x_endpoint_independently_locked: false
third_party_real_veto_present: true
strict_test_allowed: false
stable_character_essence_locked: false
may_override_canonical: false
```

本例增加的是 **co-occurrence / strict 启动门的第三方因果反向护栏机制**。因为 `x` 端未独立过门，strict 双向测试尚未合法启动，所以不增加 strict negative guard count。

## 13｜最短结论

> **鸳鸯的 `zn` 很强，最终强纳也确实被阻止，但现实结果主要由贾母的上位否决完成。结果恰好符合主体原则，不能把第三方作用权倒灌成主体 `x`。即使同一窗口、同一对象层，strict 仍必须先证明 `x` 独立属于被测主体。**
