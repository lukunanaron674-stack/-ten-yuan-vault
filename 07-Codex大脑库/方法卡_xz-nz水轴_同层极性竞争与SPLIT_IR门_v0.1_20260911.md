---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-candidate
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-11
updated: 2026-09-11
research_slot: strict-same-layer-polarity-competition-and-split-ir
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/xz-nz水轴研究总纲_20260904.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_closed-to-open_recovery-gate_v0.1_20260911.md
  - 14-角色库/发散引擎/研究/运行记录_十元语义解释器_xz-vs-nz_回返权极性与路径收窄分账_20260907.md
---

# xz ↔ nz 水轴｜同层极性竞争与 SPLIT_IR 门 v0.1

## 0｜本轮只解决一个问题

前序研究已经分别建立：

```text
xz：same-layer path_set 在 current_window 内持续减少、汇流、失去回退/重入接口
nz：对象特异 reentry path 被保存、恢复或重建，并真实可调用
```

但仍有一个核心解释器债务：

> 当一句自然语言同时出现“某些路径在收窄”和“某个回返接口在恢复”时，它们是否一定能作为同一条水轴上的 xz↔nz 相反操作？

本轮结论：**不一定。只有 object、object_layer、changed_variable、current_window 可严格对齐时，才允许做同轴极性竞争；否则必须 SPLIT_IR。**

本卡不修改 L1/L2 canonical，只建立 L4 判别门。

---

## 1｜current criterion

current canonical：

```text
水＝xz ↔ nz
广义变量＝可逆性与对象特异回返空间
xz＝持续收窄
nz＝保存、恢复或重建
```

严格同层竞争要求：

```text
same object
AND same object_layer
AND overlapping current_window
AND same changed_variable family
AND directly comparable path_set
```

其中 changed_variable family 本轮统一写为：

```text
object_specific_real_reversibility_space
```

在这个变量上：

```text
xz direction = callable real paths / reentry capacity progressively decrease or converge
nz direction = callable object-specific reentry paths / repair capacity preserved, restored, or rebuilt
```

若两者不共享这一层，则不是严格水轴反向，只是同句并存。

---

## 2｜强制 IR

```yaml
actor:
object:
object_layer:
current_window:
changed_variable: object_specific_real_reversibility_space
relation_source:
relation_shape:
decision_right:
path_set:
  t0:
  t1:
  t2:
reentry_right:
  t0:
  t1:
  t2:
future_endpoint:
reality_anchor:
```

额外增加研究字段：

```yaml
strict_same_layer_test:
  same_object:
  same_object_layer:
  overlapping_window:
  same_changed_variable:
  path_set_directly_comparable:
  result: PASS | FAIL_SPLIT_IR
```

---

## 3｜strict same-layer positive control｜同一旧产品的回退空间

这是结构化工程控制例，不作为现实作品 factual evidence，只作为解释器边界测试。

### T0｜开放状态

```yaml
actor: 旧产品迁移体系
object: 旧版本生产状态
object_layer: 迁移期间返回旧生产状态的现实可逆空间
current_window: 迁移开始 -> 中期 -> 切换前
changed_variable: object_specific_real_reversibility_space
relation_source: deployment_and_migration_controls
relation_shape: reversible_then_contested
path_set:
  t0:
    - rollback_snapshot_A
    - rollback_snapshot_B
    - old_api_route
    - traffic_switch_back
reentry_right:
  t0: executable
future_endpoint: new_platform_only
reality_anchor: 四条回退方式均能把同一旧产品恢复到可运行旧生产状态
```

### T1｜xz 方向

只改变：

```text
rollback_snapshot_A 删除
old_api_route 关闭
traffic_switch_back 被取消
snapshot_B 进入最后有效窗口
```

得到：

```text
4 callable paths -> 1 callable path
future_endpoint: new_platform_only 更具约束力
relation_shape: progressive_contraction_and_convergence
```

判定：

