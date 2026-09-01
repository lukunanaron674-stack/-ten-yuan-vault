---
type: ten-yuan-fire-axis-xscope-adversarial-audit
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Star Wars Episode IV - A New Hope
character: Obi-Wan Kenobi
stage: Mos Eisley checkpoint Jedi mind trick
sample_type: duplicate-mechanism-negative-control-not-counted
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 99
x_scope_boundary_guard_increment: false
x_scope_boundary_guard_work_increment: false
x_scope_dynamic_transition_increment: false
x_scope_dynamic_transition_work_increment: false
strict_v2_verified_positive_increment: false
state_sync_note: x-scope pending-review list is current at 11 dynamic controls / 10 works while research overview still contains stale 12 / 10 snapshot
may_override_canonical: false
created: 2026-09-01
---

# 审计记录｜Obi-Wan Mos Eisley 心灵暗示：强现实 effect 仍不构成新的 stable-x 控制

## 0｜本轮目的

按 current canonical 对上一轮唐僧紧箍咒 retained control 做失败镜像压力测试：寻找“同样能直接改变特定人物行为，但缺 object-binding / persistence / repeatable stable interface”的案例，检查仓库是否会把泛能力 effect 错吞进 `x`。

本轮不从 Jedi 身份、能力强弱、阵营、英雄角色、胜负或剧情结果倒推 `x/zn`。

## 1｜事实链

《Star Wars: Episode IV - A New Hope》Mos Eisley checkpoint：

1. Obi-Wan、Luke 与两台 droid 被 Imperial stormtroopers 拦查。
2. Obi-Wan 使用 Jedi mind trick，使当值 trooper 放弃核验、接受错误判断并让一行人继续通行。
3. 该场景证明一次现实 influence effect 成功；Luke 随后对通过关卡感到惊讶，Obi-Wan解释 Force 能影响 weak-minded。
4. 该片段本身没有建立“这些 troopers 此后持续归 Obi-Wan 掌握”的稳定关系，也没有显示一个跨窗口持续存在、专门绑定该对象、可随时重复调用的 current permission boundary。

事实来源以 Lucasfilm/StarWars.com 对该片段的官方描述及影片台词交叉核验。

## 2｜x 权限结构

```yaml
actor: Obi-Wan Kenobi
object: Mos Eisley checkpoint stormtroopers in the tested encounter
permission_type:
  observed:
    one_shot_influence_effect: true
    local_behavior_redirection: true
  not_proven:
    stable_management: false_or_not_proven
    persistent_call: false_or_not_proven
    disposition: false_or_not_proven
    exclusion: false_or_not_proven
    transfer: false_or_not_proven
scope: single checkpoint encounter / local response sequence
term: momentary tested encounter
revocability: not established as a standing permission
return_obligation: none
same-layer_pre-effect_veto: target resistance threshold is capability susceptibility, not a demonstrated governance veto node
global_override: Imperial command structure remains external and intact
ultimate_title: none
decision_structure: not a governance/final-decision transfer
consultation_structure: none relevant
final_decision_structure: trooper's local checkpoint response is influenced; no standing final authority transfers to Obi-Wan
execution_structure: Obi-Wan invokes Force influence; trooper executes the immediate behavioral response
co-decision_nodes: none relevant to a standing x because standing x itself is not established
scope_transition: not proven
```

## 3｜关键压力

最危险的误判是：

```text
能让某个具体对象立刻照做
→ 对象归我掌握
```

current `x` 不允许这样跳。

本案可以锁事实：`strong local effect = true`；但不能锁：`stable current x = true`。

原因不是 effect 不够强，而是缺少：

- 跨当前窗口持续的 object-binding；
- 稳定的 callable permission；
- 可重复现实接口作为 standing relation；
- 对对象使用/管理/处分/否决边界的持续归属。

因此该案例正好是唐僧紧箍咒 retained control 的失败镜像：

```text
唐僧：对象绑定 + 持续机制 + 可重复调用 + reality effect → 窄 current x 可成立
Obi-Wan：一次强现实 influence effect，但 standing object-bound interface 未建立 → 不锁 stable x
```

## 4｜最近邻与重复性检查

本案理论机制并非新的 ordinary boundary guard。

仓库 current 已明确锁定：

