# 674-106 pre-GC Linear description snapshot

archived_at: 2026-10-08
source_issue: 674-106
source_title: 三元Lina03｜证据、可视化与应用总框
reason: CONTEXT_GC initial compaction
policy: 674-294

---

# CONTEXT_GC HOT HEADER｜默认读取入口

```yaml
CONTEXT_GC_STATE:
  policy: 674-294
  read_mode: HOT_ONLY
  current_snapshot_version: GC-S0-20261008
  recent_receipts_kept: 5
  archive_pointer: AI问题解决Canvas/context_gc/674-106/
  gc_required: false
```

## CURRENT_SNAPSHOT

* role: 十元/三元证据、可视化与应用总框（Lina03）
* current: 三轮整理任务 R1/R2/R3 已 DONE；底层实验按真实状态继续
* callable_contract: claim_scope + evidence_level + negative_control + result_state + failure_family + next_gate
* hard_rule: 熟悉样本/自产自测不得冒充外部泛化；应用结果不能直接改 canonical

## ACTIVE_LINKS

底层视觉/审核/DSL/H3实验继续回各自 canonical；稳定 failure 回问题系统，不另起平行树。

## BLOCKERS

底层实验未完成 ≠ Lina03 未整理；不得因总框 DONE 把实验误标 DONE。

## NEXT

只接收新的证据等级变化、failure family、可调用资产状态；不重扫全部案例历史。

## ARCHIVE_POINTER

`AI问题解决Canvas/context_gc/674-106/`

**读取纪律：默认 HOT_ONLY；常规调用不再批量读取整份历史讨论。**

---

# 目标

整理十元的证据库、视觉化、生成与工程实现，判断哪些东西真正可调用。

# 范围

* 漫画十元行为库
* 电影 / 动画 / 文学案例
* 五维电影
* 十元 / 五轴 / 对子 / 生克补 / 动态链可视化
* 角色、场景、构图、体态等视觉研究
* 感受研究
* 图像审核器
* 故事 / 世界观生成
* H3
* 解释器 / DSL
* Benchmark
* Agent / 自动化
* failure / negative control

# 三轮

## R1｜证据与资产回收

把作品样本、视觉实验、审核结果、生成器、工程文件全部归档到明确类别。

## R2｜有效性审计

区分真实证据、自产自测、回归样本、外部泛化；整理 failure family 与视觉捷径。

## R3｜可调用化

输出可调用资产、视觉/生成/工程入口、失败库、审核协议，并把未闭环项回写十元问题系统。

# 禁止

* 不因“生成得漂亮”就证明十元正确
* 不用熟悉作品自产自测冒充外部泛化
* 不凭应用结果反向改十元 canonical

# DONE

* 漫画行为/电影/五维/视觉证据分类清楚
* 可视化与审核器状态明确
* H3 / DSL / Agent / Benchmark 有唯一入口
* failure 与负例可追踪

# R2｜有效性审计｜2026-10-04

## 结论

当前资产的最大特征不是“缺研究”，而是实验协议/工程闸门已经较完整，但真正通过盲审、外部泛化和跨域复验的实测证据仍少。因此本框禁止把“方案已写”“工作流可运行”“生成结果好看”升级为理论验证。

## 证据等级 v1

* E0｜假设/方案：只有理论描述、prompt、实验设计或待办，尚无真实执行结果。
* E1｜可追溯工程证据：真实文件/接口/任务/哈希/状态可复现，但只能证明工程链存在，不能证明十元判断正确。
* E2｜受控回归证据：同变量控制、正/近邻/负例、反事实/删除测试已真实执行；只能证明已知规则在限定条件下可区分。
* E3｜盲审证据：标签遮蔽，独立审核者按预注册指标判定，记录 PASS/FAIL/AMBIGUOUS 与 failure_family。
* E4｜外部泛化证据：陌生/原创题材为主，测试集先封存，未参与规则构造，仍能稳定命中结构变量。
* E5｜跨域/跨模型/跨时间复验：换媒介、对象、模型或时间维度后仍保持同一结构判定；这才允许说“可广泛调用”。

## 现有资产审计

### 已有真实工程证据，但不等于理论证据

