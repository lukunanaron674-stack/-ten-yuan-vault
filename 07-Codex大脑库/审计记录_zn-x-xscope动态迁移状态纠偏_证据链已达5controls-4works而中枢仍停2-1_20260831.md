---
type: ten-yuan-fire-axis-audit-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: x-scope-dynamic-transition-state-reconciliation
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
may_override_canonical: false
created: 2026-08-31
---

# 审计记录｜zn-x x-scope 动态迁移状态纠偏｜实际 evidence 已达 5 controls / 4 works

## 0｜为什么需要纠偏

本轮启动时，`x-scope` 专项与火轴总纲/实时清单仍把动态迁移写成较旧的 `1 control / 1 work` 或 `2 controls / 1 work`；但最新 `main` 的逐条 evidence-locked 运行记录已经继续新增《红楼梦》《西游记》《三国演义》控制。

因此本轮不制造重复人物案例，而先按同一 criterion_version 对现有证据重新计数。

## 1｜同 criterion_version 的动态迁移控制

所有下列记录均使用：

```text
current-x-scope-distinction-v1_20260830
```

且事实/分类置信均 ≥95：

1. **《水浒传》宋江｜99/97｜expansion**
   - 晁盖生前已有 delegated/campaign execution `x=true`；
   - 晁盖死后、众头领共同授予权居主位，扩张为更宽 mountain-wide current operational `x`。

2. **《水浒传》宋江｜99/97｜contraction**
   - 招安前较宽 high-level campaign direction 由梁山内部形成；
   - 招安后保留内部调兵/战役执行 `x`，但战争启动与任务对象上移为朝廷诏令输入。

3. **《红楼梦》王熙凤｜99/98｜contraction**
   - 病前较直接、较宽的荣府日常掌家 operational `x`；
   - 病中日常裁处转交李纨/探春，大事回到王夫人；凤姐保留筹划与经平儿转递的间接接口。

4. **《西游记》唐僧｜99/98｜expansion**
   - 紧箍咒前是名义师徒关系 + 劝说/责备；
   - 观音授咒并现实生效后，新增可重复、直接生效的 discipline `x`。

5. **《三国演义》刘备｜99/97｜expansion**
   - 救徐州阶段已有自军/外援/小沛驻屯的窄 `x`；
   - 陶谦死亡、原 global-override 节点退出且刘备最终接受后，扩张为徐州州域 current-governance `x`。

## 2｜正确统计

```yaml
x_scope_dynamic_transition_controls: 5
x_scope_dynamic_transition_works: 4
works:
  - 水浒传
  - 红楼梦
  - 西游记
  - 三国演义
transition_directions:
  expansion: 3
  contraction: 2
```

注意：宋江两条属于同一作品，只增加两个 control，不重复增加 independent work。

## 3｜状态裁决

动态迁移槽已经超过“同判据跨 3 作品”的停止普通正例采样门槛。

因此从本记录起：

> **停止继续堆普通 expansion / contraction 正例。**

后续只收：

- `unilateral ↔ joint/shared` 的真正 decision-structure 迁移；
- same-layer veto 新增/退出导致的最小差异；
- 表面 scope 变化、实际权限未变的反例；
- criterion 冲突、计数纠错或状态修正。

## 4｜方法增量

动态 `x` 至少要区分：

```yaml
scope_transition:
  direction: expansion / contraction
  from: 原权限范围
  to: 新权限范围
transition_trigger: 真实权限节点
pre_transition_override_node: 迁移前覆盖节点
post_transition_same_layer_pre_effect_veto: 迁移后同层否决
retained_layers: 迁移后保留权限
lost_or_externalized_layers: 上移/外置/失去权限
post_transition_task_source: 迁移后最高任务来源
ultimate_title_after_transition: 最终归属限制
```

并继续保持：

> **scope expansion/contraction ≠ x off/on。**

> **迁移前窄 `x` 不得写成 `x=false`；迁移后宽 `x` 不得倒填迁移前。**

## 5｜治理边界

本记录只纠偏 L4 evidence 状态，不修改 L1、zn/x 信息卡、准度卡、`zn补x_补卡` 或 strict-v2 canonical。

火轴总纲、实时待审议清单若仍显示旧动态计数，均属于中枢同步债；`x-scope` 专项应优先同步为 `5 controls / 4 works`。

TASK_DONE:ZNX_XSCOPE_DYNAMIC_RECONCILED_5CONTROLS_4WORKS_20260831
