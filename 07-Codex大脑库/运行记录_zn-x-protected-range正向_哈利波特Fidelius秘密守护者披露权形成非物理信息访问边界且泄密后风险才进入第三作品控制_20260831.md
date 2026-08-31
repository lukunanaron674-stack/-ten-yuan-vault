---
type: ten-yuan-fire-axis-protected-range-positive-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Harry Potter
character: Peter Pettigrew
stage: 1981 Potter family Fidelius hiding → voluntary disclosure to Voldemort
criterion_version: protected-range-risk-test-v1_20260831
sample_type: protected-range-positive-risk-test-informational-access-boundary
fact_confidence: 99
classification_confidence: 98

actor: Peter Pettigrew
object: Potter family concealed location / access-to-hidden-household secret
permission_type:
  - withhold-information
  - disclose-information
  - access-gate-control
  - informational-exclusion
scope: concealed Potter household location only
term: Fidelius active / Peter primary Secret Keeper window
revocability: Peter can voluntarily disclose the secret
return_obligation: N/A
same_layer_pre_effect_veto: none observed; primary Secret Keeper disclosure is sufficient
global_override: forced extraction is not a valid substitute for voluntary disclosure under the cited official rule
ultimate_title: not applicable

decision_structure: unilateral-on-secret-disclosure
consultation_structure: none required for tested disclosure
final_decision_structure: unilateral-on-disclosure
execution_structure: Fidelius magical enforcement + Peter current reveal/withhold gate
co_decision_nodes: none mandatory for the tested primary-keeper disclosure

boundary_on: true
object_inside: true
risk_type: targeted hostile search / access-to-location
real_risk_test: true
risk_test_pattern: concealed-while-secret-withheld → voluntary-disclosure → hostile-access-occurs
subject_specific_x_changes_risk: true
third_party_primary_protection_node: false
stable_local_protected_range_x: true
whole-world-or-general-family-security_x: false

protected_range_positive_control: true
protected_range_positive_control_index: 3
protected_range_cross_work_index: 3
new_independent_work_for_protected_range_v1: true
protected_range_negative_guard_increment: false
ordinary_x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false

zn_current: not-locked
zn_increment: false
zn_x_cooccurrence_increment: false
strict_test_allowed: false
strict_verified_positive_increment: false
strict_increment: false

may_update_L2_zn: false
may_update_L2_x: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜《哈利·波特》Fidelius：非物理信息访问边界 protected-range 正向

## 0｜研究问题

本轮只测试：

> stable protected-range `x` 是否必须是墙、门、领地或物理阻挡；还是“谁能让敌对者知道并进入目标范围”的稳定信息访问门，也可以构成 current protected-range？

结论：**可以。**

本轮不锁 Peter 的 `zn`，不启动 strict-v2。

新增机制：

`informational-access-gate-protected-range`

---

## 1｜事实链

Potter 家族为了躲避 Voldemort 使用 Fidelius Charm，把其隐藏地点的秘密交给 Secret Keeper。

Harry Potter 官方百科明确说明：

- Fidelius Charm 把秘密隐藏在一个活人之中；
- 除非 Secret Keeper 主动揭示，相关信息不可被知道；
- Potter 家族本来会继续保持完全隐藏，如果不是 Peter Pettigrew 把地点泄露给 Voldemort。

官方 Secret Keeper 说明进一步明确：

- 只有 Secret Keeper 能把受保护信息告诉别人；
- 该秘密不能靠强迫、魔法控制或拷问从不愿泄密的 Keeper 身上取出；
- Keeper 若愿意，可以主动披露。

Peter 随后确实把 Potter 家所在地告诉 Voldemort；Voldemort 由此找到并袭击该家庭。

因此作品本身给出近似 on/off 最小差异：

```text
Fidelius active
+ Potter family remains at concealed location
+ Voldemort is the targeted hostile risk
+ Peter withholds secret
→ location remains unknowable to Voldemort

Peter voluntarily discloses secret
→ information boundary opens
→ Voldemort finds the Potters and attacks
```

主要来源：
- Harry Potter official encyclopedia, The Fidelius Charm:
  https://www.harrypotter.com/fact-file/spells/the-fidelius-charm
- J.K. Rowling / Harry Potter official, Secret Keeper:
  https://www.harrypotter.com/writing-by-jk-rowling/secret-keeper
- Harry Potter official feature on Pettigrew as Secret Keeper:
  https://www.harrypotter.com/features/why-did-sirius-black-give-up-being-the-potters-secret-keeper

---

## 2｜x 权限结构

```yaml
actor: Peter Pettigrew
object: Potter family concealed location / access-to-hidden-household secret

permission_type:
  - withhold-information
  - disclose-information
  - access-gate-control
  - informational-exclusion

scope:
  local: Potter family concealed location under Fidelius
  global: Potter family overall safety not inferred

term: Peter as primary Secret Keeper while the Fidelius concealment is active
revocability: Peter can voluntarily open the boundary by disclosing the secret
return_obligation: N/A
same_layer_pre_effect_veto: none observed for primary Keeper disclosure
global_override: coercive extraction is not an equivalent bypass under the official rule
ultimate_title: not applicable

decision_structure: unilateral-on-tested-disclosure
consultation_structure: none required
final_decision_structure: unilateral-on-disclosure
execution_structure: Fidelius magical enforcement + Peter reveal/withhold decision
co_decision_nodes: none mandatory for the tested disclosure
```

这里不把“Peter 是朋友”“Peter 被选为 Secret Keeper”这些身份或授权标签当 `x` 证据。

真正的 current `x` 是：

