---
type: h3-agent-plan-packet
source: "Linear 674-313"
linear_card: "B1-EP1-02-2"
duration_seconds: 13
status: "SUCCESS_LOCAL_TEST_CANDIDATE"
render_enabled: true
formal_pass: false
date: 2026-10-29
---

# H3 输入包｜B1-EP1-02-2｜二手书店音乐信封惊扰Marcel

## 来源与现行剧情

来源：Linear issue 674-313 当前执行摘要，卡2第二段（B1-EP1-02-2，13秒）。旧书/信封引出奇幻景象；Claire难以置信并惊叫；镜头转到正在安静看书的店主Marcel，他被惊扰后生气把Claire赶出店门。本镜不出现Lucas。

Linear：https://linear.app/674/issue/674-313/userncda-9c3二手书店的时间信封省赛片花与国赛三集

## 生成资产

- 无人场景九宫格：`场景候选/巴黎左岸二手书店_卡2-2_H3九宫格场景候选_20261029.png`
- Claire + Marcel 九格分镜：`场景候选/B1-EP1-02-2_Claire_Marcel_九宫格分镜候选_20261029.png`
- H3首帧：`场景候选/B1-EP1-02-2_H3首帧候选_20261029.png`
- H3视频：`B1-EP1-02-2_Marcel_H3_13s_candidate.mp4`
- 回执：`H3_运行回执.md`、`H3_运行回执.json`
- H3头/中/尾抽查帧：`H3_验收帧_头.png`、`H3_验收帧_中.png`、`H3_验收帧_尾.png`

## 13秒候选动作节拍

- 00:00–00:03｜中远景建立书店空间；Claire注意到中央旧书里的谱页，Marcel在右侧阅读区看书。
- 00:03–00:06｜硬切到手与谱页近景；Claire轻轻翻开，出现克制的暖光/音乐微光，不出现可读文字。
- 00:06–00:08｜硬切Claire反应；她惊讶后喊出一句英文。
- 00:08–00:10｜硬切Marcel；他被打断，放下书并显出不悦。
- 00:10–00:13｜回中远景；Marcel示意她离开，Claire匆忙出店，停在门口。

## 本次执行参数与结果

- ComfyUI Prompt ID：`1db22b19-f86c-401e-bd37-cf375a1752b8`
- 首帧SHA256：`C836CA7116388A2A9EA9E27BEB390D963FF4F01ED3CFEC78B1BC3A92DF4221BB`
- 输出SHA256：`4D9A950A1834CA7342F395B7DFD12C460826AE59D39B33D2492D9CF29517D56E`
- 输出媒体：H.264，1024×576，24fps，311帧，12.958秒；AAC 32kHz立体声
- 队列状态：ComfyUI history `execution_success`
- 范围：本地单次测试候选，不是正式生产PASS，不是USER_PASS

## 视觉与音频审核状态

头帧保留Claire查看谱页、Marcel在阅读区看书；中帧强调Claire惊讶反应；尾帧显示Marcel指向出口、Claire离店。空间与故事方向可辨认。H3在中段改用近景、结尾回到广角，符合分镜切换意图；尾帧Marcel较小，眼镜细节无法确认。音轨存在，但本轮未听审语音、音乐及音画同步。审核状态：`USER_REVIEW_PENDING`。

## 限制与禁项

书店仅此一处，角色脸型、发型、衣服固定；Marcel是书店老板，不是服装工作室的X老板。只做细微奇幻提示，不改写历史、不出现大范围特效；无Lucas、无地铁、无额外路人、无可读信件文字、无字幕、不追加对白。模型时长按帧块取整，成片可在剪辑中裁到13秒。
