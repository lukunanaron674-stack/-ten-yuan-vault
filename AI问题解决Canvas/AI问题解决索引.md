# AI 问题解决索引

> 本文件是 `AI问题解决总图_L1.canvas` 的内容索引。Canvas 只负责一级导航与定位；具体研究内容全部进入 Markdown，不继续扩建多层 Canvas。

## 0. 总目标
建立 AI Problem–Solution–Unknown Graph：定位 AI 问题主干，记录已有知识、解决方法、解决程度、剩余 GAP 与基础 UNKNOWN，并标记与当前研究的关系。

## 1. 一级问题域

### A｜能力：AI 能做到什么？
- 感知、理解、推理、学习、生成、规划、记忆、Agent、多模态、泛化。
- 当前关注：生成与 Agent 能力作为上游支撑。
- 研究记录：待补。

### B｜可靠性：AI 做出来的东西可靠吗？
- 正确性、鲁棒性、幻觉、不确定性、可解释性、可验证性、长任务可靠性。
- 当前定位：旁系/上游依赖，按需回查。

### C｜控制与对齐：AI 是否按照人的目标行动？
- 意图理解、指令遵循、可控生成、变量解耦、约束保持、偏好对齐、人类控制权、自主程度。
- 当前定位：核心研究主干。
- 重点问题：创作意图保持、视觉变量控制、多约束冲突、非目标内容保持。
- 研究记录：待补。

### D｜交互与协作：人和 AI 怎么一起工作？
- Human-AI Interaction、人机分工、Human-in-the-loop、Agent 协作、反馈学习、信任、创作主体性。
- 当前定位：核心研究主干。
- 研究记录：待补。

### E｜评价：怎么知道 AI 到底好不好？
- Benchmark、自动评价、人类评价、主观质量、AI Judge、评价有效性。
- 当前定位：核心研究主干。
- 研究记录：待补。

### F｜生产与工程：AI 怎么真正运行起来？
- 成本、延迟、可复现、Agent 基础设施、数据/资产管理、部署、长流程自动化、规模化。
- 当前定位：**研究主线已收束，转入实施验证。**
- F-INDUSTRY：DONE / STOP。
- F-PRODUCTION-v1：R1–R6 DONE / STOP。
- 冻结核心：**状态不丢 / 失败能续 / 结果能验**。
- F-WORKFLOW：Codex-native Workflow，Codex 是工作流执行中枢，不另设平行 Supervisor。
- F-COMPUTE：Windows RTX 3070 笔记本当前 ACTIVE；RTX 4080 魔改32GB 为 PENDING_INTEGRATION，实际接入并通过小型图像闭环验证后才可切 ACTIVE；4090 Cloud RETIRED。
- F-ASSET：Local Files + Linear Attachment 为 P0；B2/COS 非 P0，只有现有链路实测不足时才升级。
- Minimum Infrastructure Principle：L0 复用现有能力 → L1 低成本拼接 → L2 新基础设施。
- NEXT：实施验收，而非继续扩研。优先验证 Linear/Canvas → Codex → Windows 本地 → ComfyUI/图片任务 → 产物 → Linear → ChatGPT 审核。
### G｜安全
- 恶意使用、网络安全、越权、欺骗、隐私、对抗攻击、高风险自主系统。
- 当前定位：总图保留，不主动展开；出现 DEPENDS-ON 时回查。

### H｜社会与制度
- 就业、教育、不平等、信息生态、法律责任、版权、作者性、治理监管。
- 当前关注：作者性与版权。
- 研究记录：待补。

### I｜基础资源
- 算力、数据、芯片、能源、水、模型效率、基础设施可获得性。
- 当前定位：总图保留，不主动展开。

### J｜AI 基础未知
- 智能、内部表征、涌现、推理机制、泛化、世界模型、长期学习、Agent 能力边界。
- 当前定位：不主动深挖；作为其他问题的上游 UNKNOWN。

## 2. 关系类型
- `IS-A`：问题分类关系。
- `DEPENDS-ON`：某问题受另一个更基础问题限制。
- `SOLVED-BY`：已有方法/路线解决该问题。
- `EVIDENCED-BY`：论文、实验、Benchmark 或实践证据。

## 3. 解决状态
- `SOLVED`：在限定条件下已有较成熟方案。
- `PARTIAL`：已有有效路线，但存在明显失败条件。
- `OPEN`：仍缺稳定解决方案。
- `UNKNOWN`：机制或目标本身仍不清楚。

## 4. UNKNOWN 类型
- U0 Fundamental Unknown：基础未知。
- U1 Mechanism Unknown：机制未知。
- U2 Method Gap：知道问题，但方法不足。
- U3 Engineering Gap：方法存在，工程落地不足。
- U4 Evaluation Gap：缺可靠评价方式。
- U5 Social / Normative Unknown：社会尚未决定“什么才算正确”。

