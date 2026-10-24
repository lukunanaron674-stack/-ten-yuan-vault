---
title: MAIN-13｜资产 source-of-truth / 版本 / 锁定 / SHA / 旧新设定优先级如何统一
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-13
linear_issue: 674-116
r2_phase: R2-C
status: partial
problem_level: MAIN
subproblem_count: 9
---

# MAIN-13｜资产 source-of-truth / 版本 / 锁定 / SHA / 旧新设定优先级如何统一

Canvas 入口：[[黎黎隆问题系统]]
来源：Linear 674-116｜R1 + R2-C｜comment ee9496b5-cb41-4da0-b258-7dc6e45938c1

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

- SUB-13-01｜角色、场景、世界观、分镜各自唯一 source-of-truth 在哪里。
- SUB-13-02｜USER_APPROVED / CANDIDATE / LOCKED / SUPERSEDED / REJECTED 如何统一状态化。
- SUB-13-03｜同名文件不同版本如何防止误取。
- SUB-13-04｜图片、Markdown、Canvas、Linear 状态冲突时谁有最终裁决权。
- SUB-13-05｜SHA256、节点 ID、附件 ID、文件路径怎样组合成稳定资产身份。
- SUB-13-06｜旧设定与新设定发生冲突时，如何记录替代关系而不是覆盖历史。
- SUB-13-07｜候选图什么时候允许进入下游生成，什么时候必须禁止。
- SUB-13-08｜角色冻结项 / 可发散项 / 禁止项如何绑定到具体资产版本。
- SUB-13-09｜资产锁定后如何允许动画化简化而不被误判成重设计。

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

