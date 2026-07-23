---
name: Canvas概念库参考图补全
description: 按稳定顺序为 Obsidian `*_is-a名词素材库.canvas` 的缺图概念检索可核验参考图，写入来源笔记，新增一个 file 节点与一条概念连线，并以 GitHub 远端读回作为完成标准。整体连续运行，但每次执行只处理一个概念。
version: 1.0
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# Canvas 概念库参考图补全 Skill v1.0

## 目标

把 `09-给674（我）用的库/画画理论/` 下的 `*_is-a名词素材库.canvas` 逐个补成可浏览、可追溯、可继续创作的参考图库。

执行策略：

```text
真实参考优先
→ 来源与许可记录
→ 参考笔记入库
→ Canvas file 节点与连线
→ GitHub 提交
→ 远端读回验证
→ 下次继续下一个概念
```

整个计划要跑完全部概念，但**单次执行严格只完成一个概念**，避免批量误连、重复写入和失控修改。

---

## 唯一仓库与状态

- 仓库：`lukunanaron674-stack/-ten-yuan-vault`
- 分支：`main`
- 状态文件：`04-F12总控载体/canvas-single-image-pipeline/state.json`
- 运行账本：`04-F12总控载体/canvas-single-image-pipeline/run-ledger.md`
- Skill：`07-Codex大脑库/skills/Canvas概念库参考图补全/SKILL.md`

没有 GitHub 远端提交与读回证据，不得声称完成。

---

## 扫描顺序

1. 扫描 `09-给674（我）用的库/画画理论/` 下所有文件名匹配 `*_is-a名词素材库.canvas` 的 Canvas。
2. `completedCanvases` 中已标记完成的库直接跳过。
3. 先处理状态文件中未完成的当前节点；不得擅自换节点。
4. 当前库完成后，按 Canvas 完整路径字典序进入下一库。
5. 库内候选按 `y → x → node id` 升序选择。

---

## 缺参考判定

候选必须同时满足：

1. `type=text`；
2. 文本第一行是明确概念名；
3. 文本中含 `is-a` 描述；
4. 是叶子概念节点，不是标题、分类标题、统计、说明、关键词、映射表或“更多/按需扩展”；
5. Canvas 中不存在从该 text 节点指向有效参考 file 节点的连线；
6. 对应素材目录中不存在可核验的参考笔记或图片。

已存在下列组合即视为完成，不得重复：

```text
概念 text 节点
+ 参考 file 节点
+ text → file 连线
+ 仓库中的参考笔记或图片
+ 远端可读 commit/blob
```

---

## 参考图选择原则

### 来源优先级

1. Wikimedia Commons 等许可清晰的开放图库；
2. 博物馆、档案馆、大学、政府或公共机构开放藏品；
3. 原作者或摄影师的可核验页面；
4. 专业媒体、行业资料库或品牌档案页；
5. 找不到合格参考时，才创建“提示词参考笔记”，不得伪造图片来源。

禁止：

- 使用搜索引擎缩略图作为永久来源；
- 只记录图片直链而不记录来源页；
- 把 Pinterest、聚合搬运页或无法核验作者的转载当最终来源；
- 未记录许可或使用边界却声称可自由使用。

每个参考至少记录：

- 来源页；
- 原图地址；
- 作者/机构；
- 许可或版权状态；
- 原图宽高（可核验时）；
- 选择理由；
- 使用边界。

---

## 按概念类型选择画面

### 服装、配饰、角色装备

优先找**横向人物参考**，让概念穿在最能代表它的人身上。

可包含：儿童、少女、成年男女、老妇、老者、族长、旅者、工匠等。不是机械凑齐所有年龄，而是选择最能说明该服装社会身份、年龄差异和穿着方式的角色。

### 村落、营地、市场、空间

优先找“场所 + 代表居民”的横图，既看见空间，也看见谁生活在里面。

### 工具、构件、动物、纹样、纯物件

优先找单体清楚、结构可辨、背景干扰少的参考；必要时加入使用者作尺度说明。

### 原创、超自然或无现实对应概念

先找构成该概念的真实母体参考；仍不足时，写提示词笔记作为后续生图依据，不虚构现实出处。

---

## 参考笔记格式

路径：

```text
09-给674（我）用的库/画画理论/assets/<Canvas文件名不含.canvas>/<nodeId>_<规范化概念名>_reference.md
```

模板：

```markdown
---
canvas: <Canvas文件名>
nodeId: <节点ID>
conceptName: <概念名>
referenceType: external-image
source: <来源机构>
sourcePage: <来源页面>
originalImage: <原图地址>
author: <作者或机构>
license: <许可/版权状态>
selectedAt: <ISO时间>
---

# <概念名>｜参考

![](<原图地址>)

## 参考理由

- <为什么能代表该概念>
- <构图、人物、材料、色彩或空间证据>

## 使用边界

这是创作参考，不等同于最终原创设定。提取结构、材料、比例、配色和使用语境，避免逐像素复制人物面貌、完整纹样或受保护设计。

## 署名

<作者、机构、许可与来源说明>
```

