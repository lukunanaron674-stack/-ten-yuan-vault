---
type: ten-yuan-fire-axis-boundary-pressure-test
authority_level: L4
knowledge_status: evidence-locked
status: research-control
axis: fire
pair: zn-x
criterion_version: protected-range-risk-test-v1_20260831
work: Home Alone
actor: Kevin McCallister
phase: Christmas-Eve home-defense window
sample_type: protected-range-negative-guard
fact_confidence: 99
classification_confidence: 98
protected_range_v1_verified_negative_guard_increment: true
protected_range_v1_verified_negative_guard_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
x_scope_dynamic_increment: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜《Home Alone》Kevin｜部分防御有效 ≠ stable protected-range

## 0｜启动对齐

本轮写前以 `main@4c978c0498f14967c40ba6a3dc24f32c1399870e` 为准。按 L0/L1 启动纪律重新读取并核对：`AGENTS.md`、文件权力/总入口链、L1 十元—五行正本 v1.6、zn/x current 信息卡、zn/x 准度路由、`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current、protected-range current 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current protected-range ledger 写前为：verified positive `4 controls / 4 works`；verified negative `3 controls / 3 works`；dynamic `1 / 1`。ordinary x-scope 已 pending-review，本轮不堆普通正例。

## 1｜人物 / 阶段 / 样本类型

- 作品：《Home Alone》(1990)
- 人物：Kevin McCallister
- 阶段：Christmas Eve，Kevin 独自在 McCallister 住宅内布置并执行反入侵陷阱，Harry/Marv 实际闯入、追击并最终抓住 Kevin 的连续窗口
- 样本类型：protected-range 新失败机制 / partial-defense-effect guard

## 2｜事实链

1. Kevin 已知 Harry / Marv 将在当晚进入住宅，主动在住宅多个入口与内部路径布置陷阱。
2. 两名入侵者现实尝试从前门、地下室、窗户及住宅内部继续推进；Kevin 的门把手加热、喷灯、结冰、钉子、玻璃饰品、油漆罐等防御节点反复现实生效，使二人受伤、延迟、改变路径或暂时退却。
3. 但风险没有被稳定排除在住宅边界之外：Harry / Marv 实际进入住宅内部，并持续追击 Kevin。
4. Kevin 随后离开本宅，诱导二人进入邻宅；Harry / Marv 最终在那里抓住 Kevin 并准备报复。
5. 最终终止该人身风险的关键节点是 Marley 从后方击倒两名入侵者，随后警方实施逮捕；不是 Kevin 自己的住宅边界 x 单独完成最终排除。

外部事实来源：
- IMDb plot / synopsis: https://www.imdb.com/title/tt0099785/plotsummary/
- screenplay text: https://overblack.org/script/home-alone-1990
- Filmsite plot record: https://www.filmsite.org/homealone.html

## 3｜zn 独立检查

本轮不锁 `zn`。

Kevin 在该窗口的“守家”可由即时自保、保护住宅财物、临时责任感、对入侵者的恐惧/对抗、报警与抓捕目标共同解释。没有足够证据把某一不可轻易让渡、跨阶段保留未来调用资格并能独立排序冲突选项的内部原则锁到 ≥95。

因此禁止：

```text
“Kevin 很勇敢 / 守家 / 不逃”
→ 直接倒推 zn=true
```

## 4｜x 权限结构

```yaml
actor: Kevin McCallister
object: McCallister residence defensive-use boundary
permission_type:
  occupy_use_house: true
  manipulate_local_household_objects: true
  lock_or_prepare_ingress_points: true
  install_and_trigger_local_defensive_traps: true_reality_tested
  exclude_burglars_from_entire_house: false_reality_tested
  detain_burglars: false
  final_person-disposition: false
scope:
  true: local household occupancy/use + defensive manipulation + repeated local ingress interference
  false: stable whole-house exclusion against the tested burglars
term: temporary_home-alone_window
revocability: family/owner structure remains external; not material to tested local defensive-use layer
return_obligation: not_applicable
same-layer_pre-effect_veto: burglars can physically bypass/endure local trap nodes and continue ingress
global_override: physical adversarial breach remains possible
ultimate_title: not_attributed_to_Kevin
decision_structure: unilateral_for_local_trap_setup
consultation_structure: none_material
final_decision_structure: Kevin chooses local defensive measures; cannot unilaterally determine burglars' final custody/status
execution_structure: Kevin-built traps repeatedly act locally; Marley/police later form separate external intervention nodes
co-decision_nodes: none_for_local_trap_setup
```

## 5｜对象层 / current window

被测对象层固定为：

```text
Kevin subject-specific defensive control
of the McCallister residence boundary
against Harry/Marv burglary ingress
```

current window 固定为当晚陷阱开始现实作用至 Kevin 被抓 / Marley介入前后。

不能把：

- McCallister 家庭 ultimate title；
- 警方之后的 arrest；
- Marley 的 physical rescue；
- Kevin 在邻宅的逃跑路径；

打包成 Kevin 自己的 protected-range `x`。

## 6｜关键压力：partial defense effect 是否足以锁 protected-range？

本轮新增的最小差异不是“保护完全没效果”。恰恰相反，Kevin 的防御多次现实改变风险：

```text
risk enters an ingress path
→ subject-specific defensive node fires
→ attacker受伤 / 延迟 / 改道
```

如果只看局部 effect，很容易误判：

```text
“主体的 x 确实改变了真实风险”
→ stable protected-range=true
```

但完整 risk-test 继续向后观察后得到：

```text
boundary-on = yes
object-inside = yes (Kevin / household space)
real risk enters = yes
subject-specific x changes risk = yes
BUT
same tested adversaries still penetrate the protected house
+ continue pursuit
+ ultimately capture Kevin outside/next-door continuation
+ final rescue mainly由 Marley 完成

