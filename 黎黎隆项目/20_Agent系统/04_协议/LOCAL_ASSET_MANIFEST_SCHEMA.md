# LOCAL_ASSET_MANIFEST_SCHEMA｜本地素材目录清单 v1

> 本地 watcher 维护真实目录映射；仓库只保存逻辑路径与可检索元数据。

## catalog_header
```yaml
schema_version: "1.0"
catalog_version:
generated_at:
watcher_id:
roots:
  - root_id: CHAR_REF
    label: 角色参考
  - root_id: SCENE_REF
    label: 场景参考
```

## asset_record
```yaml
asset_id:
root_id:
relative_path:
file_name:
file_hash_sha256:
perceptual_hash: null
file_size_bytes:
mtime:
media_type: IMAGE | VIDEO | AUDIO | OTHER
width: null
height: null
duration_sec: null

project_refs: []
character_ids: []
scene_ids: []
roles: []
tags: []

duplicate_of: null
identity_confidence: 0.0
tag_source: PATH | EXISTING_INDEX | VISUAL_REVIEW | HUMAN

lock_status: CANDIDATE | APPROVED | LOCKED
style_review_status: PASS | PENDING | NOT_REQUIRED
usable_for_h3: false
status: PRESENT | MISSING | MOVED
last_seen_at:
notes:
```

## delta_record
```yaml
catalog_version_before:
catalog_version_after:
added: []
changed: []
missing: []
duplicate_links: []
tag_updates: []
```

## 路径规则
仓库中只写 root_id + relative_path。
真实本机目录映射保存在本地配置，不进入仓库。

## 素材 ID
建议稳定格式：`AST-{TYPE}-{hash8}`。
asset_id 由内容 hash 派生，不因文件移动而改变。

## 查询最小返回
```yaml
asset_id:
role:
root_id:
relative_path:
version_or_hash:
lock_status:
style_review_status:
usable_for_h3:
```

只有发生冲突、重复或风格核验时才展开更多字段。
