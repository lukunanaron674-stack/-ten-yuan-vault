---
type: skill-failure-patterns
skill: 远程GPU工作机接入与验收
version: 0.3
status: evidence-backed-case-patterns
---

# 远程GPU工作机接入与验收｜故障模式

> 下列模式来自案例001，都是诊断分流线索，不是脱离 live 状态的自动结论。每次必须重新验证目标 OS、服务、账户、路径和日志。

| 症状 | 当前可支持的解释 | 下一检查 |
|---|---|---|
| `Invalid user` | 目标 sshd 当时找不到该本地账户，或账户/profile/SID 尚未被服务正确识别 | 目标 `Get-LocalUser`、SID、sshd 日志和账户启用状态 |
| `Failed publickey` | 网络和 SSH 握手已到认证层，但服务端拒绝了提交的公钥 | 核对客户端 key 指纹、authorized_keys 内容/路径/ACL、sshd 配置和服务端日志 |
| `lookup_sid() failed: 1332` | SSH 服务端的 SID/账户解析链出现异常线索；不能只按普通密钥错误处理 | 以 SYSTEM/管理员上下文复核账户 SID、ProfileList、服务端日志 |
| `ProfileList` 缺失 | 手工 profile 目录不等于 Windows 正常初始化的用户 profile | 读取 SID 对应 ProfileList、profile 属主、是否已真实加载 |
| `NTUSER.DAT` 缺失 | profile 可能从未完成交互式初始化；这是案例线索，不是单独充分证明 | 结合 User Profile Service、登录一次后的目录和注册表状态复核 |
| 一次 `Accepted publickey` 后又失败 | 只能证明某一次会话成功；不能作为稳定验收 | 连续非交互重复测试，并回读 sshd 日志和 profile 状态 |
| Ping 成功但 SSH 失败 | 网络路径可能正常，问题进入端口、服务、握手或认证层 | TCP 端口、SSH banner、服务监听、客户端 key 与目标账号 |
| TCP 22 可达但 banner 超时/拒绝 | 端口路径存在，但服务未稳定提供 SSH 协议或中间状态变化 | 目标 sshd 状态、监听 PID、服务日志；不要重复盲试密码 |
| WinRM 客户端提示 TrustedHosts | 非 Kerberos/Tailscale IP 场景需要本地客户端信任精确目标 | 管理员 PowerShell 启动 WinRM，追加单个 IP，再用交互凭据测试 |
| 远程 PowerShell 写入 `C:\Users\TEMP` | WinRM 会话环境变量 profile 不是目标账户目录 | 使用明确 `C:\Users\\<user>` 路径，回读真实文件位置并清理误写 |
| 普通用户无法查询/启动 sshd | 远程命令通道已建立，但权限不足以管理服务或系统策略 | 切换远端管理员上下文；不要用提权绕过或修改不相关策略 |
| 全局 `AuthorizedKeysFile` 已修改但仍失败 | `Match User` 块可能覆盖全局指令，sshd 实际读取了另一条路径 | 回读有效配置和服务端日志；按目标用户解析实际生效文件 |
| `authorized_keys` 存在但被忽略 | owner、ACL、编码/BOM、末尾换行或路径均可能不合规 | 回读文件指纹、编码、owner、ACL 和有效路径 |
| 加入 `-d/-ddd` 后只成功一次，随后拒绝连接 | sshd 可能进入单连接调试模式并退出 | 查看服务启动参数和监听 PID；恢复正常服务参数后再重测 |
| Tailscale 显示 offline 或连接超时 | 服务进程可能继承了不可达的 HTTP(S) 代理；这是网络/控制面问题 | 对比代理变量、控制面直连结果、`status --json` 和 `netcheck`；未经确认不写 NO_PROXY、不重启服务 |
| H3 32B 文本编码器在采样初期 `CUBLAS_STATUS_EXECUTION_FAILED` | 可能是多实例、异步卸载、固定显存压力或 32GB RAM/页面文件提交压力；不能直接归因于模型损坏 | 关闭其他 ComfyUI 实例，保留单实例；使用 DynamicVRAM、关闭异步卸载/智能内存/固定内存后重跑短 smoke |
| Sage/Triton 加载文本编码器出现 Windows `access violation` | 当前运行时/自定义节点组合在加载大模型时不稳定 | 回退到原生 PyTorch attention；不要把 Sage/Triton 作为首轮默认 |
| 8B CLIP 后出现 `mat1 and mat2 shapes cannot be multiplied (817x4096 and 5120x5376)` | 8B 文本编码器与当前 Ref2VA 主模型的条件维度不匹配 | 恢复匹配的 32B CLIP；除非同时找到对应 8B 主模型，否则不要只替换 CLIP |
| Director 日志显示默认 56 帧而不是请求的长时长 | 外部参考组节点的 `duration_sec` 仍是默认2秒，覆盖了 Director 总帧数 | 同步修改外部参考组时长和 Director timeline；回读日志中的实际帧数 |

## 禁止的错误结论

- `Test-WSMan`、Ping、TCP 22 或 Tailscale 在线 ≠ SSH 登录成功。
- 一次 `Accepted publickey` ≠ SSH 稳定成功。
- `authorized_keys` 文件存在 ≠ sshd 正在读取该文件。
- WinRM 密码认证成功 ≠ SSH 公钥认证成功。
- 执行过配置命令 ≠ 目标状态已回读验证。
- `STATUS success` 仍需结合输出文件、帧数/fps/宽高和必要的 SHA-256；不得只凭队列完成事件宣称成片合格。
