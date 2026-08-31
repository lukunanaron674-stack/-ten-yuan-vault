---
type: ten-yuan-fire-axis-x-scope-dynamic-contraction-control
authority_level: L4
knowledge_status: evidence-locked
may_override_canonical: false
axis: fire
pair: zn-x
work: The Social Network
character: Eduardo Saverin
stage: Facebook reincorporation / selective dilution reveal
criterion_version: current-x-scope-distinction-v1_20260830
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
x_scope_boundary_guard_increment: false
protected_range_increment: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
updated: 2026-09-01
---

# zn-x｜x-scope 动态收窄｜The Social Network｜Eduardo 股权选择性稀释

## 0｜本轮问题

只测试一个动态问题：

> 同一主体、同一公司股权对象层，在主体已经真实拥有明确比例 equity x 后，资本结构事件能否让该 current x 在同对象层连续收窄，而不是简单二值 on/off？

本记录不从“联合创始人 / CFO / 朋友 / 被背叛者”等身份标签倒推 x；只看电影文本中已量化的 Facebook 股权对象及其现实比例变化。

## 1｜事实链

电影先给出旧 LLC 的股权：Mark 65%、Eduardo 30%、Dustin 5%。随后 Facebook 重新注册，Eduardo 签署新公司文件，被明确告知其新股数量为 1,328,334 股，对应 34.4% ownership share；文本同时说明未来投资者进入时股份可能被稀释。

后续在 Eduardo 回到公司后的冲突与 deposition 对照中，影片明确给出：公司新发行 24,000,000 股；Mark、Dustin、Sean Parker、Peter Thiel 的持股比例没有被同样稀释，而 Eduardo 的 ownership share 被稀释到 0.03%。

因此至少可观察到同一对象层的量化迁移：

```text
Facebook equity x
34.4%
↓ selective new-share issuance / capitalization event
0.03%
```

这不是“原来没有 x、后来失去 x”的二值故事；0.03% 仍是非零 ownership interest，但其 scope 被压缩到接近失去实质影响的程度。

## 2｜x-scope 固定拆分

```yaml
actor: Eduardo Saverin
object: Facebook equity interest in the reincorporated company

permission_type:
  confirmed_before:
    - ownership-interest
    - economic participation attached to 34.4% equity stake
    - shareholder-level rights attached to that stake
  confirmed_after:
    - residual ownership-interest attached to 0.03% stake
  not_inferred_from_equity_alone:
    - unilateral management
    - unilateral company disposition
    - unilateral final corporate decision
    - exclusive operational control

scope:
  before: 34.4% of company equity
  after: 0.03% of company equity

term:
  before: post-reincorporation / pre-dilution window
  after: post-new-share-issuance dilution window

revocability:
  not a simple revocation event; scope changes through capitalization mechanics

return_obligation: none shown

same-layer_pre-effect_veto:
  Eduardo is not shown to possess a same-layer veto that prevents the selective issuance/dilution from taking effect after the signed restructuring documents

global_override:
  corporate capitalization / issuance structure created under the signed agreements

ultimate_title:
  before: Eduardo owns 34.4% equity interest
  after: Eduardo retains only 0.03% equity interest

decision_structure:
  equity-scope change is produced through corporate issuance/restructuring rather than Eduardo's unilateral choice

consultation_structure:
  lawyers / company actors present; consultation does not restore the lost percentage

final_decision_structure:
  the capitalization event becomes effective without Eduardo preserving his prior percentage

execution_structure:
  issuance of 24 million new shares executes the dilution

co_decision_nodes:
  not inferred as a current joint final-decision right for Eduardo from the ownership label alone

scope_transition:
  broad equity share -> residual/minimal equity share

transition_trigger:
  selective capitalization / new-share issuance under previously signed restructuring documents
```

## 3｜关键压力

### 3.1 同一对象层，不是换对象

迁移前后对象都不是“Facebook 的友情”“CFO 职位”或“公司声望”，而是同一 reincorporated Facebook 的 equity interest。

因此这是干净的 scope contraction：

```text
same actor
+ same company
+ same permission family (equity ownership interest)
+ quantitatively narrower share
```

### 3.2 不把职位变化混进股权变化

影片冲突场景还暗示 Eduardo 的公司角色/署名位置同步恶化，但本记录不需要依赖这些事实。即使完全冻结 CFO、masthead、friendship 等关系变化，34.4% -> 0.03% 的股权比例变化仍独立成立。

所以不能把“被踢出团队”当成 x 收窄证据；真正证据是股权对象本身的量化重算。

