---
type: ten-yuan-fire-axis-xscope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Captain America - The Winter Soldier
character: Nick Fury
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: partial-credential-revocation-with-independent-redundant-credential
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜《Captain America: The Winter Soldier》Nick Fury｜部分凭证撤权 ≠ permission layer 已 OFF

## 0｜启动对齐

写前以 `main@538f5fe2fc9f03be8d9d45e51c9d8dc696a4626a` 为准，重读最新 commits、L0/L1 文件权力与任务门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度路由、相关关系卡/`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current 与最近 evidence。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

P0 strict-v2 本轮仍未发现 simultaneously 满足 independent zn+x、same current window、same object layer、双向缺口、subject attribution 与 competing-anchor freeze 的 ≥95 候选，因此继续不破零。本轮转入 P5/P2 邻接压力，专测上一轮 Minority Report 尚未覆盖的情况：撤权不只是“没有传播”，而是**确实已经打掉主体的一部分 credential set，但另一独立 credential 仍保留并成功满足同一权限门槛**时，能否把整个 permission layer 自动判 OFF。

## 1｜作品 / 人物 / 阶段

- 作品：《Captain America: The Winter Soldier》（2014）
- 人物：Nick Fury
- 被测对象层：Triskelion encryption-disable / safeguards-removal 的 Alpha-level authorization contribution
- current window：HYDRA/Pierce 已针对 Fury 做 clearance wipe → Fury 与 Natasha 进入 Triskelion → 系统说明 disabling encryption 需要 two Alpha Level members → Pierce 认为 Fury clearance 已被清除 → Fury 明确说自己的 password 已被 erased、主 retinal scan 可能已删 → Fury 使用长期被眼罩遮住的第二只眼作为独立 retinal credential → scanner 返回 `Alpha Level confirmed / Encryption code accepted / Safeguards removed`。

外部事实交叉：
- 影片英文 transcript：明确给出 `Disabling the encryption is an executive order. It takes two Alpha Level members.`；Pierce随后说 `You don't think we've wiped your clearance from the system?`；Fury回应 `I know you erased my password. Probably deleted my retinal scan... you need to keep both eyes open.`；随后系统确认 `Alpha level confirmed. Encryption code accepted. Safeguards removed.`
- 影片小说化文本同样描述 Pierce/Fury 双人扫描，Fury 的第二只眼此前也被 SHIELD 安全系统登记，Pierce没有预料该第二 retinal print 仍在系统中。

本轮事实不依赖 Nick Fury 的 Director 身份标签，也不把其高层职位直接视为 x。

## 2｜zn 证据

本轮不锁 `zn`。

Fury 反对 Pierce/HYDRA 的大规模牺牲方案并声称自己过去行动是为了保护人，但被测 current window 同时存在组织生存、反击 HYDRA、恢复系统控制、阻止 Project Insight 等强 competing anchors。不能仅从“保护人”“前局长”“英雄阵营”反推稳定不可让渡原则。

```yaml
zn_current: not_locked
strict_v2_verified_positive: false
strict_v2_negative: false
strict_precondition_guard: false
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 3｜x 权限结构

```yaml
actor: Nick Fury
object: Triskelion encryption-disable authorization interface
object_layer: Alpha-level authorization contribution / safeguards-removal gate

permission_type:
  password_credential:
    current_state: revoked_or_erased_by_Fury_statement
  primary_retinal_credential:
    current_state: probably_deleted_by_Fury_statement
  secondary_retinal_credential:
    current_state: retained_and_reality_tested
  contribute_alpha_authorization:
    current_state: true_reality_tested
  unilaterally_disable_encryption:
    current_state: false
  global_SHIELD_command:
    current_state: not_inferred

scope:
  tested: one mandatory Alpha-level contribution to encryption-disable gate
  not_tested: whole-system authority / unilateral global control

term:
  current Triskelion Project Insight shutdown window

revocability:
  credential_set: partially_revoked_or_targeted
  tested_secondary_retina: still_active_at_effect_time

return_obligation: n/a

same_layer_pre_effect_veto:
  second_alpha_member_required: true

global_override:
  two-Alpha-member threshold remains

ultimate_title:
  not_used

decision_structure:
  disable_encryption: mandatory_multi_node_threshold

consultation_structure:
  not_material

final_decision_structure:
  requires_two_Alpha_Level_members

execution_structure:
  Pierce_Alpha_node + Fury_secondary_retina_Alpha_node -> safeguards_removed

co_decision_nodes:
  - Alexander Pierce
  - Nick Fury

credential_distribution:
  Fury_known_password: removed_by_current_statement
  Fury_primary_retina: targeted/probably_removed
  Fury_secondary_retina: independent_surviving_credential

realized_effect_test:
  secondary_retina_accepted: true
  alpha_level_confirmed: true
  encryption_code_accepted: true
  safeguards_removed: true
```

