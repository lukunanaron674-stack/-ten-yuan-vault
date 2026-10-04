---
type: z-divergence-query-coordinate-mutation-run
level: L4
status: research-only
maturity: candidate
may_override_canonical: false
operator_id: OP-004
operator_name: REPLACE_DECISION_HOLDER
semantic_ir_dependency: ten-yuan-semantic-ir-v0.1
source_commits:
  - 0bd7e4abe5dcb2e43ddd7d3e351224575bb18de1
updated: 2026-09-07
---

# Z发散器运行记录｜OP-004 REPLACE_DECISION_HOLDER

> research-only。current canonical、十元语义解释器、信息卡、准度卡、正式关系卡与行为 evidence 正本均只读。本 operator 只改变“谁对同一现实接口拥有最终打开、阻断、授权或覆盖权”这一查询坐标；mutation 输出必须重建 Semantic IR 并重新进入 current 十元语义解释器，不得由本 operator 直接判十元。

## 0｜为什么值得保留

OP-003 已能把 `path_set` 从模糊描述展开成可审计接口集合，但同一条 route 是否现实可调用，常常不取决于“这条路有没有”，而取决于：

```text
谁拥有 final decision right？
谁只能咨询？
谁能执行但不能批准？
谁保留 veto？
谁能 override？
授权是否可委托、可撤销、受阈值或期限限制？
```

因此本轮不新增 path，不换 actor 身份，不换题材皮肤，而是冻结同一 actor / object / object_layer / current_window / changed_variable / path topology，仅 mutation `decision_right`，比较同一路径在不同 decision-holder topology 下如何从 callable → blocked、advisory → final、delegated execution → actual authority、veto retained → route closed、override introduced → route reopened。

真正的信息增益不是“谁当领导”，而是**决策权位置改变后，同一结构问题的现实可调用性与值得检索的机制发生变化**。

## 1｜operator contract

```yaml
operator_name: REPLACE_DECISION_HOLDER
mutation_type: replace_decision_holder

input_ir_prerequisites:
  required:
    - actor
    - object
    - object_layer
    - current_window
    - changed_variable
    - decision_right
    - path_set
    - reality_anchor
  preferred:
    - relation_source
    - relation_shape
    - reentry_right
    - future_endpoint

mutated_fields:
  - decision_right

frozen_fields:
  - actor
  - object
  - object_layer
  - current_window
  - changed_variable
  - path_set
  - reentry_right
  - future_endpoint

validation_only_fields:
  - relation_source
  - relation_shape
  - reality_anchor

validation_hook: REBUILD_IR_THEN_REINTERPRET_WITH_CURRENT_TEN_YUAN_SEMANTIC_INTERPRETER
```

### 1.1｜research-local authority trace

不修改 Semantic IR schema，只在 Z research layer 临时展开：

```yaml
authority_trace:
  holder_candidate: string
  authority_type: consultation | recommendation | execution | approval | veto | override | final_decision | co_decision | automatic_rule | unknown
  scope: string | null
  quantitative_cap: string | null
  term: string | null
  revocability: revocable | irrevocable_in_window | unknown
  delegation_status: nondelegable | delegated | delegable | unknown
  override_source: string | null
  route_effect: opens | blocks | conditions | delays | no_effect | unknown
  reality_anchor: string | null
  provenance: confirmed_input | source_fact | generated_candidate | unknown
```

这些不是 canonical IR 新字段。最终只允许把经验证的权限拓扑压回 `decision_right`，其余保留 mutation trace。

## 2｜query_template

```text
给定 current Semantic IR：
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

执行 REPLACE_DECISION_HOLDER。只 mutation decision_right，其余核心字段冻结。

A. 先定义 AUTHORITY QUESTION：
   “对 frozen path_set 中同一 target-effect route，哪个节点拥有最终打开、阻断、授权、否决或覆盖的现实权力？”

B. 生成至多 4 个 decision-holder alternatives，优先覆盖现实上相关的：
   direct holder / delegated holder / veto holder / override holder / co-decision / automatic rule。
   不是每类都必须存在。

C. 对每个 holder 建 authority_trace，明确 consultation / execution / approval / veto / override / final decision 不得混写。

D. 保持 path topology 不变，逐一问：
   - 同一路径现在是否 callable？
   - holder 缺席时是否停住？
   - veto 是否足以关闭 route？
   - override 是否能重新打开 route？
   - delegated execution 是否被误当 final authority？

E. 若替换 holder 必然要求改变 object_layer、changed_variable、current_window 或 path membership，停止并返回：
   IR_CONFLICT_REQUIRES_REEXTRACTION。

F. 只有 source/reality anchor 支持的 holder 才可回填 decision_right。AI 生成的“可能有更高领导/紧急权限”只保留 candidate，不冒充事实。

G. 重建完整 IR，交 current 十元语义解释器重新判断；不得由 Z operator 继承或输出十元标签。
```

