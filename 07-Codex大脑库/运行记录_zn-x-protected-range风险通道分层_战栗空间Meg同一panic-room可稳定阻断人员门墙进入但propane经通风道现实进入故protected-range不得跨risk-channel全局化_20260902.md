---
type: ten-yuan-fire-axis-protected-range-boundary-guard
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
work: Panic Room
work_cn: 战栗空间
character: Meg Altman
stage: first-night-home-invasion / sealed-panic-room / propane-ventilation-attack
sample_type: protected-range-negative-guard-risk-channel-specificity
priority_bucket: P1-P5
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
  protected_range_gate_current: protected-range-risk-test-v1_20260831
fact_confidence: 99
classification_confidence: 98
protected_range_positive_increment: false
protected_range_positive_work_increment: false
protected_range_negative_guard_increment: true
protected_range_negative_guard_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_guard_increment: false
x_scope_dynamic_transition_increment: false
mechanism: protected-range-success-is-risk-channel-specific-and-must-not-globalize-human-entry-exclusion-into-harmful-agent-exclusion
created: 2026-09-02
---

# zn ↔ x 边界压力测试｜《Panic Room》Meg：protected-range 必须按 risk channel 分层

## 0｜本轮结论

本轮不新增普通 protected-range 正例，而是对已 evidence-locked 的《Panic Room》正向 control 做同人物、同空间、同 current window 的最小差异压力测试。

既有正向仍保留：Meg 与 Sarah 进入 panic room 并关闭钢门后，三名入侵者无法通过常规门/墙路径进入，必须改走旁路。因此在 **human bodily entry / normal physical breach channel** 上，local protected-range risk-test 成功。

但同一窗口里，Burnham/Raoul 现实把 propane 经 air duct 输送进 panic room；Meg 与 Sarah 已出现吸入、咳嗽、难以继续承受的可观察风险，且不能直接把该通风入口封死。于是同一个 enclosure 在 **harmful-agent ingress via ventilation channel** 上并没有稳定 deny/block 风险。

因此锁定：

> **protected-range 的正向只能覆盖被 reality-tested 的 risk channel。对“人员经门墙进入”的稳定排除，不得倒灌成“对一切危险介质/路径都形成稳定保护”。同一 actor + 同一 boundary + 同一 object-inside window，可以在不同 risk channel 上同时出现 positive 与 negative。**

最短式：

```text
human-entry exclusion = pass
≠
universal hazard exclusion = pass

protected-range(x)
必须至少附带 tested_risk_channel
```

这不是推翻旧《Panic Room》正向，而是收窄其合法 scope。

## 1｜启动与 current 对齐

本轮启动并写前 latest main 均为：

`8c6a2cc04b3ea6a3d734e5064b1931be13746c3c`

已按 current 重新读取/核对：

- `07-Codex大脑库/十元理论每小时执行门禁协议_v1.0_2026-07-28.md`（正文 v1.2）
- `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`
- `01-十元系统/01-十元信息卡/【zn信息量卡v2】.md`
- `01-十元系统/01-十元信息卡/【x信息量卡v2】.md`
- `01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md`
- `01-十元系统/03-十元准度卡/x_准度卡_v0.1.md`
- `01-十元系统/04-十元生克补卡/补/zn补x_补卡.md`
- `07-Codex大脑库/zn-x火轴待审议清单.md`
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x-xscope权限类型范围期限与最终归属分层边界_20260830.md`
- `07-Codex大脑库/待审议问题_zn-x-protected-range稳定保护范围经真实risk-test成立边界_20260831.md`
- 既有《Panic Room》protected-range 正向记录；
- 最近 commits 至 `8c6a2cc04b3ea6a3d734e5064b1931be13746c3c`。

current canonical 高于本文件。木轴只迁移验证方法，不迁移 `zx/nx` 理论结论。

同时确认两项 L4 状态同步债，不把旧快照当 current evidence-layer：

1. strict 专项/总纲仍显示 `strict_precondition 17/6`，但《The Book of Eli》commit `9dece9ae25a8f6e28eff3f86f86a1d6669ca1dea` 已新增 `+1/+1`，有效层为 `18/7`；
2. protected-range 专项/总纲仍显示 positive `3/3`、negative `1/1`，但 Furiosa mobile positive 与《War of the Worlds》(2005) mobile failure mirror 已分别形成新 evidence。写入本轮前有效层为 positive `4/4`、negative `2/2`。

## 2｜作品事实链

高置信事实：

1. Meg 与 Sarah 在三名入侵者进入住宅后进入 panic room，并关闭强化钢门；
2. 入侵者多次尝试通过常规方式进入 panic room，但无法直接突破；Burnham 明确把 room 的设计目的描述为让人无法进入；
3. 入侵者随后改用 air duct：钻开 duct，将 hose 接入 propane tank，把 gas 输送到 panic room；
4. gas 现实进入 panic room，Meg 吸入后跪倒，Sarah 咳嗽，两人必须贴近 emergency ventilation source 获取新鲜空气；
5. Meg 最终通过点燃 propane 反制该攻击，但这属于她对已经进入 room 的危险介质做后续应对，不等于原 enclosure boundary 在 gas channel 上完成 pre-effect exclusion。

主要公开证据：

- David Koepp screenplay HTML / Daily Script：`https://www.dailyscript.com/scripts/Panic_Room_Koepp.html`，其中直接呈现常规 room-entry 不可行、随后钻 air duct 接 hose、propane 现实进入 panic room、Meg/Sarah 出现吸入反应的连续动作链；
- Wikipedia plot：`https://en.wikipedia.org/wiki/Panic_Room`，概述 panic room reinforced enclosure、入侵者改从 air vents 泵入 propane、母女在 room 内应对。

