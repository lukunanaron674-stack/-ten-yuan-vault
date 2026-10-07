# 674-272 pre-GC Linear description snapshot

archived_at: 2026-10-08
source_issue: 674-272
source_title: CHATGPT｜SOCIAL→US 知识吸收与验证总控
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
  archive_pointer: AI问题解决Canvas/context_gc/674-272/
  gc_required: false
```

## CURRENT_SNAPSHOT

* role: SOCIAL→US 外部知识吸收与验证总控
* current: R1–R8 外部知识横向收集；MODE=COLLECT_ONLY
* locked_boundary: R8 完成前禁止接入、内部 Z 映射、E0→E5、DIRECT_APPLY、canonical 修改
* current_collection: R1=28 / R2=30 / R3=30 / TOTAL=88 / NEXT=R4

## ACTIVE_LINKS

当前不调用 293/286/289/173/282 做知识接入；只使用本工单关联的 COLLECT_ONLY 临时记忆库保存轮次结果。

## BLOCKERS

当前唯一阻塞规则：不要提前进入接入阶段。内部 GitHub 是否完成不影响 R1–R8 外部知识收集。

## NEXT

执行 R4｜多镜头 / LongTake / 连续性横向收集；每轮只写 RAW / MERGED / COVERAGE。R8 完成后再切 ROUTE_AND_VALIDATE。

## ARCHIVE_POINTER

`AI问题解决Canvas/context_gc/674-272/`

**读取纪律：默认 HOT_ONLY；只有为某个 candidate 做 provenance/冲突追溯时才定向读取冷历史。**

---

> ⚠️ **TEMP OVERRIDE｜R1–R8 COLLECT_ONLY**
>
> 当前阶段只做外部知识横向收集。R8 完成前，暂停本工单下方所有“接入 / 映射内部 Z / E0→E5 / DIRECT_APPLY / VALIDATE_IN_272”推进。
>
> 临时记忆库：<document id="73f1ae65-8f43-483b-acb4-438dc7bffad2" href="https://linear.app/674/document/r1-r8-%E5%A4%96%E9%83%A8%E7%9F%A5%E8%AF%86%E6%94%B6%E9%9B%86%E4%B8%B4%E6%97%B6%E8%AE%B0%E5%BF%86%E5%BA%93collect-only-2d98aaa57714">R1-R8 外部知识收集临时记忆库｜COLLECT_ONLY</document>
>
> 当前：R1 DONE（28）｜R2 DONE（30）｜R3 DONE（30）｜累计 88 条｜NEXT=R4。
>
> 只有 R8 完成后，才允许从 COLLECT_ONLY 切换到 ROUTE_AND_VALIDATE。
>
> ---

## 责任主体

CHATGPT

## 作用

SOCIAL→US 长期入口。只负责索引、状态同步、证据读取和 NEXT 指针；不在本工单重新研究具体知识。

## 三条主线

* A｜CODEX+WORKER｜AI_LEARN 接入与机器验证
* B｜AGENT+74｜HUMAN_AI_VALIDATE 人机联合验证
* C｜CHATGPT+74｜74_LEARN 社会知识学习

## 总控状态

工单：BACKLOG → READY → RUNNING → WAIT_EXTERNAL → VERIFY → DONE
知识：KNOWLEDGE_READY → ROUTED → CONNECTED → VERIFIED → AI_LEARNED

## NEXT 指针

* NEXT_A = A-L1
* NEXT_B = B-L1
* NEXT_C = C-L1

## GitHub 单一知识源

* AI_KNOWLEDGE/AI_LEARN_MASTER_INDEX.md
* AI_KNOWLEDGE/EXECUTOR_ROUTING.md
* AI_KNOWLEDGE/VERIFICATION_MATRIX.md
* AI问题解决Canvas/四主问题与社会映射/SOCIAL_TO_US\_社会到我们\_学习与吸收.canvas

## 规则

优先机器可自动推进的 A；B 累积成 74_REVIEW_BATCH；C 在需要学习或阻塞判断时推进；只有社会知识不足才重新开 RESEARCH。

---

# 2026-10-08｜两批三步知识接入协议（AUTHORITATIVE）

## 总原则

外部知识不再“一律等内部知识体系完全消化后再用”，而是按**是否需要项目内实证**分流。

```text
第一批｜现在
  Step 1 低风险、结构性知识 → 直接落地
  Step 2 能力性、效果性知识 → 674-272 → 实验验证

