---
type: ten-yuan-fire-axis-x-scope-dynamic-transition-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
  decision_structure_calibration: joint-threshold-vs-unilateral-v1_20260831
work: Harry Potter
character: Harry Potter / Albus Dumbledore
stage: Dumbledore alive as sole Secret Keeper of 12 Grimmauld Place -> Dumbledore dies -> prior recipients become Secret Keepers
sample_type: x-scope permission-type and execution-structure dynamic transition
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
transition_direction: single-gatekeeper-to-parallel-shared-independent-disclosure
new_independent_work_for_dynamic_transition: false
protected_range_positive_increment: false
protected_range_negative_increment: false
zn_increment: false
strict_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜格里莫广场 Fidelius：单一披露门 → 多 Secret Keeper 并行披露门

## 1｜本轮问题

只测试同一隐藏地点、同一秘密访问对象层上的权限类型与执行结构是否发生真实迁移：

> **Harry 在 Dumbledore 生前已经知道并可进入 12 Grimmauld Place，但不能把地点继续披露给别人；Dumbledore 死后，Harry 与其他此前获知秘密者成为 Secret Keepers，获得独立披露权限。**

本轮不从“凤凰社成员”“救世主”“校长”“忠诚/背叛”等身份、阵营或主题倒推 `x/zn`。

## 2｜事实链

### 阶段 A｜Dumbledore 在世

12 Grimmauld Place 受 Fidelius Charm 保护，Dumbledore 是该地点/凤凰社总部秘密的 Secret Keeper。Fidelius 的规则是：Secret Keeper 是能够把被保护信息透露给新人的权限节点；被 Secret Keeper 告知的人虽然知道秘密，却不能继续把它传给别人。

因此 Harry 在阶段 A 已有：

```text
knowledge / access-use x = true
reveal/disclose x = false
```

而 Dumbledore 对同一秘密拥有：

```text
reveal / withhold gate x = true
```

### 迁移节点｜Dumbledore 死亡

官方 Secret Keeper 规则明确：Secret Keeper 死亡后，所有曾由其直接告知秘密的人都会成为新的 Secret Keepers。

这一节点不是职位名称变化，而是同一秘密的 permission type 与 execution structure 发生现实重分配。

### 阶段 B｜Dumbledore 死后

Harry 从“知道/使用秘密但不能向新人披露”变为多个 Secret Keepers 之一：

```text
knowledge / access-use x = retained true
reveal/disclose x = newly true
```

与此同时，原先单一披露节点被分散成多个平行 Secret Keeper。任意一个 Keeper 都可能独立披露，无需其他 Keeper 共同批准。

因此 post 阶段不是 `joint-threshold`，而是：

> **shared/parallel independent execution：多人共享同类权限，但每个节点都可单独打开信息访问门。**

## 3｜x 权限结构

```yaml
actor:
  pre_focus: Harry Potter
  pre_gatekeeper: Albus Dumbledore
  post_focus: Harry Potter + other former recipients
object: 12 Grimmauld Place concealed-location secret / informational access gate
permission_type:
  pre_harry:
    - know
    - use/access-after-disclosure
  pre_dumbledore:
    - reveal
    - withhold
    - informational-exclusion gate control
  post_harry:
    - know
    - use/access
    - reveal
    - withhold
scope: one concealed location / Order headquarters secret
term:
  pre: Dumbledore alive as primary Secret Keeper
  post: after Dumbledore death while Fidelius remains active
revocability: disclosure can open the information boundary for a new recipient
return_obligation: N/A
same_layer_pre_effect_veto:
  pre: no co-keeper veto; Dumbledore is sole disclosure gate
  post: false; one Secret Keeper does not require other Keepers' approval to disclose
global_override: no separate current actor shown able to force disclosure from an unwilling Secret Keeper
ultimate_title: N/A
source_decision_structure: magical rule / original Fidelius configuration
consultation_structure: none required
final_decision_structure:
  pre: unilateral-single-gatekeeper
  post: shared-permission / parallel-independent-unilateral-disclosure
execution_structure:
  pre: one disclosure node
  post: multiple independent disclosure nodes
co_decision_nodes:
  pre: none
  post: multiple co-holders, but not mandatory co-approvers
unilateral_effect:
  pre_harry: false for disclosure
  post_harry: true for disclosure
```

## 4｜对象层与当前窗口

只测：

> **12 Grimmauld Place 的隐藏地点秘密，谁有能力把该信息访问边界向新人打开。**

不外推：

- 房屋产权；
- 凤凰社领导权；
- 房屋内部管理权；
- 对进入者的物理战斗排除权；
- 所有 Secret Keepers 对所有事务都有共同治理权。

## 5｜最小差异

```text
同一人物 Harry
同一对象：Grimmauld Place secret
同一基础知识：Harry 前后都知道地点

阶段 A：
知道 + 能进入
但不能把秘密继续告诉新人

↓ Dumbledore 死亡

阶段 B：
Harry 成为 Secret Keeper
→ 新增 reveal/withhold permission
→ 可以独立打开同一信息访问门
```

因此：

> **知道秘密 ≠ 拥有披露秘密的 `x`。**

以及：

> **同一个对象层可以发生 permission-type expansion，而不是只发生 scope 大小变化。**

## 6｜拿掉测试

