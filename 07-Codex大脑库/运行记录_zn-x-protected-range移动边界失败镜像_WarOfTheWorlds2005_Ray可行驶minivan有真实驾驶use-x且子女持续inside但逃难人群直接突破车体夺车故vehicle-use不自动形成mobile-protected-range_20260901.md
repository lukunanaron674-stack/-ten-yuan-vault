---
type: ten-yuan-fire-axis-protected-range-evidence
axis: fire
pair: zn-x
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
criterion_version: protected-range-risk-test-v1_20260831
sample_type: protected-range-negative-guard-mobile-boundary-penetration
work: War of the Worlds (2005)
character: Ray Ferrier
stage: repaired-minivan escape -> refugee mob penetration -> forced vehicle loss
fact_confidence: 99
classification_confidence: 98
protected_range_positive_increment: false
protected_range_positive_work_increment: false
protected_range_negative_guard_increment: true
protected_range_negative_guard_work_increment: true
protected_range_negative_guards_before: 1
protected_range_negative_guard_works_before: 1
protected_range_negative_guards_after_effective_layer: 2
protected_range_negative_guard_works_after_effective_layer: 2
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
x_scope_dynamic_transition_increment: false
may_override_canonical: false
may_update_L2: false
created: 2026-09-01
---

# 运行记录｜《War of the Worlds》(2005) Ray：真实车辆 use / driving x 不自动形成 mobile protected-range

## 0｜启动对齐

本轮以 `main@9dece9ae25a8f6e28eff3f86f86a1d6669ca1dea` 为写前 HEAD。启动时重读 L0/L1 权力门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡、准度卡路由、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current、protected-range current v1 与最近 commits。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

protected-range current 已 `pending-review`，当前正式专项统计为正向 `4 controls / 4 works`，负向 `1 guard / 1 work`。普通正例已停止堆量；本轮只因提供 Furiosa mobile-positive 的新失败镜像而进入。

## 1｜人物 / 阶段 / 可观察事实

人物：Ray Ferrier。

窗口：Ray 使用 EMP 后被修复、仍可行驶的 minivan 带 Robbie 与 Rachel 逃离；进入大批逃难人群后，人群发现该车可用，开始追车、攀附、砸击并强行进入；Ray 无法靠自己的 driving/use 接口维持车辆边界。Rachel 一度仍留在车内，Ray 在枪口威胁下只要求把女儿带下车，最终车辆被他人夺走，三人改为徒步。

可观察链：

```text
working minivan
+ Ray current driving/use control
+ Robbie/Rachel inside
+ real human risk targets vehicle
→ crowd reaches and physically penetrates vehicle boundary
→ Ray's route/use control does not stably deny/block/redirect that risk
→ Ray cannot retain vehicle while keeping children safely inside
→ vehicle is taken; family exits tested mobile boundary
```

事实来源：

- IMDb plot summary：Ray 与孩子乘修复车辆逃亡，随后被 mob 攻击并被迫放弃车辆。
  https://www.imdb.com/title/tt0407304/plotsummary/
- 影片 transcript：人群要求停车、攀车、砸入；Rachel 在车内时持枪者宣布要车，Ray 明确只要求带走女儿，之后车辆被夺。
  https://transcripts.simpleremix.com/script.php/war-of-the-worlds-2005-1hxQ

## 2｜zn 端：不锁

不能从“父亲”“保护孩子”“最终把孩子送回母亲身边”直接倒推 `zn`。

本窗口可以观察到 Ray 强烈把孩子安全置于车辆之上，但这仍可能由亲子责任、即时危险排序、情境性生存策略共同解释；本轮没有独立完成 `zn` 的跨阶段不可让渡、未来调用与冲突最终指导资格 ≥95 证明。

因此：

```yaml
zn_current: not_locked
strict_test_allowed: false
```

## 3｜x 权限结构

```yaml
actor: Ray Ferrier
object: repaired minivan current use / driving / custody layer

permission_type:
  contact: true
  use: true
  custody: true_current_window
  call_or_operate: true
  management: true_on_immediate_route
  disposition: not_proven_full
  veto: immediate_route_choice_before_mob_overrun
  exclusion: weak_and_failed_under_risk_test
  transfer: not_tested_as_voluntary_right

scope:
  vehicle: same repaired minivan
  protected_subset_candidate: Robbie + Rachel while inside
  global: false

term:
  from Ray taking operational control of repaired minivan
  until mob forcibly removes practical control

revocability:
  no standing institutional per-action veto shown
  but current control is physically defeasible by external force

return_obligation: not material to tested layer

same-layer_pre-effect_veto:
  before mob overrun: none observed as formal node
  during overrun: external physical actors directly defeat practical exclusion

global_override:
  no institutional superior node tested
  mob force is an external reality condition, not a legitimate title override

ultimate_title:
  not needed and not inferred

decision_structure:
  immediate driving/route choice: unilateral while control lasts

consultation_structure:
  children can speak/request; not mandatory co-decision on driving layer

final_decision_structure:
  pre-overrun route control: Ray-final
  after physical penetration: Ray no longer controls whether vehicle remains his mobile range

execution_structure:
  Ray directly drives
  → crowd physically reaches and penetrates vehicle
  → another armed actor takes vehicle

co-decision_nodes:
  none mandatory on tested driving layer
```

### current x 判定

Ray 对这辆 minivan 的 tested driving/use/custody `x=true`，但只锁该 current 层；不推 ultimate title，也不把孩子的人身关系当作其 disposition x。

