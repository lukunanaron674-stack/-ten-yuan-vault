---
type: ten-yuan-fire-axis-review-registry
authority_level: L4
knowledge_status: evidence-locked
status: working-registry
axis: fire
pair: zn-x
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
may_override_canonical: false
updated: 2026-09-03
---

# zn ↔ x 火轴待审议清单

> L4 实时状态索引，不是 L2 正本。current canonical 高于本文件；达到 `pending-review` 后停止自动升格。木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

## A｜当前研究槽

### A1｜zn vs x 最近邻分离
`3 positive works + 2 negative guards / pending-review`

### A2｜pure x
`3 positive controls / 3 works / pending-review`

### A3｜pure zn
`3 positive controls / 3 works + 1 negative guard / 1 work / pending-review`

### A4｜zn+x 当前共现
`3 positive controls / 3 works + 6 negative guards / 4 guard works / pending-review`

### A5｜strict zn↔x｜current v2
current criterion：`current-layer-specific-anchor-gap-v2_20260829`。

```yaml
v2_verified_positive_controls: 0
v2_verified_positive_works: 0
v2_deferred_former_positive_controls: 4
v2_deferred_former_positive_works: 4
v2_deferred_new_candidates: 0
v2_deferred_new_candidate_works: 0
v2_negative_guards: 7
v2_negative_guard_works: 4
legacy_v1_negative_guards_pending_v2_revalidation: 0
strict_precondition_guards: 20
strict_precondition_guard_works: 9
canonical_calibration_controls: 3
historical_positive_contrasts: 1
```

当前仍无 ≥95 的 strict-v2 verified positive。deferred former positives 维持4/4，不因旧判据或旧正例自动恢复。

本批新增 **《12 Angry Men》Juror 8｜99/98 strict-precondition guard**：原则真实指导 vote-x 的使用，不等于该原则构成 vote-x 的 current purpose。jury institution / unanimity threshold 已为 vote 提供 independent purpose / decision role，因此 `zn governs how x is used ≠ zn constitutes why x has current purpose`。按 current ledger 纠偏：写前不是运行记录自报的旧 `18/7`，而是已锁 `19/8`，故本条正确累计为 `20/9`。

### A6｜lifecycle
`3 positive / 3 works + 2 negative guards / 2 works / pending-review`

### A7｜名义位置 / 外部承认 vs 现实 x
`3 positive / 3 works + 2 negative guards / 2 works + 1 revocable-but-real boundary / 1 work / pending-review`

### A8｜被承认 vs 真正成立
`3 positive / 3 works + 1 negative guard / 1 work / pending-review`

### A9｜pressure display
`3 positive / 3 works + 2 negative guards / 2 works + 1 historical positive contrast / pending-review`

### A10｜x scope 权限范围最小差异｜current v1
criterion：`current-x-scope-distinction-v1_20260830`。

```yaml
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 22
x_scope_boundary_guard_works: 19
x_scope_dynamic_transition_controls: 23
x_scope_dynamic_transition_works: 21
x_scope_decision_structure_calibration_controls: 5
knowledge_status: pending-review
pending_review: true
```

ordinary positive 已成熟，停止堆量。

#### 本批新增 boundary｜Casino Royale
Vesper 对 Treasury re-buy funds 有真实 source-specific veto，但 Felix/CIA alternative path 仍可让 Bond reality-tested re-entry 成功。锁：

```text
source-specific veto
≠ target-effect global veto
```

只有节点成为所有可生效路径共同必经的 mandatory pre-effect node，才可上升 global veto。统计：`21/18 → 22/19`。

#### 本批新增 decision calibration｜Thirteen Days
ExComm / Joint Chiefs 广泛参与、强烈反对，不等于 joint final decision；若反对节点不能在同一 final-policy layer 上 pre-effect 阻断政策生效，就只是 consultation / recommendation / dissent。与 Star Trek III 的 heterogeneous mandatory joint-final threshold 形成正负镜像。统计：`4 → 5 controls`；schema 暂不新造 works 字段。

#### 本批新增 dynamic｜Evangelion Episode 18
Shinji 仍物理位于 Entry Plug，但 synchronization 被切断，control routing 转交 Dummy System；Unit-01 随后由自动替代节点现实执行攻击，Shinji 无法停止。同一 object layer：

```text
physical interface occupancy retained
≠ current execution x retained

human execution node
→ routing cut + automated substitute takeover
→ actor execution x ON → OFF
```

统计：`21/19 → 22/20`。

#### 本批新增 dynamic｜King Lear
同一 hosted-retinue permission family 的 current admissible cap 经 daughters' host-side gate 从 `100 → 50 → 25 → 0`。历史 reservation 或旧上限不能覆盖 current cap。锁：

```text
permission type retained
≠ quantitative scope retained
```

区别于 Eduardo equity dilution：此处改变的是 permission ceiling，不是资产份额本体。统计：`22/20 → 23/21`。

#### 继续有效的核心反误判纪律

```text
local x ≠ global x
source decision ≠ consultation ≠ final decision ≠ execution
shared permission ≠ joint-threshold
formal/source authority ≠ realized current x
one-shot effect ≠ stable disposition x
interface possession ≠ target-disposition x
invoke/start ≠ stop/terminate/revoke
ownership/title ≠ permission bundle
technical capability delta ≠ x-boundary delta
source/task direction delta ≠ x-boundary delta
current permission type unchanged ≠ scope/cap unchanged
physical interface occupancy ≠ execution-node attribution
local/source-specific veto ≠ global target-effect veto
```

### A11｜protected-range risk-test｜current v1
criterion：`protected-range-risk-test-v1_20260831`。

