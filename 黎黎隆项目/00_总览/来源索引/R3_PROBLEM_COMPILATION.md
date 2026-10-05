---
title: R3 Problem Compilation
tags:
  - lililong
  - source-ingestion
  - problem-compilation
status: CANDIDATE
linear_issue: 674-102
---

# R3｜证据编译为 Problem State 与 Q 映射

> [!warning] 编译边界
> 本文件是 R3 编译候选，不是正式 Q 决议。没有改现存 Q 卡、`黎黎隆问题系统.canvas`、世界观/角色 canonical，也没有给新问题分配正式 Q-ID。Assistant proposal 不进入 `known`。

## 输入与覆盖

- 输入：[[R2_EVIDENCE_PACKET.jsonl]]、[[R2_EVIDENCE_PACKET]]、[[R2_SESSION_ADJUDICATION]]、[[R2_CONFLICT_CANDIDATES]]、[[R2_HANDOFF_TO_L1_L4]]。
- 674-101 已 Done；96 个 CONFIRMED sessions 已重建 A/B/C/D。raw read 88、C 范围排除 6、锁定 2；A=11、B=34、C=6、D=45。
- R2 共 307 条 evidence，58 个含 evidence 的 session；user 66、assistant 241、tool/receipt 0。R2 JSONL 的 307 行均可解析。
- R2 当前 domain 标签是 CHAR=6、H3=4、PIPE=14、SYSTEM=6、MIXED=277；WORLD/SCENE/STYLE/SHOT/ASSET/STORY_TENYUAN 没有独立标签。故按摘录编译时对 MIXED 项采取保守分类，不把缺失标签当作“无证据”。

## Evidence cluster → 判定

### C-01｜H3 参考资产交接 / 来源可追溯性

- 判定：`EXISTING_Q_UPDATE`（只提出向已有卡追加证据，不在本轮写入正式卡）；映射 [[Q-ASSET-001_旧角色设定和新设定谁优先]]，不新建 Q。
- 直接用户证据：`R2E-00059`，user / `USER_CONSTRAINT`，`line:11013;message:3817`。用户称某 H3 B 端任务 JSON 只有角色卡文字路径和场景文字描述，缺少角色/场景参考图 asset ID、路径及 SHA，并要求只读核验实际消费流程。
- 辅助历史记录：`R2E-00060`，assistant / `FILE_REF`，`line:11179;message:3885`，声称 `ref_images` 只是元数据、未找到图片可访问路径/SHA/节点接线及可归因输出。它是 assistant 文件检查报告，不是本次重新读取云端工作流的独立执行回执。
- 当前 Problem State delta：可把用户报告记录为“用户曾报告的交接缺口”，并把 assistant 检查记为待复验历史证据；不能将 assistant 所述运行故障或生成归因直接写入 `known`。
- source_refs：`E:\C_Migration\19308\.codex\sessions\2026\09\08\rollout-2026-09-08T13-01-26-01a07f64-7b74-7470-b981-f7b47675c121.jsonl`，以上两条原始行号见 locators。

### C-02｜角色身份/视觉候选历史

- 判定：`REFERENCE_ONLY`；不更新 [[Q-CHAR-001_头像怎么稳定扩中全景]] 或已关闭子卡，不把候选通过/错误身份升格为新事实。
- `R2E-00209` 是 assistant proposal，记录曾把两张图当作同一角色参考后改为分开；它不能证明用户确认的正式身份或一次已验收失败。
- `R2E-00242/00243/00245` 是候选四宫格的 assistant 版本/状态报告；其中转述的“用户确认”仍是 assistant 记录，当前 R2 packet 未提供对应的原始 user approval item，因此仅作历史线索。不得据此锁定角色或改正式头像状态。
- source_refs：`E:\C_Migration\19308\.codex\sessions\2026\09\23\rollout-2026-09-23T01-24-05-01a0ca25-6b9f-74b0-9c83-b3559a87b93b.jsonl`（R2E-00209）；`E:\C_Migration\19308\.codex\sessions\2026\09\25\rollout-2026-09-25T12-54-16-01a0d6ea-057b-78d0-94ed-0e71c3957ea2.jsonl`（R2E-00242/243/245）。

