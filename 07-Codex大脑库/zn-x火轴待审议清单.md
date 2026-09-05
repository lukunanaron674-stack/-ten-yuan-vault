---
type: ten-yuan-fire-axis-review-registry
authority_level: L4
knowledge_status: evidence-locked
status: working-registry
axis: fire
pair: zn-x
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
may_override_canonical: false
updated: 2026-09-06
---

# zn ↔ x 火轴待审议清单

> L4 实时状态索引，不是 L2 正本。current canonical 高于本文件；达到 `pending-review` 后停止自动升格。木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

## A｜当前研究槽

- A1 zn vs x 最近邻：`3 positive works + 2 negative guards / pending-review`
- A2 pure x：`3 positive controls / 3 works / pending-review`
- A3 pure zn：`3 positive controls / 3 works + 1 negative guard / 1 work / pending-review`
- A4 zn+x 当前共现：`3 positive controls / 3 works + 6 negative guards / 4 guard works / pending-review`
- A6 lifecycle：`3 positive / 3 works + 2 negative guards / 2 works / pending-review`
- A7 名义位置/外部承认 vs 现实 x：`3 positive / 3 works + 2 negative guards / 2 works + 1 revocable-but-real boundary / 1 work / pending-review`
- A8 被承认 vs 真正成立：`3 positive / 3 works + 1 negative guard / 1 work / pending-review`
- A9 pressure display：`3 positive / 3 works + 2 negative guards / 2 works + 1 historical positive contrast / pending-review`

### A5｜strict zn↔x｜current v2
criterion：`current-layer-specific-anchor-gap-v2_20260829`

```yaml
v2_verified_positive_controls: 1
v2_verified_positive_works: 1
v2_deferred_former_positive_controls: 3
v2_deferred_former_positive_works: 3
v2_deferred_new_candidates: 0
v2_deferred_new_candidate_works: 0
v2_negative_guards: 8
v2_negative_guard_works: 5
legacy_v1_negative_guards_pending_v2_revalidation: 0
strict_precondition_guards: 21
strict_precondition_guard_works: 10
canonical_calibration_controls: 3
historical_positive_contrasts: 1
```

#### current verified positive｜Defiance / Tuvia Bielski
source evidence：`f28af93dea9ad02365cd29ff1fca1a276f590e0b`。same current window、same object layer、zn/x 独立过门、subject-specific current admission/governance boundary、第三因素冻结与双向 gap 均通过。只计 strict `+1 control / +1 work`。

#### deferred→negative 状态迁移｜Hotel Rwanda / Paul Rusesabagina
source evidence：`cb6cd5f5203be0e57cec2fdb9e1f4bcb217d4f3b`；状态纠偏：`ff9f260195747afdef400d24dc95d8d3841259a8`。

Paul 的救人排序 `zn` 保留，但 subject-specific `x` 只能稳定归因到酒店内部运营、安置、物资使用与局部进入协调；Sabena 产权、住客并行外联、警方/军方/外交/联合国等现实保护锚点不能倒灌成 Paul 的 x。故同一 criterion 下从 `deferred former positive` 移到 `negative guard`，不是新增 control/work：

```text
deferred 4/4 → 3/3
negative 7/4 → 8/5
```

#### strict-precondition 新护栏｜A Man for All Seasons / Thomas More
source evidence：`b1192cc5e8e2b73f3b8e74f0beb47cb150dbdf61`。

锁：`subject-exclusive authorship / ordinary self-agency ≠ x`。本人只能决定自己的签名、宣誓、沉默或拒绝，首先是行动作者资格，不自动构成“归我掌握”的对象/资源/权限边界。计 precondition：`20/9 → 21/10`，不计 strict negative、x-scope ordinary guard 或 protected-range。

### A10｜x scope 权限范围最小差异｜current v1
criterion：`current-x-scope-distinction-v1_20260830`