拿掉“Dumbledore 死亡会让既有知情者成为 Secret Keepers”的迁移规则，只保留 Harry 一直知道地址，无法解释 Harry 为什么从“不能继续披露”变成“可以披露”。

所以 permission expansion 不是身份/剧情气氛推断，而有明确迁移节点。

## 7｜反向测试

如果 Dumbledore 死后，Harry 仍只能知道/进入，但每次向新人披露都必须经过其他 Secret Keepers 共同批准，则 post 阶段应判 `joint-threshold`。

current Fidelius 规则相反：多个新的 Secret Keepers 是平行权限持有者，任一 Keeper 的披露都可能打开访问门。

因此正式区分：

```text
shared permission
≠ joint final decision

multiple co-holders
≠ mandatory co-approval
```

## 8｜现实后果复验

Deathly Hallows 对 12 Grimmauld Place 的描述进一步说明，Dumbledore 死后约二十名知情者都成了 Secret Keepers，这被明确视为保护被“稀释”：可独立泄密的节点变多。

Hermione 后来把 Yaxley 带入 Fidelius 保护范围后，也认为自己作为 Secret Keeper 已经把秘密给了他，三人因此不敢再返回该处。

这支持：

> **单一 disclosure gate → 多个 parallel independent gates 会改变同一 protected-range 的风险结构。**

但 protected-range 普通正例槽已达 `pending-review`，本轮不跨 criterion 重复计 positive/negative。

## 9｜最近邻排除

- `z`：Harry/Dumbledore 的声望、身份、凤凰社认可都不能替代 disclosure 权限。
- `nx`：权限来源由 Fidelius 规则与 Dumbledore 死亡触发，这回答“权限从哪里来”，不否认 post current `x`。
- `xn`：如何写纸条、带人进入等是执行方式，不等于谁拥有 reveal/withhold permission。
- `zx`：本轮不判人物是否主动扩权，只记录客观 `x scope / permission structure` 迁移。

## 10｜第三因素冻结

冻结：

- Snape 是否真正忠诚；
- Moody 对 Snape 的额外咒语；
- Harry 的凤凰社/主角身份；
- 房屋产权；
- Death Eaters 最终是否攻占房屋；
- 后续战争结局。

只保留：

```text
谁知道秘密
谁能向新人披露
Dumbledore 死亡前后权限是否变化
披露是否需要其他同层节点共同批准
```

结论不变。

## 11｜zn / strict

本轮不锁 `zn`。

Harry 是否愿意保护凤凰社总部、是否忠诚，不能从他获得 disclosure 权限直接倒推内部不可让渡原则。

因此：

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_verified_positive_increment: false
```

## 12｜判定

```yaml
x_current:
  pre_harry:
    knowledge_access: true
    disclosure_gate: false
  post_harry:
    knowledge_access: true
    disclosure_gate: true
scope_transition:
  direction: permission-expansion-and-gate-distribution
  from: recipient-use / single Dumbledore disclosure gate
  to: recipient-plus-disclosure / multiple parallel independent Secret Keepers
transition_trigger: Dumbledore death under Fidelius Secret Keeper rule
final_decision_structure_transition: unilateral-single-gatekeeper -> shared-permission-with-parallel-unilateral-execution
same_layer_pre_effect_veto_post: false
mandatory_co_approval_post: false
```

事实置信：**99**。

分类置信：**98**。

成熟度：**L4 / evidence-locked**。

## 13｜统计影响

本轮属于：

```text
x-scope dynamic transition control +1
independent work +0
```

`Harry Potter` 已经存在于 x-scope dynamic-transition 独立作品集合，因此不得重复增加 work 数。

同时：

```text
protected-range ordinary positive +0
protected-range negative +0
zn +0
strict +0
```

本轮有新增机制价值，因为它不是普通 expansion/contraction，而是：

> **permission type expansion + disclosure gate distribution + shared-independent execution。**

## 14｜新增长期纪律

> **知道 / 能进入一个秘密范围，不等于拥有把该范围向别人打开的 disclosure `x`。**

> **shared permission ≠ joint-threshold：多个同层权限持有者若任何一个都能独立生效，应记录为 parallel/shared-independent execution，而不是 joint final decision。**

> **单一 access-gate 分散成多个独立 access-gate，本身就是 `x scope / decision structure` 的真实动态迁移。**

本记录仅为 L4 evidence，不得自动修改 L1/L2 canonical，也不增加已进入 pending-review 的 protected-range 普通正例统计。

## 15｜外部证据

- Harry Potter 官方 `Secret Keeper`：Fidelius 中只有 Secret Keeper 能披露秘密；普通知情者无法转述；Secret Keeper 死后，被其告知的人都会成为 Secret Keepers。
  https://www.harrypotter.com/writing-by-jk-rowling/secret-keeper
- Harry Potter 官方 `Hidden entrances`：12 Grimmauld Place 由 Fidelius 保护，Dumbledore 是 Secret Keeper，位置需由 Secret Keeper 口头或书面揭示。
  https://www.harrypotter.com/features/web-hidden-entrances-wizarding-world
- Deathly Hallows Chapter 6 的二级资料复核：Dumbledore 死后，约二十名既有知情者成为 Secret Keepers，保护因此被认为显著稀释。
