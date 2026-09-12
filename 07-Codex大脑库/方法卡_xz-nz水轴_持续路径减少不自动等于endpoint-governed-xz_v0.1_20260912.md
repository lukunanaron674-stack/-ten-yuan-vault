---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-12
updated: 2026-09-12
research_slot: persistent-path-attrition-vs-endpoint-governed-xz
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_单次路径减少只记局部收窄不等于current-xz_v0.1_20260912.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_0到1合格路径不自动等于nz主动重建_v0.1_20260912.md
canonical_change_required: false
---

# xz ↔ nz 水轴方法卡｜持续路径减少不自动等于 endpoint-governed xz v0.1

## 0｜本轮只解决一个问题

已知上一轮已经锁定：

```text
一次 3 -> 2
≠ 自动 current xz
```

本轮继续压最小缺口：

> 如果真实路径确实连续 `3 -> 2 -> 1`，是否已经足够判 current xz？

结论：

```text
persistent_real_path_attrition
≠ automatically endpoint-governed_xz
```

只有路径减少同时表现为：

```text
future_endpoint 先取得结构地位
+ 当前过程越来越被该终点规定方向
+ 剩余路径不是随机幸存，而是在向同一终点/临界区汇流
+ 当前距离/窗口持续逼近该终点
```

才允许从“持续可逆性下降”升级为 current xz 强候选。

本轮新增 guard：

```text
PATH-ATTRITION-NOT-XZ-GATE-v0.1
ENDPOINT-GOVERNANCE-REQUIRED-GATE-v0.1
```

---

## 1｜current criterion

current canonical 仍按：

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异回返空间

xz:
  终点前置
  + 方向被未来规定
  + 真实路径/选择持续收窄
  + 路径汇流
  + 临界逼近

nz:
  对象特异
  + 曾现实成立
  + 自由退出/回返
  + 现实回返路径
  + 重新接近/修复
  + 双方性
```

因此“路径持续减少”只能命中 xz 主骨的一部分，不能独立替代“终点前置/未来规定方向”。

---

## 2｜完整 IR

本轮使用同一工程迁移系统的结构化压力测试，不冒充外部作品事实。

```yaml
actor: 平台迁移系统A
object: 旧生产状态S_old
object_layer: realistic_return_space_to_S_old

current_window:
  T0_three_paths
  -> T1_two_paths
  -> T2_one_path
  -> compare_T3_endpoint_bound

changed_variable:
  - independent_real_return_path_count
  - endpoint_binding_strength
  - path_convergence_to_same_future_endpoint
  - critical_approach

relation_source:
  attrition_case:
    unrelated_operational_failures_remove_paths
  xz_case:
    target_decommission_endpoint_progressively_invalidates_return_paths

relation_shape:
  A_attrition_only:
    path_A fails for storage reason
    path_B later fails for vendor reason
    path_C survives
    no single future endpoint explains the sequence

  B_endpoint_governed:
    decommission_date/compatibility cutoff already binds future
    -> old restore classes become invalid in scheduled sequence
    -> surviving routes increasingly depend on same shrinking compatibility window
    -> all remaining paths converge on one cutoff

decision_right:
  operator:
    may choose among currently valid paths
  external_constraints:
    attrition_case: independent unrelated causes
    xz_case: same endpoint-linked rule/time/compatibility boundary increasingly controls validity

path_set:
  T0:
    - snapshot_restore
    - traffic_switchback
    - legacy_image_redeploy
  T1:
    - traffic_switchback
    - legacy_image_redeploy
  T2:
    - legacy_image_redeploy

reentry_right:
  T0: three executable return classes
  T1: two executable return classes
  T2: one executable return class

future_endpoint:
  attrition_case:
    no_preexisting_single_endpoint
    remaining_path may persist indefinitely or new paths may later appear
  endpoint_governed_case:
    legacy_compatibility_cutoff
    binding_strength increases as cutoff approaches

reality_anchor:
  - 所有被计数的路径都必须独立、现实可执行，并返回同一S_old
  - attrition case 中每次路径死亡由互不相关原因造成
  - attrition case 中没有统一截止点、共同汇流区或越来越强的未来约束
  - endpoint-governed case 中同一个未来 cutoff 能解释路径为何按阶段失效
  - endpoint-governed case 中换路仍不能逃离同一个 cutoff
