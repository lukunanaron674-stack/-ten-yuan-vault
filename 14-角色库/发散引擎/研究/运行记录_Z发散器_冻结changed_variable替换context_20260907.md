---
type: z-divergence-query-coordinate-mutation-run
level: L4
status: research-only
maturity: candidate
may_override_canonical: false
semantic_ir_dependency: ten-yuan-semantic-ir-v0.1
source_commits:
  - a659483d7d61c30e035926632b396c37fa40db58
  - 0768e3ccf57dbb6515e7b742a01b8ae3fad7f2b4
  - b9d7395e87660319f6bc241a87699368df9112b1
updated: 2026-09-07
---

# Z发散器｜冻结 changed_variable 后替换 context

> research-only。该 operator 只改变“向哪里检索结构”，不直接判十元，不写行为 evidence，不修改 L1/L2 canonical、信息卡、准度卡或正式关系卡。所有 mutation 结果必须重建 Semantic IR 并重新进入 current 十元语义解释器。

## OP-002｜HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT

### 为什么值得保留

`SHIFT_OBJECT_LAYER` 解决“同一事件换观察层”。本轮反过来：**冻结被研究的 changed_variable，不冻结题材和机制外壳，强制把同一个结构问题放进不同 domain/context，再观察现实机制、path_set、decision topology、reality anchor 会不会改变。**

它不是“把古代人物换成项目经理”这种换皮。成功的 cross-context mutation 必须满足：

1. `changed_variable` 的判定问题保持同义且可操作；
2. 新 context 中至少一个结构字段出现真实新 topology，而不是名词替换；
3. 新 context 的 reality anchor 必须是该领域真实可观察接口；
4. mutation 输出不继承原十元标签，必须重新解释。

最新 `xn↔z` interpreter guard 进一步要求：若跨 context 后原本的“持续运行结构”偷偷变成“一次确认/采用节点”，即使自然语言仍都叫“决定/安排”，也必须判为 `VARIABLE_DRIFT` 并拒绝，而不是把它当成功迁移。

## operator contract

```yaml
operator_name: HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT
mutation_type: hold_changed_variable_replace_context

input_ir_prerequisites:
  required:
    - object
    - object_layer
    - current_window
    - changed_variable
    - reality_anchor
  preferred:
    - actor
    - relation_source
    - relation_shape
    - decision_right
    - path_set
    - reentry_right
    - future_endpoint

frozen_fields:
  - changed_variable
  - object_layer_semantic_role
  - current_window_role
  - target_predicate

mutated_fields:
  - actor
  - object
  - domain_context
  - relation_source
  - relation_shape
  - decision_right
  - path_set
  - reentry_right
  - future_endpoint
  - reality_anchor

validation_hook: REBUILD_IR_AND_REINTERPRET_WITH_CURRENT_TEN_YUAN_INTERPRETER
```

`object_layer_semantic_role` 可以换领域名，但不能换结构角色。例如“手术排程运行层”可映射成“航天任务执行运行层”，但不能偷换成“委员会确认资格层”。

`current_window_role` 冻结的是窗口功能，而非钟表长度，例如都必须覆盖“结构开始运行 → 关键中间节点 → 当前结果是否仍可持续”，不要求都恰好三天。

## query_template

```text
输入一份 Semantic IR：
actor={actor}
object={object}
object_layer={object_layer}
current_window={current_window}
changed_variable={changed_variable}
relation_source={relation_source}
relation_shape={relation_shape}
decision_right={decision_right}
path_set={path_set}
reentry_right={reentry_right}
future_endpoint={future_endpoint}
reality_anchor={reality_anchor}

执行 HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT：

1. 用一句可检验问题重述 changed_variable，作为 FROZEN TEST。
2. 选择一个与原 domain 明显不同的新 context。
3. 不复制原故事人物、职业、名词和情绪；为新 context 重新实例化 actor/object/reality_anchor。
4. 保持 object_layer 的结构角色与 current_window 的功能角色不变。
5. 重新枚举 relation_source、relation_shape、decision_right、path_set、reentry_right、future_endpoint。
6. 至少产生 3 个只有新 context 才有的 mechanism candidates。
7. 若新 context 只是同义词/职业/题材皮肤替换，标 REJECTED_RESKIN。
8. 若只是“再找更多同类案例”，标 REJECTED_RETRIEVAL_ONLY。
9. 若 changed_variable 实际漂移，标 VARIABLE_DRIFT 并停止。
10. 重建完整 IR，交 current 十元语义解释器；禁止沿用原标签。
```

