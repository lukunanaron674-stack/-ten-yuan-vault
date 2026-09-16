---
name: Canvas参考图本地化
description: 把 Obsidian Canvas 外部参考图彻底本地化为 type:file；禁止自动打开 Pinterest/Behance/网页预览，不使用登录页作为 fallback。直接图片下载失败时保留占位卡并记录失败项，保证 Canvas 零登录。
version: 0.2
status: active
---

# Canvas参考图本地化 Skill v0.2｜ZERO-LOGIN

## 核心修正

v0.1 的错误：直接图片 URL 下载失败后，会回退到网页抓取；Pinterest 等站点因此再次弹登录页。

v0.2 冻结为：

```text
外部参考图
→ 只尝试真实图片直链
→ 成功：下载到 Vault assets，节点改为 type:file
→ 失败：保留“未下载”占位卡 + FAILED 清单
→ 绝不打开 source_url
→ 绝不启动浏览器
→ 绝不要求登录
```

## 硬规则

1. Canvas 参考图显示必须使用 `type:"file"`。
2. `type:"link"` 参考图节点数量必须为 0。
3. Pinterest / Behance / ArtStation / 作品页 URL 只作为来源文字保存，不能自动预览。
4. 禁止 baoyu-fetch / Chrome / Playwright 作为自动 fallback。
5. 失败图不得触发人工批量登录；只记录失败 ID，后续单独替换来源。
6. 初始 ZEROLOGIN Canvas 在下载前也不能含活网页卡。

## 与已验证案例一致

参考：`14-角色库/X/X_9种发型.canvas`

```json
{
  "type": "file",
  "file": "14-角色库/X/assets/x_bangs_9_grid.png"
}
```

## 输入

- `*.canvas`
- `reference_manifest.json`
- Vault 根目录

manifest：

```json
{
  "ref_style_A01": {
    "image_url": "https://.../real-image.jpg",
    "source_url": "https://作品来源页"
  }
}
```

`image_url` 才允许用于下载；`source_url` 永远不自动打开。

## 执行

Windows 优先运行仓库内的 PowerShell 零登录脚本；Python 脚本同样遵守 direct-only 原则。

### direct-only 下载策略

- 使用浏览器 UA 请求 `image_url`
- 失败可再次请求同一 `image_url`，仅增加 Referer header
- 不导航到 Referer 页面
- 文件 >10KB 才视为成功
- 成功后改为 `type:file`
- 失败后改为 `type:text` 占位卡

## 验收

- [ ] Canvas 中 `type:link` = 0
- [ ] 不会自动启动浏览器
- [ ] 不会出现 Pinterest 登录页
- [ ] 成功图全部是 `type:file`
- [ ] 失败图全部是文本占位卡
- [ ] `FAILED_参考图.txt` 仅列失败项
- [ ] P00 配色母版仍为本地 file
- [ ] 断网打开 LOCAL Canvas 时已下载参考图仍可见

## 禁止

- 禁止“direct 下载失败 → 打开来源页”。
- 禁止把登录当成正常工作流。
- 禁止用网页 iframe 代替本地素材。
- 禁止因为一张图失败而阻塞整个 Canvas。
