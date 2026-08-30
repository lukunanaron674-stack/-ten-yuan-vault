---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 宋江
stage: 第69回东平东昌自主出兵 → 第82回受招安 → 第83回奉诏征辽
sample_type: x-scope-dynamic-contraction-control
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 97
zn_increment: false
strict_increment: false
x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: true
transition_direction: contraction
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜zn-x x-scope 动态收窄｜宋江：招安前最高对外任务方向可由山寨内部形成 → 招安后保留内部调兵 x，但战争启动与任务对象改由朝廷诏令输入

## 0｜本轮问题

只测同一人物、同一支梁山武装在招安前后，现实 `x` 的层级范围是否发生收窄；不研究“宋江是否失去全部兵权”，也不把招安身份变化直接当作 `x` 变化证据。

核心问题：

```text
招安前：
梁山内部可以自行决定对外军事行动对象，并由宋江组织执行

招安后：
宋江仍可统领原梁山军将、布置内部战役执行
但最高层“是否发动国家战争 / 打谁”改由朝廷诏令输入
```

如果成立，则说明 `x` 动态迁移不仅有 expansion，也可以发生 contraction；且“低层 operational x 保留”与“高层 strategic-task x 收窄”可以同时成立。

## 1｜剧情事实

### 阶段 A｜招安前：梁山内部形成最高对外任务方向

第69回攻东平、东昌前，宋江提出山寨钱粮不足，东平、东昌两府有钱粮，遂提出自己与卢俊义分别取阄，各打一府；随后由宋江传令调拨人马，亲自领军攻东平。

这一窗口里，对外军事对象并不是来自朝廷或其他上位组织的任务输入，而是在梁山内部形成，并由宋江、卢俊义及众头领进入现实执行。

因此可锁：

```text
pre_amnesty_external_campaign_target_source = Liangshan-internal
pre_amnesty_mountain_wide_operational_x = true
pre_amnesty_high_level_campaign-initiation-scope = substantially internal
```

本条不要求“宋江个人一人独裁决定全部战略”；重点只在于：最高任务方向尚未由梁山外部上位节点逐项输入。

### 阶段 B｜第82回：招安改变上位归属结构

受招安后，朝廷已经尝试直接处分梁山军队的组织方式，传旨要求分开军马、各归原所；众头领对此不满，宋江出面制止并请求重新奏闻。这说明招安后原梁山内部结构并未立即完全消失，但更高层上位节点已经真实进入“军队应如何处置”的决定链。

此处只作为 transition 证据，不直接判宋江 current operational `x` 消失。

### 阶段 C｜第83回：最高战争启动与对象由朝廷诏令输入

辽国入侵后，宿元景向皇帝建议启用宋江全伙，皇帝正式下诏，任宋江为破辽都先锋、卢俊义为副先锋，要求其率所属军将人马出征辽国。

这里的关键变化是：

```text
“是否发动这场国家战争”
“战争对象是谁”
“宋江以什么上位任务身份出征”
```

不再由梁山内部自行形成，而由皇帝诏令输入。

但宋江并没有因此失去对原梁山军将的内部 operational `x`；他仍作为先锋统领所属军将进入现实作战与内部调度。

所以阶段 C 更准确是：

```text
internal troop command / battle execution x = retained true
highest-level campaign initiation / target-selection scope = externally constrained / transferred upward
```

## 2｜核心 x-scope 迁移

```text
阶段 A｜招安前
同一支梁山武装：
内部可形成对外战争对象
+ 宋江可组织调兵执行

↓ 招安 + 正式纳入朝廷军政任务链

阶段 B/C｜招安后
宋江仍有内部调兵、战役执行 x
但最高战争启动 / 任务对象
改由朝廷诏令输入
```

锁定：

> **`x` 可以发生 scope contraction：较宽的“最高任务方向 + 内部执行”结构，可收窄为“保留内部 operational x，但高层 campaign-initiation / target-selection x 不再归主体或原组织内部决定”。**

更短：

> **下层 `x` 保留 ≠ 上层 `x` 也保留。**

