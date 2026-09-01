---
type: ten-yuan-fire-axis-evidence-record
authority_level: L4
knowledge_status: evidence-locked
axis: fire
pair: zn-x
work: The Martian (2015)
character: Mark Watney
stage: Pathfinder恢复通信→十六进制相机交互→rover软件hack→自由文本通信
criterion_version: current-x-scope-distinction-v1_20260830
sample_type: x-scope-dynamic-transition
mechanism: channel-capacity-resolution-expansion
fact_confidence: 99
classification_confidence: 98
x_scope_dynamic_transition_increment: true
x_scope_dynamic_transition_work_increment: true
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
protected_range_increment: false
created: 2026-09-01
---

# zn↔x 火轴边界压力测试｜The Martian｜Mark Watney｜通信 channel-capacity 扩张

## 1. 本轮结论

本轮不产生 strict-v2 正例。新增一个 current x-scope 动态控制：

> **同一 actor、同一通信对象、同一 communication-use permission family，可以在 permission_type 仍然成立且 title/actor/object 不变时，仅因现实接口能力升级而发生 `channel-capacity / resolution expansion`。**

不能只写：

```text
can communicate = x=true
```

还必须继续记录：

```text
能传什么
一次能传多少
表达空间有多大
是否只能离散选择
是否可自由生成消息
```

即：**permission existence ≠ permission expressive scope / channel capacity。**

## 2. 事实链

被测窗口固定为 Watney 恢复 Mars Pathfinder 后的通信升级过程。

1. Pathfinder 恢复后，Watney 与 NASA 已经重新取得现实通信接口；最初返回通道主要依赖 Pathfinder 相机转向。
2. 为提高表达能力，Watney 把十六进制符号布置在相机周围，让 NASA 通过相机指向符号组合更复杂消息。
3. NASA 随后向 Watney 发送修改 rover 软件的指令，使 rover 能与 Pathfinder 的广播频率连接。
4. 修改完成后，Watney 与 NASA 可以直接进行长文本式双向消息，不再需要逐字符依赖相机指向十六进制标记。

影片转录直接给出 Watney 从 hexadecimal camera interaction 过渡到“hack the Rover so that it can talk to Pathfinder”，随后屏幕上开始出现完整文本消息。

技术背景方面，Mars Pathfinder 工程资料说明 Pathfinder 存在可用于低层命令/软件访问的串行接口；对电影的技术核查也认为用 Pathfinder 接入 rover、建立更长文本通信在概念上具有可行性。

## 3. x 权限结构

```yaml
actor: Mark Watney
object: Mars↔Earth communication channel mediated by Pathfinder / rover

permission_type:
  stage_A_confirmed:
    - contact/use communication interface
    - receive NASA-directed camera signals
    - send observable written responses
  stage_B_confirmed:
    - use same communication relationship
    - send free-form text
    - receive free-form text

scope:
  stage_A:
    mode: camera-pointing + physical cards / hexadecimal encoding
    expressive_scope: discrete / low-capacity / character-sequence constrained
    message_generation: indirect
  stage_B:
    mode: rover-linked text communication
    expressive_scope: substantially broader free-form text
    message_generation: direct text interface

term:
  stage_A: Pathfinder contact restored before rover patch
  stage_B: rover software modification active

revocability:
  not_tested_as_main_variable: true

return_obligation:
  none

same-layer_pre-effect_veto:
  stage_A: no independent human veto over each valid camera exchange
  stage_B: no independent human veto over each valid text exchange demonstrated

global_override:
  physical communications hardware / link availability remains a system constraint

ultimate_title:
  irrelevant; no ownership inference used

decision_structure:
  not the tested variable

consultation_structure:
  NASA engineers provide instructions for the upgrade

final_decision_structure:
  not the tested variable

execution_structure:
  stage_A: Watney physical signs + Pathfinder camera + NASA operators
  stage_B: Watney rover software modification + Pathfinder link + NASA text system

co-decision_nodes:
  none relevant to whether the tested communication capacity itself exists

scope_transition:
  low-capacity discrete coded interaction
  -> substantially higher-capacity free-form text interaction

transition_trigger:
  rover software/interface modification connecting rover communication to Pathfinder
```

## 4. 关键压力

本轮最重要的不是“从没有通信到有通信”。

在 stage_A，communication `x` 已经现实成立：Watney 与 NASA 可以互相传递信息，而且 hexadecimal 方案可以传递比 yes/no 更复杂的内容。

真正变化的是：

```text
same communication permission family
+
same actor
+
same Pathfinder-mediated object layer

low-capacity discrete encoding
→ interface/software upgrade
→ free-form text channel
```

因此应把 `scope` 中的 channel capacity / expressive resolution 当作 current-x 的现实属性，而不是看到“都能通信”就把两个阶段压成同一个 `x=true`。

## 5. 最近邻排除

### 不等于 Eduardo / The Social Network

Eduardo 案锁的是：