## 5. 当前研究范围
优先研究：C 控制与对齐、D 人机协作、E 评价、F 生产工程。
上游支撑：A 能力。
社会边界：H 作者性/版权。
B/G/I/J 保留为总图坐标和 DEPENDS-ON 上游，不主动展开。

## 6. 下一阶段：已有知识扫描
每个相关主干统一记录：
1. 问题是什么；
2. 别人已经研究了什么；
3. 代表解决路线；
4. 已经解决到什么条件；
5. 仍然失败在哪里；
6. GAP 属于 U0–U5 哪类；
7. 是否值得继续进入我们的研究。

预计 4 轮：知识索引 → 问题/方法映射 → 解决度审计 → Known/Solution/Gap 冻结。

## 7. R1｜已有知识扫描（2026-10-04）

> 规则：本轮只登记外部已经存在的问题与知识，不提出我们的五行/十元解法，不把个人项目问题反推成学界问题。

### A｜生成与 Agent 能力（上游支撑）
**外部已经形成的知识块**
- 基础模型能力评测：语言、图像、视频、推理、多模态、工具使用、计算机操作。
- Agent 核心能力：规划、工具调用、记忆、自我反思、多步任务执行。
- Agent 评价正在从“单题答对”转向动态环境、真实任务、长时程任务。

**目前已经做到**
- Agent 已能在结构化计算机任务上完成相当比例的真实操作；Stanford AI Index 2026 汇总的 OSWorld 最佳成绩约 66.3%，接近但仍低于其报告的人类基线 72.35%。
- 已存在较完整的 Agent benchmark / evaluation taxonomy，可分别评价规划、工具、记忆、任务完成、可靠性与安全。

**仍未解决**
- 长链任务的可靠性仍明显弱于短任务；单步能力提升不能自动转化为长期稳定执行。
- 真实环境的动态性、成本、权限、错误恢复、跨任务泛化仍是主要 GAP。

**初判**：PARTIAL｜主要 UNKNOWN：U2 Method Gap + U3 Engineering Gap + U4 Evaluation Gap。

### C｜控制与对齐（核心）
**外部已经形成的知识块**
- controllable generation：用文本、布局、深度、姿态、参考图等条件控制生成。
- disentangled control：把身份、姿态、布局、属性、风格等变量拆开控制。
- image editing / iterative editing：修改目标属性，同时尽量保持未编辑区域与主体身份。
- multi-condition control：同时满足多个条件，并处理条件之间的干扰。

**目前已经做到**
- 局部编辑、参考主体保持、布局/姿态/属性控制已经有大量有效方法。
- 2025 年的研究仍在推进层级化多条件控制、语义解耦、背景保持、多轮编辑一致性，说明这些能力已从“能不能做”进入“怎样做得更精确、更稳定”。

**仍未解决**
- 精确修改一个变量而完全不扰动其他变量仍不稳定。
- 多条件同时输入时存在条件误解、冲突和控制强度难以分配的问题。
- 多轮修改会积累误差；“用户真实意图”与可显式输入的控制条件之间仍有缺口。

**初判**：PARTIAL｜主要 UNKNOWN：U1 Mechanism Unknown + U2 Method Gap + U4 Evaluation Gap。

### D｜人机协作（核心）
**外部已经形成的知识块**
- Human-in-the-loop / human oversight。
- human-AI teaming：人的判断与 AI 输出如何组合。
- Agent 自主程度、人工接管、权限边界。
- 人类反馈、持续监控、协作结果记录。

**目前已经做到**
- 风险管理框架已经明确要求把“AI能力测试”和“操作者能力测试”区分开，并持续监控 human-GAI configuration 的结果。
- NIST 已把 human-AI teaming、human oversight 作为需要持续形成指导的方法问题，而不是假设“加个人审核按钮”就结束。

**仍未解决**
- 不同任务中“人什么时候介入、AI什么时候自主”的最优边界没有统一答案。
- 人类监督可能产生自动化偏见、过度信任、监督疲劳；监督本身不等于有效控制。
- 长期协作中人的反馈怎样稳定变成系统知识，仍缺通用方案。

**初判**：PARTIAL / OPEN｜主要 UNKNOWN：U2 Method Gap + U4 Evaluation Gap + U5 Social/Normative Unknown。

### E｜评价（核心）
**外部已经形成的知识块**
- Benchmark、自动指标、人评、LLM/AI Judge、混合评价。
- TEVV：Testing, Evaluation, Verification, Validation。
- Agent 评价开始同时区分“评价什么”和“怎么评价”。

**目前已经做到**
- 已有大量任务级 benchmark，且 Agent 评价已形成规划、工具、记忆、任务完成、用户体验等多维框架。
- NIST 2026 TEVV-Athlon 进一步把评价提升到可适配不同 AI 系统和真实使用场景的系统框架。

**仍未解决**
- Benchmark 很快饱和，分数高不等于真实生产可靠。
- 长时程、动态环境、主观质量、真实用户目标仍难被单一指标覆盖。
- AI Judge 自身偏差、可重复性和与人类判断的一致程度仍需审计。

