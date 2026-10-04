---
type: skill-run-ledger
skill: 远程GPU工作机接入与验收
status: active
version: 0.1
updated: 2026-09-06
state: 07-Codex大脑库/skills/远程GPU工作机接入与验收/state.json
---

# 远程GPU工作机接入与验收｜运行账本

> 只记录真实探测、真实远程执行、真实文件写入和可回读证据。日志中的“已完成”不能替代当前 live 验证。

## 2026-09-05｜案例001｜RTX4090-Win11

- 起始 main SHA：`b2051220878bc17b0488971b5962813ed3463f69`。
- 证据来源：桌面原始日志 `C:\Users\19308\Desktop\排查日志合集-2026-09-05.md`；案例副本已脱敏，原始文件不复制进 Vault。
- 目标：本地 `19308` 通过 Tailscale 控制 `DESKTOP-FKEUGLS`（`100.73.131.99`），最终连接 ComfyUI/H3。
- 本地接入：已生成 `C:\Users\19308\.ssh\h3_4090`，并在 `C:\Users\19308\.ssh\config` 写入 `Host h3`；`ssh -G h3` 回读确认用户为 `h3remote`、目标为 `100.73.131.99`。
- 网络证据：Tailscale 两端在线；目标 Ping 成功；TCP 22 曾可达，但当前 SSH 服务监听状态需 live 重复确认。
- SSH 证据：主机 ED25519 指纹观察值为 `SHA256:UqmgMmlJEMjIDdzBrpnQmDz6TQWAIcKczKZXj9cZJdc`；非交互 `ssh h3 "whoami && hostname"` 尚未成功，曾返回 Permission denied，也曾停在密码提示/握手异常。
- WinRM 证据：本地管理员 PowerShell 启动 WinRM 并设置精确 TrustedHosts 后，`Invoke-Command` 成功返回：`desktop-fkeugls\\h3remote` 与 `DESKTOP-FKEUGLS`；达到 L3。
- 远端公钥：通过 WinRM 写入 `C:\Users\h3remote\.ssh\authorized_keys`；回读确认内容匹配本地公钥，ACL 仅 `h3remote` 与 `SYSTEM`；临时 WinRM 目录误写已清理。
- ComfyUI：`C:\ComfyUI` 存在，包含 `models`、`input`、`output`；读写权限和运行权限仍需专门的远端健康检查回读。
- 当前状态：`partial_verified`；WinRM L3 成功，SSH L3/L4-L7 未验收。
- 阻断：`h3remote` 是普通用户，无法在当前 WinRM 会话中核验/启动 sshd、设置服务 Automatic 或验证 PasswordNeverExpires；这些需远端管理员上下文。
- 下一步：远端管理员确认 sshd 与账户策略后，重复 SSH 非交互测试；随后完成文件双向传输，再进入 Codex/ComfyUI/H3。

## 2026-09-05｜本地最终复核

- `ssh h3 "whoami && hostname"` 未返回目标身份；交互测试进入密码提示，批处理测试未通过，期间还观察到 22 端口拒绝连接。
- WinRM 复核成功返回 `desktop-fkeugls\\h3remote` 与 `DESKTOP-FKEUGLS`，因此当前可用控制等级保持为 WinRM L3。
- `C:\Users\h3remote\.ssh\authorized_keys` 已回读确认包含本地 `h3_4090` 公钥，ACL 回读仅含 `SYSTEM` 与 `DESKTOP-FKEUGLS\\h3remote`。
- `test_tailscale.ps1` 实际运行：Tailscale 状态可读、Ping 成功、当前 TCP 22 未通过；脚本已修正路径对象兼容问题并重新验证。
- 结论：不能把 SSH 写成成功；下次月租应读取本 Skill/state/case，优先复用 WinRM L3，并把 SSH 作为待验收备用通道。

## 2026-09-06｜RDP profile 复核

- RDP 登录窗口曾消失，但通过 WinRM 回读确认 `C:\Users\h3remote\NTUSER.DAT` 与对应 `ProfileList` 已存在；这证明 profile 初始化已经发生。
- `C:\Users\h3remote\.ssh\authorized_keys` 仍包含本地公钥。
- profile 初始化后重新测试 SSH，当前结果为 22 端 `Connection refused`，尚未进入公钥认证；因此新的阻断点是 sshd 服务/监听不稳定或未运行，不再把 profile 缺失作为当前唯一解释。

## 2026-09-06｜SSH L3 验收通过

- 本地执行 `ssh -i ~/.ssh/h3_4090 -o IdentitiesOnly=yes h3 "whoami && hostname"` 成功返回：`desktop-fkeugls\\h3remote`、`DESKTOP-FKEUGLS`。
- 同一非交互命令连续复测 2 次，均退出码 0；SSH 公钥认证和远程命令执行达到 L3，已不再是单次偶然成功。
- 当前状态：WinRM L3 + SSH L3 双通道已验证；L4 文件双向传输、L5 Codex 调用、L6 ComfyUI、L7 H3 仍未完成。
- 下一步：先做小型文件上传/下载与哈希回读，再建立 ComfyUI/H3 的远程启停和任务闭环。

