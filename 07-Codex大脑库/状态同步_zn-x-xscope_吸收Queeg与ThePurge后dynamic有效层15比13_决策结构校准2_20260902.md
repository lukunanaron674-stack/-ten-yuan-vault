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
x_scope_boundary_guards: 22
x_scope_boundary_guard_works: 19
x_scope_dynamic_transition_controls: 23
x_scope_dynamic_transition_works: 21
x_scope_decision_structure_calibration_controls: 5
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

### 1.1 strict-precondition 统计纠偏

上一份 current ledger 已经是 `19 controls / 8 works`。随后《12 Angry Men》运行记录虽然自报写前基数 `18/7`，但这是陈旧基数；该作品此前未进入 strict-precondition work 集合，且机制与既有 carrier-equivalence / one-shot-effect / competing-purpose guards 不重复，因此本轮按 current ledger 正确累计为：

```text
19 / 8
→ 20 strict-precondition controls / 9 independent works
```

禁止把运行记录中的旧基数反向覆盖 current evidence ledger。

## 2｜最近约4小时新增资产归并

### 2.1 Thirteen Days / JFK｜consultation ≠ joint final decision

状态：`evidence-locked`；criterion：`current-x-scope-distinction-v1_20260830`。

同一 White House crisis-response policy-selection layer 上，ExComm / Joint Chiefs 广泛参与、强烈反对，仍不等于共同最终裁决；现实上 Kennedy 可以拒绝 air-strike/invasion 主张并选择、实施 quarantine，未观察到 consulted advisers 对同一 final-policy effect 拥有 mandatory pre-effect blocking power。

锁：

```text
number of participants
≠ number of final-decision nodes

consultation / recommendation / dissent
≠ mandatory same-layer veto
```

与 Star Trek III 正向 heterogeneous joint-final threshold 形成最小正负镜像。

统计：decision-structure calibration `4 → 5 controls`。当前 schema 未正式设 works 聚合字段，只保留 independent-work provenance，不擅自扩 schema。

### 2.2 Casino Royale / Vesper｜source-specific veto ≠ target-effect global veto

状态：`evidence-locked`。

Vesper 对 British Treasury additional re-buy funds 有现实 veto；但 Felix Leiter 可以用 CIA 资金建立独立替代 path，Bond 随后现实 re-enter tournament。

锁：

```text
local/source-specific veto
≠ target-effect global veto

只有节点成为所有可生效路径共同必经的 mandatory pre-effect node
才可上升为 target-effect global veto
```

与 Nick Fury redundant credential 同属 path topology 大类，但主体、对象与机制不同：前者是不同资源来源形成替代 causal path，后者是同一 actor 内 redundant credential path。

统计：boundary `21/18 → 22 controls / 19 works`。

### 2.3 12 Angry Men / Juror 8｜zn governs use ≠ zn constitutes x purpose

状态：`evidence-locked strict-precondition guard`。

Juror 8 的 reasonable-doubt 原则可高置信独立命名，个人 vote/veto `x` 也现实成立；但拿掉该原则后，jury institution / unanimity rule 仍为 vote-x 提供清楚的对象、用途、threshold function 与可替代排序标准。

锁：

```text
zn strongly governs how x is used
≠
zn is the necessary source of why x has current purpose / ranking function
```

因此 `zn→x` strict direction 失败于 independent institutional-purpose anchor；不计 strict negative，只计前置护栏。

统计：按 current ledger 纠偏后 `19/8 → 20/9`。strict verified positive 仍 `0/0`。

### 2.4 Neon Genesis Evangelion / Shinji｜physical interface occupancy ≠ execution-x retained

状态：`evidence-locked dynamic`。

同一 Unit-01、同一 Episode-18 combat window，Shinji 仍物理位于 Entry Plug，但 synchronization 被切断，control routing 转到 Dummy System；Unit-01 随后由自动替代节点现实攻击，Shinji 无法让同层动作停止或重新服从自己。

锁：

```text
physical interface occupancy retained
≠ synchronization retained
≠ current execution-node attribution retained

human execution node
→ routing cut + automated substitute takeover
→ actor execution x ON → OFF
```

区别于 human-holder replacement、credential invalidation、external superior override 与 endogenous competing-node insertion。

统计：dynamic `21/19 → 22 controls / 20 works`。

### 2.5 King Lear / Lear｜permission type retained ≠ quantitative cap retained

状态：`evidence-locked dynamic`。

同一 post-abdication hosted-retinue permission family，在 daughters' residences 的现实 admissible cap 经 host-side same-layer gate 从 `100 → 50 → 25 → 0`；Lear 的历史 reservation、身份或旧上限不能覆盖 current host gate。

锁：

```text
permission family still exists by name
≠ quantitative scope unchanged

same permission family
+ same actor/object layer
+ counterparty mandatory pre-effect gate
+ reality-tested numerical cap reduction
→ permission-cap contraction
```