```yaml
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 3
protected_range_v1_verified_negative_guard_works: 3
protected_range_v1_dynamic_controls: 1
protected_range_v1_dynamic_works: 1
knowledge_status: pending-review
pending_review: true
```

普通正向停止堆量；只收新反例、同 risk-channel 动态、第三方 gate 冲突与 strict-v2 候选。

## B｜current evidence ledger

```yaml
zn_vs_x_positive_controls: 3
zn_vs_x_positive_works: 3
zn_vs_x_negative_guards: 2
zn_vs_x_negative_guard_works: 2
pure_zn_controls: 3
pure_zn_works: 3
pure_zn_negative_guards: 1
pure_zn_negative_guard_works: 1
pure_x_controls: 3
pure_x_works: 3
zn_x_cooccurrence_controls: 3
zn_x_cooccurrence_works: 3
zn_x_cooccurrence_negative_guards: 6
zn_x_cooccurrence_negative_guard_works: 4
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
nominal_identity_vs_real_x_controls: 3
nominal_identity_vs_real_x_works: 3
nominal_identity_vs_real_x_negative_guards: 2
nominal_identity_vs_real_x_negative_guard_works: 2
nominal_identity_vs_real_x_revocable_but_real_controls: 1
nominal_identity_vs_real_x_revocable_but_real_works: 1
recognition_vs_establishment_controls: 3
recognition_vs_establishment_works: 3
recognition_vs_establishment_negative_guards: 1
recognition_vs_establishment_negative_guard_works: 1
lifecycle_controls: 3
lifecycle_works: 3
lifecycle_negative_guards: 2
lifecycle_negative_guard_works: 2
pressure_display_positive_controls: 3
pressure_display_positive_works: 3
pressure_display_negative_guards: 2
pressure_display_negative_guard_works: 2
pressure_display_historical_positive_contrasts: 1
pending_review_count: 11
```

## C｜当前方法纪律

1. 同 criterion_version 才累计；control 与 independent works 分账。
2. `zn+x` 共现前两端分别过门；co-occurrence ≠ strict。
3. strict `zn→x` 必须冻结 x 端 institution/task/title/instrument 等 independent purpose/ranking anchors。
4. strict `x→zn` 只要求当前对象层 relevant reality-anchor gap，不回到废止的“全宇宙绝对唯一载体”。
5. subject-specific attribution；第三方产权、保护、veto、制度节点不得倒灌主体 x。
6. local/global、nominal/real、current/ultimate、use/ownership、consultation/final-decision/execution 全部分账。
7. permission 迁移至少记录 `from→to + trigger + same-layer reality-test`；名义变化不够。
8. x 至少拆 `actor/object/permission_type/scope/term/revocability/return_obligation/same-layer_pre-effect_veto/global_override/ultimate_title/decision_structure/consultation_structure/final_decision_structure/execution_structure/co-decision_nodes`。
9. protected-range 按 boundary/object/risk-channel/ingress-path 分账；一次保护成功不得倒灌 all-hazard protection。
10. evidence-locked 可被 adversarial audit 撤回；旧基数与 current ledger 冲突时，以 current criterion + current作品集合重算。

## D｜当前高价值缺口

1. **P0：strict-v2 第一份 verified positive**，仍为 `0/0`。优先天然单一 object layer、stable subject-specific x、无 functional-equivalent current anchor、无 independent institutional/task purpose anchor 的候选。
2. **P1：permission-cap expansion mirror**：对照 King Lear，same actor/object/permission family，low cap 经同层 gate 解除后实际允许更高数量。
3. **P2：automated substitute removal mirror**：对照 Evangelion，execution x 已 OFF → substitute node 移除 → synchronization/routing 恢复 → same object 再次 reality-test 响应 actor。
4. **P3：path exhaustion dynamic**：多个 independent paths → alternatives 逐一关闭 → surviving path count=0 → target-effect reality-test OFF，测试 local veto 何时升级为 global effect OFF。
5. **P4：consultation / joint-final 最近邻**：同组织附近 object layers，一层 consultation-only + unilateral final，另一层 mandatory joint-final。
6. **P5：protected-range** 只收同边界、同 risk-channel 动态与新失败镜像。
7. deferred 只在新证据出现时二审。

## E｜pending-review 索引｜11条

1. `待审议问题_zn-x内部原则与现实掌握权分层边界_20260827.md`
2. `待审议问题_zn-x当前共现与严格补不可等同边界_20260827.md`
3. `待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`
4. `待审议问题_zn-x名义位置外部承认与现实掌握x分层边界_20260827.md`
5. `待审议问题_zn-x纯zn独立成立与责任对象不等于现实x边界_20260827.md`
6. `待审议问题_zn-x生命周期中x窗口变化与zn未来调用资格分离边界_20260827.md`
7. `待审议问题_zn-x外部承认与内部zn真实成立时序分层边界_20260828.md`
8. `待审议问题_zn-x纯x独立成立与现实掌握不需要zn共同过门边界_20260828.md`
9. `待审议问题_zn-x压力显影中原则未来调用资格与现实表达窗口分离边界_20260828.md`
10. `待审议问题_zn-x-xscope权限类型范围期限与最终归属分层边界_20260830.md`
11. `待审议问题_zn-x-protected-range稳定保护范围经真实risk-test成立边界_20260831.md`

## F｜同步债 / 权限边界

实时清单已同步到 current evidence ledger。仍需安全全文同步：

- strict-v2 专项；
- x-scope 专项；
- `zn-x火轴研究总纲_20260827.md`。

这些是 L4 状态同步债，不改变 L1/L2 canonical。

不得修改 L1、zn/x 信息卡、准度卡或 canonical 关系卡。已知 `x信息量卡v2` frontmatter 元数据债只登记，不由本清单修正。
