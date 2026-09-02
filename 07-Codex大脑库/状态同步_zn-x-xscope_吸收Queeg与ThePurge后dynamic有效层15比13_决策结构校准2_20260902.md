---
type: ten-yuan-fire-axis-state-reconciliation
authority_level: L4
knowledge_status: evidence-locked
status: working-ledger
axis: fire
pair: zn-x
updated: 2026-09-03
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate: current-x-scope-distinction-v1_20260830
  protected_range_gate: protected-range-risk-test-v1_20260831
may_override_canonical: false
fact_confidence: 99
classification_confidence: 99
---

# 状态同步｜zn ↔ x 当前 evidence ledger｜2026-09-03 批量消化

> L4 working ledger，不覆盖 L1/L2 canonical。仓库 current canonical 高于本文件；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

## 0｜current canonical / 门禁对齐

- L0/L1 文件权力门禁继续要求：流程权力与知识权力分离，L4/L5 不得覆盖 L2。
- L1 current：火＝阳火 `zn` ↔ 阴火 `x`；主题领域＝本体。
- strict current gate：`current-layer-specific-anchor-gap-v2_20260829`。
- x-scope current gate：`current-x-scope-distinction-v1_20260830`。
- protected-range current gate：`protected-range-risk-test-v1_20260831`。
- 历史 `x信息量卡v2` frontmatter 的 `element: 阴水` 仍是已知 canonical 元数据债，只登记，不由 L4 越权修正。

## 1｜current effective evidence-layer

```yaml
strict_current_criterion: current-layer-specific-anchor-gap-v2_20260829
strict_v2_verified_positive_controls: 0
strict_v2_verified_positive_works: 0
strict_v2_deferred_former_positive_controls: 4
strict_v2_deferred_former_positive_works: 4
strict_v2_negative_guards: 7
strict_v2_negative_guard_works: 4
strict_precondition_guards: 20
strict_precondition_guard_works: 9
strict_canonical_calibration_controls: 3

x_scope_current_criterion: current-x-scope-distinction-v1_20260830
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 23
x_scope_boundary_guard_works: 20
x_scope_dynamic_transition_controls: 24
x_scope_dynamic_transition_works: 21
x_scope_decision_structure_calibration_controls: 6
x_scope_knowledge_status: pending-review

protected_range_current_criterion: protected-range-risk-test-v1_20260831
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 3
protected_range_v1_verified_negative_guard_works: 3
protected_range_v1_dynamic_controls: 1
protected_range_v1_dynamic_works: 1
protected_range_knowledge_status: pending-review

pending_review_count: 11
```

## 2｜本轮新增三条 evidence 归并

### 2.1 The Terminal / Frank Dixon｜transition-blocking ≠ resultant-state disposition

状态：`evidence-locked boundary guard`。

Dixon/CBP 对 Viktor 的 US-entry transition 拥有现实有效的拒绝 gate，但同一窗口 Dixon 明确没有 federal detention 权，也不能仅凭拒绝入境就选择 Viktor 后续任意状态。法律、外交与 travel-state competing nodes 让 Viktor 落入 stranded intermediate state。

锁：

```text
permission to block transition A→B
≠ permission to choose arbitrary resultant state C/D/E

edge veto
≠ node/state disposition
```

它不同于 Casino Royale 的 alternative-path 绕行：The Terminal 中 entry veto 完全生效，新增边界发生在 veto 成功之后，问的是 post-veto state 是否归 veto-holder 处分。

统计：boundary `22/19 → 23 controls / 20 works`。

### 2.2 Evangelion Episode 19 / Shinji｜execution-routing restoration mirror

状态：`evidence-locked dynamic restoration mirror`。

Episode 18 已锁：Shinji 仍在 Entry Plug，但 Dummy System 接管，pilot execution x `ON→OFF`。Episode 19 先 reality-test Rei substitute 与 Dummy Plug 均被 Unit-01 拒绝；随后 Shinji 返回，Unit-01 再次现实响应其操纵并出击。

锁：

```text
substitute/current alternative node becomes unavailable
≠ original actor automatically restored

prior execution x OFF
→ original actor returns
→ same object again reality-tests response to original actor
→ execution x OFF→ON
```

同作品同人物，所以只增加 dynamic control，不增加 independent work：`23/21 → 24/21`。

### 2.3 The Martian / Hermes crew｜joint final decision ≠ joint execution

状态：`evidence-locked decision-structure calibration`。

