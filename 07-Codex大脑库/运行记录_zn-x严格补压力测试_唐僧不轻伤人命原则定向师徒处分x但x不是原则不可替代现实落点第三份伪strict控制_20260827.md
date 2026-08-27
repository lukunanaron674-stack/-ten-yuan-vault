---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_role: strict-zn-x-negative-control-third
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
strict_negative_guard_index: 3
strict_negative_guard_work_index: 3
may_override_canonical: false
created: 2026-08-27
work: 西游记
character: 唐僧
stage: 第27回三打白骨精，并以第56-57回草寇事件作跨情境复验
reuses_evidence_from:
  - 07-Codex大脑库/运行记录_zn-x最近邻_唐僧三打白骨精与诛草寇不杀人原则zn约束师徒处分x第三作品正向控制_20260827.md
---

# 唐僧不轻伤人命原则｜第三份 strict zn↔x 反向压力测试

## 0｜本轮问题

旧记录已经以同一 criterion_version 锁定：

- `zn`：对人命不可轻率施杀的内部原则，能在高代价冲突中参与排序，并在第27回与第56-57回跨情境重复；
- `x`：唐僧对孙悟空当前师徒关系拥有可现实生效的约束/处分权限，包括紧箍咒、留用、警告与逐退；
- 同一当前窗口里 `zn+x` 共现成立。

本轮不重复端点，只检查 current canonical `zn补x_补卡_v0.1` 的双向缺口：

```text
拿掉 zn → x 是否重新出现用途 / 惩戒 / 保留 / 终止标准缺口？
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

第27回中，唐僧把孙悟空连续击杀的对象理解为平人，并反复以“不应行凶伤人”的判断念紧箍咒、警告，最后写贬书逐走孙悟空。即使孙悟空指出失去自己会降低取经安全，唐僧仍让该原则进入关系处分排序。

第56-57回草寇事件再次出现同型冲突：孙悟空打死草寇后，唐僧再次因不轻伤人命而处分、逐走悟空；观音也概括唐三藏“一心秉善为僧，决不轻伤性命”。

所以本轮的 `zn` 不是“和尚身份”或一次误判，而是跨阶段重复进入高代价关系处分的内部原则。

## 2｜zn → x 为什么成立

如果拿掉“不轻伤人命”这一 `zn`，保留唐僧对孙悟空的师徒关系处分 `x`：

- 紧箍、警告、留用、逐退等现实权限仍存在；
- 但“什么时候必须惩戒、什么行为构成不可接受边界、何时宁可牺牲战力也要终止同行”失去本轮最直接的内部标准。

原则补入以后，`x` 的使用不是随安全收益最大化，而出现明确的惩戒/保留/终止边界。

因此：

`zn_to_x_gap_filling: true`

这符合 current canonical：`zn` 为已成立的现实掌握/处分对象提供用途、守护/放弃和否决标准。

## 3｜x → zn 为什么不成立

反向拿掉本轮被测的 `x`：即去掉“唐僧对孙悟空的紧箍、留用、逐退等师徒处分/约束权限”，但保留“不轻伤人命”原则。

该原则并不会因此失去现实落点：

- 它仍可直接约束唐僧自己的判断与行为；
- 它仍能作用于如何对待草寇、疑似平人以及其他现实生命对象；
- 它仍可影响唐僧是否接受、支持或拒绝他人的杀伤行为；
- 第56-57回的跨情境复验本身说明原则对象范围并不等于“孙悟空这个师徒处分对象层”。

所以“对孙悟空的关系处分 `x`”只是该原则在一个关系窗口中的现实执行接口之一，不是原则获得现实落点的不可替代对象。

也就是说：

> `x` 让唐僧能够更直接地处分孙悟空，不等于没有这项 `x`，不轻伤人命原则就只能停在口号。

因此：

`x_to_zn_gap_filling: false`

## 4｜拿掉与反向测试

### 拿掉 zn

保留师父身份、紧箍与逐徒权限，唐僧仍有 `x`，但缺少本轮用于判断孙悟空杀人行为何时必须惩戒/逐退的内部原则标准。

### 拿掉 x

保留不轻伤人命原则，即使唐僧失去对孙悟空的处分权，原则仍可约束主体自身并指向其他现实生命对象，因此不出现“无现实落点”的 strict 缺口。

### 反向改写

若某项原则只有在唐僧能够处分孙悟空时才具有任何现实对象，一旦失去师徒处分权就完全无法约束自身、其他关系或其他生命对象，那么 `x→zn` 才会明显上升。

原著不是这种结构。

## 5｜最近邻排除

- `zn+x co-occurrence ≠ strict complement`：两端同段成立只完成共现门。
- `x` 是原则的一条执行接口 ≠ `x` 是原则不可替代现实落点。
- `zn vs z`：僧人身份、慈悲评价、观音认可不是本轮原则成立的支柱。
- `zn vs xn`：赶路、战斗安排与流程不能解释杀人边界为何在高代价下持续排序。
- `x vs zx`：反复使用既有师徒处分权优先是 `x`，不把每次念咒/逐徒重复记成扩权。
- `x vs nx`：本轮处分权无需逐次向观音或外部节点申请即可生效。

## 6｜第三因素冻结

冻结：

- 白骨精真实身份；
- 八戒挑拨；
- 佛教主题与“慈悲和尚”标签；
- 孙悟空战力高低；
- 后续是否重新收徒；
- 唐僧判断在事实层是否正确。

保留：

- 不轻伤人命原则是否独立通过 zn 门；
- 师徒处分权限是否独立通过 x 门；
- zn 是否给 x 提供处分边界；
- 拿掉该 x 后，原则是否仍有其他现实对象和主体行为可承载。

结论不变。

## 7｜对象层

- `zn` 对象层：不轻伤人命的内部原则及其未来指导资格；
- `x` 对象层：唐僧对孙悟空当前师徒关系的现实处分/约束权限。

不能把“原则可以评价孙悟空行为”偷换成“原则必须依赖对孙悟空的处分权才有现实落点”。

## 8｜结论与成熟度

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 97
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
one_way_complement: zn_to_x
strict_negative_guard_index: 3
strict_negative_guard_work_index: 3
strict_positive_count_increment: 0
may_override_canonical: false
```

本轮不修改 L1、zn/x 信息卡、准度卡或 `zn补x_补卡`。

## 9｜本轮新增方法纪律

> **关系处分 x 是 zn 的一个现实执行接口，不等于它就是 zn 的不可替代现实落点。**

strict `x→zn` 必须证明：拿掉被测 `x` 后，原则真的重新失去现实对象、可保护范围或明确我方边界；若原则仍可通过主体自身行为、其他关系或其他现实对象稳定落地，则不能锁 strict。
