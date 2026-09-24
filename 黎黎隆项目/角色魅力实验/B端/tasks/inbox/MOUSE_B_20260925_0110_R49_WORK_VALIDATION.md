# MOUSE_B_20260925_0110_R49｜WORK VALIDATION

## 输入闸门

1. Picture 1回填实际path、SHA-256、width、height，并判定same-character与H3四宫格true/false。
2. Picture 2绑定SCENE-02 blob `249b3a0f00aa894772d1049e800f4813723184df` 对应素材，回填path、SHA-256、尺寸。
3. 实图确认可见水面、岸线、原路线与横向半步空间；不得从文字制造桥、码头、建筑、岩石或生物。
4. 任一闸门失败即STOP，不自动换图。

## 执行与画幅

- 只执行单一prompt的run_A/run_B，共2次。
- 相同角色图、场景图、prompt、workflow与参数；仅真实seed可不同。
- 输出11秒、16:9横屏，width必须大于height。
- 固定机位、固定景别、固定光线；禁止跟拍、后拉与转场。
- 回填workflow、真实fps分数、总帧、实际时长、seed、task/output ID。

## 节点验证

每节点回传pre/onset/peak/post。重点密集检查：

- 水面扰动是否只有一次且不变成实体；
- 耳朵先于半步动作；
- 半步只有一次；
- 扰动消失后是否存在可再次确认的时间机会；
- 她是否明确不回头、不靠近、不第二次确认；
- 结尾步速是否恢复至开场节奏。

证据不足标`NEEDS_TEMPORAL_REVIEW`，不把“没采到”写成主动截止。

## 音频与盲审

若H3无音轨，标`POST_PRODUCTION_REQUIRED`。盲审只问初看、转折动作、结尾印象和替代解释，不透露目标感受或十元。当前planned 2、actual 0。