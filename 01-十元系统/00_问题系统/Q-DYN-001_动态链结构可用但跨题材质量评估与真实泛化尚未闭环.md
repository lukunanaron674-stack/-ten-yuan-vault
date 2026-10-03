---
q_id: Q-DYN-001
problem_depth: D1
parent: G4
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 9
impact_weight: 9
status: OPEN
linear_issue: 674-57
problem_state_version: v1
updated: 2026-10-03
---

# Q-DYN-001｜动态链结构可用但跨题材质量评估与真实泛化尚未闭环

## 1. 问题一句话
动态链结构可用但跨题材质量评估与真实泛化尚未闭环。

## 2. 为什么影响父节点
合法关系排列不等于好链；动态链要能跨作品、跨题材判断前一阶段是否真正制造后一阶段。

## 3. 当前证据
- 02_给我用的知识凝结库/01_动态链条/00_动态链条总控_零件关系与完成度.canvas
- 08-生克补动态链研究/

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
Evaluator R5 跨题材封闭盲测完成，竞争链、删除测试、residue、next_affordance 与 failure family 可稳定复核。

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
