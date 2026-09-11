---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-boundary-guard
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-11
updated: 2026-09-11
source_main: f906290d55875e228643dc0e7efa091dcd12d60e
research_slot: shared-dependency-effective-path-exhaustion
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
related_refs:
  - 07-Codex大脑库/xz-nz水轴研究总纲_20260904.md
  - 07-Codex大脑库/待审议问题_xz-nz_单接口减少不等于路径集收窄_拓扑影响门_20260911.md
  - 07-Codex大脑库/待审议问题_xz-nz_三国演义关羽麦城大路未冻结导致complete-path-exhaustion不足修正_20260906.md
  - 07-Codex大脑库/待审议问题_xz-nz_三国演义吕布下邳完整逃脱路径逐步耗尽pure-xz正控_20260906.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_同层极性竞争与SPLIT_IR门_v0.1_20260911.md
---

# xz↔nz 水轴｜共享依赖导致“名义多路、实际归零”门 v0.1

## 0｜本轮只解决一个问题

前序拓扑门已确认：

```text
接口数量减少 ≠ 自动 xz
```

并已把 `shared-dependency exposure` 登记为可能的拓扑收窄机制，但尚未解决一个更尖锐的问题：

> 当 path_set 表面仍有多个接口，但这些接口全部依赖同一个已失效的底层现实条件时，是否应视为 complete-path-exhaustion？

本轮结论：**是，但必须把 path_set 从“名义接口集合”改写为“独立可执行路径集合”后再判。**

因此新增 L4 门：

```text
EFFECTIVE-PATH-INDEPENDENCE-GATE-v0.1
```

本卡不修改 L1/L2 canonical，只补解释器判定纪律。

---

## 1｜current criterion

current canonical 仍是：

```text
水 = xz ↔ nz
广义变量 = 可逆性与对象特异回返空间
xz = 持续收窄
nz = 保存、恢复或重建
```

current xz 主骨仍要求：

```text
终点前置
+ 方向被未来规定
+ 真实路径/选择持续收窄
+ 路径汇流
+ 临界逼近
```

因此，`complete-path-exhaustion` 不能按 UI 数量、门数量、按钮数量或名义方案数量计算，而要按：

```text
independent executable path classes
```

计算。

---

## 2｜核心区分：nominal path_set vs effective path_set

定义 L4 研究字段：

```text
nominal_path_set
= 文档、界面、口头方案、入口名称中仍被枚举的路径

effective_path_set
= 在当前现实条件下，具有独立可调用依赖链并能真正到达被测目标/回返状态的路径
```

若三个名义接口：

```text
A = 一键回滚
B = 手工恢复
C = 灾备切换
```

实际上都依赖：

```text
D = 同一份有效旧数据库快照
```

而 D 已损坏，则：

```text
nominal_path_count = 3
effective_independent_path_count = 0
```

此时不能因为“按钮还有三个”写 `path_set > 0`。

---

## 3｜完整 IR｜工程正控

这是结构化工程控制，用于测试解释器，不冒充外部历史事实证据。

```yaml
actor: 旧系统迁移与灾备体系
object: 同一个旧版本生产状态
object_layer: 返回该旧生产状态的现实可逆空间
current_window: 迁移中期 -> 底层旧快照失效 -> 名义接口仍保留
changed_variable: independent_executable_reentry_path_count
relation_source: rollback_and_disaster_recovery_architecture
relation_shape: nominal_multi_path_collapses_through_shared_dependency
decision_right: not_primary_variable
path_set:
  nominal:
    - one_click_rollback
    - manual_restore
    - disaster_recovery_switch
  dependency_graph:
    one_click_rollback: [valid_legacy_snapshot]
    manual_restore: [valid_legacy_snapshot]
    disaster_recovery_switch: [valid_legacy_snapshot]
  effective_before_failure:
    - shared_snapshot_backed_restore_class
  effective_after_failure: []
reentry_right:
  before: executable_but_dependency_concentrated
  after: zero
future_endpoint: new_platform_only
reality_anchor:
  - 三个入口都必须依赖同一有效旧快照才能回到同一旧生产状态
  - 快照失效后，三个入口即使仍显示/仍可点击，也无法完成现实回返
```

### 判定

在底层依赖失效之后：

```yaml
nominal_path_count: 3
independent_path_classes: 0
reentry_right: 0
complete_path_exhaustion: PASS
effective_xz_narrowing: PASS
confidence: 0.98
```

但要注意：**单个瞬间依赖故障本身仍不足以单独证明完整 current xz。**

若要判强 xz，还应在 current_window 中看到此前真实可逆空间已经持续收窄、依赖集中度上升，且 `new_platform_only` 这一未来终点越来越占据结构地位。

所以：

```text
shared dependency failure
= complete-path-exhaustion 的强证据
≠ 自动替代 xz 的全部主骨
```

---

## 4｜最近邻最小差异

冻结：

```text
actor
object
object_layer
三个名义入口
UI
团队
迁移终点
时间窗
```

只改变底层依赖独立性。

### Pair A｜伪多路

```text
A -> D
B -> D
C -> D
D fail
```

得到：

```text
nominal = 3
effective = 0
```

→ complete-path-exhaustion PASS。

### Pair B｜真多路

```text
A -> D1
B -> D2
C -> D3
D1 fail
D2, D3 remain executable
```

得到：

```text
nominal = 3
effective = 2
```

→ complete-path-exhaustion FAIL；只能写局部收窄。

最小差异不是接口数量，而是：

```text
dependency independence
```

---

## 5｜nearest-neighbor

### x

单个底层资源被关闭/损坏可表现为局部 `x` 边界事件；只有当它通过共享依赖真正把更大 path_set 压到 0 或显著压窄，才进入 xz trajectory 审计。

