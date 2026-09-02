---
type: ten-yuan-fire-axis-boundary-pressure-run
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: The Terminal (2004)
actor: Frank Dixon
stage: Viktor因Krakozhia政变导致签证失效后至被限制在JFK International Transit Lounge的初始窗口
sample_type: x-scope-boundary-guard
priority_bucket: P5
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
  strict_gate: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
x_scope_decision_structure_calibration_increment: false
protected_range_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_guard_increment: false
strict_precondition_guard_increment: false
may_override_canonical: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜《The Terminal》Frank Dixon｜阻断一个状态转移 ≠ 掌握对象后续结果态处分

## 0｜启动与 current 对齐

写前以 `main@649523fce986d99385c5b1f62b9ddac49b0bc251` 为真值。启动按 L0/L1 门禁重读 `AGENTS.md`、`AI文件权力与任务总览.md`、十元关系必读门禁、L1 十元—五行正本 v1.6，并对齐 zn/x 信息卡与准度路由、相关关系卡/补卡、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current、protected-range current 与最近 commits。仓库 current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current effective ledger 以最新 digest 为准：strict-v2 verified positive 仍为 `0/0 works`；strict-precondition `20/9`；x-scope boundary `22/19`；dynamic `23/21`；decision-structure calibration `5`。x-scope 已 pending-review，普通正例停止堆量，本轮只在发现新边界机制时记账。

## 1｜本轮对象与事实链

作品：Steven Spielberg《The Terminal》(2004)。

人物：Frank Dixon。

固定 current window：Viktor Navorski 抵达 JFK 后，Krakozhia 在其飞行途中发生政变，美国 State Department 撤销原本允许他入境的签证；Dixon 向 Viktor 明确说明：

1. Viktor 当前没有进入美国的合法资格；
2. Dixon / CBP 因此可以现实拒绝其通过美国入境门；
3. 但同一窗口内 Dixon 又明确承认自己没有权力拘留 Viktor；
4. Viktor 也暂时无法返回 Krakozhia；
5. 因而 Dixon 只能签 release，把 Viktor 放入 International Transit Lounge，并将其活动范围限制在该 transit lounge 内。

公开影片 transcript 给出核心结构：`You have no right to enter the U.S. and I have no right to detain you. You have fallen through a crack in the system.` 随后 Dixon 允许 Viktor 进入 International Transit Lounge，并说明其只能在该范围内自由活动。

证据：
- The Terminal (2004) transcript: https://transcripts.simpleremix.com/script.php/the-terminal-2004-1WEN
- IMDb Frank Dixon character quotes: https://www.imdb.com/title/tt0362227/characters/nm0001804/
- film plot cross-check: https://en.wikipedia.org/wiki/The_Terminal

## 2｜禁止的身份倒推

本轮不因为 Dixon 是 `Director of Customs and Border Protection`、上级官员、机场管理者或影片反派而直接判 `x`。

只按现实 effect-test 分层：

```text
Viktor 试图进入美国
→ admission 被现实拒绝
→ entry-denial x = true

同一 Viktor 已被拒绝入境
→ Dixon 明确没有合法 detention 权
→ detention x = false on tested layer

同时 Viktor 暂时不能合法返回 Krakozhia
→ Dixon 不能仅凭 entry-denial 节点自动生成 immediate deportation result
→ deportation / return-disposition x = false or unavailable in this window
```

## 3｜x-scope 固定拆分

```yaml
actor: Frank Dixon
object: Viktor Navorski
object_layer: cross-border admission / post-denial custody-disposition state

permission_type:
  inspect_travel_documents: true
  deny_US_entry: true_reality_tested
  restrict_release_to_International_Transit_Lounge: true_reality_tested
  detain_Viktor_as_federal_custody: false_by_explicit_same-window_statement
  unilaterally_return_Viktor_to_Krakozhia: false_in_current_window
  global_person_disposition: false

scope:
  true_scope:
    - US_admission_gate
    - transit-lounge release boundary
  false_or_unproved_scope:
    - federal detention
    - forced immediate repatriation
    - whole-person final disposition

term:
  temporary_until_status_resolved

revocability:
  admission status depends on visa/state-recognition layer

return_obligation:
  not_applicable_as_property

same-layer_pre-effect_veto:
  US_entry:
    Dixon_CBP_gate: effective
  federal_detention:
    legal_authority_gap: blocks Dixon attribution
  immediate_return_to_Krakozhia:
    travel/state-recognition conditions: block simple return path

global_override:
  State_Department_and_immigration_legal_structure: true

ultimate_title:
  not_applicable_person_object

decision_structure:
  admission_gate: realized administrative denial
  detention_disposition: unavailable_to_Dixon_in_tested_window

consultation_structure:
  not_material

final_decision_structure:
  entry_transition: Dixon/CBP gate can stop effect
  post-denial person-state: not unilateral_to_Dixon

execution_structure:
  entry attempt -> CBP refusal -> no US entry
  refusal -> release into transit lounge because detention authority absent

co-decision_nodes:
  - State Department visa-recognition layer
  - immigration/legal detention authority layer
```

## 4｜关键压力：阻断 transition 不等于拥有 resultant-state disposition

错误推理：

```text
Dixon 能阻止 Viktor 进入美国
→ Dixon 控制 Viktor 接下来去哪
→ Dixon 对 Viktor 有 global custody/disposition x
```

本轮现实反例把这三步拆开：

```text
permission to block transition A→B
≠ permission to choose arbitrary resultant state C/D/E
```

Dixon 的入境拒绝是强而真实的窄 `x`；但这个 veto 只证明 `A→US-entry` 这条 transition 被挡住。它没有自动生成：

