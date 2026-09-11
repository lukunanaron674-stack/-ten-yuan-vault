---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-boundary-guard
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-11
updated: 2026-09-11
source_main: fff7065a5c7547a1af0fde34f9d5e23d92068557
research_slot: healthy-shared-dependency-convergence-vs-active-xz
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
related_refs:
  - 07-Codex大脑库/xz-nz水轴研究总纲_20260904.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_共享依赖导致名义多路实际归零_v0.1_20260911.md
---

# xz↔nz 水轴｜健康共享依赖的路径汇流，不等于 current xz v0.1

## 0｜本轮只解决一个问题

前序已经确认：

```text
A/B/C 三个名义入口
若都依赖同一个已经失效的底层条件 D
=> effective path_set 可以直接归零
```

但还留下一个更容易误判的问题：

> 如果 A/B/C 已经全部汇到同一个底层依赖 D，但 D 当前健康、稳定、没有关闭窗口，仅仅因为“所有路都经过 D”，能不能直接判 current xz？

本轮结论：**不能。**

这只证明：

```text
path topology has converged
+ redundancy has fallen
+ future fragility may be concentrated
```

但还没有证明：

```text
current reversible space is continuing to narrow through time
```

因此新增 L4 护栏：

```text
HEALTHY-CONVERGENCE-NOT-XZ-GATE-v0.1
```

本卡不修改 L1/L2 canonical，只补 current xz 的解释器边界纪律。

---

## 1｜current criterion

current canonical 水轴：

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异回返空间
xz = 持续收窄
nz = 保存、恢复或重建
```

current xz v2.2 主骨仍要求大部分：

```text
终点前置
+ 未来规定方向
+ 真实路径/选择持续收窄
+ 路径汇流
+ 临界逼近
```

其中“路径汇流”是主骨之一，但不是单独充分条件。

必须区分：

```text
structural convergence
vs
temporal narrowing trajectory
```

前者描述当前拓扑长什么样；后者描述 current_window 内可逆空间是否继续变小。

---

## 2｜完整 IR｜同一工程对象三态最小差异

这是结构化工程控制，只用于解释器压力测试，不冒充外部历史事实。

```yaml
actor: 旧系统迁移与回退体系
object: 同一个旧版本生产状态
object_layer: 返回旧生产状态的现实可逆空间
current_window: 迁移后期的三个相邻阶段
changed_variable: temporal_viability_of_single_effective_reentry_class
relation_source: rollback_dependency_topology
relation_shape: nominal_multi_interface_converges_to_one_effective_dependency_class
decision_right: not_primary_variable
path_set:
  nominal:
    - one_click_rollback
    - manual_restore
    - disaster_recovery_switch
  dependency_graph:
    one_click_rollback: [legacy_snapshot_D]
    manual_restore: [legacy_snapshot_D]
    disaster_recovery_switch: [legacy_snapshot_D]
  effective_independent_classes:
    - legacy_snapshot_D_restore_class
reentry_right:
  state_A: executable_stable
  state_B: executable_but_expiring
  state_C: zero_after_expiry_or_failure
future_endpoint: new_platform_only
reality_anchor:
  - 三个名义入口都必须通过同一份 D 才能恢复相同旧生产状态
  - 判断只看 D 是否现实可执行以及其可执行窗口是否在 current_window 内持续缩短
  - UI 数量、按钮名称、风险感、管理层态度均冻结