```yaml
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 26
x_scope_boundary_guard_works: 21
x_scope_dynamic_transition_controls: 29
x_scope_dynamic_transition_works: 25
x_scope_decision_structure_calibration_controls: 6
knowledge_status: pending-review
pending_review: true
```

current 核心纪律继续有效：permission_type、scope、quantitative_cap、term、revocability、return_obligation、same-layer veto/global override、ultimate title、consultation/final decision/execution/co-decision topology 必须分账；`enumerated-interface exhaustion ≠ path-set exhaustion`；`permission retained ≠ direct execution path retained`；`edge-veto retained ≠ downstream disposition already present`。

#### path-set 主体归因护栏｜Deepwater Horizon / Macondo
source evidence：`f34f226e7a31e80bd4d59de1187cf63d906eac90`。

锁：`system-level target-effect path set ≠ actor-indexed x execution path set`。人工 EDS、自动 deadman/autoshear 与后续外部 ROV 虽都指向封井效果，但不能因 target effect 相同而倒灌成同一主体的 x。真正 path-set exhaustion 必须先按 actor 建索引，再审 direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node。该证据为 historical control，只计 x-scope boundary guard：`24/21 → 25/21`，不增加 independent work，不计 dynamic/strict/protected-range。

#### path-set 对象层/执行层护栏｜United Airlines Flight 232
source evidence：`2f07be9a238fb0969221e5db33c66dcb9de40957`。

锁：`same actor + same higher-level target effect ≠ same x execution-object path set`。Flight 232 三套液压系统全部丧失后，正常液压飞控面执行链已归零；但同一机组仍可通过发动机差动推力有限影响飞机整体航迹。若被测 x 锁在“正常液压飞控面操纵”，差动推力是跨 actuator/object layer substitute，不是原 x surviving path；若被测对象提升为“飞机整体航迹控制”，差动推力就必须计入 relevant path-set。故 path exhaustion 除 actor index 外，还必须锁 object layer / actuator layer / target-effect layer。该证据为 historical control，只计 x-scope boundary guard：`25/21 → 26/21`，不增加 independent work，不计 dynamic/strict/protected-range。

### A11｜protected-range risk-test｜current v1
criterion：`protected-range-risk-test-v1_20260831`

```yaml
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 5
protected_range_v1_verified_negative_guard_works: 5
protected_range_v1_dynamic_controls: 2
protected_range_v1_dynamic_works: 2
knowledge_status: pending-review
pending_review: true
```

#### Home Alone｜partial-defense failure
锁：`partial-defense-effect + repeated delay/injury/rerouting ≠ stable protected-range`。

#### The Purge｜boundary-state ON false-positive guard
source evidence：`8c3d15594e1b3c7a359963deca2912e09130be9b`。

James 真实重新启用住宅 security boundary，状态位/控制接口/边界部署均为 ON，但其本人已明确系统无法承受 systematic assault，随后真实强攻突破住宅边界。锁：

```text
boundary-state ON / armed / re-enabled
≠ stable protected-range ON
```

本案与 Home Alone 不同：新增最小差异是“授权主体重新部署边界状态成功”仍不能替代真实 risk-test。计 protected-range negative `4/4 → 5/5`，不计 positive/dynamic/x-scope/strict。

#### World War Z｜risk-topology shift dynamic
source evidence：`6480461b6ac71fbf4fa188ca4d8f2697e9f0f96d`；专项同步：`91488a197d21259f1ddd50ba440e734879a620ec`。

