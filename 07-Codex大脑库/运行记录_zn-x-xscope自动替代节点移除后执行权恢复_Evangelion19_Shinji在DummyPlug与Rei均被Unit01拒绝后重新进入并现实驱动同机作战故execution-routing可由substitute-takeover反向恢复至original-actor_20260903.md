---
type: ten-yuan-fire-axis-boundary-pressure-run
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-dynamic-restoration-mirror
work: Neon Genesis Evangelion
character: Shinji Ikari
stage: Episode 19 Zeruel attack / return to Unit-01
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜Evangelion Episode 19｜automated substitute removal / rejection → original actor execution x restored

## 0｜启动对齐
写前以 `main@94741afbc7e82dacf0cc498e60d83526ae94942f` 为真值。已重读最近 commits，并按 current canonical 对齐 L0/L1 权力门禁、L1 十元—五行正本、zn/x 信息卡与准度卡、相关关系卡/补卡、火轴待审议清单、研究总纲、strict-v2 与 x-scope current。仓库 current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current 待审议清单把 automated substitute removal mirror 列为高价值缺口：Episode 18 已锁 Shinji `physical interface occupancy retained ≠ current execution x retained`，本轮只测试同一 actor / same object 的反向恢复，不重复增加普通正例。

## 1｜事实链
### Stage A｜Episode 18 已锁前态
- Shinji 仍在 Unit-01 Entry Plug 内，但 pilot synchronization / control routing 被切断；
- Dummy System 接管 Unit-01 并攻击 Unit-03；
- Shinji 无法停止同机攻击；
- 因此 Shinji 在该 motor/combat execution layer 的 current x 已 `ON → OFF`。

### Stage B｜Episode 19 substitute path 不再可用
Zeruel 攻击时，NERV 先尝试让 Rei 启动 Unit-01，Unit-01 拒绝 neural connection；随后加载 Dummy Plug，系统再次报告 Unit-01 拒绝 dummy、启动失败、无响应。NERV 重试 dummy 仍失败。

### Stage C｜original actor 返回并 reality-test
Shinji 主动返回并要求重新驾驶 Unit-01。随后 Unit-01 由 Shinji 驾驶出击，现实响应其操纵与战斗动作，直到外部电源/内部电池耗尽；之后 Unit-01 的自主觉醒另属新的 execution layer，不倒灌到 Shinji pilot x。

## 2｜x-scope 固定拆分
```yaml
actor: Shinji Ikari
object: Evangelion Unit-01
object_layer: pilot-to-EVA motor/combat execution
permission_type:
  physical_interface_occupancy:
    episode18_after_override: true
    episode19_return: true
  pilot_synchronization_execution:
    episode18_after_override: false
    episode19_after_return: true_reality_tested
  dummy_execution:
    episode18: true_reality_tested
    episode19_pre_return: false_reality_tested
  Rei_substitute_execution:
    episode19_pre_return: false_reality_tested
scope:
  tested: Unit-01 pilot motor/combat execution
  excluded:
    - NERV mission-source authority
    - Unit-01 autonomous berserk/awakening execution after power exhaustion
term: Episode18 override → Episode19 Zeruel return window
revocability: reality-tested both directions
return_obligation: not_material
same-layer_pre-effect_veto:
  episode18: NERV routing override can cut Shinji execution
  episode19: Unit-01 rejects Rei and Dummy substitute paths
global_override:
  episode18: NERV Dummy System takeover
  episode19_pre_return: attempted but ineffective because Unit-01 rejects substitute nodes
ultimate_title: not_used
decision_structure: mission decision external to Shinji; execution attribution tested separately
consultation_structure: not_material
final_decision_structure: not_collapsed_into_execution
execution_structure:
  A: Shinji pilot -> routing cut -> Dummy System -> Unit-01 action
  B: Rei attempt -> rejected; Dummy attempt -> rejected
  C: Shinji returns -> Unit-01 responds -> Shinji pilot execution restored
co-decision_nodes: none_locked
scope_transition: Shinji execution x OFF -> ON
trigger: substitute paths fail + original actor returns and same-object reality-test succeeds
```

## 3｜关键压力与新增判据
本轮锁：

```text
substitute execution once succeeded
≠ substitute execution remains current

original actor execution once revoked
≠ original actor remains permanently OFF
```

真正恢复必须满足：

```text
same actor + same object layer
prior execution x = OFF
→ substitute/current alternative node is removed or reality-tested unavailable
→ original actor returns
→ same object again reality-tests response to original actor
→ execution x OFF → ON
```

因此“重新坐回接口”“系统准备重连”“名义恢复 pilot 身份”都不够；必须看到同层现实响应。

## 4｜最近邻排除
### Episode 18 Shinji
Episode 18 是 `human execution node → automated substitute takeover → actor ON→OFF`；本轮是严格反向镜像 `substitute unavailable → original actor same-object response → OFF→ON`。同作品同人物，不增加 independent work，只增加 dynamic control。

### Miles Dyson / Terminator 2
Dyson 是 credential backend invalidation 造成 access `ON→OFF`；本轮不是 credential validity，而是 execution-node routing attribution 的反向恢复。

### Pacific Rim / Raleigh
Raleigh 测的是 joint↔unilateral execution topology；本轮测试 original actor 与 automated substitute node 之间的 attribution replacement/recovery。

## 5｜拿掉 / 反向 / 第三因素冻结
### 拿掉测试
若只观察 Dummy Plug 被拒绝，而没有 Shinji 返回后 Unit-01 的现实响应，只能证明 substitute OFF，不能推出 Shinji x 自动 ON。

### 反向测试
Episode 18 已提供反向：Shinji 仍物理在场，但 routing 被切断、Dummy reality-test 成功，因此 Shinji execution x OFF。

### 第三因素
- Gendo/NERV 的 mission-source authority 不等于 Shinji execution x；
- Unit-01 自身的选择/拒绝是 competing gate，必须显式记录；
- Unit-01 后续断电后的自主觉醒不归 Shinji pilot execution；
- Shinji 的情绪、身份、是否“应该是驾驶员”均不作为 x 证据。

## 6｜zn / strict-v2
本轮不锁 zn。Shinji 返回可以由保护 NERV 内人员、同伴风险、Kaji 提示、即时 Angel 压力等 competing anchors 解释；而 Unit-01 pilot x 仍有独立战斗/防卫/任务用途。故不新增 strict positive / negative / deferred / precondition。

```yaml
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_guard_increment: false
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 7｜成熟度与统计
```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: false
```

写前 current dynamic ledger 为 `23 controls / 21 independent works`。本轮与 Episode 18 属同一作品，故正确变化：

```text
23 / 21
→ 24 dynamic controls / 21 independent works
```

ordinary x-scope positive、boundary、decision calibration、protected-range、strict 均 `+0`。

## 8｜高信息增益结论
`x` 的 execution attribution 不是一次替换后永久冻结。自动替代节点曾经现实接管，只能证明当时 original actor OFF；后续必须重新检查当前 routing。替代节点失效本身也不能自动恢复原 actor，只有 original actor 在 same object layer 再次通过 reality-test，才能锁 `OFF→ON`。

下一轮优先 P0 strict-v2；若仍无 ≥95，优先 path-exhaustion dynamic 或 permission-cap expansion mirror，避免继续重复 execution-routing 同机制。
