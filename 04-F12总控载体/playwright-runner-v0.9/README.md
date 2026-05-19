# Playwright Runner v0.9

F12 总控的 Playwright headed 测试。两个层级：

- **Fixture 测试** — 本地 mock 页面，模拟 ChatGPT DOM
- **Smoke 测试** — 真实 ChatGPT 页面，需人工登录

## 安装

```bash
cd playwright-runner-v0.9
npm install
npx playwright install chromium
```

## 运行

```bash
# Fixture 测试（不需要登录 ChatGPT）
npm run test:fixture

# Smoke 测试（需要先手动登录 ChatGPT）
npm run test:smoke

# 调试模式（可见浏览器窗口）
npm run test:debug
```

## Fixture 测试覆盖

1. 扩展能加载
2. Side Panel 能打开
3. activeTab 能设置
4. content.js 能 PING
5. EXECUTE_TASK 能填入并点击
6. waitDone 能识别回复稳定
7. index 能推进
8. R5 能生成 CarryPacket

## Smoke 测试

- 只做人工可见 headed 模式
- 不自动登录
- 不处理账号密码
- 用户自己打开浏览器登录后运行

## 截图 & 日志

截图保存在 `screenshots/` 目录。
错误日志在 Console 输出。

## 常见问题

**扩展未加载** → 检查 `chrome://extensions/` 开发者模式，确认 unpacked 路径正确

**Content script 不响应** → 确认页面 URL 匹配 manifest 的 `host_permissions`

**Timeout** → 网络慢或页面加载慢，可调大 `timeoutMs`
