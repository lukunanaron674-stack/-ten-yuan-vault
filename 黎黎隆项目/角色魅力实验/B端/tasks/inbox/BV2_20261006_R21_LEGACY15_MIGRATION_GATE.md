# B端 v2｜R21｜旧15秒任务迁移 Gate

status: DONE
execution_subject: B端动态链导演层
production_target: local_4080_mod_32GB
render_status: NOT_RENDERED

## 本轮发现

R20 `LLL_B_20260923_2010_R20` 仍为旧规格：A_15s + B_15s，且状态为 `queued_for_workbuddy_validation`。其角色与场景引用是可验证的：LLL-MAIN-001 + SCENE-06；但动态链 `ZX → XN克ZX → Z → ZX` 与既有实验方向重复，不应仅为了改时长再次生成同义实验。

## Gate 判定

- character_asset_gate: PASS
  - version_id: LLL-MAIN-001
  - asset_id: LLL_H3_character_card_001
  - sha256: 5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143
- scene_asset_gate: PASS
  - asset_id: SCENE-06
  - blob_sha: 7f600f79069d4f5a839dd44f2160182b0066cb3e
- subject_definition_gate: PASS
- retention_gate: PASS
- historical_dedup_gate: BLOCKED_DUPLICATE
- duration_gate: BLOCKED_LEGACY_15S
- director_packet_gate: STOP_NOT_NEEDED_UNTIL_NEW_HYPOTHESIS

## subject_definitions

唯一角色实体为 LLL-MAIN-001 黎黎隆；角色卡多视图均属于同一角色。SCENE-06 只提供空间、地面方向、技术设施关系与双色光线，不覆盖角色设计。

## retention_analysis

must_keep: 同一脸型与红色长发；红白黑机械装甲与青蓝功能信号；机械龙爪脚；分节长机械龙尾；既有头部卡扣与机械模块；同一角色比例和剪影。
must_not_redefine: 不新增翅膀/武器/服装/机械结构；不把场景设施接入身体；不改变角色配色和比例；动作实验不得反向冻结为正式能力。

## changed_variable

本轮只改变“任务资格状态”：把 R20 从可继续验证的旧任务，改判为“历史证据保留、禁止直接迁移生产”。不改变角色、场景或世界观设定。

## dynamic_chain

R20 historical chain: `ZX → XN克ZX → Z → ZX`。
本轮不生成新链；下一张生产卡必须选择历史未覆盖的可检验关系，不能只把同一链压缩成10–11秒。

## shot_grammar

R20 的固定全身三分之四中远景、固定机位、固定双色光线可作为历史镜头语法证据，但不得直接复制为新实验。

## H3 prompt

NONE。本轮去重 Gate 不生成 H3 prompt，避免重复堆卡。

## validation

下一轮只有同时满足以下条件才允许生成新任务：
1. 角色资产 PASS；
2. 场景资产 PASS；
3. 历史动态链/动作映射未覆盖；
4. changed_variable 单一且可观察；
5. 单段 10–11s；
6. Director Packet 可机械读取；
7. 同 prompt 双 seed 仅用于抽样，不把双 seed 当两个实验。

## feedback

R20 保留为历史证据，不删除；不得直接送本地4080渲染。下一轮优先搜索 Gate 已通过但动态链未覆盖的角色×场景组合；若没有，则 STOP_NO_NOVEL_HYPOTHESIS，而不是继续生成同义卡。
