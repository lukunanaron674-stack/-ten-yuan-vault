---
type: ten-yuan-fire-axis-state-correction
authority_level: L4
knowledge_status: evidence-locked
status: state-correction
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
counter_increment: false
work_increment: false
may_override_canonical: false
created: 2026-09-04
---

# 状态同步｜Papers, Please 已填 conditional-subset disposition 子槽，P3 不应继续把它列为空缺

## 0｜启动对齐

本轮以写前 `main@277427691ab95139155b891f17ded0fd910001d5` 为准。启动时重读最近 commits，并按 current canonical 对齐 L0/L1 门禁、L1 十元—五行正本 v1.6、zn/x 信息卡、准度/补卡路由、火轴待审议清单、研究总纲、strict-v2、x-scope 与 protected-range current。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

## 1｜本轮压力测试结果

P0 strict-v2 与 P1 path-exhaustion 本轮没有出现同时满足事实≥95、分类≥95且非旧机制换皮的新 evidence，因此不制造新 control。

但 current `zn-x火轴待审议清单.md` 的 P3 存在内部状态漂移：它一方面已经归并 `Papers, Please` dynamic，明确写明 Inspector Day 5 起只对“满足条件的 entrant”新增 `detain` downstream disposition；另一方面 D/P3 又把“新增 disposition 只对对象子集成立的动态”继续列为尚待寻找的高价值材料。

## 2｜已存在 evidence 的明确结构

现存 evidence-locked 记录：

`运行记录_zn-x-xscope转移否决到结果态处分权限扩张_PapersPlease_Inspector前期可approve-deny入境而Day5起对合格差异entrant新增detain最终调用接口且guards现实执行故edge-veto与downstream-state-disposition需分账且可动态扩张_20260903.md`

已经锁定：

```text
Stage A:
approve / deny admission edge
but no general detention disposition

Stage B / Day 5+:
approve / deny retained
+ detain only on eligible-discrepancy entrant subset
+ Inspector selects detain
+ guards reality-test custody transfer

therefore:
new downstream disposition
≠ global disposition over all entrants
```

其 x-scope 拆分还明确写有：

```yaml
order_or_invoke_detention:
  stage_A: false_or_unavailable
  stage_B: true_on_eligible_discrepancy_reality_tested
arbitrary_detention_of_any_entrant:
  stage_A: false
  stage_B: false
scope:
  stage_B: admission-edge approval/denial + conditional eligible-entrant detention-selection
```

因此“新增 disposition 只对对象子集成立”不是未来缺口，而是 Papers, Please 本身已经 reality-tested 的组成部分。

## 3｜最小差异与边界

本轮不把 Papers, Please 重算为第二个 dynamic control，也不增加 independent work。真正仍未填的是更窄的反向动态：

```text
same actor
+ same object layer
+ edge-veto retained
+ previously reality-tested downstream disposition interface
→ later revoked / narrowed / disabled
→ downstream disposition reality-test OFF or reduced
```

或者：

```text
same actor / same permission family
eligible subset A previously detainable
→ real trigger
→ subset A loses detain interface while admission-edge veto remains
```

这才是与现有 `edge-veto only → conditional subset disposition ON` 正向扩张构成真正反向镜像的材料。

## 4｜第三因素冻结

- guards 只计 physical custody execution node，不倒灌成 Inspector 的 co-final-decision node；
- Ministry/game protocol 是 eligibility/global override，不倒灌为 Inspector 的 arbitrary disposition；
- `deny` 仍只证明 admission-edge veto，不能替代 detention interface；
- conditional subset 不得倒灌为 global entrant disposition；
- 不从 Inspector 的职业/身份/阵营/任务结果倒推 zn 或 x。

## 5｜strict-v2

本轮不锁 zn，也不新增 strict evidence。Inspector 的处理行为仍受制度任务、处罚/收益、即时规则与玩家选择等 competing anchors 解释；detention x 本身也有独立制度用途。因此：

```yaml
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
```

strict-v2 verified positive 继续 `0 controls / 0 works`。

## 6｜统计

本轮是状态纠偏，不重复计 evidence：

```yaml
x_scope_positive_increment: 0
x_scope_boundary_increment: 0
x_scope_dynamic_transition_increment: 0
x_scope_decision_structure_calibration_increment: 0
protected_range_increment: 0
counter_increment: false
work_increment: false
```

current ledger 保持：x-scope boundary `24/21`、dynamic `27/24`、decision calibration `6`；protected-range positive `4/4`、negative `4/4`、dynamic `1/1`；strict-v2 verified positive `0/0`。

## 7｜对待审议 P3 的纠偏建议

后续 P3 应从：

```text
继续找 detention/disposition interface 后续被撤回但 edge veto 保留，
或新增 disposition 只对对象子集成立的动态
```

收缩为：

```text
优先找 downstream disposition 的真实撤回/缩窄镜像：
已 reality-tested disposition ON
→ trigger
→ disposition OFF / narrower subset
while edge-veto retained
```

Papers, Please 已经填掉 conditional-subset positive，不再重复采样同机制。

## 8｜下一轮

1. P0：strict-v2 第一份 verified positive，继续优先天然对象构成型 x，绝不为破零降门槛。
2. P1：真正 path exhaustion dynamic，必须先完成 path-set completeness audit，再锁 `n>1 → 1 → 0 → target effect OFF`。
3. P2：quantitative cap 同人物同权限 family 的可逆动态。
4. P3：只找 disposition `ON→OFF/narrower` 且 edge-veto retained 的反向镜像，不再找 Papers, Please 已经证明的 conditional-subset positive。
