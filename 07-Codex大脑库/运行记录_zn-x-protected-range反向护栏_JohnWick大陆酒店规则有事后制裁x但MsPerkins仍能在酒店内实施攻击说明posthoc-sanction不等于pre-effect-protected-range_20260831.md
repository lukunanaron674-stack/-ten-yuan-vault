---
type: ten-yuan-fire-axis-protected-range-negative-guard
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: John Wick
character: Winston Scott
stage: Continental Hotel / Ms. Perkins violation window
criterion_version: protected-range-risk-test-v1_20260831
fact_confidence: 99
classification_confidence: 98
protected_range_positive_control: false
protected_range_negative_guard: true
protected_range_negative_guard_increment: true
protected_range_negative_guard_work_increment: true
x_scope_boundary_guard_increment: true
strict_verified_positive_increment: false
zn_increment: false
may_override_canonical: false
created: 2026-08-31
---

# 运行记录｜John Wick：事后制裁 x 不等于 pre-effect protected-range x

## 0｜研究问题

测试 New York Continental 的“no business on Continental grounds”规则：

> Winston 对违规者拥有真实会员处分/制裁 x，是否足以证明 Continental 已形成能在风险生效前稳定阻断攻击的 protected-range x？

结论：**不能。**

本轮新增边界：

```text
ex-post sanction / punishment x
≠
pre-effect exclusion / protected-range x
```

以及：

```text
institutional sanctuary claim
+ violation penalty
≠
stable protected-range
```

## 1｜事实链

### 1.1 规则与处分能力

电影中 Winston 明确告诉 John，Continental 内不得“conduct business”，违反会承担重罚。

来源：
- John Wick (2014) transcript：https://transcripts.simpleremix.com/script.php/john-wick-2014-CDSM
- IMSDb draft：https://imsdb.com/scripts/John-Wick.html

Winston 后续确实能对违规者作出现实处分：Ms. Perkins 的 Continental membership 被 revoked，随后由 Winston 的执行节点完成处决。

因此窄权限层可以锁：

```text
Winston local rule-enforcement / membership-sanction x = true
```

### 1.2 真实 risk-test

规则存在期间，Viggo 方面明确知道 Continental 有规则，仍因悬赏翻倍而让 Perkins 在酒店内尝试杀 John。

Perkins 实际进入 John 的房间并发动攻击；风险不是停在门外，也不是只存在威胁声明。

因此真实观测是：

```text
boundary/rule on
+ protected guest inside
+ hostile risk enters
→ attack still occurs inside the premises
```

后续的 membership revocation / execution 发生在违规以后。

所以此处能证明的是：

```text
post-violation deterrence / punishment structure = real
```

不能证明：

```text
pre-effect protected-range exclusion = real
```

## 2｜x 权限结构

```yaml
actor: Winston Scott
object: New York Continental rule-enforcement / guest membership discipline
permission_type:
  - management
  - rule-enforcement
  - membership-revocation
  - sanction
  - punishment
scope:
  local: Continental premises / membership discipline
  protected_range: not-locked
term: current management window
revocability: subject to higher Continental / High Table governance; not used to negate current local x
return_obligation: N/A
same_layer_pre_effect_veto: not observed for the Perkins sanction
 global_override: High Table / broader institutional hierarchy exists, but not needed to explain local sanction execution
ultimate_title: not tested
decision_structure: unilateral-on-tested-local-sanction
consultation_structure: not required for tested sanction
final_decision_structure: unilateral-on-local-sanction
execution_structure: Winston decision + Continental execution nodes
co_decision_nodes: none proven mandatory for the tested sanction
```

注意：本轮不把“Continental 是 sanctuary”当成 x 证据；只把已观察到的 rule-enforcement / sanction 记为真实 x。

## 3｜protected-range risk-test

### boundary-on
是。规则已经存在，并被 John / Winston / Viggo 一侧明确知道。

### object-inside
是。John 是住店客人，位于 Continental 房间内。

