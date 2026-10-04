---
name: 远程GPU工作机接入与验收
description: 为临时或长期 GPU 工作机建立并验收 Tailscale、SSH、WinRM 与文件/ComfyUI 远程控制链；以可观察等级报告成功、部分成功和阻断，不把单次连接当作稳定验收。
version: 0.5
status: active
authority_level: L1-workflow
scope: 远程GPU工作机接入、故障复现、通道选择与验收
state: 07-Codex大脑库/skills/远程GPU工作机接入与验收/state.json
ledger: 07-Codex大脑库/skills/远程GPU工作机接入与验收/run-ledger.md
---

# 远程GPU工作机接入与验收 Skill v0.5

## 1｜目标与边界

目标不是把某一台 4090 的所有配置永久装修完，而是让本地 Codex 可靠控制一台临时或长期 GPU 工作机，并用证据报告当前达到的等级。

本 Skill 适用于 Windows / Linux、Tailscale、SSH、WinRM、RDP/向日葵等接入组合。它不自动租机器、不修改 NVIDIA 驱动、不删除现有远程桌面软件，也不把密码或私钥写入仓库。

默认优先级：

```text
网络可达 → 主控制通道（WinRM 或 SSH）→ 备用通道 → 文件双向传输 → ComfyUI/H3
```

SSH 不是目的；“Codex 能稳定执行远端命令”才是目的。主通道选择必须依据当前 OS、权限、端口和真实测试结果。

## 1.1｜Windows RTX 4090 的 H3 路由

- 目标是 Windows RTX 4090 时，先读 `minimax-h3-video-cloud-5090` 与 `minimax-h3-video-local` 两个 H3 Skill，借用它们的采样和验收规则；不要把 AutoDL 5090 或本地 RTX 3070 的路径直接当成 Windows 4090 路径。
- 已有 `h3` SSH 别名时只复用现有连接；不要重新安装 Tailscale/SSH、生成密钥或改远端系统配置。先连续验证 `whoami && hostname`，再验证 `nvidia-smi`、ComfyUI 端口、模型加载和 MP4。
- H3 加速默认统一使用 **8 steps**。25 steps 只作为质量对照，不得让新建工作流静默回退到 25 steps；8 steps 也必须以实际工作流参数和媒体探针为证据。
- 24GB 显存、32GB 内存的 Windows 4090 在 H3 长时空任务上可能出现 `hostbuf_file_reader_read failed` 或 `CUDA error: unknown error`。先跑短时低分辨率 smoke；7 秒单段失败时，优先使用 2–3 秒连续段并用尾帧衔接/后期拼接，不把失败归因于 SSH。
- 只有 ComfyUI history 成功、MP4 存在且本地副本通过 ffprobe 后，才把 H3 任务记为 L7；GPU 利用率或“模型已加载”不算成片。

## 2｜验收等级

| 等级 | 含义 | 必须有的证据 |
|---|---|---|
| L0 | 识别本地与目标机器 | OS、主机名、目标 IP、账号范围 |
| L1 | 网络/端口可达 | Tailscale 状态、Ping 或等价探测、目标端口 |
| L2 | 身份认证成功 | SSH 公钥/密码或 WinRM 凭据认证 |
| L3 | 非交互远程命令成功 | `whoami` 与 `hostname` 返回目标值 |
| L4 | 文件双向传输成功 | 上传、远端读回、下载、哈希或内容核对 |
| L5 | Codex 可调用 | 通过保存的别名/脚本稳定执行并回收结果 |
| L6 | ComfyUI 可远程启停 | 进程、端口、日志和停止结果均可核验 |
| L7 | H3 生产闭环 | 提交、排队、日志、输出 MP4 与媒体探针均可核验 |

单次 `Accepted publickey`、一次手动登录或一个“配置完成”日志不能单独证明 L2/L3 稳定。至少连续重复非交互命令；生产链还要验证文件与任务闭环。

## 3｜固定启动顺序

