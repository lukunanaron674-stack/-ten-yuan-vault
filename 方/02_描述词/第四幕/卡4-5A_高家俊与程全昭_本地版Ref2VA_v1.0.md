# 卡4-5A｜高家俊与程全昭｜本地版执行词 v1.0（多参考图 · Ref2VA）

> 版本：v1.0｜2026-09-07｜由 v5 无台词 5 秒版升级为**含台词 7 秒版**；本地 3070 跑（默认档 mp0.7 + 8 步，裁剪版模型）。
> 用户 2026-09-07 新增：① 3-4s 帧参考图（风格+交接锚）；② 台词：胡逸民「拜托了，全昭。」(3-4s)、程全昭「嗯！」(4-5s)。
> 工作流：`minimax_h3_setup/004_batch/workflow_45a_v10.json`（生成器 `gen_workflow_45a_v10.py`）。

---

## 1. 风格（Style）

- **Include**：冷灰蓝二维手绘历史动画；细墨线、哑光水彩颗粒、低饱和监狱色调、潮湿深色石墙纹理；同一镜内全程统一平面绘风。
- **Exclude**：3D 渲染、写实、字幕、风格漂移（任何一帧掉出冷灰蓝手绘都算不合格）。
- **全局光源/色调/氛围**：阴郁克制的监狱外清晨感；冷调天光从高墙上方低位窗口斜入；潮湿石面反光；安静、压迫、隐秘。

## 2. 时间轴（Timeline · 7.00s · 24fps）

| # | 时间 | 机位/运镜 | 画面 | 台词·画外音 | 光源/色调 | 音效 |
|---|---|---|---|---|---|---|
| T1 | 00:00–01:00 | 固定正面中景，不推不摇 | 空监狱外墙+低位铁窗静止，无人物（锚 @图片1） | 无 | 冷灰蓝，高墙天光 | 极低环境风 |
| T2 | 01:00–02:00 | 同上锁定 | 程全昭眼睛从铁栏后现，谨慎外望；一手搭下窗沿（脸/发/服/位锚 @图片3） | 无 | 同上 | 极轻衣料 |
| T3 | 02:00–03:00 | 同上 | 右下方伸入一手一前臂+折叠信，缓慢靠近窗口；不露头脸肩身 | 无 | 同上 | 手掌窗沿轻响 |
| T4 | 03:00–04:00 | 同上 | 胡将信递到窗口下，全昭伸手接；此构图必须锁 @图片2（3-4s 帧） | 胡（画外，约50，低沉克制微急）：**拜托了，全昭。** | 同上 | 轻微纸张摩擦 |
| T5 | 04:00–05:00 | 同上 | 全昭接信握稳，胡略收手 | 程（接信后，短促坚定）：**嗯！** | 同上 | 衣料微动 |
| T6 | 05:00–07:00 | 同上 | 停留完成交接；自然呼吸+衣料微动，终帧锁 @图片4 | 无 | 同上，风声收住 | 安静 |

**运镜铁律**：镜头固定正面中景，不推拉、不摇移、不变焦、不虚焦、不切场景；铁栏笔直平行等距，只修全昭手边那根错误贴手栏杆；全昭铁栏后稳定不变形；胡逸民只露一手一前臂，绝不露头/脸/肩/身。

## 3. 角色参考（按出现顺序）

- **R1 程全昭**：铁栏后。脸型、黑发低盘髻、浅灰蓝立领斜襟长袖上衣、深藏蓝百褶长裙、白袜、黑色玛丽珍鞋。手自然搭下窗沿，外形/位置/服饰全程稳定。
- **R2 胡逸民**：仅窗口外侧一只手、前臂、折叠信件（由画面右下方伸入）。不出现头、脸、肩膀、胸口或身体；低沉克制微急的画外男声。

## 4. 场景设定（C1）

- **C1 监狱外低位传递窗**：镜头位于监狱外侧，正对低位横向传递窗口；窗口上方可见高墙、瞭望塔、铁丝网。潮湿深色石墙、笔直平行等距铁栏、固定透视。环境压迫、克制、安静。
- 参考图：`方/07_素材图/第四幕/卡4-5A_C版_低位窗口_监狱场景_无人物_v3.png`（场景基准）→ 映射 `ref1_scene_empty.png`。

## 5. 道具参考（P1）

- **P1 折叠信件**：胡手中持有的折叠信，单一连续实体道具；不得凭空出现、消失、变形、复制，不得出现可读文字。
- 参考图：4-5a1 / 4-5a2 中均含信件形态。

## 6. 负面提示词（Dropped）

- 风格：3D、写实、风格漂移、变脸、动画崩坏。
- 人物：额外人物、额外手指、胡逸民头/脸/肩/身露出、全昭服饰或位置漂移、夸张表情。
- 结构：铁栏弯曲/变形/不等距、信件凭空消失/变形/可读文字、栏杆穿手。
- 镜头：推拉、摇移、变焦、虚焦、切场景、爆闪、字幕、logo、现代物件。

## 7. 资产入口登记

**导演台执行词（与 workflow_45a_v10.json 一致）**

