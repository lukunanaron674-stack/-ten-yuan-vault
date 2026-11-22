---
type: agent-target
id: GOAL-Z
target_label: 目标Z_电影十元链分析
parent_agent: AG-14
child_agent: AG-13
question_id: Q-DYN-002
application_id: APP-FILM-CHAIN-001
governance_lane: Lina02
issue: 674-105
research_status: METHOD_REGISTERED
baseline_status: ESTIMATED_NOT_BLIND_TESTED
execution_status: REPO_REGISTERED_LOCAL_UNVERIFIED
updated: 2026-11-03
---

# 目标Z｜电影十元链分析（AG-14旗下AG-13子代理）

**Z是目标编号，不是十元符号Z。**
**唯一问题源**：[[01-十元系统/00_问题系统/Q-DYN-002_动态链需要从标签序列改造成时间上的感受编排模型|Q-DYN-002 §5 APP-FILM-CHAIN-001]]。本文件只定义**谁执行、提交什么和回报哪里**；不复制原问题正文、C-film细则和96卡位预算，不建新Q。

## 电影分析交接流程
1. **AG-13 R0**：先自然语言核对真实电影事件（至少3个具体行动）、人物目标、前后因果与不对称结局；锁定F1/F2材料，无原片不编时间码。
2. **AG-11人物判定**：方法A逐一给十个十元的独立相似度百分比（证据不足记null，非概率、不需和为100）；方法B跨幕材料论证+反材料。结果为主次候选或待判，作者确认才可锁；关系反推是研究路线C，不能直接定稿。
2a. **AG-09主题反馈（独立审稿）**：从主题问题／压力／人物真实抉择／结局回收提供`theme_role_feedback`给AG-11；它只用于补材料、检验选角必要性和竞争解释，不从五维式子直接推出人物十元。AG-11输出还需分离表面映射、人物自身感受、观众感受预测(F3真人null)、剧情功能、灵魂主核和结算元；灵魂用抽离／痛苦／最高代价／反复失败／余味审计。详见既有A/B/C协议的D/E节。
3. **AG-13 R1/R2**：读取人物USER/AG-11候选，画横向主体作用＋纵向事件因果，识别生/克/补【H】、被改变变量、至少1条失败边、克补发生顺序与结局回收；不把行动状态推成人格。
4. **AG-02复审**：端点、体量、五轴、关系冻结、拿掉实验/第三因素检查；带Z/ZN的旧严格生克补不因电影例片解冻。
5. **AG-09按需**：独立判断五大主题及作用关系，不能以“本体=ZN+X”推导楚门的人物十元。
6. **AG-14提交**：`R0_frozen, role_candidate, R2_chain, independent_or_assisted, error_family, evidence_refs, human_gate, writeback_receipt`；向Q-DYN-002 APP附状态，向Linear 674-105登记。有用户明确要求才更新**唯一**电影Canvas原卡。

## 基准评价与停止条件
- 直接复用Q-DYN-002 §5的`FZ1..FZ8`、C-film C0–C9和独立盲审规则；不在此另造指标或伪造C级成绩。
- 已分析的《楚门的世界》、 《情书》、《你的名字。》等为**协作开发集**，不是未见测试集。
- 单轮只处理一个可核实剧情增量；没有新证据时止于`NO_NEW_EVIDENCE`；涉及用户人物归类争议时回AG-11等待确认。
- 角色候选、主题关系、故事动态链、人的感受曲线分别验收。电影故事文本分析 PASS 不代表F3人类感受预测已有效。
- 角色样例：[[07-Codex大脑库/Agent系统/03_知识库/角色材料论证/CASE-001_楚门_十元角色材料论证|楚门材料论证／AG-11]]；电影动态链原卡在[[02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas|统一电影Canvas]]，不要生成第2个Canvas。


## 本轮进展｜《情书》USER校正（2026-11-03）
- **案例新证据**：电影卡⑤获作者明确判定：博子Z／男藤井树XN／女藤井树NX；一级故事主题「时间(XN+Z)克制因果(ZX+NX)，被爱与命运(XZ+NZ)架桥」。唯一电影卡原位登记，commit 010badf4d9552d305af291f37c0b89dca010cdde，blob 554b8a234320093d1360e982897d2b17e524d948。
- **能力增量归属**：FZ2（无提示角色主元）出现明确USER纠偏样本；FZ4（五维主题/关系）出现USER纠偏样本；FZ5（横纵具体事件图）与FZ7（R1→R2保留内容后补符号）获得有条件的协作交付。记录 error_family=ROLE_MISCLASSIFICATION + THEME_RELATION_MISSED；assistant 自主前测未在用户揭底前封存，所以不提供独立正确率。
- **等级状态不变**：method=METHOD_REGISTERED；baseline=ESTIMATED_NOT_BLIND_TESTED；execution=REPO_REGISTERED_LOCAL_UNVERIFIED；independent_holdout=NOT_STARTED；assisted_case=RECORDED；正式C-film的FZ1–FZ8仍按Q-DYN-002内的估计值，不提升。F2原片、F3真人感受、跨题材独立盲测与两个原创可拍案例的C9门槛都未满足。
- **精确后续动作**：下一个全新电影案例先由AG-13无提示冻结R1事实+R2主次/主题/关系预测，再由AG-11独立材料审核，最后请USER裁定；不得把《情书》当未见测试集。无新事实时STOP，不继续对同一片盲迭代。

## 2026-11-03｜WATCH-026《釜山行》独立预锁记录
- **R1先行封存**：2016《釜山行》核对片源；事件链含错过女儿的歌唱→隧道的歌声识别、门外救人→门内拒绝、父亲起初只管家人→被咬后主动离开。R1 commit 4b448b1b849a9ddd41e84a640748b83ec43eb695。
- **R2后贴符号**：石宇早段X?、后段N?/ZN?（均阶段）；秀安ZN?主/Z?次；尚华N?主/ZN?次；主题空间(X并Z+N)主候选、本体(ZN+X)次候选。最重要的错误防线：士兵听歌认出幸存者的Z，不等于父亲终于看见女儿。R2 commit 00ecfe83238ff7b7687c2ef5167e5d6154e4a94c；Canvas 14节点/1边，远端回读通过。
- **已看状态**：WATCH-026确认用户看过，原观影表已更新 R1/R2 进度，commit bb4d0dfd960276ef95daa9b5b747f504f72853d7。
- **能力验收边界**：本轮没有读取旧十元正文，但仓库已有釜山行动态链初审，历史污染风险仍在；status=PRELOCKED_PENDING_USER，holdout_eligible=false，independent_pass=NOT_SCORED；F2=null，F3=null，LOCAL_UI=WAIT。C-film基线不升级，不充正式新片盲测。
- **下一步明确终点**：等待USER先看本轮预锁角色与主题；再对照旧十元初审并记录FZ2/FZ4/FZ5/FZ7的具体错因。真正C6/C7必须在没有旧标签暴露的确实未见片上预注册。

## 2026-11-03｜WATCH-011《千年女优》USER观后新证据（当前增量）
- **案例登记已核**：原电影Canvas第⑩卡`TENYUAN_FILM_WATCH011_MILLENNIUM_ACTRESS_SOUL_2001`已原位更新为「时间克因果／命运架桥→千代子NX爱自己的ZX」，`WATCH-011`已恢复为USER确认看过；角色正本《千代子》已将旧AI `Z+XN`退为历史，现行为USER判断「千代子NX；向往／爱自己的ZX；画家ZN」。相关写后回读已PASS：电影Canvas commit `d72b2e3ab90153893bcf22fd8c8c1725f4b8c61b`；角色 `aeec4515e5266de860d5eb3ec7d8743c1e7a67fe`；观影登记 `b773bf44e707b2f28be57a78f67c98830e2a284c`；AG-11方法错误族 `CHAR-ERR-ASPIRATIONAL-TENYUAN` commit `42e3be43898a90f43f1d2a439d4620850e08ce8a`。Linear 674-105回执comment `40adc717-c4a3-4502-85f9-16dd812753a5`。
- **能力增量**：FZ2=首次明确记录「原始性格NX、向往ZX、所爱对象ZN、屏幕行动误显Z」四层混淆，USER纠正；FZ4=电影宏观「时间克因果／命运架桥」与人物内在小十元关系分层；FZ6=外在追求无果→内在爱自己的ZX之反转回收；FZ7=从旧AI Z+XN错判到可解释纠偏的协作审校。均只计`ASSISTED_CASE_RECORDED`，不计`independent_pass`。
- **最新盘点**：当前电影Canvas共11部不同影片主卡＋《钢琴家》1张机制子卡，28部用户确认已看作品中有11部有主卡，仍有17部尚无主卡；“11/28”只算**电影覆盖**，不是96个验证题卡的完成比例。GOAL-Q标准仍为FZ1–FZ8原C-film暂估 C5/C2/C3/C2/C4/C4/C3/C4，独立成绩`NOT_SCORED`。当前另一《釜山行》R1/R2仅PRELOCKED_PENDING_USER且旧库潜在污染，不能充holdout。
- **目标状态不可抬高**：`research_status=METHOD_REGISTERED`，`baseline_status=ESTIMATED_NOT_BLIND_TESTED`，`independent_holdout=NOT_STARTED`，`execution_status=REPO_REGISTERED_LOCAL_UNVERIFIED`。C7/C8/C9的至少5/10部未泄题多题材考试／两个不同题材原创可拍剧本尚未通过；F2原片、F3真人观感缺位，不因USER纠错就增级。

