---
type: ten-yuan-fire-axis-xscope-boundary-control
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: Minority Report
character: John Anderton
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: source-status-revocation-not-propagated-to-current-access-permission
fact_confidence: 99
classification_confidence: 97
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
protected_range_increment: false
may_override_canonical: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜《Minority Report》Anderton｜上游追捕/失去正常职务状态 ≠ 已传播到现实门禁 access-x

## 0｜启动对齐

写前以 `main@fb841b88f09b62ae335fae53e79c5f05afe28544` 为准，重读 `AGENTS.md`、文件权力总览、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度卡、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current 与最近 commits。current canonical 高于本记录；木轴仅迁移验证方法，不迁移理论结论。

P0 strict-v2 未发现同时满足 independent zn+x、same-window、same-object-layer、双向缺口和 competing-anchor freeze 的 ≥95 候选，因此不破零。本轮转入 P5/P2 邻接压力：测试“上游身份/组织状态已经转为追捕对象时，是否可以不做现实门禁测试就自动把既有 access-x 判为收缩”。

## 1｜作品 / 人物 / 阶段

- 作品：《Minority Report》（2002）
- 人物：John Anderton
- 被测对象层：PreCrime Headquarters / Precog Temple 的 biometric entry-access permission
- current window：Anderton 被 PreCrime 自己追捕 → 为避开城市 retinal tracking 接受换眼手术 → 保留原来的眼球 → 返回 PreCrime → 使用旧视网膜通过 Temple 门禁 → 进入并带走 Agatha。

公开剧情资料一致支持：Anderton 已是 PreCrime 的逃犯/追捕对象；他换眼就是为了躲避全城 retinal scanners；但返回 PreCrime 后，旧眼仍被内部门禁接受，使他能进入 Precog Temple。该现实 effect-test 是本轮核心，不能只从“前 chief”“原身份”或“他理论上应该被撤权”倒推权限状态。

外部核对：
- IMDb plot summary：Anderton undergoes eye transplant to evade retinal scanners, then uses his removed old eyes to enter the Temple and kidnap Agatha.
  https://www.imdb.com/title/tt0181689/plotsummary/
- Filmsite plot：Anderton返回 PreCrime，以维护人员伪装并用旧 retina bypass retinal scanner；随后进入 Temple，Witwer 才发现其 unauthorized presence 并追击。
  https://www.filmsite.org/minorityreport.html
- Wikipedia plot 交叉核对：Witwer/Fletcher 的 PreCrime team 正在追捕 Anderton；之后 Anderton 用原来的眼睛返回 PreCrime、进入 Temple 并带走 Agatha。
  https://en.wikipedia.org/wiki/Minority_Report_(film)

## 2｜zn 证据

本轮不锁 `zn`。

Anderton 寻找 minority report、调查系统错误以及后来拒绝按预测杀死 Crow，都有原则性候选，但当前被测窗口仍混有洗清自身罪名、求生、寻找儿子线索、逃避拘捕等高强 competing anchors。不能从“主角”“警察”“追求真相”或最终选择直接倒推稳定 zn。

```yaml
zn_current: not_locked
strict_v2_verified_positive: false
strict_v2_negative: false
strict_precondition_guard: false
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 3｜x 权限结构

```yaml
actor: John Anderton
object: PreCrime Precog Temple entry interface
object_layer: biometric access / physical entry permission

permission_type:
  contact_with_old_biometric_credential: true
  present_credential_to_scanner: true
  enter_temple_via_scanner: true_reality_tested
  ordinary_employee_status: no_longer_reliable_as_current_authority_source
  lawful_authorization_to_kidnap_Agatha: false
  global_PreCrime_command: false_or_not_tested
  data_disposition: not_inferred

scope:
  current_access: narrow_temple_entry
  organization_wide_authority: false_or_not_inferred

term:
  access_effect: survives_into_fugitive_window

revocability:
  upstream_status_or_enforcement_state: adverse
  biometric_permission_propagation: not_revoked_in_realized_scanner_state

return_obligation: n/a

same_layer_pre_effect_veto:
  scanner_gate: none_observed_when_old_retina_presented

global_override:
  PreCrime personnel can pursue/intercept after intrusion is detected

ultimate_title:
  not_used

decision_structure:
  entry_attempt: unilateral

consultation_structure:
  none

final_decision_structure:
  scanner_acceptance allows physical entry

execution_structure:
  biometric scanner -> door/Temple access effect

co_decision_nodes:
  none_on_tested_entry_gate

source_native_status_label:
  former/current chief status not used as ten-yuan proof