## 4｜protected-range risk-test

固定门逐项：

```yaml
boundary_on: true_at_start
object_inside: true
real_risk_enters: true
subject_specific_current_x: true_vehicle_driving_use
x_stably_denies_blocks_or_redirects_risk: false
third_party_primary_protection: false_but_irrelevant_because_subject_boundary_fails
result: risk-test-failed
```

关键不是“最后车丢了”这个结局，而是风险撞击边界时的 pre-effect 过程：

- 人群能持续追上并接触同一车辆；
- 车窗/车门边界被现实突破；
- Ray 的驾驶与路线选择没有稳定让风险改道或失去命中条件；
- Rachel 仍在车内时，车辆已经进入他人现实夺占链；
- Ray 为带走 Rachel 接受失去车辆，随后 mobile range 终止。

因此：

> **vehicle-use / driving x 真实成立，只证明主体能移动并使用载体；只有当该 x 在真实风险进入时稳定改变风险命中条件，才可进一步锁 mobile protected-range。载体能动 ≠ 载体边界能保护。**

## 5｜与 Furiosa 的最小差异

Furiosa / War Rig：

```text
mobile boundary
+ objects continuously inside
+ real pursuit
+ subject-specific driving/route x
+ route choice repeatedly changes pursuit geometry before capture
→ protected-range positive
```

Ray / minivan：

```text
mobile boundary
+ children inside
+ real pursuing/boarding risk
+ subject-specific driving/route x
but
risk reaches, boards and defeats vehicle boundary
+ route/use x fails to stably deny/block/redirect
→ protected-range negative
```

所以新最小差异不是“有车 / 没车”，也不是“会开 / 不会开”，而是：

```text
同为 true vehicle-use x
↓
risk-test 时是否持续产生 pre-effect exclusion / rerouting
```

## 6｜最近邻排除

### Continental negative guard

Continental 已锁的是：

`post-effect sanction x ≠ pre-effect protected-range x`。

本轮不是规则处罚时间点问题。Ray 的 x 是直接、现实的车辆 use/driving/custody；失败发生在**移动边界遭真实风险正面穿透**。

因此不是旧 guard 换皮。

### John Wick Mustang external dispossession

John Wick 主要锁：外部强制夺占可以让 current possession/use x 退出而不自动消灭 title/claim。

本轮虽然最后也发生 vehicle loss，但 protected-range 新信息在更早：**孩子仍 inside、Ray 仍在操作车辆时，risk 已经击穿候选保护边界**。所以不把结论缩成“车被抢=x loss”。

## 7｜拿掉 / 反向 / 第三因素冻结

### 拿掉真实风险

如果没有人群追击、攀附、砸窗/进入，只看到 Ray 成功开车载孩子移动，则只能证明 vehicle-use x，不能判 protected-range 正或负。

### 拿掉 subject-specific x

如果 Ray 只是乘客、真正路线与驾驶由第三方控制，则不能把移动边界成败归给 Ray。

### 反向

若同样的人群风险出现，但 Ray 的路线/车辆控制持续令追击者无法接触、进入或迫使其改道，且孩子持续 inside，则可转为 mobile protected-range positive。

### 第三因素冻结

冻结：

- Ray 的父亲身份；
- 外星人主威胁；
- 家庭和解主题；
- 车辆稀缺性；
- Robbie/Rachel 的情绪；
- 最终是否到达 Boston；
- 谁在道德上更正当。

只保留 same vehicle / inside objects / real mob risk / Ray driving-use x / boundary penetration，结论仍成立。

## 8｜strict-v2

本轮 zn 未独立过门，因此 strict-v2 不启动，不能因为 x 与保护动机看起来“很搭”就补成双向 strict。

```yaml
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
```

strict-v2 verified positive 继续为 `0 / 0 works`。

## 9｜成熟度与统计

事实置信：99。

分类置信：98。

成熟度：`evidence-locked`。

按同一 `protected-range-risk-test-v1_20260831`：

```text
positive: 4 controls / 4 works → unchanged
negative: 1 guard / 1 work → 2 guards / 2 works (effective evidence layer)
```

本轮：

```yaml
positive_control: +0
positive_work: +0
negative_guard: +1
negative_guard_work: +1
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_dynamic_control: +0
x_scope_dynamic_work: +0
```

专项已 pending-review，因此本记录不直接修改 L1/L2 canonical。若待审议清单/专项统计尚显示 `1 / 1`，属于后续 digest 的状态吸收债；本记录本身即为新增证据 provenance。

## 10｜本轮锁定边界句

> **移动载体的 current use / driving `x` 不自动构成 mobile protected-range。即使被保护对象持续 inside，只要真实风险能够在主体 x 仍运行时直接接触并突破载体边界，而主体的路线/驾驶接口不能稳定 deny、block 或 redirect 风险，则 protected-range risk-test 失败。**

## 11｜下一轮最高信息增益

P0 继续寻找第一份 strict-v2 verified positive，门槛不降。

若 P0 仍无 ≥95 候选，优先做 mobile protected-range 的动态最小差异：

```text
same actor + same vehicle + same protected object
stage A: route/use x can pre-effect reroute real risk → protected-range ON
stage B: same use x still exists, but exclusion/route effect is degraded or externally constrained → protected-range OFF
```

这样能把“vehicle-use x 是否存在”与“protected-range 是否随同一 x 的风险处理能力动态开关”继续分账。