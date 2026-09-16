---
name: Canvas参考图本地化
description: 把 Obsidian Canvas 中会弹登录页、验证码或空白网页的外部参考图批量下载到 Vault 本地 assets，并将节点改写为 type:file，彻底避免 Pinterest/Behance/站点登录预览问题。优先使用已知直接图片 URL；失败时可调用 baoyu-fetch --download-media 通过 Chrome CDP 抓取并本地化媒体。
version: 0.1
status: active
---

# Canvas参考图本地化 Skill

## 目的

解决这类问题：

- Canvas `type:link` 预览成 Pinterest 登录框；
- 外站 iframe / OpenGraph 卡片要求登录；
- 网络断开后参考图全部失效；
- 同一个 Canvas 在另一台电脑无法看到参考图；
- `text` 节点里的 `![](https://...)` 在 Canvas 中不稳定。

**最终统一策略：参考图一律本地化为 `type:"file"`。**

这和 `14-角色库/X/X_9种发型.canvas` 的成功模式一致：

```json
{
  "type": "file",
  "file": "项目/assets/xxx.jpg"
}
```

网页 URL 只保留在旁边的文字说明里作为来源，不再承担“显示图片”的职责。

---

## 上游借鉴

参考 `JimLiu/baoyu-skills`：

- `baoyu-url-to-markdown`
- `packages/baoyu-fetch`

核心能力：

```bash
--download-media
--media-dir <dir>
```

它们会通过 Chrome CDP / 页面结构提取媒体，下载到本地并重写链接。

本 Skill 把这个思想专门适配到 `.canvas`。

---

## 输入

最低：

```text
input.canvas
reference_manifest.json
```

推荐：

```text
input.canvas
reference_manifest.json
Vault根目录
```

manifest 格式：

```json
{
  "ref_style_A01": {
    "image_url": "https://.../image.jpg",
    "source_url": "https://原作品页"
  }
}
```

---

## 固定流程

### 1. 优先直接图片 URL

先尝试：

```text
image_url
→ HTTP 下载
→ 检查 Content-Type 必须是 image/*
→ 检查文件大小 > 10KB
→ 保存到 assets/references/
```

这一步可以绕开 Pinterest 登录页，因为：

```text
Pinterest 页面 URL    ❌ 会登录
i.pinimg.com 图片 URL  ✅ 通常直接拿图片
```

### 2. direct URL 失败才走 baoyu-fetch

```bash
bunx baoyu-fetch "<source_url>" \
  --format markdown \
  --output "<temp>/<node>.md" \
  --download-media \
  --media-dir "<temp>/<node>/"
```

然后从下载到本地的图片中选最大、非 logo / avatar / icon 的候选。

### 3. 改写 Canvas

把：

```json
{
  "id": "ref_xxx",
  "type": "link",
  "url": "https://..."
}
```

改为：

```json
{
  "id": "ref_xxx",
  "type": "file",
  "file": "黎黎隆/场景视觉参考/assets/references/ref_xxx.jpg"
}
```

**ID、x、y、width、height、color 全部保留。**

### 4. 来源不丢

来源 URL 放在对应 note 节点：

```md
来源：https://...
```

但不得再使用 `type:link` 来显示参考图。

---

## Pinterest 特例

**禁止批量登录 Pinterest。**

顺序：

```text
已有 pinimg 直链
→ 直接下载

没有直链
→ 换非 Pinterest 原作者 / 官方 / ArtStation / Behance / Steam 等来源

仍没有
→ baoyu-fetch + Chrome profile

最后才人工确认
```

不要把“批量登录 8 个 Pinterest 卡片”当正常工作流。那是参考图系统设计失败，不是用户应该承担的手续。

---

## 验收

Canvas 完成后必须检查：

- [ ] 参考图节点全部是 `type:file`
- [ ] Canvas 内 `type:link` 参考图数量 = 0
- [ ] Canvas 内 Pinterest URL 只允许存在于文字来源字段
- [ ] assets/references 中每个图片文件真实存在
- [ ] 每个图片 > 10KB
- [ ] 文件扩展名与内容一致
- [ ] P00 配色母版仍为本地 file
- [ ] 随机抽 5 张图片在 Obsidian 中可离线显示

---

## 命令

Windows PowerShell：

```powershell
python scripts/localize_canvas_refs.py `
  --canvas "黎黎隆_场景风格视觉化发散树_v1.1_URL预览.canvas" `
  --manifest "reference_manifest.json" `
  --vault-root "C:\你的Vault" `
  --asset-rel "黎黎隆\场景视觉参考\assets\references"
```

仅检查，不下载：

```powershell
python scripts/localize_canvas_refs.py ... --dry-run
```

---

## 禁止

- 不要再把 Pinterest 页面做 `type:link` 参考图。
- 不要把第三方网页 iframe 当稳定素材库。
- 不要在登录页截图上继续做“借用规则”。
- 不要因为外链坏了就删除参考图节点。
- 不要用 source URL 覆盖原节点语义 ID。
