---
q_id: Q-VIS-001.2
problem_depth: D2
parent: Q-VIS-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 8
impact_weight: 9
status: OPEN
linear_issue: 674-59
problem_state_version: v1
updated: 2026-10-03
---

# Q-VIS-001.2｜生克补单边视觉证明尚未全量通过

## 1. 问题一句话
生克补单边视觉证明尚未全量通过。

## 2. 为什么影响父节点
同框、大小压制、发芽、拼图等视觉捷径仍可能冒充真实关系。

## 3. 当前证据
- Linear 674-59
- 02_给我用的知识凝结库/01_动态链条/00_动态链条总控_零件关系与完成度.canvas

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
关系图组经独立盲审后可区分关系结构与捷径负例，失败边被明确降级或回炉。

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
