# LOCAL_ASSET_LIBRARY_PROTOCOL｜本地素材库 Agent v1

## 目标
把本地角色图、场景图、动作参考、视频、音频等资产变成可被 AG-04 素材 Agent 按需查询的轻量目录，而不是让导演或任意 Agent 每次遍历整块硬盘。

## 边界
- ChatGPT / GitHub 侧不直接扫描用户本机磁盘。
- 真正的扫描、hash、媒体元数据读取由本地 watcher / Codex 执行。
- GitHub 只保存可公开的逻辑目录、相对路径、hash、标签、状态与增量摘要。
- **禁止写入本机绝对路径、Windows 用户名、磁盘序列号、Token、Cookie、SSH key、私有服务地址。**
- 本机目录映射只保存在 `.local_asset_roots.json`，必须被 gitignore。

## 两层结构
### A. 本地真实层
本地 watcher 维护：
- root_id → absolute_path 映射
- 文件存在性
- SHA-256 / 内容 hash
- 可选 perceptual_hash（近似图片去重）
- size / mtime
- 图片宽高、视频时长、音频时长等媒体元数据

### B. 仓库轻量层
Agent 只消费：
- asset_id
- root_id
- relative_path
- file_hash
- media_type
- dimensions / duration（若有）
- character_id / scene_id / project_ref
- tags
- duplicate_of
- lock_status
- style_review_status
- usable_for_h3
- last_seen_at

遵循 [[LOCAL_ASSET_MANIFEST_SCHEMA]]。

## 扫描流程
1. **首次建库**：本地 watcher 对配置 root 做一次全量扫描。
2. **后续增量**：只检查 mtime/size/hash 发生变化的文件；不重复全文/全盘扫描。
3. **精确去重**：相同 SHA-256 → 只保留一个 canonical asset，其他记录为 duplicate_of。
4. **近似去重**：图片 perceptual_hash 相近时只标候选重复，不自动删除。
5. **基础标签**：先用路径、文件名、已有角色/场景 ID 生成低风险标签；无法确认身份就标 UNKNOWN，不猜。
6. **人工/Agent增强标签**：只有能读取真实图像/视频证据时才补视觉标签，并记录 confidence/source。
7. **生成轻量摘要**：按角色、场景、素材类型、锁定状态生成小型目录，不把完整 manifest 默认塞给导演。

## 查询流程
当前镜头需要素材时：
1. 导演把 required_assets 交给 AG-04。
2. AG-04 先查轻量摘要 / manifest 索引。
3. 命中后只返回少量候选（默认 ≤ 5）。
4. 只有需要核验时才由本地 watcher 读取候选原文件。
5. 最终按 [[ASSET_RESULT_SCHEMA]] 返回 READY / MISSING / PENDING_REVIEW / BLOCKED。

## 上下文预算
- 默认不遍历整库。
- 每 tick 只查与当前 required_assets 对应的角色/场景/类型分片。
- 同一 catalog_version 未变化时，不重新读取完整 manifest。
- 默认候选 ≤ 5；默认原文件核验 ≤ 2。
- 大目录只返回计数、版本、最近增量，不返回全部文件名。

## 写回
本地 watcher 每次只写增量：
- added
- changed
- missing
- duplicate_links
- tag_updates
- catalog_version

没有变化则 NO_OP。

## 锁定规则
- CANDIDATE：发现但未确认。
- APPROVED：身份/用途已确认。
- LOCKED：生产主参考，除非导演明确换版，否则同一角色/场景优先复用。
- 新发现素材不得因为“文件更新”自动覆盖 LOCKED 主参考。

## 与总调度器
总调度器只有在以下情况才唤醒 AG-04：
- 当前 shot 进入 STORYBOARD_READY / ASSET_CHECK；
- blocker.owner = asset_agent；
- 本地 manifest 有新版本且当前任务明确依赖相关资产；
- 用户明确要求整理素材库。

仅 manifest 版本变化但当前没有相关任务时，不唤醒其他 Agent。
