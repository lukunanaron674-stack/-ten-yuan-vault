---
type: ten-yuan-fire-axis-adversarial-audit
authority_level: L4
knowledge_status: deferred
status: deferred-under-attack
axis: fire
pair: zn-x
work: 水浒传
character: 晁盖
stage: 第20回接掌梁山后共同财物入库与分配
sample_type: strict-positive-adversarial-audit
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
attacks_record: 07-Codex大脑库/运行记录_zn-x严格补正向_晁盖接掌梁山共同财物不得私占原则zn与公库分配处分x双向缺口第三文学作品strict控制_20260829.md
supersedes_as_current_research_judgment: true
old_record_retained_as_evidence: true
fact_confidence: 99
classification_confidence: 93
strict_positive_status: suspended-pending-second-review
strict_positive_count_effect: -1
may_override_canonical: false
created: 2026-08-29
---

# strict zn↔x 对抗审计｜晁盖共同财物处分：原 99/95 正向降为 deferred

## 1｜为什么重审

火轴 strict 普通正向已达到 3 部文学作品后，current L4 专项明确要求停止堆普通正例，优先攻击 95 分边界。本轮只攻击最新一条《水浒传》晁盖“共同财物不得私占 × 公库处分 x”的 strict 正向，不扩展新人物。

本轮结论不是“该案例已经证明为假”，而是：

> **现有文本不足继续维持 95% evidence-locked strict；应降为 93% deferred，等待第二审。**

最小分歧集中在两处：

1. 被测公库/分配 `x` 是否能高纯归因于“晁盖本人”的独立现实处分，而非“众头领共同治理 / 梁山组织分配”的共享结构；
2. “共同所得不得首领私占”是否已独立通过 `zn` 的内部原则门，还是从组织分配惯例、集团可持续性与寨主合法性中后推出来的解释。

---

## 2｜剧情事实仍锁 99

第20回可靠事实不变：

- 晁盖成为山寨之主后，确实能调人、安排出寨、规定不可伤客商；
- 自家庄财与生辰纲所得被用于赏众；
- 新劫财物被分为公共库存与成员分配；
- 文本写明“众头领看了打劫得许多财物，心中欢喜。便叫掌库的小头目，每样取一半，收贮在库……”；
- 随后晁盖把当前人马、财物收获归因于众弟兄共同才能。

100回本、120回本与70回本在这一核心段落上高度一致。

所以事实置信继续 99。

---

## 3｜第一处攻击：x 的主体归因没有原记录写得那么干净

原正向记录把财物处分写成：

> 晁盖可直接决定入库比例、分配范围，掌库节点按其决定执行。

但原文关键句的最近显式主语是：

> **“众头领看了打劫得许多财物，心中欢喜。便叫掌库的小头目……”**

文本没有明确写：

```text
晁盖个人提出一半入库方案
→ 其他头领反对/未决
→ 晁盖单独裁决
→ 结果按晁盖决定改变
```

因此当前最多可以安全锁：

```text
梁山头领集团 / 寨主治理结构
对共同财物存在真实处分 x
```

但要把同一 `x` 高纯归为：

```text
晁盖本人独立拥有该比例分配的最终处分 x
```

证据不足到 95。

这不是说晁盖没有任何 `x`。他作为寨主有真实治理权；问题只在 strict 所需的**同一对象层、同一主体、不可替代现实对象边界**是否足够干净。

### 拿掉测试

拿掉“晁盖个人最终处分”假设，仅保留：

```text
众头领共同治理
+ 掌库执行
+ 梁山需要公共库存与成员分配
```

仍然可以解释本次一半入库、一半分配的可观察结果。

因此第三因素“组织共同治理 / 集团分配结构”目前不能冻结掉。

---

## 4｜第二处攻击：zn 可能被组织惯例 / 可持续性替代

原记录把窄 `zn` 写成：

> “进入自己寨主处分范围、由共同冒险与共同战果形成的财物，不应因为自己坐主位就私有化；首领应把它处理为共同储备和共同成员可分配的公共所得。”