* <issue id="2395ba8c-6b8f-4f63-84d8-c59a0b62cf16" href="https://linear.app/674/issue/674-63/p0五轴研究自动执行接入codex-生图-h3">674-63</issue>：Codex × Linear × 生图 × H3 总流水线设计完整；已引用 <issue id="4b52f2be-0c43-4d1b-8862-9750f8568fa0" href="https://linear.app/674/issue/674-49/接通本地-codex-linear最小读写验收">674-49</issue> 的 Linear MCP 真实 read/write 冒烟与本地只读检查。结论仅到 E1 工程层。
* <issue id="6799756e-0992-4cf5-a9f7-963b3b6adc33" href="https://linear.app/674/issue/674-64/p0acodex-linear-视觉实验领取器本机">674-64</issue> / <issue id="545e3125-34af-409a-b283-340bec9f287c" href="https://linear.app/674/issue/674-69/674-64-sc只读连接自检不生成">674-69</issue>：领取器/只读连接已有完成记录，可证明部分交接链存在，不证明视觉理论成立。

### 有较强实验设计，但尚未形成经验验证

* <issue id="e2147a30-d0e7-4479-babc-bb8545c03614" href="https://linear.app/674/issue/674-56/p0图像审核器-r15盲审与反捷径">674-56</issue> 图像审核器：盲审、反捷径、PASS/FAIL/AMBIGUOUS、failure_family 规范正确；当前仍是协议，历史“160样本”等数字未取证前一律不得作为成绩。
* <issue id="15c09d24-b249-4933-a7f9-2663633efe08" href="https://linear.app/674/issue/674-62/p1抽象具象编译器外部泛化盲测">674-62</issue> 抽象→具象：已明确陌生/原创题材≥80%、熟悉材料≤20%、测试集封存，属于合格 E4 设计，但尚未执行。
* <issue id="84d32d9b-a4b6-49cb-a739-edc724932987" href="https://linear.app/674/issue/674-65/p0bcomfyui-生图桥低成本对照三样本">674-65</issue> / <issue id="8e246b67-7f58-4f46-a5b5-85091d36ecc3" href="https://linear.app/674/issue/674-72/exp-r1xz-路径临界三样本本地3070">674-72</issue>：XZ 三样本已预注册、单变量控制、固定 seed、禁止捷径、哈希追踪完整；未实际生成+盲审前仍是 E0，不得称“XZ视觉已验证”。
* <issue id="8a656c20-acef-4d04-b111-a44f9e373d96" href="https://linear.app/674/issue/674-66/p1c5090-h3-桥预览级动态链验证">674-66</issue> H3：前置条件正确，当前被 <issue id="84d32d9b-a4b6-49cb-a739-edc724932987" href="https://linear.app/674/issue/674-65/p0bcomfyui-生图桥低成本对照三样本">674-65</issue> 阻塞；无真实批准预览时不得称动态链视频验证完成。
* <issue id="589499d6-7905-4d93-8704-c25a7b55501b" href="https://linear.app/674/issue/674-58/p1动态链条视觉化横纵复合与多阶段证据">674-58</issue> / 59 / 60 / 61：动态链、生克补、风格语法、角色跨对象检验均有可执行结构，但大多仍停在待测层。

### 有结构研究结果，但不是独立验证

* <issue id="22df1948-28d1-42b9-bc3c-4470ab476dda" href="https://linear.app/674/issue/674-57/p0动态链条结构生克补组合因果与审美判据">674-57</issue>：已有三层模型、竞争链、删除/反事实和四帧视觉转译方案；这是内部结构证据，目前约 E1→E2 之间，因未独立生图/盲审，不能升 E3。

### 当前明显缺口

* 漫画行为库、电影/动画/文学案例目前没有统一 Benchmark 入口。
* 五维电影证据没有和十元/五轴证据分层，容易用叙事解释替代结构验证。
* Benchmark 没有独立工单/唯一数据集入口。
* “感受研究”仍缺可观测变量与负控定义。
* Agent/自动化目前可证明的是任务流，不是理论泛化。

## failure family v1

