# Codex 工作任务｜黎黎隆角色风格 R3 参考本地化

## 任务目标
把 `01_REFERENCE/reference_manifest.json` 中的参考源整理成本地可读、可追溯、可供 Obsidian Canvas 使用的参考库。

**这一步禁止跑图。禁止总结最终风格。完成本地化后停下，等待 R4 消化。**

## 输入
- `00_STYLE_CANVAS/黎黎隆_角色风格_R1-R3.canvas`
- `01_REFERENCE/reference_manifest.json`
- `02_USER_ORIGINAL/` 内三张原稿

## 执行规则
1. 为每个 R01-R10 建立独立文件夹：`01_REFERENCE/R01_WAKFU/` ... `R10_LoL_Clarity/`。
2. 优先使用：
   - 官方站公开 Gallery / Media Pack；
   - 官方 Fan Kit；
   - 项目实际参与艺术家的公开作品集。
3. 遇到登录墙、反爬、人机验证或禁止下载：
   - **不要登录，不要绕过**；
   - 保存 `source.url` 与占位卡；
   - 标记 `download_status: blocked`。
4. 每张本地图片旁边保留来源信息：
   - `source_url`
   - `work`
   - `artist/studio`
   - `reference_focus`
   - `download_date`
   - `license_or_terms_note`
5. 原图只做参考归档，不覆盖、不二次压缩。另生成 Canvas 用预览图：
   - 最长边 1600px；
   - 保持比例；
   - 文件名 `thumb_*.jpg/png`。
6. 每组采集数量按 manifest 的 `collect` 字段执行。
7. 采集时必须覆盖不同视角，而不是只找“最漂亮的立绘”：
   - 全身 / 剪影
   - 脸 / 五官
   - 服装 / 材质
   - 动作 / 重心
   - 机械或道具（适用时）
8. 更新 Canvas：
   - 每个参考文字节点旁放 3-5 张最有信息量的本地图；
   - 其余图只留在文件夹，不把 Canvas 塞成垃圾堆。
   - 原参考文字节点和“吸收/禁止”不得删除。
9. 生成：
   - `01_REFERENCE/localization_report.md`
   - `01_REFERENCE/local_manifest.json`
   - 报告每组：成功下载数 / blocked数 / 缺失维度 / 建议补图。
10. **完成后停止。不要进入 R4，不要调用生图。**

## 原稿处理
将 `02_USER_ORIGINAL` 三张图固定在 Canvas 中央的“用户原稿”区，不做风格修正：
- 大叔：重点观察瘦长人体、单侧巨臂、暗红/淡青结构。
- 黎黎：重点观察红发、夸张脸、巨大尾部/机械身体的动作关系。
- 奇美拉：重点观察巨大翼臂、胸腔、后肢、尾部和现有冷灰/紫色分区。

## 验收
R3 合格必须同时满足：
- 10/10参考组都有本地文件夹；
- 至少8/10组有可用本地图；
- 所有本地图可追溯来源；
- Canvas 的每组只放3-5张关键图；
- 没有跑任何生成图；
- `localization_report.md` 能明确指出缺哪类参考。

## 交付提示
R3完成后下一阶段是 **R4 Codex消化报告**，不是立即生成。