Rich Purnell Maneuver 的 final acceptance 明确要求 Hermes 五人 unanimous；但执行阶段由 Martinez 负责 course plot/execute，Johanssen 单独解除 NASA remote override。共同批准与执行分工并不重合。

锁：

```text
joint/shared final decision
≠ joint/shared execution

role-divided execution
≠ automatic joint-final inference
```

final-decision topology 与 execution topology 必须正交建模。统计：decision calibration `5 → 6 controls`；current schema 仍不擅自增加 works 聚合字段。

## 3｜本轮不计 / 去重

- The Terminal 不进入 dynamic：被测窗口内是 permission-type/scope 边界，不是同 permission 的 from→to 迁移。
- Evangelion 19 不增加 independent work：Episode 18/19 属同一作品同一主体同对象 execution family。
- The Martian 不进入 ordinary positive/boundary/dynamic：它只校准 final-decision topology 与 execution topology 的独立性。
- strict-v2 本轮 `+0`：三条都没有新锁 independent `zn`，也没有恢复 deferred 候选的新证据。
- protected-range 本轮 `+0`：没有新增 risk-test 机制。
- pending-review 槽数不变，继续 11。

## 4｜current 强化规则

### 4.1 x-scope

```text
x = actor
× object
× permission/effect layer
× scope / quantitative cap
× term / revocability
× credential / path topology
× consultation / final-decision topology
× execution topology
× current window
```

新增强制分账：

```text
transition-blocking x ≠ resultant-state disposition x
joint-final decision ≠ joint execution
substitute node OFF ≠ original actor automatically ON
```

### 4.2 restoration 判据

execution-x 恢复必须满足：

```text
same actor
+ same object layer
+ prior x OFF
+ substitute/current competing node 已退出或现实不可用
+ original actor 返回 current routing
+ same-object reality-test 再次响应 original actor
```

只看到替代节点失败，不足以把 original actor 自动判回 ON。

### 4.3 decision/execution 正交

```text
consultation_structure
≠ final_decision_structure
≠ execution_structure
```

joint-final 的关键是 mandatory pre-effect blocking topology；execution 的关键是现实 effect 由哪些节点实际完成。两层可重合，也可分离。

### 4.4 edge control / state control

对状态机式对象必须区分：

```text
edge A→B 可 veto
≠ actor owns/controls state S after veto
```

若要升级为 resultant-state disposition，必须对后续 `S→C/D/E` 另做 subject-specific reality-test，不能由一个成功 veto 倒灌。

## 5｜strict-v2

current 继续：

```yaml
verified_positive: 0/0
deferred: 4/4
negative: 7/4
precondition: 20/9
canonical_calibration: 3
```

P0 仍未破零。继续使用 current-window + same-object-layer + relevant current reality-anchor gap；不恢复废止的 absolute-unique-anchor。

## 6｜protected-range

本批无新机制，保持：

```yaml
positive: 4 controls / 4 works
negative: 3 guards / 3 works
dynamic: 1 control / 1 work
status: pending-review
```

## 7｜同步债

本 working ledger 与实时待审议清单已经统一到：

```text
strict-precondition 20/9
x-scope boundary   23/20
x-scope dynamic    24/21
decision calibration 6
protected-range    4/4 positive + 3/3 negative + dynamic 1/1
strict verified positive 0/0
pending_review_count 11
```

仍需安全全文同步：

```text
strict-v2 专项
x-scope 专项
zn-x火轴研究总纲_20260827.md
```

这是 L4 状态同步债，不改变 L1/L2 canonical。

## 8｜下一批最高信息增益

1. **P0 strict-v2 first verified positive**：继续不降门；优先天然单一 object layer、stable subject-specific x、无 functional-equivalent current anchor、无 independent institutional/task purpose anchor 的候选。
2. **path exhaustion dynamic**：多个 independent paths → alternatives 逐一关闭 → surviving path count=0 → target-effect reality-test OFF，测试 local veto 何时升级为 global effect OFF。
3. **permission-cap expansion mirror**：对照 King Lear，same actor/object/permission family，low cap 经 same-layer gate 解除后 reality-test 为 higher cap。
4. **joint/shared execution ↔ unilateral execution 真动态**：same actor/object/permission family，两阶段都要求 reality-test，不能凭 final-decision topology 倒推 execution topology。
5. **transition veto + downstream disposition 正向镜像**：same actor/person，先证明 transition veto，再独立 reality-test 后续 state-disposition interface。
6. protected-range 只收同边界、同 risk-channel 动态与新失败镜像。
7. deferred 只在新证据出现时二审。
