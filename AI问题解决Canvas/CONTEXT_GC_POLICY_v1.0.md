# CONTEXT_GC_POLICY v1.0

版本：2026-10-08  
Linear authoritative registry：674-294  
Loop hook：674-116  
System protocol：674-77

## 目标

防止长期 Linear Issue 随运行次数增长而成为默认全量读取的上下文黑洞。

原则：

**Recover Before Create / Hot Before History / Archive Before Bulk Read**

Linear = 热数据、当前状态、执行索引。  
GitHub = 冷历史、完整证据、版本与回滚。

## 默认读取顺序

1. `CURRENT_SNAPSHOT`
2. `ACTIVE_LINKS`
3. `BLOCKERS`
4. `NEXT`
5. `ARCHIVE_POINTER`
6. 必要时最近 3–5 条 receipt/comment
7. 只有 RECOVERY / conflict / provenance 才定向读取冷历史

常规运行禁止默认批量读取整个 Issue 的 comments/history/attachments。

## 热数据结构

```yaml
CONTEXT_GC_STATE:
  policy: 674-294
  read_mode: HOT_ONLY | RECOVERY
  last_gc:
  runs_since_gc:
  current_snapshot_version:
  recent_receipts_kept: 5
  archive_pointer:
  gc_required: true | false
```

业务 Issue 顶部应提供：

```text
CURRENT_SNAPSHOT
ACTIVE_LINKS
BLOCKERS
NEXT
ARCHIVE_POINTER
```

## 默认触发器

任一成立即进入 GC：

```yaml
runs_since_gc: ">=10"
active_run_records: ">5"
estimated_active_context_tokens: ">=6000"
superseded_or_duplicate_blocks: true
agent_needs_more_than_5_history_records_for_routine_run: true
```

## GC 操作

```text
HOT SCAN
→ 提取仍有效状态
→ 写新的 CURRENT_SNAPSHOT
→ 保留最近 3–5 个 receipt
→ 历史明细写入 context_gc/<issue_id>/
→ 更新 ARCHIVE_POINTER
→ read_mode = HOT_ONLY
```

不能盲删 provenance。至少保留：

- issue_id
- run_id / version
- artifact path / SHA / receipt
- USER 决策来源
- superseded_by / replaces
- failure family
- timestamp

## 每轮自动钩子

674-116 每轮：

```text
PRE: HOT_ONLY read
→ WORK
→ RECEIPT
→ POST: trigger check
→ if triggered: ARCHIVE → SNAPSHOT → POINTER
```

GC 不创建新的 Linear Issue。

## 首批接入

- 674-282：角色 XN/SN 规则验证
- 674-293：角色素材正本/中转
- 674-272：SOCIAL→US 外知识吸收与验证
- 674-106：Lina03 证据/可视化/应用
- 674-286：B端/H3生产编排
- 674-116：每小时增量闭环

## 回滚

本文件进入 Git 历史。任何 GC 规则变更必须有 commit；出现误压缩时，从 Git 历史或对应 `context_gc/<issue_id>/` 冷档恢复，不依赖 Linear 评论全文重扫。