```text
divisible asset share
34.4% -> 0.03%
```

即同一 ownership/equity permission family 的**对象份额比例**变化。

本轮不是资产份额，也没有 ownership 百分比；变化的是同一 use/call permission 可承载的**信息表达容量与交互分辨率**。

### 不等于 Alien / Ripley

Alien 案锁的是同一 revoke permission 随时间阈值从 true→false，即 permission persistence / revocability contraction。

本轮 permission 没有关闭，反而持续存在；只发生容量层扩张。

### 不等于 Jurassic Park / Arnold

Arnold 案锁的是特定 direct-reversal command path 因 hidden command / audit trail lockout 失效，同时 whole-system recovery interface 保留。

本轮没有 permission path 被封锁；是既有 channel 的表达能力被升级。

## 6. 拿掉测试

拿掉 rover software/interface upgrade：

- Pathfinder 仍可通信；
- camera/hexadecimal 低容量交互仍可继续；
- 但自由文本式 direct messaging 不会凭空出现。

因此升级节点解释的是**scope expansion**，而不是 communication permission 的首次诞生。

## 7. 反向测试

若 rover hack 后 Watney 仍只能通过相机逐符号编码、不能直接收发自由文本，则只能判“接口形式变化”，不能判 channel-capacity expansion。

影片实际给出更复杂、直接的完整文本交流，因此 effect-test 通过。

## 8. 第三因素冻结

冻结以下因素：

- Watney 的宇航员/植物学家/工程师身份标签；
- NASA 的机构权威；
- “全世界支持他”的外部认可；
- 生存主题、孤独情绪、最终救援结果；
- Pathfinder 的历史所有权；
- Watney 是否聪明、幽默或善于解决问题。

只保留可观察的通信接口结构变化，结论仍成立。

## 9. zn / strict-v2

本轮不锁 `zn`。

Watney 的“活下去 / work the problem”足以描述当前目标与行为功能，但在本窗口没有必要把它升级为 ≥95 的不可让渡 internal principle；更不能因为通信升级帮助生存，就把技术接口倒推成 strict `zn↔x`。

```yaml
zn_current: not-locked
same_object_layer_for_strict: not-entered
strict_test_allowed: false
strict_v2_verified_positive_increment: false
strict_v2_deferred_increment: false
```

strict-v2 verified positive 保持 0。

## 10. 成熟度与统计

本轮启动时 current registry：

```text
x_scope_dynamic_transition_controls: 12
x_scope_dynamic_transition_works: 10
```

之后 latest main 已新增 Jurassic Park / Ray Arnold 的同 criterion 动态控制，但尚未同步 registry，因此本轮写前 evidence-layer 为：

```text
13 controls / 11 works
```

《The Martian》此前进入的是 protected-range criterion，不在 `current-x-scope-distinction-v1_20260830` 的 dynamic-transition work 集合中；不同 criterion_version 不混算。因此本轮可计：

```text
x_scope_dynamic_transition_controls: +1
x_scope_dynamic_transition_works: +1

evidence-layer:
13 / 11
→ 14 controls / 12 works
```

其余：

```yaml
strict_v2_verified_positive: +0
strict_v2_deferred: +0
strict_precondition: +0
x_scope_boundary_guard: +0
protected_range: +0
```

## 11. 新增方法护栏

锁定：

> **communication/use `x=true` 不足以描述现实 scope。对信息接口还要记录可表达集合、带宽/容量、交互分辨率与直接性。**

最小表达：

```text
permission exists
≠ permission capacity fixed

same communication x
can expand without actor/title/object change
```

建议把 `capacity_or_resolution` 作为 x-scope 的可选扩展字段；它不替代既有固定字段，只在对象本身具有连续容量、带宽、额度、吞吐或表达分辨率时启用。

## 12. 证据来源

- The Martian (2015) transcript：hexadecimal camera interaction → rover hack → direct text exchange
  https://transcripts.simpleremix.com/script.php/the-martian-2015-FLyO
- Space.com 对电影 Pathfinder 通信方案的技术核查：hex / camera 与 Pathfinder-rover text-link 方案
  https://www.space.com/30737-the-martian-nasa-mars-pathfinder-lander.html
- NASA Mars Pathfinder / rover engineering background（用于接口技术背景，不替代影片剧情事实）
  https://science.nasa.gov/resource/rover-camera-mosaic-of-lander-wedge/

## 13. 下一轮优先

P0 仍高于本分支：继续寻找 `zn≥95 + natural-object x≥95 + same current window/layer` 且两侧 competing anchor 都可冻结的 strict-v2 候选。

若 P0 无 ≥95 材料，下一条 x-scope 最值得找本轮的压力镜像：

```text
same actor + same object + same permission family
high-capacity interface
→ real bandwidth/quota/resolution restriction
→ low-capacity interface remains usable
```

即：**permission 不关闭，但 capacity/resolution 被真实压窄**。这比再找一次“接口完全断掉”更有信息增益。
