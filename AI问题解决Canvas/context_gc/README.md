# context_gc

本目录承载长期 Linear Issue 的冷历史归档。

规则正本：../CONTEXT_GC_POLICY_v1.0.md  
Linear：674-294  
自动循环：674-116

目录格式：

```text
context_gc/
  674-282/
    YYYYMMDD-HHMM_<snapshot_version>.md
  674-293/
  674-272/
  674-106/
  674-286/
```

每次 GC 文件至少记录：

```yaml
issue_id:
gc_time:
snapshot_before:
snapshot_after:
runs_archived:
range:
superseded_items:
artifact_locators:
user_decision_sources:
failure_families:
previous_archive:
next_archive:
```

只在 GC 实际触发时创建对应 Issue 子目录/归档文件；不预生成空历史。
