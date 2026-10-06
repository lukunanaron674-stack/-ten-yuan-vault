---
title: MAIN-10｜H3 / LongTake 如何从 10–11s 稳定扩展到长连续生产
tags:
  - lililong
  - problem-map
  - l1-l4
  - main-10
linear_issue: 674-116
r2_phase: R2-B
status: partial
problem_level: MAIN
subproblem_count: 14
---

# MAIN-10｜H3 / LongTake 如何从 10–11s 稳定扩展到长连续生产

Canvas 入口：[[黎黎隆问题系统]]
来源：Linear 674-116｜R1 + R2-B｜comment d9d8b8bf-6ad4-474c-abb7-4644bf290d2d

## Canvas 状态

- 当前状态：PARTIAL
- 本轮判断：已有办法或局部结果，但尚未覆盖完整 DONE 范围。
- Canvas 颜色：橙色（部分完成）
- 正式 Q：本卡不是正式 Q，不自行分配 Q-ID。

## DONE

完成该 MAIN 的关键 SUB 验证；每个验证都有可追溯输入、证据、办法、结果和审核状态，并回写 Canvas。当前：尚未覆盖完整范围。

## STOP

最多 3 轮；缺真实素材、权限或运行回执即 BLOCKED；遇到用户身份/审美审核即 USER_REVIEW；发现与现有 Q 重复则 MERGE；不把候选或 assistant proposal 升格为事实。

## 当前解决办法

- 先按 SUB 拆分可观察问题，再单变量验证。
- 把 BLOCKER、NEGATIVE/PSEUDO、RESOLVED_HISTORY 分开记录。
- 证据不足时保持 OPEN / BLOCKED，不提前改成 DONE。
- 结果回写原问题和 Canvas，不创建平行问题树。

## 子问题 SUB

- SUB-10-01｜为什么 15s 失败率高，10–11s 的稳定边界来自哪里。
- SUB-10-02｜每个 10–11s block 的输入包最少需要什么：角色、场景、动作、镜头、世界规则、音频。
- SUB-10-03｜首帧 / 尾帧 / 中间关键帧在 H3 中各自承担什么约束。
- SUB-10-04｜两个短 block 如何无缝拼成长镜：动作、姿态、空间、镜头速度、光线。
- SUB-10-05｜多 seed A/B 测试怎样判断“稳定”，而不是只挑最好的一条。
- SUB-10-06｜Director 的镜头包如何结构化到 worker 可直接执行。
- SUB-10-07｜4090 / 5090 worker 如何领取、回传、失败重试、避免重复跑。
- SUB-10-08｜H3 生成结果如何进入独立审核，而不是执行器自判 PASS。
- SUB-10-09｜LongTake 到 30s / 60s / 8min 时，应该用真正单长镜还是多 block 视觉连续方案。
- SUB-10-10｜长镜中的相机运动、人物运动、背景运动谁先锁。
- SUB-10-11｜ambient / emotional / role 三类音频字段如何真正进入镜头生产。
- SUB-10-12｜失败日志如何区分模型失败、输入失败、资产失败、连续性失败、调度失败。
- SUB-10-13｜付费云端成本如何限制重试策略与质量门槛。
- SUB-10-14｜H3 输入参考的 source_type / 景别职责 / 宽高比如何在渲染前验证，避免大头图被横向拉伸、错误承担身体与构图职责。

## 2026-10-06｜H3 问题层级与三轮收口计划 v1

### 问题价值
MAIN-10 不是“让 H3 能出视频”，而是把 H3 从**偶发生成工具**升级成**可重复、可审核、可扩展到 30s / 60s / 8min 的生产系统**。它直接决定：角色是否能稳定进入动画、失败是否可定位、4080 是否能无人值守连续生产、LongTake 是否能按 block 局部重跑而不是整条推倒。

### 当前轮次
MAIN-10 按问题系统规则最多 3 轮收口：

