---
title: MAIN-14｜图片/附件/Linear/Codex/Chat/云端 worker 的素材传递如何稳定、可读、可追溯
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-14
linear_issue: 674-116
r2_phase: R2-C
status: partial
problem_level: MAIN
subproblem_count: 10
---

# MAIN-14｜图片/附件/Linear/Codex/Chat/云端 worker 的素材传递如何稳定、可读、可追溯

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

- SUB-14-01｜Chat 能否稳定读取 Linear 中图片像素，而不只是附件元数据。
- SUB-14-02｜Codex 能否稳定读取多图 / 双图并保持顺序和角色映射。
- SUB-14-03｜Canvas 内嵌图片如何拿到真实原始字节。
- SUB-14-04｜大图包 / 多附件如何传递，大小限制和压缩策略是什么。
- SUB-14-05｜网页 Director 如何获取生产素材，而不是只看到描述。
- SUB-14-06｜云端 4090/5090 worker 如何领取真实图片并验证 SHA。
- SUB-14-07｜本地路径如何映射到远程附件 / 云端工作目录。
- SUB-14-08｜附件过期、链接失效、签名 URL 变化时如何保持长期可追溯。
- SUB-14-09｜素材传递失败如何区分：缺文件 / 读不到 / 读错版本 / 顺序错 / 像素错。
- SUB-14-10｜视觉审核证据如何回传，避免只有文字“PASS”没有图。

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

