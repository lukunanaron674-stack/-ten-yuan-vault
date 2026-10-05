---
title: CAP-CAP-01｜干净复现能力
tags:
  - lililong
  - problem-map
  - capability-layer
problem_level: CAP
cap_kind: primary
host_main: MAIN-01
host_sub: SUB-01-01 ~ SUB-01-09
status: STAGING
created: 2026-10-05
linear_parent: 674-116
---

# CAP-CAP-01｜干净复现能力

宿主：MAIN-01 ｜ SUB-01-01 ~ SUB-01-09
状态：STAGING（待 674 拍板，未进 Canvas 正本）

## 为什么这是能力而不是问题

找到「复刻办法」不等于「能复刻」。办法可以写下来，但能力必须**稳定做到**。
如果只能靠特定聊天框 / 特定轮次 / 特定人记住的隐含上下文才复刻成功，那是运气不是能力。
所以 CAP-01 的 PASS 门不能用「我们找到方法了」，必须用「clean context 里 3/3 出同一画风」。

## 主能力判据（PASS 门）

在**不继承旧聊天隐含上下文**的 clean-room 中，3/3 独立产出可识别为同一画风；≥2/3 不模板化；674 最终确认。

## 次要能力点

| 点 ID | 能力点 | PASS 门 | 状态 | 降级后影响 |
|---|---|---|---|---|
| CAP-01a | 视觉语法可书面化 | 产出 ≥6 维可执行语法清单（线条/块面/脸型/五官/信息量/边缘/色彩/头肩比） | OPEN | 无此项则后续全部靠手感，不可传递 |
| CAP-01b | 输入必要性可判定 | 每个输入项标注 REQUIRED / OPTIONAL / FORBIDDEN / UNKNOWN | OPEN | 无法剔除冗余输入，模板无法收敛 |
| CAP-01c | 输入模板可冻结 | 3 人独立读同一模板，产出同质结果 | OPEN | 复现只在作者本人成立 |
| CAP-01d | 跨上下文可复现 | 跨聊天框 3/3、跨轮次 ≥2/3、跨角色 ≥2/3 头部剪影差异成立 | OPEN | 能力绑定在特定上下文，不可交付 |
| CAP-01e | 画风漂移可检测 | 存在可判定的漂移阈值（不是主观判断） | OPEN | 塌缩无法被及时发现 |
| CAP-01f | 风格基准可冻结 | 基准集 + SHA256 + 674 锁定 | OPEN | 审核器失去 ground truth |

> 规则：主能力未 PASS 时，次要能力点全为 BLOCKED，不做无意义的局部优化。

## 阻塞

1. 两个 session 导出源文件绝对路径未给 → CAP-01b 无法起步（v1 第 5 节阻塞项）
2. 缺 Codex CLI 绝对入口（V10-A BLOCKED_CODEX_CLI_ENVIRONMENT）→ clean-room 跑不起来

## 证据

（尚无。能力卡必须绑真实 receipt / SHA256 / commit，不接受文字声明。）

## 下一步

待 674 拍板后：把本卡写入 Canvas（stable node_id 增量 patch），并为每个次要能力点建 Linear 子任务。
