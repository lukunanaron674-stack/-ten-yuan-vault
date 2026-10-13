---
name: tenyuan-c-asset-audit
description: Audit existing character and scene asset manifests by SHA and review metadata while C-end moves gradually from 3070 to the shared 4080; read-only, with no image generation or destructive operations.
---
# C端素材搬迁只读验收
- 当前旧C端3070继续服务原工序。禁止自动切C生产、删除旧素材、覆盖源图、修改review_scope、给图片标USER_PASS。
- 本Skill调用 `黎黎隆项目/20_Agent系统/07_本地执行/QWEN_SHADOW/c_manifest_audit.py`，对显式提供的清单逐文件校SHA。清单必须只包含当前迁移批次，不扫用户整盘、不追踪任意目录。
- 清单JSON为 `{"assets":[{"asset_id":"...","path":"C:/...","sha256":"64hex","version":"v1","review_scope":"UNREVIEWED","source_issue":"674-293","parent_asset_id":null}]}`。
- 输出 `PASS_SHA / MISSING_FILE / SHA_MISMATCH / BAD_MANIFEST`，另独立报告`review_metadata_declared`；即使SHA一致，`review_is_user_verified=false`，真USER判断必须回173查证。
- 一个GPU只允许一个GPU_H3或GPU_IMAGE重任务；本Skill无需GPU，可在H3运行时低优先级读盘，但若C盘I/O影响渲染，降低读取速率/暂停。
- 不将未审核新生角色/场景交给H3；仍走293→296→173已有准入。
DONE：一小批源/目标路径全量SHA和版本、asset_id、parent关联不丢，有可逆清单，既有Codex H3不受影响。
STOP：源文件丢失、SHA错误、目标目录容量不够、C端仍在写同一文件、用户审核范围不清则不搬该批。
