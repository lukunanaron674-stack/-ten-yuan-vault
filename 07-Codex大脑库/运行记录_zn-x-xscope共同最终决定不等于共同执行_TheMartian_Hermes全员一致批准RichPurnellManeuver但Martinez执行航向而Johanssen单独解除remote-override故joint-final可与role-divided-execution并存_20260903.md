---
type: ten-yuan-fire-axis-boundary-pressure-run
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: decision-structure-calibration
work: The Martian
actor: Melissa Lewis / Hermes crew
stage: Rich Purnell Maneuver mutiny decision and course-change execution
fact_confidence: 99
classification_confidence: 98
x_scope_decision_structure_calibration_increment: true
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_guard_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜The Martian｜joint final decision ≠ joint execution

## 0｜启动对齐
写前以 `main@891f41bff38ce5a96db7a0d49899bd81a42f0dbf` 为准，重读最近 commits，并按 current canonical 对齐 L0/L1 门禁、L1 十元—五行正本、zn/x current 信息卡与准度卡、相关关系卡/补卡、火轴待审议清单、研究总纲、strict-v2 与 x-scope 专项。current canonical 高于本记录；木轴只借验证方法，不迁移理论结论。

current ledger：strict-v2 verified positive `0/0 works`；x-scope ordinary positive 已 pending-review；decision-structure calibration `5 controls`。本轮只接受新的结构校准，不堆普通正例。

## 1｜事实窗口
电影《The Martian》(2015) 中，NASA 已明确拒绝 Rich Purnell Maneuver。Mitch 将方案秘密传给 Hermes。Lewis 没有以 commander 身份单方命令执行，而明确说 `we do this together or not at all`，随后进一步要求 `it has to be unanimous`；Hermes 五名成员逐一同意后才进入实施。

同一段又明确拆出执行角色：Martinez 负责 `plot the course and execute it`；NASA 的 remote override 仍可能从地面接管 Hermes，因此 Johanssen 负责逐个系统跳过/解除 remote override。随后 Mission Control 现实观测到 Hermes 已改变航向。

公开证据：
- https://transcripts.simpleremix.com/script.php/the-martian-2015-FLyO
- https://www.subtitlecat.com/subs/1545/The%20Martian%20%5B2015%5D%201080p.BRRip.x264.AAC.html

## 2｜x-scope 固定拆分
```yaml
actor: Melissa Lewis / Hermes crew
object: Rich Purnell Maneuver reroute of Hermes
object_layer: Hermes reroute decision and same-plan execution
permission_type:
  propose_or_consider: true
  final_acceptance: joint_unanimous_reality_tested
  plot_course: Martinez
  execute_course_change: Martinez
  disable_remote_override: Johanssen
  commander_unilateral_final_for_this_window: explicitly_not_used
scope:
  final_decision: all_five_Hermes_members
  execution: role_divided_subtasks
term: maneuver-decision-to-course-change window
revocability: course change initially time-sensitive; later approaches irreversibility
return_obligation: not_applicable
same-layer_pre-effect_veto:
  each_Hermes_member_on_final_acceptance: true_by_explicit_unanimity_rule
  NASA_remote_override_on_execution: initially_present_until_disabled
global_override:
  NASA_remote_override: technically_present_pre-disable
ultimate_title: NASA spacecraft ownership not used to infer current final/execution x
decision_structure: joint_unanimous
consultation_structure: full_crew_deliberation
final_decision_structure: joint_unanimous
execution_structure: role_divided_specialized
co_decision_nodes:
  - Lewis
  - Martinez
  - Beck
  - Vogel
  - Johanssen
```

## 3｜关键压力与最小差异
错误压缩：

```text
五人必须一致同意
→ 五人共同执行每一个技术动作
```

不成立。

本例现实结构是：

```text
joint-unanimous final decision
+
Martinez-specific course execution
+
Johanssen-specific override disabling
=
shared final authorization + role-divided execution
```

因此锁：

> **joint/shared final decision 不推出 joint/shared execution；共同批准拓扑与现实执行拓扑必须独立建模。**

反向同样成立为方法护栏：某项 effect 由多人分工执行，也不能仅凭多人参与执行倒推其 final decision 必须 joint。

## 4｜最近邻排除
- 《12 Angry Men》锁的是 unanimity 让每名 juror 成为同层 pre-effect final node；其 execution/finalization 与投票本身高度重合。
- 《Star Trek III》锁的是异质 mandatory blocking nodes 仍可组成 joint-final threshold。
- 《The Purge》锁的是 shared-parallel execution 不等于 joint-threshold。

本轮新增的是反方向缺口：**已经确认 joint-unanimous final 后，execution 仍可拆成不同主体的 specialized unilateral subinterfaces**。因此不是再堆第6个“多人共同决定”普通正例，而是 decision topology 与 execution topology 的正交校准。

## 5｜拿掉 / 反向 / 第三因素冻结
### 拿掉 unanimity
若拿掉 Lewis 明示的 unanimity gate，不能再从事实证明每名 crew member 都有 final pre-effect veto；所以 joint-final 的证据依赖明确规则与逐人通过，而不是“大家都在场”。

### 拿掉 Martinez execution
即使全员已经共同批准，航向仍需要具体执行接口；共同批准本身不会自动完成 trajectory change。

### 拿掉 Johanssen override-disable
NASA remote override 仍是 competing execution node；所以“全员已经决定”也不能自动推出 Hermes execution 已排除外部覆盖。

### 第三因素冻结
NASA ownership、Lewis commander title、Mitch 信息传递、Rich 方案设计、crew friendship/loyalty 均不替代被测 final-decision / execution 权限结构。

## 6｜zn / strict-v2
本轮不锁 zn。救 Watney 的选择同时受同伴关系、任务责任、风险收益、NASA 决策冲突与集体承诺影响；不能从 heroic outcome 或 mutiny 标签倒推稳定 zn。

因此：
```yaml
strict_v2_verified_positive: +0
strict_v2_negative: +0
strict_v2_deferred: +0
strict_precondition: +0
```

strict-v2 verified positive 继续 `0/0 works`。

## 7｜判定与统计
```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
x_scope_decision_structure_calibration_controls: 5 -> 6
x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +0
protected_range: +0
strict_all: +0
```

current schema 尚未为 decision-structure calibration 建独立 works 聚合字段，本轮不擅自新增字段；The Martian 作为本 calibration 的独立作品 provenance 记录在本文件。

## 8｜下一轮高信息增益
P0 继续寻找 strict-v2 第一份 ≥95 verified positive，不降门。

若仍无，优先 P4 真正动态迁移：同一人物、同一对象、同一 execution permission family，Stage A 必须多人共同执行才能生效，经过真实节点后 Stage B 变成主体可单独执行，或严格反向；必须分别 reality-test 两阶段，不能只凭组织图/口头授权判断。
