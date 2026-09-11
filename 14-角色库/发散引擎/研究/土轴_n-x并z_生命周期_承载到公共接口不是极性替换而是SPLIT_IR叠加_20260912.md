---
type: earth-axis-research
status: research-only
may_override_canonical: false
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
canonical_version: v1.6
criterion_id: EARTH-LIFECYCLE-SPLIT-IR-GATE-v0.1
maturity: candidate
updated: 2026-09-12
source_main: f0e512bcc3f6e3fb6c52e2fed20f8d6a5424ec85
prior:
  - 14-角色库/发散引擎/研究/土轴_n-x并z_生命周期_承载转移后公共接口可独立保持_20260911.md
---

# 土轴 n↔x并z｜生命周期：承载→公共接口不等于极性替换，必须 SPLIT_IR v0.1

> L4 research-only。只补土轴动态迁移、同对象双箭头与 SPLIT_IR 边界，不修改 L1/L2 canonical、十元信息卡、准度卡、正式关系卡或行为 evidence 正本。

## 0｜本轮唯一缺口

上一轮已证明：现实承载 `n` 与公共接口 `x并z` 可以由不同 actor 独立存在。本轮只问：

> 同一个 actor、同一个业务对象先被纳入内部持续承载，随后又形成稳定公共接口时，能否直接写成 `n -> x并z` 的极性反转？

结论：**通常不能。**

若 `n` 的现实负荷仍在，而 `x并z` 只是后来新增一条“第三方经公共壳进入/调用内部对象”的反向边界箭头，则这是：

```text
n remains ON
+
x并z turns ON
=
lifecycle accumulation / dual activation
```

而不是：

```text
n OFF -> x并z ON
```

因此新增判别门：

```text
EARTH-LIFECYCLE-SPLIT-IR-GATE-v0.1
```

## 1｜current criterion

L1 v1.6 的土轴核心变量仍是“对象跨越内外边界的方向”：

```text
n     = 外 -> 内纳入承载
x并z  = 内 -> 外映射外化
```

案例级执行必须把两条箭头分别取证：

```text
IR-N:
object -> inside -> sustained load on carrier

IR-XZ:
third_party -> public shell/interface -> identifiable/callable internal object
```

若一句自然语言同时满足二者，不得把第二条箭头写成第一条箭头的“升级版”或“转化结果”；必须 SPLIT_IR。

### 真正的极性替换最小条件

只有当同一测试边界、同一对象层、同一 current_window 中出现：

```text
原来的 inbound carrying relation 实际关闭/退出
AND
outbound public-interface relation 实际建立
```

才允许候选写成：

```text
n -> x并z polarity replacement
```

若 inbound carrying 仍持续，则只能写：

```text
n ON + x并z ON
```

## 2｜完整 IR：同一创作工作室的两阶段

结构化测试：创作工作室 A 起初只接收少量固定委托，客户项目进入内部制作系统后由 A 长期承担排班、素材、版本、返修与交付负荷，但外界没有统一公开接口，只靠私下联系人。随后 A 在保持原内部制作承载完全不变的情况下，上线公开项目门户：第三方可通过固定入口识别服务、提交项目、查询同一项目状态、进入返修通道并获得稳定归因。

```yaml
actor: 创作工作室A
object: 客户项目及其持续制作关系
object_layer:
  n_test: internal_project_carrying
  x并z_test: public_project_access_and_representation
current_window: T0_仅内部承载 -> T1_内部承载不变且新增公共门户
changed_variable:
  sustained_internal_load: true -> true
  stable_public_interface: false -> true
  repeatable_third_party_routing: false -> true
relation_source:
  n: accepted_project_enters_A_and_generates_recurring_internal_load
  x并z: A_builds_stable_public_shell_mapped_to_current_internal_project_objects
relation_shape:
  n: project -> A_inside -> sustained_load_on_A
  x并z: third_party -> A_public_shell -> identifiable_callable_A_internal_project
decision_right:
  A_internal: production scheduling/version/repair decisions
  third_party: can initiate/query/reenter only through defined public interface
path_set:
  n_paths:
    - project_intake_into_internal_queue
    - internal_asset_maintenance
    - revision_handling
    - delivery_obligation
  x并z_paths_T0:
    - none_stable_public
  x并z_paths_T1:
    - public_submission
    - project_status_lookup
    - revision_reentry
    - unified_delivery_endpoint
reentry_right:
  T0: existing clients rely on private contact; not stable public reentry
  T1: same project can be repeatedly re-entered through stable public shell
future_endpoint:
  T0: project continues to be carried internally
  T1: project continues to be carried internally and becomes publicly identifiable/callable
reality_anchor:
  - T0与T1中A都持续承担排班、素材维护、返修、版本与交付负荷
  - T1新增的公共入口会真实定位当前项目对象，而非只收营销线索
  - 第三方可以重复使用相同公共壳识别、提交、查询和返修
  - 上线公共壳前后，内部承载没有退出或转交
```

