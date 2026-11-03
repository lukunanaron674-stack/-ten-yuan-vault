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

## D｜主题→角色双向反馈（跨代理审校，不冒充第四种十元实证）
**USER 2026-11-03补充**：主题能反馈人物定元，创作时还要问「什么主题需要什么角色」。这是AG-09与AG-11的双向**选择/反证约束**，不能由「命运=xz+nz」「本体=zn+x」直接推导任何人物主元，也不能把被安排的剧情功能当作其稳定灵魂。
- **创作方向·主题→选角**：AG-09先给`theme_question, target_variable, pressure_mechanism, necessary_character_roles, decisive_choice, counterfactual`；AG-11再发散至少两组**人物核心欲望不同、缺口不同、关系配置不同**的候选。选谁取决于哪组人物自发选择足以改变目标变量，而不是因为主题关键词包含某个十元就找那个十元人物。AG-13验证关系作用实际进入剧情、删掉一端是否造成链断裂。
- **分析方向·角色→主题→回馈**：AG-11先A/B独立给角色主次候选，AG-09独立从影片核心问题、选择代价、结局回收判断五维主次，然后回传`theme_role_fit`：角色的某项欲望/伤痛/选择是否不可替代地承受主题压力？若不契合，只要求AG-11**增加反证、扩大Top候选、复查主副/功能混淆**；不得用主题直接修改原始A/B分数或自动锁定新人格元。
- **示范【USER，《你的名字。》】**：故事「命运(xz+nz)生时间(xn+z)」对角色功能要求是：一端承受原本已死亡的失去/无法相见，一端留下结绳维持联系；同时必须形成未来信息与过去行动的独立缺口。用户已给泷`xn+xz`、三叶`nz+z`；主题关系可反证其在这部电影中的**角色选择必要性**，不是把「时间主题=xn+z」机械赋给所有时间题材主角。
- **示范【H，《楚门的世界》】**：本体主题要求人物有「别人定义我的生活 vs 我拒绝这个定义」的不可替代抉择，但**不推出楚门本体ZN+X**；必须回到他早中晚自主行为与痛苦的角色材料。
- **桥接状态**：`THEME_CAST_CANDIDATE`（仅创作）、`THEME_FIT_SUPPORTED`、`THEME_FIT_CONFLICT`、`THEME_NO_DIAGNOSTIC_VALUE`，均不等于`character_lock=LOCKED`。

## E｜角色多层证据（已有表面／感受／灵魂研究，不互相偷换）
| 层 | 这个问题属于哪层 | 能证明什么 | 不可偷换为 |
|---|---|---|---|
| L-surface 表面/视觉映射 | 服装、体态、外貌、身份、行为及角色外在功能如何呈现 | 美术/行为接口、单场诱发线索 | 稳定主十元或人物灵魂 |
| L-self 角色自身感受 | 人物在特定处境里真实的需求、惧怕、愿望、痛苦及选择（在电影里由事件推断） | 阶段状态与可能的长期驱动力 | 观众必定同感、作者已确认的主元 |
| L-audience 给人的感受 | 这一段对观众制造何种感受；自由描述→十元感受预测谱 | AI预测或真人体验，来源分别标记 | 角色本人的主十元 |
| L-function 剧情/主题功能 | 角色被安排补谁的缺口、克哪项能力、承担什么主题压力 | 情节中的作用位置/故事角色需要 | 人格/灵魂的自动定元 |
| L-soul 主十元/灵魂核 | 删除该候选，人物最深痛苦、长期驱动力、反复失败、不可替代的最高代价是否整体崩塌 | 跨阶段稳定主核或双核候选 | 表面习惯、高频动作、结局一刻的状态 |
| L-end 结算/余味 | 结局改变了什么、付出什么代价、残留什么 | 反验主元及关系回收 | 根据结尾倒推全程的唯一主元 |

**旧研究回收**：角色至少区分「主/副十元、功能十元、视觉十元、结算十元」；「灵魂十元」就是抽掉后首先坍塌的存在方式，检验痛苦、最大代价、关系组织、反复失败和余味。人物可单核、双核或主副，不强制一种结构；**主题、角色自身感受、AI预测观众感受和真人F3**必须分仓。旧片角色卡的灵魂十元结论只作历史证据，须按当前L2感受正本重验。

### 三法与多层如何联合
1. **先固定十元L2基准、电影版本和人物情境**，R1自然语言逐事件分析，不先看主题／旧角色元答案，以免泄题。
2. **A**对十项逐一估计匹配，不以视觉/动作频数单独起分；**B**按早中晚选择、失去、代价与反例论证灵魂核，并把局部感受/功能/视觉/结算分层；**C**只在独立端点有效时利用关系缩小候选，不以他人未经验证的定元互证。
3. **AG-09主题反审**仅提出「这人物承担主题矛盾是否必要」的反证，不能把五维符号给人物加权灌票；有分歧退回AG-11复查。
4. **主元最终检验**：拿掉候选十元后，这角色为何行动、为何痛苦、为何做最昂贵选择、为何按相同方式反复失败，还成立吗？若成立则它更可能是副/功能/阶段元；若两核都不可去则允许双核待判。
5. 仅`USER确认`可把本案例的角色十元写成`AUTHOR_INPUT`；F1剧情、F2实片、F3真实观众感受各留不同字段，未经校准不以“准确率百分比”声称真值。

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
theme_feedback: {status: THEME_NO_DIAGNOSTIC_VALUE, theme_question: "", role_required_contribution: "", rival_casting: "", counterfactual: ""}
layer_packet: {surface: [], self_state: [], audience_prediction: [], audience_human: null, function: [], soul: [], ending: []}
soul_ablation: {candidate_removed: null, what_collapses: [], what_still_works: []}
character_lock: STAGING
~~~
