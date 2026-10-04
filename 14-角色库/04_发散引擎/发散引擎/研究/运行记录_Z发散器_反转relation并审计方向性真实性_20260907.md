---
type: z-divergence-query-coordinate-mutation-run
level: L4
status: research-only
maturity: candidate
may_override_canonical: false
operator_id: OP-007
operator_name: REVERSE_RELATION
semantic_ir_dependency: ten-yuan-semantic-ir-v0.1
semantic_ir_normalization_dependency: ten-yuan-semantic-ir-normalization-v0.1
source_commits:
  - e63c785f2ac1dcb32c12ddf72dda885d3b715173
  - 9c44e8c4ae0def799164180f770899dd754db495
  - 125dbc4b74e0e5186c4ca1668568315bb32c53c5
updated: 2026-09-07
---

# Z发散器运行记录｜OP-007 REVERSE_RELATION

> research-only。current canonical、十元语义解释器、L1/L2、十元信息卡、准度卡、正式关系卡与行为 evidence 正本均只读。本 operator 只测试现实关系方向是否可反转；任何 mutation 输出必须重建 Semantic IR，再进入 current 十元语义解释器，不得继承原十元标签。

## 0｜为什么值得保留

自然语言极易把“谁依赖谁、谁给谁权限、谁向谁开放回返、谁把谁纳入路径”压成主谓方向。把句子从“A 依赖 B”改写成“B 影响 A”，看起来像反向，现实结构却可能完全没有反转。

本 operator 的价值不是搜索相反案例，而是冻结同一 actor/object/object_layer/current_window/changed_variable，只反转 relation_source / relation_shape 所表达的现实方向，然后强制重新审计 decision_right、path_set、reentry_right、future_endpoint 与 reality_anchor。只有后者也发生可验证的方向性变化，才允许把“reverse”视为结构 mutation。

它主要调用 AI 已有的大量 dependency inversion、client/server、principal/agent、grant/revoke、request/approval、caller/callee、supplier/consumer、command/feedback、membership/reentry 等知识，但这些只是候选机制空间，不自动构成十元 xn 或任何其他十元结论。

## 1｜operator contract

```yaml
operator_name: REVERSE_RELATION
mutation_type: reverse_relation

input_ir_prerequisites:
  required:
    - actor
    - object
    - object_layer
    - current_window
    - changed_variable
    - relation_source
    - relation_shape
    - reality_anchor
  preferred:
    - decision_right
    - path_set
    - reentry_right
    - future_endpoint

mutated_fields:
  - relation_source
  - relation_shape

frozen_fields:
  - actor
  - object
  - object_layer
  - current_window
  - changed_variable
  - target_predicate

conditionally_rederived_fields:
  - decision_right
  - path_set
  - reentry_right
  - future_endpoint
  - reality_anchor

validation_hook: REBUILD_IR_THEN_REINTERPRET_WITH_CURRENT_TEN_YUAN_SEMANTIC_INTERPRETER
```

## 2｜reverse 的合法定义

合法 reverse 不是交换句法主宾，而是把一个现实有向关系 `A -> B` 改成 `B -> A` 后，检查原对象层上的约束、调用权、阻断力与可观测结果是否随之反向。

至少要回答：
1. 原方向是谁向谁提供方向、许可、资源、承载、回返或约束？
2. 反向后，B 是否真的获得了原先 A 的现实作用，而不是只“对 A 有影响”？
3. removal gap 是否反向？
4. decision_right / callable path / reentry right 是否出现同层 delta？
5. 是否存在独立 reality anchor 证明 B->A，而非仅有叙述词序变化？

如果只改变语言表述，返回 `REJECTED_DIRECTIONAL_PARAPHRASE`。

## 3｜query_template

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

执行 REVERSE_RELATION：
A. 冻结 actor/object/object_layer/current_window/changed_variable/target_predicate。
B. 用一句有向图式写 baseline relation，例如 A --grant--> B、A --depends_on--> B、A --admits--> B。
C. 构造唯一一个 reverse candidate：B --same_relation_family--> A。禁止同时换题材、换对象层或加入新角色。
D. 重新计算 decision_right / path_set / reentry_right / future_endpoint / reality_anchor。
E. 做双向 removal：
   - remove A->B 后 baseline 是否出现现实缺口；
   - remove B->A 后 reverse 是否出现对应缺口。
