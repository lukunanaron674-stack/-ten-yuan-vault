---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: active-evidence
axis: fire
pair: zn-x
sample_type: strict-precondition-guard-composite-x-bundling
work: 水浒传
character: 柴进
stage: 第九回林冲投庄为主，第22回武松在庄作边界复验
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 97
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
strict_test_allowed_for_posthoc_composite_x: false
negative_guard_mechanism: posthoc-composite-x-bundling
may_override_canonical: false
updated: 2026-08-29
---

# 运行记录｜zn-x 伪 strict 前置护栏｜柴进庄园庇护原则与多 x 载体不可事后捆绑成单一 anchor 制造 strict

## 1｜本轮问题

本轮不重新给柴进整个人物贴十元标签，只测试一个 strict 前置风险：

> 柴进存在稳定的“流配/落难来投者应获得庇护与资助”原则候选，同时又真实掌握庄园、财资、书信与人情网络等多种现实资源。能否把这些不同 `x` 事后统称成一个“柴进庇护系统 x”，再据此锁 strict `zn↔x`？

结论：不能。多个不同现实载体不能在看到结果后事后捆绑成一个无限宽的 `x`，否则 `x→zn` 的 current-anchor 缺口可以被人为制造。

## 2｜剧情事实

### 第九回｜林冲投柴进庄

酒店主人说明，柴进长期嘱咐酒店：若有流配犯人经过，可指引其投柴庄，由柴进资助。林冲到庄后，柴进实际让庄客提供酒食、白米和钱财，并认为普通接待太轻，进一步安排更高规格款待；柴进还明确反对洪教头因“配军”身份轻慢林冲。

这里至少能分别观察到：

1. 庄园住宿/接待空间；
2. 私人钱粮与物资；
3. 庄客执行与酒店转介；
4. 对林冲后续牢城处境可使用的书信/社会关系资源。

这些都可以分别检查为现实 `x`，不能因为共同服务于“庇护”结果就自动视为一个不可分割端点。

### 第22回｜武松边界复验

武松在柴庄长期居住时，柴进起初同样接纳资助；后来武松醉后经常殴打庄客，柴进对其待遇变慢，但没有立即驱逐，离庄时仍给金银、治酒送行。

这说明庇护原则如果成立，也具有边界：帮助落难者不等于允许受助者无限伤害庄内成员。该边界支持原则候选，但不把柴进所有现实资源自动焊成单一 `x`。

## 3｜zn 证据

本轮允许作为高纯候选的窄原则是：

> 对流配、落难而来投者，不应仅因“犯人/失势”身份加以轻慢；在其未持续侵害庄内他人时，应给予现实庇护和资助。

支持点：

- 柴进把这项做法预先制度化到酒店转介，而非只在见到名人后临时起意；
- 林冲作为配军到庄时，柴进明确反对因犯人身份轻慢；
- 实际投入住宿、饮食、钱粮等现实成本；
- 武松案例显示原则并非无边界纵容，持续侵害庄客会改变待遇。

但本轮不把该原则单独升级为新的 pure-zn 统计；目的只在 strict 前置测试。

## 4｜x 证据必须拆开

柴进当前至少存在四类不同现实载体：

```text
x_A = 柴庄住宿 / 庇护空间
x_B = 私人钱粮 / 衣物 / 物资
x_C = 庄客与酒店转介的执行关系
x_D = 书信 / 人情 / 社会关系通道
```

这些对象的可撤性、使用方式、处分结构并不完全相同。

`x` current canonical 要求“被掌握对象明确、实际权限类型明确”。因此 strict 测试不能在结果出来以后，把 A+B+C+D 重新命名为一个无限宽的“庇护系统 x”，然后再做拿掉测试。

## 5｜strict 压力测试

### 测 `zn → x_A（柴庄空间）`

成立倾向强：庇护原则确实决定庄园为什么向流配者开放、为什么不能仅按犯人身份轻慢。

### 测 `x_A → zn`

不成立到 strict 95：拿掉“柴庄住宿空间”以后，同一窗口仍有钱粮、书信、人情转介等现实载体可以继续给该原则提供明确行动落点。

