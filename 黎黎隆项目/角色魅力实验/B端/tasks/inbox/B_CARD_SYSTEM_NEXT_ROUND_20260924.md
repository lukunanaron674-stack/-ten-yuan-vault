---
task_id: B_CARD_SYSTEM_NEXT_ROUND_20260924
title: CH-ZX-001 执行版切换
created_date: 2026-09-24
activated_date: 2026-09-25
status: active
requested_by: user
scope: 从下一张新卡开始；旧轮次不追溯重写
---

# CH-ZX-001 执行版

## 已执行决策

- 新卡：`CH-ZX-001`
- 角色：黎黎隆
- `ten_yuan_focus: ZX`
- `mode: single_ten_yuan`
- 状态：`active / registered / ready_for_B1`
- 时长：10–11 秒
- 最终成片：16:9 横屏
- 角色参考图：允许 9:16
- 每条描述词：`run_A / run_B`
- 音频字段：`audio_design`
- B1 / B2 / B3 / 4090 / B4 共用同一 `card_id`
- 不强加第二十元
- 不强制生克补作为主轴

## 旧轮次政策

R35、R37、R45、R47、R48、R49、R50 等旧轮次保留，不改名、不回填、不按新规则重写。旧轮次的 `card_id: null` 只表示历史登记状态；新卡禁止使用 null。

## 新卡任务结构

```yaml
card_id: CH-ZX-001
character: 黎黎隆
ten_yuan_focus: ZX
mode: single_ten_yuan
duration: 10-11s
output_aspect_ratio: 16:9
reference_aspect_ratio: 9:16_allowed

audio_design:
  ambient_soundscape: 轻微环境声、风声、脚步、衣料摩擦、远处空间回响
  emotional_sound_cue: 克制的悬疑/机灵感提示音，轻量
  audio_role: support action and emotion only, not music-video editing

runs:
  - run_A
  - run_B
```

## 运行一致性

run_A 与 run_B 必须使用：

- 同一张卡
- 同一组角色/场景素材
- 同一描述词
- 同一 workflow 和参数
- 只允许随机 seed 不同

## 每轮交付

1. 卡片登记
2. 描述词文件
3. run_A / run_B 结果
4. 每次运行的首帧 / 中帧 / 尾帧
5. 简短审查结论

## 验收闸门

出现 `card_id: null`、第二十元、强制生克补、缺少双跑、缺少音频、10–11 秒以外时长、竖屏最终输出，直接 FAIL。9:16 角色参考图本身不构成成片画幅失败。

权威索引：`card_review/CARD_INDEX.json`
首卡登记：`card_review/cards/CH-ZX-001.json`
执行规则：`rules/B端H3执行规则_CH-ZX-001_v1.0.md`
任务模板：`rules/B端H3任务模板_CH-ZX-001_v1.0.json`
