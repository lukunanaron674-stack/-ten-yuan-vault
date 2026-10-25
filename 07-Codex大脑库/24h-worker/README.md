# 2026-10-25｜674-298 增量巡航（只读试点）

**这是修复分支里的候选实现，不代表用户 Windows 4080 已部署或定时任务已启用。**

- 运行入口：`node "07-Codex大脑库/24h-worker/cruiser.js"`，无 `--batch` 参数时只读检查 `黎黎隆项目/`。
- 若当前目录不是 Vault：设置 `OBSIDIAN_VAULT` 为真实 Vault 绝对路径，或传 `--vault=绝对路径`；不得沿用旧机硬编码路径。
- 可选 `--scope=黎黎隆项目`，`--state-dir=Vault外目录`；默认状态存于用户主目录 `.74-obsidian-maintainer`。
- 首次为 `BASELINE`，随后无变化为 `NO_OP`（不新增报告），有变化为 `REVIEW`（仓库外更新一份 `latest-*.json`）。
- 按 SHA-256 识别 Markdown/Canvas/JSON/YAML 增量，输出重复内容候选及 Canvas JSON 解析异常，不自动移动、合并、删除、修改正本或提交 Git。
- 超过 8MB 的文本文件会列为 `skipped_oversize`，不当作已分析；全量资源图片和视频不在本扫描范围。
- 工作进程持有独占锁；遇到旧锁/路径不明/越界立即 STOP，不能静默抢锁或创建空 Vault。
- `node --test "07-Codex大脑库/24h-worker/tests/incremental_cruise.test.js"` 用于本地验证；PR 检查在 Windows/Linux 执行。
- 原 `cruiser.js --batch=N` 仍为手动旧批次报告，不应用作新自动化默认入口。
- `cruiser-daemon.js` 需要 `--allow-legacy-full-scan`；`role-cruiser.js` 需要 `--allow-legacy-role-cruise` 和 `F12_CLI_COMMAND`，均不得自动恢复旧每小时任务。
- 本轮只实现 R1（增量发现与安全门），语义优化/本地 Hermes 接口、真实文件受控搬迁属于后续 R2/R3，必须走现有 L0/L1/L2 权力门禁。
- GitHub 版本不是 Windows 当前文件树；正式搬迁前仍需核对 674-270、674-298 和本地实际运行状态。

---
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
