---
type: character-cognition-problem-system
id: ROLE-CORE-L1-L4
owner: AG-11
reviewers: [AG-02, AG-09, AG-13, AG-14]
status: DESIGN_REGISTERED_VALIDATION_OPEN
authority: research-method-not-canon
updated: 2026-11-08
linear_issue: 674-330
source_methods:
  - 07-Codex大脑库/Agent系统/03_知识库/角色材料论证/README_角色十元判定_双主路与关系反推实验.md
  - 07-Codex大脑库/Agent系统/01_Agent库/AG-11_角色Agent.md
---

# ROLE-CORE-L1–L4｜角色认知问题系统（AG-11主责）

> **一句话：让角色代理不仅能解释“他是什么元”，还能独立验证“他为什么选择、怎样改变别人、为什么非他不可”。**
> 本文件是四个角色认知Z的唯一问题树与实验接口；**不取代**既有头像/视觉生产的 Z-ROLE-L1/L2/L3（Linear 674-280/282）、不新造AG-16、不重写 L2 生克补、五维主题或项目角色 Canon。

## 第一屏｜四个独立Z与证据回流

```text
角色认知系统 ROLE-CORE-L1–L4   【研究方法已登记｜四层实证尚未完成】
                     ┌───────────────────┬───────────────────┐
                     │  L1 角色本体       │  L2 角色选择       │
作者原稿/人物事实 ──→│  稳定主核/向往/状态 │  处境→选择→代价    │←── 早中晚事件及反例
                     │  AG-11 A/B主路    │  AG-11 行为实验    │
                     └─────────┬─────────┴─────────┬─────────┘
                               │ 角色候选与行为证据 │
                     ┌─────────▼─────────┬─────────▼─────────┐
                     │  L3 角色关系       │  L4 角色×主题      │
另一对象/制度及事件 ─→│  双对象有向动态关系 │  人物能否承担主题   │←── 五维主题独立分析
                     │  AG-13 / AG-02    │  AG-09 / AG-11    │
                     └─────────┬─────────┴─────────┬─────────┘
                               └─────────┬─────────┘
                                         ↓
                     反例/失配/主题反审 ──→ 返回对应L1/L2/L3/L4，
                     仅更新候选与证据；不得自动改人物主元或项目Canon。
```

### 独立Z，不是生产流水线
- 每层各有 `z_id, goal, local_xn_set, nx_gaps, hypotheses, input_evidence, counterevidence, authority_state, experiment_state, output_packet, done_condition, stop_condition, next`。
- 可从任何层进入：分析电影通常由行为/关系事件反推问题；原创可由主题提出选角约束，再让L1/L2独立审查。**证据可双向流动，裁决权不可互相顶替**。
- `ROLE-CORE-L1..L4` 是**认知研究层**；`Z-ROLE-L1/L2/L3` 是**视觉身份/多视图/世界Canon生产层**；头像域 `L1→L4` Problem State 编译层是第三套不同概念。所有输出都要带 `layer_namespace`，禁止混用。
- 不把本方法的设计完成、GitHub写入、Linear工单In Progress冒充准确率已证实或本地Agent已自动运行。

## L1｜角色本体 Z（AG-11；方法A/B主责）
**Z目标**：区分稳定主核、稳定副核、向往/缺口、情境状态、外在行为、他者投射、结局自认；能在盲于主题标签时给出可反驳的主元候选。

**子问题 / NX**
- RC-L1-01｜一段高频行为是稳定主元、策略手段，还是向往之元？（《千年女优》NX本体/ZX向往/Z追逐表象是已知纠错）
- RC-L1-02｜单核/双核/主副怎么判？哪些跨场反例足以推翻Top1？
- RC-L1-03｜十项独立相似度的评估标准能否跨角色稳定？缺材料必须null而非0。
- RC-L1-04｜“痛苦/最高代价/最难放弃的选择”的灵魂抽离测试能否区分最近邻十元？
- RC-L1-05｜主题、职业、外观、结局、观众感受是否污染了人物主核判断？

**局部XN**：先独立读事件；A十元逐项0–100或null与证据/反证；B早中晚至少3个可核选择及竞争者；C关系反推仅做候选收缩；灵魂抽离；最后才读AG-09主题反馈。

**DONE**：至少一个跨作品保留集的盲标角色集上，报告Top1/Top3一致率、错误族、无法判定率和反例；未达到时只能METHOD_READY / EVIDENCE_OPEN，不能宣称角色判定准确。

## L2｜角色行为 Z（AG-11主责，AG-01/AG-12仅按需生成剧本候选）
**Z目标**：从独立的角色本体候选、已知处境与损益约束，提出可观察的**选择预测**，而非事后编写套话。

