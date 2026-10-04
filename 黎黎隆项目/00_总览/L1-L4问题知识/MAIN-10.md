---
title: MAIN-10｜H3 / LongTake 如何从 10–11s 稳定扩展到长连续生产
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-10
linear_issue: 674-116
r2_phase: R2-B
status: partial
problem_level: MAIN
subproblem_count: 13
---

# MAIN-10｜H3 / LongTake 如何从 10–11s 稳定扩展到长连续生产

Canvas 入口：[[黎黎隆问题系统]]
来源：Linear 674-116｜R1 + R2-B｜comment d9d8b8bf-6ad4-474c-abb7-4644bf290d2d

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

- SUB-10-01｜为什么 15s 失败率高，10–11s 的稳定边界来自哪里。
- SUB-10-02｜每个 10–11s block 的输入包最少需要什么：角色、场景、动作、镜头、世界规则、音频。
- SUB-10-03｜首帧 / 尾帧 / 中间关键帧在 H3 中各自承担什么约束。
- SUB-10-04｜两个短 block 如何无缝拼成长镜：动作、姿态、空间、镜头速度、光线。
- SUB-10-05｜多 seed A/B 测试怎样判断“稳定”，而不是只挑最好的一条。
- SUB-10-06｜Director 的镜头包如何结构化到 worker 可直接执行。
- SUB-10-07｜4090 / 5090 worker 如何领取、回传、失败重试、避免重复跑。
- SUB-10-08｜H3 生成结果如何进入独立审核，而不是执行器自判 PASS。
- SUB-10-09｜LongTake 到 30s / 60s / 8min 时，应该用真正单长镜还是多 block 视觉连续方案。
- SUB-10-10｜长镜中的相机运动、人物运动、背景运动谁先锁。
- SUB-10-11｜ambient / emotional / role 三类音频字段如何真正进入镜头生产。
- SUB-10-12｜失败日志如何区分模型失败、输入失败、资产失败、连续性失败、调度失败。
- SUB-10-13｜付费云端成本如何限制重试策略与质量门槛。

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