### C-03｜世界观规则片段

- 判定：`REFERENCE_ONLY`；不新增或更新 [[Q-WORLD-001_候选世界观版本如何安全进入实验]]。
- `R2E-00240` 与 `R2E-00252` 是 user constraints，保存了植入限制、钢铁教派立场和角色候选描述；它们是世界观内容约束，不是“多版本冲突已被证实”或当前生产受阻的证据。
- source_refs：`E:\C_Migration\19308\.codex\sessions\2026\09\25\rollout-2026-09-25T12-54-16-01a0d6ea-057b-78d0-94ed-0e71c3957ea2.jsonl`（R2E-00240）；`E:\C_Migration\19308\.codex\sessions\2026\09\25\rollout-2026-09-25T12-55-27-01a0d6eb-1a6e-73e0-a041-8c71be256d37.jsonl`（R2E-00252）。

### C-04｜场景生成失败叙述

- 判定：`HYPOTHESIS_ONLY`；不更新 [[Q-SCENE-001_SC-001森林背景批准来源是否已定位核验]]。
- `R2E-00100` 是 assistant proposal，叙述一次视觉结果为 FAIL 并计划记录；当前 packet 未附原始生成结果、执行 receipt 或确认该样例属于 SC-001 的用户批准背景。因此不能把失败成因或其与 Q-SCENE-001 的同一性写为 `known`。
- source_refs：`E:\C_Migration\19308\.codex\sessions\2026\09\14\rollout-2026-09-14T11-32-57-01a09df9-a09e-7801-bc82-6eb980a93705.jsonl`，`line:1081;message:401`。

### C-05｜问题系统/工作流要求与历史进度

- 判定：`REFERENCE_ONLY`；不把流程要求本身伪装成生产故障，不改 [[Q-PIPE-001_冻结项可发散项禁止项怎么进入生图流程]]。
- `R2E-00277` 是用户只读盘点要求；`R2E-00279` 是 assistant 对旧问题系统状态的报告；`R2E-00306` 是用户明确的 M1–M4 门槛指令。它们说明系统实现边界/历史状态，不证明某个图像任务已经漏映射冻结项。
- source_refs：`E:\C_Migration\19308\.codex\sessions\2026\10\01\rollout-2026-10-01T05-56-42-01a0f451-e3fc-7c92-96ce-68d621ac8212.jsonl`（R2E-00277/279）；`E:\C_Migration\19308\.codex\archived_sessions\rollout-2026-10-03T21-04-25-01a101dd-a35b-7600-94da-d7e24653a3e3.jsonl`（R2E-00306）。

### C-06｜任务约束、提示词与解决方案集合

- 判定：`PSEUDO_PROBLEM` 或 `REFERENCE_ONLY`（按单条内容）；不会将提示词、批跑计划、研究请求、工具购买/接入方案本身改写成根因问题。
- 涉及 674-27/28/29 的镜头约束（R2E-00013/14/15）、静态图转视频建议（R2E-00042）、素材清理研究请求、四宫格候选及绘图偏好等。它们可作为任务约束或研究资料；没有证据证明其单独造成一个具有直接 parent-goal impact 的真实阻塞。
- 分类边界：仅在现有问题卡已经定义且 evidence 直连其 DONE 条件时才归并为 `EXISTING_Q_UPDATE`；同义重复归 `DUPLICATE`；否则保持 reference/pseudo，不创建 Q。

## 现有 Q 映射总表

| 现有 Q | R3 结果 | 本轮状态动作 |
|---|---|---|
| Q-ASSET-001 | C-01 可作为证据增量；用户陈述与 assistant 检查报告分栏 | 仅在 R3 delta 提案中记录；OPEN 不变 |
| Q-CHAR-001 / .1 / .4 | C-02 为 assistant 历史候选；未发现可用的原始用户确认增量 | 不重开 DONE 子项，不改 Canvas |
| Q-WORLD-001 | C-03 是内容约束，不足以证明版本冲突新事实 | OPEN 不变 |
| Q-SCENE-001 | C-04 缺可读结果及 SC-001 对应链 | BLOCKED 不变 |
| Q-PIPE-001 | C-05 是规则/任务要求，未验证真实任务映射失败 | OPEN 不变 |

