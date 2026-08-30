---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 水浒传
character: 宋江
stage: 第60回晁盖生前芒砀山/曾头市前后 → 晁盖死后权居主位 → 第69回全寨军马调拨
sample_type: x-scope-dynamic-transition-control
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
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜zn-x x-scope 动态迁移｜宋江：晁盖生前受限战役执行 x → 晁盖死后更宽全寨 current operational x

## 0｜本轮问题

不研究“宋江是不是梁山真正老大”，只测同一组织、同一人物在相邻阶段的现实权限范围是否发生可观察迁移：

```text
阶段 A｜晁盖仍为山寨之主
宋江能带兵、能在具体战役中传将令
但不能单方否决晁盖亲自发动曾头市行动

阶段 B｜晁盖死后
众头领共同请宋江权居主位
宋江开始直接重组全寨驻扎结构、分配头领
后续可直接传令调拨全寨军马
```

目标不是把 `x` 写成粗糙 true/false，而是检查 `scope` 是否从较窄的 delegated campaign/operational layer 扩到更宽的 mountain-wide current operational layer。

## 1｜剧情事实

### 阶段 A｜晁盖生前

第60回芒砀山战事中，宋江可以“传将令”，大小将校依令行事，说明在具体战役执行层宋江已有真实 current operational `x`。

但曾头市消息到来后，晁盖明确以“山寨之主”身份决定亲征。宋江反复劝阻并表示愿替晁盖下山，晁盖仍可拒绝，亲自点五千人马和二十头领出征；宋江无法让自己的“不应亲征”意见在同一结果层直接生效。

因此阶段 A 不是 `x=false`，而是：

```text
delegated / campaign execution x = true
mountain-wide final launch / leader override x = false / not locked
```

### 阶段 B｜晁盖死后

晁盖死后，林冲、吴用等众头领共同请宋江为山寨之主。宋江因晁盖遗言只接受“权居主位”，说明 ultimate title 仍保留条件。

但 current operational layer 已发生现实变化：宋江立即重分六寨、安排各头领驻扎与管理位置；到第69回又可直接“传令，调拨人马”，把全寨头领和军马拆成东平、东昌两路并留人守寨。

因此阶段 B 可锁：

```text
source_decision_structure = collective conferral
ultimate_title = conditional / not-final
current_mountain_wide_operational_x = true
```

## 2｜核心 x-scope 迁移

```text
阶段 A
具体战役执行 / 带兵 / 传令 x = true
但寨主晁盖仍可在重大出征对象层压过宋江意见并自行发动

↓ 晁盖死亡 + 众头领共同授予 current 主位

阶段 B
宋江对全寨驻扎、头领分配、军马调拨的 current operational x = true
```

锁定：

> **同一人物可以在较窄执行层已经有真实 `x`，同时在更宽对象层仍没有最终处分；权限结构重组以后，更宽 current `x` 才成立。**

更短：

> **`x` 可以发生 scope expansion，而不是只发生 on/off。**

## 3｜拿掉测试

拿掉“宋江晁盖生前完全无权”的假设，阶段 A 的战役传令和多次带兵仍可解释，所以不能把阶段 A 写成 pure `x=off`。

拿掉“宋江晁盖生前已经拥有全寨最终军事处分”的假设，曾头市亲征仍由晁盖自行决定且宋江无法否决，事实链仍完整，因此更宽 scope 尚未成立。

拿掉晁盖死后的共同授予与 current 主位，只保留宋江原有声望和战役经验，不足解释为什么他可以直接重组全寨驻扎并调拨全寨军马。

## 4｜反向测试

如果晁盖死后仍出现：

```text
宋江每次重组/调兵
→ 必须重新由众头领共同批准
→ 某同层节点可在结果生效前否决
```

则阶段 B 应继续判 shared/joint execution，而不能锁更宽 unilateral/substantially-unilateral current operational `x`。

当前被测文本没有这条逐项 pre-effect joint veto 链。

## 5｜最近邻排除

- `z`：江湖名望与众头领拥戴只是授权/承认背景，不能替代现实调兵与组织处分。
- `nx`：主位来源于众头领共同授予，可有外部权限来源邻近，但授权生效后 current operational `x` 仍需独立判断。
- `xn`：分寨、布阵、调拨流程回答“怎么运行”，不能替代“谁的决定可以直接生效”。
- `zx`：本轮不判断是否扩权显影，只记录火轴 `x` 的权限 scope 变化。
- `zn`：本轮不新增。宋江的领导宣言、替天行道等不用于倒推内部原则。

## 6｜对象层纪律

本轮只锁梁山组织内部的军政/驻扎/调拨 current operational layer。

不锁：

- 宋江永久最终寨主 title；
- 所有重大政治方向都由宋江单方决定；
- 其他头领永久失去同层 veto；
- 宋江整体人物本体。

## 7｜方法增量

建议 `x scope` 后续增加动态字段：

```yaml
scope_transition:
  from: delegated_campaign_execution
  to: mountain_wide_current_operational_control
transition_trigger: 晁盖死亡 + 众头领共同授予权居主位
pre_transition_override_node: 晁盖
post_transition_same_layer_pre_effect_veto: not-observed-on-tested-operational-layer
ultimate_title_after_transition: conditional
```

并新增纪律：

> **权限迁移不能只记 `x off→on`。已有窄 `x` 可以在组织节点变化后扩展为更宽 `x`；必须记录原 scope、扩大后的 scope、触发节点和仍保留的最终归属限制。**

## 8｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
x_scope_dynamic_transition_increment: true
x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
strict_increment: false
zn_increment: false
```

本记录只作为 L4 动态 scope 控制，不增加已有 pending-review 的普通 positive/guard 计数，不修改 L2 canonical。