F. 若 reverse 只产生“B 也影响 A”而没有同层方向性权利/依赖变化，标 REJECTED_DIRECTIONAL_PARAPHRASE。
G. 若必须改变 changed_variable 才能让反向成立，标 REVERSE_REQUIRES_NEW_VARIABLE，停止并重新提取 IR。
H. 若只是要求寻找更多“相反案例”，标 REJECTED_RETRIEVAL_ONLY。
I. 若只是把人物、职业、题材换成相反身份，标 REJECTED_RESKIN。
J. 不判十元。baseline 与 reverse IR 均交回 current 十元语义解释器重新判断。
```

## 4｜expected xn activation

预期激活 AI 已有的方向性结构知识：

```text
dependency inversion
caller <-> callee
principal <-> agent
request <-> approval
grant <-> revoke
supplier <-> consumer
command <-> feedback
membership admission <-> member exit/reentry
upstream <-> downstream
producer <-> scheduler
service provider <-> service requester
```

这里的 xn activation 只表示“更容易检索到有向运行关系及其反向候选”。reverse 后出现 routing、handoff、审批、反馈链不代表十元 xn=true，仍必须交 current interpreter。

## 5｜核心 guards

### G1｜syntax reversal ≠ structural reversal
“甲依赖乙”改成“乙影响甲”不是反向成功；必须有同层现实作用方向变化。

### G2｜relation_source reversal ≠ decision_right reversal
外部关系来源反转，不自动交换最终决定权。

### G3｜mutual influence ≠ symmetric relation
双方互相影响不代表 A->B 与 B->A 权利、路径、阻断力对称。

### G4｜removal gap must reverse locally
若 baseline 删除 A->B 有缺口，而 reverse 删除 B->A 没有对应缺口，则只证明单向依赖，不得声称结构可逆。

### G5｜same noun ≠ same relation family
“支持、帮助、控制、安排、接纳”等名词可能覆盖不同 changed_variable；反向前必须固定 relation family。

### G6｜different object layer requires split IR
A 在上位任务层约束 B，而 B 在下位执行层反馈 A，属于两个对象层，不是同一关系简单反转。

### G7｜reentry direction is subject-specific
“组织允许成员回返”与“成员允许组织重新接纳自己”不是对称句式；reentry_right 必须明确归属主体与对象层。

### G8｜path membership ≠ path ownership
某主体出现在一条 route 上，不等于它拥有或决定这条 route。

### G9｜state absence ≠ reverse presence
A->B 不成立只能证明原方向缺失，不能自动推出 B->A 成立。

### G10｜generated reverse ≠ confirmed reverse
模型构造的反向机制没有 reality anchor 时只能是候选，不得回填 confirmed IR。

## 6｜failure modes

```yaml
failure_modes:
  - REJECTED_RESKIN
  - REJECTED_RETRIEVAL_ONLY
  - REJECTED_DIRECTIONAL_PARAPHRASE
  - REVERSE_REQUIRES_NEW_VARIABLE
  - OBJECT_LAYER_DRIFT
  - WINDOW_DRIFT
  - ACTOR_SCOPE_DRIFT
  - DECISION_RIGHT_AUTO_SWAP
  - PATH_OWNERSHIP_HALLUCINATION
  - FALSE_SYMMETRY
  - REENTRY_SUBJECT_SWAP
  - LABEL_INHERITANCE
