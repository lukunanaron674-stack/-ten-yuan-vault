---
type: zn-x-fire-axis-xscope-dynamic-transition-control
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
knowledge_status: evidence-locked
status: current-control
sample_type: x-scope-dynamic-exit-transition
work: Pokemon Legends Arceus
actor: Akari/Rei player protagonist
stage: caught-Pokemon-in-pasture -> explicit release -> object exits managed set
mechanism: disposition-exercise-self-terminates-future-x-on-same-object
fact_confidence: 99
classification_confidence: 98
strict_v2_verified_positive_increment: false
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: false
updated: 2026-09-01
---

# zn ↔ x｜x-scope 动态退出｜Pokémon Legends: Arceus

## 0｜本轮结论

本轮不是普通“捕获后归我”的重复正例，而是上一轮捕获 control 的严格反向生命周期：

```text
同一 actor + 同一已捕获 object

persistent party/pasture managed membership
+ standing use/assignment/storage interface
+ release/disposition permission
↓ actor 主动执行 release
object 退出原 managed set
↓
原 actor 对该 object 的后续 party/pasture management x 终止
```

锁定新机制：

> **主体可以通过行使真实 disposition `x`，主动终止自己对同一对象的后续 current `x`。**

因此：

```text
having disposition x now
≠ x must persist after disposition is exercised

exercise of x
can be the causal node that ends later x
```

这不是“能力下降”“任务来源变化”“名义授权撤回”或第三方强制夺权，而是 **self-terminating disposition transition**。

## 1｜外部事实

官方 Pokémon Legends: Arceus gameplay 页面明确：玩家捕获大量 Pokémon 后，队伍只能携带六只，其余被留在 Pastures；这说明被捕获对象进入持续可访问的 party/pasture 管理集合。

第三方高一致性玩法资料（GameSpot、Game8、Bulbapedia）进一步一致记载：玩家可在 Pastures / base camp 选择已捕获 Pokémon 并执行 `Release`；确认后，对象被从 Pastures 移除并“released back into the wild / set free”。

本轮不从“release”这一词面直接判 x，而只使用其可观察对象状态变化：

```text
pre: object 在 actor 的 caught-Pokémon managed set 内
post: 经 actor 发起并确认 release 后，object 不再留在该 managed set
```

## 2｜x 权限结构

```yaml
actor: Akari / Rei 玩家主角
object: 同一只已经捕获、当前位于 party/pasture managed set 的 Pokémon

permission_type:
  pre_release:
    possess_membership: true
    party_assignment: true
    pasture_storage_management: true
    recall_into_party_or_storage: true
    release_disposition: true

  post_release:
    possess_membership: false
    party_assignment: false
    pasture_storage_management: false
    recall_into_managed_set_without_new_acquisition: false
    release_disposition: no_longer_applicable_on_same_object_under_old_membership

scope:
  pre: specific caught object inside managed set
  post: object outside prior managed set

term:
  pre: from successful catch until release/transfer/other lifecycle exit
  post: after confirmed release

revocability:
  pre: actor can terminate membership through release
  post: old membership is ended; re-entry would require a new acquisition event

return_obligation:
  none shown for tested release interface

same-layer_pre-effect_veto:
  no mandatory same-layer co-approval demonstrated for ordinary release selection/confirmation

global_override:
  game/system rules constrain eligible objects and UI, but no independent same-layer final veto node is demonstrated for ordinary release

ultimate_title:
  not inferred as metaphysical/permanent ownership

decision_structure:
  tested release decision = unilateral actor-side selection/confirmation

consultation_structure:
  none required for tested ordinary release

final_decision_structure:
  actor confirms release on tested layer

execution_structure:
  release command -> game state removes object from managed set

co-decision_nodes:
  none demonstrated on tested layer

scope_transition:
  persistent managed-set membership
  -> actor exercises disposition
  -> membership terminated / former management permissions no longer apply
```

## 3｜对象层 / current window

对象层固定为：

```text
同一只已捕获 Pokémon
×
party/pasture possession-management membership
```

不跨到：

- Pokémon 对战服从；
- 友好度；
- 图鉴记录；
- 物种所有权；
- 世界观中的永久产权；
- “训练家身份”。

current window 固定为：

```text
对象已经成功捕获并在 managed set 内
→ 玩家执行 release
→ release 后对象退出该 set
```

## 4｜关键压力：处分 `x` 与持续 `x` 必须拆账

若只写：

```text
x = true
```

会产生一个表面悖论：

> 玩家既然拥有 release/disposition `x`，为什么 release 后反而“失去 x”？

答案是 permission lifecycle 必须拆开：

```text
时点 A：
对同一对象拥有 disposition permission

A 中执行 disposition
↓

时点 B：
原 possession / storage / party-management relation 被终止
```

即：

> **某项 `x` permission 的成功行使，可以改变对象 membership，使其他同对象 `x` permission 在下一 current window 失效。**

这不是自相矛盾，而是动态状态迁移。

## 5｜最近邻排除

