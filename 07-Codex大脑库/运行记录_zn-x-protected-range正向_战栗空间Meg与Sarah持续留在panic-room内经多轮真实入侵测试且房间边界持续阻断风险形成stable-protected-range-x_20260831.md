---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
  protected_range_gate: protected-range-risk-test-v1_20260831
work: Panic Room
work_cn: 战栗空间
character: Meg Altman
stage: first-night-home-invasion-panic-room-window
sample_type: protected-range-positive-risk-test
fact_confidence: 99
classification_confidence: 98
protected_range_positive_control: true
protected_range_global_house_positive: false
strict_verified_positive_increment: false
zn_increment: false
x_scope_boundary_increment: false
new_independent_work_for_protected_range: true
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜Panic Room：panic room 经真实多轮入侵测试形成 stable protected-range x

## 0｜本轮目的

按 current canonical 与火轴研究总纲执行 P1 protected-range 正向 risk-test。只测试 Meg 当前对 panic room 的现实使用/封闭/排除边界；不从母亲身份、英雄叙事、最终获救或房屋产权倒推 `zn/x`。

本轮命中一条此前缺失的高纯正向结构：

> **对象持续留在自然边界内 + 外部风险真实多轮撞击 + subject-specific current x 持续改变/阻断入侵结果 + 主要保护效果不是由第三方实时完成。**

## 1｜可观察事实

- Meg 与 Sarah 搬入纽约 brownstone；房屋内已有前主人安装的 panic room。
- panic room 由混凝土/钢结构、厚钢门与监控系统构成。
- 三名入侵者真实进入住宅后，Meg 发现入侵并带 Sarah 进入 panic room，关闭钢门。
- 入侵者的目标本来就在 panic room 内，因此他们不是“顺路没试”，而是主动、多轮尝试把房内两人逼出或进入该房间。
- 直接破门/突破没有成功；入侵者改用通风系统向室内泵入 propane，说明原进入路径受阻后必须改走旁路攻击。
- 在 Meg 主动离开房间取 Sarah 药物以前，入侵者一直不能通过常规入口进入 panic room。
- Meg 离开后，入侵者才利用边界打开窗口进入，并与 Sarah 同处房内。

公开资料校准：
- Wikipedia《Panic Room》plot：panic room reinforced with concrete and steel, thick steel door, security system；Meg/Sarah 入室后多次 breach attempts fail，入侵者改泵 propane；Meg 离室后男人才进入。
- Rotten Tomatoes synopsis：母女被困在 panic room，与三名侵入者对峙，且 room itself 是入侵者目标中心。

## 2｜x 权限结构

```yaml
actor: Meg Altman
object: panic-room interior / access boundary
permission_type:
  - use
  - occupy
  - close/lock access boundary
  - monitor exterior via room system
  - local exclusion
scope:
  local: panic-room enclosure
  global_house: not inferred
term: current home-invasion window
revocability: boundary can be opened by current occupant / physical conditions can be attacked
return_obligation: N/A
same_layer_pre_effect_veto: none observed
global_override: none observed for normal door entry while boundary-on
ultimate_title: property ownership not required / not used as x evidence
decision_structure: unilateral on tested room-access act
consultation_structure: Meg + Sarah present, but no mandatory co-approval shown for locking the room
final_decision_structure: unilateral on tested local boundary
execution_structure: physical/automatic boundary after Meg activates/closes it
co_decision_nodes: none required for tested lock/exclusion act
```

### x 判定

`stable local protected-range x = true`，但只锁 panic-room enclosure，不倒灌整栋住宅。

这里 `x` 不是因为 Meg 是房主/母亲，而是：她在 current window 内真实占用并启用房间边界，门关闭后对正常进入形成现实排除效果；该效果在多轮主动入侵测试中被观测。

## 3｜保护型 x 固定门

### boundary-on
通过：Meg 与 Sarah 已进入 panic room，钢门关闭。

### object-inside
通过：被保护对象 Meg/Sarah 持续留在该 room 内，直到 Meg 为取药主动离开。

### real risk enters
通过：三名入侵者真实在屋内，并且明确以 panic room 内 safe 为目标，持续尝试突破/逼出。

### subject-specific x changes/blocks risk
通过：当前边界由 Meg 启用/维持；常规进入失败，攻击者不得不改用 ventilation/propane 等旁路；Meg 主动离室、边界窗口改变后，入侵者才进入。

### non-third-party-major-completion
通过：没有警察、外部守卫、产权节点或第三方实时替 Meg 挡住 panic-room door 的主要突破；房间硬件是既有资产，但 current 排除范围依赖 Meg/Sarah 进入并关闭该边界。第三方制造者不等于 current 保护主体。

## 4｜关键压力

这不是“房间被称作 panic room，所以它能保护”的名义证据，也不是“电影最后母女活下来，所以范围有效”的结局倒推。

