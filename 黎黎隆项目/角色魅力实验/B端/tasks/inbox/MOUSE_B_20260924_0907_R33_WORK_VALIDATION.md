# MOUSE_B_20260924_0907_R33｜WORK_VALIDATION

## 当前事实状态

- B端只完成文本交接；图片未由本轮绑定，H3未运行，音轨未生成。
- Picture 1 候选：`030F6E3B89E0998CBF695064BC27C2A8.jpeg`、`MOUSE-EAR-MUTANT-001_H3半身动态四宫格_v2.0.png`；两者均 `github_image_upload=false`、`pending_image_validation`。
- Picture 2：`SCENE-02`，`黎黎隆项目/04_场景/五色视觉系统/R1_场景配色/assets/R1-02_森林湖泊_双色主导.png`，blob `249b3a0f00aa894772d1049e800f4813723184df`。
- B端没有视觉确认一个固定9:16中远景能同时容纳角色路线、脚部、水面和倒影；两段均为 `needs_environment_inference=true`。

## Picture 映射

- Picture 1 只负责唯一 MOUSE-EAR-MUTANT-001 的身份、比例、服装、鼠耳结构、斜挎带和侧包。四宫格是同一身份的动作视图，不得生成四个人。
- Picture 2 只负责 SCENE-02 的场景身份、真实元素、空间连续性及暖天空/冷湖面的色卡逻辑，不授权新增岸边物件。
- 水中倒影不是第二输入或第二角色，只能是 Picture 1 唯一角色在 Picture 2 水面的光学结果。

## 本轮单变量检查

- R32 的人物、场景、动作顺序、时长、声音触发点与反射规则保持。
- 唯一实验变量：R32 的可选推镜/横移和A/B景别变化，改为跨两段固定同轴中远景。
- Work 不得通过临时加运镜来“修好”R33；固定同框不成立时应标记失败。

## Work 必检

- [ ] 定位两张真实角色图片，核对字节哈希、尺寸、版本和身份。
- [ ] 选择一个合格 Picture 1 输入；确认只有一个小体型白发鼠耳异变少女。
- [ ] 实际查看 Picture 2，确认固定机位下的湖岸、水面及人物—倒影关系可成立。
- [ ] 确认倒影始终依赖实体角色和水面，不能独立行动或读成第二人物。
- [ ] 若固定同框不成立，标记验证失败并停止执行；不得改变镜头变量或新增物件。
- [ ] A 段从真实输出选定一个尾帧；B 两抽使用同一个尾帧。
- [ ] 检查 final prompt 与所有 LoadImage 节点均属于 R33，无旧角色、旧场景或旧母版词。
- [ ] A/B 各 run_A/run_B，共4次；每次记录独立真实 task_id。
- [ ] seed 只有接口真实暴露整数时填写，否则保持 null。
- [ ] H3 不支持音轨时，音频字段仅作后期清单，不得标记已有音轨。

当前判定：`pending_image_validation / pending_fixed_frame_reflection_validation / text_ready`。禁止预填 passed、rendered、done、seed 或 task_id。
