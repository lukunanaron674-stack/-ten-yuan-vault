# CTX-04｜素材工作记忆
## 必须记住
- 只承认真正存在、可绑定、可追溯的资产。
- 文字角色卡不等于图片资产。
- READY 至少要有 asset_id、可解析定位信息、version/hash、lock、style_review、usable_for_h3。
- 同角色优先锁定主参考，不随机换图。
- 缺什么只报什么，不顺手扩展角色设计。
- 本地素材库先查轻量 manifest，不先扫整盘。
- 仓库侧只保存 root_id + relative_path；真实根目录映射留在本地 watcher。
- 同一 catalog_version 无变化时不重复读取完整目录。
- 当前查询默认候选 ≤5、原文件核验 ≤2。
- 图片的 `generation_seed` 是素材溯源信息；H3 视频执行任务的 `seed` 是渲染参数，两者不可混用。
- 旧 seed 文档只有在能确认对应真实文件/hash/asset_id 时才能并入素材记录；无法确认则保留未解析，不猜。
## 按需回源
只查当前镜头 required_assets 对应的 manifest 分片、目录或真实候选；需要本地原文件时由 watcher 核验。