## 3｜判定

### T0｜只有内部承载

```text
n: PASS = 0.98
x并z: FAIL = 0.96
```

理由：对象已进入内部并产生持续负荷，但第三方没有稳定公共壳可重复识别/调用内部对象。

### T1｜承载仍在 + 新增公共接口

```text
n: PASS = 0.98
x并z: PASS = 0.98
SPLIT_IR: required
```

关键：

```text
T0 -> T1
不是 n -> x并z
而是
n ON -> n ON + x并z ON
```

`x并z` 的出现没有取消 `n`，因此不能把生命周期先后顺序误写成极性替换。

## 4｜nearest-neighbor 最小差异

冻结：

```text
同一 actor A
同一项目类型
同一客户负荷
同一制作团队
同一内部工作流
同一资源消耗
同一交付义务
```

只改变：

```text
stable_public_interface:
OFF -> ON
```

得到：

```text
T0: n ON / x并z OFF
T1: n ON / x并z ON
```

所以最小差异直接证明：

```text
x并z activation
DOES NOT REQUIRE
n deactivation
```

## 5｜removal test

### 拿掉公共壳

从 T1 删除：

```text
public_submission
stable_mapping
status_lookup
repeatable_reentry
unified_public_identity
```

但保留内部持续承载，则：

```text
n PASS
x并z FAIL
```

### 拿掉内部负荷

反过来，若把制作承载完整转移给 B，但 A 的公共壳仍真实路由到 B，则回到上一轮已验证状态：

```text
A: n OFF + x并z ON
B: n ON
```

说明二者是可独立开关，不是天然互斥状态。

## 6｜reverse test

### 接口撤销，承载仍在

```text
T1: n ON + x并z ON
-> 关闭公共门户，但A继续处理既有项目
T2: n ON + x并z OFF
```

变化只发生在 `x并z`。

### 承载退出，接口保留

```text
T1: n ON + x并z ON
-> 制作承载转给B，A门户仍真实路由
T2: A = n OFF + x并z ON
```

变化只发生在 `n`。

### 真替换候选

只有当同一 actor、同一测试边界中同时发生：

```text
A 不再承载该对象现实负荷
AND
A 建立并保留稳定公共接口，将对象映射到别处/外部可调用结构
```

才可进一步测试是否属于 `n -> x并z` 的同窗方向替换；仍须证明不是简单的 SPLIT_ACTOR 外包。

## 7｜freeze-third-factor

冻结：

- 品牌名
- 项目题材
- 客户数量
- 人员身份
- 职业称谓
- 是否盈利
- 是否成功
- 情绪与关系亲疏
- 网站视觉形式

只变：

```text
stable_public_shell_and_mapping = false -> true
```

若解释器把 `n` 自动关掉，则说明它把“内外相反轴”误解成“案例中两端不能共存”。L1 本身并未要求案例互斥。

## 8｜positive / negative controls

### Positive control A｜纯 n 邻居

家庭长期接纳一名亲属共同生活，持续承担住房、照料、费用和冲突协调；但没有面向第三方形成稳定公共入口、代表接口或可调用壳。

```text
n PASS
x并z FAIL
```

### Positive control B｜n + x并z 双激活