## 4｜关键压力

错误推理：

```text
主体的常用 password 被删除
+ 常用/主 retinal credential 被针对
+ 上游宣称 clearance 已 wipe
→ 该主体在这个 permission layer 上的 x 必然整体 OFF
```

本轮否定这个自动跳步。

更精确的 current 判断必须拆 credential set：

```text
credential_A revoked
+ credential_B revoked / targeted
+ independent credential_C survives
+ C 仍可满足主体在 mandatory threshold 中自己的 node
+ downstream effect reality-test 成功
→ tested permission contribution 仍为 true
```

因此锁定：

> **partial credential revocation ≠ permission-layer OFF。只有当撤权覆盖所有能满足该 actor 当前 mandatory node 的有效 credential path，或 current interface reality-test 失败，才可把该 permission contribution 判 OFF。**

同时禁止反向倒灌：Fury 的 surviving credential 只证明他仍能完成一个 Alpha-level authorization contribution；由于系统明确要求 two Alpha Level members，不能把它写成 unilateral encryption disposition，也不能倒灌为 whole-SHIELD global command x。

## 5｜最近邻排除

### 对 Minority Report / Anderton
Anderton 锁的是 `upstream adverse status / chase state` 没有传播到单一旧 retina，故窄 entry-access 仍 true。那是 **revocation propagation gap / stale credential**。

本轮新增的是 **redundant credential topology**：即使常用 credential path 已被明确针对甚至部分删除，也不能把整个 permission layer 判 OFF，因为 actor 还存在另一条独立、当前有效且被 reality-test 的 credential path。

所以：

```text
Minority Report:
source revocation -> downstream credential not revoked

Winter Soldier:
some credential paths revoked/targeted -> independent redundant path survives
```

### 对 Ghost Protocol / Hendricks
Hendricks 是 mandatory credential 缺失 → 补全 → invocation expansion。本轮是反向结构：credential set 被削减，但因为未削到零，测试权限没有整体收缩为 false。

### 对 Ramius / credential concentration
Ramius 测的是 mandatory credential 在不同 actor 之间集中后改变 authorization topology；本轮 actor 没获得新的 credential，而是自己的多路径 credential set 被部分削减后仍保留至少一条现实有效路径。

## 6｜拿掉 / 反向

拿掉 Fury 的第二 retinal credential：若 password 与主 retina 已失效，而第二 retina 也被删除/deny-list，Fury 无法满足自己的 Alpha node，则该窄 authorization contribution 可判 contraction / OFF。

反向最干净的下一步是：

```text
same actor
+ same permission node
+ previously verified redundant path C works
→ authority rotates/revokes C as well
→ same interface repeat reality-test fails
→ permission contribution true -> false
```

这才是真正完成 `credential-subset contraction -> credential-set exhaustion -> permission OFF` 的动态链。

## 7｜第三因素冻结

冻结：
- Nick Fury 的 Director / Alpha Level 身份标签；
- Pierce 是否“应该”彻底删除全部凭证；
- Fury 的预谋、聪明、剧情反转效果；
- Natasha 的枪口与现场武力，只解释 Pierce 配合现场，不替代 Fury 的 credential reality-test；
- Pierce 作为第二 Alpha node 明确保留，因此本轮只判 Fury 的 individual threshold contribution，不把 joint gate 私有化为 Fury 单方 x；
- 最终 Project Insight 是否失败不用于证明本轮 permission。

## 8｜strict-v2 / x-scope 判定

```yaml
sample_type: partial-credential-revocation-with-independent-redundant-credential
x_scope_boundary_guard: true
x_scope_dynamic_transition: false
strict_v2_verified_positive: false
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

这是 new boundary mechanism，不是 ordinary local-access 正例堆量：它新增的是 **credential-set topology / redundancy exhaustion gate**。

## 9｜统计变化

写前以最新 Anderton 记录为 effective boundary layer：

```text
19 boundary guards / 16 independent works
```

《Captain America: The Winter Soldier》此前未进入该 current x-scope boundary work 集合；本轮机制也不同于 stale credential propagation，因此：

```text
19 / 16
+ redundant-credential partial-revocation guard: +1 / +1
= 20 boundary guards / 17 independent works
```

其他：

```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_dynamic: +0
protected_range_positive: +0
protected_range_negative: +0
```

## 10｜本轮结论

```text
credential 被撤掉一部分
≠
actor 的同层 permission 已经归零

必须继续问：
是否仍有独立 credential path？
该 path 是否能满足 actor 当前 mandatory node？
是否有 downstream reality-test？
```

这把 `credential revocation` 从二元 true/false 再拆成：

```text
credential-set size
→ surviving independent paths
→ threshold contribution
→ permission-layer effect
```

比继续收集“身份没了但门还能开”的换皮案例多一层结构信息。