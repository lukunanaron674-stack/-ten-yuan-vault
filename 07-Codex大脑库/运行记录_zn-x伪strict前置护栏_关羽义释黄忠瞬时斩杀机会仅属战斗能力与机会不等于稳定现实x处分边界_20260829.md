---
type: zn-x-strict-precondition-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
updated: 2026-08-29
axis: fire
pair: zn-x
work: 三国演义
character: 关羽
stage: 第53回长沙战黄忠马前失→关羽不乘危斩杀→次日黄忠射盔缨报恩
sample_type: strict-precondition-guard-false-x-from-transient-combat-opportunity
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
zn_current_for_tested_fairness_principle: not-locked
x_current_for_huang_zhong_life_disposition: false
physical_kill_opportunity_present: true
strict_test_allowed: false
strict_precondition_guard_increment: true
negative_guard_mechanism: transient-capability-or-opportunity-is-not-stable-x-disposition-boundary
positive_increment: false
strict_negative_increment: false
cross_work_increment: false
may_override_canonical: false
---

# 运行记录｜关羽义释黄忠：瞬时斩杀机会不是稳定现实 `x`

## 1｜研究问题

《三国演义》第53回非常容易被表面结构骗成 strict 候选：

```text
关羽有机会斩黄忠
+
关羽不乘马失之危
→ 好像“我有生杀 x，但被公平/义气 zn 限制”
```

本轮只测试：

> **“此刻我能杀掉你”的战斗能力/瞬时机会，能不能直接当成 `x` 的现实处分边界？**

结论：不能。strict 在 `x` 前置门即停止。

## 2｜剧情事实

第53回：

1. 关羽与黄忠连续交战，前一日百余合、次日五六十合均未分胜负；
2. 关羽准备使用拖刀计；
3. 黄忠追击时战马前失，摔落地面；
4. 关羽立即回马举刀，但没有趁势斩杀，只喝令黄忠换马再战；
5. 黄忠回城后明确把此事理解为关羽“不忍杀害我”的义气；
6. 次日黄忠同样面临可以射杀关羽的战斗机会，却两次虚拽，第三箭只射盔缨，作为对“不杀之恩”的回报。

## 3｜`x` 前置门

current `x` 要求被测对象真正进入主体的现实占有、调用、调配、处分、否决或排除边界；职位、能力、一次接触和偶发机会均不能自动替代。

这里关羽真实拥有的是：

```text
更强的瞬时战斗位置
+
黄忠因战马失足产生的短暂破绽
+
此刻可能造成致命结果的能力
```

但这不足以证明：

```text
黄忠的生命 / 去留
已经稳定进入关羽可持续处分的 x 边界
```

原因：

- 前后两人长期处于对等战斗关系，百余合未分胜负；
- 关羽不能稳定调用、控制或反复处分黄忠；
- 这次“可斩”高度依赖马失前蹄的偶发窗口；
- 黄忠换马后，关羽立刻重新回到对等战斗而非持续控制关系。

因此：

```yaml
physical_kill_opportunity_present: true
stable_x_disposition_boundary: false
```

## 4｜新硬门

> **瞬时物理能力 / 战斗优势 / 一次可杀机会 ≠ `x`。**

更精确：

```text
can cause result now
≠
object has entered my stable disposition boundary
```

以后看到“我可以杀、抓、推倒、抢走、打败”时，必须先问：

1. 这是稳定现实处分权，还是一次能力优势？
2. 对象能否离开这个偶发窗口后继续被主体调用/留放/排除？
3. 决定是否可以重复直接生效，而不是依赖一次战斗破绽？

如果答案偏后者，只能记 capability/opportunity，不得给 `x` 补票。

## 5｜`zn` 也不顺手锁

关羽“不乘危斩黄忠”确实提供“公平交战 / 不乘对手偶发失势取命”的强候选。

但本轮不把一次行为和黄忠次日回报直接升级成稳定 `zn`。还缺：

- 压力前独立原则表达；
- 不同对象/阶段的未来调用复验；
- 排除武将荣誉、求公平决斗、对强敌敬重等邻近解释。

因此：

```yaml
zn_current_for_tested_fairness_principle: not-locked
```

即使未来 `zn` 被其他材料锁定，本窗口仍然不能因为一次“可斩机会”补出 `x`。

## 6｜拿掉与反向测试

### 拿掉偶发马失
若黄忠没有马失，两人继续对等交战，关羽并没有稳定“决定黄忠生死”的现实接口。说明所谓 `x` 高度依赖偶发事件。

### 反向
若剧情是：黄忠已被关羽俘获、缴械、关押，关羽可以稳定决定处死/释放，执行节点等待其命令，那么才明显接近真实生命/释放处分 `x`。

当前桥段不是这种结构。

## 7｜最近邻排除

- `x vs 能力`：武力强、刀已经举起，不等于对象归主体处分。
- `x vs zx`：一次公开压制也不能自动变成稳定掌握。
- `zn vs z`：武将荣誉、外部评价、两军喝彩不能作为原则充分证据。
- `zn vs 情绪/敬佩`：不杀强敌也可能来自临场敬重，不能仅凭动作锁 `zn`。

## 8｜strict 裁决

由于 `x` 前置门未通过：

```yaml
zn_x_cooccurrence: false
strict_test_allowed: false
zn_to_x_gap_filling: not-tested
x_to_zn_gap_filling: not-tested
strict_zn_x_complement_locked: false
```

这不是 strict 双向测试后失败，而是**strict 根本没有合法启动**。

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
strict_precondition_guard_increment: true
strict_positive_increment: false
strict_negative_increment: false
cross_work_increment: false
```

本例属于《三国演义》，strict 前置护栏已有该作品，因此只增加 guard mechanism/control，不增加 independent work 数。

## 10｜研究价值

当前 strict 前置门已经防过：

- 跨阶段端点洗钱；
- 第三方 veto 倒灌；
- 法度/问责制造假 `zn`；
- 角色绩效/治理可执行性制造假 `zn`；
- 多 `x` 事后捆绑；
- 公开自罚/服众制造假 `zn`；
- 临刑表现触发敬佩制造假 `zn`；
- **本轮新增：瞬时物理能力/战斗机会制造假 `x`。**

这使 strict 搜索进一步要求：被测 `x` 必须是文本中自然可识别的稳定掌握/处分边界，而不是“这一下我刚好能做到”。

## 11｜下一步

P0 继续优先找第二部可靠文学 strict v2 正向。候选必须同时满足：

```text
zn 先独立过门
+
x 是稳定现实处分边界，不是一次能力/机会
+
同窗同对象层
+
第三因素不能替代
+
双向 current-layer-specific anchor gap
```

若无 ≥95 材料，继续产高纯前置反例，不降低 strict 门。