## 3｜zn 证据

本轮仍不锁 `zn`。

```yaml
zn_current: not_locked
reason:
  - 母亲身份不能直接推出 zn
  - 当前救女/自保可由即时生存压力与亲属责任充分解释
  - 本轮不需要 zn 才能完成 protected-range channel calibration
strict_test_allowed: false
```

因此本轮不从“保护女儿”“勇敢反击”“最终获救”反推 `zn`。

## 4｜x 权限结构

```yaml
actor: Meg Altman
object: panic-room interior / access-and-enclosure boundary

permission_type:
  contact: true
  use: true
  custody: current_local_use_only
  call_or_operate: true
  management: local_room_boundary
  disposition: not_inferred
  veto: local_normal-entry deny via closed door
  exclusion:
    human_normal_entry: true
    propane_via_ventilation: false
  transfer: not_tested

scope:
  spatial: panic-room local enclosure
  protected_object_subset: Meg + Sarah while inside
  risk_channel_scope:
    human_bodily_entry_via_door_wall: tested_positive
    harmful_agent_ingress_via_air_duct: tested_negative
    global_all_hazards: not_locked

term: current first-night home-invasion window
revocability: room boundary can be opened / attacked; channel-specific
return_obligation: N/A
same_layer_pre_effect_veto: none observed on normal lock act
global_override: none for ordinary door entry; ventilation path bypasses tested exclusion layer
ultimate_title: property title not used

decision_structure: unilateral on tested close/lock act
consultation_structure: Meg and Sarah present; no mandatory co-approval for room lock
final_decision_structure: unilateral on local door-boundary act
execution_structure: Meg activates/closes boundary -> physical system executes closure
co_decision_nodes: none mandatory for tested lock

realized_effect_test:
  human_entry: pass
  propane_ingress: fail
```

关键点：`x` 不能写成一个粗糙的 `protected_range=true`。至少要把“排除什么风险，通过什么入口/介质”记入 scope。

## 5｜对象层 / current window

对象层没有偷换：

```text
同一 actor = Meg
同一 protected objects = Meg + Sarah
同一 physical boundary = panic room
同一 current window = first-night invasion while both remain inside
```

最小差异只换一个变量：

```text
risk channel A = adult intruder bodily entry via ordinary structural access
risk channel B = propane ingress via ventilation duct
```

所以这不是跨阶段、跨对象、换角色后硬拼出的伪对子。

## 6｜关键压力

旧正向若写成：

```text
panic-room protected-range = true
```

会留下一个过宽解释口：读者很容易把“人进不来”误扩成“危险进不来”。

本轮压力后只能写：

```text
protected-range
= true on reality-tested human-entry channel
= false/not-protected on observed propane-ingress channel
= not licensed to globalize across untested hazards
```

这与 current x-scope 的局部≠整体纪律完全一致，只是把 scope 从对象/权限/地域再细化到 **risk channel**。

## 7｜最近邻

### 7.1 与旧《Panic Room》正向

旧 control 正确锁定的是：

```text
normal direct entry attempts fail
→ attackers must reroute
```

本轮不推翻它，而是补：

```text
rerouted channel itself must separately risk-test
```

攻击者改道并不保证新通道也被 protected range 排除。

### 7.2 与《War of the Worlds》(2005) Ray

Ray 的 mobile negative 是：vehicle-use/driving `x=true`，但人群直接追上、突破载体并夺车，说明同一移动边界无法稳定 block/redirect 该现实追击。

本轮不同：panic room 对一个风险通道确实成功，但对另一个旁路通道失败。新增信息不是“保护会失败”，而是：

> **保护成功也必须写清成功的是哪个风险通道。**

### 7.3 与 Continental / post-effect sanction

Continental guard 锁 `post-effect punishment != pre-effect protection`；本轮两个通道都发生在 pre-effect/risk-entry 阶段，因此不是旧 sanction 机制换皮。

