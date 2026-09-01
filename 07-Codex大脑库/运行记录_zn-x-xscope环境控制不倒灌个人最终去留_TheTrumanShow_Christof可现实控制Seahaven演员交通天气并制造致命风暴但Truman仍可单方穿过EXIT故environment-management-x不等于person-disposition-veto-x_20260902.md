# 运行记录｜zn ↔ x｜The Truman Show｜environment-management x 不倒灌 person-disposition/veto x

```yaml
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-boundary-guard-environment-control-not-person-disposition
work: The Truman Show (1998)
actor: Christof
fact_confidence: 99
classification_confidence: 97
x_scope_boundary_guard_increment: true
x_scope_boundary_guard_work_increment: true
x_scope_dynamic_transition_increment: false
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_guard_increment: false
protected_range_increment: false
```

## 0｜启动对齐

本轮以 `main@44897b90050a12b6af1ec1ff5dc4511c01f74391` 为写前 HEAD。启动时重读最近 commits，并按 current canonical 对齐 L0/L1 门禁、L1 十元—五行正本、zn/x current 信息卡与准度卡、相关关系卡/补卡、火轴待审议清单、火轴研究总纲、strict-v2 current 与 x-scope current。current canonical 高于本记录；木轴 `zx↔nx` 仅迁移验证方法，不迁移理论结论。

写前有效 evidence-layer：ordinary x-scope boundary guards `17 controls / 14 independent works`；WALL-E 最新 dynamic evidence 已把 dynamic effective layer推进到 `16 / 14`，但本轮不重复计 dynamic。

## 1｜作品 / 人物 / 阶段

作品：《The Truman Show》(1998)
人物：Christof
明确阶段：Truman 已脱离常规日程并驾驶帆船离开 Seahaven，Christof 直接调用制作系统制造风雨海浪阻止；Truman坚持后，Christof停止风暴；Truman撞上摄影棚穹顶、找到 EXIT，Christof通过全场 PA 劝阻，但 Truman 仍自行穿门离开。

本轮只测试：Christof 对 Seahaven / studio environment 的高强度现实 management/control x，是否允许倒灌成对 Truman 本人的 final-exit / person-disposition veto x。

## 2｜事实、触发、对象、动作、可观察结果

### 事实
- Christof 与制作系统能现实调度 Seahaven 的演员、交通、搜索、昼夜与天气效果。
- 最终海上逃离阶段，Christof直接命令并亲手将 wave controls 推至最高，人工风暴、海浪现实作用到 Truman 与船上。
- Truman 没有服从该环境控制，继续航行直至撞上 studio wall。
- Truman找到出口门后，Christof能够通过 PA 对他讲话、劝阻，但没有一个可现实让“Truman不得离开”自动生效的同层 veto node。
- Truman最终自行穿过出口；节目结束。

### 触发
Truman 脱离受控常规并进入可离开 Seahaven 的航行路径。

### 对象拆分
- object-A：Seahaven / studio environment，包括天气、场景、演员/交通调度、节目基础设施。
- object-B：Truman 本人的 final exit / bodily departure / 是否留在 studio。

禁止把 A 的 control bundle 事后拼成 B 的 person-disposition x。

## 3｜x 权限结构

```yaml
actor: Christof
object: Seahaven/studio environment and final-exit interface distinction

permission_type:
  contact: true_via_production_system
  use: true_on_studio_infrastructure
  custody: not_used_for_person
  call: true_weather_actor_transport_search_systems
  management: true_environmental
  disposition: true_on_environmental_state_limited
  veto: true_on_many_environmental_routes_but_not_final_person_exit
  exclusion: can_attempt_route_blocking
  transfer: not_material

scope:
  environment: broad
  weather: broad
  actors_and_staged_routes: broad
  Truman_personal_final_exit: false
  whole_person_disposition: false

term: current escape / final-exit window
revocability: operational controls remain available until show termination
return_obligation: n/a
same-layer_pre-effect_veto:
  environment: Christof/production controls
  Truman_final_exit: none demonstrated

global_override:
  environment: Christof is high-level operator
  person_exit: no reality-tested automatic override

ultimate_title: not_used_as_ten_yuan_proof

decision_structure:
  environmental manipulation: largely Christof-directed
  Truman final departure: Truman-final

consultation_structure: production staff may object/advise but are not the tested final person-exit node
final_decision_structure:
  weather/studio state: Christof-directed
  Truman crosses EXIT: unilateral by Truman

execution_structure:
  environment: production machinery/crew execute Christof commands
  person departure: Truman physically executes and succeeds

co-decision_nodes:
  mandatory_joint_nodes_for_Truman_exit: none shown
```

## 4｜关键压力

最危险的错误推理：

```text
我能控制你周围绝大多数现实条件
+ 我能制造足以伤害你的天气
+ 我能安排你接触的人和移动路径
→ 我拥有对你本人最终去留的 x
```

