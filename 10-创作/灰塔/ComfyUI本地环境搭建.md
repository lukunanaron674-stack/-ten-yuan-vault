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
pip install huggingface_hub
huggingface-cli download Lightricks/LTX-Video --local-dir .\LTX-Video --include "*.safetensors" "*.json"
```

---

## 6. 安装 AnimateDiff 节点

```powershell
cd custom_nodes
git clone https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git
cd ..
```

---

## 7. 验证安装

```powershell
# 默认只监听本机回环地址，不暴露到局域网或公网
python main.py --highvram --listen 127.0.0.1

# 浏览器打开 http://127.0.0.1:8188
```

> 安全说明：不要把 ComfyUI 直接绑定到 `0.0.0.0` 后再映射公网端口。若确实需要远程访问，应通过 VPN、SSH 隧道或带认证的反向代理访问。

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

---

## 9. 导入《灰塔》工作流

安装完成后，加载预设工作流 JSON。

---

## 云端补充（RunPod）

需要云端精修时，仍然不要直接把 ComfyUI 管理端口暴露公网。优先使用平台自带认证入口、VPN 或 SSH 隧道。

---

## 一键启动脚本

保存为 `start-comfyui.ps1`：

```powershell
cd C:\AI-Tools\ComfyUI
.\venv\Scripts\activate
python main.py --highvram --listen 127.0.0.1
# 打开 http://127.0.0.1:8188
```

---

> 连接：[[AI动画化可执行路径]] | [[灰塔_完整分镜脚本]]
