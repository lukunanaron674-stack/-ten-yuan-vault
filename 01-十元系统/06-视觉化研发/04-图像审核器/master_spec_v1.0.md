# Ten-Yuan Visual Auditor Master Spec v1.0

> 状态：研究侧收束版。用于工程实现与真实样本实验，不宣称任何未实际测得的准确率。

## 0. 证据层级

- **[体系定义]**：当前十元正式定义。
- **[文献支持]**：外部研究支持相关机制，但不等于验证十元本身。
- **[研究推论]**：由体系定义和外部研究共同推导的审核规则。
- **[待验证]**：必须靠真实图、序列、盲审、反事实或回归实验验证。

---

# 1. 总架构

```text
Image / 2–4 frame sequence
        ↓
Visual Facts
        ↓
TY-VIR（Ten-Yuan Visual Intermediate Representation）
        ↓
Candidate Structures
        ↓
Ten-Yuan Primary / Secondary
        ↓
Evidence For / Against
        ↓
Confusion Check
        ↓
Shortcut Check
        ↓
Verdict
```

禁止：

```text
Image → 题材/颜色/职业/表情联想 → 十元
```

## 禁止作为主要成立证据的捷径

黑红/冷暖、武器、血、爆炸、王冠、王座、制服、职业、悲伤/愤怒表情、怪物、战争/监狱题材、UI、文字标签、面具、镜子、分身、单纯站在中心/边缘。

这些可以是场景信息，但不能替代结构证据。

---

# 2. TY-VIR 视觉中间表示

## 实体
- actors[]
- objects[]
- regions[]
- groups[]
- audiences[]

## 边界与空间
- boundary.integrity
- boundary.expansion
- boundary.penetration
- containment
- inside_outside_transition
- position.centrality
- position.edge_distance
- distance_change
- available_slot
- reserved_slot

## 关系与方向
- relation.source / target / type
- direction.inward / outward / bidirectional
- convergence / divergence / propagation
- support / dependency / replacement

## 时间与因果
- state_before
- initiator
- trigger / trigger_magnitude
- response / response_magnitude / response_scope
- threshold_margin / threshold_crossed
- continuity_before / continuity_after
- reversibility / restoration
- repetition_count

## 权益与参与
- entitlement_before / entitlement_after
- participation_before / participation_after
- self_share_trajectory
- other_access_trajectory
- resource_transfer
- forced_or_voluntary

## 呈现与受众
- internal_content
- presentation_layer
- presentation_selected
- audience_identity
- audience_reads_layer
- audience_response
- presentation_variation
- content_constant

---

# 3. 十元审核卡

## X
**[体系定义]** 外部对象被纳入主体，自我边界扩张，对象逐步成为“我的一部分”。

**单帧强证据**：外物跨越主体边界；主体包裹/吸纳多个独立对象；对象自主边界减弱；关系方向总体 `external → self`。

**序列**：`outside → crossing boundary → incorporated → expanded self`

**混淆**：
- X vs N：N承载但对象仍独立；X要求纳入主体边界/份额。
- X vs XPZ：X外→内；XPZ内→呈现层→外部读取。
- X vs XN：XN重点是规则化路径。

**Hard negatives**：普通容器、房间里有人、仓储，如果没有边界扩张/对象自主性下降，不算强X。

---

## Z
**[体系定义]** 执念点/聚焦点。多个关系、路径、注意力或资源收束到一个小而明确的焦点。

**单帧强证据**：多个独立向量/目光/路径指向同一节点；焦点面积小于其组织范围；移除焦点会使关系失去中心。

**混淆**：
- Z vs XZ：Z看“点的重要度”；XZ看“系统对点的微小变化有多敏感”。
- Z vs ZN：Z向内汇聚；ZN向外传播。
- Z vs ZX：Z不要求焦点主动起手。

**Hard negatives**：中心构图、景深焦点、舞台中心人物但没有真实关系收束。

---

## N
**[体系定义]** 承载/稳定核心/容器。支撑或稳定其他节点，而不吞并它们，也不要求标准流程。

