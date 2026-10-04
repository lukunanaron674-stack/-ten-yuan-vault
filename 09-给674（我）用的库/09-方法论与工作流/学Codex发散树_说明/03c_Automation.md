# ⏰ Automation 定时

> 稳定流程定时跑，别每次手动。

## 原则

> skill 定义方法，**定时任务定义节奏**。

先把流程手动跑可靠，再定时。还在大量手调 → 先做成 skill，别急着定时。

## 适合定时的活

- ⏰ 每周归档 Codex 会话（配合 codex-file-hygiene）
- ⏰ 摘要近期 commit
- ⏰ 检查 CI 失败
- ⏰ 起草 release notes
- ⏰ 定时跑重复分析

## 桌面 App 用法

- **定时（Scheduled）页**里建任务
- 选：项目 / prompt / 节奏（cadence）/ 执行环境（本地 or 独立 git worktree）
- prompt 里可以调用 skill

## 进阶用法

用定时任务做**反思与维护**：定期复盘聊天、总结反复出现的摩擦点、反过来改进你的 prompt / AGENTS.md / skill。

