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

# 状态同步｜zn ↔ x 当前 evidence ledger｜Queeg、The Purge、Book of Eli、protected-range、Elder Wand

## 0｜启动对齐

本轮以最新 main 为准，重读 L0/L1 门禁、L1 十元—五行正本 v1.6、zn/x 信息卡与准度路由、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 专项、x-scope 专项、protected-range 专项、最近运行记录与 commits。current canonical 高于本文件；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

本轮没有达到 ≥95 且能新增机制的 strict-v2 verified positive，不为破零降低门槛；已 pending-review 的 ordinary positive 槽继续停止堆量。

## 1｜current effective evidence-layer

```yaml
strict_current_criterion: current-layer-specific-anchor-gap-v2_20260829
strict_v2_verified_positive_controls: 0
strict_v2_verified_positive_works: 0
strict_v2_deferred_former_positive_controls: 4
strict_v2_deferred_former_positive_works: 4
strict_v2_negative_guards: 7
strict_v2_negative_guard_works: 4
strict_precondition_guards: 18
strict_precondition_guard_works: 7
strict_canonical_calibration_controls: 3

x_scope_current_criterion: current-x-scope-distinction-v1_20260830
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 17
x_scope_boundary_guard_works: 14
x_scope_dynamic_transition_controls: 15
x_scope_dynamic_transition_works: 13
x_scope_decision_structure_calibration_controls: 2
x_scope_knowledge_status: pending-review

protected_range_current_criterion: protected-range-risk-test-v1_20260831
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 3
protected_range_v1_verified_negative_guard_works: 3
protected_range_knowledge_status: pending-review

pending_review_count: 11
```

## 2｜本轮真正新增：Elder Wand object-internal execution-node guard

`7b42c3d9469d932e273b7fb11c50e642b820eb60` 已 evidence-lock Voldemort / Elder Wand 新机制。

同一 current window、同一对象上：

```text
physical possession/custody x = true
ordinary use/invoke x = true

但

target-specific lethal-harm effect against Harry = false
```

失败不是普通 capability 不足，也不是 interface causal mapping 尚未验证；最终 reality-test 已明确显示对象内部的 allegiance / true-master 机制会拒绝或反向改变该目标结果。

因此新增 boundary guard：

> 对象在手、能调用、普通效果可现实生效，只能锁对应 possession/use/invoke `x`；若对象内部存在 autonomous allegiance / endogenous competing execution node，则局部 use `x` 不得倒灌为 global 或 target-specific disposition/effect `x`。

反向同样成立：target-specific disposition 失败，不得抹除已经现实成立的窄 possession/use/invoke `x`。

该机制不同于：
- The Dark Knight：interface possession + claimed causal mapping 尚未充分验证；
- Frodo / One Ring：possession/use 不自动推出 destruction-disposition；
- Otto Octavius：内生竞争节点在时间上插入造成 dynamic transition。

Elder Wand 的新增价值是：**既存 object-internal execution node 也可以作为静态 x-scope 归因护栏，使同对象不同 permission/effect layer 在同窗不同步。**

按同 criterion 分账：

```text
x-scope boundary
16 controls / 13 works
→ 17 controls / 14 independent boundary-guard works
```

《Harry Potter》虽已进入 dynamic work 集合，但此前未作为 ordinary boundary-guard work 计入该子槽；各子槽独立分账。

## 3｜仍有效的近期归并

### 3.1 Queeg｜realized command-node transfer

```text
actor 仍与对象共处
+ nominal title 未必即时消失
+ replacement execution node 现实接管
+ old actor 无法再让 same-layer orders final
→ current command x contracts
```

因此 dynamic 有效层维持 `15 controls / 13 works`。

### 3.2 The Purge｜shared execution ≠ joint final decision

```text
多个主体都能触发同一系统
≠ joint final decision

任一授权主体可独立让同层结果生效
→ shared / parallel-independent execution

mandatory multi-node threshold
+ 单一节点不能独立让同一 final result 生效
→ joint-threshold
```

