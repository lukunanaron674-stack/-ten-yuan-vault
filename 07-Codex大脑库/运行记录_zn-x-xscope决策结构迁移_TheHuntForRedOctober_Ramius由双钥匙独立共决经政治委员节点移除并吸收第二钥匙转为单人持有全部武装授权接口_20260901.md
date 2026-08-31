---
type: ten-yuan-fire-axis-x-scope-dynamic-transition-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
  decision_structure_calibration: joint-threshold-vs-unilateral-v1_20260831
work: The Hunt for Red October (1990 film)
character: Marko Ramius
stage: political officer alive and holds second missile key -> political officer removed -> Ramius takes and retains second key
sample_type: x-scope decision-structure dynamic transition / co-decision-node removal by credential consolidation
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
transition_direction: joint-two-key-threshold-to-unilateral-authorization-interface
new_independent_work_for_dynamic_transition: true
zn_increment: false
strict_increment: false
may_override_canonical: false
created: 2026-09-01
---

# 运行记录｜《The Hunt for Red October》Ramius：双钥匙独立共决 → 第二钥匙集中后的单人武装授权接口

## 1｜本轮问题

只测试同一人物、同一对象、同一 permission family 在连续阶段中的 `final_decision_structure / co_decision_nodes` 是否真实迁移：

> Red October 的 ballistic-missile arming authorization 原先由两把分别掌握的 missile keys 构成 mandatory two-person gate；政治委员死亡后，Ramius 明确取走并自行保留政治委员的第二把 key，使原本独立的 co-decision node 消失。此后在被测“导弹武装授权接口”层，是否从 joint-two-key threshold 收敛为 Ramius 单人持有全部必需 key interface。

本轮不从“舰长”“高级军官”“叛逃者”“核潜艇指挥官”身份倒推 `x`；也不把“持有两把 key”直接写成整套导弹发射、目标选择、机械执行、最终战略主权全部 unilateral。

## 2｜事实链

### 阶段 A｜政治委员节点仍存在

影片对白明确说明：Red October 设有 **two missile keys**，其设计目的就是让 **no one man may arm the missiles**。这等价于一个 mandatory 2-of-2 authorization threshold：至少在 missile-arming gate 上，单一 key holder 不能独立使同一授权结果成立。

因此 Ramius 即使拥有舰长身份和自己的一把 key，也不能仅凭职位把这一特殊对象层写成 unilateral final authorization。

### 迁移节点｜政治委员死亡 + 第二把 key 被 Ramius 集中

政治委员 Ivan Putin 死亡后，Ramius 当着 Dr. Petrov 与 Loginov 的面明确宣布：他正在取下政治委员的 missile key，并且 **自己保留**。Petrov 随即以 two-key rule 反对，正是因为两把 key 原本用于阻止一人独立武装导弹。

这不是职位升级，也不是上级新授权，而是：

```text
原独立 co-decision node 退出
+
该节点持有的必要 credential 被同一 actor 吸收
```

### 阶段 B｜Ramius 持有全部两把必要 key

在被测 `missile arming authorization interface` 层：

```text
pre:
Ramius key + political-officer key
→ two independent holders
→ no one man may arm

post:
Ramius retains his own key + takes political officer key
→ both mandatory credentials co-located in one actor
→ independent co-key-holder veto no longer exists
```

影片没有在这一窗口实际执行核导弹武装/发射 effect-test，因此本轮只锁 **authorization-interface structure migration**；不把未执行的 downstream mechanical launch effect 事后补成 verified realized disposition。

## 3｜x 权限结构