第二批｜内部 GitHub / 知识路由消化完成后
  Step 3 全量重新映射 → 补漏 / 去重 / 冲突校准 / 升级
```

## Step 1｜DIRECT_APPLY：可直接落地

判定条件：知识只改变工程组织、追溯、接口、版本、职责边界，不声称某个模型/算法“效果已被证明”。

可直接进入已有 Z / 工单，不等待 E0→E5：

* 资产必须有 asset_id / path / SHA / version / review_state；
* 正式视频输入必须绑定真实参考，禁止只写“Picture1/2”而无可追溯资产；
* 镜头任务结构化为 SHOT_NEED / REF_SELECTION / SHOT_PACKAGE；
* 视频版本不可覆盖，必须保留 source / seed / prompt / refs / SHA；
* USER 最终审核与机器预审分权：机器不能替 USER 产生最终审美 PASS；
* failure_family / changed_fields / kept_fields / provenance 作为标准字段；
* 前镜通过后的 end_state 可作为下一镜 start_state 的显式输入；
* 角色静态规则与视频执行规则分仓，不建万能规则桶。

状态：
`DIRECT_APPLY → CONNECTED`

DIRECT_APPLY 不等于“外部理论已验证”，只代表工程结构可安全采用。

## Step 2｜VALIDATE_IN_272：必须验证

凡是声称“这个方法更准 / 更稳 / 更省 / 模型能做到”的知识，统一进 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue>：

当前第一批候选：

 1. 自动选参考的具体评分权重与排序算法；
 2. VLM / 自动预审对身份漂移、肢体、动作顺序、连续性等错误的实际召回率与误报率；
 3. 自动预审后是否可以安全跳过 USER 查看明显 TECH_FAIL；
 4. 局部 segment retake / stitch 是否在当前 H3 工作流稳定可用；
 5. 不同 failure_family → 哪些 changed_fields 最有效；
 6. H3 / Wan / Vidu / 其它模型的多角色、长镜头、多参考能力；
 7. LongTake latent continuation / overlap / drift control；
 8. 具体关键帧采样频率与异常加密策略；
 9. Picture1 / Picture2 或多参考槽的最优职责组合；
10. 外部项目 VideoMemory / ViMax / Director 等方法在本项目的真实收益。

路由：

```text
EXTERNAL_KNOWLEDGE
→ 674-272
→ 查内部知识路由（当前允许部分缺失）
→ 映射已有 Z：104 / 105 / 106 / 118 / 282 / 286 / ...
→ CANDIDATE
→ E0 → E1 → E2 → E3 → E4 → E5
→ VERIFIED
→ 才允许升级为项目正本/LOCKED XN
```

若当前内部 GitHub 尚未完全接入：

* 能确认目标 Z 的先挂目标 Z；
* 不能确认的标 `ROUTE_PENDING`；
* 不因此阻塞 Step 1 的直接工程落地项。

## Step 3｜第二批：INTERNAL_REMAP

触发条件：内部 GitHub / Obsidian / Canvas / 工单知识路由完成主要消化。

届时重新扫描第一批全部外部知识：

```text
已直接落地项
+ 272候选项
+ 新外部知识
+ 完整内部知识
↓
重新映射所有已有 Z
↓
重复检测 / 冲突检测 / 覆盖域检测
↓
缺失知识补入
↓
旧候选重评
↓
形成第二批更新
```

第二批重点不是推翻第一批，而是：

* 找遗漏；
* 找重复；
* 找和内部已有 XN 冲突的外部方法；
* 把已经验证的候选升级；
* 把不适合本项目的方法淘汰。

## 三种知识状态

```text
DIRECT_APPLY   = 工程结构可直接使用，不宣称效果验证
CANDIDATE      = 有价值，但必须 E0→E5
VERIFIED       = 已完成项目内验证，可进入正本
```

禁止把 DIRECT_APPLY 偷换成 VERIFIED。

---

# 2026-10-08｜Step 1 · R1 盘点结果（DIRECT_APPLY vs CANDIDATE）

本轮目标：只做分类、越权检查、目标工单映射；不做 E0→E5，不新增能力结论。

## A. DIRECT_APPLY｜本轮确认可直接落地 8 项

| ID | 知识 | 目标 | 本轮判定 |
| -- | -- | -- | -- |
| DA-01 | asset_id / path / SHA / version / review_state 可追溯 | 293 / 286 / 289 | DIRECT_APPLY |
| DA-02 | 正式视频输入必须绑定真实参考资产 | 293 → 286 | DIRECT_APPLY |
| DA-03 | SHOT_NEED / REF_SELECTION / SHOT_PACKAGE 作为结构化交接包 | 286 | DIRECT_APPLY |
| DA-04 | 视频版本不可覆盖；保存 source / seed / prompt / refs / SHA | 289 | DIRECT_APPLY |
| DA-05 | USER 最终审美裁决与机器辅助判断分权 | 173 / 289 | DIRECT_APPLY |
| DA-06 | failure_family / kept_fields / changed_fields / provenance 作为记录字段 | 286 / 289 | DIRECT_APPLY |
| DA-07 | previous PASS end_state 显式传给 next start_state | 286 | DIRECT_APPLY |
| DA-08 | 静态角色规则与视频执行规则分仓 | 282 / 286 | DIRECT_APPLY |

### DIRECT_APPLY 的严格口径

DA-07 只表示**状态数据可传递**，不代表“这样就一定能保证镜头连续”。

DA-06 只表示**失败与修改变量可被结构化记录**，不代表“某类 failure_family 的最优修法已经验证”。

DA-03 只表示**交接结构统一**，不代表某个自动编译器/自动选图算法已经被证明有效。

因此以上 8 项可以继续在 76 / 293 / 282 / 286 / 289 / 173 中使用，但状态只能是：
`DIRECT_APPLY / CONNECTED`
不得写成 `VERIFIED_XN`。

## B. <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> CANDIDATE｜本轮确认必须验证 10 项

| ID | 候选知识 | 主要目标 Z / 工单 | 当前状态 |
| -- | -- | -- | -- |
| C-01 | 自动选参考的评分权重与排序算法 | 286（B-Z1/B-Z2） | CANDIDATE |
| C-02 | VLM 识别身份漂移/肢体/动作/连续性的准确率 | 286（B-Z4）/173 | CANDIDATE |
| C-03 | TECH_FAIL 是否可以自动跳过 USER 首轮观看 | 173 / 289 / 286 | CANDIDATE |
| C-04 | H3 segment retake / stitch 的真实稳定性 | 286 / 216 | CANDIDATE |
| C-05 | failure_family → changed_fields 的最有效修复映射 | 286（B-Z4） | CANDIDATE |
| C-06 | H3 / Wan / Vidu 等多角色、多参考、长镜能力 | 216 / 286 | CANDIDATE |
| C-07 | LongTake latent continuation / overlap / drift control | 216 / 286 | CANDIDATE |
| C-08 | 最佳关键帧采样频率与异常加密策略 | 289 / 173 | CANDIDATE |
| C-09 | Picture1 / Picture2 / 多参考槽最佳职责组合 | 286 / 216 | CANDIDATE |
| C-10 | VideoMemory / ViMax / Director 等方法对本项目的实际收益 | 272 → 对应已有 Z | CANDIDATE |

全部保持：
`CANDIDATE → E0 → E1 → E2 → E3 → E4 → E5 → VERIFIED`

未完成 E5 前不得写成：

* XN_LOCK
* VERIFIED_XN
* “已证明更稳/更准/更省”
* “可自动替代 USER”
* “当前模型已经稳定支持”

## C. 越权检查结果

已检查当前第一批直接落地区：

* <issue id="1fa003f7-852b-4a9b-8b17-59be3325017b" href="https://linear.app/674/issue/674-76/pipeline黎黎隆ai视觉生产总控流程">674-76</issue>：PASS，只有总控连接与职责边界；
* <issue id="5f616436-8194-42b4-aeab-611437d34c15" href="https://linear.app/674/issue/674-293/pocket角色素材总仓obsidian-md图像base审核输入">674-293</issue>：PASS，只有资产事实/接口；自动排序仍留在 272；
* <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/role-xn-lab角色l1l2l3规则验证nxxnsn生产规则">674-282</issue>：PASS，只做静态角色规则边界；
* <issue id="5dc719f3-5f18-4959-bd88-9d3d73eb1315" href="https://linear.app/674/issue/674-286/b-end端b问题系统总控zxnpathh3生产反馈">674-286</issue>：PASS，SHOT_PACKAGE 与记录字段可直接用；自动评分/局部 retake 效果未锁；
* <issue id="8f32ce94-ab24-41c0-a37c-385c06106fe0" href="https://linear.app/674/issue/674-289/h3vlibh3-视频库视频仓库编号系统-h3v-nnnn-描述词-审核登记">674-289</issue>：PASS，版本正本可直接用；机器预审能力未锁；
* <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/user视觉审核总入口静态角色视频裁决user-nx">674-173</issue>：PASS，USER 最终裁决主权明确；机器自动拦截未锁。

**R1 未发现需要再次回滚的 Step 1 新段落。**

## D. R1 输出状态

```text
DIRECT_APPLY = 8
CANDIDATE_IN_272 = 10
MISROUTED_NEW_KNOWLEDGE = 0
ROUTE_PENDING = C-10 的细分目标 + 等内部 GitHub 全量消化后的第二批重映射
```

R1 = DONE
NEXT = Step 1 / R2：把 8 个 DIRECT_APPLY 项统一收敛成各工单可机械消费的正式字段与接口，不加入任何效果性假设。

---

# 2026-10-08｜Step 1 · R2 落地结果（DA_INTERFACE_V1）

本轮把 R1 的 8 个 DIRECT_APPLY 项收敛成一个统一跨工单接口，不加入效果性假设。

## 已统一的 5 类 Packet

```text
ASSET_PACKET
SHOT_NEED / REF_SELECTION / SHOT_PACKAGE
VIDEO_ASSET_RECORD
USER_REVIEW_PACKET
FEEDBACK_PACKET
```

主链：

```text
293 ASSET_PACKET
→ 286 SHOT_PACKAGE
→ A端执行
→ 289 VIDEO_ASSET_RECORD
→ 173 USER_REVIEW_PACKET
→ FEEDBACK_PACKET
   ├→ 282 静态角色/Canon
   └→ 286 视频执行
