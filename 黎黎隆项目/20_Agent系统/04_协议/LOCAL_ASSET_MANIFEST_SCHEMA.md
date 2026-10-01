# LOCAL_ASSET_MANIFEST_SCHEMA｜本地素材目录清单 v1.1

> 本地 watcher 维护真实目录映射；仓库只保存逻辑路径与可检索元数据。

## catalog_header
```yaml
schema_version: "1.2"
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

# 生成来源。仅当真实来源可追溯时填写。
generation_seed: null
generation_workflow_id: null
generation_model: null
generation_params_ref: null
seed_source_ref: null

duplicate_group: null
canonical_asset_id: null
# 全部物理落点；旧字段 root_id + relative_path 表示首选 locator，不得据此丢弃其他路径。
asset_locations: []
# 仅建议状态，不授予任何文件操作权限。
cleanup_recommendation: KEEP | REVIEW | QUARANTINE_CANDIDATE
identity_confidence: 0.0
tag_source: PATH | EXISTING_INDEX | VISUAL_REVIEW | HUMAN

lock_status: CANDIDATE | APPROVED | LOCKED
style_review_status: PASS | PENDING | NOT_REQUIRED
usable_for_h3: false
status: PRESENT | MISSING | MOVED
last_seen_at:
notes:
```

## 重复项与路径保留规则
- 相同 SHA-256 可共享逻辑 asset_id / canonical_asset_id，但每个实际文件落点必须保存在 asset_locations；保留来源、版本及所有引用。
- canonical 只表示默认查询/引用入口，不表示其他路径可删除。相似图只标候选，不合并字节不同的资产身份。
- cleanup_recommendation 仅供人工审核队列使用；本 schema 不授权 watcher 或 Agent 删除、移动或覆盖文件。
- 永久删除前必须经过逐路径批准、可恢复隔离、引用回归验证和单独的二次授权。

## seed 导入规则
- `generation_seed` 是“该图片/素材生成时使用的 seed”，属于资产溯源信息。
- 它与 `RENDER_TASK_SCHEMA` 中 H3 视频执行任务自己的 `seed` 是两个不同概念，禁止互相覆盖。
- seed 可以来自旧 seed 文档、ComfyUI 元数据、工作流 JSON 或本地数据库，但必须通过真实文件、hash 或明确记录绑定到具体 `asset_id` 后才写入。
- 只知道一个 seed、却无法确认对应哪张图片时，不得猜测绑定；保留在待解析队列。
- 同一 asset 有多次生成记录时，主记录保存最终确认的一组 provenance，其余记录写入 `generation_params_ref` 指向外部历史。

## delta_record
```yaml
catalog_version_before:
catalog_version_after:
added: []
changed: []
missing: []
duplicate_links: []
tag_updates: []
seed_links_added: []
seed_links_unresolved: []
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
generation_seed: null
lock_status:
style_review_status:
usable_for_h3:
```

只有发生冲突、重复、seed 追溯或风格核验时才展开更多字段。
