---
type: ten-yuan-fire-axis-protected-range-boundary-stress-test
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
work: Mad Max Fury Road
work_cn: 疯狂的麦克斯：狂暴之路
character: Imperator Furiosa
stage: Citadel departure -> initial pursuit -> sandstorm escape window
sample_type: protected-range-positive-risk-test-mobile-controlled-boundary
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_card: zn信息量卡v2.0
  x_card: x信息量卡v2.0
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
  x_scope_gate_current: current-x-scope-distinction-v1_20260830
  protected_range_gate: protected-range-risk-test-v1_20260831
fact_confidence: 99
classification_confidence: 97
protected_range_increment: true
protected_range_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_duplicate_guard_mechanism: competing-purpose-anchor-on-x-side
x_scope_dynamic_transition_increment: false
created: 2026-09-01
---

# zn ↔ x 边界压力测试｜Furiosa / War Rig：移动型 protected-range

## 0｜启动对齐

本轮以 `main@5eaf01926cb513d8ec208d01fb33786e4271a765` 为启动 HEAD，重读最近 commits、L0/L1 权力门禁、L1 十元—五行正本、zn/x current 信息卡与准度卡、相关关系卡/`zn补x`、火轴待审议清单、研究总纲、strict-v2 专项、x-scope 专项和 protected-range current v1。current canonical 高于本文件；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

当前 x-scope 已 pending-review，禁止继续堆普通正例。本轮只测试一个此前 current protected-range 三类控制均未覆盖的结构：**移动中的主体控制边界**。

## 1｜事实链

当前可靠剧情事实：

1. Furiosa 被派驾驶装甲 War Rig 执行 Citadel 对外运输任务；
2. 她秘密将 Immortan Joe 的五位妻子带在 War Rig 上并主动偏离既定路线，开始逃离；
3. Joe 发现五位妻子在 War Rig 上后，带领 War Boys 并召集盟军追击；
4. Furiosa 持续驾驶同一 War Rig，在追击中改变路线，并驶入沙暴以甩开绝大多数追兵；
5. 在该测试窗口，五位妻子不是偶然位于同一地点，而是持续作为 Furiosa 试图带离 Joe 控制范围的被保护对象留在 Rig 的移动范围内。

公开来源中，BFI 将该段概括为：truck driver Furiosa 把五位妻子藏在车上，冒险前往 Green Place，并在装甲 War Rig 上遭多方追击；BFI IMAX 简介同样明确 Furiosa 带五位妻子逃亡、以 massive armoured War Rig 试图甩开 Joe 及其手下。其他剧情资料进一步确认 Furiosa 主动驶入沙暴并甩掉绝大多数追兵。

本轮不依赖人物身份、女性主义主题、胜负或结局倒推 zn/x。

## 2｜zn 独立端点

先用不引用被测 `x` 的语言命名当前原则：

> **这五名被 Joe 强制控制的女性应当被带离其控制并获得现实逃生机会；即使因此背叛既有任务、承担被整个 Citadel 武装追杀的风险，也继续把她们的逃离置于原任务之上。**

当前窗口可观察到：

- Furiosa 主动偏离原定运输任务；
- 她在发现追兵后没有恢复原任务以换取安全；
- 追击升级后仍持续推进逃离；
- 该排序跨越多个连续节点，而非一次情绪动作。

因此本轮：

```yaml
zn_endpoint: true
zn_fact_confidence: 98
```

注意：这里只锁“救出/带离这五名被控制者”的当前原则，不从 Furiosa 的身份、创伤背景或作品主题推更大的抽象 zn。

## 3｜x 权限结构固定拆分

