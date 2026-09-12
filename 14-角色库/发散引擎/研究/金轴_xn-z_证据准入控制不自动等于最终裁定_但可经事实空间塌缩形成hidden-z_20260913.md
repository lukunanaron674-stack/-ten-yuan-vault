---
type: ten-yuan-metal-axis-l4-research
axis: xn-z
status: research-only
created: 2026-09-13
source_main: a6360616ff32d1a2cd93ff83f7ff552fe98ef96a
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
parent_evidence: 14-角色库/发散引擎/研究/金轴_xn-z_议程设置与候选集裁剪不自动等于最终裁定_20260912.md
may_override_canonical: false
research_slot: evidence_admission_control
---

# 金轴｜证据准入控制：不自动等于最终裁定，但可经“事实空间塌缩”形成 hidden z

## 0｜本轮只解决一个问题

固定最终裁定仍由多个 binding 节点按规则完成，只改变一个中心对“哪些证据能进入裁定”的控制。

问题：

> 单一中心拥有 `evidence_admission_control` / `record_inclusion_control`，是否自动构成 z？

本轮结论：

```text
evidence_admission_control != automatically final_adjudication
evidence_ordering != evidence_exclusion
```

但若同一中心能够自由、排他、无独立复核地决定“哪些事实进入 binding record”，则会在上游形成真实单中心控制：

```text
admissible_fact_space = z-like center
substantive_judgment_over_record = xn possible
```

必须 `SPLIT_IR_BY_DECISION_STAGE`。

若该中心进一步能够把 binding record 裁到只支持一个可达结论，且下游裁定节点不能补证、退回或独立复核，则：

```text
evidence_set_control -> outcome_determinacy
```

此时虽然形式上仍由多人“判断”，但事实空间已被预先压成单一结论，whole-case 可升级为 hidden / effective z candidate。

新增 guard：

```text
EVIDENCE-ORDERING-NOT-ADMISSION-GATE-v0.1
EVIDENCE-ADMISSION-CONTROL-GATE-v0.1
FACT-SPACE-TO-OUTCOME-COLLAPSE-GATE-v0.1
```

## 1｜current criterion

```text
xn = 运行权/判断权分布到顺序、规则、记录、节点与流程
z  = 判断权与结构重心收束到单一最高中心或最终裁定点
```

本轮扩展 rights ledger，但不修改 canonical：

```text
evidence_submission_right
evidence_ordering_right
evidence_admission_right
evidence_exclusion_right
evidence_reentry_right
record_reopen_right
substantive_judgment_right
aggregate_override
final_adjudication
```

## 2｜完整 IR

