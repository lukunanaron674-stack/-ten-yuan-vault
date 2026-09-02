---
type: ten-yuan-fire-axis-protected-range-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: protected-range-risk-test-v1_20260831
sample_type: protected-range-dynamic-same-risk-channel-on-off-on
priority_bucket: P1-P2-P5
work: The Martian (2015 film)
character: Mark Watney
phase: Hab sealed and sustaining Watney/crops -> Airlock 1 structural failure and explosive decompression -> Watney repairs/reseals Hab
mechanism: underlying-hab-use-management-x-retained while same-boundary same-risk-channel protected-range changes ON -> OFF -> ON
fact_confidence: 99
classification_confidence: 98
protected_range_dynamic_transition_increment: true
protected_range_positive_increment: false
protected_range_negative_increment: false
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_precondition_guard_increment: false
created: 2026-09-02
---

# zn ↔ x｜protected-range 动态边界压力测试｜《The Martian》Mark Watney / Hab

## 0｜启动对齐

本轮写前以 `main@f6fb1ed1ab6e476a19199f73afbb06cf2a38f0d8` 为真值。启动时按 current canonical / gate 重读并对齐：

- `AGENTS.md` 与 L0/L1 文件权力、任务门禁；
- `00-中枢索引/AI文件权力与任务总览.md`；
- `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md`；
- `07-Codex大脑库/十元理论每小时执行门禁协议_v1.0_2026-07-28.md`；
- `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`；
- `01-十元系统/01-十元信息卡/【zn信息量卡v2】.md`；
- `01-十元系统/01-十元信息卡/【x信息量卡v2】.md`；
- `01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md`；
- `01-十元系统/03-十元准度卡/x_准度卡_v0.1.md`；
- `01-十元系统/04-十元生克补卡/补/zn补x_补卡.md` 及相关关系卡；
- `07-Codex大脑库/zn-x火轴待审议清单.md`；
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md`；
- strict current：`current-layer-specific-anchor-gap-v2_20260829`；
- x-scope current：`current-x-scope-distinction-v1_20260830`；
- protected-range current：`protected-range-risk-test-v1_20260831`；
- 最近 commits 至 `f6fb1ed1ab6e476a19199f73afbb06cf2a38f0d8`。

current canonical 高于本记录。木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。protected-range ordinary positive/negative 已跨 3 works 且进入 pending-review，本轮不继续堆普通正例或负例，只记录同边界、同 risk-channel 的真实动态迁移。

## 1｜本轮结论

本轮锁定一个此前 ledger 明确缺少的 protected-range 动态控制：

> **在 underlying possession/use/management `x` 没有同步消失时，同一主体对同一边界的 protected-range 可以因为边界完整性变化，在同一 risk channel 上发生 `ON → OFF → ON`。因此“我仍掌握/使用这个范围”与“这个范围此刻仍能把该风险挡在外面”必须分账。**

最小结构：

```text
same actor: Mark Watney
same managed object: Hab
same protected range: Hab pressurized interior
same risk channel: hostile Martian low-pressure / low-temperature external environment

Stage A
Hab sealed + Watney/crops inside + Mars environment continuously outside
→ pressure boundary excludes risk
→ protected-range ON

real trigger
Airlock 1 structural failure / explosive decompression

Stage B
Watney still has Hab use/management relation
but boundary is physically breached
+ Mars environment reaches protected interior
+ Watney is injured / crops destroyed
→ protected-range OFF

repair trigger
Watney physically repairs / reseals Hab

