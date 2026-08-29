---
type: ten-yuan-fire-axis-audit-record
authority_level: L4
knowledge_status: deferred
status: deferred-under-attack
axis: fire
pair: zn-x
work: 卢旺达饭店
work_original: Hotel Rwanda
work_year: 2004
medium: film
character: Paul Rusesabagina
stage: 酒店转为难民庇护空间→外部保护节点反复介入→家人撤离机会→Paul留守
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  zn_accuracy: zn_准度卡_v0.1
  x_accuracy: x_准度卡_v0.1
  complement_card: zn补x_补卡_v0.1
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 94
previous_record: 07-Codex大脑库/运行记录_zn-x严格补正向_卢旺达饭店Paul庇护平民原则zn与酒店现实庇护空间x双向缺口第二作品strict控制_20260830.md
previous_classification_confidence: 96
previous_strict_status: evidence-locked
current_strict_status: suspended-pending-second-review
strict_positive_count_effect: -1
zn_status: retained-strong
paul_hotel_operations_x_status: retained-true
hotel_as_protected_refuge_anchor_attribution: contested
x_to_zn_status: not-proven-at-95
zn_to_x_status: retained-strong
third_party_anchor_confound: true
posthoc_composite_x_risk: true
supersedes_as_current_research_judgment: true
may_override_canonical: false
created: 2026-08-30
---

# 审计记录｜《卢旺达饭店》Paul strict 正向攻击：个人运营 x 与庇护 anchor 归因混同，降为 deferred

## 1｜审计目标

上一轮把 Paul 锁为 strict v2 第二作品正向：

- `zn`：面对系统性屠杀，不能只为本人/家庭安全主动抛弃已经形成现实保护责任的无武装平民；
- `x`：Paul 对 Hôtel des Mille Collines 当前住宿/庇护空间的运营、准入与内部安置管理边界；
- `zn→x=true`；
- `x→zn=true`；
- strict 99/96 evidence-locked。

本轮不重新讨论影片主题，只攻击一个点：

> **上一轮用于 `x→zn` 的“稳定庇护空间 anchor”，究竟真由 Paul 个人运营 `x` 构成，还是由 Paul 的运营权 + Sabena 产权/国际身份 + UN/军警/法国政治施压 + 贿赂谈判共同构成？**

裁决：**后者竞争解释过强，strict 当前降为 99/94 deferred。**

---

## 2｜zn 端继续保留强证据

候选原则仍独立定义为：

> **当无武装平民面临系统性屠杀，而主体现实具备保护可能时，不能仅为了最大化自身或家庭安全就主动抛弃这些人；保护责任应继续进入最终选择。**

影片中 Paul 家人获得撤离机会后，他本人仍选择留下，且明确表示不能离开仍在酒店中的人。这继续排除“只有商业经理职责”或“只有家庭利益”作为充分解释。

所以：

```yaml
zn_status: retained-strong
```

本轮主要不从 `zn` 端降分。

---

## 3｜Paul 的个人运营 x 也继续成立

影片明确显示 Paul 能：

- 获得 Sabena 总裁签署的管理任命；
- 要求酒店员工继续工作；
- 安排房间、宴会厅与人员；
- 修改/删除住客登记；
- 调配酒店现有物资并维持内部运行。

因此：

> **Paul 对酒店内部运营、房间/空间分配和工作人员的现实管理 `x` 仍成立。**

所以本轮不是“Paul 没有 x”。

```yaml
paul_hotel_operations_x_status: retained-true
```

---

## 4｜真正的问题：运营 x ≠ 完整保护 anchor

上一轮把以下现实结果整体归入 Paul 的酒店 `x`：

- 数百至上千人能够持续停留；
- 酒店成为不被军警/民兵直接清空的庇护空间；
- 可被 Paul 对外谈判为“当前我方保护边界”。

但影片自己的因果链显示，**“为什么酒店能继续作为相对稳定的保护空间”并不只由 Paul 的内部运营权解释。**

### 4.1 Sabena 产权 / 国际身份直接进入保护链

Paul 致电 Sabena 总裁时，对方强调 Mille Collines 是 Sabena 的重要财产；随后 Sabena 高层动用外部政治关系，并明确要求向 UN 等节点说明这是 Belgian property。

Paul 后续向 General Bizimungu 谈判时，也直接使用“保护 Belgian property 会得到回报”作为现实筹码。

因此：

```text
Paul 能安排房间 / 员工
≠
Paul 单独拥有让酒店不被外部武装清空的现实否决权
```

### 4.2 UN / 军警 / Bizimungu 反复提供外部保护接口

影片多次显示：

- UN 人员守门；
- Paul 用钱、酒和关系换取警察/军方保护；
- Sabena / 法国政治关系被调用以阻止一次迫近的屠杀；
- 当这些外部节点撤离或拒绝保护时，Paul 自己承认酒店处于极端脆弱状态。

所以稳定庇护结果至少是：

```text
酒店物理空间
+ Paul 内部运营 x
+ Sabena 产权/国际身份
+ 外部政治关系
+ UN / 军警现实保护
+ 贿赂与谈判
→ 相对稳定庇护窗口
```

这使上一轮把“完整庇护 anchor”直接等同于 Paul 个人 `x` 存在 **posthoc composite-x / third-party-anchor** 风险。

---

