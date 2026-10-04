---
task_id: FZM-1-1-H3
status: draft
priority: 5
source_card:
visual_prompt: 02_描述词/第一幕/卡1-1_山河铺陈_画面描述词.md
motion_prompt: 02_描述词/第一幕/卡1-1_山河铺陈_分镜动作时间.md
executor: h3cloud
engine: minimax-h3
workflow: FL2VA
profile: direct_low_frame_8
seed:
steps: 8
duration:
start_image:
end_image:
output:
  attempt: 0
  path:
attempt: 0
cancel_requested: false
source_output:
parent_attempt:
image_status: draft
current_image: 方/07_素材图/第一幕/山河_峨眉云海.png
preview_status: none
preview_output:
hd_status: none
hd_output:
locked: false
cssclasses: fzm-execution-card
---
# 卡1-1｜山河铺陈

> 中文控制面板｜按钮只修改本卡属性，不自动启动任务。

## 当前：① 分镜画面

🖼 **当前画面**

![[方/07_素材图/第一幕/山河_峨眉云海.png]]

🎬 [[方/02_描述词/第一幕/卡1-1_山河铺陈_画面描述词.md|打开画面描述词]]

## 操作

```meta-bind-button
label: ✅ 画面确认
actions:
  - type: updateMetadata
    bindTarget: image_status
    evaluate: false
    value: accepted
```

```meta-bind-button
label: 🔄 重做画面
actions:
  - type: updateMetadata
    bindTarget: image_status
    evaluate: false
    value: draft
  - type: updateMetadata
    bindTarget: current_image
    evaluate: false
    value: ""
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: draft
```

```meta-bind-button
label: ▶ 跑预览
actions:
  - type: updateMetadata
    bindTarget: preview_status
    evaluate: false
    value: queued
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: 🔄 重跑预览
actions:
  - type: updateMetadata
    bindTarget: preview_status
    evaluate: false
    value: queued
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: ⭐ 生成高清版
actions:
  - type: updateMetadata
    bindTarget: workflow
    evaluate: false
    value: H3_LATENT_UPSCALE
  - type: updateMetadata
    bindTarget: hd_status
    evaluate: false
    value: queued
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: ✅ 视频确认
actions:
  - type: updateMetadata
    bindTarget: hd_status
    evaluate: false
    value: accepted
```

```meta-bind-button
label: 🔒 锁卡
actions:
  - type: updateMetadata
    bindTarget: locked
    evaluate: false
    value: true
```

```meta-bind-button
label: ▶ 开始
actions:
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: ■ 停止
actions:
  - type: updateMetadata
    bindTarget: cancel_requested
    evaluate: false
    value: true
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: cancelled
```

```meta-bind-button
label: ✅ 采用
actions:
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: accepted
```

```meta-bind-button
label: ❌ 废弃
actions:
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: rejected
```

---
_操作后由本地 watcher 自动刷新执行中枢。_