- **R1｜证据去重与问题定界：DONE**
  - 已把历史证据分成 PROVEN / PARTIAL / UNTESTED / INVALID_TEST / NEEDS_4080_REVALIDATION。
  - 删除 9 类重复实验，不再浪费 GPU 证明“4080 能跑 H3 / 10s 能出片 / Director 能交 worker”等已知事实。
  - 把旧 T01 视觉结论降级为 INVALID_TEST，但保留其 render_success 工程证据。
  - 收束出 R2 真正需要回答的 7 个未知量。

- **R2｜最小有效实验矩阵：NEXT / ACTIVE**
  - 当前 H04 上游门已通过：674-257 CHARACTER_CARD_READY=PASS；674-258 production_gate=READY_FOR_H3。
  - 只围绕 7 个真实未知跑最小矩阵：短块边界、角色身份、动作复杂度、镜头运动、角色×场景职责、Flat vs CBEC、30s→60s LongTake。
  - 多 seed 嵌入关键实验，不另起一大组。
  - H04 暂缺可绑定场景资产，因此角色×场景 / 部分镜头测试可 BLOCK，不允许拿随机背景补洞。

- **R3｜收口、复验与协议冻结：PLANNED**
  - 只重跑 R2 中 FAIL / UNSTABLE 且有修复价值的最小项。
  - 冻结 H3_PRODUCTION_BASELINE_v1、H3_FAILURE_FAMILY_v1、H3_PROMPT_PROTOCOL_v1、H3_LONGTAKE_PROTOCOL_v1。
  - 30s LongTake PASS 后再放 60s；失败只重跑失败 block。
  - 若 H06/H09 到时 READY_FOR_H3，用 1–2 个角色做模板复制验证，不做无边界扩角色。
  - 最终把状态、证据、办法、结果回写 Canvas；不能证实的保持 BLOCKED/PARTIAL。

### L1–L4 问题楼层
为避免 MAIN-10 的 14 个 SUB 平铺，H3 单独按 4 层管理：

#### L1｜根问题：1 个
1. MAIN-10｜H3 / LongTake 如何从 10–11s 稳定扩展到长连续生产。

#### L2｜问题簇：4 个
1. **INPUT / ROLE FIT｜输入与职责正确性**
2. **SHORT BLOCK｜10–11s 短块稳定与可控性**
3. **ORCHESTRATION / QA｜Director→worker→审核→回执生产链**
4. **LONGTAKE｜30s / 60s / 8min 连续生产**

#### L3｜正式 SUB：14 个
- L2-1 INPUT / ROLE FIT：**3 个**
  - SUB-10-02 最小输入包
  - SUB-10-03 首/尾/关键帧职责
  - SUB-10-14 source_type / 景别职责 / 宽高比 / resize preflight
- L2-2 SHORT BLOCK：**4 个**
  - SUB-10-01 10–11s 边界
  - SUB-10-05 多 seed 稳定判据
  - SUB-10-10 相机/人物/背景运动锁定顺序
  - SUB-10-12 失败类型归因
- L2-3 ORCHESTRATION / QA：**4 个**
  - SUB-10-06 Director packet 结构化
  - SUB-10-07 worker 领取/回传/重试/去重
  - SUB-10-08 独立审核
  - SUB-10-13 成本对重试与质量门的约束
- L2-4 LONGTAKE：**3 个**
  - SUB-10-04 block 接缝连续
  - SUB-10-09 30s / 60s / 8min 长连续策略
  - SUB-10-11 ambient / emotional / role 音频进入生产

#### L4｜当前最小实验问题：7 个
1. 4080 10–11s **边界/复跑稳定性**
2. READY_FOR_H3 条件下的**角色身份稳定**
3. **动作复杂度边界**
4. **镜头运动边界**
5. **角色图 × 场景图职责分离**
6. **Flat vs CBEC 最小有效对照**
7. **30s → 60s block 连续性**

L4 是当前 R2 的实验入口；实验结束后要么进入 PROVEN / PARTIAL / FAIL / BLOCKED，要么回流到对应 L3 SUB，不继续无限拆 L5。

### 当前已解决 / 已证明
- 4080 本地 H3 最小闭环能运行。
- Director packet → worker → receipt 能工作。
- 10s 生成能力已证明，11s 已有成功证据但边界尚未冻结。
- 4090 的运行时排错纪律可迁移。
- HEAD_ONLY 不能承担 BODY/COSTUME/POSE；非等比 stretch 永久禁止。
- AG-07 已有强制 input preflight + H3_AGENT_PLAN_PACKET。
- H04 CHARACTER_H3_CARD + PRODUCTION_PACK 已通过，READY_FOR_H3。

