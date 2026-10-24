---
title: MAIN-17｜问题系统本身如何区分目标/主问题/子问题/负问题/伪问题/因果/依赖，并保留已解决历史
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-17
linear_issue: 674-116
r2_phase: R2-D
status: partial
problem_level: MAIN
subproblem_count: 15
---

# MAIN-17｜问题系统本身如何区分目标/主问题/子问题/负问题/伪问题/因果/依赖，并保留已解决历史

Canvas 入口：[[黎黎隆问题系统]]
来源：Linear 674-116｜R1 + R2-D｜comment ae4736f4-64e2-4df9-b1cb-2c37c2b9cc25

## Canvas 状态

- 当前状态：PARTIAL
- 本轮判断：已有办法或局部结果，但尚未覆盖完整 DONE 范围。
- Canvas 颜色：橙色（部分完成）
- 正式 Q：本卡不是正式 Q，不自行分配 Q-ID。

## DONE

完成该 MAIN 的关键 SUB 验证；每个验证都有可追溯输入、证据、办法、结果和审核状态，并回写 Canvas。当前：尚未覆盖完整范围。

## STOP

最多 3 轮；缺真实素材、权限或运行回执即 BLOCKED；遇到用户身份/审美审核即 USER_REVIEW；发现与现有 Q 重复则 MERGE；不把候选或 assistant proposal 升格为事实。

## 当前解决办法

- 先按 SUB 拆分可观察问题，再单变量验证。
- 把 BLOCKER、NEGATIVE/PSEUDO、RESOLVED_HISTORY 分开记录。
- 证据不足时保持 OPEN / BLOCKED，不提前改成 DONE。
- 结果回写原问题和 Canvas，不创建平行问题树。

## 子问题 SUB

- SUB-17-01｜Goal 与 Problem 如何分：目标是想达到什么，问题是阻碍目标的什么。
- SUB-17-02｜Main 与 Sub 如何分：父问题是否真的能解释多个子问题。
- SUB-17-03｜症状、原因、根因如何区分，避免局部异常冒充主问题。
- SUB-17-04｜NEGATIVE 问题如何记录：错误前提、错误方向、禁止再次采用的解法。
- SUB-17-05｜PSEUDO 问题如何判：无父目标影响、只是解决方案伪装、只是审美模糊词。
- SUB-17-06｜HYPOTHESIS 如何保留但不升格为事实。
- SUB-17-07｜BLOCKER 是问题本身还是当前执行条件，如何避免混层。
- SUB-17-08｜causes / blocks / depends_on / affects / instance_of / resolved_by / spawns 如何区分。
- SUB-17-09｜一个问题最多拆到 D3 还是应允许更深；什么条件停止下钻。
- SUB-17-10｜RESOLVED_HISTORY 如何保留已解决问题、证据、失败路径、反例。
- SUB-17-11｜同一问题跨聊天框重复出现时如何 merge，不再造平行 Q。
- SUB-17-12｜新聊天如何只追加 delta，而不是重编全部历史。
- SUB-17-13｜Linear / Markdown / Canvas / Chat 记忆状态冲突时谁是 source-of-truth。
- SUB-17-14｜DONE 的真实含义是什么：结论完成、施工完成、验证完成是否需要分层。
- SUB-17-15｜问题地图什么时候算“横向够全”，允许转入纵向解决。

## BLOCKER

（无）

## NEGATIVE / PSEUDO

（无）

## RESOLVED_HISTORY

（无）

## 本轮结果

- 本卡已完成横向问题登记和第一层下钻。
- 当前状态仍由证据覆盖范围决定；子问题解决后再回写 MAIN。
- 详细状态由 Canvas 管理，本卡保存知识、证据和方法。

## 下一步

从 BLOCKER 中选择一个有真实输入、可观察 DONE 条件的 SUB，完成一轮有限验证后回写 Canvas。

