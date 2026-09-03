---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Papers, Please
actor: Inspector
stage: story mode Day 1-5 permission transition
sample_type: x-scope dynamic transition / transition-veto to downstream-disposition positive mirror
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
x_scope_boundary_guard_increment: false
x_scope_decision_structure_calibration_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-03
---

# 运行记录｜Papers, Please：transition veto 与 resultant-state disposition 必须分账，且可发生真实 permission-type expansion

## 0｜启动口径

本轮按 latest `main`、L0 `AGENTS.md`、十元关系 L1 门禁、L1 十元—五行正本 v1.6、zn/x 信息卡、zn/x 准度卡、`zn补x_补卡`、火轴待审议清单、研究总纲、strict-v2 专项、x-scope 专项与最近 commits 对齐。

current canonical 高于本记录。木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。本轮不修改 L1/L2 canonical。

## 1｜为什么选这个样本

current x-scope 缺口明确要求 `transition veto + downstream disposition` 的正向镜像：不能因为主体能够阻断 `A→B`，就自动推出其能决定阻断后对象进入哪个后续状态；反过来，如果后续阶段主体真的新增了 downstream state-selection interface，也必须单独 reality-test。

《The Terminal》Frank Dixon 已锁负镜像：能拒绝 Viktor 入境，不等于能拘留、遣返或任意处分被拒后的 person-state。

`Papers, Please` 提供同一主体、同一 entrant-processing 对象层、跨明确 rule-update 的正向动态：前期 Inspector 已拥有 approve/deny admission gate；Day 5 起，对满足拘留条件的 entrant 新增 `detain` 最终调用接口，并由 guards 现实带走对象。

## 2｜事实链

### Stage A｜Day 1-4

Inspector 的基础工作对象是 checkpoint entrant。其 passport / documents 可被 Inspector 审核，并由 Inspector 盖章 `approve` 或 `deny`，从而现实决定该 entrant 是否通过 Arstotzka admission transition。

此阶段可以锁：

```text
entrant admission edge
A = checkpoint applicant state
B = admitted-into-Arstotzka state

Inspector:
approve / deny = reality-tested
entry-transition veto = true
```

但不能从 `deny=true` 倒推出 detention / arrest / custody-disposition。

### Trigger｜Day 5

Story mode 从 Day 5 开始赋予 Inspector 在特定严重违规/有效 discrepancy 条件下拘留 entrant 的 authority/interface；检测并完成相应 interrogation 后，`detain` button 可出现。

### Stage B｜Day 5+

在 eligible entrant 上，Inspector 可选择 `detain`。按下后 shutter 关闭，guards 进入 booth 区域并现实把 entrant escort/apprehend 离场。多数可拘留对象也仍可仅被 deny，因此 detention 不是 deny 的同义动画，而是新增的 downstream state-selection branch。

可锁：

```text
pre-Day5:
approve / deny
but no general detain interface

Day5+ eligible discrepancy:
approve/deny layer retained
+ detain invocation becomes available
+ Inspector selects detain
+ guards reality-test custody transfer

permission_type:
edge-veto only
→ edge-veto + conditional downstream detention disposition interface
```

## 3｜x-scope 固定拆分

```yaml
actor: Inspector
object: checkpoint entrant
object_layer: admission-and-post-inspection-disposition

permission_type:
  inspect_documents:
    stage_A: true
    stage_B: true
  approve_entry:
    stage_A: true
    stage_B: true
  deny_entry:
    stage_A: true_reality_tested
    stage_B: true
  order_or_invoke_detention:
    stage_A: false_or_unavailable
    stage_B: true_on_eligible_discrepancy_reality_tested
  physical_custody_execution:
    stage_A: false
    stage_B: false_for_Inspector_guard_executed
  arbitrary_detention_of_any_entrant:
    stage_A: false
    stage_B: false
  deportation_or_arbitrary_destination_selection:
    stage_A: false
    stage_B: false

scope:
  stage_A: admission-edge approval/denial
  stage_B: admission-edge approval/denial + conditional eligible-entrant detention-selection
  global_person_disposition: false

term:
  stage_A: story-mode before Day5 rule unlock
  stage_B: Day5+ while detention conditions/protocol are satisfied

revocability:
  source: Ministry/game-protocol rule-bound
  Inspector_self_revocation_of_source_rule: false

return_obligation: not_applicable

same-layer_pre_effect_veto:
  admission:
    Inspector_deny: effective
  detention:
    eligibility_or_discrepancy_gate: mandatory
    independent_human_co_decision_after_button_available: none_observed

global_override:
  Ministry_protocol_and_eligibility_rules: true

ultimate_title: not_applicable

decision_structure:
  stage_A_admission: unilateral_within_rule-constrained_case
  stage_B_detention_selection: unilateral_on_eligible_case

consultation_structure:
  no_joint_consultation_required_for_button-level_selection

final_decision_structure:
  admission: Inspector stamp is final local processing gate subject to protocol/citation system
  detention: Inspector detain invocation selects custody branch once eligibility interface exists

execution_structure:
  admission: checkpoint system/entrant follows stamp outcome
  detention: Inspector invokes -> guards physically escort/apprehend entrant

co_decision_nodes:
  none_locked_at_final_selection_layer
  guards_are_execution_nodes_not_co-final-decision_nodes

scope_transition:
  from: admission-edge approve/deny only
  to: admission-edge approve/deny + conditional downstream detention selection

permission_type_transition:
  from: [inspect, approve, deny]
  to: [inspect, approve, deny, conditional_detain_invocation]

transition_direction: expansion
transition_trigger: Day5 detention authority/interface becomes available
realized_effect_test: Inspector selects detain and guards physically remove eligible entrant
```

