---
title: MAIN-16｜Agent 如何自动发现问题、调用专业 Agent、施工、审核并停止，不无限扩张
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-16
linear_issue: 674-116
r2_phase: R2-D
status: partial
problem_level: MAIN
subproblem_count: 15
---

# MAIN-16｜Agent 如何自动发现问题、调用专业 Agent、施工、审核并停止，不无限扩张

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

- SUB-16-01｜谁负责“发现问题”，谁负责“判断问题”，谁负责“解决问题”，职责如何拆开。
- SUB-16-02｜L1/L2 底层能力如何作为隐式能力工作，而不要求用户管理。
- SUB-16-03｜L3 何时把线索升级成真正 Problem State。
- SUB-16-04｜L5/L6 专业 Agent 的职责边界如何冻结，避免互相抢写。
- SUB-16-05｜L7 Problem Agent 如何在多个 Q 之间排序、选择、暂停、关闭。
- SUB-16-06｜L8 临时 Agent 的生成门槛、输入、工具、DONE、STOP、死亡条件是什么。
- SUB-16-07｜L9/L10 高层调度是否真的有必要，什么场景才需要。
- SUB-16-08｜Agent 如何读取已有 Q / canonical，而不是每轮从聊天重新理解。
- SUB-16-09｜Agent 输出如何回写原 Q，而不是新建平行问题。
- SUB-16-10｜一个 blocker 如何不阻塞整批；批处理如何跳过并继续。
- SUB-16-11｜每小时任务如何做到 one-shot 幂等、CYCLE_DONE / NO_OP / BLOCKED / USER_REVIEW。
- SUB-16-12｜Agent 何时必须 USER_REVIEW，何时必须自行判断。
- SUB-16-13｜Agent 如何避免无限递归 spawn、无限研究、无限新工单。
- SUB-16-14｜Agent 如何接 Codex 真施工，又不把 Codex 误当问题判断器。
- SUB-16-15｜Agent 是否真的通过外部 scheduler 被触发，而不是提示词里写“每小时”自我幻想。

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

