# ASSET_RESULT_SCHEMA｜素材结果包 v1.1

## 身份
- project_id
- job_id
- shot_id 或 test_shot_id
- base_state_version
- asset_result_id
- agent

## required_assets
每项：
- role: CHARACTER | SCENE | MOTION | AUDIO | OTHER
- requirement
- required_lock_level

## resolved_assets
每项必须包含：
- asset_id
- asset_type
- locator_type: REPOSITORY | LOCAL_CATALOG
- repository_path: null | 仓库路径
- root_id: null | 本地素材根逻辑 ID
- source_relative_path
- content_hash
- version
- lock_status: LOCKED | APPROVED | CANDIDATE
- source_status: EXISTS | GENERATED | EXTERNAL_PENDING
- style_review_status: PASS | PENDING | NOT_REQUIRED
- usable_for_h3: true | false
- notes

### 定位规则
- `REPOSITORY`：必须有真实 repository_path。
- `LOCAL_CATALOG`：必须有真实 root_id + source_relative_path + content_hash，并能由本地 watcher 解析。
- 两种定位都禁止凭文字说明伪造文件存在性。

## missing_assets
每项：
- requirement
- reason: NOT_FOUND | NOT_ARCHIVED | NOT_LOCKED | PATH_INVALID | STYLE_UNREVIEWED | LOCAL_CATALOG_STALE
- suggested_next: IMAGE_GENERATE | AUTHOR_SELECT | PATH_FIX | STYLE_REVIEW | LOCAL_RESCAN

## 决策
- asset_status: READY | MISSING | PENDING_REVIEW | BLOCKED

## READY 条件
只有所有关键主参考均：
- 有真实 asset_id
- 有可解析定位：
  - repository_path，或
  - root_id + source_relative_path + content_hash
- lock_status != CANDIDATE
- style_review_status = PASS | NOT_REQUIRED
- usable_for_h3 = true

才可 asset_status = READY。

禁止从角色卡里的文字描述自动伪造图片资产。