## 独立发现：现有状态同步冲突（不裁决）

当前 [[黎黎隆问题总纲]] 的目标树段将 Q-CHAR-001.4 写为 `BLOCKED`；其 Markdown 卡与唯一 [[黎黎隆问题系统.canvas]] 节点则写 `DONE`。R2 没有足以裁定该差异的直接证据；本轮不选胜者、不覆盖任一原文。作为现有记录同步冲突留待 R5/维护者按 674-97/98/110 原始确认回读。

## 判定汇总

- `EXISTING_Q_UPDATE`：1 个候选增量（Q-ASSET-001）；未写正式卡。
- `NEW_Q_CANDIDATE`：0；现有资产问题树已覆盖最接近的父目标，且本轮未建立独立因果与 DONE 条件。
- `DUPLICATE`：0 个新建重复项；见 [[R3_DUPLICATE_PSEUDO_MAP]] 的已有 Q 去向。
- `HYPOTHESIS_ONLY`：C-04；其余 assistant 叙述中未独立验证的陈述保留为历史 proposal。
- `REJECTED_HISTORY`：不从 assistant proposal 推导用户否决；原始用户拒绝仅作为各自任务/设定范围证据，不扩成全局问题。
- `REFERENCE_ONLY` / `PSEUDO_PROBLEM`：C-02、C-03、C-05、C-06。

## 58 个 evidence-bearing session 的完整路由

下表覆盖 JSONL 全部 307 条 evidence（每行的连续 evidence ID 范围来自同一 session）；`REFERENCE_ONLY` 表示保留来源、但本轮没有足够证据进入 Q/Problem State，不等于内容无价值。重点 cluster 的语义与限制见上文。