## expected xn activation

该 operator 最擅长把一个抽象 changed_variable 转译成不同领域的**运行机制搜索**：

```text
固定：什么变量在变
替换：什么现实系统承载这个变量
→ AI 调用该领域已有 workflow / routing / redundancy / scheduling / handoff / rollback / dependency / fallback 知识
→ 得到机制候选
→ 重新构建 IR
→ 交解释器判断是否真的涉及 xn 或其他十元
```

因此 `expected xn activation` 指“更容易调用 AI 已有的大量流程结构知识”，不是“跨域结果自动判 xn”。

## failure modes

```yaml
failure_modes:
  - RESKIN_ONLY: 只替换人物、职业、时代、颜色、情绪、题材名词
  - RETRIEVAL_ONLY: 只扩大相似案例搜索数量
  - VARIABLE_DRIFT: changed_variable 被偷偷改成另一个结构问题
  - LAYER_DRIFT: object_layer 的结构角色变化
  - WINDOW_ROLE_DRIFT: 新 context 的窗口只截取一次事件，原窗口却测试持续结构
  - CONFIRMATION_FOR_PROCESS_SWAP: 把持续 process 换成一次确认节点
  - PROCESS_FOR_CONFIRMATION_SWAP: 把确认状态换成流程运行
  - ANCHOR_DECORATION: reality_anchor 只是题材道具，没有现实卡点
  - TOPOLOGY_CLONE: 所有字段一一换名但机制 topology 完全不变
  - LABEL_INHERITANCE: 直接继承原十元标签
```

## stop condition

满足任一条即停止本次 mutation：

1. 新 context 无法用同一句 FROZEN TEST 问 changed_variable；
2. 为了成立必须改 object_layer semantic role；
3. reality_anchor 无法给出该领域独立现实接口；
4. 连续两个 context 只得到同一 topology clone；
5. 已出现至少一个新的 mechanism family，足以打开新的检索空间；
6. mutation 后 IR 已完整，立即送解释器，不继续无上限换题材。

## when_not_to_use

- changed_variable 本身还不明确时；
- 目标是寻找同层最近邻时；
- 目标是枚举当前 context 的完整 path_set 时；
- 目标是删除一个必要条件做 removal 时；
- 用户只想做题材改编/角色换皮时；
- 原问题依赖不可迁移的唯一物理定律或唯一制度条文，跨 context 会让 FROZEN TEST 失真时。

# 跨领域测试

> 所有测试只验证 operator，不计入 xn 或任何十元案例库。

## T1｜《红楼梦》鸳鸯拒婚 → 制度审批

**Frozen changed_variable：** `谁能让一个“拒绝/否决”在 current window 中成为现实有效结果，而不是停留在个人表达。`

原 context 中可检索的是个人拒绝、家族权威、求助接口、最终阻断节点。

替换到制度审批：某研究员拒绝高风险数据共享请求。新 topology 不再是家族长幼，而是：申请人 → 数据管理员 → 伦理委员会 → 法务/最终审批权；可以出现 veto、override、mandatory escalation、automatic expiry 等现实机制。

**结果：PASS。** changed_variable 保持，decision topology 与 reality anchors 实质改变，不是“鸳鸯换成研究员”。

## T2｜《西游记》悟空回返 → 软件权限恢复

**Frozen changed_variable：** `被移出共同系统后，原对象的 reentry 是否仍有现实可调用路径，以及这些路径怎样被恢复/阻断。`

替换到企业系统账号被撤销后的权限恢复：direct manager request、identity verification、security review、break-glass admin、automatic policy block 构成新的 reentry/path topology。

**结果：PASS。** 原文学关系里的 direct/mediated reentry 被转成制度接口，path_set 与 reality_anchor 全部重建，但测试问题未变。

## T3｜《三国演义》街亭执行 → 工程变更流程

**Frozen changed_variable：** `既定目标不变时，执行结构如何被主体重新组织，并且这种组织是否形成持续可运行结构而非一次决定。`

替换到桥梁施工变更：设计冻结后，现场经理因地质条件重排施工顺序。新 context 打开 dependency graph、permit gate、材料前置、inspection hold point、rollback、change-control record 等机制。

