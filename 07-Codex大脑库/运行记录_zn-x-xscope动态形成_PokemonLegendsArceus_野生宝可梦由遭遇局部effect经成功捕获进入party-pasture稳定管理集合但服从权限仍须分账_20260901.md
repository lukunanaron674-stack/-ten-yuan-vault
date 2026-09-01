---
type: ten-yuan-fire-axis-x-scope-dynamic-control
authority_level: L4
knowledge_status: evidence-locked
status: current-evidence
axis: fire
pair: zn-x
work: Pokémon Legends: Arceus
actor: player-protagonist-Akari-or-Rei
stage: wild-encounter-to-successful-capture-to-party-or-pasture-membership
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
sample_type: x-scope-dynamic-transition-new-mechanism
mechanism: capture-success-external-object-to-persistent-managed-set-membership
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-01
---

# zn ↔ x 火轴运行记录｜Pokémon Legends: Arceus：成功捕获把野生对象从 encounter-local effect 转为 persistent managed-set membership

## 0｜本轮结论

本轮只测同一只野生 Pokémon 在“捕获前 → 成功捕获 → 进入 party / pasture 管理集合”这一明确阶段，不从 Trainer 身份、阵营、外观、战斗强度、主题或最终胜负倒推 `x`。

锁定新机制：

> **一次 encounter-local effect 不等于 stable x；但当一次明确 capture-success 事件真实改变对象的 current membership，使对象从自由外部对象进入主体可持续 party / storage 管理集合时，可以形成窄、稳定、对象特异的 current `x`。**

同时锁定一个反倒灌边界：

> **persistent possession / party-or-storage management x 可以成立，而 battle-obedience / full behavioral-command permission 仍需另证；捕获成功不能把整个 permission bundle 自动写成 full command/disposition。**

这不是普通“能力升级”，也不是又收一个 one-shot false-x；关键变量是对象 membership 与可持续管理权限本身发生现实迁移。

## 1｜事实链

官方 Pokémon Legends: Arceus gameplay 页面明确：

1. 野生 Pokémon 原先“live freely”于野外；不同个体可攻击主体，也可发现主体后逃跑。
2. 主体可以接近、战斗削弱并投掷 Poké Ball；若目标没有立刻从球中逃出，则构成 successful catch。
3. 官方页面进一步写明：捕获后只能随身带六只，其余“Pokémon you caught”可留在 Jubilife Village 的 pastures；主体可在任务前选择带哪些 Pokémon，并把其余放入 pastures。
4. Pokémon 官方说明 pastures 类似现代 PC boxes：捕获数量超过可携带上限时，主体仍可把捕获对象存入 pastures，并通过 Jubilife Village 或 base camps 访问这些 pastures；同一官方说明还确认可以发起 Pokémon trade。
5. 系列官方 RPG 说明另有一个重要限制：某些 Badge 只保证一定等级以下 Pokémon 在战斗中服从命令。这证明“已进入我的 party/storage 管理集合”与“所有对象层 battle command 均无条件成立”必须分账。

本轮只把 1→4 作为 `x` membership/management reality-test；第5点作为 permission-type 反倒灌证据，不把跨作品具体 Badge 规则硬塞回 Legends: Arceus 本身。

## 2｜对象层与 current window

```yaml
actor: Akari-or-Rei player protagonist
object: one specifically targeted wild Pokémon
current_window:
  pre: immediately before successful capture
  transition: Poké Ball successful-catch event
  post: after catch while Pokémon remains in protagonist party/pasture managed set
```

对象层严格固定为“该只 Pokémon 是否进入主体可持续管理集合”。

不测试：
- Pokémon 的人格/伦理归属；
- 永久所有权哲学；
- 所有战斗指令的绝对服从；
- 对所有 Pokémon 的全局 title；
- 捕获机制是否道德正当。

## 3｜x permission structure