**初判**：PARTIAL｜主要 UNKNOWN：U4 Evaluation Gap。

### F｜生产工程（核心）
**外部已经形成的知识块**
- 模型/Agent 部署、成本、延迟、权限、日志、监控、回滚。
- 长流程 orchestration、工具调用、状态管理、资产/数据 provenance。
- 真实生产强调 reliability guarantee，而不仅是 benchmark pass rate。

**目前已经做到**
- 已有成熟的模型服务、工具调用、工作流编排、监控与风险管理组件，可以搭建实际生产系统。
- Agent 已从“回答问题”进入执行计算机任务和多工具任务阶段。

**仍未解决**
- 长流程错误会累积，局部高成功率不等于端到端可靠。
- 真实生产需要处理权限、状态恢复、外部系统变化、成本和人工升级，这些仍比标准 benchmark 难得多。
- “能自动化”与“值得全自动化”之间仍需要任务级决策。

**初判**：PARTIAL｜主要 UNKNOWN：U3 Engineering Gap + U4 Evaluation Gap。

### H｜作者性与版权（社会边界）
**外部已经形成的知识块**
- AI 输出的 copyrightability / human authorship。
- 训练数据与版权作品使用。
- 数字复制、人格/肖像复制。
- 人机共同创作中人的创造性贡献如何认定。

**目前已经做到**
- 美国版权局已明确：AI 作为辅助工具不会自动排除版权；关键仍是人是否决定了足够的表达性元素。单纯提供 prompt 本身不足以当然构成人类作者性。
- AI训练、数字复制、AI输出版权已经分别进入正式政策研究和报告体系。

**仍未解决**
- 不同司法辖区的规则并不完全统一。
- 训练数据许可、补偿、风格模仿、共同创作贡献边界仍存在法律和政策争议。
- “技术上可追踪人的控制”怎样转化成法律上可认定的作者贡献，仍值得继续观察。

**初判**：PARTIAL｜主要 UNKNOWN：U5 Social/Normative Unknown。

### R1 收束
R1 没发现需要推翻一级 Canvas 的新主干。六个相关域都有成熟外部知识，但没有一个可以简单标记为“整体 SOLVED”。

下一轮 R2 不再继续堆论文名，而建立：
`具体问题节点 → 主流方法族 → 解决条件 → 失败条件 → 证据` 的映射表。

## 8. R2｜问题 × 方法映射

| 主干 | Solution Family | 已解决边界 | 主要失败条件 |
|---|---|---|---|
| A 生成 / Agent | Planning、Tool-use、Memory、Reflection、Multi-agent | 短中程结构化任务与工具调用 | 长链误差、动态环境、失败恢复 |
| C 控制与对齐 | Conditioning、Reference、Disentanglement、Preference Alignment、Constraint Control | 单条件/有限多条件、局部编辑、主体保持 | 隐性意图、多约束冲突、变量串扰、多轮漂移 |
| D 人机协作 | HITL、Mixed-initiative、Human-AI Teaming、Adaptive Agency | 人审 + AI执行基本循环 | 动态自主权、监督疲劳、反馈积累 |
| E 评价 | Benchmark、人评、自动指标、AI Judge、TEVV | 静态明确任务 | 长时程、主观创作、真实生产外部效度 |
| F 生产工程 | Workflow、Orchestration、Logging、Versioning、Monitoring | 工具链与编排组件 | 端到端长期可靠、自恢复、跨工具状态 |
| H 作者性/版权 | Human Authorship、Contribution Record、Provenance | AI辅助不自动排除人类作者性 | 共创贡献边界、训练许可、跨法域差异 |

重点 GAP：`C-INTENT` 隐性创作意图表示；`C-CONSTRAINT` 多约束优先级；`D-AGENCY` 动态自主权；`E-REAL-EVAL` 真实有效性评价；`F-LONGRUN` 长流程可靠生产。

## 9. R3｜解决度审计

| 主干 | 状态 | 导航解决度 | GAP 类型 |
|---|---|---:|---|
| A | PARTIAL | 5/10 | U2 + U3 + U4 |
| C | PARTIAL → OPEN | 4/10 | U1 + U2 + U4 |
| D | OPEN / PARTIAL | 3/10 | U2 + U4 + U5 |
| E | PARTIAL → OPEN | 4/10 | U4 |
| F | PARTIAL | 5/10 | U3 + U4 |
| H | PARTIAL | 4/10 | U5 |

## 10. R4｜KNOWN / SOLUTION / GAP 冻结 v1.0

### A｜生成与 Agent 能力
- **KNOWN**：规划、工具、记忆、反思、多步执行已形成稳定研究对象。
- **SOLUTION**：Planning / Tool-use / Memory / Reflection / Multi-agent。
- **BOUNDARY**：局部高能力不等于端到端长链可靠。
- **GAP**：长时程可靠性、错误恢复、跨环境泛化。
- **状态**：PARTIAL。

