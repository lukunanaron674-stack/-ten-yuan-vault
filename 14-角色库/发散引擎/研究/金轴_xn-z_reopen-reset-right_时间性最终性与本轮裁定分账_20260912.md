---
type: ten-yuan-metal-axis-l4-research
axis: xn-z
status: research-only
created: 2026-09-12
source_main: 7771cb0431a4094351ba93c1d9d6588f0a314868
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
parent_evidence: 14-角色库/发散引擎/研究/金轴_xn-z_不对称端点如何重新收敛为pure-xn或pure-z_20260912.md
may_override_canonical: false
research_slot: reopen_reset_right_temporal_finality
---

# 金轴｜reopen/reset right：时间性最终性与本轮裁定必须分账

## 0｜本轮只解决一个问题

固定同一分布式裁定系统，某节点不能改变本轮 PASS/FAIL，也不能单独批准/否决，但可以撤销、重开或要求重审。

问题：`reopen_reset_right` 是否足以把整个结构判成 z？

本轮结论：

```text
不是自动 z。
```

必须先区分两个对象层：

```text
A. current_round_outcome
   = 本轮 PASS/FAIL 谁生成

B. settled_finality
   = 已生成结果能否沉淀为不可被单点无限重开的稳定最终状态
```

若单一节点只在预定义条件/次数/期限内触发重审，它仍可属于 xn 流程节点。

若单一节点不能指定 PASS/FAIL，却能无条件、无限次阻止任何结果沉淀为 final，则：

```text
current_round_outcome = xn
settled_finality = z-like single-center control
```

必须 `SPLIT_IR_BY_OBJECT_LAYER`，不得把时间性最终权倒灌成本轮实质裁定权。

新增 guard：

```text
REOPEN-RIGHT-NOT-SUBSTANTIVE-ADJUDICATION-GATE-v0.1
TEMPORAL-FINALITY-CONTROL-GATE-v0.1
```

## 1｜current criterion

```text
xn = 运行权/判断权分布到顺序、规则、记录、节点与流程
z  = 判断权与结构重心收束到单一最高中心或最终裁定点
```

rights ledger 必须至少分开：

```text
decision_right
execution_right
consultation
negative_veto
positive_authorization
aggregate_override
reopen_reset_right
final_adjudication
settlement_finality_control
```

## 2｜完整 IR

```yaml
actor: 生产发布许可系统
object: 当前版本发布许可
object_layer:
  primary: current_round_outcome
  secondary: settled_finality
current_window:
  round_open
  -> distributed_review
  -> PASS_or_FAIL_generated
  -> settlement_or_reopen
changed_variable:
  reopen_reset_scope_and_finality_control
relation_source:
  current_round_outcome: distributed_binding_nodes_plus_rule_aggregation
  settled_finality: inspect_who_can_prevent_result_from_becoming_stable
relation_shape:
  S0_xn_bounded_reopen:
    many_nodes -> rule_output -> bounded_rule_reopen
  S1_split_unlimited_reopen:
    many_nodes -> rule_output ; one_center -> unlimited_reopen
  S2_z_full_center:
    many_inputs -> one_center -> PASS_FAIL_and_reopen

decision_right:
  consultation: nonbinding
  execution_right: separate
  positive_authorization: distributed_in_S0_S1
  negative_veto: distributed_or_rule_bound_in_S0_S1
  aggregate_override: false_in_S0_S1
  reopen_reset_right:
    S0: bounded_by_trigger_count_or_deadline
    S1: unilateral_unconditional_unbounded
    S2: unilateral_unconditional_unbounded
  final_adjudication:
    S0: distributed_rule
    S1_current_round: distributed_rule
    S1_settled_finality: single_center
    S2: single_center
path_set:
  - binding_review_nodes
  - aggregation_rule
  - reopen_path
reentry_right:
  S0: new_round_only_when_rule_triggered
  S1: center_can_force_reentry_indefinitely
  S2: center_controls_reentry_and_terminal_result
future_endpoint:
  S0: rule_generated_result_eventually_settles
  S1: no_result_can_settle_without_center_ceasing_to_reopen
  S2: center_determines_both_result_and_settlement
reality_anchor:
  - 谁生成本轮PASS
  - 谁生成本轮FAIL
  - 谁能覆盖聚合结果
  - 谁能触发重开
  - 重开是否受客观条件/次数/期限约束
  - 某节点是否可以无限阻止结果沉淀为final
```

## 3｜nearest-neighbor 最小差异

冻结：节点数量、2-of-3 规则、审核材料、版本、风险等级、人员身份、PASS/FAIL 票型。

只改 `reopen_reset_right`。

### S0｜bounded reopen：pure xn

```text
2-of-3 生成 PASS/FAIL
重开仅在：
- 新证据出现
- 7日内
- 最多1次
- 触发条件可机器/规则验证
```

重开节点不能自由选择是否重开，也不能改聚合结果。

判定：

```text
xn PASS 0.98
z FAIL 0.96
```

### S1｜unlimited reopen：对象层 split

只改变：

```text
reopen_reset_right:
bounded -> unilateral + unconditional + unlimited
```

该节点仍然不能：

```text
单独PASS
单独FAIL
改票
改阈值
```

但它可以在每次结果形成后无条件要求重审，使任何结果都无法稳定沉淀。

判定：

```text
current_round_outcome:
  xn PASS 0.97
  z FAIL 0.94

settled_finality:
  z-like single-center control PASS 0.96

whole_case:
  SPLIT_IR_BY_OBJECT_LAYER
```

关键：这不是 `METAL_ASYMMETRIC_ENDPOINT_SPLIT` 的同义词。上一机制分的是 PASS/FAIL 两个结果方向；本机制分的是“结果如何生成”与“结果是否能最终沉淀”。

