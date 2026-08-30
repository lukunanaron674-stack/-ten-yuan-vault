---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
sample_type: x-scope-boundary-guard
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
work: 三国演义
character: 袁绍
stage: 第五回十八路诸侯会盟讨董
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_cross_work_increment: true
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜zn-x x scope 反向边界｜袁绍十八路诸侯会盟

## 0｜研究问题

同样都是“众人共同推举/授权一个领导者”，授权完成以后，是否必然形成该领导者对整个联合体的稳定单方 current `x`？

本轮只测十八路诸侯联盟的广域军事/后勤调度层，不给袁绍整个人物贴标签。

## 1｜剧情事实

《三国演义》第五回中：

1. 各镇诸侯会盟讨董，众人共同推袁绍为盟主；袁绍受推后宣告有功必赏、有罪必罚，诸侯口头表示听其号令。
2. 袁绍随即进行联盟级分工：命袁术总督粮草，孙坚为先锋，其余各据险要接应。
3. 但联盟内部并未因此形成稳定、排他的单方执行结构：济北相鲍信担心孙坚抢头功，绕开联盟既定先锋安排，暗派鲍忠另走小路抢先出战。
4. 袁术作为粮草节点，又能在孙坚前线作战期间自行扣住粮草不发，直接破坏袁绍已经建立的先锋/后勤部署，并造成孙坚军缺粮、自乱。

公共文本核验：
- 维基文库《三国演义》第005回：https://zh.wikisource.org/zh-hans/三國演義/第005回
- 同回可观察链：共同推盟主 → 袁绍分派先锋/粮草 → 鲍信暗自行军 → 袁术扣粮 → 联盟部署被现实绕开/破坏。

## 2｜x 对象层裁决

必须拆范围：

```text
source_decision_structure
= collective conferral

袁绍对愿意接入其调度的部分联盟节点
= operational command x 候选 / 局部成立

袁绍对整个十八路诸侯联盟的稳定单方最终 operational x
= 不成立 / 不锁
```

原因不是袁绍“能力差”，而是现实执行链给出两个硬反证：

```text
鲍信可绕开既定先锋安排自行出兵
+
袁术可扣住关键粮草节点并改变前线结果
```

所以“众人共同推举盟主”不能自动倒灌成“盟主个人对所有成员、所有后勤节点拥有无需再协调的单方广域处分权”。

## 3｜与宋江梁山样本的最小差异

此前《水浒传》宋江样本锁定：众头领共同推举宋江权居主位以后，在被测山寨日常组织/驻扎/号令层，宋江的 current operational 决定可以直接进入执行，因此：

```text
collective conferral
≠
mandatory joint execution on every current decision
```

袁绍本轮补出反方向：

```text
collective conferral
+
nominal alliance command
≠
substantially unilateral execution automatically follows
```

共同授权之后到底形成 unilateral、joint、shared 还是 fragmented execution，必须另看现实节点响应。

## 4｜拿掉测试

拿掉“袁绍拥有整个联盟单方最终调度 `x`”这一假设，只保留：

```text
共同推举盟主
+
袁绍可提出/发布联盟级分工
+
各诸侯与关键后勤节点保留相当独立行动能力
```

仍足够解释全部剧情事实。

因此“整个联盟单方 `x`”不是必要解释。

## 5｜反向测试

若要把袁绍的广域联盟 `x` 升到 unilateral，应看到至少：

```text
袁绍单方命令
→ 各成员不能绕开
→ 关键粮草/兵力节点不能在同一结果层自行否决
→ 违令会被袁绍现实纠正并恢复原部署
```

第5回当前窗口没有提供这条硬链，反而给出相反事实。

## 6｜最近邻与第三因素冻结

- `z`：袁绍门第、盟主名望、众人拥戴不等于现实广域 `x`。
- `nx`：盟主权限来源是共同推举，可作为来源关系；来源存在不证明授权后的 scope。
- `xn`：联盟分工与后勤组织回答“怎么运行”，不能替代“谁拥有最终单方决定权”。
- `zx`：袁绍公开发令不自动证明广域最终作用权已经现实占据。
- 冻结袁绍军事才能、人物评价、讨董成败、后世对联盟涣散的评价，只保留“命令是否能在同一对象层稳定生效”，结论不变。

## 7｜关键本体变量

```yaml
object: 十八路诸侯联盟的广域军事/后勤调度
subject: 袁绍
source_decision_structure: collective
nominal_role: alliance_leader
current_execution_structure: fragmented/shared-with-independent-nodes
unilateral_effect_on_whole_alliance: false
same_layer_pre_effect_or_parallel_override_present: true
independent_nodes:
  - 鲍信/鲍忠可绕开先锋安排
  - 袁术可扣粮改变前线结果
ultimate_alliance_disposition_x: false
```

## 8｜结论

锁定：

> **collective conferral does not determine execution structure。**

并新增反向边界：

> **共同推举/共同授权可以产生一个真实领导入口，但不能自动证明整个联合体已经进入该领导者个人的稳定单方 `x`；必须检查成员与关键资源节点是否仍能同层绕开、拒绝、扣留或改变同一结果。**

与宋江样本合起来，得到真正双向规则：

```text
共同授权
≠
以后每一步都必须共同决策

共同授权
也 ≠
以后自动变成领导者全域单方决策
```

授权来源与执行结构必须分别取证。

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_cross_work_increment: true
strict_increment: false
zn_increment: false
```

本轮不修改 L1、zn/x 信息卡、准度卡、zn补x 或 strict v2 canonical。

TASK_DONE:ZNX_XSCOPE_YUANSHAO_COLLECTIVE_CONFERRAL_NOT_UNILATERAL_ALLIANCE_X_20260830