- `one-off effective override ≠ stable x`；
- `one-shot successful invocation/effect ≠ stable command/disposition x`；
- Antigone：强 `zn` + 一次 burial effect 仍不能救活 stable x；
- 孙悟空勾生死簿：一次强制改写真实但不构成稳定处分边界；
- Earth King 等旧 x-scope controls 已覆盖 local effect / compliance 不等于 stable control。

因此本案如果再计 `boundary_guard +1 / work +1`，只是把同一判据换一部作品继续堆量，违反当前“达到跨3作品门槛后停止普通采样”的研究阶段。

本轮结论是 **duplicate-mechanism rejection**，不是新增 ordinary control。

## 5｜拿掉 / 反向

### 拿掉一次 effect
若 trooper 根本未改变行为，则连 local influence effect 都不成立。

### 拿掉 stable-x 假设
只保留一次成功心灵暗示，剧情仍可完整解释，因此 stable `x` 不是必要解释。

### 反向重新开放条件
只有作品明确出现同一 subject + same object layer 的持续绑定，例如：

- 该对象跨阶段持续处于 Obi-Wan 可调用/管理边界；
- 存在 standing credential/binding，使其能够反复发出同类有效指令；
- 对象不能在每次调用前自由退出，且没有独立 mandatory pre-effect veto；
- 现实接口不是一次 encounter 机会，而是稳定 current relation；

才允许重新测试窄 `x`。

## 6｜第三因素冻结

冻结以下因素后，本轮判断不变：

- Jedi 身份与声望；
- Force 能力强弱；
- trooper 是否 weak-minded；
- Rebel / Empire 阵营；
- 逃脱成功与后续剧情。

这些因素解释“为什么一次 influence 能成功”，但不能自动补出“对象持续归其掌握”的 standing permission boundary。

## 7｜zn / strict-v2

本轮不独立建立 `zn`。即使 Obi-Wan 有明确使命/价值观，也不能从该 checkpoint 技能使用反推不可让渡原则。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_deferred_increment: false
strict_precondition_increment: false
```

strict-v2 verified positive 继续为 `0 / 0 works`。

## 8｜统计与状态同步

本轮没有新增 ordinary control/work：

```yaml
x_scope_positive: +0
x_scope_boundary_guard: +0
x_scope_boundary_guard_work: +0
x_scope_dynamic_transition: +0
x_scope_dynamic_transition_work: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

同时发现一个 L4 状态地图同步债：

- `07-Codex大脑库/zn-x火轴待审议清单.md` 已在 commit `6018da86f98a28194823bc8cc4aa2aa8890e1f40` 将宋江旧 contraction 撤回，并把 dynamic evidence-layer 同步为 `11 controls / 10 works`；
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md` 当前正文仍保留撤回前 `12 controls / 10 works` 与宋江 contraction 条目。

因此在该总纲下一次正式吸收前，current L4 evidence-layer 应以最新已同步待审议清单和 supersede provenance 为准：

```text
x-scope dynamic = 11 controls / 10 independent works
```

本文件只记录同步债，不直接覆盖 L2 canonical，也不制造第12条 dynamic control。

## 9｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 99
knowledge_status: evidence-locked
sample_classification: duplicate-mechanism-negative-control-not-counted
```

“Obi-Wan 一次 influence 不足以形成 stable x”本身高置信，但其机制已被 current 多条控制覆盖，所以成熟度是 evidence-locked 的重复性审计结论，不计 cross-work control。

## 10｜下一轮最高信息增益

P0 strict-v2 继续最高优先，仍只收：天然单一对象层、subject-specific stable x、独立 zn、same current window、双侧 competing anchors 均能冻结的候选。

若 P0 仍无 >=95 材料，不再继续采“另一个一次控制/催眠/法术 effect”。更值得跑：

1. `one-shot → stable repeated x` 的真实动态迁移，即同一 actor / object 从一次机会经持久 credential/binding 转为 standing callable permission；或
2. `stable repeated x → one-shot-only` 的真实收缩；或
3. P3/P4 中 same actor + same object 的 joint/shared ↔ unilateral execution/final-decision 迁移。

这样才会产生新机制，而不是让 Jedi、催眠师和魔法师轮流替同一护栏拍证件照。