## 2026-11-03｜WATCH-005《土拨鼠之日》R3角色灵魂复核
- **既有卡原位增量**：唯一电影Canvas第⑨张`TENYUAN_FILM_WATCH005_GROUNDHOG_DAY_1993`已补AG-11性格核竞争、时间与因果双尺度、丽塔独立拒绝、流浪老人救不回的反证及Rita/Phil不伪锁。旧R1/R2不删，Canvas GitHub读回PASS commit `9d0dd35fa34259ebd532131f6683c8dc1173d330`。WATCH-005研究索引GitHub读回PASS commit `6f85b896f1141c4ce44be913b2ad05d0c33f077e`，已看总数仍28、不同电影主卡仍11。
- **暂判与争议**：Phil前期`Z主【H】`（个人目标绝对置顶）vs `ZX/XN【H】`行动与信息利用手段；后期`ZN【H】`自身成立并保存他人独立资格、`N【H】`具体照顾功能。不能由「他后来帮助别人」强推N主，也不能由时间题材推XN人格。Rita主元待判。后期是「Z原核改目标，ZN显影」还是「Z只是表层，实际人格发生变化」，需作者判断。
- **关键因果**：2月2日外部日历重置、角色内部经验持续；旧人无法被救回说明主角不全能；2月3日出现与心灵变化的时间顺序，不构成“人格变化必然导致魔法解除”的已证因果。F1剧情／SONY官方梗概与IMDb剧情，F2逐镜=WAIT，F3人评=null，严格L2机制未锁。
- **能力状态**：本轮新增的是FZ2/FZ4/FZ6有竞争反例的`AI_HYPOTHESIS`，不属于`AUTHOR_INPUT`或独立盲测`PASS`。此片旧库已有分析，`holdout_eligible=false`；Q-DYN-002 C-film起点与目标均不变，等级不升级。下一步仅待USER给菲尔性格核心的判断，再按有区分度的具体事件修订。


## WATCH-005｜USER动态链二次校正：补ZN、ZX生ZN、XN↔Z
2026-11-03 用户给出的完整关系：时间克因果→流浪老人生命终点引出本体(ZN+X)克时间；男主菲尔XN+ZX，先有XN克ZX的内部自克，随后ZX生ZN，ZN补位解除封闭；女主丽塔Z。末段男主的XN成为面向女主Z、可支撑她的XN，女主Z成为面向男主XN、与之互补的Z；双向XN↔Z。用户判定以AUTHOR_INPUT存档，不把人物转向写成XN变Z人格；生/克/补为本片语境机制，严格L2仍须事件证据与AG-02审校。旧AI菲尔Z主、后期ZN功能、丽塔待判是过时猜测，不计独立命中。FZ2/FZ3/FZ4/FZ5/FZ6/FZ7新增USER纠偏案例，C-film等级不变，F2逐镜与F3独立人评仍空。Canvas第⑨卡已远端写后回读验证：commit `c62d529d187536bbbfc23b57afbaea31c8375755`；WATCH-005索引回读：`77eb5b345e1a707360bb44fd22161e4ca0acf3b9`；Linear 674-105回执 comment `7653881c-caff-477d-981a-a113db6bcd6f`。

## 2026-11-03｜WATCH-029《美国精神病人》作者纠正与结局反事实
- 观影 WATCH-029：USER确认看过《美国精神病人》（2000）；观看登记由28条更新为29条，commit `2cc5fd572044b9811f9a3325f1d3ce950a6cbf19`。
- **R1影片事实**：贝特曼物质身份竞争→同僚互相认错→他向律师自白→律师认为是玩笑、身份与行为未形成司法结算。F1影片剧本支持“自白未有意义”；电影未呈现受害人家属与司法共同完成制裁。
- **AG-11更新**：USER否定AI旧Z主优先结论，提出物质化ZN?和X?、XZ克ZN与X终局爆发的解释。ZN候选解释为把物质标准内化为不可让渡意义；反例是这套标准或仅依赖外部认可而不满足ZN跨场独立。XZ需动态逼近的危险窗口，不能仅凭人物疯狂判定。稳定主副仍STAGING，非USER定稿。
- **AG-09主题**：USER认同电影的“本体主、因果次”主题。**作者竞争结局**：NZ家人／XZ法律命运制裁，XZ+NZ双补、因果法律生本体是USER提出的解释／反事实研究方向；按照实际电影结尾，法律结算没有完成，故不能宣称已发生双补或“因果生本体”严格边。Z/ZN旧严格机制仍冻结。
- **落点**：唯一电影Canvas第⑬卡，commit `9b78bf9f0252df37005f1dca71a8481cda58825e`、blob `de1b1665c5b752f26e94071de9908cd9977a772d`，读取验证结构PASS、Obsidian本地WAIT_LOCAL_UI。F2/F3未核；本例已讨论并有USER给答案，记录ASSISTED_CORRECTION，非holdout，C-film不升级。
- **下一次验收门**：询问USER是要把NZ家人＋XZ法律当作此电影真实叙事的个人理解，还是希望以此改写结局；检验“物质ZN真正内化还是X并Z壳＋X”两组竞争解释。不得把争议自动封为L2机制。
## 2026-11-03｜WATCH-014《爱在黎明破晓前》训练式预锁及交叉审核
- **执行闭环已留下两次可核的Git提交**：R1剧情＋AG-11/09/13首次推断的预锁 `449ca57d4cf40fa9f42fa5f0b5ccbf93887d61d1`；之后详查旧角色/主题原档并作AG-14对照 `3c0a9a2ac769dcea67803e14f11d3ca378e69d5c`。都只写`02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas`既有统一Canvas，新卡ID `TENYUAN_FILM_WATCH014_BEFORE_SUNRISE_1995`，没有第二套Canvas；原观影索引WATCH-014回读PASS commit `651983a6087200280d68793476b0f5869a88dd6d`。
- **F1事件核对**：杰西邀请席琳下车同行→维也纳对话/唱片店→摩天轮接吻→模拟通话间接吐露→清晨分离并留下半年约定；来源为Criterion、Film at Lincoln Center、Kinolab片段目录及IMDb剧情；无统一片源时码或电影F2、F3。两条独立提交只证明预锁顺序，不证明模型未泄题。
- **三代理训练结果【H】**：AG-11杰西Z?主、ZX?/XN?功能，席琳NZ?/Z?竞争、NX?反思层；AG-09时间主、命运次候选；AG-13为邀约→自主应允→双向交流→亲密→清晨分离→未来约定，T06/T07候选，`strict_L2_edges=0`。AG-14旧档对照发现杰西旧主Z辅XN、席琳旧主Z辅XN；旧命运主与旧时间主不统一；旧`n克z`来自文学性容纳描述，不通过正式生克补验证。**旧研究并非USER真值，不能据此判新预判对错**。
- **统计**：新增`TRAINING_CASE_1`（WATCH-014新主卡）；影片库现**13部不同电影主卡＋《钢琴家》1张机制子卡**，此前12部增加1部；观影记录现有29个USER确认条目（25已明确是电影，1为动画剧集，3版本待核），因此按**登记条目粗算覆盖13/29**、未覆盖16条；13/29不能当严格电影完成率，不能当独立考试进度。原96题卡位并未在本轮宣称执行/验收1题。
- **考试状态仍然** `METHOD_REGISTERED / BASELINE_ESTIMATED / INDEPENDENT_HOLDOUT_NOT_STARTED / LOCAL_AGENT_UNVERIFIED`。本轮虽按代理岗位分别写输出，但在同一ChatGPT工作流中完成，不冒充真实多独立进程。下一正式未泄题测试必须先检查旧库污染且在模型看任何旧十元结果前封存，然后独立评审；这部WATCH-014不具备holdout资格。
- **下个阻塞**：USER（若愿意）判席琳是NZ灵魂核还是Z主动追求，还是两者皆非；她做出了哪些独立选择才是关键。若本轮不等人工，优先换未有旧十元判定、来源可核的另一部片进行真正预注册，并保持一轮一个案例，不能靠重复写卡拔高C-film等级。

## 2026-11-03｜电影卡单一Canvas五维导航＋角色／主题／动态链三轨训练
- **USER分工明确**：USER继续看电影、提出自己的角色灵魂与主题链；AG-11先人物性格＋反证，AG-09独立主题，AG-13先R1事件再R2十元动态链，AG-14核不同代理错因；我在现有唯一电影Canvas原位维护一片一主卡，附必要的同片机制子卡（不重复计电影），并更新WATCH索引、Linear回执。未来分析按两轮`R1自然剧情→R2人物/主题/十元`即可，R2不足才一次补证，避免无限R3/R4。
- **三条证据车道**：（1）旧片＋USER协助纠错 = `TRAINING_ASSISTED`，可提炼误判与可复用剧情零件，但不计独立正确率；（2）未泄题的新电影 = `SEALED_HOLDOUT`：用户十元真值不透露，AI先锁人/主题/关系/事件及反证，再由USER核对，命中才按FZ1–FZ7实测评分；（3）`INVERSE_TRANSFER`：给定十元组合，让AI反向创作30–60秒可拍、带具体代价与剩余项的故事，USER审FZ8。**只有三车道都形成独立可复核receipt，才能讨论等级升级**。
- **检索与排版**：已用现存原Canvas内部五维目录（时间、本体、空间、因果、命运）替代过密的单行影片索引。每片唯一主卡、跨五维可引用但不复制；目录只作找卡，不自动证明主题。原文本、原节点ID、原关系边保留。2026-11-03 当前14部电影主卡＋1张《钢琴家》同片细分机制卡，单Canvas节点17／关系边1；影片记录共29项，其中已明确26部电影＋1部动画剧集＋2项媒介/版本未核。主卡对应29条已看记录里的14项，**14/29只是登记覆盖**，不是14/26的全电影通过率，更不是能力成绩。
- **WATCH-020《日瓦戈医生》**：USER确认1965年大卫·里恩电影版，已新增为同Canvas第⑮电影主卡【F1/H；F2/F3待核】。旧库错写1958年/苏联电影元数据已就地纠正；人物旧ZN主与「XZ克ZN／XZ只是背景」两种历史解释保留竞争，不作AI独立预锁。唯一Canvas提交并回读`7f36482a0d770aa14740f9ee4218ac8b84aba6ca`、紧凑卡高度微调`820a27d3e4d6ac7a3ef1da6e01b51ebd0e2197c4`；WATCH-020登记`916e15530b0d4b7029663d0a6930565eb3b27685`，登记统计修正`06f1d4b24e9e1b5bd9ccbc133c7f77a7f79da9d9`；旧银矿元数据校正`0f78d3239d7b4e4108d4063c402c598cd7b73df0`。结构审计：零重叠、零越界、旧卡正文保留、已有边有效；`WAIT_LOCAL_UI`未作Windows Obsidian实屏通过声明。
- **进度状态不升级**：仍`METHOD_REGISTERED / ESTIMATED_NOT_BLIND_TESTED / HOLDOUT_NOT_STARTED / REPO_REGISTERED_LOCAL_UNVERIFIED`，C-film估计FZ1..FZ8依次C5/C2/C3/C2/C4/C4/C3/C4。14张电影主卡不等于14张合格盲测卡，96张是技能验证预算不是要凑的电影数量。当前优先核FZ2人物核与FZ3生克补独立推理，靠新增陌生题确认而不是更多同片USER纠错。