1. 读取本 Skill 的 `state.json`、`run-ledger.md` 和对应 `cases/`；历史案例只提供证据，不能覆盖当前 live 状态。
2. 识别本地用户、目标主机名、Tailscale IP、OS、已有远程能力和权限边界。
3. 运行 `scripts/test_tailscale.ps1`，记录网络与端口，不把 Ping 成功误写成认证成功。
4. 优先测试当前最容易获得的控制通道：Windows 目标通常先验证 WinRM；SSH 作为主或备用通道由端口、服务和认证结果决定。
5. 生成本地专用密钥和别名时使用真实本地 profile 路径；先检查是否已有同名 key/config，禁止覆盖其他连接。
6. 远端账户、公钥、sshd、WinRM listener、服务启动类型和 ACL 只做必要修改；需要管理员权限时明确停在权限边界，不用普通用户伪装完成。
7. 按 L0→L7 逐级验收。失败时保存症状、最后成功等级、命令输出摘要和下一步，不跳级。
8. 只有达到目标等级并完成相应证据回读，才更新 `state.json` 的完成状态。

## 4｜Windows SSH 关键规则

- 本地 `ssh h3` 配置中的 `User`、`HostName`、`IdentityFile` 必须通过 `ssh -G h3` 回读确认。
- 私钥只放本地用户 `.ssh`，权限和路径不得写入公开日志；只可分享 `.pub` 公钥。
- Windows 本地普通用户的公钥默认放在 `C:\Users\<user>\.ssh\authorized_keys`；管理员组成员可能走 `C:\ProgramData\ssh\administrators_authorized_keys`，必须按实际组成员身份判断。
- `ProfileList` 缺失、profile 手工创建、缺少 `NTUSER.DAT`、`lookup_sid() failed: 1332` 等现象只能作为诊断线索，必须重新核对 live 的账户、SID、profile 和 sshd 日志。
- 一次成功后再次失败时，状态仍是 unstable；先重复验证和读取服务端日志，禁止宣布“已修复”。
- 解析授权路径时必须检查全局配置和 `Match User` 块；`Match` 块可能覆盖全局 `AuthorizedKeysFile`，不能只改全局行。
- 公钥验收必须同时回读 key 指纹、文件编码/换行、owner、ACL 和 sshd 实际生效路径；不要只看 `authorized_keys` 是否存在。
- 需要调试 sshd 时优先使用 `-E <日志文件>`。禁止把 `-d/-ddd` 留在长期服务启动参数中；它可能让 sshd 进入单连接模式，导致后续连接被拒绝。
- 全局 `C:\ProgramData\ssh\authorized_keys_<user>` 只作为已确认 profile/路径解析异常时的人工批准备用方案；当前普通用户默认仍优先使用用户目录路径。

## 5｜Windows WinRM 关键规则

- 本地客户端向 Tailscale IP 发起 WinRM 时，非 Kerberos 场景通常需要管理员 PowerShell 设置精确 `TrustedHosts`；不使用通配符。
- 客户端只为出站连接设置 `TrustedHosts`；不要为了这个测试额外开放本地入站 WinRM 或启用 `LocalAccountTokenFilterPolicy`。
- 凭据通过 `Get-Credential` 交互输入；脚本不得接收或保存明文密码。
- `Invoke-Command` 返回目标 `whoami` 与 `hostname` 才算 L3；`Test-WSMan`、端口开放或服务 Running 只算前置证据。
- 远端 PowerShell 临时会话的 `$HOME` 可能不是目标用户 profile；写文件时使用明确的 profile 路径，避免把公钥写进 `C:\Users\TEMP` 等临时目录。

## 6｜通道决策与时间预算

```text
测试期 < 48h：目标至少 L3；单一脆弱通道排查超过 30 分钟，切换到可验证的备用通道。
租期 ≥ 7 天：完善 SSH/WinRM 双通道、自动启动、日志与文件同步。
租期 ≥ 30 天：继续到 L5-L7，建立 ComfyUI/H3 的启停、队列、状态恢复和结果回收。
```

这是资源分配规则，不是跳过安全或验收证据的理由。

## 7｜脚本

按需运行以下脚本；脚本默认只诊断，不保存密码、不自动修改远端：

- `scripts/test_tailscale.ps1`：Tailscale 状态、Ping 和 TCP 端口。
- `scripts/test_winrm.ps1`：交互取凭据后执行 `whoami`、`hostname`。
- `scripts/test_ssh.ps1`：显式私钥、`IdentitiesOnly=yes`、`BatchMode=yes` 的非交互 SSH 验证。
- `scripts/remote_healthcheck.ps1`：通过 WinRM 检查用户、profile、SSH 配置、ComfyUI 路径和可选写入探针。