## 4｜关键压力测试

### 4.1 最近邻｜The Terminal / Frank Dixon

`The Terminal`：

```text
entry veto = true
post-denial detention/disposition = false
```

`Papers, Please` Day 5+：

```text
entry veto = true
+ detention selection interface independently appears
+ detention branch reality-tests
```

因此两者形成真正正负镜像：

> **transition-blocking x 不自动产生 resultant-state disposition x；但 resultant-state disposition 可以在新增独立权限节点并现实生效后成为真实扩张层。**

### 4.2 拿掉测试

拿掉 Inspector 的 deny stamp gate，entrant 的 admission transition 不再由其该节点现实阻断，故窄 `entry-veto x` 有真实作用。

拿掉 Day 5+ `detain` interface，仅保留 approve/deny，则 Inspector 仍可以拒绝 entry，但不能通过同一 processing layer 选择 detention branch；故新增 permission 不是对旧 deny 的文字改名。

### 4.3 反向测试

`detain button` 出现前，不允许从 Inspector 的职位、边检身份、国家暴力背景或 guards 在场倒推 detention x。

`detain button` 出现后，也不允许把它扩张成：

- Inspector 亲自拥有 physical custody；
- 可随意拘留所有 entrant；
- 可任意选择 deportation / prison destination；
- 对 entrant 有 global person-disposition x。

### 4.4 第三因素冻结

- Ministry protocol 是 source/override node，不是 Inspector 本人的十元 x 自动替代物；
- guards 是 detention execution nodes，不是同层 co-final decision nodes；
- citation/reward/Calensk 后期金钱激励不构成 Day 5 detention permission 本身；
- Inspector 的职业、制服、国家阵营与身份标签不参与 x 判定。

## 5｜zn / strict-v2

本轮不锁 Inspector 的 `zn`。

可能动机包括制度服从、家庭生计、国家规则、惩罚规避、个人选择、EZIC 压力与后续收益；没有一个内部不可轻易让渡原则在该 Day 1-5 window 内达到 ≥95 的独立 `zn` 标准。

因此：

```yaml
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
```

strict-v2 verified positive 继续 `0 / 0 works`。本样本只锁 x-scope dynamic，不拿权限扩张反推 zn。

## 6｜判定

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830

locked_result:
  - transition-blocking_x_not_equal_resultant-state_disposition_x
  - downstream_state_disposition_requires_independent_permission_proof
  - edge-veto_to_conditional-detention-interface_can_expand_dynamically
  - final-selection_node_and_physical-execution-node_must_be_separated
```

新增高信息增益点不是“又一个 scope expansion”，而是把已有负镜像补成动态正向：

```text
edge control only
→ explicit new downstream selection interface
→ same object layer reality-test
→ resultant-state disposition scope becomes true on a constrained subset
```

## 7｜统计变化

以启动时 current 火轴待审议清单 effective ledger：

```text
x_scope_dynamic_transition_controls: 25
x_scope_dynamic_transition_works: 22
```

`Papers, Please` 此前未进入 current dynamic-work 集合，因此：

```text
25 / 22
→ 26 dynamic controls / 23 independent works
```

其余：

```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_boundary: +0
x_scope_decision_calibration: +0
protected_range: +0
```

## 8｜证据来源

1. Papers Please Wiki, `Entrant`：entrant 是 Inspector 处理的主要对象，Inspector 可 approve / deny 其 entry。
   https://papersplease.fandom.com/wiki/Entrant
2. Papers Please Wiki, `Detention`：story mode 从 Day 5 开始可 detention；合法条件下 detain button 出现，触发 guards escort/apprehend entrant；许多可拘留对象也仍可只拒绝入境。
   https://papersplease.fandom.com/wiki/Detention
3. GameFAQs / DarkstarRipclaw walkthrough：Day 5 起可在有效 discrepancy 后 detain，也可选择 deny，独立确认 permission unlock 与 branch difference。
   https://gamefaqs.gamespot.com/pc/713440-papers-please/faqs/67997
4. Wikipedia gameplay overview：Inspector 逐人审核、允许/拒绝入境，并可 arrest suspected criminals/forged-document entrants；用于交叉确认整体机制，不单独承担 Day 5 精确门槛。
   https://en.wikipedia.org/wiki/Papers%2C_Please

## 9｜下一轮最高信息增益

P0 仍优先寻找第一份 ≥95 strict-v2 verified positive，不降门槛。

若仍无，优先：

1. `path exhaustion dynamic`：多个 independent paths 被逐一关闭直到 target-effect reality-test OFF；
2. `quantitative permission-cap expansion mirror`：真正数量上限 low→high，两阶段同 actor/object/permission family 均有现实测试；
3. protected-range 只收同 boundary、同 risk-channel 的动态或失败镜像。

本轮不再继续堆普通 `edge-veto→detention` 换皮样本；该机制已形成 The Terminal 负镜像 + Papers, Please 正向动态镜像。