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
x_scope_dynamic_transition_controls: 25
x_scope_dynamic_transition_works: 22
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

## 2｜本轮新增四条 evidence 归并

### 2.1 The Terminal / Frank Dixon｜transition-blocking ≠ resultant-state disposition

Dixon/CBP 对 Viktor 的 US-entry transition 拥有现实有效的拒绝 gate，但同一窗口没有 federal detention 权，也不能仅凭拒绝入境就选择 Viktor 后续任意状态。锁：

```text
permission to block transition A→B
≠ permission to choose arbitrary resultant state C/D/E

edge veto
≠ node/state disposition
```

统计：boundary `22/19 → 23/20`。

### 2.2 Evangelion Episode 19 / Shinji｜execution-routing restoration mirror

Episode 18 已锁 Shinji pilot execution x `ON→OFF`。Episode 19 中 Rei 与 Dummy substitute paths 均被 Unit-01 拒绝；随后 Shinji 返回，Unit-01 再次现实响应其操纵并出击。

```text
substitute OFF
≠ original actor automatically ON

prior execution x OFF
→ original actor returns
→ same-object reality-test 再次响应
→ execution x OFF→ON
```

同作品同人物，只增加 control：`23/21 → 24/21`。

### 2.3 The Martian / Hermes crew｜joint final decision ≠ joint execution

Rich Purnell Maneuver 的 final acceptance 要求 Hermes 五人 unanimous，但现实执行由 Martinez 负责 course plot/execute，Johanssen 单独解除 remote override。

```text
joint/shared final decision
≠ joint/shared execution

role-divided execution
≠ automatic joint-final inference
```

统计：decision calibration `5 → 6`。

### 2.4 Harry Potter and the Deathly Hallows / Harry｜term-triggered permission scope expansion

Harry 的技术施法能力在17岁前后都存在；变化的是 underage-sorcery / Trace 这一明确 term gate。17岁时 Trace 自动失效，随后 Harry 立即在校外现实施法完成 same-layer reality-test。

```text
technical capability retained
≠ permission scope unchanged

same actor/object/use-permission family
+ explicit term/age gate expires
+ after-stage reality-test succeeds
→ current permission scope expansion
```

本条不是 King Lear `100→50→25→0` 的 quantitative cap 反向镜像，而是 **term-triggered spatial/legal scope expansion**。Harry Potter 此前未进入 current dynamic-work 集合，因此：

```text
24 / 21
→ 25 dynamic controls / 22 independent works
```

## 3｜本轮不计 / 去重

- The Terminal 不计 dynamic，只计新 boundary。
- Evangelion 19 与 Episode 18 同作品同主体同对象，只 `+1 control/+0 work`。
- The Martian 只计 decision calibration，不计 ordinary positive/boundary/dynamic。
- Harry 不计 capability delta；变化的是 permission scope，不是技术能力。
- Harry 不冒充 quantitative permission-cap expansion；真正 low-cap→high-cap 数量型镜像仍缺。
- strict-v2 本轮 `+0`；protected-range 本轮 `+0`；pending-review 仍11。

## 4｜current 强化规则

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

新增固定分账：

```text
transition-blocking x ≠ resultant-state disposition x
joint-final decision ≠ joint execution
substitute node OFF ≠ original actor automatically ON
technical capability retained ≠ permission scope unchanged
```

### 4.1 restoration
execution-x 恢复必须看到 original actor 重新进入 same-object routing 后 reality-test 成功；替代节点退出本身不够。

### 4.2 decision/execution 正交
`consultation_structure ≠ final_decision_structure ≠ execution_structure`。共同批准与共同执行不能互相倒推。

### 4.3 edge control / state disposition
成功 veto 一个 transition，只锁该 edge；若要升级 resultant-state disposition，必须对后续 state transitions 另做 subject-specific reality-test。

### 4.4 term-triggered scope migration
年龄、期限、毕业、解禁、合同到期等名义节点本身不自动产生 x 变化。只有明确 permission gate 实际改变，并在 transition 后完成 same-layer reality-test，才可记 dynamic expansion/contraction。

## 5｜strict-v2

```yaml
verified_positive: 0/0
deferred: 4/4
negative: 7/4
precondition: 20/9
canonical_calibration: 3
```

P0 继续未破零；不恢复废止的 absolute-unique-anchor。

## 6｜protected-range

```yaml
positive: 4/4
negative: 3/3
dynamic: 1/1
status: pending-review
```

本批无新机制。

## 7｜同步债

本 working ledger 与实时待审议清单现统一为：

```text
strict-precondition 20/9
x-scope boundary   23/20
x-scope dynamic    25/22
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

1. **P0 strict-v2 first verified positive**：继续不降门。
2. **quantitative permission-cap expansion mirror**：真正补 King Lear 的数量型反向，不得用 Harry 的 term-triggered spatial/legal expansion冒充。
3. **path exhaustion dynamic**：alternative paths 逐一关闭，surviving path count=0 后 target-effect reality-test OFF。
4. **joint/shared execution ↔ unilateral execution 真动态**：same actor/object/permission family，两阶段都 reality-test。
5. **transition veto + downstream disposition 正向镜像**：先证 edge veto，再独立证 resultant-state disposition。
6. protected-range 只收同边界、同 risk-channel 动态与新失败镜像。
7. deferred 只在新证据出现时二审。
