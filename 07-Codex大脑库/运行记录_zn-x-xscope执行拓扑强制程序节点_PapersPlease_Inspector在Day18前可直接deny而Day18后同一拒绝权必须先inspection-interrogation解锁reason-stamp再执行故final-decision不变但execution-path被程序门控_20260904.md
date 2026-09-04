---
type: ten-yuan-fire-axis-boundary-evidence
authority_level: L4
knowledge_status: evidence-locked
status: x-scope-dynamic-control
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_work: Papers, Please
sample_actor: Inspector
sample_stage: Day 17 -> Day 18+
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_control_increment: true
x_scope_dynamic_transition_work_increment: false
strict_v2_increment: false
protected_range_increment: false
source_main_before_write: c9f11f27e9b8ce6ab3e97622e62a7f05b73d004b
updated: 2026-09-04
---

# zn↔x 火轴边界压力测试｜Papers, Please｜Day 18 mandatory procedural unlock node

## 0｜启动对齐

写前以 `main@c9f11f27e9b8ce6ab3e97622e62a7f05b73d004b` 为真值。已重读 L0 `AGENTS.md`、文件权力总览、L1 十元关系启动门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡、zn/x 准度卡、火轴待审议清单、火轴研究总纲、strict-v2 / x-scope / protected-range current 口径及最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

本轮不采普通正例。选择 P4 execution topology，是因为 current registry 已明确：Pacific Rim 已填 joint↔unilateral 基础槽，后续只收不同 trigger / mandatory-node 机制；而仓库尚未记录 `same final decision holder + same permission + mandatory procedural unlock node inserted` 的动态。

## 1｜事实窗口

对象固定为 Inspector 对 entrant 的 admission-denial transition。

### Stage A｜Day 17 及以前

- 对存在有效拒绝理由的 entrant，Inspector 可以不先完成 inspection / interrogation，直接使用 `ENTRY DENIED` 红章完成拒绝。
- 这条直接执行路径在游戏规则下现实可生效，不会仅因“未说明拒绝理由”而产生 Day-18 式 citation。

### Stage B｜Day 18 起

- 新规要求所有拒绝必须同时附带 `Reason for denial`。
- `Reason for denial` stamp 只有在 Inspector 发现 discrepancy 并 interrogate entrant 后才出现。
- 只盖 `ENTRY DENIED` 而不附 reason，会收到 `Denial reason not given` citation。
- 因此，拒绝 entrant 的最终决定仍由 Inspector 作出，但合规拒绝的现实执行路径从“直接 deny”变为“inspection/discrepancy -> interrogation -> reason-stamp unlock -> deny + reason”。

## 2｜为什么比现有控制有新信息

Pacific Rim 锁的是：

```text
joint execution
→ emergency unilateral execution
→ joint restoration
```

本案不是共同执行节点数量变化，也不是 actor 被物理移除/替代，而是：

```text
same actor
+ same object layer
+ same denial permission
+ same unilateral final decision

execution path:
direct unilateral execution
→ rule trigger
→ mandatory procedural unlock node inserted
→ gated unilateral execution
```

因此新增最小差异是：

> **final-decision holder 不变，不代表 execution topology 不变。制度可以在同一主体内部插入 mandatory procedural unlock node，使原本直接可执行的 x 变成 gated execution x。**

## 3｜zn 证据

本轮不锁 `zn`。

Inspector 是否拒绝 entrant 可由当日 immigration protocol、文件 discrepancy、citation 风险、薪酬与玩家选择充分解释。不存在 ≥95 的独立证据证明某项不可轻易让渡的内部原则在无外部要求时仍持续进入未来判断、排序冲突并拥有最终指导资格。

所以：

```text
zn = not locked
strict-v2 = not entered
```

不得由“认真执法”“服从制度”“对国家负责”等身份/职责/主题标签倒推 `zn`。

## 4｜x / 权限结构

```yaml
actor: Inspector
object: entrant admission transition
permission_type:
  deny_admission: true
  approve_admission: true
  interrogate_after_discrepancy: true
scope: current entrant processed at checkpoint
quantitative_cap: null
term:
  stage_a: Day 17 and earlier protocol
  stage_b: Day 18+ protocol
revocability: rule-governed; protocol can change
return_obligation: null
same-layer_pre-effect_veto:
  stage_a: no mandatory reason-stamp procedural gate for an otherwise valid denial
  stage_b: compliant denial cannot be completed without reason-stamp prerequisite
global_override: Ministry / immigration protocol + citation enforcement
ultimate_title: not applicable
source_decision_structure: rule-bounded unilateral inspector decision
consultation_structure:
  stage_a: interrogation optional for many denial cases
  stage_b: entrant interrogation becomes mandatory unlock step for reason stamp
final_decision_structure:
  stage_a: unilateral
  stage_b: unilateral
execution_structure:
  stage_a: direct deny-stamp execution
  stage_b: discrepancy inspection -> interrogation -> reason-stamp unlock -> deny+reason execution
co-decision_nodes: none
unilateral_effect:
  stage_a: direct compliant denial possible
  stage_b: direct denial without mandatory procedural node produces citation / noncompliant execution
scope_transition: direct-execution-path -> procedurally-gated-execution-path
transition_trigger: Day 18 immigration protocol change
realized_effect_test: reason stamp appears after interrogation; denial without reason is cited; denial with both stamps is compliant
```

