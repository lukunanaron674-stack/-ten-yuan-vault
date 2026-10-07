# 674-282 pre-GC Linear description snapshot

archived_at: 2026-10-08
source_issue: 674-282
source_title: ROLE-XN-LAB｜角色L1/L2/L3规则验证｜NX→XN/SN→生产规则
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
  archive_pointer: AI问题解决Canvas/context_gc/674-282/
  gc_required: false
```

## CURRENT_SNAPSHOT

* role: 角色 L1/L2/L3 的 USER_NX → XN/SN 规则验证正本
* current: L1=FROZEN/PRODUCTION_READY；L2/L3继续验证；视频执行变量统一路由 <issue id="5dc719f3-5f18-4959-bd88-9d3d73eb1315" href="https://linear.app/674/issue/674-286/b-end端b问题系统总控zxnpathh3生产反馈">674-286</issue>
* valid_interface: DA_INTERFACE_V1 / FEEDBACK_PACKET(STATIC)
* output: 仅 LOCKED/FROZEN 规则可交 <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/image-prod角色视觉每小时生产规则包44四宫格回传">674-124</issue>

## ACTIVE_LINKS

<issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/user视觉审核总入口静态角色视频裁决user-nx">674-173</issue> → <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/role-xn-lab角色l1l2l3规则验证nxxnsn生产规则">674-282</issue> → <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/image-prod角色视觉每小时生产规则包44四宫格回传">674-124</issue>；素材事实走 <issue id="5f616436-8194-42b4-aeab-611437d34c15" href="https://linear.app/674/issue/674-293/pocket角色素材总仓obsidian-md图像base审核输入">674-293</issue>；视频执行问题走 <issue id="5dc719f3-5f18-4959-bd88-9d3d73eb1315" href="https://linear.app/674/issue/674-286/b-end端b问题系统总控zxnpathh3生产反馈">674-286</issue>。

## BLOCKERS

候选规则若缺跨角色/反例/USER可观察锚点，不得锁定。

## NEXT

只消费新的 USER_NX / 审核增量，更新候选规则与验证状态；不重扫完整历史。

## ARCHIVE_POINTER

`AI问题解决Canvas/context_gc/674-282/`

**读取纪律：默认禁止批量读取本 Issue 全量 comments/history。HOT_HEADER 不足时只扩读最近 3–5 条相关记录。**

---

# 唯一职责

本工单只负责把角色生产中的 **USER_NX / 审核证据** 转化为可验证、可复用、可交给生产端的规则。

不存图片正本，不做人工审核 UI，不负责长期素材目录。

主链：

```text
674-173 USER审核 / USER_NX
→ 674-282 规则提取与验证
→ XN_LOCK / SN_LOCK
→ 674-124 生产端消费
→ 新产物进入 674-293
→ 再回 674-173 / 282
```

# 三条内部规则线

## 282-L1｜头像形态规则 XN

当前状态：**FROZEN / PRODUCTION_READY**

用户已确认：头像的形态规则已经定了。

本层负责维护已冻结规则及回归证据，不重新发明规则。

生产端可直接消费：

* avatar_form_xn_version
* frozen morphology constraints
* diversity constraints
* identity / silhouette / face-language hard rules
* negative constraints

若后续审核出现稳定反例，只能创建 candidate patch；未经验证不得覆盖现行 XN。

## 282-L2｜四宫格规则 XN

当前状态：**OPEN_VALIDATION**

目标：解决“一个已认可头像如何稳定扩成四宫格/中景/中全景，而不发生身份、比例、服装、年龄、特殊结构漂移”。

输入：

* <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/userl1l2-图片审核基于完整-review-manifest-点选-passfail主参考">674-173</issue> 四宫格审核结果
* USER_NX
* 主参考头像
* 失败/返工样本
* 已有 <issue id="bcae30f4-b7ba-43ca-b3c0-4f292b98716c" href="https://linear.app/674/issue/674-168/head-judge-01头像判读层8维评分表-五问codex-只出图不判定">674-168</issue> 等历史判读规则作为候选证据

流程：

```text
NX样本
→ 可观察变量提取
→ candidate_XN
→ 正/反例对照
→ 跨角色验证
→ 预测下一轮 USER 判断
→ XN_LOCK
```

只有 XN_LOCK 才能进入 <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/codex-image-hourly画图-comfyui-生产固定工单">674-124</issue> 正式四宫格生产规则。

## 282-L3｜角色文字规则 SN

当前状态：**OPEN_VALIDATION**

> 用户当前使用“文字 SN”这个名称，本工单先保留，不擅自改名或并入其它术语。

目标：把头像/四宫格/作者反馈稳定转成角色文字设定，同时避免 AI 重设计角色。

需要验证：

* 哪些视觉事实可直接转文字
* 哪些只能 INFERENCE
* 哪些必须 USER/CANON 裁决
* region / organization / occupation / costume / behavior 等字段如何从证据进入文字卡
* 什么情况下文字规则可自动运行
* 什么情况下必须升级给 USER

流程：

```text
视觉证据 + USER_NX
→ candidate_SN
→ 多角色验证
→ 反例
→ SN_LOCK
→ 角色文字生产端消费
```

# NX→规则升级门

candidate XN/SN 至少满足以下一项才允许进入验证：

1. 同类 USER 判断在多个样本重复出现；
2. A/B 对照能稳定区分；
3. USER 能指出可观察锚点；
4. 规则能预测后续 USER 判断，而不是事后解释。

不得锁定：

* 单次“我觉得不对”
* 相互矛盾的反馈
* 只能整体感觉、无法操作化
* 加规则后生产更僵
* token / 复杂度成本明显高于收益

# 分级与生产路由

审核通过后由本工单提供生产规则：

* **GOLD / 金矿 / 红心核心角色** → 单角色独立四宫格生产，加载该角色 local XN/SN + 主参考。
* **SILVER / 银矿 / NPC** → 先绑定 region / organization / costume_family，再按区域批量四宫格生产；共享区域规则，但 character_id 独立，禁止同脸塌缩。

# 输出给 <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/codex-image-hourly画图-comfyui-生产固定工单">674-124</issue>

每次只输出机械可消费包：

```yaml
rule_pack_id:
stage: L1 | L2 | L3
rule_status: FROZEN | CANDIDATE | LOCKED
xn_version:
sn_version:
required:
forbidden:
local_character_rules:
region_rules:
validation_evidence:
known_failures:
```

<issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/codex-image-hourly画图-comfyui-生产固定工单">674-124</issue> 只能消费 LOCKED/FROZEN 规则；CANDIDATE 不得进入正式批量生产。

# 历史规则并入

以下旧工单的有效规则归入本工单，不再作为主链入口：

* <issue id="bcae30f4-b7ba-43ca-b3c0-4f292b98716c" href="https://linear.app/674/issue/674-168/head-judge-01头像判读层8维评分表-五问codex-只出图不判定">674-168</issue>｜头像 8维评分表 + 五问 → 282-L1/L2 候选/回归规则
* <issue id="895e098e-fe3a-4c37-8a78-3b07da90fd77" href="https://linear.app/674/issue/674-280/chatgpt74角色l1l2l3-human-in-nx校准三个z实例">674-280</issue>｜Human-in-NX 方法 → 本工单 NX→XN/SN 升级协议

# DONE

不是“一次做完”就永久 Done。本单是长期规则学习正本。

当前阶段 DONE 条件：

* L1 已有 production-ready 规则版本；
* L2 至少形成一版经跨角色验证的 XN_LOCK；
* L3 至少形成一版经多角色验证的 SN_LOCK；
* <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/codex-image-hourly画图-comfyui-生产固定工单">674-124</issue> 已能机械读取并使用这些规则；
* 新审核结果能继续作为增量证据进入本单，而不是重新从零研究。

---

# 2026-10-08｜第一批 Step 1：DIRECT_APPLY 边界

282 继续只负责角色静态视觉与角色文字的 NX→XN/SN。

允许：脸型、五官、年龄、发型、轮廓、比例、服装、特殊结构、静态风格、Canon、角色文字。

视频执行变量不在 282 锁定：
动作顺序、动作端点、摄影机、视频连续性、H3 Prompt、参考组合、seed、duration、segment、retake、视频模型工作流参数 → 统一进入 286。

若一个 USER_NX 同时包含静态形态与视频执行问题，拆成两条证据分别路由。

---

# 2026-10-08｜Step 1 · R2｜DA_INTERFACE_V1：282 输入边界

282 只接收满足以下条件的反馈：

```yaml
schema: DA_INTERFACE_V1
packet_type: FEEDBACK_PACKET
source_type: STATIC
route_target: 282
source_id:
source_version:
user_nx:
failure_family:
provenance:
```

视频里若出现静态角色形态/Canon问题，可以拆包后进入 282，但必须保持 `source_type=STATIC`，并在 provenance 中记录 `derived_from_video=true + video_id + video_version`。

282 不消费：

* 摄影机参数；
* seed / duration；
* 视频模型 workflow；
* segment / retake；
* 视频动作顺序与时序控制。

这些统一 route_target=286。

---

# 2026-10-08｜Step 1 · R3｜FEEDBACK source_type 兼容修正

统一枚举保持：
`source_type = STATIC | VIDEO`

若静态角色/Canon问题来自视频证据，不新增第三种 source_type。

正确写法：

```yaml
source_type: STATIC
route_target: 282
provenance:
  derived_from_video: true
  video_id:
  video_version:
```

此前出现的 `STATIC_DERIVED_FROM_VIDEO` 仅视为旧文字说明，不作为 DA_INTERFACE_V1 合法枚举。