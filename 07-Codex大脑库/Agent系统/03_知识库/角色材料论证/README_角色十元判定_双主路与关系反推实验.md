---
type: character-tenyuan-comparison-protocol
authority_level: L5
owner: AG-11
reviewer: AG-02
relation_constraints_supplier: AG-13
question_line: Q-FEEL-001/Q-DYN-002
status: RESEARCH_METHOD_NOT_CALIBRATED
updated: 2026-11-03
---

# AG-11角色十元判定｜A/B两条路线＋C实验

## 目标与边界
角色十元是**语境中持续显影的感受/行为方向候选**，不是物象客观归类。角色分析的作者判定权归AG-11路线与USER确认；AG-13不替AG-11选择主次。十元10项仍按现行L2核心正本解释，关系机制仍按冻结门禁。

## A｜十项相似度百分比
对`X, Z, N, ZN, NZ, XN, NX, ZX, XZ, X并Z`每项独立评估`similarity_percent: 0-100|null`、`evidence_ids`、`counter_ids`、`why`、`weight_version`。
- 百分比是**候选拟合评分**，不是概率；10项无需加起来等于100。不能用AI主观百分比声称统计学置信度或人类真实感受。
- 评分前固定比较标准和材料范围；证据不足值为`null`，不是0分。列Top1–Top3及竞争者、差距、反例；不硬凑满10个数字。
- 每一条材料不能重复充当“十项都有独立证据”。明确角色长期主次、局部状态、单一动作、他人强制位置、观众感受之间的区别。

## B｜材料论证（参照《方志敏》规格）
每个材料行：`event_id, film_version, provenance_F1/F2/F3, person, situation, choice, cost, resulting_change, positive_tenyuan, rival, counterexample`。
- 早中晚至少3个可核动作（尽可能跨不同环境），对主候选提出至少1个有区分度的反证/竞争解释。
- 问“ZN、Z、ZX的最近邻在同一事件中也能发生吗？”避免只收支持材料。
- A/B不一致时保留`NEEDS_MORE_EVIDENCE`，不得平均得分掩盖矛盾；作者明确确认后标`AUTHOR_INPUT`，不冒充已有人类F3验证。

## C｜关系反推十元（研究中，不准直接定稿）
- **AG-13提供**两端人物/制度的可核事件作用边，**AG-02审查**来源端点独立性、前后目标变量与第三因素，再交AG-11作为“缩小候选”的可能材料。
- 仅一端先有独立已验证的十元与作用机制，才考虑通过关系限制另一端候选。两端全是猜测时不得用“互补”循环证明。
- Z/ZN关系仍冻结，暂时`allowed_for_character_lock=false`，不能把五轴对立配对当“严格补位”。
- 最小验证：用若干已获作者确认、但不向代理揭示标签的跨作品角色做盲测，记录误判、最邻近竞争及无结论比例；不将既有协作例片算holdout。

## 返回AG-13的角色输入包
~~~yaml
character_id: ""
confirmed_by_user: false
candidate_primary: null
candidate_secondary: null
A_similarity: {X: null, Z: null, N: null, ZN: null, NZ: null, XN: null, NX: null, ZX: null, XZ: null, X并Z: null}
B_evidence_ids: []
B_counterevidence_ids: []
C_relation_constraint_status: RESEARCH_ONLY
character_lock: STAGING
~~~
