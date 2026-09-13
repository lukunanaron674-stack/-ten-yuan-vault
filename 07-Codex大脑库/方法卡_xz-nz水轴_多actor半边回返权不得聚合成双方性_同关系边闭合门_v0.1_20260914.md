---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-14
updated: 2026-09-14
research_slot: multi-actor-bilateral-reentry-closure
canonical_change_required: false
---

# xz ↔ nz 水轴方法卡｜多 actor 半边回返权不得聚合成双方性：同关系边闭合门 v0.1

## 0｜本轮只解决一个问题

现有水轴已经区分：xz 看 endpoint-governed return-space narrowing；nz 看对象特异、曾现实成立、现实退出自由、现实返回路径、回来后的重新接近/修复与双方性。

本轮只处理一个尚未显式锁住的解释器风险：

> 当一个多 actor 结构里，A 拥有“申请回来”的权利，B 拥有“接受”的权利，C 拥有“恢复资源/关系位置”的权利，但这些权利并不闭合在同一条关系边或同一可执行返回事务上时，能不能把它们聚合成 stable nz？

结论：不能。

新增：

```text
WATER-BILATERAL-SAME-EDGE-CLOSURE-GATE-v0.1
WATER-NO-CROSS-ACTOR-RIGHT-AGGREGATION-v0.1
WATER-REENTRY-TRANSACTION-CLOSURE-GATE-v0.1
```

核心式：

```text
request_right(A)
+ accept_right(B)
+ restore_right(C)
≠ stable_nz(A↔B)
```

除非这些权利在同一个 tested object / relation edge / current window 上组成真实可执行闭环。

---

## 1｜完整 IR

本轮采用三方协作关系的结构化压力测试，不冒充外部事实。

```yaml
actor:
  returning_side: 创作者A
  counterpart: 制作组B
  resource_gatekeeper: 平台C

object:
  relation_R: A↔B的对象特异合作关系

object_layer:
  tested: bilateral_reentry_and_repair_space_of_R

current_window:
  A退出合作
  -> A申请回返
  -> B可表达接受
  -> C决定是否恢复必要项目权限
  -> 是否真实回到R并继续修复

changed_variable:
  reentry_transaction_closure:
    S0: fragmented_across_unclosed_actor_edges
    S1: rights_close_on_same_relation_transaction

relation_source:
  S0:
    A有申请权
    B有接受意向/接受权
    C独立控制恢复R所必需的项目权限
    C无义务因A/B互相同意而恢复
  S1:
    A申请
    -> B可自由接受/拒绝
    -> 被接受后必要权限按同一关系规则现实恢复
    -> A重新进入R并可继续修复

relation_shape:
  S0:
    A -> request -> B
    B -> accept -> A
    C -X-> required_access
    no executable closure to relation_R
  S1:
    A -> request
    -> B bilateral accept/refuse
    -> same-transaction access restoration
    -> relation_R resumes

decision_right:
  A:
    request_or_decline_reentry: true
  B:
    accept_or_refuse_A: true
  C:
    S0:
      independently_veto_required_access: true
      bound_by_A_B_acceptance: false
    S1:
      only_rule_bound_execution_after_valid_bilateral_acceptance: true

path_set:
  S0:
    - A_to_B_request_path
    - B_to_A_acceptance_path
    - separate_C_access_gate
  S1:
    - A_to_B_request_path
    - B_acceptance
    - same_transaction_access_restore
    - relation_R_repair_path

reentry_right:
  S0:
    request_right: nonzero
    counterpart_accept_right: nonzero
    executable_return_to_R: zero_or_unsecured
  S1:
    request_right: nonzero
    counterpart_accept_right: nonzero
    executable_return_to_R: nonzero
    bilateral_free_exit: preserved

future_endpoint:
  none_required_for_nz_test
  xz_not_inferred_from_failure_alone

reality_anchor:
  - R曾现实成立
  - A现实退出R
  - A确有申请回返权
  - B确有接受或拒绝位置
  - S0中C可独立阻断恢复R所必需条件
  - S0中A/B双方同意仍不能保证任何真实回返路径
  - S1中必要权限恢复与A/B有效接受闭合为同一可执行事务
  - S1中回返后存在继续接近/修复R的现实位置
```

