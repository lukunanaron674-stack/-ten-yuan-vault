---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 红楼梦
character: 王熙凤
stage: 第55回病中暂不能理事→王夫人临时转交琐碎家务给李纨/探春→凤姐保留筹划并经平儿回王夫人
sample_type: x-scope-dynamic-contraction-control
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
transition_direction: contraction
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜zn-x x-scope 动态收窄｜王熙凤病中直接掌家 x 收窄为间接筹划与平儿转递，而日常裁处临时转交李纨、探春

## 0｜本轮问题

只测试一个窄问题：

> 同一人物、同一荣府家务对象层里，原本较直接的 current operational `x` 是否会在现实条件变化后发生 scope contraction，而不是简单写成 `x=true → x=false`？

不研究王熙凤整体人格，不从“琏二奶奶”“能干”“当家人”身份倒推 `x`，不锁 `zn`，不启动 strict。

## 1｜剧情事实

第55回开头给出连续、相邻的权限变化链：

1. 凤姐因操劳、小月和后续病症，明确进入“不能理事”的阶段。
2. 但她并非完全从家务决策网络消失：虽不出门，仍“筹画计算”，想到事务会让平儿去回王夫人。
3. 王夫人因凤姐不能直接理事，自己承担大事最终主张。
4. 家中琐碎事务则被临时转给李纨协理；因李纨管理偏宽，王夫人又命探春与李纨共同裁处。
5. 文本还明确预期这是临时安排：原本计划凤姐将养一个月后仍交给她，只是病情随后拖长。

因此不是简单的“凤姐有权 / 凤姐无权”，而是：

```text
较宽直接日常掌家 operational x
↓ 疾病导致直接理事能力退出
重大事项：王夫人直接主张
琐碎日常裁处：李纨 + 探春 current x 上升
凤姐：保留筹划 / 建议 / 经平儿转递的间接影响接口
```

## 2｜x 证据

### 2.1 迁移前

本轮不靠职位名判断，而只锁“凤姐原本直接承担荣府日常理事”的现实 operational 层。第55回之所以写王夫人“失了膀臂”，并设置“将养好了仍交给她”，正说明病前该层原本由凤姐直接运行。

```yaml
pre_transition:
  object: 荣府日常家务 / 琐碎事务
  subject: 王熙凤
  current_operational_x: true
  execution_mode: direct
```

### 2.2 迁移后

病中不能继续直接理事后：

- 大事最终主张节点回到王夫人；
- 琐碎事务 current 裁处转给李纨 / 探春；
- 凤姐仍筹划，并能让平儿把事项送入王夫人决策链。

所以最准确不是：

```text
王熙凤 x = off
```

而是：

```yaml
post_transition:
  direct_household_operational_x: contracted
  direct_trivial-affair_disposition_x: transferred / not-current-primary
  advisory_planning_interface: retained
  relay_node: 平儿
  higher_final_node: 王夫人
```

## 3｜关键变量

本轮把 `x` 的动态变化拆成：

```yaml
scope_transition:
  direction: contraction
  from: direct-broad-household-operational-control
  to: indirect-planning-and-relay-with-direct-trivial-affair-disposition-transferred

transition_trigger:
  王熙凤疾病 / 不能直接理事

retained_layers:
  - 筹划计算
  - 通过平儿回王夫人的建议 / 信息输入接口

lost_or_externalized_layers:
  - 日常琐碎事务的直接 current 裁处
  - 病前更直接的执行管理入口

post_transition_final_node:
  王夫人（大事）

post_transition_current_operational_nodes:
  - 李纨
  - 探春
```

## 4｜拿掉测试

### 4.1 拿掉“凤姐病中仍然完全保持原 scope”假设

只保留原文：

```text
不能理事
+ 琐碎事务临时转李纨 / 探春
+ 王夫人大事自己主张
```

仍足以解释为什么凤姐的直接 operational scope 收窄。

因此“病中仍保留病前完整直接 x”不是必要解释。

### 4.2 拿掉“凤姐病中 x 完全消失”假设

只保留：

```text
虽不出门仍筹画计算
→ 想到事务让平儿去回王夫人
```

说明她仍未完全退出家务信息 / 建议链。

因此：

> **scope contraction ≠ x overall off。**

## 5｜反向测试

如果病中真正是：

```text
不再筹划
不再通过平儿输入任何事项
不再参与任何当前家务判断
所有事务均由新节点独立运行
```

才更接近 `x overall off / lifecycle exit`。

原文不是这样。

如果反过来文本显示：

```text
李纨 / 探春每一项琐碎决定仍必须先经凤姐批准才能生效
```

则不能判 direct scope 已真实转移，只能判代理执行。

当前第55回的设置是王夫人临时把琐碎事务交李纨、探春裁处，而凤姐的剩余接口主要经平儿“回王夫人”，所以更支持 scope contraction + node redistribution。

## 6｜最近邻排除

- `z`：凤姐声望、身份和“能干”不作为 `x` 证据。
- `nx`：病中通过平儿回王夫人可出现外部通道邻近，但本轮只记录权限层级变化，不用 `nx` 替代 `x`。
- `xn`：谁怎么传话、怎么安排事务属于运行方式，不能替代“谁当前能直接裁处”。
- `zx`：没有因为权限变化就自动判断扩权 / 显权。
- `zn`：本轮不从责任心、争强好胜、操劳或坚持工作倒推内部原则。

## 7｜对象层纪律

本轮只锁：

> **荣府日常家务 current operational / direct disposition scope。**

不锁：

- 王熙凤整个贾府永久最终权；
- 整个人物稳定本体；
- 病中所有 `x` 全部退出；
- 李纨 / 探春获得永久 full-disposition title。

## 8｜结论

本轮 evidence-locked：

> **`x` 的生命周期不仅有 on/off，也会发生 scope contraction。较宽、直接的 operational `x` 可以在现实条件变化后收窄为间接筹划 / 转递接口，同时把直接日常裁处分配给新节点。**

再压一句：

> **direct control → indirect influence / relay，并不等于主体从整个 x 网络消失。**

本条与《水浒传》宋江招安后“保留内部调兵、但最高战争方向上移朝廷”的 contraction 机制不同：

- 宋江：组织归属改变导致**高层任务方向上移**；
- 王熙凤：主体能力 / 状态变化导致**直接 operational 层转交，间接筹划接口保留**。

因此为第二部独立作品、第二种机制的 `x-scope dynamic contraction` 控制。

## 9｜成熟度与统计

```yaml
authority_level: L4
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98

x_scope_dynamic_transition_increment: true
transition_direction: contraction
strict_increment: false
zn_increment: false
ordinary_x_scope_positive_increment: false
boundary_guard_increment: false
```

按写入前专项中枢：

```text
dynamic transition = 2 controls / 1 work（均《水浒传》宋江）
```

本条加入后，证据层应更新为：

```text
dynamic transition = 3 controls / 2 independent works
works = [水浒传, 红楼梦]
```

本轮不自动修改 L2 canonical；专项 pending-review 如未同步该计数，记为中枢同步债。

## 10｜下一轮高信息增益

优先找第三种、第三作品的动态迁移，但不要继续复制“病中交权”。最值钱的是：

```text
阶段 A：unilateral current x
↓ 新增 same-layer veto / joint node
阶段 B：主体单方决定不再能直接生效
```

或反方向：

```text
阶段 A：shared / vetoed
↓ 原共同节点退出
阶段 B：unilateral decision 开始直接生效
```

这样能继续把 `x scope` 从静态分层推进为真正可审计的 decision-structure dynamics。
