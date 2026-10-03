---
q_id: Q-DSL-001
problem_depth: D1
parent: G5
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 10
impact_weight: 10
status: OPEN
linear_issue: 674-62
problem_state_version: v1
updated: 2026-10-03
---

# Q-DSL-001｜自然语言到十元五轴关系 DSL 的真实外部泛化仍不足

## 1. 问题一句话
自然语言到十元五轴关系 DSL 的真实外部泛化仍不足。

## 2. 为什么影响父节点
如果编译器仍靠关键词/模板，换措辞就崩，十元无法成为稳定 AI 内部语言。

## 3. 当前证据
- 01-十元系统/05-十元语义空间/B1_R5关系输入审计_20260920.md
- 01-十元系统/05-十元语义空间/B2_R5具象化编译器实施规范_20260920.md
- Linear 674-62

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
LLM semantic parser 替代关键词模板后，在全新封闭集通过外部泛化测试；记录 Exact、轴路由、变量命中与因果顺序。

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
