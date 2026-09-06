---
type: ten-yuan-axis-boundary-case
axis: water
pair: xz-nz
status: evidence-locked
knowledge_maturity: evidence-locked
criterion_version: water-axis-boundary-v1-current-canonical_20260904
authority_level: L4
may_override_canonical: false
source_pool: 四大名著
work: 三国演义
character: 吕布
chapter: 第十九回
sample_type: complete-relevant-path-set-positive-control
current_xz: true
current_nz: not_tested
cooccurrence: false
dynamic: false
strict_xz_nz: false
confidence_fact: 99
confidence_classification: 97
increment:
  complete_path_positive_controls: 1
  independent_works: 0
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/【xz信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nz信息量卡v2】.md
related_controls:
  - 07-Codex大脑库/待审议问题_xz-nz_三国演义关羽麦城大路未冻结导致complete-path-exhaustion不足修正_20260906.md
---

# xz↔nz 水轴｜《三国演义》吕布下邳完整逃脱路径逐步耗尽 pure xz 正控

## 0｜权限与 current canonical

本文件只属于 L4 研究层，不修改 L1/L2 canonical。

以最新 L1 v1.6 为准：

```text
水＝阳水 xz ↔ 阴水 nz
主题领域＝命运
广义对立统一变量＝可逆性与对象特异回返空间
xz＝持续收窄
nz＝保存、恢复或重建
```

案例判定使用 current `xz 信息卡 v2.2`：终点前置、方向被未来规定、路径持续收窄、路径汇流、临界逼近。旧“火药桶”口径不作为本轮主门。

## 1｜本轮唯一研究问题

上一轮关羽麦城已经锁定：

> chosen path exhausted ≠ complete relevant path set exhausted。

因为麦城文本仍明确存在“大路”而关羽主动选了小路，不能把未选择路径偷写成客观关闭。

本轮只问：

> 四大名著中能否找到一份 same actor + same current window + same object layer + same changed variable，并且 relevant path set 被文本实际枚举、逐步关闭，最终逼近 0 的 current pure xz 正控？

## 2｜剧情事实

来源：《三国演义》第十九回《下邳城曹操鏖兵 白门楼吕布殒命》。核验文本：三国演义电子辞典 / 三国书库，第十九回全文。

事实链：

1. 曹操取得徐州后明确准备攻下邳，并提前令刘备守淮南径路，目的之一就是防吕布与袁术连结；这使“下邳被攻破 / 吕布被擒败”在当前过程开始前就已取得结构地位。
2. 吕布最初仍有“主动出击、内外掎角、断曹军粮道”等现实方案；陈宫多次提出，但吕布因自身选择未执行。这些属于曾现实存在但被主体放弃的路径，不能单独当作环境关闭。
3. 随曹军四面围城，吕布转向“坚守下邳”。
4. 许汜、王楷提出求袁术援军；使者实际冲出包围并抵达寿春，说明该接口不是名义路线。
5. 袁术提出必须先送吕布之女才发兵，援军接口因此被压缩为“先完成送女出围”。
6. 吕布亲自背女、率张辽高顺突围，遭关羽、张飞、刘备、徐晃、许褚等围堵，最终退回下邳；曹操并下令诸寨不得走透吕布及其军士。
7. 曹操久攻不下后决沂、泗之水，下邳除东门外其余各门被水淹，守城与外出空间继续实质收窄。
8. 侯成、宋宪、魏续因内部矛盾决定背叛；侯成盗走赤兔马出城，宋宪、魏续准备献门擒吕布。
9. 曹军攻城时吕布亲自抵御，随后在门楼短暂休息，被宋宪、魏续夺戟捆缚、开门献城；高顺、张辽、陈宫各自也因水围或城门失守被擒。
10. 吕布被擒后曾向曹操求生，但这是“被擒后的生存处分路径”，不属于本轮测量的“避免下邳失守 / 避免被擒”的前一层 relevant path set，必须分层。

## 3｜结构字段

```yaml
trigger:
  曹操取得徐州并明确进攻下邳，同时封锁淮南径路
actor: 吕布
action:
  先守城、再求袁术援军、再亲自护女突围、再继续城防
object:
  吕布保持下邳控制并避免被曹军擒获的现实可行路径集合
object_layer:
  siege-level survival/escape/control-retention path set
changed_variable:
  relevant path set 的数量、可调用性与通达性
observable_result:
  外援接口受条件压缩并失败；突围接口失败；大部分城门被水封；内部守城控制被背叛切断；最终被擒
current_window:
  曹操完成徐州控制并开始攻下邳 → 吕布被部将擒缚献城
```