```yaml
actor: player-protagonist-Akari-or-Rei
object: the successfully caught Pokémon
permission_type:
  pre:
    encounter: true
    battle_against: possible
    weaken: possible
    throw_capture_device: possible
    persistent_party_membership: false
    persistent_storage_management: false
  post:
    possession_membership: true
    party_assignment: true
    pasture_storage_management: true
    call_into_party_from_managed_set: true
    trade_interface: evidenced at system level
    full_behavioral_obedience: not_auto_inferred
    irreversible_disposition: not_tested
scope:
  pre: encounter-local
  post: one caught-object membership inside protagonist managed Pokémon set
term:
  pre: encounter window only
  post: persistent until later transfer/release/other lifecycle change
revocability: later lifecycle changes possible; not used to deny current x
return_obligation: none shown in tested ordinary catch window
same-layer_pre-effect_veto:
  pre: wild Pokémon may flee / break capture attempt; capture not yet realized
  post: no mandatory external co-approval node shown for party/pasture assignment of the caught object
global_override: game-system constraints remain; not treated as another actor's same-layer veto
ultimate_title: not claimed
decision_structure:
  capture_attempt: unilateral attempt but success is object/system-conditioned
  post-capture management: protagonist-selectable on tested party/pasture layer
consultation_structure: none required on tested layer
final_decision_structure:
  post-capture party/pasture assignment: unilateral on tested management layer
execution_structure:
  capture device/system realizes membership transition;
  protagonist subsequently selects party vs pasture placement
co-decision_nodes: none demonstrated on tested post-capture management layer
scope_transition:
  from: external freely acting wild object with only encounter-local effect
  to: persistent subject-specific managed-set member with party/storage interfaces
transition_trigger: successful catch
```

## 4｜关键压力：one-shot effect 与 stable x 的形成节点

捕获前主体已经可以：

```text
接触目标
攻击/削弱目标
投球影响目标
甚至短暂把目标收入球内
```

这些本身仍不足以判 stable `x`，因为目标可以逃跑，successful catch 尚未成立。

真正的 current-x 形成节点不是“投球动作很强”，而是：

```text
successful catch
→ wild/free membership 结束
→ object 被登记为 caught Pokémon
→ 可进入主体 party
→ 超额对象可进入主体可访问 pasture
→ 主体可反复选择当前 party / storage placement
```

因此本轮补出上轮 Obi-Wan 失败镜像缺失的一半：

```text
one-shot / encounter-local influence
≠ stable x

但
one-shot transition event
+ persistent object-membership change
+ repeatable management interface
→ stable narrow current x 可成立
```

事件可以只发生一次；关键不是动作是否重复，而是**事件是否生成持续存在的对象边界与后续 standing permission**。

## 5｜最近邻排除

### vs Obi-Wan mind trick
Obi-Wan 只改变 checkpoint 当次 response；stormtrooper 没有进入其持续管理集合，也没有后续 standing callable / storage / assignment interface。

本轮 successful catch 后对象 membership 本身持续改变，所以不是 duplicate one-shot guard。

### vs 唐僧紧箍咒
唐僧是特定关系对象上新增 repeatable discipline invocation；本轮不是通过重复咒令维持关系，而是一次 capture-success 产生 persistent managed-set membership。形成机制不同：

```text
唐僧：persistent binding → repeatable constraint call
Pokémon capture：one-time successful membership transition → standing possession/management interfaces
```

### vs 孙悟空龙宫试兵器→金箍棒
龙宫材料区分 trial-use 与 stable possession/disposition；本轮进一步证明“事件本身可以一次性，但若它改变 object membership 并生成 standing management interface，仍可成为 dynamic x formation trigger”。

### vs capability contamination
捕获率、投掷技巧、战斗强弱只影响 transition 是否成功，不等于 transition 本身。若能力增强但目标仍未被 successful catch，persistent management x 仍不成立。

## 6｜拿掉测试

拿掉 successful-catch membership transition，只保留：

```text
遇见
战斗
削弱
投球
暂时影响
```

则对象仍可逃离，主体没有证据证明可以在之后持续把它放入 party / pasture 管理集合。因此 post-capture narrow x 消失。

反过来，保留 successful catch + party/pasture membership，即使冻结“训练家很强”“球很高级”“战斗胜利”这些能力因素，post-capture management x 仍有独立现实效果。

## 7｜反向测试

若存在以下任一证据，本轮必须收窄或撤回：