```yaml
xz: PASS
confidence: 0.98
nz: FAIL_as_current_direction
```

原因不是“系统危险”或“以后不能回滚”，而是同一旧生产状态的现实回返空间在连续窗口内真实收窄。

### T2｜nz 方向

冻结 actor、object、object_layer、future endpoint 与迁移目标，只改变：

```text
重新建立一个可验证 rollback_snapshot_C
恢复 traffic_switch_back
并完成一次真实回切测试
```

得到：

```text
1 callable path -> 3 callable paths
reentry_right: fragile -> executable
repair/recovery capacity: restored
```

判定：

```yaml
nz: PASS_as_restoration_direction
confidence: 0.97
xz: DOWN / no_longer_current_dominant_direction
```

这里 `nz` 不是人物感情型 nz，而是 L1 广义“对象特异回返空间恢复/重建”的非人物域显化。

### strict test

```yaml
same_object: true
same_object_layer: true
overlapping_window: true
same_changed_variable: true
path_set_directly_comparable: true
result: PASS
```

因此这是严格同层 `xz -> nz` 极性反转，而不是两个互不相关的故事。

---

## 4｜SPLIT_IR negative control｜关系回返恢复 + 技术路径收窄

复用既有解释器记录中的双对象结构：

```text
A：两位合伙人的原项目关系保留/恢复对象特异重入资格
B：另一个旧产品逐周关闭 API 与回退窗口
```

表面上同一句同时出现：

```text
“能回来” + “越来越没路”
```

但严格审计：

### IR-A

```yaml
object: 原项目共同协作关系
object_layer: 关系成员退出后的对象特异重入层
changed_variable: object_specific_relation_reentry_space
result: nz candidate PASS
```

### IR-B

```yaml
object: 旧产品运行/回退路径
object_layer: 技术迁移未来路径与回退接口层
changed_variable: technical_real_option_set_contraction
result: xz candidate PASS
```

strict test：

```yaml
same_object: false
same_object_layer: false
same_changed_variable: false
path_set_directly_comparable: false
result: FAIL_SPLIT_IR
```

因此：

```text
nz(A) + xz(B)
!= strict xz↔nz opposition on one object
```

必须拆成两套 IR，任何一边都不得倒灌另一边。

---

## 5｜真正的最小差异对

冻结：

```text
actor
object
object_layer
future_endpoint
migration goal
hardware
team
时间长度
```

只改一个核心变量：

```text
callable object-specific reverse/reentry capacity
```

### Pair-XZ

```text
3 -> 2 -> 1 -> 0
且不同残余路径汇向同一不可回退终点
```

→ `xz PASS`

### Pair-NZ

```text
0/1 -> 2 -> 3
且新增路径真实可调用、能把同一对象带回原状态
```

→ `nz PASS`

最小差异不是“悲观/乐观”“失去/团聚”，而是：

```text
d(real executable object-specific reversibility space)/dt
```

其方向相反。

研究层可简写：

```text
ΔR < 0 across stages + convergence -> xz candidate
ΔR > 0 through preserved/restored callable object-specific reentry -> nz candidate
```

注意：这是 L4 操作化指标，不是新增 L1 数学定义。

---

## 6｜nearest-neighbor

### z

单次“禁止回滚”裁定只是一个节点；若没有连续 path_set 收窄，不足以成为 xz。

### xn

回滚流程、审批步骤、检查节点可能显 xn；流程复杂不等于回返空间被保存或收窄。

### x并z

恢复一个公开 API / 门牌 /账号，可能只是接口外化；只有它真正恢复同一对象层的现实 reentry，才进入 nz。

### nx

沿现成恢复流程执行可显 nx；但是否恢复对象特异回返空间需要独立判 nz。

---

## 7｜removal test

### 对 strict xz

拿掉：

```text
路径逐阶段减少
路径汇流
回退资格逐步失效
```

只保留“最终还是迁到新平台”。

