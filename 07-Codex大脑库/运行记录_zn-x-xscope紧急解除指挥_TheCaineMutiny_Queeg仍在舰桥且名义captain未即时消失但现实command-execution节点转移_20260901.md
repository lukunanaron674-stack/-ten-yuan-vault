---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-dynamic-transition
priority_bucket: P2-P5
work: The Caine Mutiny
character: Philip Francis Queeg
phase: typhoon bridge command before relief -> Maryk relief-of-command takes operational effect
mechanism: emergency-relief-transfers-realized-command-execution-while-physical-presence-and-nominal-title-do-not-automatically-disappear
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
created: 2026-09-01
---

# zn ↔ x｜x-scope 动态压力测试｜《The Caine Mutiny》Queeg 紧急解除指挥

## 0｜结论

本轮锁定一个与 John Wick physical dispossession 不同的 external-forced contraction：

> **对象与 actor 可以仍处于同一物理空间，actor 的名义 title 也可以未在该瞬间完成制度性消灭，但如果同一对象层的现实 command/execution 节点已经转移，原 actor 的 current command x 仍可真实收窄或退出。**

因此：

```text
physical presence with object
+ nominal captain/title continuity
≠ current realized command x automatically

emergency relief-of-command
+ crew/execution chain follows replacement commander
+ old commander cannot make same-layer orders final
→ command/execution permission can contract in current window
```

这不是 capability 下降，也不是 task-source 改变。被测变量是 **谁对同一 USS Caine 的 current ship-command decision 能现实进入执行链并成为 final operational node**。

## 1｜启动口径

本轮启动 main：`e3919dda6b8ba6ea35676be07c5c6a6065bb2deb`。

按 current canonical / gate 读取并对齐：

- `AGENTS.md`
- `00-中枢索引/AI文件权力与任务总览.md`
- `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md`
- `07-Codex大脑库/十元理论每小时执行门禁协议_v1.0_2026-07-28.md`（正文 current v1.2）
- `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`
- `01-十元系统/01-十元信息卡/【zn信息量卡v2】.md`
- `01-十元系统/01-十元信息卡/【x信息量卡v2】.md`
- `01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md`
- `01-十元系统/03-十元准度卡/x_准度卡_v0.1.md`
- `01-十元系统/04-十元生克补卡/补/zn补x_补卡.md`
- `07-Codex大脑库/zn-x火轴待审议清单.md`
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x-xscope权限类型范围期限与最终归属分层边界_20260830.md`
- recent commits through `e3919dda6b8ba6ea35676be07c5c6a6065bb2deb`。

current L2 对本轮的硬约束：`x = 归我 / 我方掌握`；必须逐 permission layer 看现实使用、调配、调用、处分、否决、排除或 command effect，不能从职位、军衔、能力或“还是 captain”倒推。

## 2｜作品事实与最小阶段

被测同一人物：Philip Francis Queeg。

被测同一对象层：USS Caine 在台风 current window 的 **ship-command / navigational-command execution layer**。

### Stage A｜解除前

Queeg 是 Caine 的 captain，台风中仍在舰桥发出航向与 ballast 相关指令。Maryk 作为 executive officer 可以建议，但在解除发生前不能仅凭自己的建议让与 Queeg 相反的 ship-command decision 自动成为 current final operational command。

### Trigger｜紧急解除指挥

台风最高危阶段，Maryk 认为 Queeg 已无法安全指挥，依据作品中的 Article 184 / Navy Regulations 宣布解除 Queeg 指挥；Keith 作为 officer of the deck 支持该决定。

### Stage B｜解除现实生效后

Maryk 接管 Caine 的现实指挥，改变航向并带船驶出风暴。Queeg 仍在舰上/舰桥附近，并多次要求重新接管，但 Maryk 拒绝让其恢复 current command；现实 execution chain 继续执行 Maryk 的 command。

可观察结果：

```text
same ship = true
Queeg physical presence = retained
nominal/formal status fully extinguished at the instant = not used / not required
Queeg same-layer operational final effect = false after effective relief
Maryk operational command effect = true after effective relief
```

事实来源：
- 1954 film plot summary：Maryk 在 typhoon 中、Keith 支持下解除 Queeg 指挥并接管 Caine；随后 Maryk/Keith 面临 court-martial。Wikipedia, “The Caine Mutiny (1954 film)”.
- Herman Wouk novel summary：Maryk declares relief under Article 184；Keith confirms/supports；Maryk pilots Caine through storm；Queeg asks to reassume command but Maryk refuses. SparkNotes, “The Caine Mutiny” summary.

## 3｜x-scope 固定拆分

```yaml
actor: Philip Francis Queeg
object: USS Caine current ship-command / navigational-command execution layer