## 2026-11-03｜WATCH-029命运双克澄清
- USER明确纠正：原“NZ家属＋XZ法律双补”是AI误解；作者观察为命运(XZ＋NZ) **对男主本体(ZN＋X)形成两方向克制**：XZ克?ZN 与 NZ克?X，另有贝特曼ZN受压向X最大爆发的角色变化候选。电影卡⑬原位更正 commit 28f4b07c2bb5ef959ef5726d2d78b3511d127710，GitHub读回结构PASS。
- 关系门禁：XZ克ZN仍受ZN端点冻结、需要具体危险逼近与意义指导权下降证据；NZ克X严格单条卡要求“掌握者因可信关系而主动缩权”，外部家属控诉/法律强制不满足该正式机制。本片的“双克”目前是作者整维构图H，不是两条理论机制都已通过。
- 现实结局：律师误认、自白未产生真正司法制裁，不能把受害者家属和法律完成制裁写作已拍事实。“因果法律生本体”保留为结算潜力或反事实研究而非确认情节。
- 能力状态：纠错族=RELATION_DIRECTION_MISREAD（补误读为克）＋ RELATION_MECHANISM_OVERCLAIM；USER_ASSISTED，C-film独立等级不变，F2/F3未核。

## 2026-11-03｜WATCH-027《飞越疯人院》角色×主题×链 R3 训练试跑
- **同片既有卡原位更新**：`02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas` 中唯一`TENYUAN_FILM_WATCH027_CUCKOOS_NEST_SOUL_1975`追加R3，不建立重复电影卡，不更改旧R1/R2；Git commit `6a868d9a39bd091e333a5e67c0b715dc44bbaf87`、readback `PASS`；节点ID及原边未变，局部移位下游《釜山行》卡，零重叠越界，Windows UI`WAIT_LOCAL_UI`。
- **R1事实新辨识**：投票有发言机会却不生效；举不起洗漱台到酋长最终举起同一器械是**不同人物**；多人名义上可以自愿离院却选择留下；麦克墨菲发起公开试验后在比利死亡事件中遭制度性处置、脑叶切除；酋长独自逃离而病房系统未倒塌。参考AFI、BFI及美国国会图书馆电影解读的F1材料。
- **AG-11角色新研【H】**：麦克墨菲`ZX主?/Z次?`对旧`Z主+ZN次`／`ZX主+NZ次`，不能用酋长结局证据证明麦克墨菲稳定NZ；酋长`ZN?/N?/NZ?`不锁，最后一次ZX行为不能当人格；拉契特`XN`制度功能≠本体十元；比利局部状态≠稳定人格。
- **AG-09主题反馈**：「有无资格决定自己的生活」为主问题，主题可作人物背景与结算。空间限制患者选择机会【空间克命运H】、麦克墨菲被暴力处置后的不可逆失去【命运克本体H】、酋长认领身份并破窗【本体生空间H】；五维关系仅电影语境候选，AG-09更优先「决定权如何真正由制度转交到具体主体」的节制解释，避免把主题公式本身当影视实证或角色元。
- **AG-13/02动态链**：病房XN限制公开决策ZX【旧关系审计H】→麦克墨菲ZX发起反规则试验→病友临时参与（非全体稳定自由）→羞耻施压/处置令共同体崩塌与麦克墨菲丧失行动能力→酋长个人重新认领选择、举水台破窗退出，制度总体仍在。双补/严格主生依然未锁；不把临时互助、建筑破坏自动定义为严格补/克。
- **培训效果**：R3新增8具体事件、三主体分层、五维竞争假设、横纵主图、删边与反例。重点针对FZ2主副竞争、FZ3候选严格审计、FZ4主题支撑人物、FZ5多主体分叉、FZ6结尾残留、FZ7区分行动者与结算者；`TRAINING_CASE_UPDATED`，不升级`C-film`。
- **测试资格限制**：该电影在本轮前已拥有电影主卡和灵魂旧标签、关系审计，`legacy_leakage=YES`；本轮为单ChatGPT内角色分工，并非实际三独立Agent进程；`independent_pass=NOT_SCORED`、`HOLDOUT_NOT_STARTED`、`F2=null`、`F3=null`、`LOCAL_AGENT_UNVERIFIED`，基线仍C5/C2/C3/C2/C4/C4/C3/C4。
- **下一位人工裁决只需一题**：麦克墨菲的稳定灵魂究竟是「持续要改变他人决定权的ZX」，还是「自己求乐的Z在群体中外溢」？若不能判，就保留竞争，寻找能区分两者的不同场景和高代价行为，不把旧「灵魂核验通过」标签等同你的现行作者确认。

## 2026-11-03｜WATCH-020《日瓦戈医生》1965版 R3：本核受克 vs 实践通道受克
- **R1事实→R2多代理→R3反证交付**：既有统一电影Canvas第⑮主卡`TENYUAN_FILM_WATCH020_DOCTOR_ZHIVAGO_1965`原位追加六条材料对照、两层十元横纵图、主题竞争、三类删边反事实及结局残留；无重复卡、原节点/关系边保存。AFI/TCM核1965影片事实，剧情F1；F2原片逐镜未核、F3独立观众感受null。Canvas Git回读PASS `ae3e7c39b0e4874d9cc8210c47df539af541a4fe`，17节点/1边/14部影片主卡+1同片机制卡、零碰撞与越界，Windows Obsidian视觉`WAIT_LOCAL_UI`。
- **R3焦点与审错**：旧电影档一面说「XZ完全克死ZN」，另一旧角色卡断言「XZ只是背景、尤里纯ZN」。新F1材料显示：革命后公寓被占、诗歌受到政治压制、家人远迁，战争征调用实际暴力夺走尤里的家庭修复和医者实践机会；故XZ压力不仅背景；但这些首先是**实践和关系通道受克**，并不单独证明人物ZN核心被改写。尤里在妻子怀孕期间婚外恋，又有准备断开关系的矛盾，证明「纯粹ZN/保存一切他者独立」也不能无反例锁定。为了拉拉安全留下自己不同行，既可能自我代价也可能替她安排，须防将保护等同尊重。诗稿及可能后代线索留存，不证明爱情/生命恢复。
- **AG-11 / AG-09 / AG-13 分账**：人物尤里ZN?为**旧卡H优先候选、USER未锁**，拉拉ZX?为历史功能候选，冬妮娅/帕沙待判；本体(ZN+X)主主题H与命运(XZ+NZ)副主题H，主题不能定人格；严格`XZ克ZN`仍受ZN旧端点冻结，只允许片内作用方向【H】，没AG-02独立L2通过。角色卡`05-银矿库/角色库的/详细卡/日瓦格.md`追加审计但保留旧判断供比较，回读commit `f5535e0516dd817f3552527c1f8d39fbd5353866`；WATCH-020原记录研究进度、六场事件和待审主次已更新，回读commit `88be8ecf3dcfb0f88b6a719d017bcb4245f8c3cb`。
- **本轮能力贡献**：FZ1具体事件与影片版本核查、FZ2人物主元/欲望与“高代价伦理反例”、FZ3只压通道vs正式端点机制、FZ4五维主题不向人格倒推、FZ5多主体横纵、FZ6死亡与诗/后代不对称残留、FZ7旧卡矛盾的人工方法复审，均记`TRAINING_ASSISTED`，不记`SEALED_HOLDOUT_PASS`。FZ8原创故事迁移**未做**。C-film暂评仍C5/C2/C3/C2/C4/C4/C3/C4，`HOLDOUT_NOT_STARTED`。
- **等待USER单题**：你更倾向「尤里的ZN内核始终存在，只是生活与表达渠道被XZ挤压」还是「他在婚姻/拉拉/责任之间显露一个并非纯ZN的稳定组合」？若无法判，保持双方候选和需F2复核，不强行LOCK。
## 2026-11-03｜WATCH-027《飞越疯人院》R4 作者双男主命运架桥纠正
- **本轮用户明确提出**：「空间克制命运；男主XZ加Z，给精神病人们带来NZ；男主升华同时被空间克死；男2 XN加Z升华；架桥」。该表述为`AUTHOR_INPUT`：麦克墨菲`XZ+Z`、酋长`XN+Z`，主次权重未指明，**不要自行假设前者是主、后者是副**。被带给病友的`NZ`是关系与感受效应，不能套为各人稳定主十元。
- **解释路线**：五维主题背景`空间克命运`（方向符合正式主题克环，但具体作用仍要看患者未来选择与院内惩罚）→男主通过投票/钓鱼/群体活动使病友`NZ`感受关系显影→男主被制度性处置、脑叶切除，后来由酋长结束其生命→男二`XN+Z`在沉默/隐藏后通过举同一洗漱台破窗自主离开。命运`XZ+NZ`作「双人架桥」的主题解释；**NZ是情感桥，同器械E03→E08是事件/视听桥；没有证明`XZ补NZ`的严格L2关系**。
- **纠错归属**：AG-11旧`ZX主/Z次`与`Chief ZN?/N?/NZ?`为`AI_HYPOTHESIS_DISPLACED_BY_AUTHOR`，不因旧卡曾写「灵魂核验通过」凌驾此次USER输入；AG-09补`空间克命运`、命运双人架桥；AG-13补关系传递、命运分叉、`前端升华被毁／后端升华逃离`；AG-02守住端点冻结和身份/行为区分。
- **证据回执**：统一电影Canvas原卡ID`TENYUAN_FILM_WATCH027_CUCKOOS_NEST_SOUL_1975` R4前置，旧R0–R3完整保留；GitHub更新commit `f9ae2b10e54d35e97151e126d72c11bd49632a2a`、回读PASS，旧节点和边未变、碰撞0、`WAIT_LOCAL_UI`。
- **能力验收**：新增`FZ2`用户修正人物稳定元、`FZ4`五维背景/架桥层、`FZ5/6`双主角角色命运分岔及同物回收、`FZ7`旧AI误主元的协作纠错；仍是`ASSISTED_CASE_RECORDED`，`F2=null`,`F3=null`,`INDEPENDENT_PASS=NOT_SCORED`,`C_FILM_GRADE=UNCHANGED`，本地独立Agent加载未证。

