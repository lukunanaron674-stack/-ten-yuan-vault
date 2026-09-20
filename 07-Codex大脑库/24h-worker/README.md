# Codex 24h Worker v0.1

## 它是什么

Codex 24小时工作是仓库巡航员，负责每天定时巡逻你的 Obsidian / GitHub 知识库。

它不是：
- ❌ 理论裁判（不改十元核心理论）
- ❌ 自动发布器（不直接推 main）
- ❌ 永删执行者（只生成候选清单）

## 它做什么

每天 6 个固定工位：
1. 数据体检 — 扫描空文件、重复、缺字段
2. 语义样本 — 抽取十元弱标签写到 pending_review
3. 废矿候选 — 标记可降权/删除内容
4. F12 任务生成 — 根据缺口生成下一批任务
5. 归档自检 — 检查 CarryPacket 和归档完整性
6. 日报 — 汇总今日产出

## 安全铁律

- 不直接删除任何文件
- 不直接写入 gold_dataset
- 不直接修改核心十元理论
- 不直接推 main
- 没有明确输出文件不算完成
- 高风险变更只生成 handoff 等待确认

## 目录结构

```
24h-worker/
├─ README.md              ← 你在这里
├─ daily_cycle.md         每天循环流程
├─ safety_policy.md       安全边界详细规则
├─ metrics.md             量化指标
├─ task_queue_schema.json 任务队列字段定义
├─ daily_worker_plan.md   6 个工位详细排班
├─ hermes_24h_daily_role_experiment.md
│                         Hermes × Codex 24小时角色实验督促协议
├─ prompts/               各工位的 prompt 模板
│  ├─ data_audit_prompt.md
│  ├─ semantic_candidate_prompt.md
│  ├─ delete_candidate_prompt.md
│  ├─ f12_next_task_prompt.md
│  ├─ self_review_prompt.md
│  └─ ll_role_protagonist_tenyu_mv_experiment.md
│                         黎黎隆角色主角 / 十元魅力 MV实验
└─ reports/               每日输出
   ├─ data_audit_YYYY-MM-DD.md
   ├─ delete_candidates_YYYY-MM-DD.md
   ├─ daily_report_YYYY-MM-DD.md
   └─ self_review_YYYY-MM-DD.md
```

## 黎黎隆角色主角实验

每个角色卡都是主角。每轮只选一位角色，完成单人、角色×场景、角色×他者三类实验，并产出 8 条可直接复制的 H3 镜头词；所有角色图、场景图和十元关系必须以仓库可核验文件为依据。文字设计、实际 H3 生成和盲审必须分开记录。

Codex 执行文案：
`prompts/ll_role_protagonist_tenyu_mv_experiment.md`

Hermes 每日督促协议：
`hermes_24h_daily_role_experiment.md`

## 版本

v0.2 — 加入《黎黎隆》十元角色魅力 MV 实验与 Hermes × Codex 24小时督促协议
