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
created: 2026-09-12
updated: 2026-09-12
source_main: 3cd113ca333e62da00a7a3f3c5a5c743c59f3964
research_slot: local-path-decrement-vs-active-xz-trajectory
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
related_refs:
  - 07-Codex大脑库/xz-nz水轴研究总纲_20260904.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_健康共享依赖的汇流不等于current-xz_v0.1_20260911.md
---

# xz↔nz 水轴｜单次真实路径减少只记局部收窄，不等于 current xz v0.1

## 0｜本轮只解决一个问题

前序已锁：

```text
只剩一条健康稳定路径
= 低冗余 / 静态汇流
!= current xz
```

本轮继续压缩一个极易误判的最小情形：

> 同一对象的现实回返 path_set 从 3 条独立有效路径减少到 2 条，但剩余两条仍宽、稳定、可重复执行；没有前置终点继续加强、没有临界逼近，也没有证据说明 2 还会继续变 1。仅凭 `3 -> 2` 能否判 current xz？

本轮结论：**不能直接判完整 current xz。**

允许记录：

```text
LOCAL_REVERSIBILITY_DECREMENT = true
```

但必须与：

```text
ACTIVE_XZ_TRAJECTORY = false / not yet established
```

分账。

新增 L4 护栏：

```text
LOCAL-DECREMENT-NOT-TRAJECTORY-GATE-v0.1
```

核心区分：

```text
一次下降事件
!=
持续收窄轨迹
```

本卡不修改 L1/L2 canonical。

---

## 1｜current criterion

current canonical：

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异回返空间
xz = 持续收窄
nz = 保存、恢复或重建
```

current xz v2.2 主骨仍要求大部分：

```text
终点前置
+ 方向被未来规定
+ 真实路径/选择持续收窄
+ 路径汇流
+ 临界逼近
```

因此，`path_set` 在某一时点发生下降，可以作为 xz 的局部证据，但不是完整充分条件。

解释器必须区分两个证据等级：

```text
EVENT LEVEL:
path_count t0 > path_count t1

TRAJECTORY LEVEL:
current_window 内多个相邻阶段持续显示
可逆空间继续减小 / 路径继续汇流 / 终点约束继续加强
```

只有前者时，不得把“局部下降”升级成“持续命运收束”。

---

## 2｜完整 IR｜同一工程对象最小差异

以下为结构化工程控制，仅用于解释器压力测试，不冒充外部历史事实。

```yaml
actor: 旧系统迁移与回退体系
object: 同一个旧版本生产状态
object_layer: 返回旧生产状态的现实可逆空间
current_window: 迁移过程中三个相邻观察阶段
changed_variable: independent_executable_reentry_path_count
relation_source: rollback_route_availability
relation_shape: one_independent_route_removed_while_remaining_routes_stay_stable
decision_right: not_primary_variable
path_set:
  t0:
    - snapshot_A_restore
    - snapshot_B_restore
    - traffic_switch_back
  t1:
    - snapshot_B_restore
    - traffic_switch_back
  t2_negative_control:
    - snapshot_B_restore
    - traffic_switch_back
reentry_right:
  t0: broad_and_executable
  t1: reduced_but_broad_and_executable
  t2_negative_control: stable_after_reduction
future_endpoint: new_platform_only_exists_as_long_term_plan_but_not_currently_binding
reality_anchor:
  - 三条路径在 t0 均能独立恢复同一旧版本生产状态
  - t1 只关闭 snapshot_A，另外两条经实测仍可独立完成同一现实回返
  - t1 之后观察窗口内没有继续关闭、兼容衰退、倒计时或新的共享依赖汇流
  - 管理口号、风险气氛、最终迁移计划不计入 path_set
