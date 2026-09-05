---
type: ten-yuan-fire-axis-protected-range-pending-review
authority_level: L4
knowledge_status: pending-review
status: pending-review
axis: fire
pair: zn-x
criterion_version: protected-range-risk-test-v1_20260831
positive_controls: 4
positive_cross_work_count: 4
negative_guards: 5
negative_guard_works: 5
dynamic_transition_controls: 2
dynamic_transition_works: 2
canonical_calibration_controls: 0
may_override_canonical: false
may_update_L2: false
created: 2026-08-31
updated: 2026-09-06
---

# 待审议问题｜zn-x protected-range 稳定保护范围经真实 risk-test 成立边界

## 0｜当前状态

同一 criterion：`protected-range-risk-test-v1_20260831` 已进入 `pending-review`。普通正向继续停止堆量；只继续收新 topology、failure mechanism、dynamic transition、criterion conflict 或 strict-v2 高价值候选。

current 分账：

```yaml
positive_controls: 4
positive_cross_work_count: 4
negative_guards: 5
negative_guard_works: 5
dynamic_transition_controls: 2
dynamic_transition_works: 2
knowledge_status: pending-review
```

本文件只到 L4，不修改 L1/L2 canonical。

## 1｜候选研究规则

stable protected-range `x` 的高纯正向，应至少满足：

```text
boundary-on
+ object-inside
+ real risk enters / targets boundary
+ subject-specific current x
  在结果发生前稳定 deny / block / redirect
+ 结果不是主要由第三方保护节点完成
```

保护边界可以是：

- 物理 enclosure / access boundary；
- 持续环境隔离 enclosure；
- 信息访问 / location-disclosure gate；
- 主体持续控制其移动/路线的 mobile boundary；
- 其他后续经同判据复验的稳定 access-control boundary。

核心：**protected-range 不等于“墙”，也不要求边界固定在地理坐标。主体 current `x` 必须形成稳定、可识别、经真实风险测试的 pre-effect access/exclusion boundary。**

另外，dynamic 判定必须把 `risk family` 与 `ingress topology` 分开记录：过去在 topology A 下 verified PASS，不得自动外推到 topology B。

## 2｜四个正向控制｜4 controls / 4 works

### 2.1 《战栗空间》｜physical enclosure
Meg/Sarah 持续留在 panic room；多轮真实入侵撞击；常规入口持续失败并迫使攻击者改用 ventilation/propane。锁：`stable local protected-range x=true`，不倒灌 whole-house。

### 2.2 《火星救援》｜continuous environmental containment
Watney 持续使用 Ares III Hab；火星外部低压低温环境持续构成风险；boundary intact 时 Hab 维持加压可居住内部。锁：`stable Hab protected-range x=true`。普通正向只锁 pre-breach tested window；后续 breach/repair 另在 dynamic 分账。

### 2.3 《哈利·波特》｜informational access gate
Potter family 留在 Fidelius 隐藏地点；Secret Keeper 不披露时地点不可知；Peter 自愿披露后 Voldemort 才取得地点并进入攻击链。锁：`stable informational protected-range x=true`。

### 2.4 《疯狂的麦克斯：狂暴之路》｜mobile controlled boundary
Furiosa 驾驶 War Rig，五位妻子持续处于移动载体保护范围；Joe 追击真实撞向该范围；Furiosa 的 driving/route-control 在风险命中前持续改变双方空间关系并迫使主要追兵改道/失去接近条件。锁：`stable mobile protected-range x=true_on_tested_escape_window`。

## 3｜负向护栏｜5 controls / 5 works

### 3.1 《John Wick》｜posthoc sanction ≠ pre-effect exclusion
Continental 规则与 Winston 的处罚 `x` 真实，但 Ms. Perkins 仍能在酒店内部实际攻击 John，处罚发生在违规之后。锁：`post-effect punishment x ≠ pre-effect protected-range x`。

### 3.2 《War of the Worlds》｜mobile use/control ≠ tested mobile protection
Ray 对 minivan 的 current driving/use 真实，但 crowd 现实突破车辆边界并夺取车辆。锁：**拥有并驾驶移动载体不自动构成 protected-range；真实 risk-test 若直接突破，保护判定失败。**