### C｜控制与对齐
- **KNOWN**：显式条件、参考、姿态、布局、属性可以有效控制；解耦、局部编辑、非目标保持已有大量路线。
- **SOLUTION**：Conditioning / Reference Guidance / Disentanglement / Preference Alignment / Constraint Control。
- **BOUNDARY**：复杂控制会出现条件干扰、变量串扰、冲突、多轮漂移；显式条件不等于完整创作意图。
- **GAP**：`C-INTENT` 隐性创作意图机器表示；`C-CONSTRAINT` 多约束冲突与优先级；`C-PRESERVE` 非目标变量严格保持。
- **状态**：PARTIAL → OPEN。

### D｜人机协作
- **KNOWN**：HITL、人工监督、混合主动协作已形成成熟问题框架；人工审核本身不保证有效控制。
- **SOLUTION**：HITL / Human Oversight / Mixed Initiative / Adaptive Agency / escalation。
- **BOUNDARY**：不同任务、风险、创作阶段需要不同自主程度。
- **GAP**：`D-AGENCY` 动态自主权；`D-FEEDBACK` 反馈长期积累；`D-OVERSIGHT` 有效监督。
- **状态**：OPEN / PARTIAL。

### E｜评价
- **KNOWN**：Benchmark、人评、自动指标、AI Judge、TEVV 可测量部分能力；分数不等于真实生产能力。
- **SOLUTION**：Task Benchmark / Human Evaluation / Automated Metrics / AI Judge / Process Evaluation / TEVV。
- **BOUNDARY**：长链、动态环境、主观创作和真实用户目标难被单指标覆盖。
- **GAP**：`E-REAL-EVAL` 真实生产外部效度；`E-CREATIVE-EVAL` 创作意图/审美/控制评价；`E-LONG-EVAL` 长时程过程+结果评价。
- **状态**：PARTIAL → OPEN。

### F｜生产工程
- **KNOWN**：服务、工具调用、编排、日志、监控、版本、回滚组件较成熟；难点是长期端到端可靠。
- **SOLUTION**：Orchestration / State Management / Logging / Monitoring / Provenance / Rollback / Human Escalation。
- **BOUNDARY**：多步骤成功率累积下降；外部系统变化破坏静态工作流。
- **GAP**：`F-LONGRUN` 长流程可靠；`F-RECOVERY` 自动恢复；`F-STATE` 跨工具状态；`F-AUTO-BOUNDARY` 自动化边界。
- **状态**：PARTIAL。

### H｜作者性与版权
- **KNOWN**：AI辅助与纯AI生成并非同一作者性情形；人的创造性控制、选择和表达性贡献是重要判断对象。
- **SOLUTION**：Human-authorship analysis / contribution record / provenance / policy guidance。
- **BOUNDARY**：技术可记录贡献，不等于法律已统一认定贡献标准。
- **GAP**：`H-CONTRIBUTION` 人机共创贡献；`H-PROVENANCE` 贡献证据；`H-RIGHTS` 训练许可/补偿/风格模仿。
- **状态**：PARTIAL。

## 11. 第一阶段冻结结论

### 当前纵向研究候选
1. **C-INTENT｜隐性创作意图的机器表示**
2. **C-CONSTRAINT｜多约束解耦与优先级**
3. **D-AGENCY｜Human ↔ Agent 动态自主权**
4. **E-REAL-EVAL｜创作型 / 长链系统真实评价**
5. **F-LONGRUN｜长流程 Agent 可靠生产**

`H-AUTHORSHIP` 保留为社会边界节点。

### 因果主链
`J 基础表征未知 / A 能力`
→ `C 控制与意图`
→ `D 人机协作`
→ `E 评价反馈`
→ `F 生产化`

H 作者性/权利横跨 C–F。

### 与现有研究的映射
- 五行 / 十元：仅作为 `C-INTENT / C-CONSTRAINT` 的候选解决路线，不作为问题本身。
- Agent等级、USER_REVIEW、自动推进：映射 `D-AGENCY + F-LONGRUN`。
- 图像审核器、盲测：映射 `E-REAL-EVAL / E-CREATIVE-EVAL`。
- 视觉一致性：降为 C/F 下的具体控制与生产问题。
- 论文：从已确认 OPEN / PARTIAL 节点领取问题，不反过来定义 AI 总问题树。

### STOP
六个相关主干已有 KNOWN / SOLUTION / BOUNDARY / GAP；GAP 已分类；5个纵向候选已确定。一级 Canvas 只做导航。

**PHASE-1 DONE / STOP。**


## 12. C-INTENT｜纵向研究登记

**主问题**：人的隐性创作意图如何转化为机器可表示、可执行、可验证的结构？

**定位**：C｜控制与对齐 → Intent Representation / Intent Fidelity  
**状态**：OPEN｜主要 GAP：U2 Method Gap；上游受 U1 Mechanism Unknown 影响。

