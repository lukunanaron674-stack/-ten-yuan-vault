---
type: earth-axis-research
status: research-only
may_override_canonical: false
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
canonical_version: v1.6
criterion_id: EARTH-NEITHER-STATE-AFTER-INTERFACE-OFF-v0.1
maturity: candidate
updated: 2026-09-12
source_main: 30a35b0293defd39eff737a1eac4d89a33d05b89
prior:
  - 14-角色库/发散引擎/研究/土轴_n-x并z_strict反转_同对象token承载义务结束后公共化_20260912.md
---

# 土轴 n↔x并z｜neither-state：公共接口消失不自动恢复内部承载 v0.1

> L4 research-only。只做土轴动态状态机边界测试，不修改 L1/L2 canonical、十元信息卡、准度卡、正式关系卡或行为 evidence 正本。

## 0｜本轮唯一缺口

上一轮已经得到 strict reversal candidate：

```text
T0: n ON / x并z OFF
->
T1: n OFF / x并z ON
```

本轮只问：

> 同一个 object token 在 T1 后公共接口关闭，而原 inbound carrying obligation 并未恢复时，是否应稳定落入 `n OFF / x并z OFF`，而不是因为 `x并z` 消失就自动反弹成 `n`？

结论：**是。土轴案例层存在合法 neither-state。**

新增门：

```text
EARTH-NEITHER-STATE-AFTER-INTERFACE-OFF-v0.1
```

核心纪律：

```text
x并z OFF != n ON
n OFF != x并z ON
```

轴级相反只说明两个结构操作方向相反，不要求案例每一时刻必须被其中一端穷尽覆盖。

## 1｜current criterion

L1 v1.6：

```text
土 = n ↔ x并z
核心变量 = 对象跨越内外边界的方向
n     = 外 -> 内纳入承载
x并z  = 内 -> 外映射外化
```

案例级执行：

```text
IR-N:
object -> inside -> sustained load on carrier

IR-XZ:
third_party -> public shell/interface -> identifiable/callable internal object
```

若两条因果箭头都不存在，则允许：

```text
n OFF
x并z OFF
= EARTH_NEITHER_STATE
```

不得为了轴对称而强行补一端。

## 2｜完整 IR：同一封版数据对象从公共接口退出后进入静态离线保留

结构化工程测试：研究机构 A 已完成对固定数据集 D_v1 的内部清洗承载，并在 T1 将它作为稳定公共数据对象开放。随后在 T2，A 因项目结束关闭公共 API、目录入口与下载端点，但并未重新开放外部修订、纠错、标注或持续清洗入口。D_v1 仍可被离线保留或冷存储，但既没有外部对象重新进入 A 并制造持续承载负荷，也没有第三方通过稳定公共接口持续识别、调用或进入该对象。

```yaml
actor: 研究机构A
object: 固定数据集D_v1
object_layer: same_dataset_boundary_relation
current_window: T1_公共接口稳定 -> T2_公共接口关闭且承载不恢复
changed_variable:
  stable_public_interface: true -> false
  third_party_repeatable_callability: true -> false
  inbound_carrying_obligation: false -> false
relation_source:
  T1_x并z: internal_object_exposed_through_stable_public_interface
  T2: no_active_boundary_crossing_relation
relation_shape:
  T1_x并z: third_party -> A_public_interface -> D_v1
  T2: no_repeatable_public_entry; no_object_to_inside_sustained_load

decision_right:
  T1: A定义公共访问规则；第三方在规则内反复调用
  T2: A仅保留对象处置/保管权限；无公共调用权开放；无新的内部承载队列
path_set:
  T1_x并z_paths:
    - public_dataset_catalog
    - stable_dataset_id
    - read_api
    - download_endpoint
  T2_public_paths: []
  T2_n_paths: []
reentry_right:
  T1: 第三方可重复通过公共接口进入D_v1
  T2: 第三方无稳定公共回返路径；外部修订也不重新进入内部处理队列
future_endpoint:
  T1: D_v1作为稳定公共可调用对象持续存在
  T2: D_v1仅被静态保留/冷存储，边界关系暂不主动跨越
reality_anchor:
  - T2公共API、目录和下载端点已关闭
  - T2第三方不能稳定识别并调用D_v1
  - T2没有重新开放外部纠错、修订、标注、清洗入口
  - T2不存在持续由D_v1引发的原型内部承载负荷
  - 静态存储成本存在，但不等于对象外->内持续承载关系重新成立
```

## 3｜两端判定

### T1｜公共接口阶段

```text
n: OFF = 0.94
x并z: PASS = 0.98
```

### T2｜公共接口关闭、承载不恢复

```text
n: OFF = 0.97
x并z: OFF = 0.99
EARTH_NEITHER_STATE: PASS = 0.98
```

关键不是“对象还在不在”，而是当前窗口中是否存在土轴两条具体跨界箭头。

对象仍存在、仍被拥有、仍被冷存储、仍有服务器/仓储成本，都不能自行生成 `n`；同样，曾经有公共接口也不能让 `x并z` 在接口消失后继续幽灵般常驻。

## 4｜nearest-neighbor 最小差异

冻结：

```text
actor = A
object token = D_v1
对象内容
对象身份
法律归属
存储位置
组织身份
```

只改：

```text
stable_public_interface:
ON -> OFF

inbound_carrying_obligation:
OFF -> OFF
```

