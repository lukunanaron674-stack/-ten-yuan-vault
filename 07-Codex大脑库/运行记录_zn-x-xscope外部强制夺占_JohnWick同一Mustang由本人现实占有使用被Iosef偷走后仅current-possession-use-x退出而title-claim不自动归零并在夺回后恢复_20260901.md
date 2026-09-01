---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-dynamic-transition
work: John Wick
character: John Wick
phase: 1969 Mustang stolen in John Wick (2014) -> recovered at opening of John Wick Chapter 2 (2017)
mechanism: external-adversarial-dispossession-removes-current-possession-use-without-proving-title-extinction
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
created: 2026-09-01
---

# zn ↔ x｜x-scope 动态压力测试｜John Wick 的 Mustang 被外部强制夺占

## 0｜结论

本轮锁定一个此前 current dynamic 集合未单独登记的机制：

> **external adversarial dispossession 可以真实终止主体对同一对象的 current possession/use/custody x，同时不能仅凭这一事实把 ultimate title / ownership claim / later recovery claim 一起判成消失。**

因此：

```text
current physical possession/use x
≠ ultimate title / claim

外部强制夺占
→ 可以让前者 true -> false
→ 但不自动证明后者 true -> false
```

这不是 capability/performance 下降：被测对象本身已经离开 John 的现实掌握范围，并进入 Iosef 一方的现实占有/处置流程。

## 1｜启动口径

本轮按 current canonical 与 current L4 gate 执行：

- `AGENTS.md`
- `00-中枢索引/AI文件权力与任务总览.md`
- `07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md`
- `07-Codex大脑库/十元理论每小时执行门禁协议_v1.0_2026-07-28.md`（正文 current v1.2）
- `01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md`
- `01-十元系统/01-十元信息卡/【zn信息量卡v2】.md`
- `01-十元系统/01-十元信息卡/【x信息量卡v2】.md`
- `01-十元系统/03-十元准度卡/zn_准度卡_v0.1.md`
- `01-十元系统/03-十元准度卡/x_准度卡_v0.1.md`
- `01-十元系统/04-十元生克补卡/补/zn补x_补卡.md`
- `07-Codex大脑库/zn-x火轴待审议清单.md`
- `07-Codex大脑库/zn-x火轴研究总纲_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md`
- `07-Codex大脑库/待审议问题_zn-x-xscope权限类型范围期限与最终归属分层边界_20260830.md`
- 最近 commits 至 starting main `c0d3573eb86090af1de5869c7a80a38d1f9cbb27`。

current L2：`x = 归我掌握`，必须有明确对象与实际占有/使用/调配/调用/处分/否决/排除；不能由 title、身份、能力或主题倒推。

## 2｜事实链

### Stage A｜偷车前

John 明确持有并驾驶自己的 1969 Ford Mustang Boss 429。Iosef 在加油站试图让 John 卖车，John 拒绝。

可观察事实：

```text
John physical possession = true
John use/drive = true
John refusal-to-transfer = true
```

### Trigger｜外部强制夺占

Iosef 一伙夜间闯入 John 住所，袭击 John，并偷走 Mustang。随后 Iosef 把车送往 chop shop，试图去除识别信息；Aurelio 认出车辆并拒绝处理。

可观察结果：

```text
object physically leaves John's custody
John cannot currently drive/use/call the vehicle
Iosef side physically possesses and attempts to alter/dispose of it
```

### Stage B｜被夺占窗口

在第一部余下窗口中，Mustang 不在 John 当前现实占有/使用范围内。

这足以判：

```text
John current possession x: false
John current use x: false
John current custody x: false
```

但不能由此自动判：

```text
ultimate title: false
ownership claim: false
right/claim to recover: false
```

### Stage C｜第二部开场夺回

《John Wick: Chapter 2》开场明确以 John 从 Abram Tarasov 控制的场所夺回 stolen Mustang 为桥段；夺回后车辆重新进入 John 的现实 custody/use 范围并送去维修。

因此形成完整闭环：