=> stable protected-range = false
```

锁定：

> **partial-defense-effect / repeated delay / attacker attrition / local rerouting ≠ stable protected-range。**

protected-range 正向要求的不只是“防御影响了风险”，而是被测 subject-specific x 在所声明的同一范围与风险通道上形成足够稳定的阻断、否决或迫使风险无法继续按该范围侵入。若同一 adversary 最终穿透该范围，不能因为前面陷阱很有效就把局部 success 倒灌成 whole-range protection。

## 7｜最近邻排除

### vs 孙悟空花果山 territorial-governance failure

共同点：内部治理/防御能力存在，但外部风险最终进入。

新增差异：Kevin 案例有大量直接、可观察、subject-specific 的局部防御 reality-test success。也就是说，本轮专门排除一种更隐蔽误判：

```text
“保护不是纯声明，它真的多次打中了风险”
≠
“因此 stable protected-range 已成立”
```

### vs 孙悟空画圈 / 柴进丹书铁券

画圈与丹书铁券主要打击“保护声明/名义资格”冒充现实保护。本轮则相反：**现实局部效果确实存在，但范围级稳定 exclusion 仍失败。** 因此不是旧机制换皮。

## 8｜拿掉 / 反向

### 拿掉 Kevin 的 local defensive x

拿掉陷阱、入口准备与局部控制，Harry / Marv 不会遭遇影片中这些具体延迟、受伤与改道。因此 local defensive-use x 的现实作用成立。

### 反向测试

若要锁 protected-range 正向，必须看到同一住宅边界 / 同一 burglary risk-channel 中：

```text
Kevin-specific boundary x
→ 风险进入
→ 被持续阻断 / 否决 / 被迫在边界外改道
→ burglar 未穿透声明的 protected range
→ 结果不是 Marley / police 等第三方主要完成
```

影片实际不满足该反向门。

## 9｜第三因素冻结

- 家庭产权：不能倒灌 Kevin subject-specific x。
- Marley：最终 physical rescue 节点，必须独立分账。
- police：最终 custody/arrest 节点，不能倒灌 Kevin protected-range。
- burglars 的笨拙/受伤：只支持局部防御效果，不支持 stable range exclusion。
- Kevin 报警：是外部援助调用，不等于其住宅边界自己完成风险排除。

## 10｜判定

```yaml
strict_v2:
  result: not_testable_to_positive
  reason: zn not independently >=95; no strict counter increment

x_scope:
  local_defensive_use_x: true
  whole_house_stable_exclusion_x: false

protected_range_v1:
  result: verified_negative_guard
  mechanism: partial-defense-effect-does-not-equal-stable-range-exclusion
  fact_confidence: 99
  classification_confidence: 98
  knowledge_status: evidence-locked
```

## 11｜统计变化

```text
strict-v2 verified positive      0 / 0 works → unchanged
strict-v2 negative               unchanged
strict precondition              unchanged
x-scope ordinary                 unchanged
x-scope boundary                 unchanged
x-scope dynamic                  unchanged
protected-range positive         4 / 4 → unchanged
protected-range negative         3 / 3 → 4 controls / 4 independent works
protected-range dynamic          1 / 1 → unchanged
```

《Home Alone》此前未进入 protected-range negative-work 集合，因此 `+1 control / +1 independent work`。

## 12｜下一轮高信息增益

P0 仍为第一份真正 verified strict-v2，不降门槛。

若 P0 继续无 ≥95，优先 current P1 `path exhaustion dynamic`：必须明确多个可独立让同一 target effect 生效的 alternative paths，并观察它们逐一关闭，直到 surviving path count 从 `n>1 → 1 → 0`，最终对同一 target effect reality-test OFF。不要把本轮 Home Alone 这种“多个串联/分布式防御节点被穿透”误记为 independent alternative path exhaustion；两种拓扑不同。

TASK_DONE: FIRE-ZN-X-PROTECTED-RANGE-HOME-ALONE-PARTIAL-DEFENSE-FAILURE-20260903
