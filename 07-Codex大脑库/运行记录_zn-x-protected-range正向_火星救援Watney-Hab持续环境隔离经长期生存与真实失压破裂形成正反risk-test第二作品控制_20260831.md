---
title: 运行记录｜zn-x protected-range正向｜《火星救援》Watney-Hab持续环境隔离经长期生存与真实失压破裂形成正反risk-test第二作品控制
authority_level: L4
knowledge_status: evidence-locked
criterion_version: protected-range-risk-test-v1_20260831
sample_type: protected-range-positive-risk-test-minimal-difference
date: 2026-08-31

work: The Martian (2015 film)
character: Mark Watney
stage: Ares III crew离开后独居Hab至Airlock 1破裂与修复窗口

fact_confidence: 99
classification_confidence: 98

actor: Mark Watney
object: Ares III Hab interior / pressure-maintaining enclosure
permission_type:
  - occupy
  - use
  - manage
  - operate-life-support
  - airlock-control
  - repair
  - local-environmental-exclusion
scope: Hab enclosure only
term: stranded-survival current window
revocability: Hab可因结构破坏失效，Watney可修复并继续使用
return_obligation: NASA ownership / post-mission return not tested
same_layer_pre_effect_veto: none observed on local Hab operation
global_override: NASA可提供任务建议但不能逐项替代Watney现场Hab操作
ultimate_title: not inferred

decision_structure: unilateral-on-local-operation
consultation_structure: initially-single-node; later-NASA-advisory
final_decision_structure: Watney-local-operational
execution_structure: physical life-support / pressure enclosure + Watney direct operation
co_decision_nodes: none mandatory for tested local boundary

boundary_on: true
object_inside: true
risk_type: continuous-Martian-atmosphere-pressure-temperature-hazard
real_risk_test: true
risk_test_pattern: sustained-success-then-observed-boundary-failure
subject_specific_x_changes_risk: true
third_party_primary_protection_node: false
stable_local_protected_range_x: true
whole_mars_or_external_zone_protected_range_x: false

protected_range_positive_control: true
protected_range_positive_control_index: 2
protected_range_cross_work_index: 2
new_independent_work_for_protected_range_v1: true
protected_range_negative_guard_increment: false
ordinary_x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false

zn_current: not-locked
zn_increment: false
zn_x_cooccurrence_increment: false
strict_test_allowed: false
strict_verified_positive_increment: false
strict_increment: false

may_update_L2_zn: false
may_update_L2_x: false
may_override_canonical: false
---

# 运行记录｜《火星救援》Watney-Hab protected-range risk-test

## 0. 研究用途

本轮只测试火轴 `x` 的 **stable protected-range / organized-boundary**，不从“宇航员”“求生”“主角”“聪明”“最后获救”等标签倒推 `zn`。

本条与《战栗空间》Panic Room 使用同一 criterion：

`protected-range-risk-test-v1_20260831`

但机制不同：

- 《战栗空间》主要是 **外部入侵者撞击门/空间边界**；
- 本条是 **持续环境危害被压力维持型 enclosure 隔离，并在边界真实破裂时出现反向失败观测**。

因此不是“再找一个钢门房间”换皮。

---

## 1. 事实链

电影中 Ares III 其他成员撤离后，Watney 单独返回并长期生活在 Hab 内。他在 Hab 中维持生命支持、种植土豆、制造水并持续操作空气锁与其他生存设备。

Mars 外部环境本身不适合无防护的人类生存；Hab 的内部压力、氧气与温度系统持续把 Watney 与该环境危害隔离。

之后 Airlock 1 / Hab 边界发生真实破裂：泄漏导致爆炸/快速失压，Watney 受伤，Hab 内土豆园被毁；Watney随后修复该边界，才继续使用 Hab。

最小差异因此不是想象反事实，而是作品里直接发生：

```text
boundary intact
→ Watney 可持续居住、工作、种植
→ Mars 外部环境危害被隔离

boundary breach
→ Hab 失压 / 爆炸
→ Watney受伤 + 作物毁坏

boundary repaired
→ Hab 再次作为可居住 current enclosure 使用
```

---

## 2. x 权限结构

```yaml
actor: Mark Watney
object: Ares III Hab interior / pressure-maintaining enclosure

permission_type:
  - occupy
  - use
  - manage
  - operate-life-support
  - airlock-control
  - repair
  - local-environmental-exclusion

scope:
  local: Hab enclosure
  global: Mars surface not inferred

term: current stranded-survival window
revocability: physical system can fail / be repaired
return_obligation: NASA ownership relation not used as current x evidence
same_layer_pre_effect_veto: none observed for local emergency operation
global_override: NASA advisory / mission authority does not physically replace Watney's local current operation
ultimate_title: not tested

decision_structure: unilateral-on-tested-local-operation
consultation_structure: single-node initially; later NASA advisory
final_decision_structure: Watney-local-operational
execution_structure: physical enclosure + life-support system + Watney direct operation
co_decision_nodes: none mandatory on tested local act
```

这里不靠“Hab 是 NASA 的”判 `x=false`，也不靠“Watney 是宇航员”判 `x=true`。

current `x` 只锁：

> Watney 在该生存窗口里对 Hab 内部空间、空气锁、生命支持与破损修复拥有真实、持续、无需逐次重新取得现场第三方许可的 operational control。

产权与 current operational `x` 分账。

---

## 3. protected-range 固定门

### boundary-on
true。

Hab 作为封闭、加压、可维持生命的 enclosure 正在运行。