- `detain Viktor`；
- `send Viktor home now`；
- `choose any destination for Viktor`；
- `whole-person global disposition`。

由于法律/外交状态形成的上位 constraint，拒绝后的结果恰恰是一个 **stranded intermediate state**：Viktor 不能入境，也不能被 Dixon 随意拘留或直接送回。

因此新边界锁为：

> **transition-blocking x ≠ resultant-state disposition x。能现实否决一个状态转移，只锁该转移的 pre-effect veto；若后续状态由独立法律、第三方节点或不可用路径共同限定，就不能把“我能说不”倒灌成“结果归我处分”。**

## 5｜最近邻排除

### vs Casino Royale / Vesper

Vesper 锁：

```text
source-specific funding veto
≠ target-effect global veto
```

因为 CIA alternative path 能绕过 Treasury path，让 Bond 仍 re-enter poker game。

Dixon 本轮不是 alternative path 绕过其 veto；Viktor 的 US-entry transition 确实被 Dixon/CBP 阻断成功。新增问题发生在 **阻断成功之后**：阻断者是否因此拥有 resultant-state disposition。答案是否定的。

所以：

```text
Casino Royale:
local veto 被 alternative path 绕过

The Terminal:
local veto 完全生效
但 post-veto resultant state 不归 veto-holder 任意处分
```

### vs local-x ≠ global-x 普通护栏

本轮不只重复“局部 ≠ 全局”。它新增一个可操作的状态机判据：

```text
A --[actor can veto]--> B
veto succeeds
↓
object remains in state A/intermediate S

不能据此推出：
actor can choose S→C / S→D / S→E
```

也就是说必须把 **edge control** 与 **node/state disposition** 分账。

## 6｜拿掉 / 反向测试

### 拿掉 entry-denial x

若 Dixon/CBP 对 US-entry 没有现实 gate，Viktor 的入境 transition 就不会因该节点被阻断；因此窄 admission-denial `x=true` 有明确 effect-test。

### 拿掉 legal/detention constraint

若 Dixon 同时拥有明确、现实、可直接执行的 detention 或 deportation disposition，而且拒绝入境后可单方选择并实现这些后续状态，则本轮边界将不成立；届时可以讨论更宽的 person-disposition x。

### 反向镜像

高信息增益反向应满足：

```text
same actor
+ same object/person
+ transition veto true
+ downstream disposition interface also independently reality-tested true
→ block one transition + choose resultant state
```

只有后半段另证通过，才能从 edge-veto 扩张到 state-disposition。

## 7｜第三因素冻结

本轮 competing anchors 明确分账：

- State Department 撤销签证：解释 Viktor 为什么不能入境，不等于 Dixon 拥有全部 person-disposition；
- Krakozhia 政变/边境与航班状态：解释为什么即时 return path 不可用；
- immigration/legal detention authority：明确限制 Dixon 对 detention 的归因；
- Dixon 的职位：只作为事实背景，不作为十元 `x` 成立证据；
- Viktor 自身意愿与后续行为：不用于反推 Dixon 的权限。

因此没有把制度、外交状态和职位打包成 Dixon 的 composite x。

## 8｜zn 与 strict-v2

本轮不锁 Dixon 的 `zn`。

Dixon 的行为可由规则遵从、职业考核、风险控制、升迁压力与个人敌意等 competing anchors 解释；不能从“坚持不让 Viktor 入境”倒推出稳定不可让渡原则。

因此 strict-v2 不进入 deferred，也不增加 negative/precondition：

```yaml
strict_v2_verified_positive_increment: false
strict_v2_negative_guard_increment: false
strict_precondition_guard_increment: false
```

strict verified positive 继续 `0 / 0 works`。

## 9｜成熟度

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
```

事实端由影片 transcript 的同窗显式陈述与实际 transit-lounge release 共同支持；分类端直接命中 current x-scope 的 permission-type / scope / same-layer veto / global override 分账要求。

## 10｜统计变化

写前 current effective ledger：

```yaml
x_scope_boundary_guards: 22
x_scope_boundary_guard_works: 19
x_scope_dynamic_transition_controls: 23
x_scope_dynamic_transition_works: 21
x_scope_decision_structure_calibration_controls: 5
strict_v2_verified_positive_controls: 0
strict_v2_verified_positive_works: 0
```

《The Terminal》此前未进入 current x-scope boundary-work 集合；本机制不是旧 source-specific-veto 绕行、接口/目标处分、credential、title 或一次 compliance 的换皮，因此：

```text
x-scope boundary:
22 controls / 19 works
→ 23 controls / 20 independent works
```

其余：

```yaml
x_scope_positive: +0
x_scope_dynamic: +0
decision_structure_calibration: +0
protected_range: +0
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

## 11｜本轮锁定

```text
transition-blocking x
≠ resultant-state disposition x

edge veto
≠ node/state ownership of outcome

成功阻断 A→B
≠ 自动拥有 S→C/D/E 的后续处分接口
```

## 12｜下一轮最高信息增益

P0 继续优先寻找第一份真正 strict-v2 verified positive，不降低门槛。

若仍无 ≥95，优先寻找本轮的同人物/同对象反向最小差异：

```text
阶段 A：actor 只能 deny transition，不能处分 post-denial state
→ 真实权限节点变化
阶段 B：actor 新增 downstream custody / redirect / release / deport interface
→ same object 的 resultant-state disposition 现实生效
```

这会形成真正的 `edge-control → state-disposition scope expansion`，比继续堆另一个“官员能拒绝但不能全管”的普通反例信息增益更高。