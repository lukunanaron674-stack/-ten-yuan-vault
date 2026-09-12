---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-12
updated: 2026-09-12
research_slot: closed-to-narrow-nonzero-restoration-evidence-gate
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_closed-to-reopen_nz恢复门_v0.1_20260912.md
canonical_change_required: false
---

# xz ↔ nz 水轴方法卡｜0→1 合格路径不自动等于 nz 主动重建 v0.1

## 0｜本轮只解决一个问题

上一轮已经建立：

```text
CLOSED
→ CONTACT_ONLY
→ NARROW_NONZERO_RESTORABLE
→ OPEN / STABLE_NZ
```

并留下一个未闭合问题：

> 当 return-space 从 CLOSED 恢复到 NARROW_NONZERO 时，是否只要 `qualified_path_set: 0 -> 1` 就已经构成 nz 的主动“恢复/重建”？

本轮结论：

```text
qualified_path_set: 0 -> 1
≠ 自动 nz restoration evidence
```

必须再区分：

```text
PATH_REOPENING
vs
RELATIONAL_REENTRY_RESTORATION
```

只有当新增路径真实改变了同一对象特异关系的双方重入资格、现实回应能力与修复能力时，才计作 nz restoration evidence。

---

## 1｜current criterion

L1 v1.6：

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异回返空间
xz = 持续收窄
nz = 保存、恢复或重建
```

nz v2.0 对 stable nz 的主门仍是：

```text
对象特异
+ 双方曾真实成立
+ 自由退出/重新进入
+ 现实可调用回返路径
+ 重新接近/修复能力
+ 双方性
```

因此本轮不把“出现一条形式上合格的程序路径”直接等同于“关系本身开始被修复”。

---

## 2｜完整 IR

本轮使用同一对旧合作伙伴 A/B 的结构化压力测试，不冒充外部作品事实。

```yaml
actor:
  side_A: 合作者A
  side_B: 合作者B
  external_mediator: 行业调解机构M

object: A↔B 原对象特异合作关系
object_layer: bilateral_real_reentry_and_repair_position

current_window:
  S0_closed: 原合作关系现实关闭
  S1_procedural_path_reopened: M新增可受理申请路径
  S2_relational_eligibility_reactivated: 双方均取得真实重入资格并愿意回应
  S3_repair_exercisable: 双方可现实重新共同处理并修复

changed_variable:
  - qualified_path_count
  - bilateral_reentry_eligibility
  - reciprocal_response_capacity
  - repair_capacity

relation_source:
  S0: no_qualified_reentry_path
  S1: external_procedure_exists_but_relation_rights_not_yet_reactivated
  S2: object_specific_bilateral_reentry_rights_become_exercisable
  S3: reentry_and_repair_are_realistically_callable

relation_shape:
  S0: CLOSED
  S1: PROCEDURAL_REOPEN_ONLY
  S2: NZ_RESTORATION_EVIDENCE
  S3: STRONG_NZ_RESTORATION / OPEN

decision_right:
  S0: no_current_reentry_decision_position
  S1: M_can_accept_case_but_cannot_create_mutual_relationship_consent
  S2: A_and_B_each_retain_free_accept_refuse_right
  S3: A_and_B_can_reenter_and_repair_without_coercion

path_set:
  S0:
    qualified_reentry_path: 0
  S1:
    procedural_mediation_path: 1
    relationally_executable_reentry_path: 0
  S2:
    procedural_mediation_path: 1
    relationally_executable_reentry_path: 1
  S3:
    mediated_reentry: 1
    direct_reentry_or_joint_work_path: 1

reentry_right:
  S0: 0
  S1: procedure_access_only
  S2: bilateral_nonzero_and_exercisable
  S3: bilateral_verified

future_endpoint:
  independent_xz_audit_required
  no_xz_backfill_from_any_reopening

reality_anchor:
  - S0 双方原合作位置已关闭
  - S1 M现实存在并可受理，但A或B仍可处于“不具备/不愿恢复原合作位置”的状态
  - S2 双方都能自由同意或拒绝，且同一原合作位置的重入资格现实可执行
  - S3 双方已经能够恢复共同处理、相互回应与冲突修复