**结果：PASS。** 直接调用大量工程 workflow 知识；同时依据最新 `PROCESS-vs-CONFIRMATION` guard，若只生成“总工签字批准变更”而没有持续执行结构，则判 VARIABLE_DRIFT，不算成功。

## T4｜Apollo 13 供电连续性 → 医院重症供氧

**Frozen changed_variable：** `同一目标功能在 current window 中的现实连续性由哪些可调用执行路径维持；路径失效时还有什么同层或跨层 substitute。`

替换到 ICU 供氧：主氧源、备用汇流排、气瓶、转运呼吸机、人工通气等路径必须按 object/actuator/target-effect layer 分层枚举。

**结果：PASS。** 新领域出现完全不同物理 mechanism family，但同一个 path continuity 问题仍成立；并暴露“同层 path vs 跨层 substitute”的新检索空间。

## T5｜医院手术排程 → 港口集装箱放行

**Frozen changed_variable：** `一个目标对象能否在目标窗口进入下一执行阶段，以及哪些 blocking interfaces 决定其现实可执行性。`

替换到港口放行：海关申报、查验、危险品许可、码头窗口、拖车预约、付款/担保、船期截关分别形成 blocking interfaces；decision_right 与自动/人工 gate topology 与医院资源排程明显不同。

**结果：PASS。** 不是“床位换成码头”的换皮，因为路径成员、授权结构、自动失效机制和时间耦合均变化。

## T6｜反例：项目经理换成将军

输入只是：

`“项目经理组织三阶段评审” → “将军组织三阶段军议”`

若节点数量、decision topology、path_set、reality_anchor 完全一一对应，只换职业与题材。

**判定：REJECTED_RESKIN。**

## T7｜反例：再找十个类似流程

没有改变任何 IR coordinate，只把检索数量从 1 扩成 10。

**判定：REJECTED_RETRIEVAL_ONLY。**

## T8｜反例：持续流程偷换成一次确认

原 frozen test 是“执行结构怎样持续运行”，新 context 却只生成“委员会最终批准”。

依据最新 interpreter guard：`process structure ≠ confirmation/adoption node`。

**判定：VARIABLE_DRIFT / REJECTED。**

# 防退化统计

```yaml
accepted_structural_tests: 5
REJECTED_RESKIN: 1
REJECTED_RETRIEVAL_ONLY: 1
REJECTED_VARIABLE_DRIFT: 1
```

# validation hook

```text
HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT
→ rebuild all mutated Semantic IR fields
→ assert frozen changed_variable still passes semantic equivalence test
→ assert object_layer semantic role unchanged
→ assert current_window role unchanged
→ mark provenance = z_mutation_research
→ send to current ten-yuan semantic interpreter
→ interpreter independently judges symbol / nearest neighbor / guard
→ only interpreter result may enter downstream candidate review
```

禁止：

```text
原 context 被解释成 xn
→ 换到工程/制度 context
→ 因为结构“看起来一样”直接继承 xn
```

# 本轮结论

```yaml
operator: HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT
verdict: ACCEPT_RESEARCH_CANDIDATE
information_gain: high
why:
  - 冻结“问什么变量”而改变“去哪个现实系统寻找机制”
  - 能调用跨领域已有 workflow / path / governance / redundancy 知识
  - 明确区分结构迁移与题材 reskin
  - 新增 VARIABLE_DRIFT / PROCESS-CONFIRMATION-SWAP 防护
  - 与 SHIFT_OBJECT_LAYER 正交，可组合但必须逐步执行
canonical_effect: none
behavior_evidence_effect: none
```

# 与 OP-001 的组合规则

允许：

```text
SHIFT_OBJECT_LAYER
→ 在新 object layer 上锁定 changed_variable
→ HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT
```

禁止同时双变而不留 provenance。每一步都必须保存 before/after IR，否则无法知道结构差异来自 layer shift 还是 context replacement。

# 下一最高价值 mutation

`ENUMERATE_PATH_SET`。

理由：前两轮已经分别解决“换观察层”和“冻结变量跨 context”。下一步最值钱的是把当前 IR 中模糊的 `path_set` 从自然语言整体词拆成**有限、可审计的接口集合**，尤其需要区分：

- enumerated interfaces vs complete relevant path set；
- same-layer path vs cross-layer substitute；
- nominal path vs reality-callable path；
- actor-specific route vs system-level target-effect route。

这会直接提高 Z 发散器对 AI 大量流程/工程/制度知识的调用质量，同时减少“看起来还有办法”这种不可审计的泛化。