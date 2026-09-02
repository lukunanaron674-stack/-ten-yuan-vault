---
type: ten-yuan-fire-axis-boundary-stress-test
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
work: The Lord of the Rings - The Return of the King
character: Samwise Gamgee
stage: Shelob aftermath -> Cirith Ungol rescue -> Ring returned to Frodo
sample_type: x-scope-dynamic-temporary-custody-use-return
criterion_version: current-x-scope-distinction-v1_20260830
strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
may_override_canonical: false
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_precondition_increment: false
protected_range_increment: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜Samwise / One Ring｜temporary custody-use 三段动态

## 0｜启动对齐

本轮以写前 `main@a9847cdca3a529e4c6fa9925fc2f085ae1159a5b` 为真值。启动时重读/核对最近 commits、L0/L1 文件权力与任务门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度路由、相关关系卡/`zn补x`、`zn-x火轴待审议清单.md`、`zn-x火轴研究总纲_20260827.md`、strict-v2 current、x-scope current 与最近 evidence ledger。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current 总纲当前高价值缺口 P2 明确优先：`x off → temporary custody/use x → x off` 的借用/托管/返还最小差异，用来检验“永久归属/最终处分为0 ≠ current custody/use 全为0”。因此本轮停止普通正例堆量，直接攻击该缺口。

写前有效 x-scope dynamic evidence-layer：`17 controls / 15 independent works`。strict-v2 verified positive 仍为 `0 / 0 works`。

## 1｜事实链与可观察结果

采用《The Return of the King》小说对象层，因为它对 Sam 的短期 Ring-bearer / 实际佩戴使用节点最清楚；电影版可作为“取走保管后返还”的旁证，但本轮不把不同媒介当独立 work 重复计数。

### Stage A｜Frodo 持有时：Sam 对 One Ring 无 current possession/use x

- Frodo 是当前 Ring-bearer；Sam 陪同、协助、保护 Frodo。
- 仅有关系位置、任务参与和对 Ring 命运的关切，不能推出 Sam 已有对同一 One Ring 的 possession/use/manage x。

判定：

```text
Sam current possession/use/custody x on One Ring = OFF
```

### Trigger｜Shelob 之后 Sam 认为 Frodo 已死，取走 Ring

- Sam 在 Shelob 事件后取走 One Ring，意图防止 Ring 落入敌手并继续任务。
- Tolkien Gateway 将 Sam 明确列为 Ring-bearer，并记录他约两天承担 Ring。

### Stage B｜temporary custody/use x 现实成立

- Sam 不只是“碰到”或“有机会取得”：他实际持有 Ring。
- 在 Cirith Ungol 路线上，他实际把 Ring 戴上并利用其效果通过危险区域/隐藏自己。
- 因而至少以下 current permission/effect bundle 已经过 reality-test：
  - physical possession；
  - custody；
  - carry/transport；
  - wear/use；
  - local decision whether to keep wearing/remove during the rescue window。
- 但没有证据允许升级成 ultimate title、permanent ownership、global disposition 或 irreversible-destruction permission。

判定：

```text
Sam temporary possession/custody/use x = ON
ultimate-title / permanent-disposition x = NOT INFERRED
```

### Trigger 2｜确认 Frodo 仍活着并完成救援后主动返还 Ring

- Sam 救出 Frodo后，将 Ring 返还给 Frodo。
- 返还是真实 relinquishment：之后 Sam 不再以当前 bearer 身份持有、佩戴或管理同一 Ring。

### Stage C｜return 后同一 current x 退出

```text
Sam current possession/custody/use x on One Ring = OFF
```

残留的忠诚、任务责任、对 Ring 的知识、曾经的 Ring-bearer 历史，都不能把已经返还的 current custody/use x 倒填回来。

## 2｜x-scope 固定拆分