### z

“管理员宣布旧系统不可回退”是单点裁定；若底层现实回返路径仍独立可执行，只凭声明不能判 complete exhaustion。

### xn

三个流程节点、三个恢复步骤、三个界面入口可以显现流程分布；但流程数量不等于独立可逆路径数量。

### nz

若随后新建一个不依赖 D 的独立快照 D4，并实测能恢复同一旧生产状态，则：

```text
effective_path_set: 0 -> 1
reentry_right: 0 -> executable
```

这才是 same-layer restoration nz 候选，而不是重新显示旧按钮。

---

## 6｜removal test

拿掉：

```text
按钮名称
灾备术语
危险感
故障严重性
最终迁移成功/失败
```

只保留依赖图：

```text
A/B/C -> D
D = 0
```

则有效路径仍为 0。

反过来，拿掉共享依赖，让：

```text
A -> D1
B -> D2
C -> D3
```

只使 D1 失效，则 effective path_set 仍非零，complete exhaustion 必须下降。

---

## 7｜reverse test

对正控最小反向：

```text
保持 A/B/C 三个旧入口不变
新增独立底层依赖 D4
并让 B 改接 D4
完成一次真实回返测试
```

若模型仍写：

```text
complete_path_exhaustion = true
```

则说明模型在数历史失败，而不是判断当前有效 path_set。

正确结果：

```text
effective_path_count: 0 -> 1
complete_path_exhaustion: false
nz restoration evidence: rises
```

---

## 8｜freeze-third-factor

冻结以下因素，不得倒贴：

- 操作者信心；
- 风险等级；
- UI 是否还显示入口；
- 管理层是否希望迁移成功；
- 系统是否“看起来不可逆”；
- 最终是否真的迁移成功；
- 名义上是否还有“灾备方案”；
- 故障名称和题材严重度。

只允许这些现实结构改变判定：

```text
底层依赖是否有效
路径之间是否独立
路径能否真正执行到目标状态
reentry_right 是否为正
future_endpoint 是否因有效路径归零而进一步占据结构地位
```

---

## 9｜正控 / 反控

### positive control

工程依赖图：

```text
A/B/C 三个名义恢复入口
全部共享 D
D 失效
=> effective_path_set = 0
```

若此前已有连续收窄与终点前置，则 strongly supports current xz complete-exhaustion phase。

### negative control 1｜独立依赖仍存

```text
A -> D1
B -> D2
C -> D3
D1 fail
```

D2/D3 可实测执行。

→ `complete-path-exhaustion FAIL`。

### negative control 2｜关羽麦城

文本仍明确枚举未实证关闭的大路；没有证据证明“大路/小路”共享同一个已经失效的底层现实依赖，因此不能把“小路耗尽”偷换成 effective path_set = 0。

### positive-neighbor｜吕布下邳

其价值仍在于多个现实 path class 逐步退化、外援/突围/城防/内部控制等功能类别被压缩；本轮不反向把它重写成“单一共享依赖故障”。

---

## 10｜新增失败类型

```text
NOMINAL_PATH_COUNT_AS_EFFECTIVE_COUNT
  把三个按钮/三个方案直接当三条独立可执行路径。

SHARED_DEPENDENCY_BLINDNESS
  忽略多条名义路径依赖同一已失效底层条件。

UI_PRESENCE_AS_REENTRY_RIGHT
  入口仍显示，就误判现实回返资格仍非零。

DEPENDENCY_FAILURE_AS_FULL_XZ
  一个共享依赖瞬间失效，就跳过终点前置与持续收窄，直接把完整 xz 判满。

HISTORICAL_EXHAUSTION_STICKINESS
  新独立路径已恢复，仍因过去曾归零而继续写当前 complete exhaustion。

DEPENDENCY_NAME_MULTIPLICATION
  同一底层依赖被包装成多个流程名称后，错误计为多个独立 path class。
```

---

## 11｜最小判别式

```text
complete-path-exhaustion
≠ nominal_path_count == 0
```

而是：

```text
complete-path-exhaustion
=
count(independent executable paths to the same tested object/state) == 0
```

共享依赖折叠规则：

```text
A/B/C -> same D
D fail
=> effective {A,B,C} = 0
```

但：

```text
A->D1, B->D2, C->D3
D1 fail, D2/D3 executable
=> effective path_set > 0
```

对 current xz 的最短约束：

> **先画 dependency graph，再数 path。名义多路不等于现实多路；底层共因归零可以使 complete-path-exhaustion 成立，但 complete exhaustion 仍只是 xz 主骨之一，不能替代持续收窄与终点前置。**

---

## 12｜本轮裁定

```yaml
research_question: can_multiple_nominal_interfaces_count_as_nonzero_path_set_when_all_share_one_failed_dependency
answer: no
new_mechanism: EFFECTIVE-PATH-INDEPENDENCE-GATE-v0.1
new_boundary:
  nominal_path_set: must_not_be_used_directly_for_exhaustion
  effective_path_set: independent_executable_paths_only
complete_path_exhaustion: true_when_effective_path_set_zero
current_xz: supported_if_progressive_narrowing_and_endpoint_foregrounding_also_hold
current_nz: false_unless_real_independent_reentry_is_preserved_or_restored
canonical_change_required: false
sync_debt_created: false
confidence: 0.98
```

---

## 13｜下一断点

下一轮优先压力测试：

> **“共享依赖只剩一个，但尚未失败”是否已经足够构成 xz 路径汇流/临界逼近，还是只能记为脆弱集中度上升？**

需要区分：

```text
single common dependency still healthy
vs
single common dependency entering closing window
vs
common dependency actually failed
```

目标是防止把“单点故障风险”重新滑回旧火药桶口径。