```

### State T0｜三条独立回返路径

```yaml
effective_path_count: 3
reentry_right: broad
future_endpoint_binding_strength: low
critical_approach: false
```

### State T1｜只关闭一条

```yaml
effective_path_count: 2
local_decrement: true
remaining_routes_independent: true
remaining_routes_stable: true
future_endpoint_binding_strength: unchanged
critical_approach: false
```

判定：

```yaml
local_xz_evidence: yes_as_path_reduction_event
full_current_xz: false_or_insufficient
confidence: 0.98
```

理由：发生了真实可逆空间减少，但没有证明该减少属于一个继续展开的收束轨迹。

### State T2-negative｜2 条路径长期稳定

```yaml
effective_path_count: 2
further_reduction: false
window_shrinkage: false
path_convergence: false
critical_approach: false
```

→ 反证 `3 -> 2` 本身不足以定义 current xz。

---

## 3｜最近邻最小差异对

冻结：

```text
actor
object
object_layer
future_endpoint 名称
系统重要性
风险等级
团队
UI
迁移项目
```

只改变：

```text
whether reduction continues through current_window
```

### Pair A｜局部下降但非完整 xz

```text
3 -> 2 -> 2 -> 2
```

并且：

```text
remaining 2 paths independent
remaining 2 paths stable
no shrinking deadline
no increasing endpoint constraint
```

→ `LOCAL_REVERSIBILITY_DECREMENT = true`
→ `ACTIVE_XZ_TRAJECTORY = false`

### Pair B｜真正进入 xz 轨迹

```text
3 -> 2 -> 1 -> 0
```

同时：

```text
future_endpoint = new_platform_only
gets progressively more binding
+
reentry window shrinks
+
critical point approaches
```

→ `ACTIVE_XZ_TRAJECTORY = strong candidate`

最小差异不是“有没有减少过”，而是：

```text
减少是否继续构成 current_window 内可验证的方向性序列
```

---

## 4｜removal test

### 从 Pair A 拿掉“关闭了一条”的戏剧性

只保留：

```text
3 个现实回返类
-> 2 个现实回返类
-> 后续稳定
```

结论仍然只是局部下降，不足以锁 full current xz。

### 从 Pair B 拿掉“危险”“最后机会”等词

只保留：

```text
3 -> 2 -> 1 -> 0
+
每阶段 future endpoint 约束增加
+
窗口持续缩短
```

xz 仍成立。

说明 current xz 依赖结构序列，不依赖题材语气。

---

## 5｜reverse test

对 Pair A 反向：

```text
2 -> 3
```

但要求新增路径：

- 独立；
- 现实可执行；
- 指向同一被测对象/状态；
- 不是 UI 占位；
- 不是共享同一失效依赖的伪多路。

则可记录：

```text
local_reversibility_restoration = true
```

这构成 same-variable 的反向证据，但在工程非人物域中，本轮仅标记为：

```text
water-axis restoration-like evidence / anti-xz direction
```

不越权直接升级成 current `nz v2.0` 的稳定关系端点，因为 nz 信息卡当前仍明确要求对象特异关系、现实退出/回返、修复与双方性。

若未来跨非人物域要把该方向正式归为广义 nz，应另开“L1 broad nz vs relation-domain nz card”专项，不在本轮偷渡。

---

## 6｜freeze-third-factor

冻结以下变量：

- “只少了一条很危险”的主观感觉；
- 最终项目计划是否会完全迁移；
- 管理层是否说“以后不回滚”；
- 路径名称数量；
- 是否叫最后备份；
- 系统规模；
- 操作者紧张程度；
- 一次关闭是否不可逆。

允许进入判定的变量只有：

```text
independent executable path count
path independence
remaining path viability
reentry window change
future endpoint binding strength
critical approach
trajectory continuity across current_window
```

---

## 7｜positive / negative controls

### negative control 1｜一次真实减少后稳定

```text
3 -> 2 -> 2
remaining 2 stable
```

→ 局部收窄 PASS
→ full current xz FAIL / insufficient

### positive control｜持续收束

```text
3 -> 2 -> 1 -> 0
```

且终点约束越来越强、窗口越来越窄。

→ current xz strong candidate

### negative control 2｜名义接口减少，现实路径不变

```text
UI buttons: 3 -> 2
independent executable path classes: 2 -> 2
```

→ 连局部收窄都 FAIL

### negative control 3｜只减少路径，但同时新增等价独立回返

```text
remove A
add D
independent effective classes: 3 -> 3
```

→ reality reversible space 没有减少
→ xz reduction evidence FAIL

### reverse control｜真实新增独立路径

```text
2 -> 3
```

且新增路径经现实恢复测试成立。

→ local restoration evidence PASS
→ current xz 下降

---

## 8｜失败类型

```text
ANY_DECREMENT_AS_FULL_XZ
= 只要 path count 从 3 变 2 就判完整 xz。

