# MOUSE_B_20260924_0806_R32｜WORK_VALIDATION

## 当前事实状态

- B端只完成文本交接；图片未由本轮绑定，H3未运行，音轨未生成。
- Picture 1 候选：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`、`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`；两者均 `github_image_upload=false`、`pending_image_validation`。
- Picture 2：`SCENE-02`，`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-02_森林湖泊_双色主导.png`，blob `249b3a0f00aa894772d1049e800f4813723184df`。
- B端没有视觉确认 SCENE-02 的湖岸构图足以同时呈现唯一角色与受约束倒影；两段均为 `needs_environment_inference=true`。

## Picture 映射

- Picture 1 只负责唯一 MOUSE-EAR-MUTANT-001 的身份、比例、服装、鼠耳异变结构、斜挎带和侧包。四宫格是同一身份的动作视图，不得生成四个人。
- Picture 2 只负责 SCENE-02 的场景身份、真实既有元素、空间连续性及暖天空/冷湖面的色卡逻辑，不固定景别，也不授权新增桥、码头、石头、树根或建筑。
- 水中倒影不是 Picture 3，也不是第二角色；它只能是 Picture 1 唯一角色在 Picture 2 水面的光学结果。

## Work 必检

- [ ] 定位两张鼠耳异变少女真实图片，核对字节哈希、尺寸、版本和身份。
- [ ] 选择并绑定一个合格 Picture 1 身份输入；确认只有一个小体型白发鼠耳异变少女。
- [ ] 核对半透明浅紫鼠耳结构、宽大浅色袍、深色边块、斜挎带和侧包。
- [ ] 实际查看 Picture 2，确认湖岸、水面及人物—倒影同框关系由原图支持。
- [ ] 确认倒影始终依赖实体角色和水面，只能短暂受涟漪变形，不能独立行动或读成第二人物。
- [ ] 若同框因果关系不成立，标记验证失败并停止执行；不得让 H3 自行生成第二水中人物。
- [ ] 若横移空间不足，仅改为固定机位并缩小侧步，不新增场景物件。
- [ ] A 段确认单人单实例后，从真实输出选定一个尾帧。
- [ ] B 段两抽使用同一个 A 尾帧、同一 prompt 与同一其他参数。
- [ ] 检查 final prompt 与所有 LoadImage 节点均属于 R32，无旧角色、旧场景、旧母版词。
- [ ] A/B 各 run_A/run_B，共4次；每次记录独立真实 task_id。
- [ ] seed 只有接口真实暴露整数时填写，否则保持 null。
- [ ] H3 不支持音轨时，音频字段仅作后期清单，不得标记已有音轨。

当前判定：`pending_image_validation / pending_environment_reflection_validation / text_ready`。禁止预填 passed、rendered、done、seed 或 task_id。
