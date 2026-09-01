---
type: ten-yuan-fire-axis-audit-correction
authority_level: L4
knowledge_status: superseded
status: classification-corrected
axis: fire
pair: zn-x
work: The Martian (2015)
character: Mark Watney
stage: Pathfinder恢复通信→十六进制相机交互→rover软件hack→自由文本通信
criterion_version: current-x-scope-distinction-v1_20260830
former_sample_type: x-scope-dynamic-transition
current_sample_type: capability-vs-x-scope-negative-correction
former_mechanism: channel-capacity-resolution-expansion
current_mechanism: technical-capability-expansion-without-proven-x-boundary-expansion
fact_confidence: 99
classification_confidence: 99
x_scope_dynamic_transition_increment: false
x_scope_dynamic_transition_work_increment: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
protected_range_increment: false
supersedes_self_classification_from_commit: d4eb3d9c2b48253ae516bf0bad89a52af3221c81
corrected: 2026-09-01
---

# 审计纠偏｜The Martian｜Mark Watney｜通信容量升级不等于 x-scope 扩张

## 0｜纠偏结论

上一版把：

```text
Pathfinder 相机/十六进制低容量通信
→ rover 软件改造
→ 自由文本通信
```

锁成 `channel-capacity / expressive-resolution expansion of current x`。

该分类过宽，现按仓库 current canonical 撤回。

事实链仍成立，但它首先证明的是：

> **同一个已经可用的通信接口，技术能力、带宽、表达分辨率可以扩大。**

这不足以独立证明十元 `x` 的归属、权限边界、可调用对象集合或处分范围扩大。

因此：

```yaml
fact_chain: retained
former_x_scope_dynamic_transition: superseded
current_x_scope_dynamic_transition_increment: false
```

## 1｜为什么必须纠偏

`x` 信息卡的 current 核心是：

```text
对象被切定
→ 进入“我 / 我方”的归属范围
→ 主体取得占有、使用、调配或控制权
```

即 `x = 归我掌握`。

L1 火轴也把 `x` 定义为：

> 对象被纳入掌握、调用与处分边界。

因此，研究 `x-scope` 时真正需要变化的是至少一种：

- 哪些对象进入/退出主体可掌握范围；
- 哪一种 permission 从无到有、从有到无；
- permission 的对象子集、期限、处分层、否决层、执行层发生变化；
- mandatory veto / override / co-decision / credential distribution 等现实权限结构变化。

而本案两个阶段都已经允许 Watney 与 NASA 现实通信。升级改变的是消息编码效率、长度和表达分辨率，没有证据表明：

- 新增了原本不归其调用的对象子集；
- 新增了新的处分/否决/管理权限；
- 原本需要第三方批准的消息现在改成不需要；
- 原本被其他节点现实控制的通信对象转入 Watney 自己的归属边界。

所以不能仅凭“更强、更快、更能传”就把 `x` 扩张。

## 2｜最小差异

### A｜真实 x-scope expansion

```text
阶段A：主体只能调用对象子集 S1
→ 真实授权/控制节点变化
阶段B：主体可调用 S1 + S2
```

或：

```text
阶段A：use=true, dispose=false
→ 权限迁移节点
阶段B：use=true, dispose=true
```

这里发生的是掌握/权限边界扩张。

### B｜The Martian 本案

```text
阶段A：communication-use = true
阶段B：communication-use = true

变化：
hex / camera coding
→ free-form text
```

这只直接证明同一 permission 的技术表达能力升级。

除非另有证据证明 `free-form text` 对应一个此前不可调用、后来真实纳入 Watney 控制边界的新对象/权限集合，否则：

```text
technical capability delta
≠ x-scope delta
```

## 3｜x 权限结构重新记录

