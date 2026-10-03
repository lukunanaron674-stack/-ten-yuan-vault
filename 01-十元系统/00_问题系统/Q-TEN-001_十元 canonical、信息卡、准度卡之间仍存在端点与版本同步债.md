---
q_id: Q-TEN-001
problem_depth: D1
parent: G1
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 9
impact_weight: 10
status: OPEN
linear_issue: 
problem_state_version: v1
updated: 2026-10-03
---

# Q-TEN-001｜十元 canonical、信息卡、准度卡之间仍存在端点与版本同步债

## 1. 问题一句话
十元 canonical、信息卡、准度卡之间仍存在端点与版本同步债。

## 2. 为什么影响父节点
十元节点定义是所有五轴、生克补、动态链、视觉化和代理判断的上游；一旦端点版本不一致，下游会出现同名不同义。

## 3. 当前证据
- 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
- 01-十元系统/十元广义狭义阴阳相反轴总修正案_20260802.md
- 09-给674（我）用的库/09-方法论与工作流/五行轴角色生成器/README_应用映射层.md

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
所有 active 信息卡、准度卡、关系卡、领域映射与 Agent 入口对同一端点使用同一 canonical 版本；不存在已知同步债。

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
