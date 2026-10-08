# 674-293 pre-GC Linear description snapshot

archived_at: 2026-10-08
source_issue: 674-293
source_title: POCKET｜角色素材总仓｜Obsidian MD×图像×Base×审核输入
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
  archive_pointer: AI问题解决Canvas/context_gc/674-293/
  gc_required: false
```

## CURRENT_SNAPSHOT

* role: 角色素材正本与中转管理层
* canonical_shape: 角色 MD ↔ images/ ↔ Base
* valid_interface: DA_INTERFACE_V1 / ASSET_PACKET
* key_rule: asset_id + path + sha256 + version 不完整时不得输出为正式可消费资产

## ACTIVE_LINKS

<issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/image-prod角色视觉每小时生产规则包44四宫格回传">674-124</issue> 生产 → <issue id="5f616436-8194-42b4-aeab-611437d34c15" href="https://linear.app/674/issue/674-293/pocket角色素材总仓obsidian-md图像base审核输入">674-293</issue> 入库/索引 → <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/user视觉审核总入口静态角色视频裁决user-nx">674-173</issue> USER审核 → <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/role-xn-lab角色l1l2l3规则验证nxxnsn生产规则">674-282</issue> 规则学习；视频消费端 <issue id="5dc719f3-5f18-4959-bd88-9d3d73eb1315" href="https://linear.app/674/issue/674-286/b-end端b问题系统总控zxnpathh3生产反馈">674-286</issue>。

## BLOCKERS

MISSING_REF / WAIT_ASSET / INDEX_MISMATCH / REVIEW_STATE_MISMATCH。

## NEXT

只处理新增/变化资产和审核状态；不重复读取完整旧素材历史。

## ARCHIVE_POINTER

`AI问题解决Canvas/context_gc/674-293/`

**读取纪律：默认禁止批量读取本 Issue 全量 comments/history；素材正文以本地/GitHub/Obsidian canonical 为准。**

---

# 唯一职责

本工单 = **角色素材正本与中转管理层**，后续交给 Pocket 人在环外长期管理。

它负责“素材在哪里、属于谁、当前是什么状态”，不负责审美判断，也不负责把 NX 变成规则。

# 输入

主要入口：

* <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/codex-image-hourly画图-comfyui-生产固定工单">674-124</issue> 每小时/批量生产出来的头像、四宫格、返工图
* 历史角色素材
* <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/userl1l2-图片审核基于完整-review-manifest-点选-passfail主参考">674-173</issue> 已产生的审核结果

Linear 只作云端中转；Obsidian 本地库是长期正本。

# 本地结构

```text
角色素材库/
  00_原始生产板/
  01_待审核/
  02_正式角色/
    CHARACTER_ID/
      CHARACTER_ID.md
      images/
        avatar/
        fourgrid/
        turnaround/
        fullbody/
        expression/
        other/
  03_审核数据/
  04_规则证据/
