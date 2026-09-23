# LLL_B_20260924_0506_R29｜WORK VALIDATION

## 本轮交付范围

本轮一条任务内同时包含A、B两段，各15秒。A段同prompt执行run_A/run_B；选出一个真实A尾帧后，B段用同一尾帧和同prompt执行run_A/run_B，共计划4次。当前未渲染。

## Picture 1：唯一角色

- ID：`LLL-MAIN-001`
- 路径：`黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg`
- SHA-256：`5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143`
- 视图：`both`
- 当前状态：仓库可读，但B1最新审计仍要求按“角色尚未完成”处理，状态保持`pending_image_validation`。
- 所有视图只能映射为同一个黎黎隆：红发、既有脸型与好胜表情、红白黑装甲、青蓝功能信号、两只机械龙爪脚、一条长机械龙尾。
- Work必须确认当前卡是否获准用于实际渲染；未获准时只保留文本任务。

## Picture 2：唯一场景

- ID：`SCENE-07`
- 路径：`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-08_机械空港_五色组合.png`
- blob：`c1a345f6f9d85dc7f6ea3e18bb77767ad44a11f4`
- Picture 2只锁机械空港身份、既有元素、空间连续性与五色色卡逻辑，不锁死景别与机位。
- 本轮未视觉确认“既有彩色照明区域”和可用侧向空间，两段均为`needs_environment_inference=true`。不支持时改为整体光强轻变并固定机位，不新增任何物件或反向空间。

## 执行前检查

- [ ] 最终workflow prompt属于R29，不残留澈或旧任务。
- [ ] 全部LoadImage只绑定本轮黎黎隆与SCENE-07。
- [ ] 多视图只生成一个物理角色实例。
- [ ] 只有两只爪足和一条长尾，无复制、倒影替身、分屏或四宫格输出。
- [ ] A段两次使用完全相同prompt及其他参数。
- [ ] 从A段两次结果中选择一个真实尾帧后，B段两次绑定同一尾帧。
- [ ] B段两次使用完全相同prompt及其他参数。
- [ ] 真实运行后分别记录四个task_id；未运行保持null。
- [ ] seed仅在实际接口支持并返回时记录整数，否则保持null。
- [ ] 音轨能力未验证；不支持时按后期音效清单处理。

| segment | run | seed | work_task_id | status |
|---|---|---:|---|---|
| A | run_A | null | null | planned |
| A | run_B | null | null | planned |
| B | run_A | null | null | planned |
| B | run_B | null | null | planned |

验证失败或图片未获准时，Work自行决定不渲染；不得把待验证写成passed。
