---
type: ten-yuan-fire-axis-adversarial-audit
authority_level: L4
knowledge_status: deferred
status: deferred-under-attack
axis: fire
pair: zn-x
work: 红楼梦
character: 探春
stage: 第55回受托理家→赵国基丧银→第56回兴利除弊
sample_type: strict-positive-adversarial-audit
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: x-as-nonreplaceable-real-anchor-v1_20260827
attacks_record: 07-Codex大脑库/运行记录_zn-x严格补正向_探春理家公私分账原则zn与受托公账处分x双向缺口第二文学作品strict控制_20260828.md
supersedes_as_current_research_judgment: true
old_record_retained_as_evidence: true
fact_confidence: 99
classification_confidence: 93
strict_positive_status: suspended-pending-second-review
strict_positive_count_effect: -1
x_endpoint_status: retained-true
zn_endpoint_status: plausible-but-independence-below-95
zn_to_x_status: plausible
x_to_zn_status: not-proven-at-95
post_hoc_principle_narrowing_risk: true
institutional_norm_third_factor_not_frozen: true
may_override_canonical: false
created: 2026-08-29
---

# strict zn↔x 对抗审计｜探春理家：原 99/95 正向降为 deferred

## 1｜为什么重审

火轴 strict 普通正向达到三部文学作品后，L4 研究已进入“先打假、再扩张”的阶段。上一轮已经把晁盖共同财物处分从 99/95 降为 99/93 deferred；本轮只攻击探春“公私分账原则 zn × 受托公账处分 x”这一条，不从晁盖自动外推。

本轮结论不是“探春没有原则”或“探春没有公账处分权”，而是：

> **现有文本不足继续维持 strict `zn↔x` 95% evidence-locked；应降为 93% deferred，等待第二审。**

最小分歧集中在两处：

1. `zn` 的独立性仍可被“旧例 / 受托理家制度 / 公开问责 / 治理效率”部分替代，尚未证明这些第三因素拿掉后同一原则仍保持同强度最终排序；
2. 原 strict 记录把原则定义为“当自己现实受托处分公账时……”，把被测 `x` 直接嵌入 `zn` 命题，导致 `x→zn` 可能出现**事后缩窄 / 循环成立**：先把原则写成关于这份 x 的原则，再用“没有 x 就没有该原则的现实对象”证明 strict。

---

## 2｜剧情事实继续锁 99

第55–56回的事实链没有问题：

- 王夫人把家中琐碎事务暂交李纨，并命探春合同裁处，大事仍由王夫人主张；
- 赵国基丧银一事，李纨先拟四十两，探春叫回对牌，要求查旧账并按“家里 / 外头”的既有公例区分，最终裁为二十两；
- 赵姨娘以生母 / 私亲关系施压，探春没有因此额外加码；
- 第56回探春又主动发现学里八两、姑娘头油脂粉等重复开支，并推动削减重复公费、调整园务管理。

因此：

```text
探春任内局部公账 / 日常家务处分 x = true
```

本轮不撤销这个端点。

---

## 3｜第一处攻击：第55回最硬链首先由“查旧例 / 按制度”解释

原 99/95 strict 记录把第55回赵国基丧银作为 `zn` 的核心高压证据，但原文自身反复强调：

```text
先查旧账
→ 区分家里 / 外头公例
→ 按可核验旧规裁处
```

探春还明确担心“不按理”会被下人笑话、以后难见凤姐，说明当前选择至少同时受：

- 既有制度 / 旧例；
- 当前受托管理责任；
- 公开可核验与治理信誉；
- 下属对新管理者的现实观察与问责；

共同解释。

这并不排除内部 `zn`，但 current `zn` 准度卡要求拿掉制度要求、奖励、认可与观看后，原则仍应进入判断。

当前文本缺少一个更硬的最小差异：

```text
旧例允许探春偏私或制度本身保持中性
+
公开问责 / 凤姐评价 / 管理声望均不足解释
+
探春仍因内部原则拒绝用公账徇私
```

所以 `zn_independence` 不能继续稳锁 95。

---

## 4｜第56回能支持“主动治理原则”，但不能自动补足“公私分账”同一原则

第56回确实明显强于机械守旧：探春主动发现重复支出，连自己与姐妹使用的头油脂粉也纳入削减，并提出园务兴利除弊。

这支持：

> 探春不是只会照抄单条旧例，而有主动节用、核算、治理效率与公共家务责任的内部倾向 / 原则候选。

但这里存在**原则同一性问题**：

```text
第55回主冲突：私亲 / 人情 vs 既有公例
第56回主冲突：重复支出 / 效率 / 园务经营
```

从“削减重复开支”直接推出“公私分账 / 不徇私”是合理解释，但不是唯一解释。它也可以由：

- 节用；
- 治理效率；
- 受托责任；
- 兴利除弊的管理目标；

解释。

因此跨情境复验目前支持一个较宽的治理原则簇，却不足把“公私分账”这个窄 `zn` 提升到 95% 独立性。

---

## 5｜第二处攻击：`x→zn` 存在定义循环

原 strict 正向把 `zn` 限定为：

> **“当自己现实受托处分公共家务 / 公账时，不能因为私亲或自身便利任意改变公账边界。”**

然后反向拿掉 `x` 时又主张：

> 没有探春当前公账处分 `x`，这条原则就失去“由我处分的公账 / 我是否用自己的权力徇私”这一构成性现实对象。

这里存在明显的 circularity risk：

```text
先把 x 写进 zn 的定义
→ 再拿掉 x
→ 发现这个被 x 限定的 zn 失去对象
→ 判 x→zn strict 成立
```