```yaml
actor: Imperator Furiosa
object: War Rig 及其当前移动承载/路线控制层；被保护对象为持续留在 Rig 范围内的五位妻子

permission_type:
  contact: true
  use: true
  custody_of_vehicle: true_current_window
  call_or_operate: true
  management: true_on_driving_route_layer
  disposition: limited_not_full_title
  veto: route-choice / continue-or-divert on tested driving layer
  exclusion: partial_via_armoured-mobile-boundary_and_evasion
  transfer: not_tested

scope:
  vehicle_scope: War Rig current operational control
  protected_object_subset: five wives physically carried inside/on the Rig during tested escape window
  global_scope: false

term: current mission/escape window
revocability: externally revocable by Joe in source hierarchy, but revocation is not a same-layer per-action pre-effect veto during tested driving window
return_obligation: source mission originally expected return/continued service; does not erase current use/control x
same-layer_pre-effect_veto: no mandatory co-node shown that must approve each route change before Furiosa can make it effective
global_override: Joe retains broader regime/organizational power and can pursue; this does not make Furiosa's current driving/use x false
ultimate_title: not attributed to Furiosa
decision_structure: unilateral on tested immediate driving/route-choice layer
consultation_structure: not material to initial escape window
final_decision_structure: Furiosa-final on tested immediate route-choice layer
execution_structure: Furiosa drives and route changes take effect in reality
co-decision_nodes: none mandatory on tested immediate driving layer
```

本轮不写 `x=true` 就结束，而是明确：Furiosa 的 current `x` 是 **War Rig 的现实使用/驾驶/路线管理接口**，不是永久所有权，也不是对五位妻子的人身处分权。

## 4｜protected-range risk-test

### 4.1 boundary-on

War Rig 是持续存在的装甲移动平台；五位妻子被持续承载在同一移动范围内。与固定 panic room 不同，这个边界随主体驾驶不断改变空间位置，但并未因此失去可识别性。

```yaml
boundary_on: true
```

### 4.2 object-inside

五位妻子不是碰巧与 Furiosa 同路，而是被秘密带上 Rig 并持续留在逃亡载体中。

```yaml
object_inside: true
```

### 4.3 real risk enters / targets boundary

Joe 发现五位妻子离开后，直接组织武装追击；风险明确针对载有她们的 War Rig，而不是抽象的远期威胁。

```yaml
real_risk: true
risk_targets_current_boundary: true
```

### 4.4 subject-specific x 是否在结果发生前改变风险

Furiosa 自己的 tested current `x` 包括驾驶与路线改变。她偏离原路线、持续驾驶逃离，并驶入沙暴，现实上使绝大多数追兵暂时失去追击能力/位置优势。

这里锁的是：

```text
subject-specific vehicle-use / route-control x
→ 在风险命中被保护对象前
→ 持续改变双方空间关系、阻断直接追回
```

而不是“Furiosa 很能打所以 x=true”。

```yaml
subject_specific_x_changes_risk_pre_effect: true
```

### 4.5 第三方保护节点冻结

为避免把后续 Max、Rock Riders、Nux 等帮助倒灌进 Furiosa 的 x，本轮 current window 截在 **初始逃亡至沙暴甩开主要追兵**。Max 在沙暴之后才与 Furiosa 的逃亡组形成持续合作，因此不作为本轮 protected-range 正向成立的主要节点。

初始 escort/其他环境因素可以贡献局部效果，但本轮最核心的持续接口仍是 Furiosa 对 War Rig 的驾驶与路线选择；没有第三方节点替代她成为 tested range 的 mandatory controller。

```yaml
third_party_primary_protection_node: false_on_tested_window
```

## 5｜本轮新增机制：mobile controlled protected-range

current protected-range 已有三类正向：

1. Panic Room：固定 physical enclosure；
2. The Martian Hab：continuous environmental containment；
3. Fidelius：informational access gate。

Furiosa / War Rig 增加的不是第四个普通“有地方保护人”，而是不同拓扑：

```text
protected boundary 的空间坐标持续变化
+
被保护对象持续保持 inside
+
主体的 current x 是 driving / route-control
+
真实风险追踪并试图重新进入该移动边界
+
主体通过持续改变边界位置与路线阻断/改道风险
```

因此可锁：

> **protected-range 不要求地理边界静止。只要对象持续 inside、边界自然可识别、主体拥有稳定的 current movement/route-control x，并在真实风险追击中于结果发生前持续 deny / block / redirect，移动载体也可形成 stable protected-range x。**

这是一条新的 protected-range mechanism，不与前三种普通正例重复。

## 6｜最近邻排除

### vs Panic Room

Panic Room 的保护来自静态封闭空间；Furiosa 的 tested range 本身持续移动。若强制 protected-range 必须固定在地理坐标，War Rig 会被错误排除。

### vs The Martian Hab

Hab 的核心是环境连续隔离；War Rig 的关键不是维持生命环境，而是主体通过移动、路线与速度持续改变风险接触条件。

### vs Fidelius

