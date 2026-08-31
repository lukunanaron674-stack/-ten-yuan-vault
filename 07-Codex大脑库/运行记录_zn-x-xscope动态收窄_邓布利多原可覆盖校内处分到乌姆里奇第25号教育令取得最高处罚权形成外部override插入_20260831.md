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
work: Harry Potter and the Order of the Phoenix
character: Albus Dumbledore
stage: before Educational Decree No.25 -> Umbridge obtains supreme authority over punishments
sample_type: x-scope dynamic contraction via externally inserted override
fact_confidence: 99
classification_confidence: 97
x_scope_dynamic_transition_increment: true
transition_direction: contraction-via-external-global-override
new_independent_work_for_dynamic_transition: true
zn_increment: false
strict_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜邓布利多：原校内处分覆盖权 → 第25号教育令插入乌姆里奇最高处罚 override

## 1｜本轮问题

只测试同一人物、同一学校治理对象层的 current `x scope` 是否发生真实收窄：

> **邓布利多原本能够在校内规则/处分争议中覆盖乌姆里奇的决定；魔法部随后以第25号教育令把“所有处罚的最高权力”交给 High Inquisitor 后，邓布利多在该 punishment scope 的最终覆盖权是否真实下降。**

本轮不从“校长”“凤凰社领袖”“伟大巫师”等身份或能力标签倒推 `x`。

## 2｜事实链

### 阶段 A｜第25号教育令以前

官方 Harry Potter / Wizarding World 对第25号教育令的回顾明确说明：乌姆里奇此前不愿允许格兰芬多魁地奇球队重新组建，McGonagall 把争议提交给 Dumbledore，**Dumbledore insisted that the team be allowed to play**。这说明至少在这一校内规则/纪律争议窗口，乌姆里奇的决定可以被邓布利多现实覆盖。

因此阶段 A 不能只靠“Headmaster”称号判权，而是有 observable override：

```text
Umbridge refuses
→ appeal to Dumbledore
→ Dumbledore insists team may play
→ Umbridge's prior refusal does not remain final
```

### 迁移节点｜Educational Decree No.25

同一官方资料明确说明，乌姆里奇正因为此前被 McGonagall / Dumbledore 覆盖，推动第25号教育令；该令使 High Inquisitor 获得对所有 punishments 的 supreme authority，并能改变其他教职员工施加的处罚。

这不是名义职位变化，而是明确改变 `global_override` 的制度节点。

### 阶段 B｜教育令生效以后

在被测 punishment scope 内：

```text
pre:
Dumbledore can serve as higher internal override against Umbridge decision

↓ Educational Decree No.25

post:
High Inquisitor obtains supreme punishment authority
+ may alter punishments imposed by colleagues
→ Dumbledore's former school-internal final override is narrowed on this tested scope
```

注意：这不等于 Dumbledore 在 Hogwarts 的所有 `x` 归零，也不等于 Umbridge 已经取得学校一切对象层的 ultimate title。

## 3｜x 权限结构

```yaml
actor: Albus Dumbledore
object: Hogwarts current student-rule / punishment decision layer implicated by Educational Decree No.25
permission_type:
  - management
  - override
  - disciplinary final review
scope:
  pre: broader internal school override on tested rule/discipline dispute
  post: narrowed; punishment-final-override displaced by High Inquisitor
term:
  pre: current headmaster governance window
  post: Ministry-decree constrained window
revocability: external Ministry decrees can alter scope
return_obligation: none
same-layer_pre-effect_veto:
  pre: Umbridge refusal can be overridden through Dumbledore
  post: High Inquisitor holds supreme punishment authority on tested scope
global_override:
  pre: Dumbledore on tested internal dispute
  post: Umbridge / Ministry-backed High Inquisitor on punishment scope
ultimate_title: not tested; no claim about ownership of Hogwarts or every governance layer
decision_structure:
  pre: substantially unilateral higher-school override on tested dispute
  post: externally constrained / overridden on punishment scope
consultation_structure: plural / staff and Ministry actors may participate
final_decision_structure:
  pre: Dumbledore can make tested internal appeal outcome final
  post: punishment-final authority assigned to High Inquisitor
execution_structure:
  pre: school staff execute after Dumbledore override
  post: punishment structure subject to High Inquisitor supreme authority
co_decision_nodes:
  pre: none shown as mandatory co-approver for Dumbledore's tested override
  post: not a genuine joint-threshold structure; rather an externally inserted superior override node
```

## 4｜对象层与当前窗口

本轮严格限定在：

> **Hogwarts 校内规则/处罚的 final-override scope，尤其第25号教育令直接改写的 punishment authority。**

不外推到：

- Dumbledore 是否仍能任命所有教师；
- Hogwarts 全部教学课程；
- 学校住宿/城堡空间的所有权；
- 凤凰社；
- Wizengamot；
- Dumbledore 后续离校后的整体 lifecycle。

