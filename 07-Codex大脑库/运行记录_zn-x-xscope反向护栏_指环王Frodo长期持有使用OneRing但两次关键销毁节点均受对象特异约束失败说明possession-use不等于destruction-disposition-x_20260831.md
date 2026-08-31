---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
work: The Lord of the Rings / The Fellowship of the Ring + The Return of the King
character: Frodo Baggins
stage: Ring-bearer window, from Shire destruction test to Crack of Doom
sample_type: x-scope-negative-boundary-guard
fact_confidence: 99
classification_confidence: 97
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
strict_verified_positive_increment: false
zn_increment: false
created: 2026-08-31
---

# 运行记录｜Frodo：长期持有/使用 One Ring ≠ 对其拥有完整 destruction-disposition x

## 1｜本轮问题

压力测试：当主体长期、稳定持有同一对象，也能实际使用其部分功能时，是否可以把 `possession/use x=true` 自动升级成对对象的完整 `destruction-disposition x=true`？

本轮判定：**不能。**

Frodo 对 One Ring 的保管、携带、佩戴/使用是真实且持续的；但作品在两个关键销毁节点给出相反效果：早期 Gandalf 要求他尝试毁掉 Ring 时，Frodo 已受 Ring 影响而无法伤害它；最终抵达 Crack of Doom、具备唯一正确销毁地点后，他仍未能执行销毁，而是宣告占有并戴上 Ring。Ring 最终由 Gollum 夺回后意外坠入火中才被毁。

因此只能锁：

```text
stable possession / custody x = true
actual use x = true

but

full destruction-disposition x = false / not locked
```

这不是说 Frodo 对 Ring “完全没有 x”，而是禁止把已证实的窄 permission types 倒灌到未通过 effect-test 的更宽处分类型。

## 2｜事实链

### 节点 A｜Shire 早期销毁测试

- Frodo 已现实持有 Ring。
- Gandalf 让他尝试毁掉它。
- Frodo 无法伤害 Ring；作品明确把这种失败与 Ring 对持有者的影响联系起来。
- 同时 Gandalf 说明，普通火焰/锻造手段无法摧毁 Ring，唯一销毁方式是把它投入 Mount Doom 的 Cracks of Doom。

### 节点 B｜Crack of Doom 最终销毁窗口

- Frodo 与 Sam 已把 Ring 带到唯一正确销毁地点。
- Frodo 站在火口前，现实上已经拥有最接近最终处分的当前窗口。
- 但他没有把 Ring 投入火中，而是转而宣告 Ring 属于自己并戴上。
- Gollum 随后咬下戴 Ring 的手指，取得 Ring，又意外跌入熔岩，Ring 才真正毁灭。

观察结果：**Frodo 的稳定 possession/use 并没有在最关键的 destruction effect-test 中转化为可独立完成的 destruction-disposition。**

## 3｜x-scope 固定拆分

```yaml
actor: Frodo Baggins
object: One Ring

permission_type:
  confirmed:
    - possession
    - custody
    - carry
    - wear/use
  tested_but_not_locked:
    - destroy
    - irreversible final disposition

scope:
  confirmed: physical possession and use of the Ring
  not_inferred: full irreversible destruction disposition

term: long Ring-bearer window
revocability: possession can be lost/transferred/seized
return_obligation: none in tested window

same_layer_pre_effect_veto:
  formal_node: none
  object_specific_constraint: Ring's unique destruction conditions + corruptive hold on bearer

global_override:
  Sauron/Ring causal system remains an external competing constraint on full disposition

ultimate_title: not used as evidence

decision_structure:
  possession/use: unilateral on many local acts
  destruction: no verified unilateral final effect

consultation_structure:
  Gandalf/Sam/Company may advise, but advice is not the tested x

final_decision_structure:
  destruction attempt does not reach a successful Frodo-caused final effect

execution_structure:
  local carry/use: Frodo direct
  final destruction: completed only through Gollum's seizure + fall into Mount Doom

co-decision_nodes: none required for ordinary possession/use
realized_effect_test:
  possession_use: passed
  destruction_disposition: failed/not independently realized
causal_mapping_verified:
  Mount Doom can destroy Ring: true
  Frodo can independently realize that destruction at final node: false/not observed
```

## 4｜最近邻排除

### 4.1 不是“Frodo 没有 x”

他长期持有、携带并实际使用 Ring，因此窄层 `possession/use x=true` 不能因为最后销毁失败被反向抹掉。

