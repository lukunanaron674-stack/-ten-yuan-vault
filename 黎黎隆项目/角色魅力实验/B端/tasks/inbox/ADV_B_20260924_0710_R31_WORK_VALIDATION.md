# ADV_B_20260924_0710_R31｜WORK_VALIDATION

## 当前事实状态

- B端只完成文本交接；图片未由本轮绑定，H3未运行，音轨未生成。
- Picture 1：`ADV-001 / FE5A039B15C5C5B5EA4D721B5C37AB26.jpeg`，`github_image_upload=false`，`pending_image_validation`。
- Picture 2：`SCENE-05`，`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-05_机械空港_单色.png`，blob `eb34acce753735d96565bc0108d502dfdc775088`。
- B端没有视觉确认 SCENE-05 确实存在“受限通道/门周期”；两段均为 `needs_environment_inference=true`。

## Picture 映射

- Picture 1 只负责唯一 ADV-001 的身份、比例、服装剪影和装备空间关系。多视图不得生成多人。
- Picture 2 只负责 SCENE-05 的场景身份、真实既有元素、空间连续性和单色色卡逻辑，不固定景别，也不授权新增门、控制台或反打空间。

## Work 必检

- [ ] 定位 ADV-001 真实 JPEG，核对字节哈希、尺寸、版本和身份。
- [ ] 确认只有一个宽厚成年冒险者；完整背包、卷包、披风、背带、灯具、手套和靴子均保持。
- [ ] 实际查看 Picture 2，确认受限通道和可见闭合/开启周期确实由原图支持。
- [ ] 若门体或运动通道不存在，标记验证失败并停止执行；不得让 H3 凭描述生成。
- [ ] 若横移空间不成立，只改为固定机位，不改变故事事件。
- [ ] A 段确认单人单实例后，从真实输出选定一个尾帧。
- [ ] B 段两抽使用同一个 A 尾帧、同一 prompt 与同一其他参数。
- [ ] 检查 final prompt 与所有 LoadImage 节点均属于 R31，无旧角色、旧场景、旧母版词。
- [ ] A/B 各 run_A/run_B，共4次；每次记录独立真实 task_id。
- [ ] seed 只有接口真实暴露整数时填写，否则保持 null。
- [ ] H3 不支持音轨时，音频字段仅作后期清单，不得标记已有音轨。

当前判定：`pending_image_validation / pending_environment_geometry_validation / text_ready`。禁止预填 passed、rendered、done、seed 或 task_id。
