---
type: local-run-handoff
status: active
version: v0.1
updated: 2026-09-16
module: 十元生克补视觉化
queue: local_run_queue_v0.1.yaml
audit: audit_schema_v0.1.yaml
---

# 本地续跑｜十元生克补视觉实验 v0.1

## 0｜本地 AI / Codex 启动指令

先读取：

1. `01-十元系统/十元生补克表.md`
2. `01-十元系统/06-视觉化研发/03-十元生克补/README_十元生克补视觉化_v0.1_20260916.md`
3. `01-十元系统/06-视觉化研发/03-十元生克补/local_run_queue_v0.1.yaml`
4. `01-十元系统/06-视觉化研发/03-十元生克补/audit_schema_v0.1.yaml`
5. `01-十元系统/06-视觉化研发/低图耗视觉化研发协议_v1.0_20260916.md`

本轮只做十元生 / 克 / 补视觉实验，不修改十元与五轴正本。

## 1｜默认执行范围

先跑 `T1 纯结构`。

每条关系固定三样本：

```text
POS
COEXIST_NEG
SHORTCUT_NEG
```

25 条关系 × 3 张 = 75 张 T1 基础样本。

禁止十宫格；每次只生成一张图。

## 2｜优先批次

先跑：

```text
SHENG-07  nx -> x
SHENG-05  xn -> xz
SHENG-09  x并z -> z
KE-01     xz -> zn
KE-03     xn -> zx
KE-08     z -> nx
KE-09     nx -> x并z
BU-05     xn <-> z
```

原因：这些关系最不适合用“发芽 / 攻击 / 拼图”等老套视觉符号作弊，最能检验视觉机制本身。

优先批次通过后再扩到剩余 17 条。

## 3｜每条关系执行模板

### Step A｜读取正本

从 `十元生补克表.md` 读取当前关系位置与已锁定语义。

若该关系存在 canonical-current 专项文件，优先读取专项机制；不得用本工作台的视觉工作假说覆盖正本。

### Step B｜生成 T1 POS

要求：

- source 十元结构可识别
- target 十元结构可识别
- 生 / 克 / 补关系真实发生
- 只靠边界、路径、占位、连接、完整度、运行能力表达
- 无文字、箭头、UI、颜色编码、武器、夸张表情、魔法特效

### Step C｜生成 COEXIST_NEG

保持 source 与 target 同时存在，但明确不发生关系。

目的：测试审核器是否把“同框”误判为“关系成立”。

### Step D｜生成 SHORTCUT_NEG

故意制造“看起来很像关系”的视觉气氛，但去掉核心结构关系。

目的：测试审核器是否被：

- 大压小
- 黑红
- 危险感
- 成长感
- 对称
- 拼图
- 光效

等捷径欺骗。

### Step E｜审核

按 `audit_schema_v0.1.yaml` 输出：

```text
sample_id
relation_id
source_signature
target_signature
causal_trace
operator_specificity
shortcut_independence
visual_variables
anti_cheat
failure_family
verdict
revision_target
next_action
```

## 4｜阶段闸门

### T1 -> T2

必须同时满足：

```yaml
POS: PASS
COEXIST_NEG: PASS
SHORTCUT_NEG: PASS
source_target_readable: true
relation_readable_without_shortcuts: true
```

否则留在 T1。

### T2 -> T3

T2 用中性物体：

- 建筑构件
- 机械结构
- 几何空间
- 无叙事道具

通过后才进入角色 / 服装 / 场景 / 镜头等项目载体。

## 5｜目录建议

每条关系：

```text
03-十元生克补/
└─ runs/
   └─ {REL_ID}/
      ├─ T1/
      │  ├─ POS/
      │  ├─ COEXIST_NEG/
      │  └─ SHORTCUT_NEG/
      ├─ T2/
      ├─ T3/
      └─ audit/
```

每个样本至少保存：

```text
.png / .webp
.prompt.md
.audit.yaml
```

## 6｜sample_id

```text
VIS-REL-{REL_ID}-{STAGE}-{VARIANT}-{NN}
```

例如：

```text
VIS-REL-KE-01-T1-POS-01
VIS-REL-KE-01-T1-COEXIST_NEG-01
VIS-REL-KE-01-T1-SHORTCUT_NEG-01
```

## 7｜何时停止继续生图

某条关系满足以下条件即可暂时冻结视觉语法：

```text
T1 / T2 / T3 都能读出同一关系骨架
共存负样本不会被误判
捷径负样本不会被误判
至少 3 类载体可迁移
删除颜色 / 表情 / 特效后仍成立
审核器能指出具体结构证据
```

达到条件后写：

`FROZEN_VISUAL_GRAMMAR_{REL_ID}_v1.md`

## 8｜失败优先于“漂亮”

本轮最重要的产物不是好看的图，而是：

```text
什么情况下 source / target 成立但关系失败？
什么视觉变量一改，关系才出现？
什么捷径会导致审核器假阳性？
```

出现真实 failure 时优先记录，不要用提示词装饰把问题盖住。
