---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-dynamic-execution-topology-transition
priority_bucket: P4-P5
work: Pacific Rim (2013)
character: Raleigh Becket
phase: Yancy+Raleigh co-pilot Gipsy Danger -> Yancy killed during Knifehead attack -> Raleigh solo-pilots same Gipsy Danger to kill Knifehead and reach shore -> later Raleigh+Mako co-pilot restored Gipsy Danger
mechanism: same-actor-same-object-same-permission-family joint-execution -> emergency unilateral-execution -> joint-execution restoration
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
created: 2026-09-02
---

# zn ↔ x｜x-scope 执行拓扑动态压力测试｜《Pacific Rim》Raleigh / Gipsy Danger

## 0｜启动对齐

本轮写前 `main@fd0c2cd7658ec0696a29b640d0508cdc2dbe4a60`。启动时按 current canonical / gate 对齐：

- `AGENTS.md` 与 L0/L1 文件权力、任务门禁；
- `00-中枢索引/AI文件权力与任务总览.md`；
- `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md`；
- `07-Codex大脑库/十元理论每小时执行门禁协议_v1.0_2026-07-28.md`（正文 current v1.2）；
- `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`；
- `01-十元系统/01-十元信息卡/【zn信息量卡v2】.md`；
- `01-十元系统/01-十元信息卡/【x信息量卡v2】.md`；
- `01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md`；
- `01-十元系统/03-十元准度卡/x_准度卡_v0.1.md`；
- `01-十元系统/04-十元生克补卡/补/zn补x_补卡.md` 及相关关系卡；
- `07-Codex大脑库/zn-x火轴待审议清单.md`；
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md`；
- strict current：`current-layer-specific-anchor-gap-v2_20260829`；
- x-scope current：`current-x-scope-distinction-v1_20260830`；
- 最近 commits 至 Gandalf acquisition-opportunity strict-precondition guard。

current canonical 高于本记录。木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。x-scope 已为 `pending-review`，本轮只记录新动态迁移机制，不修改 L1/L2 canonical。

## 1｜本轮结论

本轮锁定 P4 的真实 execution-topology migration：

> **同一 actor、同一 object、同一 movement/combat-control permission family 中，`joint execution` 可以在 mandatory co-pilot node 被现实移除后，暂时迁移为 `unilateral execution`；当新的 co-pilot node 建立并重新进入同一执行链后，又可恢复为 `joint execution`。**

关键不是 Raleigh “能力很强”，也不是最后“赢了”。被测的是现实 execution node topology：

```text
Raleigh + Yancy / same Gipsy Danger
→ two-pilot execution

Yancy killed / co-pilot node physically removed
→ Raleigh alone still makes movement/combat execution reality-effective
→ unilateral emergency execution

Raleigh + Mako / same rebuilt Gipsy Danger
→ two-pilot Drift execution restored
```

因此：

```text
execution topology is not a fixed property of the object or actor identity

joint → unilateral → joint
can be a real current-x structural migration
```

## 2｜作品事实

高置信事实链：

1. Jaeger 的正常控制结构是两名或以上 pilot 通过 Drift 共同承担神经负荷并共同驾驶；Raleigh 与 Yancy 在 Gipsy Danger 中共同出击 Knifehead。
2. Knifehead 破坏 Conn-Pod 并杀死 Yancy 后，Yancy 这个 co-pilot execution node 被现实移除。
3. Raleigh 没有立即失去同一台 Gipsy Danger 的 movement/combat execution。他独自继续操作，杀死 Knifehead，并把严重受损的 Gipsy Danger 驾驶到阿拉斯加岸边后才倒下。
4. 五年后，修复后的同一 Gipsy Danger 重新由 Raleigh 与 Mako 通过 Drift 共同执行 movement/combat control，并在后续战斗中现实生效。

本轮只使用上述 execution facts，不从 Ranger 身份、兄弟关系、创伤、英雄主题、胜负或结局倒推 `x`。

## 3｜zn 独立判定

本轮不锁 `zn`。

Raleigh 在 Yancy 死后继续战斗与把机甲带回岸边，可由紧急求生、任务连续性、即时战斗压力与能力极限共同解释。其后重返 Jaeger 项目也存在复仇、责任、同伴关系、战争压力等 competing explanations。

因此当前窗口不足以 ≥95 独立锁定：

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive: false
```