## 2｜两端判定

### S0｜半边权利分散，但事务不闭合

```text
nz(relation_R): FAIL / insufficient 0.98
xz(relation_R): OFF / not evidenced 0.96
```

原因不是“第三方存在”，而是：

```text
A/B bilateral intent or permission
cannot itself execute return-to-R
```

如果解释器把 A 的 request、B 的 accept、C 的 resource control 各取一块，再拼成“双方性 + 返回路径 + 修复”，就是跨 actor / 跨关系边补证。

### S1｜同一返回事务闭合

```text
nz(relation_R): PASS 0.98
xz(relation_R): OFF / not evidenced 0.96
```

关键 changed variable：

```text
reentry_transaction_closure
```

而不是 actor 数量，也不是“有没有人同意”。

---

## 3｜最小判别式

```text
IF
  relation_R曾现实成立
  AND returning_side有现实退出自由
  AND counterpart在同一R上有真实接受/拒绝位置
  AND acceptance能够触发或进入一条现实可执行的R回返路径
  AND necessary third-party gates are rule-bound inside the same transaction
  AND return后存在对R的继续接近/修复位置
THEN
  stable/active nz candidate
```

反之：

```text
IF
  request/accept/restore rights
  are distributed across actors
  BUT no single executable transaction closes back onto the same tested relation_R
THEN
  nz = insufficient
```

最短版：

> 双方性不是“系统里凑齐两边的人”，而是“同一关系边上能闭合一次真实回返事务”。

---

## 4｜nearest-neighbor 最小差异对

冻结：

```text
A/B/C
关系R历史
A退出事实
A申请权
B接受/拒绝权
C持有必要权限
情绪
职业
项目重要性
最终愿望
```

只改：

```text
C的必要权限恢复是否被绑定进A/B有效接受后的同一回返事务
```

### Pair A｜未绑定

```text
A申请 -> B接受
C仍可任意拒绝必要权限
```

结果：

```text
nz FAIL / insufficient 0.98
```

### Pair B｜规则绑定

```text
A申请 -> B接受
满足既定条件后C必须恢复必要权限
A真实回到R并可继续修复
```

结果：

```text
nz PASS 0.98
```

---

## 5｜removal

### Removal A｜拿掉 B 的自由接受/拒绝权

即便 C 自动恢复权限，只要B没有现实关系位置：

```text
nz -> FAIL
```

说明基础设施开放不能替代双方性。

### Removal B｜拿掉 executable access restoration

保留 A/B 真诚双向同意，但无法回到原关系位置：

```text
nz -> FAIL
```

说明双方意愿不能替代现实返回路径。

### Removal C｜拿掉 repair/re-approach position

允许重新登录项目，但关系R不能恢复协作、回应或修复：

```text
nz -> insufficient
```

“进系统”不等于“回关系”。

---

## 6｜reverse

### Reverse A｜把独立第三方 veto 改为同事务规则执行

```text
fragmented rights
-> transaction closure
-> nz OFF/insufficient -> PASS
```

### Reverse B｜把规则执行重新改回第三方任意 veto

```text
transaction closure breaks
-> executable return becomes unsecured
-> nz PASS -> insufficient
```

### Reverse C｜第三方开另一条路径，但回到不同 object

如果 C 提供的是新项目 S，而不是原关系 R：

```text
new opportunity != reentry to R
nz(R) remains insufficient
```

防止对象漂移。

---

## 7｜freeze-third-factor

冻结：

```text
角色身份
上下级
感情亲密度
是否后悔
项目成败
是否最终选择回来
第三方是否善意
平台名称
流程快慢
```

只看：

