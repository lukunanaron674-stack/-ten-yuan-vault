---
name: 场景九宫格
description: 用本机 h3img 把一张已认可的场景定帧扩成 3×3 九机位接触表，产出可当分镜选址与轴线参照的图与机位表；只换机位不换空间光色，不生成人物，不改画风。
version: 1.0
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# 场景九宫格 Skill v1

## 唯一目标

给定**一张已认可的场景定帧**，产出一张 3 列 × 3 行、共九格、同一空间的九机位接触表，
外加一份九宫格机位表。用于分镜选址、轴线确认、镜头候选，不用于直接出片。

## 输入门禁

必须全部满足，缺一即停并写 `BLOCKED_INPUT`：

1. 场景定帧是**真实已认可资产**（10-31 原片帧、端C 交付、库内已验收件），记录 `relative_path` + `sha256`。
2. 定帧本身画风正确、空间完整、无人物遮挡。
3. 该场景的**材质与色温清单**已写出（地面/天花/家具/主光/副光），见下节。

禁止用生成图假冒定帧，禁止拿角色图当场景图，禁止把不同场景混进一张九宫格。

## 宫格句式（已实证，不要自创）

2026-11-18 实测可用的句式为：

```
Create one single image that is a contact sheet: exactly 3 columns by 3 rows, nine equal landscape
panels separated by slim pale grey gutters, thin and even. Every panel shows THE SAME <空间名> - the
same <材质1>, the same <材质2>, the same <光源>. Lighting and palette are identical in all nine
panels; only the camera position changes.

Panel 1: <机位1>
...
Panel 9: <机位9>

Rule for all panels: absolutely no people, no figures, no hands, no faces. Empty room in every panel.
No text, no labels, no numbers, no panel captions, no watermark. Nothing is cropped out of a panel and
no panel repeats another.
```

要点：

- 首句必须点明 `contact sheet` + `exactly N columns by M rows`，否则模型会当普通插画。
- `THE SAME ... only the camera position changes` 是空间一致性的唯一有效约束。
- 九条 Panel 描述逐条编号，不要写成一段流水句。
- 尾段三条规则（禁人/禁字/禁裁切重复）必须原样保留。

## 九机位默认表

按此顺序写，覆盖空间关系；换场景时替换物件名，保持机位类型不变：

| 格 | 机位类型 | 作用 |
|---|---|---|
| 1 | 入口全景，正对主区 | 定空间总关系 |
| 2 | 高机位俯视主桌/主区 | 定平面布局 |
| 3 | 过道纵深，同向消失点 | 定通道与纵深 |
| 4 | 次要出口/后门，暖光外溢 | 定进出口与光源 |
| 5 | 低机位仰视顶面与灯 | 定高度与照明 |
| 6 | 角落家具与台灯，软焦背景 | 定静物与氛围 |
| 7 | 物件微距（书堆/器物） | 定材质细节 |
| 8 | 贴地机位，地面材质 | 定地面与尺度 |
| 9 | 反打，从主区回望入口 | 定反打轴线 |

## 硬约束

- **全格零人物**。角色一律不进九宫格，避免模型把人物画进不想放的格。
- **只换机位**，不换时段、不换灯、不换调色。
- **材质与色温清单置顶**，见下节，否则模型会自行替换地板与天花板材质。
- **隔离名词**：要"某物的影子"时不要出现该物体的名词（见踩坑）。

## 材质与色温清单（必写，置顶）

九宫格最容易翻车的地方不是机位，而是模型偷偷换材质。开工前先从定帧里读出这五项，
写成一段前置约束置于 prompt 最前：

```
Additions that must hold in EVERY panel: the floor is <具体材质，如 worn dark wooden floorboards>,
never stone or tile; the ceiling is <具体材质，如 dark stained timber, low and shadowed>,
never pale plaster; the <关键家具> is <具体颜色材质>; and a <副光色温> shadow sits in <位置>,
contrasting the <主光色温> light. Keep exactly these materials and this palette in all nine panels.
```

2026-11-18 实测：不写这段时，p3 地板变石板、p5 天花变浅灰泥、p6 扶手椅变米绿色、整体偏黄橙缺冷阴影。

## 执行

跑批器：`C:/work/h3/h3_img_runner.py`（spec 驱动，查队列→投递→轮询→落盘→manifest）。

```
python C:/work/h3/h3_img_runner.py --spec C:/work/h3/spec/<card>.json
```

spec 结构：

- `card`：输出目录名，落 `C:/work/h3/work/<card>/`
- `template`：`templates/h3img_2k.json`（image→KSampler cfg1.0 steps6）
- `width/height`：2560×1408（3×3 每格 853×469，仍为 16:9）
- `ref_dir` + `shots[].scene_ref`：场景定帧（image_1）
- `shots[].char_ref`：**必须为 null**（九宫格不接角色图）
- `shots[].prompt`：宫格句式 + 材质清单 + 风格常量

参考实现：`C:/work/h3/spec/SCENE-GRID-EP1-02-2.json`（书店九宫格，G9 与 G9b 两版）。

耗时：2560×1408 单张 **20s**（纯场景，比带角色快一倍，且未出现崩溃）。

## 输出

- 图：`C:/work/h3/work/<card>/still_<key>.png`
- manifest：同目录 `still_manifest_<时间戳>.json`（含 seed、prompt_id、sha256）
- 机位表：与图同名 `.md`，九行，列 `格号 / 机位类型 / 实际内容 / 可用(Y/N) / 备注`

## 验收

| 检查项 | 判据 |
|---|---|
| 格数与格线 | 3×3，九格等大，有细浅分隔线 |
| 空白格 | 无（缺格 = RETRY） |
| 人物与文字 | 全格为零 |
| 空间一致 | 九格能看出是同一空间，家具位置不矛盾 |
| 材质一致 | 地面/天花/关键家具材质九格统一 |
| 色温一致 | 主副光关系九格统一 |

不达标标 `RETRY` 并写 `failed_panels`，只重跑变体，不覆盖上一版。

## 用法边界（重要）

九宫格是**选址表，不是素材**。单格分辨率 853×469，**不足以做 I2VA 首帧**。
选定机位后，必须按该机位单独重出一张 2560×1408 的关键帧再进 I2VA。

## 踩坑

- **否定词堆叠会强化概念**：`no solid object / never a block / cast shadow only` 写六遍，
  仍会把影子画成实体。要投影就不要出现该物体的名词，改写成"光带/条纹 + 谁投下的"。
- **材质会被偷偷替换**：地板变石板、天花变灰泥是高频问题，靠置顶材质清单压制。
- **不要用生成图当锚**：拿未认可图当 image_1，九格会一起继承它的错误。

## 禁止

- 不生成人物，不把角色放进宫格。
- 不替换、不覆盖已冻结的场景资产。
- 不把九宫格当正片关键帧或首帧使用。
- 不因为九格好看就跳过单镜重出，直接进 I2VA。