```

---

## 3｜nearest-neighbor 最小差异对

冻结：

```text
actor
object token
object_layer
T0/T1/T2 path count
3 -> 2 -> 1 的数量序列
路径均真实可执行
当前窗口长度
操作员能力
```

只改：

```text
endpoint_binding_strength
path_failure_cause_commonality
path_convergence
critical_approach
```

### Pair A｜真实持续减少，但没有 endpoint governance

```text
3 -> 2 -> 1
```

事实：

```text
A 因存储损坏消失
B 因供应商停服消失
C 仍可长期使用
没有共同截止点
没有一个未来终点解释两次减少
也没有证据表明 C 正被同一终点继续压缩
```

判定：

```text
persistent_reversibility_decline: PASS
current_xz_full: FAIL / insufficient
confidence: 0.96
```

### Pair B｜同样 3 -> 2 -> 1，但未来终点已控制当前

只增加：

```text
明确 legacy cutoff 已在前方
所有旧路径按同一兼容规则逐步失效
剩余路径的有效窗口越来越短
换路径仍只能走向同一 cutoff
```

判定：

```text
persistent_path_narrowing: PASS
endpoint_preposition: PASS
future_direction_governance: PASS
path_convergence: PASS
critical_approach: PASS
current_xz: STRONG CANDIDATE
confidence: 0.98
```

由此证明：

```text
path-count trajectory 相同
≠ xz 判定相同
```

真正的最小差异变量是：

```text
endpoint_governance
```

---

## 4｜最小判别式

```text
IF
real_path_count decreases across multiple windows
BUT
no future endpoint has prior structural status
AND path failures are causally independent
AND remaining paths do not converge toward a common cutoff/terminal zone
AND no critical approach is increasing

THEN
persistent reversibility decline = true
current xz = insufficient / false as full structure
```

```text
IF
future endpoint already constrains current choices
AND multiple real paths progressively disappear
AND alternative paths increasingly converge on same terminal zone
AND time/distance/opportunity to endpoint decreases

THEN
current xz = strong candidate
```

短式：

> **路一直变少，只证明可逆性一直下降；只有“为什么变少”被同一个前置未来终点持续解释，并且换路仍汇向它，才是 current xz。**

---

## 5｜removal test

### Removal A｜拿掉 endpoint

保留完整 `3 -> 2 -> 1`：

```text
path narrowing 仍成立
current xz 显著下降
```

### Removal B｜拿掉 path narrowing

保留明确未来 cutoff，但三条路径长期都真实可用：

```text
endpoint exists
but current xz 不足
```

说明“有终点”也不够。

### Removal C｜拿掉 convergence

路径虽然减少，但剩余路径分别通向不同长期稳定状态：

```text
xz strength 下降
```

### Removal D｜拿掉 critical approach

终点在理论上存在，但数年内不改变当前窗口、机会或路径有效性：

```text
current xz 不锁
```

---

## 6｜reverse test

从 endpoint-governed xz candidate 反向增加真实路径：

```text
1 -> 2 -> 3
```

如果新增路径：

```text
真正独立
可长期执行
能绕开原共同 cutoff
```

则：

```text
xz 必须下降
```

但如果新增的“新路径”仍在同一个 cutoff 前全部失效：

```text
surface path count rises
endpoint-governed convergence 未解除
```

则 xz 不应仅凭数量增加就自动归零。

这说明：

```text
path_count
≠ path_independence_from_endpoint
```

---

## 7｜freeze-third-factor

冻结以下因素，不得自行生成 xz：

```text
风险很高
损失很大
系统不可逆感强
运维人员焦虑
事故连续发生
路径数量已经很少
某个按钮写着 FINAL
某个日期被称为 deadline
```

只有这些因素真实改变：

```text
endpoint prior structural status
future-direction governance
real path convergence
critical approach
```

时，才进入 current xz 主证据账。

---

## 8｜positive / negative controls

### Positive control P1｜制度域

```text
执照将在固定法定日失效
不同延期/替代路线按同一法定窗口逐步失效
越接近日期，可合法操作的未来越少
所有路线最后都汇到“失效/退出”同一终点
```

→ current xz 强候选。

### Positive control P2｜人物关系域（结构化，不冒充具体作品）

```text
双方已明确约定最终永久分离日期
随着日期逼近，居住、财务、共同项目等现实回返路径逐步关闭
改走不同协调方式仍只能延缓而不能取消终点
```

→ 若现实事实均成立，xz 上升。

### Negative control N1｜工程随机故障

```text
3 -> 2 -> 1
每条路径因互不相关事故消失
最后一条可无限期稳定存在
```

→ persistent reversibility decline PASS；full xz FAIL。

### Negative control N2｜计划存在但不绑定当前

```text
未来“可能淘汰旧系统”
当前三条路径持续有效
无关闭计划、无临界逼近
```

→ 不能以 long-term plan 判 xz。

### Negative control N3｜数量减少但状态替代

```text
删除 A/B
同时新增 D/E
有效独立 endpoint classes 未减少
```

→ 连 path narrowing 都不成立。

### Reverse control R1｜新增绕开终点的真实路径

若原来 `3 -> 2 -> 1`，随后新增一个不受原 cutoff 影响的长期独立返回类：

```text
endpoint convergence broken
```

→ current xz 应显著下降。

---

## 9｜nearest-neighbor 排除

### xn

若路径减少只是规则、供应商、版本流程分别变化，首先是流程/节点事实；没有统一未来终点牵引时，不要倒贴 xz。

### z

一个 deadline/cutoff 只是节点；只有它开始持续规定当前方向并压缩真实未来，才上升为 xz。

### zx

如果是当前决策主动推出后果，重点是“现在把后果推出去”；不能因为后果越来越少就自动改判 xz。xz 要求未来终点反过来规定现在。

### nz

本轮不从路径减少反推 nz 是否曾成立；对象特异关系回返资格必须独立审计。

---

## 10｜失败类型

```text
PERSISTENT_DECREMENT_AS_FULL_XZ
连续3->2->1就自动判full xz

