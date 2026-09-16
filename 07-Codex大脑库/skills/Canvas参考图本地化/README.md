# Canvas参考图本地化

这个 Skill 专门解决“Obsidian Canvas 参考图变成 Pinterest 登录页、空白网页或验证码”的问题。

核心原则：
**不要批量登录。不要让网页预览承担图片显示。把参考图本地化成 `type:file`。**

文件：
- `SKILL.md`：给 Codex / Agent 用的执行规则
- `scripts/localize_canvas_refs.py`：批量下载并重写 Canvas
- `reference_manifest.json`：本次黎黎隆 Canvas 已整理出的 40 个直接图片 URL + 来源 URL

依赖：
- Python 3
- 可选：Bun + `bunx baoyu-fetch`，只用于 direct image 下载失败的 fallback

建议先：

```powershell
python scripts/localize_canvas_refs.py ... --dry-run
```

再正式运行。

## 黎黎隆推荐路径

```text
黎黎隆/
└─ 场景视觉参考/
   └─ assets/
      └─ references/
```

Canvas 里的参考图最终统一写成：

```json
{
  "type": "file",
  "file": "黎黎隆/场景视觉参考/assets/references/ref_xxx.jpg"
}
```

网页来源只作为文字证据保留，不再负责图片预览。
