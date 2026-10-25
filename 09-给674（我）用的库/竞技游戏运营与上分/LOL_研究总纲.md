---
type: lol-macro-learning-hub
scope: summoners-rift-ranked
linear_issue: 674-316
patch_baseline: "26.21"
status: six-round-desk-study-complete-await-real-matches
updated: 2026-10-25
---

# LOL 高级运营与上分｜唯一研究总纲

**核心 Z：为什么对线/打团并不差，还是无法稳定把优势转成赢？**

## 决策链（跨位置）
胜利条件 → 兵线与回城时机 → 地图信息/人数差 → 中立资源或防御塔交换 → 边线/团战取舍 → 终结比赛 → 回放验证。

## 六轮入口
- R1：[[R1_胜利条件与基线]]
- R2：[[R2_兵线回城与节奏]]
- R3：[[R3_地图信息与野区联动]]
- R4：[[R4_目标控制与资源交换]]
- R5：[[R5_中后期分推与终结]]
- R6：[[R6_实战复盘与上分验证]]

[[实战复盘模板|实战复盘模板]] · [Linear 674-316](https://linear.app/674/issue/674-316/chatgptcodexlol高阶运营与上分研究六轮课程实战复盘canvas)

## 游戏内一问
这一次行动中，我投入了什么成本，换到了什么确定或高概率的收益？假如无法获得它，损失最小的替代方案是什么？

## 优先研究的五类局面
1. 打赢对线仍不会结束游戏。
2. 优势推线却被抓，节奏全断。
3. 明知小龙/男爵重要却总是无法先到。
4. 队友打架与自己带线之间做不出选择。
5. 劣势局只能赌没有视野的团战。

## 版本与证据
截至2026-10-26，已核当前补丁26.21（官方补丁说明发布于2026-10-20；客户端补丁计划上线日为2026-10-21）。Riot 2026赛季加强推进/分推策略空间，并加入 Role Quests、Faelights 等机制；具体野怪计时/物品/任务奖励必须随补丁复核。
- https://www.leagueoflegends.com/en-ph/news/game-updates/league-of-legends-patch-26-21-notes/
- https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/
- https://www.leagueoflegends.com/en-us/news/dev/dev-2026-season-one-gameplay-preview/

## 个性化输入（目前未知）
服务器/段位与目标/主位置/英雄池/比赛录像；未知时只建立通用研究框架，不作诊断。

**DONE-建库**：一张Canvas可点击进入全部卡片，且6轮/复盘模板均存在。
**DONE-研究**：每轮条件、反例、实战案例，最后形成可检验的个人上分手册。
**STOP**：没有录像不称验证成功；不建立平行版本Canvas；不自动无限刷对局。

---

# 六轮桌面研究结果｜2026-10-26

> **已执行：R1–R6 通用高阶运营桌面研究；尚未执行：USER实战录像/个人段位复核。**

## 一张总决策树：先判断，再行动
```text
当前局面 -> WIN：这局主要靠谁/什么打法赢
  ↓
WAVE：哪路兵线即将撞塔，谁被迫清线
  ↓
INFO：敌方谁已被确认看到，谁可能藏在视野外
  ↓
TEMPO：我与队友谁已买装/有技能/先到场
  ↓
TRADE：打目标、逼团、拆塔、换半区、退守，哪项净收益更高
  ↓
EXIT：哪一个变动会令此方案必须立刻终止
  ↓
VERIFY：回放当时信息，不用结果倒推决策
```

|轮次|已提取可复用XN（条件化规则，不是胜率定律）|桌面状态|用户对局状态|
|---|---|---|---|
|[[R1_胜利条件与基线|R1]]|判断局势使用 Power/Wave/Information/Tempo/Objective 五项；击杀不等于兑现|DESK_DONE|WAIT_MATCH|
|[[R2_兵线回城与节奏|R2]]|兵线的价值由“令敌方必须回应的时间”决定；回城与目标双时钟对齐|DESK_DONE|WAIT_MATCH|
|[[R3_地图信息与野区联动|R3]]|确认/推断/未知分级；视野有效性由它改变哪项行动决定|DESK_DONE|WAIT_MATCH|
|[[R4_目标控制与资源交换|R4]]|资源不是必打；比较开怪、逼团、跨图换塔、保线止损至少四条路线|DESK_DONE|WAIT_MATCH|
|[[R5_中后期分推与终结|R5]]|有效分推=对手必须回应+我方确实获得另一窗口；否则不算兑现|DESK_DONE|WAIT_MATCH|
|[[R6_实战复盘与上分验证|R6]]|依时刻可知信息分析一个最关键失误；每5局只调整一个习惯|PROTOCOL_DONE|WAIT_MATCH|

## 2026版本事实核验表（官方Riot）
|机制|已核结论|证据|注意|
|---|---|---|---|
|26.21当前版本|补丁说明2026-10-20发布，补丁计划2026-10-21生效|[26.21](https://www.leagueoflegends.com/en-ph/news/game-updates/league-of-legends-patch-26-21-notes/) / [官方2026排期](https://support.riotgames.com/en-us/league-of-legends/gameplay/patch-schedule-league-of-legends)|后续版本变动要更新|
|位置任务 Role Quests|2026赛季引入，前期换线与资源分配有新约束|[26.1](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)|分中上野辅下，不能用旧奖励|
|Faelights新增视野点|放置守卫获得额外临时视野，拓宽边带可用点位|[26.1](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)|视野额外区域不是永久安全|
|大龙时间|常规召唤师峡谷20分钟恢复大龙|[26.1](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)|**Swiftplay 另有缩短规则，不能混用**|
|旧活动资源|2026移除 Atakhan、Blood Roses、Feats of Strength|[26.1](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)|旧赛季攻略要剔除|
|兵线间隔|14分钟后每25秒，30分钟后每20秒刷出一波|[26.1](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)|这里指**刷新间隔**，不是抵达塔的时间|
|拆塔分段|外塔/二塔/高地塔持续存在可兑现的血量区间收益|[26.1](https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-1-notes/)|别用2025年“14分钟塔皮消失”|
|录像下载频率|26.21期间开始限制每小时下载10次|[26.21](https://www.leagueoflegends.com/en-ph/news/game-updates/league-of-legends-patch-26-21-notes/)|录像批量审核须节制频次，不假定无限下载|

## 六轮研究中真正重要的三种关系
**WAVE→TEMPO**：推线只是一段时间的权利，不是安全保证；如果人残血、队友不跟，这段权利可能无法利用。

**INFORMATION→RISK**：看见敌方一个人出现在上半区，不等于下半区所有风险清零。地图事实应有“确认、推断、未知”三种置信等级。

**PRESSURE→RESPONSE→CONVERSION**：边带制造压力、迫使对手派人处理，必须和其他队友兑现资源形成连续因果，才称有效的运营。

## 三道综合测试题（答案放在相应轮次）
1. 你方中单回城买装，自己上单正带到敌二塔，敌方打野两分钟前出现下路。现在是否该继续打塔？
2. 对面先落位小龙，你方下路没状态、中路被推进；但上路可安全拿塔。该打、换还是退？
3. 队友打赢团战却没人带兵线，敌方基地水晶已空；应继续找击杀还是推进并重置？

**判题标准**：必须陈述「当时可知信息」「替代动作」「什么证据会推翻自己的答案」，不提供脱离局面的唯一标准口令。

## 当前结束位置
- **六轮桌面研究：DONE**（6/6，含规则、反例、训练题、资料来源）。
- **个人实战验证：BLOCKED_DATA**（0场USER录像；没有KDA、分段、位置与战绩，不能声称已上分）。
- **下一次最小输入**：一场完整或局部录像/回放时间码，优先做10–20分钟的资源决策诊断；如无录像，就用一局口述事件形成待验证判断。
- **本地Obsidian真机视觉审阅：WAIT_LOCAL_UI**。GitHub回读≠Windows同步成功。
- **不另建工单**，继续674-316原Canvas原位修改；完整复盘入口：[[实战复盘模板]]。