### 3.3 《Panic Room》｜one risk-channel protected ≠ all-hazard protection
panic room 对常规 human door/wall entry 的 pre-effect exclusion 真实成功，但攻击者通过 ventilation/propane channel 让风险进入内部。锁：**同一边界必须按 risk-channel / ingress-path 分账；一个入口成功不允许倒灌 all-hazard protection。**

### 3.4 《Home Alone》｜partial-defense-effect ≠ stable protected-range
Kevin 对住宅入口与内部路径布置的多组陷阱真实造成 Harry/Marv 受伤、延迟、退却与改道，因此局部防御效果不能被抹掉；但二人仍现实突破住宅边界、进入内部并持续追击，随后还在邻宅抓住 Kevin。最终解除人身风险的关键节点由 Marley 从后方击倒二人、警方随后逮捕完成，并非 Kevin 的住宅边界 `x` 单独稳定排除风险。

锁：

```text
partial-defense-effect
+ repeated delay / injury / rerouting
≠ stable protected-range

局部防御反复成功
≠ 风险被稳定排除在保护边界之外

第三方最终解围
≠ 主体 protected-range x 的成功证明
```

本条与《War of the Worlds》不同：后者是移动载体边界直接被突破；本条显示即使防御节点多次现实奏效，只要攻击风险最终仍突破并持续进入 protected object/range，就不能把“有效防御”升级成“stable protected-range”。

### 3.5 《The Purge》｜boundary-state ON ≠ successful risk-test
James Sandin 在 Charlie 暂时解除住宅 security system 后，真实重新启用门窗 security boundary；因此 James 的 management/use x 与 boundary deployment 都不能因为后续失败被抹掉。但 James 已明确知道该系统无法承受 systematic assault，随后 armed gang 对同一住宅 physical security boundary 发起真实强攻并最终突破进入。

锁：

```text
boundary-state ON / armed / re-enabled
≠ stable protected-range ON

real security-management x
≠ successful hostile-risk exclusion

re-enabled
≠ restored protected-range
```

本条与《Home Alone》不同：Home Alone 锁“多次局部防御效果仍不足以推出 stable exclusion”；The Purge 则锁“边界状态真实重新部署为 ON，也仍不足以推出 protection predicate 已通过”。stable protected-range 必须继续由同 risk-channel 的真实阻断结果单独验证。

## 4｜动态迁移｜2 controls / 2 works

### 4.1 《The Martian》Mark Watney / Hab｜same-risk-channel ON→OFF→ON

本条不是普通第5个 protected-range positive，而是动态控制。

固定：

```text
same actor: Mark Watney
same managed object: Ares III Hab
same protected range: pressurized Hab interior
same risk channel: hostile Mars low-pressure / low-temperature environment
underlying Hab use/management/repair x: retained through all three stages
```

阶段：

```text
A｜Hab sealed
+ Watney/crops inside
+ external Mars risk continuously present
→ boundary excludes risk
→ protected-range ON

Trigger｜Airlock 1 structural failure / explosive decompression

B｜Watney still has Hab use/management/repair x
+ pressure boundary breached
+ risk reaches interior
+ Watney injured / crop destroyed
→ protected-range OFF

Trigger｜Watney physically repairs / reseals Hab

C｜same underlying use/management x retained
+ pressure envelope restored
+ external Mars risk still present
→ same risk excluded again
→ protected-range ON restored
```

锁：

> **underlying possession/use/management `x` retained ≠ protected-range predicate must remain ON。**

以及：

> **protected-range 可以在 same actor / same boundary / same risk channel / same underlying x 下发生 `ON→OFF→ON`；决定变量可以是 boundary integrity，而不是 permission bundle 本身。**

分账：

```yaml
protected_range_dynamic_transition_increment: true
protected_range_positive_increment: false
protected_range_negative_increment: false
x_scope_dynamic_transition_increment: false
```

### 4.2 《World War Z》Jerusalem fortified safe zone｜risk-topology shift ON→OFF

本条吸收已 evidence-locked 的 `6480461b6ac71fbf4fa188ca4d8f2697e9f0f96d`，不新增第二次 control/work。

固定：

```text
actor: Israeli / Jerusalem security-defense apparatus
managed object: fortified Jerusalem perimeter + controlled gates
protected range: fortified Jerusalem interior
protected objects: 已进入城区的未感染人口
broad risk family: zombie physical ingress
underlying perimeter/governance x: retained across stages
```