**计划：5轮**
1. R1：定义“创作意图”的问题边界与层级。
2. R2：扫描 HCI、设计学、认知、可控生成等已有知识。
3. R3：建立现有意图表示方法谱系及解决边界。
4. R4：审计剩余 GAP，定位意图损失发生在哪一层。
5. R5：才允许五行/十元作为候选 Solution 进入，与已有方法比较并设计实验。

**规则**：R1–R4 不用五行/十元倒推问题；先建立外部知识基线。
**当前进度**：R1 START。
## 12｜F 工业与生产：行业结论与我们的研究优先级（2026-10-04）

### 12.1 一级冻结结论

**核心结构：确定性工程外壳 + 非确定性智能核心。**

行业已经证明：生产 Agent 的关键不只是提升模型能力，而是用状态、工作流、验证、权限、追踪、恢复和调度约束非确定性执行。当前生产实践仍偏保守：长链可靠性和正确性验证仍是主要瓶颈。

一级因果链：

`模型/Agent 非确定性 → 长链错误累积 → 必须外置状态 → 必须 checkpoint / durable execution → 恢复带来重复执行风险 → 必须幂等与副作用控制 → 跨系统部分成功 → Saga / 补偿事务 → “运行成功”仍不等于“结果正确” → Verifier / Completion Evidence / Eval → 权限与长期轨迹风险 → Governance → 规模扩大 → Backpressure / Scheduling / Cost`。

### 12.2 五个一级生产问题

| 节点 | 问题 | 行业主要答案 | 2026 判断 |
|---|---|---|---|
| F1 Reliability | 能否长期持续正确 | 短链化、检查点、验证器、人工升级、horizon-aware eval | **PARTIAL / 核心开放** |
| F2 Durability | 中断后能否继续 | Durable execution、持久状态、checkpoint、resume、retry | **较成熟** |
| F3 Verifiability | 怎么证明真的完成且正确 | completion contract、外部证据、过程+结果 eval、回归测试 | **PARTIAL / 高价值** |
| F4 Controllability | 能否只做允许的动作 | least privilege、sandbox、tool policy、approval、trajectory monitoring | **快速发展** |
| F5 Scalability | 放大后能否保持成本/吞吐/质量 | queue、并发、backpressure、routing、capacity/cost control | **PARTIAL** |

### 12.3 行业已经较明确的答案

1. **Memory ≠ State ≠ Artifact。** 会话记忆不能代替生产状态；状态和资产需要独立持久化。
2. **任务不是最小可靠单元。** 更可靠的基本单元是可识别、可重放、可验证的状态转换。
3. **恢复必须考虑副作用。** Retry 不等于安全；现实动作需要 operation/event identity 与幂等设计。
4. **跨系统不能假装有全局 rollback。** 需要 Saga、补偿动作、不可逆 pivot 与可靠向前完成。
5. **SUCCESS 不是完成证据。** 完成应由外部可验证条件证明，而不是 Agent 自报。
6. **Observability 只是起点。** Trace 必须进入 eval / regression / repair loop 才形成改进闭环。
7. **长链是独立可靠性变量。** 单步能力高不代表百步流程可靠，评测必须显式测 horizon。
8. **长期运行还有“老化”。** 记忆压缩、干扰、事实修订和维护会使 Agent 随运行时间退化，需要 lifespan evaluation。

### 12.4 我们已经实际触碰到的研究线｜ACTIVE

#### F-LONGRUN｜长流程可靠生产
- 已触碰现象：定时/每小时代理、长链自动推进、任务跑完但整体目标未必完成、需要 STOP/DONE 条件。
- 研究核心：任务 horizon、检查点粒度、局部成功如何组成端到端成功、何时升级人工。
- 优先级：**S**。

#### F-STATE｜跨工具状态一致性
- 已触碰现象：任务系统、代理、执行端、资产端之间存在“谁认为任务已完成”的状态差异。
- 研究核心：source of truth、状态机、event log、跨系统一致性、状态与会话分离。
- 优先级：**S**。

#### F-RECOVERY｜自动恢复
- 已触碰现象：任务漏接、失败后需要重跑、外部执行节点不可用、流程被中断。
- 研究核心：retry / resume / rollback / fallback / escalation 的边界；失败分类而非无脑重试。
- 优先级：**S**。

#### F-ASSET｜生产资产流
- 已触碰现象：图像/参考素材跨网页、工单、GitHub/云端执行节点传递困难；“任务信息到了但资产没到”。
- 研究核心：asset identity、URI/对象存储、版本、hash、manifest、provenance、访问权限、生命周期。
- 优先级：**S**。

#### E-LONG-EVAL｜长流程过程+结果评价
- 已触碰现象：需要审核器、盲测、USER_REVIEW；不能只看最终有没有文件。
- 研究核心：过程证据、结果验收、主观审美 gate、失败定位、生产 trace → regression dataset。
- 优先级：**S**。

