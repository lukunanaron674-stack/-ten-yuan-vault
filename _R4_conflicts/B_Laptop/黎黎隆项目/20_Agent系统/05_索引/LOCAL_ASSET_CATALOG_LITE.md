# LOCAL_ASSET_CATALOG_LITE｜本地素材库轻量入口

status: UNINITIALIZED
catalog_version: null
generated_at: null
asset_count: 0
duplicate_count: 0

## 说明
- 此文件由本地素材扫描器更新，只保存轻量统计和版本信息。
- 完整本地 catalog 保存在本机缓存，不默认提交 GitHub。
- AG-04 素材 Agent 需要具体候选时，由本地 watcher 查询完整 catalog，再只返回当前任务相关的少量结果。
- 未配置本地 roots 前保持 UNINITIALIZED，不伪造素材存在性。
