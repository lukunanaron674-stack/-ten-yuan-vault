# ROUND4｜角色 Agent 本地 Codex 生产闭环交接｜2026-10-01

## 当前状态
**AG06_REVIEW_QUEUED**

第4轮尚未判最终 PASS。第1抽 RETRY；第2抽已回传，新资产 hash 已记录，生图端自检九项全部 PASS；现已进入独立 AG-06 实图审核。

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

## 第1抽审核结果
- 审核文件：`07_本地执行/角色生图/reviews/CHAR-R4-CH003-001.style-review.json`
- candidate asset：`candidate-local:sha256:6E858457D5E02D58630B0A0D5F235A88159E8A5CC92E7396B8036932674782D9`
- identity：PASS
- silhouette：PASS
- linework：PASS
- flat_2d_readability：PASS
- palette：PASS
- material_feel：PASS
- proportion：FAIL
- composition_for_usage：FAIL
- forbidden_redesign：FAIL
- decision：**RETRY**
- approval：NOT_APPROVED

### 失败原因
1. A/B 下半身比例差异太小，比例实验没有真正成立。
2. 右下格只到头肩，缺少 45° 头帽→肩→胸连接。
3. 暗色上衣仍可能被误读成斗篷/披风。

> 当前审核文件自报为 `LOCAL_CODEX_SELF_REVIEW` 且 `Text-only audit`，不是独立 AG-06 实图签字，因此不能把本轮误记为 PASS。

## 第2抽
- task：`CHAR-R4-CH003-002`
- 状态：`READY_FOR_LOCAL_CODEX`
- 原则：只改三项 FAIL；上一轮 PASS 的脸、帽、线稿、色卡、水彩纸感全部冻结。
- execute_without_second_confirmation：true

## 第2抽回传
- task：`CHAR-R4-CH003-002`
- asset_id：`AST-IMAGE-21E30DF5`
- sha256：`21E30DF53F8131EB1483A1058CC621A541B868A7FC99EE6CEF817C618C0AF454`
- 生图端 self-review：九项全部 PASS
- self-review 文件：`07_本地执行/角色生图/reviews/CHAR-R4-CH003-002.style-review.json`
- 但该文件 reviewer=`LOCAL_CODEX_SELF_REVIEW`，approval_status 仍为 `NOT_APPROVED`

## 独立 AG-06
- task：`AG06-R4-CH003-002`
- 状态：`READY_FOR_AG06`
- 必须重新读取本地实际图片，不得照抄 self-review
- PASS 后 next_route=`CHARACTER_WRITEBACK`

## 等待第2抽返回
必须得到：
- [ ] 新真实输出
- [ ] 新 output hash / 可解析路径或本地 catalog locator
- [ ] prompt / 参数记录
- [ ] 审核结果
- [ ] 若 PASS，再由 AG-11 回写角色卡

## Round 4 判定
当前：**AG-06 REVIEW QUEUED / SELF-REVIEW PASS / NOT YET FINAL PASS**

只有本地 Codex 真实跑完并经过视觉审核，才允许写 ROUND-04 PASS。
