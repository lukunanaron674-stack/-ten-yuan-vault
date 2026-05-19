# F12 总控塔 v0.9 — Chrome/Edge Extension

> 工程稳定化版本。一个总控塔调度多个沉睡工蜂。Module service worker + schema 校验 + Playwright 测试。

## 架构

```
background.js (module)  ←  import  →  core/background-controller.js
       ↕                               core/lease-lock.js
  chrome.storage.local                 core/message-router.js
       ↕                               core/state-schema.js
sidepanel.js (module)  ←  import  →   core/task-templates.js
       ↕                               core/carry-packet.js
  chrome.runtime.sendMessage           core/exporter.js
       ↕                               core/obsidian-exporter.js
content.js (IIFE)                      core/github-handoff.js
       ↓                               core/error-snapshot.js
  ChatGPT DOM                          core/migrations.js
```

## v0.9 vs v0.8

| | v0.8 | v0.9 |
|---|---|---|
| background.js | 25KB 内联 | 10KB module + 6 核心模块 |
| manifest | 无 type | `"type": "module"` |
| state | 无版本 | `schemaVersion: "0.9.0"` |
| 导入校验 | 无 | validate + migrate + normalize |
| GitHub handoff | 单件工单 | +批量工单/HEAD manifest |
| Obsidian | 基本 URI | +unique URI/safe encode/路径预览 |
| 调试 | 无 | Debug Report + 错误快照 |
| 测试 | 无 | Playwright fixture + smoke |

## 安装

1. Edge → `edge://extensions/`
2. 开启 **开发人员模式**
3. **加载解压缩的扩展** → 选 `extension-v0.7/` 文件夹
4. 如果 background 加载失败 → 见 `MIGRATION.md` 回滚方案

## Playwright 测试

```bash
cd playwright-runner-v0.9
npm install
npx playwright install chromium
npm run test:fixture
```

## 回滚

1. 导出 state.json 备份
2. 见 `MIGRATION.md` 详细回滚步骤
3. 关键：删除 manifest 的 `"type": "module"` 即可退回内联模式

## 当前已知问题

- Side Panel 初次打开可能需刷新才显示完整 UI
- ChatGPT DOM selector 可能随版本变化
- 内容过长时 Obsidian URI 自动降级为下载建议

## 下一轮 v1.0 建议

- 真实页面 smoke test 自动化
- Selector 自动适配与降级策略
- 多项目/多框并发管理
- 任务模板社区共享
- Done.