EVENT_AS_TRAJECTORY
= 把一个离散下降事件偷换成“持续收窄”。

UI_COUNT_AS_REAL_PATH_COUNT
= 名义按钮/接口减少一项就写 path_set 下降。

PATH_REMOVAL_WITH_REPLACEMENT_IGNORED
= 关闭 A 的同时新增真实独立 D，却仍只看“少了 A”判收窄。

LONG_TERM_ENDPOINT_AS_CURRENT_BINDING
= 项目最终会迁移，就倒推 t1 已被 future endpoint 强约束。

IRREVERSIBLE_SINGLE_CHANGE_AS_XZ
= 一次删除不可逆，就把“变化不可逆”误判成“未来持续收束”。

LOCAL_EVIDENCE_UPGRADED_TO_ENDPOINT
= 局部 xz 证据被直接升级为人物/系统稳定 xz 端点。
```

---

## 9｜最小判别式

解释器先分两层：

```text
local_decrement =
count(effective_independent_paths_t1)
<
count(effective_independent_paths_t0)
```

但：

```text
local_decrement
!=
active_xz_trajectory
```

active xz 至少还要继续检查：

```text
trajectory_continuity
+
future_endpoint_preposition
+
reentry_window_shrinkage_or_equivalent_capacity_loss
+
path_convergence_or_repeated_choice_loss
+
critical_approach
```

最短门：

> **“少了一条路”只能证明少了一条路。要判 xz，必须证明‘路正在继续变少，而且这个减少正把当前推向一个越来越有约束力的前置终点’。**

---

## 10｜本轮裁定

```yaml
research_question: is_one_real_path_reduction_from_3_to_2_sufficient_for_current_xz
answer: no
new_guard: LOCAL-DECREMENT-NOT-TRAJECTORY-GATE-v0.1
new_boundary:
  local_reversibility_decrement: valid_xz_evidence_fragment
  sustained_current_xz_trajectory: not_established_by_single_decrement
xz:
  3_to_2_then_stable: insufficient_for_full_current_xz
  3_to_2_to_1_to_0_with_endpoint_binding: strong_candidate
nz:
  reverse_2_to_3: restoration-like_same-variable_evidence_only_in_this_nonhuman_domain
  stable_nz_v2_endpoint: not_claimed
confidence:
  boundary: 0.98
l1_change_required: false
l2_change_required: false
sync_debt_created: false
```

---

## 11｜下一断点

下一轮优先处理：

> **repair-nz 到 hard-off 的生命周期转换：一段对象特异关系曾真实允许自由退出、现实回返和修复；随后不是“没有恢复”，而是回返资格本身被现实关闭。在哪个最小状态变化点，current nz 从 ON 变为 OFF？这是否同时自动构成 xz？**

重点拆分：

```text
nz OFF
!=
xz ON
```

并要求同一 object_layer / same relation / same current_window 做：

```text
repairable
-> return path degraded
-> return path closed
```

以测试“回返资格关闭”与“主动持续收窄轨迹”是否必须分别判定。
