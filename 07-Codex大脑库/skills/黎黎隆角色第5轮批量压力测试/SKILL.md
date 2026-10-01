---
name: 黎黎隆角色第5轮批量压力测试
description: 在5A对账完成后，对5到10个真实角色做世界同化、角色目的、十元独立性、素材身份与视觉生产压力测试；只对真正待设计角色派生补图任务。
version: 1.0
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# 第5轮B｜角色批量压力测试 Skill

## 开工条件
只执行：
`黎黎隆项目/20_Agent系统/07_本地执行/角色生图/inbox/ROUND5B_CHARACTER_BATCH_STRESS.json`

且必须满足：
- 5A 报告存在；
- 5A 状态完成；
- 本任务从 WAITING_FOR_ROUND5A 转为 READY_FOR_LOCAL_CODEX。

未满足则输出 BLOCKED_BY_ROUND5A，不要提前生图。

## 核心
第5轮B不是“批量生成角色”。

它要找：
- 角色是否和世界脱节；
- 角色目的是否为空；
- 世界设定是否被角色真正承担；
- 十元是否被世界功能错误推导；
- 多角色是否越来越像；
- 素材身份有没有错配；
- 哪些角色真的需要补图。

## 每角色必须判断
1. world_alignment
2. character_purpose
3. purpose evidence
4. tenyuan independence
5. visual_readiness
6. asset identity match
7. body-template drift
8. unauthorized world/org/weapon invention
9. needs_generation
10. next_route

## 角色目的
一级：
- WORLD_EXPRESS：让世界成立/可理解
- WORLD_TEST：让世界的问题、代价、边界或例外暴露
- WORLD_CHANGE：承担历史、过渡或变化

二级可用：
MECHANISM / LIFESTYLE / ORGANIZATION / GEOGRAPHY / VALUE /
PROBLEM / COST / BOUNDARY / EXCEPTION /
TRANSITION / HISTORY / CHANGE

不要为了填表强行给每个角色多个标签。
主目的一个即可，secondary 可为空。

## 生图门
- READY_VISUAL：不重复跑图。
- HEAD_ONLY_DESIGN_PENDING：只有世界位置与身份足够明确时，才派生补图任务。
- ASSET_UNVERIFIED：先回 AG-04/素材对账，不生图。
- CONFLICT：停止该角色，记录冲突。

## STOP
若同一种系统性失败在3个以上角色重复出现：
- 立即停止继续扩样；
- 写 system_failure；
- 给出需要修的协议；
- 不用更多角色把同一个 bug 再演七遍。

## 输出
`黎黎隆项目/20_Agent系统/06_验证/ROUND5B_CHARACTER_BATCH_STRESS_REPORT.md`
