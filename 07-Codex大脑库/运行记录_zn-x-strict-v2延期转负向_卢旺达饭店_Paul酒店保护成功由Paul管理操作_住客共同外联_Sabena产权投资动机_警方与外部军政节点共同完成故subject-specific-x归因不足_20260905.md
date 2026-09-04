---
type: ten-yuan-fire-axis-research-record
authority_level: L4
knowledge_status: evidence-locked
status: state-reclassification
axis: fire
pair: zn-x
criterion_version: current-layer-specific-anchor-gap-v2_20260829
may_override_canonical: false
created: 2026-09-05
fact_confidence: 99
classification_confidence: 97
---

# 火轴 strict-v2｜《卢旺达饭店》Paul Rusesabagina：deferred → negative guard

## 0｜启动对齐

本轮以 `main@5885546c09e2f94c7a00d86018c3543bb3af0cbe` 为写前 HEAD。启动按 current canonical 重读火轴待审议清单、strict-v2 专项、protected-range / x-scope 当前状态与最近 commits。current canonical 高于本记录；木轴只迁移验证方法，不迁移理论结论。

本轮只处理 P0：既有 deferred 是否出现足以改变状态的真实新证据。目标为《Hotel Rwanda / 卢旺达饭店》Paul Rusesabagina，原状态 `99/94 deferred`，原卡点为 endpoint attribution + people anchor / protected-range anchor 分层，以及“稳定保护范围能否高纯归因给 Paul 的 subject-specific operations x”。

## 1｜新增高质量证据

Human Rights Watch / FIDH 1999 年《Leave None to Tell the Story》对 Hôtel des Mille Collines 的描述给出此前延期案最缺的一层结构证据：

1. 酒店本身“除国际关系外没有防御攻击的能力”；4 月 15 日 Paul 与 Sabena 官员分别公开呼吁保护，随后卢旺达当局在酒店部署国家警察。
2. 4 月 23 日酒店被军人和民兵包围并要求半小时内赶出全部避难者时，不是 Paul 单一完成保护：Paul 与数名住客共同向国外有影响力者打电话求援；这些电话很可能又由 Sabena 代表转递，而 Sabena 同时具有救人和保护昂贵投资的独立动机；最终是一名国家警察上校到场结束围困并让下令军官离开。
3. 5 月 13 日再次出现明确屠杀威胁时，酒店向法国外交部发出传真，法国外交部再向联合国及基加利当局施压，攻击最终未发生。
4. HRW 最终记录：在酒店避难者无人于种族灭绝期间被杀，但同一报告同时把这一成功与 foreign protection / international connections 联系起来。

来源：
- Human Rights Watch / FIDH, *Leave None to Tell the Story*, 1999: https://www.hrw.org/reports/pdfs/r/rwanda/rwanda993.pdf
- HRW 网页版相同章节: https://www.hrw.org/legacy/reports/1999/rwanda/Geno15-8-01.htm

补充最近邻证据：The Guardian 2005 年对酒店幸存者与当事人的采访也记录，住客自己组成委员会、发传真并调用各自联系人；威胁发生时，Paul 和其他住客都使用与军方的联系阻止危险。Paul 的酒、金钱、关系和酒店运营确实重要，但不是唯一现实完成节点。
来源：https://www.theguardian.com/world/2005/feb/16/rwanda.film

## 2｜zn 独立过门

先不用被测 x 命名 zn：

> 当眼前无辜者因身份面临被系统性屠杀的现实风险时，只要仍有现实可行方式，就不应主动把他们交还给杀戮系统；应继续让保护其生命进入最终排序。

该原则在 Paul 面对直接威胁、资源压力、家人风险与撤离机会时仍持续进入选择，可维持 `zn=true`。本轮不因历史评价争议把 Paul 的全部人格道德化；只测试作品/事件窗口内该明确救人排序。

## 3｜x / 权限结构

被测 x 不做 composite bundling，只锁：

- actor: Paul Rusesabagina
- object: Hôtel des Mille Collines 当前酒店运营与住客安置边界
- permission_type: current management / room-allocation / supplies-use / local access coordination
- scope: 酒店运营范围与已进入酒店的避难者
- quantitative_cap: 不适用
- term: Paul 任 acting manager 的种族灭绝避难窗口
- revocability: 可被业主 / 战时当局 / 暴力节点现实覆盖
- return_obligation: 不适用
- same-layer_pre-effect_veto: Paul 可在酒店内部拒绝主动驱逐，但不能单独 veto 外部军队/民兵进入或屠杀
- global_override: Sabena、国家警察、军方、法国外交体系、联合国等外部节点
- ultimate_title: Sabena
- decision_structure: Paul 对酒店日常管理有现实决定权
- consultation_structure: 住客委员会与其他住客独立外联
- final_decision_structure: 酒店内部事务可由 Paul 主导；外部安全结果不是 Paul 单一最终裁决
- execution_structure: Paul + 酒店人员 + 住客 + Sabena + 外部军警/外交节点共同构成
- co-decision_nodes: 对 protected-range 结果而言存在多个外部等价/上位节点