### 5.1 vs 上一轮 Pokémon capture

上一轮：

```text
external wild object
-> successful catch
-> persistent managed-set membership
```

本轮：

```text
persistent managed-set membership
-> actor-side release disposition
-> object exits managed set
```

两者组成同一对象生命周期的正反桥，但本轮是新的 **self-termination by disposition**，不是捕获机制的第2个普通正例。

### 5.2 vs Eduardo dilution

Eduardo 是：

```text
same asset family
quantitative ownership share 34.4% -> 0.03%
```

本轮不是 quantity contraction，而是特定对象 membership 从 inside -> outside。

### 5.3 vs Ripley time-lock

Ripley 是外部时间阈值导致 revoke permission `true -> false`。

本轮恰好相反：actor 在 permission 仍为 true 时主动行使它，并由此终止后续 object-membership x。

### 5.4 vs Dumbledore external override insertion

本轮无 external superior、无 mandatory third-party veto insertion、无 formal authority reassignment。

### 5.5 vs capability contamination

没有“能力变弱所以失去 x”。release 前后技术能力不是判定核心；真正变化是 same object 是否仍在 actor 的 persistent managed set。

## 6｜拿掉测试

拿掉 `release` 的现实 state-change，只保留：

```text
玩家点击按钮 / 动画出现 / 表示想放生
```

若对象仍留在 pasture/party managed set，则不能判 transition。

真正支撑本轮的是：

```text
release confirmed
-> object 被移出 managed set
-> old assignment/storage interface 不再对该 object 生效
```

因此 effect-test 必不可少。

## 7｜反向测试

若所谓 release 后：

- 对象仍可直接从原 Pasture 召回；
- 仍保持原 party/pasture membership；
- 或只是隐藏、停用、临时下架；

则不是 x exit，只能判 interface state change。

反过来，如果之后要重新把同一对象纳入 managed set，必须发生新的 acquisition/capture/transfer 等现实节点，则支持原 x 已经在 release 时终止。

## 8｜第三因素冻结

冻结：

- Galaxy Team 身份；
- Pokédex 任务；
- Marie / base-camp NPC 的界面协助；
- 奖励 Grit items；
- Pokémon 稀有度；
- 玩家偏好；
- 战斗能力；
- 友好度；
- “训练家”标签。

只保留：

```text
pre existing managed membership
+ actor-side release permission
+ confirmed release effect
+ post membership exit
```

结论仍成立。

NPC/UI 是执行接口，不自动构成 same-layer co-decision node；若未来证据显示 release 需要独立主体逐对象批准，需重开 decision-structure 判定。

## 9｜zn 判定 / strict-v2

本轮不锁 `zn`。

“完成 Pokédex”“研究 Pokémon”“珍惜伙伴”“自由放生”等都可能是任务、情绪、主题或局部目的，未达到 current `zn` ≥95 的独立原则门。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
```

所以 strict-v2 verified positive 继续保持 `0 / 0 works`。

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: false
```

原因：

- 当前 criterion `current-x-scope-distinction-v1_20260830` 下，这是新的动态 transition mechanism；
- 但《Pokémon Legends: Arceus》已经由上一轮 capture control 进入 independent-work 集合，因此本轮只增加 control，不重复增加 work。

按本轮启动时 latest current registry：

```text
11 controls / 10 works
```

上一轮 capture control 尚未被 registry 正式吸收，但 evidence-layer 已是：

```text
12 controls / 11 works
```

本轮新增 release control 后 evidence-layer：

```text
13 controls / 11 independent works
```

不改 L1/L2 canonical；A10 已 pending-review，本轮只记录新机制 evidence。

## 11｜本轮新增校准

```text
one-shot action
can create persistent x

persistent x
can include a disposition permission

exercise of that disposition permission
can terminate the same object's later x membership
```

进一步压成一句：

> **`x` 的处分端不是只证明“我能对对象做什么”，还可能成为“我主动结束对象归我掌握”的真实退出节点。**

## 12｜参考链

仓库 current：
- `AGENTS.md`
- `07-Codex大脑库/十元理论每小时执行门禁协议_v1.0_2026-07-28.md`
- `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`
- `01-十元系统/01-十元信息卡/【zn信息量卡v2】.md`
- `01-十元系统/01-十元信息卡/【x信息量卡v2】.md`
- `01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md`
- `01-十元系统/03-十元准度卡/x_准度卡_v0.1.md`
- `07-Codex大脑库/zn-x火轴待审议清单.md`
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x-xscope权限类型范围期限与最终归属分层边界_20260830.md`

外部事实：
- Pokémon Legends: Arceus 官方 gameplay：捕获后 party 最多6只，其余留在 Pastures。
- GameSpot / Game8 / Bulbapedia：Pasture 内可选择并确认 release；对象随后从 Pasture 管理集合退出 / returned to wild。

TASK_DONE: FIRE-ZN-X-XSCOPE-POKEMON-RELEASE-SELF-TERMINATING-DISPOSITION-20260901
