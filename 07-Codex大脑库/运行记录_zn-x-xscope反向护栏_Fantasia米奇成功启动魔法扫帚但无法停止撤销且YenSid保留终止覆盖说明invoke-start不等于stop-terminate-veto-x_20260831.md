---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
work: Fantasia (1940) / The Sorcerer's Apprentice
character: Mickey Mouse
stage: broom-enchantment window, from successful animation/task invocation to Yen Sid's termination of the runaway process
sample_type: x-scope-negative-boundary-guard
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
strict_verified_positive_increment: false
zn_increment: false
created: 2026-08-31
---

# 运行记录｜Fantasia 米奇：成功 invoke/start ≠ 对同一过程拥有 stop/terminate/veto x

## 1｜本轮问题

压力测试：主体已经成功启动一个执行节点、让它按自己的要求工作，是否可以据此把 `invoke/start x=true` 自动升级为对同一执行节点拥有稳定 `stop / terminate / revoke / veto x=true`？

本轮判定：**不能。**

在《Fantasia》的 “The Sorcerer's Apprentice” 段落中，Mickey 成功用魔法使 broom 活化，并让它持续替自己提水。这个现实效果足以证明 Mickey 在该节点拥有真实的 **invoke/start/task-initiation** 接口；但当过程失控、提水继续并造成洪水时，他无法让 broom 停止。Disney 官方视频简介把该段概括为 Mickey 想出一个办法，随后“ends in chaos”；IMDb 的剧情梗概进一步明确，他让 broom 活起来提水，却不知道/忘了停止它的魔法，最终淹了城堡。Mickey 试图以物理方式砍碎 broom 也未恢复稳定控制，反而出现更多 broom；最后由 Yen Sid 返回并终止失控过程。

因此锁定：

```text
invoke / start / assign-task x = true

but

stop / terminate / revoke / veto x = false / not locked
stable full-lifecycle command x = false / not locked
```

这不是说 Mickey 对 broom “完全没有 x”，而是把同一对象上的 permission type 按过程阶段拆开：**能启动，不代表能停止。**

## 2｜事实链

### 节点 A｜启动成功

- Mickey 原本需要亲自搬运水桶。
- 他利用 Yen Sid 的魔法方法使 broom 活化。
- broom 接受了“搬水”这一任务并持续执行。
- 该行为真实替代 Mickey 的人工劳动，而不是仅有咒语、姿态或名义授权。

可观察结果：

```text
Mickey command/invocation
→ broom activated
→ assigned water-carrying behavior begins
→ invoke/start effect-test passed
```

因此 `invoke/start x=true` 可以独立锁定。

### 节点 B｜停止失败

- Mickey 睡着后，broom 仍持续按原任务搬水。
- 水量失控并形成洪水。
- Mickey 无法通过同一魔法接口稳定停止该过程。
- 他尝试砍碎 broom，但这并没有恢复控制，反而出现更多继续执行的 broom。

可观察结果：

```text
process already running
+ subject wants termination
→ subject cannot make same process stop
→ stop/terminate effect-test fails
```

### 节点 C｜第三方真正终止

- Yen Sid 返回。
- Yen Sid 终止失控魔法并恢复场景秩序。

因此本窗存在明确的 superior/competing termination node：

```text
Mickey = successful initiator
Yen Sid = effective termination / global-override node
```

不能把 Yen Sid 的终止能力 posthoc 打包进 Mickey 的 `x`。

## 3｜x-scope 固定拆分

```yaml
actor: Mickey Mouse
object: enchanted broom / water-carrying execution process

permission_type:
  confirmed:
    - invoke
    - start
    - task-initiation
    - initial command assignment
  tested_but_not_locked:
    - stop
    - terminate
    - revoke
    - veto ongoing execution
    - full lifecycle command

scope:
  confirmed: initiation of the broom's water-carrying task
  not_inferred: complete lifecycle control over the running process

term: current broom-enchantment/runaway-water window
revocability:
  task_permission: Mickey cannot demonstrate reliable revocation once process is running
return_obligation: N/A

same_layer_pre_effect_veto:
  start_act: none observed
  termination_act: Mickey lacks verified effective stop node

global_override:
  actor: Yen Sid
  effect: successfully terminates runaway magical execution

ultimate_title:
  broom/property title: irrelevant to tested process-control permission

decision_structure:
  start: unilateral Mickey invocation is sufficient to begin task
  stop: unilateral Mickey decision is insufficient to terminate task

consultation_structure: none material
final_decision_structure:
  start: Mickey unilateral
  termination: Mickey unilateral intent does not produce final effect

execution_structure:
  start: Mickey spell/interface -> broom autonomous repeated execution
  ongoing: broom continues without repeated Mickey approval
  termination: Yen Sid effective override

co_decision_nodes: none required for Mickey's initial start
independent_execution_nodes:
  - enchanted broom process after initiation
competing_anchor:
  - Yen Sid superior termination/control capability

realized_effect_test:
  invoke_start: passed
  stop_terminate: failed for Mickey
  superior_termination: passed for Yen Sid

causal_mapping_verified:
  Mickey invocation -> broom starts task: true
  Mickey stop intent -> broom stops task: false
  Yen Sid intervention -> runaway process stops: true
```

