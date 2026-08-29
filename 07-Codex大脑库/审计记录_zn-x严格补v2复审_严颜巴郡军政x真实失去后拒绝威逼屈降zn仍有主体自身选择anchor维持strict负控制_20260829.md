---
type: ten-yuan-fire-axis-strict-v2-audit
authority_level: L4
knowledge_status: evidence-locked
status: current-v2-negative-guard
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
work: 三国演义
character: 严颜
stage: 第63回巴郡守城至城破被擒、拒绝威逼屈降、张飞义释后自愿归附
sample_type: strict-v2-negative-revalidation
fact_confidence: 99
classification_confidence: 98
zn_current: true
x_before_loss: true
x_after_capture: false
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
legacy_v1_negative_revalidated_under_v2: true
current_v2_negative_guard_increment: true
current_v2_negative_guard_cross_work_increment: true
may_override_canonical: false
created: 2026-08-29
---

# 审计｜严颜 strict `zn↔x` v2 复审

## 1｜复审问题

旧 v1 记录把严颜列为 strict 负控制：巴郡城防/军政 `x` 真实失去后，拒绝威逼屈降的 `zn` 仍继续排序。

v1 曾使用过强的“`x` 必须是 `zn` 的绝对唯一现实落点”门。current L4 已改为：

`current-layer-specific-anchor-gap-v2_20260829`

因此本轮只问：

> 拿掉被测 `x` 后，当前窗口、当前对象层是否真的重新失去原本由该 `x` 提供的具体现实对象范围、可调用/处分接口或明确“我方”现实 anchor？

## 2｜事实链

《三国演义》第63回：

1. 严颜守巴郡时真实点起本部五六千人马，接受守城策略，命军士上城守护，并安排伏击张飞辎重；因此巴郡城防与军政处分不是名义职位，而是现实 `x`。
2. 张飞设伏擒住严颜，川兵大量倒戈，后军已入巴郡。严颜原有城防/军政 `x` 在这一节点真实断开。
3. 被押到张飞面前后，严颜拒绝跪降，在斩首威胁下仍明确拒绝因武力威逼屈服。
4. 张飞撤去杀威、亲解其缚并以礼相待后，严颜才自愿归附，并愿效力。

## 3｜zn 独立定义

本轮不用被测巴郡 `x` 来定义原则。

窄 `zn`：

> 关系/阵营的改变不能只由敌方武力和死亡威胁替主体决定；在纯威逼条件下，宁可承担生命代价，也不把是否屈服的最终判断让渡出去。

该原则在城破、被擒、原军政能力已失后仍进入生死冲突排序，因此不依赖“仍是巴郡太守”或“仍控制巴郡”才能成立。

## 4｜x 独立成立与真实失去

被测 `x`：

> 严颜对巴郡城防、本部兵马、守城与出击安排的现实军政处分边界。

城破前：
- 能点本部兵；
- 能决定守城/出击；
- 能下令军士上城与伏击；
- 部属按其命令运行。

因此 `x_before_loss = true`。

被擒并且巴郡被张飞军实际控制后，严颜不再拥有同一城防与军政处分边界，因此 `x_after_capture = false`。

这不是反事实拿掉，而是剧情中的真实 `x lost`。

## 5｜strict 双向门

### 5.1 `zn→x`

守城阶段，若拿掉“不因威逼屈服、阵营改变须经主体判断”的内部标准，严颜的军政 `x` 仍存在，但会失去“何时继续守、何时可以让渡/归附”的内部边界。

因此：

`zn→x = true`

### 5.2 `x→zn`

v2 下仍不成立。

原因不是“未来理论上还能有其他载体”，而是：

> 巴郡 `x` 真正失去以后，同一个当前窗口里，`zn` 仍有不依赖该 `x` 的现实 anchor：严颜本人当前的身体、生命、跪或不跪、受斩或接受威逼归降的选择。

拿掉巴郡城防/军政 `x` 后，原则没有失去：
- 当前现实对象；
- 当前可检验的冲突；
- 主体自身行为的直接承载；
- “是否把最终判断让渡给威逼”的明确边界。

所以原巴郡 `x` 是该原则在守城阶段的重要实现环境，但不是 current v2 意义下构成该原则现实 anchor 的必要对象。

因此：

`x→zn = false`

## 6｜拿掉、反向与第三因素冻结

### 拿掉测试

原著已经完成真实拿掉：

`巴郡失守 + 被擒 → 原 x lost`

但 `zn` 立即在生死威逼窗口继续排序，故 `x→zn` 不成立。

### 反向测试

如果城失被擒后，严颜因失去军政 `x` 而立刻把“敌方威逼即可决定我的归降”作为新标准，或者旧原则失去任何现实承载，才会支持原 `x` 构成 current anchor。

原著相反。

### 第三因素冻结

冻结：
- “忠臣/名将”后世评价；
- 张飞善恶；
- 巴郡最终归属；
- 刘璋阵营标签；
- 严颜武力强弱。

只保留：
- 原 `x` 是否真实成立并失去；
- `zn` 是否在失去 `x` 后仍有现实对象；
- 生死冲突中谁完成最终排序；
- 张飞撤去威逼后关系改变是否重新经过主体判断。

结论不变。

## 7｜最近邻排除

- `zn vs z`：不靠“忠义名将”评价锁；最硬证据发生在被俘、受斩威胁时。
- `zn vs xn`：守城策略、伏击路线回答“怎么守”，不能解释失城后为何仍拒绝屈服。
- `x vs nominal role`：旧 `x` 不靠“巴郡太守”称号，而靠现实兵马/守城处分。
- lifecycle 与 strict 分账：本例同时是 `x lost → zn persists` 的 lifecycle 正向控制，但 lifecycle 统计不能自动替代 strict 双向门。

## 8｜本轮锁出的 v2 纪律

> **现实 `x` 真正丢失，也不自动制造 `zn` 的 current anchor gap。**

如果 `zn` 在同一时刻仍有主体自身行为、身体/生命选择、其他同窗现实对象直接承载，那么被拿掉的 `x` 仍可能只是先前阶段的执行/治理对象，而不是 strict `x→zn` 所需的 current reality anchor。

更短：

`real x loss ≠ automatic x→zn gap`

这与已重审的两条 v2 负控制形成三种机制：

1. 唐僧：师徒处分 `x` 只是执行接口；
2. 关羽：曹赐资源是被原则筛选/使用的资源，同窗已有刘备关系与归刘行动 anchor；
3. 严颜：巴郡军政 `x` 真实丢失后，主体自身生死/屈服选择仍直接承载 `zn`。

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
legacy_v1_negative_revalidated_under_v2: true
current_v2_negative_guard_increment: true
current_v2_negative_guard_cross_work_increment: true
strict_positive_increment: false
```

本轮只把严颜从 `legacy-v1 / pending-v2-revalidation` 晋入 current v2 negative guard，不修改 L1、zn/x 信息卡、准度卡或 L2 `zn补x`。