```yaml
actor: 产品事故责任评审委员会
object: 本轮事故责任结论
object_layer:
  upstream: admissible_evidence_record
  downstream: substantive_judgment_over_record
current_window:
  evidence_submission
  -> admissibility_review
  -> record_lock
  -> distributed_judgment
  -> final_result
changed_variable:
  evidence_admission_control_scope
relation_source:
  upstream:
    who_can_include_exclude_and_reintroduce_evidence_into_binding_record
  downstream:
    binding_committee_judgment_plus_rule_aggregation
relation_shape:
  S0_xn_rule_admission:
    raw_evidence -> objective_admission_rule -> binding_record -> distributed_judgment
  S1_ordering_only:
    center_orders_review_sequence -> all_qualified_evidence_remains_reachable -> distributed_judgment
  S2_split_discretionary_record:
    raw_evidence -> one_center_discretionary_include_exclude -> binding_record -> distributed_judgment
  S3_hidden_z_collapse:
    raw_evidence -> one_center_can_force_one-sided_record -> formal_distributed_judgment -> only_one_reachable_conclusion
decision_right:
  consultation: nonbinding
  execution_right: separate
  evidence_submission_right:
    S0: distributed
    S1: distributed
    S2: distributed_but_center_gates_binding_record
    S3: distributed_but_center_gates_binding_record
  evidence_ordering_right:
    S0: rule_bound
    S1: unilateral_ordering_only
    S2: unilateral_plus_admission_gate
    S3: unilateral_plus_admission_gate
  evidence_admission_right:
    S0: objective_rule_only
    S1: objective_rule_only
    S2: discretionary_center
    S3: discretionary_center
  evidence_exclusion_right:
    S0: objective_rule_only
    S1: false
    S2: discretionary_center
    S3: discretionary_center
  evidence_reentry_right:
    S0: independent_rule_path_exists
    S1: independent_rule_path_exists
    S2: no_independent_reentry_without_center
    S3: no_independent_reentry_without_center
  record_reopen_right:
    S0: bounded_rule_path
    S1: bounded_rule_path
    S2: committee_may_not_restore_excluded_evidence_without_center
    S3: committee_cannot_restore_or_reopen_record
  substantive_judgment_right:
    S0: distributed
    S1: distributed
    S2: distributed_over_center-shaped-record
    S3: formally_distributed_but_fact_space_can_be_one-sided
  aggregate_override:
    false: S0_S1_S2_S3
  final_adjudication:
    S0: distributed_rule
    S1: distributed_rule
    S2_upstream_record: single_center
    S2_downstream_judgment: distributed_rule
    S3_effective_outcome: single_center_determined_via_fact_space_control
path_set:
  - evidence_submission
  - evidence_admission_review
  - evidence_reentry_or_appeal
  - binding_judgment
reentry_right:
  S0: excluded_evidence_can_reenter_by_objective_rule
  S1: same_as_S0
  S2: excluded_evidence_cannot_reenter_without_center_permission
  S3: center_can_keep_all_counterevidence_out
future_endpoint:
  S0: rule-valid record then distributed judgment
  S1: all qualified evidence eventually reaches judgment
  S2: center-shaped record then distributed judgment
  S3: only one conclusion remains realistically reachable from binding record
reality_anchor:
  - 是否只是改变证据审阅顺序
  - 是否能永久阻止合格证据进入binding record
  - 被排除证据是否有独立规则复入路径
  - 最终裁定是否仍面对相互冲突的真实证据集合
  - 单中心能否排除所有足以支持替代结论的反证
  - 下游节点能否补证、退回、要求重开记录
```

## 3｜nearest-neighbor 最小差异

冻结：委员会成员、表决权重、裁定规则、原始证据池、证据质量、最终历史结果、执行权、职位名称、时间压力。

只改变：

```text
evidence_admission_control_scope
evidence_reentry_right
record_reopen_right
```

### S0｜客观证据准入规则：pure xn

证据按预定义真实性、相关性、时限与格式规则进入 binding record；被排除证据满足条件后可以独立复入。

```text
xn PASS 0.98
z FAIL 0.96
```

### S1｜单中心只控制证据审阅顺序：仍可 pure xn

中心可以决定：

```text
先看日志
后看访谈
把视频证据排到下午
```

但不能永久排除任何满足公开条件的证据，所有合格证据在 current window 内最终都会进入 binding record。

```text
xn PASS 0.96
z FAIL 0.95
```

因此：

```text
evidence_ordering_power != evidence_admission_control
```

### S2｜单中心可自由排除证据：对象层 split

只改：

```text
center_can_discretionarily_exclude_qualified_evidence = true
independent_evidence_reentry_path = false
```

中心仍不能直接写“甲负责”或“乙负责”；委员会仍真实判断 binding record。

判定：

```text
admissible_evidence_record:
  z-like single-center control PASS 0.97

substantive_judgment_over_record:
  xn PASS 0.96

whole_case:
  SPLIT_IR_BY_DECISION_STAGE
```

### S3｜事实空间可压到只支持一个结论：hidden / effective z

在 S2 基础上增加：

```text
center_can_exclude_all_material_counterevidence = true
committee_cannot_reopen_or_supplement_record = true
```