> 在这个受保护秘密上，Peter 的 `reveal / withhold` 决定会直接改变敌对者是否能获得进入该隐藏对象范围所需的信息。

---

## 3｜protected-range 固定门

### boundary-on
true。

Fidelius 已经生效，地点处于信息不可知状态。

### object-inside
true。

James、Lily 与 Harry 仍然留在被隐藏的 Potter household/location 内；保护不是靠他们逃离边界实现。

### real risk enters / hits boundary
true。

Voldemort 已经把 Potter family 作为明确攻击目标，隐藏本身就是针对该现实追杀风险部署；官方资料直接指出若 Peter 不泄密，他们会继续保持隐藏。

### subject-specific x changes / blocks / redirects risk before effect
true。

风险在 secret withheld 状态下无法取得定位信息；Peter 自愿披露以后，敌对者才取得该信息并现实进入攻击链。

这里的 `x` 不是“Peter 打败 Voldemort”，而是稳定控制**信息访问门**。

### third-party primary protection node
false（按 current access-gate 对象层）。

Fidelius Charm 是执行/强制底层，类似门锁或协议本身；被测 current permission node 是 primary Secret Keeper 的 reveal/withhold 权限。

当前不需要把 Dumbledore、Sirius、魔法部或其他第三方保护节点事后打包进 Peter 的 `x` 才能解释“何时信息边界打开”。

---

## 4｜与现有 P1 控制的最小差异

现有 current-v1 正向：

- 《战栗空间》：物理房间边界，多次入侵撞击；
- 《火星救援》：持续环境隔离，intact → breach → repair。

本条新增第三种机制：

- 《哈利·波特》Fidelius：**信息访问边界**。风险不是被墙体撞回，而是在获得隐藏地点信息之前无法进入目标访问链；主体主动披露后边界打开。

因此：

```text
physical wall / pressure enclosure
不是 protected-range 的必要形式

stable subject-specific access gate
+ object remains inside
+ real hostile risk
+ gate closed blocks access
+ subject opens gate and risk enters
→ 可支持 stable protected-range x
```

---

## 5｜最近邻排除

### x vs 名义 Secret Keeper 身份
只有称号不够；本轮靠官方规则确认该角色的实际 reveal/withhold 权限会改变秘密是否可知。

### x vs ability
不是“Peter 会不会魔法”的能力判定；被测的是这个具体秘密是否进入其稳定披露/保密权限边界。

### x vs z
Potter family 对 Peter 的信任与认可不能替代实际 access-gate effect。

### x vs nx
Secret Keeper 权限来源于外部设定/授权，但来源节点不抹掉授权生效后的 current reveal/withhold `x`。

### x vs xn
Fidelius 的具体魔法流程只是运行机制，不能单独替代“谁能打开信息门”的 current permission node。

---

## 6｜拿掉测试

拿掉 Peter 的 reveal/withhold gate，只保留：

```text
Potters 想躲藏
+ Voldemort 想找到他们
+ Peter 是朋友
```

不能解释为什么受保护地点在 withheld 状态下对 Voldemort 不可知，又为什么 Peter 一次自愿披露就让 Voldemort 能找到他们。

因此该 current informational boundary 对 observed protected-range 结果具有真实作用。

---

## 7｜反向测试

如果 Peter 只是知道地址，但：

```text
其他人仍可独立侦查出地点
或
Voldemort 可以无视 Peter 直接定位
或
Peter 的披露并不会改变访问状态
```

那么最多是普通 information possession/use，不足锁 protected-range access-gate `x`。

本例官方规则给出的恰好是相反结构。

---

## 8｜第三因素冻结

冻结：
- Peter 的阵营、胆怯、背叛者标签；
- Sirius 的计划是否聪明；
- Dumbledore 是否更适合当 Keeper；
- Harry 最后是否存活；
- Voldemort 的战力；
- 后续战争结局。

只看：

> 受保护信息是否处于 Peter 的稳定 reveal/withhold gate；该 gate 在 real hostile risk 窗口中是否现实改变敌对者的访问状态。

结论不变。

---

## 9｜zn / strict-v2

本轮不锁 Peter 的 `zn`。

他最终主动背叛 Potter family，且现有窗口不足证明一项无奖励、反利益、跨阶段稳定的保护原则；不能因为他曾被选为 Secret Keeper 就倒推内部原则。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_verified_positive_increment: false
```

所以 strict-v2 仍保持 0 verified positive。

---

## 10｜本轮锁定

```text
stable protected-range x
不要求必须是物理围墙

subject-specific information access gate
也可以形成 current protected boundary

secret withheld
→ hostile access blocked

subject voluntarily reveals
→ boundary opens
→ hostile access occurs
```

研究层命名：

`informational-access-gate-protected-range`

---

## 11｜成熟度与统计

```yaml
criterion_version: protected-range-risk-test-v1_20260831
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked

protected_range_positive_control_increment: true
protected_range_positive_work_increment: true
protected_range_positive_control_index: 3
protected_range_cross_work_index: 3

protected_range_negative_guard_increment: false
ordinary_x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
x_scope_dynamic_transition_increment: false

zn_increment: false
strict_verified_positive_increment: false
strict_increment: false
```

按 evidence-layer 当前同 criterion 资产：

- 《战栗空间》Meg：positive #1 / work #1；
- 《火星救援》Watney：positive #2 / work #2；
- 《哈利·波特》Peter/Fidelius：positive #3 / work #3；
- 《John Wick》Winston/Continental：negative guard #1 / work #1。

因此 current-v1 protected-range 正向已达到 3 controls / 3 independent works；后续停止继续堆普通正例，应转判据冲突、反向护栏、最小差异与状态修正。
