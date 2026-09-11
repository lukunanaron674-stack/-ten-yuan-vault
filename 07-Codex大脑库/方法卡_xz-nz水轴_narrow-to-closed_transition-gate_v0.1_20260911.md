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
research_slot: narrow-nonzero-to-closed-transition-gate
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_return-space-closure-gate_v0.1_20260911.md
  - 07-Codex大脑库/待审议问题_xz-nz_形式关系断裂与现实回返资格分离边界_20260905.md
  - 07-Codex大脑库/待审议问题_xz-nz_红楼梦宝黛关系从repair-nz到死亡hard-off但不自动成为xz生命周期护栏_20260906.md
---

# xz ↔ nz 水轴方法卡｜NARROW_NONZERO → CLOSED 时间迁移门 v0.1

## 0｜本轮只解决一个问题

已有 `return-space closure gate v0.1` 能判断一个窗口内回返空间是 `OPEN / NARROW_NONZERO / CLOSED`，但还缺时间迁移层的最小门：

> **一个原本仍有非零对象特异回返空间的关系，究竟在哪个最小现实变化上，才可以从 `NARROW_NONZERO` 真正跨成 `CLOSED`？**

本卡只补这个迁移机制；不修改 L1/L2 canonical，也不把 `nz OFF` 自动升级成 `xz ON`。

current canonical 保持：

```text
水＝xz ↔ nz
广义变量＝可逆性与对象特异回返空间
xz：持续收窄
nz：保存、恢复或重建
```

---

## 1｜迁移不是由“事件标签”触发，而由可调用资格状态改变触发

禁止：

```text
被逐出 → CLOSED
被拒绝 → CLOSED
分手 → CLOSED
离职 → CLOSED
死亡 → xz
```

正确审计对象是同一 `object_layer` 下，相邻窗口中以下字段是否发生现实变化：

```yaml
path_set:
reentry_right:
bilaterality:
repair_capacity:
reality_anchor:
```

因此最小迁移式不是：

```text
发生重大事件
→ CLOSED
```

而是：

```text
至少一个现实可调用的对象特异回返路径仍在
→ NARROW_NONZERO

随后发生现实结构变化
→ relevant callable path set = 0
AND reentry eligibility = 0
AND bilateral response = 0
AND repair capacity = 0
→ CLOSED
```

---

## 2｜强制 IR

```yaml
actor:
object:
object_layer:
current_window:
  t0:
  t1:
changed_variable: object_specific_real_reentry_space
relation_source:
relation_shape:

path_set:
  t0:
    direct_reentry:
    mediated_reentry:
    alternate_reentry:
  t1:
    direct_reentry:
    mediated_reentry:
    alternate_reentry:

reentry_right:
  t0:
  t1:

bilaterality:
  t0:
  t1:

repair_capacity:
  t0:
  t1:

future_endpoint:
reality_anchor:
transition_trigger:
```

`current_window` 必须是相邻或可解释的连续阶段，不能拿作品开头和结尾两个远端状态直接倒推中间过程。

---

## 3｜迁移门 T1—T5

### T1｜t0 必须先证明 NONZERO

若 t0 从未证明至少一个现实可调用回返接口存在，就不能声称发生了 `NARROW_NONZERO → CLOSED`；最多只能说 t1 当前是 CLOSED 候选。

### T2｜transition_trigger 必须真实改变 relevant path set

事件必须至少关闭/废止最后一个**现实可调用且对象特异**的回返路径，或使该路径失去资格。

仅增加成本、延迟、羞辱、愤怒、社会压力，不足。

### T3｜接口存在与资格存在必须同时分账

```text
contact_possible ≠ reentry_eligible
interface_exists ≠ interface_can_restore_original_relation
```

如果还有联系方式，但双方已无资格回到原关系位置，则接口不能阻止 CLOSED。

反过来，如果名义关系已 OFF，但现实中介仍有资格并可促成原关系重入，则仍至少是 `NARROW_NONZERO`。

### T4｜最后一个 path 的丢失必须伴随 bilateral / repair collapse

若最后一个 direct path 关闭，但仍有双方可接受的 mediated repair path，则不通过。

若仍能重新回应、恢复共同节奏，则不通过。

### T5｜hard-off 只关闭 nz 端，不自动打开 xz 端

`future_endpoint` 仍需独立审计：

```text
endpoint prior
＋ direction constrained by future
＋ multiple real paths progressively narrow
＋ convergence
＋ critical approach
```

缺这些，只能写：

```text
nz: CLOSED
xz: not established
```

---

## 4｜正控：宝黛 repair-nz → death hard-off

继承既有 evidence-locked，不重复新增独立作品计数。

### t0｜第三十回

```yaml
object: 宝玉↔黛玉原对象特异关系
object_layer: bilateral real-world reentry / repair
path_set:
  direct_reentry: nonzero
reentry_right: nonzero
bilaterality: present
repair_capacity: demonstrated
nz: ON
return_space: OPEN_or_nonzero
```

### t1｜第九十八回死亡后

