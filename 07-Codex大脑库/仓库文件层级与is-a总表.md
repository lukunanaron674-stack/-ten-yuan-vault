---
type: repository-governance-index
status: current
version: v0.3
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
| `07-Codex大脑库/Codex大脑总入口.md` | 总入口 | 总入口 | 无 | 正本协议、治理索引、确认队列、纠正档案 | current | highest-entry | 无 | 已整合的临时读取补丁 | 无已知冲突 | 仓库主入口 | `c650fafb2d48a3908bc40c0ac3097542eaaf9bfa` |
| `07-Codex大脑库/正本读取优先级增补协议_v1.0_2026-07-16.md` | 解释性协议 | 读取顺序形成记录 | `Codex大脑总入口.md#当前语义优先级` | 无 | integrated-reference | reference | `Codex大脑总入口.md` | 早期未同步入口状态 | 无；正文已声明冲突时以总入口为准 | 总入口→治理与读取顺序 | `c650fafb2d48a3908bc40c0ac3097542eaaf9bfa` |
| `07-Codex大脑库/待用户确认问题队列.md` | 自动运行交接 | 自动运行记录/确认队列 | `Codex大脑总入口.md` | 早晚确认任务 | active | highest-for-confirmation-only | 无 | 无 | `priority: highest` 仅限确认交接，不得覆盖理论正本 | 总入口→治理与自动运行 | `c650fafb2d48a3908bc40c0ac3097542eaaf9bfa` |
| `07-Codex大脑库/_纠正档案_20260716_zx与剧本人物锚.md` | 纠正档案 | 纠正记录 | `Codex大脑总入口.md` | 无 | locked-correction-reference | correction-reference | `【z信息量卡v2.2】`、`【zx信息量卡v2】`、总入口标准分析顺序 | 被纠正的“脏醒”误识别、2026-07-16边界误读与人物锚错误 | 已修：`locked` 仅限 scope-lock；不再作为 z/zx/n 全局正本 | 总入口→纠正档案→对应现行专项正本 | `2264f413b82abfee5d29190898cc736c569d8acd` |
| `07-Codex大脑库/_纠正档案_20260526.md` | 旧稿 | 旧稿/混合纠正档案 | `Codex大脑总入口.md` | 历史纠正条目 | legacy-mixed-pending-revalidation | correction-reference | `Codex大脑总入口.md`；对应后续专项正本；x 条目由 `【x信息量卡v2】` 覆盖 | 更早错误表达 | 已修：整文件不再 `corrected-and-locked`；`x=贪念` 明确为历史口径 | 总入口→纠正档案→对应专项正本 | `4a61eb150e858901edbb6739a64df192db40bd3d` |
| `01-十元系统/【x信息量卡v2】.md` | 核心正本 | 密度卡/现行 x 专项正本 | `Codex大脑总入口.md#第14层` | x 案例卡、血肉卡、旧纠正记录 | 核心口径已锁定 | canonical-current | 无 | `【x信息量卡v1】`；旧档案中的 `x=贪念` 口径 | 无已知未解决冲突；旧引用仍待搜索清理 | 总入口→第14层十元现行准度卡与定义正本 | `c650fafb2d48a3908bc40c0ac3097542eaaf9bfa` |
| `01-十元系统/【z信息量卡v2.2】.md` | 核心正本 | 密度卡/现行 z 专项正本 | `Codex大脑总入口.md#第14层` | z 案例、旧 z 卡、2026-07-16纠正档案相关段落 | 核心口径已锁定·旧案例待二审 | canonical-current | 无 | `【z信息量卡v2】`；纠正档案中的早期 z 措辞 | 无已知定义冲突；旧案例仍待二审 | 总入口→第14层十元现行准度卡与定义正本 | `c650fafb2d48a3908bc40c0ac3097542eaaf9bfa` |
| `01-十元系统/【zx信息量卡v2】.md` | 核心正本 | 密度卡/现行 zx 专项正本 | `Codex大脑总入口.md#第14层` | zx 案例、旧 zx 卡、2026-07-16纠正档案相关段落 | 核心口径已锁定 | canonical-current | 无 | `【zx信息量卡v1】`；纠正档案中的早期 zx 措辞 | 无已知定义冲突；文件名 v2 与正文版本 v2.2 不一致，待治理 | 总入口→第14层十元现行准度卡与定义正本 | `c650fafb2d48a3908bc40c0ac3097542eaaf9bfa` |
| `07-Codex大脑库/仓库文件层级与is-a总表.md` | 字典或总表 | 总表 | `Codex大脑总入口.md` | 各批次文件关系记录 | current | governance | 无 | 无 | 无 | 总入口→仓库治理 | 本文件提交 SHA |
| `07-Codex大脑库/仓库层级清理运行记录.md` | 自动运行记录 | 运行记录 | `仓库文件层级与is-a总表.md` | 各轮治理记录 | active | log | 无 | 无 | 无 | 总入口→仓库治理 | 本轮运行记录提交 SHA |

## 本批次治理结论

1. 《Codex大脑总入口》是当前读取顺序的唯一总入口。
2. 《正本读取优先级增补协议》是 `explains` 与 `covered-by` 关系，不再与总入口并列最高优先级。
3. 《待用户确认问题队列》的 `priority: highest` 只适用于确认交接流程。
4. `_纠正档案_20260526.md` 是跨时期混合旧稿，不能再以整文件 `corrected-and-locked` 身份覆盖后续正本。
5. 该旧稿中的 `x=贪念` 已明确由 `01-十元系统/【x信息量卡v2】.md` 覆盖；保留旧文是为了保存独有纠错材料，不表示旧定义仍现行。
6. `_纠正档案_20260716_zx与剧本人物锚.md` 已补齐 `type/is_a/parent/priority/explains/covered-by/scope-lock`；其锁定范围仅限明确纠错事项。
7. z 与 zx 的现行定义分别读取 `【z信息量卡v2.2】` 与 `【zx信息量卡v2】`；纠正档案只解释形成过程，不得并列覆盖。
8. `【zx信息量卡v2】.md` 的文件名与正文版本 `v2.2` 不一致，属于文件身份风险；本轮只记录，不重命名，避免破坏现有链接。