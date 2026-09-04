---
type: ten-yuan-fire-axis-review-registry
authority_level: L4
knowledge_status: evidence-locked
status: working-registry
axis: fire
pair: zn-x
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
may_override_canonical: false
updated: 2026-09-04
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
x_scope_boundary_guards: 24
x_scope_boundary_guard_works: 21
x_scope_dynamic_transition_controls: 29
x_scope_dynamic_transition_works: 25
x_scope_decision_structure_calibration_controls: 6
knowledge_status: pending-review
pending_review: true
```

ordinary positive 已成熟，停止堆量。

#### 已归并 dynamic｜Papers, Please｜downstream disposition expansion
Inspector 前期已经能现实 approve/deny entrant 的 admission transition，但没有 general detention disposition。Day 5 起，对满足条件的 entrant 新增 `detain` 最终调用接口，并由 guards 现实完成 custody transfer。锁：

```text
transition-blocking x
≠ resultant-state disposition x

edge-veto only
→ rule/interface trigger
→ edge-veto + conditional downstream detention disposition
```

同一主体、同一 entrant-processing 对象层、同 criterion 下形成新的 permission-type expansion，故早期 dynamic `25/22 → 26/23`。

#### 已归并 dynamic mirror｜XCOM 2
Commander 对同一 mission-deployment roster 的 permission family 不变，Guerrilla Tactics School 的 Squad Size I / II 把现实最大部署人数 `4 → 5 → 6`。锁：

```text
same actor
+ same object layer
+ same permission type
+ quantitative cap 4 → 5 → 6
→ quantitative permission-cap expansion
```

这是 King Lear `100→50→25→0` quantitative contraction 的真正跨作品反向镜像，不得与 Harry Potter 的 term-triggered spatial/legal expansion 混算。dynamic `26/23 → 27/24`。

#### 已归并 reversible quantitative-cap｜Miracle (2004)
Viktor Tikhonov 对同一 Soviet active-skater deployment subset、同一 deploy/select permission family，在常态五人部署下经 slashing penalty 进入临时规则 gate，现实上限 `5 → 4`；penalty / power-play interval 终止后，同一权限 family 恢复 `4 → 5`。锁：

```text
same actor
+ same object layer
+ same permission family
+ quantitative cap 5 → 4 → 5
→ reversible quantitative permission-cap contraction/restoration
```

因此 current dynamic 从 `27/24 → 28/25`。本槽已填；后续不再采同机制普通案例。temporary cap contraction 不等于 permission family 消失，cap restoration 也不等于新增 permission type。

#### 已归并 execution-topology dynamic｜Papers, Please｜mandatory procedural unlock
同一 Inspector、同一 entrant admission transition、同一 deny permission 与同一 unilateral final-decision holder 下，Day 18 规则触发后，合规拒绝不再能直接由 deny stamp 一步执行，而必须先经 inspection/interrogation 解锁 reason stamp，再完成 deny+reason。锁：

```text
direct unilateral execution
→ mandatory inspection/interrogation unlock node inserted
→ procedurally gated unilateral execution

permission retained ≠ direct execution path retained
mandatory procedural unlock ≠ joint final decision
same final-decision holder ≠ same execution topology
```

该机制来自已 evidence-locked source commit `0175fa89a8531663b4e5193800eaccdd5e171207`。`Papers, Please` 已作为 independent work 进入 earlier x-scope ledger，因此只新增 topology control，不重复增加 work：current dynamic `28/25 → 29/25`。

#### 已归并 boundary guard｜Dr. Strangelove
Kong 面对 normal / backup / emergency / manual 等已枚举接口连续失败后，仍通过 direct repair / bypass 受损线路让 bomb doors 现实打开。锁：

```text
enumerated-interface exhaustion
≠ path-set exhaustion
```

只有在 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node 等 competing paths 也被审计冻结后，才允许把 `known path count = 0` 升级为 `surviving relevant path count = 0`。本条只计 boundary `23/20 → 24/21`，不计 dynamic。

#### 已填缺口纠偏｜Pacific Rim
现存 evidence-locked 资产已完整锁定 Raleigh / Gipsy Danger 的 `joint execution → unilateral emergency execution → joint restoration`，并在两阶段都有 same-object reality-test。该槽已经计入既有 dynamic ledger；只保留为基础 topology control，不重复加 control / work。

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
technical capability retained ≠ permission scope unchanged
source/task direction delta ≠ x-boundary delta
current permission type unchanged ≠ scope/cap unchanged
physical interface occupancy ≠ execution-node attribution
local/source-specific veto ≠ global target-effect veto
transition-blocking x ≠ resultant-state disposition x
joint-final decision ≠ joint execution
substitute node loss ≠ original actor automatic restoration
edge-veto retained ≠ downstream disposition already present
quantitative cap expansion ≠ new permission type
enumerated-interface exhaustion ≠ path-set exhaustion
permission retained ≠ direct execution path retained
mandatory procedural unlock ≠ joint final decision
same final-decision holder ≠ same execution topology
```

