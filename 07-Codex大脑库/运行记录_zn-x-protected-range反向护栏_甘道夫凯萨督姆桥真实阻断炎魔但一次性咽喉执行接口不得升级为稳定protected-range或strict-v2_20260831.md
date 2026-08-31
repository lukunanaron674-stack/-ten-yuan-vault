---
axis: zn-x
research_layer: L4
knowledge_status: evidence-locked
criterion_version: strict-v2-current
sample_type: protected-range-negative-guard
work: The Lord of the Rings - The Fellowship of the Ring
character: Gandalf
stage: Bridge of Khazad-dum
fact_confidence: 99
classification_confidence: 98
protected_range_positive_increment: false
protected_range_negative_guard_increment: true
strict_verified_positive_increment: false
zn_increment: false
x_scope_boundary_guard_increment: true
---

# zn-x protected-range 反向护栏｜甘道夫凯萨督姆桥

## 研究问题

真实风险进入、主体自己的能力真实阻断风险、受保护对象成功脱离危险，是否足以锁定 stable protected-range x，甚至进入 strict-v2？

结论：不够。本例高纯证明“成功保护结果”与“稳定 protected-range x”必须分账。一次性咽喉阻断/执行接口不能自动升级为稳定受保护范围。

## 事实窗口

- Fellowship 在 Moria 被 Balrog 与 Orcs 追击，向东侧出口撤离。
- Gandalf 命其他成员先过 Bridge of Khazad-dum，并独自留在桥上阻挡 Balrog。
- Balrog 真实进入该咽喉风险窗口并攻击 Gandalf。
- Gandalf 直接对抗并破坏桥面，使 Balrog 坠入深渊；Fellowship 因而继续逃出 Moria。
- Balrog 的鞭子随后缠住 Gandalf，将他拖入深渊。

## zn 独立判定

本轮不锁 zn。

可以描述 Gandalf 当下优先让 Fellowship 脱险，但“保护同伴”“牺牲自己”“履行领队责任”都不能自动等价为 current canonical 下独立成立的不可轻易让渡内部原则。若不先独立证明 zn，则不得用其保护结果反推 zn。

## x 权限结构

actor: Gandalf
object: Bridge of Khazad-dum chokepoint / Fellowship escape route immediately behind the bridge
permission_type: access-route blocking / exclusion attempt / destructive denial of passage
scope: single chokepoint, momentary local route
term: encounter window only
revocability: not meaningfully applicable; bridge is physically destroyed
return_obligation: none\same-layer_pre-effect_veto: none observed
global_override: Balrog can contest physically; no stable institutional override layer
ultimate_title: not tested
decision_structure: unilateral
consultation_structure: single-node
final_decision_structure: unilateral on the immediate blocking act
execution_structure: direct physical/magical action by Gandalf
co-decision_nodes: none

### x 判定

锁定：Gandalf 对“当前桥面通行状态/咽喉路线”具有一次性现实改变能力，并实际阻断 Balrog 继续从该桥通过。

不锁定：对 Moria 整体、Fellowship 所处全部空间、或一个可持续反复调用的 protected range 的稳定管理/排除 x。

## protected-range risk-test

boundary-on: 仅桥这一物理咽喉边界明确
object-inside: Fellowship 在风险发生时正越过边界并迅速离开，不满足“对象稳定留在受保护范围内”的强正向构型
real-risk-enters: true
subject-specific-x-changes-risk: true，Gandalf 自己阻断并破桥
third-party-primary-protection: false
stable-protected-range: false / not established

因此本例是“risk-test 成功 + protected-range 前提不足”的高纯反向护栏。

## 拿掉测试

拿掉 Gandalf 的桥上阻断与破桥，现有事实链中没有等价节点能解释 Balrog 为何在该咽喉被立即截断，故一次性 route-blocking x 真实成立。

但拿掉“稳定 protected range”假设，Fellowship 成功逃离、Balrog 被阻断的全部事实仍然成立。结果只需要一次性 chokepoint denial，不需要假设 Gandalf 已持续掌握一个可反复保护的空间范围。

## 反向测试

若要从此类材料升级 protected-range 正向，至少应看到：
1. 自然可识别的范围在风险前已稳定成立；
2. 受保护对象持续留在该范围内，而不是通过边界撤离；
3. 外部风险多次/持续撞击范围；
4. 主体 current x 可稳定、重复地排除/改道风险；
5. 保护效果不是一次性摧毁入口、瞬时战斗或对象成功逃走后才成立。

## 第三因素冻结

冻结 Gandalf 的身份、巫师能力标签、领队地位、牺牲、最终胜负、Balrog 后续死亡、Fellowship 最终到达 Lothlorien。只保留桥面、风险、主体动作与即时结果，结论仍是：一次性咽喉阻断 x 成立，但 stable protected-range x 不成立。

## 最近邻排除

- 能力强 ≠ x；本例只因能力实际改变特定路线状态才记 route-blocking x。
- 保护意图/责任 ≠ zn。
- 成功救人 ≠ stable protected-range。
- 一次性机会/执行接口/决定性结果不得替代 strict-v2 双向门。

## strict-v2

不启动正向计数。

原因：
- zn 未独立通过；
- 被测 x 是一次性 chokepoint execution/denial interface，而非稳定自然对象构成型 protected-range；
- object 在关键窗口通过边界撤离，不满足当前 P1 强正向的 object-inside/stable-range 构型；
- 即使保护结果高度成功，也不能把“成功结果”事后拼成 composite x。

strict-v2 verified positive: +0。

## 新护栏

> protected outcome ≠ protected-range x。

> real risk-test success + subject-specific blocking ≠ stable protected-range，当被测 x 只是一次性 chokepoint denial、对象靠越界撤离完成脱险时尤其如此。

> P1 的 object-inside 不是装饰字段：它用于区分“我稳定守住一个范围”与“我在出口挡一下，让对象跑出去”。

## 统计变化

- protected-range positive: +0
- protected-range negative guard: +1 control
- x-scope boundary guard: +1 control
- strict-v2 verified positive: +0
- zn: +0
- deferred: +0
- independent-work count：仅在 protected-range-negative-guard 同 criterion_version 统计槽中新增《The Lord of the Rings》1 work；不得与普通 x-scope / strict work 计数混并。

## 下一步

继续 P1，但只收更强构型：对象持续留在自然边界内，外部风险真实进入/撞击，主体自己的稳定 x 多次或持续排除/迫使风险改道，且不存在第三方主要保护节点。优先 stable territory / ward / entrusted enclosure，而非门口陷阱、桥梁断路或一次性战斗。
