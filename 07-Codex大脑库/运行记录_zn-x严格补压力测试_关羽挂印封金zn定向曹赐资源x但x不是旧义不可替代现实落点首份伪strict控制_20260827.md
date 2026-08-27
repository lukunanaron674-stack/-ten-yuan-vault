---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_role: strict-zn-x-negative-control-first
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
fact_confidence: 99
classification_confidence: 97
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
one_way_complement: zn_to_x
strict_negative_guard_count_increment: 1
strict_positive_count_increment: 0
may_override_canonical: false
created: 2026-08-27
work: 三国演义
character: 关羽
stage: 第26回得知刘备消息至挂印封金离曹的关键冲突窗口
reuses_evidence_from:
  - 07-Codex大脑库/运行记录_zn-x最近邻_关羽挂印封金旧义zn高显影与曹赐资源x主动让渡首轮火轴控制_20260827.md
  - 07-Codex大脑库/运行记录_zn-x共现_关羽挂印封金关键窗口旧义zn与曹赐资源x同段独立成立第三作品控制_20260827.md
---

# 关羽挂印封金｜首份 strict zn↔x 反向压力测试

## 0｜本轮问题

旧记录已经锁定：

- `zn`：对刘备旧盟/旧义具有冲突排序与未来指导资格；
- `x`：曹赐金银、赤兔马等具体对象已进入关羽现实占有/使用边界；
- 同一关键窗口里 `zn+x` 当前共现成立。

本轮不再重复端点和共现，只检查 current canonical `zn补x_补卡_v0.1` 的双向缺口：

```text
拿掉 zn → x 是否重新出现用途 / 守护 / 放弃标准缺口？
拿掉 x → zn 是否重新出现现实落点 / 对象范围 / 我方边界缺口？
```

结论：

```text
zn → x：成立
x → zn：不成立
strict zn↔x：不成立
当前更适合：zn→x 单向补
```

## 1｜剧情事实

第26回关羽得知刘备在袁绍军中后，书信中明确回到昔日盟誓，写出“新恩虽厚，旧义难忘”的冲突排序。随后：

- 将曹操累次所赐金银封置库中；
- 悬汉寿亭侯印；
- 不带曹操所拨人役；
- 带原随从与二夫人离开；
- 赤兔马仍继续骑乘。

所以本轮既不是“没有 x”，也不是“zn 出现以后 x 先消失”。

## 2｜zn → x 为什么成立

如果拿掉 `zn`，保留曹赐金银、侯印、赤兔马等现实 `x`：

- 对象仍归关羽现实占有/使用；
- 但“哪些值得继续保留、哪些应当封存/归还、这些掌握应服务什么”失去当前最直接的内部排序标准。

旧义补入后，现实变化是：

```text
已有 x
→ 旧义进入排序
→ 金银封存 / 侯印悬回 / 曹拨人役不带
→ 赤兔马因有助归刘而继续使用
```

这符合 current canonical 的 `zn补x`：

> zn 为已经成立的掌握对象提供用途、守护/放弃标准和内部方向。

因此：

`zn_to_x_gap_filling: true`

## 3｜x → zn 为什么不成立

关键反向拿掉：去掉本轮被测的曹赐金银、侯印、赤兔马等 `x`，但保留关羽旧盟/旧义。

旧义并不会因此失去现实落点：

- “归刘”本身仍是现实方向；
- 二夫人仍是需要护送的关系对象；
- 离曹、寻找刘备仍是可执行行动；
- 原随从与主体自身行动能力仍可承载该原则。

也就是说，本轮这批曹赐资源并不是旧义获得现实落点的不可替代对象。

它们更接近：

> **旧义必须筛选、限制、让渡或重新使用的现实掌握对象。**

而不是：

> **没有它们，旧义就只能停留在口号、失去可保护对象和现实边界。**

赤兔马虽然实际帮助关羽远行，但“交通效率提高”不能替代 strict 反向门要求的不可替代现实落点缺口；即使拿掉赤兔马，旧义仍可通过离曹、归刘、护送二嫂等同一原则链现实落地。

因此：

`x_to_zn_gap_filling: false`

## 4｜第三因素冻结

冻结：

- 关公后世忠义神化；
- 刘曹阵营正邪；
- 曹操是否值得感恩；
- 武力；
- 最终是否顺利会合刘备。

保留：

- 旧盟是否独立通过 zn 门；
- 曹赐资源是否现实进入 x；
- zn 是否改变 x 的用途/让渡标准；
- 去掉这些 x 后，zn 是否仍有其他现实对象与行动落点。

结论不变。

第三因素尤其重要：二夫人、归刘行动、原随从与主体自身行动能力都说明“旧义现实落地”并不只依赖曹赐资源。因此不能把“赤兔马有帮助”误写成“x 对 zn 不可替代”。

## 5｜最近邻排除

- `zn+x co-occurrence ≠ strict complement`：两端同段独立成立，只完成共现门。
- `x` 的现实帮助 ≠ `x补zn`：帮助行动效率不等于补回 zn 的现实落点不可替代缺口。
- `zn` 影响资源选择 ≠ x 不成立：金银、马匹先真实进入掌握边界，之后才被原则重新筛选。
- `z`：曹操认可、封侯不是本轮 x 的核心证据，x 证据来自实际占有/使用/处分。
- `xn`：安排车马、路线回答“怎么走”，不回答“为什么必须归刘”。

## 6｜对象层

- `zn` 对象层：刘备旧盟/旧义的内部最终指导资格；
- `x` 对象层：曹操所赐金银、侯印、赤兔马及曹拨人役的现实掌握/使用边界。

不把局部单向补倒灌为“关羽整个人稳定 zn→x”。

## 7｜成熟度与统计

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 97
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
one_way_complement: zn_to_x
strict_negative_guard_count_increment: 1
strict_positive_count_increment: 0
may_override_canonical: false
```

本轮不修改 L1、zn/x 信息卡、准度卡或 `zn补x_补卡`。

## 8｜本轮新增方法纪律

> **一个 x 对 zn 有帮助，不等于它在 strict 意义下补 zn。**

必须继续问：

> 拿掉这个 x，zn 是否真的重新出现“没有现实对象、没有可保护范围、没有我方边界”的可命名缺口？

若 zn 仍可通过其他既有对象/关系/行动边界稳定落地，则最多证明共现或单向 `zn→x`，不能锁 strict `zn↔x`。
