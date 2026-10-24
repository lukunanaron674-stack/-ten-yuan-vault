# 给deekseep的建议

## 一句话结论

不要再把 F12 边栏当成脚本操作入口。F12 边栏适合给用户看状态、手动点按钮、确认页面池；DeepSeek / Codex 自动控制应该走 Local Bridge CLI。

## 当前最稳定路径

```text
DeepSeek / Codex
→ PowerShell 命令
→ local-bridge/cli.js 或 f12.js
→ 127.0.0.1:17312 Local Bridge
→ Edge 扩展轮询命令
→ ChatGPT 页面 content script 工蜂执行
→ F12 边栏只负责显示状态
```

## 不建议继续走的路径

### 1. 外部脚本点击 F12 边栏

不要把主要精力放在“打开边栏、点击边栏按钮”上。

原因：

- Edge 扩展侧边栏是独立 extension context。
- 外部脚本不能像普通网页一样稳定访问它的 DOM。
- 要控制它，需要 attach 到 extension target，复杂且不稳定。

### 2. CDP 直连 Edge 远程调试

已经尝试过：

```text
--remote-debugging-port=9222
Runtime.evaluate
WebSocket 连接 DevTools Protocol
```

结果不稳定，Node WebSocket 连接容易超时。

除非专门开发 CDP extension-target attach，否则不要把它作为主路线。

### 3. 把边栏当自动化主控入口

边栏可以作为人工监控面板，但不适合作为 DeepSeek/Codex 的脚本入口。

正确理解：

```text
边栏 = 人看的仪表盘
Local Bridge = Codex/DeepSeek 的控制入口
content script 工蜂 = 真正执行页面动作的工人
```

## 推荐命令

进入 F12 扩展目录：

```powershell
cd C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\extension-v0.7
```

查看页面池：

```powershell
node .\local-bridge\cli.js multi-status
```

载入任务：

```powershell
node .\local-bridge\cli.js multi-load <tabId> .\local-bridge\tasks.txt
```

自动运行：

```powershell
node .\local-bridge\cli.js multi-auto <tabId>
```

暂停 / 停止：

```powershell
node .\local-bridge\cli.js multi-pause <tabId>
node .\local-bridge\cli.js multi-stop <tabId>
```

归档最新回复：

```powershell
node .\local-bridge\cli.js multi-archive <tabId>
```

也可以使用 Codex skill 包装入口：

```powershell
node C:\Users\19308\.codex\skills\ten-yuan-f12-operator\scripts\f12.js status
```

## DeepSeek 操作铁律

1. 不要尝试自动打开或点击 F12 边栏。
2. 不要把 CDP 点击边栏作为主路线。
3. 自动控制默认走 local bridge CLI。
4. 边栏只作为用户监控和手动确认面板。
5. 每次续跑前先 `multi-status`。
6. `tabId` 是临时会话标识，重启 Edge / 刷新页面后必须重新确认。
7. 如果任务显示 `R1/1`，先检查任务拆分，不要直接 auto。
8. 如果页面工蜂断连，提示用户刷新 ChatGPT 页面或手动注入工蜂。
9. 多标签页面池不是无限并行；当前有全局 lease lock，更多是排队执行。
10. 不要让 F12 直接写 GitHub。F12 负责采集和归档，Git 提交由 Codex/用户处理。

## 提示词设计建议

不要把 `TASK_DONE` 这类完成标记写进用户 prompt。

原因：

- 如果内容脚本全页扫描，可能把 prompt 里的 `TASK_DONE` 误判成 assistant 已完成。
- 正确完成检测应该基于 assistant 增量文本、ChatGPT UI idle、quiet window。

提示词应尽量短：

```text
给方向，不给死模板。
给研究目标，不强行规定每一行格式。
给判断标准，不预设答案。
```

## 单轮与多轮策略

单轮任务：

```powershell
node .\local-bridge\cli.js multi-send <tabId>
```

多轮任务：

```powershell
node .\local-bridge\cli.js multi-auto <tabId>
```

遇到 `carry_packet_due`：

```text
先看状态。
如果确认只是承载包暂停，可 resume。
不要重复发送同一轮。
```

## 工蜂断连处理

常见症状：

```text
页面 offline
heartbeatAgeSec 很大
任务不推进
content script 无响应
```

处理顺序：

1. `multi-status` 确认 tabId 和状态。
2. 如果页面还在，让用户刷新 ChatGPT 页面。
3. 让用户在边栏点“手动注入工蜂”。
4. 再次 `multi-status`。
5. 确认在线后再继续 `multi-auto`。

不要在状态不明时连续发 auto / retry。

## 关于 DeepSeek 已做的 brain-map

DeepSeek 记录里提到一个 ReactFlow 融合编辑器：

```text
C:\Users\674\Documents\Codex\2026-05-21\1\brain-map\
```

它包含：

- `editor.html`
- 本地 React / ReactDOM / ReactFlow 依赖
- 图片节点
- 连线系统
- 无限嵌套子画布
- `watcher.ps1`
- `events.jsonl`

这个方向和 Ten Yuan Brain Map 很接近，但路径在 `C:\Users\674`，而当前主 vault 在：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault
```

建议后续把 brain-map 迁移到：

```text
07-Codex大脑库/_brain-map/
```

并接入：

```text
Obsidian Canvas
+ ReactFlow 节点编辑器
+ watcher 事件日志
+ Codex skill 唤醒协议
```

## 最终建议

DeepSeek 后续不要再卡在“怎么打开 F12 边栏”上。

正确任务是：

```text
把 F12 边栏降级为监控面板，
把 Local Bridge CLI 升级为唯一稳定控制入口，
把 watcher / events.jsonl 作为知识蓝图和 Codex 交接的触发记录。
```

