# 现代名牌服装真实图片 URL 库｜1000套

> 建库日期：2026-08-03  
> 用途：现代题材角色服装参考、品牌廓形研究、材质与搭配检索。  
> 来源：Vogue Runway 2026 高级成衣系列。  
> 本目录只保存 URL 索引，不复制、下载或重新上传版权图片。

## 使用方式

每个系列使用统一规则：

```text
系列图库URL#Look编号
```

例如：

```text
https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/chanel/slideshow/collection#37
```

即 Chanel 2026春夏成衣 Look 37。

运行同目录的 `generate_1000_urls.py`，会生成完整的1000条 CSV 或 Markdown 链接清单。`collections.json` 保存可供其他程序读取的紧凑索引。

## 收录原则

1. 全部为2026年现代成衣造型，不使用AI生成图。
2. 优先国际高端品牌、清晰全身造型与可画性较强的服装。
3. 每个 Look 编号视为一个独立服装参考。
4. 图片版权归品牌、摄影师及原发布平台所有，本库仅作研究导航。
5. Fendi Spring 2026 仅收前37个 Look，使总量精确为1000。

## 系列分布

| 全局编号 | 品牌 | 系列 | 数量 | URL模板 |
|---|---|---|---:|---|
| 0001–0078 | Chanel | Spring 2026 Ready-to-Wear | 78 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/chanel/slideshow/collection#{1..78}` |
| 0079–0132 | Prada | Spring 2026 Ready-to-Wear | 54 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/prada/slideshow/collection#{1..54}` |
| 0133–0193 | Prada | Fall 2026 Ready-to-Wear | 61 | `https://www.vogue.com/fashion-shows/fall-2026-ready-to-wear/prada/slideshow/collection#{1..61}` |
| 0194–0258 | Miu Miu | Spring 2026 Ready-to-Wear | 65 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/miu-miu/slideshow/collection#{1..65}` |
| 0259–0313 | Loewe | Spring 2026 Ready-to-Wear | 55 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/loewe/slideshow/collection#{1..55}` |
| 0314–0379 | Loewe | Fall 2026 Ready-to-Wear | 66 | `https://www.vogue.com/fashion-shows/fall-2026-ready-to-wear/loewe/slideshow/collection#{1..66}` |
| 0380–0429 | Saint Laurent | Spring 2026 Ready-to-Wear | 50 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/saint-laurent/slideshow/collection#{1..50}` |
| 0430–0478 | Saint Laurent | Fall 2026 Ready-to-Wear | 49 | `https://www.vogue.com/fashion-shows/fall-2026-ready-to-wear/saint-laurent/slideshow/collection#{1..49}` |
| 0479–0532 | Balenciaga | Spring 2026 Ready-to-Wear | 54 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/balenciaga/slideshow/collection#{1..54}` |
| 0533–0607 | Versace | Spring 2026 Ready-to-Wear | 75 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/versace/slideshow/collection#{1..75}` |
| 0608–0645 | Gucci | Spring 2026 Ready-to-Wear | 38 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/gucci/slideshow/collection#{1..38}` |
| 0646–0685 | Victoria Beckham | Spring 2026 Ready-to-Wear | 40 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/victoria-beckham/slideshow/collection#{1..40}` |
| 0686–0734 | Emilio Pucci | Spring 2026 Ready-to-Wear | 49 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/emilio-pucci/slideshow/collection#{1..49}` |
| 0735–0821 | Giorgio Armani | Spring 2026 Ready-to-Wear | 87 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/giorgio-armani/slideshow/collection#{1..87}` |
| 0822–0881 | Tom Ford | Spring 2026 Ready-to-Wear | 60 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/tom-ford/slideshow/collection#{1..60}` |
| 0882–0963 | Bottega Veneta | Fall 2026 Ready-to-Wear | 82 | `https://www.vogue.com/fashion-shows/fall-2026-ready-to-wear/bottega-veneta/slideshow/collection#{1..82}` |
| 0964–1000 | Fendi | Spring 2026 Ready-to-Wear | 37 | `https://www.vogue.com/fashion-shows/spring-2026-ready-to-wear/fendi/slideshow/collection#{1..37}` |

## 文件

- `README.md`：人工可读索引与规则。
- `collections.json`：17个系列、数量和URL模板。
- `generate_1000_urls.py`：生成完整1000条 URL 的 CSV／Markdown 工具。

## 后续建库顺序

真实图片证据 → 服装类型标签 → 廓形／材质／色彩 → 最近邻去重 → 十元分析。

先把真实对象钉住，再做理论映射。否则分析得再漂亮，也只是给空气量体裁衣。