Stage C
Hab use/management continues
+ pressure boundary restored
→ same environmental risk is again excluded from Hab interior
→ protected-range ON again
```

这不是 `x ON → OFF → ON`。变化的是 **protected-range predicate**，不是 Mark 对 Hab 的 underlying current use/management permission bundle。

## 2｜作品事实

高置信事实链：

1. Watney 被独留火星后持续使用、维护并改造 Ares III Hab，依赖其气密、加压、供氧与温控环境生存，并在 Hab 内种植马铃薯。
2. 同一阶段火星外部低压、低温环境持续存在；正常密封状态下，Hab 边界把该风险隔离在外，Watney 与作物留在内部。
3. Watney 进入 Hab 时 Airlock 1 发生结构故障并爆裂，Hab 发生 explosive decompression；Watney 受伤，马铃薯种植区被毁。
4. 爆裂后 Mark 没有因此失去对 Hab 的使用/维护资格或操作接口。他转而检查、移动、修补相关结构并继续把 Hab 作为自己的生存设施处理。
5. 之后他完成对 Hab / airlock breach 的修复与重新密封，使 Hab 再次可维持加压内部环境；作物已经死亡，不因 later reseal 被倒推为之前风险从未进入。

外部事实来源：

- The Martian (2015 film) plot：Airlock leak/explosion injures Watney, destroys potato garden, and he repairs the airlock. https://en.wikipedia.org/wiki/The_Martian_(film)
- The Martian novel plot（用于同机制交叉核对，不混作 film 新事件）：Hab airlock tear causes depressurization, nearly kills Watney; he repairs Hab but plants are dead. https://en.wikipedia.org/wiki/The_Martian_(Weir_novel)
- LitCharts novel summary：Sol 119 Hab breach / airlock torn away，之后 Watney repairs Hab，soil and potato plants dead. https://www.litcharts.com/lit/the-martian/summary

本轮判定对象是 2015 film；novel 只作为同机制事实一致性的辅助核对，不增加 independent-work 计数。

## 3｜zn 独立判定

本轮不锁 `zn`。

Watney 的持续求生、修补 Hab、维持作物与后续撤离行动可以由 immediate survival pressure、任务连续性、工程问题求解与现实生存需要充分解释。仅凭“绝不放弃”“我要活下去”或高强度坚持，不能直接推出 current `zn`。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive: false
```

所以本轮没有把 protected-range 动态漂亮这一点拿来替 strict-v2 另一端补票。

## 4｜x 固定拆分

```yaml
actor: Mark Watney
object: Ares III Hab
object_layer: habitat-use-management-and-pressure-boundary

permission_type:
  contact: true
  use: true
  custody: true_local_operational
  call: true_on_hab_systems
  management: true
  repair_modify: true
  disposition: not_inferred_as_ultimate_title
  veto: local_system_actions_only
  exclusion: tested_only_as_physical_pressure_boundary_effect
  transfer: not_tested

scope:
  use_management: Hab systems and local interior
  protected_range: pressurized Hab interior
  protected_objects:
    - Mark Watney
    - potato crop during tested pre-breach window
  excluded_risk_channel: Martian external low-pressure / low-temperature environment
  global_NASA_program_authority: false

term:
  same_window: pre-breach -> breach -> post-repair habitation sequence

revocability:
  use_management: not revoked by airlock failure
  protected_range_effect: depends on boundary integrity

return_obligation: n/a

same_layer_pre_effect_veto:
  use_management: none material in tested local repair actions
  protected_range_stage_A: physical sealed boundary blocks external environment
  protected_range_stage_B: boundary integrity absent; no effective block
  protected_range_stage_C: repaired sealed boundary restores block

global_override:
  NASA mission authority: external but not required for local Hab survival actions in tested sequence

ultimate_title:
  not_used

decision_structure:
  local_hab_use_repair: unilateral-in-practice for stranded Watney
  mission_level: external NASA chain not promoted into local x

consultation_structure:
  NASA communication exists during broader period but is not treated as mandatory co-approval for the tested physical emergency repair

final_decision_structure:
  local repair/use: Watney reality-effective
  ultimate Hab ownership/disposition: not inferred

execution_structure:
  stage_A: maintained sealed infrastructure
  stage_B: boundary-failure / risk ingress
  stage_C: Watney repair + restored sealed infrastructure

co_decision_nodes:
  mandatory_same-layer_repair_nodes: none observed

unilateral_effect:
  local_repair_actions: true

independent_execution_nodes:
  external competing controller: none needed for tested physical boundary transition

endogenous_competing_execution_node:
  false

competing_anchor:
  physical boundary integrity itself is a state variable, not a rival rights-holder

object_specific_constraint:
  Hab protects only while physical pressure envelope remains intact

realized_effect_test:
  stage_A: sustained pressurized habitation
  stage_B: explosive decompression reality-tests failure
  stage_C: reseal/repressurization reality-tests restoration

scope_transition:
  underlying_use_management_x: retained
  protected_range_state: ON -> OFF -> ON

transition_trigger:
  ON_to_OFF: Airlock 1 structural failure / breach
  OFF_to_ON: physical repair and resealing

retained_layers:
  - contact
  - use
  - local management
  - repair/modify interface

lost_or_externalized_layers:
  - none of the tested x permissions are shown revoked by the breach
```

