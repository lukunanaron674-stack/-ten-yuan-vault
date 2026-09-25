# B端 H3 执行规则：CH-ZX-001 v1.0

status: active
card_id: CH-ZX-001
character: 黎黎隆
ten_yuan_focus: ZX
mode: single_ten_yuan
duration_target: 10-11s
output_aspect_ratio: 16:9 landscape
reference_aspect_ratio: 9:16 allowed
runs_per_prompt: 2

## 研究边界

本卡只研究黎黎隆的 ZX 单一十元：行动力、机灵、好胜、出其不意、灵活变通，以及“太想赢使局面变复杂”的角色魅力。

不强加第二十元，不强制生克补，不把世界观设定展示、复杂关系或旧动态链作为本卡主轴。旧轮次保留，不追溯重写。

## B1–B5 联动

B1、B2、B3、4090、B4、B5 的所有新文件必须携带：

- `card_id: CH-ZX-001`
- `card_version: v1.0`
- `rule_version: CH-ZX-EXEC-v1.0`
- 本轮独立 `round_id`
- 同一组输入素材引用
- 同一 `round_id` 与统一验收口径

B5 沿用本卡，不新建卡、不改变 ZX 单一十元边界；旧轮次不追溯重写。

## 画幅与时长

最终成片固定 16:9 横屏。角色参考图可为 9:16，不能据此误判最终输出。每条 10–11 秒。

## 双跑

run_A 与 run_B 使用同一张卡、同一素材、同一描述词、同一 workflow 和参数；只允许随机 seed 不同。必须回传两次结果以及每次的首帧、中帧、尾帧。

## 音频

每条描述词必须有 `audio_design`：

- `ambient_soundscape`
- `emotional_sound_cue`
- `audio_role`

音频只辅助动作与情绪，不做 MV 卡点，不使用强节拍或歌词驱动剪辑。

## 描述词模板核心

```yaml
card_id: CH-ZX-001
character: 黎黎隆
ten_yuan_focus: ZX
mode: single_ten_yuan
duration: 10-11s
output_aspect_ratio: 16:9

visual_goal:
  only_show_zx_character_appeal: true
  text: 行动力、机灵、好胜、出其不意、灵活变通；不要引入第二十元主导

audio_design:
  ambient_soundscape: 轻微环境声、风声、脚步、衣料摩擦、远处空间回响
  emotional_sound_cue: 克制的悬疑/机灵感提示音，轻量
  audio_role: support action and emotion only, not music-video editing

runs:
  - run_A
  - run_B
```

## FAIL 条件

- card_id 为 null
- 非 CH 系列卡号
- 混入第二十元
- 强制生克补作为主轴
- 缺少 run_A/run_B
- 缺少 audio_design
- 时长不是 10–11 秒
- 最终输出不是 16:9
- 把 9:16 角色参考图误判成最终输出错误
- 使用旧动态链标准压制本卡单一 ZX 实验