```

## 本轮完成映射

* DA-01：SHA/version/review_state → ASSET_PACKET / VIDEO_ASSET_RECORD
* DA-02：真实参考绑定 → SHOT_PACKAGE.refs
* DA-03：SHOT_NEED / REF_SELECTION / SHOT_PACKAGE → 286
* DA-04：视频不覆盖 + provenance → VIDEO_ASSET_RECORD.version_chain
* DA-05：USER最终审美主权 → USER_REVIEW_PACKET
* DA-06：failure_family / kept_fields / changed_fields → FEEDBACK_PACKET
* DA-07：approved_end_state → next SHOT_NEED.start_state
* DA-08：route_target 282 / 286 分仓

## 旧字段兼容

不删除历史字段与旧审核评级。进入跨工单链时通过映射层转换到：
`schema=DA_INTERFACE_V1`

因此不会破坏已有 H3V、角色仓或旧审核记录。

## 能力边界仍冻结

以下没有在 R2 升级：

* 自动选参考评分权重；
* Picture1/Picture2 最优职责；
* VLM 预审准确率；
* TECH_FAIL 自动拦截；
* segment retake / stitch；
* LongTake；
* failure_family → 最优修法；
* 多角色/多参考模型能力。

它们仍为 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> CANDIDATE，继续走 E0→E5。

```text
R2 = DONE
DIRECT_APPLY_INTERFACE = DA_INTERFACE_V1
NEXT = Step 1 / R3：做最终冲突、重复、越权、旧规则兼容验收，确认 Step 1 可标 DONE。
```

---

# 2026-10-08｜Step 1 · R3 最终验收

## 检查范围

* <issue id="1fa003f7-852b-4a9b-8b17-59be3325017b" href="https://linear.app/674/issue/674-76/pipeline黎黎隆ai视觉生产总控流程">674-76</issue>
* <issue id="5f616436-8194-42b4-aeab-611437d34c15" href="https://linear.app/674/issue/674-293/pocket角色素材总仓obsidian-md图像base审核输入">674-293</issue>
* <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/role-xn-lab角色l1l2l3规则验证nxxnsn生产规则">674-282</issue>
* <issue id="5dc719f3-5f18-4959-bd88-9d3d73eb1315" href="https://linear.app/674/issue/674-286/b-end端b问题系统总控zxnpathh3生产反馈">674-286</issue>
* <issue id="8f32ce94-ab24-41c0-a37c-385c06106fe0" href="https://linear.app/674/issue/674-289/h3vlibh3-视频库视频仓库编号系统-h3v-nnnn-描述词-审核登记">674-289</issue>
* <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/user视觉审核总入口静态角色视频裁决user-nx">674-173</issue>

## 发现并修正

1. **旧 C端 PASS 锁视频**
   已降级为 `TECHNICALLY_STORED` / machine technical state。
   只有 173 USER_REVIEW_PACKET.decision=PASS 才能生成标准 PASS。
2. **旧 A端 PASS/PARTIAL/FAIL**
   已明确为 `execution_status`，不再与审美 PASS 混用。
3. **旧 Picture1=角色 / Picture2=场景 的固定规则**
   已降级为 `LEGACY_HEURISTIC`。
   新任务使用 REF_SELECTION.roles\[\]；最优槽位分工仍是 C-09，留在 272 验证。
4. **FEEDBACK source_type 枚举冲突**
   已统一为 `STATIC | VIDEO`。
   视频里拆出的静态 Canon 问题使用 `source_type=STATIC + provenance.derived_from_video=true`。
5. **end_state → next start_state 缺标准承载字段**
   已在 VIDEO_ASSET_RECORD 增加：
   `rendered_start_state / rendered_end_state / approved_end_state`。
   只有 USER PASS 后才写 approved_end_state。

## 最终验收

```text
R1 分类/盘点              PASS
R2 DA_INTERFACE_V1 落地   PASS
R3 冲突/兼容/越权验收     PASS

DIRECT_APPLY = 8/8 CONNECTED
CANDIDATE = 10 保留在 674-272
MISROUTED_NEW_KNOWLEDGE = 0
INTERFACE_CONFLICT = 0
USER_PASS_AUTHORITY = UNIQUE
```

# STEP 1 = DONE

下一阶段：
`Step 2 = VALIDATE_IN_272`

注意：<issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> 整体工单保持 In Progress，因为 C-01～C-10 仍需走 E0→E5；这里只关闭第一步，不关闭知识吸收总控。