### S2｜full z

在 S1 基础上再加入：

```text
center_can_unilaterally_PASS = true
center_can_unilaterally_FAIL = true
or center_can_override_aggregation = true
```

判定：

```text
z PASS 0.99
xn FAIL 0.98
```

## 4｜最小判别式

```text
bounded reopen/reset
+ rule-triggered
+ finite count/deadline
+ cannot override substantive result
-> xn-compatible process node
```

```text
unilateral + unconditional + unlimited reopen
+ cannot choose PASS/FAIL
-> current-round xn remains possible
-> settled-finality becomes single-center controlled
-> SPLIT_IR_BY_OBJECT_LAYER
```

```text
same center controls
PASS/FAIL formation
+ settlement/reopen
-> pure z
```

因此：

```text
reopen_right != substantive_decision_right
```

但：

```text
unlimited_reopen_right
= real control over whether distributed decisions can ever become final
```

## 5｜removal test

### removal A

从 S1 删除“无限/无条件”，恢复为客观触发 + 有限次数：

```text
settled_finality single-center control disappears
-> pure xn returns
```

### removal B

保留无限重开，但删除该节点唯一性，把重开条件改成多个独立节点按规则共同触发：

```text
single-center finality control disappears
-> xn candidate
```

### removal C

删除 reopen right，但本轮 PASS/FAIL 仍由 2-of-3 生成：

```text
xn remains
```

证明 reopen 不是 xn 的必要条件。

## 6｜reverse test

```text
PURE_XN
+ 单节点无限无条件reopen
-> SPLIT_IR_BY_OBJECT_LAYER
+ 单节点取得PASS/FAIL覆盖权
-> PURE_Z
```

反向：

```text
PURE_Z
- PASS/FAIL覆盖权，保留无限reopen
-> current_round xn / settled_finality z-like split
- 无限reopen，改为有界规则重开
-> PURE_XN
```

## 7｜freeze-third-factor

冻结：

- 人员身份与职位
- 节点数
- 审核规则
- 票数
- 项目风险
- 最终实际上线与否
- 情绪、组织文化
- 执行权

只改变：

```text
reopen_reset_scope
reopen_trigger_source
reopen_count_limit
reopen_deadline
```

## 8｜positive / negative controls

### xn 正控｜工程变更控制

```text
重审只在新故障证据出现时触发
最多一次
14天后结果锁定
任何人不能任意重复重开
```

→ xn。

### split 正控｜创作审核

```text
评审委员会按规则选出最终版本
总监不能指定哪个版本胜出
但可以无限次说“重评”
且无需给出规则条件
```

→ 本轮选择权仍分布；最终沉淀权集中。

### z 正控｜组织许可

```text
委员会给意见
负责人既可批准/否决
又可撤销重开
```

→ z。

### negative control｜一次性法定复议

```text
某节点只能在法定期限内、满足明确条件时要求一次复议
```

→ 不能因“能重审”就判 z。

## 9｜失败类型

```text
ANY_REOPEN_AS_Z
= 只要有重审权就直接判 z

UNLIMITED_REOPEN_IGNORED
= 本轮投票很分布，忽略单点可无限阻止结果最终化

TEMPORAL_FINALITY_BACKFILLS_SUBSTANTIVE_DECISION
= 某节点控制最终沉淀，就倒推出它也决定本轮PASS/FAIL

SUBSTANTIVE_XN_ERASES_FINALITY_CENTER
= 因本轮由多人投票，就忽略最终沉淀被单点控制

BOUNDED_RULE_REVIEW_AS_FREE_CENTER
= 有条件、有次数限制的复议节点误判为单中心

ROLE_NAME_AS_REOPEN_POWER
= 因“总监/主席/管理员”名称倒推无限重开权

ACTUAL_REOPEN_COUNT_AS_RIGHT_SCOPE
= 只看现实重开了几次，不检查制度上能否无限重开
```

## 10｜跨域复验

### 工程域

同一变更请求由多节点规则裁定；质量节点只能在新增故障证据出现时一次重开：xn。

若项目负责人无需新证据即可无限重开，虽然不能指定技术结论，但所有结论能否沉淀取决于其停止重开：对象层 split。

### 创作流程域

委员会按规则投票选版本；主创只能基于预定义缺项触发一次返审：xn。

若主创不能直接指定胜出稿，却可无限要求“再来一轮”：版本选择是分布式，最终定稿权却向单中心收束。

跨域保持同变量：

```text
substantive outcome generation
vs
settlement finality control
```

## 11｜本轮裁定

```yaml
new_mechanism:
  - reopen_right_not_substantive_adjudication_gate
  - temporal_finality_control_gate
new_state:
  SPLIT_IR_BY_OBJECT_LAYER
minimum_difference_verified: true
nearest_neighbor_verified: true
removal_verified: true
reverse_verified: true
freeze_third_factor_verified: true
positive_negative_controls_verified: true
cross_domain_verified: true
l1_change_required: false
sync_debt_created: false
```

结论：

> `reopen_reset_right` 必须独立记账。受规则约束、有限次数的重开权可以完全兼容 xn；单一节点若拥有无条件无限重开权，即使不能指定 PASS/FAIL，也会在 `settled_finality` 对象层形成单中心控制。解释器必须拆 `current_round_outcome` 与 `settled_finality`，不能把一种权利冒充另一种。

## 12｜下一断点

下一次金轴轮到时优先压：

```text
单中心只拥有“议程设置/候选集裁剪权”，
但最终投票与裁定仍分布时，
是否构成 hidden z？
```

重点区分：

```text
agenda_control
candidate_set_control
substantive_final_adjudication
```

避免“谁决定能被投什么”与“谁决定最后选什么”互相倒灌。