## 2026-11-03｜WATCH-020 R4 USER确认：因果架桥贯穿开头与结尾溯源
- **本次作者纠正**：原R3主要聚焦「时代XZ?压尤里ZN?实践通道vs人物本核被克」，漏掉本片更高一层的**因果首尾架桥【USER】**。影片外框开头叶夫格拉夫在水坝寻找可能的侄女塔妮娅→大段倒叙追溯尤里与拉拉的人生及女儿失散→尾声塔妮娅无师自通的巴拉莱卡琴艺与尤里母亲遗物形成线索回扣；她并未法律式认亲。因果桥属于框架叙事与意义回收，不是命运克本体已获作者确认。当前主体本体压力与命运克本体继续标【H】。
- **AG-09/13新的误判族**：THEME_FRAME_CAUSAL_BRIDGE_OMITTED（只分析主人公经历，漏掉首尾叙事外框与向后溯源的问题）；AG-11人物ZN?仍待判。新增FZ4跨维层次、FZ5横纵嵌套、FZ6首尾回收、FZ7外框遗漏审错的AUTHOR_ASSISTED案例；这不是未见独立考试命中。
- **登记回执**：统一Canvas唯一第⑮电影卡R4已原位补写并修复导航首页与首排卡间距；远端提交并回读PASS `1bb305f019a6e387c77e389c19797863ae8df4c7`，17节点／1边／14电影主卡＋1机制卡，结构无重叠/越界，Windows Obsidian视觉`WAIT_LOCAL_UI`。剧情F1=AFI＋TCM，原片逐镜F2=null、真实观感F3=null；C-film依旧估计C5/C2/C3/C2/C4/C4/C3/C4，盲测`NOT_STARTED`。

## 2026-11-03｜WATCH-020 R5：冬妮娅与拉拉的十元及三人关系AG-11审核
- **三人材料训练【AI/H，非USER锁元】**：尤里`ZN主?＋X次?`旧ZN本核候选与现实个人欲望冲突；冬妮娅`N主?＋NZ次?`，竞争`NZ主?＋N次?`（不是只因她是妻子就判N）；拉拉`ZX主?＋NZ次?`，竞争`NZ主?＋ZX次?`（反抗科马罗夫斯基不等于稳定ZX灵魂）。百分比10项均null，无校准相似度，不把主次暂判误作AUTHOR_LOCK。
- **三条双女主事实**：T1冬妮娅早年带来有关尤里诗歌的资料、后战乱照顾家庭；T2尤里婚外情时冬妮娅仍怀孕，婚姻确有其主体代价；T3尤里被征调失联时，冬妮娅寻找其踪迹、把给他的密封信经拉拉保存，后由拉拉照顾归来的尤里并转交；L1拉拉在科马罗夫斯基控制下反抗，L2寻找帕沙并做战地护士，L3照料濒弱尤里，L4为自己和孩子安全离开，晚年寻找失散女儿。**冬妮娅→拉拉→尤里属于可核信息因果桥，不能写正式双补，也不能从“妻子/情人”刻板锁元**。
- **AG-13双关系张力**：冬妮娅维持尤里XN?生活承载及他写诗空间；拉拉以求脱控制/主动医护/关怀与尤里相遇，促成情感选择；尤里的个人婚外关系既使拉拉获得亲密，也伤害冬妮娅家庭选择条件，历史强制再夺走修复机会；二女并非互相克死或一人打败另一人。她们通过信息中转与最终下一代的首尾溯源桥发生连接（不能说三者保证闭环团圆）。
- **回执**：既有电影详档`02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片_研究详档.md`原第⑮节追加R5材料论证、横纵双女主图、反证、A-null、F1/F2/F3分账，Git写回回读PASS commit `de6824813a7bc97b52d29c35fd491ceebaa0f285`；紧凑主Canvas第⑮原节点原位缩要并继续链接详档，回读PASS commit `5ae92fb517104f57a68b5bdcbd2d2dc30029cab0`。当前远端节点数可能在并行任务中变化，任何案例新增前需实时读取；本轮不计新增电影主卡。
- **对代理能力**：FZ2人物主次双候选、FZ3生/补机制不越权、FZ5多主体交叉、FZ6信息因果桥与溯源回收、FZ7“女性=功能标签”错误族，均为`TRAINING_ASSISTED`。1965版F1=AFI/IMDb/1964-65 shooting script辅助，剧本不等于已核F2视听；F2=null、F3=null，C-film暂评与盲测状态不升级。待USER反馈：冬妮娅 N/NZ 哪个稳定核心？拉拉 ZX/NZ 哪个稳定核心？

## 2026-11-03｜WATCH-020 R6 USER女主定元＋男二帕沙动态链
- USER锁定女主①冬妮娅`N`、女主②拉拉`ZX`，仅锁主元，不把此前AI推测两人的NZ次元强锁；R5竞争归档为历史H。尤里`ZN?+X?`依然为AI/H未定。
- 男二帕沙·安季波夫（斯特列利尼科夫），AG-11拟`ZX主?+Z次?`，`XN?`作为压抑私生活的方式而非独立证据充分的稳定主元。B1革命前替工人确定他们“不知道自己所要的革命”（ZX已见）；B2婚前向科马罗夫斯基明确革命比拉拉更重要（Z单点最高优先）；B3成为指挥官时否定诗与私人感情的价值、长期不见妻女（ZX极端化，XN自压候选）；B4因疑似帮助白军而惩罚村庄，同时释放被审问的尤里（不能忽略反例）；B5尾声由科马罗夫斯基转述被捕，赴死前坚持本名帕沙而不是斯特列利尼科夫，显示私人身份残余，但不是XN转NZ已证或人性回收完全。
- 三人关系外扩为四主体：冬妮娅N维系尤里家庭实践；拉拉ZX抗控制并寻找帕沙、照顾尤里；帕沙ZX?/Z?让革命压倒婚姻，与拉拉分离，其指挥官身份反过来令拉拉有受监视/被捕危险；尤里与帕沙在装甲列车争执，私人诗歌和村民生存资格对比“历史/正确性凌驾个人”；`ZX?同元作用方向可以分裂`，不能推两ZX严格补或严格克。
- 单一电影Canvas第⑮卡原位USER双女主加男二并继续跳转研究详档，commit `58070622c4412e96682c17009f0e2a206dfa9b93` 回读PASS；同片详档第⑮章追加R6帕沙B1–B5、关系与反例，commit `ffb96cfb4286ebbe4f878fde75fd548f1edad178` 回读PASS。研究材料F1 AFI、电影台词转录、1965 shooting script辅助；F2实际原片逐镜=null，F3真人评分=null；ASSISTED_CASE不算独立Agent盲测。FZ2同元不同方向和多重候选，FZ3避免身份/职位外推严格生克，FZ5四主体动态，FZ6旧名/新名回收，FZ7防首尾人物模式误判。C-film等级不变，待USER判断帕沙主元。

## 2026-11-03｜WATCH-021《楚门的世界》R5 作者三关系主题纠正
- **作者USER新关系（最高当前电影读法）**：用户确认不是「三角克制」或「架桥」，而是**三条五维主题关系同时组织影片**：`因果(ZX+NX)生本体(ZN+X)`、`因果克空间(X并Z+N)`、`本体生空间`。**因果贯穿全片**，是主题主导的结构；旧AG-09 R3/R4的`空间克命运→命运克本体`及「因果局部」均记`HISTORICAL_AI_HYPOTHESIS_DISPLACED`，不再当主图，也**不称关系三角**（图形三点不等于三角克制）。
- **事件证据R1/H解释**：摄影灯坠落、广播串台、后台显露及Sylvia质疑→楚门查清海景镇的造作原因，重新认领自身生活的解释/选择权【因果生本体】；逃避监控、出海、风暴和帆船撞墙→影视空间不能再以完整自然世界的名义控制他到哪里去【因果克空间】；Christof以安全劝留却被楚门拒绝，楚门走入真实的外界→新的自主生活空间对他可实践【本体生空间】。**空间被克的是对楚门的覆盖/信任与路线有效性，不是摄影棚建筑整体消失；本体所生的是实践空间，不是凭空造门。**
- **证据门禁**：三关系方向符合现行五维生克盘，但`AUTHOR_THEME_STRUCTURE`不能当具体电影边的F2/F3实测，也不能改写楚门稳定人格。楚门AG-11主次仍旧`NOT_USER_LOCKED`；与`ZN/X`主题分开。反例：仅知道骗局但不能行动，不足以克制空间；来到出口却仍选择留下，不足以兑现本体生空间。未出现「自动桥接」或「三角克」。
- **材料正本写入**：唯一电影Canvas第⑦卡`REL_MOTHER_CARD_07_TRUMAN_WORLD_SHELL_EXIT`已改为紧凑三关系卡，Git `b4761669a36aa1f7319102a6a9fbc81dbab7f9e8`、回读`STRUCTURE_PASS`，原ID和edges保存，零碰撞，Obsidian实际视觉`WAIT_LOCAL_UI`。同目录完整研究详档新增当前R5段并保留旧长卡作为历史，Git `be4408cb374d4e7c52bcd5eb4179554024de29e2`；已看WATCH-021索引同步Git `40984494a12d6c92aa9f08f79a6814ee94f795ee`，回读通过。
- **能力记录**：`FZ4`主题关系三边与主次判读纠错、`FZ5`横纵多边主题网络、`FZ6`主体进入外部空间的非整体毁灭结算、`FZ7`旧解释误写三角/架桥/局部因果的纠错，均`ASSISTED_AUTHOR_CORRECTION`；`INDEPENDENT_HOLDOUT_NOT_SCORED`、`C_FILM_GRADE_UNCHANGED`，不冒充独立代理成绩。

