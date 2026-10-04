---
任务编号: FZM-1-2-H3
优先级: 5
当前阶段: 预览审核
尝试次数: 0
画面状态: 已确认
当前画面: ""
预览状态: 待审核
预览版文件: 方/07_素材图/预览占位/1-2_preview_placeholder.mp4
高清状态: 未生成
高清版文件: ""
锁卡: false
执行器: h3cloud
模型: MiniMax H3
工作流: FL2VA
随机种子: ""
采样步数: 8
视频时长: ""
画面描述词: 方/02_描述词/第一幕/卡1-2_母亲意象_画面描述词.md
时间分镜: 方/02_描述词/第一幕/卡1-2_母亲意象_分镜动作时间.md
---

# 卡1-2｜乡野母亲

## 当前阶段：预览审核

### ⏱ 当前时间分镜描述词
[[方/02_描述词/第一幕/卡1-2_母亲意象_分镜动作时间.md|打开时间分镜描述词]]

### 🎞 当前预览视频
![[方/07_素材图/预览占位/1-2_preview_placeholder.mp4]]

## 动画生产流程

```meta-bind-button
label: ✏️ 修改时间分镜
actions:
  - type: updateMetadata
    bindTarget: '["当前阶段"]'
    evaluate: false
    value: 时间分镜确认
```

```meta-bind-button
label: 🔄 1
actions:
  - type: updateMetadata
    bindTarget: '["预览状态"]'
    evaluate: false
    value: 1
  - type: updateMetadata
    bindTarget: '["当前阶段"]'
    evaluate: false
    value: 2
```

```meta-bind-button
label: ⭐ 生成高清
actions:
  - type: updateMetadata
    bindTarget: '["高清状态"]'
    evaluate: false
    value: 排队中
  - type: updateMetadata
    bindTarget: '["当前阶段"]'
    evaluate: false
    value: 高清生成
```

> 本页按钮只修改中文属性，暂不连接 watcher、H3 或远程服务。


