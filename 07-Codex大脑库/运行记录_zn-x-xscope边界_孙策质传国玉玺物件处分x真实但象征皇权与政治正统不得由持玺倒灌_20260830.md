---
type: ten-yuan-fire-axis-x-scope-control
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
sample_type: x-scope-boundary
work: 三国演义
character: 孙策
stage: 第十五回质传国玉玺向袁术借兵
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_control_increment: true
strict_increment: false
may_override_canonical: false
updated: 2026-08-30
---

# zn ↔ x 火轴运行记录｜孙策质传国玉玺：物件处分 x 真实，但象征皇权不能由持玺倒灌

## 1｜研究问题

本轮不测试“孙策有没有皇权”，而测试同一对象上两个非常容易被混写的 `x` scope：

1. **传国玉玺这个物件**是否现实进入孙策可占有、转移、质押的处分边界；
2. **玉玺所象征的皇帝政治权能 / 正统裁定权**是否因此同步进入孙策现实掌握边界。

current canonical：火轴 `zn ↔ x` 讨论“对象独立成立资格 ↔ 纳入现实掌握、调用与处分边界”；`x` 必须写清对象、主体和权限类型，不能从称号、凭证、象征物、一次接触或邻近身份直接倒推更宽权限。

## 2｜剧情事实

### 2.1 触发
孙策困于袁术部下，欲借兵渡江。朱治、吕范与孙策议定，以孙坚遗下的传国玉玺作为质当，换取袁术出兵支持。

### 2.2 明确动作
《三国演义》第十五回写明：

- 孙策说明自己有亡父留下的传国玉玺，可“以为质当”；
- 次日亲自提出“有亡父遗下玉玺，权为质当”；
- 袁术取玺查看，并把玉玺留在自己处；
- 随后借孙策兵三千、马五百，并给出相应军职，孙策带兵东渡。

第十七回又明确写“袁术……又有孙策所质玉玺”，说明玉玺确实已完成从孙策控制边界向袁术控制边界的现实转移。

### 2.3 可观察结果
孙策能把玉玺作为现实交换标的交出去，并因此换到兵马；这不是只有象征意义的“拥有”，而是物件层真实处分行为。

## 3｜x 判定

### 3.1 物件层

```text
传国玉玺这个具体物件
→ 孙策此前现实持有
→ 可自主决定是否拿去质当
→ 可把物件现实交付给袁术
→ 原控制节点随交付发生变化
```

因此：

```yaml
imperial_seal_object_possession_x: true
imperial_seal_object_transfer_disposition_x: true
```

这是高纯 `x`。

### 3.2 象征权能层

但不能写成：

```text
孙策掌握玉玺物件
→ 孙策因此掌握皇帝职位 / 天下政治裁定 / 传国正统
```

玉玺是一件政治象征与凭证，但“能处分凭证物件”与“能处分凭证所代表的政治权能”是两个不同对象层。

第十七回袁术拿到玉玺后确实把它当作称帝理由之一，但小说同时给出群臣反对、汉帝仍在、政治军事现实另有独立结构。玉玺能够强化合法性叙事，不等于仅凭持玺就自动拥有皇帝现实处分权。

因此：

```yaml
imperial_seal_symbolic_legitimacy_signal: true
imperial_sovereignty_x_from_seal_possession: false
political_supreme_disposition_x_from_seal_possession: false
```

## 4｜本轮核心规则

> **对凭证 / 象征物 / 印信的现实处分 `x`，不能倒灌成该凭证所代表职位、权威或政治正统的现实 `x`。**

更短：

```text
我能处分“权力的象征物”
≠
我已经处分“象征物所代表的权力”
```

这是 `x scope` 边界，不是“玉玺无意义”。玉玺可以作为物件、政治信号、合法性资源产生现实作用，但各层必须分别取证。

## 5｜拿掉测试

### 5.1 拿掉政治象征解释
只保留“孙策把一个高价值具体物件交给袁术，换来兵马”：

- 物件占有 / 转移 `x` 仍完整成立。

因此物件层 `x` 不依赖皇权象征解释。

### 5.2 拿掉物件现实掌握
若孙策只声称“我与传国正统有关”，却不能拿出、转移、质押玉玺：

- 当前物件处分 `x` 不成立。

### 5.3 反向测试
即使袁术后来真实持有玉玺，也仍需另证：

- 谁能让全国节点服从；
- 谁能稳定任免、调兵、征税、裁定；
- 谁拥有现实最高否决 / 排除边界。

不能由持有玉玺一步代替这些证据。

## 6｜第三因素冻结

冻结：

- 传国玉玺的神圣叙事；
- 孙坚遗物的情感价值；
- 孙策图江东的战略目标；
- 袁术称帝野心；
- 后世对传国玉玺的政治想象。

只保留“具体物件能否被现实持有 / 转移”和“被象征的政治权能是否真实进入主体掌握边界”，结论不变。

## 7｜最近邻排除

- **`x vs z`**：玉玺可以强化被认可、合法性叙事或名义位置，但外部承认不能代替现实处分权。
- **`x vs zx`**：持玺或质玺不等于公开扩张现实最高权力范围；若要判 `zx` 必须另证公开显权和决定范围扩大。
- **`x vs nx`**：孙策以玉玺换袁术兵马，借兵通道可有 `nx` 邻近；但本轮只测玉玺自身的 `x scope`，不迁移木轴语义结论。
- **`x vs xn`**：东渡、招兵、取江东属于运行组织层，不能替代玉玺对象归属判断。

## 8｜zn 判定

本轮不锁 `zn`。

孙策以玉玺换兵可以由战略自立、家族复业、现实兵力缺口和权衡收益充分解释。没有必要为了让火轴两端同框，再事后制造“轻名器重实力”等内部不可让渡原则。

```yaml
zn_current: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
```

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked

x_scope_boundary_control_increment: true
strict_positive_increment: false
strict_negative_increment: false
cross_work_increment_for_strict: false
```

本轮只增加 `x scope` 边界资产，不修改 L1、zn/x 信息卡、准度卡或任何 L2 canonical。

## 10｜方法增益

目前火轴 `x scope` 已至少出现三种不同拆分方向：

```text
临时试用 ↔ 长期排他占有
current 治理 ↔ 永久最终归属
凭证物件处分 ↔ 凭证所代表权威处分
```

因此后续 `x` 不宜继续只使用一个粗糙布尔值。至少应记录：对象是什么、权限类型是什么、期限如何、原节点是否仍保留现实覆盖 / 返还 / 最终裁定权。

## 11｜来源

- 《三国演义》第十五回：孙策以亡父遗下传国玉玺“权为质当”，袁术留玺并借兵三千、马五百。
- 《三国演义》第十七回：袁术持有“孙策所质玉玺”，并把玉玺作为称帝理由之一。

TASK_DONE:ZNX_XSCOPE_SUNCE_IMPERIAL_SEAL_20260830
