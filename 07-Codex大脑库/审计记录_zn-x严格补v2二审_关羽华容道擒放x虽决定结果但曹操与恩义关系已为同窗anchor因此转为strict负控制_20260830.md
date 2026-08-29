---
type: ten-yuan-fire-axis-strict-v2-audit
authority_level: L4
knowledge_status: evidence-locked
status: evidence-locked
axis: fire
pair: zn-x
work: 三国演义
character: 关羽
stage: 第50回华容道
sample_type: strict-v2-negative-guard
fact_confidence: 99
classification_confidence: 98
criterion_version: current-layer-specific-anchor-gap-v2_20260829
supersedes_candidate_current_judgment: true
superseded_file: 07-Codex大脑库/候选记录_zn-x严格补_关羽华容道报曹恩原则与关隘擒放处分x因关系anchor竞争暂缓_20260829.md
zn_current: true
x_current: true
zn_x_cooccurrence: true
zn_to_x_gap_filling: true
x_to_zn_gap_filling: false
strict_zn_x_complement_locked: false
strict_v2_negative_guard_increment: true
strict_v2_negative_guard_work_increment: false
may_override_canonical: false
date: 2026-08-30
---

# 审计记录｜关羽华容道：决定性擒放 x 仍不足构成 zn 的 current reality anchor

## 1｜本轮只解一个旧分歧

旧候选已锁到 `99/94 deferred`：关羽华容道里，报曹恩/旧恩义 `zn` 很强，华容道对曹操的当前拦截—放行处分 `x` 也很强；真正悬而未决的是：这项 `x` 到底是 `zn` 的对象构成型 current anchor，还是一次高强度 execution / settlement interface。

本轮按 `current-layer-specific-anchor-gap-v2_20260829` 二审，结论明确：**后者。** 旧候选从 deferred 转为 formal strict-v2 negative guard。

## 2｜剧情事实

《三国演义》第50回：

- 曹操败军进入华容道，军士疲惫，已无力再战；
- 关羽率五百校刀手封住道路；
- 曹操以昔日厚待、旧日情分向关羽陈说；
- 关羽确实回忆曹操旧恩；
- 关羽回马，并命军士散开/让路后，曹操及败军才能通过；
- 因此“拦截还是放行”不是气氛或态度，而是真实改变同一结果的局部军事处分。

## 3｜zn 证据

被测 `zn` 仍沿用旧候选的窄定义：

> 对曾在自己困厄阶段给予实质厚待、保护与成全的人，既然已经承认这份恩义，就不能只在有利时承认；在高代价冲突里仍应给予真实回报。

该原则不是曹操在华容道临时求情后才生成。关羽暂居曹营阶段已经存在“先报曹恩、再归刘备”的报恩结构；华容道只是把这项既有原则推入更高代价冲突。

结论：`zn=true`。

## 4｜x 证据

被测 `x` 只锁当前华容道窄窗口：

> 关羽对曹操败军是否被当前关隘拦截、是否放行的现实军事处分边界。

这里不是“瞬时可以杀”，也不是“一次越权改写”。关羽带兵实际封路，曹军疲惫无力再战；关羽命军士散开以后曹操才现实通过。因此这项 `x` 对当前结果有直接、稳定、可执行的因果作用。

结论：`x=true`。

## 5｜zn→x：成立

拿掉报恩/旧恩义 `zn`，华容道拦截—放行 `x` 仍然存在，但会重新出现明确方向缺口：

- 为什么在既有军令要求擒曹时选择放行？
- 为什么旧恩足以改变当前处分？
- 为什么宁愿承担违令风险也兑现过去承认的恩义？

因此 `zn→x=true`。

## 6｜x→zn：v2 下仍不成立

本轮不再使用已被 canonical backtest 淘汰的“宇宙唯一载体”强门，只问：

> 拿掉华容道这项拦截—放行 `x` 后，当前对象层是否重新失去由该 `x` 才能提供的具体、稳定现实 anchor？

答案仍是 **否**。

同一个 current window 中，报恩 `zn` 已经有不依赖这项军事处分权的现实 anchor：

1. **曹操本人**：恩义指向的现实对象没有消失；
2. **关羽—曹操既有恩义关系**：这段关系早在华容道以前已经成立并持续；
3. **关羽自身对曹操的关系行动选择**：追/不追、帮助/不帮助、公开承认/否认旧恩，都可继续承载同一原则。

因此华容道 `x` 虽然极其关键、甚至直接决定曹操能否通过，但它更准确地属于：

> `high-leverage execution / settlement interface`

而不是：

> `object-constituting current reality anchor`

结论：`x→zn=false`。

## 7｜本轮新增硬规则

> **决定性执行权 ≠ 对象构成型 anchor。**

甚至：

```text
这个 x 直接决定最终结果
≠
这个 x 就自动构成 zn 的 current reality anchor
```

如果 `zn` 在同窗已经由**被作用的人本人 + 既有关系 + 主体自身关系行动**形成明确现实对象，那么“擒/放、留/走”这类高因果杠杆 `x` 仍可能只是强执行接口。

这条与唐僧 strict v2 负控制同属“execution interface ≠ anchor”，但机制不同：唐僧是师徒处分不能创造“不轻伤人命”的生命对象；关羽是军事擒放不能创造早已存在的恩义对象与关系。

## 8｜拿掉、反向与第三因素冻结

### 拿掉 zn

保留华容道 `x`，关羽仍可拦截/放行，但失去为何违当前擒曹任务而放行的内部排序依据。支持 `zn→x`。

### 拿掉 x

报恩原则仍有曹操本人、既有恩义关系与主体关系行动作为同窗 anchor。故 `x→zn` 不成立。

### 反向测试

若要在类似“擒/放”样本中证明 `x→zn`，必须看到：

- 这项处分 `x` 自然形成被测 `zn` 原本缺失的对象范围/我方边界；
- 被作用的人本人、既有关系、主体自身行为不能在同一窗口独立提供等价 anchor；
- 不能把“结果由 x 决定”直接当成“对象由 x 构成”。

### 第三因素冻结

曹操求情只触发当前调用，不足生成 `zn`；关羽旧恩义在此以前已有证据。当前未见一个足以替代报恩 `zn` 的即时战略收益；释放曹操反而有违军令风险。因此 `zn` 端继续高纯。

## 9｜最近邻排除

- `z`：曹操的认可/厚待是关系背景，不等于关羽内部报恩原则本身；
- `xn`：封路、伏兵、放行的军事安排回答“怎么执行”，不回答“为什么放”；
- `zx`：本轮只锁已有局部军权的当前使用，不计扩权；
- 稳定人物本体：不锁，只锁华容道窄对象层。

## 10｜统计影响

```yaml
strict_positive_increment: false
strict_negative_guard_increment: true
strict_negative_guard_work_increment: false
deferred_candidate_count_effect: -1
```

作品数不新增：《三国演义》已在 strict v2 negative works 集合中。

按本轮写入前中枢真实状态：

- strict v2 negative guards：`5 → 6 controls`
- independent works：仍 `3`
- deferred new strict candidates：`1 → 0`

## 11｜治理边界

本记录是 L4 evidence-locked 审计结论；不修改 L1、zn/x 信息卡、准度卡或 L2 `zn补x` canonical。旧候选保留 provenance，但 current research judgment 以本记录为准。