这个解释合理，但 current `zn` 要求：

- 无奖励、认可、观看仍进入判断；
- 在真实冲突中影响最终排序；
- 跨阶段保有未来调用资格；
- 能指出边界和让渡代价。

当前材料有“自家财物也拿来赏众”和“富贵来自众弟兄”的支持，但仍缺一个更硬的最小冲突：

```text
晁盖本人可明显从私占 / 多占中直接获益
+
组织规则并不强制公共化
+
成员压力 / 寨主合法性 / 山寨库存需求不能解释
+
晁盖仍因内部原则主动放弃私人占有
```

桃花山等其他山寨存在不同分赃方式，能说明“并非所有绿林组织都使用同一比例”；但这仍不足证明梁山本次比例完全来自晁盖个人 `zn`，而不是新集团治理策略、共同体合法性与山寨可持续性的联合结果。

所以本轮不把 `zn` 判 false，只把 `zn_independence` 从原先 95 降到 93。

---

## 5｜strict 双向门因此不能继续锁

由于 strict 的前置要求是：

```text
zn independently true
+
x independently true for the same tested subject/object layer
+
same current window
+
no equivalent third-party / organizational substitute
```

现在其中至少两项进入真实分歧：

```yaml
zn_independently_true: contested_93
x_individually_attributable_to_chao_gai: contested_93
equivalent_organizational_third_factor: not_frozen
strict_test_allowed: deferred
```

所以本轮不能继续保留：

```text
strict_zn_x_complement_locked: true
```

应改为：

```text
strict_zn_x_complement: deferred
```

这不是因为 `x→zn` 理论门本身改变，而是 strict **启动前的端点归因和第三因素冻结没有达到 95**。

---

## 6｜与诸葛亮 / 探春的区别

本轮没有顺手攻击另外两份正向。

晁盖当前最弱点是：

> **关键分配句可以被“众头领共同决策 / 组织治理”解释。**

诸葛亮卤城与探春理家是否也存在同类替代，需要另轮独立攻击，不能从本轮自动降级。

因此当前可靠文学 strict 正向应暂按：

```text
诸葛亮：99/95 evidence-locked
探春：99/95 evidence-locked
晁盖：99/93 deferred-under-attack
```

即：

> **2 verified literary positives + 1 contested/deferred former positive**

而不是继续写“3 verified literary positives”。

---

## 7｜新的 strict 反误判纪律

本轮新增一条 L4 方法纪律：

> **对象构成型 x 也必须先证明是“被测主体自己的现实处分边界”；组织共同决策、共同财产制度、成员压力或上位规范若能等价解释同一结果，就不能为了 strict 把共享 x 私有化到单一人物名下。**

以及：

> **“主体处在领导位置 + 组织采取公共分配” ≠ 主体内部一定存在“不得私占”的 zn。必须额外证明内部原则而非组织生存策略 / 共同体合法性在冲突中完成最终排序。**

---

## 8｜当前成熟度

```yaml
fact_confidence: 99
classification_confidence: 93
knowledge_status: deferred
strict_positive_status: suspended-pending-second-review
```

不修改 L1、`zn/x` 准度卡或 L2 `zn补x_补卡`。

原 99/95 文件保留为历史研究证据，但本文件明确取代其“当前 L4 研究判断”。

---

## 9｜下一轮最值得做什么

1. 优先攻击探春 99/95：检查“公私分明”是否可由王夫人授权、旧例、王熙凤治理规范等第三因素等价解释，以及探春自己的 `x` 是否真构成原则不可替代对象；
2. 再攻击诸葛亮 99/95：检查“信为本”是否是统军制度/外部军纪，而非内部 `zn`，以及士兵自愿留营是否改变结果因果；
3. 若晁盖要恢复 ≥95%，必须找到更直接材料证明：
   - 分配比例是晁盖个人可独立决定并现实生效；
   - 在私人收益 vs 公共分配的真实冲突里，组织制度/成员压力不能替代其内部原则。