```yaml
actor: Samwise Gamgee
object: One Ring
object_layer: same physical One Ring / current possession-custody-use layer

permission_type:
  contact:
    stage_A: incidental/not_counted_as_current_x
    stage_B: true
    stage_C: false_as_current_holder
  possession:
    stage_A: false
    stage_B: true
    stage_C: false
  custody:
    stage_A: false
    stage_B: true
    stage_C: false
  use:
    stage_A: false
    stage_B: true_reality_tested_by_wearing
    stage_C: false
  carry_transport:
    stage_A: false_as_holder
    stage_B: true
    stage_C: false_as_holder
  management:
    stage_A: false
    stage_B: narrow_local_management_only
    stage_C: false
  disposition:
    permanent_global: not_inferred
    irreversible_destruction: not_inferred
  veto:
    global: not_inferred
  exclusion:
    against_all_other_claimants: not_inferred
  transfer:
    voluntary_return_to_Frodo: true_reality_tested

scope:
  stage_A: no current possession/custody/use bundle
  stage_B: temporary holder/bearer bundle only
  stage_C: possession/custody/use bundle exited after return

quantitative_scope:
  object_count: one Ring
  permission_bundle: narrow temporary holder layer

term:
  stage_B: about two days / Cirith Ungol rescue window

revocability:
  temporary_holder_bundle: voluntarily terminable by return

return_obligation:
  source_native_legal_obligation: not_required_for_classification
  observed_return: true

same_layer_pre_effect_veto:
  stage_B: none observed preventing Sam from wearing/removing/carrying during tested window

global_override:
  Ring corruption/influence: does_not_erase_observed_narrow_use_x
  Sauron/Frodo ultimate claims: not_converted_into_same-layer_pre-effect_veto_on_tested_local_use

ultimate_title:
  Sam: not_inferred
  Frodo/current bearer context: retained/recovered after return

decision_structure:
  stage_B_local_wear_remove_carry: unilateral-in-practice

consultation_structure:
  stage_B: none required for tested immediate holder actions

final_decision_structure:
  permanent fate of Ring: not attributed to Sam
  current temporary holder actions: Sam reality-effective

execution_structure:
  stage_A: no-holder-interface
  stage_B: unilateral temporary-holder execution
  stage_C: holder-interface relinquished

co-decision_nodes:
  mandatory_joint_nodes: none demonstrated for tested local holder actions

scope_transition:
  - OFF -> temporary custody/use ON
  - temporary custody/use ON -> OFF by voluntary return

transition_trigger:
  - Frodo apparently dead / Sam physically takes Ring
  - Frodo rescued / Sam voluntarily returns Ring
```

## 3｜关键压力与最近邻排除

### 3.1｜“temporary ≠ false”

错误：

```text
不是永久所有者
+ 最终要返还
→ x=false
```

不成立。

Stage B 中 Sam 对同一对象拥有现实 possession/custody/use 接口，而且实际佩戴产生效果，因此 temporary/return-bound 只能收窄 `term + scope + disposition`，不能抹掉 current x。

锁：

> future return / non-owner status ≠ current custody/use x never existed。

### 3.2｜“return 后不能靠历史 possession 保留 current x”

错误：

```text
Sam 曾真实持有并使用
→ 后续仍可写 x=true
```

不成立。

返还后同一 current possession/custody/use layer 退出。历史 bearing、经验、关系与任务参与不是 current holder permission。

锁：

> historical realized x ≠ current x after relinquishment。

### 3.3｜与 Gandalf transient contact guard 的最小差异

Gandalf：短暂拿取/接触 + offered acquisition，但拒绝进入稳定 holder bundle，因此不构成 stable current x。

Sam：实际把对象带离原 holder、持续承担 bearer/custody、实际佩戴使用约两天，形成可重复的 current holder bundle。

所以：

```text
transient handling/opportunity
≠ temporary custody/use
```

时间短不是关键；关键是当前窗口内是否形成可重复、现实生效、对象边界明确的 permission bundle。

### 3.4｜与 Pokémon voluntary release 的最小差异

Butterfree：既有 current manage/use x 后，主体主动 release，使对象退出 current x。

Sam：本轮补齐 release 前半段缺口：

```text
OFF
→ physically takes same object + sustained custody/use reality-test
→ temporary x ON
→ voluntary return
→ OFF
```

因此不是再收一个 release 换皮，而是把“temporary x 的形成和终止”完整放进同一 actor / same object / same permission family 的三段连续窗口。

### 3.5｜与 John Wick Mustang 的最小差异

John Wick：current physical possession/use 被外部 adversarial dispossession 打断，再经 recovery 恢复。

Sam：current x 的 ON/OFF 都由主体侧合法/自愿的 custody transition 形成，没有 theft/dispossession。

新增机制是：

> temporary entrusted/self-assumed custody can be genuine current x even when ultimate title never transfers; voluntary return can then terminate exactly that current layer without改变 ultimate-title layer。

## 4｜拿掉 / 反向 / 第三因素冻结

### 拿掉测试 A｜拿掉实际持有与佩戴

若 Sam 只表示“我来保管”但 Ring 始终留在 Frodo 身上，或只短暂碰触一下，没有持续 custody/use reality-test，则不能锁 Stage B current x。

### 拿掉测试 B｜拿掉 return

若 Sam 救出 Frodo 后仍继续持有并控制 Ring，则 Stage C OFF 不成立；不能因“理论上应该还”提前倒填 relinquishment。

### 反向测试

