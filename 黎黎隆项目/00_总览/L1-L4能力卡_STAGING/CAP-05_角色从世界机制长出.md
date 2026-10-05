---
title: CAP-CAP-05｜角色从世界机制长出
tags:
  - lililong
  - problem-map
  - capability-layer
problem_level: CAP
cap_kind: primary
host_main: MAIN-05
host_sub: SUB-05-06
status: STAGING
created: 2026-10-05
linear_parent: 674-116
---

# CAP-CAP-05｜角色从世界机制长出

宿主：MAIN-05 ｜ SUB-05-06
状态：STAGING（待 674 拍板，未进 Canvas 正本）

## 为什么这是能力而不是问题

「给角色配职业」不等于「职业从世界机制长出来」。
判据是反证：把这个角色搬到另一个世界，他还成立吗？若成立，说明职业是贴上去的装饰，不是能力。

## 主能力判据（PASS 门）

随机抽 3 个角色，遮住世界观名后仍能从职业/能力/工具反推出其世界机制；换世界则角色不成立。

## 次要能力点

| 点 ID | 能力点 | PASS 门 | 状态 | 降级后影响 |
|---|---|---|---|---|
| CAP-05a | 职业由机制派生 | 每 3 角色可反推 ≥1 条世界机制 | OPEN | 角色与世界脱钩 |
| CAP-05b | 能力由机制派生 | 能力来源可追溯到世界规则，不是作者赋予 | OPEN | 能力沦为数值外挂 |
| CAP-05c | 工具由机制派生 | 工具解决的是这个世界里的具体难题 | OPEN | 工具变成通用道具 |
| CAP-05d | 角色目标与世界机制自洽 | 角色目标与机制冲突时能被指出 | OPEN | 角色无内在张力 |

> 规则：主能力未 PASS 时，次要能力点全为 BLOCKED，不做无意义的局部优化。

## 阻塞

（无）

## 证据

（尚无。能力卡必须绑真实 receipt / SHA256 / commit，不接受文字声明。）

## 下一步

待 674 拍板后：把本卡写入 Canvas（stable node_id 增量 patch），并为每个次要能力点建 Linear 子任务。
