---
type: ten-yuan-fire-axis-xscope-path-set-exhaustion-evidence
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
mechanism: actor-indexed-same-object-actuator-path-set-exhaustion
sample: Apollo 13 / CSM-Service Module fuel-cell electrical generation
fact_confidence: 99
classification_confidence: 97
path_set_exhaustion_verified_increment: true
x_scope_ordinary_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_increment: false
strict_v2_increment: false
protected_range_increment: false
control_increment_this_file: 1
independent_work_increment_this_file: 1
may_override_canonical: false
may_update_L2: false
created: 2026-09-06
---

# 运行记录｜zn-x x-scope 首份真实 path-set exhaustion｜Apollo 13

> 本文件是 L4 evidence，不修改 L1/L2 canonical。current canonical 高于本文件。木轴 `zx↔nx` 只迁移“对象层/current window/最近邻/拿掉/反向/第三因素冻结/路径完整性审计”的验证方法，不迁移木轴理论结论。

## 0｜为什么本案值得进入收束期

current P1 要求的不是“几个接口坏了”，而是：

```text
same actor
+ same object layer
+ same actuator/effect family
+ same current window
+ actor-indexed relevant path-set completeness audit
+ surviving path n>1 -> 1 -> 0
+ tested-layer target-effect reality-test OFF
```

此前 Macondo 只锁 `system-level target-effect path set ≠ actor-indexed x execution path set`；United Airlines 232 又锁 `same actor + same higher-level target effect ≠ same execution-object / actuator-layer path set`。两者都是前置护栏，还没有一份 current control 真正把 complete relevant path-set 从多条追到一条再追到零条。

Apollo 13 的 Service Module 三套 fuel cells 提供了这份最小差异。

## 1｜事实锚点

NASA 当前公开材料一致支持：

1. Apollo 13 Service Module 原有三套 fuel cells，它们是正常任务中 Command/Service Module 的主要电力来源；
2. 氧罐事故后，fuel cells 1 与 3 丧失输出，系统从三条同族发电路径收缩到只剩 fuel cell 2；
3. 剩余氧罐继续失压，氧气无法继续支持 fuel-cell generation；最终 fuel-cell 供电不可继续；
4. CM batteries 随后承担临时 Command Module 供电，Lunar Module Aquarius 则成为足以维持返航的主要电力/生命支持来源。

主要来源：

- NASA, `Apollo 13: Mission Details`: https://www.nasa.gov/missions/apollo/apollo-13-mission-details/
- NASA History, `Detailed Chronology of Events Surrounding the Apollo 13 Accident`: https://www.nasa.gov/history/detailed-chronology-of-events-surrounding-the-apollo-13-accident/
- NASA, `50 Years Ago: Apollo 13 Review Board Report`: https://www.nasa.gov/history/50-years-ago-apollo-13-review-board-report/
- NASA, `Apollo 13: The Successful Failure`: https://www.nasa.gov/missions/apollo/apollo-13-the-successful-failure/

事实层结论置信度：99。

## 2｜zn 独立判定

本轮不锁 `zn`。

事故后的“保住机组、返航”当然是强行动方向，但角色职责、紧急生存、Mission Control 程序与现实危机已经足以解释这些选择；不能因为高代价、英雄结果或救命行为就自动制造“不可轻易让渡的内部意义与未来指导资格”。

因此：

```yaml
zn: not-locked
strict_v2: no-increment
```

本案只用于 x-scope / path-set exhaustion。

## 3｜x 与权限结构

### actor

`Apollo 13 onboard flight crew / CSM operating node`

只锁机组对座舱内 CSM 电力负载、bus connection、fuel-cell shutdown / load-switching 的现实操作层。Mission Control 的程序指导属于 source / consultation / mission-authority layer，不倒灌成机组自己的 direct execution path；反过来也不把 NASA 的 ultimate ownership/title 算成 crew x。

### object / permission bundle

```yaml
object: Service Module fuel-cell electrical-generation resource feeding CSM buses
permission_type: use / load-switching / shutdown / electrical-resource allocation
scope: CSM/SM fuel-cell generation only
quantitative_cap: not-applicable; path-count tracked separately
term: current mission window
revocability: mission/procedural authority exists but does not erase current realized operation
return_obligation: not-applicable
same_layer_pre_effect_veto: no independent node capable of restoring a fuel cell once oxygen/reactant generation path is physically unavailable
global_override: mission authority external; not counted as a generation path
ultimate_title: NASA/government ownership irrelevant to current crew operating x
decision_structure: crew + Mission Control guidance may be distributed
consultation_structure: Mission Control intensive
afinal_decision_structure: emergency procedure decisions distributed by mission architecture
execution_structure: onboard crew performs CSM switch/load actions
co_decision_nodes: Mission Control may direct procedure but is not an onboard electrical-generation actuator
```

