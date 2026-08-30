---
type: ten-yuan-fire-axis-review-registry
authority_level: L4
knowledge_status: evidence-locked
status: working-registry
axis: fire
pair: zn-x
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
may_override_canonical: false
updated: 2026-08-30
---

# zn ↔ x 火轴待审议清单

> L4 实时状态索引，不是 L2 正本。current canonical 高于本文件；达到 `pending-review` 后停止自动升格。

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
v2_negative_guards: 6
v2_negative_guard_works: 3
legacy_v1_negative_guards_pending_v2_revalidation: 0
strict_precondition_guards: 16
strict_precondition_guard_works: 5
canonical_calibration_controls: 3
historical_positive_contrasts: 1
```

当前无 ≥95 的文学 strict v2 verified positive。deferred former positives：诸葛亮卤城换班 99/94；探春 99/94；晁盖共同财物 99/93；《卢旺达饭店》Paul 99/94。

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
x_scope_boundary_guards: 6
x_scope_boundary_guard_works: 4
x_scope_dynamic_transition_controls: 1
x_scope_dynamic_transition_works: 1
knowledge_status: pending-review
pending_review: true
```

#### 正向控制｜4 controls / 3 works
- 孙悟空龙宫试兵器→金箍棒｜西游记｜99/98：trial-use ≠ stable possession/disposition。
- 刘备借荆州｜三国演义｜99/98：current control ≠ permanent ownership。
- 孙策质传国玉玺｜三国演义｜99/98：object possession/transfer ≠ represented sovereignty。
- 探春受托理家→全园抄检｜红楼梦｜99/97：local management ≠ global/final override。

#### 反向边界护栏｜6 controls / 4 works
- 王熙凤协理宁国府｜红楼梦：future revocability ≠ current non-possession。
- 天蓬元帅任内掌军→被贬｜西游记：future whole-block revocation ≠ prior current x never existed。
- 晁盖梁山共同财物｜水浒传：shared governance ≠ unilateral disposition。
- 宋江共同推举权居主位｜水浒传：collective conferral ≠ joint execution on every current decision。
- 袁绍十八路诸侯会盟｜三国演义：collective conferral does not determine execution structure。
- 孙权赤壁前战降公议｜三国演义：broad consultation ≠ joint/shared final decision。

#### 动态迁移控制｜1 control / 1 work
- **宋江｜水浒传｜99/97**：晁盖生前已有 delegated/campaign execution `x=true`，但无法否决晁盖亲征；晁盖死后、众头领共同授予权居主位后，宋江可直接重分六寨并调拨全寨军马，形成更宽 mountain-wide current operational `x=true`。锁定：**`x` 可发生 scope expansion，不只是 off/on。**

方法分账：

```text
source decision structure
≠ consultation structure
≠ final decision structure
≠ current execution structure

x lifecycle
≠ only on/off
```

## B｜当前统计

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
strict_v2_negative_guards: 6
strict_v2_negative_guard_works: 3
strict_precondition_guards: 16
strict_precondition_guard_works: 5
strict_canonical_calibration_controls: 3
x_scope_current_criterion: current-x-scope-distinction-v1_20260830
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 6
x_scope_boundary_guard_works: 4
x_scope_dynamic_transition_controls: 1
x_scope_dynamic_transition_works: 1
x_scope_knowledge_status: pending-review
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
pending_review_count: 10
```

## C｜当前反误判纪律

1. `zn+x` 共现前两端分别过门；co-occurrence ≠ strict。
2. 同 criterion_version 才累计；control 与 independent work 分账。
3. strict `x→zn` 禁止循环定义；subject-specific `x` 不跨对象私有化；多个不同 `x` 禁止 posthoc bundling。
4. local `x` ≠ global `x`；temporary custody/use/agency ≠ ownership/full disposition。
5. future whole-block revocation ≠ same-layer pre-effect veto。
6. shared governance ≠ unilateral disposition。
7. **source decision structure ≠ consultation structure ≠ final decision structure ≠ current execution structure。**
8. broad consultation / proposal / persuasion ≠ shared/joint final decision；必须另查同层 veto 与 final decision node。
9. collective conferral 不预设后续逐项 joint，也不自动产生 full-scope unilateral `x`。
10. **`x` 可以发生 scope expansion/contraction；迁移前窄 `x` 不得写成 `x=false`，迁移后宽 `x` 也不得倒填到迁移前。**
11. transient opportunity / one-off override ≠ stable disposition `x`。
12. endpoint attribution：第三方产权、保护、否决或政治节点不得倒灌主体 `x`。
13. declared/nominal protected range ≠ observed stable protected-range `x`。
14. territorial/internal-governance `x` ≠ externally exclusionary protected-range `x`。
15. evidence-locked 可被 adversarial audit 撤回。

## D｜当前高价值缺口

1. **P0：第一份 strict v2 verified positive**，不降门槛凑例。
2. **P1：protected-range 正向 risk-test**。
3. **P2：x-scope 已 pending-review，停止普通采样**。优先：真正的 consultation→joint final decision 正例；shared/joint↔unilateral execution 最小迁移；same-layer veto vs future revocation；**scope contraction** 与本轮 expansion 构成反向动态控制；表面结构不同但实际同权的反例。
4. deferred 只在新证据出现时复审。

## E｜pending-review 索引｜10条

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

## F｜治理边界

不修改 L1、zn/x 信息卡、准度卡或任何 L2 canonical。current canonical 高于本清单；历史记录保留 provenance。