因此 decision-structure calibration 有效层为 `2 controls`。

### 3.3 Book of Eli｜carrier uniqueness ≠ reality-anchor uniqueness

唯一 physical carrier 不等于唯一 current reality anchor；同窗存在可调用的功能等价 content anchor 时，不得把 carrier-x 与 content-zn 事后 composite bundling 成 same-object-layer strict。

因此 strict-precondition 有效层为 `18 controls / 7 works`，strict verified positive 仍 `0 / 0`。

### 3.4 protected-range｜mobile boundary + risk-channel split

有效层维持：

```text
positive 4 / 4 works
negative 3 / 3 works
```

锁定：
- protected-range 可以是移动边界，不要求固定地理坐标；
- 同一边界对一个 risk-channel 成功，不等于 all-hazard protection；
- 必须按 risk-channel / ingress-path 分层记录。

## 4｜合并后的高信息规则

```text
carrier uniqueness
≠ current reality-anchor uniqueness

physical presence / nominal title
≠ current command x

node-holder replacement
≠ node-role removal

shared / parallel-independent execution
≠ joint-threshold final decision

physical possession + usable interface
≠ global target-disposition
when object-internal execution node can refuse / redirect effect

protected-range success on one risk channel
≠ all-hazard protected-range
```

统一判断原则：

> `x` 必须按 object × permission/effect layer × current execution topology 分账；不能由参与人数、职位名称、物理在场、作品原生 ownership/master 标签、接口持有或单一风险通道成功倒推更宽权限。

## 5｜当前状态漂移 / 同步债

截至本文件写入前，主中枢仍存在 L4 状态债：

1. `zn-x火轴待审议清单.md` 仍登记 strict-precondition `17/6`、x-scope boundary `16/13`、dynamic `14/12`、decision calibration `1`、protected-range `3/3 + 1/1`。
2. strict-v2 专项仍需吸收 Book of Eli 后的 `18/7`。
3. x-scope 专项仍需吸收 Queeg `15/13`、The Purge calibration `2`、Elder Wand boundary `17/14`。
4. 火轴研究总纲与 protected-range 专项需按本 ledger 检查并只做状态同步；不得重复增加 control。

这些是 L4 registry/overview 漂移，不改变 L1/L2 canonical，也不授权修正已知 canonical 元数据债。

## 6｜本轮统计变化

```yaml
strict_positive_increment: 0
strict_negative_increment: 0
strict_deferred_increment: 0
strict_precondition_state_sync: 17/6 -> 18/7

x_scope_positive_increment: 0
x_scope_boundary_new_case_increment: +1_control/+1_work
x_scope_boundary_state: 16/13 -> 17/14
x_scope_dynamic_state_sync: 14/12 -> 15/13
x_scope_decision_structure_state_sync: 1 -> 2

protected_range_state_sync:
  positive: 3/3 -> 4/4
  negative: 1/1 -> 3/3
```

## 7｜下一轮最高信息增益

P0 继续优先 strict-v2 第一份 verified positive，先冻结 carrier/content 错层、functional-equivalent anchor、competing purpose/ranking anchor、第三方 veto/产权/制度 competing anchor，不二审没有新证据的 deferred。

若 P0 仍无 ≥95：

1. 优先找 Elder Wand 的动态镜像：same actor + same object + underlying possession/use 不变，但真实 allegiance/internal-controller 迁移后 target-specific disposition/effect 从 false → true。
2. 找真正 `shared/parallel-independent ↔ unilateral` 的 execution-node topology 动态迁移，不接受只增咨询者、只换 holder 或一次越权。
3. 找 Queeg 的反向镜像：replacement command node 退出后，原 actor 通过 same-layer reality-test 恢复 command x。
4. protected-range 只收新机制，优先 same actor / same boundary / same risk-channel 下 exclusion node 被撤回、破坏或耗尽造成 ON → OFF。

达到 pending-review 的槽继续停止普通正例堆料。