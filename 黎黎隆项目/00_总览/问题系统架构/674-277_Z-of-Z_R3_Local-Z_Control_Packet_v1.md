# 674-277｜Z-of-Z 架构 R3｜Local-Z Control Packet v1

状态：R3 DONE / CANDIDATE_HIGH_CONFIDENCE

## 目标

给 R2 的 7 个 Z1 各自挂上：
- local XN
- NX
- AUTHORITY
- PATH
- expected_xn_fit

目的：
> 证明“大Z拆小之后，可以让每个小Z用更窄、更准确的 XN 被约束，从而提高局部信赖度，再向父Z汇总”。

注意：
以下 expected_xn_fit 都是 **AI预测值**，不是 verified。
只有后续真实案例 / 74确认后，才能写入 verified_xn_fit。

---

# Z1-A｜目标 / 问题结构治理

volume：72/100
role：REQUIRED_COMPONENT
importance：HIGH

## local XN
1. Goal 与 Problem 分开：Goal=想达到什么，Problem=阻碍什么。
2. Main/Sub 必须保留 parent_z / parent_goal。
3. 症状、原因、根因分开。
4. PSEUDO / NEGATIVE / HYPOTHESIS 不得混进正式问题节点。
5. 达到“可直接设计一次有限验证”时停止继续拆 Z。
6. 同一问题跨聊天重复出现时 merge，不造平行树。

## NX
- 什么粒度最适合74阅读，而不显得太碎？
- 某些问题到底属于“目标未定义”还是“执行阻塞”，仍需语境判断。

## AUTHORITY
- decision_right：CHATGPT 可提出分类；74保留最终目标语义裁决。
- execution_right：WORKER 可按既定 schema 整理。
- freeze_right：74。
- escalation_to：目标语义冲突 → 74。

## PATH
- canonical Canvas
- 问题总纲 / Markdown
- Linear 仅做任务调度和状态回传

## expected_xn_fit
**8.8/10**

理由：
结构规则已相对成熟，剩余主要是边界判断的 NX。

---

# Z1-B｜XN规则获取与校准

volume：74/100
role：REQUIRED_COMPONENT
importance：HIGH

## local XN
1. 每条 XN 必须说明 supports_z。
2. XN 必须记录 source_type：SOCIAL / COMMERCIAL / PERSONAL / MIGRATED / EXPERIMENTAL / UNKNOWN。
3. XN 必须区分 expected_xn_fit / verified_xn_fit。
4. 未验证规则只能是 CANDIDATE。
5. 每条 XN 至少检查 reliability / validity / calibration。
6. 若内部同时需要多组明显不同 XN，则继续拆小 Z。

## NX
- 什么证据量足够从 CANDIDATE 升 VERIFIED？
- PERSONAL XN 中，74一次确认和多次重复确认哪个权重更高？
- 对审美类 XN 是否应该允许长期半冻结状态？

## AUTHORITY
- CHATGPT：提出候选 XN / 来源 / 预测覆盖度。
- 74：确认个人规则、升级 VERIFIED。
- WORKER：登记规则状态和证据。
- 不允许任一执行 Agent 自行把候选 XN 升 VERIFIED。

## PATH
- GitHub规则文档
- Linear工单
- 真实生产案例
- 素材正负例 / 失败回执 / A/B

## expected_xn_fit
**8.2/10**

理由：
规则骨架已明确，但“验证门槛”和“审美类规则稳定性”仍是 NX。

---

# Z1-C｜NX / 偏好补充

volume：63/100
role：REQUIRED_COMPONENT
importance：HIGH

## local XN
1. NX 不得强制 XN 化。
2. NX 必须绑定具体材料、案例、对比或反馈。
3. ACCEPT / FAVORITE / REJECT / RERUN 是不同强度的信号。
4. NX → 证据 → 对比 → 候选XN → 74确认 → 再验证。
5. 负例不能自动推导出所有被否定特征。

## NX
- 74说“就是不对”的判断，AI能提取到多细？
- 74的即时偏好和长期偏好发生冲突时谁优先？
- 一个风格偏好需要多少正负例才值得规则化？

## AUTHORITY
- 74：拥有最终偏好解释权。
- CHATGPT：提出模式和候选 XN。
- WORKER：管理证据，不替代审美判断。

## PATH
- 正例 / 负例 / 模糊例素材库
- A/B对比
- 审核网页 / Linear回传
- GitHub偏好规则

