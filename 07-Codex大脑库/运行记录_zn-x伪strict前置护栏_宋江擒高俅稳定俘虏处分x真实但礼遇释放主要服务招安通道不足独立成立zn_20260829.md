---
type: zn-x-strict-precondition-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
updated: 2026-08-29
axis: fire
pair: zn-x
work: 水浒传
character: 宋江
stage: 第80回三败高太尉→高俅被生擒上梁山→宋江礼遇并释放以求招安
sample_type: strict-precondition-guard-real-stable-x-but-strategic-release-not-independent-zn
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
x_current_for_captive_release_disposition: true
zn_current_for_tested_mercy_or_honor_principle: not-locked
stable_captive_control_present: true
release_strategy_explicitly_tied_to_recruitment_channel: true
strict_test_allowed: false
strict_precondition_guard_increment: true
negative_guard_mechanism: stable-disposition-x-plus-release-result-is-not-zn-when-release-is-strategically-tied-to-external-channel
strict_positive_increment: false
strict_negative_increment: false
cross_work_increment: false
may_override_canonical: false
---

# 运行记录｜宋江擒高俅：稳定俘虏处分 `x` 真实，但策略性释放不足成立 `zn`

## 1｜研究问题

《水浒传》第80回是一条比“瞬时能杀”更硬的 strict 前置压力样本：

```text
高俅已经被梁山真实生擒
+
宋江拥有稳定留押 / 释放 / 礼遇的现实处分边界
+
宋江最终选择礼遇并放回
```

表面很容易被写成：

```text
真实 x
+
主体自我克制 / 不杀强敌
→ mercy / honor zn
→ strict 候选
```

本轮只测试：

> **对象已经稳定进入主体处分 `x` 后，“选择释放”这个高强度结果，能不能自动证明一条内部 `zn`？**

结论：不能。该窗口的释放行为被“借高俅继续打开招安通道”高度、直接解释，`zn` 前置门未通过，strict 不允许启动。

## 2｜剧情事实

第80回：

1. 梁山水军击败官军，高俅被张顺从水中擒获并解到梁山；
2. 宋江见高俅后亲自下堂扶起、更衣、请上坐，并要求后续不得随意杀害俘虏；
3. 高俅及多名官军将领都处于梁山实际控制中，宋江可以决定继续拘留、处死、礼遇或释放；
4. 宋江主动向高俅说明自己“并无叛逆本意”，请求高俅回朝保奏招安；
5. 高俅明确答应回京保奏梁山招安，并提出可留下众将作为信用担保；
6. 宋江拒绝扣留众将作质，决定全部备马送回；
7. 第三日仍设宴、送金银彩缎，并再次提起招安；
8. 高俅建议让精细之人随他进京，宋江于是安排萧让、乐和同行，自回梁山等待招安消息。

## 3｜`x` 前置门：这次是真正稳定 `x`

current `x` 要求具体对象真实进入主体占有、调用、调配、处分、否决或排除边界，不能只靠能力、称号或瞬时机会。

本例不同于“关羽义释黄忠”的瞬时战斗窗口：

```text
高俅已经被实际擒获
+
已被带入梁山营寨
+
梁山执行节点等待宋江处理
+
宋江能够决定礼遇 / 留押 / 释放
```

因此被测对象层：

```yaml
stable_captive_control_present: true
x_current_for_captive_release_disposition: true
```

这是稳定俘虏处分 `x`，不是“此刻刚好能杀”的 transient capability。

## 4｜`zn` 前置门：释放结果不能自动升级成内部原则

如果只看结果：

```text
抓到高俅
→ 不杀
→ 礼遇
→ 主动放回
```

很容易把它解释成：

> “宋江有一条不可轻易让渡的仁厚 / 不杀俘 / 信义原则。”

但原著把策略链写得过于直接：

```text
宋江当前最高政治目标之一 = 招安
+
高俅拥有通往朝廷的现实外部接口价值
+
宋江亲自请求高俅回朝保奏
+
高俅明确承诺保奏
+
宋江随后释放并遣人随行
+
宋江回寨后专等招安消息
```

因此“礼遇 + 释放”至少可以被：

- 招安目标；
- 借高俅重新打开朝廷通道；
- 降低对方敌意；
- 建立信用与政治交换；
- 让萧让、乐和进入京师接口；

完整解释。

拿掉这些外部通道与当前政治收益后，现有文本不足 ≥95% 证明宋江仍会因为一项独立的“必须善待并释放高俅”内部原则做完全相同处分。

因此：

```yaml
zn_current_for_tested_mercy_or_honor_principle: not-locked
```

## 5｜新硬门

