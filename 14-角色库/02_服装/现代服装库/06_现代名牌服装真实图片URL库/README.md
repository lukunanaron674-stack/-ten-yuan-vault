# 现代名牌服装真实图片库｜1000套

> 建库日期：2026-08-03  
> 当前状态：`candidate-ready`  
> 用途：现代题材角色服装参考、品牌廓形研究、材质与搭配检索。  
> 来源：Vogue Runway 2026 高级成衣系列。  
> 存储策略：公开仓库只保存来源页与图片直链，不复制第三方版权原图。

## 已完成

- 1000条唯一真实秀场主图直链；
- 1000个不同 Vogue `photo_id`；
- 17个分系列 Obsidian Canvas；
- 1个图片图库总索引 Canvas；
- 每张卡同时保存图片直链与原始来源页；
- 已自动排除 details、beauty、backstage、封面裁切图和重复尺寸。

GitHub Actions 验收结果：

```text
validated: 1000 image URLs, 18 canvases
```

## 打开方式

从仓库入口打开：

```text
14-角色库/现代服装库/06_现代名牌服装真实图片URL库.canvas
```

入口 Canvas 已连接：

```text
06_现代名牌服装真实图片URL库/
└─ generated_canvases/
   └─ 00_真实图片总索引.canvas
```

总索引再连接17个品牌／系列 Canvas。

## Canvas 图片卡格式

```markdown
## 0001｜Chanel Look 1

![](https://assets.vogue.com/photos/.../00001-chanel-...jpg)

- 品牌：Chanel
- 系列：Spring 2026 Ready-to-Wear
- Look：1
- 状态：candidate

[图像来源页](https://www.vogue.com/fashion-shows/.../collection#1)
```

`image_url` 用于 Canvas 直接显示图片；`source_page_url` 用于追溯原始页面。两者不能再混为一谈。

## 文件结构

```text
06_现代名牌服装真实图片URL库/
├─ README.md
├─ collections.json
├─ image_records.json
├─ scrape_vogue_image_records.py
├─ build_fashion_image_canvases.py
└─ generated_canvases/
   ├─ 00_真实图片总索引.canvas
   ├─ 01_Chanel_Spring_2026_Ready-to-Wear.canvas
   ├─ 02_Prada_Spring_2026_Ready-to-Wear.canvas
   ├─ ...
   └─ 17_Fendi_Spring_2026_Ready-to-Wear.canvas
```

## 数量纠偏

旧计划表把 Giorgio Armani Spring 2026 写为87套，但 Vogue 页面实际可核验的主秀场图为86套。为了不拿细节图冒充服装，图库使用 Fendi 同系列页面中的第38套真实主图补足总数，因此：

- Giorgio Armani：86套真实主图；
- Fendi：38套真实主图；
- 最终总数：1000套；
- 补量记录：1条，并在 `image_records.json` 标记 `supplemental_to_total: true`。

## 状态说明

- `candidate-ready`：图片直链、Look编号和来源页已自动匹配并通过数量、唯一性与Canvas格式检查；
- `verified`：完成人工逐项视觉核验后才可升级；
- `canonical`：满足现代服装库全部S级门禁后才可升级。

目前这些图片可以用于浏览、选图和角色服装参考，但理论正本仍应保留候选状态。自动化终于学会了谦虚，人类偶尔也该试试。

## 重建命令

```bash
python scrape_vogue_image_records.py \
  --collections collections.json \
  --output image_records.json

python build_fashion_image_canvases.py \
  --input image_records.json \
  --output-dir generated_canvases
```

## 版权与稳定性

图片版权归品牌、摄影师和 Vogue 所有。本库仅保存研究导航所需的远程嵌入地址与来源页。远程图片若因平台改版失效，应重新运行抓取并记录变更，不静默替换证据。
