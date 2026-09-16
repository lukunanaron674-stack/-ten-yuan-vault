# Codex 执行说明｜黎黎隆 v1.3 参考图补全

## 直接执行目标

读取并遵守：

1. `07-Codex大脑库/skills/Canvas灵感墙-image-well/SKILL.md`
2. `黎黎隆项目/场景视觉参考/补图任务_v1.3_13节点.json`
3. 本地输入 Canvas：`黎黎隆_v1.1_ZEROLOGIN/黎黎隆_场景风格视觉化发散树_v1.2_LOCAL.canvas`

执行 13 个失败节点补图。

## 硬约束

- 不重跑或修改已经成功的 27 个参考节点。
- 禁止打开 Pinterest / Behance 登录页。
- 禁止把网页 `type:link` 重新塞回 Canvas。
- image-well 第一轮使用 Openverse + Wikimedia。
- 单节点第一组搜索 0 结果，必须继续该节点其余短搜索词。
- 三组都不足时，改用 `--preset all-free` 再试同义/结构词。
- 每节点可以下载多张候选，但 Canvas 默认只挂 1 张主参考。
- 主参考写入本地 `type:file`。
- 原节点 id、位置、尺寸、颜色必须保留。
- 参考图原色不继承，P00 五色锁优先。
- 找不到合格图就保留占位并记录 `NO_MATCH`，不得伪造完成。

## 输出

最终生成：

`黎黎隆_v1.1_ZEROLOGIN/黎黎隆_场景风格视觉化发散树_v1.3_FULL_LOCAL.canvas`

并输出一份报告：

`黎黎隆项目/场景视觉参考/v1.3_补图执行报告.md`

报告至少包含：

- 13 个节点逐项结果
- 每节点实际使用的搜索词
- 下载候选数量
- 最终 selected 文件路径
- 来源与许可
- NO_MATCH 项
- `type:link` 最终计数
- `type:file` 最终计数

## 给 Codex 的一句话命令

> 读取 `07-Codex大脑库/skills/Canvas灵感墙-image-well/SKILL.md` 与 `黎黎隆项目/场景视觉参考/补图任务_v1.3_13节点.json`，只补 `v1.2_LOCAL.canvas` 中 13 个失败参考节点，使用 image-well 的无登录来源搜索并本地化，输出 `v1.3_FULL_LOCAL.canvas`；不要改动已成功 27 节点，不打开任何登录页，失败节点必须依次跑短词扩展和 all-free fallback，并写执行报告。