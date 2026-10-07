---
type: validation-p0-state
status: current
updated: 2026-10-08
parent_linear: 674-272
canvas: AI问题解决Canvas/四主问题与社会映射/SOCIAL_TO_US_社会到我们_学习与吸收.canvas
---

# SOCIAL→US｜P0 验证状态

## 当前总状态

- 外部广搜：STOP
- 吸收 R1–R4：DONE
- Validation Canvas：v2
- 真实项目未知：12
- P0：V-GAP01 / V-GAP09 / V-GAP05

---

## V-GAP09｜VLM预审准确率

### 当前判断
**最先执行。**

原因：
- 现有 674-289 已有 H3 视频版本、首中尾帧/视频事实；
- 674-173 是 USER ground truth入口；
- 674-286 已明确 machine precheck 不得替代 USER PASS；
- 当前缺口不是“有没有素材”，而是没有 per-failure-family 的 recall / precision / false-positive / uncertain-rate 统计。

### 下一动作
先不新生成视频：
1. 从已有 PASS / FAIL / PARTIAL 样本中整理最小验证集；
2. 为样本补 failure_family / failure_time_range / USER decision；
3. 冻结 gold label；
4. 机器预审；
5. 计算 per-family 指标；
6. 只有通过的 failure_family 才有资格进入自动拦截候选。

### 状态
READY_FOR_OFFLINE_VALIDATION

---

## V-GAP01｜4080真实性能基线

### 已有事实
现有视频样本已经能锁定 workload 例子：
- H3 / ComfyUI / 4080
- 124 frames
- 5.17s
- 1280×736
- 24fps
- 8 steps
- ref2v

旧 674-210 / 674-174 已明确：
- 性能/稳定性 = WAIT_RUNTIME_TEST
- 需要记录显存峰值、系统RAM、温度、耗时、稳定性等
- 旧问题已 Duplicate，不得复活；执行走当前机器/迁移链。

### 仍缺
- wall_time
- peak VRAM
- peak RAM
- GPU core/hotspot/VRAM temperature
- timeout
- concurrency
- repeated-run stability
- sec_per_output_sec

### 下一动作
由当前本地 4080 执行器对一个冻结 workload 连续运行并写 runtime receipt。

### 状态
WAIT_LOCAL_RUNTIME

---

## V-GAP05｜Reference槽位甜点

### 已有强候选证据
674-289 / H3V-0006：
- Picture1 = character identity
- Picture2 = art style + scene
- reference wiring = FIXED
- AI技术观察：身份与画风场景同时较好

同时已有反事实证据：
H3V-0001 / H3V-0004 reference wiring BROKEN，参考图被静默丢弃，说明“槽位实验”之前必须先保证reference真的进入模型。

### 当前不能宣布的结论
不能据此宣布：
“Picture1身份 + Picture2场景风格 = 全局最优槽位”。

因为：
- USER review 尚未锁；
- 角色/场景样本量不足；
- 尚未和其他合法组合完成冻结对照。

### 下一动作
1. 先取得 H3V-0006 USER decision；
2. 若 PASS/A，再把它设为 baseline；
3. 只增加最小对照，不重新无边界组合爆搜。

### 状态
WAIT_USER_BASELINE_LOCK

---

# P0 执行顺序

```text
1. V-GAP09｜离线VLM验证
   ↓
2. V-GAP01｜4080 runtime baseline（需要本地执行器）
   ↓
3. V-GAP05｜H3V-0006 USER baseline lock
```

实际可并行：
- V-GAP09 可立即离线做；
- V-GAP01 等本机执行；
- V-GAP05 等 USER review。

## 禁止
- 为了V-GAP05先生成大量新reference组合；
- 没有runtime receipt就宣称4080性能已知；
- 没有gold label就宣称VLM准确率；
- 机器技术PASS替代USER canonical PASS。