> **稳定处分 `x` + 主体选择释放 / 宽纵 ≠ `zn` 自动成立。**

进一步：

```text
object truly under my stable disposition x
+
I voluntarily release it
≠
release was caused by independent zn
```

如果释放行为本身与：

```text
外部通道
政治交换
资源回报
身份恢复
战略合作
未来许可
```

构成直接因果链，就必须先冻结这些第三因素。

只有在拿掉这些现实收益后，主体仍因同一内部原则在高代价冲突中作相同排序，才允许把“释放”推进为 `zn` 证据。

## 6｜和近期两个相邻护栏的差异

### 关羽义释黄忠

```text
瞬时可杀机会
≠ 稳定 x
```

所以卡在 `x` 前置门。

### 张飞义释严颜

```text
稳定生杀 x = true
但候选 zn 在严颜临刑不屈之后才被触发
```

所以卡在 `zn` 时间独立性。

### 本轮宋江擒高俅

```text
稳定留押 / 释放 x = true
候选“宽纵 / 信义 zn”表面可见
但释放行为被招安通道与政治交换直接解释
```

所以卡在 `zn` 第三因素独立性。

三案共同说明：

> **“我能决定你走不走，并且最后放你走”仍不足以直接启动 strict。**

必须分别证明：`x` 是稳定处分边界；`zn` 先独立过门；释放结果不是临场触发、策略收益或第三方通道造成。

## 7｜拿掉与反向测试

### 拿掉招安通道

假设高俅不能回朝保奏、没有任何朝廷接口价值，且释放不会增加宋江恢复合法身份的概率。

当前文本没有提供足够证据证明宋江仍必然以同样礼遇和无担保方式释放高俅。

因此该反事实显著削弱候选 `zn`。

### 反向

如果出现另一独立桥段：

```text
敌方重要人物已稳定被俘
+
无招安 / 无交换 / 无赎金 / 无政治接口收益
+
释放反而增加自身风险
+
宋江仍因为同一“不得杀俘 / 必须守信”原则放人
+
后续同类冲突再次复验
```

才明显向独立 `zn` 上升。

当前第80回本身不够。

## 8｜最近邻排除

- `x vs 瞬时能力`：本例是真稳定俘虏处分 `x`，不是战斗机会。
- `zn vs nx`：高俅作为通向朝廷的外部政治接口，更接近外部通道变量；它不能替内部原则上班。
- `zn vs xn`：安排萧让、乐和随行属于“怎么推进招安”的流程，不是 `zn`。
- `zn vs z`：朝廷合法化、官位恢复和招安承认属于外部认可邻近，不能作为 `zn` 充分证据。
- `zn vs 策略`：礼遇强敌、释放强敌可以是高水平策略，不等于内部不可让渡原则。

## 9｜对象层

本轮只锁：

> **高俅及被俘官军的当前留押 / 释放处分边界。**

不把这项局部俘虏处分 `x` 倒灌成整个梁山所有军政 `x`；也不把宋江长期招安方向在其他阶段的 `zn` / 其他十元判断拿来替“本轮宽纵原则”补票。

## 10｜strict 裁决

由于 `zn` 前置门未通过：

```yaml
x_current: true
zn_current_for_tested_principle: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
zn_to_x_gap_filling: not-tested
x_to_zn_gap_filling: not-tested
strict_zn_x_complement_locked: false
```

这不是 strict 双向测试后失败，而是**strict 没有合法启动**。

## 11｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
strict_precondition_guard_increment: true
strict_positive_increment: false
strict_negative_increment: false
cross_work_increment: false
```

《水浒传》已经存在 strict 前置护栏作品，因此本轮增加 guard mechanism / control，不增加 independent work 数。

## 12｜研究价值

本轮把 strict 前置门从“瞬时假 `x`”推进到更硬的一层：

> **即使 `x` 真、对象真在手、主体真能放人，释放结果也不能替 `zn` 端上班。**

新增机制：

```text
stable-disposition-x-plus-release-result-is-not-zn
when-release-is-strategically-tied-to-external-channel
```

这可以防止今后把“俘虏后礼遇 / 放人 / 宽刑 / 赦免”一律美化成自我约束型 `zn`。

## 13｜下一步

P0 继续寻找第二部可靠文学 strict v2 正向，但筛选顺序必须是：

```text
1. x 先证明为稳定现实处分边界
2. zn 先独立过门，不能靠释放 / 宽纵结果倒推
3. 冻结外部通道、政治交换、角色收益、治理绩效和即时策略
4. 同窗同对象层
5. 才允许做 strict 双向 current-layer-specific anchor gap
```

若没有 ≥95 材料，继续产高纯前置反例，不降低门槛。
