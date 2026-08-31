---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-negative-boundary-guard
work: Avatar - The Last Airbender
character: Earth King Kuei
stage: Book Two Episode 18 The Earth King, immediately after Long Feng exposure and arrest
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
zn_increment: false
strict_verified_positive_increment: false
created: 2026-08-31
---

# 运行记录｜Earth King Kuei：单次命令成功 ≠ 对执行节点拥有稳定 current x

## 0｜本轮高信息增益

本轮不是 ordinary x-scope 正例，也不是普通 expansion/contraction。

锁定新的反向护栏：

> **某个执行节点对主体的一次命令发生真实 compliance，只能证明该次调用成功；如果同一 current window 内存在明确 competing anchor，且执行节点仍持续忠于该竞争节点并准备反向行动，则不得把 one-shot compliance 自动升级为主体对该执行节点的 stable command / disposition `x=true`。**

压缩式：

```text
one-shot successful command execution
≠ stable current command x over the execution node
```

## 1｜事实链

《Avatar: The Last Airbender》Book Two Episode 18 “The Earth King” 中：

1. Long Feng 长期通过 Dai Li 控制 Ba Sing Se 的信息和日常权力，Earth King Kuei此前并不知道战争与该阴谋。
2. Team Avatar 带 Kuei 看见 Fire Nation drill 后，Kuei确认 Long Feng 欺骗自己。
3. Kuei 当面对两名 Dai Li agents 下令拘捕 Long Feng并要求其受审。
4. 两名 Dai Li agents 当场执行，将 Long Feng 铐走。
5. 但同一集稍后，监狱中的 Long Feng 得到 Dai Li agent 明确报告：Council of Five 和军队忠于 Earth King，但 **Dai Li 仍忠于 Long Feng**。
6. 下一阶段 Dai Li 继续为 Long Feng筹划政变，并在 Azula介入后参与推翻 Earth King 的行动。

来源：
- Episode transcript: https://avatar.fandom.com/wiki/Transcript:The_Earth_King
- Episode summary: https://www.imdb.com/title/tt0876938/plotsummary/
- Finale transcript: https://avatar.fandom.com/wiki/Transcript:The_Crossroads_of_Destiny

## 2｜x-scope 固定拆分

```yaml
actor: Earth King Kuei
object:
  tested_node: Dai Li command/enforcement node
  tested_act: arrest and detention of Long Feng
permission_type:
  - command
  - enforcement invocation
  - custody order
  - organizational control
scope:
  successful_local_act: arrest of Long Feng
  stable_node_control: not locked
term: immediate post-exposure / pre-coup current window
revocability: not the main issue
return_obligation: N/A
same-layer_pre-effect_veto:
  tested_arrest_act: none observed at moment of execution
global_override:
  competing_anchor: Long Feng retains real Dai Li loyalty
ultimate_title: not used as evidence
decision_structure:
  tested_order: unilateral order by Kuei
consultation_structure: irrelevant
final_decision_structure:
  tested_arrest_act: Kuei order directly selected outcome
execution_structure:
  immediate_act: Dai Li agents comply
  stable_organization_layer: fragmented / competing-anchor dominated
co-decision_nodes: none proven mandatory
independent_execution_nodes:
  Dai Li remains capable of acting under Long Feng rather than Kuei
```

## 3｜为什么不能写 `Earth King controls Dai Li = true`

如果只看拘捕这一镜，会得到一个诱人的错误推理：

```text
Kuei 下令
→ Dai Li 执行
→ Kuei stable command x over Dai Li
```

但作品立即给出反证：

```text
同一组织节点
+ 同一 current window
+ 明确 competing anchor Long Feng
+ Dai Li 明示仍忠于 Long Feng
+ 后续继续为 Long Feng / coup 行动
```

因此更准确的记录是：

```text
local one-shot enforcement effect = true
stable Dai-Li command/disposition x = false / not locked
```

这不是把成功调用抹掉，而是拒绝从一次成功调用倒灌出更宽、更稳定的组织掌握。

## 4｜最近邻排除

### 4.1 不是 Ned Stark 型 “formal source authority 直接失败”

Ned 案例中，formal authorization 存在，但现实 execution nodes 当场拒绝并反向执行，因此 tested current realized x 直接失败。

