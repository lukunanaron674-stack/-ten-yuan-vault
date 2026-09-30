# ROUND8_CONTINUITY_VALIDATION_20261001｜连续真实执行回放

## 结论
**系统级验证：PASS。历史连续成片证据：AMBIGUOUS。**

这不是矛盾：
- 新第8轮协议已经能正确要求 closing_state → opening_state；
- 但旧 B 端真实渲染是在该协议建立前产生，真实输出很多，却没有保存标准化 shot-to-shot continuity state，因此不能把旧片硬判为“连续性通过”。

## 真实证据 A｜MOUSE R35
来源：
- task: `角色魅力实验/B端/tasks/inbox/MOUSE_B_20260924_1110_R35.json`
- results: `角色魅力实验/B端/results/MOUSE_B_20260924_1110_R35_RESULTS.json`
- review: `角色魅力实验/B端/results/quality_reviews/B4_20260924_2035_MOUSE-EAR-MUTANT-001_SCENE-01_R35_KEYFRAME_REVIEW.md`

已证实：
- 4090 实际执行完成；
- actual_completed_runs = 4；
- A/B 两段 run_A/run_B 有真实执行记录；
- 首/中/尾关键帧证据存在；
- 角色/场景输入有真实路径与哈希证据。

不足：
- 没有标准 `closing_state`；
- 没有下一镜 `opening_state`；
- 旧任务没有 `lineage_id / previous_shot_id`。
因此只能证明“真实执行过”，不能证明“与下一镜连续”。

## 真实证据 B｜MOUSE R36
来源：
- task: `角色魅力实验/B端/tasks/inbox/MOUSE_B_20260924_1208_R36.json`
- results: `角色魅力实验/B端/results/MOUSE_B_20260924_1208_R36_RESULTS.json`

已证实：
- status = work_render_completed；
- actual_completed_runs = 4；
- 真实 refs_used：角色图 + SCENE-01；
- run_A/run_B 有真实 seed、work_task_id、output_id、output_sha256；
- 输出 1280×736、24fps、10s 的实际执行记录存在。

R35→R36 判定：
- 同角色、同场景、同动态链结构：有强 lineage 迹象；
- 但 R36 是生产迭代轮，不是被明确登记的“剧情下一镜”；
- 不能把 revision lineage 冒充 story continuity。

**判定：AMBIGUOUS，不升级 PASS。**

## 真实证据 C｜LILLONG R01 / R02
两轮均：
- status = work_render_completed；
- 有真实本地 mp4 输出路径与 output_sha256；
- 1280×736、24fps、真实执行记录存在。

但 R01 / R02 是连续实验迭代，不是带 previous_shot_id 的正式相邻镜头。

**判定：AMBIGUOUS。**

## 第八轮实际发现
旧 B 端的问题不是“没跑过 H3”。恰恰相反，真实渲染不少。
真正缺的是：
**渲染证据有了，但镜头之间没有标准化状态继承。**

所以从新系统起，连续镜头必须强制：
`PASS.closing_state → next.opening_state`

若这个赋值未发生：
- 调度器不得创建下一镜 READY；
- director 标记 CONTINUITY_BLOCKED；
- 不允许靠 prompt 里写“continuing”糊过去。

## 第八轮验收
- 连续性协议：PASS
- 对真实旧 H3 数据的回放：PASS（协议正确识别证据不足）
- 旧数据能否证明连续镜头视觉无跳变：AMBIGUOUS
- 是否发现系统性缺口：YES，已修复为新生产硬门
- 是否伪造连续 PASS：NO

## 下一次真正的 2–3 镜连续生产
第一次使用新 schema 跑出的连续 2–3 个 PASS 镜头，将作为 `CONTINUITY_CERTIFIED_V1` 的首个正式认证样本。