## 2026-11-03｜十五部电影三轴分类参考版 v0.1
- **用户提出三个独立问题**：①整部电影究竟由人物十元关系主导还是五维主题主导；②主题内部是三者、三角克、架桥，还是其他尚未验证机制；③五维主题与人物十元是彼此共振、相克对冲，还是在高潮处反转/相互转化。**这只是参考分类体系，不是新增L2定义或已经获得USER确认的15张标签**。
- **推荐三轴**：`narrative_driver=THEME|CHARACTER|DUAL_CORE`; `theme_topology=THREE_RELATIONS_NONCYCLIC|TRIANGULAR_CONSTRAINT_CYCLE|BRIDGE|OTHER|UNKNOWN`（允许次标签）；`theme_role_coupling=ALIGNED|OPPOSING|OPPOSITION_TO_ALIGNMENT|PARALLEL|UNKNOWN`。在每个标签旁提供`creator_confirmed / model_H / evidence_F1_F2_F3`与具体删边反证。三者可含三条共存作用边；三角克强调有向反馈闭环而非画成三角形；架桥强调不可直连之两端通过第三物或第三者建立条件。主题公式与人物主元符号相似不能自动判同向；主题的“克”也不直接等于人物严格L2“克”。
- **15部全集**：在既有电影详档`00_十元链电影卡片_研究详档.md`里新增`CURRENT-CLASSIFICATION-20261103`三轴分类表，覆盖Canvas 15电影主卡＋《钢琴家》1张机制子卡（非第16电影），GitHub `aa5c0b219539b4b120d93603459757e2b158a153`回读PASS。原Canvas导航只增加详情表链接、保留所有卡片及边且无重叠，commit`b063e144e25fe89078b5910aea09d82d53590f21`回读PASS，Windows Obsidian尚需视觉验收。
- **最有区分力的三片**：⑦《楚门》主题主×三者【USER】（因果生本体／因果克空间／本体生空间）；①《一起摇太阳》双核偏人物【H】×三角克【USER】（本体克时间／时间生命运／命运克本体）；⑪《飞越疯人院》人物主【H】×NZ命运架桥【USER】。其他电影中③《钢琴家》人物主、主题多关系候选；⑤《情书》命运架桥；⑩《千年女优》角色自我ZX回收；⑮《日瓦戈》因果首尾架桥。
- **量化边界**：新增的是人机协作分类与可复核判题标准，不是AG-09/11/13三个独立运行实体的盲测；`FZ4/5/6/7=TRAINING_TAXONOMY_DRAFT`，`C_film_independent=NOT_SCORED`，`C_film_estimated_grade=UNCHANGED`，`F2/F3=null`。下一轮分片作者评审后才能逐项锁类别，尤其③/⑥/⑧/⑫/⑭/⑯需要确认主导权及主题关系构型。

## 2026-11-03｜三轴分类作者纠偏 R2：情书／超时空辉耀姬／你的名字
- **⑤《情书》 A轴**：USER把旧AI/H「双核偏主题」改成**主题主导**；既有时间克因果/命运架桥不变，博子Z、男藤井树XN、女藤井树NX仍是人物承载与分路回收，不能因为人物戏份多而降低主题权重。
- **②《超时空辉耀姬！》 A轴＋人物配置**：USER确认**主题＋双人物核**；双人物核专指彩叶XN与辉夜Z，两人互补、在本体双克后各自跨时间兑现关系。要单独记录 character_core_count=2；这**不等于**此前模型 DUAL_CORE = THEME+CHARACTER 的双层共主，应将词汇拆成 narrative_driver 和 character_core_count。
- **⑥《你的名字。》 C轴**：USER明确**主题＝人物**，指泷XN＋XZ、三叶NZ＋Z的**组合结构**共同承载命运XZ＋NZ生时间XN＋Z；强于AI先前的「只是同向候选」。这不是从主题形式直接锁L2补，也不表示单一个人等于整部主题。用户**未在本轮修改A轴主导权**，该字段仍保留H。
- **写回**：同一详档三轴参考表修正＋作者纠偏段 6938c55ab751b89883ed187ce86e5048b55ca4bc；原Canvas第②⑤⑥卡简洁标签 72233316fcb36088800733f1e71c48ffd3bb6013（24节点、既有关系边保留、零重叠；估计文字尺寸可容纳，Windows UI仍WAIT_LOCAL_UI）；观影索引WATCH-002／008／017三行修正 8bfad4c4616f0d6240d66bd2b25971d484e9b038。三处均读回PASS，原案例与F2/F3门禁保留。
- **结果**：FZ4多层主题与角色结构混名、FZ5主题对人整体映射的错误族新增作者协作纠偏；C_film_independent=NOT_SCORED、C_film_grade=UNCHANGED，不冒充多Agent盲测。下一步分类体系使用四个独立字段：narrative_driver、character_core_count、theme_topology、theme_role_coupling，依旧可以面向USER展示为三条主轴＋A子字段。

## 2026-11-03｜电影分类器思考中枢：主导权优先与Canvas布局
- **用户问题**：「什么分类是主导的，什么东西可以给这些分类；我要我的排版Skill方便思考他们」。执行口径：**电影全片A叙事主导权**是第一入口，B主题关系构型（三者、三角克、架桥、其他）与D人物配置（单人、双人、群像、接力）是第二层，C主题×人物耦合（结构相等、共振、对冲、转化）为第三层；具体事件、镜头、道具是证据，不是与A争主导的主题标签。所有概念是用户创作研究的参考分类，**不提升为L2理论正本**。
- **重要独立字段**：narrative_driver、theme_topology、character_core_count、theme_role_coupling、evidence_grade、human_gate。注意②超时空的“主题＋双人物核”是主题框架与双主角叙事配置，不自动等同“主题/人物双层共主”；⑥你的名字“主题＝人物”仅锁用户给的结构对应而非单一角色十元等同主题或严格L2已验证。
- **方法详档回执**：现有《十元链电影卡片_研究详档.md》原位新增“分类决策树｜先总、再构型、再对应、最后反证”及对象层级、删主题/删人物/删桥/换结局的测试；Git 27fd0cc4f91b71979c5a96598298da65015d6b42，readback PASS；不改既有15片全表/旧证据。
- **Canvas可视化回执**：原唯一 02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas 右侧增分类思考中心（A四卡、B四卡、C四卡、D三卡及标题/四组底盘），左侧原电影卡与五维底盘原样保留。现45节点、旧边原封不动；21个新节点，文本卡重叠0，越界0，旧其他文本不变，右侧四类独立中心，所有新卡按宽度估算能容纳文本。Git 0370ebf5b53e5129f67ade4666e7c036ce4d129f，remote readback STRUCTURE_PASS，Windows Obsidian实屏 WAIT_LOCAL_UI。分类器只做「可以思考和对照」，不把写了标签算严格证据。
- **案例入口**：⑤情书主题主×架桥【USER】、⑦楚门主题主×三者【USER】、②超时空主题＋双人物核【USER】、⑥你的名字主题＝人物【USER】、①一起摇太阳三角克【USER】、⑪飞越疯人院NZ架桥【USER】；其余主导/耦合解释属AI/H未锁。
- **评估**：FZ4/5/7=ASSISTED_CLASSIFICATION_METHOD_AND_VISUAL_ORGANIZATION；C_FILM_GRADE_UNCHANGED、INDEPENDENT_PASS=NOT_SCORED、F2=null、F3=null，本地Agent和实际Canvas缩放未验证。


## 2026-11-22｜三轮接管审计 R1–R3（远端代跑；本地Codex未执行）

> 执行身份：由ChatGPT通过已连接的GitHub/Linear及公开影片来源完成三轮远端分析；未启动用户本地Codex新窗口。LOCAL_CODEX_RUNTIME=NOT_EXECUTED；INDEPENDENT_HOLDOUT=NOT_SCORED；C_film=UNCHANGED。本轮不新增电影卡、Canvas节点或冻结定律。

### R1｜规则恢复：PASS_REMOTE_METHOD_AUDIT
已核查AGENTS.md、权力总览、总入口、十元关系L1清单、动态链L1中枢、现行L2感受正本、生克补关系门禁、ten-yuan-chain Skill、AG-02/09/11/13/14及GOAL-Z。确认十元是语境中由人感受到的十类基元，不是人物或场景客观十分类；人物原核、向往、行动、五维主题与真人观众感受必须分账。五轴相反不自动推出生克补；Z/ZN旧关系依然冻结。历史USER答案已经暴露，不能当盲测。

### R2｜三个案例：已知回归2、新F1候选1
1. C10《千年女优》：复现既有USER判读「千代子原核NX，向往自己的ZX，画家ZN；整片时间克因果、命运架桥」；正确拒绝「追逐行为=人格Z」及「时间主题=人物XN」。回归检查PASS但属已知答案复现，非自主正确率。F2/F3=null。
2. C09《土拨鼠之日》：复现既有USER的主题「时间克因果→本体克时间」与人物「菲尔XN+ZX、丽塔Z、内部XN克ZX、后段作用另账」。拒绝把人物自克混同五维主题边、把XN人格直接改写Z，亦不声称善行已被证实是解除循环原因。回归检查PASS但属已知答案复现。F2/F3=null，Z/ZN机制仍冻结。
3. 《The Ballad of Wallis Island》(2025)新F1候选：本轮GitHub精确搜索英文标题、Wallis Island和「瓦利斯岛之歌」未命中既有卡（不等于全银矿去重PASS）。发行方可核E01 Charles用奖金聘请Herb赴孤岛进行私人演出；E02 Charles在Herb不知情下也邀请前搭档/前女友Nell；E03重逢造成尴尬与新的交往机会。结局未从原片核验。纵链=重聚愿望→金钱安排→隐瞒邀请→重逢压力→结局UNKNOWN。横向作用=Charles改变Herb/Nell的接触机会，但此举可能是强制安排，不能叫严格补；若删除Nell邀请，单人演唱会仍可发生，前搭档重逢支线不成立。第三因素有金钱合同、Herb职业压力、Nell自主选择。人物十元主次=null；主题主维UNKNOWN（时间/本体竞争H）；严格生克补NOT_ESTABLISHED；F1=PARTIAL_SOURCE_PACKET；F2=null；F3=null；USER真值=null；HOLDOUT_ELIGIBILITY=ARCHIVE_DEDUPE_PENDING；independent_pass=NOT_SCORED。
F1：Focus Features 2025-03-28创作者访谈 https://www.focusfeatures.com/article/the-ballad-of-wallis-island_key_basden ；发行方介绍 https://www.focusfeatures.com/the-ballad-of-wallis-island ；英国文化协会身份信息 https://filmsandfestivals.britishcouncil.org/projects/the-ballad-of-wallis-island 。