```yaml
actor: Mark Watney
object: Pathfinder-mediated Mars↔Earth communication interface

permission_type:
  stage_A:
    contact: true
    use: true
    send_message: true
    receive_message: true
  stage_B:
    contact: true
    use: true
    send_message: true
    receive_message: true

scope:
  x-relevant-object-scope:
    stage_A: communication interface
    stage_B: same communication interface

term:
  stage_A: Pathfinder restored before rover patch
  stage_B: rover patch active

revocability: not tested
return_obligation: none
same-layer_pre-effect_veto: no change demonstrated
global_override: physical link/system constraints remain
ultimate_title: irrelevant

decision_structure: unchanged / not tested
consultation_structure: NASA engineers provide technical instructions
final_decision_structure: unchanged / not tested
execution_structure:
  stage_A: camera + physical hexadecimal encoding
  stage_B: rover-linked text interface
co-decision_nodes: no x-relevant change demonstrated

technical_capability:
  stage_A: low-capacity / indirect coding
  stage_B: higher-capacity / direct free-form text

x_scope_transition: not proven
```

## 4｜关键压力

把所有“能力”语言拿掉，只问：

> Watney 前后到底多掌握了什么此前不归他调用/使用/处分的对象或权限？

当前事实不能给出 ≥95 的新边界。

反过来，把 `x` 结构固定不变，仅让同一接口变得更高效、更高带宽，全部剧情事实仍能成立。

因此拿掉“x-scope expansion”假设，事实链没有解释缺口。

## 5｜第三因素冻结

冻结：

- Watney 的工程能力与聪明程度；
- rover / Pathfinder 的技术性能；
- NASA 工程师的技术方案；
- 生存压力；
- 最终是否获救；
- 宇航员身份。

这些因素可以解释为什么通信能力提升，但不能自动生成新的 `x` 归属/处分边界。

## 6｜最近邻边界

本纠偏不推翻以下 current dynamic controls：

- Eduardo：34.4%→0.03% 是同一可分割资产的现实 ownership/equity scope 改变；
- Ripley：revoke permission 在 deadline 前后真实从 true→false；
- Ramius：mandatory credentials 从独立节点分散变成单人集中，decision structure 改变；
- Jurassic Park / Arnold：specific direct-reversal path 失效而 recovery interface 保留，permission path 结构改变。

这些都直接改变“主体能对什么对象做什么”的现实边界。

The Martian 这里只改变同一已成立 use permission 的技术表现，所以不能与它们累计。

## 7｜zn / strict-v2

本轮不锁 `zn`，也不进入 strict-v2。

```yaml
zn_current: not-locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 继续保持 0。

## 8｜成熟度与统计纠偏

事实：99。
分类纠偏：99。

本文件当前知识状态改为 `superseded`，指的是上一版 **x-scope dynamic-transition 分类** 被撤回；剧情事实本身不撤回。

统计必须回退上一版的错误增量：

```text
x_scope_dynamic_transition:
上一版误计：+1 control / +1 work
本轮纠偏：撤回该增量
```

因此 latest evidence-layer 不应写成 `14 controls / 12 works`。

以 current registry 的 `12 / 10` 加上其后仍有效的 Jurassic Park / Ray Arnold：

```text
12 / 10
+ Jurassic Park 1 / 1
= 13 controls / 11 independent works
```

The Martian 本案：

```yaml
x_scope_dynamic_transition_control_delta: 0
x_scope_dynamic_transition_work_delta: 0
capability_vs_x_scope_correction: +1
```

该 correction 不并入普通文学 control/work 统计。

## 9｜新护栏

正式锁出研究层反误判：

> **能力、效率、带宽、分辨率、吞吐、威力、速度或性能变化，不能仅因“更能做某事”就自动记为 `x-scope` 变化。只有当这些变化同时对应现实的对象归属、permission、可调用对象集合、处分/否决/管理边界或 decision/execution node 变化时，才允许进入 `x-scope`。**

最短式：

```text
capability / performance delta
≠
x boundary delta
```

这与用户固定禁令一致：不得从“能力”直接倒推 `zn/x`。

## 10｜下一轮高信息增益方向

P0 继续最高优先。

若继续跑 x-scope，优先寻找：

```text
同 actor + 同 object
技术能力保持近似不变
但现实 authorization / veto / callable-object-set / disposition boundary 发生迁移
```

这样的最小差异能进一步把：

```text
能力变化
```

与：

```text
掌握边界变化
```

彻底拆开。

TASK_DONE:ZNX_XSCOPE_CAPABILITY_NOT_BOUNDARY_CORRECTION_THE_MARTIAN_20260901
