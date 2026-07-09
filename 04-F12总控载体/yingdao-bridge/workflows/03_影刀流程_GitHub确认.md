# 影刀流程：GitHub 确认

动作名：`confirm_github_action`

## 目标

未来遇到 GitHub 网页确认按钮时，由影刀负责机械点击；Codex 不直接操作 Edge UI。

## 使用场景

- GitHub 页面出现确认按钮。
- 用户已经明确让 Codex 更新 GitHub 或确认某一步。
- Codex 写入 `inbox\command.json`，影刀读取后执行。

## 安全规则

影刀只在 `command.json` 明确写了 `confirm_github_action` 时执行。

如果页面出现删除仓库、删除分支、公开权限、token、账单等高风险动作，不自动点，写失败结果并等待用户确认。

## 输出

写入：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge\outbox\result.json
```

成功：

```json
{
  "ok": true,
  "action": "confirm_github_action",
  "status": "done",
  "message": "GitHub confirmation clicked.",
  "updatedAt": "当前时间",
  "error": null
}
```

需要人工确认：

```json
{
  "ok": false,
  "action": "confirm_github_action",
  "status": "needs_user_confirm",
  "message": "High-risk GitHub action detected.",
  "updatedAt": "当前时间",
  "error": "说明页面上的风险"
}
```