```yaml
actor: Marko Ramius
object: Red October ballistic-missile arming authorization gate
permission_type:
  - credential possession
  - missile-arming authorization interface
scope:
  pre: one of two mandatory missile-key interfaces
  post: both mandatory missile-key interfaces held by same actor
term:
  pre: political officer alive / independent key holder exists
  post: political officer removed and second key retained by Ramius
revocability:
  credential possession can in principle be physically lost or reassigned; no same-window reassignment shown
return_obligation: none shown in tested window
same-layer_pre-effect_veto:
  pre: independent second-key holder is mandatory; single holder cannot complete arming authorization
  post: independent second-key-holder veto removed because both required credentials are co-located
global_override:
  Soviet command / broader military authority not tested as same-layer per-act key veto in this scene
ultimate_title:
  Soviet state ownership / strategic sovereignty not inferred
decision_structure:
  pre: joint-threshold / two-key
  post: unilateral authorization-interface possession
consultation_structure:
  Petrov objects/advises but is not shown holding a mandatory key after Ramius retains it
final_decision_structure:
  pre: mandatory two-holder threshold for arming gate
  post: all mandatory key credentials concentrated in Ramius
execution_structure:
  downstream missile crew / mechanical launch process not tested; do not collapse into authorization layer
co_decision_nodes:
  pre: Ramius + political officer as independent key holders
  post: no independent second-key-holder remains in tested credential layer
independent_execution_nodes:
  downstream mechanical nodes may still exist; outside tested layer
scope_transition:
  joint credential gate -> unilateral credential gate
transition_trigger:
  political officer removal + second-key credential consolidation
```

## 4｜对象层与当前窗口

对象严格限定为：

> **Red October ballistic-missile arming authorization 的 two-key gate。**

不外推：

- Ramius 因此获得整个苏联核武战略的 ultimate title；
- Ramius 能在无其他技术人员情况下单人机械发射导弹；
- Ramius 此后所有舰上 decision 都是 unilateral；
- 政治委员死亡本身自动产生 `x`；
- 舰长身份自动覆盖特殊武器对象层的 mandatory concurrence。

## 5｜最小差异

```text
阶段 A：
Ramius 已是 captain
+ 已持自己 missile key
+ 政治委员独立持第二 key
→ 单人不能完成 arming authorization

阶段 B：
Ramius 仍是同一个 captain
+ 同一艘 Red October
+ 同一 missile-arming object layer
+ 原政治委员节点退出
+ Ramius 吸收第二 key
→ 独立 co-key-holder threshold 在 credential layer 消失
```

最小变量不是人物、目标、阵营或职位，而是：

> **mandatory credential 是否分散在独立节点，还是被同一 actor 集中持有。**

## 6｜拿掉测试

拿掉“Ramius 取得并保留第二把 key”这一节点：two-key rule 仍然要求独立第二 credential，Ramius 不能仅凭自己的 key 与 captain title 跨过被测 authorization threshold。

保留第二-key consolidation，拿掉“仍必须由独立政治委员共同持 key”的假设：影片对白的结构仍完整——Petrov 的担忧恰恰来自两把 key 被同一人集中，two-person safeguard 因此失去独立节点意义。

所以：

```text
co-decision-node exit
+
mandatory credential capture
→ final authorization structure contraction
```

比“舰长权力变大”更精确。

## 7｜反向测试

若后续证据证明：即使 Ramius 同时持有两把 missile keys，系统仍要求另一名独立主体以同层不可替代 credential / biometric / pre-effect veto 共同批准，才可完成同一 arming authorization，则本轮 `joint -> unilateral authorization-interface` 判定必须撤回或降级。

当前影片对白相反：two-key safeguard 的理由被明确表述为防止 **one man** 武装导弹，而 Ramius 正是把两把 key 集中到自己一人。

## 8｜最近邻排除

### vs Crimson Tide

《Crimson Tide》锁的是静态特殊对象层：舰长广域 command `x` 真实，但核发射因 XO mandatory concurrence 不能倒灌成 unilateral final-disposition。

本轮不是再证明一次“核武要两个人”，而是同一 special-object permission **从 two-person gate 向 single-actor credential concentration 发生阶段迁移**。

### vs Palpatine

Palpatine 案是：

```text
Senate joint-threshold source authorization
→ emergency powers delegated
→ Chancellor 在 delegated scope 内后续直接执行
```

原集体节点仍作为制度存在，只是不再逐项 pre-effect co-approve 被授权 scope。

Ramius 案则是：

```text
mandatory independent co-key-holder
→ node removed
→ its required credential physically consolidated into tested actor
```