## 4｜relevant path set 审计

本轮不把“所有想象得到的可能”算进 path set，只计文本中当时真实提出、实际可调用或已被现实执行过的 relevant interfaces。

### P1｜主动出击 / 掎角 / 断粮

陈宫提出且在曹军合围早期具有现实可执行性；吕布反复因自己选择不执行。

判定：

```text
曾存在
→ subject-side abandonment
```

它不能单独证明环境 xz，但进入 path-set 生命周期账本：这是一个真实路径从 available 变为 actor-abandoned。

### P2｜坚守下邳

吕布明确依赖粮食与泗水之险守城。曹军持续围攻两月，随后决沂、泗水，除东门外诸门被淹；内部军心进一步恶化。

判定：

```text
available
→ increasingly degraded
→ internal command topology collapses
→ failed
```

### P3｜袁术外援

使者成功出围并抵达袁术，证明外援不是幻想；但袁术要求先送女才出兵，于是外援路径被压缩到 P4。

判定：

```text
available
→ conditionalized
→ depends on successful breakout
```

### P4｜护女突围 / 打通淮南接口

吕布亲自执行，遭刘备、关羽、张飞及曹将多层拦截，最终无法冲破重围并退回城内；曹操随后进一步强调封锁，不得走透吕布及其军士。

判定：

```text
actually invoked
→ failed
→ interface closed in current window
```

### P5｜内部城防控制

洪水并未直接让东门消失，所以“水淹 = 所有出口归零”不成立。最后一条关键现实接口是吕布仍掌握东门与守城军队。

但侯成盗马出城、宋宪魏续倒戈、夺戟捆缚、开门献城，使这一剩余内部控制接口实际失效。

判定：

```text
remaining control interface
→ betrayal
→ lost
→ capture realized
```

## 5｜为什么这次可以写 complete-path positive

与关羽麦城不同，本案不是：

```text
A/B 两条路线
→ 主体只选 A
→ A 失败
→ B 未测试
```

而是：

```text
early active military alternatives
→ 主体放弃主动出击，收缩到守城
→ 外援被现实调用但变成“必须先送女”
→ 送女突围被实际执行并失败
→ 城防经水攻退化到极窄状态
→ 最后内部守城/东门控制被背叛切断
→ 被擒
```

因此这次至少有三类不同现实路径进入同一审计：

1. 战术主动路径；
2. 外援 / 突围路径；
3. 城内持续控制路径。

它们不是同一条 selected path 的不同镜头，而是在同一对象层上分别承担“避免失守 / 避免被擒”的可行未来。

## 6｜current xz 独立门

### 6.1 终点前置：通过

曹操在攻下邳前已明确完成包围部署，并专门封淮南径路防吕布投袁术；“下邳被攻破 / 吕布被擒败”不是事后结局回填，而是敌方当前结构持续制造的前置终点。

### 6.2 方向被未来规定：通过

围城、封淮南、阻外援、阻突围、水攻、内部策反并不是随机危险拼盘，而是持续让现实未来朝“失守 / 被擒”排列。

### 6.3 路径持续收窄：通过

```text
主动出击 / 掎角 / 断粮 / 坚守 / 外援 / 突围 / 城防控制
→ 主动路径被放弃
→ 外援条件化
→ 突围失败
→ 城防受水攻严重退化
→ 内部控制被倒戈切断
→ 0（避免被擒这一层）
```

这里的 `0` 指“避免下邳失守并保持自由行动”的 relevant path set，不指“被擒后是否还能向曹操求生”。后者属于下一对象层，禁止混算。

### 6.4 路径汇流：通过

守、求援、突围、继续控制城门几条路线最终都被同一曹操围城结构压回“下邳失守 / 吕布被擒”。

### 6.5 临界逼近：通过

从四面围城到外援失败、突围失败、洪水缩门、部将倒戈，吕布的现实行动自由逐段缩小，直到本人被捆缚献城。

## 7｜nz 独立判断

本轮不测试 stable nz。

袁术旧婚约、与部将的主从关系、向曹操求生都不能因为“可以找关系回来”就倒推 nz。current `nz v2.0` 要求对象特异、真实共同关系、自由退出、现实回返及双方修复；本轮对象层是 siege-level path set，不是关系归宿。

```yaml
current_nz: not_tested
cooccurrence: false
strict_xz_nz: false
```

## 8｜nearest-neighbor