F01｜视觉捷径：颜色、黑红、尖角、怪物、恐怖表情、武器、戏剧光替代结构。
F02｜单变量污染：POS/NEAR/NEG 同时改了构图、主体、视角、风格或情绪。
F03｜熟悉样本泄漏：用已参与建模的作品/角色重新测试，误称外部泛化。
F04｜自产自测：同一模型生成→同一模型解释→同一模型打分，没有独立审核。
F05｜标签泄漏：审核者知道 POS/NEG、十元名称、目标结论或 prompt 标签。
F06｜生成器理解失败：模型没有正确生成路径、连接、重心等目标变量，却被误判为理论失败。
F07｜渲染器混淆：checkpoint、seed、CFG、控制图或模型版本变化造成差异。
F08｜静帧冒充因果：一张图只能显示状态，却被拿来证明动态链的时间因果。
F09｜工程可用冒充理论有效：接口200、任务跑通、视频产出，被写成十元已验证。
F10｜导入/生成混淆：Visual Inbox 导入的网页图片或历史素材被误登记为本轮生成结果。
F11｜回归冒充泛化：熟悉题材上稳定，不代表陌生对象稳定。
F12｜漂亮结果偏差：优先挑“最像/最好看”的 seed 或结果，丢弃失败样本。

## negative control 最低标准

任何视觉/生成实验至少包含：

1. POS：目标结构存在；
2. NEAR：外观接近，但关键结构变量不存在；
3. NEG：结构明确相反/缺失；
4. DELETE：删除关键变量，看判定是否消失；
5. CROSS：换主体/画风/对象，验证不是题材捷径。

动态链额外要求：必须有竞争链 + 时间顺序反事实，不能只看终点图。

## R2 后的调用权限

* 可直接调用：工程连接/来源追踪规则、实验预注册模板、盲审字段、failure taxonomy。
* 仅可作为候选规则调用：XZ路径临界、九元视觉语法、关系视觉语法、动态链视觉转译。
* 不可宣称已验证：外部泛化准确率、160样本历史成绩、H3动态链有效性、漫画/电影跨域一致性。

## R3 前置顺序

<issue id="6b05a9fc-2161-4999-ab81-e2caa755b020" href="https://linear.app/674/issue/674-55/p0研究资产清点旧框成果与版本索引">674-55</issue> 资产索引 → <issue id="84d32d9b-a4b6-49cb-a739-edc724932987" href="https://linear.app/674/issue/674-65/p0bcomfyui-生图桥低成本对照三样本">674-65</issue>/72 真实三样本 → <issue id="e2147a30-d0e7-4479-babc-bb8545c03614" href="https://linear.app/674/issue/674-56/p0图像审核器-r15盲审与反捷径">674-56</issue> 盲审 → <issue id="15c09d24-b249-4933-a7f9-2663633efe08" href="https://linear.app/674/issue/674-62/p1抽象具象编译器外部泛化盲测">674-62</issue> 外部泛化 → <issue id="8a656c20-acef-4d04-b111-a44f9e373d96" href="https://linear.app/674/issue/674-66/p1c5090-h3-桥预览级动态链验证">674-66</issue> 时间维度/H3（仅必要时）

R3 不再继续加理论问题，改为建立唯一调用入口 + 证据登记表 + Benchmark入口 + failure库 + 审核协议。

# R3｜可调用化与验收回写｜2026-10-04

## 1. Lina03 唯一调用模型

以后任何 Chat / Agent / Codex / H3 任务调用 Lina03，都必须经过以下 5 个入口之一；禁止绕过证据等级直接拿旧结论。

### ENTRY-E｜Evidence / 证据入口

* 目的：判断某条十元、关系、视觉或应用结论目前到底证到哪一级。
* 必填：claim_id / claim_text / evidence_level(E0-E5) / evidence_source / sample_scope / blind_or_not / external_or_not / last_verified_at。
* 输出：VERIFIED_SCOPE / CANDIDATE / BLOCKED / REJECTED。

### ENTRY-V｜Visual / 可视化入口

* 目的：把十元、关系、动态链转换成可观察结构。
* 固定最小字段：subject / object / primary_tenyuan / secondary_tenyuan / relation / direction / changed_variable / before_state / after_state / intensity / time_stage / observable_visual_consequence。
* 静帧只允许证明“状态可观察”；时间因果必须进入多帧/H3或其他真实时间证据。

### ENTRY-G｜Generation / 生成入口

* 目的：把十元结构编译为角色、场景、构图、故事、世界观或视频任务。
* 固定链：abstract structure → DSL/结构字段 → concrete candidate → controlled generation → independent audit。
* 生成结果默认状态 GENERATED_UNAUDITED，不得自动升格为证据。

### ENTRY-X｜Execution / 工程入口