realized_effect_test:
  old_retina accepted -> Temple entered

causal_mapping_verified:
  yes_for_narrow_entry_access
```

## 4｜关键压力

错误推理：

```text
组织已经在追捕他
+ 他不再是正常当班的合法行动者
→ 所有过去由其身份带来的 current x 自动 OFF
```

本轮否定这个自动跳步。

更精确：

```text
upstream adverse status / enforcement decision
≠
permission revocation has propagated to every downstream interface
```

只有观察具体 permission layer：

```text
旧 biometric credential
→ current scanner 仍接受
→ narrow entry effect 实际发生
```

才可判该窄 `access-x` 在 current window 仍然存在。

因此锁定：

> **source/status revocation 或组织性敌对状态，不自动等于 downstream realized permission contraction；必须验证撤权是否真正传播到被测 current interface。**

同时禁止反向倒灌：Temple entry 成功只证明窄 access permission，不证明 lawful employment、global command、Agatha disposition 或组织级 authority。

## 5｜最近邻排除

### 对 Eddard Stark / formal-authority guard
Eddard 类材料锁的是“正式文件/来源权威存在，不等于 current realized x 已形成”。本轮是反向镜像：**上游来源/身份已经失去正常有效地位，也不等于所有 downstream permission 已经现实消失。**

### 对 Queeg / command contraction
Queeg 被解除后，现实 command-execution node 已经转移，所以同层 command-x 可以锁 contraction。Anderton 这里恰恰相反：被追捕是上游状态变化，但被测 scanner gate 在 effect-test 时仍响应旧 credential，因此不能仅凭 source status 判同层 access contraction。

### 对 Ghost Protocol / credential completion
Hendricks 是缺 mandatory credential → 补全 → downstream effect 成功。本轮不是 credential completion，而是**旧 credential 在 source-status 已恶化后仍未被 downstream gate 撤销**，属于 propagation failure / stale credential boundary。

## 6｜拿掉 / 反向

拿掉旧 retina，只保留“前 chief / 熟悉建筑 / 曾有权限”，若 current scanner 不允许进入，则该窄 access-x 不成立。

反向：如果 PreCrime 在追捕开始后已经把 Anderton biometric credential 加入 deny-list，且他再次把旧 retina 放到同一 scanner 时被拒绝，则可锁：

```text
source revocation/adverse status
+ revocation propagated to tested interface
+ repeat reality-test fails
→ access permission contraction
```

因此本轮不是“授权永远不会随身份变化”，而是：**不观察 propagation + reality-test，不能自动推断 contraction。**

## 7｜第三因素冻结

冻结：
- Anderton 的 chief 身份标签；
- 主角能力、战斗胜负与剧情便利；
- 维护工伪装只解释避开人类识别，不替代 retinal scanner effect；
- Witwer 后续追捕只能证明更高层 enforcement node 仍存在，不能反向抹掉已经发生的门禁 entry effect；
- 系统安全漏洞/剧情漏洞评价不影响十元判定，`x` 测的是作品 current reality 中权限有没有现实生效。

## 8｜判定 / 成熟度

```yaml
sample_type: source-status-revocation-not-propagated-to-current-access-permission
x_scope_boundary_guard: true
x_scope_dynamic_transition: false
strict_v2_verified_positive: false
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
```

这是新型 boundary mechanism，不是普通“局部权限正例”堆量：**status/source layer 与 current downstream permission state 可以暂时不同步。**

## 9｜统计变化

写前已确认 Christof 后 ordinary boundary effective layer 为：

```text
18 boundary guards / 15 independent works
```

《Minority Report》此前未进入 current x-scope boundary-work 集合，且 mechanism 与既有 formal-conferral / source-authority guard 方向相反，因此：

```text
18 / 15
→ 19 boundary guards / 16 independent works
```

其余：

```yaml
x_scope_positive: +0
x_scope_dynamic: +0
decision_structure_calibration: +0
protected_range_positive: +0
protected_range_negative: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

达到 pending-review 后不修改 L1/L2 canonical。

## 10｜下一轮最高信息增益

P0 继续寻找 strict-v2 首个 verified positive，不降门。

若 P0 仍无 ≥95，优先寻找本轮的真正 contraction 镜像：

```text
same actor
+ same object/interface
+ previously reality-tested access x=true

真实 revoke / deny-list / credential rotation

repeat reality-test on same interface fails
→ access x contraction

同时 lower-level credential possession 可仍 true
```

这会把“上游撤权声明”“撤权传播到接口”“现实 access effect 消失”三层彻底分账。