**子问题 / NX**
- RC-L2-01｜同一十元在不同压力和代价下会发生哪些可区分的选择？十元不是唯一决定变量。
- RC-L2-02｜“想得到什么”与“绝不愿用什么代价换”分别如何约束选择？
- RC-L2-03｜相邻候选元对同一处境的预测是否具有可区分性？若结果一样，则此情境无诊断价值。
- RC-L2-04｜行动造成哪一个目标变量的前后变化？角色是否有自克、失败、反悔或选择转折？
- RC-L2-05｜预测失败应修正人物元、处境变量、关系信息还是解释规则，如何定位？

**局部XN**：封存人物已知事实、十元候选；在未看后续事件/用户裁决前预注册两个竞争预测，写出`situation, desire, prohibition, alternatives, cost, predicted_choice, predicted_changed_variable, failure_condition`。事后比对，明确“不可区分”选项。

**DONE**：至少3种不同处境、有盲测未来/未揭示选择或作者明确裁决，报告预测命中、不可区分和错误归因；仅能讲通一个角色过去行为不算预测通过。

## L3｜角色关系 Z（AG-13事件主审，AG-02关系门禁，AG-11只提供人格候选）
**Z目标**：从独立对象的选择与真实改变构成角色↔角色、角色↔组织/制度/物件的有向事件关系，并探索可复用构型的边界。

**子问题 / NX**
- RC-L3-01｜如何区分“角色配置/人数”和“关系拓扑”？双主角不自动等于双补。
- RC-L3-02｜A→B/B→A作用不对称时，如何保存方向、受影响变量与阶段？
- RC-L3-03｜生、克、补、自克、接力、转化、错位、回收哪些是已审机制、哪些仅故事观察词？
- RC-L3-04｜移除一人/一制度后，冲突是否还能发生？是补位，还是普通剧情协助？
- RC-L3-05｜关系类型总数和跨作品稳定性目前`UNKNOWN`；何种反例使候选类别被合并/拆开？

**局部XN**：双端点独立证据；事件`A, B, A_state, B_state, action, direction, changed_variable, before, after, cost, counterfactual`；AG-02审严格关系，不得由“人物NZ接力”直接推出“五维命运架桥”。

**DONE**：至少两部不同主题构型作品验证同一候选关系结构，另有一例有区别力的反例；否则只做开放标签，不填写“关系类型总数”。

## L4｜角色×主题 Z（AG-09独立主题，AG-11独立角色；AG-13核事件）
**Z目标**：证明角色的选择和关系实际承担五维主题的问题、代价及结算；帮助原创时从主题推出多套**竞争性角色方案**，而非把五维公式直接当人物人格。

**子问题 / NX**
- RC-L4-01｜主题主导、人物主导、两层一致或部分错位，如何靠事件而非语气区分？
- RC-L4-02｜三者、三角克、架桥是主题关系候选，为什么不会与人物关系构型一一对应？
- RC-L4-03｜同一主题能否由两套不同人物欲望与缺口配置成立？哪个选择不可替代？
- RC-L4-04｜角色表面目标失败时，是否实现内在价值或灵魂改变？结算元不得覆盖稳定主元。
- RC-L4-05｜删去人物关键选择/中介/主题边，哪一种删除真正让故事主问题塌陷？

**局部XN**：AG-11不读主题先出角色包；AG-09不读人物十元先出`theme_question, target_variable, pressure, ending_residue`；合流后至少比较两套角色方案，AG-13审事件链，写`theme_role_fit`与删除测试。AG-09反馈无权写`character_lock`。

**DONE**：至少两个不同作品/原创短案，能清晰区分主题与人物同构、支持、制约、错位并提供导致分类失败的事件证据；没有独立检验时只标H。

## 层间统一输入/输出（最小卡）
```yaml
case_id: ""
case_kind: FILM_ANALYSIS|ORIGINAL_CAST
layer_namespace: ROLE-CORE
z_id: RC-L1|RC-L2|RC-L3|RC-L4
character_id: ""
evidence: {F1_sources: [], F2_original_media: null, F3_human_feeling: null, author_input: []}
known: []
unknown: []
local_xn_set: []
nx_gaps: []
primary_candidate: null
secondary_candidate: null
aspiration_yuan: null
state_yuan: null
settlement_yuan: null
rival_explanations: []
counterexamples: []
independent_prediction: null
outcome_comparison: null
changed_variable: null
authority_state: RESEARCH_H|AUTHOR_INPUT|INDEPENDENT_EVIDENCE|UNKNOWN
experiment_state: METHOD_READY|EVIDENCE_OPEN|TEST_PENDING|PASS|PARTIAL|FAIL|BLOCKED
next_route: AG-11|AG-13|AG-02|AG-09|USER_REVIEW|STOP
done_evidence_refs: []
```

