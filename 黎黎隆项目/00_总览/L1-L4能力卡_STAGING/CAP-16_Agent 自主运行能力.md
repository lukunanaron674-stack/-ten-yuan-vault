---
title: CAP-CAP-16｜Agent 自主运行能力
tags:
  - lililong
  - problem-map
  - capability-layer
problem_level: CAP
cap_kind: primary
host_main: MAIN-16
host_sub: SUB-16-02 / 04 / 11 / 13 / 15
status: STAGING
created: 2026-10-05
linear_parent: 674-116
---

# CAP-CAP-16｜Agent 自主运行能力

宿主：MAIN-16 ｜ SUB-16-02 / 04 / 11 / 13 / 15
状态：STAGING（待 674 拍板，未进 Canvas 正本）

## 为什么这是能力而不是问题

Agent 文档写了流程 ≠ Agent 能自己跑。
这一层的核心是**不靠人盯着**。任何需要用户在场才能推进的环节，都是能力缺口而不是配置问题。

## 主能力判据（PASS 门）

连续 7 天 one-shot 触发，无需人工干预完成 ≥N 轮；且任一轮失败可自动恢复或明确升级为 USER_REVIEW 而非静默卡死。

## 次要能力点

| 点 ID | 能力点 | PASS 门 | 状态 | 降级后影响 |
|---|---|---|---|---|
| CAP-16a | 隐式底层能力自主工作 | L1/L2 能力不需用户显式管理 | OPEN | 用户成为调度瓶颈 |
| CAP-16b | 职责边界不抢写 | L5/L6 专业 Agent 无重叠写入 | OPEN | canonical 被多方污染 |
| CAP-16c | one-shot 幂等 | 同一周期重复触发结果一致，不产生重复工单 | OPEN | 任务翻倍，状态错乱 |
| CAP-16d | 外部 scheduler 真触发 | 由外部调度器真实触发，非提示词自我幻想 | OPEN | 「每小时」只是文字 |
| CAP-16e | 不无限递归扩张 | spawn 有门槛与死亡条件 | OPEN | 工单/研究无限膨胀 |

> 规则：主能力未 PASS 时，次要能力点全为 BLOCKED，不做无意义的局部优化。

## 阻塞

SUB-16-15 未验证：需确认真由 schtasks 触发，而非模型自称。

## 证据

（尚无。能力卡必须绑真实 receipt / SHA256 / commit，不接受文字声明。）

## 下一步

待 674 拍板后：把本卡写入 Canvas（stable node_id 增量 patch），并为每个次要能力点建 Linear 子任务。
