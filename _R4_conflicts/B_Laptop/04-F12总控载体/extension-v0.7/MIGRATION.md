# F12 版本迁移指南

## v0.8 → v0.9

### 架构变化
- `background.js` 从内联脚本升级为 `"type": "module"` ES module service worker
- 拆分为 6 个 core 模块：`background-controller.js`、`lease-lock.js`、`message-router.js`、`state-schema.js`、`error-snapshot.js`、`migrations.js`
- `manifest.json` 的 `background` 字段新增 `"type": "module"`
- `state` 新增 `schemaVersion: "0.9.0"` 字段

### State schema 迁移
v0.8 state 加载时自动迁移到 v0.9：
- 补全 `schemaVersion`
- 补全缺失字段
- `index` 越界自动修正

### 回滚方法

如果 `"type": "module"` 导致 background 加载失败：

1. 打开 `manifest.json`
2. 删除 `"type": "module"` 行
3. 将 `background.js` 替换为 v0.8 内联版本
4. 在 `edge://extensions/` 中刷新扩展

### 导入 state 失败恢复

每次导入前自动备份到 `chrome.storage.local` 的 `TY_F12_STATE_V09_BACKUP_<timestamp>` 键。
恢复步骤：
1. 打开 DevTools → Application → Storage → chrome.storage.local
2. 找到 `TY_F12_STATE_V09_BACKUP_*` 键
3. 复制其值到 `TY_F12_STATE_V09` 键
4. 刷新 Side Panel

## v0.7 → v0.8

### 变化
- `DEFAULT_STATE` 新增字段：`total`、`stopped`、`manualPause`、`activeTitle`、`errors`、`projectName`、`frameName`
- 新增控制：暂停/继续、试跑2轮、强制完成、强制重试
- 新增任务模板库 `core/task-templates.js`
- `core/carry-packet.js` 函数扩展
- `core/exporter.js` 新增导入和备份功能

### 迁移
- STORE_KEY 从 `TY_F12_STATE_V07` 变为 `TY_F12_STATE_V08`
- 旧 state 加载时自动补全缺失字段