本轮 reality-test 直接否定这个倒灌。

Christof 的 environment-management x 很强，甚至强到可以真实改变风浪并让 Truman 面临死亡风险；但当同一阶段进入 `Truman 是否穿过 EXIT` 这个 person-disposition / final-departure object layer 时，Christof最终只能施加环境阻碍和语言劝阻，不能让“不得离开”作为同层现实结果自动生效。

因此锁出：

> broad environment-management/control x ≠ person-disposition/final-exit veto x。

以及更一般的边界句：

> 对对象周围条件拥有高覆盖现实控制，不自动等于对对象本人拥有处分、留置或最终行动否决权；必须对 person-layer permission 单独做 reality-test。

## 5｜最近邻排除

### 与 Elder Wand guard 的差异
Elder Wand 是同一物件内部存在 allegiance / endogenous competing execution node，使 possession/use 不倒灌 target-specific effect。

本轮没有 autonomous object allegiance；竞争点在 object-layer 本身：`environment` 与 `person final disposition` 是不同权限对象。高环境覆盖不能跨层吞并人的最终去留。

### 与 protected-range 的差异
Christof把 Seahaven描述为安全、也能围绕 Truman 构造边界，但本轮不是“我方对象在受保护范围内”的 protected-range 正向测试。最终风暴本身还是主体主动制造的风险。因此不计 protected-range positive/negative。

### 与普通 title/role guard 的差异
结论不依赖 Christof 是“creator/director”。即使删去职位标签，仅保留现实 weather/actor/transport control 与 Truman 成功自行 exit，边界仍成立。

## 6｜拿掉 / 反向

### 拿掉环境控制
若 Christof实际上不能调用天气、交通、演员与 studio infrastructure，则只能得到 `environment x` 未成立，无法证明本轮“强 environment x 仍不等于 person-disposition x”的边界。

### 拿掉 Truman 成功 exit
若 Truman最终到 EXIT 后仍存在一个 Christof 可单方调用、且在生效前自动阻止 Truman 离开的同层 gate，则 person-final-exit veto 需要重新判定。

### 反向
不能因为 Christof 没有 final-exit veto，就反推他的 environment x 为假。天气、演员、交通和 studio state 的现实管理接口已有大量 effect-test。

## 7｜第三因素冻结

冻结：
- Christof 的导演/创作者身份；
- Truman 的主角身份与自由主题；
- 观众支持；
- Sylvia 的情感意义；
- 最终节目结束这一结局价值；
- Christof 是否善恶、是否“像父亲”。

只保留：

```text
same current window
+ broad environment-management reality-test = true
+ person final-exit veto reality-test = false
```

分类仍成立。

## 8｜zn 与 strict-v2

本轮不锁 `zn`。Christof 关于“保护 Truman / 给他安全世界”的自我陈述，仍可被节目利益、创作者控制欲、长期项目责任、情感占有与自我辩护等 competing anchors 解释，无法在 current gate 下 ≥95 独立锁定不可让渡原则。

因此不启动 strict 双向：

```yaml
strict_v2_verified_positive: false
strict_v2_negative: false
strict_v2_deferred: false
strict_precondition_guard: false
```

strict-v2 verified positive 继续保持 `0 controls / 0 works`，不为破零降门。

## 9｜成熟度与统计

事实置信：99
分类置信：97
成熟度：`evidence-locked`

同 criterion_version 下，写前 ordinary x-scope boundary layer：

```text
17 controls / 14 independent works
```

本轮《The Truman Show》此前未进入 ordinary boundary work 集合，且机制不是 Elder Wand 的内生对象 veto、不是 title guard、不是局部权限缺证，而是 `broad environmental control ≠ person-layer final disposition` 的跨对象层倒灌 guard，因此：

```text
17 / 14
→ 18 boundary guards / 15 independent works
```

其余：

```yaml
x_scope_positive: +0
x_scope_dynamic: +0
decision_structure_calibration: +0
protected_range: +0

strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
```

x-scope 已处 pending-review，本轮只记录 evidence-layer，不自动修改 L1/L2 canonical。

## 10｜下一轮高信息增益

P0 继续寻找 strict-v2 天然对象构成型 verified positive。

若仍无 ≥95，优先找本机制的最小差异正向镜像：

```text
same actor
+ broad environmental control x
+ person remains same object
+ 存在明确 person-layer custody/disposition gate
+ actor 可在 person离开生效前稳定 veto
→ environment-control 与 person-disposition 两层均分别 reality-tested
```

或者更高价值的 P2 动态：同 actor、同 person-layer permission，原本有现实留置/veto，真实节点发生后只剩环境影响与劝阻，形成 `person-disposition x → environment-only x` 的 scope contraction。
