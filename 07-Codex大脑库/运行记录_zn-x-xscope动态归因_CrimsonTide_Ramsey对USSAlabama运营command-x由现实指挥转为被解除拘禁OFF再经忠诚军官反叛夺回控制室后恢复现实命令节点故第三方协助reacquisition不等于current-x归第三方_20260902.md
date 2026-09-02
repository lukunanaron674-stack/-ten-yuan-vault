---
type: ten-yuan-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
work: Crimson Tide
actor: Captain Frank Ramsey
stage: USS Alabama missile-order conflict / Hunter relief / Ramsey counter-mutiny return
sample_type: x-scope-dynamic-third-party-mediated-reacquisition-attribution
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜Crimson Tide｜第三方协助夺回控制室不等于 current x 自动归第三方

## 0｜启动对齐

本轮以写前 `main@f4896e38bd116c8a370564e29468009810e8da1b` 为真值，重新对齐 L0/L1 文件权力与成熟度门禁、L1 十元—五行正本 v1.6、zn/x current 判定口径与准度路由、相关关系卡/补卡、火轴待审议、研究总纲、strict-v2 current、x-scope current 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

当前 strict-v2 verified positive 仍为 `0 / 0 works`；x-scope 已 pending-review，因此本轮不堆普通正例，只测试一个尚未单独锁出的归因边界：**第三方可以帮助主体重新取得某层 x，但只要迁移后主体本人重新成为现实有效的 current execution/command node，x 不因此自动归因给第三方。反之，仅由第三方替主体完成结果而主体未进入 current node，则不能把结果倒灌成主体 x。**

## 1｜事实链

锁定同一人物 Ramsey、同一对象 USS Alabama、同一对象层 `operational command / ship-order execution layer`，不把核武发射最终授权层打包进来。

### Stage A｜现实 command x ON
- Ramsey 作为当前现实指挥节点发布 USS Alabama 日常/战斗命令，船员执行。
- 在核武发射这一特殊 permission layer 上，Ramsey 的命令并非单方 final：影片明确要求 Captain 与 XO 对发射共同同意。

### Trigger 1｜Hunter 解除 Ramsey 指挥并拘禁
- Hunter 拒绝核发射 concurrence。
- Ramsey 试图解除 Hunter；Hunter反向依据程序解除 Ramsey。
- Chief of the Boat 最终执行 Hunter 的解除命令，Ramsey 被带离控制室并锁入 stateroom；Hunter宣布接管指挥。

### Stage B｜Ramsey operational command x OFF / contracted
- Ramsey 仍是同一人物，也没有因为被关押就从剧情中消失；但同一当前窗口中，舰内运营指挥的现实命令路由已转到 Hunter。
- Ramsey 此时不能仅靠原 captain label 让同层命令现实生效。

### Trigger 2｜忠诚军官发动 counter-mutiny
- 忠于 Ramsey 的军官/船员联合夺回 control room，并拘禁 Hunter 等人。
- Ramsey 重新回到现实 command node，控制室再次接受其指挥；他继续推动导弹准备。

### Stage C｜Ramsey operational command x ON restored
- 这里不推导 Ramsey 获得“核发射单方最终处分 x”。Hunter 的 missile key / concurrence 仍构成特殊发射对象层约束，后续双方继续争夺并最终等待完整信息。
- 本轮只锁：`USS Alabama operational command execution x` 经现实 node transfer 出现 `ON → OFF → ON`。

外部事实交叉来源：
- Wikipedia《Crimson Tide》剧情：Hunter解除并拘禁 Ramsey、Hunter 接管；其后忠诚军官 counter-mutiny 夺回 control room、拘禁 Hunter，Ramsey恢复控制。
- Simpleremix transcript：Hunter明确宣布 relieved Ramsey / assumed command；COB执行带离。
- Scripts/影片转录与剧情资料：后段 Ramsey retakes control room / has the conn；同时 launch 仍受双人 concurrence / missile-key 层约束。

## 2｜x 权限结构