### 3.3 不是 title unchanged 证明

本轮也不主张“所有 title 都保持不变”。相反，current canonical 要求 source-native title 与现实 permission bundle 分账。这里仅锁：同一 equity object 的 ownership scope 在资本结构事件后显著收窄。

## 4｜最近邻排除

### vs Alien / Ripley

Alien 是：

```text
同一 revoke permission
true -> time threshold -> false
```

本轮不是 time-lock，也不是权限整项关闭；是：

```text
同一 equity permission family
34.4% -> 0.03%
```

属于 **quantitative scope contraction**。

### vs Spider-Man 2 / Doc Ock

Doc Ock 是对象内部新增 autonomous execution node，导致 unilateral command 收窄。

本轮没有 endogenous AI / competing executor；收窄来自资本结构对同一资产份额的重新分配。

### vs external superior override

没有新增“上级命令节点”来直接否决 Eduardo 的每个股权行为。变化机制是公司发行新股后，他在同一总股本中的比例被选择性压缩。

因此本轮锁定新机制：

> **capital-structure selective dilution contraction**
> 资本结构选择性稀释型 x-scope 收窄。

## 5｜拿掉 / 反向

### 拿掉测试

如果拿掉新股发行 / capitalization dilution 事件，影片前一窗口明确存在的 34.4% equity scope 没有自然理由自动变成 0.03%。

所以该资本结构事件是本次 scope_transition 的必要解释变量。

### 反向测试

如果新投资进入以后 Eduardo 仍保持 34.4%，或者所有旧股东按同一比例同比稀释但 Eduardo 的相对对象层没有特殊收窄，则不能锁“选择性 x-scope contraction”这一机制。

影片恰好给出最小差异压力：deposition 明确逐一确认 Mark、Dustin、Sean、Thiel 的比例没有发生同样稀释，Eduardo 被压到 0.03%。

因此这是 selective，而不是一般融资背景噪声。

## 6｜第三因素冻结

冻结以下因素，不让它们代替 x 判定：

- Eduardo 是 CFO / co-founder；
- Mark 与 Eduardo 的友情破裂；
- 谁在道德上背叛谁；
- Eduardo 是否称职；
- Sean Parker 的个人影响；
- 诉讼最终结果；
- 现实历史中的 Facebook 股权结局。

只看电影 current window 中可观察的 equity object 与比例变化，本轮结论仍成立。

## 7｜zn / strict-v2

本轮不锁 zn。

Eduardo 对公平、友情、创始贡献或商业责任的态度都与利益、自保、公司冲突和关系受损混杂；在本窗口内没有必要为本轮 x-scope 研究强行构造一个 >=95 的不可轻易让渡原则。

```yaml
zn_current: not-locked
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

因此 strict-v2 verified positive 不变化。

## 8｜成熟度与统计

事实与分类均达到 evidence-locked 门：

```yaml
fact_confidence: 99
classification_confidence: 98
knowledge_status: evidence-locked
criterion_version: current-x-scope-distinction-v1_20260830
```

仓库总纲 current registry 在本轮启动时仍登记 dynamic transition `8 controls / 6 works`；latest main 已另有 Doc Ock 与 Alien 两条同 criterion 新 dynamic controls 尚未同步 registry，因此 evidence-layer 为 `10 / 8`。

本轮《The Social Network》此前未进入 current dynamic-transition independent-work 集合，故：

```text
10 controls / 8 works
-> 11 controls / 9 works
```

本轮不增加 ordinary positive、boundary guard、protected-range、strict-positive 或 strict-deferred 统计。

## 9｜本轮可靠结论

```text
source-native ownership 不是二值标签。

同一主体
+ 同一资产对象
+ 同一 ownership/equity permission family
可以因资本结构事件发生量化 scope contraction：

34.4% current equity x
-> 0.03% residual equity x
```

因此 future x-scope 分析不能只写 `ownership=true/false`；对可分割资产必须记录比例、对象子集或有效份额，并允许 current x 在 title/对象名不换的情况下发生连续收窄。

## 10｜下一轮最高信息增益

不要再收第二个普通“股份被稀释”的换皮案例。

优先寻找其真正镜像：

```text
same actor + same divisible asset pool
阶段 A：窄 current equity/resource x
↓ real recapitalization / transfer / allocation node
阶段 B：同一 permission family 的份额扩大
```

或者更高价值：title/ownership label 保持稳定，但 veto / disposition permission 因份额跨过真实 threshold 而从 `true -> false` 或 `false -> true`，把“连续比例 scope”进一步连接到“离散 decision-right threshold”。