### 当前仍未解决
- 4080 的真实 RAM/VRAM、264f、超时、吞吐、温度、并发边界。
- H04 在正确角色包条件下的双 seed 身份稳定。
- 动作复杂度和镜头运动的受控边界。
- H04 缺场景资产，因此角色×场景职责分离尚不能完整验证。
- Flat vs CBEC 尚无真实 A/B 数据。
- 全时序自动审核（尤其 flicker / action order / LongTake seam）仍为 PARTIAL。
- 4080 30s / 60s LongTake 尚无正式 PASS 证据。


## 2026-10-06｜4090 实战经验吸收 + H3 Agent 接入

来源：[[../../20_Agent系统/03_知识库/增量/RUN-20261001-0815_H3渲染运行经验_4090实战]]；执行代理：[[../../20_Agent系统/01_Agent库/AG-07_H3渲染Agent]]。

### 已验证并可直接进入问题解法的工程纪律
- 任务写入不等于开始渲染；必须有 executor receipt。
- 运行时真实参数以 ComfyUI `/history/<prompt_id>` 为权威，不以模板 workflow 猜。
- failed 先读 error body；文件出现不等于完成。
- 输入声称绑定角色/场景时必须真实给齐；缺失就 BLOCK，不允许“先凑一个图跑”。
- 崩源卡不得无限重试；失败必须分 TRANSIENT / TASK / ENV / INPUT。

### 4090 已验证、迁移为 4080 默认安全基线但仍需复验
- 单实例优先。
- 默认 10–11s block；>264f 不进入批量队列。
- Sage / 模型路径 / 启动参数在渲染前做 preflight。
- 这些当前标记：`MIGRATED_BASELINE_NOT_4080_CERTIFIED`，不能冒充 4080 实测结论。

### 新暴露的小问题：参考图用途与画幅不匹配
现象：大头角色参考直接进入横屏 H3，工作流把图横向拉长。

根因不是“模型偶尔抽风”，而是渲染前缺少：
1. source_type 分类；
2. intended_role；
3. shot_scale_required；
4. aspect_ratio / resize_mode；
5. role_fit 门禁。

已落地到 AG-07 与 RENDER_TASK_SCHEMA v1.1：
- HEADSHOT 只允许锁身份；
- 中景/中全景/全身必须换适合的角色源；
- 永久禁止非等比 stretch；
- 只有 `H3_AGENT_PLAN_PACKET=APPROVED_FOR_RENDER` 且 input_preflight PASS 才能渲染。

### 4080 必须重新标定
- VRAM/RAM 峰值；
- 264f 是否仍为硬极限；
- 模型大小上限；
- 超时阈值；
- 吞吐/温度/并发。

### 真实反例：T01 大头源直接进横屏视频（2026-10-06）
674-216 门禁生效前，H04/H06 头像源被直接用于 10s/11s 视频，共4条。

结果：
- 4/4 render success；
- identity = FAIL/AMBIGUOUS；
- body ratio = AMBIGUOUS；
- camera continuity = FAIL；
- 场景连续仅 PARTIAL。

结论：**“能渲染成功”与“输入角色适配正确”完全是两回事。**
这组证据正式归类为 `NEGATIVE_EVIDENCE_INPUT_ROLE_MISMATCH`，反向支持 SUB-10-14 的 source_type / intended_role / shot_scale / aspect 门禁。

## BLOCKER

（无）

## NEGATIVE / PSEUDO

（无）

## RESOLVED_HISTORY

（无）

## 本轮结果

- 本卡已完成横向问题登记和第一层下钻。
- 当前状态仍由证据覆盖范围决定；子问题解决后再回写 MAIN。
- 详细状态由 Canvas 管理，本卡保存知识、证据和方法。

## 下一步

从 BLOCKER 中选择一个有真实输入、可观察 DONE 条件的 SUB，完成一轮有限验证后回写 Canvas。

