---
type: ten-yuan-fire-axis-run-record
authority_level: L4
knowledge_status: evidence-locked
status: current-research-evidence
axis: fire
pair: zn-x
sample_type: strict-precondition-guard
work: 水浒传
character: 柴进
stage: 第52回高唐州柴皇城宅院争夺与丹书铁券保护失败
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  strict_gate_current: current-layer-specific-anchor-gap-v2_20260829
fact_confidence: 99
classification_confidence: 98
strict_test_allowed: false
strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
protected_range_x_claimed_by_nominal_legal_credential: true
observed_real_risk_test: true
observed_risk_exclusion_effect: false
stable_protected_range_x: false
negative_guard_mechanism: nominal-legal-protection-credential-fails-observed-risk-test
may_override_canonical: false
created: 2026-08-30
---

# 运行记录｜柴进丹书铁券：名义保护资格经过真实风险测试仍被覆盖，不足构成 stable protected-range x

## 1｜本轮问题

P0 当前优先寻找天然、单一、subject-specific、并且经过真实风险测试的 `protected-range / organized-boundary x`。

本轮不把“柴进有丹书铁券”直接当作 `x`，而只测试一个窄对象层：

> 柴氏住宅 / 家产是否因为丹书铁券与护持圣旨，真实进入一块能稳定排除外部侵夺与官府处分的 protected-range `x`？

## 2｜剧情事实

《水浒传》第52回：

1. 柴皇城面对殷天锡强夺住宅花园，明确以先朝丹书铁券作为保护依据，拒绝搬出。
2. 柴进到达后同样相信该保护资格可用于和高唐州权力系统理论，并安排回沧州取铁券。
3. 风险并非停留在口头：殷天锡继续强夺并殴打，李逵打死殷天锡后，高廉直接拘捕柴进。
4. 柴进再次以丹书铁券抗辩，但高廉仍对其用刑、收监；随后柴皇城家私被抄、人口被监禁、房屋园院被占。

所以这里存在一场真实的 observed risk test：

```text
名义保护凭证 / 法统资格已经存在
+
外部侵夺与官府处分真实进入
→ 保护边界是否现实阻断同一结果？
```

结果为：没有。

## 3｜x 判定

必须拆开至少三个对象：

```text
A. 丹书铁券这个物件
→ 可以另查物品占有 x

B. 柴氏拥有某种外部法统 / 名义保护资格
→ 外部制度关系存在

C. 柴氏住宅 / 家产形成稳定可排除侵夺的 protected-range x
→ 本轮不成立
```

原因：C 已经接受真实风险测试，但外部节点仍能现实拘捕、用刑、抄家、占房。

因此锁定：

```yaml
stable_protected_range_x: false
observed_real_risk_test: true
observed_risk_exclusion_effect: false
```

这里不是“以后可能被撤销所以以前从未有 x”。相反，本轮直接观测到的是：当保护效果真正需要出现时，被测 protected-range 没有稳定阻断现实结果。

## 4｜zn 判定

本轮不锁 `zn`。

柴进愿意维护宗族住宅、相信法统保护、决定通过官府/京师理论，都可以由亲属责任、利益、法律期待与现实保产目标解释。当前桥段不足独立证明一项在拿掉身份、法统收益和亲属责任后仍具有未来指导资格的内部不可让渡原则。

因此：

```yaml
zn_current_for_tested_protection_principle: not-locked
zn_x_cooccurrence: false
strict_test_allowed: false
```

## 5｜拿掉与反向测试

### 拿掉“丹书铁券 = stable protected-range x”假设

剧情仍然完整可解释：柴进拥有并相信一个外部保护资格，但高唐州现实权力节点仍然成功覆盖它。

### 反向

如果要锁真正的 stable protected-range `x`，至少应看到：

```text
对象仍处于被测保护边界内
+
外部风险真实进入
+
主体 / 该 x 能稳定阻断、否决或迫使风险改道
```

只拥有凭证、称号、血统、法律承诺或主体自述“这里受保护”，都不够。

## 6｜最近邻排除

- `x vs z/外部承认`：丹书铁券首先证明外部法统与承认，不自动证明现实保护边界。
- `x vs nx`：利用铁券去官府/京师理论更像外部制度通道是否可用的问题；不能用“存在一条制度路径”倒推 stable `x`。
- `x vs zx`：李逵以暴力打死殷天锡是另一对象层的直接作用，不是柴进住宅保护 `x`。
- 身份/血统：柴进自称金枝玉叶、世宗后裔，均不得替现实保护效果上证。

## 7｜第三因素冻结

冻结：

- 柴进家世声望；
- 丹书铁券的象征权威；
- 李逵武力；
- 梁山后续救援；
- 高廉是否违法。

只保留：

> 被测对象是否在保护边界内 + 真实风险是否进入 + 该边界是否现实改变同一结果。

结论仍为 `stable protected-range x = false`。

## 8｜本轮新纪律

### 8.1 名义保护资格 ≠ stable protected-range x

```text
legal / dynastic protection credential exists
≠
real protected range already established
```

### 8.2 protected-range 的现实门需要风险测试

最近“孙悟空金兜山画圈”案例锁的是：只有主体自述、没有圈内风险观测，不足锁 `x`。

柴进这条进一步补出反面：

```text
保护凭证存在
+
真实风险确实进入测试
+
保护仍未阻断结果
→ 可以主动反证 stable protected-range x
```

即：

> **缺测试时不能凭声明锁；有测试而失败时更不能凭名位保留。**

## 9｜成熟度与统计

```yaml
fact_confidence: 99
classification_confidence: 98
authority_level: L4
knowledge_status: evidence-locked

strict_positive_increment: false
strict_negative_guard_increment: false
strict_precondition_guard_increment: true
cross_work_increment: false
```

《水浒传》已存在于 strict-precondition guard 的独立作品集合，因此本轮只增加 control，不增加 independent work。

## 10｜治理边界

本记录不修改 L1、zn/x 信息卡、准度卡或任何 L2 canonical。

current canonical 高于本记录；本轮只新增 P0 protected-range 搜索中的一条 L4 前置护栏。
