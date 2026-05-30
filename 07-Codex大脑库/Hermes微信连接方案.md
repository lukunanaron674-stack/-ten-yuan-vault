---
type: setup-guide
status: active
updated: 2026-05-24
---

# Hermes 连接个人微信

## 当前状态

Hermes gateway 未配置。支持的平台：Telegram、Discord、WhatsApp、Weixin、QQBot、WeCom 等。

## 启动交互式配置

在 WSL 终端运行：

```bash
hermes gateway setup
```

然后按提示选择 Weixin，会弹出二维码，用微信扫码绑定。

## 或者手动配置

编辑 `~/.hermes/config.yaml`，添加 gateway 段：

```yaml
gateway:
  enabled: true
  platforms:
    weixin:
      enabled: true
      # 需要微信机器人/公众号 token
```

## 中国大陆注意

个人微信不像 Telegram 那样有公开 Bot API。实际可行的方案：

| 方案 | 难度 | 说明 |
|---|---|---|
| 企业微信 (WeCom) | ⭐⭐ | Hermes 原生支持，需注册企业微信 |
| 微信公众号 | ⭐⭐⭐ | 需注册公众号 + 服务器 |
| QQBot | ⭐⭐ | Hermes 原生支持 |
| Telegram | ⭐ | 最简单，需科学上网 |

如果你有 Telegram，建议先用 `hermes gateway setup` 配 Telegram 跑通网关，再考虑微信。

## 启动网关

配置完成后：

```bash
hermes gateway start
```

网关启动后，你就可以在手机上通过微信/Telegram 给 Hermes 发消息，它会直接读写 ten-yuan-vault。

---
