# MOUSE_B_20260925_0008_R48｜WORK VALIDATION

## 输入闸门（任一失败即停止，不自动换图）

- Picture 1：回填实际绑定路径、SHA-256、宽高。
- 明确 `same_character_visual_verified=true/false`。
- 明确 `h3_four_grid_layout_verified=true/false`；941×1672只证明候选画幅，不证明四宫格。
- Picture 2：绑定SCENE-08并回填路径、SHA-256、宽高；看图确认场景身份、双色逻辑、负空间和可站位几何。
- 禁止从prompt推导门、桥、摊位、生物或其他未核实物件。

## 执行

- 同一完整prompt与输入执行run_A、run_B两次。
- 回填workflow_id、真实fps分数、总帧、实际时长、seed或first/second execution、task/output ID。
- 输出必须16:9横屏且width > height。
- 若H3不输出音频，标记`POST_PRODUCTION_REQUIRED`；不得把音频设计冒充音轨。

## 节点证据

每个节点回传pre/onset/peak/post的实际帧号、时间戳、路径、SHA-256、宽高和原始观察。n4→n5需加密抽帧，验证：

1. 手部起动前存在短而可读的停顿；
2. 停顿不是重复帧、掉帧或生成卡顿；
3. 停顿中脚、躯干与镜头不漂移；
4. 若无法判断，标`NEEDS_TEMPORAL_REVIEW`，不宣称假设成立。

## 盲审

只展示真实输出，不透露目标感受与十元标签。记录初看、转折动作、结尾印象和替代解释。真实反馈前保持pending。

## 当前状态

planned 2，actual 0。seed、任务ID、输出、首帧、节点帧、音轨与卡号均不得预填。