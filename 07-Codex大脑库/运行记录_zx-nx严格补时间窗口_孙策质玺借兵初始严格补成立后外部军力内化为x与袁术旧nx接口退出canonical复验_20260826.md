---
type: ten-yuan-research-run
status: evidence-locked
pair: zx ↔ nx
topic: 严格补时间窗口 / 资源内化型 closure / canonical revalidation
work: 三国演义
character: 孙策
stage: 第十五回质传国玉玺向袁术借兵三千马五百 → 渡江取江东 → 第十七回袁术反向向孙策借兵而被拒
sample_slot: 严格补时间窗口正向控制 / 资源内化型
fact_confidence: 99
classification_confidence: 98
stable_essence_locked: false
initial_strict_zx_nx_complement: true
temporal_closure_verified_under_current_canonical: true
closure_mechanism: nx_external_resource_assimilated_into_subject_x_boundary_and_old_external_interface_no_longer_required
old_nx_relation_active_later: false
resource_state_transition: nx_external_resource → x_internalized_command_resource
later_zx_should_retro_link_to_old_nx: false
same_effective_time_window_later: false
canonical_refs:
  - 01-十元系统/05-十元语义空间/L1_十元即阴阳五行相反轴正本_v1.6.md
  - 01-十元系统/01-十元信息卡/【zx信息量卡v2】.md
  - 01-十元系统/01-十元信息卡/【nx信息量卡v2】.md
  - 01-十元系统/03-十元准度卡/zx_准度卡_v0.1.md
  - 01-十元系统/03-十元准度卡/nx_准度卡_v0.5.md
  - 01-十元系统/04-十元生克补卡/补/zx补nx_补卡.md
related_records:
  - 07-Codex大脑库/运行记录_zx-nx严格补规则冲突_孙策质玺借兵按正本补卡复核恢复严格补_20260826.md
  - 07-Codex大脑库/运行记录_zx-nx严格补关系_孙策借兵后军力内化与补关系时间窗口_20260820.md
sources:
  - 三国演义通行本·第十五回
  - 三国演义通行本·第十七回
created: 2026-08-26
formal_theory_change: false
---

# 运行记录｜孙策质玺借兵 strict 时间窗口 canonical 复验

## 0｜结论先行

本轮只验证“初始严格补成立以后，旧 `nx` 是否在后续仍是当前必经接口”，不重复制造孙策新的 zx/nx 人物标签。

按 current canonical：第十五回孙策质玺向袁术借兵的初始窗口已经完成 99/99 严格 `zx↔nx` 重验；本轮进一步确认，第十七回以前后军力状态变化为依据，旧袁术兵马 `nx` 接口已经完成**资源内化型 strict temporal closure**：

```text
初始：
袁术掌握三千兵、五百马的批准/交付权
→ 孙策必须请求并质押玉玺
= nx 外部资源接口

随后：
孙策把借入军力投入渡江、招将、扩军、取地
→ 江东军政系统形成
→ 兵马逐渐进入孙策持续统辖
= x 稳定调用资源

第十七回反向确认：
袁术反而向孙策借兵
→ 孙策可以拒绝
→ 自行点军守江口、决定后续军事路线
= 原袁术 nx 接口不再是当前必经门
```

因此：

```yaml
initial_strict_zx_nx_complement: true
temporal_closure_verified_under_current_canonical: true
old_nx_relation_active_later: false
resource_state_transition: nx_external_resource_to_x_internalized_command_resource
```

## 1｜剧情事实、触发、对象、动作、结果

### 触发

孙策已有取江东方向，但直属启动军力不足。吕范明确担心袁术不肯借兵；孙策提出以传国玉玺作质。

### 对象

- `zx` 对象层：孙策自己占据的江东公开扩张方向与现实推进。
- `nx` 对象层：袁术掌握的三千兵、五百马批准/交付接口。
- 后续转态对象：借入军力是否仍需袁术逐次批准，还是已进入孙策稳定统辖边界。

### 明确动作与结果

第十五回袁术见玉玺后同意借兵三千、马五百；孙策取得军马后立即领兵渡江，持续招将、扩军、取地。

第十七回袁术遣使向孙策借兵报仇，孙策明确拒绝，并自行点军守住江口、决定应对袁术的军事路线。

这个反向场景说明：后续“孙策能否调动当前江东军力”已经不再由袁术批准决定。

## 2｜zx / nx 当前判定

### 初始窗口 zx

沿用 current canonical 已锁结论：孙策自己占据江东扩张方向，并把自身军政权能公开压入现实，外部地盘、将领与军事秩序围绕其行动响应；`zx` 成立。

### 初始窗口 nx

