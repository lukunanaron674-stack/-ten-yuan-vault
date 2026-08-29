---
type: ten-yuan-fire-axis-strict-precondition-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 张飞
stage: 第六十三回生擒严颜→临刑不屈→义释严颜→第六十四回严颜报恩开关
sample_type: strict-precondition-guard-recognition-triggered-mercy
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
latest_main_before_write: a16e76961ff6a7694976358c3251f2a945e4e701
fact_confidence: 99
classification_confidence: 98
x_endpoint_status: true
zn_endpoint_status_for_tested_principle: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_positive_increment: false
strict_negative_increment: false
strict_precondition_guard_increment: true
cross_work_increment: false
negative_guard_mechanism: recognition-triggered-mercy-and-post-release-utility-do-not-prove-preexisting-zn
may_override_canonical: false
created: 2026-08-29
---

# strict 前置护栏｜张飞义释严颜：生杀处分 x 真实，但“敬重不屈者应释”不足独立成立 zn

## 1｜研究问题

本轮直接压力测试一个极容易伪装成 strict 的结构：

> 主体拥有对俘虏的现实生杀 / 释放处分 `x`，又因为对方表现出的勇烈与不屈主动改变处分结果，是否足以同时锁定“敬重不屈者应予宽释”的内部 `zn`，并启动 strict `zn↔x`？

结论：`x` 高纯成立；被测 `zn` 不足独立过门，因此 `zn+x` 不成立，strict 不允许启动。

## 2｜剧情事实

《三国演义》第六十三回：

1. 张飞设伏生擒严颜，巴郡已被攻入；
2. 严颜被押至张飞面前，拒绝下跪、拒绝投降；
3. 张飞最初大怒，直接命左右斩严颜；
4. 严颜面对斩首仍面不改色，继续表示宁死不降；
5. 张飞在看到这段临刑表现后，才“回嗔作喜”，喝退左右、亲自解缚、礼待严颜；
6. 严颜因张飞恩义而降。

第六十四回紧接着出现：严颜主动以自己对沿途关隘的现实影响力报恩，协助张飞一路招降、减少战斗成本。

因此可观察时间链是：

```text
x 已成立
→ 张飞先下斩令
→ 严颜临刑不屈表现进入
→ 张飞态度发生反转
→ 释放 / 礼待
→ 严颜随后报恩并产生战略收益
```

## 3｜x 端：成立

被测 `x` 只锁：

> **严颜被俘后的当前军事处分窗口内，张飞对其是否继续羁押、处斩或释放的现实处分边界。**

证据：

- 张飞能直接命左右执行斩首；
- 他也能直接喝退执行者、解除捆缚并改变处置；
- 同一节点没有第三方替他完成最终释放决定。

因此：

```yaml
x_current: true
x_scope: captive_execution_release_disposition
```

这不是“严颜这个人归张飞所有”，只是在被俘军事窗口里的现实生杀 / 释放处分权。

## 4｜被测 zn：不足独立过门

候选原则可写成：

> **面对宁死不屈、保持人格与勇烈者，即使是敌方俘虏，也不应只按敌对身份杀掉，而应给予尊重与宽释。**

但 current `zn` 要求原则在无奖励、认可与观看时仍进入判断，并在冲突中保留未来调用资格。

本案最大问题是**成立时点与独立性**：

- 张飞在严颜表现出临刑不屈以前，真实行动是“怒而命斩”；
- 候选原则的最强证据恰恰是在严颜表现触发之后才出现；
- 当前缺少压力前的独立证据，证明张飞此前已经稳定持有“对不屈敌将应宽释”的未来指导原则；
- 后续严颜马上带来沿途招降与军事收益，但该收益发生在释放以后，只能作为次生结果，不能倒写为原则起点；同样也不能用后续收益反向制造 `zn`。

所以当前更可靠的结构是：

```text
对严颜勇烈 / 不屈的强价值识别
→ 当前处分判断改变
```

而不是已经证明：

```text
压力前独立成立的内部原则 zn
→ 在当前处分 x 上高显影
```

因此：

```yaml
zn_current_for_tested_principle: not-locked
zn_confidence: below-95
```

## 5｜strict 前置门

strict 必须先有：

```text
zn 独立过门
+
x 独立过门
```

本案只有 `x` 高纯成立。被测 `zn` 仍可被“对当前对象勇烈表现的即时识别 / 敬佩”解释，缺少跨情境未来调用证据。

因此：

```yaml
zn_x_cooccurrence: false
strict_test_allowed: false
```

本轮不进入 `zn→x / x→zn` 双向 gap 测试，也不计 strict negative guard；它是 strict-precondition guard。

## 6｜拿掉 / 反向测试

### 拿掉严颜的临刑不屈表现

若严颜普通求饶、没有显示宁死不屈，当前文本没有证据证明张飞仍会执行同样的释放与礼待。

这说明“对象当场表现”是当前判断的重要触发变量。

### 拿掉后续严颜的战略帮助

释放行为已经先发生，因此后续招降收益不能解释为释放前的直接动机；但它也不能反过来补出一个压力前已成立的 `zn`。

### 真正支持 zn 的反向条件

如果能找到另一个独立场景：

```text
没有即时战略收益
+
对方同样是不屈敌手
+
张飞仍按同一原则主动限制自己的处置权
+
该原则在冲突前已有未来调用证据
```

才有资格把本案从“价值识别触发的处分变化”升级为稳定 `zn` 控制。

## 7｜最近邻排除

- `zn vs z`：本案最危险邻近不是外部对张飞的认可，而是张飞对严颜“勇烈/不屈”的对象价值识别；强烈敬佩不自动等于内部长期原则。
- `zn vs 情绪`：由怒转喜是状态变化，不能直接判 `zn`。
- `zn vs xn`：后续用严颜开关、减少攻城成本属于流程/战略收益，不定义 `zn`。
- `x vs zx`：本轮锁的是已经存在的俘虏处分权，不把释放一次写成扩权。
- `x vs nx`：当前生杀/释放微窗口的决定由张飞直接生效，不需逐次借用外部节点。

## 8｜第三因素冻结

冻结：

- “张飞也有义”人物标签；
- 后世“义释严颜”评价；
- 严颜后来是否长期任职；
- 张飞是否提前预见严颜会帮助开关；
- 刘备集团的仁义政治形象。

只保留：处分权、最初斩令、严颜临刑表现、张飞处分反转、后续收益时间顺序。

## 9｜结论

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x: true
zn: not-locked-for-tested-principle
zn_x_cooccurrence: false
strict_test_allowed: false
strict_positive_increment: false
strict_negative_increment: false
strict_precondition_guard_increment: true
cross_work_increment: false
```

本轮新增纪律：

> **直接生杀 / 释放处分 `x` + 对象当场表现触发的强烈敬佩 / 价值识别，不足自动成立内部 `zn`。**

以及：

> **recognition-triggered mercy ≠ pre-existing zn；post-release utility ≠ retroactive zn evidence。**

## 10｜资料来源

- 《三国演义》第六十三回：张飞生擒严颜、命斩、见其临刑不屈后转而释放礼待。
- 《三国演义》第六十四回：严颜因张飞恩义报恩，沿途招降关隘。
- L1 `L1_十元即阴阳五行相反轴正本_v1.6.md`
- `zn_准度卡_v0.1`
- `x_准度卡_v0.1`
- `zn补x_补卡_v0.1`
- `zn-x火轴研究总纲_20260827.md`

TASK_DONE: FIRE-ZN-X-STRICT-PRECONDITION-GUARD-ZHANGFEI-YANYAN-20260829
