---
type: ten-yuan-fire-axis-x-scope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
sample_type: protected-range-risk-test-minimum-difference
work: Home Alone (1990)
character: Kevin McCallister
stage: Christmas Eve burglary / front-entry defense vs whole-house defense
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
new_independent_work_for_x_scope_boundary_guards: true
protected_range_local_positive_control: true
protected_range_global_positive_control: false
zn_increment: false
strict_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜《小鬼当家》Kevin：前门局部保护边界通过真实 risk-test，但不得倒灌全屋 protected-range x

## 0｜本轮问题

P1 protected-range 固定门要求：

```text
boundary-on
+ object-inside
+ real risk enters
+ subject-specific x 现实阻断 / 改变 / 迫使风险改道
+ 结果不能主要由第三方保护节点完成
```

本轮不测试“Kevin 是否拥有整栋房子的永久产权”，只做一个最小差异：

```text
A｜McCallister house front-entry local boundary
B｜whole-house protected range
```

目标是判断：A 是否真实通过 risk-test，以及 A 能否倒灌为 B。

## 1｜事实链

1. Kevin 得知 Harry / Marv 将进入住宅后，主动为房屋入口和内部路线布置防御。
2. Harry 选择从前门进入；前台阶已被 Kevin 结冰处理，Harry 多次滑倒。
3. Harry 终于接触前门门把时，Kevin 预先加热的门把直接烧伤其手；Harry 放弃该前门路径，转向其他入口。
4. 与此同时，Marv 能够从地下室门实际进入房屋内部；后续 Harry 也从其他方向继续进入/追逐。
5. 因此：前门这一局部入口的防御边界发生了真实风险测试并可观察地阻断/迫使风险改道；但整栋房屋并没有因此形成稳定排除 Harry / Marv 的全局 protected-range。

来源：
- 20th Century Studios, *Home Alone* official synopsis: Kevin protects his house against Harry and Marv. https://family.20thcenturystudios.com/movies/home-alone
- *Home Alone* transcript / screenplay sequence: Harry 前门结冰、热门把受阻；Marv 地下室进入。https://homealone.fandom.com/wiki/Home_Alone/Transcript
- IMDb plot summary：Harry attacks front door, Marv the basement; front approach is trapped while burglars later continue inside. https://www.imdb.com/title/tt0099785/plotsummary/

## 2｜x 权限结构

```yaml
actor: Kevin McCallister
object:
  tested_local: McCallister-house front-entry route
  tested_global: whole-house protected range
permission_type:
  - use
  - manage
  - access-route control
  - local exclusion / rerouting
scope:
  local: front-entry boundary
  global: whole house
term: current Christmas-Eve defense window
revocability: physical configuration can be altered / bypassed; not a permanent title
return_obligation: not-applicable
same_layer_pre_effect_veto: none observed for Kevin's local defensive setup
global_override: parents/property-title not tested in this current defense window
ultimate_title: not tested / not inferred
source_decision_structure: unilateral setup by Kevin
consultation_structure: single-node
final_decision_structure: unilateral on local defensive configuration
execution_structure: automatic physical defense after setup
co_decision_nodes: none for tested local entry setup
unilateral_effect: true on front-entry route
joint_veto: false
```

### current x 判定

```text
front-entry local access/exclusion x = true
whole-house stable protected-range x = false / not locked
```

这里的 `x=true` 不来自“Kevin 是房子里的孩子”或“他很聪明”，而来自：

```text
Kevin 预先控制前门入口配置
→ Harry 真实选择该入口
→ 风险真实撞上边界
→ 多次滑倒 + 热门把烧伤
→ Harry 放弃/改换路径
```

这是 observable risk-test，不是保护声明。

## 3｜为什么不是 posthoc composite-x bundling

本轮不把 BB 枪、前门、地下室、后门、楼梯、油漆罐、电话、邻居等全部打包成“Kevin 防御系统大 x”。

只测一个自然可识别对象：

> **front-entry route / 前门进入边界。**

结冰台阶与加热门把是同一前门入口的防御配置，不被用来外推 Kevin 对整栋房屋的永久、全局排除权。

## 4｜P1 protected-range risk-test

### local boundary

```yaml
boundary_on: true
protected_object_inside: true
real_risk_enters_test: true
subject_specific_x_changes_risk: true
observed_effect:
  - repeated entry difficulty
  - physical exclusion at front-door contact
  - route abandonment / rerouting
third_party_main_protection_node: false
result: local-positive
```

### global whole-house boundary

