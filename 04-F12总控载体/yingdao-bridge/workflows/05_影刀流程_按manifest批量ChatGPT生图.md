# 影刀流程：按 manifest 批量 ChatGPT 生图

动作名：`generate_chatgpt_images_for_canvas`

## 目标

读取 `manifestPath` 中的任务列表，逐条把提示词发给 ChatGPT 生图，并把生成图保存到每条任务指定的 `imagePath`。

## 输入

影刀读取：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\inbox\command.json
```

关键字段：

- `action`: `generate_chatgpt_images_for_canvas`
- `manifestPath`: 任务清单 JSON
- `promptDir`: 提示词目录
- `imageDir`: 图片保存目录

## 当前民国首批任务

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\09-给674（我）用的库\画画理论\assets\minguo-image-batch\minguo-image-batch-001.json
```

## 影刀执行步骤

1. 打开 `command.json`，读取 `manifestPath`。
2. 打开 manifest JSON。
3. 对 `tasks` 逐条执行：
   - 打开 `promptPath`
   - 复制全部提示词
   - 切到 ChatGPT 可生图聊天页
   - 粘贴并发送
   - 等图片生成完成
   - 下载/另存图片到该任务的 `imagePath`
4. 一条保存成功后再做下一条。

## 保存规则

- 不要覆盖不相关文件。
- 每张图保存到任务给出的精确 `imagePath`。
- 如果某一条失败，跳过并记录失败，不要卡死整批。

## 成功输出

如果会写 JSON，写入：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\minguo-image-batch-result.json
```

格式：

```json
{
  "ok": true,
  "action": "generate_chatgpt_images_for_canvas",
  "manifestPath": "清单路径",
  "done": 10,
  "failed": 0,
  "images": [
    "图片完整路径"
  ],
  "createdAt": "当前时间",
  "error": null
}
```

## 低配版

如果暂时不会写 JSON，只要把图片按 `imagePath` 保存好，然后告诉 Codex：

```text
民国首批图片保存好了
```

Codex 会自己扫描 `imageDir`，检查图片数量，然后把图片节点写回 canvas。
