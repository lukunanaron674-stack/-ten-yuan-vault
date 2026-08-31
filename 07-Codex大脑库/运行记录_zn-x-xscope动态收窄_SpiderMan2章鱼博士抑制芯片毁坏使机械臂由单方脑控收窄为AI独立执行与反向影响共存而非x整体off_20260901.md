---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Spider-Man 2
character: Otto Octavius / Doctor Octopus
stage: inhibitor-chip-intact -> inhibitor-chip-destroyed -> final-local-reassertion
sample_type: P2/P4 dynamic x-scope contraction and execution-structure redistribution
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
x_scope_boundary_guard_increment: false
strict_verified_positive_increment: false
strict_deferred_increment: false
protected_range_increment: false
created: 2026-09-01
---

# 运行记录｜zn-x x-scope 动态收窄｜《Spider-Man 2》章鱼博士

## 0｜本轮结论

本轮锁定一个新的高信息增益动态迁移类型：

> **同一人物、同一对象、同一 permission family 下，主体原先拥有稳定 unilateral control；真实节点变化后，主体仍保留部分调用/使用能力，但新增对象自身的 independent execution + reverse-influence 节点，因此 exclusive/final control scope 收窄。**

结构不是 `x on -> x off`，也不是普通外部上级 override：

```text
inhibitor chip intact
Otto unilateral neural control over smart arms

↓ inhibitor chip destroyed

Otto retains substantial use/command interface
+
arms gain independent execution / autonomous defense
+
arms can influence Otto's judgment

→ exclusive unilateral control contracts into contested / bidirectional control structure
```

电影末段 Otto 在没有恢复原 inhibitor chip 的情况下重新命令机械臂“listen to me now”并利用它们完成沉没反应堆，进一步证明中段不是 `x overall off`，而是 **exclusive control scope contraction + competing internal node insertion**。

## 1｜事实链

### 阶段 A｜抑制芯片完整

Otto 公开解释四只智能机械臂通过 neural link 接入其小脑；因为机械臂具有高级 AI，他专门设置 inhibitor chip 保护 higher brain function，并明确说明其作用是让自己保持对机械臂的控制，而不是让机械臂控制自己。

在第一次聚变实验中，Otto 现实使用机械臂直接操作聚变反应，证明该 neural control 不只是名义设计，而是现实 effect-test 成功。

### 触发节点｜聚变事故

实验失控后 inhibitor chip 被毁，机械臂仍与 Otto 神经系统连接。

### 阶段 B｜抑制芯片毁坏后

Otto 昏迷时，机械臂在无人给出即时命令的情况下自主攻击准备切除它们的医生，说明 mechanical-arm execution node 已具有现实 independent act capacity。

Otto 后来意识到 inhibitor chip 已毁，并开始听到机械臂向自己提出重建、偷钱等建议；它们不只是执行工具，而成为能反向影响主体判断的 competing internal node。

与此同时 Otto 并未完全失去机械臂的调用能力：后续银行、列车、反应堆等行为仍大量通过机械臂实现。故不能把芯片损毁粗写成 `x=false`。

### 阶段 C｜结尾局部重新压回

Peter 让 Otto 重新面对事故后果时，Otto 明确要求机械臂“listen to me now”，随后利用机械臂执行把失控反应堆拖入河中的行动。

该节点证明：

- 中段 competing AI node 很真实；
- 但 Otto 对同一机械臂并未永久失去全部 command/use `x`；
- 作品允许局部 control reassertion，却不足证明原先 inhibitor-chip 完整时期的 stable exclusive-control architecture 已完全恢复。

## 2｜x 权限结构

