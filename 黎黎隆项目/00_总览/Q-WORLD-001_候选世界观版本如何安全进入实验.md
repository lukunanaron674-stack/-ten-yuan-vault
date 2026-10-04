---
q_id: "Q-WORLD-001"
level: 1
parent: "G1"
goal: "G1"
volume: 7
impact_weight: 8
status: "OPEN"
linear_issue: "674-52"
parent_goal: "G1"
problem_statement: "多套未冻结世界观来源并存时，如何在不误升格 canonical 的前提下为当前场景选择可验证的候选规则？"
problem_depth: "D1"
domain: "worldbuilding_version_control"
known:
  - "GitHub 历史 Canvas、本地世界观总纲与 R5 发散树并存，且方向存在冲突。"
  - "用户明确表示世界观尚未定稿；现有动态链已有成果，不应从零重写。"
  - "现有本地世界观总纲 SHA-256 为 58c51bab3a9737d9139a7f22116ccada682e329cccd4f92205d398e2dcdbc6ed；R5 发散树 SHA-256 为 50a962b3b04e3459abfbacdcca0ccaa29313ed464397b4bf9cb1fb5080dc038。"
unknown:
  - "不同来源冲突项最终由用户选择哪一版本，尚未裁定。"
  - "候选机制进入具体角色/场景实验后是否形成可观察因果，尚待验证。"
tried:
  - "只读对照已有世界观来源并标记 LOCAL_CANDIDATE / CANDIDATE_NOT_FROZEN。"
  - "以既有动态链为骨架提出单机制、可观察验证的路线；没有重写动态链。"
rejected:
  - "文件存在或本地版本较新，不等于 canonical。"
  - "自动合并冲突世界观方向，或从零重写既有动态链。"
current_hypotheses:
  - "每轮只抽取一个候选机制进入角色行为或小场景测试，可在不冻结世界观的前提下验证其可观察性。"
evidence:
  - "Linear 674-52 记录候选来源冲突、未冻结状态与禁止自动合并。"
  - "当前本地世界观总纲与 R5 发散树存在，来源仍标候选；实际哈希见 known。"
source_refs:
  - "https://linear.app/674/issue/674-52"
  - "[[黎黎隆项目/01_世界观/黎黎隆_世界观总纲_v2.0.canvas]]"
  - "[[黎黎隆项目/01_世界观/黎黎隆_世界观发散树_R5_全量_v1.0.canvas]]"
current_version: "1.0"
next_decision: "整理来源冲突表；每次只选一个候选机制做可观察实验，等待用户对 canonical 的明确裁定。"
done_condition: "下游输入明确区分 FROZEN / CANDIDATE / OBSOLETE；候选晋升有用户确认和来源证据，且实验能说明机制改变了哪一可观察关系。"
required_agent:
  - "世界观 Agent"
  - "十元 Agent"
  - "审核 Agent"
---

# Q-WORLD-001｜候选世界观版本如何安全进入实验

> Q-WORLD-001｜D1｜体量 7/10｜影响父目标 8/10｜状态 OPEN｜世界观来源均保持候选

## 为什么是问题

把候选方向当成正史会污染角色、场景与镜头输入；反过来从零重写又会丢失已经形成的动态链成果。当前状态是来源冲突与晋升门禁问题，不是让代理替用户定稿世界观。

## 因果链

多套来源并存且状态未统一 → 下游无法区分冻结事实与研究候选 → 可能自动合并或误用候选 → 角色/场景实验失去可追溯来源 → 用户难以裁定最终方向。

## 冻结边界

- 本卡状态保持 OPEN；来源内容保持候选，不据此改写 canonical。
- 每轮最多验证一个机制，记录它改变的可观察关系及反证。
- 动态链已有成果，不能按“从零开始”重复建设。
- 当前哈希与 Linear 历史记录不同的来源必须按当前本地版本记录；未核清前不声称两者相同。

## 父目标与点击链

父目标：`G1`（世界观稳定；总目标为 G0）。本卡由 Canvas 的 Q-WORLD-001 file node 直接打开；相关正式问题仍沿用原 Q-ID。

## Linear

[674-52｜SC-001/W 世界观与十元版本核对](https://linear.app/674/issue/674-52/sc-001w世界观与十元版本核对)
