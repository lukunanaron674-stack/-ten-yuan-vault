# 影刀流程：打包当前 Chat 聊天

动作名：`archive_current_chat`

## 目标

把当前 Edge 里打开的某个 ChatGPT 聊天页打包到电脑本地，方便 Codex/Obsidian 后续读取、总结、归档。

## 推荐保存目录

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\Chat打包归档
```

## 输入

影刀读取：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\inbox\command.json
```

关键字段：

- `action`: `archive_current_chat`
- `target`: 当前 ChatGPT 聊天页
- `archiveTitle`: 归档名
- `saveDir`: 保存目录

## 第一版最稳流程：保存完整网页

1. 确保 Edge 当前页是目标 ChatGPT 聊天。
2. 点击页面空白处，让浏览器聚焦。
3. 按 `Ctrl + S`。
4. 在保存窗口里选择保存目录：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\Chat打包归档
```

5. 文件名建议：

```text
{archiveTitle}.html
```

6. 保存类型选：

```text
网页，完整
```

如果 Edge 不允许完整网页，退一步保存为：

```text
网页，仅 HTML
```

## 第二版补充流程：打印 PDF

如果需要更容易阅读的固定版：

1. 按 `Ctrl + P`。
2. 打印机选择：

```text
Microsoft Print to PDF
```

3. 保存到同一个目录。
4. 文件名：

```text
{archiveTitle}.pdf
```

## 第三版补充流程：复制文本

如果页面能完整选中文本：

1. 点击聊天正文区域。
2. 按 `Ctrl + A`。
3. 按 `Ctrl + C`。
4. 新建 txt 或 md 文件。
5. 粘贴并保存：

```text
{archiveTitle}.md
```

注意：这一步可能会复制侧边栏和按钮文字，作为补充，不作为唯一归档。

## 成功输出

影刀写：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\chat-archive.json
```

格式：

```json
{
  "ok": true,
  "action": "archive_current_chat",
  "archiveTitle": "维多利亚束腰黑裙",
  "url": "https://chatgpt.com/...",
  "saveDir": "C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault\\07-Codex大脑库\\Chat打包归档",
  "files": [
    "C:\\...\\维多利亚束腰黑裙.html",
    "C:\\...\\维多利亚束腰黑裙_files",
    "C:\\...\\维多利亚束腰黑裙.pdf",
    "C:\\...\\维多利亚束腰黑裙.md"
  ],
  "createdAt": "当前时间",
  "error": null
}
```

## 失败输出

```json
{
  "ok": false,
  "action": "archive_current_chat",
  "archiveTitle": "维多利亚束腰黑裙",
  "files": [],
  "createdAt": "当前时间",
  "error": "失败原因"
}
```

## 影刀低配版

如果暂时不会写 `chat-archive.json`，也没关系。只要把 `.html` 或 `.pdf` 文件保存到归档目录，然后告诉 Codex“已保存”，Codex 会自己扫描目录找最新文件。