## 3｜expected xn activation

本 operator 预期高强度调用 AI 已有的流程与制度知识：

```text
approval chain
delegation
handoff
escalation
veto
co-sign
separation of duties
override
emergency authority
threshold routing
revocation
expiry
appeal / review gate
```

这只是检索激活意义。出现 approval / delegation / multi-node flow 不等于十元 `xn=true`；是否构成 xn、z、x 或其他结构，必须重新进入 current 十元语义解释器。

## 4｜核心 guard

### G1｜consultation ≠ decision right
给意见、被征询、提出建议，不等于能决定 route 是否现实生效。

### G2｜execution ≠ final authority
能执行动作的人，不一定能批准动作；executor 与 final holder 必须分账。

### G3｜veto ≠ full positive control
能阻断 route，不等于能独立打开 route。`can_block` 与 `can_authorize` 分离。

### G4｜override ≠ ordinary holder
紧急 override 若只在窄条件触发，不能倒写成日常 decision holder。

### G5｜title/status ≠ current decision right
国王、CEO、主任、师父、管理员等身份词不自动产生当前窗口的实际 final authority。

### G6｜holder replacement ≠ actor swap
本 operator 不改变被研究 actor；只改变对 frozen route 具有现实裁定权的节点。若必须把研究主体一起换掉，改用 SWAP_ACTOR。

### G7｜same path topology required
若新 holder 导致 path_set 成员增删、对象层变化或 changed_variable 改写，说明这不是纯 decision-holder mutation，应停止重抽 IR。

### G8｜generated authority ≠ confirmed authority
“通常制度里会有主管 override”只能进入 candidate。没有 reality anchor 不得回填 decision_right。

## 5｜failure modes

```yaml
failure_modes:
  - REJECTED_RESKIN: 只把“经理”换成“主任/国王/将军”，权限结构完全没变
  - REJECTED_RETRIEVAL_ONLY: 只是再找更多有审批链的例子
  - TITLE_AUTHORITY_FALLACY: 由职位/身份直接猜 final authority
  - CONSULTATION_AS_FINAL: 把建议权写成最终决定权
  - EXECUTION_AS_APPROVAL: 把执行权限写成批准权限
  - VETO_AS_FULL_CONTROL: 有否决权就被写成能独立授权
  - CONDITIONAL_OVERRIDE_FLATTENING: 条件性 override 被扁平成常态权限
  - DELEGATION_SCOPE_LOSS: 委托后丢失 scope/cap/term/revocability
  - PATH_TOPOLOGY_DRIFT: 为了替换 holder 偷改 path_set
  - OBJECT_LAYER_DRIFT: 权限问题其实已经换了对象层
  - WINDOW_DRIFT: 借历史或未来权力解释当前窗口
  - GENERATED_AS_FACT: AI 补出的上级/紧急节点被当现实事实
  - LABEL_INHERITANCE: 原 IR 的十元标签被 mutation 后直接继承
```

## 6｜stop condition

满足任一即停止：

1. 当前 `decision_right` 本身为 unknown，且无现实锚点可确定至少一个基准 holder；
2. holder alternatives 超过 4 个后仍只是职位换名，没有权限拓扑变化；
3. 新 holder 一出现就迫使 path_set/object_layer/changed_variable 改写；
4. 现实材料只证明“参与”，无法区分 consultation/execution/approval/veto/final；
5. 已找到一个最小差异：仅 decision_right 改变便使 route_effect 明确变化；
6. 新增两个以上 holder 都落入 generated-only，边际信息增益耗尽；
7. 完成 mutation 后立即重建 IR，不继续无限扩组织架构。

## 7｜when_not_to_use

- `path_set` 仍 opaque 或未分层：先用 ENUMERATE_PATH_SET；
- object_layer / changed_variable 不稳定：先补 Semantic IR；
- 研究重点是换主体：用 SWAP_ACTOR；
- 需要改变对象层：用 SHIFT_OBJECT_LAYER；
- 需要跨 domain：用 HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT；
- 需要判断一个条件是否必要：用 REMOVE_CONDITION；
- 现实结构中 route 完全由物理因果自动发生且不存在 decision-right 概念时，不强行套权限拓扑。

## 8｜跨领域测试

> 以下只验证 operator，不累计为 xn 或任何十元案例库。

### T1｜《红楼梦》鸳鸯拒婚｜家内纳妾路径
冻结：`actor=鸳鸯`、`object=贾赦纳妾提案对鸳鸯是否现实生效`、同一 current window 与 path topology。

holder mutation：
- 贾赦：发起并施压，但是否拥有无条件 final authority？
- 贾母：若其现实否决能终止该家内路径，则形成 veto/final-center 候选。