```yaml
actor: Captain Frank Ramsey
object: USS Alabama
object_layer: operational-command / ship-order-execution

permission_type:
  contact: true
  use: true_on_command_interfaces_when_current_node
  management: true_stage_A_and_C
  call: true_stage_A_and_C
  operational_order_execution: true_stage_A_and_C
  nuclear_launch_unilateral_disposition: false
  nuclear_launch_joint_concurrence_requirement: true
  ultimate_title: not_used

scope:
  stage_A: broad operational command, but nuclear launch final effect remains joint-threshold constrained
  stage_B: operational command contracted/off while confined
  stage_C: operational command restored, but nuclear launch unilateral disposition still not inferred

term: same missile-order conflict window
revocability: reality-tested; command node can be removed and later restored
return_obligation: n/a

same_layer_pre_effect_veto:
  operational_command_stage_A: no replacement command node yet
  operational_command_stage_B: Hunter is current replacement command node
  operational_command_stage_C: Hunter removed from control room; Ramsey-side command node restored
  nuclear_launch_layer_all_stages: XO concurrence / key structure remains separate constraint

global_override:
  strategic EAM/source authority remains upstream and is not equated with Ramsey current operational x

ultimate_title: source-native captain status not used as proof

decision_structure:
  ship operational command: current single command node at tested stages
  nuclear launch: mandatory Captain-XO concurrence on tested release layer

consultation_structure:
  not_material_to_operational_command_test

final_decision_structure:
  operational orders: current command node can issue reality-effective orders
  nuclear launch: not unilateral; separately joint-constrained

execution_structure:
  stage_A: Ramsey-current-command-node
  stage_B: Hunter-current-command-node
  stage_C: Ramsey-current-command-node-restored

co-decision_nodes:
  operational_command: not treated as mandatory joint-final structure
  nuclear_launch: Ramsey + XO concurrence, outside the tested dynamic attribution layer

scope_transition:
  operational_command_x: ON -> OFF -> ON

transition_trigger:
  A_to_B: realized relief + physical removal/confinement + Hunter command takeover
  B_to_C: loyal-officer counter-mutiny + control-room retake + Ramsey returns as reality-effective command node
```

## 3｜关键压力：谁帮你拿回来，不等于现在归谁

最容易犯的归因错误有两个相反方向。

### 错误 A｜第三方帮助恢复，所以 Ramsey 的 x 不算 Ramsey

不成立。

忠诚军官是 **reacquisition causal nodes**：他们帮助完成夺回 control room 的节点变化。但 Stage C 之后，Ramsey 本人重新进入 command chain，现实发布命令并由舰内结构执行。因此 current operational command x 可重新归 Ramsey。

```text
third-party helps reacquire access/control
+
subject becomes current reality-effective command node
→ subject current x may be true
```

### 错误 B｜第三方替主体完成结果，所以结果都能写成主体 x

同样不成立。

如果忠诚军官只是自己控制 Alabama、自己决定和执行，而 Ramsey 仍被锁在 stateroom、没有重新进入 current command node，那么不能因为他们“支持 Ramsey”就把 control-room effect 事后归成 Ramsey x。

所以本轮锁出的分界是：

> **x 的 causal acquisition path 与 current attribution node 必须分账。第三方可以是 acquisition/reacquisition 的因果节点，但 current x 最终归谁，要看迁移完成后谁拥有现实有效的同层 permission/execution node。**

这与 protected-range 的“结果不能主要由第三方保护节点完成”并不冲突。protected-range 测的是 **subject-specific x 是否在风险结果发生前直接改变风险路径**；本轮测的是 **权限恢复后 current holder/node 的归因**。两个 gate 不能偷换。

## 4｜最近邻

### Queeg / The Caine Mutiny
Queeg 已锁：原 actor 仍在对象附近、名义位置可能尚存，但 replacement command node 已现实接管，则 old actor current command x 收缩。

Crimson Tide 前半段与其相邻，但本轮新增的是后半段：

```text
old command x ON
→ realized relief / replacement node
→ OFF
→ third-party-mediated control-room reacquisition
→ old actor actually re-enters current command node
→ ON restored
```

因此不是重复一次“解除指挥”。

