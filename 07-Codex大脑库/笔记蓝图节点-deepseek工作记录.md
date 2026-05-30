# 笔记蓝图节点 — DeepSeek 工作记录

> 归档日期：2026-05-21
> 位置：C:\Users\674\Documents\Codex\2026-05-21\1\brain-map\

---

## 七个核心模块

### 1. 融合编辑器
- **文件**：`editor.html`（15.7KB，全中文）
- **功能**：PureRef 自由画布 + 思维导图连线节点 + 无限钻入 三合一
- **启动**：`py -m http.server 8765` → 浏览器打开 `http://localhost:8765/editor.html`

### 2. 本地依赖库
- **目录**：`lib/`
- React 18 + ReactDOM 18 + ReactFlow 11（零 CDN，本地加载）

### 3. 图片节点系统
- 拖桌面图片到画布 → 自动生成图片节点
- 节点右下角拖拽缩放
- 侧边栏调整宽高

### 4. 连线与关系系统
- 节点底部圆点拖到另一节点顶部 → 创建连线
- 点击连线 → 右侧面板「删除连线」

### 5. 无限嵌套子画布
- 选中节点 → 「+ 子节点」→ 双击节点钻入
- 顶层面包屑导航返回

### 6. 存盘与导出
- 「保存 JSON」→ 下载当前层 graph.json
- 「全导出」→ 下载完整嵌套结构

### 7. 辅助工具
- `watcher.ps1`：文件变更监听器 → events.jsonl
- Obsidian Canvas 嵌套文件（6 个 .canvas）备用
- 插件：Excalidraw / Dataview / Templater

---

## 开发过程中的问题与解决

| 问题 | 解决 |
|------|------|
| CDN 被墙，jsdelivr 加载失败 | 下载 React/ReactFlow 到本地 `lib/` |
| file:// 协议 fetch CORS 拦截 | 用 `py -m http.server` 本地服务 |
| 19308 用户权限问题 | 复制到 674 用户目录 |
| ReactFlow v11 UMD 路径错误 | 使用 `dist/umd/index.js` 路径 |
| 之前版本 JS 报错白屏 | 基于 mini.html 验证后完全重写 |

---

## 给别的 Codex 的交接

```
请读取：C:\Users\674\Documents\Codex\2026-05-21\1\brain-map\
启动方式：cd 该目录 → py -m http.server 8765 → 打开 http://localhost:8765/editor.html
```
