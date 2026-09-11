---
type: ten-yuan-wood-axis-cleanup-final-adjudication
axis: zx-nx
status: cleanup-complete
maturity: evidence-locked-final-adjudication
created: 2026-09-11
may_override_canonical: false
canonical_source: 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
source_issue: 07-Codex大脑库/待审议问题_zx-nx木轴中间区_20260815.md
source_evidence:
  - 07-Codex大脑库/木轴清尾_zx-nx中间区到真zx最小差异闭环_20260911.md
  - 07-Codex大脑库/木轴清尾_zx-nx中间区到真nx跨作品最小差异闭环_20260911.md
cleanup_status: WOOD_CLEANUP_COMPLETE
l1_change_required: false
l2_change_required: false
sampling_status: stop_generic_expansion
---

# 木轴清尾｜zx↔nx 中间区最终层级裁定

## 0｜最终结论

本次合并审计结论：

```text
WOOD_CLEANUP_COMPLETE
```

木轴 `zx ↔ nx` 的“合法中间区”已经具备双端最小差异证据，不构成 L1 本体定义缺口。

最终层级裁定：

> 中间区属于案例/准度层必须显式允许的合法非端点状态；不修改 L1/L2 canonical，不为了二分完整性把案例强塞进 `zx` 或 `nx`。

## 1｜canonical 核对

当前 L1 v1.6：

```text
木 = zx ↔ nx
广义变量 = 最终方向与作用权来源
zx = 自身生成并占据方向
nx = 不占最终方向、沿既有通道续接
```

L1 同时明确：

```text
对立 = 同一对象层、同一核心变量、相反方向的结构操作
```

这一定义描述的是两个端点及其对立关系，并未要求所有现实案例必须穷尽地落在某一端。

因此，案例落在两端阈值之间并不与 L1 冲突。

## 2｜合法中间区的最终定义

```text
WOOD_MIDDLE_ZONE
=
主体保留当前对象层的最终方向 / 否决 / 重设资格
+
没有把最终方向外置给他者或既有通道
+
没有把自身方向通过现实作用权扩张成外部秩序重排
```

因此：

```text
保留最终方向资格 ≠ zx
方向来自外部 ≠ nx
```

中间区不是第三个木轴十元，也不是 `zx` 与 `nx` 的混合物，而是：

> 同一核心变量上尚未跨过任一端点阈值的合法案例状态。

## 3｜B 槽：中间区 → 真 zx 已闭环

证据：

```text
中间区控制：西游记｜唐僧女儿国
真 zx 显影：红楼梦｜鸳鸯拒婚
```

共享条件：

```text
主体都保留自己的最终方向资格
主体都拒绝外部替代方向
```

最小差异：

```text
中间区：
self-retained direction
+ external-effect scope remains defensive/private

真 zx：
self-retained/generated direction
+ direction enters public reality
+ external actors/order materially reconfigure around it
```

最终 `zx` 清尾门：

```text
zx = 自身方向资格
   + 自身方向被压入公共现实
   + 外部行动/秩序因该方向发生真实重排
```

所以“有主见、拒绝、坚持、赢了”均不能单独推出 `zx`。

## 4｜A 槽：中间区 → 真 nx 已闭环

证据：

```text
中间区控制：水浒传｜鲁智深拒官
真 nx：西游记｜小白龙鹰愁涧归队
```

共享条件：

```text
external_direction_exists = true
actor_can_act_voluntarily = true
```

最小差异：

```text
中间区：
external direction exists
+ actor retains final veto/reset right
+ actor can reject and choose another endpoint

真 nx：
external direction exists
+ final direction/role/channel remains external
+ actor does not occupy final reset position
+ actor actually continues through that channel
```

最终 `nx` 清尾门：

```text
nx = final_direction_not_occupied_by_actor
   + actual_channel_activation
   + continued_execution_along_existing_direction
```

所以“听从、接受、合作、外部先提出方向”均不能单独推出 `nx`。

## 5｜为什么不需要修改 L1

合并审计后，没有发现以下任何一种情况：

```text
1. zx 端点定义无法解释真 zx 控制；
2. nx 端点定义无法解释真 nx 控制；
3. 中间区必须新增第三个本体极；
4. 中间区会导致 zx/nx 在同一对象层上逻辑重叠；
5. 必须改变“最终方向与作用权来源”这一广义变量才能容纳证据。
```