## 5｜保护型 x 固定门逐项

### Stage A｜ON

```text
boundary-on = true
object-inside = true
real risk present = true (Mars external environment continuously surrounds Hab)
subject-specific x = Watney reality-tests Hab use/management and maintains local survival system
risk changed/blocked = true (pressurized interior maintained against external environment)
third-party primary completion = false in current stranded-Hab operating window
```

判：`protected-range ON`。

### Stage B｜OFF

```text
same boundary = Hab pressure envelope
same protected objects = Watney / crop layer in the breach window
same risk channel = external Mars pressure/temperature environment
real risk ingress = true
observed effect = decompression + Watney injury + crop destruction
underlying use/management x = still retained
```

判：`protected-range OFF`。

关键：不能因为 Mark 仍“拥有/使用/管理 Hab”，就说 protected-range 仍 true。

### Stage C｜ON restored

```text
same Hab remains Mark's current survival/management object
breach repaired / pressure envelope restored
external Mars risk remains present
Hab again sustains a sealed pressurized interior
```

判：`protected-range ON restored`。

作物已经死亡只说明 Stage B 的风险确实进入并造成不可逆后果；不能用 Stage C 的 later repair 抹掉 Stage B failure。

## 6｜关键压力与最近邻

### 6.1 与《Panic Room》Meg 的差异

Meg control 锁的是：

```text
same boundary
risk-channel A (human door/wall entry) = PASS
risk-channel B (propane ventilation ingress) = FAIL
```

The Martian 本轮固定 **同一个 risk channel**：Mars hostile external environment。

```text
same risk channel
+ same boundary
+ same actor
+ underlying x retained

ON -> OFF -> ON
```

因此不是重复 `risk-channel specificity`。

### 6.2 与《War of the Worlds》Ray 的差异

Ray / minivan 锁的是 vehicle-use `x=true` 但 crowd reality-test 直接突破，因此 mobile protected-range negative。

本轮不是“use x 从来不够保护”，而是：

```text
protected-range 原本真实成立
→ boundary integrity 真实失效
→ protected-range 关闭
→ repair 后恢复
```

### 6.3 与 x-scope dynamic 的差异

本轮不计 `x_scope_dynamic_transition`。

原因：

```text
Mark 对 Hab 的 use / management / repair x
在爆裂前后没有被证据显示撤回、转移或收窄
```

真正迁移的是 protected-range 的 effectiveness state。

锁：

> **`underlying x state` 与 `protected-range effectiveness state` 是两个不同状态变量。**

这是本轮最高信息增益。

## 7｜拿掉 / 反向 / 第三因素冻结

### 拿掉

拿掉 Airlock 1 breach，只保留 Mark 长期使用 Hab，则只能证明 Stage A 的稳定保护效果，不能证明 dynamic OFF。

