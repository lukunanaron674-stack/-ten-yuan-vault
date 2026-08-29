---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: strict-precondition-negative-guard
work: 三国演义
character: 诸葛亮
stage: 第87-90回南征孟获｜攻心战略→多次擒放→七擒七纵后心服
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
x_current_for_captive_release_disposition: true
zn_current_for_tested_mercy_or_keep-promise-principle: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
negative_guard_mechanism: repeated-self-restraint-can-be-single-instrumental-policy-not-independent-zn
may_override_canonical: false
created: 2026-08-29
---

# 运行记录｜诸葛亮七擒孟获：反复释放不自动成立 zn

## 1｜研究问题

表面结构非常像 strict `zn↔x` 候选：

```text
诸葛亮真实擒住孟获
+ 对孟获有稳定留押 / 处死 / 释放处分 x
+ 多次主动释放
+ 最终七擒七纵
→ 是否可直接推成“宽仁 / 信守不杀 / 尊重心服”的内部 zn？
```

本轮裁决：**不允许。**

原因不是 `x` 不真，而是候选 `zn` 被文本明确写出的“攻心、服其心”战略充分竞争解释。反复出现也不能自动升级成跨阶段内部原则，因为这些重复动作可以是同一项单一战略政策的连续实施。

## 2｜剧情事实

第87回南征前，马谡明确提出：南方即使武力攻破，班师后仍可能再反，因此应“攻心为上”，目标是“但服其心足矣”；诸葛亮当场表示这正合自己心意，并据此推进南征。

同回及后续数回，诸葛亮多次真实擒获、控制并释放孟获及相关蛮将。第89回第四次擒获孟获时，孟获已在诸葛亮营中受缚；诸葛亮可以继续留押或杀害，却再次去缚、给酒并放回。孟获还明确把“再擒一次便倾心降服”放进下一轮条件。

第90回七擒七纵结束后，孟获终于明确表示心服、不再反；诸葛亮随后保留孟获为洞主，并解释不派蜀官、不留蜀兵，目标是降低后续不信任与再叛风险。

因此可观察链是：

```text
战略目标先明确：服其心、避免班师后复叛
↓
稳定俘虏处分 x 多次出现
↓
反复“擒而不杀 / 放回再战”
↓
孟获最终心服
↓
治理安排继续服务“减少再叛”
```

## 3｜x 证据

本轮 `x` 很硬，且与“瞬时可杀机会”不同。

被测对象层：

> 孟获被擒后，在当前蜀军营地中对其留押、去缚、处死、放回的现实俘虏处分边界。

诸葛亮可以命人押解、去缚、赐酒、放回，决定能直接生效；孟获不是短暂战斗破绽，而是已经进入稳定俘虏控制。

所以：

```text
x_current_for_captive_release_disposition = true
```

## 4｜为什么不锁 zn

如果把候选原则写成：

> “对已经被自己擒获但尚未心服的敌方首领，应反复宽释，不能只靠杀戮和强制服从。”

它看起来很像内部原则，而且还重复七次。

但 current `zn` 不能靠“重复、付出成本、看起来克制”直接成立。必须冻结外部收益、制度要求、即时策略等第三因素后，原则仍独立进入冲突排序并保留未来调用资格。

本例最大第三因素不是猜测，而是文本直接给出：

```text
南方武力打服后仍可能复叛
→ 攻心为上
→ 目标是服其心
→ 多次擒放是实现该目标的连续策略
```

所以反复释放完全可以由：

- 长期稳定南方；
- 降低班师后复叛；
- 获取孟获本人公开心服；
- 减少外来官兵驻守成本；
- 提高后续治理可持续性；

共同解释。

拿掉这些战略目的后，当前材料不足 ≥95% 证明诸葛亮仍会把“反复宽释被俘敌酋”作为一项不可轻易让渡、跨其他对象/情境继续调用的内部原则。

因此：

```text
zn_current_for_tested_mercy_or_keep-promise-principle = not-locked
zn+x co-occurrence = false
strict_test_allowed = false
```

## 5｜最小差异：重复行为不等于跨阶段 zn

