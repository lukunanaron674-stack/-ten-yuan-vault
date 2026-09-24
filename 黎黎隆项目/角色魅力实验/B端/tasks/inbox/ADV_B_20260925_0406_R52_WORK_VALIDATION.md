# ADV_B_20260925_0406_R52｜WORK VALIDATION

## Relay预检

- 消费 `ADV_B_20260925_0406_R52__v10_RELAY.json`，确认schema、cast、source_assets、render_spec、audio_design与clips[A]可解析。
- 核对relay中的完整H3 prompt与R51逐字一致。
- 回写relay accepted true/false及原因；结构可读不等于图片验证通过。

## 图片闸门

- Picture 1：真实路径、SHA-256、尺寸、同一角色、H3四宫格。
- Picture 2：真实路径、SHA-256、尺寸、SCENE-03几何、既有植被或水面。
- 确认胸前确有可读既有背带；否则停止，不新增背带。

## 双抽

使用完全相同的prompt和输入执行run_A/run_B。本轮seed、task_id和输出只写R52字段，禁止挪用R37/R38历史记录。

## 画面验收

固定16:9全身中远景；六段时间轴；眼先于头；仅一次既有背带轻按；10–11秒停止。无第二人物、分身、额外肢体、运镜、切镜、天气或颜色突变。