沿用已锁结论：借兵前资源仍在袁术处分边界；孙策不能自行调用，必须请求、质押，并由袁术真实批准后才进入行动链；`nx` 成立。

### 后续窗口

本轮不因为“这些兵历史上来自袁术”继续追挂 `nx`。后续表现更符合：

```text
资源已经进入孙策持续统辖
+ 调动不再回袁术逐次批准
+ 袁术反而向孙策请求兵力
= x 内化
```

历史来源不能替代当前权限结构。

## 3｜关键压力与时间窗口

初始现实瓶颈是：

```text
孙策 zx 江东方向存在
+
直属启动军力不足
```

袁术军力接口直接补掉这个瓶颈。

闭环标志不是“过了两回书”，而是权限结构已经转态：

1. 借入军力进入孙策实际军事系统；
2. 孙策建立江东将领、地盘、守备与军令结构；
3. 后续不再需要袁术逐次放行；
4. 袁术反向求兵，孙策拥有现实拒绝权。

所以旧 `nx` 关系离开了当前有效窗口。

## 4｜拿掉测试

### 拿掉初始 nx

在第十五回尚未取得足够启动军力时，拿掉袁术兵马且不给等价外部军力：孙策的江东方向仍在，但留下明确启动军力缺口。因此初始 strict 不受本轮 closure 判定影响。

### 拿掉后续“历史来源”

到第十七回，只保留孙策已掌握的江东军队、地盘与守备接口，不再追溯“其中部分军力最初来自袁术”，孙策当前军事决策仍可成立。

因此：

> **历史来源 ≠ 当前 nx 端点。**

### 补回旧历史事实

补回“最初三千兵来自袁术”，只增加历史因果来源，不重新制造当前许可依赖。

## 5｜反向测试

若第十七回孙策调动相关军力仍必须向袁术请示，袁术可以收回、拒绝或重新分配，则旧 `nx` 仍应视为当前活跃，不能判 closure。

原文反而给出：

```text
袁术向孙策借兵
→ 孙策拒绝
→ 孙策自行点军守江口
```

因此 closure 成立。

## 6｜最近邻排除

### nx vs x

本轮核心正是该最近邻转态：

```text
nx：资源仍外置，每次调用须经他者许可
x：资源已稳定进入主体直接调用/处分边界
```

第十七回证据支持后者。

### nx vs xn

孙策后续招将、分兵、守隘有 `xn` 组织，但本轮主变量不是“怎么组织”，而是旧外部权限接口是否仍活跃。

### zx vs x

后续孙策仍可能继续 zx 高显影，但不能把后续 zx 反向追挂到已关闭的旧袁术 nx。后续每一轮都要重新问：当前瓶颈是什么、当前是否还需要同一个外部接口。

## 7｜第三因素冻结

冻结：孙策勇猛评价、玉玺象征意义、袁术称帝、孙策忠奸评价、战争最终胜负、曹操后续封官。

只保留：

```text
初始 strict 是否已经独立成立？
资源当前到底由谁稳定调用？
是否仍需原外部节点批准？
当前瓶颈是否仍是原瓶颈？
```

结论不变。

玉玺只解释初始接口为何被打开，不影响后续“军力是否已经内化为孙策 x”的权限事实。

## 8｜压力显影 / 稳定本体分层

本轮不锁孙策稳定人物本体，也不把后续 `x` 内化误写成人物换芯。

- 初始状态：`zx` 高显影 + 兵马资源层 `nx` 关系功能。
- 后续资源状态：旧外部兵马接口完成补缺并进入 `x` 稳定调用边界。
- 人物稳定本体：本轮不判。

## 9｜本轮新价值

此前两份 strict temporal closure（红孩儿、高唐州）都是：

```text
命名瓶颈被解决
→ 旧专业/许可/处分接口退出同一任务必经位置
```

孙策补出不同机制：

```text
外部 nx 资源进入主体稳定 x 边界
→ 原外部许可门消失
→ strict 当前窗口关闭
```

因此 strict temporal closure 现在至少出现两种机制：

1. **瓶颈解决 / 旧接口退出型**；
2. **资源内化为 x 型**。

本轮使该时间窗口边界达到《西游记》《水浒传》《三国演义》三部独立作品复验资格，应进入 pending-review，但不得直接修改 L1、信息卡、准度卡或补卡。

## 10｜最终结论

```yaml
fact_confidence: 99
classification_confidence: 98
initial_strict_zx_nx_complement: true
temporal_closure_verified_under_current_canonical: true
closure_type: resource_internalization_into_x
old_nx_endpoint_closed: true
later_zx_retro_link_to_old_nx: false
formal_theory_change: false
```

本轮不修改 canonical。
