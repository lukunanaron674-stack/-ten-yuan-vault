# 影刀流程：下载 ChatGPT 最新图片

动作名：`download_latest_chatgpt_image`

## 目标

从当前 ChatGPT 图片页下载最新生成图，保存到 Obsidian assets 文件夹，让 Codex 后续写入 canvas。

## 输入

影刀读取：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\inbox\command.json
```

关键字段：

- `conceptId`
- `conceptTitle`
- `saveDir`

## 录制步骤

1. 打开或切回 Edge 当前 ChatGPT 图片页。
2. 确认页面标题或内容是要下载的图片。
3. 找到最新生成图。
4. 如果有“分享此图片 / 更多 / 下载”菜单，点击下载。
5. 如果下载会进入默认下载目录，下载后把文件移动或另存为：

```text
{saveDir}\{conceptId}_{conceptTitle}.png
```

当前测试例：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\09-给674（我）用的库\画画理论\assets\gothic-fantasy\clothing_c0_0_维多利亚束腰黑裙.png
```

6. 写入：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\latest-image.json
```

成功结果：

```json
{
  "ok": true,
  "action": "download_latest_chatgpt_image",
  "conceptId": "clothing_c0_0",
  "conceptTitle": "维多利亚束腰黑裙",
  "imagePath": "完整图片路径",
  "createdAt": "当前时间",
  "error": null
}
```

失败结果：

```json
{
  "ok": false,
  "action": "download_latest_chatgpt_image",
  "conceptId": "clothing_c0_0",
  "conceptTitle": "维多利亚束腰黑裙",
  "imagePath": null,
  "createdAt": "当前时间",
  "error": "失败原因"
}
```

## 验收

Codex 检查：

1. `latest-image.json` 的 `ok` 是 `true`。
2. `imagePath` 对应文件存在。
3. 文件大小大于 10KB。
4. 再把图片节点写入 canvas。
