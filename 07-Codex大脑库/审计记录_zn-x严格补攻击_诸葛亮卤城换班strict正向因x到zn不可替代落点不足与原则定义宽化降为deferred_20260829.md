---
type: ten-yuan-fire-axis-adversarial-audit
authority_level: L4
knowledge_status: deferred
status: deferred-under-attack
axis: fire
pair: zn-x
work: 三国演义
character: 诸葛亮
stage: 第一百零一回卤城换班军限足→魏军急攻→拒绝临时留班→应去军士获准当日离营
sample_type: strict-positive-adversarial-audit
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_意义核心与掌握边界互补正式机制_20260719
  strict_gate: x-as-nonreplaceable-real-anchor-v1_20260827
  added_audit_gate: zn-definition-independent-of-tested-x-v1_20260829
attacks_record: 07-Codex大脑库/运行记录_zn-x严格补正向_诸葛亮卤城换班军令信用zn与现实留放处分x双向缺口首份strict控制_20260828.md
supersedes_as_current_research_judgment: true
old_record_retained_as_evidence: true
fact_confidence: 99
classification_confidence: 93
strict_positive_status: suspended-pending-second-review
strict_positive_count_effect: -1
x_endpoint_status: retained-true
zn_endpoint_status: retained-plausible-high
zn_to_x_status: plausible-high
x_to_zn_status: not-proven-at-95
post_hoc_principle_narrowing_risk: true
equivalent_real_anchor_not_frozen: true
institutional_military_norm_third_factor: partial-risk
may_override_canonical: false
created: 2026-08-29
---

# strict zn↔x 对抗审计｜诸葛亮卤城换班：原 99/95 正向降为 deferred

## 1｜本轮结论

本轮专门攻击火轴当前最后一份仍为 `99/95 evidence-locked` 的文学 strict 正向：

> 《三国演义》第一百零一回，诸葛亮卤城换班。

事实链继续锁 `99`：诸葛亮此前已建立分班轮换；四万军士期限已足；魏军急攻时杨仪建议暂留；诸葛亮以“用兵命将，以信为本；既有令在先，岂可失信”为由拒绝，并先允许应去军士当日离营。军士后来自愿留下发生在放行决定之后。

但在加入 2026-08-29 strict 新审计门后，原 `x→zn=true` 不能继续稳锁 95%。当前应降为：

```text
事实 99
分类 93
deferred-under-attack
```

这不是否定诸葛亮的现实军令处分 `x`，也不是否定“守信”原则候选；最小分歧集中在 strict 反向门：

> **拿掉本轮直属军队留放处分 `x` 后，原则是否真的失去不可替代现实落点？**

当前答案不足 95%。

---

## 2｜x 端点继续成立

被测对象层仍是：

> 诸葛亮对当前直属蜀军换班、留营、放行的现实军令 / 处分边界。

证据保持：

- 能建立轮换制度；
- 能决定应换班军何时离营；
- 魏军急攻时“是否临时留下四万人”由杨仪提交诸葛亮裁决；
- 诸葛亮的决定可以直接进入现实执行；
- 后来的军士自愿留下不能倒写成诸葛亮原本没有放行处分权。

因此：

```yaml
x_endpoint: true
x_scope: current_direct_subordinate_troop_rotation_retention_release
```

本轮不撤销 `x`。

---

## 3｜zn 端点仍有力，但必须先脱离被测 x 独立命名

原记录把 `zn` 写成：

> 对直属军队已经由自己正式发布并形成期待的轮换军令，主帅不得因为临时战术利益而单方破例；统军信用反过来约束掌令者本人。

这段写法直接把“直属军队 / 自己发布军令 / 掌令者”嵌进原则定义，与探春审计暴露出的循环风险相似。

为了避免先把 `x` 写进 `zn`，本轮先用不引用被测 `x` 的语言重写原则：

> **已经由主体公开作出、并使相关方形成稳定合理期待的规则 / 承诺，不应仅因当前短期利益就被主体任意毁弃；主体自己也受已建立信用约束。**

在这个更独立的定义下，第101回仍然强力支持 `zn` 候选：

- 魏军急攻使破例留兵具有明确即时军事收益；
- 诸葛亮仍让“既有令在先、不可失信”完成最终排序；
- 军士感恩发生在决定之后，不能解释决定本身。

