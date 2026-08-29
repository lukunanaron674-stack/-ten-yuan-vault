---
type: ten-yuan-fire-axis-audit-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_role: strict-v2-negative-revalidation
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
work: 三国演义
character: 关羽
stage: 第26回得知刘备消息至挂印封金离曹的关键冲突窗口
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
legacy_v1_negative_revalidated_under_v2: true
current_v2_negative_guard_increment: true
may_override_canonical: false
created: 2026-08-29
---

# 关羽挂印封金｜strict v2 复审仍为负控制

## 0｜本轮问题

旧记录在 `x-as-nonreplaceable-real-anchor-v1_20260827` 下锁定：

- `zn=true`：刘备旧盟/旧义拥有冲突排序与未来指导资格；
- `x=true`：曹赐金银、赤兔马等具体资源已进入关羽现实占有/使用边界；
- `zn→x=true`；
- `x→zn=false`；
- strict 不成立。

随后 canonical backtest 已将 v1 的“世界上不能存在任何其他载体”强门废止，current L4 strict 门改为：

`current-layer-specific-anchor-gap-v2_20260829`

本轮只问：关羽旧负控制是否只是被 v1 过严误杀？

结论：**不是。关羽在 v2 下仍不能通过 `x→zn`。**

## 1｜剧情事实与端点

第26回关羽得知刘备在袁绍军中后，以“新恩虽厚，旧义难忘”的冲突排序决定离曹：

- 曹赐金银封置；
- 汉寿亭侯印悬回；
- 曹拨人役不带；
- 带原随从与二夫人离开；
- 赤兔马继续使用。

因此本轮不是“没有 x”，也不是“zn 出现以后 x 已先消失”。

### zn

独立命名：

> 对刘备旧盟/旧义不能被曹方现实厚待替换；一旦刘备去向明确，旧义仍拥有最终归向的未来指导资格。

该原则在现实奖励、爵禄与留曹收益存在时仍完成冲突排序，因此 `zn=true`。

### x

被测 `x`：

> 曹操所赐金银、赤兔马等已经真实进入关羽当前占有、使用与处分边界的具体资源。

因此 `x=true`。

## 2｜zn→x 仍成立

拿掉旧义，资源仍属于关羽当前现实掌握，但失去：

- 哪些应继续保留；
- 哪些应封存/归还；
- 当前掌握应服务什么最终方向。

旧义进入后，金银封存、人役不带、赤兔马继续用于归刘，说明 `zn` 给 `x` 补入用途、保留/放弃与方向标准。

`zn_to_x_gap_filling: true`

## 3｜v2 下 x→zn 为什么仍不成立

v2 不再问：

> 没有曹赐资源以后，世界上是否还可能有任何别的载体？

而只问：

> 拿掉被测 x 后，当前窗口、当前对象层是否重新失去一块原本由该 x 提供的具体稳定现实 anchor？

关羽案仍失败，因为在**同一当前窗口**中，旧义已经拥有多个直接现实 anchor：

1. **刘备本人及既有君臣/结义关系**：旧义的最终归向对象仍然明确存在；
2. **二夫人**：关羽现实正在承担护送关系，原则不是悬空判断；
3. **离曹—寻找刘备的行动链**：旧义可以直接决定主体当前行动，而不依赖曹赐资源才能获得现实接口；
4. **主体自身的留曹/离曹选择**：即使没有金银或赤兔马，旧义仍可直接约束“是否继续留在曹营”这一现实决策。

因此拿掉曹赐金银、赤兔马等被测 `x` 后：

- `zn` 不只是“未来理论上还可能找到别的载体”；
- 而是**当前窗口已经有现成、稳定、直接的关系与行动 anchor**。

被测资源失去后真正下降的是：

> 行动便利、资源效率、需要被原则筛选/让渡的对象数量。

而不是：

> 旧义当前现实对象范围、可保护范围或明确我方边界本身。

所以：

`x_to_zn_gap_filling: false`

## 4｜与 canonical v2 校准的关系

《辛德勒的名单》《V字仇杀队》证明：

> “未来理论上还可以找到其他载体”不能自动否决 `x→zn`。

关羽这里不是这个问题。

本例属于：

> **同一当前窗口已经存在多个不依赖被测 x 的现实 anchor。**

所以它仍符合 v2 负控制，而不是 legacy 假阴性。

新增短句：

> **future alternative 不自动否决 strict；same-window existing anchor 会真正削弱 `x→zn`。**

## 5｜执行接口 / 筛选对象 / 对象 anchor 分离

曹赐资源在本例更准确的角色是：

```text
被 zn 筛选、让渡、重新定向的现实掌握对象
+
提高离曹归刘行动效率的资源
```

而不是：

```text
没有它，旧义在当前窗口就没有现实对象或我方边界
```

因此至少要继续区分：

```text
resource under principle selection
≠
execution convenience
≠
object-constituting current anchor
```

只有最后一类才可能支持 current v2 `x→zn`。

## 6｜第三因素冻结

冻结：

- 关公后世忠义神化；
- 刘曹阵营正邪评价；
- 曹操是否值得感恩；
- 武力；
- 最终是否成功会合刘备；
- 赤兔马的戏剧象征。

只保留：

1. 旧义是否独立过 `zn` 门；
2. 曹赐资源是否现实进入 `x`；
3. `zn→x` 是否出现资源用途/让渡标准缺口；
4. 拿掉被测资源后，当前窗口是否仍存在不依赖该资源的直接关系与行动 anchor。

结论不变。

## 7｜最近邻排除

- `z`：曹操认可、封侯不是本轮 `x` 核心证据；
- `xn`：收拾车马、路线回答“怎么走”，不解释“为什么必须归刘”；
- `zn+x co-occurrence ≠ strict`：两端同窗成立不代表双向补；
- “资源有帮助”不等于 `x→zn`；
- “资源被原则处分”也不等于它构成原则的 current anchor。

## 8｜对象层

- `zn`：刘备旧盟/旧义的最终归向与未来指导资格；
- `x`：曹赐金银、赤兔马等具体资源的现实掌握/使用/处分边界；
- current anchor：刘备关系、二夫人护送关系、离曹归刘行动、主体自身留/离选择。

不把人物整体贴成 `zn→x` 或 strict 类型。

## 9｜结论与成熟度

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
legacy_v1_negative_revalidated_under_v2: true
current_v2_negative_guard_increment: true
may_override_canonical: false
```

本轮不修改 L1、zn/x 信息卡、准度卡或 `zn补x_补卡`。

## 10｜下一轮高信息增益

继续用同一 v2 尺子重审剩余 legacy 负控制，优先严颜：它有“原巴郡军政 x 被剧情真实拿掉后 zn 仍持续”的真实生命周期证据，最适合检验 `x lost in reality ≠ current anchor loss` 是否仍成立。