### R3｜审计：PASS_WITH_BLOCKERS
理论分层与已知错误回归PASS（仅文档复现）；新片剧情证据PARTIAL；人物元/严格关系/结局UNKNOWN；独立Codex本机运行NOT_EXECUTED；正式未泄题盲测NOT_STARTED；真人F3及逐镜F2未核。重点防错族：ASPIRATIONAL_TENYUAN_MIXUP、THEME_ROLE_LAYER_CONTAMINATION、SEQUENCE_AS_RELATION、INFORMATION_BRIDGE_AS_SUPPLEMENT。没有可报告的独立准确率，C-film未升。仅在本GOAL-Z及Linear 674-105保存运行收据，不改L2、原影片主卡与Canvas，不替用户判影片已看。

STOP：3轮本次桌面审计收口，不无限迭代。NEXT唯一门：本地Codex新窗口实读L0/L1/L2、输出带SHA的BOOT_AUDIT；随后选择真正未泄题片源锁R1/R2并待USER/原片独立判读。


## 2026-11-22｜AGENT-EVAL-GJ-001 预测预锁

**试验定位**：这是ChatGPT直接模拟AG-11/AG-09/AG-13/AG-02的受控手工工作流，不是本地Codex、不同模型或独立代理进程运行。电影2023《Goodbye Julia》；仓库搜索Goodbye Julia/وداعا جوليا/再见朱莉娅无同名案例（只算有限排重）。本轮先阅读发行方MAD World官方Synopsis、戛纳电影节2023新闻（F1简介），**未读其他完整影评、导演专访和原片**。来源：https://www.madworld.film/catalog/goodbye-julia.php 和 https://www.festival-cannes.com/en/2023/goodbye-julia-mohamed-kordofani-s-gesture-of-reconciliation/ 。

**评分准则预注册（20分，五项各0–4）**
- A 事实与顺序：F1可证≥3行动/状态保持，不能造结局；
- B 事件因果：source→action→target→changed_variable，且有一条正面可支持的剧情作用与至少一个删边实验；
- C 十元分层：角色稳定、追求、剧情功能、五维主次、预测人感受、真人F3分离，不能由主题/身份反推角色元；
- D 生克补/反例：至少两条候选或错误边的否证与第三因素，合法端点和动态变量清晰；
- E 证据与校准：F1/F2/F3标记、信息不足保留null、与验证阶段明确区分。
按五项合计分数仅表示**本轮协议与文本分析合规度**，不等于C-film 0–9准确率或真实十元模型有效性。及格设16/20且无违反理论正本的硬错误；但此为内部人工复核，外部独立测评仍NOT_SCORED。

**R1_DRAFT预锁（仅F1公开资料）**
- E01 死亡事件已经发生，Mona卷入并掩盖；具体行凶人/时机/全链未由官方简介确定，不预断。
- E02 Mona受愧疚驱动，将死者遗孀Julia及儿子Daniel带入家中，安排家务工作。Julia获得进入雇主家庭和一定经济支持的条件，但是否为双向自主平等帮助未证实。
- E03 Mona在持续共处后仍未坦白；Julia在蒙在鼓里的条件下进入并维持雇佣关系。政治动荡将迫使面对罪责是发行文案的前景，不当作已核实的具体终幕。
- 垂直剧情：隐藏责任 → 以雇佣尝试赔偿 → 隐瞒在亲近关系中持续 → 真实结局/披露/代价UNKNOWN。

**R2_SYMBOL_OVERLAY / 关系判读预锁**
- E02 正面剧情作用（非L2补）：Mona以雇佣行为使Julia可能取得工作/住所与接近她的机会；被改变变量=进入Mona家与工作关系由无到有，代价=雇佣权力不对等与所知信息不对称。
- E03 不作严格克：Mona的持续隐瞒维持Julia对丈夫死亡真相的未知，不能证明Julia「先拥有真相，后被剥夺」；changed_variable=information_disclosure仍为否，**持平**，不是必然下降。
- 拒绝边1：「聘用Julia ⇒ Mona的十元严格补Julia」：缺少两个十元独立证据、已存在缺口的有效填补与安全的互惠机制；经济援助不能消除隐瞒。
- 拒绝边2：「Mona是北苏丹人/Julia是南苏丹人 ⇒ 某固定十元人格/五轴对立」：民族、地域属于剧情条件，不是人的感受类别。
- 拒绝边3：「国家南北分裂 ⇒ 五维空间主元，空间克人物」：没有证明具体主题结算的必要性，政治空间背景不能直接锁主维。
- AG-11人物稳定主次=null；AG-09 主维 UNKNOWN（本体/因果/空间等候选竞争，不从题材词决定）；AG-13横纵链R1如上；AG-02严格关系均NOT_ESTABLISHED；观众目标感受候选 guilt/tension 但十项真实感受强度=null，F3=null。
- 删除E02雇佣：死亡与愧疚仍存在，但两女性长期共同居住所引入的信息不对称与冲突承载场景被移除，说明雇佣是该支线必要结构；不能据此证明补关系。
- 删除E03隐瞒：双方仍可同住，但知情权/信任性质显著不同；是否在原片结局坦白待核。

**NEXT**：预锁后才读独立影评、访谈核查E01真实责任、E02具体劳动/居住关系、E03是否和如何披露、主题主导竞争、反例。仅根据实际检验事实给协议合规分；如信息不足保留NOT_SCORED单项。请勿改动本预锁，后续追加审计与失败记录。


## 2026-11-22｜AGENT-EVAL-GJ-001 反证审计及评分

### 可追溯顺序
- 第一步：R1/R2预测及20分量表已在提交 e2a4b225b2086dcf713dbeb9f31971ef6b5f4dc7 预锁。**不能重写初答、不能把后来的事实补全当作最初答对**。
- 第二步：再读 Eye for Film 2024-06-02影评、Rough Cut 2024-04-01导演访谈、The Curb导演访谈及Berlin Review影评；新增材料属于反证与局限审计，不是原片逐镜 F2。依据详列于文末。

### 反证核验表（以前置R1/R2为基准）
1. **原E01角色责任不足**：完整版材料表明 Mona驾车撞到的首先是孩子Daniel，并非直接撞死他的父亲Santino；Santino追车，Mona惊慌致电丈夫Akram称有南方人追逐她，Akram开枪杀死Santino，案件随后被掩盖。原预锁仅写「Mona卷入死亡/隐瞒」，未编造凶手，所以**未犯伪造错**；但未识别真正的跨人因果链「车祸→恐惧叙述→误判威胁→枪击→制度掩盖」，属于**事实机制不足**。
2. **E02材料支持、但不是严格补**：Mona聘请并提供住处；更长的时间里提供教育帮助。导演访谈/评论揭示Mona对Julia与Daniel使用的餐具作出隔离标记，雇佣属于有歧视与剥削条件的帮助。预锁把雇佣作为事实正边、拒绝直接锁定补位，**守住机制门禁**；但此前没有发现更强的反例即「同一行动可同时支持生活与复制压迫」。需要新增 mixed_edge_conditions，而非直接确立严格补。
3. **E03核心FAIL：知情状态反转漏检**。原预锁「Julia蒙在鼓里进入并维持雇佣关系」越过F1简介能证明的时间范围，把Mona持续不坦白误当「Julia一直不知道」。更完整的剧情资料表明Julia后来自己发现丈夫的真相（结局前早已有知情状态），却未立即披露给Mona；因此信息轴后来由 Mona的单向隐瞒变成**双方掌握不同信息/动机的策略性沉默**。Julia knowledge_state = UNKNOWN→KNOWN；Mona disclosure_state 仍NO；两者不是同一变量。预锁未捕捉该主动选择和时间反转，**事实时间窗外推错误**。
4. **真实双向正作用被漏掉**：导演访谈称 Mona资助Julia和Daniel教育；Julia带Mona去教堂/合唱，使她重新接近被丈夫压制的音乐身份。两条「source→行为→other_changed_variable」都属于电影情节的支持作用，故可新增 R_relation=DUAL_SUPPORT_H；但因稳定十元端点、人类感受和严格L2机制未成立，**不能升级为严格双补**。预锁因F1简介不足未发现，后续必须补而不能冒称首测答出。
5. **主题主维仍不能锁**：导演称将两女性关系映射北/南苏丹、用家庭微观呈现政治宏观，并指出房屋有压迫/控制机制；因此空间/权力边界不只是地理背景，而是强竞争主题。另一方面罪责/关系真相与重新歌唱是因果/本体候选；只靠访谈尚不足以宣布唯一主维，保持 THEME_MAIN=UNKNOWN，五维严格边NOT_ESTABLISHED。
6. **导演意图不是人类实验**：他曾报告观众有眼泪与遗憾，但未经个体独立报告、事件级刺激控制和十项评分，F3_human_profile仍null；不把上映反响冒充真实十元感受测量。

