# CONTINUOUS_SHOT_VALIDATION_PROTOCOL｜第八轮连续镜头验证 v1

## 目标
验证系统不只会“单镜跑通”，还会把上一镜真实结果作为下一镜不可忽略的输入。

## 最小验证集
至少 2 个相邻镜头，推荐 3 个。

每个链接 `SHOT-n → SHOT-(n+1)` 必须核验：
1. previous_shot_id 对得上；
2. SHOT-n review = PASS 才能推进；
3. SHOT-n closing_state 存在；
4. SHOT-(n+1).opening_state 与上一镜 closing_state 一致；
5. 角色身份/服装/损伤/持有物/位置/朝向/场景/光线/关系/十元状态无无因跳变；
6. 素材版本未无理由漂移；
7. 若换场/跳时/换装，必须有显式 transition_reason；
8. render/task/review 都携带同一 lineage_id。

## 结果
- PASS：证据足够且连续性成立
- FAIL：有明确矛盾
- AMBIGUOUS：真实输出存在，但旧数据缺 closing/opening 等必要证据
- BLOCKED：缺真实渲染/关键帧/回执

## 历史数据回放
允许用旧 B 端真实执行结果检验协议，但：
- 旧任务没有 closing_state 时不得反推成 PASS；
- iteration/revision 不能冒充 story-continuous shots；
- 只能判定它能证明的层级。

## 新生产硬门
从本协议生效后：
- 每个 PASS 镜头强制生成 closing_state；
- 下一个镜头任务创建时自动复制为 opening_state；
- lineage_id / previous_shot_id 缺失时禁止连续生产模式；
- 下一镜若想改变锁定状态，必须写 transition_reason。