## 5｜关键压力测试

### 5.1 拿掉测试

拿掉“邓布利多原本完全没有现实 override，只是名义校长”这一假设，官方回顾中的前置事件无法解释：McGonagall 正是把 Umbridge 的拒绝提交给 Dumbledore，而 Dumbledore 的 insistence 改变了球队能否重组的现实结果。

因此阶段 A 的窄 `x` 有 observable effect。

### 5.2 反向测试

如果第25号教育令只是给 Umbridge 一个更响亮的头衔，却没有让她获得 supreme authority / alter colleagues' punishments，那么不能判 Dumbledore 的 punishment scope 真收窄。

当前恰好有相反证据：法令明确重分配 final punishment authority。

### 5.3 第三因素冻结

冻结：

- Dumbledore 的个人声望；
- Umbridge 的性格与政治阵营；
- Voldemort 是否归来；
- 学生对谁更喜欢；
- 后续 Dumbledore 离校；
- 后续 Umbridge 成为 Headmistress。

只保留“前置 observable override → 第25号教育令 → punishment final authority 重分配”，scope contraction 仍成立。

## 6｜最近邻排除

- `z`：校长受尊敬或学生认可不能替代现实 override。
- `nx`：魔法部给 Umbridge 的外部授权来源不等于 Dumbledore 的 current `x`；本轮只记录授权后谁拥有被测 final-override scope。
- `xn`：处罚流程怎么执行不等于谁拥有 final authority。
- `zx`：本轮不研究 Umbridge 是否扩权的木轴结论，只把她作为 competing override node；禁止把木轴理论迁入火轴。
- `zn`：Dumbledore 对学生、学校或反抗魔法部的原则不从此权限变化倒推，本轮 `zn_increment=false`。

## 7｜本轮新机制

本轮不是普通的“职位变小 / scope contraction”换皮，而是锁定一个此前动态槽中未单独压实的机制：

> **external override insertion can contract an already-real current `x` without making the actor's entire `x` turn off.**

更短：

> **新增上位 final-override 节点，可以让原有局部 `x` 收窄；这不是 `x overall off`，也不自动变成 joint/shared。**

这与 Palpatine 的 `joint-threshold → unilateral delegated execution` 形成不同方向、不同机制的对照：Palpatine 是授权阈值退出当前 act；Dumbledore 是新的外部 superior override 被插入当前 scope。

因此 dynamic transition 不能只记 `expansion/contraction`，还应记录：

```yaml
transition_mechanism:
  - external_override_inserted
pre_transition_global_override: Dumbledore on tested school-internal dispute
post_transition_global_override: High Inquisitor on punishment scope
retained_layers: other Dumbledore school functions not tested / not erased
lost_or_externalized_layers: punishment-final-override
```

## 8｜strict-v2

不启动 strict：

```text
zn = not independently tested / not locked
x transition = true
zn+x = not counted
strict = not tested
```

禁止从 Dumbledore 的身份、善恶立场、保护学生主题或最终反抗结局倒推 `zn`。

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
x_scope_dynamic_transition_increment: true
new_independent_work_for_dynamic_transition: true
ordinary_x_scope_positive_increment: false
x_scope_boundary_guard_increment: false
zn_increment: false
strict_increment: false
```

写入前仓库中枢仍显示 `dynamic_transition = 5 controls / 4 works`，但最新 Palpatine 记录已真实新增 1 control / 1 independent work，尚未同步中枢；因此写入本记录后的 evidence-layer 真值应为：

```text
7 dynamic-transition controls / 6 independent works
```

其中本轮新增作品为 `Harry Potter and the Order of the Phoenix`。这只是 evidence-layer 计数，不自动升级已经 pending-review 的 L4 专项，也不修改 L1/L2 canonical。

## 10｜来源

事实依据采用 HarryPotter.com / Wizarding World 官方资料：

- `5 times the number 25 was mentioned in the Harry Potter books`：明确回顾 McGonagall 先前把球队争议提交给 Dumbledore、Dumbledore 覆盖 Umbridge 的拒绝，并说明 Educational Decree No.25 使 High Inquisitor 获得对所有 punishments 的 supreme authority、可改变同事处罚。
- `How Dolores Umbridge made our skin crawl` 与官方 Umbridge fact file：作为角色/制度背景交叉核验，不用于从身份倒推权限。

## 11｜治理边界

- L4 `evidence-locked`；
- 不修改 L1；
- 不修改 `zn/x` 信息卡、准度卡或补卡；
- 不修改 strict canonical；
- `may_override_canonical: false`；
- 后续若同步 `x-scope` 中枢，应先吸收 Palpatine 与本记录，统一把 dynamic transition 从旧 `5/4` 更新为 evidence-layer `7/6`。