## 2026-09-06｜外部接入 Skill 审阅与合并

- 更新前记录的最新 `main` SHA：`d9bf76a1b2041e4b744c5394bda4e5d9aeb9ee02`。
- 来源：`C:\Users\19308\Desktop\remote-windows-ssh-skill.zip`；只读审阅了 `SKILL.md`、`ssh_audit.py`、`ts_health.py`、`winservice.py`，未执行其中脚本。
- 已合并：`Match User` 有效配置优先级、authorized_keys 指纹/编码/owner/ACL 审计、`-E` 日志与 `-d/-ddd` 单连接风险、Tailscale 代理导致假掉线的分流检查。
- 未自动合并：全局授权文件切换、机器级 `NO_PROXY` 写入、Tailscale 重启、服务启动参数变更；这些均可能影响远端可用性，保留人工确认门禁。
- `C:\Users\19308\Desktop\Codex Image 2026年9月1日 14_32_31-2人` 已识别为 PNG 素材，与 4090 接入 Skill 无关，未写入库。
- 当前案例的 live 事实不变：本地到 `DESKTOP-FKEUGLS` 的 SSH 与 WinRM 均已达到 L3；下一目标仍是 L4 文件双向传输。

## 2026-09-06｜GitHub H3/4090/32GB RAM 优化研究

- 检索范围：官方 ComfyUI H3 支持、MiniMax H3 Turbo、ComfyUI Spectrum、THU-MIG edge-dit.cpp、H3 group-offload 候选实现。
- 目标约束：RTX 4090 24GB，系统内存 32GB，目标 15 秒（362 帧 @ 24fps）。
- 结论：系统内存是首要瓶颈；默认不把 CPU offload、`--lowvram` 或 Spectrum `system_ram` 历史存储误当作“省内存”。
- 采用顺序：官方 ComfyUI 基线 → 124/243/362 帧阶梯 → Turbo v4 6–8 steps → 显存有余量时 Spectrum `history_storage=vram` A/B。
- 暂不默认：SageAttention（缺少同条件 H3/4090收益证据）；edge-dit.cpp（独立运行时，保留为 ComfyUI 失败时的备用路线）。
- 重要限制：GitHub 实测来自不同硬件/运行时，不能替代当前 4090 的 live RAM/VRAM 峰值和 MP4/音频验收。

## 2026-09-06｜案例001｜4-5A H3 4090 实际生成验收

- 连接与控制：复用 `ssh h3`，远端 ComfyUI 单实例监听 `127.0.0.1:8188`；未修改 Tailscale、NVIDIA 驱动或远程桌面软件。
- 失败分流：默认 DynamicVRAM + 32B 原配模型首次在采样阶段报 `CUBLAS_STATUS_EXECUTION_FAILED`；Sage/Triton 与低显存/CPU-VAE组合分别出现加载 `access violation`；8B CLIP 与 Ref2VA 主模型出现 4096/5120 维度不匹配。
- 修复基线：关闭其他 ComfyUI 实例；单实例启动参数为 `--disable-async-offload --disable-smart-memory --disable-pinned-memory --fast-disk --database-url sqlite:///:memory:`，保留 DynamicVRAM 和 PyTorch attention。
- 2秒低分辨率：4-5A 原配 32B + Ref2VA，8 steps，736×416，返回 `STATUS success COMPLETED True`；输出 `remote_4-5A_smoke_00002_.mp4`，56帧、24fps。
- 2秒约0.7MP：同一模型与参数，1152×640，返回成功；输出 `remote_4-5A_smoke_00003_.mp4`，56帧、24fps。
- 13秒压力测试：工作流 `4-5A_13s_0p7MP_smoke.json` 同步 Director 312帧和外部参考组 `duration_sec=13`；8 steps、1152×640，返回 `STATUS success COMPLETED True`；输出 `remote_4-5A_smoke_00004_.mp4`，328帧、24fps、1152×640，实际约13.67秒。
- 文件回收：13秒 MP4 已通过 SCP 复制到本地临时目录，远端/本地 SHA-256 均为 `A8BEA08BB882EFC04D28C7CC1C1721F0660D9F81D96DFC04438676DCA66C8C7D`。
- 当前结论：案例001达到 L7 H3 smoke/生产闭环验证；这是 4-5A 的技术验收，不等于画面内容审片通过，也不等于长队列稳定性已证明。

## 2026-09-06｜案例001｜刷机前 H3 模型盘点

- 远端 G 盘 live 回读确认：裁剪版 FL2VA/Ref2VA INT8 UNET、`qwen3vl_32b_minimax_h3_nvfp4_awq`、另一份 32B INT8 ConvRot、8B FP8 文本编码器、视频/音频 VAE、FL2V/Ref2V Turbo LoRA 均存在。
- 另有 `G:\H3\models\diffusion_models\Minimax_H3` 下未裁剪 FL2VA/Ref2VA INT8 主模型，以及 `mmh3-8b-ClipProj-v3.1.safetensors`。
- 完整路径、字节数和用途已写入 `state.json` 的 `modelInventory`；这些是刷机前应备份/核对的清单，不代表所有组合都已兼容验证。

