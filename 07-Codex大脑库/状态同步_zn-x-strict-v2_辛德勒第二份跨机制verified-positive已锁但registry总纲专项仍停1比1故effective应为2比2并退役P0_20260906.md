---
type: ten-yuan-fire-axis-state-correction
authority_level: L4
knowledge_status: evidence-locked
status: state-correction
axis: fire
pair: zn-x
criterion_version: current-layer-specific-anchor-gap-v2_20260829
source_evidence_commit: 971124cb0733276f0e147d82708f18172f3f7e03
write_base_main: 37ffd41529a65d415c1d809ad1ca10f410d114fc
strict_v2_verified_positive_controls_effective: 2
strict_v2_verified_positive_works_effective: 2
control_increment_this_file: 0
work_increment_this_file: 0
may_override_canonical: false
created: 2026-09-06
---

# 状态同步｜strict-v2 第二份跨机制正例已锁，effective 应为 2/2

## 0｜写前复核

本轮按 latest `main@37ffd41529a65d415c1d809ad1ca10f410d114fc` 重读火轴 realtime registry、研究总纲、strict-v2、x-scope、protected-range 与最近 commits。L1 v1.6 继续规定火轴为 `zn ↔ x`，主题领域为本体；L4 不得修改 L1/L2 canonical。木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

写前发现一个会直接误导下一轮采样的状态漂移：

- `971124cb0733276f0e147d82708f18172f3f7e03` 已把《辛德勒的名单》Brünnlitz 阶段锁为 current strict-v2 第二份跨机制 verified positive，并明确计 `+1 control / +1 independent work`；
- 但 `zn-x火轴待审议清单.md`、`zn-x火轴研究总纲_20260827.md`、`待审议问题_zn-x严格补中x是否为zn不可替代现实落点边界_20260827.md` 写前仍登记 `verified positive = 1/1`，且 realtime P0 仍写“寻找第二份跨机制 verified positive”。

因此 current evidence truth 与三个 L4 工作索引发生漂移。

## 1｜本轮不新增样本

本文件不是第三份 strict 正例，也不重复计算辛德勒。

```text
strict-v2 effective verified positive:
1 control / 1 work
→ 2 controls / 2 works

本文件新增：
+0 control
+0 independent work
```

两份有效正例为：

1. `Defiance / Tuvia Bielski`：membership admission + refugee-community governance；
2. `Schindler's List / Oskar Schindler / Brünnlitz`：externally constrained industrial/employment organization + resource-allocation boundary。

第二份不是 admission/governance 换皮，而是 pre-existing industrial x 在窄 current window 内被 zn 重新定向的 cross-mechanism replication。

## 2｜辛德勒 strict-v2 复核摘要

### zn

先不引用 x 命名：在纳粹系统性迫害与杀戮背景下，眼前犹太囚犯应尽可能被保住生命；即使保护意味着亏损、风险与放弃原获利路径，该排序仍继续。

判：`zn=true`。

### x

只锁 Schindler 对 Brünnlitz factory organization 的 current `management / employment-use / resource-allocation / operational-protection` boundary。

不倒灌：SS/Gross-Rosen 最终暴力主权、transfer list 单方最终裁决、德国许可权、Stern/Pemper/Emilie 等独立节点、最终生存结果。

判：`x=true`，且为 `externally constrained current organizational x`，不是 global/unilateral sovereign x。

### same current window / same object layer

window：1944 秋 Brünnlitz 迁厂与人员转入后至 1945 年 5 月解放前。

object layer：被纳入并维持在 Brünnlitz factory organization 内的犹太囚犯，以及围绕其发生的 employment/use/resource-protection boundary。

### zn→x

早期 Emalia 的商业获利是现实 competing anchor，因此不能把整个工厂生涯一锅煮。窄锁 Brünnlitz 阶段后，持续亏损投入、极低军工产出、伪造生产数字、维持特定囚犯雇佣与组织存在，显示普通商业/军工目的已不足以解释当前 x 使用方向。

判：`zn→x=true`。

### x→zn

拿掉 Schindler subject-specific Brünnlitz organizational x，救人原则仍成立、被迫害者仍存在，但同一 subject-specific employment/placement/resource protection organization 现实消失。第三方批准与协作者不能提供同一主体、同一对象层的 current reality anchor。

判：`x→zn=true`。

## 3｜最近邻 / 拿掉 / 反向 / 第三因素

最近邻 Defiance 的最小差异：

```text
Defiance:
community membership admission / governance

Schindler:
pre-existing industrial-employment organization
→ zn 在窄 current window 中重定向其用途
→ 形成持续 employment/resource protection boundary
```

拿掉 zn：工厂抽象管理仍可存在，但 Brünnlitz 阶段当前这套亏损投入、特定人员雇佣和低产维持方向出现缺口。

拿掉 x：原则仍成立，但 Schindler-subject-specific 的 Brünnlitz organization reality anchor 消失。

反向：早期 Emalia 获利阶段证明“工厂存在”不能反推 zn，必须锁 current window。

第三因素继续冻结 German/SS approval、Stern/Pemper、Emilie、当地供给者、战争末期宏观局势；它们是协作/审批节点，不得 posthoc composite 进 Schindler x。

## 4｜对其他专项的影响

```yaml
strict_v2:
  verified_positive_controls_effective: 2
  verified_positive_works_effective: 2
  deferred: 3/3
  negative: 8/5
  precondition: 21/10

x_scope:
  increment: 0
  state_change: none

protected_range:
  increment: 0
  state_change: none
```

不修改 L1/L2 canonical；不重复增加 canonical calibration。

## 5｜优先级状态修正

P0“第二份跨机制 strict-v2 verified positive”已经完成，应从 active high-value gap 中退役。

在没有 deferred 出现真实新证据或 criterion conflict 前，不再自动寻找第 3 个普通 strict 正例。下一真正高价值缺口回到 path-set exhaustion：

> 同 actor + 同 object layer + 同 actuator/execution layer 或明确 effect family + 同 current window，先完成 actor-indexed relevant path-set completeness audit，再观察 surviving path `n>1 → 1 → 0`，并要求该被测层 target-effect reality-test 同时 OFF。

必须预先冻结：direct repair、bypass、delegated route、parallel authority、emergency interface、alternate execution node、automatic node、third-party node 与 cross-layer substitute。

## 6｜同步债声明

写前 realtime registry / overview / strict-v2 专项仍保留旧 `1/1`。本文件只锁定 evidence-layer 的 effective truth 与 P0 退役，不把未实际修改的三个文件伪称为“已同步”。后续安全全文同步时应把三处 `1/1` 改为 `2/2`，并删除/改写“寻找第二份正例”的 P0 文案。
