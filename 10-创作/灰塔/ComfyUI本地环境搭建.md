---
type: setup-guide
status: ready
target: RTX 3070 Laptop 8GB VRAM
updated: 2026-05-21
parent: "[[AI动画化可执行路径]]"
---

# ComfyUI 本地环境搭建

目标机器：RTX 3070 Laptop 8GB | 32GB RAM | 22GB 可用磁盘

## 0. 前置条件

- [x] Git 已安装
- [ ] Python 3.11.x（需安装）
- [ ] CUDA 12.4（需安装）

---

## 1. 安装 Python 3.11

```powershell
# 下载 Python 3.11.9
# https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe

# 或命令行（管理员 PowerShell）：
Invoke-WebRequest -Uri "https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe" -OutFile "$env:TEMP\python-installer.exe"
Start-Process -FilePath "$env:TEMP\python-installer.exe" -ArgumentList "/quiet InstallAllUsers=1 PrependPath=1" -Wait

# 验证
python --version
```

> 必须 3.11.x。3.12+ 与部分 CUDA 库有兼容问题。

---

## 2. 安装 CUDA 12.4

```powershell
# 下载 CUDA 12.4
# https://developer.download.nvidia.com/compute/cuda/12.4.0/local_installers/cuda_12.4.0_551.61_windows.exe

# 安装后验证
nvcc --version
```

---

## 3. 克隆 ComfyUI

```powershell
cd C:\
mkdir AI-Tools -Force
cd AI-Tools
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# 创建虚拟环境
python -m venv venv
.\venv\Scripts\activate

# 安装 PyTorch（CUDA 12.4 版）
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124

# 安装 ComfyUI 依赖
pip install -r requirements.txt
```

---

## 4. 安装 ComfyUI Manager

```powershell
cd custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
cd ..
```

---

## 5. 安装 LTX-Video 节点

```powershell
cd custom_nodes
git clone https://github.com/Lightricks/ComfyUI-LTXVideo.git
cd ComfyUI-LTXVideo
pip install -r requirements.txt
cd ..\..
```

### 下载 LTX-Video 模型

```powershell
cd models\diffusion_models
# 从 Hugging Face 下载 LTX-Video 2B
# 方式A：用 huggingface-cli（推荐）
pip install huggingface_hub
huggingface-cli download Lightricks/LTX-Video --local-dir .\LTX-Video --include "*.safetensors" "*.json"

# 方式B：手动下载放到 models/diffusion_models/LTX-Video/
# https://huggingface.co/Lightricks/LTX-Video
```

> LTX-Video 2B 约 5GB，下载需要 10-20 分钟。

---

## 6. 安装 AnimateDiff 节点

```powershell
# 在 ComfyUI Manager 中搜索 "AnimateDiff Evolved" 安装
# 或者手动：
cd custom_nodes
git clone https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git
cd ..
```

### 下载 AnimateDiff 运动模块

```powershell
cd models\animatediff_models
# 下载运动适配器
huggingface-cli download guoyww/animatediff-motion-adapter-v1-5-2 --local-dir .

# 下载 ByteDance 加速版
huggingface-cli download ByteDance/AnimateDiff-Lightning --local-dir .\AnimateDiff-Lightning
```

---

## 7. 验证安装

```powershell
# 启动 ComfyUI
python main.py --highvram

# 浏览器打开 http://127.0.0.1:8188
# 加载 LTX-Video 工作流测试
```

> `--highvram` 适合 8GB 显存，把更多模型常驻 GPU。

---

## 8. 磁盘空间分配

| 项目 | 大小 |
|---|---|
| Python 3.11 + venv | ~500MB |
| CUDA 12.4 | ~3GB |
| ComfyUI + 依赖 | ~2GB |
| LTX-Video 2B | ~5GB |
| AnimateDiff 模型 | ~2GB |
| 输出视频缓存 | ~5GB（预留） |
| **合计** | **~17.5GB** |

当前可用 22GB，安装后剩余约 4.5GB——偏紧。建议：
- 安装完成后清理 `pip cache`（释放 1-2GB）
- 定期清理 ComfyUI `output/` 目录
- Wan2.2/HunyuanVideo 大模型不下载到本地，走云端

---

## 9. 导入《灰塔》工作流

安装完成后，加载预设工作流 JSON：
```
（后续提供 ComfyUI workflow JSON）
```

---

## 云端补充（RunPod）

当需要 Wan2.2-14B 精修时：

```text
1. 注册 runpod.io
2. 选 RTX A6000（48GB）模板
3. 选 ComfyUI 模板（一键启动）
4. 上传《灰塔》分镜的 Wan2.2 prompt
5. 生成后下载视频 → 导入本地剪映
6. 关机（按小时计费 ~$0.79/h）

估算：7 镜 × 8分钟/镜 ≈ 1小时 ≈ $0.79
```

---

## 一键启动脚本

保存为 `start-comfyui.ps1`：

```powershell
cd C:\AI-Tools\ComfyUI
.\venv\Scripts\activate
python main.py --highvram --listen 0.0.0.0
# 打开 http://127.0.0.1:8188
```

---

> 连接：[[AI动画化可执行路径]] | [[灰塔_完整分镜脚本]]