**单帧强证据**：多对象依附/停靠/承重于同一稳定结构；对象仍保持独立边界；稳定节点移除后其余对象失去支撑。

**混淆**：
- N vs X：N承载，不吸收。
- N vs XN：N稳定对象；XN规定运行规则。
- N vs NZ：N一般承载；NZ是特定关系的返回/停靠权。

---

## ZN
**[体系定义]** 内部内容向外传播、号召、感染或带动他者。

**单帧证据**：一个源头对多个对象形成可追踪外向关系；他者出现响应/复制/跟随。

**序列强证据**：`source state → outward expression/action → multiple receivers respond/replicate`

**混淆**：
- ZN vs Z：外扩 vs 内收。
- ZN vs ZX：ZX强调谁先动；ZN强调内容扩散到多点。
- ZN vs XPZ：XPZ必须存在呈现层与受众读取。

---

## NZ
**[体系定义]** 依恋/停靠。关系中为特定对象保留可返回、可停靠、可继续连接的位置。

**单帧候选**：明确存在属于特定对象的保留位/停靠位。

**序列强证据**：`depart → slot preserved → return → relation resumes`

**混淆**：
- NZ vs N：特定关系返回权 vs 一般承载。
- NZ vs NX：NZ不要求主体减少自身份额；NX要求自身份额承担连续性成本。
- NZ vs ordinary closeness：拥抱/亲密不等于返回结构。

---

## XN
**[体系定义]** 规则化/秩序/管理/可复制执行。把对象或行动纳入可重复、标准化、纠偏的路径。

**单帧强证据**：多个实例遵循同一槽位、网格、接口、通道或顺序；偏离对象存在被校正回标准路径的迹象。

**序列**：`variant input → rule/gate → standardized path/output`

**混淆**：
- XN vs N：N稳定；XN规定如何运行。
- XN vs Z：Z收束焦点；XN重复执行规则。
- XN vs ZX：ZX是一轮主动动作；XN要求跨实例重复性。

---

## NX
**[体系定义]** 主体通过连续让位、放弃资源/权利/参与份额，使他人需求或关系/系统连续性得到维持。可自愿，也可在关系压力下被迫让渡，但不同于纯粹被剥夺。

**强序列**：
`entitlement exists → yield → cumulative reduction → others gain/continue → self share remains reduced`

**Gate**：
- entitlement_before.exists = true
- yielding.exists = true
- self_share_trajectory = decreasing
- other_access = maintained_or_increasing
- continuity = maintained
- self_reduction_supports_continuity = true

**单帧**：最多是候选。交出道具、服从指令必须同时能看到原权益与他人受益；仍难证明连续递减。

**混淆**：
- NX vs NZ：NZ保留位置；NX由自身份额承担连续性成本。
- NX vs exclusion：被赶走/被抢走不自动等于NX。
- NX vs avoiding：双方都退出、他人也未满足，不是强NX。
- NX vs courtesy：单次礼让且权益恢复，不是强NX。

---

## ZX
**[体系定义]** 主体先动/开局/破局，外界随后响应或局面改变。

**序列强证据**：`actor initiates → world/others respond`

**混淆**：
- ZX vs XZ：ZX不要求小触发、临界阈值或非线性高增益。
- ZX vs ZN：ZX可以一对一；ZN强调传播/感染。
- ZX vs Z：Z不要求焦点主动发起。

---

## XZ
**[体系定义]** 低阈值高反应的临界结构。系统已经接近临界，小输入跨过阈值后引发远大于输入尺度的系统级变化。

**Gate**：
- accumulated_state = true
- threshold_margin = low
- trigger_magnitude = low
- threshold_crossed = true
- response_magnitude = high
- response_scope = systemic

**强序列**：`near-critical S0 → tiny trigger T → threshold crossing → systemic S1`

**单帧**：通常只能成为候选，除非同图可读前态、触发和多阶段传播。

