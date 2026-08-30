---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 刘备
stage: 第11回救徐州外援与驻小沛→第12回陶谦临终让牌印→陶谦死后领徐州
sample_type: x-scope-dynamic-expansion-control
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 97
x_scope_dynamic_transition_increment: true
transition_direction: expansion
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜zn-x x-scope 动态扩张｜刘备救徐州外援/驻小沛到陶谦死后领徐州形成州域 current-governance x

## 0｜本轮问题

只测试一个窄问题：同一人物、同一徐州对象层中，刘备的 current `x` 是否从“外援军队/小沛驻屯的较窄现实掌握”扩展为“徐州州域治理与军事组织的较宽 current-governance x”。

本轮不从皇叔、仁德、陶谦认可、百姓拥戴等标签倒推 `x`；不锁 `zn`；不启动 strict。

## 1｜current canonical 对齐

火轴 current canonical 仍为 `zn ↔ x`。`x` 必须以现实掌握、调用、管理、处分、否决或排除为证，并写清对象、权限类型、scope、期限、来源节点、同层 veto/override 与最终归属。

本轮只迁移木轴的拿掉/反向/第三因素冻结方法，不迁移木轴理论结论。

## 2｜最小阶段差异

### 阶段 A｜第11回救徐州：外援进入，但徐州州域 x 尚不归刘备

刘备应孔融、陶谦求援进入徐州，带有自己的兵将并参与解围。陶谦第一次提出让徐州时，刘备拒绝；其后陶谦安排刘备屯兵小沛。

此阶段应分账：

- 刘备对自己的援军、直属兵将具有现实 military-command `x`；
- 对小沛驻屯/防务形成较窄 current operational scope；
- 但徐州州域的最终州政、牌印、整体治理与最高组织权仍在陶谦节点；
- 因而不能把“救徐州、驻小沛、受陶谦信任”倒灌为 `Xuzhou-wide governance x=true`。

```yaml
pre_transition:
  actor: 刘备
  object: 徐州州域治理/军政组织
  permission_type: 外援军事行动 + 小沛驻屯
  scope: 局部/子集
  current_x: true_on_own_force_and_local_garrison
  xuzhou_wide_governance_x: false_or_not_locked
  global_override: 陶谦
  ultimate_title: 陶谦仍为徐州牧
  decision_structure: 陶谦州政节点仍在
```

### 阶段 B｜第12回陶谦病危：明确转移牌印，但刘备仍拒

陶谦病危时明确要求刘备“受取徐州牌印”，并排除把州事交给自己的两个儿子。刘备仍以不能当此大任等理由推辞。

这一步证明：

> 名义邀请/拟授权本身不等于授权已经现实接入主体。

因此不能在“陶谦说要让”这一瞬间提前把徐州-wide `x` 记到刘备名下。

### 阶段 C｜陶谦死后：刘备最终领徐州

陶谦死后，糜竺、陈登、孔融等继续推举，刘备最终接受并领徐州。此后对象不再只是“刘备自己的援军/小沛驻屯”，而进入徐州州域 current governance / military organization 层。

这才构成被测 scope expansion 的后段：

```yaml
post_transition:
  actor: 刘备
  object: 徐州州域治理/军政组织
  permission_type: current governance + military organization + appointment/administrative control
  scope: 州域级/明显宽于小沛驻屯
  current_x: true
  source_decision_structure: 陶谦遗命 + 徐州官属/地方节点推举 + 刘备接受
  current_execution_structure: 刘备进入州域治理节点
  ultimate_title: current 徐州领有/治理成立；不在本轮扩写永久不可撤销产权
```

## 3｜动态迁移判定

本轮不是 `x=false → x=true`，而是：

```text
阶段 A
own-force military x = true
local Xiaopei/garrison x = true
Xuzhou-wide governance x = not locked

↓ 陶谦死亡 + 遗命/官属推举 + 刘备最终接受

阶段 B
Xuzhou-wide current governance / military-organization x = true
```

锁定：

> **已有窄 `x` 可以在原 global-override 节点退出、授权真正被主体接受后扩展为更宽对象层的 current `x`；不能把此前外援/驻屯误写成整个州域早已归主体掌握。**

同时新增一个 activation guard：

> **offer/conferral attempt ≠ accepted current x。拟授权必须现实接入主体；主体明确拒绝时，不得提前记为已获得的宽 `x`。**

