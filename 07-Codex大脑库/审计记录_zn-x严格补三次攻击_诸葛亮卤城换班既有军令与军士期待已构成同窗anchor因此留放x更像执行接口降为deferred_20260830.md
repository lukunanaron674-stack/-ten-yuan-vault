---
authority_level: L4
knowledge_status: deferred
status: deferred-under-attack
fact_confidence: 99
classification_confidence: 94
axis: fire-zn-x
criterion_version: fire-zd-x-strict-v2_20260829
strict_baseline: current-layer-specific-anchor-gap-v2
sample_type: strict-positive-adversarial-rereview
work: 三国演义
character: 诸葛亮
stage: 第一百一回卤城换班
zn_endpoint_status: retained-true
x_endpoint_status: retained-true
zn_to_x_status: retained-true
x_to_zn_status: not-proven-at-95
strict_positive_status: suspended-after-third-adversarial-attack
strict_positive_count_effect: -1
same_current_window: true
same_object_layer: related-but-anchor-dimensions-distinct
same_window_standing_commitment_anchor_competition: true
tested_x_role: execution-or-fulfillment-interface-candidate
post_decision_morale_payoff_confound: previously-tested-and-insufficient-to-defeat-zn
may_override_canonical: false
supersedes_as_current_research_judgment: true
---

# 审计记录｜诸葛亮卤城换班 strict 第三次攻击

## 结论

原 `99/95 evidence-locked strict` 本轮降为 `99/94 deferred-under-attack`。

本轮不重打上一审已排除的“士气收益 / 长期信誉收益”解释，而只攻击 `x→zn`：既有轮换军令与已对相关军士形成的稳定期待，本身已经可能构成同一当前窗口里的现实 anchor；诸葛亮对这批军士的留放处分 `x` 更像兑现或违背既有承诺的执行/履约接口，而未证明到 95% 是该 `zn` 的 current-layer object-constituting anchor。

## 剧情事实

第一百一回中，蜀军此前已经按百日为期轮换。卤城时四万军士应当换班，新军尚未到，魏军又突然急攻。杨仪建议暂留应归军士，诸葛亮仍以“用兵命将，以信为本”为理由，决定不因当前大难破坏既有换班安排，并命应去军士离营。军士随后因感激而自愿请留；已有二次攻击已确认，这一士气收益发生在诸葛亮先作放行决定之后，不能倒写成决定前动机。

## zn 独立定义

本轮继续禁止把被测 `x` 写入 `zn` 定义。候选原则仅写为：

> 主体已经公开形成并让相关方产生稳定合理期待的规则或承诺，不应只因当前短期利益就被任意毁弃；主体自己也受已经建立的信用约束。

该原则在魏军急攻、留下四万熟兵即时军事收益明显更高时仍完成最终排序，因此 `zn` 继续保留高纯成立判断。本轮不以职位、丞相身份、后世评价或后来士气收益证明 `zn`。

## x 独立成立

被测 `x` 仍只锁：

> 诸葛亮对当前直属蜀军换班、临时强留与放行的现实军令处分边界。

杨仪把“这四万人是否暂留”提交给诸葛亮裁决，诸葛亮的决定能直接进入军队现实执行，因此 `x=true`。它不是称号，也不是一次瞬时能力。

## zn→x

继续成立。

拿掉“既有承诺不可因短期利益任意毁弃”的原则，诸葛亮仍拥有留放处分 `x`，但失去一条明确内部排序：为什么即使眼下留下熟兵更安全，也不能任意把已经形成的换班承诺作废。

因此 `zn→x=true`。

## x→zn｜第三次攻击

修正后的 strict v2 不要求被测 `x` 是“宇宙唯一载体”，只要求拿掉它以后，当前对象层重新出现明确现实 anchor 缺口。

本轮发现：即使暂时拿掉诸葛亮对这四万人的现实留放处分能力，同一当前窗口里仍保留：