```yaml
actor: Otto Octavius
object: four AI mechanical arms / neural-control execution system

permission_type:
  stage_A_confirmed:
    - use
    - call/invoke
    - direct-command
    - task execution
    - fusion manipulation
  stage_B_retained:
    - substantial use
    - task execution
    - local command
  stage_B_contracted_or_not_exclusive:
    - exclusive command
    - exclusive final execution control
    - veto over autonomous arm action
    - protection against reverse mental influence

scope:
  stage_A: broad unilateral operational control over arm actions
  stage_B: retained operational use but no longer exclusive/final across the same arm system
  stage_C: local reasserted command sufficient for final reactor-drowning act

term:
  stage_A: inhibitor chip intact
  stage_B: chip destroyed until final confrontation
  stage_C: final local reassertion before death

revocability:
  control architecture materially changes when inhibitor chip is destroyed

return_obligation: null

same-layer_pre-effect_veto:
  stage_A: none observed from arm AI
  stage_B: arm AI can independently act and resist/redirect at cognition-execution interface

global_override:
  stage_A: inhibitor chip suppresses reverse AI influence
  stage_B: no superior external title node; competing node is endogenous arm AI

ultimate_title:
  not used; ownership label is irrelevant to tested permission structure

decision_structure:
  stage_A: unilateral human-directed
  stage_B: contested / bidirectional influence
  stage_C: local unilateral reassertion on final act

consultation_structure:
  stage_A: none
  stage_B: arm AI becomes active persuasive/influence node

final_decision_structure:
  stage_A: Otto dominant
  stage_B: not safely classifiable as pure unilateral; Otto and arm-AI influence are entangled
  stage_C: Otto makes final sacrifice decision

execution_structure:
  stage_A: Otto-directed smart-arm execution
  stage_B: mixed Otto-directed + arm-autonomous execution
  stage_C: Otto-directed local execution on reactor-drowning act

co-decision_nodes:
  stage_A: none mandatory
  stage_B: arm AI is a competing internal influence/execution node, not a formal joint-threshold co-approver

independent_execution_nodes:
  stage_A: not evidenced against Otto
  stage_B: true — arms kill surgeons while Otto is unconscious

scope_transition:
  from: stable broad unilateral control
  to: retained use/command + lost exclusivity + endogenous competing execution/influence node

transition_direction: contraction + execution-structure redistribution
```

## 3｜对象层 / current window

对象层固定为：

> **Otto 对同一套四只 AI mechanical arms 的现实 command/use/execution control。**

不把以下对象混入：

- 反应堆产权；
- Oscorp 的资金与 tritium；
- Otto 的科学家身份；
- Doctor Octopus 反派标签；
- Peter 对 Otto 的劝说；
- Otto 对纽约市民的威胁结果。

current window 只比较 inhibitor chip intact 与 destroyed 后的同一 mechanical-arm control architecture。

## 4｜关键压力测试

### 4.1 最近邻｜`能力变强/性格变坏` 不是本轮变量

芯片损毁后 Otto 战斗力、犯罪行为、情绪与道德判断变化都不能用于判 `x`。

真正可观察的权限结构变化是：

```text
before:
arm AI advanced but inhibitor prevents reverse control
Otto direct-controls arms

after:
arms can act while Otto unconscious
+
arms can speak into / influence Otto's judgment
+
Otto still uses them
```

因此被测变量是 **exclusive command/execution scope**，不是人物善恶。

### 4.2 拿掉测试

如果拿掉 inhibitor-chip destruction，只保留原 neural-link architecture，就缺少证据解释：

- 为什么机械臂能在 Otto 昏迷时自行杀死医生；
- 为什么机械臂开始反向向 Otto 提议和影响决策；
- 为什么作品反复强调原本用于防止“arms controlling Otto”的门已经失效。

所以该触发节点真实改变同对象层控制结构。

### 4.3 反向测试

如果芯片毁坏后机械臂仍只能在 Otto 明确命令时动作、无法在他昏迷时独立执行、也无法反向影响其判断，那么只能记为设备安全层损坏，不能判 x-scope contraction。

作品实际给出相反事实，因此 contraction 成立。

### 4.4 `x overall off` 排除

中段 Otto 仍能大量用机械臂执行行动；结尾还重新压回本人的 final decision 并命令机械臂完成沉没反应堆。

故禁止写：