## expected_xn_fit
**7.4/10**

理由：
这是高 NX 域，规则能整理，但不能完全消除人的判断。

---

# Z1-D｜Agent主权与责任治理

volume：70/100
role：REQUIRED_COMPONENT
importance：HIGH

## local XN
1. required_agent ≠ authority。
2. 每个 Z 明确 owner / decision / execution / review / freeze / escalation。
3. Agent 只能在已授权范围内自主推进。
4. 高 NX / 高风险 / 低可逆性 / 低校准时降低自主权。
5. blocker 不得让整批停摆；局部 STOP + 上报。
6. Codex 负责施工，不自动拥有问题判断权。

## NX
- 权力是否按 Z 体量动态变化？
- 同样的风险，不同 Agent 的历史可靠度是否影响授权？
- 什么时候“人在环上”足够，什么时候必须“人在环内”？

## AUTHORITY
这是本 Z 自己的核心对象：
- 74：最终 freeze / takeover
- CHATGPT：规则与判断建议
- 专业Agent：局部 decision
- WORKER/CODEX：execution

## PATH
- Linear状态
- Agent packet
- scheduler
- escalation 回传
- 用户审核入口

## expected_xn_fit
**8.0/10**

理由：
治理原则较清晰，但动态授权函数还没有被真实压力测试。

---

# Z1-E｜PATH现实执行与跨端落实

volume：78/100
role：REQUIRED_COMPONENT
importance：CRITICAL

## local XN
1. “知道怎么做”不得当成“现实已执行”。
2. PATH 至少检查：tool / permission / trigger / runtime / input / output / return_channel。
3. path_state 必须独立于 problem_status。
4. 状态链：FOUND → ACQUIRED → READABLE → UNDERSTOOD → ADAPTED → EXECUTABLE → AUTOMATABLE → VERIFIED。
5. 多端必须明确 source-of-truth 与 handoff。
6. 缺 PATH 可以形成 blocker，但 blocker 只作用于对应 Z。

## NX
- 多端情况下，哪一个端应成为统一触发中心？
- Linear / GitHub / 本地 worker 哪个应该持有最终 runtime state？
- 自动化程度提高后，哪些失败应该自动恢复，哪些必须人工接管？

## AUTHORITY
- 74：授权高影响现实动作。
- CHATGPT：定义 PATH 要求。
- WORKER/CODEX：真实执行。
- scheduler：只触发，不拥有目标裁决权。

## PATH
这是本 Z 的本体：
- ChatGPT
- Linear
- GitHub
- local Worker
- local 4080
- ComfyUI / H3
- scheduler / queue
- output / manifest / 回传

## expected_xn_fit
**7.8/10**

理由：
规则很清楚，但现实多端联调仍决定最终可信度。

---

# Z1-F｜状态 / 证据 / 版本 / 回传治理

volume：73/100
role：REQUIRED_COMPONENT
importance：CRITICAL

## local XN
1. 每个关键对象必须有 source-of-truth。
2. asset / problem / path / authority 状态分层。
3. 重要输出要能追到 source_ref / version / SHA / node_id / attachment_id。
4. 候选 / 锁定 / 淘汰 / 替代历史必须保留。
5. AI/Worker的 PASS 需要对应证据，不允许只有一句“已完成”。
6. 回传必须写回原对象，不造平行副本。

## NX
- 哪些对象必须强制 SHA，哪些只需要版本号？
- 多端状态冲突时自动裁决优先级是否应完全固定？
- 视觉证据的最小回传包到底要多大？

## AUTHORITY
- WORKER：状态更新和证据登记。
- CHATGPT：状态逻辑与冲突判断。
- 74：视觉/偏好最终确认。
- 资产锁定与最终 canonical 升级需显式权限。

## PATH
- GitHub
- Linear
- local files
- Canvas
- attachment / manifest / audit receipt

## expected_xn_fit
**8.6/10**

理由：
当前系统已有较多成熟资产与状态规则，剩余主要是跨端一致性。

---

# Z1-G｜长期运行 / 恢复 / 调度

volume：65/100
role：REQUIRED_COMPONENT / LATE
importance：MEDIUM-HIGH

## local XN
1. scheduler 只负责触发，不负责发明目标。
2. 每次运行必须 one-shot / 幂等。
3. 结果状态至少区分：DONE / NO_OP / BLOCKED / USER_REVIEW。
4. 一个 blocker 不阻塞整批。
5. 必须有 checkpoint / rollback / recovery。
6. 临时 Agent 必须有死亡条件，禁止无限 spawn / 无限研究。