```

## 7｜stop condition

满足任一即停止：
1. reverse candidate 必须改变 changed_variable 才能成立；
2. reverse candidate 无独立 reality anchor；
3. 双向 removal 显示只有 baseline 有现实缺口；
4. 反向必须跨 object_layer；
5. 连续两次只是把“影响/帮助/依赖”等词序改写；
6. 已获得一个清晰的 direction delta，立即重建 IR，不继续生成更多“相反版本”。

## 8｜when_not_to_use

- 只想找相似/相反案例：属于 retrieval-only；
- relation_source / relation_shape 尚不明确：先补 IR；
- 实际问题是“谁握最终权”：优先 REPLACE_DECISION_HOLDER；
- 实际问题是“有哪些 route”：优先 ENUMERATE_PATH_SET；
- 实际问题是时间阶段变化：优先 EXPAND_SHRINK_CURRENT_WINDOW；
- 实际问题是某条件必要性：优先 REMOVE_CONDITION；
- 双方本来就是不同 object_layer 的作用：先 SPLIT_IR，再分别研究。

## 9｜跨领域测试

> 以下只验证 operator 是否打开不同结构查询空间，不累计为 xn 或任何十元 evidence。

### T1｜《红楼梦》鸳鸯拒婚｜施压方向 vs 有效阻断方向

baseline：贾赦一侧对鸳鸯施加求娶/施压；测试对象层固定为“婚配结果的现实决定/阻断结构”。

reverse probe：不是把句子改成“鸳鸯影响贾赦”，而是问鸳鸯一侧是否在同层拥有对贾赦婚配目标的现实阻断作用，以及这种作用是否独立于更上位权威。

结果：PASS。operator 强制把“施压方向”和“有效决定/阻断方向”拆开，暴露 relation_source 与 decision_right 不可自动交换；若现实阻断依赖上位节点，则 reverse 不能伪装成完全对称。

### T2｜《西游记》孙悟空被逐/回返｜成员请求方向 vs bilateral acceptance

baseline：孙悟空作为回返请求方，向师徒关系另一端寻求 reentry。

reverse probe：把关系方向反成“另一端主动召回/重新开放回返接口”，并保持 object_layer=bilateral-reentry、changed_variable=当前回返资格是否现实可调用。

结果：PASS。请求 reentry 与授予/恢复 reentry 不是同一句话换主语；反向后 relation_source、reentry_right 与 reality anchor 必须重建。仅“对方想念悟空”不构成 reverse 成功。

### T3｜《三国演义》军令与战术反馈｜跨层伪反转

baseline：上位指挥方向对下位执行主体形成任务约束。

reverse probe：下位执行反馈/现场信息影响上位指挥判断。

结果：PASS，但输出 `OBJECT_LAYER_DRIFT` guard。任务决定权层的 A->B 与执行反馈层的 B->A 不是同一 changed_variable 的反向；若不拆层，AI 很容易把反馈误写成“下属反过来决定上级方向”。

### T4｜工程：API client / service dependency

baseline：客户端调用服务端 API 才能完成目标操作；同层 removal 服务端接口会使 client 推进出现缺口。

reverse probe：服务端是否同样依赖该客户端才能完成其自身同一 target predicate。

结果：PASS。通常 reverse removal 无对应缺口，因此得到“单向 dependency confirmed、reverse rejected”。operator 成功打开 dependency asymmetry，而不是制造虚假对称。

### T5｜制度：采购申请 / 审批

baseline：申请人必须经审批节点才能使采购生效。

reverse probe：审批节点是否必须经该特定申请人的许可才能行使同一审批权。

结果：PASS。若审批人可以处理其他合法申请，reverse 不成立；`requester depends_on approver` 不等于 `approver depends_on requester`。同时防止把“没有申请就没有本案可审”误写成权限依赖反向。

### T6｜现实系统：电网供电与负荷侧需求响应

baseline：负荷对象依赖上游供电路径维持目标功能。

reverse probe：上游系统是否在同一 object layer、同一 changed_variable 上依赖该单一负荷对象才能维持自身供电资格。

结果：PASS。需求反馈可能影响调度，但属于另一 changed_variable；若强行将反馈当 supply dependency 的逆向，会触发 `REVERSE_REQUIRES_NEW_VARIABLE`。

## 10｜防退化 probes

### P1｜REJECTED_RESKIN
“上级命令下属”改成“老板要求员工”，结构字段完全不变。

结果：REJECTED_RESKIN。

### P2｜REJECTED_RESKIN
“A 依赖 B”改写成“A 受制于 B”，没有任何 IR delta。

结果：REJECTED_RESKIN。

### P3｜REJECTED_RETRIEVAL_ONLY
“再找 20 个关系相反的故事/制度案例。”

结果：REJECTED_RETRIEVAL_ONLY。

### P4｜REJECTED_DIRECTIONAL_PARAPHRASE
“A 依赖 B 批准”改成“B 的批准影响 A”，但 decision_right、path_set、removal gap 完全未反向。

结果：REJECTED_DIRECTIONAL_PARAPHRASE。

## 11｜验证结果

```yaml
accepted_structural_tests: 6
REJECTED_RESKIN: 2
REJECTED_RETRIEVAL_ONLY: 1
REJECTED_DIRECTIONAL_PARAPHRASE: 1
verdict: ACCEPT_RESEARCH_CANDIDATE
information_gain: high
maturity: candidate
canonical_effect: none
semantic_ir_schema_effect: none
behavior_evidence_effect: none
```

本轮信息增益：新增“方向性真实性”检查层，使 Z 发散器能区分有向依赖、互相影响、权限方向、请求/授予、回返主体归属以及跨层反馈；这不是普通反义词生成器，也不是相反案例搜索器。

## 12｜validation hook

对 baseline 与 reverse candidate：
1. 分别重建完整 Semantic IR；
2. 对缺少 reality anchor 的 reverse 保持 unknown/candidate，不回填 confirmed fields；
3. 分别进入 current 十元语义解释器；
4. 禁止 baseline 十元标签继承给 reverse；
5. 若解释器要求 SPLIT_IR，优先分层，不让 reverse operator 覆盖解释器 guard；
6. 若 relation_source 反转但 decision_right/path_set/reentry_right 未变，保留结构差异事实，不伪造十元极性反转。

## 13｜与既有 Z operators 的组合边界

允许串联但必须保存 before/after IR：

```text
OP-006 EXPAND_SHRINK_CURRENT_WINDOW
→ 锁定一个稳定窗口
→ OP-007 REVERSE_RELATION
→ 方向性真实性审计
→ 重建 IR
→ current interpreter
```

也可：

```text
OP-003 ENUMERATE_PATH_SET
→ 确认 route membership
→ OP-007 REVERSE_RELATION
→ 测试 dependency direction
```

禁止在同一 mutation 内同时替换 decision holder；若真正问题是“权力由谁持有”，交 OP-004。

## 14｜下一最高价值 mutation

优先：`SWAP_ACTOR`，但必须是 **role-preserving actor attribution swap**，而不是换人物皮肤。

目标：冻结 object/object_layer/current_window/changed_variable/relation topology，只把被判主体从 A 切换到同一事实中的 B，检查 relation_source、decision_right、path_set、reentry_right、reality_anchor 如何随 subject-specific attribution 改写。

它与 OP-007 正交：OP-007 反转关系方向；SWAP_ACTOR 不改现实关系，只改“谁是当前被解释主体”。这能专门攻击 collective-to-individual leakage、boss-to-team leakage、organization-to-agent leakage，并进一步调用 AI 已有的大量 multi-agent / principal-agent / delegation / handoff 知识。