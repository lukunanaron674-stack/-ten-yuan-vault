# 五行轴角色生成器｜世界观 recent_structure_exclusion 压力测试 R9｜2026-09-09

> 范围：仅验证应用映射层与生成逻辑；不修改 L1/L2 canonical、十元信息卡、准度卡、正式关系卡或 behavior evidence。

## 1｜本轮目标

连续 R3-R8 中多个十元的 60 样本全局 duplicate_structure_rate 都稳定在约 91.67%，根因不是 concrete noun 太少，而是每个 symbol × 世界观通常只有 5 个 primary structure。继续换十元刷样本不会解决局部连撞。

本轮因此选择“世界观采样去重模块”而不是新增理论结构：新增 deterministic `exclude_structure_ids` sidecar，只过滤当前映射池中的 structure_id，不改变 symbol，不改变 canonical，不把题材/职业/颜色/情绪写入结构身份。

## 2｜样本与覆盖

- 样本：60
- single：20
- multi：20（nx primary + zx secondary，职责显式分离）
- graph：20
- 题材：中古奇幻 / 太空歌剧 / 赛博都市 / 军事科幻
- primary 测试对象：nx × 世界观；current-main 映射仍为 NX-W-001..005 共 5 个不同 structure_id
- recent window：每种模式独立保留最近 2 个 primary structure_id 并在下一次采样时排除

结构链：`symbol → sub_semantic/changed_variable → relation_shape → module_grammar → concrete_candidate → genre_translation`。

## 3｜八项指标

- semantic_drift_rate：0/60 = 0%
- neighbor_leak_rate：0/20 = 0%
- mode_failure_rate：0/60 = 0%
- duplicate_structure_rate：55/60 = 91.67%（全局 unique structure 仍只有 5；recent exclusion 不伪造新结构）
- concrete_noun_concentration：7/60 = 11.67%
- life_order_error_rate：NOT_IMPLEMENTED
- seed_reproducibility：20/20 = 100%
- lock_integrity：保留原 generator lock contract；跨模块 selective lock 仍为 NOT_IMPLEMENTED，当前只能记 PARTIAL_ONLY

新增局部去重指标：

- adjacent_repeat_rate：0%
- rolling_window_2_collision_count：0
- exhausted-pool gate：PASS，5 个 nx structure_id 全部排除时显式 `DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED`

结论：recent exclusion 能解决“短窗口连续撞同骨架”，但不能降低全局 91.67% duplicate_structure_rate。后者是 projection 池只有 5 个结构的数学结果，不能靠采样算法冒充理论多样性。

## 4｜固定检查

1. 三模式算法差异仍存在：single 仅 primary；multi 保留显式 primary/secondary/responsibility/relation_source；graph 保留完整 node-edge 链。
2. single recent exclusion 不允许切换 symbol；本轮 neighbor leak = 0。
3. multi 不使用 weight/percent/ratio；secondary zx 不能掩盖 primary nx structure 重复。
4. graph 没有强弱值；pseudo-vector 继续由原 guard 负责。
5. concrete noun 不进入 structure_id；最高单名词集中度 11.67%。
6. 颜色、职业、身份、题材、情绪没有进入 exclusion key，也不能反向定义 symbol。
7. 世界/服装/发型/道具/人生跨模块语义去重：NOT_IMPLEMENTED。
8. 人生时间顺序：NOT_IMPLEMENTED。
9. nx × zx 可作为当前同轴压力参照；本轮 recent exclusion 只针对 nx primary，不修改邻居定义。
10. genre_translation 与 concrete_candidate 仍由原 generator 分槽；recent exclusion 不参与翻译。
11. same seed + same exclusion policy：20/20 reproducible。
12. locked module：sidecar 不重写原 lock 机制；真正跨模块 selective lock 仍 NOT_IMPLEMENTED。
13. 全局模板化仍高，但局部连续重复被压到 0。

## 5｜代表性失败样本与失败链

### F01｜全局重复仍存在
`NX-W-001 → 其他 seed 再次命中 NX-W-001 → concrete noun 可变化 → structure_id 不变 → GLOBAL_DUPLICATE_REMAINS`

### F02｜5 结构池无法制造第 6 个结构
`最近窗口排除 2 个 → 仍只能在剩余 3 个已有 structure 中采样 → 全局 unique=5 → duplicate_structure_rate 仍 91.67%`

### F03｜池全部排除
`NX-W-001..005 全进入 exclusion → remaining pool=0 → DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED`。正确行为是阻塞，不得静默换 zx/zn/nz。

### F04｜跨模块去重缺口
`世界观 recent exclusion 已可执行 → 服装/发型/道具/人生没有统一 structure exclusion contract → CROSS_MODULE_DEDUPE_NOT_IMPLEMENTED`

### F05｜人生顺序缺口
`生成器当前没有 life-event timeline runtime → 无法验证出生→成长→反噬→结局随机抽样顺序 → LIFE_ORDER_NOT_IMPLEMENTED`

## 6｜实际修复

新增 `实现/recent_structure_exclusion_v0.1.js`：

- `exclude_structure_ids` 必须是数组；
- 去重并排序，保证 exclusion policy provenance 稳定；
- 仅按 `generator_core_v0.2.structureId()` 过滤；
- single / multi / graph 都可旁路使用；
- 不改变 symbol；
- 原 rejected / pending-review gate 仍优先；
- 若 exclusion 真正耗尽某个请求的 symbol × module 池，显式抛出 `DATA_BLOCKED_RECENT_STRUCTURE_EXHAUSTED`；
- 输出记录 `policy_version` 与实际 `excluded_structure_ids`。

新增 `实现/recent_structure_exclusion_v0.1.test.js`，覆盖 single / multi / graph、reproducibility、pool exhaustion、pending gate、lock contract。

## 7｜ACTUAL_RUNTIME 边界

执行环境 Node v22.16.0。

本轮实际运行：

- 60 样本 focused stress harness：single 20 / multi 20 / graph 20；
- adjacent repeat = 0；rolling-window-2 collision = 0；
- same seed + same exclusion = 20/20；
- exhausted pool gate = PASS；
- exclusion sidecar focused unit harness = 8/8 PASS。

当前执行环境没有 checkout 完整 GitHub 工作树，因此 focused runtime 使用 current-main generator contract 与 current-main NX/ZX 映射结构数/候选层重建目标运行环境；仓库内新增 test 文件会直接 require current-main `generator_core_v0.2.js` 与 `世界观_机器映射_v0.1.json`。不得把本轮 focused runtime 冒充完整仓库 suite PASS。

## 8｜下一轮最高风险

最高风险已从“短窗口连续重复”转移为两件事：

1. recent exclusion 目前是 sidecar，尚未形成 generator core 的版本化正式 option；在完整仓库 suite 真跑前不应收紧默认路径。
2. 全局 duplicate_structure_rate 仍为 91.67%。这不是 recent exclusion 能解决的问题。下一步更值得实现的是跨模块结构多样性审计或 life timeline runtime，而不是为了数字降低去扩写未经证据支持的新 canonical/映射结构。