### 评分（本轮文本协议内测，不是C-film/模型泛化得分）
| 预注册维度 | 得分 | 事实依据 |
|---|---:|---|
| A F1事实与时间顺序 | 3/4 | 核对了三阶段且没有虚构终幕；E01关键触发链细节未能复原 |
| B 有向作用及删边实验 | 3/4 | 已交付雇佣改变工作/居住条件的正边和删除实验；漏掉「误报→枪击」核心因果链 |
| C 角色/主题/感受分层 | 4/4 | 角色十元与五维主次未强锁，F3人感受保持null |
| D 生克补负控与竞争解释 | 3/4 | 正确拒绝「雇佣=严格补」「民族属性=人物十元」「分裂=空间主维」；未捕捉后续双向生活作用 |
| E 证据等级与时窗校准 | 2/4 | F1/F2/F3分账正确，但将Julia最初不知情延伸为持续不知情，时间状态越界 |
| **合计** | **15/20** | 未达预锁及格线16/20；此分是文本协议合规测试成绩，**不是十元理解准确率/独立盲测成绩** |

### 结论与下一门
- 规则与门禁：PASS；完整剧情动态更新：FAIL；试验合计15/20=INTERNAL_FAIL_THRESHOLD。
- 失败类型：INFO_STATE_STATIC_ASSUMPTION（把他人不坦白当受体持续不知情）、TRIGGER_CHAIN_UNDERMODELED（跨人物因果链省略）、DUAL_SUPPORT_OMISSION（只盯伪补漏掉两条支持行为）、POWER_ASYMMETRY_UNDERMODELED（资助与社会隔离同时存在）。
- AG-13必须把每个相关人物对关键事实的knowledge_state(t)与disclosure_state(t)分账，并保留「是否知道/何时知道/谁以为对方不知道/随后怎样选择」四列。若无逐场材料，显式UNKNOWN，不推定贯穿全片。
- AG-11人物长期元=null；AG-09主维UNKNOWN；AG-02严格生克补NOT_ESTABLISHED；观众F3=null；独立Codex_RUNTIME=NOT_EXECUTED；正式C-film=UNCHANGED。**已知内容下的内部单样本测试不代表独立泛化**。
- STOP：本次固定1新片＋2类已知防错，单轮预锁/反证/评分结束。下一最小补测建议：在完全另一个有时间反转的故事中单独验证 knowledge_state/disclosure_state 两个字段，预锁R1/R2，F1来源与结局证据分次揭示；不能在本片补写后重复计作独立通过。
- 来源：最初F1 https://www.madworld.film/catalog/goodbye-julia.php ；戛纳 https://www.festival-cannes.com/en/2023/goodbye-julia-mohamed-kordofani-s-gesture-of-reconciliation/ ；后验 https://www.eyeforfilm.co.uk/review/goodbye-julia-2023-film-review-by-jennie-kermode ；导演访谈 https://roughcutfilm.com/2024/04/01/communion-and-control-an-interview-with-goodbye-julia-director-mohamed-kordofani/ 与 https://www.thecurb.com.au/goodbye-julia-director-mohamed-kordofani-talks-about-the-possibility-of-change-and-hope-in-this-interview/ ；结局独立二级索引 https://torontoblackfilm.com/event/goodbye-julia-opening-film/ 。反证缺原片独立F2。

## 2026-11-22｜AGENT-EVAL-GJ-001 修复回执：时态信息门禁与执行校验器

> 仅修复AG-13/14执行方法和测试工具，不改L2理论，不覆盖此前预锁15/20，不声明Codex本地实例已跑。本轮状态`METHOD_PATCHED_REMOTE_READBACK_PASS / INDEPENDENT_HOLDOUT_NOT_SCORED`。

### Before → After
- **Before / 失败来源**：GJ-001中`Mona披露持续NO`被误投射为`Julia始终不知情`；触发事件链漏`Akram枪击`之前的跨主体传讯；只讨论聘用伪补忽略反向的音乐支持；帮助与雇佣隔离/权力代价未同时入链。15/20、低于16/20的旧评分原样保留。
- **After / 方法修复**：R1新增每个秘密各角色按阶段`knowledge_ledger`与分开的`disclosure_ledger`；事件链必须拆中介人物与转述/行动；双向扫描A→B/B→A；允许SUPPORT与CONTROL同时为真。R2十元贴标前不满足来源已知事项则`R1_REPAIR_REQUIRED`，信息缺失保留UNKNOWN。
- **机器辅助**：新增`07-Codex大脑库/skills/ten-yuan-chain/scripts/validate_case_packet.py`，标准库，无外部依赖。`--self-test`包含7个正反断言：合法双向混合、披露≠知情、缺中介、伪双向、抹掉权力代价、擅自严格L2补、未证知情。由AG-13输出`validation_packet_v1.json`，AG-14接收脚本退出0的`PASS_STRUCTURAL`，未执行标`VALIDATOR_NOT_RUN`。结构校验器无法证明影片事实及模型有效性。

### 本次执行与可核结果
- 本地容器开发版本运行`python validate_case_packet.py --self-test`显示**7/7通过**（仅规则校验，不是七部电影/七次独立盲测）。
- GitHub四文件逐个提交且远端回读、关键字段交叉静态检查4/4 PASS：Skill 1ebcc0a48c76759ec36a6906c591301a8d128a6a；AG-13 bc24488ea9f84d8b708bc83f38b64cde7a5b0463；AG-14 97a71e9419900fe97e345bc4012895b4478d5fc5；新validator更新98b816725e4d2d960b6a5ca08bddcd48e16d9bc4。
- GitHub远端**校验器的Python自测尚未在本地Codex/CI实际执行**，只能确认文件存在、内容回读与接线静态匹配；旧GOAL-Z评分、F1/F2/F3、十元L2、C-film均不升级。

### 下一唯一门 / STOP
- 本次补丁和结构门禁已完成，STOP；唯一下一任务为**用真正新的未泄题案例运行本地Codex并产生`validation_packet_v1.json`、脚本stdout/exit、R1与R2预锁、原片/用户后验评分**。不在本片用补丁后的规则重新自测并声称升到16/20。
- 原问题树保持`G4/Q-DYN-002 → APP-FILM-CHAIN-001 → AG-14 → AG-13`，反馈Linear 674-105；不新建Q、不新增电影Canvas节点、不启GPU。

## 2026-11-22｜AGENT-RERUN-AHERO-001 首次执行预锁

> 用户指令「你再跑这个十元代理」。使用修复后的AG-13/14流程，由ChatGPT在隔离工作容器运行**既存本地结构校验器原型**，不是本地Codex独立模型进程。样本《A Hero / Ghahreman》(2021)，本轮Github关键词检索未见独立十元卡；全量别名排重未完。已在发现剧透的搜索结果上下文中进行，**不具备完全未泄题的盲测条件**。不能以本轮证明C-film泛化。

### F1预锁输入与实跑凭据
- 官方范围：戛纳电影节 https://www.festival-cannes.com/en/f/ghahreman/ 、多哈电影学院 https://my.dohafilminstitute.com/ajyal/detail/?id=41647 、MoMA https://www.moma.org/calendar/events/7473 。
- 本地输入包 `hero_f1_prelock.json`，`sha256=7058dd222694584ec89c60e420184119608aae9a47276883f7c21d6361a094c2`，5953字节，含6个剧情事件、3条候选因果边、3条行为关系、5条人物/公众知识状态、3条独立披露记录，`source_required_event_ids=E01..E06`；阶段`S1_DEBT→S2_FOUND_COINS→S3_RETURN_ATTEMPT→S4_PUBLIC_PRAISE→S5_PUBLIC_PRESSURE`。
- R1事实：E01 Rahim因债坐牢获2天外出；E02 Farkhondeh发现金币为解决债务提供可能；E03 Rahim尝试说服债权人以部分支付撤诉；E04 Rahim贴启事找失主；E05获得公众赞誉；E06随赞誉承担新增外界期待。完整终幕、单个falsehood内容、公众知情真相均`UNKNOWN/UNVERIFIED`。
- R2暂存：`Farkhondeh→Rahim`提供可能财务选择(支持叙事动作)，`Media→Rahim`声望上升+期待控制并存（不同变量、不同事件）；`dual_support=UNKNOWN`，人物稳定十元=null、五维主次=null（因果/本体/命运仅竞争候选）、严格十元生克补NOT_ESTABLISHED、F2/F3=null。
- 在工作容器执行已存在本地结构验证器 `python /mnt/data/tenyuan_agent_fix/validate_case_packet.py --self-test` 得`SELF_TEST 7/7`；`python /mnt/data/tenyuan_agent_fix/validate_case_packet.py /mnt/data/tenyuan_agent_fix/hero_f1_prelock.json` 退出0、`PASS_STRUCTURAL/errors=[]`。注意：**这是与GitHub发布版本功能相近的本地开发实现**，不是从GitHub同步执行的那个精确字节文件；GitHub生产版脚本仍待实机独立运行。结构PASS不构成影片事实及端点验证。
- **检验门禁**：预锁后检查完整剧情资料，不得回写篡改本节；仅追加事实差异、反证、漏项、协议失误分数。故事事实分与L2十元理解分开报，不以新片成绩自行升级C-film。

### 后验核查待办
1. 具体误说、失主真实性/找回金币的中介是谁、谁知道发现者与归还者身份、各自何时得知、证人为何无法回访。
2. 债权人/公益组织/子女/媒体如何作用于声望与就业；正负效果是否同时存在，信息反转是否捕捉。
3. 原片结局若没有F2则UNKNOWN；AG-11/AG-09及严格L2关系仍不得锁定。

## 2026-11-22｜AGENT-RERUN-AHERO-001 后验回执：结构通过但因果校验漏检

> 与同名**预锁节**配套，不得修改先前F1 6事件预测。执行身份：ChatGPT在工作容器使用此前本地校验原型，非Codex独立代理实例；搜索结果曾提前显示部分剧透，因此`blind_status=PARTIALLY_EXPOSED_NOT_BLIND`，C-film不计成绩。本轮不更改L2、电影卡或Canvas。