Fidelius 改变的是信息访问；War Rig 改变的是物理接近路径和追击几何关系。

### vs John Wick Continental negative

Continental 的制裁主要在违规发生后生效，所以不能证明 pre-effect protection。Furiosa 的驾驶/路线控制在追兵夺回五位妻子前就改变风险路径，因此不命中 post-hoc sanction guard。

## 7｜拿掉 / 反向

### 拿掉 Furiosa 的 current driving/route x

如果五位妻子仍在车上，但 Furiosa不能现实驾驶、改变路线，且所有移动必须由敌方或第三方节点决定，那么：

- “对象在装甲车里”仍可能是 physical enclosure；
- 但不能把“移动逃生边界”归给 Furiosa 的 subject-specific x；
- 本轮 mobile-protected-range positive 不成立。

### 反向

如果 Furiosa拥有 War Rig 驾驶权，但真实追击一进入后，她的 route-control 从未改变/阻断风险，或者最终保护主要由另一个 mandatory controller 完成，则只能记：

```text
vehicle-use x = true
protected-range risk-test = failed / not-proven
```

这防止“有车 + 带人 = protected-range”自动成立。

## 8｜strict-v2：不破零

本轮 `zn=true`、`x=true`、same current window 与相关对象层都相当强，但 strict-v2 仍不能因为端点漂亮就自动过门。

### `x→zn`

拿掉当前 War Rig 控制后，Furiosa 的原则仍存在，但会失去当前最明确的移动承载对象、逃生接口与可持续受保护范围，因此该方向有支持。

### `zn→x` 的 competing-purpose anchor

关键失败点在另一方向：拿掉被测 `zn` 后，War Rig 的现实驾驶/运输 `x` 仍然具有一个来源内生、独立而明确的既有用途：

```text
Citadel 对 Gas Town / Bullet Farm 的运输任务
```

换言之，Furiosa 的救援原则确实**重定向**了 War Rig 的用途，但不能证明拿掉该原则后，这个 `x` 会失去明确用途/排序标准；它仍有原运输任务这一 competing-purpose anchor。

这与 current strict 已锁的 Matt King 类 `competing-purpose-anchor on x side` 同机制，因此：

```yaml
strict_v2_result: negative_by_existing_guard_mechanism
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
reason_for_no_negative_increment: duplicate_mechanism_not_new_control
```

本轮绝不为了 strict 破零而降低门槛。

## 9｜成熟度与统计

事实置信：99。
分类置信：97。

```yaml
knowledge_status: evidence-locked
protected_range_current_criterion: protected-range-risk-test-v1_20260831
protected_range_positive_controls_before: 3
protected_range_positive_works_before: 3
protected_range_positive_control_increment: 1
protected_range_positive_work_increment: 1
protected_range_positive_controls_after: 4
protected_range_positive_works_after: 4

strict_v2_verified_positive: unchanged_0_0works
strict_v2_negative: unchanged_due_duplicate_guard
x_scope_dynamic: unchanged_15_controls_13works
ordinary_x_scope_positive: unchanged
```

protected-range 已 pending-review；本轮不修改 L1/L2 canonical，只登记新 mechanism control。

## 10｜本轮边界句

> **移动不等于 protected-range 失去“范围”。当对象持续 inside，同一移动载体边界自然可识别，主体拥有稳定 driving/route-control x，且真实风险追击时该 x 在结果发生前持续改变、阻断或改道风险，mobile controlled boundary 可以通过 protected-range risk-test。**

同时保留 strict 护栏：

> **一个 `x` 被 zn 重新用于保护，不等于 `zn→x` strict 自动成立；如果拿掉 zn 后该 x 仍有来源内生的独立明确用途/排序 anchor，strict 仍失败。**

## 11｜下一轮高信息增益

P0 继续优先天然对象构成型 strict-v2 候选，不降门。

若 P0 仍无 ≥95 新材料，优先测试 mobile protected-range 的失败镜像：

```text
对象持续在移动载体内
+ 主体有驾驶/使用 x
+ 真实风险进入
但主体的 x 只能移动自身，不能稳定改变风险接触/进入条件
或保护主要由第三方护航节点完成
→ vehicle-use x true
→ protected-range false/deferred
```

该失败镜像比再堆一个“装甲车保护人”的普通正例信息增益更高。
