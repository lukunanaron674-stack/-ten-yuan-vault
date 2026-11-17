---
q_id: Q-DYN-002
problem_depth: D1
parent: G4
goal: AI能理解、预测、生成并编排人的目标感受
volume: 9
impact_weight: 9
status: OPEN
problem_state_version: v2
updated: 2026-11-17
---

# Q-DYN-002｜动态链需要从标签序列改造成时间上的感受编排模型

## 1｜问题一句话
动态链不再验证“十元标签是否按顺序出现”，而要验证“人的感受是否按预期的强度和关系随时间变化”。

## 2｜研究对象
例如：
克 → 生 → 大克 → 补
不再只是关系语法，而是一条可观测的感受时间曲线。

## 3｜记录方式
- 每个时间节点的人类自由描述；
- 十元感受谱；
- 关键转折时刻；
- 感受变化幅度；
- 观众是否感到张力、魅力、完整、释放或疲劳；
- 与替代顺序的 A/B 对照。

## 4｜DONE
- 至少有若干动态链在不同题材中形成可重复的感受曲线。
- 能区分“关系合法”“感受真的发生”“审美效果更好”三件事。
- AI可以按目标曲线生成候选，且人类盲审能识别主要转折。

## 5｜APP-FILM-CHAIN-001 电影十元链 AI 独立理解分级（2026-11-03）

> **问题系统附属能力测试，不新建平行Q。** 路由：G4/Q-DYN-002、G3/Q-REL-002；方法：ten-yuan-chain Skill v1.7 的 R1自然剧情分析→R2十元代理审校；权责：Linear 674-105/674-324；成果载体：`02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas`，电影原档原位更新。
> **用户目标**：AI先独立理解一部电影的真实人物、事件与横纵因果，再自主映射十元角色主次、五维主题、生克补、体量与回收，学会从多种不同故事提炼可复用而不僵化的母结构，最后把母结构准确迁移到原创剧本。不只是“出很多卡”。

### 5.1｜基准来源：现存6部电影＋1张细分机制卡
按2026-11-03唯一电影Canvas回读：①《我们一起摇太阳》伪双补→否定牺牲→双补；②《超时空辉耀姬！》XN/Z双补→ZN克XN和X克Z本体双克→跨8000年/10年扩容双补；③《钢琴家》（又译《钢琴师》）战争隔离的克→无声试弹的蓄补→重新发声的触发/生（具体关系属于USER/H候选）；④《钢琴家》子机制“蓄补—触发—爆发”**同一电影不重复记作第7部**；⑤《情书》错位来信、相貌疑虑、两条不对称回收；⑥《你的名字。》泷XN+XZ、三叶NZ+Z，双补：XN↔Z与XZ↔NZ，命运(XZ+NZ)生时间(XN+Z)【USER纠正】，此前AI误判泷Z+ZX/三叶NZ+X；⑦《楚门的世界》外在节目壳/掌控→层层压制→楚门破壳退出【H】。

**观察结论（不能自我拔高）**：R1电影因果与心理分析相对强（《情书》用户肯定内容分析）；R2常漏十元符号（《情书》）、把表面行动错归为稳定人物元（《你的名字。》）、需用户教会双克两条边（《辉耀姬》）和一级“命运生时间”（《你的名字。》）；《钢琴家》虽抽出克—补—生及蓄补爆发，但“X并Z克NZ、XN补Z、X并Z生Z”仍缺F2完整镜头审校，不能从漂亮文字推出严格正确。这六部均是**已见/协作**例，绝不能作为模型全新独立测试的holdout。

### 5.2｜C-film 分级，不冒充现行C-feeling人类感受等级
C-film是**电影十元链任务能力评估量表（建议新增应用子维度）**，不改变原Z1–Z8/G1–G8或C2/C3等人类感受证据等级，也不解除L2关系门禁。
- **C0–C1**：不能建立可靠事件和符号结构。
- **C2**：能贴十元标签，但经常误判主次/行为等于感受。
- **C3**：能识别局部关系，双补、双克或作用方向常需USER提示。
- **C4**：可形成横纵多幕链，却会遗漏角色元、体量、结局回收或主题关系。
- **C5**：R1具体事件/因果通常好，R2仍需频繁人工纠偏。
- **C6**：对连续多部未见影片，R1/R2核心门禁大部分独立通过，并能发现自己的重大矛盾。
- **C7**：≥5部未见电影、≥2题材，按预注册答案及USER判定关键分≥80%，无关键事实杜撰，角色元／关系/母型分别记分。
- **C8**：≥10部未见电影、≥3题材，关键端点＋关系方向＋主题／因果／回收的综合分≥85%，能稳定追溯错误、提出竞争解释。
- **C9**：C8基础上，至少两个**不同题材原创故事**能被这套十元链方法正向生成，经USER独立审核确有不同核心机制且可拍；反向审片→正向创作闭环成功，不重复复制原电影桥段。
阈值是**本次提出的能力验收规格，不是已经获得成绩**，可经USER修订。独立成绩必须在揭露标准十元角色/结构或看用户纠错**之前冻结**。`assisted_pass`独立另计；仅有2026-11-03聊天互动，**以下起点都是初步估算，非正式盲测得分**。

### 5.3｜八项能力暂评与96张“验证工作卡位”预算
| 子目标 | 检验什么 | 当前C-film（估计） | 目标C-film | 验证卡位预算 |
|---|---|---|---|---:|
| FZ1｜R1电影事实与因果 | ≥3真实关键事件、误解/决定/结尾/代价连贯，不虚构F2 | C5 | C8 | 12 |
| FZ2｜主角十元无提示识别 | 角色主次／候选与行为技能分开，人物双方独立判 | C2 | C8 | 16 |
| FZ3｜生克补与双补/双克 | 来源、目标、双向边、改变变量、失败边、严格关系门禁 | C3 | C9 | 16 |
| FZ4｜五维主题与维度关系 | 正确认主主题、次主题、命运生时间等跨维因果，不能由题材硬贴 | C2 | C9 | 12 |
| FZ5｜同层横向＋纵向连续链 | 一张等宽图中具体事件→改变变量→下一阶段；有阻断/替换 | C4 | C8 | 12 |
| FZ6｜结局回收与体量/母型 | 扩容双补、残留、不对称回收、蓄补爆发、删卡测试 | C4 | C8 | 10 |
| FZ7｜R1→R2独立错漏审校 | 不破坏优秀剧情发现，主动补角色符号/更正误边/竞争解释 | C3 | C8 | 10 |
| FZ8｜跨电影母型→原创迁移 | 不同题材迁移、原创后果、格式/单一卡去重、用户复核 | C4 | C9 | 8 |
| **合计** | **验证任务卡位，并非新电影主卡数量** | — | — | **96** |

**卡位的含义**：一张`evaluation_case_id`题卡评估一个能力焦点；同一电影可提供多道互不相同的题、多个案例可组合一题，但不得将同一剧情问法重复凑数。同一电影主卡保留唯一一张。预算是排期，**完成96卡不自动达到C-film 9**，失败可能增加样本；“看过28部，现有6部→还差22部主卡”是覆盖缺口，不是本能力验证预算。