```
Cold gray-blue 2D hand-drawn historical animation with fine ink outlines, matte watercolour grain,
low-saturation prison tones and damp dark stone wall texture — ONE consistent flat-painted style held across the ENTIRE shot.
NO 3D, NO photorealism, NO subtitles, NO style drift.

The shot is ONE continuous LOCKED single take at a low prison transfer window on the OUTSIDE of the wall:
the camera faces the low horizontal barred window straight on at medium-shot height and stays fixed —
no push, no pan, no zoom, no rack focus, no cut. High wall, watchtower and barbed wire are visible above the window;
oppressive, restrained, quiet.

Cheng Quanzhao stays BEHIND the iron bars: keep her face shape, black low bun, light gray-blue standing-collar
slanted-frontal long-sleeve top, deep navy pleated long skirt, white socks and black Mary-Jane shoes;
one hand rests on the lower window edge, outward appearance and position stable.

Hu Yimin appears ONLY as one hand, forearm and a folded letter entering from the lower-right of frame —
NO head, face, shoulder, chest or body. He passes the letter toward the window; Cheng reaches from behind the bars
to receive it: one restrained, hidden, oppressive handover. The letter must NOT appear, vanish, deform, duplicate
or show readable text.

The iron bars must stay straight, parallel, equally spaced, fixed perspective; only the one wrongly-shaped stray bar
right next to Cheng's hand may be removed; do not break any other structure.

The shot begins by holding @图片1 exactly for approximately 1.00 seconds: empty prison outer wall and low iron window,
absolutely no person. Bars, lighting and composition must remain identical to @图片1 during this opening hold.

From 00:01.000 to about 00:02.000 — Cheng Quanzhao's eyes appear from behind the bars and she looks out cautiously;
one hand stays on the lower window edge. Keep her face shape, hairstyle, clothing and position exactly as anchored by @图片3.

From 00:02.000 to about 00:03.000 — a partial figure enters from the lower-right: show only the dark sleeve, forearm
and one hand holding a folded letter, slowly approaching the window. Do NOT reveal the person's head, face, shoulder or body.

From 00:03.000 to about 00:04.000 — Hu Yimin extends the folded letter down to the lower window; Cheng reaches out and
makes contact with the letter. This exact handover composition must match @图片2 (the 3-4s frame reference you supplied).
An off-screen male voice around 50, low and urgent but controlled, says exactly: <d>[Chinese] 拜托了，全昭。</d>

From 00:04.000 to about 00:05.000 — Cheng Quanzhao takes the letter and holds it firmly; Hu Yimin slightly withdraws his
arm after releasing. Cheng replies short and firm, exactly: <d>[Chinese] 嗯！</d>

From 00:05.000 to about 00:07.000 — hold the completed handover: small natural breathing and cloth movement, composition
matching @图片4. The final frame at 07.00 seconds must match @图片4 as closely as possible.
No extra person, extra finger, bar deformation, face change, modern object, readable text, subtitle, logo, flicker or
exaggerated motion.

overall_soundscape: Quiet damp prison exterior ambience, faint wind, restrained cloth movement, hand touching iron window
edge, subtle paper friction during the handoff; Hu Yimin's low off-screen line at 3-4s and Cheng Quanzhao's short firm reply
at 4-5s. No loud music.

non_diegetic_music: N/A
```

**参考图 4 张**（已就位 `E:/ComfyUI_portable/.../input/45a_director/`）

| # | 文件名 | 来源 | 作用 |
|---|---|---|---|
| 1 | ref1_scene_empty.png | 第四幕/卡4-5A_C版_低位窗口_监狱场景_无人物_v3.png | 空窗场景/风格基准（开场锚） |
| 2 | ref2_exchange_3-4s.png | 临时截图/Pasted image 20260905114209.png（用户 2026-09-07 新给） | 3-4s 帧参考·风格+交接锚 |
| 3 | ref3_full_comp.png | 临时截图/4-5a1.png | 完整构图（全昭脸+手+信+递信右手） |
| 4 | ref4_crop.png | 临时截图/4-5a2.png | 裁切（手+信交接区） |

**工作流**：`minimax_h3_setup/004_batch/workflow_45a_v10.json`（4 图 / 7.0s / mp0.7 / 8 步 / 裁剪版 `minimax_h3_ref2va_pruned_int8_convrot` / 24fps / 2×2 四宫格）。

## 📚 资料库素材索引（跨设备取全 · 我的文档）

> 已上传资料库 2026-09-07（描述词 1 篇 + 参考图 4 张 + 工作流 1 个，给 4090 跑）。
> 参考图下载后按 `ref1_scene_empty/ref2_exchange_3-4s/ref3_full_comp/ref4_crop` 原文件名放入 `ComfyUI/input/45a_director/`。

**描述词**
- 本篇（v1.0 本地版主执行依据）：https://www.workbuddy.cn/space/d/5Qb171Z2SmCY6WkvsAD8sG

**参考图 4 张**
| # | 库节点 | 对应文件名 |
|---|---|---|
| 1 | i1FgYfoSjRNyXaEZsTjUMq | ref1_scene_empty.png |
| 2 | SLwDAOetNeAf0NWInA2tnr | ref2_exchange_3-4s.png |
| 3 | tS6QZeY75aWfcH38kagM9w | ref3_full_comp.png |
| 4 | TWTX9U6haB3F37xsMTTDpz | ref4_crop.png |

**工作流**
- v1.0 四图 · 7.0s · mp0.7 · 8步（默认档）：`gTiNl9aDvwoVtydpdW1pkQ`
