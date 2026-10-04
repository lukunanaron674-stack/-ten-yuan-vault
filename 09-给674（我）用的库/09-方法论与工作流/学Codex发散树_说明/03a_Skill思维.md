# 🔧 反复流程做成 skill

> 同一套做法重复用 → 封装成 `SKILL.md`。

## 触发判断

官方给了一条很实用的规则：

> "如果你反复用同一段 prompt、或反复纠正同一套流程，它就该变成一个 skill。"

## 一个 skill 长这样

```
my-skill/
  SKILL.md          # 用法 + 触发词 + 步骤
  scripts/          # （可选）辅助脚本
  references/       # （可选）参考
```

## 写好 SKILL.md 的关键

- **description 最重要**：写清"干什么 + 什么时候用 + 用户会怎么触发"
- **一个 skill 只干一件事**
- 先做 1 个典型用例跑通，再迭代
- 只用能提升稳定性的脚本/素材，别堆

## 放哪

- 个人：`~/.agents/skills/`（或你的 `.codex/skills/`）
- 团队：`<仓库>/.agents/skills/`

## 你机器上的例子

`codex-file-hygiene`（本次新做）—— 归档大会话 + 备份 config。触发词："清理会话""Codex 卡"。