### 5.4｜自动分析与计分的两条流水线
```text
旧片训练库（6部主卡＋《钢琴家》1细分）──→ 整理已纠错规则
                                             ↓
未见片/未泄露十元答案 ──→ R1只做人物事件因果、锁初稿
                                             ↓
                                R2十元符号/双补双克/五维关系
                                             ↓
                               记录AI预锁答案＋反例/删卡实验
                                             ↓
               独立审核：核真实事件F1/F2，USER判断角色/关系
                                             ↓
                       得分→独立正确/协作纠正/错误类型分别记
                                             ↓
           通过C7/C8门槛才进入原创迁移；生成后由USER判C9
```
**最小每卡字段**：`evaluation_case_id, film/version, evidence_refs, seeded_user_answer_hidden, R1_frozen, R2_frozen, role_tenyuan, theme_main/secondary, relation_edges, changed_variable, topology, vertical_effect, residue, counterfactual, independent_pass, assisted_pass, error_family, human_judgement, status`。用户未提供真值时可以给`H`候选、竞争解释和待判，不把“和USER不一样”仅凭此一条自动判错；依据用户对其体系的最终裁决进入真实基准。

### 5.5｜本轮结束点与责任
**最近优先训练错误族**：人物元误判（《你的名字。》）→双边克补遗漏（《辉耀姬》）→电影级五维生与角色级五轴混淆（《你的名字。》）→关系经过压力/间接触发，不能把行为顺序当公式（《钢琴家》）→R1优秀但R2漏符号（《情书》）→角色通过自己选择退出制度（《楚门的世界》）。
**执行**：现有`十元作品研究与H3吸收`每小时任务已优先电影十元链，只在有真实新证据、用户新确认或新增未看过的独立测试题时写原卡；单轮最多一张实质研究卡，不制造96张空文件。直接复用原电影Canvas和观影索引；本次不自动创立第9个D1问题卡，也不新增Agent实例。关系科学真值仍须另过原L2证据门禁。
**当前状态**：`METHOD_REGISTERED / BASELINE_ESTIMATED / HOLDOUT_TESTS_NOT_STARTED`；无正式盲测C-film验收；C-feeling/E0–E5不动。


### 5.6｜2026-11-03 最新增量：千年女优 NX→ZX USER观后反审
- **WATCH-011协作研究卡确认写入**：千代子`NX`为人物本核，`ZX`为向往并在结尾爱上的自我，画家`ZN`为所爱对象；整部电影的「时间克因果／命运架桥」与人物小十元「爱自己的ZX」分层。原AI`Z+XN`属`CHAR-ERR-ASPIRATIONAL-TENYUAN`：追逐行为/银幕时间剪辑 ≠ 稳定人格，角色向往之十元 ≠ 本体主元。
- **FZ2/FZ4/FZ6/FZ7增量性质**：作者纠错`ASSISTED_CASE_RECORDED`，没有预锁的AI独立判对成绩；不能自动提升原C-film暂评。原目标预算96只是题卡位，非96个完成样本；`independent_holdout=NOT_STARTED`。
- **当前基数更正（取代§5.1/5.3的历史起点，不改历史证据）**：最新统一Canvas存11部影片主卡、1张《钢琴家》机制卡；用户已看28部，覆盖11/28，剩17部未建电影主卡。另《釜山行》已R1/R2预锁待USER审，`holdout_eligible=false`。不得把旧「6部→差22部」当现行数。
- **验收门槛仍未满足**：本地Agent实际加载未验证；F2逐镜与F3真人观感缺失；C-film仍为`METHOD_REGISTERED/BASELINE_ESTIMATED/HOLDOUT_NOT_STARTED`。同一次协作纠正不可重复记为若干独立测试通过。

### 5.7｜WATCH-005《土拨鼠之日》角色自克与双向补位纠偏（2026-11-03）
- **已登记在原案例，无重复卡**：WATCH-005 原电影Canvas第⑨卡 R4 USER完整链，写入并远端回读验证 commit `c62d529d187536bbbfc23b57afbaea31c8375755`；原观影索引观看状态不变，USER新判定已入原行 commit `77eb5b345e1a707360bb44fd22161e4ca0acf3b9`；GOAL-Z目标回执 commit `2cc19d40f3c51a468a05f0900c9d011ca29af429`；Linear 674-105原线回执 comment `7653881c-caff-477d-981a-a113db6bcd6f`。AG-13目标的实际本地独立Agent运行仍未验证。
- **USER判读双层**：影片主题`时间(XN+Z)克因果(ZX+NX)` → 流浪老人之死的不可逆生命边界 → `本体(ZN+X)克时间(XN+Z)`；人物男菲尔`XN+ZX`内部`XN克ZX`（傲慢/封闭、自克） → `ZX生ZN` → `ZN补位解除封闭` → 男主的XN转为对丽塔Z有用的XN，女主Z双向回应 → `XN↔Z`双向关系。USER并未声称XN人格直接变成Z。
- **所揭示的错误族**：原AG-11将菲尔`Z主`、后期`ZN/N功能`，并未判出丽塔`Z`、男主内部自克及「主题作用方向反转」。这补充FZ2人物原核、FZ3生/克/补与双向作用、FZ4跨维关系、FZ5横纵连续链、FZ6后段回收、FZ7自发审错缺陷的USER协作样本；属于`ASSISTED_CORRECTION`，不属于`independent_pass`。
- **不突破门禁**：角色与电影语境链`AUTHOR_INPUT=USER`；外部事实F1，原片声画F2未核，独立真人观感F3为空；关系仍须AG-02审L2操作与changed_variable，尤其`ZX生ZN`不可由片内解释直接提升为全局关系定律。原C-film估计表`C5/C2/C3/C2/C4/C4/C3/C4`保持，正式盲测`NOT_STARTED`。
- **现存覆盖口径**：唯一Canvas 11部不同影片主卡＋1张同片机制卡，观影目录28项（含剧集与版本未核），未对应主卡17项；`11/28`是登记项覆盖的粗略比例，不是正式独立测试/通过率，也不代表17项都属已确认电影。

### 5.8｜WATCH-014《爱在黎明破晓前》首轮三代理隔离式训练
- 2026-11-03实际交付：R1剧情、AG-11角色灵魂候选、AG-09主题独立候选、AG-13具体事件十元链先预锁 `449ca57d4cf40fa9f42fa5f0b5ccbf93887d61d1`，AG-14后查旧档交叉审校 `3c0a9a2ac769dcea67803e14f11d3ca378e69d5c`；原WATCH-014索引已更新 `651983a6087200280d68793476b0f5869a88dd6d`。
- 发现：原杰西Z+XN；旧席琳Z+XN vs 新席琳NZ?/Z?；旧主命运和旧主时间互相竞争；旧文学性的「n克z」未过L2。已将表面/人物感受/主题/事件/正式生克补分层，并提供可检验的删卡和竞争解释。
- **成绩边界**：已知旧库标签在查新中暴露，`LEGACY_CONTAMINATION=YES`；当前仅`TRAINING_CASE_1`，`INDEPENDENT_HOLDOUT=NOT_STARTED`，`INDEPENDENT_PASS=NOT_SCORED`，`F2=null`、`F3=null`、`LOCAL_AGENT_RUNTIME=UNVERIFIED`。不可把前后两次Git commit冒充不同模型独立考试或真人验证。八维估计C-film和96验证题位预算均不变。
- 当前库包含13部电影唯一主卡（另《钢琴家》同片1机制子卡），USER已看登记29条（其中1 TV、3版本待核），**13/29只是观看条目覆盖口径，不等于C7通过比例**。下一步先完成真正没有历史十元答案的片源污染排查，再进行冻结和评分。