COUNT_TRAJECTORY_AS_ENDPOINT_GOVERNANCE
路径数量曲线被误当未来终点牵引

UNRELATED_FAILURES_AS_CONVERGENCE
互不相关的路径故障被包装成同一终点汇流

DEADLINE_LABEL_AS_ENDPOINT_BINDING
看到deadline一词就判终点前置

FUTURE_PLAN_AS_CURRENT_GOVERNANCE
未来计划存在就倒推当前已被它规定

LAST_PATH_AS_CRITICAL_APPROACH
只剩一条路就自动当临界逼近

NEW_PATH_COUNT_AS_XZ_ERASURE
新增一条表面路径就自动把xz归零，忽略它仍受同一终点控制

IRREVERSIBILITY_TREND_AS_DESTINY
持续不可逆化直接等同命运收束
```

---

## 11｜本轮新增 guard

```text
PATH-ATTRITION-NOT-XZ-GATE-v0.1
ENDPOINT-GOVERNANCE-REQUIRED-GATE-v0.1
```

机器规则候选：

```yaml
water_xz_endpoint_governance_gate:
  persistent_path_decrease_sufficient: false
  requires_for_strong_xz:
    - future_endpoint_prior_structural_status
    - current_direction_increasingly_constrained_by_endpoint
    - independent_real_paths_progressively_narrow
    - alternative_paths_converge_on_same_terminal_zone
    - critical_approach_increases
  outputs:
    attrition_only:
      persistent_reversibility_decline: true
      current_xz: insufficient
    endpoint_governed_convergence:
      current_xz: strong_candidate
```

---

## 12｜本轮判定

```yaml
axis: water
pair: xz-nz
question: does_persistent_real_path_narrowing_automatically_equal_current_xz
answer: no

attrition_only_case:
  path_count: 3_to_2_to_1
  persistent_reversibility_decline: true
  endpoint_governance: false
  current_xz: false_as_full_structure
  confidence: 0.96

endpoint_governed_case:
  path_count: 3_to_2_to_1
  endpoint_preposition: true
  future_direction_governance: true
  path_convergence: true
  critical_approach: true
  current_xz: strong_candidate
  confidence: 0.98

increment:
  new_mechanism: endpoint_governance_gate
  new_guard: persistent_path_attrition_not_full_xz
  new_minimal_pair: same_path_count_trajectory_different_endpoint_governance
```

---

## 13｜成熟度与下一断点

本轮后，水轴 xz 侧已经至少区分：

```text
single local decrement
persistent path attrition
endpoint-governed convergence
```

以及 nz 侧：

```text
contact only
procedure reopening
relationally executable reentry
repair / stable nz
```

研究层成熟度建议：

```text
9.3 -> 9.6 / 10
```

若后续解释器回归没有新失败，水轴可标记：

```text
AXIS_MATURE_CANDIDATE
```

剩余最高价值断点不再是继续堆路径正例，而是解释器级组合问题：

> 同一事件中同时存在 endpoint-governed xz 收窄与 object-specific nz 回返保护时，是否必须按 object_layer / current_window 分账，而不是把“还有一条回返关系”错误当成对 xz 的否定。