所以本轮不是把 `zn` 判假，而是：

```yaml
zn_endpoint: plausible-high
zn_independence: stronger_than_tanchun_but_not_the_strict_failure_point
```

第96回斩马谡、自请贬三级只能作为“掌规则者本人也受规则约束”的较宽旁证，不能直接证明它与第101回“军令信用”完全是同一窄原则；这一点不再用于抬高 strict 反向门。

---

## 4｜方向一 `zn→x` 仍然较稳

保留现实留放处分 `x`，拿掉上述守信原则：

```text
诸葛亮仍能留兵
仍能放行
仍能变更轮换
```

但会重新出现明确缺口：

- 什么时候即使短期更有利，也不应撤回已公开形成期待的决定；
- 主体拥有变更权时，什么内部标准约束其任意改令；
- 现时军事便利是否可无限覆盖已经建立的信用。

所以：

```text
zn→x = plausible-high / retained
```

该方向不是本轮降级主因。

---

## 5｜核心攻击：`x→zn` 的“不可替代现实落点”不足 95

原 99/95 记录主张：

> 拿掉诸葛亮对这批直属军队的留放处分 `x` 后，原则失去“我的直属军队—我的军令—我的留放对象”这一不可替代现实结构。

加入新的 `zn-definition-independent-of-tested-x` 审计门后，这一论证不再充分。

如果独立原则是：

> **主体已公开形成稳定期待的规则 / 承诺，不应因短期利益任意毁弃。**

那么拿掉“本轮四万直属军士的留放处分 `x`”后，原则仍然可以拥有等价现实承载：

- 对其他已发布军令的信用；
- 对将领 / 部属作出的其他明确承诺；
- 轮换、赏罚、期限、任免等其他由主体建立稳定期待的军事规则；
- 更一般地，主体自己对已经公开形成期待的决定保持一致。

也就是说，本轮被测 `x` 很可能是：

> **当前最强、最直观的现实落点**

而不是：

> **该 `zn` 不可替代的唯一 / 构成性现实落点。**

因此：

```yaml
x_to_zn_irreplaceable_real_anchor: not_proven_at_95
x_to_zn_current_judgment: 93
```

这与关羽 / 晁盖“不伤无关者” / 唐僧“不轻伤性命”几个 strict 负控制的核心问题同类：

> 当前被测 `x` 可以强化、具体化、放大原则执行，却未必是原则唯一可持续承载的现实对象。

---

## 6｜循环定义风险：与探春同类，但程度稍轻

原记录的 `zn` 直接写入：

```text
直属军队
自己发布的轮换军令
掌令者本人
```

然后反向拿掉直属军队处分 `x`，自然会发现“这条关于直属军队军令的原则失去对象”。

这会形成潜在结构：

```text
把 x 的对象边界写进 zn
→ 拿掉 x
→ zn 失去刚才写进去的对象
→ 判 x→zn strict 成立
```

本轮不认为这是纯粹语言作弊，因为原文确实是军事信用场景，且“用兵命将，以信为本”天然在统军域内；但它足以让 95 分 strict 失去安全裕度。

因此 strict 新硬门继续适用：

> **先在不引用被测 `x` 的语言下独立命名 `zn`，再做反向拿掉。**

---

## 7｜第三因素冻结

### 7.1 军纪 / 组织信誉

“以信为本”本身也具有军事治理与组织信誉功能：守约可提高军心、长期服从和组织可靠性。

这不自动排除内部 `zn`，因为当前即时战术利益明显支持留兵；但它说明：

> 该选择同时可被“长期统军信用 / 组织治理理性”部分解释。

因此不能把“守信”简单抬成完全脱离角色职责与军事制度的抽象人格原则。

### 7.2 军士后来自愿留营

军士自愿留下发生在放行之后，不能替代诸葛亮的原决定，也不能证明第三方提供了被测 `x`。

但它说明“守信”行为还能产生军心收益，因此更应避免用后续结果反向证明 `zn` 的纯度。

### 7.3 第96回自贬旁证

斩马谡 / 自请贬三级更接近“军律 / 责任 / 法度自我约束”，与第101回“已令在先 / 信”有相关性，但不是同一窄 criterion 的无歧义复验。