## 3｜拿掉测试

拿掉“招安后宋江完全失去兵权”这个假设，第83回宋江仍以破辽都先锋统领所属军将出征，内部 operational `x` 仍可解释，所以不能把阶段 C 写成 `x=off`。

拿掉“招安后最高战争任务仍完全由梁山内部决定”这个假设，皇帝正式诏令宋江出征辽国这一事实链仍完整；因此较宽 strategic-task scope 已经发生收窄。

拿掉招安与朝廷正式诏令，只保留宋江原有梁山声望和内部军令能力，不足解释为何“征辽”这一国家级任务对象会成为其当前必须接入的最高战争方向。

## 4｜反向测试

若招安后仍出现：

```text
宋江可以不经朝廷授权
自行决定是否发动国家战争
自行选择对外征讨对象
朝廷无法在该层预先设定或撤销任务
```

则不能判 high-level scope contraction。

当前第83回恰好相反：战争对象与启动来自皇帝诏令。

反之，如果招安后连军内调兵、战役部署都必须逐项由朝廷节点事前批准，那么 contraction 会更深，甚至可能进一步损伤内部 operational `x`；本轮没有把它扩大到这一层。

## 5｜第三因素冻结

- 冻结宋江“忠君”“招安理想”等人物价值判断，本轮只看权限结构变化。
- 冻结朝廷对梁山的道德评价，只看谁能输入最高任务方向。
- 冻结征辽成败，只看诏令是否真实进入同一支军队的当前行动链。
- 宿元景只是建议节点，真正把任务变成现实上位输入的是皇帝诏令；不能把咨询与最终决定混同。

## 6｜最近邻排除

- `nx`：招安后最高任务方向由外部诏令输入，确有外部任务通道邻近；但本轮不迁移木轴语义，只用它提醒“任务来源变化”不能抹掉已经保留的火轴内部 operational `x`。
- `xn`：军队怎么布阵、怎么执行属于运行流程，不回答谁拥有最高任务对象的决定层。
- `z`：皇帝作为更高裁定节点是外部结构，不用于倒推宋江内部本体。
- `zn`：本轮不新增，不从忠义、招安愿望或服从行为倒推内部原则。

## 7｜对象层纪律

本轮始终使用同一现实主体与同一核心组织对象：宋江及原梁山军将。

分层记录：

```yaml
pre_amnesty:
  high_level_campaign_initiation_scope: Liangshan-internal
  internal_operational_x: true

post_amnesty:
  high_level_campaign_initiation_scope: court-assigned
  campaign_target_selection_scope: court-assigned
  internal_operational_x: retained-true
  ultimate_independent_strategic_x: narrowed
```

不锁：

- 宋江招安后完全无军权；
- 朝廷逐项控制每个战役动作；
- 梁山所有成员完全失去共同决策能力；
- 宋江人物整体本体发生换芯。

## 8｜方法增量

与既有宋江 expansion control 构成反方向：

```text
旧控制：
晁盖生前较窄 campaign execution x
→ 晁盖死后更宽 mountain-wide operational x
= scope expansion

本轮：
招安前较宽 high-level task-direction + internal operational x
→ 招安后保留 internal operational x
   但 high-level campaign initiation / target selection 上移至朝廷
= scope contraction
```

因此新增纪律：

> **scope contraction 不等于 `x` 整体退出。权限可以在高层被收窄，同时较低层 current operational `x` 继续真实存在。**

建议动态字段补充：

```yaml
scope_transition:
  direction: expansion / contraction
  retained_layers: 迁移后仍保留的权限层
  lost_or_externalized_layers: 迁移后上移、外置或失去的权限层
transition_trigger: 真实制度/组织节点
post_transition_task_source: 迁移后最高任务来源
```

## 9｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
x_scope_dynamic_transition_increment: true
transition_direction: contraction
x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
strict_increment: false
zn_increment: false
```

本记录只作为 L4 dynamic x-scope 控制，不修改 L1、zn/x 信息卡、准度卡或任何 L2 canonical。