它不同于 Eduardo 的 divisible equity dilution：Eduardo 改变的是资产份额本体；Lear 改变的是同一 permission 的 maximum admissible quantity ceiling。

统计：dynamic `22/20 → 23 controls / 21 works`。

## 3｜本轮去重 / 不计项

- Evangelion 的强 `zn` 候选不重复增加 strict-precondition：其失败仍命中既有 independent task/purpose anchor。
- King Lear 的 dignity / status 候选不进入 strict：retinue 仍有 security/service/display 等 independent purposes。
- Thirteen Days 不进入 ordinary x-scope positive/boundary/dynamic，只做 decision topology calibration。
- Casino Royale 不把 Vesper 的真实 Treasury veto 倒灌成对 tournament re-entry 的 global veto。
- 《12 Angry Men》虽然自身也是 unanimous joint threshold，本轮不重复增加 decision calibration；新增信息在 strict `zn→x` purpose-source 分离。
- 已 pending-review 的普通正例槽继续停止堆量。

## 4｜当前强化后的统一规则

### 4.1 x-scope 基本分账

```text
x = actor
× object
× permission/effect layer
× scope / quantitative cap
× term / revocability
× credential / path topology
× consultation / final-decision structure
× execution topology
× current window
```

禁止：

```text
title / role / physical presence
→ x=true automatically

local veto
→ global veto automatically

permission type unchanged
→ scope/cap unchanged

object continues acting
→ former operator still owns execution x

many participants / strong dissent
→ joint final decision
```

### 4.2 strict-v2

继续要求：same current window、same object layer、zn/x 各自独立过 current canonical；zn 先用不引用被测 x 的语言命名；x 必须自然、主体特异、不可 posthoc composite；冻结第三方 veto/产权/制度 competing anchors 与 x 端 independent purpose/ranking anchors。

新增强化：

> `zn governs how x is used` 仍不足以通过 `zn→x`；必须证明拿掉被测 zn 后，x 的 current purpose / guard / abandon / ranking 真出现相关缺口，而不是仍由 institution/task/title/instrument 提供清楚用途。

### 4.3 decision structure

```text
consultation_structure
≠ final_decision_structure
≠ execution_structure
```

joint-final 的关键不是人数或角色同质性，而是同一 final layer 上是否存在不可绕过的 mandatory pre-effect blocking topology。

### 4.4 path / veto topology

```text
source-specific veto
≠ global target-effect veto
```

若存在 independent alternative path 可使同一 target effect 成功，则单一路径 veto 只能归该 source/object layer。

### 4.5 quantitative scope

`x` 不只允许 true/false。可分割资产、对象子集、permission ceiling、数量上限都必须显式记录 scope；同名 permission 可在 current window 内发生连续 cap contraction / expansion。

## 5｜protected-range

本批无新机制，保持：

```yaml
positive: 4 controls / 4 works
negative: 3 guards / 3 works
dynamic: 1 control / 1 work
status: pending-review
```

普通正向停止堆量；只收新反例、同 risk-channel 动态、第三方 gate 冲突与 strict-v2 候选。

## 6｜当前同步债

本文件已吸收最新5条 evidence。下列 L4 中枢/专项仍需安全全文同步，不得从旧统计反向覆盖本 ledger：

```text
zn-x火轴待审议清单.md
strict-v2 专项
x-scope 专项
zn-x火轴研究总纲_20260827.md
```

目标统一为：

```text
strict-precondition 20/9
x-scope boundary   22/19
x-scope dynamic    23/21
decision calibration 5
protected-range    4/4 positive + 3/3 negative + dynamic 1/1
strict verified positive 0/0
pending_review_count 11
```

这是 L4 registry/overview 状态同步债，不改变 L1/L2 canonical。

## 7｜下一批最高信息增益

1. **P0 strict-v2 first verified positive**：继续不降门；优先找天然单一 object layer、无 institutional/task independent purpose anchor、无 functional-equivalent current reality anchor 的 subject-specific x。
2. **permission-cap expansion mirror**：同 actor/object/permission family，low cap 经 same-layer gate 解除后 reality-test 为 higher cap，补 King Lear 的严格反向。
3. **automated substitute removal mirror**：execution x 已 OFF → substitute node 真退出 → actor synchronization/routing 恢复 → same object reality-test 再响应 actor。
4. **path exhaustion dynamic**：多个 independent paths → alternative paths 逐一关闭 → surviving path count 归零 → 同 target-effect reality-test OFF，检验 local veto 如何在 path exhaustion 后升级为 global effect OFF。
5. **consultation-only 最近邻**：same organization / same pair 附近对象层，一层 broad consultation + unilateral final，另一层 mandatory joint-final，继续证明 topology 是 object-layer-specific。
6. deferred 只在新证据出现时二审；不重复旧攻击。
