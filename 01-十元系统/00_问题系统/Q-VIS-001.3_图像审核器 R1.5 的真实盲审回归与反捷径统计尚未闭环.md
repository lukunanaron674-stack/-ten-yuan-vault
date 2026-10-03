---
q_id: Q-VIS-001.3
problem_depth: D2
parent: Q-VIS-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 8
impact_weight: 9
status: OPEN
linear_issue: 674-56
problem_state_version: v1
updated: 2026-10-03
---

# Q-VIS-001.3｜图像审核器 R1.5 的真实盲审回归与反捷径统计尚未闭环

## 1. 问题一句话
图像审核器 R1.5 的真实盲审回归与反捷径统计尚未闭环。

## 2. 为什么影响父节点
没有可靠审核器就无法判断生图是否真的体现十元，而不是模型用题材捷径骗过评估。

## 3. 当前证据
- Linear 674-56
- 01-十元系统/06-视觉化研发/04-图像审核器/master_spec_v1.0.md

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
真实图片测试集完成揭盲前判定、混淆矩阵、failure family、复验与版本对比。

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