```

---

## 3｜nearest-neighbor 最小差异

冻结：

```text
actor A/B
object token
历史共同关系
外部调解机构M
程序名称
时间长度
冲突原因
社会身份
情绪强度
```

只改变：

```text
bilateral_reentry_eligibility
reciprocal_response_capacity
repair_capacity
```

### Pair A｜S1 程序重开，但 nz restoration evidence 仍 FAIL

```text
qualified procedural path: 0 -> 1
M可以受理
但A/B并未同时取得原关系位置的真实重入资格
或一方明确不参与
或回来后不存在共同处理/修复能力
```

判定：

```text
return-space topology: CLOSED -> PROCEDURAL_REOPEN_ONLY
nz restoration evidence: FAIL
confidence: 0.97
```

### Pair B｜S2 同一条路径变成关系上真实可执行

只改变：

```text
A/B双方都可自由接受/拒绝
+ 原对象特异关系位置的重入资格生效
+ reciprocal response > 0
+ repair capacity > 0
```

判定：

```text
return-space: NARROW_NONZERO
nz restoration evidence: PASS
stable nz: candidate / recovering, not automatically full endpoint
confidence: 0.96
```

因此真正的最小开关不是：

```text
path_count 0 -> 1
```

而是：

```text
relationally_executable_path 0 -> 1
```

---

## 4｜最小判别式

```text
IF
qualified_path_count increases
BUT
bilateral_reentry_eligibility = 0
OR reciprocal_response_capacity = 0
OR repair_capacity = 0

THEN
return-space reopening only
nz restoration evidence = FAIL
```

```text
IF
same object-specific relation
AND qualified path is realistically executable
AND both sides retain free accept/refuse right
AND bilateral response is nonzero
AND repair capacity is nonzero

THEN
nz restoration evidence = PASS
stable nz = recovering candidate
```

进一步：

```text
actual successful reentry
+ renewed mutual handling
+ verified repair after conflict
→ strong / stable nz rises
```

---

## 5｜removal test

### 拿掉调解机构名称

保留现实重入资格、双方性、修复能力：

```text
nz restoration evidence 仍可成立
```

说明机构/程序名不是主骨。

### 拿掉 bilateral reentry eligibility

即使调解程序仍完整：

```text
nz restoration evidence 立即下降
```

### 拿掉 repair capacity

双方能重新坐到同一张桌子，但回来后无法恢复可信共同处理：

```text
最多 reentry access
不能锁 stable nz restoration
```

---

## 6｜reverse test

从 S2 只拿掉：

```text
一方自由同意资格
或 reciprocal response
或 repair capacity
```

则：

```text
NARROW_NONZERO relational restoration
→ PROCEDURAL_REOPEN_ONLY
```

即使原程序仍在，nz restoration evidence 必须下降。

反方向，从 S1 只增加：

```text
bilateral eligibility
+ reciprocal response
+ repair capacity
```

程序路径数量保持 1 不变，但判定必须：

```text
nz restoration evidence: FAIL -> PASS
```

这证明 path count 不是充分变量。

---

## 7｜freeze-third-factor

冻结以下因素，不得自行生成 nz restoration：

```text
中介专业度
程序正式程度
是否有合同模板
是否有公开网页
双方曾经多亲密
悔恨强度
共同利益
共同财产
外界希望双方和好
时间过去多久
```

只有它们真实改变：

```text
object-specific reentry eligibility
bilaterality
reciprocal response
repair capacity
```

时，才能进入本轮 nz 证据账。

---

## 8｜positive / negative controls

### Positive control P1｜同一路径数量不变，但关系资格恢复

```text
mediation paths = 1 -> 1
bilateral eligibility = 0 -> 1
reciprocal response = 0 -> >0
repair capacity = 0 -> >0
```

→ nz restoration evidence PASS

### Negative control N1｜路径数量增加，但只是行政入口

```text
qualified-looking forms = 0 -> 2
bilateral eligibility = 0
repair capacity = 0
```

→ nz restoration evidence FAIL

### Negative control N2｜一方可申请，另一方无自由回应位置

```text
application path = 1
unilateral will = 1
bilateral reentry right = 0
```

→ 不能判 nz restoration

### Negative control N3｜双方都能回来，但只能恢复名义角色

```text
formal title restored
shared work / trust / repair = 0
```

→ 检查 x并z 形式壳；stable nz 不锁

### Reverse control R1｜真实 nz restoration 后程序入口关闭

若双方已经形成直接现实回返与修复路径：

```text
external mediation path: 1 -> 0
bilateral direct reentry: 1
repair capacity: >0
```

→ nz restoration evidence 不应因第三方程序消失而自动归零

这进一步证明：

```text
程序路径 ≠ nz 本体
```

---

## 9｜nearest-neighbor 排除

### xn

存在申请、仲裁、顺序、节点，只说明流程可运行；流程是否真正恢复对象特异双方关系资格，需要独立审计。

### z

某负责人批准“可以重新合作”只是裁定点；若A/B没有双方自由重入与修复能力，不能借批准生成 nz。

### x并z

公开入口、账号、合同壳可使第三方识别或进入制度接口；若不能恢复原双方关系位置，属于接口外化，不是 stable nz。

### n

重新接纳并承担对方负荷可形成 n；若回返依赖强制或不能自由再离开，不可倒推 nz。

### xz

本轮只研究恢复端。任何 reopening 都不得反向证明此前一定存在 xz；此前是否为持续收窄必须独立审计。

---

## 10｜失败类型

```text
PATH_COUNT_AS_NZ_RESTORATION
0→1条路径就直接判nz恢复

