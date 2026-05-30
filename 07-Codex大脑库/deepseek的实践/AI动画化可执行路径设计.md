---
date: 2026-05-21
tags: [AI动画, 管线设计, 执行路径, deepseek, 十元系统]
status: 完成
parent: '[[deepseek的实践]]'
---

# AI 动画化可执行路径设计

## 目标
设计一条从 Obsidian 十元知识库到 HuggingFace 模型到动画成片的端到端管线。

## 五阶段管线
Phase 0 环境 → ComfyUI + Wan2.2 + LTX-Video
Phase 1 创意 → 银矿案例 → 动态链 → 十元视觉映射 → 分镜
Phase 2 生成 → Wan2.2 T2V → HunyuanVideo I2V → AnimateDiff
Phase 3 后期 → 剪映 + 声音 + 调色
Phase 4 回流 → F12 归档 → Codex 吸收 → 银矿更新

## 核心创新：十元 → 视觉映射表
把 xz/nz/zx 等十元符号直接翻译成镜头运动、色调、光源、构图参数。

## HuggingFace 模型选型
- Wan2.2 Repackaged: 579 万下载 | 主力 T2V/I2V
- HunyuanVideo 1.5: 52 万下载 | 中文优化
- LTX-Video: 39 万下载 | 快速预览 8GB
- Wan2.2 Distill LoRA: 109 万下载 | 加速推理

## 硬件妥协
RTX 3070 Laptop 8GB → 砍掉 Wan2.2/HunyuanVideo 本地，改用 LTX-Video + F12 云端出图。

## 源文件
[[AI动画化可执行路径]]