### John Wick / Mustang
John Wick 是实体对象的 `physical possession/custody ON → theft OFF → physical recovery ON`。本轮不是物理物件回收，而是 **组织执行节点的 current attribution restoration**，且恢复动作由支持主体的第三方先完成。

### Pacific Rim
Pacific Rim 是 co-execution topology `joint → emergency unilateral → joint`。Crimson Tide 不改变本轮 operational-command 层的 joint/shared topology，而是在同一 single-current-command-node layer 上发生 holder replacement 与 restoration。

### protected-range 第三方门
protected-range 正向禁止把第三方主要完成的风险阻断归给主体；本轮不测试风险阻断，而测试 current command node 归属。第三方帮助夺回权限，不等于第三方永久成为 holder。

## 5｜拿掉 / 反向 / 第三因素冻结

### 拿掉 counter-mutiny
若 Ramsey 一直被拘禁、Hunter 始终现实控制 Alabama，则只能锁 `ON → OFF`，不能锁 restoration。

### 拿掉 Ramsey 重新进入 command chain
若 loyal officers 夺回 control room 后自己持续掌控，Ramsey 仍不能让舰内同层命令现实生效，则不能把 control room recovery 归为 Ramsey `x=true`。

### 反向
若 Hunter 在被拘禁后又通过自己支持者重新夺回 control room、重新成为现实 command node，同一方法应允许 Hunter current command x 恢复；判断不依赖人物立场。

### 第三因素冻结
冻结：
- Ramsey 的 captain 身份标签；
- Hunter/Ramsey 谁在道德上正确；
- EAM 最终是否撤回；
- 角色威望、资历与阵营；
- 忠诚军官对 Ramsey 的个人感情；
- 最终 tribunal 评价与结局。

只保留：

```text
current command execution node
→ realized removal and replacement
→ subject cannot make same-layer orders effective
→ third-party-mediated retake
→ subject actually re-enters execution chain
→ same-layer orders become reality-effective again
```

分类仍成立。

## 6｜zn 与 strict-v2

本轮不锁 Ramsey `zn`。坚持执行上一份已认证发射命令，可以由程序服从、战略风险判断、职业责任、即时危机压力等 competing anchors 解释；不能从 captain 身份、强硬态度、核危机主题或最终立场直接倒推不可让渡原则。

```yaml
zn_independently_locked: false
x_independently_reality_tested: true_on_operational-command-layer
same_object_layer_for_dynamic: true
strict_v2_opened: false
strict_v2_verified_positive_increment: false
```

strict-v2 verified positive 因而继续 `0 / 0 works`。

## 7｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_dynamic_before_effective_after_Samwise:
  controls: 18
  works: 16

x_scope_dynamic_after_this_control:
  controls: 19
  works: 17

strict_positive_increment: 0
strict_negative_increment: 0
strict_deferred_increment: 0
strict_precondition_increment: 0
x_scope_boundary_increment: 0
x_scope_decision_structure_calibration_increment: 0
protected_range_positive_increment: 0
protected_range_negative_increment: 0
```

《Crimson Tide》虽然已作为 x-scope ordinary boundary work 出现过，但此前未进入 current dynamic-transition 子账；本轮按 dynamic criterion 新增一个 control 与一个 dynamic independent-work entry。不得把它再重复增加 ordinary boundary work。

## 8｜本轮锁定句

> `x` 的取得/恢复因果路径与 current holder attribution 必须分账：第三方可以帮助主体取得、恢复权限；只要迁移完成后主体本人重新成为现实有效的同对象层 permission/execution node，current `x` 可以归主体。反之，第三方只是替主体完成效果、主体未进入 current node，则不得把效果倒灌为主体 `x`。

## 9｜下一轮最高信息增益

P0 继续寻找首个 strict-v2 verified positive，不降门。

若仍无 ≥95 候选，下一轮优先找本机制的反面最小差异：

```text
第三方夺回对象/系统
+ 声称替主体恢复控制
但主体本人从未重新进入 current execution node
→ subject x remains false
```

这能把 `reacquisition assistance` 与 `proxy control / control-in-someone's-name` 彻底拆开，比再收一条普通 ON→OFF→ON 更有信息增益。