## 2026-09-07｜案例001｜刷机后模型基线失配复盘

- 刷机后的 live 4090 仍可通过 SSH 访问，ComfyUI 可启动，RTX 4090 D 驱动可在重启后恢复；但原 `G:\ComfyUI_models` 目录及裁剪版 Ref2VA、裁剪版 FL2VA、Qwen32B NVFP4 未在当前目标盘找到。
- 当前实际使用的替代组合是未裁剪 Ref2VA（34,038,894,550 bytes）+ Qwen8B FP8（10,588,637,512 bytes），与已验证组合不同；3-2A 在模型加载阶段报 `hostbuf_file_reader_read failed`，底层 `GetOverlappedResult failed error=1450`，随后 ComfyUI 进程和 NVIDIA 驱动异常退出。
- 本次提交的 3-2A（6 秒、1280×736、8 步）无 history、无 MP4；3-3A 未提交。不能把该失败归因于提示词或 SSH，也不能把 32GB 内存绝对判定为必然不可运行，因为旧裁剪模型组合曾完成 13 秒 8 步验收。
- 修复动作：恢复旧三件核心模型后，先按 2 秒低分辨率 smoke → 2 秒约 0.7MP → 13 秒 1152×640 的阶梯复验；恢复前禁止复用 H3 生产工作流。模型恢复优先使用远端直下，避免本地 3070 经 Tailscale 中继上传。

## 2026-09-07｜案例001｜刷机后裁剪模型恢复与 1450 复测

- 当前 live 文件已精确校验：Ref2VA `20,970,379,616` bytes；FL2VA `20,970,379,616` bytes；Qwen32B NVFP4 `15,687,142,551` bytes。
- 3-2A 使用 Ref2VA + Qwen32B NVFP4、`--lowvram`，第一次保留 `--fast-disk`、第二次移除 `--fast-disk`；两次均在采样阶段失败，错误均为 `hostbuf_file_reader_read failed` / `GetOverlappedResult failed error=1450`。
- 结论：本次仍未重新达到 H3 生成验收；模型路径/大小已排除，后续应围绕 AIMDO、动态显存和分页资源做单变量排查；3-3A 暂不提交。

## 2026-09-07｜案例001｜单变量复测收口

- 3-2A 三次受控尝试均无 MP4：原参数（含 `--fast-disk`）报 `1450`；移除 `--fast-disk` 仍报 `1450`；加入 `--disable-dynamic-vram` 后 ComfyUI/Python 进程退出。
- 第三次计划任务 `LastTaskResult=3221225477`（十六进制 `0xC0000005`，访问冲突），日志只到 `got prompt`，GPU随后回到桌面空闲状态。
- 收口结论：当前刷机后的 Windows/ComfyUI 运行时在 H3 采样阶段不稳定；不要继续提交 3-2A 或 3-3A，不得把任务号、模型加载或一次显存占用写成生成成功。后续需要远端管理员处理运行时/驱动/AIMDO 或分页资源，再从 2 秒低分辨率 smoke 重新开始。
- 现场资源核对：G 盘为健康 NTFS 固定盘，剩余约 657.82GB；`C:\pagefile.sys` 约 12284MB。候选修复是 G 盘约 48GB 固定分页文件并重启一次，须用户明确批准；批准前仅保持 ComfyUI 空闲和现有模型，不再提交生成。

## 2026-09-07｜案例001｜`--disable-mmap` 稳定路线完成 3-2A/3-3A

- 受控变量：在原 `--fast-disk` 基线基础上加入 `--disable-mmap`；不改模型、不重启 Windows。该参数使两条 H3 任务越过此前 `hostbuf_file_reader_read` / `1450` 崩溃点，但速度明显变慢。
- 3-2A Ref2VA：history `success=True`；远端与本地均为 1280×736、144帧、24fps、6.0秒，H.264 + AAC；本地文件 `3-2A_ref2va_v1_00002_.mp4`，SHA256 `6181F50508867D26A0D3864166ED0A77F14654082FA16EF781D94092E58E8783`。
- 3-3A I2VA：history `success=True`；远端与本地均为 1280×736、96帧、24fps、4.0秒，H.264 + AAC；本地文件 `3-3A_i2va_v1_00001_.mp4`，SHA256 `68DE9BF87AC967F7178C7CA70EC74BE2545B4380DB5BAD724E286740D94467E3`。
- 3-2A 第一次无音频的 MP4 不作为交付；已确认 `CreateVideo.audio=['director',1]` 后重跑并通过音视频流验收。当前结论：这台刷机后的 4090 已恢复到 H3 生成 L7 smoke 闭环，但 `--disable-mmap` 路线的耗时和长队列稳定性仍需单独记录。
