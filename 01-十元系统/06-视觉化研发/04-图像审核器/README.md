# Ten-Yuan Visual Auditor · 十元图像审核器 v1

这是当前十元图像审核器的工程入口。

## 当前状态

- R1 / R1.5：十元视觉定义、困难边界、真实素材筛选已完成
- R2：TY-VIR 视觉事实提取规范已完成
- R3：十元 Gate 判定器 v1 已完成
- R4：去捷径 / 反事实 / 强制区分 / 序列扰动协议已完成
- R5：本地分类器与回归脚本已完成

**注意：** 当前工程逻辑 smoke test 通过，不等于真实图像盲审准确率。真实 10×10 混淆矩阵仍需独立 Blind Set 回归。

---

## 核心流水线

```text
真实图 / 2–4帧序列
↓
R2：只抽视觉事实，不猜十元
↓
TY-VIR
↓
R3：读取 TY-VIR，按 Gate 判十元
↓
R4：去捷径 / 反事实 / 强制区分 / 乱序删帧
↓
R5：自动回归与版本比较
```

---

## 文件

- `master_spec_v1.0.md`：十元图像审核器总规范
- `R1.5_Final_HardCase_Run.md`：XZ / NX / XPZ 最终困难样本结果
- `R2_extractor_prompt.md`：视觉事实提取 Prompt
- `R2_ty_vir_schema.json`：TY-VIR schema
- `R3_classifier_spec.md`：十元判定器说明
- `R3_gates.json`：10 个十元 Gate
- `R4_stress_test_plan.json`：压力测试协议
- `R5_auditor.py`：本地 Gate 分类器
- `R5_regression.py`：批量回归脚本
- `engineering_smoke_test.json`：工程逻辑 smoke test
- `STATUS.json`：当前研发状态

---

# 最简单的用法

## 用法 A：人工 / ChatGPT 审一张图

### 第一步：R2

把图片或 2–4 帧序列交给视觉模型，并同时提供 `R2_extractor_prompt.md`。

要求模型：

> 不猜十元，只输出 TY-VIR 视觉事实 JSON。

保存为：

```text
sample_vir.json
```

### 第二步：R3

在本目录执行：

```bash
python R5_auditor.py sample_vir.json R3_gates.json
```

输出最高的 3 个候选十元及 Gate 命中情况。

---

## 用法 B：批量回归

准备 `manifest.csv`：

```csv
id,target,vir_path
001,XZ,data/001.json
002,NX,data/002.json
003,XPZ,data/003.json
```

执行：

```bash
python R5_regression.py manifest.csv R3_gates.json regression_out.json
```

得到：

```json
[
  {
    "id": "001",
    "target": "XZ",
    "pred": "XZ",
    "score": 1.0,
    "correct": true
  }
]
```

这个结果才可以继续做真实混淆矩阵。

---

## 用法 C：审核生成图是否真的符合指定十元

例如你要求生成一张 NX 图：

1. 先生成图，不把 Prompt 交给审核器。
2. R2 只看图，输出 TY-VIR。
3. R3 分类。
4. 如果 primary ≠ NX，直接判未命中。
5. 如果 primary = NX，再按 `R4_stress_test_plan.json` 做：
   - 去颜色
   - 去表情
   - 去文字/UI
   - 反事实
   - 删帧/乱序
6. 压力测试后仍成立，才进入 Gold 候选。

---

## 三个最重要的困难 Gate

### XZ

```text
near-threshold
+ small trigger
+ threshold crossing
+ systemic high-gain response
```

普通多米诺、普通连锁、爆炸、大力破坏，都不能自动算 XZ。

### NX

```text
原有权益/份额
→ 实际让渡
→ 自身份额下降
→ 他人获得/关系继续
```

帮助别人、站在边缘、单次礼貌、被排斥都不能自动算 NX。

### XPZ

```text
internal content
→ selected presentation layer
→ audience reads it
→ audience response
```

面具、换装、包装、UI 本身不能自动算 XPZ。

---

## 推荐本地工作目录

```text
04-图像审核器/
├─ README.md
├─ master_spec_v1.0.md
├─ R1.5_Final_HardCase_Run.md
├─ R2_extractor_prompt.md
├─ R2_ty_vir_schema.json
├─ R3_classifier_spec.md
├─ R3_gates.json
├─ R4_stress_test_plan.json
├─ R5_auditor.py
├─ R5_regression.py
├─ engineering_smoke_test.json
├─ STATUS.json
├─ data/
│  ├─ images/
│  ├─ sequences/
│  └─ vir/
└─ regression/
```

## 下一阶段

不再继续发明 R1.5 规则。接下来只做：

```text
真实去标签素材
→ 独立 R2 提取
→ R3 分类
→ R4 压力测试
→ R5 回归
→ 真实混淆矩阵
```