## NX
- 哪些任务适合每小时，哪些适合事件触发？
- 自动恢复最多重试几次？
- 长期任务什么时候应该主动暂停而不是继续消耗资源？

## AUTHORITY
- scheduler：trigger only
- Problem Agent：选择可运行目标
- Worker/Codex：执行
- 74：可随时暂停/接管/冻结长期任务

## PATH
- external scheduler
- Linear queue
- local worker heartbeat
- checkpoint / log / recovery state

## expected_xn_fit
**7.6/10**

理由：
原则明确，但长期稳定性必须靠真实运行验证。

---

# 1｜局部化之后的信赖度变化

R2 前，核心 Z 作为一个整体时：
- 架构信赖度约：**7.5/10**

R3 拆成 7 个局部 Z 后，AI 对各域的 expected_xn_fit：

| Z | expected_xn_fit |
|---|---:|
| Z1-A 目标/问题结构 | 8.8 |
| Z1-B XN规则获取 | 8.2 |
| Z1-C NX偏好补充 | 7.4 |
| Z1-D 主权治理 | 8.0 |
| Z1-E PATH现实执行 | 7.8 |
| Z1-F 状态/证据/版本 | 8.6 |
| Z1-G 长期运行/恢复 | 7.6 |

平均值约：**8.1/10**

但注意：
> 这个 8.1 只是“局部可规则化程度的平均预测”，不能直接当作父 Z 的 verified trust。

它只说明：
**拆小后，每个 Z 的规则更聚焦，AI 对规则适配的自我预测普遍高于原来一个大 Z 的整体信赖度。**

---

# 2｜R3 的核心结论

## 结论 A｜“大Z拆小”确实有提升信赖度的结构理由
不是因为数字更好看，而是因为：
- XN 更局部
- NX 更容易暴露
- 权力边界更清楚
- PATH 更容易定位
- blocker 不再扩散
- 校准误差可以定位到具体 Z

## 结论 B｜信赖度必须局部验证，不能父 Z 一把打分
以后父 Z 不直接写“信赖度=8”。

应该写：
- local_verified_fit[]
- unresolved_nx_count
- critical_blockers
- rollup_status

## 结论 C｜最需要继续校准的三个域
1. Z1-C NX / 偏好：高人类判断
2. Z1-E PATH：高现实联调
3. Z1-G 长期运行：高时间跨度

它们是后续 R4 / 压力测试的重点。

---

# 3｜本轮新增 XN

## XN-Z-LOCAL-01｜每个小Z独立控制包
每个 Z1/Z2 必须拥有自己的：
- local_xn_set
- nx_gaps
- authority_state
- path_state
- expected_xn_fit
- verified_xn_fit

状态：CANDIDATE_HIGH_CONFIDENCE

## XN-Z-TRUST-01｜父Z不直接继承平均信赖度
父 Z 的信赖度不得简单取子 Z 平均。
必须保留关键 blocker、必要子Z、校准误差与 unresolved NX。

状态：CANDIDATE_HIGH_CONFIDENCE

## XN-Z-NX-01｜高NX域允许低自动化
若某 Z 的 NX 比例高，即使局部规则存在，也不得用高 expected_xn_fit 自动换取高自主权。

状态：CANDIDATE_HIGH_CONFIDENCE

---

# 4｜仍保留的 NX

- 父 Z trust 的最终 rollup 算法
- contribution_weight 是否真正数值化
- 权力动态函数
- VERIFIED XN 的证据门槛
- Z1-C / E / G 是否还应继续拆 Z2
- 是否要把 Z1-G 拆成“调度”和“恢复”两个主域

---

# R3 DONE

已完成：
- [x] 7个 Z1 Local-Z Control Packet
- [x] 每个 Z1 挂 local XN
- [x] 每个 Z1 挂 NX
- [x] 每个 Z1 挂 AUTHORITY
- [x] 每个 Z1 挂 PATH
- [x] 每个 Z1 给出 expected_xn_fit
- [x] 明确 expected ≠ verified
- [x] 证明局部化后信赖度可定位、可校准
- [x] 新增 3 条候选 XN

下一轮：**R4｜父Z汇总 + blocker一票否决 + trust rollup + 三个真实案例压力测试**