PROCEDURE_ACCESS_AS_RELATION_REENTRY
能提交申请就当成能回原关系位置

MEDIATOR_POWER_AS_BILATERAL_RIGHT
中介有权受理就倒推双方有重入权

UNILATERAL_APPLICATION_AS_BILATERALITY
一方愿意申请就当成双方性恢复

FORMAL_REINSTATEMENT_AS_REPAIR
称谓/职位恢复就当成可信接近与修复恢复

REENTRY_WITHOUT_REPAIR_AS_STABLE_NZ
能回来但无法恢复共同处理，仍错误锁stable nz

THIRD_PARTY_PATH_AS_NZ_ESSENCE
把中介路径本身误当nz本体

NZ_RESTORATION_BACKFILLS_XZ
看到恢复就反推此前一定是xz收窄
```

---

## 11｜本轮新增 guard

```text
RELATIONALLY-EXECUTABLE-PATH-GATE-v0.1
```

最短版：

> **水轴中，0→1 条“合格路径”只有在它同时恢复同一对象特异关系的双方现实重入资格与修复能力时，才计 nz restoration evidence；否则只记 return-space / procedure reopening。**

机器规则候选：

```yaml
water_nz_restoration_gate:
  object_specific_relation_required: true
  path_count_increase_sufficient: false
  requires:
    - relationally_executable_reentry_path
    - bilateral_free_accept_refuse
    - reciprocal_response_capacity
    - repair_capacity_nonzero
  outputs:
    procedure_only:
      nz_restoration_evidence: false
    relational_reentry_restored:
      nz_restoration_evidence: true
      stable_nz: candidate_until_endpoint_strength_verified
```

---

## 12｜本轮判定

```yaml
axis: water
pair: xz-nz
question: does_closed_to_one_qualified_path_automatically_equal_nz_reconstruction
answer: no

S1_procedural_reopen:
  current_xz: not_inferred
  current_nz_restoration_evidence: false
  confidence: 0.97

S2_relationally_executable_reentry:
  current_xz: not_inferred
  current_nz_restoration_evidence: true
  stable_nz: recovering_candidate
  confidence: 0.96

increment:
  new_mechanism: relationally_executable_path_gate
  new_guard: path_count_not_sufficient_for_nz_restoration
  new_state_boundary: procedure_reopen_vs_relation_reentry_restoration
  information_gain: substantive
```

---

## 13｜对现有研究的影响

本轮不修改 canonical。

它只把上一轮：

```text
CLOSED -> NARROW_NONZERO_RESTORABLE
```

再细分成：

```text
CLOSED
→ PROCEDURAL_REOPEN_ONLY
→ RELATIONALLY_EXECUTABLE_NARROW_NONZERO
→ OPEN / STABLE_NZ
```

因此以后水轴解释器必须同时维护：

```text
path topology ledger
relationship-rights ledger
repair ledger
```

不能只维护 path count。

---

## 14｜下一断点

水轴的 nz 恢复门已经基本闭合。下一高价值问题应转向 xz 侧的一个对称风险：

> 当 path topology 持续收窄，但 `future_endpoint` 并没有越来越强地规定当前方向时，是否只能记“持续可逆性下降”，而不能升格为 current xz？

这将检验：

```text
persistent_path_narrowing
≠ automatically endpoint-governed xz
```

若该问题也闭合，水轴可进入 `AXIS_MATURE_CANDIDATE` 评估，而不是继续无限采矿。
