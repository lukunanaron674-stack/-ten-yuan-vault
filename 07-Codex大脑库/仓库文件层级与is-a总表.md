---
type: repository-governance-index
status: current
version: v0.1
updated: 2026-07-18
priority: governance
is_a: 总表
parent: 07-Codex大脑库/Codex大脑总入口.md
index-of:
  - 仓库文件层级
  - is-a关系
  - 正本读取顺序
  - 覆盖关系
---

# 仓库文件层级与 is-a 总表

> 本表只治理文件身份、读取顺序与覆盖关系，不替代或改写三元、十元理论内容。三元与十元并行，不建立父子派生。

## 关系词

- `parent / child`：文件层级上的直接上下位。
- `implements`：落实上位协议。
- `explains`：解释上位文件，不覆盖它。
- `supplements`：补充但不替代。
- `supersedes / covered-by`：明确覆盖。
- `conflicts-with`：存在未解决冲突。
- `example-of`：案例验证。
- `index-of`：索引入口。

## 当前核验批次

| 文件路径 | 文件类型 | is-a | 直接上位 | 直接下位 | 现行状态 | 优先级 | 被谁覆盖 | 覆盖谁 | 冲突状态 | 读取入口 | 最后核验 SHA |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `07-Codex大脑库/Codex大脑总入口.md` | 总入口 | 总入口 | 无 | 正本协议、治理索引、确认队列 | current | highest-entry | 无 | 已整合的临时读取补丁 | 无已知冲突 | 仓库主入口 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |
| `07-Codex大脑库/正本读取优先级增补协议_v1.0_2026-07-16.md` | 解释性协议 | 读取顺序形成记录 | `Codex大脑总入口.md#当前语义优先级` | 无 | integrated-reference | reference | `Codex大脑总入口.md` | 早期未同步入口状态 | 无；正文已声明冲突时以总入口为准 | 总入口→治理与读取顺序 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |
| `07-Codex大脑库/待用户确认问题队列.md` | 自动运行交接 | 自动运行记录/确认队列 | `Codex大脑总入口.md` | 早晚确认任务 | active | highest-for-confirmation-only | 无 | 无 | `priority: highest` 仅限确认交接，不得覆盖理论正本 | 总入口→治理与自动运行 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |
| `07-Codex大脑库/_纠正档案_20260716_zx与剧本人物锚.md` | 纠正档案 | 纠正记录 | 对应现行正本与人物锚协议 | 无 | 待逐条核验 | correction-reference | 由对应现行正本决定 | 旧错误表达 | 未核验是否仍有独立最高优先级声明 | 总入口→纠正档案 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |
| `07-Codex大脑库/_纠正档案_20260526.md` | 纠正档案 | 历史纠正记录 | 对应现行正本 | 无 | 待逐条核验 | correction-reference | 由对应现行正本决定 | 更早错误表达 | 未核验是否存在过期锁定语句 | 总入口→纠正档案 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |
| `07-Codex大脑库/仓库文件层级与is-a总表.md` | 字典或总表 | 总表 | `Codex大脑总入口.md` | 各批次文件关系记录 | current | governance | 无 | 无 | 无 | 总入口→仓库治理 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |
| `07-Codex大脑库/仓库层级清理运行记录.md` | 自动运行记录 | 运行记录 | `仓库文件层级与is-a总表.md` | 各轮治理记录 | active | log | 无 | 无 | 无 | 总入口→仓库治理 | `cca89439248bb89598916ba2b333e1d7fee4ea68` |

## 本批次治理结论

1. 《Codex大脑总入口》是当前读取顺序的唯一总入口。
2. 《正本读取优先级增补协议》已明确降为 `integrated-reference`，关系是 `explains` 与 `covered-by`，不再与总入口并列最高优先级。
3. 《待用户确认问题队列》的 `priority: highest` 只适用于确认交接流程，不得解释为理论定义最高优先级。
4. 纠正档案属于纠错证据与历史记录，不能仅凭文件名中的“纠正”覆盖后续现行正本；下一批逐条核验其 frontmatter 和正文覆盖声明。
