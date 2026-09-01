---
type: ten-yuan-fire-axis-adversarial-audit
authority_level: L4
knowledge_status: evidence-locked
status: correction-locked
axis: fire
pair: zn-x
question: 外部任务方向来源变化能否在未证明permission迁移时被计为x-scope动态收窄
criterion_version: current-x-scope-distinction-v1_20260830
work: 水浒传
character: 宋江
fact_confidence: 99
classification_confidence: 99
x_scope_dynamic_transition_control_delta: -1
x_scope_dynamic_transition_work_delta: 0
strict_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-09-01
---

# 审计记录｜宋江招安后：task-source 变化 ≠ x-scope contraction 自动成立

## 结论

本轮用仓库最新的“能力层与权限掌握层分账”方法反打旧 dynamic controls，发现宋江招安后那条旧 `x-scope contraction` 存在新的跨轴污染：

```text
最高任务/方向由梁山内部形成
→ 招安后由朝廷诏令输入
```

这能证明上位 `task-source / direction-source` 变化，但没有 ≥95 证据证明宋江本人在同一对象层的一项已确认 `x permission` 被撤销、转移或加入 mandatory veto。

因此原 dynamic 分类撤回，原文件改为 `superseded / classification-corrected`。

## 关键最小差异

### 不是 x-scope 的充分证据

```text
上级出现
任务来自外部
行动目标由他人指定
组织失去独立战略来源
```

如果主体仍保留原对象的占有、调用、调配、管理、处分、否决/排除等已确认 permission，上述事实不能单独判 x-scope contraction。

### 能重新打开 x-scope 的证据

至少要看到一种真实迁移：

- `permission true→false`；
- 原可调用/处分对象子集被移出；
- 新 mandatory veto / co-approval node 插入；
- credential / authorization entitlement 被撤回；
- final decision gate 从主体转移；
- 同一层 pre-effect override 新增且真实阻断原单方生效。

## 最近邻排除

- 与 The Martian / Jurassic Park 的 capability correction 不同：本条不是“能力强弱”，而是“方向/任务来源”。
- 与 Dumbledore external-superior-override control 不同：后者需要证明上级节点真实覆盖了原已成立的同层 permission；本条旧证据只证明朝廷输入战争任务。
- 与 Ramius credential migration 不同：Ramius 有明确 mandatory credential 分布变化；宋江旧案没有同等级 permission-node 证据。

## 统计

current registry 在本轮启动时记：

```yaml
x_scope_dynamic_transition_controls: 12
x_scope_dynamic_transition_works: 10
```

撤销宋江 contraction 后有效证据层：

```yaml
x_scope_dynamic_transition_controls: 11
x_scope_dynamic_transition_works: 10
```

《水浒传》仍由宋江 expansion control 留在 dynamic-work 集合，因此 work 不减。

## strict / zn

```yaml
zn_current: not-locked
strict_test_allowed: false
strict_verified_positive_increment: false
strict_deferred_increment: false
```

strict-v2 verified positive 仍为 0。

## 下一步攻击

下一轮优先检查其他旧 dynamic controls 是否存在：

```text
source-node / direction-node / role-title / organization-independence
被偷换成
permission / object-scope / veto / disposition
```

其中最值得审的是任何写成“任务源上移/下移”“角色被任命/撤职”但没有明确 permission true↔false 的条目。