return 证明 Sam 有把当前 holder bundle 终止/转出的实际接口，但这不反向证明他拥有永久 title 或 unrestricted disposition。

### 第三因素冻结

冻结：
- Sam 的“仆人/朋友/同伴”身份；
- 对 Frodo 的忠诚、情感、英雄评价；
- Ring-bearer 名号本身；
- Sauron 阵营、战争胜负与最终毁戒结局；
- 对 Ring 的诱惑/腐化主题。

只保留：

```text
same actor
+ same physical object
+ Stage A no holder bundle
+ physical taking
+ sustained custody
+ actual wear/use effect
+ voluntary return
+ post-return loss of holder interface
```

三段 dynamic 仍成立。

## 5｜zn 与 strict-v2

本轮不锁 `zn`。

Sam 的行为高度符合忠诚/责任叙事，但该窗口同时存在：Frodo关系责任、既定毁戒任务、即时敌方风险、救援压力。这里没有必要为了 x-scope 动态而把这些外部/关系 anchors 压成 ≥95 的独立 `zn`。

因此 strict-v2 不启动双向互补判定：

```yaml
zn_independently_locked: false
x_independently_locked_on_temporary_holder_layer: true
strict_v2_verified_positive: false
strict_v2_negative: false
strict_v2_deferred: false
strict_precondition_guard: false
```

不以“忠诚的 Sam”人物标签给 zn 发免试证，也不以强 x 动态反推 zn。

## 6｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_dynamic_before:
  controls: 17
  independent_works: 15

x_scope_dynamic_after:
  controls: 18
  independent_works: 16

increments:
  x_scope_dynamic_transition_controls: +1
  x_scope_dynamic_transition_works: +1
  x_scope_positive: +0
  x_scope_boundary_guard: +0
  decision_structure_calibration: +0
  protected_range_positive: +0
  protected_range_negative: +0
  strict_positive: +0
  strict_negative: +0
  strict_deferred: +0
  strict_precondition: +0
```

《The Lord of the Rings》虽然已存在 ordinary boundary / strict-precondition 等别的子槽资产，但此前未进入 current x-scope dynamic work 集合；各子槽 independent works 分账，因此本轮 dynamic work +1，不把同作品在其他 criterion/sub-ledger 的存在错误当成 dynamic 重复计数。

x-scope 已 `pending-review`，本轮只新增高信息增益 dynamic mechanism，不修改 L1/L2 canonical，不自动升格。

## 7｜证据来源

- Tolkien Gateway, `Ring-bearers`：Samwise Gamgee 在 Frodo 被 Orcs 控制期间约两天承担 One Ring，支持持续 bearer/custody 而非瞬时接触。
  https://tolkiengateway.net/wiki/Ring-bearers
- Tolkien Gateway, `Samwise Gamgee`：Shelob 后 Sam 取走 Ring；确认 Frodo 活着后救援并将 Ring 返还。
  https://tolkiengateway.net/wiki/Samwise_Gamgee
- SparkNotes, *The Return of the King*, Book VI Chapter 1：Sam 在 Cirith Ungol 前实际戴上 Ring，并随后摘下，支持 `use` reality-test。
  https://www.sparknotes.com/lit/returnking/section11/
- Tolkien Gateway, `The One Ring`：Sam 短期 bear Ring，之后救出 Frodo并返还，作为对象链交叉核对。
  https://tolkiengateway.net/wiki/The_One_Ring

不复刻原作长文本；这里只记录可验证事实链和权限结构。

## 8｜本轮结论

本轮 evidence-lock：

> `x` 的 current reality 不以永久所有权为必要条件。same-object temporary custody/use 只要形成持续、可重复且实际生效的 permission bundle，就是真实 current `x`；返还后该 current layer 可立即 OFF，而 ultimate title / 历史关系 / 未来任务可保持不同状态。

最小动态：

```text
no current holder x
→ physical taking + sustained custody + actual use
→ temporary current x ON
→ voluntary return
→ same holder layer OFF
```

该机制补齐 current 总纲 P2 指定的 temporary custody/use 三段缺口。

## 9｜下一轮最高信息增益

P0 继续寻找第一份 strict-v2 verified positive，不降门槛。

若仍没有 ≥95 的 strict 候选，优先跑 P3 的新镜像，而不重复 temporary custody：

1. `revoke/veto=false → unlock/threshold crossed → revoke/veto=true`，要求 same actor / same object / same permission family 且真实 effect-test；或
2. `shared parallel-independent → credential withdrawal → unilateral`，要求被撤节点此前和撤后都经过 reality-test；或
3. `potential interface → first verified target-effect → realized target-disposition`，并继续冻结 global override。
