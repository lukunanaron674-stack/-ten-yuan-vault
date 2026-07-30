---
type: visual-index
status: historical-visual-snapshot
updated: 2026-07-30
scope: ten-yuan-vault
priority: legacy-low
superseded_by: 00-中枢索引/AI文件权力与任务总览.canvas
---

# Vault 可视化总览

> **历史快照（L6）**：本页保留 2026-05 的旧目录视图，不再是当前 AI 启动地图。当前权力等级与每小时任务只看 [[00-中枢索引/AI文件权力与任务总览|AI 文件权力与每小时任务总览]] 和 [[AI文件权力与任务总览.canvas]]。

> 文件强弱约束、关键正本和每小时任务的真实读写流，统一查看 [[00-中枢索引/AI文件权力与任务总览|AI 文件权力与每小时任务总览]] 与 [[AI文件权力与任务总览.canvas]]。本页保留全库高层视图，不负责裁决理论正本。

## 一眼看懂

```mermaid
flowchart TD
  Center["00 中枢索引<br/>入口 / 看板 / 路线"]:::center
  Theory["01 十元系统<br/>语义 / 生补克 / 规则"]:::core
  Theme["02 五大主题<br/>时间 / 本体 / 空间 / 因果 / 命运"]:::core
  Mine["05 银矿库<br/>案例 / 角色 / 骨型 / 二审"]:::work
  Brain["07 Codex大脑库<br/>压缩 / 吸收 / 降权 / 任务"]:::brain
  F12["04 F12总控载体<br/>多框采矿 / 回流 / 自动化"]:::work
  Anime["08 动画方向<br/>分镜 / 关键帧 / 视觉生产"]:::work
  Archive["06旧库迁入 + 12归档包<br/>只读来源 / 历史证据"]:::archive
  Project["03 雾中渡口<br/>项目蓝图"]:::project

  Center --> Theory
  Center --> Theme
  Center --> Mine
  Center --> Brain
  Theory --> Mine
  Theme --> Mine
  Mine --> Brain
  Brain --> F12
  F12 --> Brain
  Brain --> Anime
  Project --> Anime
  Archive -.只读来源.-> Center
  Archive -.证据.-> Mine

  classDef center fill:#eef2ff,stroke:#4f46e5,color:#111827
  classDef core fill:#ecfdf5,stroke:#059669,color:#111827
  classDef work fill:#fff7ed,stroke:#ea580c,color:#111827
  classDef brain fill:#fdf2f8,stroke:#db2777,color:#111827
  classDef archive fill:#f3f4f6,stroke:#6b7280,color:#111827
  classDef project fill:#eff6ff,stroke:#2563eb,color:#111827
```

## 主入口

- [[00-中枢索引/AI文件权力与任务总览|AI 文件权力与每小时任务总览]]

- [[00-中枢索引/总入口|总入口]]
- [[07-Codex大脑库/Codex大脑总入口|Codex 大脑总入口]]
- [[07-Codex大脑库/AI可读压缩版_总览|AI 可读压缩版]]
- [[07-Codex大脑库/Vault健康检查报告_2026-05-23|Vault 健康检查报告]]

## 人类使用路线

```mermaid
flowchart LR
  A["想到一个材料"] --> B{"是什么？"}
  B -->|"理论/判断"| C["01 十元系统"]
  B -->|"作品/角色"| D["05 银矿库"]
  B -->|"动画/视觉"| E["08 动画方向"]
  B -->|"自动化/F12"| F["04 F12总控载体"]
  D --> G{"确定吗？"}
  G -->|"确定"| H["正式索引"]
  G -->|"不确定"| I["待二审队列"]
  I --> J["Codex 压缩 / F12 补采"]
```

## AI 使用路线

```mermaid
flowchart LR
  A["AI 进入 vault"] --> B["读 AI可读压缩版"]
  B --> C["读总入口"]
  C --> D{"任务类型"}
  D -->|"理论判断"| E["读十元系统"]
  D -->|"案例整理"| F["读银矿索引和二审"]
  D -->|"自动化"| G["读 F12 总控"]
  D -->|"视觉动画"| H["读动画方向"]
  E --> I["输出规则/反例/任务"]
  F --> I
  G --> I
  H --> I
```

## 分层原则

| 层 | 目录 | 看法 |
|---|---|---|
| 入口层 | `00-中枢索引` | 只指路，不堆材料 |
| 理论层 | `01-十元系统`、`02-五大主题` | 负责判断，不存大量散点 |
| 案例层 | `05-银矿库` | 存角色、作品、骨型、二审 |
| 工作流层 | `04-F12总控载体` | 存自动化与任务流程 |
| AI 脑层 | `07-Codex大脑库` | 存压缩结论、规则、任务、报告 |
| 项目层 | `03-雾中渡口`、`08-动画方向` | 存具体创作生产 |
| 归档层 | `06-旧库迁入`、`12_归档包` | 只读来源 |

## Canvas 版本

同目录有一张 Obsidian Canvas：

- [[Vault可视化总览.canvas]]

如果想拖拽、缩放、改布局，打开 Canvas；如果想让 AI 读结构，打开本页和 [[07-Codex大脑库/AI可读压缩版_总览]]。