```text
current possession/use ON
→ external adversarial dispossession
→ current possession/use OFF
→ physical recovery
→ current possession/use ON again
```

## 3｜x-scope 固定拆分

```yaml
actor: John Wick
object: same 1969 Ford Mustang Boss 429

permission_type:
  stage_A_pre_theft:
    contact: true
    use: true
    custody: true
    possession: true
    refusal_to_transfer: reality-tested

  stage_B_stolen_window:
    contact: false
    use: false
    custody: false
    current_physical_possession: false
    ultimate_title: not_proven_false
    residual_claim_to_object: not_collapsed_by_theft_alone

  stage_C_recovery:
    contact: true
    use/custody: restored_true
    current_physical_possession: restored_true

scope:
  stage_A: full current physical object access/custody
  stage_B: no current physical object access/custody
  stage_C: current physical access/custody restored

term:
  stage_A: before theft
  stage_B: theft -> recovery
  stage_C: after recovery

revocability:
  tested_layer: physical possession can be externally interrupted

return_obligation:
  none shown on tested physical-possession layer

same-layer_pre-effect_veto:
  stage_A: none shown for John's ordinary use
  stage_B: not the mechanism; object is physically outside John's control

global_override:
  no formal superior permission node needed for the transition

ultimate_title:
  deliberately not equated with current physical possession

decision_structure:
  stage_A ordinary use: unilateral on tested object layer
  stage_B John cannot make physical-use decisions effective because object is absent from his control

consultation_structure:
  irrelevant

final_decision_structure:
  not generalized beyond current possession/use

execution_structure:
  stage_A: John directly uses/drives object
  stage_B: Iosef side physically executes possession/alteration attempts
  stage_C: John physically recovers object

co-decision_nodes: none required to explain tested transition

scope_transition:
  stage_A -> stage_B: current physical possession/use ON -> OFF
  stage_B -> stage_C: current physical possession/use OFF -> ON

transition_trigger:
  A_to_B: external adversarial taking/theft
  B_to_C: physical recovery/reacquisition
```

## 4｜关键压力

### 压力 A｜这是不是 capability 下降？

不是。

如果只是车辆坏了、John 驾驶技能下降或道路条件变差，可能只是 capability/performance delta。

本案中对象本身被第三方带走，并由第三方现实占有、尝试改造。拿掉“对象退出 John 控制范围”后，偷车桥段就不成立。因此这是 current possession/use boundary 的现实迁移。

### 压力 B｜被偷以后是不是 x overall = false？

也不是。

current `x` 必须按 permission type / scope 分账。被偷足以关闭 current physical possession/use/custody；但不能只凭 theft 把 title、claim、represented ownership、未来 recovery claim 全部倒填为 false。

锁定：

> **external dispossession is a permission/scope-specific x contraction, not automatic total-x extinction.**

### 压力 C｜“仍是他的车”是不是能救回 current x？

不能。

作品/法律/语言中的 owner label 不可替代 current 十元 `x`。在 stolen window 中，John 不能现实接触、使用或保管 Mustang，因此 current physical-possession/use x 已退出。

锁定：

> **residual title/claim does not keep current custody/use x artificially true.**

## 5｜最近邻

### Pokémon release

上一条 Pokémon release：

```text
actor 自己行使 disposition
→ 主动让对象退出 managed set
→ self-termination of later x
```

本案：

```text
actor 想保留对象
→ external adversary forcibly takes it
→ current possession/use x 被动退出
```

因此形成高信息最小差异：

```text
self-disposition termination
vs
externally forced dispossession
```

### Eduardo Saverin

Eduardo 是同一 divisible equity permission family 的 quantitative dilution；本案是具体物的 physical possession/use layer 从 ON→OFF，且 residual title/claim 不自动同步归零。

### Dumbledore

Dumbledore 是 external superior override insertion / final-authority reassignment；本案没有制度 superior 或 formal revoke node，只有现实对象被外部夺走。

### Jurassic Park / The Martian capability corrections

那两条只有技术 operability/capacity 变化，没有对象/permission boundary 的现实改变；本案对象直接退出 actor 当前 possession/use boundary，因此不属于 capability contamination。

