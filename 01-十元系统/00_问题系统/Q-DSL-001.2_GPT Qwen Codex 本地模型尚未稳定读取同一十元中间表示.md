---
q_id: Q-DSL-001.2
problem_depth: D2
parent: Q-DSL-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 8
impact_weight: 9
status: OPEN
linear_issue: 
problem_state_version: v1
updated: 2026-10-03
---

# Q-DSL-001.2｜GPT Qwen Codex 本地模型尚未稳定读取同一十元中间表示

## 1. 问题一句话
GPT Qwen Codex 本地模型尚未稳定读取同一十元中间表示。

## 2. 为什么影响父节点
不同模型若各自重读长定义，会重新解释端点、关系和动态链，造成跨模型漂移。

## 3. 当前证据
- 02_给我用的知识凝结库/01_动态链条/00_动态链条总控_零件关系与完成度.canvas
- 黎黎隆项目/20_Agent系统/01_Agent库/AGENT_LEVELS_1-10_v1.0.md

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
固定 IR schema、版本字段、校验器和最小测试集在至少三种模型上产生一致结构结果。

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
