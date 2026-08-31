---
type: ten-yuan-fire-axis-xscope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
work: Jurassic Park (1993)
character: Ray Arnold
window: Nedry sabotage -> hidden command lockout -> whole-system reboot decision
fact_confidence: 99
classification_confidence: 97
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
may_override_canonical: false
created: 2026-09-01
---

# zn↔x 火轴边界压力测试｜Jurassic Park｜Ray Arnold

## 1｜样本类型
P2：x-scope dynamic contraction。

新机制：**opaque-command / hidden-code lockout contraction**。

不是 title 丧失、不是 superior override、不是 time-lock、不是 endogenous competing executor，也不是 quantitative dilution。主体仍在同一岗位、面对同一 park-security/control object，但外部主体 Nedry 通过隐藏具体命令与关闭 keychecks，使 Arnold 原本可操作的局部安全控制收窄为：能观察故障、能操作总系统 shutdown/reboot，却不能直接找回并逆转该特定 sabotage command。

## 2｜事实链
- Nedry 的 sabotage 使 door security systems 逐项关闭，随后 park fences 多处 failure，control-room monitors 也失效。
- Arnold 能在 control room 读取系统状态，确认 raptor fences 仍在线，并尝试在 Nedry terminal 处理故障。
- Arnold 明确指出 keychecks 被关闭，关键 command 没被正常记录；要找回只能逐行检查约两百万行代码。
- 因无法直接恢复被隐藏命令影响的系统，Hammond/Arnold 转而采用 whole-system shutdown，以清除 Nedry 所做修改并回到 original startup modes。
- shutdown 后 system ready，但 circuit breakers 仍需在 maintenance shed 重新合上；之后才能恢复 phones、security doors 等系统。

## 3｜x 权限结构
```yaml
actor: Ray Arnold
object: Jurassic Park security/control system
permission_type:
  pre_sabotage_or_pre_lockout:
    - monitor
    - manage
    - diagnose
    - operate park-control interfaces
  post_hidden_command:
    retained:
      - monitor remaining status
      - diagnose
      - whole-system shutdown
      - reboot/startup recovery attempt
    contracted_or_unavailable:
      - direct reversal of Nedry's specific hidden security command
      - immediate restoration of the disabled subsystems through ordinary command path
scope:
  before: broader ordinary operational control over park security/control systems
  after: partial operational control; specific sabotaged command path unavailable
term: Nedry sabotage through reboot sequence
revocability: not a simple revocation event; access/operability is functionally narrowed by hidden command state
return_obligation: none
same_layer_pre_effect_veto: Nedry's hidden/undocumented command state blocks ordinary reversal
mandatory_multi_node_threshold: none
credential_distribution: unchanged for Arnold in the tested window
global_override: none established as superior decision node for this specific technical permission
ultimate_title: not inferred
source_decision_structure: technical operations under park management
consultation_structure: Hammond / Arnold / others discuss recovery options
final_decision_structure: Hammond orders shutdown; Arnold executes technical shutdown
execution_structure: Arnold operates the system; physical breaker reset is separately required
co_decision_nodes: none for the tested direct-reversal permission
independent_execution_nodes: Nedry's prior sabotage code remains causally active despite Nedry's absence
scope_transition: broader ordinary operation -> partial operation with specific reversal path locked out
transition_trigger: keychecks disabled + sabotage command not logged / practically undiscoverable
```

## 4｜对象层 / 当前窗口
对象固定为同一套 park security/control system；不把 park ownership、Hammond 的最终经营权、恐龙本身、人员生死或 Nedry 的偷窃目标拼成 composite-x。

当前窗口只比较 sabotage 前后的 Arnold technical-control permission family。

## 5｜关键压力
最强压力点不是“系统坏了”，而是：

**Arnold 仍保留总系统 shutdown/reboot 接口，但对 Nedry 已经执行并隐藏的具体 command 失去普通 direct-reversal path。**

因此不能写成 `x overall off`。准确结构是：

```text
retained global recovery interface
+
lost specific ordinary reversal interface
=
permission-path-specific contraction
```

## 6｜最近邻排除
- 不同于 Dumbledore：没有 external superior override insertion。
- 不同于 Otto Octavius：没有对象内部新增自主 co-executor。
- 不同于 Alien：没有预置时间阈值让 permission 自动过期。
- 不同于 Eduardo：不是同一资产份额连续减少。
- 不同于 Ramius：不是 credential consolidation 改变 joint/unilateral threshold。

本轮新增的是 **opaque-command lockout**：外部主体先前写入的不可见/不可追溯控制状态，使同一 operator 的具体 permission path 收窄，同时高层 recovery permission 仍保留。

## 7｜拿掉 / 反向
拿掉 Nedry 的 keycheck-off + hidden-command 机制，就无法解释 Arnold 为什么不能直接撤销安全关闭，而必须讨论逐行搜索约两百万行代码，并最终选择 whole-system restart。

反向：如果 Arnold 在 sabotage 后仍可通过普通同层 command 立即重新打开 fences/doors，则只能判普通故障，不构成 x-scope contraction。

## 8｜第三因素冻结
冻结：Arnold 的职位标签、Hammond 的 ownership、Nedry 的动机、恐龙逃脱结果、人物生死、剧情胜负。

只保留可观察 permission：Arnold 对同一 security/control object 的 direct-operate / direct-reverse / shutdown / reboot 能力在节点前后如何变化。

## 9｜zn / strict-v2
本轮不锁 zn。Arnold 对安全、职责或风险的判断不足以在该窗口内独立通过 ≥95 的 zn current canonical 门，且与被测 technical-control object layer 不需要人为拼接。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 维持 0。

## 10｜成熟度与统计
```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 97
x_scope_dynamic_transition_controls_delta: +1
x_scope_dynamic_transition_works_delta: +1
x_scope_boundary_guard_delta: 0
protected_range_delta: 0
strict_positive_delta: 0
strict_deferred_delta: 0
strict_precondition_delta: 0
```

按 current registry 写入前 `x_scope_dynamic_transition = 12 controls / 10 works`；本作此前未进入该 dynamic-work 集合，因此 evidence-layer 变为 `13 controls / 11 independent works`。

## 11｜当前结论
锁：

> **同一 actor 对同一对象保留 shutdown/reboot 等高层恢复接口，不代表其仍保留所有具体 direct-operation / direct-reversal permissions。隐藏命令、关闭审计/追踪路径或形成不可追溯状态，可在 title 与 object 不变时造成 permission-path-specific current-x contraction。**

这是一条 x-scope 动态机制，不升格 L1/L2，不修改 canonical。
