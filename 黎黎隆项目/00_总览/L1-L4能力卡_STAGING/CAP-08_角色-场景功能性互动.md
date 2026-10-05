---
title: CAP-CAP-08｜角色-场景功能性互动
tags:
  - lililong
  - problem-map
  - capability-layer
problem_level: CAP
cap_kind: primary
host_main: MAIN-08
host_sub: SUB-08-07
status: STAGING
created: 2026-10-05
linear_parent: 674-116
---

# CAP-CAP-08｜角色-场景功能性互动

宿主：MAIN-08 ｜ SUB-08-07
状态：STAGING（待 674 拍板，未进 Canvas 正本）

## 为什么这是能力而不是问题

角色和场景各自成立 ≠ 放在一起成立。
能力判据是**去掉角色或去掉场景，画面信息量必须下降**。如果只是并排摆着，互动就是假的。

## 主能力判据（PASS 门）

做消融测试：删掉角色或删掉场景，画面叙事信息量必须可判定地下降。

## 次要能力点

| 点 ID | 能力点 | PASS 门 | 状态 | 降级后影响 |
|---|---|---|---|---|
| CAP-08a | 能力在场景产生实际作用 | 角色的能力在场景里真的用上了 | OPEN | 角色沦为背景板 |
| CAP-08b | 职业与场景产生冲突或协作 | 存在可指认的互动关系 | OPEN | 并排摆布，无叙事张力 |
| CAP-08c | 工具成为叙事道具 | 工具推动情节，不只是手持 | OPEN | 道具装饰化 |

> 规则：主能力未 PASS 时，次要能力点全为 BLOCKED，不做无意义的局部优化。

## 阻塞

（无）

## 证据

（尚无。能力卡必须绑真实 receipt / SHA256 / commit，不接受文字声明。）

## 下一步

待 674 拍板后：把本卡写入 Canvas（stable node_id 增量 patch），并为每个次要能力点建 Linear 子任务。
