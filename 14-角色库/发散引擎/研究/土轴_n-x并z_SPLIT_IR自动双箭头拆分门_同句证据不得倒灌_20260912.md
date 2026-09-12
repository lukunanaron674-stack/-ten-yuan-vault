---
type: earth-axis-research
status: research-only
may_override_canonical: false
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
canonical_version: v1.6
criterion_id: EARTH-DUAL-ARROW-SPLIT-IR-GATE-v0.1
maturity: candidate
updated: 2026-09-12
source_main: f1ecbf82cd787cd350ec39f68d7aa99a4d87c980
prior:
  - 14-角色库/发散引擎/研究/土轴_n-x并z_neither-state_接口消失不自动恢复承载_20260912.md
---

# 土轴 n↔x并z｜SPLIT_IR 自动双箭头拆分门：同句证据不得倒灌 v0.1

> L4 research-only。只补解释器级土轴拆分门，不修改 L1/L2 canonical、十元信息卡、准度卡、正式关系卡或行为 evidence 正本。

## 0｜本轮唯一缺口

上一轮已经确认土轴案例层存在四态：`n only / x并z only / n+x并z / neither`。本轮只处理解释器执行问题：

> 当一句自然语言同时描述“把对象纳入内部持续处理”与“向第三方提供稳定公共入口”时，如何强制拆成两条独立关系账本，并禁止用一条箭头的证据补另一条？

新增门：

```text
EARTH-DUAL-ARROW-SPLIT-IR-GATE-v0.1
```

核心纪律：

```text
n evidence must prove:
object -> inside -> sustained load on carrier

x并z evidence must prove:
third_party -> public shell/interface -> identifiable/callable internal object

若两条箭头都成立：
SPLIT_IR REQUIRED

同一句出现 != 同一条证据可双用
```

## 1｜current criterion

L1 v1.6：

```text
土 = n ↔ x并z
核心变量 = 对象跨越内外边界的方向
n     = 外 -> 内纳入承载
x并z  = 内 -> 外映射外化
```

解释器不得先判标签再找理由，必须先独立建账：

```text
IR-N
IR-X并Z
```

每个账本独立填写 `relation_source / relation_shape / path_set / reality_anchor`，之后才允许合并状态。

## 2｜完整 IR：同一句同时含纳入承载与公共接口

最小结构化句：

> “档案中心接收外部捐赠档案后持续整理、修复和编目，同时建立固定公开目录与申请接口，让研究者可以反复定位并调阅这批档案。”

```yaml
actor: 档案中心A
object: 固定捐赠档案集合D
object_layer:
  n_layer: internal_carrying_of_D
  x并z_layer: public_access_representation_of_D
current_window:
  同一服务周期内，D已进入内部持续处理，同时公共入口稳定开放
changed_variable:
  inbound_sustained_carrying: true
  stable_public_interface: true
  third_party_repeatable_callability: true
relation_source:
  n: 外部捐赠档案进入A后，持续产生整理/修复/编目现实负荷
  x并z: A把内部D映射到固定公开目录与申请接口，第三方可稳定识别与调用
relation_shape:
  n: D -> A_inside -> sustained_archival_load
  x并z: researcher -> public_catalog/request_interface -> identifiable_callable_D

decision_right:
  n: A内部决定整理、修复、编目处理顺序
  x并z: 第三方在公开规则内拥有查询/申请/调阅路径；A保留访问规则管理权
path_set:
  n:
    - intake
    - conservation
    - cataloging
    - correction_queue
  x并z:
    - stable_public_catalog
    - collection_id
    - request_form
    - reading_room_access_route
reentry_right:
  n: 后续补件/纠错可重新进入内部处理队列
  x并z: 第三方可反复通过固定接口重新定位并申请同一集合
future_endpoint:
  n: 维持D的内部可管理/可保存状态
  x并z: 维持D作为公共可识别、可申请进入的对象
reality_anchor:
  - D确实由外部进入A
  - 整理/修复/编目持续发生，不是一次登记
  - 公开目录与申请入口稳定存在
  - 第三方可重复定位同一D并现实申请进入
  - 即使拿掉公共接口，内部整理负荷仍可继续
  - 即使停止内部新增整理，只要目录/接口仍真实可调用，公共壳仍可继续
```

## 3｜两端判定

```text
n: PASS 0.99
x并z: PASS 0.99
SPLIT_IR: REQUIRED 0.99
```

但必须记录为：

```text
IR-N.reality_anchor != IR-X并Z.reality_anchor
IR-N.path_set != IR-X并Z.path_set
```

允许同一事实背景被两个账本引用，但任何“决定性证据”必须能够独立回答对应箭头。

## 4｜nearest-neighbor 最小差异对

冻结：

```text
actor = A
object token = D
对象内容
法律归属
服务周期
第三方群体
```

### Pair A｜只删公共接口

```text
内部持续整理/修复/编目保持
公开目录、申请接口、稳定外部标识全部删除
```

得到：

```text
n PASS 0.99
x并z FAIL 0.98
```

### Pair B｜只删持续承载

```text
公开目录、固定标识、申请接口保持真实可调用
停止新增整理/修复/编目；对象转为封版读取
```

得到：

```text
n FAIL/OFF 0.96
x并z PASS 0.99
```

两组最小差异共同证明：两端虽可同句共现，但其成立证据可独立移除。

## 5｜removal test

### Removal-N

拿掉：

```text
sustained internal processing load
```

保留真实公共接口。

结果：

```text
x并z 不受影响
n 下降为 OFF/FAIL
```

### Removal-X并Z

拿掉：

```text
stable public shell/interface
```

保留内部持续承载。

结果：

```text
n 不受影响
x并z 下降为 OFF/FAIL
```