本例新增一个重要方法门：

> **同一行为重复很多次，不等于自动出现“跨阶段未来调用资格”。**

如果七次释放都只是同一个“攻心使其心服”战略在同一战役中的连续迭代，那么：

```text
repeated action across episodes
≠
independent principle across contexts
```

真正要支持 `zn`，还需要看到：

- 换一个不再有“服其心”战略收益的对象；
- 或战略目标已经消失；
- 或宽释反而明显损害当前治理目标；
- 主体仍按同一原则排序；

才有资格把“攻心策略”进一步升级为内部原则。

## 6｜拿掉测试

### 拿掉战略收益

若删掉“南方会复叛 / 必须服其心”的战略问题，只保留诸葛亮拥有孟获俘虏处分 `x`，当前证据不足说明他仍会连续多次放回。

所以重复宽释不能脱离战略目的独立锁 `zn`。

### 拿掉 x

若孟获从未被擒、诸葛亮没有稳定俘虏处分边界，就不存在“释放”这个当前动作窗口。

但这只证明 `x` 是该战略动作的执行接口，不足反向证明一个独立 `zn` 已存在；因为 `zn` 前置门本身未过。

## 7｜反向测试

若存在另一个明确桥段：

```text
没有攻心收益
没有长期治理收益
没有外部声望 / 服从收益
反复释放反而显著增加风险
但诸葛亮仍坚持“已败而不屈者不能靠杀戮强制服从”
并在不同对象/阶段继续调用
```

则候选 `zn` 会明显上升。

当前南征孟获材料本身不够。

## 8｜最近邻排除

- `xn`：七擒七纵作为连续博弈/流程设计，首先高度接近战略运行骨架；复杂且重复的行动不等于 `zn`。
- `zx`：诸葛亮公开决定擒放、改变南方现实结构，可有显权邻近，但不能替 `zn`。
- `x`：本轮稳定俘虏处分 `x` 成立；正因为 `x` 真，才更需要防止把“主动不杀”自动美化成内部原则。
- `z`：孟获最后心服、南人感戴属于结果/认可，不可倒填原则起点。

## 9｜第三因素冻结

冻结以下因素后重新测试：

- 马谡“攻心为上”的战略建议；
- 班师后复叛风险；
- 南方治理成本；
- 孟获公开心服的政治价值；
- 后续“不留官、不留兵”的治理收益；

则“反复释放”是否仍由内部 `zn` 驱动，现有证据降到 95 以下。

因此第三因素不能被冻结成功，`zn` 不锁。

## 10｜成熟度与统计

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98

x: true
zn: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false

strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
```

这是 **strict 前置护栏**，不是 strict negative：双向 strict 测试在 `zn` 独立门就已经被阻止。

本例属于《三国演义》，该作品已存在 strict-precondition guards，因此只增加 control，不增加 independent-work 计数。

## 11｜新增研究纪律

```text
稳定俘虏处分 x
+ 多次主动释放
+ 重复七次
≠
内部 zn 自动成立
```

更精确：

> **同一战略政策在同一战役中重复执行，不等于内部原则跨情境复验。**

以及：

> **recurrence ≠ criterion independence。**

必须先排除“每次重复都只是同一个 instrumental policy 的连续迭代”。

## 12｜资料锚点

- 《三国演义》第87回：马谡提出“攻心为上”，诸葛亮称其“足知吾肺腑”。
- 《三国演义》第89回：第四次擒获后再次去缚、赐酒、释放，孟获提出若再擒则心服。
- 《三国演义》第90回：七擒七纵后孟获明确心服；诸葛亮保留其洞主位置，并说明不留外官、外兵的治理理由。

## 13｜下一步

P0 继续寻找第二部可靠文学 strict v2 正向，但新增硬门：

> 不仅要冻结即时收益，还要冻结**同一长期战略目标对多轮重复行为的解释力**；重复行为本身不能充当 `zn` 的跨阶段独立性证明。

若下一轮仍无 ≥95 的 strict 正例，优先找“重复自我克制但其实是单一政策连续迭代”的跨作品对照，确认该护栏能否从《三国演义》外复现。