permission_type:
  pre_relief:
    contact: true
    physical_presence: true
    command_issue: true
    current_operational_direction: true
    same_layer_final_execution_effect: true
  post_effective_relief:
    contact: true
    physical_presence: true
    command_issue_attempt: possible
    current_operational_direction: false
    same_layer_final_execution_effect: false
    reassume_command_unilaterally: false

scope:
  pre: ship-wide current operational command on tested bridge/navigation layer
  post: physical presence and voice retained, but tested final command/execution scope removed

term:
  pre: current command window before effective relief
  post: relief-effective storm window until later institutional resolution / reassignment

revocability:
  pre: command can be displaced under extraordinary relief procedure
  post: Queeg cannot unilaterally restore tested command merely by requesting it

return_obligation: not_applicable

source_node:
  pre: captain command structure
  transition: emergency relief invoked by Maryk under Article 184, with Keith/OOD support in the depicted event

same_layer_pre_effect_veto:
  pre: Maryk recommendation does not itself override Queeg final operational command
  post: Queeg no longer has unilateral same-layer final effect; Maryk/current execution chain blocks restoration

global_override:
  later Navy/court-martial institutional review exists, but is not used as a pre-effect operational node during the storm

ultimate_title:
  not inferred from current operational relief; nominal/formal captain status and later personnel disposition are separately accounted

decision_structure:
  pre: unilateral-on-tested-captain-command-layer
  transition_activation: emergency-relief event supported by Keith/OOD; no broader joint rule inferred beyond observed event
  post: Queeg no longer occupies final operational node

consultation_structure:
  pre: Maryk can advise/recommend
  post: consultation does not restore Queeg final command

final_decision_structure:
  pre: Queeg-final on tested operational command layer
  post: Maryk-final on tested storm-command layer

execution_structure:
  pre: crew/navigation chain executes Queeg command
  post: crew/navigation chain executes Maryk command

co-decision_nodes:
  Keith/OOD support is recorded as transition evidence; not inflated into a universal joint-command ontology

current_same_layer_effect:
  pre: true
  post: false for Queeg

scope_transition:
  Queeg ship-command final-effect ON -> emergency relief -> OFF

permission_type_transition:
  current ship-command / operational-final-effect true -> false

transition_direction: contraction / realized-command-node-transfer
transition_trigger: emergency relief-of-command becomes operationally effective

retained_layers:
  - physical presence aboard/at bridge
  - ability to speak/request
  - possible residual nominal/formal status pending later institutional treatment

lost_or_externalized_layers:
  - same-layer final operational command effect
  - unilateral reassumption of tested command
