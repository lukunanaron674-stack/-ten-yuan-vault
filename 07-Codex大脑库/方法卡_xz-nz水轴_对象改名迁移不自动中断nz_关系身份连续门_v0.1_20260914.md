---
type: ten-yuan-water-axis-method-card
axis: water
pair: xz-nz
status: candidate
knowledge_maturity: evidence-backed-structural-candidate
authority_level: L4
may_override_canonical: false
version: v0.1
created: 2026-09-14
updated: 2026-09-14
research_slot: object-identity-continuity-across-reentry
canonical_change_required: false
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
evidence_refs:
  - 07-Codex大脑库/方法卡_xz-nz水轴_same-scope双PASS自动审计_趋势与残余回返分账_v0.1_20260913.md
  - 07-Codex大脑库/方法卡_xz-nz水轴_多actor半边回返权不得聚合成双方性_同关系边闭合门_v0.1_20260914.md
---

# xz ↔ nz 水轴方法卡｜对象改名/迁移不自动中断 nz：关系身份连续门 v0.1

## 0｜本轮只解决一个问题

现有水轴已经锁定：

```text
new opportunity != reentry to old object
```

但这只解决了“新对象不能冒充旧对象”的负向边界，还留下一个反向解释器漏洞：

> 如果对象经历改名、迁移、法人/系统 successor、账号替换、项目仓库迁址等变化，字面 token 或技术 ID 已经变了，但双方权利、未完成义务、历史状态与修复位置被明确连续承接，那么解释器是否应该机械地判“不是同一 object，因此 nz 失败”？

结论：不能。

本轮新增：

```text
WATER-OBJECT-IDENTITY-CONTINUITY-GATE-v0.1
WATER-TOKEN-IDENTITY-NOT-OBJECT-IDENTITY-GATE-v0.1
WATER-SUCCESSOR-REENTRY-CONTINUITY-AUDIT-v0.1
```

核心式：

```text
same name / same ID
!= sufficient same object

changed name / changed ID
!= sufficient new object
```

水轴的对象特异回返必须绑定到“关系身份连续性”，而不是绑定到表面 token。

---

## 1｜current criterion 不变

```text
水 = xz ↔ nz
核心变量 = 可逆性与对象特异返回空间

xz:
  终点前置
  + 未来规定方向
  + 真实路径/选择持续收窄
  + 路径汇流
  + 临界逼近

nz:
  对象特异
  + 曾现实成立
  + 现实退出自由
  + 现实返回路径
  + 回来后的重新接近/修复
  + 双方性
```

本轮只新增 object identity 的执行层判据：

```text
object_specific
!= lexical_token_specific
```

需要回答：

```text
return_to_what_exact_relation_state?
```

而不是只问：

```text
return_to_same_name_or_same_id?
```

---

## 2｜完整 IR

本轮采用“项目协作仓库迁移后，原合作关系是否仍可对象特异回返”的结构化压力测试，不冒充外部事实。

