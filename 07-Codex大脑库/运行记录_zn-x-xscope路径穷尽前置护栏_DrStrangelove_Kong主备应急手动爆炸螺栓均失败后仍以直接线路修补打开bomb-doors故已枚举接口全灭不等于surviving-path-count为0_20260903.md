---
type: ten-yuan-fire-axis-boundary-pressure-test
axis: fire
pair: zn-x
work: Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb
character: Major T. J. King Kong
stage: final bomb run / damaged bomb-door system
criterion_version: current-x-scope-distinction-v1_20260830
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_precondition_increment: false
protected_range_increment: false
created: 2026-09-03
---

# zn↔x 火轴边界压力测试｜Dr. Strangelove｜Kong｜已枚举接口全灭 ≠ surviving path count = 0

## 0｜启动对齐
本轮写前以 `main@ffe05e39eee1801151d97043f53a61558db91039` 为准，按 L0/L1 启动纪律重读/检索最新 main、最近 commits、L0/L1 文件权力与任务门禁、L1 十元—五行正本路由、zn/x current 信息卡与准度/补卡路由、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

current D 区 P1 要找真正 path-exhaustion dynamic：多个 independent paths 逐一关闭，直到 surviving path count=0，并看到 target-effect reality-test OFF。本轮没有硬把材料塞成这个正例，而是锁定它的一个必要前置护栏：**已枚举/常规接口全部失败，不足以证明真实路径集合已经穷尽。**

## 1｜事实窗口
最终轰炸航程中，飞机受损，bomb doors 无法按常规方式打开。Kong 连续命令/尝试：

1. normal bomb-door circuits：negative function；
2. backup circuits：仍 negative；
3. emergency power：仍 negative；
4. manual override：仍 negative，且 teleflex drive cable 被判断可能已断；
5. explosive bolts：仍 negative，crew 报告 operating circuits dead；
6. Kong 随后亲自进入 bomb bay，直接处理/拼接受损线路并接上 patch panel；
7. bomb doors 现实打开，bomb 随后释放。

因此在第5步时，“常规列出的控制接口都失败”是真；但“所有可使 bomb doors 打开的现实路径已经为0”是假，因为第6-7步仍存在并通过 reality-test 的 direct repair / bypass path。

主要事实源：公开 screenplay/transcript 对上述顺序给出逐项记录；FilmSite/剧情资料也独立确认受损 release mechanism 最终由 Kong 在 bomb bay 手工修复并打开 doors。

## 2｜x 权限结构
```yaml
actor: Major T. J. King Kong
object: damaged B-52 bomb-door opening target effect
object_layer: current bomb-door opening / release-enabling execution
permission_type:
  command_normal_circuit_attempt: true
  command_backup_circuit_attempt: true
  command_emergency_power_attempt: true
  command_manual_override_attempt: true
  command_explosive_bolt_attempt: true
  direct_bomb_bay_repair_bypass: true_reality_tested
  global_arbitrary_aircraft_system_disposition: not_inferred
scope:
  target_effect: open bomb doors for current bomb run
  global_aircraft_control: not_inferred
term: current damaged-aircraft bomb-run window
revocability: not_materially_tested
return_obligation: not_applicable
same-layer_pre-effect_veto:
  battle_damage_and_failed_circuits: true_for_enumerated_interfaces
  direct_repair_path: survives_until_reality_test
global_override: none_locked
ultimate_title: military/aircraft ownership not attributed to Kong
decision_structure: command plus direct intervention
consultation_structure: crew reports system state
final_decision_structure: Kong orders successive attempts and chooses direct intervention
execution_structure:
  enumerated_console_paths: crew-operated and fail
  direct_repair_path: Kong-operated and succeeds
co-decision_nodes: none_required_for_the_tested_direct_repair_path
```

## 3｜关键压力与最近邻
### 被攻击的错误推理
```text
normal failed
+ backup failed
+ emergency failed
+ manual override failed
+ explosive bolts failed
→ therefore surviving path count = 0
→ therefore target-effect x = OFF globally
```

本例直接否定最后两步。正确写法必须先证明 **path-set completeness**：

```text
enumerated interfaces exhausted
≠ all physically/legally/currently available paths exhausted
```

只有在 alternate bypass / direct repair / delegated route / parallel authority / emergency interface 等 competing paths 被逐一冻结后，才允许把 `known-path count = 0` 升级为 `surviving relevant path count = 0`。

### 最近邻排除
- 不同于 Casino Royale / source-specific veto：那里是一个来源路径被另一路径绕过；本轮是**一串已知接口都失败，但未枚举的 direct-repair path 仍存在**。
- 不同于 The Terminal：那里是 transition veto 与 downstream disposition 分层；本轮只测同一 target effect 的 path-set completeness。
- 不计为 P1 path-exhaustion 正向 dynamic，因为 target effect 最终 ON，且第5步并未真正证明 surviving path count=0。

## 4｜拿掉 / 反向 / 第三因素
### 拿掉
拿掉 direct repair/bypass path 后，现有剧情证据才接近“已知路径全部失败且 doors 保持 closed”；但影片实际没有这个反事实，所以不能把它计作正向 path-exhaustion dynamic。

### 反向
本例反向要求未来正例至少满足：
1. 同一 actor/object/target-effect window；
2. 预先自然识别多个 independent paths；
3. 每条 path 的失效都有 reality evidence；
4. 证明不存在仍可用的 bypass/direct repair/delegated/parallel route；
5. 最后 target effect 现实 OFF。

### 第三因素冻结
飞机 battle damage 是路径失效原因，不等于 x 本身；Kong 的 commander 身份也不能自动替代具体 execution path。crew 的 console execution 与 Kong 的 direct repair 分账。最终爆炸结果不能反推此前每个接口都属于同一种 x。

## 5｜zn / strict-v2
本轮不锁 `zn`。Kong 对完成轰炸任务的坚持同时受任务命令、军事角色、即时战术目标和个人决断解释；即使存在稳定原则，也没有在同一对象层独立达到 ≥95。

因此 strict-v2：
- verified positive +0；
- negative +0；
- deferred +0；
- precondition +0。

strict-v2 verified positive 继续维持 current `0 controls / 0 works`。

## 6｜判定与统计
```yaml
sample_type: x-scope path-exhaustion precondition / boundary guard
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
new_guard: enumerated-path-exhaustion-does-not-prove-path-set-exhaustion
```

写前 current：
```text
x-scope boundary guards = 23 controls / 20 works
x-scope dynamic = 27 controls / 24 works
```

本轮《Dr. Strangelove》未在 current boundary-work 集合中发现既有同 criterion 记录，故：
```text
x-scope boundary guards: 23/20 → 24/21
x-scope dynamic: +0
strict: +0
protected-range: +0
```

## 7｜下一轮
最高信息增益仍是 P0 strict-v2 第一份 verified positive。若继续未破零，P1 应继续找真正的 path-exhaustion 正例，但新增硬检查：**在宣告 surviving path count=0 前，必须显式审计 bypass/direct repair/delegated route/parallel authority/emergency interface；不能只数控制台上已经列出来的按钮。**