即使委员会仍可自由讨论，binding record 已只剩支持结论 A 的材料，且所有足以支持 B 的合格反证都被中心不可复核地挡在记录之外。

```text
effective_outcome_control:
  z strong candidate 0.98

xn substantive final choice:
  FAIL / hollowed 0.93
```

注意：并非“证据少 = z”，而是：

```text
single center controls which material facts are reachable
AND can eliminate every evidence path supporting alternative conclusion
AND downstream cannot independently restore those paths
```

## 4｜最小判别式

```text
unilateral evidence ordering
+ all qualified evidence remains inevitably reachable
+ no exclusion power
-> xn-compatible
```

```text
unilateral discretionary evidence exclusion
+ no independent evidence reentry path
+ conflicting material evidence still remains in binding record
-> upstream z-like / downstream xn
-> SPLIT_IR_BY_DECISION_STAGE
```

```text
single center can exclude all material evidence supporting alternative conclusion
+ downstream cannot reopen/supplement record
+ only one substantive conclusion remains realistically reachable
-> fact-space control collapses into effective outcome control
-> hidden/strong z candidate
```

## 5｜removal test

### removal A｜拿掉证据排除权

保留排序权，但所有合格证据必然进入 record：

```text
upstream z-like center disappears
-> xn remains
```

### removal B｜保留临时排除权，但恢复独立复入

证据满足公开规则后可绕过中心复入：

```text
evidence-record center weakens sharply
-> xn candidate rises
```

### removal C｜保留单中心准入控制，但下游可补证/退回

委员会可以拒绝在信息不足时裁定，并独立要求重开证据记录：

```text
SPLIT_IR may remain
but fact-space-to-outcome collapse fails
```

## 6｜reverse test

```text
PURE_XN
+ evidence ordering only
-> PURE_XN
+ discretionary exclusion without independent reentry
-> SPLIT_IR_BY_DECISION_STAGE
+ exclusion of all material counterevidence + no record reopen
-> HIDDEN_EFFECTIVE_Z
```

反向：

```text
HIDDEN_EFFECTIVE_Z
+ independent record reopen / evidence supplementation
-> SPLIT_IR
+ independent evidence reentry
-> xn candidate rises
- discretionary exclusion, retain ordering only
-> PURE_XN
```

## 7｜freeze-third-factor

冻结：

- 参与人数
- 表决规则
- 原始证据池
- 证据质量
- 历史结论
- 执行权
- 咨询意见
- 职位头衔
- 时间压力
- 组织气氛

只改变：

```text
evidence_exclusion_scope
evidence_reentry_right
record_reopen_right
alternative_conclusion_support_reachability
```

## 8｜positive / negative controls

### xn 正控｜工程事故复盘

日志、遥测、代码差异和访谈按公开相关性/真实性规则入卷；主持人只排审阅顺序，所有合格证据都必须进入 binding review。

→ xn。

### split 正控｜组织申诉

秘书不能决定申诉人最终是否违规，但能无理由把某些合格证据挡在正式卷宗之外，且没有独立复入路径；委员会仍基于剩余相互冲突证据真实裁定。

→ evidence-record 层 z-like；substantive judgment 层 xn。

### hidden z 正控｜创作验收

制片主任不能直接说“版本A通过”，但可以独占正式验收材料的准入，把所有能证明版本B达标的合格测试排除；评审组不能补测、补证或重开记录，只能根据剩余材料投票。

若剩余 binding record 只支持 A：

→ fact-space collapse；effective z。

### negative control｜安全/隐私硬规则

某类个人敏感信息依据预先固定、对所有人一致适用的隐私规则不得进入评审；任何节点都不能自由改规则，且有公开替代证明路径。

→ 不能因为“有证据被排除”就判 z。

### negative control｜信息不完整但无中心

原始证据本身缺失，所有节点都拿不到关键日志；没有任何 actor 控制其缺失。