### 12.5 尚未充分触碰但高价值的研究线

#### F-IDEMPOTENCY｜幂等与副作用控制｜S
核心问题：Agent 恢复/重试时，如何避免重复提交、重复生成、重复写入、重复删除或重复调用昂贵资源？

**价值**：这是自动恢复真正成立的前提。没有幂等，恢复系统本身会制造事故。

#### F-SAGA｜跨系统补偿事务｜S
核心问题：A 已成功、B 已成功、C 失败时，整个任务如何回到可接受状态？哪些动作能补偿，哪些动作跨过 pivot 后只能继续向前？

**价值**：任何跨 Linear/存储/执行器/生成服务/审核器的长链最终都会遇到。

#### F-PROVENANCE｜生产谱系｜S
核心问题：任何产物能否反查输入、素材、模型、prompt、agent、版本、执行轨迹、审核与通过原因？

**价值**：同时支撑复现、审核、错误定位、版权/来源、质量学习。

#### F-LIFESPAN｜Agent 长寿命退化｜S
核心问题：一个长期运行数十/数百轮的 Agent，即使模型不变，会不会因为记忆压缩、干扰、事实更新和维护逐渐变差？

**价值**：比“单任务长链”再高一层，直接关系持续运行的代理系统。

#### F-BACKPRESSURE｜背压与容量控制｜A
核心问题：任务产生速度 > GPU/API/人工审核处理速度时，谁等待、谁降级、谁丢弃、谁优先？

**价值**：从实验系统进入规模化生产的必经问题。

#### F-SCHEDULING｜智能调度｜A
核心问题：任务难度 × 模型能力 × GPU × 成本 × deadline × 质量要求 × 失败概率 × 人工可用性，如何决定“谁在什么时候做什么”？

**价值**：决定最终吞吐和成本上限。

### 12.6 我们的研究因果顺序

`LONGRUN → STATE → RECOVERY → IDEMPOTENCY → SAGA → ASSET → PROVENANCE → VERIFIABLE OUTCOME / LONG-EVAL → LIFESPAN → BACKPRESSURE → SCHEDULING`

不要按工具品牌研究；按问题因果关系研究。工具会换，问题不会这么勤快地换皮。

### 12.7 当前最值得形成的新知识

1. **Checkpoint Contract**：什么条件允许一个步骤被视为已持久完成。
2. **Completion Contract**：什么外部证据允许任务进入 DONE，而不是 Agent 自报 DONE。
3. **Asset Manifest**：生产任务所需资产的唯一身份、版本、hash、位置、权限和用途。
4. **Failure Taxonomy**：模型错误 / 工具错误 / 状态错误 / 资产错误 / 环境错误 / 评价错误分离。
5. **Recovery Matrix**：不同失败分别使用 retry、resume、compensate、fallback、reroute、human escalation。
6. **Reliability Budget**：按照流程长度和关键节点分配可接受失败概率，而不是只看单次 pass rate。
7. **Trajectory Evidence**：把完整轨迹作为审核、回归和持续改进的证据对象。

### 12.8 STOP 条件

本轮“社会答案 → 我们的研究地图”在满足以下条件后停止扩散：

- F 一级 Canvas 已形成 5 个稳定主节点；
- 已触碰问题与高价值未触碰问题已经分开；
- 每个高价值节点都有明确研究问题和价值；
- 已给出因果研究顺序；
- 后续新知识优先挂到现有节点，除非无法被五个一级问题解释，否则**禁止继续新增一级 Canvas 分支**。

**F-INDUSTRY MAP v1.0：DONE / FROZEN。**

## 13. 总状态栏｜自动研究同步（2026-10-04）

> 所有聊天框 / Agent / Codex 开工前统一读取。DONE/FROZEN/CYCLE_DONE 禁止从头重复。

| 节点 | 状态 | 已冻结 | 下一最小动作 | Linear |
|---|---|---|---|---|
| C-INTENT | CYCLE_DONE（理论）→实验 | IRG / Relation / Priority / Rationale / Trace | 既有A/B、否决、修改历史离线预测验证 | 674-119 |
| C-CONSTRAINT | CYCLE_DONE | Constraint Satisfaction + Preservation Cost；Priority/Strength/LOCK-FLEX分离 | 抽20–30历史修改样本 | 674-120 |
| D-AGENCY | CYCLE_DONE | confidence/reversibility/preference-load/blast-radius | 每小时任务日志 replay | 674-121 |
| E-REAL-EVAL | CYCLE_DONE | L1 Outcome Validity + L2 Constraint&Intent Fidelity + L3 Trajectory Reliability；每层记录 population/source/independence/uncertainty/failure slice | E-H1：冻结30–50历史case，盲标后预测用户接受/否决/重改或Agent成功/恢复/失败，与单分数/AI自评基线比较 | 674-122 |
| F-LONGRUN | CYCLE_DONE | state before/after、invariant、evidence delta、rollback、first-failure、retry、escalation | 写入运行日志schema并积累轨迹 | 674-123 |
| F-INDUSTRY MAP | STOP_REACHED | 五个一级生产问题与因果顺序冻结 | 新知识挂现有节点 | 索引§12 |

