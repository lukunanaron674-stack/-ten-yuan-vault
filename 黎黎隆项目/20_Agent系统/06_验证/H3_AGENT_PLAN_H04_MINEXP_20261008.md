# H3_AGENT_PLAN｜H04 首个最小真实实验｜2026-10-08

source_task: Linear 674-216
parent_system: 674-276 / 674-286
character: H04 旧门看守人
cycle_status: WAIT_RUNTIME_TEST

## Z-H3
本轮只回答一个问题：**在 H04 已 READY_FOR_H3 的条件下，4080 本地 H3 对“单一低复杂度动作 + 固定/近固定机位”的身份与动作稳定性是否能跨两个 seed 复现。**

不扩 H06/H09；不跑 T01–T08 大批次；不做 LongTake。

## local XN
- CHARACTER_CARD_READY=PASS（674-257；GitHub CHARACTER_H3_CARD_PACK/H04/card.md）。
- production_gate=READY_FOR_H3（674-258 receipt；角色实验对象卡已登记）。
- H04 当前主参考：H04-GRID-20260929-CELL-TR。
- 主参考 SHA256: a4f3153eec80b46596097525ebf48b9ec9ea92f81388e5d1dd8e9c6950ec5fb7。
- H04 场景：H04-SCENE-P00-C01-GATE-20261006。
- 场景 SHA256: c4941cd175692ea7660dace2b788b8075a3a7905ccebf5577e1653efbf9a4b41。
- 角色卡允许：观察、核验、转头、转身、迈步、调整位置、持判定器物检查。
- 禁止把 UNKNOWN 动作能力（跑跳/格斗/施法/高速连续动作）带入首测。
- 真实 runtime 未发生前不得把 migrated/candidate 规则升级 VERIFIED。

## NX
NX-H3-H04-01: 同一 H04 角色包、同一场景、同一导演包下，两个 seed 是否都能保持 identity/body/costume，并完成“察觉→转头→轻微跟转/一步→停住”的顺序。

## PATH
角色/场景资产 locator + SHA：READABLE/UNDERSTOOD（由 674-258 与 experiments_manifest 提供）。
4080 H3 runtime：等待真实 worker receipt；本轮不得宣告 VERIFIED。

## 最小实验
test_id: H3-H04-MIN-001
duration: 10s
runs: 2
variables_changed: seed only
controls_locked:
- character H04
- Picture1 H04-GRID-20260929-CELL-TR
- Picture2 H04-SCENE-P00-C01-GATE-20261006
- prompt_version H3-H04-MIN-001-p1
- duration 10s
- camera fixed / near-fixed
- no extra character / weapon / costume redesign / scene rebuild

### Director packet
Start: H04 在归返门位自然站定，持青绿色提灯/判定器物，注意力未锁定异常。
Beat 1: 画面侧前方出现可被察觉的轻微异常动静；不新增第二角色。
Beat 2: H04 先转头与视线朝异常方向。
Beat 3: 身体轻微跟转，向该方向迈一步。
End: H04 停住并保持观察/核验姿态，提灯仍在，身份锚与服装结构不变。

Camera: 固定中景或仅极轻微稳定前推；禁止绕拍、突然变焦、跳切。
Negative: 换脸、遮脸、帽型改造、删除/武器化青绿提灯、服装重设计、肢体增殖、第二角色、复杂打斗、施法、高速动作、背景重建、字幕、Logo。

## Acceptance
每 run 必须本地审核：
identity_stability / body_ratio_stability / costume_structure_stability / action_completion / action_order / limb_integrity / scene_continuity / camera_continuity / flicker / duplicate_character / unexpected_redesign / end_state_match。

判定：
- 两 seed 均工程成功且核心 identity/body/costume/action_order/end_state PASS → H04_MINEXP=PASS，进入下一最小 Z-H3（镜头运动或动作复杂度二选一）。
- 一 PASS 一 FAIL/PARTIAL → UNSTABLE，先做 failure_family 定向实验，不扩批次。
- 两条同类 FAIL → FAIL，回写对应 Z-H3；若为 identity/body/costume 根因则反流 L1/L2/282。
- OOM/workflow error → WAIT_RUNTIME_TEST/BLOCKED_RUNTIME，不改角色 prompt。

## Worker handoff
A端只消费真实 path+SHA 与本 packet；不得换图。
运行前必须再次核对：
task_id / Picture1 path+SHA / Picture2 path+SHA / prompt_version / duration / seed。
输出 MP4 + start/q1/mid/q3/end + first_frame + output SHA + local review report。
Linear 只回结构化 receipt，不上传 MP4。

## STOP
本轮到“最小实验包已施工、等待真实4080执行”为止。
cycle_status=WAIT_RUNTIME_TEST
next=4080 worker 执行 H3-H04-MIN-001 seed A/B；收到真实 receipt 后再校准 XN/NX/PATH。
