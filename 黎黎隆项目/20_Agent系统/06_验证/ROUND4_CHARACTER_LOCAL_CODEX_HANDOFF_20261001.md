# ROUND4｜角色 Agent 本地 Codex 生产闭环交接｜2026-10-01

## 当前状态
**READY_FOR_LOCAL_CODEX**

第4轮尚未判 PASS。现在已完成的是“角色代理 → 本地 Codex”的真实工单交接。

## 测试角色
- character_id: `LLL-CHAR-003`
- name: 逃票魔法学徒
- task_id: `CHAR-R4-CH003-001`

## 工单
`黎黎隆项目/20_Agent系统/07_本地执行/角色生图/inbox/CHAR-R4-CH003-001.json`

## 本地 Codex Skill
`07-Codex大脑库/skills/黎黎隆角色代理本地生图/SKILL.md`

## 为什么选 CH-003
它能同时验证：
- 作者头部/帽子冻结项是否被保留；
- 下半身未知时，Codex 是否只做候选而不偷锁定；
- 四宫格能否同时承担身份锚点与比例探索；
- 本地资产查找与 hash 回执是否真实；
- 图像生成后能否进入 AG-06，而不是直接写成定稿。

## 本轮已经完成
- [x] CHARACTER_LOCAL_CODEX_RENDER_PROTOCOL
- [x] CHARACTER_CODEX_TASK_SCHEMA
- [x] 本地 Codex Skill
- [x] 独立角色生图 inbox/receipts/reviews 目录协议
- [x] CH-003 真实测试工单已写入 inbox
- [x] AG-11 默认视觉执行改为 LOCAL_CODEX_RENDER
- [x] AG-05 改为备用角色生图链
- [x] 导演角色链改为本地 Codex
- [x] CTX-11 写入本地执行规则

## 等待本地 Codex 返回
必须得到：
- [ ] identity/style 真实资产解析
- [ ] 真实输出图片
- [ ] output root_id + relative_path
- [ ] SHA-256
- [ ] prompt/参数记录
- [ ] receipt
- [ ] AG-06 实图审核
- [ ] PASS 后 AG-11 回写角色卡

## Round 4 判定
当前：**HANDOFF READY / NOT YET PASS**

只有本地 Codex 真实跑完并经过视觉审核，才允许写 ROUND-04 PASS。
