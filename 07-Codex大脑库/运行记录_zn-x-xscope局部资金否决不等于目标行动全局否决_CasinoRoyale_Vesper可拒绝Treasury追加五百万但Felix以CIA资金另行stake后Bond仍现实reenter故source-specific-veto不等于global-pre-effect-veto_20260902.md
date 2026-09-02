---
type: ten-yuan-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
sample_type: P5-source-specific-veto-vs-global-veto
work: Casino Royale (2006)
actor: Vesper Lynd
counterparty: James Bond
updated: 2026-09-02
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
x_scope_decision_structure_calibration_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
protected_range_increment: false
---

# zn↔x 火轴边界压力测试｜Casino Royale｜Vesper 的 Treasury veto 不等于对 Bond re-entry 的 global veto

## 0｜启动对齐

本轮以写前 `main@7169fb86bf7c9c066714256ef58958a806bd4521` 为真值。启动时核对最新 commits，并按 current canonical 重读/检索 L0/L1 门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度路由、相关关系卡/`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current 与最近 evidence。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

当前研究已进入边界压力测试期；普通已达 pending-review 的正例不继续堆量。本轮只测试一个新的 P5 高纯边界：**局部资金来源上的 veto 是否可以倒灌成目标行动层的 global pre-effect veto**。

## 1｜作品 / 人物 / 当前窗口

- 作品：`Casino Royale`（2006）
- 主体：Vesper Lynd
- 对手方：James Bond
- 明确阶段：Bond 在 Casino Royale 输掉英国财政部提供的首笔 1000 万美元 stake 后，请求追加 500 万美元 re-buy；Vesper 拒绝；随后 Felix Leiter 以 CIA 资金另行 stake，Bond 现实重新进入牌局。
- 样本类型：P5 `source-specific veto ≠ global veto` 边界护栏。

## 2｜事实、触发、对象、动作、可观察结果

### 2.1 事实

公开影片剧情与制作剧本可交叉确认：

1. MI6 让 Bond 参加 Casino Royale 牌局；首笔 buy-in 为 1000 万美元，并存在 500 万美元 re-buy。
2. Vesper 是英国财政部派出的资金监督节点；Bond 输掉首笔 stake 后要求追加 500 万美元。
3. Vesper 明确拒绝授权该笔追加 Treasury 资金。
4. 该拒绝没有让“Bond 重新进入牌局”这一目标效果变成绝对不可达；Felix Leiter 随后提出由 CIA 出资 stake Bond，交换条件是 Le Chiffre 交给 CIA。
5. Bond 接受 Felix 的条件，并现实 re-enter，之后继续比赛。

### 2.2 触发

触发节点：Bond 输掉 Treasury 首笔 1000 万美元 stake，并请求追加 500 万美元 re-buy。

### 2.3 对象层拆分

必须拆成两个对象层，禁止把它们揉成一个 `x=true/false`：

- Layer A：`British Treasury additional $5m re-buy funds` 的授权/处分节点。
- Layer B：`Bond re-entry into the poker tournament` 的目标行动效果。

Vesper 在 Layer A 有现实否决节点；证据不支持她在 Layer B 对所有可能资金来源拥有 global pre-effect veto。

## 3｜x 权限结构

```yaml
actor: Vesper Lynd
object:
  layer_A: British Treasury additional $5m re-buy funds
  layer_B: Bond tournament re-entry effect
permission_type:
  contact: true_as_mission_finance_counterparty
  use: treasury_funds_not_personal_use
  custody: supervisory_not_physical-cash-custody
  call: false_for_Bond_without_Vesper_authorization_on_Treasury_source
  management: true_narrow_on_Treasury_mission_funds
  disposition: true_narrow_authorize_or_refuse_additional_Treasury_rebuy
  veto: true_on_Treasury_additional_5m
  exclusion: source-specific_only
  transfer: not_inferred
scope:
  layer_A: British Treasury additional re-buy allocation
  layer_B: no_global_veto_over_all_possible_re-entry_funding_paths
term: same_post-loss_rebuy_window
revocability: not_materially_tested
return_obligation: not_materially_tested
same-layer_pre-effect_veto:
  layer_A: Vesper_yes
  layer_B_global: no_evidence_and_reality-test_disconfirms_globalization
global_override:
  alternative_source_node: Felix_Leiter_CIA_funding
ultimate_title:
  Treasury_funds: British_government_source_not_Vesper_personal_title
  CIA_funds: separate_source
decision_structure:
  Treasury_rebuy_release: unilateral_veto_by_Vesper_relative_to_Bond_request
  all-source_reentry: not_joint_with_Vesper
consultation_structure:
  Bond_requests_Vesper_then_later_negotiates_with_Felix
final_decision_structure:
  Treasury_funds: Vesper_can_refuse
  CIA_stake: Felix_and_Bond_agreement_enables_alternative_path
execution_structure:
  Treasury_path: blocked
  CIA_path: funded_then_Bond_reenters
co-decision_nodes:
  Treasury_path: Vesper_is_mandatory_source_node
  global_reentry_effect: Vesper_not_mandatory_across_all_paths
