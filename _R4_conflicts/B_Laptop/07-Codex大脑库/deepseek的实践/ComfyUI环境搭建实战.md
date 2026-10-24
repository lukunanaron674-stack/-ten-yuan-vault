---
type: 实践经验
domain: AI动画
date: 2026-05-22
status: 进行中
---

# ComfyUI + LTX-Video 环境搭建实战

## 环境

- GPU: RTX 3070 Laptop 8GB
- Python: 3.11.9 (E:\Python311)
- ComfyUI: E:\AI-Tools\ComfyUI
- 模型盘: E 盘 1.7TB 空闲

## 已安装

- ComfyUI (727 nodes loaded)
- ComfyUI-Manager
- ComfyUI-LTXVideo custom nodes
- LTX-Video 2B v0.9.1 (5.32GB, diffusers格式)
- LTX-Video 13B distilled LoRA (1.23GB)
- diffusers 0.38.0, transformers 5.9.0, accelerate 1.13.0

## 踩坑记录

### 坑1: LTX-Video 0.9.1 vs LTX-2 不兼容
ComfyUI-LTXVideo 的 nodes 是为 LTX-2 设计的（要求32GB+ VRAM），但下载的模型是旧版 LTX-Video 0.9.1。两者不兼容。
**解决**: 用 diffusers 原生 LTXPipeline 直接加载模型，绕过 ComfyUI 节点。

### 坑2: T5 文本编码器缺失
LTX-Video 需要 google/t5-v1_1-xxl（~11GB）作为文本编码器。模型下载时 text_encoder 只下了 1/4 shard。
**解决**: 用 snapshot_download + hf-mirror.com 镜像补全下载。

### 坑3: HuggingFace 直连慢
国内直连 HuggingFace 下载 11GB 模型极慢（15 分钟只下了 4GB）。
**解决**: 设 HF_ENDPOINT=https://hf-mirror.com，30 秒下 9GB。

### 坑4: 8GB 显存不够直接跑
T5-XXL(11GB) + LTX-Video(5GB) + VAE > 8GB。
**解决**: 用 enable_model_cpu_offload() 做 CPU offloading，牺牲速度换显存。

## F12 集成

- F12 灰塔关键帧任务已推送至 tab 819244957
- 任务格式: 4 个 TASK，每镜含完整 prompt + negative prompt
- 任务文件: graytower-keyframes.txt

## 下一步

- [ ] T5 下载完成后测试 LTXPipeline 生成
- [ ] F12 恢复连接后继续关键帧描述
- [ ] 测试 BLIP 图像识别
- [ ] HY-Motion-1.0 人体运动测试
