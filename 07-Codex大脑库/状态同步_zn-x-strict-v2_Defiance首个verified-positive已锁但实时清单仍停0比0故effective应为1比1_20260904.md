---
type: ten-yuan-fire-axis-state-correction
authority_level: L4
knowledge_status: evidence-locked
status: state-correction
axis: fire
pair: zn-x
criterion_version: current-layer-specific-anchor-gap-v2_20260829
source_evidence_commit: f28af93dea9ad02365cd29ff1fca1a276f590e0b
source_work: Defiance
source_character: Tuvia Bielski
fact_confidence: 99
classification_confidence: 99
counter_increment: false
work_increment: false
may_override_canonical: false
created: 2026-09-04
---

# 状态同步｜strict-v2 Defiance 首个 verified-positive 已锁，但 realtime registry 仍停 0/0

## 1｜本轮为什么处理状态纠偏而不是再采新案例

current main 已存在 evidence-locked 源记录：

- `07-Codex大脑库/运行记录_zn-x严格补v2首个verified-positive_Defiance_TuviaBielski救人原则与家属营地开放准入治理x双向补足_20260904.md`
- source commit：`f28af93dea9ad02365cd29ff1fca1a276f590e0b`

该记录在 current criterion `current-layer-specific-anchor-gap-v2_20260829` 下明确锁定：

```yaml
strict_v2_verified_positive: true
strict_v2_verified_positive_control_increment: true
strict_v2_verified_positive_work_increment: true
fact_confidence: 99
classification_confidence: 97
```

并明确统计变化：

```text
strict-v2 verified positive
0 controls / 0 works
→
1 control / 1 independent work
```

但本轮读取 realtime `07-Codex大脑库/zn-x火轴待审议清单.md` 时，A5、B ledger 与 D/P0 仍保持 `0/0`，并继续把“第一份 verified positive”列为最高缺口。

因此当前真实问题不是再寻找第二个“首个正向”，而是 source evidence 与 working registry 发生状态漂移。

## 2｜current effective truth

在不修改 L1/L2 canonical、不重复增加 control/work 的前提下，current effective strict-v2 ledger 应视为：

```yaml
strict_current_criterion: current-layer-specific-anchor-gap-v2_20260829
strict_v2_verified_positive_controls: 1
strict_v2_verified_positive_works: 1
strict_v2_first_verified_positive: Defiance / Tuvia Bielski
strict_v2_first_verified_positive_source_commit: f28af93dea9ad02365cd29ff1fca1a276f590e0b
```

本状态同步记录自身：

```yaml
counter_increment: false
work_increment: false
```

不得把本同步记录再次算成第二个 strict control 或第二部 work。

## 3｜Defiance 为什么仍满足 current strict-v2，而不是状态误收

### zn

先不用被测 x 命名：面对因身份遭系统性追杀的犹太平民，只要仍有现实保护可能，就不应为了本组短期安全或战斗效率而主动拒绝弱者；尽可能让更多人活下来继续进入最终排序。

该原则已在源 evidence 中冻结：复仇、职位职责、战略收益、一次情绪等 competing anchors 不足解释持续开放接纳；组内“少收人更安全”的真实反向方案反而强化了原则独立性。

### x

对象只锁 Tuvia 对 Bielski family camp / refugee community 的 current membership admission + internal governance / allocation boundary，不把森林、枪、粮食、苏联援助等 posthoc 打包成 composite-x。

### same window / same object layer

锁在 Tuvia 已现实领导 family camp、持续出现新难民、组内真实争论是否继续开放接纳的同一阶段。原则排序对象与 admission/governance 的现实对象保持同层。

### 双向 gap

- `zn→x`：拿掉救人原则，camp leadership 仍在，但面对“少收人更安全”的 competing ranking 时，持续开放接纳失去关键内部排序理由；
- `x→zn`：拿掉 family-camp admission/governance x，原则仍成立，但“把当前求庇护者现实纳入我方持续保护成员集合”的 relevant current reality anchor 出现缺口。

因此本轮不撤回 Defiance，不降级为 deferred，也不改 criterion_version。

## 4｜对其他槽的影响

```text
strict-v2 verified positive effective: 1 control / 1 work
strict deferred former positives: unchanged 4/4
strict negative guards: unchanged 7/4
strict precondition guards: unchanged 20/9
x-scope: +0
protected-range: +0
```

Defiance 的 protected-range 结构本轮不另计；x-scope 结构仅作 strict 支撑，不跨槽重复计数。

## 5｜下一高价值缺口

P0 已从“首个 verified positive 破零”转为：

1. 不同题材、不同对象机制的 strict-v2 adversarial replication，目标是验证 Defiance 是否可跨作品稳定复现，而不是继续证明同一个救援/庇护母型；
2. 若无 ≥95 的第二个不同机制 strict 正向，则转 P1 path-set exhaustion dynamic；
3. deferred former positives 只在出现真实新证据时二审。

realtime registry、strict-v2 专项与研究总纲若仍显示 `0/0`，属于 L4 状态同步债；后续同步时应更新为 effective `1/1`，但不得借同步改变 L1/L2 canonical。
