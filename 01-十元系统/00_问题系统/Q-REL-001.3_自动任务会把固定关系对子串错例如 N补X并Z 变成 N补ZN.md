---
q_id: Q-REL-001.3
problem_depth: D2
parent: Q-REL-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 9
impact_weight: 10
status: OPEN
linear_issue: 
problem_state_version: v1
updated: 2026-10-03
---

# Q-REL-001.3｜自动任务会把固定关系对子串错例如 N补X并Z 变成 N补ZN

## 1. 问题一句话
自动任务会把固定关系对子串错例如 N补X并Z 变成 N补ZN。

## 2. 为什么影响父节点
一旦关系对被模型自由重写，后续动态链、视觉化和脚本全部建立在错误边上。

## 3. 当前证据
- 用户 2026-10-03 当前反馈：定时任务会串错生克补对子
- 07-Codex大脑库/每次任务必读_十元关系防遗忘清单.md

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
所有自动任务在关系层只读取版本化 canonical relation_id / from / to / type；出现未登记对子直接 FAIL，不允许模型补写。

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
