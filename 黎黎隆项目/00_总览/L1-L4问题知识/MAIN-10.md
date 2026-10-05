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