## 5｜修正后的 x→zn 拿掉测试

### 5.1 拿掉 Paul 的个人运营 x

如果只拿掉：

> **Paul 对酒店房间、员工、登记、内部安置和日常运营的现实处分/管理权**

那么确实会严重削弱庇护的组织能力，但仍不能直接推出：

> **整个酒店空间、Sabena 的产权身份、UN/军警的外部保护、酒店内难民自身的停留、其他工作人员的协作同时全部消失。**

也就是说，上一轮所谓：

> “拿掉 Paul 的 x → 当前受保护群体和庇护空间整体失去”

其实偷偷拿掉了不只一个端点。

### 5.2 拿掉“整个酒店庇护系统”

如果把：

- Paul 管理权；
- 酒店物理空间；
- Sabena 产权身份；
- 外部政治保护；
- UN / 军警接口；
- 钱、酒、电话、人脉

全部打包成一个“大 x”再拿掉，当然会制造巨大 anchor gap。

但这正是仓库已经明确禁止的：

> **posthoc composite-x bundling｜多个不同对象、权限和外部节点不能事后捆绑成一个万能 x 来制造 strict。**

因此当前：

```yaml
x_to_zn_status: not-proven-at-95
```

不是判定 `x→zn=false`，而是当前个人 x 与完整保护 anchor 的归因不够纯。

---

## 6｜zn→x 仍然很强

拿掉保护原则，Paul 的酒店运营 x 仍然存在，但会重新出现：

- 为什么继续向大量难民开放酒店；
- 为什么商业秩序崩解后仍维持非商业庇护；
- 为什么家庭撤离机会出现后本人仍继续运行保护空间。

因此：

```yaml
zn_to_x_status: retained-strong
```

本轮不否定 `zn→x`。

---

## 7｜第三因素冻结结果

### 7.1 经理职责

不足完整解释 `zn`，继续冻结。

### 7.2 家庭利益

家人可撤时 Paul 仍留下，不能充分解释 `zn`。

### 7.3 Sabena / Belgian property

**不能冻结为无关变量。** 它直接进入现实保护因果链，因此对 `x→zn` 的 anchor 归因构成竞争解释。

### 7.4 UN / 军警 / Bizimungu

同样不能当作纯背景。它们多次直接决定酒店是否会被清空、难民是否会被杀害。

### 7.5 钱、电话、人脉

可以视为并行工具/通道，但和 Sabena、UN、军警一起证明：完整庇护效果不是 Paul 单一酒店运营 `x` 的独占产物。

---

## 8｜与 current strict v2 的关系

current v2 已经正确废除“被测 x 必须是宇宙唯一可能载体”的过严门。

本轮不是恢复该旧门。

真正的问题是：

> **被测的“Paul 个人酒店运营 x”与上一轮声称被它补出的“完整稳定庇护 anchor”并非同一个因果边界。**

如果 current-layer anchor 本身需要多个外部节点共同构成，就不能把这些节点的作用全部倒灌进 Paul 的 x。

因此这是一条 **endpoint attribution / composite-anchor** 问题，不是 absolute nonreplaceability 问题。

---

## 9｜当前裁决

```yaml
fact_confidence: 99
classification_confidence: 94

zn_status: retained-strong
paul_hotel_operations_x_status: retained-true
zn_to_x_status: retained-strong
x_to_zn_status: not-proven-at-95

strict_positive_status: suspended-pending-second-review
strict_positive_count_effect: -1
knowledge_status: deferred
```

最小分歧点：

> **酒店内部运营 `x` 与“酒店作为稳定受保护庇护空间”的 reality anchor，到底能否在不把 Sabena/UN/军警/政治关系打包进 x 的情况下保持 ≥95% 因果归因。**

当前不足。

---

## 10｜本轮新增方法纪律

### A｜运营/处分对象与保护效果不能混写

```text
我能管理这个空间
≠
我单独拥有让这个空间免受外部清空的现实否决权
```

### B｜第三方保护节点属于 anchor 因果链时不能冻结

如果 Sabena、UN、军警、上位权威等节点直接决定“对象是否还能继续作为保护边界存在”，就必须单独审计，不能都记成被测主体 `x` 的背景条件。

### C｜strict 的 current anchor 也要做主体归因

不仅问：

> 当前有没有现实 anchor？

还要问：

> **这块 anchor 真的是由被测 x 构成，还是一个多节点联合结果？**

---

## 11｜对统计的影响

本轮只修正当前研究判断：

```text
Paul：99/96 evidence-locked strict positive
→ 99/94 deferred-under-attack
```

所以 strict v2 可靠文学/电影正向暂时应回读为：

- 诸葛亮：99/95 evidence-locked；
- Paul：99/94 deferred-under-attack。

Washington 继续单独作为历史对照。

不自动恢复探春、晁盖，不修改 L2 canonical。

---

## 12｜下一轮最高信息增益

不要立即找第三个“庇护空间”案例。

优先：

1. 对 Paul 做第二审，专门切开“酒店物理空间”“Paul 运营处分 x”“Sabena/UN 外部保护”三个对象；
2. 或回四大名著找第二份自然 strict v2 正向，要求 **current anchor 的主体归因本身也 ≥95%**；
3. 若再找保护型 strict，优先选主体自己拥有稳定准入/排除/留放权、且第三方不能决定空间是否被清空的样本。