### real risk enters
是。Perkins 实际进入酒店房间并攻击 John。

### subject-specific x stable blocks / redirects risk before effect
**否。**

Winston 的真实权限在此窗口主要表现为违规后的 membership revocation / punishment，而不是在攻击生效前把 Perkins 排除在 protected range 外。

### third-party main protection
John 最终没有在这次房间攻击中被 Perkins 杀死，还涉及 John 自卫与 Marcus 的警示；这进一步禁止把“John 活下来”倒推成 Continental protected-range 成功。

因此：

```yaml
risk_test_status: real-risk-entered-and-boundary-breached
stable_protected_range_x: false / not-locked
posthoc_sanction_x: true
```

## 4｜最近邻排除

### x vs 名义安全区
“neutral ground / sanctuary”只是制度定义，不能替现实排除效果。

### x vs z
Continental 的威望、规则被尊重、会员资格重要，都不能替代现实 pre-effect exclusion。

### x vs xn
酒店如何登记、联络、执行处罚属于运行流程；不能因为流程完整就倒推出 protection-range 已经阻断攻击。

### x vs zx
Winston 对违规者施加处罚是现实作用，但本轮不把“制裁能力”扩大解释成“事前排除任何攻击的边界能力”。

## 5｜拿掉测试

拿掉“Continental 具有 stable protected-range”假设，只保留：

```text
规则存在
+ Winston 有真实事后制裁 x
+ Perkins 愿意冒险违规
+ 攻击真实进入酒店房间
+ 违规后受到处分
```

整条事实链仍然完整。

所以 stable protected-range 不是解释这些事件的必要条件。

## 6｜反向测试

如果要把同类制度性安全区升级为 protected-range 正向，至少需要观察到：

```text
规则/边界 on
+ 对象留在范围内
+ 风险真实进入测试
+ 主体自己的当前 x 在结果生效前稳定拒绝、拦截或迫使风险改道
```

仅有“违规后处罚很重”不够。

## 7｜第三因素冻结

冻结：
- John 的主角身份；
- Perkins 战力；
- Winston 与 John 的私人关系；
- High Table 世界观威望；
- 后续 John 自己违反 Continental 规则的剧情；
- 结局谁活下来。

只看“风险进入前是否被 subject-specific boundary x 阻断”与“违规后是否有真实 sanction x”。

结论不变。

## 8｜zn / strict-v2

本轮不锁 zn。

Winston 维护 Continental 规则可以由职位职责、组织制度、酒店治理利益和 High Table 体系解释；没有必要从“他处罚违规者”倒推独立内部不可让渡原则。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
strict_verified_positive_increment: false
```

## 9｜本轮锁定

```text
真实 sanction x
≠
真实 protected-range x

post-effect punishment
≠
pre-effect exclusion

规则被违反以后处罚违规者
≠
规则已经在风险生效前守住了范围
```

研究层命名：

`posthoc-sanction-is-not-pre-effect-protected-range`

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: protected-range-risk-test-v1_20260831

protected_range_positive_increment: false
protected_range_negative_guard_increment: true
protected_range_negative_guard_work_increment: true
x_scope_boundary_guard_increment: true
strict_increment: false
zn_increment: false
```

本条是 `protected-range-risk-test-v1_20260831` 下首份显式 current-v1 negative guard；《John Wick》为该槽新增独立作品。

## 11｜来源

- John Wick (2014) film transcript：https://transcripts.simpleremix.com/script.php/john-wick-2014-CDSM
- John Wick screenplay draft, IMSDb：https://imsdb.com/scripts/John-Wick.html
- Entertainment Weekly franchise recap（Continental no-business rule background）：https://ew.com/movies/what-need-remember-previous-john-wick-films-chapter-4/

## 12｜治理边界

- L4 evidence only；不得覆盖 L1/L2 canonical。
- 本条不把木轴理论迁入火轴。
- 不从 manager / assassin / neutral ground 等身份标签倒推 zn/x。
- 仅按 current observed x scope 与 protected-range risk-test 记录。