```text
same tested relation edge
bilateral accept/refuse positions
necessary gate binding
executable return transaction
post-return repairability
```

---

## 8｜positive controls

### P1｜制度域

成员A退出协会B。章程规定A可申请、B委员会可自由批准/拒绝；批准后登记系统C必须按规则恢复会员资格，且A可重新参加同一协会活动。

```text
nz(A↔B membership relation): PASS
```

### P2｜工程域

服务A从集群B解绑。A可申请重新加入，B控制平面可接受/拒绝；一旦接受，证书服务C按同一事务签发必要凭证，A实际恢复到原集群关系。

```text
nz: PASS
```

### P3｜创作流程域

画师A退出制作组B，双方后来重新同意合作；资产平台C的权限恢复是该复归流程的规则步骤，完成后A能继续修改原镜头并处理遗留问题。

```text
nz: PASS
```

---

## 9｜negative controls

### N1｜双方都想回来，但第三方可任意卡死

```text
A wants return
B accepts
C may independently deny required access forever
```

```text
nz: insufficient
```

### N2｜三个人分别持有三块“看起来像回返”的权利

A能申请，B能发邀请，C能恢复资源，但三者对应的是不同对象/不同事务。

```text
rights inventory complete-looking
but relation-edge closure absent
=> nz FAIL
```

### N3｜第三方给了新位置

A与B旧关系已断，C让A进入另一个团队。

```text
real new path exists
but not return to same object-specific R
=> nz(R) FAIL
```

---

## 10｜失败类型与 guard

新增失败类型：

```text
FAILURE_CROSS_ACTOR_BILATERALITY_AGGREGATION
  从不同actor抽取半边权利，拼成不存在的双方性

FAILURE_RIGHT_INVENTORY_AS_EXECUTABLE_RETURN
  权利清单看似齐全，却没有任何可执行闭环

FAILURE_THIRD_PARTY_GATE_IGNORED_IN_NZ
  忽略恢复原关系所必需的独立第三方gate

FAILURE_NEW_OBJECT_PATH_AS_OLD_OBJECT_REENTRY
  新对象的进入路径倒灌成旧对象nz
```

新增 guard：

```text
GUARD_WATER_BILATERAL_EDGE_01
  nz bilateral evidence must be keyed by:
  tested_object + relation_edge + current_window

GUARD_WATER_BILATERAL_EDGE_02
  request/accept/restore evidence from different actor edges
  cannot be aggregated unless they form one executable reentry transaction

GUARD_WATER_BILATERAL_EDGE_03
  independent third-party veto over a necessary condition
  keeps executable_return unsecured
```

建议机器 ledger：

```yaml
reentry_transaction:
  tested_object: relation_R
  returning_actor: A
  counterpart_actor: B
  request_right: true
  counterpart_accept_refuse: true
  necessary_gates:
    - actor: C
      mode: independent_veto | rule_bound_execution
  closes_to_same_object: true | false
  executable_now: true | false
  post_return_repairable: true | false
```

---

## 11｜与 xz 的护栏

本轮不因为 nz 失败自动判 xz。

```text
nz FAIL
≠ xz PASS
```

若 C 的 veto 只是任意阻断，没有：

```text
future endpoint
+ directionally governed narrowing
+ convergence
+ critical approach
```

则 xz 仍然不足。

这保持水轴硬护栏：状态缺席不等于对端成立。

---

## 12｜成熟度与状态迁移

```text
water maturity:
9.9 -> 9.9 / 10
```

不抬到 10，因为本轮新增的是解释器级关系边闭合 guard，而不是 canonical 完结声明。

状态迁移：

```text
multi-actor bilaterality aggregation ambiguity
PENDING
-> CLOSED_BY_SAME_EDGE_TRANSACTION_GATE
```

继续：

```text
AXIS_MATURE_CANDIDATE = true
```

下一轮不应连续推进水轴；优先检查真实解释器回归。若没有新 failure，再轮转到仍有实际执行缺口的轴，而不是继续概念采矿。
