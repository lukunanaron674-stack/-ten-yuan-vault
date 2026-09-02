---
type: ten-yuan-fire-axis-boundary-pressure-test
axis: fire
pair: zn-x
work: Terminator 2 Judgment Day
actor: Miles Dyson
criterion_version: current-x-scope-distinction-v1_20260830
knowledge_status: evidence-locked
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_negative_increment: false
strict_v2_deferred_increment: false
strict_precondition_increment: false
protected_range_increment: false
created: 2026-09-02
---

# zn↔x 火轴边界压力测试｜Terminator 2｜Miles Dyson 门禁凭证事件触发收缩

## 0｜启动对齐
写前以 `main@3fa25f940cea9eab97bbd8803b187bdb14dd0419` 为真值。已按 current canonical 对齐 L0/L1 文件权力与任务门禁、L1 十元—五行正本 v1.6、zn/x current 信息卡与准度路由、相关关系卡/`zn补x`、火轴待审议清单、火轴研究总纲、strict-v2 current、x-scope current、protected-range current 与最近 commits。current canonical 高于本记录；木轴 `zx↔nx` 只迁移验证方法，不迁移理论结论。

写前 current ledger：strict-v2 verified positive `0/0 works`；x-scope ordinary positive 已 pending-review；x-scope boundary `21 controls / 18 works`；x-scope dynamic `20 controls / 18 works`。本轮只测试新动态机制，不堆 ordinary positive。

## 1｜作品 / 人物 / 阶段 / 样本类型
- 作品：《Terminator 2: Judgment Day》(1991)
- 人物：Miles Dyson
- 当前窗口：夜间进入 Cyberdyne → silent alarm 被触发 → 同一楼内继续尝试门禁
- 样本类型：P2 `x-scope dynamic contraction`；event-triggered global credential invalidation
- 对象层：Cyberdyne electronic access-control / card-key controlled entry layer

## 2｜事实链
### Stage A｜报警前
1. Dyson 持自己的 Cyberdyne security card。
2. 他刷卡进入 Cyberdyne；剧本还明确写到 Special Projects Division 的受控门被同一卡现实解锁。
3. 因而不能只记“员工/主管身份”或“卡在手”，而是已有同层 reality-test：`card-present → scanner accepts → controlled door opens`。

### Trigger｜silent alarm
4. 保安发现异常并触发 silent alarm。
5. Dyson 直接说明该 alarm 会 neutralize 全楼 codes。

### Stage B｜报警后
6. Dyson 在 security station 用同一卡反复刷 locker，红灯、不开。
7. 他随后在 lab door 再试同一卡，仍失败。
8. 因而形成同 actor、同 credential、同 access-control permission family 的现实收缩：报警前 access effect 成功，报警后 credential 仍物理在手但 current access effect 失败。

## 3｜zn 独立证据
本轮不锁 `zn`。

Dyson 决定毁掉自己的研究和 Cyberdyne 材料，表面上有很强原则候选，但 same current window 内存在防止 Skynet / 核灾难、对家人的风险判断、Sarah/Terminator 提供的新事实与即时危机压力等 competing anchors。本轮研究目标是 access permission 动态，不从科学家身份、赎罪主题、牺牲结局或情绪倒推 `zn`。

结论：`zn = not locked`；strict-v2 不进入双向测试统计。

## 4｜x-scope 固定拆分
```yaml
actor: Miles Dyson
object: Cyberdyne electronic access-control layer
permission_type:
  contact: true
  possess_card: true_before_and_after
  present_credential: true_before_and_after
  controlled_entry:
    stage_A: true_reality_tested
    stage_B: false_reality_tested
  use:
    card_interface: retained
    access_effect: contracted
  custody: not_material
  management: not_inferred
  disposition: false_or_not_tested
  veto: false_or_not_tested
  exclusion: false_or_not_tested
  transfer: not_tested
scope:
  stage_A: card-authorized controlled-door access
  stage_B: no tested card-authorized access on locker/lab-door after alarm
term: same-night same-building window
revocability: reality-tested_by_silent_alarm_event
return_obligation: none_material
same-layer_pre-effect_veto:
  stage_A: none_observed
  stage_B: building-wide code-neutralization active
global_override:
  silent_alarm_security_lockout: active_after_trigger
ultimate_title: not_used
decision_structure: security-system rule / event-triggered
consultation_structure: none_material
final_decision_structure: scanner/security system acceptance controls access effect
execution_structure:
  stage_A: card -> scanner_accept -> door_open
  stage_B: same_card -> scanner_reject/no_open
co-decision_nodes: none
credential_distribution:
  physical_card: Dyson retains
  backend_validity: valid -> neutralized
realized_effect_test:
  stage_A: success
  stage_B: repeated failure
scope_transition: current_access_x ON -> OFF/contracted
transition_trigger: silent_alarm neutralizes building codes
```

