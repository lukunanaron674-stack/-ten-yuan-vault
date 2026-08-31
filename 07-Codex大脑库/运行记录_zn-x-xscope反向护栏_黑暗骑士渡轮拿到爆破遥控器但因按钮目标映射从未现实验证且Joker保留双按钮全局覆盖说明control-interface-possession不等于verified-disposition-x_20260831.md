---
type: zn-x-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: working-evidence
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-negative-guard
priority_hit: P5
work: The Dark Knight (2008)
actor: civilian-ferry current decision node
stage: Gotham ferry social-experiment window
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
zn_increment: false
strict_verified_positive_increment: false
strict_deferred_increment: false
may_override_canonical: false
updated: 2026-08-31
---

# zn↔x 火轴边界压力测试｜《黑暗骑士》渡轮遥控器：control-interface possession 不等于 verified disposition x

## 0｜结论

本轮不把“手里拿到爆破遥控器”直接判成对另一艘渡轮的现实处分 `x=true`。

锁定护栏：

```text
physical control interface possession
+ source claim that the interface controls target
≠
verified current disposition x over target
```

如果被测按钮→目标效果的 causal mapping 从未发生现实验证，且同窗还存在更高层 global override / competing controller，则最多锁定 `interface possession/use opportunity`，不得把未验证结果能力倒灌成 stable/final disposition x。

## 1｜事实窗口

Joker 事先让两艘渡轮都装上爆炸物，并在船上留下遥控器。他通过广播宣称：每艘船手中的 remote 可以炸毁另一艘船；若午夜前双方都不按，他会亲自炸毁两艘船；任何人试图下船也会被炸。

剧本同时明确给出 Joker 自己手持一个带两个按钮的 detonator。电影最终没有任何一艘渡轮按下自己的遥控器完成爆炸：囚犯船的遥控器被扔出窗外，平民船虽投票赞成炸毁另一船，但无人最终按下按钮。因此，渡轮端 remote 的具体 target mapping 从未被现实效果测试验证。

公开文本证据：
- The Dark Knight screenplay/transcript：两船发现炸药和 remote；Joker 宣称 each remote blows the other boat；Joker 自己持有 two-button detonator。
- 电影结局窗口：双方都没有通过各自 remote 触发爆炸。

参考：
- https://transcripts.simpleremix.com/script.php/the-dark-knight-2008-1xtZ
- https://overblack.org/script/the-dark-knight-2008

## 2｜x-scope 固定拆分

```yaml
actor: civilian-ferry current decision node
object:
  interface_object: ferry-side remote detonator
  claimed_target_object: prisoner ferry / its explosive package

permission_type:
  confirmed:
    - contact
    - possess
    - hold
    - physically press/use interface
  not_verified:
    - detonate claimed target
    - final disposition over other ferry

scope:
  confirmed: local interface only
  claimed_but_unverified: other ferry explosive outcome

term: immediate Joker ferry-experiment window
revocability: interface can be surrendered/discarded; prisoner-side remote is discarded
return_obligation: N/A
same-layer_pre-effect_veto: not established for the ferry remote itself
global_override: Joker retains independent two-button detonator and explicit kill-both threat
ultimate_title: not inferred
decision_structure:
  civilian_ferry: collective vote occurs, but vote does not itself trigger explosive effect
consultation_structure: mass discussion + vote
final_decision_structure: no final press/effect occurs
execution_structure: untested ferry-side actuator mapping; Joker retains independent execution path
co-decision_nodes: none proven mandatory for button act
```

不得写成单一的 `x=true/false`。至少要分：

```text
remote possession/use interface = true
claimed target-disposition mapping = unverified
stable/final disposition x over other ferry = not locked
Joker global override = true competing anchor
```

## 3｜关键压力

最容易误判的推理是：

```text
拿到遥控器
+ Joker 说它能炸另一艘船
+ 大家围绕“要不要按”进行投票
→ 已拥有另一艘船生死处分 x
```

该推理缺了最关键一层：**被测接口的现实作用映射。**

本案没有 ferry-side remote 的效果观测。相反，Joker 自己仍保留独立双按钮 detonator，并明确宣称自己可在午夜炸毁双方。因此当前窗口至少存在一个已明确的 global competing controller。

## 4｜最近邻排除

### 4.1 不是“纯名义授权”

遥控器是真实物件，当前主体也真实持有、可按；所以不能退化为纯标签或空名义。

### 4.2 不是“one-shot compliance”

这里根本没有发生一次成功爆炸后再争论是否稳定。被测 causal effect 从未发生，因此不能借 Earth King 类的 `one-shot realized effect` 结构替它补证。

### 4.3 不是“有执行接口就等于有处分 x”

执行接口只是潜在 causal channel。若 source claim 本身来自敌对操盘者、mapping 未验证、且操盘者保留 global override，则接口持有不能自动跨层升级为 target disposition。

## 5｜拿掉测试

拿掉“Joker 的口头说明”，只留下：

```text
一只遥控器
+ 另一艘船有爆炸物
+ Joker 自己另持有 detonator
```

无法从可观察事实推出该 remote 必然处分另一艘船。

因此 `claimed target-disposition x` 依赖一个未现实验证的 source claim，不足 ≥95 锁定。

## 6｜反向测试

如果电影实际出现：

```text
该 ferry remote 被按下
→ 另一艘船对应爆炸物立即被触发
```

或有同层独立技术证据确认其 mapping，才可把 `detonate target` 从 claimed permission 提升到 realized permission。

即便如此，仍要继续分账 Joker 的 global override；local detonation x 也不能自动倒灌成 ultimate/final exclusive control。

## 7｜第三因素冻结

冻结：
- Joker 的主题象征与哲学目的；
- 平民/囚犯身份标签；
- 谁更善良；
- 投票结果；
- Batman 最终阻止 Joker；
- 电影结局与胜负。

这些都不能替代被测问题：

```text
ferry-side remote 对 claimed target 的现实 causal mapping 是否已被验证？
```

答案：**未验证。**

## 8｜zn / strict-v2

本轮不锁 `zn`。平民船是否愿意杀另一船受即时生存压力、群体投票、恐惧与道德犹豫共同影响，不足独立证明 current `zn`。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

不得因为角色最终没有按按钮就倒推 `zn`；也不得因为“拒绝使用接口”就自动证明另一端 `x` 已成立。

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
zn_increment: false
strict_verified_positive_increment: false
strict_deferred_increment: false
```

《The Dark Knight》此前未进入 current `x-scope boundary guard` independent-work 集合，因此本条按同 criterion_version 计 `+1 control / +1 independent work`。

本条只增加新机制：

```text
control-interface possession
≠ verified causal mapping
≠ target disposition x
```

不修改 L1/L2 canonical，不自动升格 pending-review 大中枢。

## 10｜下一轮

最高信息增益镜像：寻找同人物、同对象、同一接口，先处于 `interface present but mapping unverified`，随后通过真实 effect-test 首次确认 mapping，从而观察 `potential/use-interface → realized target-disposition x` 是否发生现实化；或者寻找已确认 local actuator 生效、但 global override 仍能在同窗覆盖它的高纯最小差异。
