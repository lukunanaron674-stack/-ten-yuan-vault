# 影刀接 F12 本地桥

用途：让影刀负责 Edge / F12 / ChatGPT 页面上的机械点击，Codex 负责读写 Obsidian、生成任务、改 canvas。

## 固定目录

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge
```

## 分工

```text
Codex -> 写 inbox\command.json
影刀 -> 读取 command.json，执行浏览器 UI 动作
影刀 -> 写 outbox\result.json / outbox\latest-image.json
Codex -> 读取结果，继续写 Obsidian / canvas
```

## 当前最需要的三个动作

1. `reload_f12_extension`
   - 打开 `edge://extensions/`
   - 找到 `Ten Yuan F12 Controller v1.4.1`
   - 点击重新加载
   - 写回结果

2. `download_latest_chatgpt_image`
   - 回到当前 ChatGPT 图片页
   - 找到最新图片
   - 点击图片菜单或下载入口
   - 保存到 Obsidian assets 文件夹
   - 写回图片路径

3. `confirm_github_action`
   - 未来 GitHub 确认页出现时，由影刀点确认
   - Codex 不直接点浏览器 UI

4. `archive_current_chat`
   - 打包当前打开的某个 ChatGPT 聊天页
   - 保存完整网页 / PDF / 文本到本地归档目录
   - 写回归档文件路径

## 图片落点

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\09-给674（我）用的库\画画理论\assets\gothic-fantasy
```

## Codex 读取的图片结果格式

影刀执行下载后写：

```text
outbox\latest-image.json
```

格式：

```json
{
  "ok": true,
  "action": "download_latest_chatgpt_image",
  "conceptId": "clothing_c0_0",
  "conceptTitle": "维多利亚束腰黑裙",
  "imagePath": "C:\\Users\\19308\\Documents\\Obsidian\\ten-yuan-vault\\09-给674（我）用的库\\画画理论\\assets\\gothic-fantasy\\clothing_c0_0_维多利亚束腰黑裙.png",
  "createdAt": "2026-07-08T00:00:00+08:00",
  "error": null
}
```

Codex 拿到 `imagePath` 后，再写入：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\09-给674（我）用的库\画画理论\哥特奇幻_is-a名词素材库.canvas
```

## 重要规则

- Codex 不再硬点 Edge 侧边栏。
- 影刀只做机械 UI 动作，不判断理论、不改 canvas。
- 每次影刀动作都写 `outbox\result.json`，失败也要写。
- 下载图片时不要覆盖旧图，文件名用 `概念id_概念名.png`。