## 5｜关键压力
错误推理：

```text
credential 仍在主体手里
+ credential 本来真实成功过
+ 主体身份没有在这一秒消失
→ current access x 继续成立
```

本轮反例锁：

```text
physical credential retained
≠ backend credential validity retained
≠ current access permission retained
```

更强地：

```text
previously reality-tested access x=true
+ same credential physically retained
+ event-triggered same-layer invalidation
+ repeat reality-test fails
→ current access x contracts
```

因此 `x` 的 current state 不能从“凭证还在手”或“过去刷成功过”继承；必须把 credential object 与 backend-valid permission state 分账。

## 6｜最近邻排除
### Minority Report / Anderton
上游已敌对，但旧 retina 未被下游接口实际撤销，repeat reality 仍成功；锁 `upstream adverse status ≠ downstream permission automatically OFF`。

### Winter Soldier / Fury
部分 credential path 被撤，但独立第二 retina path 幸存并 reality-test 成功；锁 `partial revocation ≠ permission OFF while a mandatory-valid path survives`。

### Jurassic Park / Arnold
Arnold 有 console contact / responsibility，但 main-security 当前接口直接 `PERMISSION DENIED`；是静态 reality-interface denial guard，没有同一主体同一 permission family 的先成功后失败链。

### 本轮 Dyson
此前已 reality-tested access=true；silent alarm 直接使全楼 codes neutralized；同一 physical card 后续重复调用失败。故新增的是 `event-triggered backend invalidation causing realized permission contraction`，不是再堆一个“卡不能刷”的普通 guard。

## 7｜拿掉 / 反向 / 第三因素冻结
### 拿掉 trigger
若 silent alarm 未触发，现有材料没有证明 Dyson 的 card access 会在该时点收缩；不能锁 ON→OFF。

### 拿掉 Stage A reality-test
若只知道 Dyson 是 Cyberdyne director 且有 card，不能证明此前 tested access x=true。

### 拿掉 Stage B repeat failure
若只有台词“codes neutralized”而没有 locker/lab-door 现实失败，最多是 declared revocation，不足以达到本轮 98 分类置信。

### 反向
真正镜像应是：同 actor + same credential/interface family，先 reality-test fail，lockout 被真实移除/credential revalidated，再次测试成功，形成 OFF→ON restoration。

### 第三因素冻结
冻结：Dyson 的职位、科学家身份、访客是否合法、Sarah 的武力、John 的破解、Terminator 爆破、警方到场、Skynet 主题与最终结局。被测 transition 只依赖：同卡先成功 → silent alarm code-neutralization → 同卡后失败。

## 8｜strict-v2 / x-scope 判定
- strict-v2 verified positive：否
- strict-v2 negative：否
- strict deferred：否
- strict precondition：否
- x-scope ordinary positive：不增
- x-scope boundary guard：不增
- x-scope dynamic transition：**是**
- protected-range：不增

本轮判定：`credential-retained / physical-token-retained` 与 `current permission-retained` 必须分账；backend/event node 可在 token 不离手时使同一 permission family 现实收缩。

## 9｜成熟度与统计
```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830
```

写前：`x-scope dynamic = 20 controls / 18 independent works`。

本轮《Terminator 2》未进入 current dynamic work 子账，且机制为新的 event-triggered backend invalidation：

```text
20 / 18
→ 21 dynamic controls / 19 independent works
```

其余：
```yaml
strict_positive: +0
strict_negative: +0
strict_deferred: +0
strict_precondition: +0
x_scope_positive: +0
x_scope_boundary: +0
protected_range_positive: +0
protected_range_negative: +0
```

## 10｜证据来源
- 《Terminator 2: Judgment Day》公开剧本：白天 Dyson 用 electronic key-card 解锁 Special Projects 受控门；夜间进入时再次刷卡成功；silent alarm 后 locker 与 lab door 刷卡失败，并由 Dyson 明说 alarm neutralizes codes throughout the building。
- 公开影片 transcript 独立核对：silent alarm 被触发后，Dyson 说明全楼 codes neutralized、nothing will open，并在后续继续尝试个人 entry code / card 失败。

## 11｜下一轮最高信息增益
P0 继续寻找首个 ≥95 strict-v2 verified positive，不降门。

若 P0 仍无候选，优先寻找本轮的严格反向动态：

```text
same actor + same credential/interface family
previously reality-tested access=false
→ lockout / deny-list / backend invalidation node 被真实移除
→ same interface repeat test succeeds
→ access x OFF → ON
```

必须有同层 repeat reality-test，不能把“系统重启了”“权限恢复了”的声明直接当 x restoration。