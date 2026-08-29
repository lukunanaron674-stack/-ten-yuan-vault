---
type: ten-yuan-fire-axis-candidate-record
authority_level: L4
knowledge_status: deferred
status: deferred
axis: fire
pair: zn-x
sample_type: strict-positive-candidate-anchor-conflict
work: 三国演义
character: 关羽
stage: 第25回土山约三事与报曹恩前置证据 → 第50回华容道义释曹操
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 94
may_override_canonical: false
strict_positive_increment: false
strict_negative_increment: false
cross_work_increment: false
created: 2026-08-29
---

# 候选记录｜关羽华容道：报曹恩 zn × 关隘擒放处分 x｜因 same-window 关系 anchor 竞争暂缓 strict

## 1｜研究问题

本轮不讨论关羽稳定人格，只锁一个窄窗口：

> 第50回华容道，关羽是否同时拥有“受人厚恩应报”的内部原则 `zn` 与对曹操当前去留/擒放的现实处分 `x`；若两端均成立，是否达到 strict `zn↔x`？

目标是寻找第二个可靠 strict v2 正向，而不是为了进度凑样本。

## 2｜剧情事实

### 前置原则证据

第25回土山阶段后，关羽暂居曹营，曹操厚待、赠袍、赐马并给出爵禄。关羽在后续白马等阶段明确存在“先报曹操厚恩、再归刘备”的报恩逻辑；这与他“不忘故主”的旧义是并行原则，不是同一条原则。

### 华容道窗口

赤壁败后，诸葛亮安排关羽守华容道，并以军令要求其擒曹。曹操败军进入关羽现实拦截范围；关羽面对曹操旧日厚待与当前军令冲突，最终放行曹操，并承担回营受军令处分的风险。

可观察结构：

```text
曹操进入关羽当前关隘控制窗口
+
军令要求擒曹
+
昔日曹恩重新进入排序
+
关羽主动放行
→ 现实结果改变
```

## 3｜zn 端

候选原则必须先脱离被测 `x` 独立定义：

> 对曾在自己困厄阶段给予实质厚待、保护与成全者，既然承认这份恩义，就不能只在有利时承认；在高代价冲突中仍应给予真实回报。

支持点：

1. 原则在华容道之前已有前置证据，不是见曹操落难后临时生成；
2. 华容道选择与当前军令、回营问责发生直接冲突；
3. 关羽不是只口头怀恩，而是以放行改变现实结果。

因此：

```yaml
zn_candidate: strong
zn_confidence: 96
```

但本记录不把“关羽有义”或后世关公标签作为证据。

## 4｜x 端

被测 `x` 只锁：

> 华容道当前关隘窗口内，关羽对曹操是否被拦截、是否放行的现实军事处分/否决边界。

支持点：

- 关羽实际带兵守住该通路；
- 曹操是否通过该处，关羽的决定直接改变结果；
- 第三方没有在同一瞬间替关羽完成“放行”处分。

因此：

```yaml
x_current_for_capture_release: true
x_confidence: 97
```

这不是“曹操这个人归关羽所有”，而是当前军事关隘中的去留/擒放处分接口。

## 5｜zn→x

拿掉“受恩须报”的内部原则，关羽的现实拦截/放行 `x` 仍然存在，但会失去本轮最直接的例外标准：

```text
什么时候即使军令要求擒拿，
仍要因为既承认的旧恩而选择放行？
```

因此：

```yaml
zn_to_x_gap_filling: true
```

## 6｜x→zn｜本轮最小分歧

按 current v2，不要求 `x` 成为世界上唯一可能的报恩载体，只检查拿掉被测 `x` 后，当前窗口/对象层是否重新失去具体现实 anchor。

支持 strict 的一面：

- 华容道的擒/放处分让“报恩”从抽象态度进入一个高成本、可观察、直接改变曹操命运的现实对象；
- 同窗没有第三方能够替关羽完成这一次“我有能力扣住但选择放”的主体处分。

反对 strict 的一面更关键：

- “关羽—曹操恩义关系”本身已经是 same-window 现实关系 anchor；
- 曹操本人、过去已发生的报恩行为、以及关羽当前“杀/不杀、追/不追”的主体行为，都可能在不假定独立 `x→zn` 的情况下继续承载报恩原则；
- 当前仍存在一个边界问题：`capture/release x` 是真正的 object-constituting current anchor，还是报恩原则在本事件中的高强度 execution opportunity？

因此当前不能达到 95：

```yaml
x_to_zn_gap_filling: contested
strict_zn_x_complement_locked: false
```

## 7｜拿掉 / 反向测试

### 拿掉 zn

保留华容道守关与军令，删除“受恩须报”：最自然结果应是按军令擒/阻曹操。说明 `zn→x` 很强。

### 拿掉 x

若关羽根本没有当前拦截/放行能力，报恩原则仍可由关羽—曹操关系和主体自身其他行为承载；因此是否真的出现 v2 要求的 current-layer anchor gap 仍有真实分歧。

### 反向

若另一个案例中主体对对象拥有同样现实处分权，但内部原则只在取得“可处分对象”之后才被事后窄化定义，则必须按 post-hoc principle narrowing 拒绝 strict。

## 8｜最近邻排除

- `zn vs z`：曹操对关羽的赏识是外部认可，不是报恩原则本身。
- `zn vs xn`：华容道如何设伏、如何放行是流程，不解释为什么违军令放曹。
- `x vs zx`：本轮是已经取得的当前关隘处分权，不把一次放行写成新的扩权。
- `x vs nx`：诸葛亮的上位军令是外部任务来源，但在当前擒/放微窗口，关羽自己的决定真实改变结果；两层不可互相吞掉。

## 9｜第三因素冻结

冻结：

- 后世“义绝”评价；
- 关公神化；
- 曹操是否历史上真的走华容道；
- 诸葛亮是否故意安排关羽放曹；
- 赤壁整体战略结局。

只看：原则前置成立、现实擒放能力、军令冲突、主体选择、same-window 竞争 anchor。

## 10｜结论

```yaml
fact_confidence: 99
classification_confidence: 94
knowledge_status: deferred

zn: strong-96
x: true-97
zn_to_x: true
x_to_zn: contested
strict: not-locked
```

最小分歧点：

> 华容道擒/放 `x` 到底是“报恩原则在当前对象层不可缺的现实 anchor”，还是“已有恩义关系原则的一次高强度执行机会”。

在这个问题被第二个最小差异案例压清以前，不增加 strict positive，也不把它计入 cross-work。

## 11｜方法收获

新增候选纪律：

```text
same-window direct disposition can be a strong anchor candidate,
but direct outcome-changing opportunity ≠ automatically object-constituting x→zn anchor.
```

中文：

> **主体当前真有改变结果的处分权，仍不能仅凭“这个机会很关键”就锁 `x→zn`；必须继续排除已经存在的关系/主体行为 anchor。**

## 12｜资料来源

- 《三国演义》第二十五回：土山约三事及关羽暂居曹营、曹操厚待的前置关系。
- 《三国演义》第五十回：华容道关羽守关、军令约束、念旧恩放曹。
- L1 `L1_十元即阴阳五行相反轴正本_v1.6.md`
- `zn_准度卡_v0.1`
- `x_准度卡_v0.1`
- `zn补x_补卡_v0.1`
- `zn-x火轴研究总纲_20260827.md`

TASK_DONE: FIRE-ZN-X-STRICT-CANDIDATE-HUARONG-20260829
