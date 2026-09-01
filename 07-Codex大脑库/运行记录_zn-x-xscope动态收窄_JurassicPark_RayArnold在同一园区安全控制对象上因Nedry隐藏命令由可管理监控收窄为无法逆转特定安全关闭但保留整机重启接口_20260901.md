---
type: ten-yuan-fire-axis-xscope-classification-correction
authority_level: L4
knowledge_status: superseded
status: classification-corrected
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
work: Jurassic Park (1993)
character: Ray Arnold
window: Nedry sabotage -> hidden command state -> whole-system reboot decision
fact_confidence: 99
classification_confidence: 99
previous_sample_type: x-scope-dynamic-contraction
current_sample_type: capability-vs-x-scope-negative-correction
x_scope_dynamic_transition_increment: false
x_scope_dynamic_transition_work_increment: false
strict_v2_verified_positive_increment: false
may_override_canonical: false
created: 2026-09-01
corrected: 2026-09-01
---

# zn↔x 火轴分类纠偏｜Jurassic Park｜Ray Arnold

## 1｜纠偏结论

原记录把 Nedry sabotage 后 Arnold 无法直接找回并逆转隐藏 command、只能转向 whole-system shutdown/reboot，分类成 `permission-path-specific x-scope contraction`。

按 current `x` canonical 重新压力测试后，**撤回该分类**。

锁定的新护栏是：

> **technical operability / discoverability / successful reversal capability 的下降，不自动等于 current `x` permission 或掌握边界下降。**

只有当证据证明主体原先拥有的现实授权、调用对象集合、处分/否决/排除边界、mandatory decision node 或 execution entitlement 本身被撤销、转移、插入 veto、缩小对象子集时，才能计 `x-scope` transition。

本案现有事实只高纯证明：Nedry 通过关闭 keychecks、隐藏具体 command state，使 Arnold 难以发现并技术性逆转 sabotage；没有 ≥95 证据证明 Arnold 对 park-control system 的制度/现实 permission 被撤销或转移给另一节点。

因此：

```text
technical path becomes hard / opaque / unsuccessful
≠
permission path revoked
≠
x-scope contraction automatically
```

## 2｜事实链保留

以下剧情事实继续保留，纠偏不否定事实：

- Nedry sabotage 使 door security、部分 fences 与 control-room systems 失效。
- Arnold 仍能读取部分状态、诊断系统，并尝试处理 Nedry terminal。
- keychecks 被关闭，关键 command 没有正常留下可追踪记录；直接定位修改极其困难。
- Hammond / Arnold 因此选择 whole-system shutdown/reboot，希望清除 Nedry 修改并恢复 startup state。
- reboot 后仍需要物理恢复 circuit breakers，再逐步恢复 phones、security doors 等子系统。

这些事实足以证明**技术可操作性/可发现性/恢复路径发生变化**，但不足以单独证明十元 `x` 的 permission boundary 变化。

## 3｜x-scope 固定拆分｜纠偏后

```yaml
actor: Ray Arnold
object: Jurassic Park security/control system
permission_type:
  before:
    monitor: true
    diagnose: true
    operate_control_interfaces: true
    shutdown_or_reboot: available
  after_sabotage:
    monitor_remaining_state: true
    diagnose: true
    operate_available_interfaces: true
    shutdown_or_reboot: true
    direct_reversal_of_hidden_command: technically_not_demonstrated
    direct_reversal_permission_revoked: not_proven
scope:
  before: park security/control operations within Arnold's operational role
  after: same permission boundary not shown to have formally or practically transferred; technical effectiveness degraded
term: Nedry sabotage through reboot sequence
revocability: no permission revocation node demonstrated
return_obligation: none relevant
same-layer_pre-effect_veto: no new mandatory veto holder demonstrated
global_override: Hammond retains managerial ordering role; no new post-sabotage override node shown to explain a permission contraction
ultimate_title: not inferred
decision_structure: no proven before/after change in tested permission family
consultation_structure: Hammond / Arnold / others discuss recovery
final_decision_structure: Hammond orders shutdown; no demonstrated transition caused by sabotage
execution_structure: Arnold executes available technical operations; system state limits successful reversal
co-decision_nodes: no new mandatory co-decision node inserted
scope_transition: not_proven
technical_state_transition: ordinary diagnosable operation -> opaque sabotaged state requiring coarse recovery
```

## 4｜关键压力