1. successful catch 后主体不能决定对象是否进入自身 party/pasture；
2. 捕获只持续一次 encounter，不生成后续可访问管理集合；
3. 每次 party/storage 调整都必须经另一个独立 mandatory same-layer node 批准；
4. 捕获后对象立即恢复为完全外部 free object，且不存在 persistent membership。

官方材料与以上反向条件相反，因此 current narrow management x 通过。

## 8｜第三因素冻结

冻结：
- protagonist 的 Survey Corps 身份；
- Professor Laventon / Galaxy Team 的研究任务；
- Pokédex 奖励；
- Pokémon 类型、稀有度、战斗力；
- 玩家喜好；
- 游戏主线目标。

只保留 successful catch 对“该只对象是否进入主体可持续 party/pasture management set”的现实改变，结论仍成立。

Galaxy Team / Pokédex 是为什么玩家想捕获的 competing purpose，不是 post-capture membership x 本身的 permission 来源证明；因此本轮不把任务来源误写成 `x`。

## 9｜permission bundle 反倒灌

本轮特别禁止：

```text
caught / in party / in pasture
→ full behavioral obedience automatically
```

Pokémon 官方 RPG 说明明确存在 Badge 与 battle obedience 的额外约束。故：

```text
possession/storage/party-assignment x = 可成立
battle-command x = 另证
trade/disposition x = 只在现实接口被证明的范围内成立
irreversible disposal / total personality control = 不推断
```

这与 current x-scope “permission type 必须分账”完全一致。

## 10｜zn / strict-v2

本轮不锁 `zn`。

“完成 Pokédex”“帮助研究”“与 Pokémon 建立伙伴关系”均可能是任务、目的、主题或关系解释，不能直接推成不可轻易让渡并拥有冲突最终指导资格的稳定 `zn`。

```yaml
zn_current: not_locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
```

因此 strict-v2 verified positive 仍为 `0 / 0 works`。

## 11｜成熟度与统计

事实置信：99。
分类置信：98。
成熟度：`evidence-locked`。

current 待审议清单在本轮启动时已把宋江错误 contraction 撤回，真实 dynamic evidence-layer 为：

```text
11 controls / 10 independent works
```

本轮《Pokémon Legends: Arceus》此前未进入该 dynamic-work 集合，且机制不是普通 expansion 换皮，而是新增：

> `capture-success external-object → persistent managed-set membership`

因此按同一 `current-x-scope-distinction-v1_20260830`：

```text
x_scope_dynamic_transition
11 controls / 10 works
→
12 controls / 11 independent works
```

其他统计全部不变：

```yaml
x_scope_positive: +0
x_scope_boundary_guard: +0
protected_range: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

x-scope 已是 `pending-review`，本轮不修改 L1/L2 canonical，也不自动升格。

## 12｜证据来源

外部事实核验使用 Pokémon 官方材料：

- Pokémon Legends: Arceus 官方 Gameplay：野生 Pokémon 自由生活，可攻击/逃跑；成功捕获判据；捕获后可选择 party，超额对象留在 pastures。
- Pokémon.com 官方《A Look at the Early Days of Pokémon Research in Pokémon Legends: Arceus》：pastures 是捕获 Pokémon 的 persistent storage，主体可从村庄/base camp 访问，并介绍 trade。
- Pokémon.com 官方 Pokémon RPGs 101：捕获 Pokémon 可加入 party/PC；另明确某些 Badges 才保证一定等级以下 Pokémon 服从战斗命令，用于证明 membership/management 与 behavioral-command permission 必须分账。

## 13｜下一轮最高信息增益

P0 strict-v2 仍优先，不降门槛。

若仍无 ≥95 strict 候选，下一轮最高价值不是再找“抓住一个东西”的普通案例，而是寻找这个新机制的失败镜像：

```text
一次明确 acquisition/capture event
+ 对象看似进入主体范围
但
对象没有 persistent membership
或 standing management interface 被第三方节点持续覆盖
→ capture/acquisition label 仍不得算 stable x
```

也可寻找同一 actor / same object 的反向迁移：

```text
persistent managed-set membership
→ release / transfer / mandatory external reassignment
→ 原 possession/management permission 真实退出
```

这样能把“one-shot transition event 可以生成 stable x”从单向形成节点推进成完整 lifecycle，而不是继续给捕获动作本身加戏。