### 5.9｜WATCH-021《楚门的世界》作者三主题关系纠偏
- 2026-11-03 AUTHOR_INPUT：用户否定旧「三角克制／架桥」解释，改为**因果生本体、因果克空间、本体生空间**三条五维主题边，因果贯穿全片、由主题支持人物行为。与现行五维生克盘方向一致；不证明严格人物十元关系自动成立。
- 纠错重点：过去AG-09将因果降为局部、将空间克命运和命运克本体作为主图，属于`THEME_CAUSALITY_UNDERWEIGHTED`、`THEME_THREE_EDGES_MISREAD_AS_BRIDGE_OR_TRIANGULAR_RESTRAINT`。摄影棚本体未毁；克的是对楚门的空间覆盖与行动限制，本体生的是自主能进入外界的可实践空间。
- 回执：统一Canvas第⑦卡`REL_MOTHER_CARD_07_TRUMAN_WORLD_SHELL_EXIT`原位简卡 `b4761669`；既有研究详档R5补充 `be4408cb`（旧全文保留）；观影记录WATCH-021 `40984494`；GOAL-Z目标 `5a12fceb`。均远端回读通过，Windows Obsidian UI未验。
- 贡献范围：FZ4、FZ5、FZ6、FZ7的作者协作纠错；`INDEPENDENT_HOLDOUT=NOT_SCORED`、`F2=null`、`F3=null`、C-film等级不变。楚门稳定角色主次十元未获本轮确认。

## 6｜代理执行绑定（2026-11-03，应用路由不改变D1目标）

> **问题系统与代理系统共用问题ID，不新设D1问题**。G4/Q-DYN-002管理动态感受曲线与正式验收；AG-14只承担任务执行与研究整理，不能自我裁定E级。

- **主代理**：[[07-Codex大脑库/Agent系统/01_Agent库/AG-14_动态链Agent|AG-14动态链主代理]]；归Lina02与Linear 674-105，监督十元链顺序、证据/门禁、C-film独立评分。
- **现有应用 APP-FILM-CHAIN-001 绑定**：[[07-Codex大脑库/Agent系统/02_目标/GOAL-Z_电影十元链分析|GOAL-Z目标Z]] → [[07-Codex大脑库/Agent系统/01_Agent库/AG-13_十元链Agent|AG-13电影十元链子代理]]。**目标Z**是代理系统局部任务代号，不是十元感受Z；不增加`Q-DYN-003`或第二份电影分析能力规格。
- **角色判定**：AG-11角色代理执行[[07-Codex大脑库/Agent系统/03_知识库/角色材料论证/README_角色十元判定_双主路与关系反推实验|角色十元A/B/C判定法]]，A十项独立相似度、B跨场材料证据；C经已审关系约束反推只作研究，不自动定稿。
- **机制审查**：AG-02审核端点、生克补、冻结与证据；**五维主题**：AG-09按需独立审主题，不拿五维公式推角色稳定元。
- **提交与回写**：AG-13交`case_id, R0_frozen, R2_chain, candidate_vs_user_confirmed, failed_edges, F1/F2/F3, independent_pass, assisted_pass, error_family` → AG-14汇总`problem_delta/evidence_receipt` → 本Q应用段和Linear 674-105登记；真实观众感受必须转Lina00/HUMAN_GATE。
- **状态强制四分**：`theory_status`, `mechanism_lifecycle`, `evidence_level`, `execution_status`，APP状态`METHOD_REGISTERED/Baseline estimated/HOLDOUT_NOT_STARTED`不因新Agent文件改变。
- **当前边界**：AG-14与AG-13均为GitHub岗位定义，本地Codex/Hermes加载、后台自动执行、独立C-film得分均未验证。旧Z/ZN关系仍冻结。单轮最多一个有效新事件；未新证据则`NO_NEW_EVIDENCE`。


## 7｜2026-11-17｜THE_PAST_2013 F1 来源候选跨系统去重登记（非READY）

- receipt_id: `Q-DYN-002-APP-FILM-CHAIN-001-THE-PAST-F1-INTAKE-20261117`
- 唯一来源增量：Linear 674-105 comment `56eace59-f5b4-447b-ab7b-e30ff245cd45`（2026-11-16 17:21 UTC）；同一记录已写入 GitHub `05-银矿库/电影进度台账.md`，commit `7c4d4fd7a28e32634dd81c3ffe5c160f099f91cd`，blob `4ba4714393f64d25df9b6ae491695f85fc152d21`。两处是**同一来源包**，跨系统只计一条增量，不按 Linear 与 GitHub 重复计数。
- 作品身份候选：`The Past / Le Passé (2013)`，导演 Asghar Farhadi；USER已看状态未确认，全库别名排重未穷尽，`NEW100_ELIGIBILITY=ARCHIVE_PENDING`，不增加正式新片数量。
- 来源类型：发行方 Sony Pictures Classics 官方梗概 `https://www.sonyclassics.com/thepast/`。目前仅支持三段剧情摘要：E01 Ahmad返巴黎办理离婚；E02介入Marie与Lucie的关系冲突；E03介入后发现过去秘密。E03具体动作、终幕代价与完整结算不足，故 `F1=SOURCE_PACKET_PENDING_FREEZE`，不是完整F1冻结。
- 候选问题：`B_PAST_CAUSE_PRESENT_CONSEQUENCE__C_RELATION_MEDIATION_BACKFIRE`；因果/时间/本体竞争仅为 `AI-H`，`main_theme=null`，`theme_edge=NOT_ESTABLISHED`，`novelty_delta=UNVERIFIED`。删除Ahmad调停行为后秘密是否仍暴露，是待核反事实，不得预判关系边成立。
- 与《推销员》(2016)同导演且存在过去事件影响当下的相邻题材，只作为比较样本；不把导演相同、主题相邻或同一来源包拆成独立类型/独立机制证据。
- 分级与边界：`F1=PARTIAL_SOURCE_NOT_FROZEN`；`F2=null`；`F3=null`；`ROLE_TENYUAN=null`；`main_theme=null`；`strict_relation_edges=NOT_ESTABLISHED`；`C-film=UNCHANGED`；`independent_pass=NOT_SCORED`；`human_feeling_profile/MAE/Top1/Top3=null`。此为电影剧情来源证据，不是观众感受数据、动态感受曲线或Q-FEEL证据。
- 本轮裁决：`EVIDENCE_INTAKE_ONLY / NOT_READY / RETURN_SPECIFIC_GAP`。不升级Q-REL-002，不启动RESEARCH子Campaign，不创建新Q/电影卡/Canvas节点，不执行五轴A/B或H3。
- NEXT：仅在取得完整可核剧情终幕与独立来源、完成全库身份排重，并能预锁R1/R2独立答案后，才评估是否纳入APP-FILM-CHAIN-001 holdout；若无新增来源或可复核事件，保持WAIT。