### object-inside
true。

Watney 本人持续留在 Hab 内，并在其内部进行睡眠、工作与种植。

### real risk enters / hits boundary
true。

本例风险不是单次敌人，而是持续存在的 Mars 外部低压、缺氧、低温环境。Airlock 1 真实破裂以后，危害直接穿透原边界，造成失压、受伤与作物毁坏。

### subject-specific x changes / blocks risk
true。

Hab 在 intact 状态下持续维持内部可居住环境；破裂以后 protection 立即失败；Watney 修复以后 current enclosure 才能重新使用。

### third-party primary protection node
false。

NASA 设计制造 Hab，是来源节点；后续也能远程提供建议，但在被测窗口里没有第三方节点实时替 Watney完成每一次本地 airlock / repair / life-support 操作。

因此当前保护效果不需要把 NASA 的所有制度、工程师、地球资源事后打包成 composite `x` 才能解释。

---

## 4. 最小差异

这一条比只有“这里很安全”的材料更硬，因为作品给出同一个对象、同一个主体、同一阶段的正反观测：

```text
Hab boundary intact
→ protection succeeds

Hab boundary breaches
→ protection immediately fails

Watney repairs boundary
→ enclosure function partially restored
```

所以正式锁：

> **稳定 protected-range `x` 不只可以由攻击者撞门来验证；持续环境危害 + 真实边界破裂/修复，同样可以构成高纯 risk-test。**

新增机制名：

`continuous-environmental-hazard-containment`

---

## 5. 局部 / 整体

只锁：

```text
Hab interior protected-range x = true
```

不锁：

```text
Mars surface protected-range x = true
Ares III 全任务保护范围 = true
NASA 对Watney完整生存结果的单方保护 x = true
```

Hab 以外，Watney 必须依赖宇航服、rover 等不同对象层资源。不得把多个不同资源事后捆绑为“Watney生存系统大 x”。

---

## 6. 拿掉测试

拿掉 Hab current enclosure，只保留 Watney 的聪明、宇航员身份、NASA 任务资格：

> 无法解释为什么他能长期在 Mars 表面保持一个可呼吸、可居住、可种植的稳定内部范围。

所以 Hab current `x` 对该 protected-range 结果有真实作用。

但这一结果只证明 `x`，不自动生成 `zn`。

---

## 7. 反向测试

如果 Hab 只是被称作“habitat”，但：

- 外部环境进入后内部条件不改变；
- 或破裂前后没有可观察风险差异；
- 或保护主要由另一个实时节点完成；

则不能仅凭命名、设计说明或 NASA 身份锁 stable protected-range `x`。

本例恰好存在 boundary failure 的反向观测，因此不是 declared/nominal protected range。

---

## 8. 第三因素冻结

冻结：

- Watney 是主角；
- Watney 是宇航员 / 植物学家 / 工程师；
- NASA 最终救援；
- Hermes 返航；
- 中国发射器；
- Watney 的乐观、聪明、意志；
- 最终是否活着回地球。

只保留：

> 同一 Hab 边界在 intact / breach / repair 三个现实状态下，对 Mars 环境危害进入内部范围的结果是否发生可观察变化。

结论不变。

---

## 9. 最近邻排除

- **`x vs 身份`**：宇航员身份不是 Hab current control 证据。
- **`x vs 产权`**：NASA ownership 不自动抹掉 Watney 在当前窗口的 operational `x`。
- **`x vs xn`**：如何制造水、种土豆、修 airlock 是运行流程；本轮只问谁当前控制并维持 enclosure。
- **protected outcome vs protected-range**：Watney 最终获救不是本轮证据；Hab 边界自身的 intact/breach 差异才是。
- **composite-x**：Hab、rover、spacesuit、NASA resupply 不打包为一个无限宽 `x`。

---

## 10. zn / strict-v2

本轮不锁 `zn`。

“想活下去”“想回地球”首先是目标/生存驱动，不能仅凭高代价坚持直接判内部不可轻易让渡原则。

因此：

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

P1 成功不自动给 P0 补票。

---

## 11. 当前判定

```yaml
stable_local_protected_range_x: true
risk_test: sustained-success + observed-failure + repair
risk_mechanism: continuous-environmental-hazard-containment
third_party_primary_protection_node: false

fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

最短新规则：

> **protected-range 的高纯 risk-test 不要求一定有“敌人撞门”；持续环境危害下，同一 enclosure 的 intact → breach → repair 能提供更强的因果最小差异。**

以及：

> **NASA/产权来源 ≠ current operational x；来源节点与当前现场掌握必须分账。**

---

## 12. 统计纪律

本条使用 current criterion：

`protected-range-risk-test-v1_20260831`

相对当前已入库《战栗空间》首份 positive：

```yaml
protected_range_v1_verified_positive_controls: 1 -> 2
protected_range_v1_verified_positive_works: 1 -> 2
```

新增 independent work：`The Martian`。

不增加：

- strict positive / negative；
- zn；
- zn+x co-occurrence；
- ordinary x-scope positive；
- x-scope boundary guard；
- x-scope dynamic transition。

本条是第二种 protected-range 正向机制，不是 Panic Room 的普通钢门换皮。

---

## 13. 治理边界

本条只提供 L4 evidence：

> 持续环境危害隔离也可形成 stable protected-range `x`，并可由同一 boundary 的成功/破裂/修复做风险压力测试。

不得直接修改 L1/L2 canonical，不自动建立 protected-range pending-review，不自动升级 strict。
