---
type: ten-yuan-fire-axis-state-sync
authority_level: L4
knowledge_status: evidence-locked
status: state-correction
axis: fire
pair: zn-x
criterion_version: current-layer-specific-anchor-gap-v2_20260829
may_override_canonical: false
created: 2026-09-05
fact_confidence: 99
classification_confidence: 99
counter_increment: false
work_increment: false
---

# 火轴状态同步｜《卢旺达饭店》Paul 已由 deferred 转 negative，但实时清单仍停在旧账

## 0｜current 对齐

写前 `main@cb6cd5f5203be0e57cec2fdb9e1f4bcb217d4f3b`。按 L0/L1 启动纪律复核 recent commits、L1 十元—五行正本路由、zn/x current 信息卡与准度/补卡路由、火轴待审议清单、研究总纲、strict-v2、x-scope 与 protected-range current。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

本轮只处理一个真实高价值缺口：上一提交已经把《Hotel Rwanda / 卢旺达饭店》Paul Rusesabagina 从 strict-v2 `deferred former positive` 重分类为 `negative guard`，但 realtime `zn-x火轴待审议清单.md` 的 A5 与 B ledger 仍停在旧值。

## 1｜源证据已经锁定

源记录：
`运行记录_zn-x-strict-v2延期转负向_卢旺达饭店_Paul酒店保护成功由Paul管理操作_住客共同外联_Sabena产权投资动机_警方与外部军政节点共同完成故subject-specific-x归因不足_20260905.md`

源 commit：`cb6cd5f5203be0e57cec2fdb9e1f4bcb217d4f3b`

源记录已经明确：

```text
strict-v2 verified positive: 1 / 1 works（不变）
deferred former positives: 4 / 4 works → 3 / 3 works
negative guards: 7 / 4 works → 8 / 5 works
```

该变化是同一案例在同一 criterion_version 下移动账本，不是新增一个 control 或新增一部作品。

## 2｜为什么必须同步

realtime registry 当前仍写：

```yaml
v2_deferred_former_positive_controls: 4
v2_deferred_former_positive_works: 4
v2_negative_guards: 7
v2_negative_guard_works: 4
```

这会产生真实调度错误：P0 会继续把 Paul 当作“仍可能被新证据救回的延期案”，而 evidence truth 已经把它锁成负向护栏。

因此 current effective truth 应解释为：

```yaml
strict_v2_verified_positive_controls: 1
strict_v2_verified_positive_works: 1
strict_v2_deferred_former_positive_controls: 3
strict_v2_deferred_former_positive_works: 3
strict_v2_negative_guards: 8
strict_v2_negative_guard_works: 5
```

## 3｜本轮不重做案例，只复核核心边界

### zn
Paul 当前窗口中的救人排序仍可独立过 `zn`；本轮不撤销该端。

### x / 权限结构
subject-specific x 只到酒店内部运营、房间安置、物资使用与局部进入协调，不把 Sabena 产权、住客关系网、国家警察、军方、法国外交与联合国等外部节点后验拼进 Paul 的 x。

### 对象层 / current window
同一酒店避难窗口、同一批当前受屠杀风险的住客，same current window 与 same object layer 本身不构成失败点。

### 最近邻

```text
内部运营 / 安置 / 资源调配 x
≠
对外部屠杀风险的稳定排除 x
```

### 拿掉 / 反向
拿掉救人原则，酒店管理 x 仍有独立运营用途，故 `zn→x` 不干净；拿掉 Paul 的酒店运营 x，同窗中仍有住客外联、Sabena、警方、军方与外交节点提供现实保护锚点，故 `x→zn` 失败。

### 第三因素冻结
住客并行外联、Sabena 产权与投资动机、国家警察/军方强制力、法国外交、联合国存在、Paul 的现金/酒/关系等执行放大手段全部继续分账，不倒灌成 subject-specific x。

## 4｜判定

```yaml
strict_v2: negative_guard
previous_status: deferred_former_positive
new_status: negative_guard
x_scope_increment: 0
protected_range_increment: 0
new_control_increment: 0
new_work_increment: 0
```

本轮是状态纠偏，不重复增加任何 control / independent work。

## 5｜下一高价值缺口

P0 只保留真正仍处 deferred 的 3 部作品，并继续寻找第二份跨机制 strict-v2 verified positive；若无事实≥95、分类≥95的候选，则转 P1 path-set completeness audit / 真正有效路径耗尽。Paul 不再进入 deferred 自动复采名单。

本记录不修改 L1/L2 canonical，不自动升格 pending-review 槽。