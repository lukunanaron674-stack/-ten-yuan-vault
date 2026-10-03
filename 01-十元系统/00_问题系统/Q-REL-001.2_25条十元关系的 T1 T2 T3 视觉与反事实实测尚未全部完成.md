---
q_id: Q-REL-001.2
problem_depth: D2
parent: Q-REL-001
goal: 十元体系稳定、可验证、可生成、可跨模型执行
volume: 8
impact_weight: 8
status: OPEN
linear_issue: 674-59
problem_state_version: v1
updated: 2026-10-03
---

# Q-REL-001.2｜25条十元关系的 T1 T2 T3 视觉与反事实实测尚未全部完成

## 1. 问题一句话
25条十元关系的 T1 T2 T3 视觉与反事实实测尚未全部完成。

## 2. 为什么影响父节点
关系机制若只能文字解释、无法在控制变量的画面中被盲审识别，就不能稳定进入视觉生产。

## 3. 当前证据
- 01-十元系统/06-视觉化研发/RELEASE_视觉化体系_v0.8.1_20260916.md
- 01-十元系统/06-视觉化研发/03-十元生克补/

## 4. 因果链
当前缺口 → 上游结构/版本/判据不能稳定被读取或验证 → 下游十元判定、关系、动态链、视觉或生成出现漂移 → 阻塞父目标。

## 5. DONE 条件
25条关系完成规定层级的 POS / COEXIST_NEG / SHORTCUT_NEG 或等价实测，且有盲审记录。

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