```

### State A｜D 健康且无收窄轨迹

```text
A/B/C -> D
D healthy
D 无已知到期
D 无容量衰减
D 无关闭倒计时
D 可重复实测恢复旧状态
```

此时：

```yaml
nominal_path_count: 3
effective_independent_path_count: 1
path_convergence: true
reentry_right: executable_stable
active_narrowing: false
critical_approach: false
current_xz: FAIL_as_full_current_xz
confidence: 0.98
```

允许记录：

```text
single-point fragility / low redundancy
```

但不得把“脆弱”倒贴成 current xz。

### State B｜D 仍健康，但真实退出窗口正在收窄

只改变一个变量：

```text
D 将在确定时间 T 被销毁/失效
或
D 的恢复兼容窗口随版本推进持续缩短
```

并且该变化现实可验证，例如：

```text
T-14 days: D 可恢复
T-7 days: 部分兼容层已退出
T-2 days: 仅最后恢复环境可用
T: D 不再可执行
```

此时：

```yaml
path_convergence: true
reentry_right: still_positive_but_shrinking
future_endpoint: new_platform_only_is_prepositioned
active_narrowing: true
critical_approach: true
current_xz: PASS_strong_candidate
confidence: 0.97
```

### State C｜D 已经失效

```text
D fail / D expires
=> effective_path_set = 0
```

此时：

```yaml
complete_path_exhaustion: true
reentry_right: zero
current_xz_exhaustion_phase: PASS_if_preceded_by_B_like_trajectory
confidence: 0.98
```

但若 C 是一次毫无前序收窄轨迹的突发故障，则只能锁定 complete exhaustion，不应事后捏造此前已经存在完整 xz trajectory。

---

## 3｜最近邻最小差异

冻结：

```text
actor
object
object_layer
A/B/C 三个名义入口
共享依赖 D
future_endpoint = new_platform_only
系统风险等级
团队
UI
```

只改变：

```text
temporal_viability_of_D
```

### Pair 1｜健康汇流但非 current xz

```text
D healthy
D stable
D no countdown
D repeatedly executable
```

→ `path_convergence = true`
→ `current_xz = FAIL`

### Pair 2｜健康但正在逼近关闭

```text
D healthy now
but expiry/compatibility window is objectively shrinking
```

→ `path_convergence = true`
→ `active narrowing = true`
→ `critical approach = true`
→ `current_xz rises`

最小差异不是：

```text
有没有共享依赖
```

而是：

```text
共享依赖的现实可执行窗口是否正在 current_window 内持续缩短
```

---

## 4｜removal test

### 从 State A 拿掉“单点故障风险”语言

只保留：

```text
A/B/C -> D
D stable and executable
```

没有持续收窄轨迹，current xz 仍不成立。

### 从 State B 拿掉灾难感

把“快完蛋了”全部删掉，只保留：

```text
D 可执行窗口从 14 天 -> 7 天 -> 2 天 -> 0
```

current xz 仍成立。

说明判据来自现实时间窗与路径容量变化，不来自危险气氛。

---

## 5｜reverse test

对 State B 最小反向：

```text
原：D 的兼容窗口持续缩短
改：延长 D 的保存期并恢复一个独立 D2
```

若实测：

```text
effective_path_classes: 1 -> 2
expiry_window: shrinking -> stable/expanded
```

则：

```text
current xz should fall
nz restoration evidence should rise
```

如果模型仍因“最终未来还是要迁移”继续判强 xz，说明它在看终局标签，不是在看 current reversible space。

---

## 6｜freeze-third-factor

冻结以下因素：

- 单点故障听起来是否危险；
- 管理层是否担心；
- 系统是否关键；
- D 是否昂贵；
- 迁移最终是否成功；
- 名义入口数量；
- 操作者是否紧张；
- 是否使用“最后一条路”“唯一备份”等语言。

只允许改变判定的变量：

```text
D 当前是否可执行
D 可执行窗口是否持续缩短
独立有效 path class 是否持续减少
future_endpoint 是否因此不断取得更强现实约束
是否出现临界逼近
```

---

## 7｜positive / negative controls

### negative control｜健康共享依赖

```text
A/B/C -> D
D stable
D repeatedly executable
no expiry / no degradation
```

判定：

```text
low redundancy = true
current xz = false
```

### positive control｜明确时间窗收窄

```text
A/B/C -> D
D current executable
but restore window: 14d -> 7d -> 2d -> 0
new-platform-only endpoint increasingly binding
```

判定：

```text
current xz = strong candidate
```

### negative control｜只有行政声明

```text
管理员说“以后不许回滚”
但 D 和独立恢复环境仍现实可执行
```

→ 不能仅凭声明把 reality path_set 写成 0。

### positive reverse control｜恢复独立路径

```text
新增 D2
完成同一旧状态真实恢复测试
```

→ `effective_path_set` 扩大
→ same-layer nz restoration evidence 上升。

---

## 8｜失败类型

```text
SINGLE_POINT_RISK_AS_CURRENT_XZ
= 因为所有路径共享一个点、系统很脆，就直接判 current xz。

CONVERGENCE_AS_SUFFICIENT_XZ
= 把“路径汇流”这一主骨误当成完整 xz 的充分条件。

FUTURE_MIGRATION_AS_PRESENT_NARROWING
= 因为最终计划是只保留新平台，就倒推出当前回返窗口已经在收窄。

HEALTHY_DEPENDENCY_AS_ZERO_PATH
= 共享依赖只有一个，就把 effective path_count 错算成 0；正确是 1 个独立有效 class。

ADMINISTRATIVE_OFF_AS_REALITY_OFF
= 口头/文档禁止回滚，但现实恢复链仍可执行，也写成 complete exhaustion。

SUDDEN_FAILURE_RETROACTIVE_XZ
= D 突发失效后，反向编造此前已经存在持续收窄轨迹。

STATIC_FRAGILITY_AS_TEMPORAL_TRAJECTORY
= 把静态拓扑脆弱性偷换成时间上的持续收束。
```

---

## 9｜最小判别式

```text
path convergence alone
!=
current xz
```

更严格：

```text
shared_dependency_count = 1
AND dependency_currently_executable = true
AND no_verified_temporal_shrinkage
=> current_xz FAIL
```

而：

```text
shared_dependency_count = 1
AND dependency_currently_executable = true
AND executable_window is objectively shrinking
AND future_endpoint increasingly constrains current options
=> current_xz strong candidate
```

最短解释器门：

> **先问“现在只剩几类真正独立的路”，再问“这几类路是否正在随时间继续减少/变窄”。只剩一条健康稳定的路是低冗余，不等于 xz；只剩一条且这条路的现实可用窗口还在持续关闭，才进入 current xz 主门。**

---

## 10｜本轮裁定

```yaml
research_question: does_convergence_to_one_healthy_shared_dependency_alone_establish_current_xz
answer: no
new_guard: HEALTHY-CONVERGENCE-NOT-XZ-GATE-v0.1
new_boundary:
  static_topological_convergence: insufficient
  active_temporal_reversibility_shrinkage: required_for_strong_current_xz
xz:
  state_A_healthy_stable_D: false_as_full_current_xz
  state_B_healthy_but_expiring_D: strong_candidate
  state_C_D_failed: complete_exhaustion; full_xz_requires_trajectory_evidence
nz:
  not_primary_in_A_B_C
  reverse_restoration_D2: rises_as_same_layer_restoration_candidate
confidence:
  boundary: 0.98
l1_change_required: false
l2_change_required: false
sync_debt_created: false
```

---

## 11｜下一断点

下一轮优先测试：

> **同一路径集合只减少一个独立 path class，但剩余空间仍宽且无终点前置时，是否只能写“局部收窄”，而不能直接判 xz？**

重点把：

```text
any negative delta in path count
```

与：

```text
meaningful xz trajectory
```

分开，避免解释器看到 `3 -> 2` 就机械贴 xz。