### 4.2 不是《The Dark Knight》remote 的旧机制换皮

渡轮案例卡在“接口→目标效果 causal mapping 未经验证”。

本例不同：

```text
目标对象就是手中同一个 Ring
+
销毁方法/地点本身已明确可行
+
主体已到达 effect point
+
但 subject-object system 在最终节点仍阻止主体完成不可逆处分
```

所以新增的是：

> **stable possession/use over an object ≠ full irreversible disposition over that same object。**

尤其当对象本身存在 object-specific destruction constraints、并对持有者形成可观察的 causal resistance 时，必须单独做 destruction effect-test。

### 4.3 不是 future revocability

问题不是“以后 Frodo 会不会失去 Ring”。被测的是 current window 内，他是否能独立让 `destroy Ring` 这个最终处分现实生效。

## 5｜拿掉测试

若拿掉 Frodo 的 possession/use，只剩“Ring 很难毁”，无法解释他为什么能持续携带、佩戴、隐藏并把对象一路带到 Mount Doom；所以窄 `x` 真实存在。

若拿掉 Ring 的 object-specific destruction constraints / corruptive hold，并假设 Frodo 在 Crack of Doom 可以像处理普通物件一样自由把它投入火中，则作品中的两次关键销毁失败失去解释力；因此这些约束是 full-destruction disposition 不能由 possession/use 自动推出的核心第三因素。

## 6｜反向测试

若同一主体对同一对象出现：

```text
稳定 possession/use
+
明确销毁方法
+
真实执行
+
对象被主体单方、可重复或至少完整实现不可逆销毁效果
```

才可把 destruction-disposition `x` 单独锁定。

仅“东西长期在我手上”或“我理论上站在可以毁掉它的位置”都不足。

## 7｜第三因素冻结

冻结：
- Frodo 的英雄/霍比特人身份；
- 善恶主题；
- Quest 成败；
- Sauron 最终毁灭；
- Gollum 的道德评价；
- Frodo 是否勇敢、善良、意志强弱；
- Ring 的象征意义。

只看同一对象、同一主体的 permission type 与 realized effect：`possess/use` 已现实通过，`destroy/final irreversible disposition` 未由 Frodo 独立实现。

## 8｜zn / strict-v2

本轮不锁 `zn`。

Frodo 接受任务、坚持前进、最终在 Crack of Doom 失败，不能仅凭牺牲、责任、任务目标或结局倒推出一项 ≥95 的内部不可轻易让渡原则。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

因此本轮不改变 strict-v2 `0 verified positive`。

## 9｜新增护栏

```text
stable possession x
+ stable use x
≠
full irreversible disposition x
```

进一步：

```text
same-object physical control
≠ permission-type universality
```

当被测 permission 是 `destroy / irreversible final disposition` 时，必须单独验证：

```text
method feasible
+ subject reaches effect point
+ subject can actually execute
+ no object-specific causal constraint prevents final effect
+ final effect is attributable to subject's current x
```

否则只能保留已经独立通过的较窄 possession/use/custody x。

## 10｜统计

```yaml
x_scope_boundary_guard_increment: 1
x_scope_boundary_guard_work_increment: 1
x_scope_dynamic_transition_increment: 0
protected_range_increment: 0
strict_verified_positive_increment: 0
zn_increment: 0
```

《The Lord of the Rings》此前未进入 `current-x-scope-distinction-v1_20260830` 的 boundary-guard independent-work 集合，因此本轮在该 criterion 下可计新作品 1。

## 11｜证据来源

- Tolkien Gateway, `The Shadow of the Past`：Frodo 尝试毁 Ring 时已无法伤害它；普通手段无法摧毁，唯一方式是 Mount Doom。
- Tolkien Gateway, `The One Ring` / `The Crack of Doom`：Frodo 抵达 Cracks of Doom 后选择保留并戴上 Ring；Gollum 夺取后跌入火中，Ring 才毁灭。

## 12｜下一轮

不要再找第二个“魔法物品拿在手里但毁不掉”的换皮案例。

最高信息增益是寻找同人物、同对象的 permission-type 动态迁移：

```text
阶段 A：possession/use x 已成立，但 irreversible disposition 被真实 constraint 阻断
↓
约束节点被解除 / 技术条件改变 / competing veto 退出
↓
阶段 B：同主体第一次获得并现实完成 irreversible disposition x
```

这样才能把 `permission_type expansion` 从静态分层推进成真正生命周期迁移。
