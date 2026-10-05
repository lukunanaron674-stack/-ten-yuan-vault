---
title: D3｜34 Formal Problem 分发映射
tags: [lililong, problem-dispatch, d3, linear]
status: done
parent_issue: 674-116
batch_issue: 674-177
---

# D3｜一问题一工单一问题专员

## 验收

- Formal Problem：34
- Linear 独立问题工单：34
- 问题专员代理合同：34/34
- parent：674-116
- batch relation：674-177
- active queue：30
- backlog/deferred/support：4
- orphan：0
- duplicate Formal Problem：0

> “问题专员代理”在当前实现中以每张工单内的专员代理合同绑定：唯一问题、专员名称、职责链、DONE、STOP/WAIT、receipt 规则。它不是额外创建一个 Linear 用户账号；后续任何 Chat/Agent/Codex 接单时必须按该专员合同执行。

## 分发表

| Formal | Linear | 正式问题 | 专员代理 | 队列 | Linear状态 |
|---|---|---|---|---|---|
| FP-01 | 674-178 | 头像画风稳定复现 | 头像风格专员 | CORE | Todo |
| FP-02 | 674-179 | 世界观到头像的可画视觉语言 | 角色世界观接口专员 | SECONDARY | Todo |
| FP-03 | 674-180 | 头像到中景/全身的身份与比例延展 | 角色一致性专员 | CORE | Todo |
| FP-04 | 674-181 | 服装生成系统 | 服装系统专员 | SECONDARY | Todo |
| FP-05 | 674-182 | 角色世界职责、个人目标与事件能力 | 角色剧情职责专员 | CORE | Todo |
| FP-06 | 674-183 | 93角色去重与等级系统 | 角色库治理专员 | SECONDARY | Todo |
| FP-07 | 674-184 | canonical 与冲突裁决权 | 正本治理专员 | CORE | Todo |
| FP-08 | 674-185 | 世界设定生命周期与发散STOP | 世界观治理专员 | SECONDARY | Todo |
| FP-09 | 674-186 | 世界底层机制、资源与可调用接口 | 世界结构专员 | CORE | Todo |
| FP-10 | 674-187 | 场景画风稳定复现 | 场景风格专员 | CORE | Todo |
| FP-11 | 674-188 | 角色×场景×世界规则的同镜头融合 | 综合镜头视觉专员 | CORE | Todo |
| FP-12 | 674-189 | 跨镜头连续性系统 | 连续性专员 | CORE | Todo |
| FP-13 | 674-190 | H3 10–11秒稳定短块 | H3稳定性专员 | CORE | Todo |
| FP-14 | 674-191 | LongTake拼接与Director→worker执行链 | LongTake生产专员 | CORE | Todo |
| FP-15 | 674-192 | 故事事件发动机 | 故事事件专员 | CORE | Todo |
| FP-16 | 674-193 | 故事颗粒度与自动评价 | 故事结构评估专员 | SECONDARY | Todo |
| FP-17 | 674-194 | 十元进入项目生产的最小接口 | 十元转译专员 | CORE | Todo |
| FP-18 | 674-195 | 十元外部验证与旧语法迁移 | 十元验证专员 | SECONDARY | Todo |
| FP-19 | 674-196 | 游戏/音乐动态链专项研究 | 跨媒介动态链专员 | DEFERRED_RESEARCH | Backlog |
| FP-20 | 674-197 | 资产版本身份与下游锁定 | 资产治理专员 | CORE | Todo |
| FP-21 | 674-198 | 图片/附件素材传递证据链 | 素材传递专员 | CORE | Todo |
| FP-22 | 674-199 | 生产状态机与质量门 | 生产流程专员 | CORE | Todo |
| FP-23 | 674-200 | 生产修正轮数与吞吐效率 | 生产效率专员 | SECONDARY | Todo |
| FP-24 | 674-201 | 统一问题模型 | 问题模型专员 | CORE | Todo |
| FP-25 | 674-202 | Agent职责与Codex施工边界 | Agent架构专员 | CORE | Todo |
| FP-26 | 674-203 | Agent增量运行、幂等、STOP与scheduler | Agent运行时专员 | CORE | Todo |
| FP-27 | 674-204 | 作品集核心定位、时长决策与版式 | 作品集定位专员 | CORE_FAST | Todo |
| FP-28 | 674-205 | 作品集如何证明稳定生产而非AI抽卡 | 作品集证明链专员 | CORE | Todo |
| FP-29 | 674-206 | 项目优先级与质量护栏 | 项目决策专员 | SECONDARY_FAST | Todo |
| FP-30 | 674-207 | 生产成本与8分钟预算模型 | 成本模型专员 | SECONDARY | Todo |
| FP-31 | 674-208 | 商业载体与最小市场验证 | 商业验证专员 | DEFER_TRIGGER | Backlog |
| FP-32 | 674-209 | 投资合作权责模板 | 合作条款专员 | TRIGGER_ONLY | Backlog |
| FP-33 | 674-210 | 当前本地4080生产基础设施基线 | 生产基础设施专员 | CORE | Todo |
| FP-34 | 674-211 | 存储/外接系统/硬件安全与SUPPORT边界 | 基础设施支持专员 | SUPPORT | Backlog |

## 调度规则

1. 1 Formal Problem = 1 Linear 工单 = 1 问题专员代理合同。
2. 问题专员只负责本问题，从 RECOVER 到 DONE/STOP；不得顺手吞并其他独立问题。
3. 文件施工统一调用 674-115；视觉生产走视觉生产链。施工器不是问题判断器。
4. CORE / CORE_FAST / SECONDARY / SECONDARY_FAST 为 Todo；DEFERRED_RESEARCH / DEFER_TRIGGER / TRIGGER_ONLY / SUPPORT 为 Backlog。
5. 工单必须以 canonical 回写或可验证 receipt 才能 DONE；评论文字本身不是完成证据。
6. 新聊天框可以直接发送 Linear 工单号，先读取该工单中的问题专员合同和最新 canonical 再执行。

## D3 STOP

D3 只完成“正式分发和专员绑定”，不等于34个问题已经解决。后续进入 D4 总验收，或直接按价值/依赖从 Formal Problem 工单开始并行解决。