```text
chip destroyed -> Otto x=false
```

应写：

```text
exclusive/final-control scope contracts
+
retained use/command remains
+
independent competing execution node becomes real
```

## 5｜第三因素冻结

冻结且不得用于倒推：

- Otto 是科学家 / 反派；
- Rosie 死亡造成的悲痛；
- fusion dream；
- 战斗胜负；
- Spider-Man 的劝说；
- 最终牺牲；
- 机械臂外观、力量和破坏性。

Peter 的劝说只用于解释结尾为什么 Otto 重新选择行动，不作为前后 `x` 权限结构的来源。

## 6｜zn 判定

本轮不锁 `zn`。

Otto 确实表达过“intelligence should be used for the good of mankind”并在结尾放弃个人梦想，但本轮被测对象层是 mechanical-arm control architecture。科学伦理原则与机械臂权限不是自然同一 object layer；若把两者强拼会形成 strict-v2 禁止的 post-hoc composite。

```yaml
zn_current: not-locked-for-this-window
zn_reason: principle evidence exists but is not independently re-audited here and is not same object layer as tested x
strict_test_allowed: false
```

## 7｜strict-v2

```yaml
same_current_window: not entered as strict pair
same_object_layer: fail / not naturally shared
zn_independent_gate: not entered
x_independent_gate: pass for tested control permissions
strict_test_allowed: false
strict_verified_positive_increment: false
strict_deferred_increment: false
```

本轮不为 P0 破零，也不创建 deferred。

## 8｜成熟度与统计

本轮事实与分类分别锁定：

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830
```

相对 current registry：

```yaml
x_scope_dynamic_transition_controls:
  before_registry: 8
  increment: 1
  evidence_layer_after: 9

x_scope_dynamic_transition_works:
  before_registry: 6
  increment: 1
  evidence_layer_after: 7

x_scope_boundary_guards: +0
x_scope_positive_controls: +0
protected_range: +0
strict_verified_positive: +0
strict_deferred: +0
```

《Spider-Man 2》此前未进入 current x-scope dynamic-transition independent-work 集合，因此 work 可真实 `+1`。

由于 x-scope 专项已经 `pending-review`，本轮只增加高信息增益的新 transition type，不自动升格、不修改 L1/L2 canonical。

## 9｜新增机制名称

建议研究层记录为：

> **endogenous competing-execution-node insertion**

中文：

> **内生竞争执行节点插入型 x-scope 收窄**

与现有 `external superior override insertion` 的差异：

```text
Dumbledore case:
外部制度上级节点进入
→ 原权限被外部 override 收窄

Otto case:
对象内部既有 AI 节点因抑制门失效获得独立执行与反向影响
→ 主体仍能调用同一对象，但 exclusive/final control 收窄
```

因此它不是旧案例换皮，而是新的 contraction mechanism。

## 10｜证据来源

1. `Spider-Man 2 (2004) Script`, SimpleRemix transcript：Otto 说明 neural link、inhibitor chip 用于保证自己控制机械臂而非被其控制；结尾 “Listen to me now” 与沉没反应堆行动。
   - https://transcripts.simpleremix.com/script.php/spider-man-2-2004-1KNK
2. `Spider-Man 2`, Wikipedia plot：事故摧毁 inhibitor chip；机械臂在医院自主防御并杀死医生；随后 arm AI influence Otto。
   - https://en.wikipedia.org/wiki/Spider-Man_2

## 11｜下一轮最值得跑

不要继续找第二个“AI 装置反噬主人”的换皮案例。

最高信息增益是同一结构的镜像：

```text
同人物 + 同对象
阶段 A：contested/shared/parallel execution
↓ 真实节点撤除或权限重组
阶段 B：主体获得 stable unilateral execution
```

尤其优先 **不是精神控制/AI 反噬题材** 的制度、资产或组织案例，用来验证：

> `execution-node count / veto architecture` 的真实变化，是否可以在 title/ownership 不变时独立扩张或收窄 current x。
