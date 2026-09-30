# ASSET_RESULT_SCHEMA｜素材结果包 v1

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
- repository_path
- source_relative_path
- version
- lock_status: LOCKED | APPROVED | CANDIDATE
- source_status: EXISTS | GENERATED | EXTERNAL_PENDING
- style_review_status: PASS | PENDING | NOT_REQUIRED
- usable_for_h3: true | false
- notes

## missing_assets
每项：
- requirement
- reason: NOT_FOUND | NOT_ARCHIVED | NOT_LOCKED | PATH_INVALID | STYLE_UNREVIEWED
- suggested_next: IMAGE_GENERATE | AUTHOR_SELECT | PATH_FIX | STYLE_REVIEW

## 决策
- asset_status: READY | MISSING | PENDING_REVIEW | BLOCKED

## READY 条件
只有所有关键主参考均：
- 有真实 asset_id
- 有真实 repository_path / watcher 可解析路径
- lock_status != CANDIDATE
- style_review_status = PASS | NOT_REQUIRED
- usable_for_h3 = true

才可 asset_status = READY。

禁止从角色卡里的文字描述自动伪造图片资产。