因此本轮将其从“强跨情境复验”降为“宽原则簇旁证”。

---

## 8｜拿掉与反向测试

### 拿掉 `zn`

保留军令处分 `x`：

> 留放权仍在，但何时不能为短期利益毁弃既有期待的内部标准出现缺口。

所以 `zn→x` 仍较稳。

### 拿掉被测 `x`

保留独立定义后的守信原则：

> 原则仍可作用于其他军令、其他承诺、其他已形成稳定期待的主体决定。

因此当前不足证明“现实落点完全悬空”。

### 反向恢复 strict 需要的证据

若要把诸葛亮恢复到 ≥95 strict，需要进一步证明至少一种：

1. 原文 / 邻近阶段把该原则自然限定为“我对直属换班军的这项处分权”而不是更宽信用原则；
2. 拿掉当前留放 `x` 后，找不到任何同等现实对象可继续承载同一原则；
3. 其他看似等价的军令 / 承诺场景其实属于不同 criterion，不能替代本轮现实落点；
4. “组织信誉 / 军事制度理性”无法独立解释当前原则排序。

当前未达到。

---

## 9｜最近邻排除

- `zn vs xn`：轮换制度设计属于 `xn` 邻近；本轮原则仍回答“即使能改，为什么不能因即时利益任意改”。
- `zn vs z`：军士后来感恩不是决定发生前的必要条件。
- `x vs nx`：留放决定直接由诸葛亮军令生效，不是借外部权限。
- `x vs zx`：没有扩权，只调用既有军令处分。
- `strict vs co-occurrence`：两端仍可同窗共现；本轮只撤 strict 双向不可替代性，不撤共现。

---

## 10｜当前成熟度与 strict 统计影响

```yaml
fact_confidence: 99
classification_confidence: 93
knowledge_status: deferred
strict_positive_status: suspended-pending-second-review
strict_positive_count_effect: -1
x_endpoint_status: retained-true
zn_endpoint_status: retained-plausible-high
zn_to_x_status: plausible-high
x_to_zn_status: not-proven-at-95
```

结合此前两份 2026-08-29 对抗审计，当前文学 strict 正向应暂按：

```text
诸葛亮：99/93 deferred-under-attack
探春：99/93 deferred-under-attack
晁盖：99/93 deferred-under-attack
```

即：

> **0 verified literary strict positives + 3 contested former positives。**

Washington 仍只作历史高纯正向对照，不计文学 cross-work。

原 strict 专项与实时总纲 / 清单若仍显示“诸葛亮 1 verified”，均形成新的中枢同步债；本审计作为更新的同级 L4 `supersedes_as_current_research_judgment: true` 记录，优先反映当前研究判断，等待下一轮资产消化安全同步。

---

## 11｜本轮新增方法纪律

1. **strict `x→zn` 必须先让 `zn` 脱离被测 `x` 独立命名。**
2. **一个对象是当前最强现实落点，不等于它是不可替代现实落点。**
3. **“原则天然发生在某职业/组织域”不等于该原则只可能由当前这一个 `x` 承载。**
4. **跨情境旁证必须验证 criterion identity；“守信、守军律、负责”不能因为都像自我约束就自动合并成同一窄 `zn`。**
5. **99/95 positive 可以在对抗审计后撤回 verified 统计；verified 不是永久标签。**

---

## 12｜下一步高信息增益

普通 strict 正向三条全部降为 deferred 后，下一步不应立刻继续找第四个正例，而应先：

1. 重新定义 strict `x→zn` 的“不可替代现实落点”最小充分条件，防止 `x` 被写进 `zn` 后循环成立；
2. 从既有 canonical 正例《辛德勒的名单》《V字仇杀队》做同一新门的对抗复核，检查它们是否真的通过；
3. 优先寻找一个**原则在不引用 x 时仍独立成立，但只有取得某个唯一现实对象/权限后才第一次获得不可被其他对象替代的具体落点**的材料；
4. 保持 L2 不动，直到至少 3 部独立作品在新审计门下重新达到 ≥95。

本轮不修改 L1、zn/x 信息卡、准度卡或 canonical `zn补x`。
