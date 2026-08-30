---
type: ten-yuan-fire-axis-x-scope-criterion-calibration
authority_level: L4
knowledge_status: evidence-locked
status: criterion-calibration
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
calibration_type: joint-final-decision-threshold-structure
fact_confidence: 99
classification_confidence: 99
may_override_canonical: false
ordinary_control_increment: false
ordinary_cross_work_increment: false
strict_increment: false
created: 2026-08-31
---

# 审计记录｜zn-x x-scope 判据校准：一致否决型与多数阈值型都可构成 joint final decision

## 0｜本轮问题

当前火轴 `x-scope / decision_structure` 已经锁过两类高纯结构：

- 《十二怒汉》一致裁决：每名陪审员都拥有 same-layer pre-effect veto，11:1 仍不能形成 verdict；
- 多人咨询但单一最终裁决：例如孙权赤壁战降公议，多人可以提出意见，但最终决定由孙权单方生效。

这很容易诱发一个新的过窄推断：

> `joint final decision` 是否必须让“每一个成员”都拥有单独 veto？

本轮用多数表决型董事会作为制度校准。Delaware General Corporation Law §141(b) 明确：在达到 quorum 的董事会会议上，原则上由出席董事的多数票形成 board act。也就是说：

- 单个董事不能凭自己一票让董事会决定生效；
- 多个同层节点的票必须达到制度阈值；
- 但单个反对董事通常也不能阻断一个已经达到多数阈值的决定。

因此，absence of individual veto 不能自动推出 unilateral final decision。

## 1｜最小差异

### A｜unanimity-joint｜《十二怒汉》

```text
12 jurors
threshold = 12 / 12

11 guilty + 1 not guilty
→ guilty verdict cannot take effect
```

结构：

```yaml
final_decision_structure: joint-unanimous
mandatory_co_approval: true
threshold_rule: unanimity
individual_same_layer_veto: true
unilateral_effect: false
```

### B｜threshold-joint｜多数表决型董事会

```text
quorum satisfied
majority of directors present approve
→ board act becomes effective
```

若只有一个董事赞成：

```text
1 affirmative vote
< required majority threshold
→ no board act
```

但若多数已经赞成、仅一名董事反对：

```text
majority threshold satisfied
+ 1 dissent
→ board act can still take effect
```

结构：

```yaml
final_decision_structure: joint-threshold
mandatory_co_approval: true
threshold_rule: majority
individual_same_layer_veto: false
unilateral_effect: false
```

## 2｜本轮裁决

正式锁出：

> **same-layer individual pre-effect veto 是 genuine joint final decision 的充分证据之一，但不是必要条件。**

真正更上位的判据应是：

> **结果是否必须由多个同层决策节点按照预先存在的共同批准阈值聚合后才能生效；任何单一主体是否都无法独立完成该 final decision。**

因此：

```text
individual veto
OR
mandatory multi-node approval threshold
→ 都可以支持 joint final decision
```

但：

```text
多人咨询
多人表达偏好
多人执行
多人被通知
≠ joint final decision
```

## 3｜新增 x-scope 方法字段

建议 L4 研究层把 `joint_veto` 进一步拆为：

```yaml
decision_threshold_type:
  - unanimity
  - qualified-majority
  - simple-majority
  - fixed-k-of-n
  - consensus
  - unspecified

approval_threshold:
  required_approvals: k
  eligible_nodes: n

individual_veto:
  true / false

coalition_veto_threshold:
  number_of_dissenting_nodes_needed_to_block: m

unilateral_effect:
  true / false
```

于是：

```text
unanimity-joint
= joint + individual veto

majority-joint
= joint + no individual veto
```

两者都不能被压成粗糙的 `joint_veto=true/false`。

## 4｜拿掉 / 反向测试

### 拿掉 individual veto
在多数表决制度中，单个反对成员没有 veto，但多数批准仍然是多人共同形成的 board act。因此拿掉 individual veto，并不会使 decision structure 自动变成 unilateral。

### 拿掉 mandatory threshold
若一个主体可以不依赖其他同层节点的批准，单方让同一 final decision 直接生效，则该对象层才向 unilateral 上升。

### 反向
若多人只能讨论、建议，而最终一个节点可以无视票数单方决定，则：

```yaml
consultation_structure: plural
final_decision_structure: unilateral
```

不能因为“大家都投过票”就锁 joint。

## 5｜第三因素冻结

本轮不讨论董事个人动机、公司利益、股东压力或投票内容，只测试权限结构本身：

- 谁拥有 final decision node；
- 单一节点能否直接让结果生效；
- 是否存在强制性的多节点批准阈值；
- 阈值未达到时结果是否现实停住。

因此这是一条 `x-scope criterion calibration`，不增加普通文学 control / work，也不涉及 `zn` 或 strict。

## 6｜与 current 火轴体系的关系

本轮不推翻现有规则：

```text
source decision structure
≠ consultation structure
≠ final decision structure
≠ current execution structure
```

而是把 `final decision structure = joint` 再拆成：

```text
joint-unanimous
joint-threshold
```

并新增一条反误判：

> **absence of individual veto ≠ unilateral final decision。**

以及：

> **joint 的核心不是“人人都有 veto”，而是“没有任何单一主体能够绕过制度阈值独立完成同一最终裁决”。**

## 7｜成熟度与统计纪律

```yaml
fact_confidence: 99
classification_confidence: 99
knowledge_status: evidence-locked

x_scope_criterion_calibration_increment: true
ordinary_x_scope_positive_increment: false
boundary_guard_increment: false
dynamic_transition_increment: false
strict_increment: false
zn_increment: false
cross_work_increment: false
```

本记录只校准 L4 `x-scope` 方法，不修改 L1、zn/x 信息卡、准度卡或任何 L2 canonical。

## 8｜下一步

最高价值不再是再找一个多数表决制度，而是寻找同一人物 / 同一对象层的真实迁移：

```text
unilateral
→ 制度新增 approval threshold / co-decision nodes
→ joint-threshold
```

或：

```text
joint-threshold
→ 阈值/共同节点退出
→ unilateral
```

这样才能把 decision_structure 从静态分类推进到动态迁移。
