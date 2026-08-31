---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
work: Death Note
character: Light Yagami
stage: Yotsuba/Higuchi capture window, from non-owner contact with Higuchi's notebook to Higuchi's death and ownership transfer
sample_type: x-scope-negative-boundary-guard
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
strict_verified_positive_increment: false
strict_deferred_increment: false
zn_increment: false
created: 2026-09-01
---

# 运行记录｜Death Note 夜神月：作品内 `ownership` 标签 ≠ 十元 `x` 的完整权限包

## 1｜本轮问题

压力测试：如果作品自己的规则明确把某人称为某对象的 `owner`，能否直接把这个作品内标签翻译成十元 `x=true` 的完整占有/使用/处分权限包；反过来，若某人在作品规则中不是 `owner`，是否就应写成该对象层 `x=false`？

本轮判定：**均不能。**

《Death Note》的规则把 `ownership` 设计成一种特殊系统状态，它会影响记忆、死神关联和所有权转移，但并不与“谁能现实使用笔记产生死亡效果”完全重合。规则明确允许非 owner 使用 Death Note 产生完整效果；同时 owner 可以把笔记借给别人而继续保留 ownership。

在 Yotsuba/Higuchi 捕获窗口中，Higuchi 仍是被测 notebook 的 owner。Light 触碰被捕获的 notebook 时恢复与 Death Note 有关的记忆，但这个触碰本身不等于 ownership 已转移；随后 Light 使用藏在手表中的 Death Note 纸片写下 Higuchi 的名字并让其死亡。Light 的计划正是让自己在 Higuchi 死亡时继续接触/持有 notebook，使 ownership 随后回到自己手中。

因此本轮锁定：

```text
source-native ownership label
≠ ten-yuan x permission bundle

non-owner
≠ no current use/effect x

owner
≠ exclusive-use / exclusive-disposition automatically
```

## 2｜事实链

### 节点 A｜ownership 与 memory 绑定，但不等于完整现实权限

Death Note 规则明确：

- 失去 ownership 会失去与 Death Note 有关的记忆；
- 重新取得 ownership 会恢复相关记忆；
- 即使没有重新取得 ownership，仅仅触碰 Death Note 也可以恢复记忆；
- 即使不是 owner，也可以使用 Death Note 产生完整效果；
- owner 可以把 Death Note 借给别人而继续保留 ownership。

所以作品内 `ownership` 至少是一个独立制度/魔法状态变量，不能直接按日常语义翻译成“所有权限都归 owner”。

### 节点 B｜Light 非 owner 触碰 notebook，memory-access 恢复

Higuchi 被捕后，Light 接触由 Higuchi 使用的 Death Note，相关 Kira 记忆恢复。此刻必须分账：

```text
contact = true
memory-access while touching = true
ownership-status = not yet transferred
```

`touch → memory return` 证明的是接触接口改变了记忆访问状态，不是作品已经把 whole-notebook ownership 提前转给 Light。

### 节点 C｜Light 在 ownership 回归前已能产生 Death Note effect

Light 使用藏在手表内的 Death Note 纸片写下 Higuchi 的名字并使其死亡。这个效果发生是 ownership transfer 的触发前提，而不是 transfer 之后才获得的能力。

可观察结构：

```text
Higuchi still current owner
+
Light has Death Note fragment/use interface
→ Light produces killing effect
→ Higuchi dies
→ ownership then returns/transfers to Light under the ownership rules
```

因此：

```text
use/effect permission can be true
while source-native ownership-status is false
```

这直接否决“source says non-owner → x=false”的标签推理。

## 3｜x-scope 固定拆分

```yaml
actor: Light Yagami
object:
  whole_object: Higuchi-current Death Note / notebook ownership status
  tested_effect_layer: Death Note writing/effect interface including a valid fragment

permission_type:
  confirmed_before_ownership_transfer:
    - contact
    - memory-access-while-touching
    - use/effect through valid Death Note fragment
  not_inferred_before_transfer:
    - whole-notebook ownership
    - exclusive possession
    - exclusive use
    - unrestricted whole-object disposition
  confirmed_after_higuchi_death:
    - ownership-status transfer back to Light

scope:
  before_transfer: local contact + memory/effect interface
  after_transfer: source-native ownership status additionally restored

term: Higuchi capture -> Higuchi death -> immediate ownership transfer window

revocability:
  ownership: governed by Death Note transfer/relinquishment rules
  contact-memory-access: temporary while touching when not owner

return_obligation: N/A

same-layer_pre-effect_veto:
  use_effect: none demonstrated for Light's valid fragment act
  ownership_transfer: Higuchi's continuing ownership remains until death/transfer condition

global_override:
  source_rules: Death Note ownership/transfer system

ultimate_title:
  source_native_owner_before_higuchi_death: Higuchi
  source_native_owner_after_higuchi_death: Light

decision_structure:
  use_effect: unilateral writing by Light
  ownership_transfer: rule-triggered, not a vote/consultation structure

consultation_structure: none
final_decision_structure:
  tested_killing_act: unilateral
execution_structure:
  tested_killing_act: Light directly writes on valid fragment; Death Note rule executes effect
co-decision_nodes: none
```

## 4｜最近邻排除

### 4.1 不是《西游记》龙宫试兵器的重复

龙宫控制回答：`trial-use ≠ stable possession/disposition`。

本轮进一步攻击的是**作品原生标签的语义映射**：

```text
作品内部把某状态叫 ownership
≠
十元分析可以跳过 permission_type 拆分
```

Death Note 甚至明确允许：

```text
non-owner use effect = true
owner lends object but keeps ownership = true
```