脚本输出应进入本地运行记录或临时诊断目录；密码、私钥和令牌不得进入 `state.json`、ledger、case 或 Git。

外部包审阅记录见 `references/remote-windows-ssh-pack-review-20260906.md`。其中会修改服务、写机器级环境变量或重启 Tailscale 的操作，不属于默认自动流程。

## 8｜4090 24GB + 32GB RAM 的 H3 路线

当目标是远端 RTX 4090、系统内存仅 32GB 且要跑 15 秒时，先读 `references/h3-4090-32gb-memory-optimization-20260906.md`。

- 默认不把 `--lowvram`、`--cpu-vae`、全量 CPU offload 当作“省内存”方案；它们可能增加系统内存压力。
- 先用官方 ComfyUI H3 基线做 124→243→362 帧阶梯验收，再启用 Turbo LoRA 6–8 steps。
- Spectrum 只有在显存有余量时才启用，并将历史存储设为 `vram`；默认 `system_ram` 不适合本机瓶颈。
- SageAttention 目前只列为独立 A/B，不与 Turbo/Spectrum 首次叠加；edge-dit.cpp 是非 ComfyUI 的备用运行时。
- 15 秒目标必须记录 RAM/VRAM 峰值、耗时、MP4 和音频同步；跑通一次不能证明连续队列稳定。

### 8.1｜刷机/格式化后的模型资产硬门禁

- `state.json` 中的 `modelInventory` 是刷机前的历史基线；目标机重装或换盘后，必须重新检查每个文件的完整路径、字节数和可读性，不能因为 Skill 标记过 L7 就直接提交任务。
- 之前在 Windows RTX 4090 上验证成功的 13 秒 8 步组合必须保持为：`minimax_h3_ref2va_pruned_int8_convrot.safetensors`（20,970,379,616 bytes）+ `qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors`（15,687,142,551 bytes）；I2VA 任务还需要同尺寸的 `minimax_h3_fl2va_pruned_int8_convrot.safetensors`（20,970,379,616 bytes）。
- 不得用未裁剪的约 34GB Ref2VA/FL2VA 替代裁剪版，也不得用 8B FP8 文本编码器替代已验证的 Qwen32B NVFP4 组合；前者可能触发 Windows `hostbuf_file_reader_read failed` / 错误 1450，后者可能触发 4096/5120 维度不匹配。
- 若旧模型目录缺失，状态应降为“模型恢复待完成”，暂停 H3 提交。优先让远端机器从已确认的 ModelScope 地址直接断点下载，避免把约 36.7–57.6GB 通过本地 3070/Tailscale 中继回传；下载完成后先逐文件核对字节数，再启动 ComfyUI 和烟测。
- 只有资产门禁通过后，才复用原来的 `1152×640、8 steps、res_multistep/simple、--fast-disk` 基线；模型资产不同即使时长更短，也不能视为同一条已验证路线。

### 8.2｜刷机后 32GB RAM 主机的当前故障卡

- 2026-09-07 刷机后的 `DESKTOP-FKEUGLS`：RTX 4090 D 24GB、Windows、系统内存约 32GB、ComfyUI 0.33.0、PyTorch 2.11.0+cu130、comfy-aimdo 0.4.13。
- 三个核心文件已从远端直下载并精确校验，但 3-2A 在采样阶段仍报 `hostbuf_file_reader_read failed`；日志底层明确为 `GetOverlappedResult failed error=1450`。首次带 `--fast-disk`、第二次去掉 `--fast-disk` 均复现，因此不能再归因于单一 fast-disk 开关。
- 当前 `C:\pagefile.sys` 约 12284MB；遇到此卡先记录 RAM、分页文件和显存，再按单变量参数顺序排查，禁止反复盲跑或重启 Windows。必须以 history completed、MP4、ffprobe 和本地回收为最终成功证据。
- 当前已完成三次受控复测：保留 `--fast-disk`、移除 `--fast-disk`、再加 `--disable-dynamic-vram`；均未生成 MP4。第三次计划任务结果 `3221225477`（`0xC0000005` 访问冲突），应停止继续提交，转为远端运行时/驱动/AIMDO 修复。
- 现场补充：G 盘为健康 NTFS 固定盘，剩余约 657.82GB；当前 `C:\pagefile.sys` 仅约 12284MB。若用户批准并安排一次 Windows 重启，可优先在 G 盘增加约 48GB 固定分页文件，再从 2 秒低分辨率 smoke 复验；未获批准前不得自行改分页文件或重启。
- 后续受控成功：在同一主机加入 `--disable-mmap`（保留 `--fast-disk`）后，3-2A 与 3-3A 均完成；因此当前刷机后可复用参数为 `--fast-disk --disable-mmap`，但仍需先做短 smoke，不得推广到其他主机。