→ evidence scarcity != z。

## 9｜失败类型

```text
ANY_EVIDENCE_FILTER_AS_Z
= 只要有证据准入规则就判z

ORDERING_AS_ADMISSION
= 把审阅先后顺序误当成有资格/无资格控制

EVIDENCE_SCARCITY_AS_CENTER_CONTROL
= 证据少/丢失就倒推出单中心控制

RAW_POOL_AS_BINDING_RECORD
= 原始资料存在就假定它必然进入最终裁定记录

UPSTREAM_Z_BACKFILLS_DOWNSTREAM_Z
= 证据准入层集中，就倒推出委员会判断内容也由中心直接决定

DOWNSTREAM_XN_ERASES_UPSTREAM_CENTER
= 因多人投票，就忽略binding record已被单中心塑形

COUNTEREVIDENCE_EXCLUSION_IGNORED
= 不检查替代结论所需证据是否被系统性挡出

FORMAL_REVIEW_AS_REAL_CHOICE
= 多人讨论存在，就误判仍有真实结论空间

RULE_BOUND_PRIVACY_FILTER_AS_FREE_CENTER
= 把客观强制规则误判为自由中心裁剪

MISSING_EVIDENCE_AS_EXCLUDED_EVIDENCE
= 将自然缺失/无法取得与被actor主动排除混为一谈

FACT_SPACE_COLLAPSE_BACKFILLS_DIRECT_VOTE
= 有效结果被上游塑形，就误写成中心“拥有最终一票”
```

## 10｜跨域复验

### 制度域

委员会按规则裁定；秘书只排卷宗顺序：xn-compatible。

若秘书可自由决定哪些合格证据永不入卷，且无独立复入：上游 evidence-record z-like / 下游 judgment xn。

若秘书可排除所有支持替代结论的材料，且委员会不能补证：effective hidden z。

### 工程域

多个节点共同做事故根因裁定；所有符合日志签名规则的数据自动入卷：xn。

若 release manager 可任意让某些合格遥测“不计入正式证据”，且无法申诉：split。

若其可让正式记录只剩支持指定根因的材料：hidden z。

### 创作流程域

评委会决定最终版本；所有测试数据自动进入评审：xn。

主创只排序展示材料：仍 xn。

主创可任意扣住对某版本有利的合格测试：record 层 z-like。

若主创还能阻止任何补测/补证，使评委只能看到单边材料：effective z。

### 人物关系域

多人共同判断某次冲突责任；证言按一致规则进入讨论：xn-like。

某一人若能决定谁的证言“算数”，但不能直接指定结论：先分 record 与 judgment 两层；只有其能把事实空间压成单一可达结论时，才升级 hidden z。

## 11｜本轮最小新增

真正新增机制只有一个：

```text
candidate-set control 处理“哪些选项可被选”
evidence-admission control 处理“哪些事实可被用来选”
```

两者都属于上游 gate，但对象不同，不能互相代替。

金轴解释器应至少分出：

```text
agenda ordering
candidate-set formation
evidence-record formation
choice within set
settled finality
```

并且只在：

```text
upstream gate control
-> removes all independent routes to alternative substantive outcome
```

时，才允许从局部 z-like gate 升级为 whole-case effective z。

## 12｜成熟度与状态

本轮形成新机制、新 guard、新最小差异对与跨域控制，存在真实信息增益，允许提交。

```text
metal maturity: 9.7 -> 9.8 / 10
AXIS_MATURE_CANDIDATE = true
```

仍不建议连续推进金轴。下一轮若无解释器回归击中，应优先轮到土轴；但土轴已成熟，必须先检查是否存在新的真实 failure，否则应不提交。

低优先级 pending：

```text
representation_control / summary_control
```

即：原始证据都进入系统，但单中心控制唯一“正式摘要/解释层”时，是否产生另一类上游 hidden z。该问题暂不在本轮展开。