```

## 4｜关键压力：这是不是 capability 或 title 变化？

不是。

### capability freeze

即使不判断 Queeg 的心理状态、航海能力或决策质量，只看节点结果：解除前其 command 进入 execution；解除现实生效后，相反 command 由 Maryk 进入 execution，Queeg 不能靠自己的要求恢复。

因此：

```text
why Queeg was relieved
≠ what x changed after relief took effect
```

能力/精神状态是 transition 的可能原因，不是被测 `x` 本体。

### title freeze

本轮不需要证明 Queeg 的 captain title 在宣布解除那一秒法律上彻底消灭。相反，高信息增益正来自：

```text
nominal/formal status may remain contested or pending
while
current realized command/execution x has already changed
```

故不能用“他仍是 captain”把 post-relief current command x 救回来，也不能用 later court result 倒灌当时 storm-window 的现实 command node。

## 5｜最近邻

### vs John Wick Mustang external dispossession

John Wick：对象物理退出 actor custody，故 possession/use x OFF。

Queeg：对象没有物理离开，actor 也没有离开对象附近；变化发生在 **permission/execution node**。

```text
physical dispossession
≠ authority-specific realized-command dispossession
```

### vs Dumbledore Decree No.25

Dumbledore：外部 superior rule 插入并重分配 punishment-final authority。

Queeg：不是更高 title 单纯压过旧 title；紧急 relief 由 subordinate/exec 在异常条件下触发，随后通过现实 execution alignment 让原 captain 的 tested command effect 消失。

因此新增机制不是“又一个 external superior override”。

### vs task-source contamination / 宋江旧 contraction

宋江旧案只证明“谁给任务”变化，没有证明 subject-specific permission true→false。

本轮直接观察：Queeg 的同层 operational-final-effect `true→false`，且 replacement node 的相反 command 被执行。

## 6｜拿掉测试

拿掉 effective relief，只保留：

- Maryk 不同意；
- Maryk 建议另一航向；
- Queeg 状态很差；
- crew 对他不满；

只要 Queeg 的 command 仍是现实 final execution node，则不能判 command x contraction。

因此核心不是异议、能力或名声，而是 **relief 后 execution chain 的现实切换**。

## 7｜反向测试

如果 Queeg 在宣布 relief 后仍可单方命令 helmsman/crew，并使自己的相反 command 在同层直接覆盖 Maryk，则 post-relief contraction 不成立。

实际叙事相反：Maryk 接管并操舰脱险；Queeg 请求 reassume 不能自行生效。

所以 tested permission 的 OFF 不是纸面声明。

## 8｜第三因素冻结

冻结：

- Queeg 的军衔与 captain label；
- Maryk/Keith 对 Queeg 精神状态的判断；
- Queeg 是否“好 captain”；
- court-martial 最终评价；
- crew 喜恶；
- typhoon 最终生还结果；
- 作品主题与道德评价。

只保留：

```text
same object
+ same current window
+ command effect before
+ emergency relief trigger
+ replacement command actually executes
+ old actor cannot unilaterally restore same-layer effect
```

分类仍成立。

## 9｜zn / strict-v2

本轮不锁 Queeg 的 `zn`。

“坚持 fleet course / obey orders”在此窗口高度可能由 role-rule、制度职责、风险判断或既有命令解释；不能仅凭坚持、军人身份或冲突强度升级为“不可轻易让渡且跨阶段保留最终指导资格”的 internal `zn`。

因此：

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
```

P0 继续保持 `0 verified positive`，不为破零降低门槛。

## 10｜成熟度与统计

事实链置信：`99`。

分类置信：`98`。

成熟度：`evidence-locked`。

本轮启动 current x-scope dynamic：

```text
14 controls / 12 independent works
```

《The Caine Mutiny》此前未进入 current-v1 dynamic-work 集合；本机制也不是普通 expansion/contraction 堆量，而是新型 **authority-specific forced contraction with retained physical presence / non-dispositive title continuity**。

因此：

```text
14 / 12
→ 15 dynamic controls / 13 independent works
```

本轮分账：

```yaml
x_scope_positive_controls: +0
x_scope_boundary_guards: +0
x_scope_dynamic_transition_controls: +1
x_scope_dynamic_transition_works: +1
x_scope_decision_structure_calibration_controls: +0
protected_range: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

`x-scope` 已 pending-review，因此本轮不修改任何 L1/L2 canonical。

## 11｜本轮锁定的 L4 边界句

> **current x 应跟随现实 permission/execution node，而不是跟随 actor 与对象是否仍共处、名义 title 是否仍挂在身上。紧急解除指挥若已让 replacement node 的决定取代原 actor 并现实进入同层执行，可构成 authority-specific x contraction；但不得由此自动推出 ultimate title、全部权限或人物本体整体 x 同步归零。**

机器版：

```text
same-object physical presence retained
+ nominal title not proven extinct
+ pre tested command effect true
+ relief trigger
+ post replacement command effect true
+ old actor unilateral same-layer effect false
→ authority-specific current x contraction
```

## 12｜下一轮最高信息增益

P0 仍优先寻找 strict-v2 天然对象型正例，但不得降低门槛。

若 P0 仍无 ≥95 材料，最值得跑的是本机制的 **permission-retention failure mirror**：

```text
actor 被宣布“解除/停职/撤权”
但同对象层 crew/system/counterparty 仍继续执行 actor 的决定
→ nominal revocation ≠ realized x contraction
```

这将直接检验今天的核心：**撤权文本本身不够，必须观察现实 execution node 是否真的迁移。**
