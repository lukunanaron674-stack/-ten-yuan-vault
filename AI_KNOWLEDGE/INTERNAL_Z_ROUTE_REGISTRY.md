# INTERNAL Z ROUTE REGISTRY｜674-272 外部知识内部路由表

> 状态：STAGING
> 目标：任何外部知识在进入实验前，先回答“它解决哪个已有 Z？”
> 规则：优先挂已有 Z；找不到时进入 674-276 / 674-116 做问题发现，不直接新建 canonical。

## 1｜当前已确认路由

| 目标问题域 | Linear / Z | GitHub 依据 | 外部知识典型输入 | 接入动作 |
|---|---|---|---|---|
| 治理 / 证据 / 版本 / 回滚 / HUMAN_GATE | 674-93 | 01-十元系统/00_问题系统/十元问题总纲.md | evidence ladder、benchmark governance、rollback、实验门禁 | 先挂治理规则；不得直接改领域 canonical |
| 十元感受核 / 五轴 / 五维 | 674-104 | 01-十元系统/00_问题系统/十元问题总纲.md | 感受测量、心理物理、维度模型、感知实验 | 作为候选诱发/测量机制进入对应 Q |
| 生克补 / 对子 / 动态链 | 674-105 | 同上 | relation modeling、temporal affect、dynamic composition | 进入 Q-REL / Q-DYN 候选实验 |
| 跨媒介 / AI理解 / 生成 / Benchmark / H3 / Agent | 674-106 | 同上 | VLM judge、cross-modal、generation control、AI eval | 进入 Q-MEDIA / DSL / GEN 或应用验证 |
| 项目问题树 / 已有 Z 发现 / 增量闭环 | 674-116 | 黎黎隆项目/00_总览/L1-L4问题知识索引.md | 无法直接归属现有细分 Z 的项目方法 | 先查 MAIN/SUB；不新建第二套问题树 |
| 论文 / RQ / EXP / 方法学 | 674-118 | AI问题解决Canvas/论文问题系统索引.md | 论文方法、实验设计、指标、消融、统计 | 转成 PAPER-R / RQ / EXP 候选 |
| 图像生产执行 | 674-124 | 黎黎隆项目/00_总览/黎黎隆问题总纲.md | ComfyUI 生产、批处理、图像执行技术 | 只能作为执行能力，不自动成为视觉规则正本 |
| USER 审核证据 | 674-173 | 角色仓库 source_issue 记录 | 人工 PASS/FAIL、主参考、反例 | 作为 evidence / HUMAN_GATE，不承担外部知识研究 |
| H3 真实实验 / 视频专项 | 674-216 | H3 agent plan / 总纲 | H3 runtime、长镜、多角色、视频一致性 | 进入真实运行验证，结果回 286/106 |
| SOCIAL→US 总控 | 674-272 | AI_KNOWLEDGE/BASE_SOCIAL_TO_US_TASKS.md | 论文/GitHub/技术报告/行业方法 | 收件、去重、provenance、NEXT，不做领域正本 |
| Z→XN→PATH 总架构 / 未命中路由 | 674-276 | 黎黎隆项目/00_总览/问题系统架构/674-276_R1_ARCH_AUDIT_20261006.md | 路由冲突、跨域方法、未知目标 Z | 做 route discovery / architecture check |
| 角色规则实验 / XN+Z 角色闭环 | 674-282 | 黎黎隆项目/20_Agent系统/07_角色代理/Z_STATE_FIELDS.md | 角色一致性、多视图、身份、Canon、角色资产 | 进入角色候选实验；USER审核仍走 173 |
| B端 / H3 编排 / 镜头生产闭环 | 674-286 | 黎黎隆项目/00_总览/AI后台/02_B端执行.md | 镜头编排、prompt、reference 选择、视频流程、retake | 进入 B1–B4 / H3 执行规则验证 |

## 2｜当前已知但 GitHub 仍未完成注册的节点

| Linear | 当前声明 | GitHub 状态 | 处理 |
|---|---|---|---|
| 674-293 | Pocket 素材总仓 / MD / 图 / Base / SHA | PENDING_GITHUB_SYNC：当前 repo code search 未找到正式 674-293 入口 | 可作为当前工作流候选目标，但在出现 GitHub canonical/receipt 前，不允许 272 把它当已连接正本 |

> 674-293 的缺口本身就是“内部 GitHub 未接入完”的显式证据。补齐后把本行改为 VERIFIED_ROUTE，并写入 canonical path。

## 3｜路由决策顺序

外部知识
→ 理论定义：104
→ 关系/动态：105
→ 跨媒介/AI理解/生成/评估：106
→ 角色身份/多视图/Canon：282
→ 视频编排/H3生产：286
→ 论文实验：118
→ 生产执行技术：124 / 216
→ USER证据：173
→ 仍不确定 / 横跨多个 Z：276 → 查 116 MAIN/SUB

## 4｜路由输出最小格式

external_knowledge_id
route_status = ROUTED | ROUTE_CONFLICT | UNRESOLVED
target_issue
target_z
target_canonical
secondary_targets
reason
existing_gap
must_not_override
next_experiment

## 5｜冲突规则

- 同一知识可以有一个 primary target + 多个 secondary targets，但只能有一个主 canonical 写入点。
- 如果 104/105/106 与 282/286 都可接：理论验证归 104/105/106，生产应用归 282/286；不得用“生产成功”反向证明理论成立。
- 如果 118 与其它域冲突：118 只负责论文/RQ/EXP 表达，不成为领域规则唯一事实源。
- 如果 272 与任何域冲突：272 永远是 intake/master，不取得领域 canonical 权。
- 路由冲突未解决前，candidate_state 不得高于 EXPERIMENTING。
