# Codex 执行清单：把角色分支 ch013-canonical-align 推上 GitHub

> 交接自 WorkBuddy 会话 2026-10-01/02。目标只有一个：把本地分支推上 GitHub。**不碰其他任何分支、不改历史。**

## 0｜背景（30 秒读完）

- 仓库：`https://github.com/lukunanaron674-stack/-ten-yuan-vault.git`
- vault 本地路径：`C:\Users\19308\Documents\Obsidian\ten-yuan-vault`
- 目标分支：`ch013-canonical-align`，本地 commit `d2195411`，父节点 = origin/main（9640a081 之后 main 又前进了，behind 不影响新建远端分支）
- 该 commit 只含 3 个小 md 文件（无大图/zip，GitHub 的 image-over-3mib 钩子会放行）：
  1. `黎黎隆项目/03_角色/角色库/01_角色卡/CH-013_岑烬.md`（新建，CH-013 岑烬正式正本）
  2. `黎黎隆项目/03_角色/角色库/02_H3专用角色库/CH-013_冒险者_H3.md`（修改：旧宽厚重装版降级历史实验）
  3. `黎黎隆项目/角色魅力实验/B端/assets/character_refs/ADV-001_冒险者角色身份验证与十元分析_v1.0.md`（新建，v1.1 详细分析）
- 已知堵点（WorkBuddy 无头环境实测）：
  - git push 走 `git-receive-pack` 被 GFW 挂起（fetch/ls-remote 通、push 挂），直连和走 Clash 7890 都试过，均 SIGTERM 空输出
  - GCM（Git Credential Manager）无头环境弹不出浏览器
  - WorkBuddy 的 GitHub 连接器 token 对本仓库无写权限（建分支 403 Resource not accessible by integration）
  - → 所以需要你在**有浏览器/凭证交互能力**的环境跑

## 1｜执行步骤

```bash
# ① 进 vault
cd /c/Users/19308/Documents/Obsidian/ten-yuan-vault

# ② 核对分支与 commit（期望输出含 d2195411 和 "add CH-013 岑烬"）
git log --oneline -1 ch013-canonical-align

# ③ 核对 commit 只含 3 文件（期望 "3 files changed"）
git show --stat d2195411 | tail -5

# ④ 确认远端还没有该分支（期望输出为空）
git ls-remote --heads origin ch013-canonical-align

# ⑤ 推送·尝试A（直连，3 个小文件正常应在 2 分钟内完成）
GIT_TERMINAL_PROMPT=0 git push -u origin ch013-canonical-align
# 若 GCM 弹出浏览器/授权窗口 → 正常完成 OAuth 即可（这就是无头环境做不到的一步）

# ⑥ 推送·尝试B（A 挂起 >3 分钟无输出则 kill，改走 Clash 代理）
GIT_TERMINAL_PROMPT=0 git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push -u origin ch013-canonical-align

# ⑦ 推送·尝试C（SSH over 443，仅当 ~/.ssh 有已注册 GitHub 的密钥）
ssh -T -p 443 git@ssh.github.com   # 通了再：
git remote set-url origin git@ssh.github.com:lukunanaron674-stack/-ten-yuan-vault.git
git push -u origin ch013-canonical-align
# （推完可把 remote url 改回 https）

# ⑧ 验证（期望返回 <sha> refs/heads/ch013-canonical-align）
git ls-remote --heads origin ch013-canonical-align
```

成功标志：⑧ 返回分支哈希。分支页：`https://github.com/lukunanaron674-stack/-ten-yuan-vault/tree/ch013-canonical-align`

## 2｜兜底方案（所有 push 都失败时）

GitHub 网页手动传：打开仓库 → Add file → Upload files → 新建分支名填 `ch013-canonical-align` → 从本地 `黎黎隆项目/角色交接包_20261001/` 里把 3 个 md 拖上去，**路径按上面 3 条 vault 相对路径在网页里逐级建**（或先建好目录再传）。内容以包内文件为准。

## 3｜红线（Codex 必读）

- ❌ 只推 `ch013-canonical-align`，**不推其他分支**（尤其 `codex/lililong-mv-tenyuan-cards-20260921`——它历史里有 >3MiB 图 + 99_归档 两个 ~175/202MB zip，会被远端钩子拒；清理它是单独的破坏性任务，须 674 拍板）
- ❌ 不 commit 工作树里的其他脏文件（代理库/素材清单等），本次只推已建好的 commit
- ❌ 不做 filter-repo / rebase / force-push 任何改历史操作
- ❌ 不读取、不输出、不转存任何 Token / Cookie / API Key / Bearer
- ✅ push 完把结果（成功 sha 或失败报错原文）报告给 674
