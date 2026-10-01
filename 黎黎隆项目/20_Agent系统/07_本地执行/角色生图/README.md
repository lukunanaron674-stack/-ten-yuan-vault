# 角色本地生图队列

专门承接：
`AG-11 角色 Agent → 本地 Codex → 本地生图 → receipt → AG-06 → AG-11`

## 目录
- inbox/：READY 工单
- receipts/：本地 Codex 生成后的轻量回执
- reviews/：风格审核结果
- 图片本体默认留在本地素材库，不强制进入 GitHub

## 本地 Codex 唤醒入口
先读取：
1. `07-Codex大脑库/skills/黎黎隆角色代理本地生图/SKILL.md`
2. 用户指定的 inbox task
3. task 指向的角色卡与协议

没有真实输出文件与 sha256，不得把任务标为 GENERATED。
