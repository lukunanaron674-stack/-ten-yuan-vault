# 黎黎隆 R0｜图片资产 → 语义索引层

## 当前范围

本批扫描的是本地 GitHub/vault 工作树：`黎黎隆项目`。当前工作树没有独立的 `OBC/characters/scenes/props` 目录，因此没有伪造 OBC 路径；以后拿到 OBC 根目录时，直接把 `--root` 换成该目录即可复用扫描器。

## 已完成

- `assets_index.json`：2026-10-01 刷新为当前本地树中的 1,487 张图片路径、类型、项目、状态、尺寸和 SHA-256。
- `semantic_index.json`：20 张人工整理的 `curated_candidate`；另 1,467 张保持 `unprocessed`，不得把未处理条目当成已理解素材。
- `R0_2_audit.json`：20 张跨角色、场景、道具样本的视觉抽查记录。
- `TASK_R0_20260922_001.json`：B 端示例请求“生成黎黎隆森林夜景动作镜头”的解析结果。
- `c_handoff/TASK_R0_20260922_001/`：C 端精确参考包，含 `task.json`、`manifest.json` 和角色/场景图片。

## 可重复命令

```powershell
python -X utf8 .\lililong_r0_index.py scan `
  --root "C:\Users\19308\Documents\Obsidian\ten-yuan-vault\黎黎隆项目" `
  --output "...\r0_semantic_index\assets_index.json"

python -X utf8 .\lililong_r0_index.py query `
  --index "...\r0_semantic_index\semantic_index.json" `
  "找黎黎隆尾巴参考"

python -X utf8 .\lililong_r0_b_task.py `
  "生成黎黎隆森林夜景动作镜头" `
  --index "...\r0_semantic_index\semantic_index.json" `
  --output "...\TASK_R0_20260922_001.json"
```

查询只返回当前文件仍存在且 SHA-256 与索引一致的结果；每条结果包含 `id`、本地 `path` 和 `sha256`。语义覆盖目前限于 20 条人工整理记录；未命中时，应继续查阅 `00_总览/素材文字对接_全库图床清单_20261001.md` 及条目指定的文字源，不得据此断言全库没有该素材。

## 状态边界

`curated_candidate` 只表示已经有结构化语义，可被 B 端调用；不表示角色/场景正式锁定。C 端 handoff 已解析但 `generation_submitted=false`，因此本轮没有启动 H3，也没有把旧生成图冒充 R0-6 的新结果。