预期：`xz` 显著下降；只剩终局结果，不足以证明持续收窄。

### 对 strict nz

拿掉：

```text
新恢复的 rollback path
真实回切测试
对象特异 reentry_right
```

只保留“团队说以后还可以回滚”。

预期：stable/restoration `nz` FAIL。

---

## 8｜reverse test

对 xz control 最小反向：

```text
在路径持续减少途中，恢复两条真实可调用的旧状态回返路径
```

若模型仍不降低 xz，则说明它把“既定迁移终点”偷换成 xz 本身。

对 nz control 最小反向：

```text
保留“恢复回滚”措辞，但让 snapshot 已损坏、切流权限撤销、回切测试失败
```

若模型仍判 nz，则说明它被关键词诱导。

---

## 9｜freeze-third-factor

冻结：

```text
迁移团队态度
项目重要性
故障风险
领导意愿
发布时间
经济损失
情绪评价
最终迁移是否成功
```

只有这些因素实际改变：

```text
path_set
reentry_right
repair/recovery capacity
future endpoint constraint
```

才允许进入当前水轴因果链。

---

## 10｜新增 guard / failure types

### CROSS_LAYER_FALSE_OPPOSITION

人物关系 nz 与技术路径 xz 同句出现，就错误宣布 strict 水轴对立。

### SAME_SENTENCE_AS_SAME_OBJECT

同一句自然语言被误当成同一 object / object_layer。

### ENDPOINT_PERSISTENCE_AS_XZ_AFTER_RESTORATION

未来终点仍存在，就无视中途真实回返空间恢复，继续把 current direction 高判 xz。

### SYMBOLIC_REOPEN_AS_NZ

恢复“可回滚”标签、按钮或文档，但现实路径不可执行，却判 nz。

### STATIC_OPEN_SPACE_AS_RESTORATION

从头到尾路径都没关闭，只因“可以回去”就把动态恢复型 nz 证据写得过强。可作为 preserved nz 候选，但不得伪造 CLOSED→OPEN 生命周期。

### OPPOSITE_LABEL_WITHOUT_COMPARABLE_PATH_SET

只因为 canonical 说 xz↔nz，就在不可比较的 path_set 上强行制造反向关系。

---

## 11｜最小判别式

```text
STRICT_WATER_OPPOSITION
=
same object
+ same object_layer
+ overlapping current_window
+ same reversibility/reentry variable
+ directly comparable real path_set
+ opposite change direction
```

其中：

```text
xz:
real callable reversibility space decreases / converges across stages

nz:
object-specific callable reentry/recovery space is preserved, restored, or rebuilt
```

否则：

```text
SPLIT_IR
```

而不是为了五行结构漂亮就把不同对象层硬缝成一条轴。

---

## 12｜本轮裁定

```yaml
research_question: can_xz_and_nz_be_treated_as_strict_opposites_when_both_appear_in_one_sentence
answer: only_if_same_object_layer_and_same_reversibility_variable
strict_same_layer_control: PASS
cross_layer_control: FAIL_SPLIT_IR
new_mechanism: STRICT_WATER_OPPOSITION_GATE_v0.1
new_guard: CROSS_LAYER_FALSE_OPPOSITION
canonical_change_required: false
sync_debt_created: false
```

本轮信息增益：

1. 首次把 `xz↔nz` 的“对立”落到可执行 same-layer gate；
2. 证明非人物工程域也能在同一变量上出现 `xz -> nz` 极性反转；
3. 明确同句出现两端不等于 strict opposition；
4. 为十元解释器提供 SPLIT_IR 的水轴专用触发条件。

下一断点建议：

> 在 strict same-layer gate 已建立后，继续压力测试 `complete-path-exhaustion`：当多个表面接口共享同一底层依赖时，接口数量仍大于 0，但底层依赖已断，是否应视为 effective path_set = 0。重点区分“名义多路”与“独立可执行多路”。