关键是：

```text
boundary-on
+ object-inside
+ attackers actively target same enclosure
+ multiple breach attempts fail / attack reroutes to ventilation
→ observed exclusion / forced rerouting
```

因此与既有负控制形成最小差异：

- 孙悟空金兜山画圈：保护声明存在，但缺 circle-inside 的真实风险阻断观测。
- 柴进丹书铁券：保护资格存在、risk-test 真实发生，但现实保护失败。
- 花果山：内部治理 x 真实，但外部风险实际突破并造成焚毁/死散。
- 甘道夫凯萨督姆桥：subject-specific 一次性咽喉阻断成功，但对象靠越界撤离获救，不构成 stable protected-range。
- Panic Room：对象持续留界内，风险多轮撞击，同一 enclosure 边界持续阻断/迫使风险改道，直到主体主动打开/离开窗口。

## 5｜最近邻排除

- `x vs 身份/产权`：不靠房主身份；只看 current room access/exclusion reality。
- `x vs 能力`：不是 Meg “很聪明/勇敢”；边界必须有实际阻断观测。
- `x vs 一次性机会`：不是单次打退一人；有持续、多轮同一 enclosure 风险测试。
- `x vs territorial governance`：不因为她能管理整栋住宅就锁 protected range；只锁 panic-room local enclosure。
- `x vs third-party anchor`：前主人/安全公司建造房间是来源，不等于当前实时保护节点；没有第三方逐次替 Meg 决定房门是否对入侵者开放。

## 6｜拿掉测试

### 拿掉被测 x

若去掉 Meg/Sarah 当前进入并关闭 panic-room 边界，只保留“屋内有一个叫 panic room 的房间”，则无法解释为何正常进入路径持续被阻断、攻击者必须改走 ventilation/propane，以及为什么 Meg 离室后进入窗口才出现。

所以 local protected-range `x` 对当前 risk outcome 有真实、可观察贡献。

### 拿掉 global-house protected-range

整栋住宅已经被三名入侵者成功进入；因此本轮不需要也不能假设 whole-house stable protected range。局部 room `x=true` 与 global house `x=false/not locked` 可以同时成立。

## 7｜反向测试

若剧情只是：

```text
母女进入房间
+ 入侵者从未真实尝试突破
+ 最后安全
```

则只能记 declared/untested range，不足 evidence-lock。

若风险真实进入且正常入口轻易被突破，则应转 protected-range failure。

当前样本提供了介于二者之间最需要的正向：**risk-test 真发生，边界在 object-inside 状态下实际阻断并迫使风险改道。**

## 8｜第三因素冻结

冻结：
- Meg 的母亲身份、性格、勇敢/机智评价；
- 最终警察到场；
- Burnham 后续救 Sarah；
- 房屋买卖 title；
- 入侵者最终失败/被捕；
- safe/bearer bonds 最终归属。

这些都不是锁 local protected-range `x` 的必要证据。

## 9｜zn 与 strict-v2

本轮不锁 `zn`。

“保护女儿/自己”在当前窗口可由亲属关系、即时生存压力与现实危险充分解释；没有必要从母亲身份或高代价行为直接倒推不可轻易让渡的内部原则。

因此：

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_v2_verified_positive_increment: false
```

本轮只证明 protected-range 型 `x` 的正向 risk-test，不把 P1 成果硬灌进 P0 strict。

## 10｜成熟度与研究用途

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked

protected_range_positive_control: true
protected_range_scope: local-enclosure
protected_range_risk_test: success
object_inside_during_test: true
observed_exclusion_or_rerouting: true
third_party_major_completion: false
whole_house_protected_range: false
strict_increment: false
zn_increment: false
```

核心规则：

> **stable protected-range `x` 的高纯正向证据可以是：对象持续留在自然边界内，外部风险真实、多轮撞击，同一 subject-controlled current boundary 持续阻断或迫使风险改道；不要求整个更大空间都安全。**

以及：

> **local protected-range success ≠ global protected-range success。**

## 11｜统计纪律

本轮建立 protected-range 正向 risk-test 的首份高纯控制：

```yaml
protected_range_positive_controls: +1
protected_range_positive_works: +1
work: Panic Room
```

不并入已经 pending-review 的普通 x-scope positive 计数；不增加 strict、zn、co-occurrence。

达到跨作品门槛前，只把它作为独立 P1 control 保留。

## 12｜下一轮最高信息增益

优先寻找第二种 protected-range 正向机制，而不是再找一个钢门房间换皮：

1. stable territory/ward 的 boundary 在对象持续留界内时遭多方向风险测试；
2. subject-specific `x` 不是单纯物理墙，而是可重复 deny/allow/redirect 的权限结构；
3. 同窗没有第三方主要 protection node；
4. 若能同时找到独立 `zn`，再进入 strict-v2，不因本轮 P1 成功自动补 `zn`。
