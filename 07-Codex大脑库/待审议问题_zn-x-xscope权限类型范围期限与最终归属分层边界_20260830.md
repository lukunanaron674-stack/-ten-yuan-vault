---
type: ten-yuan-fire-axis-pending-review
authority_level: L4
knowledge_status: pending-review
status: pending-review
axis: fire
pair: zn-x
question: x是否必须按对象、权限类型、范围、期限、原节点与最终裁定层分账而不得由窄scope倒灌宽scope
criterion_version:
  l1_axis: L1_十元即阴阳五行相反轴正本_v1.6
  x_scope_gate: current-x-scope-distinction-v1_20260830
positive_controls: 4
positive_cross_work_count: 3
boundary_guards: 1
boundary_guard_works: 1
works: [西游记, 三国演义, 红楼梦]
may_override_canonical: false
created: 2026-08-30
updated: 2026-08-30
---

# 待审议｜zn-x x scope：权限类型、范围、期限与最终归属必须分层

## 0｜候选命题

同一 `x` 不能只用一个粗糙的 `true/false` 描述。

当前 3 部独立作品、4 个高置信正向控制共同支持：

> **`x` 必须至少写清：被测对象、权限类型、权限范围、期限/返还义务、原节点是否保留覆盖/撤回权、最终裁定层。某一窄 scope 的现实 `x=true`，不能自动倒灌为邻近更宽 scope 的 `x=true`。**

当前另有 1 条高置信反向边界护栏支持：

> **更宽 scope / 永久最终归属未成立，也不能反向把已经直接生效的窄 current `x` 抹成 `x=false`。未来可撤回或上位保留更高范围覆盖权，与当前局部 `x=true` 可以同时成立。**

本文件只到 L4 `pending-review`，不得覆盖 current canonical。

## 1｜控制 A：《西游记》孙悟空龙宫试兵器→金箍棒｜99/98

最小差异：

```text
刀 / 叉 / 戟：
可接手试用
→ trial-use / temporary handling x=true
→ ownership/full disposition x=false

金箍棒：
获赠 + 带离原节点 + 长期随身 + 反复排他调用
→ stable possession/use/disposition x=true
```

支持：

> **能接触 / 能临时使用 ≠ 长期归我处分。**

## 2｜控制 B：《三国演义》刘备借荆州｜99/98

最小差异：

```text
驻军 / 守城 / 治理 / 部分交割
→ current territorial governance/control x=true

返还义务 + 东吴索还 + 最终归属争议
→ ultimate title / permanent ownership 不得由 current control 倒推
```

支持：

> **当前能管 ≠ 永久归我。**

同时：

> **未来有返还义务 ≠ 当前从未有真实 x。**

## 3｜控制 C：《三国演义》孙策质传国玉玺｜99/98

最小差异：

```text
玉玺具体物件：
可持有 / 可质押 / 可现实交付
→ object possession/transfer x=true

玉玺象征的皇帝权能 / 正统裁定：
不能仅凭持有玉玺锁定
→ represented authority/sovereignty x=false
```

支持：

> **我能处分权力的象征物 ≠ 我已经处分象征物代表的权力。**

## 4｜控制 D：《红楼梦》探春受托理家→全园抄检｜99/97

最小差异：

```text
第55-56回：
日常公账 / 局部家务现实裁处可直接生效
→ local current management x=true

第74回：
王夫人仍可越级发动全园抄检
探春能守局部但不能取消全局行动
→ global/final override x=false / not locked
```

支持：

> **局部真实 x ≠ 全局最终 x。**

## 5｜反向边界护栏 A：《红楼梦》王熙凤协理宁国府｜99/98

第13回协理授权来自贾珍、王夫人，上位结构没有退出：重要事项仍保留回问/覆盖，协理本身也不是永久最终归属。

但第14回迟到媳妇处分中，凤姐可以直接决定打二十板、革一月银米，执行者立即照办，未发生逐次重新申请同层许可。

因此：

```text
current local disciplinary x = true
+
higher-scope override / future revocability = true
```

支持：

> **revocability ≠ current non-possession。**

以及：

> **上位节点保留未来收回或更高范围覆盖权，不等于主体在撤回发生以前没有真实 current `x`。**

该护栏不增加普通 positive control，也不增加 cross-work；它用于防止 x-scope 在禁止“窄→宽倒灌”后滑向另一极端“宽不成立→窄也抹除”。

