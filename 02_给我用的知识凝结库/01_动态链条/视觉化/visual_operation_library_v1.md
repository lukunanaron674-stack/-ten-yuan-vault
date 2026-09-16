# Visual Operation Library v1.0

> 状态：Definition Frozen / Image Validation Pending

本库只负责动态链的视觉结构操作，不定义或改写十元理论。

| ID | 母型 | 工程名 | 核心变化变量 | 最小视觉证据 | 主要混淆对象 |
|---|---|---|---|---|---|
| M01 | 结构改写 | REWIRE | connectivity | 元素基本不变，但连接对象/邻接关系改变 | REPLACE / DETACH / TWIST |
| M02 | 分流换轨 | REDISTRIBUTE | flow_assignment | 通道系统已存在，流向或目的地分配改变 | GROW / REPLACE |
| M03 | 压缩收束 | CONVERGE | freedom_and_spread | 多→少、散→聚、独立方向和自由度下降 | ENCLOSE |
| M04 | 扩张生长 | GROW | node_edge_generation | 原结构保留，并出现此前不存在的新节点/新边 | REDISTRIBUTE / INVADE |
| M05 | 包围闭合 | ENCLOSE | boundary_closure | 开放边界逐渐闭合，形成明确内外关系 | CONVERGE / RECIRCULATE |
| M06 | 侵入穿界 | INVADE | boundary_crossing | 主体跨越原边界并占据原本外部/他者区域 | GROW |
| M07 | 脱离断连 | DETACH | attachment | 原共享连接减少/消失，并产生独立部分 | REWIRE |
| M08 | 回流循环 | RECIRCULATE | path_closure | 下游重新连接上游，形成可重复闭合路径 | ENCLOSE |
| M09 | 置换替代 | REPLACE | identity_occupancy | 结构槽位基本不变，但占有者被替换并继承关系 | REWIRE / REDISTRIBUTE |
| M10 | 扭曲变形 | TWIST | orientation_local_geometry | 元素身份和总体连续性保留，局部方向/角度持续变形 | REWIRE |

## 冻结判据

### REWIRE
- 节点数量：近似不变
- 边数量：近似不变
- 邻接关系：改变
- 结构角色：改变
- 拒判：只有弯曲、旋转、颜色变化，没有连接对象变化

### REDISTRIBUTE
- 通路集合：预先存在
- 流向/目的地分配：改变
- 可改变流量权重
- 拒判：新通路本身是从无到有生成

### CONVERGE
- 独立路径数：下降
- 可选择方向：下降
- 空间范围：下降
- 局部密度：上升
- 自由度：下降
- 拒判：只靠巨大中心物、黑洞、压迫人物表达“收束”

### GROW
- 旧结构：保留
- 新节点：增加
- 新边：增加
- 活动端点：增加
- 覆盖区域：通常增加
- 拒判：只是把已有通路重新分配流量

### ENCLOSE
- 边界：open → closed
- inside/outside relation：新生成
- 逃逸路径：减少
- 拒判：只有主体向中心汇聚而外围边界没有闭合

### INVADE
- boundary_crossing：true
- foreign_region_occupancy：增加
- invasion_front：推进
- 拒判：只靠怪物、红色、武器、攻击表情表达侵入

### DETACH
- shared_boundary：减少
- connecting_edges：减少
- independent_component：生成
- 拒判：断开后立刻建立新连接并完成重连，应优先判 REWIRE

### RECIRCULATE
- path：open → closed
- downstream_to_upstream_connection：生成
- repeated_passage_possible：true
- 拒判：闭合的是空间边界而不是运动路径

### REPLACE
- structural_slot：基本不变
- old_occupant：退出
- new_occupant：进入
- surrounding_relations：继承或重绑
- 拒判：只是对象左右交换，没有结构角色继承

### TWIST
- element_identity：保留
- global_continuity：保留
- local_orientation：改变
- relative_angle：改变
- 拒判：邻接关系已经改变，应优先考虑 REWIRE

## 高风险混淆对

| 混淆对 | 判别问题 |
|---|---|
| REWIRE ↔ REPLACE | 换的是连接，还是占有结构槽位的对象？ |
| REDISTRIBUTE ↔ GROW | 新路径原先已经存在吗？ |
| CONVERGE ↔ ENCLOSE | 主体在汇聚，还是外围边界在闭合？ |
| INVADE ↔ GROW | 是生成新结构，还是跨越他者边界？ |
| DETACH ↔ REWIRE | 断后独立，还是断后建立新连接？ |
| RECIRCULATE ↔ ENCLOSE | 闭合的是路径还是空间边界？ |
| TWIST ↔ REWIRE | 邻接关系有没有改变？ |
| REPLACE ↔ REDISTRIBUTE | 结构槽位换占有者，还是流量换目的地？ |

## 三层视觉结构

```text
动态母型 / Visual Operation
↓
十元关系：谁作用谁、方向、体量、条件、阶段
↓
题材转译：人物 / 建筑 / 道路 / 角色关系 / 场景
```

不得以题材转译结果反向修改十元理论。