### 同步闭环｜强制
一个Cycle只有同时写入 **Linear + MD + Canvas + Next Action** 才算 CYCLE_DONE；缺任一项统一视为同步未完成，下一轮先补同步。

启动顺序固定：`READ Canvas → READ 本MD → READ对应Linear → 检查Evidence Delta → 才允许研究`。连续3轮无真实增量则 STOP_REACHED。

### E AUTO CYCLE-01 新增证据
2026 NIST TEVV-Athlon强调按真实使用目标定制评价；ARIA把Model Testing、Red Teaming、User Testing合并；NIST AI 800-3强调benchmark统计目标与不确定性；2026长时程Agent研究表明final score不足以定位过程瓶颈；细粒度图像编辑评价支持把preservation、edit quality、instruction fidelity拆开。基于此冻结三层评价协议，并进入E-H1预测性离线验证。

## 14. 每小时总调度协议 v2｜2026-10-04

> **CURRENT CANONICAL SCHEDULER.** 本节覆盖旧的小时调度执行口径；旧研究结论不删除。

### 14.1 当前硬件与工作流事实
- HOST_OS = **Windows**
- 4090 Cloud = **RETIRED**
- ACTIVE_COMPUTE = **Windows RTX 3070 Laptop**
- RTX 3070承担：研究、Agent、Codex、文件工作、轻量验证及当前可承受的图片跑图。
- RTX 4080魔改32GB = **PENDING_INTEGRATION**。只有实际安装并通过 `Codex → ComfyUI → 小型图片任务 → 产物验证` 后才允许标 ACTIVE。
- 视频/明显重GPU任务当前不强推，统一标 **READY_FOR_4080**；这不是故障 BLOCKED。
- Codex = 工作流执行中枢；**不假设独立 Supervisor 服务**。
- 默认退役路径：Linux本地主链、SSH/WinRM→4090云端、B2/COS默认素材搬运。用户未明确重启前禁止派发。
- 图片P0链：本地文件 → Codex/ComfyUI；Linear附件负责 ChatGPT 读图、任务绑定、审核桥接。
- **3070 图片执行硬规则**：凡当前节点已 READY，且任务属于3070可承受的轻量/中轻量图片验证，必须优先由 Windows 本地 Codex → ComfyUI 真实执行并产出文件/receipt；不得仅因视频重GPU任务等待4080，就把图片任务一起挂起。
- **执行路径分离**：worker/session 写权限问题只阻塞依赖该写入路径的施工，不得自动等价为“Codex 本机图片执行不可用”。本机 Codex/ComfyUI 可闭环时继续施工；只有实测失败后才降级为最小子问题。
- **Minimum Infrastructure Principle**：L0复用现有能力 → L1低成本拼接 → 实测证伪后才进入L2新基础设施。

### 14.2 固定循环
`SCAN → RECOVER → VERIFY → DISPATCH → WORK → UPDATE`

**Recover before Create. Verify before Expand.**

1. SCAN：先读目标 Canvas、对应 MD、Linear。
2. RECOVER：恢复 CURRENT_NODE，不把每小时运行当成重新研究。
3. VERIFY：检查已有结果、receipt、Evidence Delta、同步完整性。
4. DISPATCH：选择最高价值 READY 节点；专业 Agent 只是按需能力池。
5. WORK：研究/实验/真实施工；需要施工才形成明确 Codex 工单。
6. UPDATE：同步 MD + Linear + 一级 Canvas + Next Action。

Canvas决定“解决什么”；小时调度决定“现在推进哪个节点”；Codex负责真实执行。**禁止新增平行总控代理。**

### 14.3 调度优先级与并行
`解除上游阻塞 > 验证已有结果 > 推进READY节点 > 理论扩展`

- 每小时最多3个互不依赖的高价值子问题；有依赖则串行。
- 不为凑满3个制造任务。
- 已解决结论不得重复研究。
- 失败优先生成最小子问题/单变量实验。
- READY 图片节点默认执行而非预防性等待：先在 Windows + RTX 3070 上做最小真实跑图验证；只有视频、明显重GPU或实测超出3070能力的任务才转 `READY_FOR_4080`。
- USER_REVIEW集中批审，不因单项等待阻塞其他独立任务。
- 连续两轮同一 BLOCKED：第三轮必须进入 Recovery、切换独立 READY 节点或精确登记外部前置。

### 14.4 专属任务边界
**头像问题树**：只做头像问题消元。按其 Canvas/MD 正本推进：成功头像方法/画风跨框复现 → 跨轮复现 → 批量稳定性 → 漂移变量定位。总调度只查偏航、重复、连续 BLOCKED/NO_OP、未消费 receipt；不跨线代管。

