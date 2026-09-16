# 动态链视觉化 v1

本目录用于把已确认的十元/五轴动态链转译为可观察、可生成、可审核的视觉结构。

## 当前状态

- 理论层：不在本目录重新证明动态链是否正确。
- 视觉层：建立 Visual Operation Library，并通过低题材盲测验证区分度。
- 当前版本：v1.0
- 当前阶段：Definition Frozen / Image Validation Pending

## 2026-09-17 上游研究补充

开始新一轮 Dynamic Visual 前，先读：

1. `08-生克补动态链研究/DAILY_20260916-17_动态链系列研究知识包.md`
2. `08-生克补动态链研究/动态链质量评估器_v1.0_20260917.md`
3. `08-生克补动态链研究/NEXT_动态链系列研究队列_20260917.yaml`
4. `01-十元系统/06-视觉化研发/03-十元生克补/audit_schema_v0.1.yaml`

统一分层：

```text
Style Grammar
= 起点 / 终点静态结构是否可辨

Relation Visualization
= 生 / 克 / 补关系是否真实发生

Dynamic Chain Evaluator
= 链条和边本身是否高质量、有生产力

Dynamic Visual Operations
= 结构怎样从 A 变成 B 并被画出来
```

不得互相替代。

## 视觉操作母型

1. REWIRE — 结构改写
2. REDISTRIBUTE — 分流 / 换轨
3. CONVERGE — 压缩 / 收束
4. GROW — 扩张 / 生长
5. ENCLOSE — 包围 / 闭合
6. INVADE — 侵入 / 穿界
7. DETACH — 脱离 / 断连
8. RECIRCULATE — 回流 / 循环
9. REPLACE — 置换 / 替代
10. TWIST — 扭曲 / 连续变形

## 核心原则

> 动态链视觉化不是给十元分配固定图标，而是：十元动态链 → 视觉操作 → 可观察结构变量 → 图像。

> 视觉实验失败只能修视觉操作层，不能反向改写十元理论。

> 单帧优先采用“连续变形”，禁止依赖“左边=过去 / 右边=未来”的伪动态并置。

> Visual Operation 只有在上游链条已能说明 `mechanism + Δ + residue + next_affordance` 后才进入视觉转译；不要拿视觉母型替剧情补因果。

## 当前文件

- `visual_operation_library_v1.md`：10 个视觉母型定义、最小证据、拒判条件与混淆对
- `dynamic_visual_generator_prompt_v1.txt`：低语义结构图生成 Prompt
- `dynamic_visual_auditor_prompt_v1.txt`：无标签盲审 Prompt
- `dynamic_visual_audit_schema_v1.json`：审核输出 JSON Schema
- `dynamic_visual_freeze_gate_v1.md`：冻结标准
- `tenyuan_dynamic_visual_bridge_template.yaml`：十元动态链 → Visual Operation 桥接模板
- `dynamic_chain_theory_source_gate_v1.md`：理论输入闸门
- `generate_blindset_v1.py`：可复现生成 10×10=100 条任务 CSV / JSONL 及盲测顺序
- `dynamic_visual_blind_order.csv`：固定 100 条无标签盲测顺序

## 生成测试集

运行：

```bash
python generate_blindset_v1.py
```

会生成：

- `dynamic_visual_100_tasks.csv`
- `dynamic_visual_100_tasks.jsonl`
- `dynamic_visual_blind_order.csv`

其中任务表采用 10 个母型 × 每类 10 个 seed slot，共 100 条。除目标结构变量外，镜头、材质、光照、人物数量、题材复杂度与负面约束全部锁定。

## 新的低图耗验证顺序

不要一恢复生图额度就直接把 100 张倒进炉子里。

```text
Stage 0
检查起点 / 终点 Style Grammar 是否可辨

Stage 1
10 母型小规模预检
→ 查 Generator 格式错误
→ 查明显母型坍缩
→ 查 Auditor 无法读取的结构

Stage 2
通过后才运行固定 100 样本

Stage 3
隐藏标签 + blind order
→ prediction / secondary_prediction / confidence
→ 混淆矩阵

Stage 4
只重开高混淆母型

Stage 5
通过 Freeze Gate 后进入半抽象空间 / 角色 / 场景 / 分镜
```

## 单帧最低动态证据

优先同时出现：

```text
旧结构残迹
+ 正在发生的转换
+ 新结构征兆
```

仅“过去画左边、未来画右边”不计入连续变形证据。

## 下一阶段

按 `08-生克补动态链研究/NEXT_动态链系列研究队列_20260917.yaml` 执行。

当前顺序：

```text
Evaluator R5 跨题材盲测
→ ZX/NX 静态端点六图
→ 生克补首批 8 条 T1
→ Dynamic Visual 10母型预检
→ 固定100样本盲测
→ 黎黎隆 R6 母链筛选
```