1. 已经公开发布并持续运行的轮换军令；
2. 已到归期、对该规则形成稳定期待的具体军士；
3. 诸葛亮作为该规则发布者与承诺责任主体的现实关系；
4. “是否任意毁弃已形成期待的承诺”这一当前可判断对象。

也就是说，`zn` 的现实对象并不由“我能强留或放行这批军士”才首次出现。留放 `x` 让诸葛亮能够现实履约或违约，因而极其重要，但当前更像：

> execution / fulfillment interface

而不一定是：

> object-constituting current anchor

这是与唐僧 strict v2 负控制同族但更强的一种边界：执行接口可以非常直接、甚至决定承诺能否兑现，却仍不能仅凭这一点证明 `x→zn`。

## 拿掉测试

### 拿掉 zn

保留军队处分 `x`，诸葛亮仍能强留或放行；但“为什么不因即时军事利益撕毁既有承诺”的内部排序缺失。`zn→x` 继续通过。

### 拿掉 x

保留既有轮换军令、已形成期待的军士与诸葛亮的承诺责任关系，原则仍拥有同窗现实对象。失去的是现实兑现/违约的直接处分接口，而不是明显重新出现“没有现实对象、没有明确关系范围”的 anchor 缺口。

因此 `x→zn` 当前不足 95%。

## 反向测试

若要恢复 strict，需要进一步证明：在本轮窄原则中，“主体对该承诺对象拥有现实留放处分”不是单纯履约能力，而是原则 current 对象边界本身不可分割的一部分；同时必须排除“既有军令 + 军士期待 + 发布者责任关系”已经能够独立承载原则的解释。

目前证据不足。

## 最近邻与第三因素冻结

- 军纪 / 组织制度：不能单独替代 `zn`，因为诸葛亮在即时军事利益明显更高时仍先按信用排序；本轮不否定 `zn`。
- 士气收益：二次攻击已经确认发生在先放行之后，不倒填为 pre-decision motive。
- `x`：仍是真实军队处分权，不由职位名义倒推。
- 军士自愿留战：发生在诸葛亮先放行以后，是新的现实输入，不能倒写成原 `x` 不成立。
- 既有军令与军士期待：本轮作为 same-window competing anchor，而不是 `x` 本身。

## 对象层

本轮暴露出一个重要细分：

- `zn` 的当前现实对象：既有承诺、形成期待的相关方、发布者自己的信用责任；
- 被测 `x`：主体对相关军士现实留放的处分接口。

二者处于同一事件窗口、强相关，但不是天然同一类对象。不能因为它们共同指向同一群军士，就自动认为 `x` 构成 `zn` 的对象 anchor。

## 当前裁决

```yaml
zn: true
x: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: not-proven-at-95
strict_zn_x_complement_locked: false
fact_confidence: 99
classification_confidence: 94
knowledge_status: deferred
```

## 方法增量

新增 strict v2 审计纪律：

> `standing commitment / formed expectation` 可以本身构成 `zn` 的 same-window reality anchor；主体对承诺对象的处分权，若只是兑现/违背承诺的现实接口，不得自动升级为 `x→zn`。

短句：

> **履约能力 ≠ 承诺对象本身。**

以及：

> **同一群人同时出现在 `zn` 与 `x` 描述里，不等于两端对象层已经合并。**

## 统计影响

本记录作为当前 L4 研究判断，暂停诸葛亮原 `99/95` verified literary strict positive：

- strict v2 verified literary positives：证据层 `1 → 0`
- 本轮不增加 strict negative guard；这里只是原 positive 降为 deferred。
- Washington 历史正向对照不受影响。
- 探春、晁盖、Paul、关羽华容道等 deferred 候选不自动变化。

大型 strict 中枢与火轴总纲如仍保留旧计数，属于待消化同步债；本记录优先作为当前 L4 判据，不得据此修改 L2 canonical。