必须把两个问题拆开：

```text
Q1：Arnold 有没有现实权限去操作/恢复系统？
Q2：在 Nedry 隐藏 command 后，他技术上能不能找到正确命令并成功恢复？
```

原记录把 Q2 的失败倒灌成 Q1 的 permission contraction。

current `x` 回答的是“什么归谁掌握、谁能使用/调配/处分/否决/排除”，不是“同样的授权下技术任务是否容易、可发现或成功”。

因此即使：

```text
同一 operator
+ 同一授权
+ 同一对象
+ 技术路径被加密 / 隐藏 / 损坏 / 复杂化
```

导致成功率下降，也不能自动记成 `x` 下降。

## 5｜最近邻

### 与《The Martian》纠偏同类但方向相反

《The Martian》上一轮锁：

```text
communication capability / expressive capacity 上升
≠ x-scope 自动扩张
```

本案补出严格反向：

```text
technical operability / discoverability / reversal capability 下降
≠ x-scope 自动收缩
```

两者共同形成 capability-vs-x 双向护栏：

> **能力性能变化可以在 x permission boundary 不变时独立发生。**

### 与仍有效 dynamic controls 的差异

- Alien：同一 revoke permission 由明确 deadline 从 `true→false`，是真 permission persistence 改变。
- Eduardo：同一 equity ownership scope 从 `34.4%→0.03%`，是真对象份额改变。
- Ramius：mandatory credential distribution 改变 joint/unilateral authorization structure，是真 decision-node 结构改变。
- Otto Octavius：对象内部新增 independent execution node，使 exclusivity/final control 现实收窄。

Jurassic Park 当前证据没有证明这些 permission / scope / node 级变化。

## 6｜拿掉 / 反向

### 拿掉测试

拿掉“Arnold 的 permission 被收窄”这一假设，只保留：

```text
Nedry 修改系统状态
→ 关闭审计/追踪
→ Arnold 仍有操作权限但难以定位修改
→ direct reversal 技术上失败/不可行
→ 转向 coarse-grained reboot
```

剧情仍完整成立。

因此不需要 `x-scope contraction` 才能解释事实。

### 反向门

若未来材料能证明 sabotage 后出现以下任一结构，才允许重新进入 x-scope：

- Arnold 的 credential 被撤销或权限 ACL 明确缩小；
- 原可调用对象子集被授权系统排除；
- 新 mandatory veto / approval node 插入；
- 某处分/否决/管理 permission 从 `true→false` 且不是单纯技术失败；
- control entitlement 真实转移给另一主体。

现有材料未达到 ≥95。

## 7｜第三因素冻结

冻结：Arnold 的职位标签、Hammond ownership、Nedry 动机、恐龙逃脱、人物死亡、剧情胜负。

同时新增必须冻结的技术第三因素：

- command discoverability；
- audit trail 是否存在；
- 软件复杂度；
- 系统故障状态；
- 操作成功率；
- recovery path 粒度。

这些因素可以解释“做不到/很难做”，但不能自动解释“没有权做”。

## 8｜zn / strict-v2

本轮仍不锁 `zn`。Arnold 的安全判断与职责行为不足以在该窗口独立通过 current `zn` ≥95 门。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 维持 0。

## 9｜成熟度与统计修正

```yaml
knowledge_status: superseded
fact_confidence: 99
classification_confidence: 99
x_scope_dynamic_transition_controls_delta: -1
x_scope_dynamic_transition_works_delta: -1
capability_vs_x_scope_correction: +1
x_scope_boundary_guard_delta: 0
protected_range_delta: 0
strict_positive_delta: 0
strict_deferred_delta: 0
strict_precondition_delta: 0
```

current registry / 火轴总纲当前登记的 dynamic transition 为 `12 controls / 10 works`，本文件此前尚未被吸收到该 current registry。因此纠偏后 **current registry 数字无需改动，继续保持 12 / 10**；只撤销本文件曾声称的 evidence-layer `13 / 11`。

## 10｜当前结论

锁：

> **`x` 的 permission boundary 与 technical capability / operability / discoverability 必须分账。技术路径变难、被隐藏、失败或只能采用更粗粒度 recovery，不足以证明掌握边界收窄；反之，工具变快、带宽变高、表达能力增强，也不足以证明掌握边界扩大。**

该结论只作为 L4 分类纠偏与边界护栏，不升格 L1/L2 canonical。
