---
type: ten-yuan-fire-axis-x-scope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 孙权
stage: 第43-44回赤壁前战降决策
sample_type: x-scope-boundary-guard
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_cross_work_increment: false
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜孙权赤壁前战降公议：咨询结构不等于共同处分

## 1｜被测问题

只测试一个窄问题：

> 东吴文武多人参与“战 / 降”讨论，是否意味着该战略对象层已经形成 `joint/shared decision x`，孙权个人不能单方作最终裁决？

不讨论孙权整体人格，不从吴主身份、阵营或胜负倒推 `zn/x`。

## 2｜剧情事实链

### 阶段 A｜广泛咨询真实存在

曹操大军南下后，张昭等文臣主降，鲁肃主战，周瑜回柴桑后又分别听取文武两派意见。孙权本人也持续听取鲁肃、诸葛亮、周瑜等人的判断。

因此：

```text
consultation_structure = multi-node / broad
```

### 阶段 B｜最终裁决节点并未因此变成共同表决

周瑜明确主张抗曹后，孙权最终决定破曹，并以砍奏案、禁止再言降曹的公开动作固定战向；随后把佩剑交周瑜，任周瑜为大都督、程普为副都督、鲁肃为赞军校尉，使军令进入现实执行链。

因此被测“战 / 降最终战略裁决”对象层：

```text
consultation_input = plural
final_decision_node = 孙权
current_strategic_decision_x = true
joint_final_veto_by_all_advisers = false / not observed
```

## 3｜x 判定

本轮锁定的是：

> 孙权对赤壁前东吴是否正式进入抗曹战争的最终战略裁决 `x`。

证据不来自“吴主”称号，而来自：

1. 多方意见互相冲突；
2. 最终不是按多数文臣意见机械执行；
3. 孙权可以公开终止“再降曹”这一选项；
4. 其裁决直接触发周瑜受命、军队进入抗曹执行链。

因此：

```yaml
object: 东吴当前战/降战略选择
subject: 孙权
permission_type: final strategic decision / appointment / authorization
scope: 赤壁前当前对曹战略
current_same_layer_effect: true
consultation_structure: plural
current_execution_structure: unilateral-final-decision-with-delegated-military-execution
joint_veto: false / not observed
```

## 4｜新增 x-scope 边界

锁定：

> **consultation structure ≠ decision structure。**

更短：

> **“很多人都参与讨论” ≠ “很多人共同拥有最终处分权”。**

必须分开记录：

```text
谁能发言 / 提案 / 劝说
≠
谁能同层否决
≠
谁拥有最终裁决
≠
谁负责执行
```

这条与现有两类边界互补：

- 宋江：`collective conferral ≠ joint execution on every current decision`；
- 袁绍：`collective conferral ≠ automatic unilateral control over whole coalition`；
- 孙权：`broad consultation ≠ joint/shared final decision`。

所以 `source_decision_structure / consultation_structure / final_decision_structure / execution_structure` 应继续分账。

## 5｜拿掉测试

拿掉“所有参与讨论者都共同拥有最终裁决权”这一假设，只保留：

```text
多人提供冲突意见
→ 孙权吸收/权衡
→ 孙权作最终战向裁决
→ 周瑜获授权进入执行
```

整条现实因果仍完整。

因此 `joint/shared final-decision x` 不是解释该结果的必要条件。

## 6｜反向测试

若要把此对象层升级为 shared/joint final decision，至少应看到：

```text
孙权提出战/降裁决
→ 仍需同层成员共同批准
或
任一共同节点可在结果生效前否决
→ 未共同通过则不能进入执行
```

当前桥段没有这条硬链。

## 7｜第三因素冻结

冻结：

- 孙权吴主名位；
- 张昭/周瑜声望；
- 曹军强弱；
- 赤壁最终胜负；
- 孙刘联盟后续结果。

只保留“谁参与咨询、谁能最终说不、谁能让战略进入执行”，结论不变。

## 8｜最近邻排除

- `z`：受拥戴/被认可不能代替现实最终裁决。
- `nx`：周瑜、鲁肃、诸葛亮提供意见/路径，不等于拥有同层最终战向。
- `xn`：周瑜后续怎么部署军队属于运行方式，不回答最终战/降由谁裁决。
- `zx`：公开砍案有显权外观，但本轮只测既有战略裁决权的 current scope，不新增扩权判断。

## 9｜zn / strict

本轮不锁 `zn`。

孙权抗曹可以由政权生存、自身地位、军事判断、联盟利益等多因素解释；没有必要从“决意抗曹”倒推不可轻易让渡的内部原则。

因此：

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_increment: false
```

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_cross_work_increment: false
```

按写入前专项状态 `5 boundary guards / 4 works`，本条属于《三国演义》既有作品集合，因此 evidence 层应推进为：

```text
6 boundary guards / 4 independent works
```

这是中枢同步债，不自动升格 L2。

## 11｜本轮短规则

> **咨询结构不等于决策结构。多人参与讨论、提案和劝说，不自动形成 shared/joint `x`；必须另查谁有同层 pre-effect veto、谁能作最终裁决、谁的决定能直接进入执行。**

TASK_DONE:ZN-X-FIRE-XSCOPE-SUNQUAN-CONSULTATION-VS-DECISION-20260830