## 5｜对象层 / current window

- same actor：Inspector。
- same object layer：entrant admission transition。
- same permission family：deny admission。
- current window：Day 17 -> Day 18 的连续 protocol transition。
- 不把 passport、booth、stamp 物理持有倒灌成更大的 ownership/disposition x。
- 不把 Ministry 的规则制定权倒灌给 Inspector。

## 6｜最近邻排除

### 最近邻 A｜permission revoked
不是。Inspector Day 18 后仍能拒绝 entrant；改变的是合规 execution path 的前置节点，而不是 `deny_admission` permission 消失。

### 最近邻 B｜joint final decision
不是。entrant 的回答不是 co-decision vote，Ministry 也没有在每个 entrant 上加入一个共同最终裁决者；最终 approve/deny 仍由 Inspector 单方盖章决定。

### 最近邻 C｜mere consultation
不是。interrogation 在 Stage B 不是可有可无的咨询，而是 `Reason for denial` interface 的 mandatory unlock condition；不经过该节点会在现实规则层产生 citation。

### 最近邻 D｜technical UI change only
不是。UI 变化对应真实规则生效差异：同一拒绝动作缺少 reason stamp 会被系统判违规，因此是 current execution topology 的现实约束，而非纯界面美术变化。

## 7｜拿掉 / 反向

### 拿掉 Day-18 mandatory node

若取消 `inspection/interrogation -> reason stamp` 前置门，Inspector 又可像 Day 17 一样直接通过 deny stamp 完成合规拒绝；所以该节点真实决定 execution path。

### 拿掉 Inspector 的最终拒绝决定

即使 reason stamp 已解锁，也不会自动把 entrant 拒绝；仍需 Inspector 执行 deny。说明 procedural unlock ≠ final decision transfer。

### 反向

```text
mandatory procedural node present
≠ permission false
≠ joint final decision
≠ shared execution
```

真正变化是：

```text
direct unilateral execution
→ gated unilateral execution
```

## 8｜第三因素冻结

- Ministry 只作为 protocol/global override 来源，不记为 Inspector 的个人 x。
- citation 是执行约束，不当作 `zn`。
- entrant 的解释可能清除 discrepancy，但不因此成为共同最终裁决者。
- 玩家操作速度、UI 快捷键、奖金、剧情态度均不用于判 x。
- 不从 Inspector 职业身份直接倒推权限；权限只按实际可执行 stamp / interrogation / rule outcome 记录。

## 9｜判定

```yaml
strict_v2:
  verdict: not-entered
  reason: zn not independently locked

x_scope:
  verdict: evidence-locked dynamic control
  mechanism: mandatory-procedural-unlock-node insertion
  topology:
    from: direct unilateral execution
    to: procedurally gated unilateral execution
  final_decision_holder_changed: false
  permission_family_changed: false
  reality_test: passed

protected_range:
  verdict: not-applicable
```

锁定护栏：

```text
same final-decision holder
≠ same execution topology

mandatory procedural unlock node inserted
≠ joint final decision

permission retained
≠ direct execution path retained
```

## 10｜成熟度与统计

事实由 Day 18 gameplay rule、Reason for Denial 机制、inspection/interrogation 解锁关系与 citation 结果多处公开资料交叉一致支持；分类与 current x-scope 字段、P4 mandatory-node 缺口直接对齐。

```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
```

同作品此前已经计入 `Papers, Please` independent work，因此本轮：

```text
x-scope dynamic controls: 28 -> 29
x-scope dynamic works:    25 -> 25

strict positive:      +0
strict negative:      +0
strict deferred:      +0
strict precondition:  +0
protected-range:      +0
```

本记录只增加新 topology control，不重复增加 independent work；待后续批量消化再同步 realtime registry，避免为同一 evidence 制造多次计数提交。

## 11｜下一高价值缺口

继续按 current registry：

1. P0 strict-v2 第一份 verified positive；
2. P1 path-set completeness 后真正 `surviving relevant path count = 0 -> target effect OFF`；
3. P3 edge-veto 保留而 downstream disposition 后续 `ON -> OFF / narrower eligible subset`；
4. P4 若继续，仅接受与本案 mandatory procedural unlock、Pacific Rim joint/unilateral 均不同的新 trigger/topology。

本案已经填掉“同一最终裁决者下 mandatory procedural node 插入导致 execution topology 改变”的基础槽，后续停止采同机制换皮。