* 目的：调用 Codex / ComfyUI / H3 / watcher / Agent。
* 工程成功只回报 ENGINEERING_PASS；理论判定必须由 ENTRY-A 审核。
* 当前主入口卡：<issue id="2395ba8c-6b8f-4f63-84d8-c59a0b62cf16" href="https://linear.app/674/issue/674-63/p0五轴研究自动执行接入codex-生图-h3">674-63</issue>；本地图像链：<issue id="84d32d9b-a4b6-49cb-a739-edc724932987" href="https://linear.app/674/issue/674-65/p0bcomfyui-生图桥低成本对照三样本">674-65</issue>；H3时间验证：<issue id="8a656c20-acef-4d04-b111-a44f9e373d96" href="https://linear.app/674/issue/674-66/p1c5090-h3-桥预览级动态链验证">674-66</issue>。

### ENTRY-A｜Audit / 审核入口

* 目的：盲审视觉与生成结果。
* 当前主入口卡：<issue id="e2147a30-d0e7-4479-babc-bb8545c03614" href="https://linear.app/674/issue/674-56/p0图像审核器-r15盲审与反捷径">674-56</issue>。
* 必填：sample_id / blinded / expected_hidden / observed_variable / verdict(PASS/FAIL/AMBIGUOUS) / failure_family / reviewer / evidence_level_after_review。

## 2. 统一资产状态

### CALLABLE_VERIFIED

至少达到 E3，且调用范围不超过已经验证的样本域。可以进入生产，但必须保留 scope。

### CALLABLE_REGRESSION

达到 E2，只适合已知域回归，不允许宣称陌生域泛化。

### CANDIDATE

E0-E1 或理论结构已有但尚缺真实独立审核。可以实验，不可作为冻结事实。

### BLOCKED

缺资产、生成器、审核、预算、权限或前置关系；必须写 blocker，不得拿替代样本硬顶。

### REJECTED

反例/盲审已表明规则或实现不成立；保留 failure，不删除历史。

### ARCHIVE_ONLY

旧版本、熟悉样本、自测结果或已 superseded 材料，只供追溯。

## 3. Benchmark 唯一登记格式 v1

Benchmark 不再按“电影一个库、漫画一个库、图像一个库”各写一套评分逻辑；统一共享字段，媒介只是 domain。

```text
benchmark_id
domain = image | character | scene | comic | film | animation | literature | music | game | worldbuilding | H3
claim_id
tenyuan_or_chain
sample_id
source_type = external | original_unseen | familiar_regression | synthetic_control
train_exposure = yes/no/unknown
test_pre_registered = yes/no
blind = yes/no
negative_control = POS/NEAR/NEG/DELETE/CROSS/COMPETING_CHAIN
expected_variable
observed_variable
verdict = PASS/FAIL/AMBIGUOUS
failure_family
reviewer
artifact_path_or_issue
hash_or_version
evidence_level_before
evidence_level_after
notes
```

任何没有 sample_id + source_type + verdict + artifact locator 的所谓“准确率”都不得进入正式 Benchmark。

## 4. 各应用当前可调用级别

| 应用 | 当前状态 | 允许调用 | 禁止宣称 |
| -- | -- | -- | -- |
| 图像审核器 | CANDIDATE / 协议成熟 | 作为盲审模板 | 已有稳定准确率 |
| X 视觉语法 | CALLABLE_REGRESSION 候选 | 已冻结规则的回归检查 | 十元全域视觉已验证 |
| XZ 路径临界 | CANDIDATE | <issue id="8e246b67-7f58-4f46-a5b5-85091d36ecc3" href="https://linear.app/674/issue/674-72/exp-r1xz-路径临界三样本本地3070">674-72</issue> 预注册实验 | 已通过视觉盲测 |
| 其余九元视觉语法 | CANDIDATE | POS/NEAR/DELETE实验 | 已跨画风泛化 |
| 生克补可视化 | CANDIDATE | A→B变量/反事实卡 | 关系视觉已被证明 |
| 动态链视觉化 | CANDIDATE | 节点/阶段/竞争链设计 | 静帧即可证明动态因果 |
| 角色/体态/构图 | CANDIDATE | 跨对象结构卡 | 气质词=十元结构 |
| 抽象→具象 DSL | CANDIDATE | 结构编译与封存测试集 | 已完成外部泛化 |
| ComfyUI/Codex 链 | ENGINEERING_E1 | 低成本受控实验 | 工程跑通=理论成立 |
| H3 | BLOCKED/PREVIEW_ONLY | 满足前置后单次时间验证 | 已证明动态链 |
| 漫画/电影/文学案例 | RESEARCH_ONLY | 证据候选与回归样本 | 熟悉作品解释=泛化 |
| 感受研究 | RESEARCH_ONLY | 先建立可观察变量 | 主观共鸣=理论证据 |

