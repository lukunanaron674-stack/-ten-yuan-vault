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
strict_precondition_guards: 14
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

#### strict precondition guards｜14 / 5 works
既有12条继续有效；新增：

13. **金池长老借袈裟 99/98**：`temporary custody / viewing x=true`，但完整处分/长期归属 `x=false`。锁 `authorized temporary custody ≠ full disposition / ownership x`；禁止 `x-scope laundering`。
14. **孙悟空金兜山画圈 99/98**：建立并宣称保护边界，不等于现实 protected-range `x` 已被验证。缺少“对象仍在边界内 + 风险真实测试 + 边界实际阻断/改变结果”观测。锁 `declared protective range ≠ observed protected-range x`。

两条都来自《西游记》，所以 control 由12增至14，independent works 仍为5。

#### canonical calibration｜3
《辛德勒的名单》《V字仇杀队》既有两次 gate calibration 继续有效；新增《辛德勒的名单》people-anchor competition 回测：

```text
people/object anchor ≠ protected-range / organized-boundary anchor
被保护者本人存在 ≠ 稳定保护范围已经成立
people presence alone ≠ 自动否决 x→zn
```

subject-specific `x` 若真实形成稳定受保护群体、持续资源范围或可调用“我方”边界，仍可能满足 canonical `x→zn`；但必须高纯归因给该主体 `x`，不得把第三方产权/保护/否决节点倒灌进来。

### A6｜lifecycle
`3 positive / 3 works + 2 negative guards / 2 works / pending-review`

### A7｜名义位置 / 外部承认 vs 现实 x
`3 positive / 3 works + 2 negative guards / 2 works + 1 revocable-but-real boundary / 1 work / pending-review`

### A8｜被承认 vs 真正成立
`3 positive / 3 works + 1 negative guard / 1 work / pending-review`

### A9｜pressure display
`3 positive / 3 works + 2 negative guards / 2 works + 1 historical positive contrast / pending-review`

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
strict_precondition_guards: 14
strict_precondition_guard_works: 5
strict_canonical_calibration_controls: 3
strict_historical_positive_contrasts: 1
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
pending_review_count: 9
```

## C｜当前反误判纪律

1. 放弃/失去 `x` ≠ 自动 `zn`；historical `zn` ≠ permanent identity。
2. `zn+x` 共现前两端分别过门；co-occurrence ≠ strict。
3. 同 criterion_version 才累计；control 与 independent work 分账。
4. strict `x→zn` 禁止循环定义；先用不引用被测 `x` 的语言命名 `zn`。
5. subject-specific/shared-governance `x` 不跨对象私有化；多个不同 `x` 禁止 posthoc bundling。
6. local `x` ≠ global `x`；future revocability ≠ prior current x never existed。
7. transient opportunity / one-off effective override ≠ stable disposition `x`。
8. temporary custody/use/agency `x` ≠ ownership/full disposition `x`。
9. 物在我手 ≠ 对象完整归我处分；权限类型必须精确。
10. execution/amplification/settlement interface ≠ object-constituting anchor。
11. decisive outcome control ≠ 自动 `x→zn`。
12. standing commitment / formed expectation 可本身构成 same-window anchor；履约能力 ≠ 承诺对象。
13. endpoint attribution：第三方产权、保护、否决或政治节点不得倒灌进主体 `x`。
14. people/object anchor 与 protected-range/organized-boundary anchor 分层。
15. 被保护者本人存在不自动否决 protected-range `x→zn`；范围型 `x` 仍需证明真实形成稳定“我方”边界。
16. declared protected range / 能力声明 / 设定威望 ≠ evidence-locked protected-range `x`。
17. protection-range 至少需要 boundary-on + object-inside + risk-test + observed exclusion/change，或同机制独立复验。
18. 高责任/高代价、自罚、自限、战略释放、角色规则同构都不能替 `zn` 独立过门。
19. pressure-display 解压必须 same principle + same boundary + same conflict-order criterion。
20. evidence-locked 可被 adversarial audit 撤回。

## D｜当前高价值缺口

1. **P0：第一份 strict v2 verified positive**。继续寻找天然、单一、stable、subject-specific 的对象构成型 `x`，不降门槛凑例。
2. **P1：protected-range / organized-boundary 正向**。必须有实际 effect-under-boundary 观测，并排除第三方等价范围。
3. **P2：x scope 最小差异**。优先同人同物：A 仅保管/借用/代理，B 真正获得最终归属/排除原节点/自由处分。
4. 诸葛亮卤城、探春、晁盖、Paul 只在出现新证据时复审，不重复旧攻击。
5. 其他已 pending-review 槽停止堆普通正例，只找新型反例/边界。

## E｜pending-review 索引｜9条

1. `待审议问题_zn-x内部原则与现实掌握权分层边界_20260827.md`
2. `待审议问题_zn-x当前共现与严格补不可等同边界_20260827.md`
3. `待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`
4. `待审议问题_zn-x名义位置外部承认与现实掌握x分层边界_20260827.md`
5. `待审议问题_zn-x纯zn独立成立与责任对象不等于现实x边界_20260827.md`
6. `待审议问题_zn-x生命周期中x窗口变化与zn未来调用资格分离边界_20260827.md`
7. `待审议问题_zn-x外部承认与内部zn真实成立时序分层边界_20260828.md`
8. `待审议问题_zn-x纯x独立成立与现实掌握不需要zn共同过门边界_20260828.md`
9. `待审议问题_zn-x压力显影中原则未来调用资格与现实表达窗口分离边界_20260828.md`

## F｜治理边界

不修改 L1、zn/x 信息卡、准度卡或任何 L2 canonical。current canonical 高于本清单；历史记录保留 provenance。