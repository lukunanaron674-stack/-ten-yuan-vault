---
type: earth-axis-research
status: research-only
may_override_canonical: false
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
canonical_version: v1.6
criterion_id: EARTH-STRICT-REVERSAL-SAME-OBJECT-GATE-v0.1
maturity: candidate
updated: 2026-09-12
source_main: af36430995045cfb715efdd7907dfb15e096798e
prior:
  - 14-角色库/发散引擎/研究/土轴_n-x并z_生命周期_承载到公共接口不是极性替换而是SPLIT_IR叠加_20260912.md
---

# 土轴 n↔x并z｜strict 反转：同对象 token 的承载义务结束后公共化 v0.1

> L4 research-only。只做土轴 strict reversal 边界压力测试，不修改 L1/L2 canonical、十元信息卡、准度卡、正式关系卡或行为 evidence 正本。

## 0｜本轮唯一缺口

上一轮已经确认：

```text
n ON -> n ON + x并z ON
```

只是生命周期叠加，不是极性反转。

本轮只问：

> 能否在同一 actor、同一具体 object token、同一测试边界上，找到真正的 `n ON -> n OFF + x并z ON`，而不是靠换承载者、换对象层或简单 SPLIT_IR 才成立？

结论：**可以形成 strict reversal candidate，但条件非常窄。**

关键不是“对象后来被公开”，而是：

```text
1. 先前该对象由外部进入 actor 内部，并持续制造现实承载负荷；
2. 后来该对象的 inbound carrying obligation 真实结束，不再继续产生同类内部承载义务；
3. 同一个对象 token 随后被 actor 组织成稳定公共可调用对象；
4. 第三方可通过稳定公共壳反复识别/调用它；
5. 这一变化不能靠换 actor 或换成另一个对象来完成。
```

新增门：

```text
EARTH-STRICT-REVERSAL-SAME-OBJECT-GATE-v0.1
```

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

strict reversal 不等于两条箭头先后出现，而要求：

```text
same actor
+ same object token
+ same tested boundary
+ n relation actually OFF
+ x并z relation actually ON
```

## 2｜完整 IR：同一训练数据集从内部清洗负荷到公共数据接口

结构化工程测试：研究机构 A 从外部收到一个固定数据集 D。T0 阶段，D 被纳入 A 的内部清洗、标注、去重、错误修复流程，持续占用人员、存储和审核资源。随后项目验收结束，A 明确停止继续吸收该数据集的新修订、纠错请求与标注债务，将 D 冻结为版本 D-v1。T1 阶段，A 将这个同一冻结数据对象 D-v1 通过稳定公开 API / 数据目录对外提供，第三方可反复识别、查询、下载和调用；A 仍维持接口运行，但不再承担原来的“外部对象进入内部后持续清洗/修复”的承载义务。

```yaml
actor: 研究机构A
object: 固定数据集D_v1
object_layer: same_dataset_boundary_relation
current_window: T0_内部承载清洗 -> T1_停止承载义务并公共接口化
changed_variable:
  inbound_carrying_obligation: true -> false
  stable_public_interface: false -> true
  third_party_repeatable_callability: false -> true
relation_source:
  n_T0: external_dataset_is_taken_inside_and_generates_recurring_curation_load
  x并z_T1: frozen_internal_dataset_is_exposed_through_stable_public_interface
relation_shape:
  T0_n: D -> A_inside -> sustained_curation_load_on_A
  T1_x并z: third_party -> A_public_data_interface -> D_v1

decision_right:
  T0: A决定内部清洗、标注、修复与版本验收
  T1: A定义公共访问规则；第三方可在规则内重复调用D_v1
path_set:
  T0_n_paths:
    - ingest_external_dataset
    - recurring_cleaning
    - annotation_correction
    - defect_repair
    - internal_version_maintenance
  T1_x并z_paths:
    - public_dataset_catalog
    - stable_dataset_id
    - read_api
    - download_endpoint
    - versioned_reference
reentry_right:
  T0: 外部纠错/修订仍会重新进入A的内部处理队列
  T1: 原清洗项目关闭；第三方可重新进入的是公共调用接口，不是原内部承载队列
future_endpoint:
  T0: 完成D的内部可用版本
  T1: D_v1作为稳定公共可调用对象持续存在
reality_anchor:
  - T0中D持续占用清洗、标注、审核和修复资源
  - T1起A不再接受D_v1的原项目型持续修订/清洗债务
  - T1公共接口真实定位同一个D_v1，而非另一个复制品或新对象
  - 第三方可反复通过稳定ID/API查询、下载或调用D_v1
  - A仍承担接口运维，但该负荷属于公共接口运维，不是原对象的inbound carrying obligation
```

## 3｜两端判定

### T0｜内部持续承载

```text
n: PASS = 0.98
x并z: FAIL = 0.95
```

理由：D从外部进入内部并持续制造清洗、标注、修复、版本维护负荷；没有稳定第三方公共接口。

### T1｜原承载义务退出 + 同对象公共化

```text
n: OFF = 0.94
x并z: PASS = 0.98
strict_reversal_candidate: PASS = 0.92
```

理由：

```text
原来的 inbound carrying relation 已真实结束
AND
同一个 D_v1 由内部对象转成稳定公共可调用对象
```

注意：A仍可能承担API服务器、带宽、权限管理等运维负荷，但那是：

```text
interface operation load
```

不是：

```text
D -> inside -> sustained curation load
```

因此不能因为“还有服务器成本”就把 n 强行保持 ON；必须按 tested relation 分账。

## 4｜nearest-neighbor 最小差异

