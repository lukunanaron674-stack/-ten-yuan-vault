---
type: ten-yuan-fire-axis-state-sync
authority_level: L4
knowledge_status: evidence-locked
status: state-correction
axis: fire
pair: zn-x
criterion_version: protected-range-risk-test-v1_20260831
fact_confidence: 99
classification_confidence: 99
counter_increment: false
work_increment: false
created: 2026-09-03
---

# zn↔x 火轴状态同步｜Home Alone 已计入 evidence layer，待审议清单 protected-range negative 基数滞后

## 0｜启动对齐

本轮写前以 `main@cbe05d66c843ca62581870aa85f67efbd653b3ca` 为准。按 L0 启动纪律重读最新 main / 最近 commits，并对齐 L1 十元—五行正本 v1.6、zn/x current 信息卡与准度/补卡路由、火轴待审议清单、研究总纲、strict-v2、x-scope 与 protected-range 专项。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

## 1｜本轮压力测试结果

优先按 current D 区寻找 P0 strict-v2、P1 path-exhaustion dynamic 与 protected-range 新失败镜像。未发现能够在本轮达到事实与分类双 ≥95、且不重复现有机制的新样本，因此不制造新的案例 control。

但启动审计发现一个可验证的 current 状态漂移：

- `运行记录_zn-x-protected-range部分防御有效但稳定范围失败_HomeAlone..._20260903.md` 已在 `cbe05d66...` 锁为 `evidence-locked`；
- 该记录 frontmatter 明确：`protected_range_v1_verified_negative_guard_increment: true` 与 `...work_increment: true`；
- 记录正文写前基数为 negative `3 controls / 3 works`，并明确本案变化为 `3/3 → 4/4`；
- 但同一 HEAD 下 `zn-x火轴待审议清单.md` 的 A11 与 B ledger 仍写 negative `3/3`。

因此这是 evidence layer 已新增、working registry 尚未吸收的同步债，不是理论冲突。

## 2｜有效统计纠偏

在不重复计数 Home Alone 的前提下，current effective protected-range ledger 应读作：

```yaml
protected_range_v1_verified_positive_controls: 4
protected_range_v1_verified_positive_works: 4
protected_range_v1_verified_negative_guards: 4
protected_range_v1_verified_negative_guard_works: 4
protected_range_v1_dynamic_controls: 1
protected_range_v1_dynamic_works: 1
knowledge_status: pending-review
```

本状态同步自身：

```yaml
protected_range_positive_increment: false
protected_range_negative_increment: false
protected_range_dynamic_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
x_scope_increment: false
```

即：**只修 effective truth，不重复增加 control / work。**

## 3｜为什么不是新理论结论

Home Alone 已锁机制仍是：

```text
partial-defense-effect
+ repeated delay / injury / rerouting
≠ stable protected-range
```

本轮没有新增第二种 protected-range 失败机制，也没有修改 `protected-range-risk-test-v1_20260831`。只是确认 L4 working registry 没有及时吸收已经存在的 L4 evidence。

## 4｜strict-v2 / x-scope 状态

strict-v2 verified positive 继续：

```text
0 controls / 0 works
```

本轮没有为破零降低门槛。未把 protected-range 的局部防御现实效果倒推为 `zn`，也未把产权、身份、家庭位置、第三方 Marley / police 节点倒灌成 Kevin 的 x。

x-scope ordinary/dynamic/decision 亦不增加。

## 5｜下一轮最高信息增益

按 current D 区继续优先：

1. P0：天然对象构成型 strict-v2 第一份 verified positive；
2. P1：path-exhaustion dynamic，要求多个真正 independent target-effect paths 逐一关闭，并在 surviving-path count = 0 后出现 target-effect reality-test OFF；
3. P2：same actor + same permission family quantitative cap 可逆动态 `high→low→high` 或反向；
4. protected-range 仅接受同 boundary / same risk-channel 的真正动态或新失败机制。

不要再把 Home Alone 计第二次，也不要因为 working registry 仍显示 `3/3` 就误认为该负例尚未进入 evidence layer。
