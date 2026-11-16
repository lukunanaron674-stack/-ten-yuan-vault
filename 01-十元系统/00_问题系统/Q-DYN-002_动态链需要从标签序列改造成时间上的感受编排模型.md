---
q_id: Q-DYN-002
problem_depth: D1
parent: G4
goal: AI能理解、预测、生成并编排人的目标感受
volume: 9
impact_weight: 9
status: OPEN
problem_state_version: v2
updated: 2026-10-07
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
