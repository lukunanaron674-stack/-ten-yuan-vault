---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-boundary-guard
work: Crimson Tide
character: Captain Frank Ramsey
phase: USS Alabama launch-order dispute after interrupted second EAM
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_positive_increment: false
x_scope_dynamic_transition_increment: false
strict_verified_positive_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜Crimson Tide：舰长广域指挥 x 真实，但核导弹发射须 XO 共同同意，不得由最高指挥身份倒灌为单方最终处分 x

## 0｜为什么本轮值得跑

`x-scope` 已达 `pending-review`，普通“局部 ≠ 整体”案例停止继续堆。本轮只收一个更尖锐的新伪对子：

> **主体在同一组织中拥有真实、广域、通常可单方生效的最高 operational command `x`，是否可以因此倒灌为某个特殊对象层的 unilateral final-disposition `x`？**

《Crimson Tide》给出高纯反例：Captain Ramsey 对 USS Alabama 的一般舰务与作战指挥并非名义权力，但在核武器 release 这一特殊对象层，电影明确设置 Captain + XO 双节点 concurrence。Hunter 拒绝 concurrence 后，Ramsey 的 launch decision 不能仅凭“我是舰长”直接合法生效。

## 1｜事实链

1. USS Alabama 收到已认证 EAM，要求发射核导弹。
2. 第二条 EAM 接收中断，内容可能改变/撤销前一命令。
3. Ramsey 决定按最后完整命令继续准备发射。
4. XO Ron Hunter 明确拒绝 concurrence。
5. 电影对白直接说明：核武器 release 程序要求 Captain 与 XO 都同意；这不是普通复述或咨询，而是发射所需的 assent。
6. Ramsey 尝试解除 Hunter 并换人，Hunter 与 Chief of the Boat 认为这种规避 concurrence 的做法违反程序；Ramsey 的舰长身份本身没有把该对象层变成 unilateral final decision。
7. 后续即使 Ramsey 一度重新控制舰艇与 missile-control 人员，launch 仍受到 missile key / weapons-control 等程序节点约束，最终在完整第二 EAM 恢复后确认撤销发射。

主要作品证据：
- Michael Schiffer, *Crimson Tide* screenplay，约第35页：Hunter 明确说明核武器 release 需要 Captain 与 XO 同意，自己不予 assent。
- *The Guardian*, “Why I love … the ‘Captain, I cannot concur’ scene in Crimson Tide” (2013-10-22)：复述该场景并明确 Hunter 的 concurrence 是 launch procedure 的实质门槛。
- IMDb plot summary：Hunter refuses to concur “as is required”，Ramsey 不能用最后完整 launch order 自动跨过这一程序门。

## 2｜稳定本体 / 当前状态 / 行为功能 / 关系位置 / 外部压力分账

### 稳定本体
不从“强硬舰长”“老派军人”“核潜艇指挥官”等身份标签推断 `x` 或 `zn`。

### 当前状态
Ramsey 在核危机窗口内仍是/试图维持 Alabama 的舰长，并拥有大量现实 operational command。

### 行为功能
他发布舰务与战斗命令、组织 launch preparation、调动下属执行。

### 关系位置
Captain 高于 XO 的一般组织层级，不等于在核武器 release 对象层拥有绕过 XO concurrence 的 unilateral final-disposition 权限。

### 外部压力
可能即将发生的敌方核发射与通讯中断提高时间压力，但不能替代权限结构本身。

## 3｜x 权限结构固定拆分

```yaml
actor: Captain Frank Ramsey
object:
  broad_layer: USS Alabama ordinary shipboard / tactical operations
  tested_layer: authenticated nuclear-missile release / launch decision
permission_type:
  broad_layer:
    - command
    - manage
    - task
    - tactical execution
  tested_layer:
    - propose/order launch preparation
    - final nuclear release: not unilateral
scope:
  broad_layer: wide shipboard operational scope
  tested_layer: nuclear-release special object layer
term: current patrol / crisis window
revocability: command can be relieved under governing procedure
return_obligation: N/A
same_layer_pre_effect_veto:
  tested_layer: XO concurrence functions as mandatory pre-effect blocking node
  broad_layer: not generalized from nuclear-release rule
global_override:
  tested_layer: governing launch procedure / authenticated command chain
ultimate_title: N/A
decision_structure:
  broad_layer: largely unilateral-command-with-delegated-execution
  tested_layer: joint-unanimous / two-node mandatory concurrence
consultation_structure:
  tested_layer: not merely consultation
final_decision_structure:
  tested_layer: Captain + XO mandatory concurrence
execution_structure:
  tested_layer: multi-node procedural execution after valid concurrence
co_decision_nodes:
  - Captain Ramsey
  - XO Hunter
unilateral_effect:
  tested_layer: false
```

## 4｜关键压力

本轮压力不是“多人参与是否等于 joint”，而是更难的一层：

```text
同一主体
在更宽组织层拥有真实 senior-command x

≠
在特殊高风险对象层自动拥有 unilateral final-disposition x
```

也就是说：