## 两个初始样本｜校准与创作必须分账

### RC-CAL-001｜《千年女优》：L1已知错误族回归测试
- 【USER既有判读】女主稳定NX，向往ZX，画家ZN；“持续追逐”表象曾被错误判成Z主。结尾由对他者的爱转为对追寻中自身的爱（具体证据仍需回片核）。
- 这是**已泄露答案的校准题**：只检查模型能否正确分层和提供反材料，`blind_holdout=false`，不计盲测准确率，不替代F2逐幕证据。
- 操作：在不改变既有作者判读的情况下，列3段早中晚行为、两个能混淆Z/NX的证据、一个抽离测试；`NEXT=NEEDS_F2_ORIGINAL_EVIDENCE`。

### RC-CREATE-001｜Claire（《二手书店的时间信封》）：L2→L4原创候选
- 【USER既有构想】角色涉及XN/ZX；核心矛盾为“想被认可，却不愿踩着别人获胜”。**稳定主次十元及完整剧情不在本实验中自动锁定。**
- 【H 候选压力测试】团队创作比赛进入决审，规则允许以删去另一人署名换取个人晋级。设两条真正有代价的路线：A接受提议以获得认可；B公开拒绝并承担失去晋级机会的风险。
- 预测需要解释：当认可的渴望与“不愿踩人获胜”同时激活时，Claire会做何选择？她的选择是否只是口头道德姿态，还是留下可见损失？
- 【H 竞争解释】XN作为谨慎/约束、ZX作为争取和积极介入的解读都须回查现行十元正本，禁止按文字标签直接认定哪个主、哪个副。
- 【H 主题检验】AG-09独立审“时间克因果”的主题问题；此比赛事件是否真正改变主题变量？若只表现人物道德、未能与信封/时间条件构成必要因果，则`L4=FAIL_THEMATIC_COUPLING`，**不写进313剧本正本**。
- `status=CREATIVE_TEST_DESIGNED / USER_CANON_NOT_LOCKED`；本条不构成已执行用户故事选择或真实观众测试。

## 样本与错误族
- `CHAR-ERR-ASPIRATIONAL-TENYUAN`：把向往元、行动状态误写为稳定主元（《千年女优》）。
- `CHAR-ERR-THEME-LEAK`：先知道主题式子再倒推出人物十元。
- `CHAR-ERR-POSTHOC-CHOICE`：看过结局才写“预测”。
- `CHAR-ERR-RELATION-LOOP`：A/B两端未经独立验证却循环用补位证明彼此。
- `CHAR-ERR-VISUAL-CANON`：以视觉职业/服饰/颜色反推人格、组织或Canon。
- `CHAR-ERR-ROLE-FUNCTION`：把剧情功能/桥接承担直接当稳定人格。

## 有限执行与结束点
- **R1｜已设计**：唯一问题树、四层职责、状态与测试卡登记；不计算已验证成功数。
- **R2｜待验**：RC-CAL-001 回归；要求可核事件和反材料，写 PASS/PARTIAL/FAIL。
- **R3｜待验**：RC-CREATE-001 先锁候选预测，再由作者比较选择；未经作者确认不写正式剧本。
- **R4｜待验**：未见人物盲测：最少一个具有已确认元但向代理隐藏标签的不同作品保留集，报告误判/未判。
- 每轮最多一个主案例；无新增证据即NO_OP；连续2轮无增量 STOP/REPLAN；不因此增加USER每日两项主任务。
- 当`R1`的文件、索引、Linear路由完成，仅记`ARCHITECTURE_REGISTERED`；`R2–R4`未跑之前所有实证门保持 OPEN。
- 项目使用：角色人格研究通用于电影/原创；H3视觉资格仍按原`CHARACTER_H3_READY_PACKET`和USER审核，不受本文件“认知方法登记”影响。

## 正本权责与链接
- AG-11唯一岗位正文：[[07-Codex大脑库/Agent系统/01_Agent库/AG-11_角色Agent]]
- A/B/C与分层研究旧方法（保留，不复制）：[[07-Codex大脑库/Agent系统/03_知识库/角色材料论证/README_角色十元判定_双主路与关系反推实验]]
- L3 AG-13动态事件链 / AG-02严格机制审查：[[07-Codex大脑库/Agent系统/01_Agent库/AG-13_十元链Agent]]
- L4 AG-09五维主题反审：[[07-Codex大脑库/Agent系统/01_Agent库/AG-09_主题Agent]]
- 原视觉生产实验：Linear 674-280 / 674-282；项目视觉角色Canon/H3门禁仍属《黎黎隆》。