```yaml
actor:
  side_A: 画师A
  side_B: 制作组B
  successor_operator: 平台C

object:
  relation_R_old: A↔B在旧项目仓库Repo-Old中的真实协作关系
  relation_R_successor: A↔B在Repo-New中的候选承接关系

object_layer:
  tested: bilateral_reentry_and_repair_space_of_A_B_collaboration_relation

current_window:
  R_old曾现实成立
  -> A自由退出
  -> Repo-Old迁移/关闭
  -> Repo-New出现
  -> A申请回返
  -> B可接受/拒绝
  -> 检查历史关系状态是否被连续承接

changed_variable:
  relation_identity_continuity:
    S0: token_changed_but_state_and_rights_continuously_succeeded
    S1: token_same_but_relation_state_reset_and_recreated

relation_source:
  S0:
    Repo-Old -> explicit migration/succession -> Repo-New
    historical membership / unfinished tasks / access role / repair obligations transferred
    B仍把A的申请理解为恢复原合作关系

  S1:
    display name stays the same
    but old relation is terminated
    prior rights/obligations/history are not binding on the new arrangement
    A must negotiate a fresh relation from zero

relation_shape:
  S0:
    R_old
    -> identity-preserving migration
    -> successor carrier Repo-New
    -> reentry into continued R

  S1:
    R_old -> closed
    same label retained
    -> new relation R2 created independently

 decision_right:
  A:
    may request_or_decline_reentry: true
  B:
    may accept_or_refuse_reentry: true
  C:
    S0:
      executes migration/successor transfer under standing rule
    S1:
      merely hosts a newly created relation

path_set:
  S0:
    - old_relation_history
    - explicit_successor_mapping
    - carried_forward_rights
    - bilateral_reentry
    - post_return_repair_of_prior_unfinished_state

  S1:
    - old_relation_closed
    - same_label_or_shell
    - fresh_onboarding
    - fresh_relation_creation

reentry_right:
  S0:
    object_specific_return_to_continued_relation: nonzero
    bilateral_accept_refuse: preserved
    post_return_repair_of_prior_state: available

  S1:
    return_to_old_relation: zero
    entry_to_new_relation: possible
    bilateral_new_contracting: possible_but_not_reentry

future_endpoint:
  S0:
    no_required_xz_endpoint_for_nz_test
  S1:
    old_relation_R_old_remains_closed

reality_anchor:
  - R_old曾真实成立
  - A曾现实退出R_old
  - successor mapping 是否明确、可验证
  - 未完成义务/权限/历史状态是否连续承接
  - B是否把回返视为恢复旧关系而非新建关系
  - A回来后能否继续处理旧关系留下的任务/修复位置
  - 旧 token/ID 是否只是 carrier 变化而非 relation identity 变化
  - 同名情况下是否其实已经清空旧关系状态并重新建约
```

---

## 3｜两端判定与置信度

### S0｜名字/ID改变，但关系身份连续

```text
nz(continued relation_R): PASS / strong candidate 0.98
xz(continued relation_R): OFF / not evidenced 0.96
```

关键证据不是 `Repo-New` 与 `Repo-Old` 名称相似，而是：

```text
prior relational state
+ rights
+ obligations
+ counterpart recognition
+ repair target
are continuously succeeded
```

所以：

```text
carrier changed
!= relation object changed
```

### S1｜名字/ID没变，但关系已重置

```text
nz(R_old): FAIL 0.99
new_relation_entry(R2): possible
xz(R_old): not inferred solely from nz failure
```

即使 UI、组织名、账号名、项目名完全没变，只要旧关系的权利、义务、未完成状态与修复位置都被清零：

```text
same token
!= same object-specific return target
```

本轮最重要 changed variable：

```text
relation_identity_continuity
```

而不是：

```text
string/name/id continuity
```

---

## 4｜最小判别式

### object identity continuity PASS candidate

```text
IF
  R_old曾现实成立
  AND actor现实退出过R_old
  AND successor/migration mapping is explicit and causal
  AND core relational rights or obligations are carried forward
  AND counterpart recognizes return as restoration of R_old-continuity
  AND post-return actor can resume/repair prior relation-state
THEN
  changed token / carrier does not block nz
```

### object identity continuity FAIL

```text
IF
  old relational state is terminated/reset
  AND prior rights/obligations/history do not bind the new arrangement
  AND actor must establish a fresh relation from zero
THEN
  same token / same shell cannot rescue nz(R_old)
```

最短版：

> nz 回的是“同一关系身份”，不是“同一个字符串”。

---

## 5｜nearest-neighbor 最小差异对

冻结：

```text
A
B
平台C
界面名称
任务类型
合作内容
时间间隔
感情
职业
最终是否重新合作
```

只改：

```text
old relation state 是否被 successor 连续承接
```

### Pair A｜连续承接