冻结：

```text
actor = A
object token = D_v1
数据内容
数据ID
法律归属
存储位置
组织身份
```

只改变两项：

```text
inbound_carrying_obligation:
ON -> OFF

stable_public_interface:
OFF -> ON
```

得到：

```text
T0: n ON / x并z OFF
T1: n OFF / x并z ON
```

这比“承载转给B、A保留入口”的旧例更严格，因为没有 SPLIT_ACTOR。

## 5｜removal test

### 拿掉“承载义务结束”

若 T1 上线公共 API，但 A 仍继续接收 D 的外部修订、持续清洗、修错和标注：

```text
n remains ON
x并z turns ON
=> n + x并z
=> SPLIT_IR
=> NOT strict reversal
```

### 拿掉“公共可调用性”

若 A 只是把 D 冻结归档并停止维护，没有真实公共 API / 目录 / 稳定标识：

```text
n OFF
x并z FAIL
```

不能因为“对象不再内部处理”就倒推出 x并z。

## 6｜reverse test

把 T1 反向改为：

```text
关闭公共 API
重新开放 D 的外部修订和纠错入口
恢复持续清洗/审核队列
```

则：

```text
n OFF + x并z ON
->
n ON + x并z OFF
```

形成方向对称的 strict reverse candidate。

若只关闭 API、但不恢复持续内部承载，则只是：

```text
n OFF + x并z OFF
```

说明“对端消失”不会自动生成另一端。

## 7｜freeze-third-factor

冻结：

- 是否开源
- 是否收费
- 数据题材
- 项目是否成功
- 团队规模
- 宣传强度
- 机构名气
- 服务器位置
- 数据是否合法热门

只保留：

```text
inbound carrying obligation
public interface callability
same object identity
```

结论不变。

## 8｜positive / negative controls

### Positive control｜strict reversal candidate

同一档案集合先作为外部捐赠材料进入档案馆内部，经历长期整理、修复、编目；项目封版后停止继续吸收同批材料的修订负荷，再把同一封版集合通过稳定数字目录/API向公众开放。

```text
T0: n ON / x并z OFF
T1: n OFF / x并z ON
```

### Negative control A｜双激活而非反转

数字档案上线公共接口后，馆内仍持续接收同一对象的新材料、修订、修复与编目负荷：

```text
n ON + x并z ON
SPLIT_IR
```

### Negative control B｜换 actor 伪反转

A停止承载，B接管持续维护；A只保留公共入口：

```text
A: n OFF + x并z ON
B: n ON
```

这是 carrier/interface decoupling，不是单 actor strict reversal。

### Negative control C｜对象换芯

T0承载的是原始数据D_raw，T1公共接口提供的是经重新生成的摘要S：

```text
object token changed
=> strict same-object reversal FAIL
```

## 9｜最小判别式

```text
STRICT n -> x并z CANDIDATE
=
same_actor
AND same_object_token
AND same_tested_boundary
AND n_relation: ON -> OFF
AND x并z_relation: OFF -> ON
AND no hidden carrier substitution
AND no object substitution
```

但解释器还必须再检查：

```text
remaining load belongs to which relation?
```

因为：

```text
interface operation load
!=
inbound object carrying load
```

否则任何公共接口都会因为“需要运维”被误判成 n 永远不可能 OFF。

## 10｜新增 guard / failure types

```text
GUARD_EARTH_STRICT_REVERSAL_01:
same actor + same object token + same tested boundary required

GUARD_EARTH_STRICT_REVERSAL_02:
remaining interface-operation load does not by itself keep n ON

GUARD_EARTH_STRICT_REVERSAL_03:
if original carrying obligation continues, classify n+x并z with SPLIT_IR

GUARD_EARTH_STRICT_REVERSAL_04:
endpoint absence does not create opposite pole

FAILURE_ANY_LOAD_AS_N:
只要actor还有任何运维成本，就把n永远判ON

FAILURE_OUTSOURCING_AS_STRICT_REVERSAL:
换了承载者后把A的n OFF + x并z ON误写成单actor极性反转

FAILURE_OBJECT_SUBSTITUTION_AS_REVERSAL:
T0和T1实际上不是同一对象，却因名称相近当成同对象反转

FAILURE_ARCHIVE_AS_PUBLIC_INTERFACE:
对象停止内部处理后仅归档，就倒推x并z成立

FAILURE_PUBLICATION_WITH_CONTINUED_CARRYING:
对象公开后原持续承载仍存在，却硬写成n OFF
```

## 11｜本轮裁定

```yaml
criterion: EARTH-STRICT-REVERSAL-SAME-OBJECT-GATE-v0.1
finding:
  strict_same_actor_same_object_reversal_possible_as_candidate: true
  requires_original_carrying_obligation_to_end: true
  interface_operation_load_does_not_equal_n_carrying_load: true
  continued_carrying_requires_split_ir: true
confidence:
  structural: 0.95
  cross_domain: 0.90
l1_change_required: false
legacy_sync_debt_added: false
```

本轮不是把土轴做成漂亮对称图，而是确认 strict reversal 至少在窄条件下可执行，同时明确它最容易被三种东西伪造：换 actor、换 object、以及把所有后续运维负荷都混成 n。

## 12｜下一断点

下一轮土轴若再次被轮到，最高价值问题应转向：

```text
同一 object token 在 strict reversal 后，公共接口消失但内部承载不恢复时：
是否稳定落入 neither-state，而不是自动反弹为 n？
```

这将直接检验：

```text
x并z OFF != n ON
```

并补齐土轴动态状态机的 hard-off / neither 分支。