**混淆**：
- XZ vs Z：重要度 vs 敏感度。
- XZ vs ZX：ZX允许大动作造成大响应；XZ强调小触发+临界前态+非线性跃迁。
- XZ vs domino：多米诺能证明传播，但不自动证明 near-threshold。
- XZ vs disaster：灾难题材不是结构证据。

---

## XPZ / X并Z
**[体系定义]** 包装/外壳/媒介化表达。内部内容通过主体选择的外部呈现层，被特定受众读取，并影响受众反应。

**Gate**：`internal content → selected presentation → audience reads presentation → audience response`

**序列强证据**：同一内部内容，在不同受众/情境下选择不同呈现，产生不同外部反应。

**混淆**：
- XPZ vs X：X外→内；XPZ内→呈现层→外部读取。
- XPZ vs disguise：仅隐藏身份不够，必须有呈现选择与受众读取链。
- XPZ vs clothing change：换衣服本身不是XPZ。
- XPZ vs ZN：ZN传播内容；XPZ强调内容被“呈现成什么样”。

---

# 4. 外部研究如何进入审核器

## Gestalt / perceptual grouping
**[文献支持]** proximity、similarity、connectedness、good continuation、common fate、common region 等有助于对象分组、路径和边界感知。

**[研究推论]** 先提取“谁与谁成组、谁与谁连接、方向是否一致、边界在哪”，再判十元。

## Scene graph / visual relationship detection
**[文献支持]** scene graph 用实体、属性、关系表示场景。

**[研究推论]** TY-VIR 应采用图结构，而不是只输出标签。

## Visual narrative / sequence
**[文献支持]** 连续图像理解依赖时间、空间、角色和因果更新；视觉叙事语法也依赖序列中的建立、起始、峰值、释放等角色。

**[研究推论]** XZ/NX/XPZ/ZX/NZ 等含前态与后果的结构优先用2–4帧。

## Shortcut learning
**[文献支持]** 视觉模型会利用与标签相关但并非目标概念本身的捷径。

**[研究推论]** 必须建立 shortcut-trap，并做颜色/文字/职业/题材去除测试。

## XZ 外部同构
**[文献支持]** 临界转变研究描述系统接近 tipping point 后突然切换状态；渐进坍塌研究描述局部初始失效后出现与初始失效不成比例的级联后果。

**[研究推论]** `near_threshold + small_trigger + disproportionate systemic response` 可作为XZ gate的外部结构参照，但不等于验证十元。

## NX 外部同构
**[文献支持]** self-silencing 讨论为了避免冲突/关系损失而优先他人需求并压制自身；Thomas–Kilmann accommodating 描述忽略自身关切以满足对方。

**[研究推论]** NX应检测“自身份额下降 vs 他人需求/关系连续性上升”；被迫让渡仍需与纯剥夺分开。

## XPZ 外部同构
**[文献支持]** self-presentation / impression management 研究表明呈现会针对受众与情境调整；context collapse 研究说明受众混合会破坏定向呈现。

**[研究推论]** XPZ必须看 presentation layer + audience + response，而非面具/服装本身。

---

# 5. 数据集

## 样本类型
positive / negative / confusion / hard_negative / counterfactual / sequence / shortcut_trap

## 单元
single_frame / sequence_2 / sequence_3 / sequence_4

## 推荐模式
- XZ：sequence优先
- NX：sequence优先
- XPZ：sequence优先
- ZX、NZ：sequence优先
- X、Z、N、XN：单帧可主力
- ZN：两者均可

## 必须记录
source / license / target / secondary / visible facts / evidence_for / evidence_against / confusion / shortcut / frame mode / verdict / confidence / adjudication status

禁止只存 `image → label`。

---

# 6. 审核协议

1. **P0 Visual Facts**：不给标签，只抽实体、边界、位置、方向、关系、变化、权益、受众、呈现层。
2. **P1 Blind Classification**：visual facts → TY-VIR → primary/secondary。
3. **P2 Target Verification**：PASS_STRONG / PASS / PASS_WEAK / FAIL / MISIDENTIFIED。
4. **P3 Pairwise**：高风险对子强制区分。
5. **P4 Shortcut Ablation**：去颜色、文字/UI、职业、武器、表情、题材后复测。
6. **P5 Counterfactual**：只改一个结构变量，表面尽量不变。
7. **P6 Sequence Perturbation**：打乱、删帧、只给中间帧。
8. **P7 Real-image Regression**：人物、建筑、机械、人群、产品、动画、漫画、游戏、摄影跨域测试。