本轮不能因为 x 的结构迁移漂亮，就替 zn 补票。

## 4｜x 固定拆分

```yaml
actor: Raleigh Becket
object: Gipsy Danger
object_layer: movement_and_combat_execution_control

permission_type:
  contact: true
  use: true
  custody: local_operational_only
  call: true_on_piloting_interface
  management: local_operational_control
  disposition: not_inferred
  veto: not_inferred_as_global
  exclusion: not_applicable
  transfer: not_tested

scope:
  stage_A: same_Gipsy_movement_combat_execution_with_Yancy
  stage_B: same_Gipsy_movement_combat_execution_by_Raleigh_alone
  stage_C: same_Gipsy_movement_combat_execution_with_Mako
  global_program_authority: false
  mission_assignment_authority: false

term:
  stage_A: pre_Yancy_death_current_combat_window
  stage_B: post_Yancy_death_emergency_window_until_shore
  stage_C: rebuilt_Gipsy_Raleigh_Mako_operations

revocability:
  execution_node_structure: factually_changes_with_available_Drift_pilot_nodes

return_obligation: n/a

same-layer_pre-effect_veto:
  stage_A: co-pilot node is structurally required in normal two-pilot operation
  stage_B: no surviving co-pilot node blocks Raleigh emergency execution
  stage_C: paired Drift execution restored

global_override:
  PPDC_mission_command: remains_external

ultimate_title: not_used

decision_structure:
  strategic_mission_assignment: external_to_Raleigh
  local_combat_choice: not_promoted_to_formal_joint_final_decision_without_separate_test

consultation_structure:
  stage_A: two-pilot coordination
  stage_B: single surviving pilot
  stage_C: two-pilot coordination

final_decision_structure:
  strategic_level: external_PPDC_chain
  local_final_decision: not_inferred_beyond_tested_execution

execution_structure:
  stage_A: joint_two_pilot
  stage_B: unilateral_emergency
  stage_C: joint_two_pilot_restored

co-decision_nodes:
  formal_joint_final_decision_nodes: not_locked

independent_execution_nodes:
  stage_A:
    - Raleigh
    - Yancy
    relation: normal coupled execution
  stage_B:
    - Raleigh
  stage_C:
    - Raleigh
    - Mako
    relation: restored coupled execution

scope_transition:
  - joint_two_pilot -> unilateral_emergency
  - unilateral_emergency -> joint_two_pilot_restored

transition_trigger:
  first: Yancy killed and co-pilot execution node physically removed
  second: Mako enters Drift-compatible co-pilot execution role on rebuilt same Gipsy Danger

retained_layers:
  Raleigh_contact_use_and_realized_movement_combat_execution

lost_or_externalized_layers:
  none_inferred_beyond_co-pilot-node-topology

realized_effect_test:
  stage_A: true
  stage_B: true_Raleigh_kills_Knifehead_and_reaches_shore
  stage_C: true_Raleigh_and_Mako_jointly_operate_in_combat
```

## 5｜关键压力测试

### 5.1 最近邻排除

**不是 WarGames。** WarGames 锁的是 `joint execution threshold ≠ joint final decision`；其重点是 decision/execution 分层。本轮重点是 **execution topology 本身跨阶段真实迁移**。

**不是 Ramius。** Ramius 是 mandatory credentials 从两节点集中到单一 actor，形成 authorization-interface 的 `joint-threshold → unilateral`；但 downstream target effect 没有完整 reality-test。本轮 Raleigh 的 unilateral stage 有直接 reality-test：同一机甲继续移动、战斗、击杀并抵达岸边。

**不是 WALL-E Captain。** WALL-E 是 endogenous override node 被移除后 `contested → unblocked`。本轮没有 competing veto node；改变的是必需 co-execution node 数量与实际 execution topology。

### 5.2 拿掉测试

拿掉 Yancy 的死亡/移除，让正常 two-pilot Drift 结构继续存在，则没有证据支持 `joint → unilateral` 迁移。

拿掉 Raleigh 单独杀死 Knifehead并把 Gipsy 驾回岸边的现实 effect，只剩“理论上他也许能单人驾驶”，则不得 evidence-lock unilateral stage。