```yaml
whole_house_boundary_on: not-sufficiently-proven-as-exclusionary
real_risk_enters_test: true
observed_global_exclusion: false
counterevidence:
  - Marv enters basement
  - burglars continue through other routes/interior pursuit
result: global-positive-not-locked
```

所以锁：

> **local risk-tested protected boundary x can be true while global protected-range x remains false / unproven.**

中文：

> **局部入口真的挡住过风险 ≠ 整体空间都形成稳定保护范围。**

## 5｜拿掉测试

拿掉 Kevin 对前门入口的实际防御配置：

- 当前没有同等证据解释 Harry 为什么在前门接触点被阻断并改换路线；
- 因此前门 local exclusion `x` 有真实因果作用。

拿掉“整栋房子都被 Kevin 稳定保护”这个宽假设：

- Harry 前门受阻、Marv 地下室进入、后续内部追逐全部仍然成立；
- 因此 whole-house protected-range 不是解释局部成功所必需。

## 6｜反向测试

如果剧情是：

```text
Harry / Marv 在任何入口都无法进入
+ 风险多次真实测试
+ 被阻断主要归因 Kevin 的同一 subject-specific 空间控制
```

才可以继续上调 whole-house protected-range `x`。

本片实际出现地下室等路径进入，所以不能上调。

## 7｜第三因素冻结

冻结：

- Kevin 的聪明 / 勇敢标签；
- “主角一定会守住房子”的剧情主题；
- 房屋产权归父母；
- Marley 最后救 Kevin；
- 警察最终逮捕窃贼；
- 窃贼最终失败这一结局。

这些都不参与“前门 local boundary 是否真实改变风险”的判定。

特别是 Marley / police 只影响后续人物脱险和逮捕，不是前门风险测试成功的主要节点。

## 8｜最近邻排除

- `x vs ability`：会布陷阱 ≠ x；只有入口被 Kevin 现实配置并在风险测试中改变进入结果，才锁 local `x`。
- `x local vs x global`：前门入口 x 不倒灌全屋 protected-range。
- `x vs ownership`：current defensive-use/control 不等于永久产权。
- `x vs one-off opportunity`：本例不是一次瞬时击中；前门配置在 current window 内跨多次接近持续起效。但仍只锁当前 local scope。
- `zn`：保护住宅/自己可以由即时生存、财产与家庭处境解释；本轮不足独立通过 zn canonical，故不锁。

## 9｜strict-v2

```yaml
zn_independently_true: false / not-locked
x_local_independently_true: true
same_current_window: true
same_object_layer_for_strict: not-entered
strict_test_allowed: false
strict_zn_x: false / not-started
```

本轮是 P1 + x-scope boundary 压力测试，不是 strict 正例。

## 10｜本轮新边界

### Rule A｜局部 risk-test 成功不得倒灌全局

```text
local boundary-on
+ real risk test
+ observed exclusion / reroute
→ local protected-boundary x can be true

but

local protected-boundary x
≠
whole-space stable protected-range x
```

### Rule B｜保护范围必须按 entry / zone / whole-space 分 scope

protected-range 以后至少要区分：

```yaml
boundary_scope:
  entry-point
  sub-zone
  whole-space
risk_test_scope: 实际风险测试落在哪一层
observed_exclusion_scope: 实际阻断发生在哪一层
bypass_routes: 是否存在现实绕行入口
```

### Rule C｜risk rerouting 是现实 x 证据，但只能按其实际 scope 计

风险被迫改道可以支持现实排除/控制，但不能把“迫使改走另一路”误写成“整体风险被消灭”。

## 11｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_boundary_guard_increment: true
new_independent_work_for_x_scope_boundary_guards: true
protected_range_local_positive_control: true
protected_range_global_positive_control: false
strict_increment: false
zn_increment: false
```

写入前实时火轴 registry：

```yaml
x_scope_boundary_guards: 8
x_scope_boundary_guard_works: 5
```

本条加入后 evidence-layer 应记：

```yaml
x_scope_boundary_guards: 9
x_scope_boundary_guard_works: 6
```

普通 x-scope positive 与 dynamic-transition 不增加。

## 12｜治理边界

- 本文件是 L4 evidence-locked control，不覆盖 L1/L2 canonical。
- x-scope 已是 pending-review，本条仅因出现新 protected-range 最小差异机制而继续采样。
- 不自动修改 `zn/x` 信息卡、准度卡或 `zn补x_补卡`。
- 后续中枢只在安全重读最新 blob 后同步统计。
