# 世界观 recent_structure_exclusion 锁定完整性压力测试 R10｜2026-09-10

## 1｜测试目标

本轮不扩张 canonical 或理论案例，只验证应用层 `recent_structure_exclusion_v0.1` 与 generator lock 的组合行为。主测试对象为 `nx × 世界观`，multi 以 `zx` 作为显式 secondary 压力参照。

写前 current main：`a246f484de88978d5519bb58cd08c637f5c7bcaa`。

本轮重点风险：当某模块已经锁定时，recent exclusion 即使排空该 symbol × module 的候选池，也不应阻断结果，因为锁定模块不参与重抽。

## 2｜样本与覆盖

共 60 个结构化样本：

- single：20
- multi：20
- graph / 无向量尺标：20

题材覆盖：中古奇幻、太空歌剧、赛博都市、军事科幻。

固定中间链：

`symbol → sub_semantic/changed_variable → relation_shape → module_grammar → concrete_candidate → genre_translation`

另外执行 10 个 lock-integrity focused case，覆盖 single / multi / graph，包含 `exclude_structure_ids` 排空全部 `NX-W-001..005` 的情况。

## 3｜发现的真实缺陷

pre-fix `assertNoExhaustedPair()` 会检查所有 requested pair，但不知道模块是否已锁定。

失败链：

`previous 世界观已存在 → locks.世界观=true → exclusion 排空 nx 世界观池 → assertNoExhaustedPair 先于 G.generate 抛 DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED → 锁定模块无法返回`

pre-fix 复现：single / multi / graph = 3/3 失败。

这违反“模块锁定后重抽只改变未锁模块”的应用层硬门。

## 4｜实际修复

`recent_structure_exclusion_v0.1.js` 新增 `isLockedModule(config, module)`。

`assertNoExhaustedPair()` 在检查 pool exhaustion 前跳过已经具有 `previous.modules[module]` 且 `locks[module]=true` 的模块。

没有改变：

- symbol 选择
- mapping 数据
- canonical
- pending-review/rejected gate
- seed 算法
- graph 结构
- multi primary/secondary 职责

新增仓库回归：`locked module bypasses exhausted recent pool in sidecar entrypoint`，直接从 `generateWithRecentExclusion()` 入口覆盖 single / graph / multi；不再像旧测试那样绕过 sidecar exhaustion check。

## 5｜八项指标

| 指标 | R10 结果 |
|---|---:|
| semantic_drift_rate | 0/60 = 0% |
| neighbor_leak_rate | 0/20 = 0% |
| mode_failure_rate | 0/60 = 0% |
| duplicate_structure_rate | 55/60 = 91.67% |
| concrete_noun_concentration | 8/60 = 13.33% |
| life_order_error_rate | NOT_IMPLEMENTED |
| seed_reproducibility | 20/20 = 100% |
| lock_integrity | pre-fix 0/3；post-fix 10/10 = 100% focused |

附加数据：

- unique primary structures：5
- `genre_translation=null`：49/60 = 81.67%
- pseudo-vector violation：0
- single symbol leak：0

`duplicate_structure_rate=91.67%` 仍是全局池只有 5 个 primary structure 的结果，本轮没有通过发明新结构伪造下降。

## 6｜固定检查结论

1. single / multi / graph 仍走不同算法路径，不只是标签变化。
2. single 未发现 `zx` 偷渡。
3. multi primary=`nx`、secondary=`zx`，职责与 relation_source 显式，未使用 weight/percent/ratio。
4. graph 未出现强弱分数或伪向量。
5. concrete noun 不参与 structure_id，不反向定义 nx。
6. 颜色、职业、身份、题材、情绪均未进入判据。
7. 当前仅世界观模块具备完整机器映射；跨世界/服装/发型/道具/人生同义重复审计仍 NOT_IMPLEMENTED。
8. life timeline runtime 仍 NOT_IMPLEMENTED，不能宣称人生顺序通过。
9. 本轮 `nx` 与 `zx` 只作为跨轴压力参照；完整同轴/最近邻自动判别不是本 sidecar 的职责。
10. 已存在 genre translation 时不参与 structure_id；49/60 translation 缺失属于数据覆盖缺口，不得伪造“翻译守恒通过”。
11. 同 seed + 同 exclusion policy 20/20 可复现。
12. 修复后锁定模块在 exclusion 全池耗尽时仍保持 previous，10/10 focused PASS。
13. 全局模板化仍高：5 个结构承载 60 样本。

## 7｜5 个代表失败样本 / 失败链

### F01｜single lock + full exclusion（pre-fix）
`single nx → previous 世界观锁定 → NX-W-001..005 全排除 → DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED → LOCK_INTEGRITY_FAIL`

修复后：返回 previous 世界观，不重抽。

### F02｜graph lock + full exclusion（pre-fix）
`graph nx → previous graph 对应世界观锁定 → 全池排除 → exhaustion check 抢先失败 → graph 无法保留锁定结果`

修复后：锁定 module item 保持，sidecar 不再错误阻断。

### F03｜multi lock + full primary exclusion（pre-fix）
`multi nx(primary)+zx(secondary) → 世界观整体锁定 → nx primary pool 被排空 → sidecar 抛 DATA_BLOCKED → 已锁 primary/secondary 整体无法返回`

修复后：整个已锁 module object 原样保留。

### F04｜GLOBAL_DUPLICATE_REMAINS
`60 samples → only 5 primary structure_id → 55 repeated → duplicate_structure_rate=91.67%`

recent exclusion 只能降低短窗口碰撞，不能制造新的理论结构。

### F05｜GENRE_TRANSLATION_GAP
代表链：`NX-W-005 + 中古奇幻 → concrete_candidate 可生成 → genre_translation=null`。

本轮 49/60 为 null。此缺口只能反馈到应用翻译校准，不得倒逼 canonical，也不得现场自由补写当作验证通过。

## 8｜ACTUAL_RUNTIME 边界

Node：`v22.16.0`。

使用从 current-main 远端回读的 `generator_core_v0.2.js`、`recent_structure_exclusion_v0.1.js` 合同，以及 current `NX-W-001..005` / `ZX-W-001..005` 映射字段构造 focused Node harness，真实执行：

- 60 structured samples
- pre-fix lock exhaustion：3/3 复现失败
- post-fix lock integrity：10/10 PASS
- seed reproducibility：20/20 PASS

当前容器无法 DNS 访问 github.com，因此没有完整 checkout 仓库后执行全 suite。不得把 focused runtime 冒充完整仓库 PASS。

## 9｜未实现能力

- `life_order_error_rate`：NOT_IMPLEMENTED
- 跨世界观/服装/发型/道具/人生的统一结构去重：NOT_IMPLEMENTED
- 真正多模块 selective-lock 压测：当前数据层只提供世界观机器映射，PARTIAL_ONLY
- 自动最近邻与同轴对端判别：不属于 recent-exclusion sidecar，未在本轮实现

## 10｜下一轮最高风险

最高风险已从“recent exclusion 破坏锁”转移为：**跨模块 selective reroll / lock contract 仍没有真实多模块机器映射可压测**。

如果继续生成器线，下一断点应优先建立最小 life timeline runtime 或第二个模块的机器映射执行骨架，使世界观锁定、人生重抽成为真正可执行回归；否则 `life_order_error_rate` 与跨模块 lock 会长期停在 NOT_IMPLEMENTED/PARTIAL_ONLY。