## 4｜x-scope 固定拆分

```yaml
actor: 刘备
object: 徐州州域治理/军政组织
permission_type:
  pre: 自有军队调用 + 外援作战 + 小沛驻屯
  post: 州域 current governance + military organization
scope:
  pre: local/subset
  post: Xuzhou-wide
term: current-window
revocability: not_used_to_deny_current_x
return_obligation: none_in_tested_transition
same_layer_pre_effect_veto:
  pre: 陶谦仍是州域上位现实节点
  post: 未观察到刘备每项州政仍须向已死亡陶谦逐项申请

global_override:
  pre: 陶谦
  post: 原陶谦节点退出
ultimate_title: 不外推永久产权

decision_structure:
  pre: 刘备只在自军/驻屯层可直接决定
  post: 州域 current governance 扩张
consultation_structure: 多节点推举/劝进
final_decision_structure: 刘备最终接受后进入州域治理
execution_structure: post-transition current governance
co-decision_nodes: 糜竺/陈登等是推举与辅政节点，不自动等于每项州政同层共同 veto
```

## 5｜拿掉测试

### 拿掉“刘备早就拥有整个徐州”

保留第11回外援、自军指挥、小沛驻屯，事实仍完整，所以阶段 A 不需要假设徐州-wide `x` 已成立。

### 拿掉“陶谦的拟让等于刘备已经接受”

刘备明确拒绝，徐州州域现实节点仍在陶谦，因此 offer 本身不足以形成 post-transition `x`。

### 拿掉陶谦死亡/原 global override 节点退出

则本轮最关键的 scope-expansion 触发链被破坏：刘备仍可有局部军事 `x`，但无法仅凭外援身份推出整个州域治理 `x`。

## 6｜反向测试

如果陶谦死后刘备虽然名义受牌印，但所有州政决定仍必须由原陶谦节点或另一个同层节点逐项事前批准，且刘备不能直接改变州域结果，则 post-transition 应降为 nominal/delegated，不锁宽 current `x`。

当前桥段的关键恰恰是原州牧节点死亡退出，刘备最终接受后进入领徐州的现实治理位置。

## 7｜第三因素冻结

冻结以下因素，结论不变：

- 刘备“皇叔”身份；
- 仁德名声；
- 陶谦个人欣赏；
- 百姓/官属拥戴；
- 刘备是否真心推辞的心理解释；
- 后续徐州得失与战争结局。

这些因素可以解释为什么发生授权或为什么有人支持刘备，但不能替代被测 `x` 的现实 scope：阶段 A 仍只是外援/局部驻屯，阶段 C 才进入州域 current governance。

## 8｜最近邻排除

- `z`：被认可、被推举不等于现实掌握已经生效；
- `nx`：陶谦遗命/官属推举可以解释外部授权来源，但授权来源不抹掉接受后形成的 current `x`；
- `xn`：具体如何组织州政、兵马属于运行结构，不替代谁拥有 current governance；
- `zx`：本轮不判断公开扩权行为，只记录火轴 `x` 的 scope transition。

## 9｜zn 与 strict

本轮不锁 `zn`。刘备接受徐州可以由政治生存、地方支持、战略需要、责任关系等多因素解释；没有必要为了配对强造不可让渡内部原则。

```yaml
zn_increment: false
zn_x_cooccurrence: false
strict_test_allowed: false
strict_increment: false
```

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
x_scope_dynamic_transition_increment: true
transition_direction: expansion
work_increment_for_dynamic_transition: true
ordinary_x_scope_positive_increment: false
boundary_guard_increment: false
strict_increment: false
```

本条提供《三国演义》作为 dynamic-transition 的新独立作品。控制数与 independent works 必须分账；是否同步专项中枢计数由后续安全消化在重读最新 blob 后执行。

## 11｜本轮最小结论

> **刘备救徐州/驻小沛阶段已有真实但较窄的军事与驻屯 `x`，不能倒灌为徐州州域治理 `x`；陶谦死亡、原 global-override 节点退出且刘备最终接受后，才形成更宽的徐州州域 current-governance `x`。这是 scope expansion，不是简单 off→on。**

并新增一条可迁移门禁：

> **拟授权/邀请/递牌印 ≠ accepted current `x`。主体明确拒绝时，宽 `x` 尚未激活。**