## 5. Agent 调用合同 v1

任何代理要使用十元证据/视觉应用，输出中必须附：

```text
claim_scope:
evidence_level:
asset_status:
test_mode: regression | blind | external | production
source_exposure:
negative_control:
result_state:
failure_family:
can_update_canonical: false
next_gate:
```

默认 can_update_canonical=false。应用结果永远不能直接改 Lina01 canonical；如出现稳定真实 failure，只能回到问题系统开/更新 Q，由 Lina01/Lina02处理定义或关系。

## 6. Failure 回填协议

失败顺序固定为：

1. 先判 F06/F07：是不是生成器或渲染器没按变量执行；
2. 再判 F02/F05：是不是实验设计污染或标签泄漏；
3. 再判 F03/F04/F11/F12：是不是数据/评估作弊式偏差；
4. 最后才允许怀疑规则本身。

只有在受控条件成立、盲审成立、实现无误且反复出现结构性 FAIL 时，才产生 theory_failure_candidate。

## 7. 与十元问题系统的回写

* G5：解释器/DSL跨模型稳定 → 由 <issue id="15c09d24-b249-4933-a7f9-2663633efe08" href="https://linear.app/674/issue/674-62/p1抽象具象编译器外部泛化盲测">674-62</issue> 提供外部泛化证据。
* G6：十元视觉化可生成、可审核 → 主执行链 <issue id="84d32d9b-a4b6-49cb-a739-edc724932987" href="https://linear.app/674/issue/674-65/p0bcomfyui-生图桥低成本对照三样本">674-65</issue>/72 → <issue id="e2147a30-d0e7-4479-babc-bb8545c03614" href="https://linear.app/674/issue/674-56/p0图像审核器-r15盲审与反捷径">674-56</issue> → <issue id="589499d6-7905-4d93-8704-c25a7b55501b" href="https://linear.app/674/issue/674-58/p1动态链条视觉化横纵复合与多阶段证据">674-58</issue>/59/60/61。
* G7：十元驱动故事/H3/感受 → H3仅在G6有可审静态结构后进入 <issue id="8a656c20-acef-4d04-b111-a44f9e373d96" href="https://linear.app/674/issue/674-66/p1c5090-h3-桥预览级动态链验证">674-66</issue>；故事/感受不得跳过 Benchmark。
* G8：版本/自动化/治理 → <issue id="2395ba8c-6b8f-4f63-84d8-c59a0b62cf16" href="https://linear.app/674/issue/674-63/p0五轴研究自动执行接入codex-生图-h3">674-63</issue> 只证明自动执行链；证据等级与资产状态由 Lina03 管，canonical 归 Lina01/Lina02。

当前最高优先仍是总控已登记的 Q-VIS-001；Lina03 新发现的问题优先回写现有 Q，不另起第二套问题树。

## 8. Lina03 三轮最终收束

R1｜范围与资产：DONE（总框已覆盖证据、视觉、生成、工程、审核、Benchmark/Agent类别）。
R2｜有效性审计：DONE（E0-E5、F01-F12、negative control 与现有资产级别已建立）。
R3｜可调用化：DONE（五入口、六资产状态、Benchmark字段、Agent合同、回写规则已建立）。

### 注意

这里的 DONE 仅表示 Lina03 的“三轮整理任务完成”。底层实验 <issue id="6b05a9fc-2161-4999-ab81-e2caa755b020" href="https://linear.app/674/issue/674-55/p0研究资产清点旧框成果与版本索引">674-55</issue>/56/58/59/60/61/62/65/66/72 仍按各自真实状态推进；不得因为总框 R3 DONE 就把这些实验标完成。

## 9. 最终一句话

十元应用以后不再问“这个看起来像不像”，而统一问：**你在验证哪条 claim、改变了哪个变量、用了什么负控、证据到 E 几、失败属于哪一族、当前允许调用到什么范围。**