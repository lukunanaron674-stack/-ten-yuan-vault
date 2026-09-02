---
type: ten-yuan-fire-axis-state-reconciliation
authority_level: L4
knowledge_status: evidence-locked
status: working-ledger
axis: fire
pair: zn-x
updated: 2026-09-02
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
  protected_range_gate: protected-range-risk-test-v1_20260831
may_override_canonical: false
fact_confidence: 99
classification_confidence: 99
---

# 状态同步｜zn ↔ x 当前 evidence ledger｜吸收 WALL-E、Truman、WarGames、Gandalf、Pacific Rim

## 0｜启动对齐

本轮以最新 `main@5d3ea1e854c6cb0f04b3cf1ff97810c146618541` 为写前真值，重读 L0/L1 门禁、L1 十元—五行正本 v1.6、zn/x 信息卡与准度路由、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 专项、x-scope 专项、protected-range 专项、最近运行记录与 commits。current canonical 高于本文件；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

本轮没有出现 ≥95 的 strict-v2 verified positive；已 pending-review 的普通正例槽继续停止堆量。本轮只吸收新机制、判据校准、前置护栏与状态漂移。

## 1｜current effective evidence-layer

```yaml
strict_current_criterion: current-layer-specific-anchor-gap-v2_20260829
strict_v2_verified_positive_controls: 0
strict_v2_verified_positive_works: 0
strict_v2_deferred_former_positive_controls: 4
strict_v2_deferred_former_positive_works: 4
strict_v2_negative_guards: 7
strict_v2_negative_guard_works: 4
strict_precondition_guards: 19
strict_precondition_guard_works: 8
strict_canonical_calibration_controls: 3

x_scope_current_criterion: current-x-scope-distinction-v1_20260830
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 18
x_scope_boundary_guard_works: 15
x_scope_dynamic_transition_controls: 17
x_scope_dynamic_transition_works: 15
x_scope_decision_structure_calibration_controls: 3
x_scope_knowledge_status: pending-review

protected_range_current_criterion: protected-range-risk-test-v1_20260831
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 3
protected_range_v1_verified_negative_guard_works: 3
protected_range_knowledge_status: pending-review

pending_review_count: 11
```

## 2｜本批新资产归并

### 2.1 WALL-E｜endogenous override removal → tested execution restoration

Captain 对 Axiom 返航决定在 AUTO/A113 同层 override 下无法现实生效；切至 MANUAL 后，AUTO 竞争执行节点被移除，植物进入 Holo-Detector 后返航现实执行。

锁：

```text
contested / override-dominated current x
→ endogenous competing override node removed
→ tested unilateral execution restoration
```

这是 Otto Octavius `endogenous competing node insertion` 的方向镜像，不是名义 captain 身份变化，也不是单纯能力增强。

计入 dynamic：`15/13 → 16/14`。

### 2.2 The Truman Show｜environment-management x ≠ person-disposition/veto x

Christof 对 Seahaven/studio environment 的天气、演员、交通、搜索和基础设施有广泛现实管理 `x`，甚至能制造致命风暴；但 Truman 最终仍能自行穿过 EXIT 离开，没有 reality-tested 的 person-level final-exit veto。

锁：

```text
environment-management x
≠ person-disposition / final-exit veto x
```

同一场景内对象 A 的宽管理范围不得倒灌到对象 B 的人身最终处分层。

计入 ordinary boundary guard：`17/14 → 18/15`。

### 2.3 WarGames｜joint execution threshold ≠ joint final decision

两名 missile officers 必须同步转动各自 launch key，任一拒绝都会阻断发射；但 strategic launch order 在上游已形成并认证，两人没有共同生成该 final decision。

锁：

```text
mandatory 2-of-2 execution threshold
≠ joint final decision automatically
```

以后必须把：

```text
source decision
final decision
execution threshold
```

三层分账。WarGames 只新增 decision/execution 判据校准，不计 ordinary positive/guard。

decision-structure calibration：`2 → 3 controls`。

### 2.4 Gandalf / One Ring｜acquisition opportunity + transient contact ≠ current x

Gandalf 曾短暂接触/拿取至尊魔戒完成辨识，且 Frodo 明确愿意把戒指交给他；但 Gandalf 因独立反支配原则主动拒绝接受，stable possession/custody/use/disposition 从未形成。

锁：

```text
acquisition opportunity
+ offered transfer
+ transient contact
≠ realized current x
```

同时说明强 `zn=true` 不能把“可取得但主动拒绝取得”补写成 `x=true`。