| source_id | Evidence IDs | R3 路由 |
|---|---|---|
| `019ef78a-a48f-7bf1-b2cb-2f0e2bc73e8f` | R2E-00001 | REJECTED_HISTORY（局部用户纠正；无父问题映射） |
| `01a0010d-aea5-77d2-89ef-b850b36e032c` | R2E-00002–00008 | REFERENCE_ONLY（assistant 方案/文件/版本陈述；跨项目任务背景） |
| `01a00605-3d2d-7840-aaf8-594da5158042` | R2E-00009–00010 | REFERENCE_ONLY（历史图像任务状态，不是当前问题） |
| `01a00c10-c0da-71a3-a2e7-8e6965b2199e` | R2E-00011–00012 | REFERENCE_ONLY（重复历史任务状态） |
| `01a00f31-b21c-7fc1-883a-2facba7c18a0` | R2E-00013 | REFERENCE_ONLY（674-27 任务约束） |
| `01a00f31-b32d-7be1-a159-a0a7081c8b26` | R2E-00014 | REFERENCE_ONLY（674-28 任务约束） |
| `01a00f31-b484-7261-887f-8c48c97edad9` | R2E-00015 | REFERENCE_ONLY（674-29 任务约束） |
| `01a00ff1-afd5-75c0-a97f-10f44504bf42` | R2E-00016–00018 | REFERENCE_ONLY（assistant 方案/历史工单引用） |
| `01a022f8-3dc0-7f90-90da-30bca152f75b` | R2E-00019–00020 | REFERENCE_ONLY（历史任务版本引用） |
| `01a022ff-1110-7090-a07a-10a5c1637b3e` | R2E-00021–00022 | REFERENCE_ONLY（历史任务版本引用） |
| `01a0233a-7ddd-7741-91c2-cd9777e3320e` | R2E-00023–00024 | REFERENCE_ONLY（历史任务版本引用） |
| `01a0233f-17cb-7950-854f-bdf3c4ae9ea5` | R2E-00025–00029 | REFERENCE_ONLY（当前为方志敏任务；不映射到黎黎隆 Q） |
| `01a02375-483b-7563-b223-b12b89333f1d` | R2E-00030–00031 | REFERENCE_ONLY（历史任务版本引用） |
| `01a03d87-3d8b-75f3-ac1c-6da942d56a1e` | R2E-00032–00033 | REJECTED_HISTORY（仅记原任务状态调整，不跨题材建问题） |
| `01a03f88-990f-7eb0-9439-c372e75e57aa` | R2E-00034–00035 | REFERENCE_ONLY（历史任务版本引用） |
| `01a04eeb-b545-77b2-8769-cfb13df92d6c` | R2E-00036–00039 | REFERENCE_ONLY（H3 接入任务/assistant 报告；无可验证运行 receipt） |
| `01a058e1-5eb9-73c0-a297-98dc9cee4197` | R2E-00040–00048 | REFERENCE_ONLY（角色与视频探索请求/候选方案；不据此判定生产失败） |
| `01a06236-5ded-7e10-9559-3fd90849196e` | R2E-00049 | REFERENCE_ONLY（assistant 市场建议） |
| `01a07f63-cd33-7281-9ee5-faee06fb89d2` | R2E-00050–00053 | REFERENCE_ONLY（视觉资料/索引说明，非问题因果证据） |
| `01a07f64-7b74-7470-b981-f7b47675c121` | R2E-00054–00062 | EXISTING_Q_UPDATE candidate C-01；同 session 其余行仍是历史项目/流程资料 |
| `01a07f64-d47f-7c31-b412-bde2876dd3b6` | R2E-00063–00072 | REFERENCE_ONLY（上传/同步历史陈述；assistant 回执不等于云端现状） |
| `01a081b6-2aed-7271-b440-642faab764a7` | R2E-00073–00084 | REFERENCE_ONLY（角色风格与候选探索；不得升格 canonical） |
| `01a0915f-aa2e-7091-a30b-422fe6293c5f` | R2E-00085–00086 | REFERENCE_ONLY（任务队列文字/方案） |
| `01a09b07-a626-7010-8323-53943a905f9d` | R2E-00087–00089 | REFERENCE_ONLY（assistant 对 Canvas/远端现状的陈述） |
| `01a09df9-a09e-7801-bc82-6eb980a93705` | R2E-00090–00100 | HYPOTHESIS_ONLY C-04；其余是候选/助手报告，等原始视觉与运行证据 |
| `01a0a033-99da-7d40-8d36-2bc047293204` | R2E-00101–00112 | REFERENCE_ONLY（模型/训练研究方案） |
| `01a0a050-1e3b-73e0-a523-27064aee991e` | R2E-00113–00124 | REFERENCE_ONLY（Canvas/接入施工陈述；未独立复验） |
| `01a0a887-003b-7ea1-b8ba-4f021833ec84` | R2E-00125–00136 | REFERENCE_ONLY（参考墙修复任务/报告） |
| `01a0a9c4-bcf3-7961-bd23-a1e5038712c4` | R2E-00137–00139 | REFERENCE_ONLY（世界观参考墙方向，不等于待解决问题） |
| `01a0ab5c-c84d-7ba3-998a-5916c925c93c` | R2E-00140–00151 | REFERENCE_ONLY（历史角色/世界视觉系统候选） |
| `01a0b010-2395-7763-98b0-e51013687de1` | R2E-00152 | REFERENCE_ONLY（通用记忆/规则建议） |
| `01a0b035-0d25-7a63-8e30-26f393d9a61e` | R2E-00153–00161 | REFERENCE_ONLY（assistant 执行/候选建议；未作为执行回执） |
| `01a0b7fb-5b14-7f93-a066-19d744119878` | R2E-00162–00173 | REFERENCE_ONLY（本地自动化/桥接任务陈述） |
| `01a0ba29-e190-7e73-b532-1182e789881a` | R2E-00174–00175 | REFERENCE_ONLY（库同步审计要求，不直接构成问题） |
| `01a0bdb3-7c40-7472-9950-7a6f8bfdc432` | R2E-00176–00187 | REFERENCE_ONLY（代理/风格候选报告；非用户定稿） |
| `01a0bfd5-774a-7f33-9030-466d557b2df4` | R2E-00188–00191 | REFERENCE_ONLY（动态链实验计划/用户范围约束） |
| `01a0c11c-44d9-7d43-9506-3fc1570c4b10` | R2E-00192–00194 | REFERENCE_ONLY（风格代理任务约束/方案） |
| `01a0c126-29a8-7440-8ce3-9c50048cfd9f` | R2E-00195–00198 | REFERENCE_ONLY（QQ/Codex 接入调查要求） |
| `01a0ca25-6b9f-74b0-9c83-b3559a87b93b` | R2E-00199–00210 | REFERENCE_ONLY C-02（角色参考纠正的 assistant proposal 与资产版本记录） |
| `01a0cd70-a6d7-7fc3-a5bc-26d9e828817f` | R2E-00211–00212 | REFERENCE_ONLY（assistant 进度话语） |
| `01a0ce85-b869-71c0-979f-8d45a4958217` | R2E-00213–00223 | REFERENCE_ONLY（候选角色审查报告；无当前失败确认） |
| `01a0cee7-91f5-7a02-9f23-d57288473a8d` | R2E-00224–00235 | REFERENCE_ONLY（角色世界观发散方案；候选非 canonical） |
| `01a0d4f4-c0c4-72b0-8bc1-535b8e0f0a04` | R2E-00236–00239 | REFERENCE_ONLY（头像布局方案） |
| `01a0d6ea-057b-78d0-94ed-0e71c3957ea2` | R2E-00240–00251 | REFERENCE_ONLY C-02/C-03（user 世界规则约束 + assistant 候选状态报告） |
| `01a0d6eb-1a6e-73e0-a041-8c71be256d37` | R2E-00252–00263 | REFERENCE_ONLY C-03（世界观内容约束，不证明 canonical 冲突） |
| `01a0e87a-f4b6-7642-b433-cf812b3b8b3b` | R2E-00264–00271 | REFERENCE_ONLY（场景运行/结果 assistant 叙述，待相应原始产物核验） |
| `01a0e8f1-6b35-7b30-b123-add6cfd07e3f` | R2E-00272 | REFERENCE_ONLY（assistant proposal） |
| `01a0e95d-60b4-7463-8bd2-e31638a618cd` | R2E-00273–00275 | REFERENCE_ONLY（Canvas/资产版本报告） |
| `01a0f451-e3fc-7c92-96ce-68d621ac8212` | R2E-00276–00279 | REFERENCE_ONLY C-05（系统盘点、旧工单状态；不是当前生产问题证据） |
| `01a0f4cb-74f0-7201-a832-8c0ace82973e` | R2E-00280–00283 | REFERENCE_ONLY（审核代理只读研究请求） |
| `01a0f4cb-7807-77f2-ab0e-3377a7d405bd` | R2E-00284–00287 | REFERENCE_ONLY（风格/世界观只读审核范围） |
| `01a0f4cf-9d6d-7f22-aa3b-ded60434effa` | R2E-00288–00290 | REFERENCE_ONLY（审核代理流程研究） |
| `01a0f57c-a3b2-75f3-b514-3bd0411938f6` | R2E-00291–00295 | REFERENCE_ONLY（明确要求新题材动画不使用黎黎隆旧角色） |
| `01a0fd42-12df-7ec0-b2c3-572ab2d52e78` | R2E-00296–00301 | REFERENCE_ONLY（粉色世界角色施工候选状态） |
| `01a0fd71-ef9f-7341-a1ec-a52765880c20` | R2E-00302–00303 | REFERENCE_ONLY（用户审图请求及路径引用） |
| `01a0fdbd-0731-7d40-ad40-7c122f4b5c89` | R2E-00304–00305 | REFERENCE_ONLY（头像/世界观说明与 assistant 代理建议） |
| `01a101dd-a35b-7600-94da-d7e24653a3e3` | R2E-00306 | REFERENCE_ONLY C-05（用户设定系统工作门槛；不构成项目生产 Q） |
| `01a101fb-35d1-73b1-a82f-e3b498c4680a` | R2E-00307 | REFERENCE_ONLY（十元研究来源引用） |

此路由只是 R3 对已抽取 packet 的分类，不表示所有原始会话均已完整读取；R2 的 2 个锁定 raw blocker 和 C 范围排除仍按 R2 记录。R2 以外 174 个 LIKELY 来源留给 R4。
