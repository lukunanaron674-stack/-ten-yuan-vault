# 现代名牌服装真实图片库｜1000套（修正版）

> 建库日期：2026-08-03  
> 当前状态：`evidence-pending`  
> 用途：现代题材角色服装参考、品牌廓形研究、材质与搭配检索。  
> 来源主轴：Vogue Runway 2026 高级成衣系列。  
> 本目录不复制、下载或重新上传版权图片；仅保存来源页、图片直链记录与Canvas生成工具。

## 为什么上一版不显示图片

上一版只保存了：

- `系列来源页 URL`
- `collection#Look编号` 形式的锚点链接

它们只是网页地址，不是图片直链，因此 Canvas 只能显示链接，不能直接显示服装图。

## 修正版目标

按 Skill 门禁，区分并保存两类地址：

1. `source_page_url`：来源页面 URL；
2. `image_url`：真实图片直链 URL；

只有拿到 `image_url`，并在 Canvas 文本卡里使用：

```markdown
![](https://真实图片直链.jpg)
```

Canvas 才会真正显示图片。

## 当前文件

- `README.md`：本说明。
- `collections.json`：17个系列、数量与来源页模板。
- `image_records.json`：真实图片记录占位文件；抓取与核验后写入1000条。
- `scrape_vogue_image_records.py`：从系列页抓取候选图片直链并生成 `image_records.json`。
- `build_fashion_image_canvases.py`：根据 `image_records.json` 生成分系列 Canvas 图库。
- `06_现代名牌服装真实图片URL库.canvas`：本目录操作入口。

## 运行顺序

### 1）抓取候选图片直链

```bash
python scrape_vogue_image_records.py \
  --collections collections.json \
  --output image_records.json
```

脚本会：

- 读取 17 个系列来源页；
- 尝试抽取每个 Look 的图片直链；
- 输出 `image_records.json`；
- 若总数不是 1000，默认直接失败，不把半成品冒充完成品。

### 2）人工核验（必做）

必须逐项核验：

- 图片是否真的是该 Look；
- `image_url` 是否可打开；
- `image_url` 与 `source_page_url` 是否不是同一个东西；
- 是否有重复图、错位图、缩略图或失效图；
- 是否满足服装结构可辨要求。

## 3）生成 Canvas 图库

```bash
python build_fashion_image_canvases.py \
  --input image_records.json \
  --output-dir generated_canvases
```

脚本会生成：

- `generated_canvases/00_真实图片总索引.canvas`
- 17 个分系列 Canvas 文件

每张卡格式为：

```markdown
## 0037｜Chanel Look 37

![](图片直链)

- 品牌：Chanel
- 系列：Spring 2026 Ready-to-Wear
- Look：37
- 状态：verified|candidate

[图像来源页](来源页URL)
```

## 状态定义

- `candidate`：抓取到候选图，但未完成人工核验；
- `verified`：图片直链与来源页、Look 编号一致，允许进 Canvas 正式卡；
- `rejected`：错误、重复、失效或结构不可辨；
- `evidence-pending`：当前目录总体仍未完成真实图片证据闭环。

## 收录原则

1. 全部为现代成衣真实图片，不使用 AI 生成图；
2. 优先国际高端品牌、清晰全身造型与可画性强的服装；
3. 以 Look 作为独立研究单位；
4. 图片版权归品牌、摄影师及原发布平台所有；
5. 公开仓库默认只保存来源页与图片直链，不镜像第三方原图；
6. 若图片直链规则变化，重新抓取后要保留核验记录。

## 现有系列分布

| 全局编号 | 品牌 | 系列 | 数量 |
|---|---|---|---:|
| 0001–0078 | Chanel | Spring 2026 Ready-to-Wear | 78 |
| 0079–0132 | Prada | Spring 2026 Ready-to-Wear | 54 |
| 0133–0193 | Prada | Fall 2026 Ready-to-Wear | 61 |
| 0194–0258 | Miu Miu | Spring 2026 Ready-to-Wear | 65 |
| 0259–0313 | Loewe | Spring 2026 Ready-to-Wear | 55 |
| 0314–0379 | Loewe | Fall 2026 Ready-to-Wear | 66 |
| 0380–0429 | Saint Laurent | Spring 2026 Ready-to-Wear | 50 |
| 0430–0478 | Saint Laurent | Fall 2026 Ready-to-Wear | 49 |
| 0479–0532 | Balenciaga | Spring 2026 Ready-to-Wear | 54 |
| 0533–0607 | Versace | Spring 2026 Ready-to-Wear | 75 |
| 0608–0645 | Gucci | Spring 2026 Ready-to-Wear | 38 |
| 0646–0685 | Victoria Beckham | Spring 2026 Ready-to-Wear | 40 |
| 0686–0734 | Emilio Pucci | Spring 2026 Ready-to-Wear | 49 |
| 0735–0821 | Giorgio Armani | Spring 2026 Ready-to-Wear | 87 |
| 0822–0881 | Tom Ford | Spring 2026 Ready-to-Wear | 60 |
| 0882–0963 | Bottega Veneta | Fall 2026 Ready-to-Wear | 82 |
| 0964–1000 | Fendi | Spring 2026 Ready-to-Wear | 37 |

## 后续工作轴

真实图片直链抓取 → 人工核验 → Canvas 图库生成 → 类型标签 → 廓形／材质／色彩 → 最近邻去重 → 十元分析。

先把图钉住，再谈理论。不然就会再次出现“链接很多，衣服没有”的技术喜剧。