Kuei 案例更细：

```text
source/nominal authority
+ one-shot execution success
+ stable competing-anchor loyalty persists
```

也就是说，本轮新增的是：

> **一次现实生效也仍可能不足以证明 stable x。**

### 4.2 不是 future revocation

Dai Li 不是“以后可能撤回忠诚”。同一 current window 内作品已经明确说明其现实忠诚仍归 Long Feng。

### 4.3 不是 joint-threshold

拘捕 Long Feng 不要求 Kuei 与 Long Feng 或其他节点共同批准。问题不是 co-approval，而是 execution node 的稳定归属与竞争锚。

## 5｜拿掉测试

拿掉 Kuei 的现实命令，Long Feng 不会在该时点被 Dai Li 当场拘捕，因此：

```text
该次局部 command invocation 有现实效力
```

成立。

但拿掉“Dai Li 稳定归 Kuei 掌握”这一宽假设，所有事实仍可完整解释：Dai Li 可以出于当下局势暂时执行拘捕，同时在组织忠诚上继续归 Long Feng，并准备后续反向行动。

因此 stable organizational x 不是解释该次结果的必要条件。

## 6｜反向测试

若作品在拘捕后进一步显示：

```text
Dai Li 长期接受 Kuei 后续命令
+ 不再响应 Long Feng
+ Long Feng 无现实 override / loyalty anchor
+ 多次跨节点调用稳定生效
```

才足以把 stable command x 往上锁。

本例明确没有给出这一结构。

## 7｜第三因素冻结

冻结：
- Kuei 的国王身份；
- Long Feng 的官职；
- 谁更合法；
- Team Avatar 的英雄身份；
- Fire Nation 战争主题；
- 后续 Ba Sing Se 胜负；
- Azula 的能力与威慑。

只保留可观察的 command / execution / loyalty / competing-anchor 结构，结论仍成立。

## 8｜zn 与 strict-v2

本轮不锁 `zn`。

Kuei 得知战争真相后支持反攻，可以由新信息、国家职责、军事判断与政治位置解释，不足独立证明不可轻易让渡的内部原则。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

因此 strict-v2 verified positive 继续 +0。

## 9｜与 current canonical 的关系

本轮只支持 L4 x-scope 边界护栏，不覆盖 L1/L2。

新增候选规则：

```text
source authority
≠ one-shot realized effect
≠ stable current x over the execution node

稳定 x 需要检查：
同一 current window 内执行节点是否持续响应主体，
是否存在 competing anchor，
以及该 anchor 是否仍能现实调动 / 覆盖 / 反向组织同一节点。
```

这与 current x 卡“实际占有、使用、调配或控制权”一致，而不是从身份或名义位置倒推。

## 10｜统计分账

启动时 current registry 仍显示：

```yaml
x_scope_boundary_guards: 10
x_scope_boundary_guard_works: 7
```

但该 registry 尚未吸收随后新增的 Ned Stark formal-authority-vs-realized-x guard（+1 control / +1 work）。

因此 evidence-layer 写入前应读：

```yaml
x_scope_boundary_guards: 11
x_scope_boundary_guard_works: 8
```

本轮 Avatar 新增后：

```yaml
x_scope_boundary_guards: 12
x_scope_boundary_guard_works: 9
x_scope_dynamic_transition_controls: +0
protected_range: +0
zn: +0
strict_verified_positive: +0
```

Avatar - The Last Airbender 此前不在 x-scope boundary-guard independent-work 集合，因此 work 可 +1。

## 11｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
authority_level: L4
```

事实与分类均 ≥95，可正式 evidence-locked；不自动升格 canonical。

## 12｜下一轮最高信息增益

不要再找另一个“一次听令、后来背叛”的换皮案例。

优先寻找同人物、同对象、同 execution node 的真正动态镜像：

```text
阶段 A：
one-shot / unstable compliance
+ competing anchor active
→ stable x not locked

真实节点迁移：
competing anchor removed / loyalty transferred / override disabled

阶段 B：
同一 permission 多次稳定调用
→ stable current x first becomes lockable
```

这会把 `authorization → realized effect → stable organizational x` 三层生命周期真正拆开。