如果 removal 一端会自动让另一端一起消失，说明原始抽取把证据错误共用，需标记 `EVIDENCE_ENTANGLEMENT`。

## 6｜reverse test

从 `n + x并z` 双激活状态分别反转：

```text
A. public interface ON -> OFF
   carrying remains ON
   => n only

B. carrying ON -> OFF
   public interface remains ON
   => x并z only

C. both ON -> OFF
   => neither
```

反向从 neither：

```text
只恢复内部持续承载 => n only
只恢复公共接口 => x并z only
两者分别恢复 => n + x并z / SPLIT_IR
```

## 7｜freeze-third-factor

冻结以下因素，不允许参与判元：

- 是否公益/商业
- 是否家庭/机构/平台
- 是否叫“入口”“中心”“成员”
- 是否成功、受欢迎、权威
- 是否收费
- 是否有实体建筑
- 是否线上/线下
- 情绪与关系好坏

只改变：

```text
A. inbound_sustained_carrying
B. stable_public_interface_callability
```

结论随 A/B 独立变化。

## 8｜positive / negative controls

### Positive control｜双箭头真实成立

软件团队把外部 bug report 持续纳入内部 triage / 修复队列，同时通过稳定 issue tracker 让第三方反复提交、定位、追踪同一问题对象：

```text
n PASS
x并z PASS
SPLIT_IR REQUIRED
```

### Negative control A｜假承载

只把外部材料登记一个编号后立即转走，无持续内部处理负荷；但公共目录真实可调用：

```text
n FAIL
x并z PASS
```

### Negative control B｜假公共接口

内部确实持续处理对象，但所谓“官网/账号/门牌”不能让第三方稳定定位、调用或进入该对象：

```text
n PASS
x并z FAIL
```

### Negative control C｜同一名词误双判

“平台接收项目并公开项目名称”中：若公开名称不能进入项目、调用能力、归因代表或稳定定位内部对象，则不能仅因“公开/平台”判 x并z。

### Negative control D｜一条箭头偷换两条

“研究者通过入口提交材料，机构处理材料”只直接证明：

```text
researcher -> interface -> submission -> inside -> processing
```

若测试对象是“材料”，必须分别证明：

```text
n: 材料进入后产生持续承载
x并z: 第三方能通过公共壳持续识别/调用的是哪个内部对象
```

不能因为入口存在就默认材料本身拥有 x并z。

## 9｜解释器执行门

```text
STEP 1: resolve object token
STEP 2: resolve tested object_layer
STEP 3: independently search N-arrow evidence
STEP 4: independently search XZ-arrow evidence
STEP 5: run removal independence test
STEP 6: classify state
```

机器可读草案：

```yaml
earth_split_gate:
  n_required:
    - object_crosses_outside_to_inside
    - sustained_real_load_on_carrier
  xz_required:
    - stable_public_shell_or_interface
    - third_party_repeatable_identification_or_callability
    - shell_maps_to_internal_object_relation_or_capability
  split_ir_required_when:
    n_required_all: true
    xz_required_all: true
  prohibit_cross_evidence:
    public_interface_as_proof_of_n: true
    internal_processing_as_proof_of_xz: true
  removal_independence_required: true
```

## 10｜新增 failure types / guards

```text
FAILURE_SAME_SENTENCE_SINGLE_LEDGER:
同一句出现两条箭头，却只建一个IR并强迫二选一

FAILURE_INTERFACE_BACKFILL_N:
因为有公共入口，就倒推存在持续内部承载

FAILURE_CARRYING_BACKFILL_XZ:
因为内部持续处理，就倒推存在公共可调用壳

FAILURE_SHARED_NOUN_AS_SHARED_EVIDENCE:
actor/object名词相同，就把两端证据视为同一份

FAILURE_ENTRY_VERB_AS_XZ:
出现“入口/提交/进入”就判x并z，而未检查第三方是否可稳定定位/调用内部对象

FAILURE_INTAKE_VERB_AS_N:
出现“接收/纳入/登记”就判n，而未检查持续现实负荷

FAILURE_EVIDENCE_ENTANGLEMENT:
删除一端决定性证据后另一端无结构原因地一起消失

GUARD_EARTH_SPLIT_01:
双箭头同句共现必须独立建账后再合并

GUARD_EARTH_SPLIT_02:
SPLIT_IR 是两个关系成立，不是一个混合关系

GUARD_EARTH_SPLIT_03:
同一object token允许两个object_layer，但每层必须明示测试边界
```

## 11｜本轮裁定

```yaml
criterion: EARTH-DUAL-ARROW-SPLIT-IR-GATE-v0.1
finding:
  dual_arrow_sentence_requires_split_ir: true
  same_sentence_does_not_license_shared_decisive_evidence: true
  n_and_xz_are_independently_removable: true
  four_state_machine_preserved: true
  interpreter_can_use_two_relation_ledgers: true
confidence:
  structural: 0.99
  cross_domain: 0.96
l1_change_required: false
legacy_sync_debt_added: false
```

## 12｜成熟度与下一断点

本轮把土轴从“有 SPLIT_IR 理论”推进到“有自动拆分执行门”。现有研究层已具备：

```text
n only
x并z only
n+x并z / SPLIT_IR
neither
strict reversal candidate
lifecycle transitions
anti-backfill guards
independent removal test
```

土轴可标记：

```text
AXIS_MATURE_CANDIDATE
```

后续除非解释器回归出现新的土轴真实失败，不再优先机械采矿。

下一轮三轴建议按轮转回水轴；金轴与土轴均已进入 mature candidate，应优先把算力给仍未闭合的水轴 `persistent path narrowing != automatically endpoint-governed xz` 对称压力测试。