注：上面字段 `afinal_decision_structure` 只是本记录的文本字段名，不提议修改 L2 schema；语义即 current `final_decision_structure`。

## 4｜对象层与 current window

### object layer

被测对象不是“整个 Apollo 13 是否还能获得任何电力”，而是：

> **Service Module fuel-cell electrical generation feeding the CSM electrical buses.**

### actuator / effect family

三套 fuel cells 属同一个物理发电家族；CM entry batteries 是储能/电池 actuator，LM electrical system 是另一 spacecraft object/node，均必须分账。

### current window

锁定：事故前正常三 cell 发电 → 氧罐事故后 cells 1/3 丧失输出 → cell 2 独立承担剩余 fuel-cell generation → 剩余氧气继续流失、fuel-cell generation 全部不可继续、CSM 转入电池/LM 替代供电。

没有跨到 reentry 后恢复 CM 系统的后期窗口。

## 5｜relevant path-set completeness audit

### actor-indexed tested path-set

```text
P = {
  fuel cell 1,
  fuel cell 2,
  fuel cell 3
}
```

理由：在被测 object/actuator/effect family 内，三套 fuel cells 就是 Service Module 正常 fuel-cell electrical generation 的并行发电单元。

### 必冻替代项

#### direct repair
事故后氧系统持续失压；NASA Review Board 结论是结构/供氧损失使 fuel cells 无法继续发电。不存在机组在 current window 内对损坏 Service Module bay / oxygen supply 的现实同层修复路径。

#### bypass
bus/load switching 只能把负载转给仍存活的 fuel cell 2；它不产生第4个 fuel-cell generation actuator。因此 switching 是 routing，不是新增 generation path。

#### delegated route
Mission Control 可以给程序和负载管理指令，但不能从地面替代 onboard fuel cell 产生电流；不是同层 generation path。

#### parallel authority
地面 mission authority、spacecraft ownership、程序批准均不等于并行 electrical-generation actuator。

#### emergency interface
CM batteries 可以在 fuel-cell path-set 耗尽后继续给 CM 提供有限电力，但属于 battery storage/discharge family，不是 surviving fuel-cell generation path。

#### alternate execution node
Lunar Module Aquarius 后来成为主要电力/生命支持来源，但它是另一 spacecraft object/node；系统级“机组仍能得到电”继续成立，不能倒灌为 Service Module fuel-cell path 仍存活。

#### automatic / third-party node
没有一个自动或第三方节点能在同一 Service Module fuel-cell generation layer 生成第4条路径。

## 6｜真实 path-count transition

```text
Stage A | nominal pre-accident
fuel cell 1 ON
fuel cell 2 ON
fuel cell 3 ON
surviving_relevant_path_count = 3

Trigger | oxygen-tank accident / reactant-loss cascade

Stage B | cells 1 and 3 no longer generating
fuel cell 1 OFF
fuel cell 2 ON
fuel cell 3 OFF
surviving_relevant_path_count = 1

Trigger | remaining oxygen pressure continues to decay; remaining cell cannot be sustained

Stage C | fuel-cell generation unavailable
fuel cell 1 OFF
fuel cell 2 OFF
fuel cell 3 OFF
surviving_relevant_path_count = 0
```

这不是把三个“按钮”当三条路径，而是三套可独立承担电力负载的同族发电单元；Stage B 中唯一 surviving unit 现实承担了剩余 load，故 `3 -> 1 -> 0` 有实际 effect-test，而非纸面枚举。

## 7｜target-effect reality-test

### 窄层测试

```text
被测 target effect:
Service Module fuel-cell generation supplies CSM electrical power
```

Stage C：OFF。

NASA 事故调查明确指出，失去氧气后 fuel cells 无法发电；任务随后必须依靠 CM batteries 与 LM power。

所以：

```text
surviving_relevant_path_count = 0
AND
same tested-layer target effect = OFF
```

通过 current path-exhaustion reality-test。

### 宽层反向测试

若把 target effect 偷换成：

```text
“crew / spacecraft can obtain any electrical power”
```