因此新增机制是 **co-decision-node removal by mandatory-credential consolidation**，而不是 delegation。

### vs title/ownership

Ramius 的 captain title 在迁移前后不变，故 title 不能解释差异；真正变化的是 same-layer required credential distribution。

## 9｜第三因素冻结

冻结：

- Ramius 的叛逃计划；
- 政治委员死亡的道德性质；
- 苏联/美国阵营；
- Red October 最终去向；
- Ramius 是否真的想发射核武；
- downstream missile crew、目标选择、战略命令与整艇所有权。

只保留：

```text
two-key rule
independent key holders
political officer node exit
second key retained by Ramius
single-actor concentration of mandatory credentials
```

结论不变。

## 10｜zn / strict-v2

本轮不锁 `zn`。

Ramius 的动机可以从反对核战、亡妻、叛逃愿望、个人政治判断等多个因素解释；在当前被测 two-key authorization window 内，没有必要为了冲 strict-v2 人工造出一个 ≥95 且与 missile-arming gate 同对象层的不可让渡原则。

```yaml
zn_current: not-locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 继续保持 0。

## 11｜判定

```yaml
x_current:
  pre_transition:
    credential_possession: one-of-two
    unilateral_arming_authorization: false
    final_decision_structure: joint-two-key-threshold
  post_transition:
    credential_possession: two-of-two
    unilateral_authorization_interface: true
    downstream_launch_effect: not-tested
scope_transition:
  direction: decision-structure contraction of required actor count
  from: 2 independent mandatory credential holders
  to: 1 actor holding both mandatory credentials
transition_trigger: political officer node removal + second-key consolidation
pre_transition_same_layer_pre_effect_veto: independent second-key holder required
post_transition_same_layer_pre_effect_veto: no independent second-key holder remains in tested credential layer
final_decision_structure_transition: joint-two-key-threshold -> unilateral-credential-gate
zn_current: not-locked
strict_test_allowed: false
```

事实置信：**99**。

分类置信：**98**。

成熟度：**L4 / evidence-locked**。

## 12｜统计影响

current L4 registry 仍登记 `x_scope_dynamic_transition = 8 controls / 6 works`，但 latest main 在 registry 最近一次同步后已新增：

- Spider-Man 2 / Doc Ock：+1 control / +1 work；
- Alien / Ripley：+1 / +1；
- The Social Network / Eduardo：+1 / +1。

因此本轮写入前实际 evidence-layer 为：

```text
11 controls / 9 independent works
```

《The Hunt for Red October》此前未进入 current dynamic-transition independent-work 集合；本轮且不是普通 expansion/contraction 换皮，而是首次锁 **mandatory co-decision credential concentration**，故：

```text
x_scope_dynamic_transition:
11 / 9
→
12 controls / 10 independent works
```

其他统计：

```yaml
x_scope_boundary_guard: +0
protected_range: +0
strict_verified_positive: +0
strict_deferred: +0
strict_precondition: +0
zn: +0
```

## 13｜新增长期纪律

> **joint/shared final decision 取决于 mandatory approval credentials 的现实分布，不取决于头衔数量。**

> **如果原本分散于独立 co-decision nodes 的全部必要 credentials 被集中到同一 actor，current final-decision structure 可以在 title 不变、object 不变、permission family 不变时由 joint 收敛为 unilateral。**

> **credential-layer unilateral ≠ downstream mechanical execution / ultimate strategic title；迁移只锁到实际通过 effect/structure evidence 的对象层。**

本记录不得自动修改 L1/L2 canonical，也不得把本轮当作 strict-v2 positive。

## 14｜外部事实证据

- 影片转录：Ramius 当场取下政治委员的 missile key 并宣布由自己保留；Petrov 紧接着说明 two missile keys 的设计目的，是防止任何一个人单独武装导弹。
- IMDb plot summary 同样记录：政治委员死亡后，Ramius 保留其 missile key，Petrov 对此提出异议。

外部核验来源：影片 transcript（Simpleremix）与 IMDb plot summary；本轮只使用影片内 two-key rule 与 key-retention 事实，不把真实世界核武程序反向套入作品。