```

## 4｜关键压力

错误推理：

```text
Vesper 可以拒绝追加 500 万美元
→ Vesper 对 Bond 是否能重新入局拥有 final/global veto
```

现实结果否定该倒灌：

```text
Treasury path 被 Vesper 阻断
+
CIA alternative path 成立
+
Bond reality-tested re-entry succeeds
→ Vesper veto 只锁在 Treasury source/object layer
```

因此本轮新增护栏：

> **source-specific veto ≠ target-effect global veto。一个节点能阻断自己掌握的资产池、凭证路径或资源来源，不代表它能阻断所有通向同一目标效果的替代路径。只有当该节点是所有可生效路径共同必经的 mandatory pre-effect node，才可上升为目标效果层的 global veto。**

## 5｜最近邻排除

### 5.1 Thirteen Days
上一轮锁的是 `broad consultation + strong dissent ≠ joint final decision`，判断咨询节点是否拥有 mandatory pre-effect blocking power。

本轮不同：Vesper **确实有真实 veto**，但 veto 的 object/scope 只覆盖 Treasury 资金来源；问题是能否把这个真实局部 veto 倒灌为对更高层目标效果的 global veto。

### 5.2 Crimson Tide
`Captain + XO concurrence` 对 nuclear release 是同一 effect 的 mandatory threshold，任一节点不通过，当前 launch effect 不能合法/程序性跨门。

Casino Royale 反而证明：当目标效果存在独立替代路径时，单一路径上的 veto 不能自动构成 global joint-final threshold。

### 5.3 Nick Fury / redundant credential
Fury 案锁的是同一 actor 内多个 credential path 部分撤销后仍有 surviving credential path。

本轮锁的是**不同资源主体/资产池**形成替代 causal path：Treasury path OFF，不等于 CIA path OFF。两者共同支持更一般的 path-topology 原则，但对象和机制不同，不重复计同一普通正例槽。

## 6｜拿掉 / 反向 / 第三因素冻结

### 拿掉测试

拿掉 Felix/CIA alternative funding：Vesper 的拒绝会让当前可见 re-buy path 失败；但这仍只证明当时唯一可见路径被阻断，不能反推 Vesper 天然拥有 tournament re-entry 的抽象 global veto。

拿掉 Vesper 的 Treasury authorization node：Bond 对 Treasury 追加 500 万美元的请求不再经过她，则本轮 Layer A veto 不成立。

### 反向测试

若证据显示所有 tournament re-entry 资金无论来源都必须经过 Vesper 二次批准，而且 Felix 出资后仍须她批准才能生效，那么才可把她升级为 Layer B 的 global pre-effect veto node。本片现实结果相反：Felix stake 后 Bond 成功 re-enter。

### 第三因素冻结

冻结：Vesper 后续背叛、男友被绑架、Bond 与 Vesper 感情、谁更懂扑克、Bond 最终获胜、Le Chiffre 阵营、MI6/CIA 政治关系。它们都不能替代本轮的权限拓扑事实。

## 7｜zn / strict-v2

本轮不锁 `zn`。

Vesper 拒绝追加资金可由财政监督、风险判断、对 Bond 判断力的评价以及其隐藏外部压力等 competing anchors 解释；不能从“拒绝给钱”“后来牺牲”或人物身份倒推独立不可让渡原则。

因此：

```yaml
strict_v2_verified_positive: +0
strict_v2_negative: +0
strict_v2_deferred: +0
strict_precondition: +0
```

strict-v2 verified positive 继续 `0 / 0 works`。

## 8｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830
```

本轮不增加 ordinary positive，不修改 pending-review/canonical。

按写前 effective ledger：

```text
x-scope boundary guards:
21 controls / 18 independent works
→ 22 controls / 19 independent works
```

《Casino Royale》此前未进入 current boundary-guard independent-work 集合，故本轮 `+1 control / +1 work`。

其余：

```yaml
x_scope_positive: +0
x_scope_dynamic: +0
x_scope_decision_structure_calibration: +0
protected_range_positive: +0
protected_range_negative: +0
strict_all: +0
```

## 9｜外部事实来源

- `Casino Royale` production screenplay（Daily Script）：明确牌局结构为 1000 万美元 buy-in + 500 万美元 re-buy，并说明 Vesper 是 Treasury 资金监督节点。
- Wikipedia / `Casino Royale (2006 film)`：明确 Bond 输掉首笔 1000 万美元后，Vesper 拒绝授权额外 500 万美元；Felix Leiter 随后 stake Bond，交换 CIA 获得 Le Chiffre，Bond 重新入局。
- Entertainment Weekly 2026-01-13 对影片结局/剧情回顾：同样复述 Vesper 拒绝 500 万美元、Felix 提供资金、Bond reenter 并最终获胜的链条。

## 10｜治理边界

本记录只新增 L4 x-scope boundary evidence，不修改 L1/L2 canonical，不自动升格 pending-review。

下一轮最高信息增益：P0 继续找首个 strict-v2 ≥95；若仍无，则优先寻找本轮的严格反向：**原本存在多个 independent paths，但事件后 alternative paths 被逐一关闭，最终 surviving path count 从 >0 降为 0，并在同一 target-effect reality-test 中失败**，用于验证 `local veto → path exhaustion → global effect OFF` 的动态收缩。