## 9｜已验证的 Windows 4090 H3 基线

以下是案例001在当前 `DESKTOP-FKEUGLS` 上的 live 验证结果，作为下次复用基线；启动前仍须重新检查主机和端口。

- 连接：本地 `ssh h3` → `h3remote@100.73.131.99`；先执行 `ssh h3 "whoami && hostname"`。
- ComfyUI：`G:\H3\git\ComfyUI`，Python `G:\H3\runtime\ComfyUI\python.exe`，API `127.0.0.1:8188`，模型目录 `G:\ComfyUI_models`，输出目录 `G:\H3\h3_workflow\outputs\comfyui`。
- 稳定启动基线：单实例、`--disable-async-offload --disable-smart-memory --disable-pinned-memory --fast-disk`，使用默认 DynamicVRAM 和 PyTorch attention；数据库锁冲突时加 `--database-url sqlite:///:memory:`。
- 4-5A 成功基线：原配 `qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors` + `minimax_h3_ref2va_pruned_int8_convrot.safetensors` + 两个 H3 VAE，`res_multistep/simple`、8 steps；1152×640（约0.74MP）13秒请求已完成并通过媒体探针。
- 刷机前模型清单（远端 live 回读）：`G:\ComfyUI_models\diffusion_models\minimax_h3_fl2va_pruned_int8_convrot.safetensors`、`G:\ComfyUI_models\diffusion_models\minimax_h3_ref2va_pruned_int8_convrot.safetensors`；`G:\ComfyUI_models\text_encoders\qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors`；`G:\H3\models\text_encoders\qwen3vl_32b_minimax_h3_int8_convrot.safetensors`、`qwen3vl_8b_fp8_scaled.safetensors`；`G:\ComfyUI_models\loras\minimax_h3_fl2v_turbo_4step_v1.0_768p_comfyui_bf16.safetensors`、`minimax_h3_ref2v_turbo_4step_v0.1_comfyui_bf16.safetensors`；视频 VAE `minimax_h3_video_vae_fp16.safetensors`、音频 VAE `minimax_h3_audio_vae_fp32.safetensors`；另有 `G:\H3\models\diffusion_models\Minimax_H3` 下的未裁剪 FL2VA/Ref2VA INT8 主模型与 ClipProj。
- 时长注意：Director 会增加上下文帧；本次请求 312 帧最终输出 328 帧，即 24fps 下约13.67秒。外部参考组节点的 `duration_sec` 也必须同步，否则只会跑出默认约2秒。
- 兼容性陷阱：8B 文本编码器输出4096维，与当前 Ref2VA 主模型要求的5120维不匹配；不能只替换 CLIP。Sage/Triton 与低显存/CPU-VAE组合在本案例曾触发 Windows `access violation`，不要作为首轮默认。
- 成功判据：提交脚本返回 `STATUS success COMPLETED True`，输出 MP4 存在；再用 OpenCV/ffprobe 核对帧数、fps、宽高，并在需要传回本地时做 SHA-256 比对。

## 8｜完成标准

每次汇报必须写清：

```text
目标机器 / 当前通道 / 最后成功等级 / 已验证证据 / 未完成等级 / 阻断原因 / 下一步
```

只有以下情况才能写 `verified_success`：

- L3：非交互命令连续成功，目标身份与主机名一致；
- L4：上传、远端读回、下载和内容/哈希核对全部成功；
- L5-L7：对应的 Codex、ComfyUI、H3 证据均已回读。

若只完成部分等级，使用 `partial_verified`；若相同阻断重复且无新外部状态变化，使用 `blocked_pending_remote_admin`，不要伪造完成。
