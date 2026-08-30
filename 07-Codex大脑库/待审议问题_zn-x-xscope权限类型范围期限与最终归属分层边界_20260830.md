---
type: ten-yuan-fire-axis-pending-review
authority_level: L4
knowledge_status: pending-review
status: pending-review
axis: fire
pair: zn-x
question: x是否必须按对象、权限类型、范围、期限、原节点与最终裁定层分账而不得由窄scope倒灌宽scope
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
positive_controls: 4
positive_cross_work_count: 3
boundary_guards: 6
boundary_guard_works: 4
dynamic_transition_controls: 1
dynamic_transition_works: 1
works: [西游记, 三国演义, 红楼梦, 水浒传]
may_override_canonical: false
created: 2026-08-30
updated: 2026-08-30
---

# 待审议｜zn-x x scope：权限类型、范围、期限与最终归属必须分层

## 0｜候选命题

同一 `x` 不能只用一个粗糙的 `true/false` 描述。

当前 3 部独立作品、4 个高置信正向控制共同支持：

> **`x` 必须至少写清：被测对象、权限类型、权限范围、期限/返还义务、原节点是否保留覆盖/撤回权、最终裁定层。某一窄 scope 的现实 `x=true`，不能自动倒灌为邻近更宽 scope 的 `x=true`。**

当前另有 6 条、4 部独立作品的高置信反向边界护栏共同支持：

> **更宽 scope / 永久最终归属未成立，也不能反向把已经直接生效的窄 current `x` 抹成 `x=false`。未来可撤回或上位保留更高范围覆盖权，与当前局部 `x=true` 可以同时成立。共享治理已经成立，也不能倒灌为领导者个人单方最终处分。共同授权的来源结构、广泛咨询结构，也不能预设授权或咨询后的 current execution / final-decision structure。**

另有 1 条高置信动态迁移控制支持：

> **`x` 的生命周期不只有 off→on / on→off；同一人物可从较窄真实 `x` 扩展为更宽 current `x`，必须记录迁移前 scope、迁移后 scope、触发节点、原 override node 与仍保留的 ultimate-title 限制。**

核心结构门：

> **future whole-block revocation ≠ same-layer pre-effect veto。**

> **source decision structure ≠ consultation structure ≠ final decision structure ≠ current execution structure。**

本文件只到 L4 `pending-review`，不得覆盖 current canonical。

## 1｜正向控制｜4 controls / 3 works

### A｜《西游记》孙悟空龙宫试兵器→金箍棒｜99/98
`trial-use / temporary handling x=true` 不等于 `stable possession/use/disposition x=true`；**能用 ≠ 归我**。

### B｜《三国演义》刘备借荆州｜99/98
current territorial governance/control 与 ultimate-title/permanent ownership 分层；**当前能管 ≠ 永久归我；未来有返还义务 ≠ 当前从未有真实 x。**

### C｜《三国演义》孙策质传国玉玺｜99/98
object possession/transfer 与 represented authority/sovereignty 分层；**能处分象征物 ≠ 能处分其代表权能。**

### D｜《红楼梦》探春受托理家→全园抄检｜99/97
local current management 与 global/final override 分层；**局部真实 x ≠ 全局最终 x。**

## 2｜反向边界护栏｜6 controls / 4 works

### A｜王熙凤协理宁国府｜红楼梦｜99/98
future revocability / higher-scope override 与 current local disciplinary `x=true` 可以同时成立。

### B｜天蓬元帅掌八万水军→被贬｜西游记｜99/98
future whole-block revocation 是 lifecycle end；**future revocability ≠ current non-possession。**

### C｜晁盖梁山共同财物治理｜水浒传｜99/98
shared-governance `x=true` 不等于寨主个人 unilateral final disposition；**“我们能处分” ≠ “我能单方处分”。**

### D｜宋江由众头领共同推举权居主位｜水浒传｜99/98
collective conferral ≠ joint execution on every current decision；共同授予来源不预设后续逐项共决。

### E｜袁绍十八路诸侯会盟｜三国演义｜99/98
collective conferral does not determine execution structure；关键成员和资源节点可绕开/扣留，因此 whole-alliance unilateral effect 不成立。

### F｜孙权赤壁前战降公议｜三国演义｜99/98
broad consultation ≠ joint/shared final decision；多人参与讨论不等于多人共同拥有最终处分权。

```text
consultation_structure = multi-node / broad
final_decision_node = 孙权
joint_final_veto_by_all_advisers = false / not observed
current_execution_structure = unilateral-final-decision-with-delegated-military-execution
```

本条来自《三国演义》既有 guard works 集合，因此只推进 control：`5→6`，independent works 保持 `4`。

## 3｜动态迁移控制｜1 control / 1 work

### 宋江：晁盖生前受限战役执行 x → 晁盖死后更宽全寨 operational x｜水浒传｜99/97

同一人物、同一组织中：

```text
阶段 A｜晁盖生前
delegated/campaign execution x = true
mountain-wide final launch / leader override x = false / not locked

↓ 晁盖死亡 + 众头领共同授予权居主位

阶段 B
current mountain-wide operational x = true
ultimate title = conditional / not-final
```

