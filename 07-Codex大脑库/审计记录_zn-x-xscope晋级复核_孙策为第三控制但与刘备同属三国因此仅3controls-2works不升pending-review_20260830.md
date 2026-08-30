---
type: ten-yuan-fire-axis-x-scope-promotion-audit
authority_level: L4
knowledge_status: evidence-locked
status: active-audit
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
governance: L1-L6文件权力与知识成熟度双轴协议_v2.0_20260827
sample_type: cross-work-count-and-promotion-gate-audit
fact_confidence: 99
classification_confidence: 99
x_scope_controls_after_audit: 3
x_scope_independent_works_after_audit: 2
pending_review_allowed: false
may_override_canonical: false
updated: 2026-08-30
---

# zn ↔ x 火轴审计记录｜x scope 晋级复核：孙策是第三控制，但不是第三独立作品

## 1｜触发

最新 `main` 已新增：

- 《西游记》孙悟空龙宫试兵器 → 金箍棒：临时试用 `x` 与长期排他占有/处分 `x` 分层；
- 《三国演义》刘备借荆州：current 军政治理 `x` 与 ultimate-title / permanent full-disposition `x` 分层；
- 《三国演义》孙策质传国玉玺：凭证物件处分 `x` 与凭证所代表皇权/正统处分 `x` 分层。

三条均属于 `current-x-scope-distinction-v1_20260830` 下的权限范围边界资产。

## 2｜本轮压力测试问题

是否可以因为出现第三条 `x scope` evidence-locked control，就把该槽写成：

```text
3 controls / 3 independent works
→ pending-review
```

答案：**不可以。**

原因不是案例质量不足，而是跨作品计数必须去重作品。

## 3｜正确计数

```text
control 1｜西游记｜孙悟空
control 2｜三国演义｜刘备
control 3｜三国演义｜孙策
```

所以：

```yaml
x_scope_controls: 3
x_scope_independent_works: 2
```

刘备与孙策是两个独立人物/阶段/对象层控制，但都来自同一作品《三国演义》。人物数、案例数、control 数都不能冒充 independent-work 数。

## 4｜三控制是否仍属于同一 criterion

是。

三案具体 scope 维度不同，但共同压力测试的是同一上位规则：

> **`x` 必须写清对象、权限类型、期限/来源节点与最终裁定层；某一窄 scope 的现实成立，不能向邻近更宽 scope 倒灌。**

三种差异分别是：

```text
孙悟空：trial-use / temporary handling
        ↔ stable possession / repeated use / full disposition

刘备：current territorial governance/control
    ↔ ultimate title / permanent ownership

孙策：credential/object disposition
    ↔ represented authority / sovereignty disposition
```

因此 control 数可以累计到 3；但作品去重后仍只有 2。

## 5｜本轮核心规则

> **control count ≠ independent-work count。**

更具体：

```text
同作品不同人物
同作品不同阶段
同作品不同 x scope 机制
```

都可以增加 control / mechanism diversity，但不能增加 independent-work 数。

这条纪律对所有火轴成熟度晋级都适用，尤其避免：

```text
3个高分案例
→ 实际只有2部作品
→ 错误建立 pending-review
```

## 6｜当前 x scope 正确成熟度

```yaml
criterion_version: current-x-scope-distinction-v1_20260830
positive_controls: 3
independent_works: 2
works:
  - 西游记
  - 三国演义
knowledge_status: cross-work-control
pending_review: false
```

当前仍是 **cross-work-control**，尚未满足“同 criterion 跨 3 独立作品”的 pending-review 门。

## 7｜zn / strict 分账

本轮不新增 `zn`，也不重新解释三案人物本体。

三条 `x scope` 记录都没有为 strict 增加正向或负向计数；本轮只是成熟度/作品去重审计：

```yaml
zn_increment: false
strict_positive_increment: false
strict_negative_increment: false
x_scope_control_increment: false
x_scope_work_increment: false
```

## 8｜下一步最高信息增益

停止继续从《三国演义》堆第 4 个普通 `x scope` control。

若 P0/P1 仍找不到 ≥95 的 strict / protected-range 正向，下一份 `x scope` 应优先来自尚未计入该槽的独立作品：

- 《水浒传》或《红楼梦》优先；
- 最好使用与现有三案不同的 scope 维度，例如：
  - 代理 / 代管 → 原节点退出后的真正自主处分；
  - 可撤授权 → 撤销前 current x 与撤销后 x-off 的同物最小差异；
  - 共同持有 / 共同否决 → 单方完整处分的边界。

第三独立作品达到同 criterion、事实和分类均 ≥95 后，才允许建立 `x scope` 专项 pending-review。

## 9｜不修改 canonical

本文件是 L4 审计资产，只纠正成熟度与跨作品计数，不修改：

- L1 十元—五行正本；
- `zn/x` 信息卡与准度卡；
- `zn补x_补卡`；
- strict v2 canonical。

TASK_DONE:ZNX_XSCOPE_PROMOTION_AUDIT_3_CONTROLS_2_WORKS_20260830