```text
Repo-Old -> Repo-New
旧成员身份、未完成镜头、权限角色、返工义务全部迁移
A回来后继续处理退出前留下的同一镜头
```

结果：

```text
nz PASS 0.98
```

### Pair B｜关系重建

```text
Repo-Old -> Repo-New
旧权限和历史关系全部清零
A必须重新签约、重新分配镜头
旧未完成事项不再属于双方关系
```

结果：

```text
nz(R_old) FAIL 0.99
new relation possible
```

这是最小差异对：token/平台迁移本身相同，只改变 `relation_identity_continuity`。

---

## 6｜removal

### Removal A｜拿掉显式 successor mapping

只有“新系统看起来像旧系统”，没有迁移链、权利承接或 counterpart recognition：

```text
nz -> insufficient
```

### Removal B｜拿掉 carried-forward rights / obligations

保留同一双方与同一项目名，但所有旧关系状态清零：

```text
nz(R_old) -> FAIL
```

### Removal C｜拿掉 post-return repair of prior state

A能进入新仓库，却只能承接新任务，不能继续旧关系遗留事项：

```text
nz(R_old) -> insufficient / fail
```

说明“还能合作”不能替代“回到并修复原关系”。

### Removal D｜拿掉 lexical continuity

名字、账号、仓库 ID 全部改变，但 successor mapping 与关系状态完整承接：

```text
nz remains PASS
```

直接证明：

```text
lexical identity is not necessary
```

---

## 7｜reverse

### Reverse A｜同名但重置 → 明确承接

```text
same token + fresh relation
-> add explicit succession + carried state + repair continuity
-> nz FAIL -> PASS
```

### Reverse B｜异名但承接 → 取消承接

```text
changed token + continued relation
-> terminate old obligations/history
-> require fresh contracting
-> nz PASS -> FAIL
```

### Reverse C｜旧载体 xz 与关系 nz 分层

若 Repo-Old 被固定日期永久退役：

```text
xz(Repo-Old technical carrier): PASS candidate
```

但关系 R 被明确迁移并继续可退出/回返/修复：

```text
nz(A↔B relation_R): PASS candidate
```

必须 SPLIT_IR；不得用旧载体退役自动杀死关系 nz，也不得用关系连续回返否定旧载体 xz。

---

## 8｜freeze-third-factor

冻结：

```text
人物身份
职业
亲密度
合作质量
项目输赢
迁移是否成功上线
名字是否好听
系统 UI 是否相似
最终是否选择回来
```

只看：

```text
explicit successor mapping
carried relational rights
carried obligations
counterpart recognition
historical state continuity
post-return repair continuity
same tested relation target
```

---

## 9｜positive controls

### P1｜工程域

服务A原先隶属集群B，集群从 `cluster-v1` 迁到 `cluster-v2`。成员身份、证书角色、未完成恢复状态与 B 的接纳规则全部迁移；A退出后按同一成员关系重新加入并继续恢复旧状态。

```text
nz: PASS
```

### P2｜制度域

机构改制并更名，但法律/章程明确由 successor 承接原成员资格、退出记录、复归程序与未结事项。成员A申请复归时，委员会是在恢复原有资格连续链，而不是新授予一个无关资格。

```text
nz: PASS
```

### P3｜组织域

团队B并入新部门B2，但成员关系、历史权限、未完成责任与返岗程序连续承接。A此前自愿离开，后经双方程序回到同一关系链并继续处理原遗留责任。

```text
nz: PASS
```

### P4｜创作流程域

项目从旧仓库迁到新仓库，画师A的原镜头、返工记录、权限角色和制作组B的双方复归规则全部迁移。A回来后继续处理原镜头。

```text
nz: PASS
```

---

## 10｜negative controls

### N1｜同名新公司/新团队

团队名没变，但原成员关系全部终止，旧义务无效，A回来必须从零面试、重新签约、重新分工。

```text
same name
but new relation
=> nz(old relation) FAIL
```

### N2｜账号迁移但只是导流