### A11｜protected-range risk-test｜current v1
criterion：`protected-range-risk-test-v1_20260831`。

```yaml
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 4
protected_range_v1_verified_negative_guard_works: 4
protected_range_v1_dynamic_controls: 1
protected_range_v1_dynamic_works: 1
knowledge_status: pending-review
pending_review: true
```

#### 已归并 negative guard｜Home Alone
Kevin 的住宅陷阱多次现实造成伤害、延迟与改道，但 Harry/Marv 仍突破住宅边界并持续追击，最终人身风险还由 Marley / police 第三方节点完成解围。锁：

```text
partial-defense-effect
+ repeated delay / injury / rerouting
≠ stable protected-range
```

本条按 current v1 从 negative `3/3 → 4/4`；不重复增加 positive/dynamic，也不锁 `zn`。

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
x_scope_boundary_guards: 24
x_scope_boundary_guard_works: 21
x_scope_dynamic_transition_controls: 29
x_scope_dynamic_transition_works: 25
x_scope_decision_structure_calibration_controls: 6
x_scope_knowledge_status: pending-review
protected_range_current_criterion: protected-range-risk-test-v1_20260831
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 4
protected_range_v1_verified_negative_guard_works: 4
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
11. edge/transition control 与 resultant-state disposition 分账；成功 veto 一个 transition 不推出后续状态任意处分。
12. final-decision topology 与 execution topology 正交；joint-final 不推出 joint execution，role-divided execution 也不反推 joint-final。
13. execution restoration 必须在原主体重新进入 same-object current routing 后通过 reality-test；替代节点退出本身不够。
14. term/age/status trigger 只有在明确 permission gate 变化并经 transition 后 reality-test 时才可计 scope expansion；名义“成年/毕业/解禁”本身不够。
15. downstream resultant-state disposition 必须单独 reality-test；edge veto 的存在与 detention/custody/disposition interface 的新增、撤销分别记。
16. quantitative permission-cap 动态必须固定 actor/object/permission family，只把可现实纳入对象数的 cardinality ceiling 作为迁移变量。
17. protected-range 中局部防御节点反复成功只证明 partial-defense-effect；若风险最终突破同一保护边界，不能升级为 stable protected-range。
18. path exhaustion 必须先做 path-set completeness audit；已枚举 interface 全失败不等于 relevant path set 清零，direct repair / bypass / delegated / parallel / emergency / alternate execution routes 均需冻结。
19. execution topology 必须与 final-decision topology 分账；同一 final decision holder 保持不变时，mandatory procedural unlock node 的插入仍可构成独立 dynamic transition。

## D｜当前高价值缺口

1. **P0：strict-v2 第一份 verified positive**，仍为 `0/0`。
2. **P1：path exhaustion dynamic**：多个 independent paths 预先自然识别 → alternatives 逐一关闭 → direct repair / bypass / delegated / parallel / emergency / alternate execution paths 完整审计 → surviving relevant path count=0 → target-effect reality-test OFF。
3. **P2：quantitative cap 可逆动态已填**：Miracle (2004) 已提供 same actor + same object layer + same permission family 的 `5→4→5` reality-test；停止继续采同机制普通案例。若未来出现不同 trigger/topology 的 `low→high→low`，仅在能形成新最小差异时再收。
4. **P3：edge-veto / downstream disposition 的撤回或分叉失败镜像**：已有 The Terminal 负边界与 Papers, Please 正向扩张；继续找 detention/disposition interface 后续被撤回但 edge veto 保留，或新增 disposition 的 eligible subset 真实缩窄。
5. **P4：mandatory procedural unlock 已填**：Papers, Please Day 18 已锁 `direct unilateral execution → procedurally gated unilateral execution`，且 final-decision holder 不变。停止采“只是多一道程序门”的同机制普通案例；后续 execution-topology 只收不同 trigger/topology，例如 execution node 分裂、并联、强制共享、撤销或恢复。
6. **P5：protected-range** 只收同边界、同 risk-channel 动态与新失败镜像；Home Alone 的 partial-defense failure 已进入 negative 4/4，不再重复同攻击。
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

实时清单现已吸收 Papers, Please Day18 mandatory procedural execution gate，并将 x-scope dynamic current truth 对齐为 `29 controls / 25 independent works`。working ledger 需同步到同一 `29/25`；strict-v2 专项、x-scope 专项与 `zn-x火轴研究总纲_20260827.md` 仍需按 current evidence truth 安全文同步；这些是 L4 状态同步债，不改变 L1/L2 canonical。

不得修改 L1、zn/x 信息卡、准度卡或 canonical 关系卡。已知 `x信息量卡v2` frontmatter 元数据债只登记，不由本清单修正。