如果允许这种操作，几乎任何现实权限都可以事后配出一个“我使用这项权限时应遵守某原则”的窄 `zn`，然后自动让 `x` 成为不可替代对象，strict 门会被语言定义绕开。

current canonical `zn补x` 要求的是：

> `zn` 单独仍成立，但拿掉 `x` 后重新出现“意义悬空 / 无对象承载”的真实缺口。

因此更严格的测试应先把 `zn` 在**不引用被测 x**的情况下独立命名，例如：

> “公共资源不得因私亲 / 自身便利而徇私。”

再问拿掉探春当前公账处分 `x` 后，它是否真的没有其他现实承载。

当前答案并不干净：这项原则仍可能作用于其他公共资源、其他受托事务、组织治理判断，甚至未来重新获得权限时继续调用。因此：

```text
x_to_zn_irreplaceable_real_anchor = not_proven_at_95
```

---

## 6｜x 端点本身仍保留

本轮不否定探春局部 `x`：

- 能叫停拟支；
- 能命查账；
- 能把同一笔支出裁为二十两；
- 能拒绝额外加码；
- 能推动部分重复公费停支和园务改制；
- 下属现实节点围绕这些裁处继续执行。

所以：

```yaml
x_endpoint: true
x_scope: delegated_local_public_account_and_household_disposition
```

同时继续保留：

> 局部 `x` ≠ 整个荣府最终 `x`；王夫人仍保留更高范围的家政权。

---

## 7｜strict 当前不能继续锁

由于 strict 必须先满足：

```text
zn independently true at >=95
+
x independently true at >=95
+
same window / same object layer
+
no equivalent third factor
+
non-circular x→zn irreplaceable-anchor test
```

本轮至少有两项真实分歧：

```yaml
zn_independently_true: plausible_but_contested_93
institutional_governance_third_factor: not_frozen
x_endpoint_true: true
x_to_zn_irreplaceable_anchor: contested_93
post_hoc_principle_narrowing_risk: true
strict_test_result: deferred
```

因此原：

```text
strict_zn_x_complement_locked: true
```

应暂停为：

```text
strict_zn_x_complement: deferred
```

---

## 8｜与晁盖降级的差异

两条都从 99/95 降到 99/93，但原因不同：

### 晁盖

主要问题是：

- 财物处分 `x` 可能属于“众头领 / 组织共同治理”，个人归因不够纯；
- 公共分配 `zn` 也可能被组织合法性与共同体需要替代。

### 探春

主要问题是：

- 局部公账 `x` 本身仍然较稳；
- `zn` 独立性受旧例 / 受托制度 / 治理效率第三因素干扰；
- 更关键的是 `x→zn` 的原论证把被测 `x` 嵌进原则定义，存在事后缩窄与循环成立风险。

所以不能从晁盖的失败自动判探春失败，但独立攻击后，探春同样不足维持 95。

---

## 9｜新的 strict 方法纪律

本轮新增两条 L4 护栏：

> **strict 的 `x→zn` 不能靠把被测 x 事后写进 zn 定义来成立。应先在不引用 x 的条件下独立命名 zn，再做拿掉测试。**

以及：

> **跨情境行为都表现为“治理得更好”并不自动证明同一窄 zn；必须证明不同场景中真正完成最终排序的是同一个原则，而不是旧例、效率、职责、声望等不同第三因素。**

建议新增 strict 合法启动 / 审计门：

```text
zn_definition_independent_of_tested_x
+
criterion_identity_across_contexts
```

这两项不改变 L2 canonical，只作为 L4 研究审计门。

---

## 10｜当前成熟度与计数影响

```yaml
fact_confidence: 99
classification_confidence: 93
knowledge_status: deferred
strict_positive_status: suspended-pending-second-review
strict_positive_count_effect: -1
```

在晁盖与探春都完成独立对抗审计后，**当前可靠文学 strict 正向应暂按：**

```text
诸葛亮：99/95 evidence-locked
探春：99/93 deferred-under-attack
晁盖：99/93 deferred-under-attack
```

也就是：

> **1 verified literary positive + 2 contested former positives**

历史 Washington 仍只作独立高纯对照，不计文学 cross-work。

这意味着“3 部文学 strict 已验证”的门槛当前被打回，原 strict pending-review 的旧计数需要后续消化同步，但本轮不为了改几行统计冒险整文件覆盖。

---

## 11｜恢复 ≥95 需要什么证据

探春如果要恢复 strict evidence-locked，至少需要补出以下之一：

1. **zn 独立性**：找到不由旧例、王夫人授权、凤姐治理规范、公开声望或纯效率目标解释的场景，探春仍以同一“公共资源不得徇私”原则承担真实代价；
2. **x→zn 非循环性**：先用不含“我当前受托公账 x”的语言独立锁定原则，再证明拿掉该 x 后，该原则在 current 窗口确实重新出现不可替代的现实落点缺口，而非仍可由其他公共对象稳定承载；
3. **跨情境同一性**：证明第55回私亲冲突与第56回重复开支冲突中，完成最终排序的是同一原则，而不是两个不同治理标准。

在这些条件出现前，不恢复 95。

---

## 12｜下一轮最高价值

下一轮优先攻击剩余唯一 verified strict 文学正向：

> **《三国演义》诸葛亮卤城换班 99/95。**

重点查：

1. “以信为本”是否能够被军纪 / 统军制度 / 组织信誉等外部规范充分解释，内部 `zn` 是否真的独立；
2. `x→zn` 是否也存在“把直属军队 / 自己发布的军令写进原则定义再反向证明不可替代”的循环风险；
3. 士兵后来自愿留营是否改变原决策的结果因果，或反而证明诸葛亮确有真实放行 `x`。

如果诸葛亮也跌破 95，火轴 strict 文学正向将被完整打回重新采矿阶段。