阶段：

```text
A｜fortified perimeter deployed
+ protected population inside
+ ordinary ground-approach zombie ingress repeatedly excluded
→ protected-range ON

Trigger｜大量感染者被声音吸引并聚集
→ body-pile / vertical aggregation
→ 新的 vertical bypass ingress topology 出现

B｜same institutional boundary/governance x retained
+ wall remains deployed
+ broad risk family remains zombie physical ingress
+ new topology carries risk across the perimeter
→ protected-range OFF
```

锁：

> **stable protected-range 必须同时绑定 current window 与 ingress topology；过去对 topology A 的 verified PASS，不能自动外推到 topology B。**

以及：

> **underlying boundary/governance `x` retained ≠ protected-range invariant。**

与《The Martian》的最小差异：

- The Martian：固定 same risk channel / topology，看 boundary integrity 破裂与修复造成 `ON→OFF→ON`；
- World War Z：underlying boundary 仍部署、governance `x` 未撤回，但风险通过新形成的 vertical bypass topology 使保护从 `ON→OFF`。

与《Panic Room》的最小差异：Panic Room 锁不同 ingress-path 必须分账；World War Z 进一步锁同一 broad risk family 内部的 topology shift 也足以改变 protected-range 状态。

分账：

```yaml
protected_range_dynamic_transition_increment: true
protected_range_positive_increment: false
protected_range_negative_increment: false
x_scope_dynamic_transition_increment: false
```

## 5｜不得倒灌的邻近概念

以下均不能自动替代 stable protected-range：

- 名义安全区 / sanctuary 标签；
- 产权或凭证；
- 内部治理；
- 规则存在；
- 事后处罚；
- 一次性 chokepoint 阻断；
- 对象靠离开边界获救；
- 局部入口保护成功倒灌整个空间；
- 第三方实时保护效果倒灌主体 `x`；
- 主体宣称“这里安全”；
- 仅仅拥有/驾驶交通工具；
- 某个 risk-channel 成功后倒灌为 all-hazard protection；
- underlying use/management x 仍在，因此假定 protected-range 永远 ON；
- 多个陷阱/防御节点反复造成伤害或改道，因此假定 stable protected-range 已成立；
- security boundary 状态位显示 ON / armed / re-enabled，因此假定 stable protected-range 已成立；
- 同一 broad risk family 过去通过过测试，因此假定任何新 ingress topology 都继续 PASS。

## 6｜与 strict-v2 的关系

protected-range `x` 过门不等于 strict-v2 过门。仍必须独立验证 `zn`，并按 `current-layer-specific-anchor-gap-v2_20260829` 做 same current window、same object layer、独立命名 zn、第三因素冻结、`zn→x` 与 `x→zn`。

当前：

```yaml
strict_v2_verified_positive_increment: 0
```

Home Alone、The Purge、World War Z 本轮不锁 `zn`；Watney 本轮不锁 `zn`；Furiosa 案虽两端都较强，但 War Rig 仍有独立运输/驾驶/任务用途，可作为 x 端 competing purpose/ranking anchor，因此也不破 strict current verified-positive ledger。

## 7｜后续只收高信息增益

达到 pending-review 后继续停止普通正例采样。优先：

1. same actor / same boundary / same risk topology 下，已有 verified protected-range ON 后发生 nominal/technical repair，但修复后的真实 risk-test 仍 FAIL 的动态失败镜像；
2. underlying use/management x 不变，但 exclusion/blocking node 被撤回、耗尽或替代后的 protected-range 动态；
3. mobile boundary 的控制权转移/失效；
4. subject-specific access gate 与第三方底层执行节点如何分账；
5. 与 Home Alone 最近邻的“partial defense 多次生效但风险最终完全被主体自身边界稳定阻断”的成功镜像，用来分清 effect density 与 stable exclusion；
6. strict-v2 只在 protected-range `x` 与独立 `zn` 同窗同层都过门且 competing anchors 冻结后重新测试。

## 8｜current 统计

```yaml
criterion_version: protected-range-risk-test-v1_20260831
positive_controls: 4
positive_cross_work_count: 4
negative_guards: 5
negative_guard_works: 5
dynamic_transition_controls: 2
dynamic_transition_works: 2
knowledge_status: pending-review
may_override_canonical: false
```
