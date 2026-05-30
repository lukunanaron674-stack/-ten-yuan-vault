---
date: 2026-05-21
tags: [ComfyUI, LTX-Video, AI动画, 环境搭建, deepseek, 8GB显存]
status: 完成
parent: "[[deepseek的实践]]"
---

# ComfyUI + LTX-Video 本地动画管线搭建

## 目标

在 RTX 3070 Laptop 8GB 上搭建 ComfyUI + LTX-Video，为灰塔短片提供本地 I2V 动画生成能力。配合 F12（ChatGPT DALL-E 出关键帧）形成完整管线。

## 环境

- GPU: NVIDIA RTX 3070 Laptop 8GB
- RAM: 32GB
- OS: Windows
- Python: 3.11.9（E盘安装）
- 安装路径: `E:\AI-Tools\ComfyUI\`

## 成功路径

### 1. Python 安装
- 下载 python-3.11.9-amd64.exe → `E:\Python311\`
- 全用户安装 + 加入 PATH
- 必须 3.11.x（3.12+ 有 CUDA 兼容问题）

### 2. ComfyUI 克隆
- `git clone` 第一次超时（网络问题）→ 重试成功
- 注意：克隆后必须有 main.py，否则是空目录

### 3. venv + PyTorch
- 创建 venv → `E:\AI-Tools\ComfyUI\venv\`
- PyTorch 第一次 hash 校验失败 → `--no-cache-dir` 重试成功
- `torch 2.6.0+cu124` → `torch.cuda.is_available() = True`
- 不需要完整 CUDA Toolkit，PyTorch 自带 CUDA 库

### 4. 依赖安装
- 先装核心依赖（safetensors, transformers, opencv, scipy, einops）
- 再装 requirements.txt（sqlalchemy, alembic, kornia, spandrel 等）
- 关键缺失：sqlalchemy（新版 ComfyUI 用 SQLite 管理资产）

### 5. 自定义节点
- ComfyUI-Manager: `git clone` 到 `custom_nodes/`
- ComfyUI-LTXVideo: `git clone` 到 `custom_nodes/`

### 6. 启动
- `python main.py --highvram`（8GB 显存用 highvram 模式）
- 首次启动需 30-60 秒加载节点
- 运行在 `http://127.0.0.1:8188`

## 失败记录

### LTX-Video 模型下载
- huggingface-cli 已废弃 → 改用 hf 命令
- hf download 反复超时（国内网络，HuggingFace 直连慢）
- hf-mirror.com 镜像也超时
- 只下到 1.2GB 蒸馏 LoRA（ltxv-13b-0.9.7-distilled-lora128.safetensors）
- 主模型 ltx-video-2b-v0.9.5.safetensors（~5GB）未完成
- **待解决：用 ComfyUI Manager 内置下载 / 手动下载管理器**

### HY-Motion-1.0 不可用
- E 盘已有模型文件（1.8GB checkpoint）
- 但 README 标注 Lite 版最少 24GB 显存
- 8GB 完全不可用

## 可用资产（E盘已有）

| 模型 | 路径 | 用途 |
|---|---|---|
| BLIP 图识别 | `E:\AIModels\huggingface\hub\models--Salesforce--blip-image-captioning-base\` | 验证生成画面 |
| Qwen 2.5 Coder 7B | `E:\AIModels\qwen\Qwen2.5-Coder-7B-Instruct-GGUF\` | 本地文案优化 |
| Qwen3 8B | `E:\AIModels\qwen\Qwen3-8B-GGUF\` | 本地分镜优化 |
| HY-Motion-1.0 | `E:\AIModels\motion\HY-Motion-1.0\` | ❌ 8GB 不可用 |

## 设计决策

- 砍掉云端 Wan2.2（省钱，本地优先）
- 不装 CUDA Toolkit（PyTorch 自带 CUDA 库够用）
- F12 → ChatGPT DALL-E 出关键帧 → 本地 LTX-Video 驱动动画
- 所有工具装 E 盘（C盘只有 22GB 空闲）

## 下一步

1. 完成 LTX-Video 模型下载（ComfyUI Manager 或手动）
2. F12 生成灰塔镜1 关键帧
3. 搭建 I2V 工作流，关键帧 → 6 秒动画
4. 验证十元视觉映射是否正确

## 一句话

8GB 显存能做的事：LTX-Video 2B 本地动画 + F12/ChatGPT 云端出图 = 完整管线。不要贪大模型。
