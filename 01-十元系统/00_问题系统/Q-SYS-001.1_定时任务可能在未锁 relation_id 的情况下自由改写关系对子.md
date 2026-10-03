---
q_id: Q-SYS-001.1
problem_depth: D2
parent: Q-SYS-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 9
impact_weight: 10
status: OPEN
linear_issue: 
problem_state_version: v1
updated: 2026-10-03
---

# Q-SYS-001.1｜定时任务可能在未锁 relation_id 的情况下自由改写关系对子

## 1. 问题一句话
定时任务可能在未锁 relation_id 的情况下自由改写关系对子。

## 2. 为什么影响父节点
这是关系串错的工程根因候选：自然语言名字被模型重新解释，而不是读取冻结记录。

## 3. 当前证据
- 用户 2026-10-03 当前反馈
- 07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
任务输入只传稳定 relation_id 和结构字段，输出必须校验 from/to/type 完全匹配，错一项即拒绝。

## 6. 当前结论
状态：**OPEN**。这是当前已有证据支持的真实问题；不因进入 Canvas 自动视为已解决。

## 7. 下一步
优先复用现有正本、测试集和 Linear 工单；只有出现新的稳定 failure family 才新增理论，不为填图制造问题。

## 8. Problem State v1
- known：见“当前证据”。
- unknown：是否已存在未同步到索引的最新解决结果。
- tried：复用现有 canonical、专项研究与回归任务。
- rejected：仅凭题材词、感觉词、自评分或位置盘允许即宣布问题解决。
- current_hypotheses：以最小变量、反事实和跨案例复现继续验证。
- next_decision：满足 DONE 条件则关闭，否则保持 OPEN/BLOCKED。