## 4｜对象层 / 当前窗口

### 对象层

本轮只测试：

> **同一个 enchanted broom execution process 的 lifecycle permissions。**

不测试 Mickey 是否拥有整间工作室、魔法体系、Yen Sid 的身份、扫帚产权或“全部魔法能力”。

### 当前窗口

从 broom 被成功活化并开始搬水，到 Yen Sid 返回并终止失控过程。

窗口必须冻结在这一段，因为后续学习、角色成长或其他作品中的魔法能力不属于同一 current x。

## 5｜最近邻排除

### 5.1 不是 Earth King Kuei 的重复

Earth King 控制证明的是：

```text
one-shot successful command effect
≠ stable organizational command x
```

本轮不是 competing loyalty 导致组织控制不稳。broom 并不存在“忠于另一个政治节点”的普通组织关系。

本轮新机制是：

```text
同一主体
+ 同一对象/执行过程
+ 同一 current window

start permission = realized
stop permission = not realized
```

因此新增的是 **lifecycle permission asymmetry**，不是又一个 one-shot compliance 案例。

### 5.2 不是 The Dark Knight 的 interface-mapping 未验证

《The Dark Knight》渡轮护栏卡在：remote 在手，但 remote→target 的 causal mapping 没有真实 effect-test。

本轮恰好相反：Mickey 的 start causal mapping 已经被真实效果验证。

```text
Mickey invocation
→ broom starts
```

问题发生在另一种 permission：

```text
Mickey wants stop
→ broom does not stop
```

所以不是“接口映射未知”，而是**不同 permission type 的效果测试结果不同**。

### 5.3 不是 Frodo possession/use vs destruction 的换皮

Frodo 控制是对象处分类型分层：

```text
possession/use
≠ destruction-disposition
```

本轮进一步证明生命周期型 permission 也必须拆：

```text
invoke/start
≠ stop/terminate/revoke
```

两者共同支持 `permission_type universality = false`，但失败机制不同。

## 6｜拿掉测试

### 拿掉 `invoke/start x`

若 Mickey 没有真实启动接口，就无法解释 broom 为什么会从普通工具变成持续执行搬水任务的自主节点。

因此 `invoke/start x` 对观察结果是必要的。

### 拿掉“full-lifecycle x”假设

只保留：

```text
Mickey can start
+ broom thereafter runs autonomously
+ Mickey cannot stop it
+ Yen Sid can stop it
```

全部事实仍然得到完整解释。

因此没有必要、也没有资格额外假设：

> Mickey 对 broom 拥有稳定 full-lifecycle command x。

## 7｜反向测试

若要把同类案例升级成 stable full-lifecycle command `x=true`，至少需要出现：

```text
subject can start process
+
subject can pause/stop/revoke same process
+
termination effect is repeatably attributable to subject
+
no same-window superior node is required to finish termination
```

仅有“我让它开始了”不够。

同理，仅有“我能把它关掉”也不能自动推出我拥有 start / configure / transfer 等其他 permission types。

## 8｜第三因素冻结

冻结：

- Mickey 是学徒的身份标签；
- Mickey 是否懒惰、聪明、冒进；
- 该段的喜剧效果；
- Yen Sid 是师父；
- 魔法题材；
- 最终有没有恢复秩序；
- Mickey 后续是否受罚；
- 作品主题或人物成长。

只保留可观察因果：

```text
start succeeds
→ ongoing process becomes autonomous
→ subject stop fails
→ superior node stops process
```

结论不变。

## 9｜zn 独立检查

本轮 `zn` 不锁。

Mickey 想偷懒、想模仿师父或失控后想补救，都不足以证明一条：