这不是“未来理论上也许还能找别的载体”，而是 same-window 里已经存在其他具体载体，因此 current-layer anchor gap 不够。

### 事后改测“综合庇护网络 x”

禁止直接启动 strict。

如果把庄园、财资、庄客、酒店、书信、人情全部捆成：

```text
x_bundle = 柴进所有能够帮助落难者的现实资源总和
```

那么拿掉这个 bundle 后，原则当然会失去大部分现实落点；但这是因为被测 `x` 已经按目标结果事后扩张到几乎等同“所有可承载该原则的资源”。

这会制造循环：

```text
先把所有现实载体都塞进 x
→ 再拿掉 x
→ 发现没有现实载体
→ 宣布 x→zn strict
```

因此：

> `posthoc composite x bundling` 不得替代对象明确性门。

## 6｜拿掉与反向测试

### 拿掉单一庄园 x

- 原则仍可通过钱粮、书信、转介关系现实运行；
- `x_A→zn` 不足。

### 拿掉单一钱粮 x

- 仍可通过住宿、保护、转介、书信运行；
- `x_B→zn` 不足。

### 反向：什么时候允许复合 x？

只有当文本/制度本身把多个资源作为**同一个明确治理对象**交给主体统一处分，且 current canonical 能指出这个复合对象有稳定边界时，才可以作为一个 `x` 测试。

不能只因为多个资源最终共同产生“庇护”结果，就事后把它们并成一个端点。

## 7｜最近邻排除

- `x vs xn`：酒店转介、庄客接待流程可以有 `xn` 邻近，但不等于所有庇护资源是一个单一 `x`。
- `x vs nx`：书信、人情关系中可能存在沿外部节点办事的 `nx` 功能，因此更不能把所有关系资源一股脑归入单一 `x`。
- `zn vs z`：柴进“孟尝君”声望、王孙身份、江湖评价不作为原则成立证据。
- `zn vs x`：原则决定为何帮助；各个现实资源分别提供不同落点，不能因为共同服务一个原则就自动 strict。

## 8｜第三因素冻结

冻结：

- 后周皇族身份；
- 丹书铁券带来的安全优势；
- 江湖名望；
- 招贤纳士的声望收益；
- 林冲个人名气。

这些因素可能解释柴进为什么有能力或为什么乐于广交人物，但不能解决本轮真正的问题：多个不同 `x` 是否可以事后捆绑为一个 strict 端点。

结论不变：不能。

## 9｜本轮锁出的 strict 前置纪律

新增：

> **不同对象、不同权限类型、不同可撤结构的多个 `x`，不能因为共同服务同一 `zn`，就在 strict 测试时事后捆绑成一个无限宽复合 `x`。**

以及：

> **如果 single-x 拿掉后 same-window 已有其他现实载体继续提供同类 anchor，就不能通过扩大被测 `x` 的边界来消除这些竞争载体。**

短句：

```text
多个 x 同向协作 ≠ 一个 x
结果共同 ≠ 对象同一
不能靠 bundle laundering 制造 x→zn 缺口
```

## 10｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 97
knowledge_status: evidence-locked
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
strict_test_allowed_for_posthoc_composite_x: false
```

本轮不增加 strict positive、negative 或 cross-work；只新增一类 strict 前置反误判机制。

## 11｜下一轮高价值方向

继续寻找第二部可靠文学 strict v2 正向，但新增对象门：

1. 被测 `x` 必须是文本中可自然识别的单一治理/处分对象，不能事后拼装；
2. `zn` 必须独立定义且不引用被测 `x`；
3. same-window competing anchors 必须冻结；
4. 若多个现实资源都在承载 `zn`，优先把样本当作“多载体非 strict / composite-x-bundling guard”压力测试，而不是强行合并端点。

---

资料核对：
- 《水浒传》120回本第九回，维基文库：柴进预先嘱酒店转介流配者、林冲入庄后酒食钱粮资助并反对轻慢配军。
- 《水浒传》70回本第22回，维基文库：武松长期居柴庄，因醉后殴打庄客待遇下降但未被立即驱逐，离庄时仍获金银与送行。