打开的新检索空间：家内名义权力 vs reality veto、谁能 block、谁能 authorize、是否存在 override。

结果：PASS。它不是“换成另一个长辈”，而是改变同一路径的现实裁定拓扑。

### T2｜《西游记》悟空被逐后的直接回返
冻结：`actor=孙悟空`、`object=恢复当前师徒共同关系`、同一 bilateral reentry object layer、同一 direct reentry path。

holder mutation：
- 唐僧若拥有当前关系直接接纳/拒绝权；
- 观音若只能调停、说明或影响，而不能在同层替唐僧完成 bilateral acceptance，则 consultation/mediation ≠ final holder。

结果：PASS。operator 能暴露“中介很强 ≠ 中介就是同层最终 decision holder”。若必须上移到取经任务成员资格层才能让观音成为最终中心，则返回 IR_CONFLICT，而不是硬塞。

### T3｜工程：高风险设计变更
冻结同一 change request、同一 engineering-change path_set。

holder mutation：
- 设计工程师：提出与执行修改；
- 安全负责人：可能保留 veto；
- change control board：可能拥有最终批准；
- 紧急值班负责人：只在事故窗口拥有 conditional override。

结果：PASS。生成 consultation/execution/veto/final/conditional-override 五种不同权限结构，且不需要改 changed_variable。

### T4｜制度：采购审批
冻结同一采购申请与同一 approval-interface path。

holder mutation：
- 项目负责人可发起；
- 采购经理在额度内批准；
- 财务只做预算控制但可能 veto；
- 紧急采购官在 emergency condition 下 override ordinary route。

结果：PASS。可检索 quantitative cap、delegation、revocability、emergency scope，而不是多找几个“采购案例”。

### T5｜现实软件发布
冻结同一 release candidate、同一 production-deploy route。

holder mutation：
- 开发负责人可执行部署但无 final approval；
- security gate 可 veto；
- release manager 可最终授权；
- incident commander 仅在事故窗口拥有 break-glass override。

结果：PASS。明确 `execution ≠ approval`、`veto ≠ positive control`、`conditional override ≠ ordinary holder`。

## 9｜防退化 probes

### P1｜REJECTED_RESKIN
“把经理改成主任，把主任改成将军”，但三者都拥有完全相同的 final approval scope。

结果：REJECTED_RESKIN。

### P2｜REJECTED_RESKIN
“把安全负责人换成冷静的安全负责人/愤怒的安全负责人”。情绪不改变 decision topology。

结果：REJECTED_RESKIN。

### P3｜REJECTED_RETRIEVAL_ONLY
“再找 20 个有审批权的角色或制度”。没有 mutation frozen IR。

结果：REJECTED_RETRIEVAL_ONLY。

### P4｜GENERATED_AUTHORITY_GUARD
“这个组织通常应该还有一个更高层管理员能 override。”若 source/reality anchor 未确认，只能 candidate，不能回填 decision_right。

结果：GUARD_PASS。

## 10｜验证结果

```yaml
accepted_structural_tests: 5
REJECTED_RESKIN: 2
REJECTED_RETRIEVAL_ONLY: 1
additional_guard_probe:
  GENERATED_AUTHORITY_AS_FACT: 1

verdict: ACCEPT_RESEARCH_CANDIDATE
information_gain: high
maturity: candidate
canonical_effect: none
semantic_ir_schema_effect: none
behavior_evidence_effect: none
```

本 operator 通过成功门：它不是同义词替换，也不是更多相似案例检索；仅改变 `decision_right` 即能让同一 frozen route 的现实 callability / blockability / override topology 发生结构变化。

## 11｜与前序 operator 的组合

允许：

```text
SHIFT_OBJECT_LAYER
→ HOLD_CHANGED_VARIABLE_REPLACE_CONTEXT
→ ENUMERATE_PATH_SET
→ REPLACE_DECISION_HOLDER
→ rebuild Semantic IR
→ current 十元语义解释器
```

每一步都必须保留 before/after IR 与 frozen-field audit。禁止一次把 object_layer、context、path_set、decision_right 全部乱改后再声称是一个 mutation。

## 12｜下一最高价值 mutation

`REMOVE_CONDITION`。

理由：OP-004 已经能定位谁握有权限，但许多 route 的实际效力仍取决于条件：额度阈值、紧急状态、期限、身份资格、前置批准、对象是否在线。下一轮最值得冻结 actor/object/layer/path/holder，只移除一个现实条件，测试：

```text
condition present → route callable
condition removed → route still callable / blocked / changes holder
```

这能区分“真正必要条件”与“只是背景装饰”，并直接为 removal/reverse/counterexample 查询提供可复用坐标变换。