```

# Base 正本

每个角色/候选必须能在 Base 找到：

* asset_id
* character_id / candidate_id
* asset_type
* tier = GOLD | SILVER | UNKNOWN
* region / organization
* MD path
* image path
* source_issue
* source_run
* SHA256
* review_state
* main_reference
* rule_version
* last_updated
* integrity_state

# 审核输入职责（吸收 <issue id="d8f2e99f-afac-4ab8-9c2f-7790d2245993" href="https://linear.app/674/issue/674-154/worker头像审核素材全量归集去重与review-manifest">674-154</issue>）

Pocket 自动完成：

1. 下载/接收生产素材；
2. 保留原始 4×4 生产板；
3. 切片/派生时保留 parent_asset_id；
4. SHA 去重；
5. 建 Asset Index；
6. 生成 review_manifest；
7. 生成本批审核 Canvas/审核输入；
8. 交 <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/userl1l2-图片审核基于完整-review-manifest-点选-passfail主参考">674-173</issue>。

因此 <issue id="d8f2e99f-afac-4ab8-9c2f-7790d2245993" href="https://linear.app/674/issue/674-154/worker头像审核素材全量归集去重与review-manifest">674-154</issue> 不再作为独立主链入口。

# 四宫格素材归档（吸收 <issue id="a23c6ceb-c69e-4b50-8672-7222a568d75f" href="https://linear.app/674/issue/674-281/workerl2角色四宫格素材库角色版本来源sha归档">674-281</issue>）

四宫格不建第二套仓库。
所有 L2 四宫格继续存在本角色目录与 Base 中，记录：

* source_avatar_id / SHA
* output SHA
* version
* generation_method
* layout
* review_state
* reviewer
* notes

# 三方一致性

```text
角色 MD ↔ images/ ↔ Base
```

任何正式资产不得成为：

* ORPHAN_IMAGE
* ORPHAN_MD
* MISSING_BASE
* INDEX_MISMATCH
* REVIEW_STATE_MISMATCH

# GOLD / SILVER

只存分级状态，不在磁盘复制两套素材：

* GOLD = 红心/核心角色
* SILVER = NPC

通过 Base 视图分开管理。

# 与其它工单边界

* <issue id="bb460c9d-4f65-4bd4-ad73-08df8b9d8d23" href="https://linear.app/674/issue/674-124/codex-image-hourly画图-comfyui-生产固定工单">674-124</issue>：生产 / 重跑
* <issue id="7ac33bfd-ab1c-475d-8c11-033fe555a20e" href="https://linear.app/674/issue/674-173/userl1l2-图片审核基于完整-review-manifest-点选-passfail主参考">674-173</issue>：USER 审核与 USER_NX
* <issue id="b8dd5507-cddf-4fd8-999d-43bf91bf03e5" href="https://linear.app/674/issue/674-282/role-xn-lab角色l1l2l3规则验证nxxnsn生产规则">674-282</issue>：NX→XN/SN 规则学习与验证
* 本单 <issue id="5f616436-8194-42b4-aeab-611437d34c15" href="https://linear.app/674/issue/674-293/worker本地角色素材总仓角色md图像文件夹base统一索引">674-293</issue>：素材正本、目录、索引、审核输入

# DONE

这是长期运行仓，不以“关闭工单”为目标。
阶段性完成要求：

* 全量角色 MD / 图片 / Base 三方可定位；
* 审核输入不再需要 ChatGPT 重读所有历史图片；
* 所有新增生产素材可自动入库；
* GOLD/SILVER 可按 Base 直接筛选；
* 173 审核数据能回写到对应 asset_id。

---

# 2026-10-08｜第一批 Step 1：DIRECT_APPLY 资产接口

这是工程接口，不需要等待 E0→E5。

任何被 286 正式消费的参考资产必须可追溯：

```yaml
entity_id:
entity_type: CHARACTER | SCENE | PROP
asset_id:
asset_type:
path:
sha256:
version:
review_state:
main_reference:
source_issue:
last_updated:
visual_state:
  costume:
  expression:
  damage:
  carried_props:
reference_roles:
  - CHARACTER_IDENTITY
  - CHARACTER_BODY
  - COSTUME
  - SCENE_LAYOUT
  - STYLE
  - COMPOSITION
  - START_FRAME
  - END_FRAME
  - MOTION_REF
```

293 只提供事实与资产职责，不负责证明“某种选图算法更优”。

若 asset_id / path / SHA / version 不完整，返回 `MISSING_REF` / `WAIT_ASSET`；286 不得用纯文字假装素材存在。

自动排序权重、最优 Picture 槽组合等进入 <issue id="adad9533-ee17-4d68-858b-a5b8306d9bbb" href="https://linear.app/674/issue/674-272/chatgptsocialus-知识吸收与验证总控">674-272</issue> 验证，不在本单直接锁规则。

---

# 2026-10-08｜Step 1 · R2｜DA_INTERFACE_V1：ASSET_PACKET

本节是 DIRECT_APPLY 的跨工单接口契约。旧仓库字段可以继续存在，但对外输出给 286 时必须归一化为以下结构。

```yaml
schema: DA_INTERFACE_V1
packet_type: ASSET_PACKET

asset_id:
entity_id:
entity_type: CHARACTER | SCENE | PROP | OTHER
asset_type:

locator:
  path:
  source_issue:
  source_run:

integrity:
  sha256:
  version:
  integrity_state:

review:
  source_review_state:
  normalized_review_state: UNREVIEWED | PASS | FAIL | AMBIGUOUS | SUPERSEDED
  main_reference:

visual_state:
  costume:
  expression:
  damage:
  carried_props:

reference_roles: []

provenance:
  parent_asset_id:
  created_from:
  last_updated:
```

## 输出纪律

1. `asset_id + path + sha256 + version` 任一缺失 → 不得输出为正式可消费资产。
2. 旧状态名允许保留在 `source_review_state`；跨工单只读取 `normalized_review_state`。
3. `reference_roles` 只描述“可承担什么职责”，不表示某种角色分配已经证明最优。
4. 293 不负责给候选资产打“效果评分”；自动排序属于 272 CANDIDATE。

输出：
`ASSET_PACKET → 674-286`

---

# 2026-10-08｜Step 1 · R3｜ASSET 状态兼容映射

历史资产库可继续保留原 review_state 命名。

跨工单 ASSET_PACKET 必须同时提供：

```yaml
review:
  source_review_state:
  normalized_review_state: UNREVIEWED | PASS | FAIL | AMBIGUOUS | SUPERSEDED
```

不修改历史记录，只做输出归一化。

只有来自 173 的 USER 决策可以把静态资产映射为标准 PASS/FAIL；机器候选、生产完成、已存储等状态不得伪装成 USER PASS。