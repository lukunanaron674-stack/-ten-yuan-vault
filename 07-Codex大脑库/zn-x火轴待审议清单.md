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

#### verified positive｜0
当前无 ≥95 的文学 strict v2 verified positive。

#### deferred former positives｜4 / 4 works
- 诸葛亮卤城换班 99/94：standing commitment / formed expectation 与履约接口竞争。
- 探春理家 99/94：卡 `criterion_identity_across_contexts`。
- 晁盖共同财物 99/93：共同公库 subject-specific `x` 归因不足95。
- 《卢旺达饭店》Paul 99/94：endpoint attribution + people anchor / protected-range anchor 分层仍不足95。

#### current v2 negative guards｜6 / 3 works
唐僧；关羽挂印封金；严颜；晁盖“不伤无关者”；诸葛亮白帝托孤后摄政；关羽华容道。作品去重：西游 + 三国 + 水浒。

#### strict precondition guards｜16 / 5 works
当前关键 scope/protection 护栏：金池借袈裟锁 temporary custody ≠ full disposition；金兜山画圈锁 declared range ≠ observed protected-range；柴进丹书铁券锁 nominal protection credential ≠ stable protected-range；孙悟空花果山锁 territorial/internal-governance ≠ externally exclusionary protected-range。

#### canonical calibration｜3
《辛德勒的名单》《V字仇杀队》两次 gate calibration + 《辛德勒的名单》people-anchor competition 回测。只校准 L4 gate，不计普通 strict 正/负 cross-work。

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
x_scope_boundary_guards: 3
x_scope_boundary_guard_works: 3
knowledge_status: pending-review
pending_review: true
```

#### 正向控制｜4 controls / 3 works
1. **孙悟空龙宫试兵器→金箍棒｜西游记｜99/98**：temporary handling/trial-use 与 stable possession/use/disposition 分层；**能用 ≠ 归我**。
2. **刘备借荆州｜三国演义｜99/98**：current territorial-governance/control 与 ultimate-title/permanent ownership 分层；**当前能管 ≠ 永久归我**。
3. **孙策质传国玉玺｜三国演义｜99/98**：object possession/transfer 与 represented authority/sovereignty 分层；**能处分象征物 ≠ 能处分其代表权能**。
4. **探春受托理家→全园抄检｜红楼梦｜99/97**：local current management 与 global/final override 分层；**局部真实 x ≠ 全局最终 x**。

#### 反向边界护栏｜3 controls / 3 works
1. **王熙凤协理宁国府｜红楼梦｜99/98**：current local disciplinary `x=true` 与 future revocability/higher-scope override 可以同时成立。
2. **天蓬元帅掌八万水军→被贬｜西游记｜99/98**：future whole-block revocation 是 lifecycle end，不能追溯性否定任内已经现实成立的 current `x`；**future revocability ≠ current non-possession**。
3. **晁盖梁山共同财物治理｜水浒传｜99/98**：组织 shared-governance `x=true`，不等于寨主个人 unilateral final disposition `x=true`；**“我们能处分” ≠ “我能单方处分”**。

达到 3 positive works 且反向护栏也达到 3 independent works，继续保持 `pending-review`；停止堆普通同型正例/护栏，转向最小差异与反例攻击。

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
strict_v2_deferred_new_candidates: 0
strict_v2_deferred_new_candidate_works: 0
strict_v2_negative_guards: 6
strict_v2_negative_guard_works: 3
strict_legacy_v1_negative_guards_pending_revalidation: 0
strict_precondition_guards: 16
strict_precondition_guard_works: 5
strict_canonical_calibration_controls: 3
strict_historical_positive_contrasts: 1
x_scope_current_criterion: current-x-scope-distinction-v1_20260830
x_scope_positive_controls: 4
x_scope_positive_works: 3
x_scope_boundary_guards: 3
x_scope_boundary_guard_works: 3
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

1. 放弃/失去 `x` ≠ 自动 `zn`；historical `zn` ≠ permanent identity。
2. `zn+x` 共现前两端分别过门；co-occurrence ≠ strict。
3. 同 criterion_version 才累计；control 与 independent work 分账。
4. strict `x→zn` 禁止循环定义；先用不引用被测 `x` 的语言命名 `zn`。
5. subject-specific/shared-governance `x` 不跨对象私有化；多个不同 `x` 禁止 posthoc bundling。
6. local `x` ≠ global `x`；future revocability ≠ prior current x never existed。
7. transient opportunity / one-off effective override ≠ stable disposition `x`。
8. temporary custody/use/agency `x` ≠ ownership/full disposition `x`；物在我手 ≠ 对象完整归我处分。
9. `x` 不是单一布尔值：permission type / scope / term / revocability / return obligation / ultimate title 分账。
10. **future whole-block revocation ≠ same-layer pre-effect veto**；前者是 lifecycle，后者才直接威胁 current `x`。
11. **shared governance x ≠ unilateral disposition x**；组织能处分 ≠ 领导者个人能单方处分。
12. current-control 可以真实，同时 ultimate-title/permanent ownership 仍受限。
13. execution/amplification/settlement interface ≠ object-constituting anchor；decisive outcome control ≠ 自动 `x→zn`。
14. standing commitment / formed expectation 可本身构成 same-window anchor；履约能力 ≠ 承诺对象。
15. endpoint attribution：第三方产权、保护、否决或政治节点不得倒灌进主体 `x`。
16. people/object anchor 与 protected-range/organized-boundary anchor 分层；people presence alone 不自动否决范围型 `x→zn`。
17. declared protected range / 能力声明 / 设定威望 ≠ evidence-locked protected-range `x`。
18. territorial/internal-governance `x` ≠ externally exclusionary protected-range `x`；内部能管 ≠ 外部一定进不来。
19. protection-range 正向优先要求 boundary-on + object-inside + risk-test + observed exclusion/change，并排除第三方等价保护。
20. 名义法律/血统保护资格 ≠ stable protected-range `x`；risk-test 失败时必须判现实保护边界未成立。
21. 高责任/高代价、自罚、自限、战略释放、角色规则同构都不能替 `zn` 独立过门。
22. pressure-display 解压必须 same principle + same boundary + same conflict-order criterion。
23. evidence-locked 可被 adversarial audit 撤回。

## D｜当前高价值缺口

1. **P0：第一份 strict v2 verified positive**。不降门槛凑例；优先天然、单一、stable、subject-specific 的对象构成型 `x`。
2. **P1：protected-range / organized-boundary 正向 risk-test**。需要对象在边界内、外部风险真实进入、subject-specific `x` 稳定阻断/改道同一结果，并排除第三方等价保护。
3. **P2：x-scope 已 pending-review，停止普通采样**。下一步只做 same-layer pre-effect veto vs future revocation、shared/joint vs unilateral、scope lifecycle、以及“表面 scope 不同但实际同权”的反例攻击。
4. deferred 只在新证据出现时复审；其他成熟槽只找新型反例/边界。

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