# Obsidian视觉知识库 v1

这里保存从 Vault 图片素材生成的视觉描述、索引和批处理报告。

## 规则

- 原始图片只读，不覆盖、不移动、不压缩。
- Markdown 描述使用 Obsidian Frontmatter、Callout 和图片 Embed。
- `tenyuan_status` 与 `five_dimension_status` 只表示候选分析，不是正式正典。
- `needs_review` 必须经过人工复核后才能升级为 `reviewed` 或 `approved`。
- 不接 H3、ComfyUI、Hermes、GitHub 自动上传。

## 首批运行

```powershell
python .\工具\analyze_images.py `
  --vault "C:\Users\19308\Documents\Obsidian\ten-yuan-vault" `
  --limit-per-type 10 `
  --notes-json ".\工具\trial_notes.json"
```

## 查询

```powershell
python .\工具\search_visual_index.py --type scene
python .\工具\search_visual_index.py --project "黎黎隆"
python .\工具\search_visual_index.py --query "机械 湖面"
```
