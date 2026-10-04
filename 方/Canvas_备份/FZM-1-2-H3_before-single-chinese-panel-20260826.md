---
task_id: FZM-1-2-H3
status: cancel_requested
priority: 5
source_card:
visual_prompt: 02_描述词/第一幕/卡1-2_母亲意象_画面描述词.md
motion_prompt: 02_描述词/第一幕/卡1-2_母亲意象_分镜动作时间.md
executor: h3cloud
engine: minimax-h3
workflow: H3_LATENT_UPSCALE
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
cancel_requested: true
source_output:
parent_attempt:
image_status: accepted
current_image:
preview_status: queued
preview_output: 方/07_素材图/预览占位/1-2_preview_placeholder.mp4
hd_status: accepted
hd_output:
locked: false
---

## 执行记录
- 开始：
- 完成：
- GPU/工作流：
- 输出：
- 错误：

## 审稿
- 人物一致性：
- 动作：
- 构图：
- 衔接：
- 是否采用：

## 原始内容链接
- [[02_描述词/第一幕/卡1-2_母亲意象_画面描述词]]
- [[02_描述词/第一幕/卡1-2_母亲意象_分镜动作时间]]


---
## 🎛 执行控制面板

当前状态：`VIEW[{status}]`　尝试次数：`VIEW[{attempt}]`

```meta-bind-button
label: ▶ 开始
style: primary
actions:
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: ■ 停止
style: destructive
actions:
  - type: updateMetadata
    bindTarget: cancel_requested 
    evaluate: false
    value: true
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: cancel_requested
```

```meta-bind-button
label: ↻ 重跑
actions:
  - type: updateMetadata
    bindTarget: attempt
    evaluate: true
    value: '`attempt` + 1'
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button

```meta-bind-button
label: ↻ 重跑预览
actions:
  - type: updateMetadata
    bindTarget: preview_status
    evaluate: false
    value: queued
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
  - type: updateMetadata
    bindTarget: attempt
    evaluate: true
    value: x + 1
```

```meta-bind-button
label: ★ 高清二跑
actions:
  - type: updateMetadata
    bindTarget: workflow
    evaluate: false
    value: H3_LATENT_UPSCALE
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: ☁ 发往 h3cloud 5090
actions:
  - type: updateMetadata
    bindTarget: executor
    evaluate: false
    value: h3cloud
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: queued
```

```meta-bind-button
label: ✅ 采用
style: primary
actions:
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: accepted
```

```meta-bind-button
label: ❌ 废弃
style: destructive
actions:
  - type: updateMetadata
    bindTarget: status
    evaluate: false
    value: rejected
```

> 注意：按钮现在会真实修改本卡 frontmatter；watcher 接通前不会自动启动云端生成。


## 🧭 阶段操作

```meta-bind-button
label: ↻ 重做画面
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
label: ✓ 画面确认
style: primary
actions:
  - type: updateMetadata
    bindTarget: image_status
    evaluate: false
    value: accepted
```

```meta-bind-button
label: ▶ 跑预览
style: primary
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
label: ★ 高清二跑
style: primary
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
label: ✓ 视频确认
style: primary
actions:
  - type: updateMetadata
    bindTarget: hd_status
    evaluate: false
    value: accepted
```

```meta-bind-button
label: 🔒 锁卡
style: destructive
actions:
  - type: updateMetadata
    bindTarget: locked
    evaluate: false
    value: true
```