```yaml
transition_trigger: 黛玉死亡这一现实层硬变化
path_set:
  direct_reentry: 0
  mediated_reentry: 0 for original bilateral human relationship
  alternate_reentry: 0 for original bilateral human relationship
reentry_right: 0 for original relation position
bilaterality: 0
repair_capacity: 0
reality_anchor: counterpart no longer exists as living bilateral participant
nz: hard-OFF
return_space: CLOSED
xz: not established by hard-off alone
```

这里真正造成 `CLOSED` 的不是“悲剧”或“死亡”这个词，而是：

```text
原对象本人失去现实回应资格
＋ 原关系位置无法由中介替代恢复
＋ repair capacity 归零
```

---

## 5｜反控：形式 OFF / direct denied 但 mediated path 尚存

继承《西游记》逐出控制。

```yaml
formal_relationship_status: OFF
direct_reentry: denied_or_closed
mediated_reentry: still callable
reentry_right:
  via_team_or_established_mediator: nonzero
repair_capacity: nonzero_or_recoverable
return_space: NARROW_NONZERO
```

因此：

```text
一个主要入口关闭
＋ 一次明确拒绝
≠ CLOSED
```

只要存在一个现实、对象特异、可调用且有资格促成原关系恢复的接口，就必须挡住 hard-off。

---

## 6｜nearest-neighbor

### z

某人说“永远不准回来”可能是强裁定节点，但若裁定者无能力消灭全部现实重入路径，不能替代 closure audit。

### x

控制接触、禁止当前进入、扣住资源，可能关闭局部接口，但不等于所有未来对象特异回返资格归零。

### x并z

名义壳、公共身份、合同或门牌 OFF，只说明 formal/public interface 变化；不能替代 reality return-space。

### nx

通过既有中介路径回来，其行为路线可能显 nx；本卡只记录该中介是否为真实 reentry path，不把“走中介”本身算 nz。

### legacy residue

记忆、遗愿、纪念、旧物可继续对象特异，但不恢复 bilaterality / reentry eligibility。

---

## 7｜removal / reverse / freeze-third-factor

### removal

依次拿掉：

```text
悲剧情绪
关系称谓
“绝交/死亡/逐出/分手”等标签
作者预示
单方回去愿望
```

若仍能证明 t0 非零、t1 path/reentry/bilateral/repair 四项归零，迁移保留。

### reverse

向 CLOSED 状态最小增加：

```text
一个现实可调用的对象特异 mediation path
＋ 该节点有资格恢复原关系
＋ 双方仍可能回应
＋ repair capacity > 0
```

则判定必须：

```text
CLOSED → 至少 NARROW_NONZERO
```

若不会下降，说明 closure 判定混入了结局词或情绪。

### freeze-third-factor

冻结：

```text
爱恨强度
职位
家族压力
社会评价
危险程度
距离
时间经过
第三方挑拨
剧情结局
```

只有它们真实改变 `path_set / reentry_right / bilaterality / repair_capacity` 时才进入因果链。

---

## 8｜最小判别式

```text
NARROW_NONZERO → CLOSED
=
最后现实可调用对象特异回返路径失效
＋ 原重入资格失效
＋ 双方现实回应失效
＋ 修复/重新接近能力失效
＋ 同一 object layer 上有现实锚点
```

更短机器门：

```text
last_callable_reentry_path_lost
AND reentry_eligibility_zero
AND bilateral_response_zero
AND repair_capacity_zero
=> return_space = CLOSED
```

但：

```text
return_space CLOSED
!= xz TRUE
```

---

## 9｜失败类型

```text
EVENT_LABEL_AS_CLOSURE
把分手/逐出/死亡等标签直接当 closure。

DIRECT_PATH_AS_WHOLE_PATH_SET
把 direct path 关闭误写成全部回返路径关闭。

CONTACT_AS_REENTRY
把还能联系误写成还能恢复原关系位置。

FORMAL_OFF_AS_REALITY_OFF
把名义关系/公共壳关闭误写成现实回返空间关闭。

HARD_OFF_AS_XZ
把 nz hard-off 自动倒贴成 xz。

OUTCOME_BACKFILL_TRANSITION
因为结局已知，事后把此前所有阶段写成“早已关闭”。
```

---

## 10｜本轮增量与权限结论

```yaml
new_mechanism: true
mechanism: narrow_nonzero_to_closed_temporal_transition_gate
new_independent_work: 0
new_pure_case: 0
new_strict_case: 0
uses_existing_evidence_locked_controls: true
canonical_change_required: false
sync_debt_changed: false
maturity: evidence-backed-candidate
```

本轮新增的是**时间迁移判别机制**，不是新作品采样。

L1/L2 无需修改；现有 current canonical 足以容纳该机制。

---

## 11｜下一断点

最高价值下一问题：

> **CLOSED → NARROW_NONZERO / OPEN 的“恢复门”需要恢复到什么程度，才算 nz 重新 ON？**

重点区分：

```text
只恢复 contact
只恢复 formal status
只恢复一个 mediation interface
```

与：

```text
恢复对象特异 reentry eligibility
＋ bilateral response
＋ repair capacity
```

是否足以重新建立 stable nz。