## 6｜跨作品共同变量

四个正向控制虽然测试不同 scope 维度，但共同变量一致：

```text
一个较窄的现实权限已经成立
↓
是否可以把它向更宽的权限类型 / 时间 / 范围 / 代表权能传播？
↓
不可以，必须重新取证
```

反向边界补充：

```text
更宽 scope / 永久最终归属没有成立
↓
是否可以反向抹掉已经直接生效的窄 current x？
↓
也不可以
```

因此 current `x` 建议研究层至少按以下字段记录：

```yaml
object: 被测对象
subject: 掌握主体
permission_type: 接触/使用/保管/调用/管理/处分/否决/排除
scope: 局部/全局/对象子集
term: 临时/期限内/持续
source_node: 权限来自何节点
revocability: 是否可被撤回
return_obligation: 是否有返还义务
override_node: 谁仍可现实覆盖
current_same_layer_effect: 当前同层决定能否直接生效
ultimate_title: 最终归属是否成立
represented_authority: 凭证所代表权能是否另证
```

这是 L4 方法建议，不自动改 L2 数据结构。

## 7｜拿掉与反向测试的统一协议

### 7.1 窄 scope 拿掉

拿掉较窄 scope 后，若相关当前行为不再可能直接生效，说明窄 scope 的 `x` 有现实作用。

### 7.2 宽 scope 反向门

要升级到更宽 `x`，必须另证：

- 原节点是否退出对应控制范围；
- 主体是否无需逐次重新获得许可；
- 上位节点是否还能同层覆盖；
- 权限是否跨出原期限/返还条件；
- 凭证或物件背后的代表权能是否真的由现实节点响应；
- 局部决定是否能扩展到全局最终裁定。

### 7.3 可撤回边界

未来可撤回不是 current `x` 的反证。要否定 current `x`，优先检查：

```text
当前同一对象层
→ 主体每次决定是否必须重新申请许可？
→ 上位节点能否在结果生效前逐次说“不”？
→ 未批准前主体决定是否不能直接进入执行？
```

如果这些答案为“否、否、可以直接执行”，则 current local `x` 仍可能高纯成立；后续真正撤回时，应记为 lifecycle 结束，而不是倒写过去从未有 `x`。

### 7.4 禁止双向倒灌

以下都禁止：

```text
能试用 → 所有权
当前治理 → 永久产权
拿着印信 → 代表权力
局部管理 → 全局最终权

永久/全局 x 不成立 → current local x 也不成立
未来可撤销 → 当前从未有 x
```

## 8｜最近邻与对象层纪律

- `x vs z`：名位/认可/凭证象征不替现实权限。
- `x vs nx`：授权来源不否定授权生效后的 current x，但来源节点可能限定 scope。
- `x vs xn`：会运行流程不等于对象完整归属。
- `x vs zx`：一次扩张或夺取行为不能替代后续稳定 scope 的审计。
- 同一人物在别的对象层拥有宽 `x`，不能给当前被测对象补票。
- `revocability` 与 `current_same_layer_effect` 必须分账；未来撤回是 lifecycle 问题，不能倒写 current scope。

## 9｜成熟度

```yaml
authority_level: L4
knowledge_status: pending-review
criterion_version: current-x-scope-distinction-v1_20260830
positive_controls: 4
positive_cross_work_count: 3
boundary_guards: 1
boundary_guard_works: 1
works:
  - 西游记
  - 三国演义
  - 红楼梦
may_override_canonical: false
```

达到 pending-review 后，**停止继续堆普通正向 x-scope 案例**。

## 10｜下一步高信息增益

1. **共同持有 / 共同否决 vs 单方处分**的最小差异；
2. **上位节点平时不逐次覆盖，但可整段撤回**的第二独立作品复验，确认本轮 revocability boundary；
3. scope 变化与 lifecycle 分账；
4. 表面 scope 不同但实际属于同一现实权限的反例。

## 11｜不修改 canonical

本文件不修改：

- L1 十元—五行正本；
- `x/zn` 信息卡与准度卡；
- `zn补x_补卡`；
- strict v2 gate。

TASK_DONE:ZNX_XSCOPE_PENDING_REVIEW_REVOCABLE_BOUNDARY_20260830
