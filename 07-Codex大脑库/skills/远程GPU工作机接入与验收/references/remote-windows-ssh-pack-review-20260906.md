---
type: skill-reference
skill: 远程GPU工作机接入与验收
status: reviewed
source: C:/Users/19308/Desktop/remote-windows-ssh-skill.zip
reviewed: 2026-09-06
---

# remote-windows-ssh 外部包审阅记录

## 结论

该压缩包是一个面向 WorkBuddy 的 Windows SSH/Tailscale Skill 包，不直接覆盖本库的验收 Skill。已将其中可复用的诊断原则并入本库；没有执行压缩包内脚本，也没有把密码、私钥或令牌写入本库。

旁边的 `Codex Image 2026年9月1日 14_32_31-2人` 是 PNG 素材，与远程接入无关，不纳入本 Skill。

## 已吸收

1. 解析有效 `AuthorizedKeysFile` 时，必须同时检查全局配置与 `Match User` 块；后出现的 `Match` 规则可能决定实际读取路径。
2. 公钥文件要同时核对内容、编码、末尾换行、owner 和 ACL；仅看到文件存在不算配置有效。
3. 使用客户端 `ssh -vvv` 指纹与服务端日志/文件指纹对账，区分“提交了错误的 key”和“正确 key 被服务端忽略”。
4. 诊断服务日志优先使用 `-E <日志文件>`；不要把 `-d/-ddd` 直接塞进长期服务启动参数，否则可能进入单连接调试模式并造成后续 `Connection refused`。
5. Tailscale 出现 offline/超时时，记录代理变量、`tailscale status --json`、`tailscale netcheck` 和控制面直连/代理对比；不要把它与公钥拒绝混为一类。

## 不自动吸收

- `AuthorizedKeysFile` 改成全局文件：只有在 profile/路径解析问题已由 live 证据确认、且远端管理员批准时，才作为备用方案。
- `ts_health.py fix`：会写机器级 `NO_PROXY` 并重启 Tailscale 服务，只能人工确认后执行。
- `winservice.py set-path`、`start`、`stop`：会改变服务状态或启动参数，只能先备份当前配置、确认管理员权限和回滚方案后执行。
- 压缩包里的 4090 实战文字：作为候选案例经验保留，不能覆盖当前案例的 live 事实。本机当前已连续验证的是用户目录 `C:\Users\h3remote\.ssh\authorized_keys` 路径和 SSH L3；不得因外部文字改写为全局授权文件已生效。

## 下次新 4090 的执行门禁

```text
先测 Tailscale/端口
→ 再查 sshd 状态与有效配置
→ 指纹对账
→ 只做必要的用户目录 authorized_keys 修复
→ 连续三次非交互 whoami/hostname
→ 仍失败才考虑全局 AuthorizedKeysFile 或服务调试参数
```

外部包原始文件仍保留在桌面，作为来源材料；本库只保存已审阅、脱敏和分级后的可复用结论。
