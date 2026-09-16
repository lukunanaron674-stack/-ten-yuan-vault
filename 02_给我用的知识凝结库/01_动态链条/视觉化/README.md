# 动态链视觉化 v1

本目录用于把已确认的十元/五轴动态链转译为可观察、可生成、可审核的视觉结构。

## 当前状态

- 理论层：不在本目录重新证明动态链是否正确。
- 视觉层：建立 Visual Operation Library，并通过低题材盲测验证区分度。
- 当前版本：v1.0
- 当前阶段：Definition Frozen / Image Validation Pending

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

## 下一阶段

1. 生成 100 张低题材结构图。
2. 隐藏标签并按固定 blind order 排序。
3. 独立盲判并记录 prediction / secondary_prediction / confidence。
4. 统计真实混淆矩阵。
5. 只修高混淆母型。
6. 通过 Freeze Gate 后，再进入半抽象空间与题材转译。