> **hierarchical superiority ≠ permission-type universality。**

职位越高，越容易诱发 `local/global` 与 `permission_type` 倒灌；本例恰好用真实 pre-effect concurrence 把这种倒灌截断。

## 5｜最近邻排除

### 最近邻 A｜“Hunter 只是顾问”
不成立。若只是 consultation，Ramsey 可以听完反对意见后仍单方让 launch legally/procedurally 生效；作品明确相反，Hunter 的 assent 是程序门槛。

### 最近邻 B｜“Ramsey 是舰长，所以可以换 XO 后继续”
作品正是用冲突证明不能把一般人事/指挥权直接当成规避特殊 release gate 的权限。Hunter 拒绝后，Ramsey 试图换人本身成为争议与解除指挥的触发点，而不是一个自动有效的 bypass。

### 最近邻 C｜“最终没发射，所以 Ramsey 没有 x”
也不成立。Ramsey 的广域舰务/战斗 command `x` 是真的；被否定的只是 nuclear-release 特定 permission type 的 unilateral final effect。

## 6｜拿掉测试

### 拿掉 XO concurrence 门
如果删除“Captain + XO 都必须同意”的 pre-effect gate，那么 Ramsey 的舰长身份 + 已认证前一 EAM 足以解释其单方 launch decision 继续生效，整场核心冲突会失去制度结构。

因此 concurrence gate 对 tested object layer 是不可省略事实。

### 拿掉 Ramsey 广域 command x
如果反过来把 Ramsey 写成“根本没有真实指挥权”，也无法解释他能组织 launch preparation、发布大量现实命令以及为何 Hunter 必须诉诸特殊 nuclear-release procedure 才能阻断。

所以本轮不是 `x=false`，而是 **同一主体不同 permission_type / object layer 分层**。

## 7｜反向测试

若作品显示：

```text
XO 只能建议
+ Captain 可无条件绕过其反对
+ 同一 launch 在反对状态下仍可由 Captain 单方完成
```

则 tested layer 应判 unilateral。

实际作品明确给出相反结构，因此 current tested layer 判 joint-unanimous / mandatory two-node concurrence。

## 8｜第三因素冻结

冻结：
- Ramsey 的军衔、资历、性格、战斗经验；
- Hunter 的谨慎性格或道德立场；
- 第二 EAM 最终确实是撤销命令这一结局；
- “谁最后判断正确”；
- 潜艇是否还有其他技术钥匙、武器官执行节点；
- 核战争主题与影片价值判断。

这些因素都不能替代被测结构：**XO concurrence 是否是同对象层 pre-effect mandatory gate。**

## 9｜zn / strict-v2

本轮不锁 `zn`。

Ramsey 坚持执行已认证命令可以被军令、职责、危机判断、程序理解与外部压力充分解释；不能从“坚持发射”或“承担后果”直接倒推出内部不可轻易让渡原则。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

因此 strict-v2 继续保持 0 verified positive。

## 10｜本轮判定

```yaml
x_scope_gate: pass-as-boundary-guard
broad_operational_command_x: true
tested_nuclear_release_unilateral_x: false
tested_nuclear_release_joint_x: true
decision_structure: joint-unanimous-two-node-concurrence
new_boundary_mechanism: hierarchical-superiority-does-not-universalize-permission-type
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
```

正式锁定：

> **广域 senior-command `x=true` 不得跨 permission type 倒灌为特殊对象层 unilateral final-disposition `x=true`。只要该对象层存在 mandatory same-layer pre-effect concurrence，最终决策就必须按该 gate 单独记账。**

并与既有规则组合：

```text
broad command x
≠ special-object final-disposition x

hierarchical superiority
≠ permission-type universality

mandatory concurrence
≠ consultation

joint final decision
可嵌套在一个更广泛的 unilateral-command hierarchy 内
```

## 11｜统计变化

本轮属于 `current-x-scope-distinction-v1_20260830` 的新反向机制，不是普通正例，也不是动态迁移：

```yaml
x_scope_positive_controls: +0
x_scope_boundary_guards: +1
x_scope_boundary_guard_works: +1
x_scope_dynamic_transition_controls: +0
strict_v2_verified_positive_controls: +0
strict_v2_deferred: +0
zn_controls: +0
protected_range_controls: +0
```

《Crimson Tide》此前未出现在 x-scope boundary-guard independent works 集合，因此本轮 work 可 +1。

中枢计数若仍滞后，保留同步债；本文件不覆盖成熟 `pending-review` L4，更不改 L1/L2 canonical。

## 12｜下一轮最高信息增益

优先找本条的动态镜像，而不是再找一个“两把钥匙”案例：

```text
同人物 + 同一特殊对象层
阶段 A：unilateral final-disposition
↓ 真实制度/权限节点变化
阶段 B：mandatory co-approval / joint-threshold
```

或者反向：

```text
joint-threshold
→ 明确撤销共同 gate
→ unilateral final-disposition
```

这比继续积累静态 joint 案例更能逼近 `x` 的权限结构动力学。