`x=true` 只到“酒店运营与内部安置管理”这一层，不把 Sabena 产权、住客关系网、国家警察强制力、法国外交压力和联合国存在后验打包进 Paul 的 x。

## 4｜对象层与 current window

current window：Paul 已现实管理酒店、避难者已进入、军民兵威胁正在进入酒店边界、保护行动正在被现实调用的阶段。

same object layer：被测 zn 的排序对象是当前酒店内遭屠杀风险的避难者；被测 x 的对象层也是这些避难者所在酒店运营/安置边界。此两项本身可通过。

## 5｜最近邻

最近邻不是“Paul 什么都没做”，而是：

A. subject-specific management x 真实存在；
B. subject-specific stable externally exclusionary protected-range x 是否成立。

新增证据把 A 与 B 分得更清：

```text
内部运营 / 安置 / 资源调配 x
≠
对外部屠杀风险的稳定排除 x
```

酒店最终成为相对安全范围，并不意味着“风险之所以被稳定阻断”主要由 Paul 的 x 完成。

## 6｜拿掉 / 反向

### zn → x

即使暂时拿掉被测救人原则，Paul 作为 acting manager 的酒店运营、房间、物资与内部协调权限仍存在明显独立管理用途。因此该方向并不干净；但本轮真正决定状态的是另一方向。

### x → zn

拿掉 Paul 的酒店运营 x 后，救人原则仍存在；更关键的是同一 current window 仍存在多个现实保护锚点与完成节点：

- 住客自身委员会与国际联系人；
- Sabena 的产权/投资与对外施压通道；
- 卢旺达国家警察实际部署与上校现场终止围困；
- 法国外交部与联合国/基加利当局施压；
- 其他酒店住客对军方关系的调用。

因此不能再把“酒店最终无人被杀”高纯归因成 Paul subject-specific x 为 zn 提供的 relevant current reality anchor。

## 7｜第三因素冻结

必须分账，不得倒灌：

- Sabena ultimate title / investment interest；
- 住客个人身份、财富与联系人；
- 国家警察与军方强制力；
- 法国外交压力；
- 联合国在场或外部保护；
- 酒店的国际象征性；
- Paul 的个人关系、酒、现金等 execution/amplification 手段。

这些因素不是把 Paul 归零，而是证明 protected result 的 endpoint attribution 不是 subject-specific single-x。

## 8｜strict-v2 / x-scope / protected-range 判定

```yaml
zn_independently_true: true
x_management_independently_true: true
same_current_window: pass
same_object_layer: pass
subject_specific_attribution_for_stable_protected_range: fail
zn_to_x: fail_or_insufficient
x_to_zn: fail
strict_v2: negative_guard
previous_status: deferred_former_positive
new_status: negative_guard
```

本轮不新增 x-scope dynamic，不新增 protected-range ordinary positive/negative control；价值在 strict-v2 deferred 的状态修正。

### 新锁定的最小差异

```text
subject-specific internal management x
+ subject makes major protective efforts
+ protected outcome succeeds
≠
subject-specific x is the relevant current reality anchor

若实际风险阻断依赖住客并行外联 + 业主通道 + 外部军警/外交强制节点，
则成功结果不得倒灌为主体独占 protected-range x。
```

## 9｜统计修正

按同一 current criterion 重分类，不新增重复 control：

```text
strict-v2 verified positive: 1 / 1 works（不变）
deferred former positives: 4 / 4 works → 3 / 3 works
negative guards: 7 / 4 works → 8 / 5 works
```

Paul / 《Hotel Rwanda》从 deferred 集合移动到 negative guard 集合；control 与 independent work 各只移动一次，不双计。

## 10｜边界与后续

本记录只影响 L4 evidence truth，不修改 L1/L2 canonical。realtime registry 与 strict-v2 专项若尚未吸收 `3/3 deferred + 8/5 negative`，属于后续安全全文同步债。

下一高价值缺口：P0 继续寻找第二份跨机制 strict-v2 verified positive；若无法达到事实≥95、分类≥95，则转 P1 真正 path-set completeness audit / exhaustion，而不是继续刷普通 rescue/protection 案例。