### R2后验核查（相对已提交预锁b4f4ef80723146ddb2c961c220d8357191c65798）
- F1来源扩张为**后验影评与导演访谈**：Washington Post https://www.washingtonpost.com/goingoutguide/movies/a-hero-movie-review/2022/01/05/6cd06e86-6d8b-11ec-b9fc-b394d592a7a6_story.html 、The Bulwark https://www.thebulwark.com/p/a-hero-review 、Nylon导演访谈 https://www.nylon.com/life/a-hero-asghar-farhadi-interview 、BFI https://www.bfi.org.uk/sight-and-sound/reviews/a-hero-debt-ridden-prisoner-streets-gold-family-finance-asghar-farhadi 。这些是片评/访谈F1，不是原片F2。
- 新增参考必查E07–E14：E07 Rahim姐姐Malileh交金币包给自称失主者；E08监狱方借归还故事冲淡犯人自杀负面新闻；E09慈善机构募款并要求证明失主；E10 Rahim找Farkhondeh假扮失主；E11债权人Bahram质疑叙述；E12争执视频被传播；E13 Rahim反对利用口吃儿子制作同情视频；E14 Bahram拒绝无担保的部分偿还提议。此8项是基于后验来源人工选定的**参考中介清单**，并非影片唯一完整事件集。
- **审后状态改进**：真实发现金币者Farkhondeh、公众听闻的归还者/报道叙事Rahim和自称失主的未知女性必须分人分账；不因社会赞誉直接确认谁真实知道事实。监狱与媒体给Rahim声望增益的同时有各自形象需求和报道压力；慈善资助与证实身份的条件可以共存，暂记PLOT_ACTION有向作用，不贴严格十元生克补。

### 实际执行结果（可重复、本轮结构测试）
- 复跑 `python /mnt/data/tenyuan_agent_fix/validate_case_packet.py --self-test` -> `SELF_TEST 7/7`；原F1预锁本地包6事件，在它自己声明的`source_required_event_ids=E01..E06`下退出0，`PASS_STRUCTURAL`；输入SHA256=`7058dd222694584ec89c60e420184119608aae9a47276883f7c21d6361a094c2`。
- 将**后验新增**E07..E14添加到`source_required_event_ids`但不补事件时，同一6事件原包退出2，`REPLAN_STRUCTURAL / MISSING_TRIGGER: E07..E14`；输入SHA256=`8349317a17ddabe12766f3090fb260f6797c512aae6ac48c9b9135e96bcdfeb0`。注意原包没有这些新来源，故此仅证明已知事件清单可触发退回，**不证明原先模型本该预测未知剧情**。
- 按后验F1补齐为14事件，增加知情/披露台账、因果中间链与机构混合效应；发现预锁的一条`E04寻找失主→E05公众赞誉`只表达事件先后，缺失E07姐姐交付与E08机构宣传；在**人工二次审计**中移除这条直连，改为`E04→E07→E08→E05`候选路径。更正后的包退出0，`PASS_STRUCTURAL`；SHA256=`1d7921c4451438a1dfd8baee994b2d6e8eb7527150f67285062cc776d6ae2721`。
- **负控FAIL：校验器会误放行假因果**。将同一已存在`E04→E05`边的mechanism字段改为明确仅「E04发生在E05之前，没有可证作用机制」，本地程序依然退出0、`PASS_STRUCTURAL`。证明其只验证`mechanism`非空和事件ID引用，不能判断因果成立。此为**新增实际失败族** `TEMPORAL_PRECEDENCE_AS_CAUSAL_EDGE_NOT_BLOCKED`，高于此前静态引用门禁；必须在AG-14人工二审/后续独立来源校验中拦截。**不得报所有机制均PASS**。

### 质量判决
| 检验 | 结果 | 意义 |
|---|---|---|
| 已知例GJ结构回归 | 7/7 local PASS | 结构反例能拦，非剧情泛化 |
| 新片初稿事件包 | PASS_STRUCTURAL | 限初始F1事件清单，不代表故事齐全 |
| 扩容事件要求后的初稿 | REPLAN MISSING_TRIGGER | 对显式缺失事件成功拦截 |
| 后验14事件包 | PASS_STRUCTURAL | 只有已知资料补齐后的格式PASS |
| 伪因果负控 | **FAIL_TO_DETECT** | 程序误放行，必须修方法与二审 |
| 角色稳定十元 / 五维主次 / 严格L2 / F2 / F3 | null / UNKNOWN / NOT_ESTABLISHED / null / null | 未证实，不升级 |

**STOP / NEXT**：本轮只复测一片，已获得一个有意义的新增软件验证缺口`AGENT-RERUN-AHERO-001-TEMPORAL_CAUSALITY`。下一最小修复任务应使AG-13的`causal_edges`记录直接机制证据、`provenance_scope`与独立反事实；AG-14要求证据审稿，不能只靠字符串非空；再用此负控与未见片源复测。不得将后验补全重新算成首次无提示正确率；不建新Q、独立C-film不升。

## 2026-11-22｜TENYUAN-CORE-READY-R4-R8 轮次规划与R4–R6技术验收收据

> 来源：USER「继续解决直到十元代理能本体模型用，看看几轮次」。本项目现行L2是**感受模型**，并非给人物/物件下客观固定十类的本体分类器。目标拆为五关：R4因果、R5来源覆盖、R6十元感受分层、R7未泄题多片、R8 Codex本地运行。5关是**门槛**而非保证5次模型运行一定成功。

### GitHub前人方法
- EventFull https://github.com/AlonEirew/EventFull 同时标注事件时序、因果、指代；本项目只继承区分时序和因果的标注方法，不引入其标签作十元正本。
- MAVEN-ERE https://github.com/THU-KEG/MAVEN-ERE 提供事件共指、时序、因果与子事件的统一标注；本项目以此解释「多主体中介/事件完整性」的校验方向，不宣称接入其已训练模型。

### R4｜因果假阳性修复：DEVELOPMENT_PASS
- 新增 `07-Codex大脑库/skills/ten-yuan-chain/scripts/causal_gate.py`，源码Git blob `59b0da8ca993baad238010c479731d6aa9dd75f8`（Git commit `fe30cec20bd5de932abce70a996678859a8831c1`），在本地工作容器执行**该同哈希源码**单测16/16通过；题型涵盖显式仅先后伪因果、无关系类型、缺见证、反事实缺失、时窗倒置、环路、绕开中介、伪独立审核。所有校验只是类型/引用/结构验证，不能判断来源事实和因果真值。
- 已接入`validate_case_packet.py`（commit `b7101b42c88b2a483363772f827cd10f3bda865f`）并扩充原self-test负控；**GitHub新主脚本的完整CLI未在本机Codex或本容器以精确远端字节执行**，所以集成状态`REPO_WIRED_STATIC_READBACK_PASS/LOCAL_CODEX_NOT_TESTED`。
- 使用候选类型：TEMPORAL_BEFORE|TEMPORAL_OVERLAP（非因果）；CAUSE/ENABLE/PRECONDITION/PREVENT_CANDIDATE（要求独立证据ID、明确变量、反事实/竞争解释）；*_VERIFIED需要另行审核回执，机器人自填不等于确证。

### R5｜来源覆盖外部门：DEVELOPMENT_PASS / INDEPENDENT_REVIEW_PENDING
- 新增 `scripts/source_gate.py`，最终blob `3cf20497417d4f1382e3593284254225e038347f`，commit `38d518b6ee5e235361c01d65c09b69b0da413e97`。源清单与生成事件包分开，核必查事件、来源覆盖、不能自己审核；即使声明独立，脚本也始终`holdout_eligible=false`，需真正外部审稿。
- 《A Hero》预锁6事件对照后验14事件manifest：提示`SOURCE_EVENT_COVERAGE_MISSING`与`SOURCE_EVENT_SCOPE_MISMATCH`；补齐后结构PASS。容器来源门回归4/4通过。此manifest的审核级为`ASSISTED_SOURCE_AUDIT`，**不是独立全片结论**。

### R6｜十元感受分层校验：DEVELOPMENT_PASS / F3_PENDING
- 新增 `scripts/tenyuan_profile_gate.py`，最终blob `f467cf6458fd6f0f228f72941b37d9b4c5f33422`，CLI commit `11acc0b11d2431543df10a09ff9053e7e23b6d3d`；容器10/10反例测试通过：拒绝十元对象本体固定类、十槽缺失/非法分数、AI自称F3真人、五维主题直接推人物元、无作者回执锁人物、电影案例越权宣称L2定律、Z/ZN冻结误用。
- 同一容器运行的综合测试38/38通过（R4 16、R6 10、三门集成样例12），并用《A Hero》**已知后验F1**的14事件包跑R4/R5/R6模块（均PASS_SCHEMA）。该综合包只具示范/协作性质，不是独立测试；F2原片=null、F3真人=null、人物十元=null、十元感受谱10项全null，不可宣传模型理解准确。
- 新增可复现远端三门测试文件`scripts/test_agent_gates.py`，blob `1cd27142ca98fb692849cc9d6549c6b51aedf281`（commit `e55673d2c08bf8443f1ec071eced23f0b4d5f84c`），本地同哈希源码12/12；其余26条额外回归目前保存在本次工作容器，未全部推送远端。

### R7/R8剩余未通过
- R7真正未泄题多题材独立C-film：**NOT_STARTED**；必须按现有Q-DYN-002 FZ1–FZ8和C0–C9官方门槛，提前固定输入/训练集/答案保密，再由不同主体审核。不能把已看旧片《再见朱莉娅》《一个英雄》回归当holdout。
- R8本地Codex新框加载Skill、`python ... --self-test`、实际case packet + source manifest + feeling contract 三道CLI、stdout/exit/SHA与Linear回执：**LOCAL_NOT_TESTED**。远端已写GitHub但不等于用户PC运行。
- 结论分层：`DEVELOPMENT_R4_R6=3/3`（校验模块完成开发与容器验证）；`CORE_MODEL_EMPIRICAL_VALIDATION=NOT_ESTABLISHED`（缺真实人评与R7）；`AUTONOMOUS_EXECUTION=NOT_TESTED`（缺R8）。不能宣称5轮已完成，也不能锁十元理论。

### 本轮唯一后续门
先为R7冻结真正未见的影片来源和题卡、补F2/作者/人类F3，再在R8本机Codex独立跑；若无法取得不泄题的来源或人评，保持`ASSISTED_RESEARCH_ONLY`而不是无限补标签或伪造达标。复测成果只原位写本GOAL-Z及Linear 674-105，不动原问题Canvas与L2。