该机制与 Antigone 的“一次局部 effect ≠ stable x”不同，新增信息是 **未接受的可取得机会不属于 current permission bundle**。

strict-precondition：`18/7 → 19/8`；strict verified positive 仍 `0/0`。

### 2.5 Pacific Rim｜joint → emergency unilateral → joint execution topology

同一 Raleigh、同一 Gipsy Danger、同一 movement/combat-control permission family：

```text
Raleigh + Yancy joint execution
→ Yancy 被现实移除
→ Raleigh solo movement/combat reality-effect 成立
→ later Raleigh + Mako joint execution restored
```

锁：

```text
joint execution
→ unilateral emergency execution
→ joint execution restoration
```

这里变的是 current execution topology，不是 actor 能力强弱，也不是对象归属。与 Ramius 的 credential concentration 不同：Pacific Rim 直接测试同一对象的实际 movement/combat execution effect。

计入 dynamic：`16/14 → 17/15`。

## 3｜本轮合并后的高信息规则

```text
acquisition opportunity / offered transfer / transient contact
≠ current realized x

environment-management x
≠ person-disposition / final-exit veto x

mandatory joint execution threshold
≠ joint final decision

competing execution node insertion
and competing execution node removal
must be treated as opposite dynamic mechanisms

joint execution topology
can migrate to unilateral execution and later restore to joint
without changing actor identity or object identity
```

统一方法继续收束为：

> `x` 按 `object × permission/effect layer × current execution topology × time window` 分账；source authority、参与人数、接口持有、可取得机会、环境控制、执行阈值、名义身份都不能跨层倒灌。

## 4｜去重与不计项

- WALL-E 不重复计 Otto 的“内生竞争节点”静态/插入机制；新增的是 **override removal → reality-tested restoration** 的反向动态。
- WarGames 不计 ordinary joint positive；其信息增益仅是 **joint execution ≠ joint final decision**。
- Gandalf 不计 x-scope ordinary guard，避免与既有 transient opportunity / local effect 护栏重复；只计 strict-precondition，因为新增信息是 **强 zn + 可取得机会仍不能绕过 x 独立过门**。
- Pacific Rim 不与 Ramius credential concentration 合并：前者有 actual execution topology reality-test，后者只锁 authorization-interface。
- protected-range 本批无新 current-v1 机制，维持 `4/4 positive + 3/3 negative`。

## 5｜当前主中枢同步债

当前 `zn-x火轴待审议清单.md`、strict-v2 专项、x-scope 专项、火轴研究总纲仍落后于本 evidence-layer。写前主中枢仍分别登记约：

```text
strict-precondition 17/6
x-scope boundary   16/13
x-scope dynamic    14/12
decision calibration 1
protected-range    3/3 + 1/1
```

而 current evidence-layer 已为：

```text
strict-precondition 19/8
x-scope boundary   18/15
x-scope dynamic    17/15
decision calibration 3
protected-range    4/4 + 3/3
```

这些是 L4 registry/overview 状态漂移，不改变 L1/L2 canonical。下一次安全全文同步窗口应一次性更新待审议清单、strict 专项、x-scope 专项与研究总纲；不得把本文件的状态同步再次当作新 control 重复累计。

已知 canonical 元数据债继续只登记：L1 v1.6 明确 `x=阴火`，历史 `x信息量卡v2` frontmatter 的旧元素标记仍需授权修正；L4 不越权。

## 6｜下一批最高信息增益

P0：strict-v2 第一份 verified positive 仍未出现，不降门槛。优先寻找天然单一对象层、stable subject-specific x、独立 zn、同窗双向缺口都能过门，并先冻结 functional-equivalent anchor、competing purpose/ranking anchor 与第三方 veto/产权/制度节点。

若 P0 仍无 ≥95：

1. 找 Pacific Rim 的反向最小差异：同一对象同一 permission family，joint topology 中任一单 actor 都不能 reality-effect；随后 mandatory co-execution node 被制度/技术删除，才首次形成稳定 unilateral execution。
2. 找 WALL-E 的失败镜像：competing override node 被名义关闭，但 same-layer reality-effect 仍无法恢复，区分“节点看似退出”与“现实恢复”。
3. 找 Truman 的最小差异：environment-control 之外，主体另有独立 person-level pre-effect veto，验证何时 environment-management 与 person-disposition 可同时成立但仍需分账。
4. protected-range 只收同边界、同 risk-channel 的 ON→OFF 或 OFF→ON 动态，不再堆普通安全屋。
5. deferred 只在出现新证据时二审，不重复旧攻击。

达到 pending-review 的普通正例槽继续停止堆料。