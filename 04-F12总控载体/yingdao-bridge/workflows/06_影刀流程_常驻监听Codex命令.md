# 影刀流程：常驻监听 Codex 命令

用途：让 Codex 通过本地 JSON 文件控制影刀。  
结构：Codex 写命令，影刀监听并执行，执行后写结果。

## 1. 固定文件

命令文件：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\inbox\command.json
```

通用结果：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\result.json
```

民国素材板结果：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\minguo-contact-sheet-result.json
```

## 2. 监听器总体逻辑

新建影刀流程：

```text
F12桥监听器
```

流程步骤：

1. 无限循环。
2. 读取 `inbox\command.json`。
3. 解析 JSON。
4. 如果 `status` 不是 `RUN_NOW`，等待 2 秒后继续。
5. 如果 `status` 是 `RUN_NOW`，根据 `action` 执行动作。
6. 执行完成后写 `outbox\result.json` 或专用结果文件。
7. 把 `command.json` 改成 idle，避免重复执行。
8. 等待 2 秒，继续监听。

## 3. 需要支持的 action

### generate_chatgpt_contact_sheets_for_canvas

用途：按 manifest 批量把提示词发给 ChatGPT 生图。

影刀动作：

1. 读取 `manifestPath`。
2. 遍历 manifest 里的每个任务。
3. 打开 `promptPath`，复制全部提示词。
4. 切到当前 ChatGPT 生图页面。
5. 粘贴提示词并发送。
6. 等待图片生成完成。
7. 保存图片到任务里的 `imagePath`。
8. 继续下一张。
9. 全部完成后写：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\minguo-contact-sheet-result.json
```

结果格式：

```json
{
  "ok": true,
  "action": "generate_chatgpt_contact_sheets_for_canvas",
  "completed": 3,
  "failed": 0,
  "images": [
    {
      "title": "民国素材板_01",
      "imagePath": "C:\\path\\to\\image.png",
      "ok": true,
      "error": null
    }
  ],
  "finishedAt": "2026-07-13T00:00:00+08:00",
  "error": null
}
```

### reload_f12_extension

用途：重载 Edge 的 Ten Yuan F12 Controller 扩展。

影刀动作：

1. 打开 `edge://extensions/`。
2. 找到 Ten Yuan F12 Controller。
3. 点击重新加载。
4. 写 `outbox\result.json`。

### archive_current_chat

用途：打包当前 ChatGPT 聊天页面。

影刀动作：

1. 保存当前网页或复制全部可见聊天文本。
2. 存到命令里的 `saveDir`。
3. 写 `outbox\chat-archive.json`。

### confirm_github_action

用途：只在用户明确要求时，点击 GitHub 页面上的确认按钮。

注意：不要自动确认删除、授权、权限变更，必须等用户在当轮明确说确认。

## 4. 执行后重置 command.json

每次完成动作后，把命令文件写成：

```json
{
  "action": "idle",
  "status": "idle",
  "updatedAt": "2026-07-13T00:00:00+08:00"
}
```

## 5. Codex 和影刀分工

Codex 负责：

- 写 `command.json`
- 生成 prompt / manifest / Obsidian canvas
- 检查结果文件
- 把图片节点写回 canvas

影刀负责：

- 点 Edge / ChatGPT / F12 边栏
- 粘贴提示词
- 保存图片
- 写 outbox 结果

## 6. 成功标志

监听器开着以后，用户只需要说：

```text
接桥
```

Codex 就可以写命令文件。  
影刀会自动看到命令并执行。  
执行完 Codex 再读 outbox，继续写 Obsidian。