得到：

```text
T1: n OFF / x并z ON
T2: n OFF / x并z OFF
```

这是一组严格最小差异，证明“一个端点关闭”不会自动把另一端打开。

## 5｜removal test

### 拿掉公共接口关闭

若公共 API、目录、稳定标识仍能被第三方反复调用：

```text
x并z remains ON
```

neither-state 不成立。

### 拿掉“承载不恢复”

若关闭公共接口的同时重新开放外部纠错、修订、持续清洗队列：

```text
D_v1/new revisions -> A_inside -> sustained load
```

则：

```text
n turns ON
x并z turns OFF
```

这是 strict reverse candidate，不是 neither-state。

## 6｜reverse test

从 T2 neither-state 出发，分两条最小反向路径：

```text
A. reopen stable public interface
=> n OFF / x并z ON

B. reopen external inbound carrying queue
=> n ON / x并z OFF
```

若两者都恢复：

```text
n ON + x并z ON
=> SPLIT_IR
```

说明 neither-state 不是“对象失去土属性”，而是当前窗口没有激活任一跨界方向。

## 7｜freeze-third-factor

冻结：

- 对象价值
- 项目是否成功
- 是否开源
- 是否收费
- 服务器是否还开机
- 是否仍有法律所有权
- 是否仍有静态仓储成本
- 是否仍有人知道对象存在
- 机构规模与品牌

只保留：

```text
inbound_sustained_carrying
stable_public_interface_callability
```

结论不变。

## 8｜positive / negative controls

### Positive control｜neither-state

档案馆完成某批档案整理并曾公开数字目录；随后目录下线，馆内也不再接收同批档案的新材料、修订和持续整理任务，仅离线封存原封版档案：

```text
n OFF
x并z OFF
```

### Negative control A｜接口关闭但 n 恢复

数字目录下线，但同批对象重新进入修复、编目、校对和补录队列：

```text
n ON
x并z OFF
```

### Negative control B｜承载仍 OFF，但 x并z 未真正关闭

网站首页撤掉入口，但稳定 API / 直接 URL / 固定目录仍可被第三方反复调用：

```text
x并z remains ON
```

不能把“宣传入口消失”误判成公共接口真实关闭。

### Negative control C｜对象销毁/不存在

若 D_v1 已被彻底删除，需先处理对象存在性/本体问题；不能用“对象没了”偷换成土轴 neither-state 证据。

## 9｜最小判别式

```text
EARTH_NEITHER_STATE
=
same_actor
AND same_object_token
AND same_tested_boundary
AND n_relation == OFF
AND x并z_relation == OFF
AND object_still_exists_for_this_test
```

解释器顺序：

```text
1. 查 n 箭头是否存在：object -> inside -> sustained load
2. 查 x并z 箭头是否存在：third_party -> public shell -> callable internal object
3. 两者都无 -> neither-state
4. 禁止根据“另一端不存在”反推本端成立
```

## 10｜新增 guard / failure types

```text
GUARD_EARTH_NEITHER_01:
axis opposition does not imply exhaustive case-level binary classification

GUARD_EARTH_NEITHER_02:
x并z OFF does not imply n ON

GUARD_EARTH_NEITHER_03:
n OFF does not imply x并z ON

GUARD_EARTH_NEITHER_04:
static storage / ownership / residual cost does not equal n carrying relation

FAILURE_ENDPOINT_ABSENCE_CREATES_OPPOSITE:
一端消失就自动补出另一端

FAILURE_STORAGE_AS_N:
对象仍被保存、占空间或产生仓储成本，就误判n

FAILURE_HIDDEN_INTERFACE_IGNORED:
首页/宣传入口消失，但实际稳定API仍存在，却误判x并z OFF

FAILURE_OBJECT_NONEXISTENCE_AS_NEITHER:
对象已不存在，却拿来证明土轴两端都OFF

FAILURE_AXIS_BINARY_COMPLETENESS:
把五行相反轴误写成案例层必须二选一且无中间/空状态
```

## 11｜本轮裁定

```yaml
criterion: EARTH-NEITHER-STATE-AFTER-INTERFACE-OFF-v0.1
finding:
  case_level_neither_state_is_legal: true
  interface_off_does_not_restore_n: true
  n_off_does_not_restore_xz: true
  static_storage_is_not_n: true
  same_object_can_move_xz_only_to_neither_without_n_activation: true
confidence:
  structural: 0.98
  cross_domain: 0.94
l1_change_required: false
legacy_sync_debt_added: false
```

## 12｜成熟度与下一断点

本轮补齐了土轴动态状态机中此前缺失的空状态：

```text
n only
x并z only
n + x并z
neither
```

以及至少这些迁移：

```text
n -> n+x并z
n -> x并z
x并z -> n
x并z -> neither
neither -> n
neither -> x并z
neither -> n+x并z
```

当前土轴已接近可执行状态机，但暂不标 `AXIS_MATURE_CANDIDATE`。下一高价值缺口应是：

```text
同一自然语言句中同时出现“纳入内部处理”和“提供公共入口”时，
解释器如何自动拆成两个 object_layer / relation ledger，
并避免把同一句的 x并z 证据倒灌给 n，或把 n 证据倒灌给 x并z。
```

也就是从理论 SPLIT_IR 进入真正可执行的自动拆分门。