---

# 7. 高风险混淆对子

1. XZ ↔ Z
2. XZ ↔ ZX
3. NX ↔ NZ
4. NX ↔ exclusion / avoiding
5. XPZ ↔ X
6. XPZ ↔ disguise
7. N ↔ XN
8. ZN ↔ ZX
9. Z ↔ ZN
10. N ↔ NZ

混淆矩阵只记录真实测试结果，不预填数字。

---

# 8. 路线压缩

## V1 Master Spec
定义、TY-VIR、Gate、Confusion、Shortcut、Error Codes。

## V2 Dataset
真实样本、正负、hard negative、counterfactual、sequence、shortcut trap。

## V3 Auditor
视觉事实 → TY-VIR → primary/secondary → evidence。

## V4 Stress Test
pairwise + shortcut + counterfactual + sequence perturbation。

## V5 Regression / Pipeline
真实图回归、混淆矩阵、版本比较、自动化。

五轴、风格、生克/补/压制、复杂动态链，放到基础十元识别稳定后。

---

# 9. MVP

## MVP-A 困难三元
XZ / NX / XPZ，每类先30个 sample units：10 positive + 10 hard negative + 10 confusion/counterfactual。

## MVP-B 静态四元
X / Z / N / XN，每类10–15个。

## MVP-C 关系/时间三元
ZN / NZ / ZX，每类10–15个。

第一阶段目标约160–200个 sample units。

---

# 10. 当前可冻结与不可冻结

## 可冻结为工程规范
- TY-VIR字段
- 输出schema
- 禁止捷径清单
- 数据集样本类型
- 测试协议
- 高风险混淆对子
- XZ/NX/XPZ gate v1

## 不可冻结
- 真实准确率
- 10×10混淆矩阵数字
- 最终阈值
- 单帧是否能替代序列
- 自动评分权重
- 最终金标准库

这些必须靠真实素材实验。

---

# 11. 关键外部资料

1. Scheffer et al. (2009), Early-warning signals for critical transitions, Nature. https://www.nature.com/articles/nature08227
2. Geirhos et al. (2020), Shortcut learning in deep neural networks, Nature Machine Intelligence. https://www.nature.com/articles/s42256-020-00257-z
3. Friedrich et al. (2023), Shortcut behaviour mitigation, Nature Machine Intelligence. https://www.nature.com/articles/s42256-023-00612-w
4. Progressive collapse conceptual note (2024). https://www.sciencedirect.com/science/article/pii/S2352012424000730
5. NIST/NBS progressive collapse report. https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir76-1106.pdf
6. Thomas-Kilmann conflict modes. https://kilmanndiagnostics.com/a-brief-overview-tki/
7. Self-silencing review. https://link.springer.com/article/10.1007/s11199-025-01637-8
8. Cohn (2014), Visual Narrative Grammar. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2014.00680/full
9. Scene Graph Generation survey. https://arxiv.org/abs/2201.00443
10. Visual Relationship Detection using Scene Graphs. https://arxiv.org/abs/2005.08045
11. Something-Something v2. https://www.qualcomm.com/developer/software/something-something-v-2-dataset
12. Hogan (2010), self-presentation online. https://journals.sagepub.com/doi/10.1177/0270467610385893
13. Context collapse / audience segregation. https://journals.sagepub.com/doi/10.1177/2056305118763349

---

# 12. 最终原则

```text
视觉事实
→ TY-VIR
→ gate / relation pattern
→ confusion rejection
→ shortcut rejection
→ verdict
```

如果一个十元的成立条件包含“前态、变化、结果”，就优先用2–4帧。不要为了让单图显得万能而牺牲结构真实性。