## 8｜2026-11-17｜A_REAL_PAIN_2024_F1_SOURCE_CANDIDATE｜跨系统去重接收（非READY）

- **receipt_id**：`Q-DYN-002-APP-FILM-CHAIN-001-A-REAL-PAIN-F1-INTAKE-20261117`。
- **唯一来源增量**：Linear 674-105 comment `9dd07bfd-9b26-4d5b-9125-4144f7a80983`（2026-11-16 21:18:49 UTC）；同一F1来源包已进入 `05-银矿库/电影进度台账.md`，GitHub commit `d1561b56fcdcda4d3a07613f177d509e2ea49d87`，blob `4efecfdfe1be2d09570e653c981223e69690af0c`。Linear与GitHub是同一来源包，跨系统只计一条增量。
- **身份/版本候选**：`A Real Pain (2024) / theatrical`，Jesse Eisenberg编剧、导演；USER已看=`NOT_CONFIRMED`。全库历史别名排重尚未穷尽，`NEW100_ELIGIBILITY=ARCHIVE_PENDING`；不创建C52、不增加正式NEW100数量。
- **F1三事件包（公开来源，不是F2逐镜核验）**：
  - E01：表兄弟David与Benji为纪念祖母重聚并参加波兰祖源/历史旅行；David主动组织旅程并承担照看责任，旧关系张力重新出现。
  - E02：Benji对程式化历史导览提出强烈质疑；墓园与Majdanek参访使公共历史记忆与两人的私人危机并置。
  - E03：祖母旧居纪念石受阻；纽约机场发生情感接近与有限和解，但Benji拒绝进入David提出的家庭日常安排，David独自返回。来源账与结局解释以电影进度台账记录为准。
- **动态过程候选**：`shared_history → joint_trip → contrasting_responses → private_crisis_disclosure → memorial_act_blocked → affective_reconnection_without_life_reintegration`。这是F1剧情时间链候选，不是观众感受曲线，不证明“生/克/补”关系。
- **机制边界**：候选为“情感桥成立，但生活整合未完成”（`PROPOSED_H`）；不能简化成架桥失败，也不能升格为正式新类型。最强反证是两人结尾确实发生和解、笑与亲情表达；若原片后续显示Benji重新进入David家庭生活，当前候选需降级。
- **分层状态**：`F1=SOURCE_PACKET_RECORDED_PENDING_ARCHIVE_DEDUPE`；`F2=null`；`F3=null`；`ROLE_TENYUAN=null`；`main_theme=null`；`strict_relation_edges=NOT_ESTABLISHED`；`dynamic_feeling_curve=NOT_MEASURED`；`independent_pass=NOT_SCORED`。674-105登记的研究准备度65/100、机制增益2/5仅为辅助研究估值，不是C-film成绩或感受实验数据。
- **计数与裁决**：`new_f1_cards=0`；`NEW100=28/100`不变；`type_gap_closed_H=0`；`type_gap_verified=0`。不新增电影MD/Canvas节点/主题索引，不启动RESEARCH子Campaign，不执行五轴A/B或H3。
- **外部方法对照**：本轮沿用既有“先记录可观察事件、再拆时间链、再做删边反证”的电影分析路线；不借用影片类型或题材词直接贴十元。现有电影研究工作流已把F1剧情来源、F2原片逐镜、F3真人感受分账，本例只补F1。
- **NEXT**：等待全库别名去重与原片F2事件/终幕核验；在出现可预锁的独立holdout、完整事件事实及可检验替代顺序前，保持`EVIDENCE_INTAKE_ONLY / NOT_READY`。本记录不构成Q-DYN-002 READY。



## 9｜2026-11-17｜THE_PAST_2013_CREATOR_INTERVIEW_INCREMENT｜同片结构证据补充（不新增影片计数）

- **receipt_id**：`Q-DYN-002-APP-FILM-CHAIN-001-THE-PAST-CREATOR-STRUCTURE-20261117`。
- **唯一来源增量**：Linear 674-105 comment `7fa8bdee-66fd-43b8-b203-559a1ca392b8`（2026-11-16 20:18 UTC）；同一证据已写入 `05-银矿库/电影进度台账.md`，GitHub commit `2cfaaadae39a8a7d33231f52688b59b32bf59b85`，blob `814511f8737142d5a191646f48295507166864df`。Linear与GitHub是同一证据包，只计一次。
- **新增内容**：Asghar Farhadi导演访谈将《The Past / Le Passé (2013)》描述为从Marie/Ahmad向Samir及其妻子逐步分支的“多米诺”故事；信息通过分散线索逐步交代。Boston Globe另一篇独立采访补强“人物各自只掌握部分真相”的结构。来源：Awards Daily导演访谈（2013-12-21）；Boston Globe采访（2014-01-04）。
- **证据层级**：这是导演创作意图与独立采访层的F1结构证据，不是原片逐镜/声画事实，不是观众感受数据。它补强“分支因果＋分散信息”这一结构候选，但不补足E03具体触发动作、不可逆代价与终幕结算。
- **对§7既有候选的更新**：`novelty_delta`从初始`UNVERIFIED`细化为`CREATOR_PRIMARY_BRANCHING_DOMINO_CHAIN_AND_DISTRIBUTED_INFORMATION`（已知结构中的新机制候选，非新类型）；`type_gap_id=B_PAST_CAUSE_PRESENT_CONSEQUENCE__C_RELATION_MEDIATION_BACKFIRE`仍为开放候选。因果/时间/本体竞争仍为AI-H，`main_theme=null`，`theme_edges=NOT_ESTABLISHED`，人物十元null，L2无主张。
- **分级不变**：`F1=PARTIAL_SOURCE_NOT_FROZEN`；`F2=null`；`F3=null`；`strict_relation_edges=NOT_ESTABLISHED`；`dynamic_feeling_curve=NOT_MEASURED`；`independent_pass=NOT_SCORED`。不因两篇采访提升C-film或人类感受E级。
- **去重与计数**：这是§7同一部电影的补充来源，不增加新影片、独立holdout或机制类型计数；不建MD/Canvas节点，不启动RESEARCH子Campaign，不执行五轴A/B或H3。
- **NEXT**：继续等待原片F2事件/终幕核验、完整别名排重及预锁独立holdout；若无可复核新材料，保持WAIT。此补充不使Q-DYN-002 READY。


## 10｜2026-11-17｜A_REAL_PAIN_2024_CREATOR_COUNTERFACTUAL_CORROBORATION｜同片E03边界补证（非新事件/非READY）