拿掉后来 Mako 与 Raleigh 的现实双人 Drift 操作，只能锁 `joint → unilateral`，不能再锁 `unilateral → joint restoration`。

### 5.3 反向测试

如果 Yancy 死后 Raleigh 必须等第二名 pilot 才能让同一 movement/combat control 再次生效，则应该判 joint execution 持续、Raleigh local x 暂停，而不是 unilateral migration。

事实相反：Raleigh 的单人 execution 在同一对象层现实成功，因此结构确实发生变化。

### 5.4 第三因素冻结

冻结以下因素后结论仍成立：

- Raleigh / Yancy 的兄弟身份；
- Raleigh 的 Ranger 身份与能力标签；
- Yancy 的死亡情绪意义；
- PPDC 的战争目标；
- Mako 的人物弧；
- Knifehead 最终胜负；
- “英雄坚持”主题。

只保留：

```text
same actor
+ same object
+ same permission family
+ co-execution node removed
+ unilateral reality-effect succeeds
+ later new co-execution node enters
+ joint execution reality-effect succeeds
```

分类仍成立。

## 6｜局部 / 整体与名义 / 现实

本轮只锁 `Gipsy Danger movement/combat execution x`，不扩张到：

- PPDC strategic mission authority；
- Jaeger Program governance；
- Gipsy ultimate title / ownership；
- 全部武器 disposition；
- formal joint final decision。

Raleigh 单人 emergency execution 也不意味着 Jaeger 的一般制度设计已经永久变成 single-pilot。**短期现实 execution topology 的成立，不等于制度默认结构被永久改写。**

这正是本轮最有信息增益的边界：

> **`current_execution_structure` 可以在同一对象层临时迁移，而 `source_decision_structure`、制度默认设计与 broader x scope 不必同步变化。**

## 7｜strict-v2 判定

```yaml
same_current_window_for_strict: not_opened
same_object_layer_for_x_dynamic: true
zn_independently_locked: false
x_independently_reality_tested: true_on_movement_combat_execution
strict_v2_verified_positive: false
strict_v2_negative: false
strict_deferred: false
strict_precondition: false
```

P0 继续为 0；本轮不为破零降低门槛。

## 8｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

写前 current effective dynamic evidence-layer 已吸收 Queeg 与 WALL-E，为：

```text
16 dynamic controls / 14 independent works
```

《Pacific Rim》此前未进入该 criterion 的 dynamic independent-work 集合，本轮为新机制且新作品：

```text
16 / 14
→ 17 dynamic controls / 15 independent works
```

其他统计不变：

```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0

x_scope_positive: +0
x_scope_boundary: +0
x_scope_dynamic: +1 control / +1 work
decision_structure_calibration: +0

protected_range_positive: +0
protected_range_negative: +0
```

由于 x-scope 已 `pending-review`，本轮不自动升格、不修改 L1/L2 canonical。

## 9｜本轮可复用边界句

> **same actor + same object + same permission family 下，joint/shared/unilateral 不是人物或对象的固定标签，而是 current execution-node topology。mandatory co-execution node 被现实移除且剩余 actor 单方 effect-test 成功，可锁 joint→unilateral；新 co-execution node 进入并现实共同生效，可再锁 unilateral→joint。**

同时保留两个反倒灌：

```text
emergency unilateral execution
≠ permanent single-pilot institutional authority

joint execution
≠ joint final decision automatically
```

## 10｜下一轮

P0 仍优先寻找天然对象构成型 strict-v2 首个 verified positive，绝不为破零降低门槛。

若仍无 ≥95 候选，最高信息增益材料应继续攻击 execution topology，但避开本轮重复：

1. **shared / parallel-independent → unilateral**：同一 actor/object/permission family，中另一个 independent node 的 credential/access 被现实撤销，剩余 actor 单独 effect-test；
2. **unilateral → shared / parallel-independent**：新 independent node 获得不需原 actor 同意即可现实生效的同层 permission；
3. 优先寻找迁移前后仍保留同一 broader object 与 permission family、且 decision topology 不同步变化的案例，用于直接检验 execution topology 与 decision topology 的可分离动态。