---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: superseded
status: classification-corrected
axis: fire
pair: zn-x
work: 水浒传
character: 宋江
stage: 第69回东平东昌自主出兵 → 第82回受招安 → 第83回奉诏征辽
original_sample_type: x-scope-dynamic-contraction-control
current_sample_type: task-source-vs-x-scope-negative-correction
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
zn_increment: false
strict_increment: false
x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false
x_scope_dynamic_transition_work_increment: false
supersedes_original_classification: true
may_override_canonical: false
created: 2026-08-30
corrected: 2026-09-01
---

# 分类纠偏｜宋江招安前后：任务来源上移不能单独证明 x-scope 收窄

## 1｜原事实保留

原记录的剧情事实继续保留：

- 招安前，第69回东平、东昌行动由梁山内部提出并组织执行；宋江能调拨人马、亲自领军。
- 第82回招安后，朝廷开始进入梁山军队的上位处置链。
- 第83回征辽由皇帝正式下诏，战争对象与国家级任务启动来自朝廷；宋江仍以先锋统领原梁山军将作战。

事实置信仍为 99。纠偏只撤回旧 `x-scope contraction` 分类。

## 2｜为什么旧分类越界

current `x` 的核心是：对象、资源、地盘、权限或关系真实进入“归我 / 我方掌握”边界，并体现占有、使用、调配、控制、处分、否决或排除。

旧记录真正观察到的是：

```text
招安前：最高外部任务方向由梁山内部形成
↓
招安后：国家级战争任务与对象由朝廷诏令输入
```

这首先证明的是 `task-source / direction-source / superior-input structure` 改变。

它没有单独证明：

- 宋江个人此前拥有一个稳定、subject-specific 的“国家级战争启动处分权”；
- 宋江此前能对同一国家战争对象拥有独立 veto / approve / target-selection permission；
- 招安后某个已确认属于宋江的 permission 从 `true→false`；
- 同一对象子集从宋江可调用/处分范围内被撤出；
- mandatory veto / co-decision / credential 结构在宋江本人权限层发生明确迁移。

因此：

> **外部任务来源进入，不能自动等于主体原有 `x` 被收窄。**

## 3｜对象层问题

旧记录把两层混在一起：

```text
A. 梁山作为相对独立组织是否自行形成最高对外方向
B. 宋江本人对军队、战役、目标对象拥有何种 current x permission
```

A 发生变化，不足自动推出 B 的具体 permission contraction。

尤其“梁山没有上级任务输入”是组织独立状态；它并不自动等于“宋江个人拥有国家战争启动权”。

## 4｜拿掉测试

拿掉 `x-scope contraction` 假设，只保留：

```text
政治/组织上位结构改变
→ 朝廷开始给梁山输入最高任务
→ 宋江保留内部调兵与战役执行
```

原剧情事实仍可完整解释。

因此 `x-scope contraction` 不是必要解释。

## 5｜反向门

只有后续材料能证明同一人物、同一对象层存在：

```text
pre:
宋江本人拥有稳定 campaign-initiation / target-selection / veto permission

post:
该 permission 被撤销、转移、增加 mandatory superior veto，或同一对象子集被真实移出其掌握范围
```

才允许重新进入 `x-scope dynamic contraction`。

单纯：

```text
任务由谁下达
谁是上级
战略方向由谁输入
```

默认先与 direction/source/organization layer 分账，不计 x-scope。

## 6｜与 current capability 纠偏的区别

The Martian / Jurassic Park 纠偏锁的是：

```text
capability delta ≠ x-boundary delta
```

本条新增的是另一种污染源：

```text
task-source / direction-source delta ≠ x-boundary delta automatically
```

前者冻结“能不能做”；本条冻结“方向从哪里来”。

## 7｜仍成立的 x

招安后宋江仍能统领原梁山军将、组织战役执行，因此至少不能写成 `x overall off`。

本轮不重新给其内部 operational x 扩大或缩小，只撤回“最高任务来源上移 = x-scope contraction”这一旧归因。

## 8｜zn / strict-v2

本轮不锁 `zn`，不启动 strict：

```yaml
zn_current: not-locked
strict_test_allowed: false
strict_verified_positive_increment: false
strict_deferred_increment: false
```

## 9｜统计修正

该旧记录原计入 current dynamic transition controls；《水浒传》仍有宋江 expansion control，因此撤销本条后：

```text
x_scope_dynamic_transition_controls: 12 → 11
x_scope_dynamic_transition_works: 10 → 10
```

即 `control -1 / work +0`。

本文件本身不计 ordinary boundary guard，不修改 L1/L2 canonical。

## 10｜新增长期纪律

> **组织或任务方向的 source-node 上移，不自动等于主体 `x-scope` 收窄。必须另外证明一个已经属于主体的 permission / object subset / veto / disposition / credential / decision node 在同对象层真实发生迁移。**

> **“谁给我任务”与“哪些对象和权限归我掌握”必须分账。**