拿掉 post-breach repair，只能锁 `ON -> OFF`，不能锁 `ON -> OFF -> ON`。

拿掉现实 decompression / injury / crop destruction，只剩“Hab 可能坏”，不得把 hypothetical failure 写成 observed OFF。

### 反向

如果 airlock 爆裂后，Hab 仍持续维持同一 pressurized interior，Mars 环境没有进入，那么 boundary failure 不能成立。

如果 Mark 先失去 Hab 使用/管理接口，随后另一个主体接管并修复，则不得把 OFF→ON restoration 归因给 Mark current x。

### 第三因素冻结

冻结：

- astronaut 身份；
- botanist 身份；
- NASA 英雄叙事；
- “科学解决问题”主题；
- 最终获救结局；
- Hermes crew 后续行动；
- 地球端 resupply 决策。

只保留：

```text
Mark retains Hab use/management
+ same Mars external risk
+ sealed boundary works
+ structural breach causes real ingress
+ Mark repairs/reseals
+ boundary works again
```

动态判定仍成立。

## 8｜strict-v2 判定

```yaml
same_current_window: true_for_x_and_protected_range_dynamic
same_object_layer: true_for_hab_boundary_test
zn_independently_true: not_locked
x_independently_true: true_on_hab_use_management_layer
strict_v2_verified_positive: false
strict_v2_negative_increment: false
strict_precondition_increment: false
```

本轮不进入 strict 双向缺口，因为 `zn` 没有独立过门。

## 9｜成熟度与统计纪律

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

本轮是 **新动态机制**，但 current protected-range registry 目前只正式维护：

```text
verified positive controls / works
verified negative guards / works
```

而 ordinary positive/negative 已 pending-review 且跨 3 works；因此本轮不借动态案例继续膨胀普通 positive/negative 数字。

```yaml
protected_range_positive_increment: 0
protected_range_negative_increment: 0
protected_range_dynamic_transition_provenance: +1 control
x_scope_dynamic_transition_increment: 0
strict_positive_increment: 0
strict_negative_increment: 0
strict_deferred_increment: 0
strict_precondition_increment: 0
```

`protected_range_dynamic_transition_provenance` 只在本 L4 记录中登记机制，不擅自给主 registry 发明新的 aggregate works 字段；后续若 current schema 正式加入 dynamic 子槽，再统一回填。

写前 effective ledger 继续为：

```text
strict-v2 verified positive 0/0
strict-precondition 19/8
x-scope boundary 18/15
x-scope dynamic 17/15
decision calibration 3
protected-range positive 4/4
protected-range negative 3/3
```

本轮上述正式既有 aggregate counts 均不变化。

## 10｜本轮锁出的边界句

> **protected-range 不是 possession/use/management `x` 的永久属性。主体可以继续现实掌握同一空间，而该空间针对同一风险通道的保护效果已经因为 boundary integrity 失效而关闭；修复后又可恢复。**

机器版：

```text
underlying_current_x = retained
risk_channel = same
boundary = same

protected_range:
ON -> OFF -> ON

therefore:
underlying_x_state != protected_range_effectiveness_state
```

## 11｜下一轮最高信息增益

P0 strict-v2 首个 verified positive 仍优先，不降门。

若 P0 仍无 ≥95，优先找本轮的反事实近邻：

1. **nominal repair / switch-back 发生，但 same-risk-channel reality-test 仍失败**，用于区分“宣称 boundary restored”与“protected-range 现实恢复”；
2. underlying x 本身同时发生 contraction，但 protected-range 尚未立即关闭，测试 permission-state 与 effect-state 是否存在时间错位；
3. shared / parallel-independent execution -> unilateral 的真正 credential/access withdrawal，避免重复 Pacific Rim 的 joint co-pilot topology；
4. strict deferred 仅有新证据才复审。

普通 protected-range 正例/负例继续停止堆第 5 个同质案例。