锁：同一 broad risk family 下，过去对 topology A 的 verified PASS 不自动外推到 topology B；underlying boundary/governance `x` retained 也不保证 protected-range invariant。与 The Martian 的 same-topology `ON→OFF→ON` 分开计，故 dynamic effective：`1/1 → 2/2`。

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
strict_v2_verified_positive_controls: 1
strict_v2_verified_positive_works: 1
strict_v2_deferred_former_positive_controls: 3
strict_v2_deferred_former_positive_works: 3
strict_v2_negative_guards: 8
strict_v2_negative_guard_works: 5
strict_precondition_guards: 21
strict_precondition_guard_works: 10
strict_canonical_calibration_controls: 3
x_scope_current_criterion: current-x-scope-distinction-v1_20260830
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 26
x_scope_boundary_guard_works: 21
x_scope_dynamic_transition_controls: 29
x_scope_dynamic_transition_works: 25
x_scope_decision_structure_calibration_controls: 6
x_scope_knowledge_status: pending-review
protected_range_current_criterion: protected-range-risk-test-v1_20260831
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 5
protected_range_v1_verified_negative_guard_works: 5
protected_range_v1_dynamic_controls: 2
protected_range_v1_dynamic_works: 2
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

## C｜current 方法纪律

1. 同 criterion_version 才累计；control 与 independent works 分账。
2. `zn+x` 共现前两端分别过门；co-occurrence ≠ strict。
3. strict `zn→x` 冻结 x 端 independent purpose/ranking anchors；`x→zn` 只要求 relevant current reality-anchor gap，不恢复 absolute-unique-anchor。
4. subject-specific attribution；第三方产权、保护、veto、制度节点不得倒灌主体 x。
5. local/global、nominal/real、current/ultimate、use/ownership、consultation/final-decision/execution 分账。
6. permission 迁移记录 `from→to + trigger + same-layer reality-test`。
7. protected-range 按 boundary/object/risk-channel/ingress-path/ingress-topology 分账；no-test / failed-test / successful-test 分开。
8. `partial-defense-effect ≠ stable protected-range`；`boundary-state ON ≠ successful risk-test`；`topology-A PASS ≠ topology-B PASS`。
9. path exhaustion 先做完整 relevant path-set audit，不能用已枚举接口失败替代；system-level target-effect path set 与 actor-indexed x execution path set 分账；同 actor 仍须继续分 object layer / actuator layer / target-effect layer，跨层 workaround 不能在未定对象层时随意算成原 x surviving path。
10. evidence-locked 可被 adversarial audit 在同 criterion 下撤回/换槽；换槽不重复加 control/work。
11. strict-v2 已有首个 positive 后，下一正向只收跨题材、跨对象机制 adversarial replication。

## D｜当前高价值缺口

1. P0：strict-v2 第二份跨机制 verified positive；Paul 已退出 deferred 自动复采池，current deferred 仅 3/3。
2. P1：真正 path-set exhaustion：同一 actor / object layer / actuator-or-effect family / current window 下，先完成 actor-indexed relevant path-set completeness audit，再验证 surviving path `n>1 → 1 → 0` 与该被测层 target-effect reality-test OFF；system-level alternate nodes 与跨 object/actuator-layer substitutes 单独冻结。
3. P2：protected-range 仅收 same actor / same boundary / same risk topology 下的 repair-failed reality-test 镜像，或其他真正新拓扑动态；World War Z 已填 topology-shift `ON→OFF`，不再采同机制换皮。
4. P3：edge-veto 保留而 downstream disposition 撤回/eligible subset 缩窄。
5. P4：execution topology 只收不同 trigger/topology；mandatory procedural unlock 基础槽已填。

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

realtime registry 本文件已对齐到：strict `1/1 verified + 3/3 deferred + 8/5 negative + 21/10 precondition`；x-scope `4/3 + 26/21 + 29/25 + 6`；protected-range `4/4 positive + 5/5 negative + 2/2 dynamic`。

strict、x-scope、protected-range 三专项均已对齐 current evidence truth；working ledger 与研究总纲需同步 protected-range dynamic `1/1 → 2/2`。这些是 L4 状态同步债，不改变 L1/L2 canonical。

canonical 元数据债继续仅登记：L1 v1.6 明确 `x=阴火`，历史 x 信息卡 frontmatter 残留映射不得由 L4 越权修复。