所以不能把 source-native `owner/non-owner` 当成十元 `x` 的布尔真值。

### 4.2 不是《The Dark Knight》遥控器 mapping 未验证

渡轮案例的失败点是 interface→target causal mapping 未被现实验证。

本轮相反：Death Note 纸片的 effect mapping **被现实效果验证**；真正被否定的是“ownership 标签可覆盖全部权限类型”的推断。

### 4.3 不是 Frodo possession/use ≠ destruction

Frodo 案拆的是同一对象上不同 disposition type。

本轮拆的是：

```text
source-native legal/magical status label
≠ ontology-level permission bundle
```

即使作品自己使用“ownership”这个词，也仍须回到 current canonical 的接触/使用/保管/调用/管理/处分/否决/排除/转让逐项取证。

## 5｜拿掉 / 反向

### 拿掉 source-native ownership label

只保留可观察权限：

```text
Light can touch
Light can regain memory while touching
Light can use valid fragment to cause death
```

这些现实效果仍成立。

因此 local `use/effect x` 的判断不需要先把 Light 写成 source-native owner。

### 拿掉现实 effect

如果只知道作品称 Light 为/不为 owner，却没有任何当前接触、使用、调用、处分、排除或转让效果，就不能靠术语本身直接锁十元 `x` 的具体 permission type。

### 反向门

若某作品同时证明：

```text
owner 是唯一可使用者
+
owner 可独立处分/排除/转让
+
non-owner 无任何同层接口
```

那么该作品内 `ownership` 标签可以作为这些 permission 的证据摘要；但仍是**证据支持标签映射**，不是因为出现“owner”字样就自动成立。

## 6｜第三因素冻结

冻结：

- Light 的 Kira 身份；
- Light 的智力、职业、阵营、善恶；
- L 是否怀疑 Light；
- Higuchi 的人格与结局；
- “Death Note owner”这一作品术语本身；
- 最终谁赢得调查战。

只看同一 current window 中：

```text
who is source-native owner
who can touch
who can use
who can produce effect
when ownership transfer occurs
```

从而避免拿作品标签反向定义十元端点。

## 7｜zn / strict-v2

本轮不锁 `zn`。

Light 的“创造新世界”等宣言可能构成 zn 候选，但在本窗仍与身份建构、战略收益、免罪计划、权力追求和自保动机高度纠缠；本轮没有重新完成 ≥95 的独立 zn 门，而且被测 `x` 问题本身是 permission-label 校准，不应为了冲 strict 把另一端硬拉进来。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_verified_positive_increment: false
strict_deferred_increment: false
```

strict-v2 verified positive 维持 0。

## 8｜成熟度与统计

```yaml
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
protected_range_increment: false
strict_verified_positive_increment: false
strict_deferred_increment: false
```

`Death Note` 此前未进入 current x-scope boundary-guard independent-work 集合，故本轮可增加 `+1 control / +1 independent work`。

仓库 L4 registry 仍停在 `13 boundary guards / 10 works`，而 latest main 之后另有 Frodo 与 Fantasia 两条同 criterion 的新 boundary guards 尚未同步入 registry；因此写前真实 evidence-layer 为 `15 controls / 12 works`，本轮后为：

```text
x-scope boundary guards = 16 controls / 13 independent works
```

不修改已经 `pending-review` 的 L1/L2 canonical；registry 的计数同步作为治理债另记，不把数字同步冒充理论进步。

## 9｜本轮新增护栏

> **source-native ownership/title/status label ≠ ten-yuan x permission bundle。作品即使明确使用“owner/ownership”字样，仍必须逐项验证 current possession/use/call/disposition/veto/exclusion/transfer；反之，source-native non-owner 也可能拥有真实、当前、可验证的某些 x permission。**

机器可读：

```yaml
new_guard:
  source_native_ownership_label_implies_full_x_bundle: false
  source_native_non_owner_implies_all_x_false: false
  permission_type_evidence_required_even_when_source_says_owner: true
  realized_non_owner_use_can_lock_narrow_use_x: true
  owner_and_exclusive_use_are_not_synonyms: true
```

## 10｜证据来源

1. `Death Note` manga embedded rule, How to Use XXII / XXXVII / XXXVIII：失去 ownership 后丢失相关记忆；重新取得 ownership 或仅触碰 notebook 都可恢复记忆。
2. `Death Note` ownership rules：即使不实际 possess / own Death Note，也可使用它产生完整效果；owner 可借出 notebook 并保持 ownership。
3. Anime Episode 24, **Revival**：Higuchi 被捕后 Light 触碰 notebook 恢复记忆；Light 使用藏在手表中的纸片杀死 Higuchi，并利用 Higuchi 死亡使 ownership 回归。

公开交叉核验：Death Note Wiki 的 `Rules of the Death Note / Manga Chapter Rules`、`How to Read Rules` 与 Episode 24 `Revival` 条目，以及 IMDb Episode 24 plot summary。多源对 ownership / touch-memory / fragment effect / Higuchi death sequence 一致。

## 11｜下一轮最高信息增益

不要再找第二个“作品里写 owner 但权限其实分拆”的换皮案例。

下一轮优先：

```text
同人物 + 同对象 + 同 permission type

阶段 A：
source-native ownership/title 不变
但 realized permission = true

↓ 真实规则/技术/override 节点改变

阶段 B：
source-native ownership/title 仍不变
但同一 realized permission = false
```

如果能锁到这种样本，就能证明：

> **不仅 owner 标签与 permission bundle 分离；即使 owner 标签保持恒定，十元 x 的 current permission 仍可真实动态收缩。**

这会比继续累计静态标签反例更高信息增益。