则 Stage C 并非 OFF，因为 CM batteries 与 LM power 仍存在。

因此本案同时验证：

> **窄 object/actuator layer 的 complete path-set exhaustion，可以与更高层 system target effect 继续成立同时发生。**

这不反驳 path=0，反而证明为什么必须先锁 object / actuator / target-effect layer。

## 8｜最近邻

### vs Macondo
Macondo 的新增信息是 actor-indexing：自动 deadman/autoshear、人工 EDS、外部 ROV 不能揉成一个主体 path-set。

Apollo 13 在 actor-index 后进一步完成 same-family path count 的真实 `3 -> 1 -> 0`。

### vs United Airlines 232
United 232 已证明：正常液压飞控执行链归零后，同一机组仍可用差动推力影响更高层航迹，因此跨 actuator workaround 不能自动算原 x surviving path。

Apollo 13 更进一步：

- 不只是证明 `0` 与高层 workaround 可以共存；
- 还先完整观察到同族 path-set 的 `3 -> 1 -> 0`；
- CM batteries 与 LM 恰好成为明确的跨 actuator / object substitute 压力项。

所以它是当前第一份真正的 **path-set exhaustion positive control**，不是第27条普通 boundary guard。

## 9｜拿掉 / 反向

### 拿掉测试
拿掉三套 fuel-cell generation paths 后，crew 不能再通过该被测 family 调用 Service Module fuel-cell generation；fuel-cell target effect 现实 OFF。

### 反向测试
保留更高层“仍有电”的结果，不得反推出原 fuel-cell path-set 未耗尽：CM batteries 与 LM 属不同 actuator/object layer。

### 再反向
如果测试对象一开始就定义成“整个 Apollo 13 所有可获得电力来源”，那么 batteries 与 LM 必须进入 path-set，本案就不能写 `path=0`。因此本 positive 只在窄锁的 Service Module fuel-cell generation layer 成立。

## 10｜第三因素冻结

冻结但不倒灌：

- Mission Control 的知识、程序与决策支持；
- NASA ultimate ownership / formal mission authority；
- CM batteries；
- LM batteries / LM electrical system；
- 生存结果与最终成功返航；
- 机组职业职责、英雄叙事与高代价；
- 事故后 load shedding 的流程组织能力（可偏 xn）。

这些因素可以解释应对、维持更高层系统效果或产生替代路径，但不能变成原 Service Module fuel-cell x path。

## 11｜本轮判定

```yaml
strict_v2: no-change
x_scope:
  criterion: current-x-scope-distinction-v1_20260830
  path_set_exhaustion_verified: PASS
  path_set_exhaustion_verified_controls: 1
  path_set_exhaustion_verified_works: 1
  ordinary_positive_increment: 0
  boundary_guard_increment: 0
  ordinary_dynamic_increment: 0
protected_range: no-change
```

本轮不把它塞进现有 `dynamic_transition_controls 29/25`，原因是当前 registry 已把 path-set exhaustion 单列为 P1；先建立独立 verified 子槽，避免把“权限/范围迁移”和“同一权限 family 的执行路径耗尽”混成同一统计。后续若 current registry 明确决定把该子槽并入 dynamic，再做一次不重复计数的状态迁移。

## 12｜新锁定命题

> **真正 path-set exhaustion 可以在 broad permission / higher-level target capability 仍存活时成立。判定单位不是“系统还有没有任何办法”，而是：same actor + same object layer + same actuator/effect family + same current window 下，经 completeness audit 后 relevant surviving path 是否真实从多条缩到零条，并且该被测层 target effect 同时 OFF。跨 actuator batteries、跨 object LM 或 source-authority 节点不得为了否定 path=0 而倒灌进原 x。**

该命题目前只到 L4 evidence-locked，不自动修改 L1/L2 canonical。

## 13｜统计与下一缺口

本 evidence 新增：

```text
path-set exhaustion verified:
0 controls / 0 works
->
1 control / 1 independent work
```

现有 x-scope ordinary positive / boundary / dynamic / decision-calibration 不变；strict-v2 与 protected-range 不变。

下一高价值缺口：不是第2个同机制 `3 -> 1 -> 0`，而是对本新 positive 做 adversarial nearest-neighbor：寻找同样具有多重同族执行路径、看似全部耗尽，但实际存在此前漏枚举的 same-actor direct repair / bypass / delegated route / emergency interface，从而把“假 path=0”击穿的负向镜像。