阶段 A 宋江可以带兵、传将令，但不能否决晁盖亲征曾头市；阶段 B 则可直接重分六寨、安排头领驻扎并调拨全寨军马。锁定：

> **已有窄 `x` 可以在组织节点变化后扩展为更宽 `x`，不是只能记录 `x off→on`。**

本条不增加普通 positive 或 boundary guard 计数，单列 `dynamic_transition_control`。

建议动态字段：

```yaml
scope_transition:
  from: 原权限范围
  to: 新权限范围
transition_trigger: 权限结构变化的真实节点
pre_transition_override_node: 迁移前覆盖节点
post_transition_same_layer_pre_effect_veto: 迁移后是否仍存在同层逐项否决
ultimate_title_after_transition: 最终归属是否仍有限制
```

## 4｜跨作品共同变量

```text
窄 current x 成立
≠
宽 x 自动成立

宽/永久 x 未成立
≠
窄 current x 不成立

source decision structure
≠ consultation structure
≠ final decision structure
≠ current execution structure

x lifecycle
≠ only on/off
```

研究层 current `x` 至少记录：

```yaml
object: 被测对象
subject: 掌握主体
permission_type: 接触/使用/保管/调用/管理/处分/否决/排除
scope: 局部/全局/对象子集
term: 临时/期限内/持续
source_node: 权限来自何节点
revocability: 是否可被撤回
return_obligation: 是否有返还义务
override_node: 谁仍可现实覆盖
current_same_layer_effect: 当前同层决定能否直接生效
same_layer_pre_effect_veto: 生效前是否仍需上位逐次放行/可被压回
ultimate_title: 最终归属是否成立
represented_authority: 凭证所代表权能是否另证
source_decision_structure: unilateral / collective / joint
consultation_structure: single-node / multi-node / broad
final_decision_structure: unilateral / joint / shared / vetoed
current_execution_structure: unilateral / joint / shared / vetoed / fragmented
co_decision_nodes: 共同决定节点
unilateral_effect: 主体单方决定能否直接改变结果
joint_veto: 是否存在同层共同否决
independent_execution_nodes: 是否存在可绕开/扣留/拒绝的同层节点
scope_transition: from → to
transition_trigger: 真实权限迁移节点
```

以上仅为 L4 方法字段建议，不自动修改 L2 数据结构。

## 5｜统一测试协议

1. **窄 scope 拿掉**：拿掉后相关当前行为不再可能直接生效，说明该窄 scope 有现实作用。
2. **宽 scope 反向门**：升级更宽 `x` 时另证原节点是否退出、上位是否仍可同层覆盖、期限/返还条件是否跨越、局部决定是否扩展到最终裁定。
3. **可撤回边界**：future revocation 不是 current `x` 反证；重点查 same-layer pre-effect veto。
4. **共同治理边界**：shared/joint → unilateral 必须证明其他同层节点不能共同否决，且主体单方决定能改变同一对象结果。
5. **授权/咨询/裁决/执行分账**：共同授权或广泛咨询不得预设最终裁决和执行结构。
6. **scope transition**：不能把迁移前窄 `x` 写成 `x=false`，也不能把迁移后宽 `x` 倒填到迁移前。

禁止倒灌：

```text
能试用 → 所有权
当前治理 → 永久产权
拿着印信 → 代表权力
局部管理 → 全局最终权
共享治理 → 个人单方最终处分
共同授权 → 后续必须逐项共同执行
共同授权 → 后续自动变成领导者全域单方执行
广泛咨询 → shared/joint final decision
迁移后宽 x → 迁移前已经拥有同样宽 x
```

## 6｜成熟度

```yaml
authority_level: L4
knowledge_status: pending-review
criterion_version: current-x-scope-distinction-v1_20260830
positive_controls: 4
positive_cross_work_count: 3
boundary_guards: 6
boundary_guard_works: 4
dynamic_transition_controls: 1
dynamic_transition_works: 1
positive_works: [西游记, 三国演义, 红楼梦]
boundary_guard_works_list: [红楼梦, 西游记, 水浒传, 三国演义]
dynamic_transition_works_list: [水浒传]
may_override_canonical: false
```

达到 pending-review 后，停止继续堆普通正向和同型普通护栏。

## 7｜下一步高信息增益

1. `shared/joint execution → unilateral execution` 或反向迁移的同人物/同对象最小差异；
2. `consultation structure → joint/shared final decision` 的真正正向最小差异；
3. same-layer pre-effect veto vs future whole-block revocation；
4. **scope contraction**：已有宽 `x` 是否在真实节点后缩成窄 `x`，与本轮 expansion 构成反向动态控制；
5. 表面 decision structure 不同、实际仍属于同一现实权限的反例；
6. 等授权审议，不自动向 L2 升格。

## 8｜不修改 canonical

本文件不修改 L1、`x/zn` 信息卡与准度卡、`zn补x_补卡` 或 strict v2 gate。

TASK_DONE:ZNX_XSCOPE_PENDING_REVIEW_4POS_3WORKS_6GUARDS_4WORKS_1DYNAMIC_1WORK_20260830