## 8｜拿掉 / 反向

### 拿掉测试

若拿掉 gas-through-vent 的现实 ingress，只保留“攻击者想到用气体但没有进入 room”，则不足以锁该 channel negative。

实际作品提供了完整 effect-test：gas 进入、母女吸入并出现生理反应、必须寻找 fresh-air path。

### 反向测试

若同一 gas attack 中，panic-room ventilation boundary 能在 propane 到达 Meg/Sarah 前稳定阻断、隔离、排出或迫使风险改道，则该 channel 应改判 positive。

因此：

```text
room still locked
≠
gas channel protected
```

反之：

```text
gas channel failed
≠
human-entry channel positive 被推翻
```

## 9｜第三因素冻结

冻结：

- Meg 的母亲身份、性格与英雄评价；
- 房屋产权与 panic room 前主人；
- Burnham 后续对 Sarah 的帮助；
- 警察最终到场；
- 最终谁活下来；
- safe/bearer bonds 归属；
- Meg 点燃 gas 后造成的反杀/反制结果。

尤其最后一项必须冻结：**主体成功反制已经进入 protected objects 的危险，不等于原 boundary 在该 channel 上事前 exclusion 成功。** 否则会把 downstream countermeasure 倒灌成 boundary protection。

## 10｜protected-range 判定

```yaml
criterion: protected-range-risk-test-v1_20260831
boundary_on: true
object_inside: true
real_external_risk: true
subject_specific_current_x: true

channel_A_human_entry:
  risk_enters_test: true
  stable_deny_block_redirect_before_effect: true
  result: positive

channel_B_propane_ventilation:
  risk_enters_test: true
  stable_deny_block_redirect_before_effect: false
  observed_risk_reaches_inside_objects: true
  result: negative_guard

third_party_major_completion: false
```

锁定研究层边界句：

> **`protected-range` 必须按被测试的 `risk_channel / ingress_path / harmful_medium` 分 scope。一个 boundary 对 A 通道的稳定保护成功，不能自动覆盖 B 通道；主体对已进入风险的 downstream countermeasure 也不能反向冒充 boundary-on 时的 pre-effect exclusion。**

## 11｜strict-v2

本轮 `zn` 未独立过门，因此 strict-v2 不启动：

```yaml
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_guard_increment: false
```

strict verified positive 继续保持 `0 / 0 works`，不为破零降门。

## 12｜成熟度 / 七项置信

```yaml
source_endpoint: 99
# tested current local x / enclosure control is directly observed

target_endpoint: 98
# protected-range channel-specific positive/negative attribution is clean

mechanism: 99
independent_evidence: 98
rival_exclusion: 98
reversibility: 98
replication: 95

fact_confidence: 99
classification_confidence: 98
final_confidence: 95
knowledge_status: evidence-locked
```

`replication=95` 的依据不是再堆普通正例，而是 current protected-range 已有跨机制正负 controls，且《War of the Worlds》已独立证明“underlying use x=true 不保证 protection channel 成功”；本轮进一步以同一作品内最小差异锁 risk-channel scope。

## 13｜统计变化

本轮写入前 effective evidence-layer：

```yaml
protected_range_positive_controls: 4
protected_range_positive_works: 4
protected_range_negative_guards: 2
protected_range_negative_guard_works: 2
```

其中正式专项/总纲仍有尚未 digest 的旧快照，不以旧快照覆盖新 evidence。

本轮：

```yaml
protected_range_positive_controls: +0
protected_range_positive_works: +0
protected_range_negative_guards: +1
protected_range_negative_guard_works: +1

strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_dynamic_control: +0
x_scope_dynamic_work: +0
```

因此 effective protected-range layer：

```text
positive 4 controls / 4 works
negative 2 guards / 2 works
→ negative 3 guards / 3 works
```

注意：同一《Panic Room》可以同时进入 positive-work 与 negative-guard-work 集合，因为被测 risk channel 不同；但在任何“全 protected-range 独立作品去重总数”中只能计一次作品，禁止跨子槽重复膨胀总作品数。

## 14｜下一轮最高信息增益

P0 继续寻找真正 strict-v2 verified positive，不降低门槛。

若仍无 ≥95 P0 候选，下一轮最值钱的是 protected-range 的 **同风险通道动态开关**，避免只做跨通道切分：

```text
same actor
+ same protected objects
+ same risk channel
+ underlying possession/use x remains

Stage A: boundary parameter / permission 可稳定 deny/block/redirect
→ protected-range ON

真实节点发生

Stage B: underlying x 仍在，但同一 risk channel 的 deny/block/redirect 被撤回、耗尽、破坏或转移
→ protected-range OFF
```

这样才能证明 protected-range 自身也有 scope/term 生命周期，而不是把所有变化都偷懒归成 underlying x on/off。