社区救助机构既持续承载入住者的住宿、管理与照料负荷，又提供固定官网、申请入口、公开联系电话、床位状态与转介接口，使第三方可重复识别并进入对应内部服务对象。

```text
n PASS
x并z PASS
SPLIT_IR required
```

### Negative control｜假生命周期反转

内部工作完全不变，只是把门牌、官网和宣传账号上线，却无法把第三方稳定映射到具体当前内部对象/服务。

```text
n PASS
x并z FAIL
```

不能写成 `n -> x并z`。

## 9｜严格对立与案例共存的层级纪律

L1 的：

```text
n ↔ x并z
```

描述的是同一核心变量“跨越内外边界方向”的两个反向操作端。

但案例中：

```text
同一 actor
同一大对象
不同因果箭头/对象层
```

完全可能同时激活两端：

```text
object -> inside -> sustained load
third_party -> public shell -> internal object
```

因此必须区分：

```text
axis-level opposition
!=
case-level mutual exclusivity
```

若 `object_layer`、`causal_arrow` 或 `changed_variable` 不同，即使自然语言只写一句，也必须 SPLIT_IR。

## 10｜最小判别式

```text
IF n_evidence remains true
AND x并z_evidence changes false -> true
THEN
  classify = n_plus_x并z
  transition = interface_added
  split_ir = true
  NOT polarity_replacement
```

只有：

```text
n_evidence true -> false
AND
x并z_evidence false -> true
AND
same actor
AND
same tested boundary/object layer
AND
same current window
```

才进入：

```text
possible n_to_x并z_polarity_replacement
```

之后仍需排除 carrier/interface 换 actor 的伪反转。

## 11｜新增 guard / failure types

```text
GUARD_EARTH_LIFECYCLE_01:
chronological_after != polarity_replacement

GUARD_EARTH_LIFECYCLE_02:
if n remains real after x并z appears
=> SPLIT_IR; classify coexistence

GUARD_EARTH_LIFECYCLE_03:
axis opposition does not imply case mutual exclusion

GUARD_EARTH_LIFECYCLE_04:
true polarity replacement requires n evidence to actually turn OFF on the same tested boundary

FAILURE_SEQUENCE_AS_CONVERSION:
因为x并z后出现，就把“先n后x并z”写成n转化为x并z

FAILURE_AXIS_OPPOSITION_AS_CASE_EXCLUSIVITY:
因为两端在L1相反，就禁止同一案例不同箭头同时激活

FAILURE_PUBLICIZATION_ERASES_CARRYING:
对象被公开接口化后，自动抹掉仍在持续发生的内部现实承载

FAILURE_SAME_NOUN_AS_SAME_IR:
自然语言中的同一个“项目/机构/家庭”名词被误当成同一object_layer，不拆边界箭头

FAILURE_LIFECYCLE_LABEL_WITHOUT_STATE_CHANGE:
只看到“进入→对外开放”叙述，就声称发生极性迁移，却没有证明n从ON变OFF
```

## 12｜本轮结论

```yaml
criterion: EARTH-LIFECYCLE-SPLIT-IR-GATE-v0.1
finding:
  n_then_x并z_can_be_accumulation_not_reversal: true
  case_level_coactivation_allowed: true
  split_ir_required_when_both_arrows_exist: true
  true_reversal_requires_n_off_same_boundary: true
confidence:
  structural: 0.98
  cross_domain: 0.94
l1_change_required: false
legacy_sync_debt_added: false
```

本轮新增信息增益：把“时间上后出现”与“极性反转”正式拆开，并建立 `n ON -> n ON + x并z ON` 的生命周期门。

## 13｜下一断点

下一轮不再重复证明双激活，优先处理更窄的问题：

> **同一 actor、同一 object_layer、同一 current_window 中，怎样构造真正的 `n ON -> n OFF + x并z ON`，并排除只是换 carrier / 换 object_layer 的伪反转？**

目标是建立 STRICT-EARTH-POLARITY-REVERSAL-GATE；若无法在同层同窗稳定构造，就应明确登记“土轴严格相反主要是轴级结构，案例动态通常需要 SPLIT_IR”，而不是为了对称美观硬造迁移。