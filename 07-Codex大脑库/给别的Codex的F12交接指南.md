# 给别的 Codex 的 F12 交接指南

## 你接手的是什么

这是用户的 Ten Yuan F12 Controller 工作流。目标不是让 Codex 自己消耗大量 token 生成内容，而是让 Edge 里的 ChatGPT 页面通过 F12 总控跑批量任务，再把结果归档到 Obsidian/GitHub。

当前应优先维护三件事：

1. F12 能稳定连接页面。
2. 多页任务能正确显示轮次和推进。
3. 有价值输出能归档到 Obsidian。

## 重要目录

- Vault：
  `C:\Users\19308\Documents\Obsidian\ten-yuan-vault`
- F12 扩展目录：
  `C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\extension-v0.7`
- 本地桥目录：
  `C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\extension-v0.7\local-bridge`
- 归档输出：
  `C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\F12归档输出`
- F12 操作 skill：
  `C:\Users\19308\.codex\skills\ten-yuan-f12-operator\SKILL.md`

## 第一步：先查状态

在 PowerShell 进入：

```powershell
cd C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\extension-v0.7
node .\local-bridge\cli.js multi-status
```

看表格里的：

- `tabId`
- `status`
- `round`
- `title`
- `heartbeatAgeSec`

不要相信旧 tabId。用户重启电脑、重开 Edge、刷新页面后，tabId 都可能变化。

## 常用命令

```powershell
node .\local-bridge\cli.js multi-status
node .\local-bridge\cli.js multi-auto <tabId>
node .\local-bridge\cli.js multi-stop <tabId>
node .\local-bridge\cli.js multi-pause <tabId>
node .\local-bridge\cli.js multi-send <tabId>
node .\local-bridge\cli.js multi-archive <tabId>
node .\local-bridge\cli.js multi-load <tabId> .\local-bridge\some-task-file.txt
```

也可以使用 skill 包装命令：

```powershell
node C:\Users\19308\.codex\skills\ten-yuan-f12-operator\scripts\f12.js status
```

## 载入任务

任务文件用 `---TASK---` 分隔。为了避免中文路径编码问题，建议把任务复制到：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\extension-v0.7\local-bridge
```

并使用英文文件名，例如：

```text
main-tasks-R31-R36.txt
aux-tasks-A21-A24.txt
```

载入：

```powershell
node .\local-bridge\cli.js multi-load <tabId> .\local-bridge\main-tasks-R31-R36.txt
```

载入后必须再查：

```powershell
node .\local-bridge\cli.js multi-status
```

如果显示 `R1/1`，说明没有正确拆分任务，不要自动续跑。

## 运行与停止

启动自动跑：

```powershell
node .\local-bridge\cli.js multi-auto <tabId>
```

停止：

```powershell
node .\local-bridge\cli.js multi-stop <tabId>
```

用户说“跑完这次就结束”时，只能跑当前任务文件，不要新建下一批。

## 归档

归档最新回复：

```powershell
node .\local-bridge\cli.js multi-archive <tabId>
```

归档会写到：

```text
07-Codex大脑库\F12归档输出
```

归档后检查：

```powershell
Get-ChildItem -LiteralPath 'C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\F12归档输出' -File |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 10 Name,Length,LastWriteTime
```

## Git 上传

先看状态：

```powershell
cd C:\Users\19308\Documents\Obsidian\ten-yuan-vault
git status --short
```

不要提交这些噪音文件，除非用户明确要求：

- `.obsidian/workspace.json`
- `04-F12总控载体/extension-v0.7/local-bridge/bridge-state.json`

推荐提交：

- `07-Codex大脑库/`
- 任务 `.txt`
- 归档 `.md`
- F12 经验总结和交接指南
- F12 扩展源码改动，如果本轮确实改了代码

提交：

```powershell
git add 07-Codex大脑库
git add 04-F12总控载体/extension-v0.7/local-bridge/*.txt
git commit -m "Archive F12 workflow notes and handoff guide"
git push
```

## 判断规则

1. 如果用户说“省 token”，使用 F12 跑，不要自己长篇生成。
2. 如果用户说“归档”，一定写进 Obsidian 文件。
3. 如果用户说“上传”，提交并 push GitHub。
4. 如果 F12 卡住，先 `multi-status`，再决定 `multi-stop`、`multi-archive` 或让用户刷新页面。
5. 如果 ChatGPT 没额度或 token 紧张，立刻停机、归档、写交接。
6. 不要让 F12 直接改 GitHub 仓库。Git 和文件提交由 Codex 操作。

## 当前交接状态

截至 2026-05-20：

- 自动进程已按用户要求放弃并停止。
- 最后一批没有跑完：
  - 主窗 `Codex 污染样本识别`：停在 `R2/6`。
  - 辅窗 `仓库整理 - GitHub 仓库整理方案`：停在 `R2/4`。
- 已有归档输出位于：
  `07-Codex大脑库/F12归档输出/`
- 接下来若继续，应先查看 `multi-status`，重新确认在线 tabId，再决定是否重跑或归档。

## 给接手 Codex 的一句话

先保住用户的归档和交接，不要贪跑；F12 是省 token 的采矿机，Codex 是整理、判断、上传的人。

