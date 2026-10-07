---
q_id: Q-SYSTEM-001
scope: global
domain: workflow_and_human_ai_collaboration
status: IN_PROGRESS
volume: 9
blocker: 5
priority_score: 45
linear_issue: 674-77
parent_goal: G-SYS-001
problem_statement: Chat、Linear、Codex 与 Vault 之间的状态和证据尚未形成可复核的完整自动化闭环。
problem_depth: D1
known:
  - L1–L4 规格、Problem State v1、3 个真实样本和 L5/L6 消费验证已有完成回执。
  - 《黎黎隆》项目级问题系统有本地实现和 commit 51825b3b4bea924d956d69dd3b968956e74f861d。
  - 全局问题系统与该项目系统应分开；现有 AI 研究知识图谱不是问题执行库。
  - Linear 子单 674-78/79/80/81/82/84/171/217 当前为 Duplicate；其需求由 674-77 继续承接。
unknown:
  - Chat 中的新问题能否在无需用户搬运上下文的情况下可靠地匹配或创建 Q，并完整回写真实来源。
  - 全局系统在 Obsidian 内的文件节点点击、路径和关系是否已完成现场验收。
  - 双向协议和端到端验证是否能在日常运行中可重复执行。
  - GitHub 当前版本是否包含本地问题系统成果；本地 commit 不证明已发布。
tried:
  - 冻结 L1–L4 职责与 Problem State v1，并完成三个类别的消费样本。
  - 建立《黎黎隆》项目级 Canvas、Markdown 样例和本地实现回执。
  - 2026-10-07 将全局问题系统结构、人工决策边界和余下门禁整理回 674-77。
rejected:
  - 把 L1–L4 子 Campaign 的 M-END 当作 674-77 整体完成。
  - 把 Linear comment、Git commit 或本地文件单独当作端到端/远端发布证明。
  - AI 建议、候选文件或工具成功自动升格为用户确认或 Canonical。
  - 重建第二份《黎黎隆》问题树，或把 AI 学术知识图谱当作执行问题库。
current_hypotheses:
  - 现有 Linear MCP + 本地执行器可以承担经授权的路由和回写；自动触发、状态恢复与端到端可靠性仍需实测。
evidence:
  - Linear 674-77 描述、状态与 2026-10-07 整理回执。
  - 本地《黎黎隆》Problem State 样例和 commit 51825b3b4bea924d956d69dd3b968956e74f861d。
source_refs:
  - https://linear.app/674/issue/674-77/systemchat-linear-codex-长期问题交互系统
  - https://linear.app/674/issue/674-81/sys-04定义-chat-linear-codex-双向协议与回写格式
  - https://linear.app/674/issue/674-82/sys-05端到端验收chat发现问题-codex更新-chat继续
  - 问题系统总纲.md
current_version: 1.0
next_decision: 完成并记录一轮真实 Q-ID 端到端执行，然后按证据关闭或列出具体失败环节。
done_condition: 全局问题系统可用；双向协议在真实样本上运行；Chat→Linear→Codex→Markdown/Canvas→Linear→Chat 完成一次可复核闭环；远端发布状态明确；未解决结构性 blocker 为零。
required_agent:
  - Chat 问题整理与语义审核
  - Linear 调度与状态回写
  - Codex 仓库执行与验证
created: 2026-10-07
updated: 2026-10-07
---

# Q-SYSTEM-001｜Chat × Linear × Codex 长期问题闭环

## 为什么是问题

目标是用户只在 Chat 讨论，由系统负责把问题整理、调度执行并把证据带回可点击、可追溯的问题库。现有成果覆盖 L1–L4 规格与《黎黎隆》本地 MVP，但尚无证据证明整个链条已自动、可恢复且端到端闭合。用户仍可能需要人工搬运上下文、辨别哪个版本有效、追踪子单和催促回写。

## 当前可见症状

- 总工单与子 Campaign 的完成状态曾经发生过混淆。
- 项目级本地实现已验收，但远端发布状态单独待核。
- 674-77 的拆分卡已收为 Duplicate；开放的真实验收义务仍须由母工单跟踪。
- 当前线性聊天工具能读写 Linear，但这不等于任意新 Chat 自动触发后台工作。

## 因果链

Chat、Linear、Vault 与 Git 的状态没有持续绑定 → 问题定义和执行输入需要人工再次搬运/确认 → 任务可能重复、遗漏或使用旧状态 → 证据分散且完成状态不可靠 → 整个问题协作流程不能证明真正闭环。

## 上游原因与下游影响

- 上游：接入触发方式、Q-ID 去重/创建协议、状态源规则、回执结构和恢复规则尚未由一次真实全链路测试共同证明。
- 下游：Q Markdown、Canvas、Linear、GitHub 与 Chat 可能各自显示不同状态；人工需要重新解释上下文。

## 人工决策边界

自动承担：上下文搬运、已知 Q 匹配、Problem State 整理、明确授权任务路由、执行回执和链接回写。

人工确认：新问题正式入树、目标/范围变化、Canonical/Frozen 晋升、争议裁决、语义验收和对外发布。遇到来源冲突或权限范围不清时必须停下并列出缺口。

## 三个真实接入样本

以下卡片是《黎黎隆》项目问题的唯一正文；本全局卡只引用，不复制、不改写其结论：

1. [[黎黎隆项目/00_总览/Q-CHAR-001_头像怎么稳定扩中全景]] — 角色视觉样本；有明确个案、范围边界、已否决假设和子问题状态。
2. [[黎黎隆项目/00_总览/Q-ASSET-001_旧角色设定和新设定谁优先]] — 资产来源/审批样本；区分批准范围、未核验候选和历史版本。
3. [[黎黎隆项目/00_总览/Q-PIPE-001_冻结项可发散项禁止项怎么进入生图流程]] — 流程样本；保留“文档存在不等于工作流已验证”的边界。

## 最小端到端验收

选取上述一个现存 Q-ID，留下可复核的同一执行链：

1. Chat 更新一个明确的问题事实或下一步；保存来源与变更前后值。
2. Linear 找到并更新原 Q 工单，不新建重复工单；保存领取字段与人工决策门禁。
3. Codex 只读取授权路径，修改该 Q Markdown 与相应 Canvas 节点。
4. 结构检查文件、Canvas 节点/边和路径；记录实际 GUI 点击检查结果或明确标记未做。
5. 记录 Git commit；若发布，则另行核对远端 ref 和文件内容。
6. Linear 回写 run_id、文件、验证、commit、远端状态、阻塞和下一步。
7. Chat 按原 Q-ID 读回结果并判定继续/关闭。

不得用本卡的文字或上次 L1–L4 receipt 冒充该新端到端运行。

## 当前结论与下一步

本问题保持 `IN_PROGRESS`。全局问题系统文档和 Canvas MVP 已建立；本次文件创建本身不代表协议与端到端门禁通过。下一步应选一个已有 Q-ID 完成真实端到端运行，再核验安全发布。Linear MCP 当前不提供 Issue 删除/归档操作；重复子单已处于 Duplicate，可保留历史并由 674-77 承接。

## DONE 条件

- 全局系统有独立总纲、模板、可点击 Canvas 和问题正文；项目系统不被复制或覆盖。
- 双向协议的字段、人工决策边界、失败/恢复和状态源可按文档执行。
- 至少一条真实 Q-ID 端到端链有文件、Linear、Git 与读回证据。
- 如宣称远端发布，必须有当次 push/ref/文件 readback 证据。
- 所有未解决结构性 blocker 已关闭，或明示本工单仍未 DONE。