旧账号关闭，新账号把用户导入另一个完全不同的服务关系；旧权限、历史修复位置与对端义务都不承接。

```text
redirect != successor identity
=> nz(old object) FAIL
```

### N3｜历史数据被复制

Repo-New复制了 Repo-Old 的文件和聊天记录，但 B 不承认旧权限/义务，A也不能恢复旧关系位置。

```text
memory/data continuity
!= relational identity continuity
=> nz FAIL
```

### N4｜旧对象真正关闭，另给相似机会

A与B旧合作关系已彻底终止，C给A一个相似岗位/新项目。

```text
functional similarity
!= same return target
=> nz(old relation) FAIL
```

---

## 11｜失败类型

新增失败类型：

```text
FAILURE_TOKEN_CHANGE_AS_OBJECT_CHANGE
改名/换ID就自动判成新对象，漏掉真实 successor continuity

FAILURE_TOKEN_SAMENESS_AS_OBJECT_SAMENESS
同名/同ID就自动视为同一对象，忽略关系重置

FAILURE_DATA_COPY_AS_RELATION_CONTINUITY
历史数据/记忆被复制就误判旧关系仍可回返

FAILURE_FUNCTIONAL_SIMILARITY_AS_REENTRY
新对象功能相似就被错算成旧对象回返

FAILURE_CARRIER_RETIREMENT_ERASES_RELATION_NZ
旧载体退役就自动抹掉被 successor 连续承接的关系 nz

FAILURE_RELATION_NZ_ERASES_CARRIER_XZ
关系连续可回返就反向否定旧载体真实退役 xz
```

---

## 12｜解释器执行门

建议 L4 层加入：

```text
STEP 1
resolve actor / tested_object / object_layer / current_window

STEP 2
if return target token or ID differs from historical target:
  do not immediately mark new object
  run SUCCESSOR_IDENTITY_AUDIT

STEP 3
SUCCESSOR_IDENTITY_AUDIT checks:
  explicit_successor_mapping
  carried_rights
  carried_obligations
  counterpart_recognition
  historical_state_continuity
  post_return_repair_continuity

STEP 4
if token is same:
  do not immediately mark same object
  verify relation was not reset/recreated

STEP 5
key nz evidence by:
  relation_identity_id
  not surface_name alone

STEP 6
if carrier identity and relation identity diverge:
  SPLIT_IR
```

建议 ledger：

```yaml
water_object_identity:
  historical_object_token: Repo-Old
  current_object_token: Repo-New
  tested_relation: A_B_collaboration_R
  explicit_successor_mapping: true|false
  carried_rights: true|false
  carried_obligations: true|false
  counterpart_recognition: true|false
  prior_state_resumable: true|false
  post_return_repairable: true|false
  identity_continuity_confidence: 0.0-1.0
```

若 `identity_continuity_confidence < 0.85`：

```text
OBJECT_IDENTITY_AMBIGUOUS
```

不得用 token 相同/不同自动补证。

---

## 13｜状态迁移与成熟度

此前水轴已有：

```text
new object path != old object reentry
```

本轮补齐反向边界：

```text
changed carrier/token != automatically new relation object
same carrier/token != automatically same relation object
```

因此对象特异性的机器定义从：

```text
same literal object token
```

提升为：

```text
same continuous relation identity
```

本轮建议成熟度：

```text
9.9 -> 9.95 / 10
AXIS_MATURE_CANDIDATE = true
```

仍保持 L4 research-only，不触碰 L1/L2 canonical。

---

## 14｜下一轮建议

水轴不应连续继续扩概念。

下一轮先看解释器真实回归；若没有新 failure，则让金轴/土轴现有 guard 做自然语言压力测试。

水轴只有在以下真实错误出现时重开：

```text
- successor mapping 被漏识别
- 同名重置被误判 stable nz
- old carrier xz 与 continued relation nz 被压成单一判断
```

否则不再增加同义方法卡。