---

## Canvas 写入规则

每个概念只新增：

1. 一个 `file` 节点；
2. 一条从概念 text 节点指向该 file 节点的边。

命名：

```text
file node id: ref_<nodeId>
edge id: e_ref_<nodeId>
edge label: 参考图
```

默认布局：

- 优先放在概念节点左侧；
- `x = concept.x - 380`；
- `y = concept.y - 20`；
- 建议 `width=340`、`height=260`；
- 若与既有节点冲突，选择最近的不重叠位置，但不得移动旧节点。

禁止修改：

- 原概念文字；
- 既有节点坐标；
- 既有边；
- 无关节点、颜色或尺寸；
- 用整张海报替代可编辑 Canvas 节点。

---

## 单次执行流程

### 1｜读取断点

读取状态文件和目标 Canvas 全量 JSON。

若当前节点：

- `remoteVerified=false`：继续当前节点；
- 参考笔记已提交但 `canvasLinked=false`：只补 Canvas 连线；
- `remoteVerified=true && canvasLinked=true`：扫描并选择下一缺参考概念。

### 2｜锁定一个概念

写入状态：

```json
{
  "phase": "reference_search_started",
  "status": "working",
  "nodeId": "<id>",
  "conceptName": "<name>"
}
```

### 3｜检索并核验参考

核验来源页、原图、作者/机构、许可和适配理由。找不到可靠来源时停在当前节点，记录唯一下一动作，不跳到下一概念。

### 4｜提交参考笔记

创建参考笔记并提交 GitHub；远端读回确认文件内容与 blob。

### 5｜原位更新 Canvas

只新增一个 file 节点和一条 `参考图` 连线。验证 JSON 可解析，节点/边 ID 唯一，引用路径存在。

### 6｜远端验证

至少读回：

- 参考笔记；
- Canvas 新 file 节点；
- Canvas 新 edge；
- Canvas commit SHA 与 blob SHA；
- 状态文件。

### 7｜登记完成

只有上述读回成功后才写：

```json
{
  "phase": "reference_canvas_linked",
  "status": "completed_remote_verified",
  "committed": true,
  "pushed": true,
  "remoteVerified": true,
  "canvasLinked": true
}
```

下一次执行再选择下一个概念。

---

## 状态字段

保留并维护：

- `planId`
- `canvasPath`
- `nodeId`
- `conceptName`
- `phase`
- `status`
- `lastHeartbeat`
- `retryCount`
- `lastError`
- `nextAction`
- `committed`
- `pushed`
- `remoteVerified`
- `canvasLinked`
- `canvasNodeId`
- `canvasEdgeId`
- `canvasBlobSha`
- `verifiedCommit`
- `referenceCommit`
- `referenceNotePath`
- `referenceSourcePage`
- `referenceOriginalUrl`
- `referenceAuthor`
- `referenceLicense`
- `completedCanvases`

旧的生图字段可保留为兼容字段，但参考图模式不伪造 `sha256`、本地字节数或下载后尺寸。

---

## 运行账本

每次执行结束都向 `run-ledger.md` 追加一条：

```markdown
## <时间>｜<Canvas>｜<nodeId> <概念名>

- 结果：completed / failed / no_missing_concepts
- 参考笔记：<path>
- 来源页：<url>
- 参考提交：<sha>
- Canvas 提交：<sha>
- Canvas blob：<sha>
- 远端读回：true/false
- 失败原因：<无则写 none>
- 下一动作：<唯一动作>
```

不得只记“成功”，必须带可核验 SHA。

---

## 失败处理

任一步失败：

1. 停在当前概念；
2. 不选择下一节点；
3. `retryCount + 1`；
4. `lastError` 写明工具、错误码和错误信息；
5. `nextAction` 只写一个可执行动作；
6. 在账本记录失败证据。

---

## 全部完成条件

当所有目标 Canvas 都不存在缺参考叶子概念时：

1. 状态写为 `no_missing_concepts`；
2. 当前 Canvas 加入 `completedCanvases`；
3. 运行账本记录最终完成时间与最后可验证 SHA；
4. 不制造新概念、不扩写“更多”节点、不重复挂图。

---

## 每轮汇报

只汇报真实证据：

```text
Canvas：
节点：
概念：
参考笔记：
来源：
参考提交：
Canvas 提交：
Canvas blob：
远端读回：
当前断点：
下一动作：
```

若没有缺参考概念，明确写：`no_missing_concepts`。