**V10 双源**：只做 TOPVIEW-WORLD 与 CHAR-STORYBOARD 的可审计独立复现，MAIN-07仅按需支撑。总调度只做状态/偏航/receipt检查，不替代专属任务重新执行。

### 14.5 每轮强制记录
- 本轮选择原因
- 调用的专业 Agent
- 真实新增证据/产物
- 状态变化
- 下一最小动作
- compute_requirement
- receipt / Evidence Delta

无真实增量 = **NO_OP**。

### 14.6 STOP
- 节点达到当前证据支持结论
- 需要用户审美/价值拍板
- 缺输入/权限/外部资源且无可恢复动作
- 连续3轮无真实增量
- 只有事后解释无预测证据
- 重复已有工作

节点 STOP 后切下一 OPEN。全部 STOP/BLOCKED/READY_FOR_4080 时停止扩张，只报告最小状态。

### 14.7 同步与防失忆
每个 Cycle 必须完成：
`Linear → MD → Canvas → Next Action`

启动顺序：
`READ Canvas → READ MD → READ Linear → RECOVER CURRENT_NODE → VERIFY Evidence Delta → DISPATCH`

任何框不得仅凭聊天上下文重新建立状态。GitHub 本目录是跨框正本。

## 14.8｜D-AGENCY 674-121｜ROUND-2 自主权分级｜2026-10-06

> 正文：[[D-AGENCY_674-121]]

- L3 AUTO：高 confidence / 高 reversibility / 低 preference-load / 小 blast-radius。
- L2 AUTO + CHECKPOINT：可自动，但必须保留执行前状态、输入版本、回执和恢复点。
- L1 USER_REVIEW：高审美/价值偏好、低可逆、高影响面，或候选升级为正式正本。
- L0 BLOCK / STOP：关键输入不可验证、source-of-truth 冲突、缺原始资产或权限。
- ROUND-2 DONE。
- NEXT：ROUND-3 反馈沉淀（ACCEPT / REJECT / MODIFY → 可复用知识，防止一次性偏好错误泛化）。

## 15. GitHub 同步债登记｜2026-10-04

### 已补齐
- `RUN_LOG_SCHEMA_v1.0.md`：F-LONGRUN / STATE / RECOVERY 的 canonical 运行日志契约。

### 待从本地 canonical 同步，禁止凭聊天内容伪造
- 头像专属问题树 Canvas / MD 正本（若本地已有，以本地正本为准）。
- Q-ASSET-003 / Q-SCENE-001 / Q-ASSET-002 / Q-H3-001 的独立 Q Markdown（仅在本地确有正本时同步）。
- 74版每日任务规则正本。
- 代理七件套统一入口/索引正本。

### 同步原则
- Recover before Create：先找本地已有文件，再决定是否创建。
- GitHub 不凭会话摘要伪造本地 canonical。
- 原始图片/视频默认留本地；GitHub同步结构化MD/YAML/JSON、Canvas、索引、状态、审核记录与配置。
- 下一次 Windows 本地 Codex 可访问 vault 时，先做 Local ↔ GitHub manifest/diff，再批量补 LOCAL_ONLY / MODIFIED。



## 16. USER→SOCIETY｜674-278 最终收束（2026-10-07）

入口：`AI问题解决Canvas/278_USER_TO_SOCIETY/USER_TO_SOCIETY_最终总图.canvas`

R1–R4 DONE。当前总候选：

`C Intent/Constraint → D Agency/Escalation → E Evaluation → F Recovery/Production`

冻结一句话：**将通用 Agent 可靠性、人机协作与评价方法，转译为适合独立创作者和小型创作团队的长流程 AI 视觉创作协议，使创作意图、Agent 权限、结果验收与失败恢复可以被显式管理、留证与追踪。**

当前社会可迁移价值工作评分：68/100；证据 E3-（强内部、弱外部）。

状态：**STOP_EXTERNAL_VALIDATION**。唯一阻塞：独立使用者 / 陌生项目 / 对照实验。出现外部复现前，不再扩理论。


## 17. CONTEXT_GC｜长期 Linear 上下文治理（2026-10-08）

正文：[[CONTEXT_GC_POLICY_v1.0]]

- Linear 总规则：674-294。
- 每小时自动触发钩子：674-116。
- 系统总协议：674-77。
- 默认读取：CURRENT_SNAPSHOT → ACTIVE_LINKS/BLOCKERS/NEXT → 最近3–5条 receipt。
- 常规运行禁止批量读取全量 comments/history；恢复/冲突/provenance 才定向扩读。
- 默认 GC：10轮、热区>5条运行记录、估算>=6000 tokens、出现 superseded/duplicate，任一触发。
- 冷历史进入 `AI问题解决Canvas/context_gc/<issue_id>/`；Linear 保留热状态与索引。
- 首批：674-282 / 293 / 272 / 106 / 286 / 116。

冻结原则：**Hot Before History；Archive Before Bulk Read。**