相反，所有证据都能在现有 L1 变量中解释：

```text
zx 阈值未达
+
nx 阈值未达
=
合法非端点状态
```

因此：

```yaml
l1_change_required: false
l2_change_required: false
core_definition_changed: false
```

## 6｜同人物跨阶段 C 槽的最终处理

原 pending-review 将同人物跨阶段列为优先验证项之一。

经过 A/B 双端闭环后，C 槽不再是关闭 pending-review 的逻辑必要条件，原因是：

```text
A 已验证中间区与真 nx 的端点差
B 已验证中间区与真 zx 的端点差
两边都落在同一核心变量 final_direction_qualification / external_effect_scope 上
且均不要求修改 L1
```

因此 C 槽从“关闭门前置条件”降级为：

```text
future_optional_revalidation
```

未来若自然出现干净的同人物跨阶段案例，可用于复验；不得为了补齐形式而继续采矿。

## 7｜最终案例判定纪律

木轴案例从此统一按以下顺序：

```text
STEP 1
锁定 object_layer / current_window。

STEP 2
问最终方向、否决、重设资格在谁手里。

STEP 3
若主体不占最终方向，检查是否真实激活并持续沿既有通道推进。
满足 → nx candidate。

STEP 4
若主体保留/生成自身方向，检查该方向是否通过主体自身现实作用进入公共现实，并造成外部结构真实重排。
满足 → zx candidate。

STEP 5
若主体保留最终方向资格，但既未外置，也未发生公开现实扩张：
→ WOOD_MIDDLE_ZONE。
```

禁止：

```text
有主见 → zx
拒绝 → zx
坚持 → zx
胜利 → zx

外部提出方向 → nx
接受 → nx
听从 → nx
合作 → nx
职位安排 → nx
```

## 8｜最终 guard

```text
FALSE_ZX_SELF_ASSERTION
有主见/拒绝/坚持，但没有公共现实约束与外部结构重排。

FALSE_ZX_THIRD_PARTY_BORROW
主要由第三方权限造成外部变化，却全部倒灌给主体 zx。

FALSE_NX_EXTERNAL_ORIGIN
方向最初来自外部，就直接判 nx。

FALSE_NX_OBEDIENCE_WORD
看见接受/听从/合作就判 nx。

FALSE_NX_NOMINAL_ASSIGNMENT
只有任务/身份名义，没有现实通道续接。

FALSE_NX_TEMPORARY_ROLE_CONFUSION
把一次临时分工或职位动作当作最终方向资格外置。

FORCED_BINARY_WOOD_CLASSIFICATION
为了保持二分完整性，把合法中间区硬塞入 zx 或 nx。
```

## 9｜pending-review 最终裁定

```yaml
review_status: closed
resolution: case_accuracy_layer_legal_middle_zone
wood_middle_zone_defined: true
middle_to_true_zx: verified
middle_to_true_nx: verified_cross_work
same_person_stage_transition_required_for_closure: false
same_person_stage_transition_status: optional_future_revalidation
core_middle_zone_ambiguity_remaining: false
l1_change_required: false
l2_change_required: false
generic_sampling_allowed: false
cleanup_status: WOOD_CLEANUP_COMPLETE
```

## 10｜后续运行规则

木轴停止大规模泛采矿。

仅在以下情况重新开启专项复审：

```text
1. 十元解释器在真实输入中持续出现无法由现有门解释的 zx/nx 冲突；
2. 出现同一 object_layer 上 zx 与 nx 同时满足、且无法通过责任分账/SPLIT_IR 消解的案例；
3. 新 evidence 直接反驳现有最小差异门；
4. canonical 正本更新并改变木轴核心变量或端点定义。
```

否则：

```text
不继续扩样
不继续制造第 N 个“拒绝别人方案”案例
不修改 L1/L2
只把当前纪律供十元语义解释器调用
```

## 11｜最终状态

```text
WOOD_CLEANUP_COMPLETE

zx 端点：已闭环
nx 端点：已闭环
合法中间区：已定义
层级归属：案例/准度层
L1/L2：无需修改
泛采矿：停止
未来复验：仅异常触发
```