## 6｜拿掉 / 反向

### 拿掉测试

拿掉外部夺占，只保留 Iosef 想要车、威胁 John 或声称车归自己：John 仍实际持有和驾驶 Mustang，则 current possession/use x 不会退出。

因此真正 trigger 不是敌意、威胁、名义主张，而是：

```text
object physically removed from actor's control
+ another actor obtains current possession
```

### 反向测试

若车被偷后 John 仍能从自己车库直接使用/调用同一辆车，或 Iosef 从未实际取得车辆，则不能判 possession/use contraction。

若后续只是别人称“车还是 John 的”，但 John 仍拿不到车，也不能把 current custody/use x 反向恢复。

只有 physical recovery / reacquisition 后，该层 current x 才重新成立。

## 7｜第三因素冻结

冻结以下因素后结论仍成立：

- John 的杀手身份与能力；
- Iosef 的黑帮身份；
- Mustang 的象征意义；
- Daisy 被杀带来的情绪/复仇；
- John 最终胜负；
- 车辆价值；
- 法律意义上的 title 争议。

被测变量仅是：

```text
同一对象是否处于 John 当前现实 possession/use/custody boundary
```

## 8｜zn / strict-v2

本轮不锁 `zn`。

“珍惜亡妻相关记忆”“拒绝被侵犯”“复仇”等均不能在当前被测 Mustang window 中自动满足 zn 的跨阶段未来调用、冲突排序与不可让渡原则门。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
```

strict-v2 verified positive 继续保持 0。

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830
```

本条不是普通 expansion/contraction 换皮，而是新增：

> `external-adversarial-dispossession-removes-current-possession-use-without-proving-title-extinction`

current 实时待审议清单在本轮启动时登记 `11 dynamic controls / 10 works`；其 x-scope 专项与研究总纲仍残留已 superseded 宋江 contraction 的旧 `12/10`，属于 stale sync debt。

最近两条尚未吸收进 registry 的同 criterion 新证据为：

1. Pokémon capture：`+1 control / +1 work`；
2. Pokémon release：`+1 control / +0 work`。

因此写入本条之前有效 evidence-layer 为：

```text
13 controls / 11 works
```

本条《John Wick》此前未进入 current dynamic-work 集合，故：

```text
13 / 11
→ 14 dynamic controls / 12 independent works
```

本轮增量：

```yaml
x_scope_dynamic_transition_control: +1
x_scope_dynamic_transition_work: +1
x_scope_positive: +0
x_scope_boundary_guard: +0
protected_range: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

达到 `pending-review` 后不修改 L1/L2 canonical；本记录只进入 L4 evidence layer。

## 10｜来源

剧情事实交叉核对：

- John Wick (2014) plot：John 拒绝出售 Mustang；Iosef 一伙闯入住所后偷走 Mustang，并送往 Aurelio 的 chop shop 处理。
  https://en.wikipedia.org/wiki/John_Wick_(film)
- John Wick: Chapter 2 plot：开场 John 从 Abram Tarasov 一方夺回 stolen Ford Mustang，随后将车送去 Aurelio 维修。
  https://www.imdb.com/title/tt4425200/plotsummary/
  https://en.wikipedia.org/wiki/John_Wick:_Chapter_2

## 11｜下一轮最高信息增益

P0 仍优先寻找 strict-v2 首个真正 verified positive，不降低门槛。

若仍无 ≥95 P0，则下一轮最值得跑的是本机制的**非物理 permission 镜像**：

```text
同 actor + 同 object
current possession/use 仍保留
但 external node 真实撤销某项 transfer/disposition/veto permission
→ permission-specific forced contraction
```

这样可以把两种“外部把 x 拿走”彻底分账：

1. **夺走对象本身** → physical possession/use exit；
2. **对象仍在手，但撤走 permission** → authority/permission exit。

两者不能互相代替。

TASK_DONE: ZNX-XSCOPE-JOHNWICK-EXTERNAL-DISPOSSESSION-20260901