### zx

吕布主动选择不采陈宫计、主动护女突围，均可形成主体推出方向的 zx 局部动作；但这不能解释为什么多个不同现实接口最终都被同一围城终点收束。

### z

“决定坚守”“决定求援”“决定突围”是节点裁定，不等于持续 trajectory-level narrowing。

### x

曹操对各寨下令严防走透、最终部将擒缚吕布，存在明确当前控制 x；但 x 解释的是某一节点谁能控制谁，不能替代整个窗口的未来路径收束。

### xn

围城部署、封路、传令、各寨防守都可见流程/节点网络；只有这些流程实际把未来多路径压向同一终点时才支持 xz。

## 9｜拿掉测试

拿掉吕布“有勇无谋”、酒色、妻妾、道德评价、白门楼死亡、历史成败等叙事附着，只保留：

```text
敌方先构成夺城/擒获终点
＋ 多个现实脱困接口先后存在
＋ 外援接口被条件化
＋ 突围实际失败
＋ 守城条件被水攻持续削弱
＋ 最后剩余内部控制接口被倒戈切断
＋ 被擒
```

current xz 仍成立。

## 10｜反向测试

只要出现以下任一事实，本例 complete-path positive 就应降级：

- 同一 current window 内仍有一条文本明确、现实可调用且未被主体放弃的逃脱 / 保持下邳控制路径；
- 未测试路径只是作者没有写，而非现实关闭；
- 把“被擒后向曹操求生”错误并入“避免被擒”的 path set；
- 把吕布自己拒绝陈宫方案全部误写成环境关闭。

当前文本中未发现上述足以推翻本层结论的 surviving interface。

## 11｜third-factor freeze

以下因素全部冻结，不能直接判十元：

- 吕布性格评价；
- 陈宫是否更聪明；
- 妻妾劝阻；
- 酒色；
- 曹操强弱；
- 战争胜负；
- 吕布最终被杀；
- “反复无常”主题；
- 英雄末路氛围。

它们可以解释局部选择、动机或戏剧效果，但不能替代 path-set 现实审计。

## 12｜subject-specific attribution

本案必须把两种关闭分账：

```text
subject-side closure:
吕布自己拒绝主动出击 / 掎角 / 断粮

environment-side closure:
淮南径路封锁
袁术援军条件化
护女突围失败
水攻导致城防空间缩水
内部将领倒戈并献门擒人
```

xz 不要求所有关闭都由外界强迫；但若主体自己放弃某路径，必须明确标记，不能伪装成“命运客观封死”。本例之所以仍可锁，是环境侧后来仍独立完成多条 relevant interfaces 的现实收束。

## 13｜判定

```yaml
source_pool: 四大名著
sample_type: complete-relevant-path-set-positive-control
criterion_version: water-axis-boundary-v1-current-canonical_20260904
same_actor: true
same_current_window: true
same_object_layer: true
same_changed_variable: true
prefigured_terminal: true
multiple_real_interfaces_enumerated: true
subject_abandonment_separately_accounted: true
environmental_path_closure: true
path_convergence: true
complete_relevant_path_set_exhausted_at_test_layer: true
current_xz: true
current_nz: not_tested
cooccurrence: false
dynamic: false
strict_xz_nz: false
maturity: evidence-locked
confidence_fact: 99
confidence_classification: 97
increment:
  complete_path_positive_controls: 1
  independent_works: 0
```

独立作品数不增加：同一 criterion_version 下《三国演义》已经由关羽麦城作为本专项 work 计入；本轮增加的是新的 complete-path positive control，不重复增加 work。

## 14｜本轮新锁边界

> **complete path-set exhaustion 必须把 subject-abandoned path 与 environment-closed path 分账。**

> **一条路径被主体放弃，不等于命运客观封死；但若后续多个独立现实接口仍被同一结构逐一压缩、关闭并汇向同一前置终点，则可在同对象层锁 current xz。**

> **“避免被擒”的 path set 与“被擒后能否活命”的 path set 是相邻但不同对象层，禁止把白门楼求生倒灌进前一层制造 surviving path。**

## 15｜下一缺口

complete-path positive 已有第一份四大名著正控。下一步不应继续堆 pure xz，而应进入更高信息增益问题：

> 在 same actor + same current window + same object layer + same changed variable 下，寻找 `xz=true` 与 `nz=true` 同时独立成立的四大名著样本，并先做 removal / reverse，区分 same-layer co-occurrence non-strict 与真正 strict `xz↔nz` candidate。