- 无外部奖励/观看仍成立；
- 在冲突中能排序其他选项；
- 跨阶段保留未来调用资格；
- 不可轻易让渡；

的内部原则。

因此：

```yaml
zn_current: not-locked
zn_increment: false
zn_x_cooccurrence_increment: false
```

不得从“他最终努力制止灾难”倒推 `zn`。

## 10｜strict-v2

由于 `zn` 未独立过 current canonical，本轮不进入 strict 双向缺口测试。

```yaml
strict_test_allowed: false
strict_verified_positive_increment: false
strict_deferred_increment: false
strict_negative_increment: false
```

strict-v2 继续保持 `0 verified positive`。

本轮没有为破零降低门槛。

## 11｜x-scope 判定

正式锁：

> **successful invoke/start x does not imply stop/terminate/revoke/veto x over the same running process.**

中文：

> **成功启动一个执行节点，只证明启动/调用权限；不能自动证明主体拥有停止、撤销、终止或持续否决同一执行过程的权限。**

进一步形成 current x-scope 护栏：

```text
start permission
≠ ongoing command permission
≠ stop permission
≠ terminate permission
≠ revoke permission
```

以及：

```text
causing process genesis
≠ controlling process lifecycle
```

这条边界尤其适用于：自动化流程、召唤物、代理节点、脚本、组织授权、AI agent、异步任务和持续执行系统。

## 12｜成熟度

```yaml
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
```

理由：

- 事实结构在作品核心桥段中直接可观察；
- Disney 官方视频简介确认 Mickey 的办法最终导致 chaos；
- 公开剧情梗概明确记录 broom 被活化搬水、Mickey 无法让其停止并造成 flooding；
- `start succeeds / stop fails / Yen Sid stops` 构成同对象、同窗口、不同 permission type 的高纯最小差异；
- 不依赖人物身份、外观、主题、胜负或结局推断。

## 13｜统计变化

本轮使用：

`current-x-scope-distinction-v1_20260830`

因此可以与 current x-scope boundary-guard 证据层累计。

写入前 L4 registry 仍登记：

```text
13 boundary guards / 10 independent works
```

但 latest main 已包含随后新增的 Frodo guard，尚未同步回 registry。因此真实 evidence-layer 在本轮写入前为：

```text
14 boundary guards / 11 independent works
```

本轮《Fantasia》此前未进入该 criterion 的 boundary-work 集合，所以：

```yaml
x_scope_boundary_guard_controls: +1
x_scope_boundary_guard_independent_works: +1
x_scope_evidence_layer_after_this_record: 15_controls / 12_works

x_scope_dynamic_transition_controls: +0
protected_range: +0
zn: +0
strict_verified_positive: +0
strict_deferred: +0
```

L4 registry 存在 `13/10 → actual 15/12` 的同步债；本记录不为修计数整份覆盖 pending-review 大文件。

## 14｜与 current canonical 的关系

本轮不修改 L1/L2。

它只把 L2 `x = 实际占有、使用、调配、调用、处分、否决或排除` 的原则进一步按 permission type 和 lifecycle stage 实证拆开：

```text
actual permission must be tested per operation
not inferred from neighboring operations
```

与 `zn补x_补卡` 也一致：拥有对象/接口不会自动制造意义；掌握边界必须按真实可调用、可否决、可处分范围判断。

## 15｜证据来源

### Disney 官方

- Disney Video：`Sorcerer's Apprentice - Fantasia`
- 官方简介：Apprentice Mickey 搬水，直到他产生“bright idea that ends in chaos”。

### 公开剧情核验

- IMDb：`Fantasia (1940) - Plot`
- 梗概明确：Mickey brings a broom to life to carry water, cannot/does not know how to stop it, and the castle is flooded。

本轮不依赖任何单一粉丝 wiki 作为事实主锚。

## 16｜下一轮最高信息增益

不要继续找第二个“召唤物开始后停不下来”的普通换皮案例。

优先寻找真正动态镜像：

```text
同人物 + 同一执行对象/过程

阶段 A：
start/invoke x = true
stop/terminate x = false

↓ 学会/取得新的现实 termination interface

阶段 B：
start/invoke x = true
stop/terminate x = true

且原 superior override 不再是必要节点
```

这将把本轮静态 permission asymmetry 推进成：

> **lifecycle permission expansion：启动权不变，但终止权在真实节点后首次获得。**

若找不到这种高纯动态迁移，则下一优先回 P0 strict-v2，继续寻找天然对象构成型 `x`，但仍不得为破零降低门槛。
