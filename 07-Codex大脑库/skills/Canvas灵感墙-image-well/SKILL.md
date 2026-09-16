---
name: Canvas灵感墙-image-well
description: 为 Obsidian Canvas 中下载失败或缺图的视觉参考节点，用 image-well 从无登录开放来源重新检索、下载成本地 assets，并把占位节点改成 type:file。默认只补失败项，不重跑已成功节点。
version: 0.1
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# Canvas 灵感墙 × image-well Skill v0.1

## 目标

解决：Canvas 已本地化的大部分参考图可用，但少数外链失败。失败项不再尝试旧 URL，不打开 Pinterest / Behance，不要求登录，直接用 image-well 重新搜索替代参考。

固定链路：

```text
FAILED 节点
→ 读取节点语义
→ 生成 3~5 个短搜索词
→ image-well 无登录源检索
→ 下载候选图到本地 assets
→ 选择 1 张主参考
→ Canvas 占位节点改为 type:file
→ 保留来源/许可 metadata
→ 验证 type:link = 0
```

## 上游工具

优先调用 `image-well`：

```bash
uv run ~/.claude/skills/image-well/scripts/well.py search "whale skeleton" \
  --sources openverse wikimedia \
  --limit 4 \
  --format download \
  --output <DIR>
```

若本机未安装 image-well，可临时拉取：

```bash
git clone --depth 1 https://github.com/tdimino/claude-code-minoan.git .tmp/minoan
uv run .tmp/minoan/skills/design-media/image-well/scripts/well.py ...
```

## 搜索规则

不要把完整场景句直接塞进搜索框。每个节点至少生成 3 组短词：

1. **对象词**：最直接的物体/空间名；
2. **结构词**：真正要借的视觉结构；
3. **环境词**：场景/空间上下文。

例如：

```text
骨骼空港
→ whale skeleton
→ rib cage skeleton
→ skeleton museum
```

如果第一组 0 结果，继续第二、第三组。不得因为第一组失败就停止。

## 来源优先级

第一梯队，无登录：

- Openverse
- Wikimedia Commons
- Met Museum
- Cleveland Museum
- Art Institute of Chicago
- Getty Open Content
- NASA
- Smithsonian（可用时）

默认先：

```bash
--sources openverse wikimedia
```

仍不足时再：

```bash
--preset all-free
```

禁止把 Pinterest / Behance 登录页当素材源。

## 视觉筛选规则

每个失败节点可下载 6~15 张候选，但 Canvas 默认只接入 1 张“主参考”。候选图保留在节点目录，方便人工替换。

主参考必须说明借用点，例如：

- 形状
- 线
- 色块
- 光影
- 空间
- 材质
- 功能结构
- 生物/机械嵌合方式

对于黎黎隆项目，**原图配色不继承**，统一受 P00 五色锁约束。

## Canvas 写回

输入：

`黎黎隆_v1.1_ZEROLOGIN/黎黎隆_场景风格视觉化发散树_v1.2_LOCAL.canvas`

只处理失败占位节点。成功节点不动。

把：

```json
{"id":"refR5_seed_I04","type":"text","text":"参考图未下载..."}
```

改成：

```json
{
  "id":"refR5_seed_I04",
  "type":"file",
  "file":"黎黎隆_v1.1_ZEROLOGIN/assets/references/imagewell/refR5_seed_I04/selected.jpg",
  "x":0,
  "y":0,
  "width":700,
  "height":420
}
```

必须保留原 `id / x / y / width / height / color`。

## 文件结构

```text
黎黎隆_v1.1_ZEROLOGIN/
├─ 黎黎隆_场景风格视觉化发散树_v1.2_LOCAL.canvas
├─ FAILED_参考图.txt
└─ assets/
   └─ references/
      └─ imagewell/
         ├─ ref_style_A05/
         │  ├─ candidates/
         │  ├─ selected.jpg
         │  └─ selected.meta.json
         └─ ...
```

## 验收

最终输出：

`黎黎隆_场景风格视觉化发散树_v1.3_FULL_LOCAL.canvas`

必须满足：

- [ ] 27 个原成功节点保持原状
- [ ] 13 个失败节点全部尝试 image-well
- [ ] 有合格图的失败节点改为 `type:file`
- [ ] 所有本地图文件真实存在
- [ ] `type:link = 0`
- [ ] Pinterest / Behance 登录流程 = 0
- [ ] 每个 selected 图有 metadata / 来源记录
- [ ] 未找到合格图时保留占位，不伪造完成
- [ ] P00 五色锁不因参考图原配色而改变

## 失败策略

单节点连续 3 组短词仍无结果：

1. 再扩 2 组同义/结构词；
2. 切换 `--preset all-free`；
3. 仍无合格图则记录 `NO_MATCH`；
4. 不准退回网页登录、不准批量登录。

## 本项目任务清单

读取：

`黎黎隆项目/场景视觉参考/补图任务_v1.3_13节点.json`

按其中顺序执行。