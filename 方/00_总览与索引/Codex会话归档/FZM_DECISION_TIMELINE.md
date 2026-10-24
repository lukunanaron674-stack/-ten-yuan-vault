# FZM Decision Timeline — L3 candidate draft

状态：`PROVISIONAL_SOURCE_LINKED`。下表是从 USER-role 原始消息行提取并核对过的决策候选，不是“当前仍生效”清单；没有依据时不推断最终审核、锁定、提交或交付。详细片段仍须拆分混合会话，并与 TOOL/EXECUTION_RECEIPT 对照。

## 项目权威与审核边界

| 候选规则/选择 | 来源定位 | 暂定处理 |
|---|---|---|
| Canvas 是发散树/任务内容的权威源；Linear 是任务镜像，校验后回写路径 | USER `01a0063b-c4ff-7900-8f67-da1fe3367ef8`, line 9, ordinal 8 | `USER_CONSTRAINT_CANDIDATE`；逐文件操作仍需看当前 Canvas 状态 |
| 不改锁定 Canvas，不把未审核内容当已通过 | USER `01a03d10-2553-7852-ad8e-fecf5b3b69a8`, line 2612, ordinal 2611 | `USER_CONSTRAINT_CANDIDATE`；与“候选≠交付”一致 |
| 锁定前询问；已完成探索部分可以撤销 | USER `01a0010d-aea5-77d2-89ef-b850b36e032c`, line 8508, ordinal 8507 | `USER_GOAL_CANDIDATE`；不得据此自动锁定或删除 |
| H3 是生成执行层；该批仅准备/校验执行清单，不自动提交云端 | USER `01a04eeb-b545-77b2-8769-cfb13df92d6c`, line 1665, ordinal 1664 | `USER_CONSTRAINT_CANDIDATE`；当前 issue 674-314 的云端测试同样保持 no-submit |
| 新结果全部标候选，不自动替换主剪辑；4-5D 仍待重审，不能写成已确认 | USER `01a04ecf-ec74-7581-8e6f-f53369f3bb85`, line 406, ordinal 2278 | `USER_CONSTRAINT_CANDIDATE`；状态只适用于该次对话/项目时点 |

## 镜头、工作流与版本候选

| 卡/范围 | USER 决策候选 | 来源定位 | 状态/冲突 |
|---|---|---|---|
| 4-1 | 不得使用第三幕素材映射；立即停，不要提交或继续写入 | `01a04f47-f2b8-7142-9f81-b8a34475a21f`, line 169, ordinal 168 | `USER_CONSTRAINT_CANDIDATE`; 当前执行状态未知 |
| 4-2 | 只整理素材与分镜，不提交云端生成；保留旧版本历史 | 同上, line 62, ordinal 61 | `USER_CONSTRAINT_CANDIDATE` |
| 4-5A | 高家俊在墙内、程全昭在监狱外，只能经窄传递口；不能改为空地正常见面 | `01a05e84-b0a4-7a32-9e1c-afea9cf14742`, line 30, ordinal 29 | `USER_CONSTRAINT_CANDIDATE`; 另有“只做探索、不改文件”边界 |
| 5-2A | abc 分开，在卡内分 3 层，不设公共方向 | `01a04277-01fd-7a31-8829-fcbc43b15346`, line 1897, ordinal 1896 | `USER_CONSTRAINT_CANDIDATE` |
| 卡号映射 | 5-1a→5-1；原 5-1B 更正为 5-2a；去掉 4b，并同步 Canvas 卡号 | `01a03d10-2553-7852-ad8e-fecf5b3b69a8`, line 5320, ordinal 5319 | `USER_DECISION_CANDIDATE`; 需对照当前卡/Canvas确认是否已落地 |
| 2-1C | 使用正打方志敏参考；不要混入其它参考图 | `01a04277-01fd-7a31-8829-fcbc43b15346`, line 453, ordinal 452 | `USER_CONSTRAINT_CANDIDATE` |
| 2-3/2-4 | 禁止写实、厚涂、渐变、3D、字幕、额外人物与额外对白；另有角色位置/动作次数约束 | `01a00673-b5c2-79b2-91a5-7c8d9e7d4682`, line 34, ordinal 33 | `USER_CONSTRAINT_CANDIDATE`; 此行只作为摘要定位，细项回读原文 |
| H3 批次冷却 | 每条后冷却 20 分钟；只重启调度进程，不碰 ComfyUI 渲染进程 | `019ff1d7-cf77-7842-804c-37711d73571d`, line 2149, ordinal 2148 | `USER_CONSTRAINT_CANDIDATE`; 不能推断该规则现在适用于所有调度 |

## 版本冲突与用户否决候选

| 项目 | 证据 | 当前编译 |
|---|---|---|
| 2-1B 时间 | USER `01a03d10-2553-7852-ad8e-fecf5b3b69a8`, line 822, ordinal 821：源时间约 15s、主卡约 5.9s；用户要求不擅自判断并提供两个版本 | `CONFLICT / WAIT_EVIDENCE`; 需确认原话格式、时间轴和卡片版本 |
| 3-2A 台词 | USER `019ff1d7-cf77-7842-804c-37711d73571d`, line 7063, ordinal 7062：改成“小方，出事了”；line 8694, ordinal 8693：队列仍显示旧句“有些大事” | 这是“指定修改 vs 队列未同步”的执行状态冲突，不是用户意图冲突。描述词、卡片、队列是否统一尚无回执 |
| 回滚/交付 | USER `01a04eeb-b545-77b2-8769-cfb13df92d6c`, line 4560, ordinal 4559：要求回滚并将声音、视频分开交付 | `USER_REJECTION/ROLLBACK_CANDIDATE`; 实际回滚是否完成需工具/文件回执 |
| 片头标题 | USER 同 session line 8615, ordinal 8614：标题改为“以青春赴可爱的中国”，字幕希望有 zn/n 感 | `USER_GOAL_CANDIDATE`; 不能据此断言最终封面已审核或锁定 |
| 2-1C 声音 | USER `01a0485b-8d9e-71c3-9777-1558a3690761`, line 2892, ordinal 2891：指出 40/30 音量差异并认为声线不像方志敏 | `USER_REJECTION/REVISION_CANDIDATE`; 需对照后续混音回执 |

## 混合项目与权限来源

- USER `01a058e1-5eb9-73c0-a297-98dc9cee4197`, line 7360, ordinal 7359 明确说该段“不是方志敏项目”，主要是黎黎隆项目。该 session 必须按消息区间切分，不能整场标为 FZM。
- 现阶段 267 个 session 只标 `LIKELY_FZM`，451 个无别名 session 保持 `AMBIGUOUS`；本表不把任何 session 升级为整场 `CONFIRMED_FZM`。
- 审计中出现的 assistant “674-314/L1-L4 是否已完成”说法是 `ASSISTANT_PROPOSAL`，不是用户决定；当前实际状态由 receipt 和文件校验为准。
- 此文件不是完整 L3：还要补角色/卡片逐版链、冲突候选、工具执行回执与时间戳，回读异常行，并检查其它未发现的编码/代称。
