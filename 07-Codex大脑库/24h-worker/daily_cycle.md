# 每日循环流程

## 8:00 醒来

```text
1. 查状态：有没有正在跑的 F12？有没有卡住？
2. 查仓库：昨天新增了什么？有没有新归档？
3. 查缺口：哪个十元 / 动态链 / 五维仓最薄？
```

## 8:30 数据体检

扫仓库，输出 `reports/data_audit_YYYY-MM-DD.md`。

检查项：空文件、重复文件、标题不清、YAML缺字段、路径放错、同名归档、过时规则。

## 10:00 废矿扫描

扫描可降权/删除内容，输出 `reports/delete_candidates_YYYY-MM-DD.md`。

分三级：低风险(加deprecated标签)、中风险(移99-旧库)、高风险(只建议不执行)。

## 12:00 十元语义样本

抽取知识库片段，生成弱标签 JSONL，写入 `training_data/pending_review/semantic_candidates_YYYY-MM-DD.jsonl`。

只写 `pending_review`，不进 `gold_dataset`。

## 14:00 F12 任务生成

根据缺口生成下一批 F12 任务文件，写入 `04-F12总控载体/runtime/tasks/tasks_next.txt`。

模板格式：`---TASK---` 分隔多轮任务。

## 16:00 自检

生成自检报告 `reports/self_review_YYYY-MM-DD.md`。

包含：完成率、有效率、废话率、重复率、污染风险、未补缺口、下批建议。

## 18:00 日报

汇总今日所有产出，生成 `reports/daily_report_YYYY-MM-DD.md`。