- **receipt_id**：`Q-DYN-002-APP-FILM-CHAIN-001-A-REAL-PAIN-CREATOR-COUNTERFACTUAL-20261117`。
- **唯一增量来源**：Linear 674-105 comment `43eab260-6b35-413f-91e7-7a5ad8b2e84b`（2026-11-16 22:19:51 UTC）；同一增量已进入 `05-银矿库/电影进度台账.md`，GitHub commit `e1b29b950f415cced6077b32d44082fae6252e2d`，当前台账 blob `2e93cb0cd5de58704eeb3b80dc4b85b5f1918767`。Linear 评论与 GitHub 台账是同一来源增量，跨系统只计一次。
- **外部来源复核**：ABC News 对 Jesse Eisenberg 的直接访谈，发表于2025-01-10。Eisenberg说明，他拒绝了“Benji敲开David公寓门、拥抱后直接结束”的替代结尾，并解释David试图改变表弟、希望Benji成为自己所看到的理想人物，但最终无法改变他。来源：[ABC News｜Why Jesse Eisenberg's new film hit so close to home](https://www.abc.net.au/news/2025-01-10/a-real-pain-interview-jesse-eisenberg/104799282)。此为创作者反事实/创作意图证据，不是原片逐镜核验。
- **新增的可证含义**：这不是新增剧情事件，也不改变E01–E03事实账；它为既有E03的结算边界提供创作者解释：情感接近与亲情和解可以成立，但导演拒绝把结尾简化为完整的家庭空间回归式收束。故强化“情感桥成立≠生活整合完成”，不能写成“桥失败”。
- **跨来源去重**：此前Esquire转述Total Film中Eisenberg关于两人仍相爱、但不再像从前亲近的表述；ABC为另一篇直接访谈，新增的是被拒绝的具体替代结尾及“David无法改变Benji”的解释。它们只构成同一作者意图的来源交叉，不重复计为两个新机制。
- **类型与竞争解释**：沿用 `type_gap_id=R_DUAL_CORE_CONTRAST__C_AFFECTIVE_RECONNECTION_WITHOUT_REINTEGRATION`，`novelty_delta=CREATOR_COUNTERFACTUAL_SOURCE_CORROBORATION_ONLY`，仍为旧架桥家族的新作用范围机制候选 `PROPOSED_H`，不是正式新类型。竞争结构仍为 `FULL_BRIDGE`／`PARTIAL_BRIDGE`／`PARALLEL_OR_MISALIGNED`；最强反证仍是两人确有亲情回连。若F2核验发现Benji随后实际进入David家庭并恢复稳定共同生活，则“未整合”候选需FAIL或降级。
- **分层与等级不变**：`F1=SOURCE_PACKET_RECORDED_PENDING_ARCHIVE_DEDUPE`；`F2=null`；`F3=null`；`ROLE_TENYUAN=null`；`main_theme=null`；`strict_relation_edges=NOT_ESTABLISHED`；`dynamic_feeling_curve=NOT_MEASURED`；`independent_pass=NOT_SCORED`。674-105登记的 `research_readiness_100=65/100`、`mechanism_gain_0_5=2/5`维持原值；`tenyuan_film_quality_100=null`。该来源不是观众感受数据，不计Q-FEEL、五轴A/B或跨媒体验证。
- **去重与计数**：本轮只新增1条创作者反事实来源交叉记录；不增加电影卡、F1正式卡数、独立holdout或正式类型数；NEW100仍28/100。无新MD/Canvas节点、无GPU；不启动RESEARCH子Campaign，不执行五轴A/B或H3。
- **NEXT**：等待原片F2终幕/事件核验、全库历史别名穷尽去重及预锁独立R1/R2答案；完成前保持 `EVIDENCE_INTAKE_ONLY / NOT_READY`。无新增可复核材料则WAIT。


## 11｜2026-11-17｜LA_CHIMERA_2023_F1_SOURCE_PACKET｜替代共同体桥短暂进入后主动退出（F1接收／非READY）

- **receipt_id**：`Q-DYN-002-APP-FILM-CHAIN-001-LA-CHIMERA-F1-INTAKE-20261117`。
- **唯一增量来源**：Linear 674-105 comment `dc95203e-e2cb-4386-bc1a-1bb55d8f8ea7`（2026-11-16 23:15:13 UTC）；同一F1来源包已写入 `05-银矿库/电影进度台账.md`，GitHub commit `b9caec06aa4ffc2e3fbcc11e79192d65af3de832`，回读 blob `187cb1e598c6a2da8fd1675b0f88cc208eef23c5`。Linear评论与GitHub台账是同一来源包，**跨系统只计一条增量**；本节是其进入Q-DYN-002的治理回写，不再新增电影研究计数。
- **身份候选**：`La Chimera / La chimera`（2023），Alice Rohrwacher，Cannes 2023 Official Selection—Competition；片长本轮不锁定（已读取的Le Monde页面标为2小时13分，现有台账另有130分钟记录，分钟数来源口径未统一）；与用户《黎黎隆》世界观中的原创“奇美拉”角色不是同一对象。台账/统一Canvas/GitHub索引关键词检索未见电影主卡；旧银矿散点与历史别名尚未穷尽，故 `DUPLICATE_CHECK=CANVAS_LEDGER_CODESEARCH_PASS__ARCHIVE_PENDING`，不创建C52、不增加NEW100正式数量。
- **F1事件账（公开来源，非F2逐镜）**：
  - **E01｜返乡并重入盗墓团伙**：Arthur刑满后回到托斯卡纳小镇，重新与tombaroli团伙合作，凭探测地下空洞的能力定位并盗掘伊特鲁里亚墓葬，将遗物卖给古物中间商。
  - **E02｜遗物伦理冲突使新关系中断**：Arthur把来自墓葬的小铃铛送给Italia；她意识到遗物来自死者/墓葬后质问他。Arthur承认Beniamina已死，两人的关系中断。
  - **E03｜拒绝继续商品化神像头部**：团伙发现地下神龛并争夺搬运遗物；在船上古物交易冲突中，Arthur把神像头部投入海中，拒绝将其作为交易筹码，继而与团伙决裂。
  - **E04｜替代共同体提出共同生活邀请后，Arthur离开**：住所被拆后，Italia的女儿将Arthur带到废弃车站的女性共同体；她们邀请他留下，Arthur表现出想留下的愿望，但最终仍受失去Beniamina的执念牵引而离开、返回地下墓葬。是否实际进入共同生活及停留时长待F2核验；终局出现追索对象的幻象/超现实结算，是否客观死亡不锁定。
- **外部来源与各自能证明的范围**：
  1. Festival de Cannes导演访谈（2023-05-26）：导演说明主角是无根者、追寻归属与爱，并讨论过去遗物、死亡及不同胶片/速度处理；支持创作意图与形式背景，不证明观众感受。https://www.festival-cannes.com/en/2023/la-chimera-memories-of-former-lives-by-alice-rohrwacher/
  2. Le Monde影评（2023-05-26）：支持Arthur返乡、重返盗墓活动、Italia代表替代生活，以及“与活人生活或与神像头部记忆生活”的选择框架；属于影评文本，不替代逐镜核验。https://www.lemonde.fr/culture/article/2023/05/26/cannes-2023-la-chimere-la-belle-odyssee-des-pilleurs-de-tombes-sacrees-d-alice-rohrwacher_6175047_3246.html
  3. Vatican News剧情评论（2024-12-05）：提供E01–E04较完整剧情复述，支持铃铛冲突、神龛、车站共同体邀请及Arthur再次离开；属于二手剧情评论，不是原片字节/时码核验。https://www.vaticannews.va/en/vatican-city/news/2024-12/films-pilgrims-of-hope-jubilee-greg-apparcel-la-chimera-review.html
  4. The Baffler影展评论（2023-06-06）：明确描述船上争夺神像头部及Arthur将其投入水中，独立补强E03动作；仍为影评文本。https://thebaffler.com/latest/cote-dillusion-wham
  Cannes导演访谈与Cannes官方作品材料归同一机构，不按两个独立媒体重复计数；Le Monde、Vatican News、The Baffler作为不同出版来源。
- **动态链候选**：`lost-love_pursuit → return_to_tombaroli → relic_ethics_conflict → gang_rupture → alternative_community_bridge_offered_and_temporarily_entered → self_exit → recursive_return_to_lost_object → underground_ambiguous_closure`。这是F1剧情/关系行动顺序，不是观众感受曲线。
- **机制候选**：`type_gap_id=C_BRIDGE_OFFERED_TEMPORARILY_ENTERED_BUT_SELF_EXITED__B_RECURSIVE_RETURN_TO_LOST_OBJECT`；`novelty_delta=OLD_TYPE_NEW_MECHANISM_CANDIDATE`；`type_status=PROPOSED_H`。与《A Real Pain》“情感回连成立但生活整合未完成”不同：本片有替代共同体邀请，Arthur表达想留下却最终离开并回到失去对象的追索；**“已实际进入共同生活/短暂居住”尚非F1锁定事实**，故type_id中的TEMPORARILY_ENTERED仍是待F2核验子主张。最强反证：若F2显示其离开主要由外部驱逐而非主动选择，或删去共同体邀请后后续路径完全不变，则“主动退出替代生活桥”机制应FAIL/降级。
- **AG-09主题候选**：命运FATE暂列主候选，本体ONTOLOGY强竞争；时间是重要阶段媒介，空间暂不列主竞争。导演“寻找归属”的访谈只支持候选，不裁决主维；严格主题生克边仍 `NOT_ESTABLISHED`。
- **AG-11人物候选**：Arthur的“寻找/重逢Beniamina、获得归属”仅为叙事目标描述；Arthur与Italia稳定元、追求元、结算元均 `null`，不由行为反推十元。
- **AG-13/AG-02四轨审查**：`PLOT_ACTION=E01–E04`；`ROLE_TENYUAN=NOT_ESTABLISHED`；`THEME_FILM=FATE/ONTOLOGY_COMPETING_H`；`L2_CLAIM=NONE`；严格十元关系端点、方向、作用对象及变化量均 `NOT_ESTABLISHED`。现有方法继承AG-13/AG-14“事件事实→人物/主题/动作分轨→AG-02严格边审计”；本轮只做F1来源包跨系统去重与Q级接收，不声称代理已独立运行或通过。
- **分级与计数**：`F1=SOURCE_PACKET_COMPLETE__ARCHIVE_PENDING`；`F2=null`；`F3=null`；`dynamic_feeling_curve=NOT_MEASURED`；`independent_grade=false`；`assessment_mode=ASSISTED_SEQUENTIAL`；`research_readiness_100=67/100 (AI_SCORE)`；`mechanism_gain_0_5=2/5 (AI-H)`；`tenyuan_film_quality_100=null`。NEW100仍28/100，`new_f1_cards=0`、`type_gap_verified=0`。不计Q-FEEL、人类感受、五轴A/B或跨媒体实验。
- **裁决**：`EVIDENCE_INTAKE_ONLY / NOT_READY / RETURN_SPECIFIC_GAP`。不创建新Q、电影MD、Canvas节点或主题索引；不启动RESEARCH子Campaign，不执行五轴A/B/H3，不修改十元Canon。
- **NEXT**：先完成历史别名穷尽排重，再以原片F2核验E02–E04的动作顺序、Arthur离开共同体的主动性及地下终局边界；只有完成冻结的独立R1/R2答案后才评估holdout。未完成前保持WAIT；本节不使Q-DYN-002 READY。


## 12｜2026-11-17｜THE_FABELMANS_2022_F1_MEDIA_FUNCTION_CHAIN｜自制影像从私人证据到公共观感（F1接收／非READY）

- **receipt_id**：Q-DYN-002-APP-FILM-CHAIN-001-THE-FABELMANS-F1-INTAKE-20261117。
- **唯一增量来源**：Linear 674-105 comment ab229482-be4c-439a-9c7f-a9c0694d01d7（2026-11-17 00:30 UTC，F1公开来源包）；同工单 comment de99c4ca-50dc-4632-ad2b-f128e87064ad（2026-11-17 00:32 UTC）只补横纵主图排版与边界验收，不是第二个素材样本。GitHub 电影进度台账先由 commit deb14cb5c8d7e8d46515d68fe852623ee47ce08a 写入来源包，再由 commit c14757e6a3eeec87cffb4b40e5cc26a005d8f01b 补入横纵主图；当前台账 blob 为 fdedb8f8c367511289b3d8d28a9e857a2c3a5c1c。Linear 两条评论与 GitHub 台账是同一影片、同一F1来源包的分阶段记录，跨系统只计一条增量。
- **身份与去重边界**：The Fabelmans / Die Fabelmans /《造梦之家》（亦见《法贝尔曼一家》）/ 2022 / Steven Spielberg。用户已看状态 NOT_CONFIRMED。现有电影卡与Canvas检索未命中，但旧银矿散点和历史别名尚未穷尽，故 ARCHIVE_PENDING；不创建C52、不增加正式NEW100数量。
- **前人研究一句话**：既有C30《偶然与想象》已研究误认/信息碰撞触发关系变化，C37《教师休息室》已研究追索真相反噬信任，《The Past》已研究分散线索与分支多米诺；本片新增候选不是“信息差”本身，而是主角亲自拍摄、剪辑的视觉材料先成为私人秘密证据，随后又被剪辑成塑造同伴公共形象的媒介。
- **F1事件账（公开资料，不是原片逐镜或观众感受数据）**：
  - E01｜影像作为情绪调节与创作入口：Sammy受火车碰撞场面震动，重演模型火车碰撞，并在母亲鼓励下用父亲的8mm摄影机拍摄；电影制作成为持续行为。来源：Berlinale官方节目档案、CBS News / 60 Minutes访谈。
  - E02｜自制影像成为家庭秘密证据：Sammy拍摄家庭露营素材，之后回看/剪辑时从画面中辨认出Mitzi与Bennie的亲密迹象；他私下向母亲展示并承诺保密，承担不向父亲公开的知识负担。来源：Berlinale、TIME对Spielberg的访谈、CBS News、TheWrap。
  - E03｜剪辑开始塑造公共观感：Sammy为学校海滩活动制作影片，通过选择与组织镜头，让Logan呈现为受欢迎的“黄金男孩”，让Chad显得狼狈；放映引发同学反应。来源：TIME访谈及台账已登记的剧情交叉来源。
  - E04｜创作路径获得外部入口：Sammy通过行业联系人见到John Ford，得到关于画面地平线位置的构图建议；职业追求获得外部入口。来源：TheWrap及台账登记来源。
- **横纵关系边界**：E01→E02仅是媒介实践的事实连续：E01建立持续拍摄行为，E02家庭露营素材是后来另行拍摄的素材，不是E01火车模型碰撞片段；该连续不构成严格因果边。E02→E03仅标媒介能力延续H；E03→E04仅标创作目标延续H。不得把两条H画成严格因果边，也不得把Sammy的保密行为直接编码为十元生克补。
- **动态候选**：影像自我调节 → 自制影像成为私人证据 → 影像剪辑塑造公共观感 → 创作能力获得职业入口。这是媒介功能随事件阶段变化的F1行动链，不是观众感受曲线，也未证明某种影像形式稳定诱发某种十元感受。
- **机制候选**：type_gap_id=C_CREATIVE_MEDIUM_REVEALS_TRUTH__R_PRIVATE_KNOWLEDGE_BURDEN；novelty_delta=OLD_INFORMATION_ASYMMETRY_NEW_SELF_AUTHORED_VISUAL_EVIDENCE_MECHANISM；type_status=PROPOSED_H，属于既有信息不对称/媒介中介家族的新作用范围候选，不是正式新类型。其可检验差异是：同一媒介既记录事实、改变角色知识状态，又可通过剪辑改变第三方对人物的公共观感。
- **反事实与竞争解释**：①删除E02露营影像后，Sammy是否仍会通过其他线索获得同等秘密认知？若是，影像作为必要证据的作用下降。②删除E03学校影片后，同伴观感与Sammy的后续职业入口是否仍以相同方式发生？若是，E03不应承担主题结算。③父母关系变化不得归因于影片本身；家庭冲突、既有亲密关系及其他事实均是竞争解释。
- **分轨审查**：PLOT_ACTION=E01–E04；MEDIA_FUNCTION=SELF_REGULATION→PRIVATE_EVIDENCE→PUBLIC_IMAGE_SHAPING→CAREER_ENTRY；ROLE_TENYUAN=null；THEME_FILM=ONTOLOGY_H/CAUSALITY_H竞争；strict_relation_edges=NOT_ESTABLISHED；L2_CLAIM=NONE。前人研究方法继承“先事件事实、再横纵关系、再删边反证”；本轮新增的是自制视觉媒介在私人知识与公共观感之间的双重功能假设。
- **分级与计数**：F1=SOURCE_PACKET_COMPLETE__ARCHIVE_PENDING；F2=null；F3=null；dynamic_feeling_curve=NOT_MEASURED；human_feeling_profile=null；MAE=null；Top1=null；Top3=null；C-film=UNCHANGED；C-feeling=UNCHANGED；independent_grade=false；assessment_mode=ASSISTED_SEQUENTIAL。674-105中的research_readiness_100=70/100仅为AI_SCORE，mechanism_gain_0_5=2/5仅为AI-H，不是实证等级。NEW100仍28/100；new_f1_cards=0；type_gap_verified=0。
- **裁决**：EVIDENCE_INTAKE_ONLY / NOT_READY / RETURN_SPECIFIC_GAP。不创建新Q、电影MD或Canvas节点；不启动RESEARCH子Campaign，不执行五轴A/B或H3，不修改十元Canon。
- **NEXT**：先完成旧银矿散点/历史别名穷尽排重；再以原片F2核验E02知识变化、E03放映后的真实反应及E04职业入口是否独立；若要主张形式→感受，必须另建盲化真人F3方案并与电影剧情分析分账。本节不使Q-DYN-002 READY。


## 13｜2026-11-17｜THE_LOST_DAUGHTER_2021_F1_SOURCE_PACKET｜双时间状态与物件镜像（F1接收／非READY）

- **唯一来源增量**：Linear 674-105 comment `b7438c86-0e68-45f4-8991-d6664eb8012f`（2026-11-17 01:25:33 UTC）；电影进度台账对应 GitHub commit `7dc417b7ebd9385392ffc6c27899786113c01f52`、blob `3fdd442512b1d85ec5d4965ba3b06bdb0fe38fab`。已按该 commit 与后续台账版本回读；Linear 与 GitHub 是同一F1来源包，只计一条，不重复计数。
- **身份/版本边界**：The Lost Daughter /《暗处的女儿》（亦见《失落的女儿》）/ 2021 / Maggie Gyllenhaal；研究对象只限2021电影版，不把Elena Ferrante原著小说的结尾混入电影事实。电影版登记片长121分钟；USER已看状态NOT_CONFIRMED。旧银矿散点仍未逐文件穷尽，`DUPLICATE_CHECK=WATCH_C01-C51_REPO_CODESEARCH_PASS__ARCHIVE_PENDING`；不创建C52、不增加NEW100正式数量。
- **F1事件账（公开来源，不是原片逐镜/F2）**：
  - **E01｜当下娃娃事件**：Leda在海滩找到走失的Elena并将她交还Nina，随后私自拿走Elena的娃娃；孩子继续寻找娃娃，Leda主动制造隐瞒。
  - **E02｜过去的高代价选择**：年轻Leda在育儿压力、学术事业与私人欲望之间挣扎，曾离开丈夫和女儿一段时间；电影以年轻/年长演员呈现同一人物的不同时间状态。电影版来源将离开时长记为三年，不以原著版本替代。
  - **E03｜非计划的自我揭露**：Leda与Nina谈话时意外说出自己曾离开女儿多年；导演访谈称该告白不是预先设计的计划性揭露。
  - **E04｜归还、暴力后果与开放结尾**：Leda归还娃娃并承认拿走它，Nina以帽针刺伤Leda；Leda驾车离开并发生事故，随后在海滩醒来，接听成年女儿电话并剥橙子。电话与橙子是可观察结尾元素，不足以证明母女关系已完成修复，也不锁定为客观超自然事件。
- **来源与前人研究一句话**：身份/版本以Venice Biennale与Netflix Media Center为准，剧情和形式交叉参考The Guardian、BFI/Sight and Sound、Digital Spy，创作者意图参考Maggie Gyllenhaal在Washington Post与Vanity Fair的访谈；前人C30《偶然与想象》研究信息碰撞、C37《教师休息室》研究追索真相反噬信任，本片候选增量是“同一人物的两种时间状态通过物件发生镜像，告白后仍不等于关系修复”。
- **动态候选**：`当下观察与娃娃失窃 → 过去母职选择回返 → 物件镜像H → 非计划告白 → 娃娃归还/关系冲突 → 身体代价 → 电话与橙子开放结尾`。E01与E02之间的镜像/触发只标H，不写成已证实严格因果边；该链是F1叙事行动顺序，不是观众感受曲线。
- **机制候选**：`type_gap_id=R_SAME_PERSON_DUAL_STATE__OBJECT_TRIGGERED_PAST_PRESENT_REENACTMENT`；`novelty_delta=OLD_R_CANDIDATE_NEW_OBJECT_MEDIATION_MECHANISM`；`type_status=PROPOSED_H`，不是正式新类型。竞争解释包括娃娃只是高辨识度视觉母题、告白并未构成修复、结尾电话/橙子可能具有主观或开放含义。
- **分轨/门禁**：`PLOT_ACTION=E01–E04`；`ROLE_TENYUAN=null`；`THEME_FILM=ONTOLOGY_H/CAUSALITY_H`；`theme_edges=NOT_ESTABLISHED`；`L2_CLAIM=NONE`；`F1=PASS_PUBLIC`；`F2=null`；`F3=null`；`dynamic_feeling_curve=NOT_MEASURED`；`independent_pass=NOT_SCORED`。研究准备度76/100仅为AI_SCORE，机制增益2/5仅为AI-H，不能当C-film或感受实验成绩。
- **反证/停止条件**：若F2显示娃娃的拿走/归还没有改变Leda与Nina的行为链，物件中介降级为视觉母题；若移除过去离家事件后当前告白仍有同等结构必要性，跨时间镜像机制降级；若将电话结尾直接解释为完整修复，须有额外原片证据。
- **计数与裁决**：`ARCHIVE_PENDING`；`new_f1_cards=0`；`NEW100=28/100`不变；`type_gap_verified=0`。仅作为Q-DYN-002的F1来源输入，不计Q-FEEL、Q-DSL、Q-GEN、五轴A/B或跨媒体实验。无新电影MD/Canvas节点/主题索引，不启动RESEARCH子Campaign，不执行H3。
- **NEXT**：等待历史别名穷尽去重、原片F2核验及独立预锁R1/R2；本节不使Q-DYN-002 READY。

## 14｜2026-11-17｜THE_TASTE_OF_THINGS_2023_F1_SOURCE_PACKET｜共同实践与失去后的技艺传递（F1接收／非READY）

- **唯一来源增量**：Linear 674-105 comment `e72621c0-89cb-4b8d-93f8-b737193a25c9`（2026-11-17 02:17:14 UTC）；电影进度台账 GitHub commit `03072fb684fff1c3882276d8b3ccad7b9b1537a9`，当前对应台账 blob `bf9acecbae70185f24a57705ce64dd28dc68f353`。已按两个 commit ref 回读确认：Lost Daughter先进入台账，Taste of Things后进入同一台账；两条Linear评论与GitHub台账是各自对应的来源包，不跨系统重复计数。
- **身份/版本边界**：La Passion de Dodin Bouffant / The Taste of Things / Le Pot-au-Feu /《火上锅》（中文发行名仍待统一核对）/ 2023 / Trần Anh Hùng。Cannes档案记134分钟，Gaumont与部分评论记135分钟，登记为元数据1分钟差异，不推断存在不同剪辑版；只研究2023电影版，不混入原著小说。USER已看状态NOT_CONFIRMED。旧银矿散点池与历史别名尚未逐文件穷尽，`DUPLICATE_CHECK=WATCH_C01-C51_REPO_CODESEARCH_PASS__ARCHIVE_PENDING`；不创建C52、不增加NEW100正式数量。
- **F1事件账（公开资料，不是原片逐镜/F2）**：
  - **E01｜二十年共同实践**：Eugénie与Dodin长期共同准备宴席；Dodin构思菜单、Eugénie执行，反复协作与品尝构成非语言亲密媒介。开场以近乎无对白的备餐呈现实践，Eugénie出现昏厥。
  - **E02｜照料角色反转**：Eugénie长期拒绝求婚并珍视自由；病情持续后，Dodin首次为她准备晚餐，随后她接受求婚。该变化不证明病情改善或共同未来已经实现。
  - **E03｜死亡中断搭档，实践经他人延续**：Eugénie在婚期宣布后去世；Dodin悲伤并拒绝替代厨师，后来与Pauline寻找新厨师，并继续传授/延续厨房实践。技艺可传递，但原共同创作搭档不可被新厨师替代。
  - **E04｜身份问答保持开放**：结尾空厨房之后出现Dodin与Eugénie关于妻子/厨师身份的对话；它究竟是回忆、想象还是重逢不锁定为客观事实。
- **来源与前人研究一句话**：Cannes、Gaumont、Garance法国电影遗产目录提供身份/发行和剧情基线，Eater、The Guardian、Old Yorker交叉补充事件；C24《机器人之梦》研究共同记忆/音乐桥，C30《偶然与想象》研究偶遇改变关系，C37《教师休息室》研究追索真相反噬信任，本片候选增量是“重复共同创作实践成为非语言亲密语言，死亡后技艺可传承但不能替代原搭档”。
- **动态候选**：`长期共同实践 → 身体异常进入日常 → 照料角色反转/接受求婚 → 不可逆失去搭档 → 拒绝替代 → 教学与新协作恢复实践`。E04的身份问答只作为开放结尾，不据此添加超自然或关系复原边。该链是F1叙事行动顺序，不是观众感受曲线。
- **机制候选**：`type_gap_id=R_SHARED_PRACTICE_AS_INTIMACY__C_SKILL_TRANSMISSION_AFTER_IRREPLACEABLE_LOSS`；`novelty_delta=REPEATED_CO_CREATED_CRAFT_AS_NONVERBAL_RELATIONSHIP_LANGUAGE_THEN_POST_LOSS_TRANSMISSION_WITHOUT_PERSON_REPLACEMENT`；`type_status=PROPOSED_H`，属于旧关系/传承家族的新机制候选，不是正式新类型。与《A Real Pain》“情感回连成立但生活整合未完成”不同：本片是共同实践延续而个人搭档不可替代。
- **分轨/门禁**：`PLOT_ACTION=E01–E04`；`ROLE_TENYUAN=null`；`THEME_FILM=ONTOLOGY_H/FATE_H`竞争；`theme_edges=NOT_ESTABLISHED`；`L2_CLAIM=NONE`；`F1=PASS_PUBLIC`；`F2=null`；`F3=null`；`dynamic_feeling_curve=NOT_MEASURED`；`independent_pass=NOT_SCORED`。研究准备度74/100仅为AI_SCORE，机制增益3/5仅为AI-H，不能当C-film或感受实验成绩。
- **反证/停止条件**：若F2显示共同烹饪并非两人关系主要行动媒介，或Pauline学习与Eugénie离世无结构性联系，机制降级为职业背景；若新厨师被叙事明确设定为Eugénie可替代复制，需撤回“个人不可替代”判断；若移除Pauline/Adèle后主关系仍完整，技艺传承只作为后段回收而非全片主导机制。
- **计数与裁决**：`ARCHIVE_PENDING`；`new_f1_cards=0`；`NEW100=28/100`不变；`type_gap_verified=0`。仅作为Q-DYN-002的F1来源输入，不计Q-FEEL、Q-DSL、Q-GEN、五轴A/B或跨媒体实验。无新电影MD/Canvas节点/主题索引，不启动RESEARCH子Campaign，不执行H3。
- **NEXT**：等待历史别名穷尽去重、原片F2核验与独立预锁R1/R2；本节不使Q-DYN-002 READY。
