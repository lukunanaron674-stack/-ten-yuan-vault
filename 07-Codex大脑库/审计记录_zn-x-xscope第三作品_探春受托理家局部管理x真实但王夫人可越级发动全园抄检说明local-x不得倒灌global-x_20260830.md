---
type: ten-yuan-fire-axis-x-scope-control-audit
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
sample_type: x-scope-boundary-secondary-use
work: 红楼梦
character: 探春
stage: 第55-56回受托理家 → 第74回王夫人发动全园抄检
fact_confidence: 99
classification_confidence: 97
x_scope_boundary_control_increment: true
x_scope_cross_work_increment: true
strict_increment: false
may_override_canonical: false
updated: 2026-08-30
---

# zn ↔ x 火轴 x-scope 第三作品控制｜探春：局部管理 x 真实，但不得倒灌全局最终管理 x

## 1｜研究问题

本轮不重新判断探春“有没有理家能力”，只测试同一组织对象中两个不同 scope：

1. 探春在受托理家窗口内，是否拥有日常家务 / 公账 / 局部事务的现实 `x`；
2. 该局部 `x` 是否因此可以倒灌为“整个荣府 / 大观园全局最终管理与覆盖权”的更宽 `x`。

结论：

```text
local/current delegated management x = true
global/final override x = false / not locked
```

## 2｜既有剧情事实

### 2.1 第55-56回：局部 x 真实成立

既有火轴 evidence 已锁：王夫人让探春参与理家，探春能对日常公账、丧银、重复支出和部分园务作出现实裁处；决定会直接改变支出和管理节点，不需要每一笔都重新逐次申请同一权限。

所以：

```yaml
local_household_management_x: true
local_account_disposition_x: true
```

这不是“小姐身份”或“有才干”倒推，而是现实决定能生效。

### 2.2 第74回：全局 scope 仍由上位节点覆盖

既有火轴 pending-review 已锁：王夫人仍能直接发动覆盖整个大观园的抄检。探春可以在自己院内拒绝继续搜自己的丫头、守住局部边界，但不能取消全园抄检，也不能把自己的局部处分位置变成整个组织的最终覆盖权。

所以：

```yaml
global_search_authorization_x: false_for_tanchun
global_final_override_x: false_for_tanchun
upper_node_global_override_present: true
```

## 3｜本轮 x-scope 最小差异

```text
同一人物：探春
同一组织：荣府 / 大观园

局部日常事务：
现实裁处可直接生效
→ local x = on

全园覆盖性抄检：
王夫人可越级发动
探春只能守局部、不能取消全局
→ global/final x ≠ on
```

因此：

> **局部真实 `x` 不得向更高范围的全局 `x` 倒灌。**

更短：

```text
local x = true
≠
global x = true
```

## 4｜拿掉与反向测试

### 4.1 拿掉身份

拿掉“贾府小姐 / 探春有才干”等身份标签，只保留第55-56回现实裁处生效，局部 `x` 仍成立。

### 4.2 拿掉局部 x

若探春只能提出建议、所有日常决定都必须重新交王夫人批准，则当前局部 `x` 会下降；原文本并非如此。

### 4.3 反向测试全局 x

要把全局 `x` 锁给探春，至少应看到：

```text
王夫人或其他上位节点不能绕过探春直接发动同层覆盖性命令
+
探春可以现实取消 / 否决 / 改写整个园区层面的同类决定
```

第74回恰好给出相反证据，因此 global `x` 不能锁。

## 5｜第三因素冻结

冻结：

- 探春强势或能干的人物评价；
- 王善保家的冲突戏剧性；
- 探春是否道德正确；
- 她是否讨厌抄检。

只保留：

```text
谁的决定在什么范围直接生效？
谁能越级覆盖？
谁能取消整个结果？
```

结论不变。

## 6｜最近邻排除

- `x vs z`：被称赞会管理不等于权限范围扩大。
- `x vs nx`：权限来源来自王夫人，不否定授权后局部 current `x`；但上位来源仍可能限定 scope。
- `x vs xn`：会设计流程不等于拥有全局最终处分权。
- `x vs zx`：本轮只测既有权限范围，不把公开反抗或强势表现写成扩权。

## 7｜与现有 x-scope 控制的关系

当前同 criterion 已有：

```text
《西游记》孙悟空：temporary trial-use ↔ stable possession/full disposition
《三国演义》刘备：current territorial control ↔ ultimate title/permanent ownership
《三国演义》孙策：credential-object disposition ↔ represented authority/sovereignty
《红楼梦》探春：local current management ↔ global/final override
```

共同支持：

> **`x` 不是一个粗糙布尔值；对象、权限类型、范围、期限、原节点与最终裁定层必须分别审计。某一窄 scope 的 `x=true`，不能向邻近更宽 scope 自动传播。**

## 8｜成熟度与统计

本轮是既有高纯事实资产的第二研究用途，不重复增加名义/现实 `x` pending-review 的控制数；只计 `x scope` criterion：

```yaml
fact_confidence: 99
classification_confidence: 97
x_scope_boundary_control_increment: true
x_scope_cross_work_increment: true
strict_positive_increment: false
strict_negative_increment: false
```

加入后，`x scope` current v1 的真实状态为：

```yaml
controls: 4
independent_works: 3
works: [西游记, 三国演义, 红楼梦]
```

已达到同 criterion 跨 3 独立作品的 L4 pending-review 门，但不得自动修改 L2 canonical。

TASK_DONE:ZNX_XSCOPE_TANCHUN_LOCAL_VS_GLOBAL_20260830
