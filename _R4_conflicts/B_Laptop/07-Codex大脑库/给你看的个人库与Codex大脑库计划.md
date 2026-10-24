# 给你看的个人库与Codex大脑库计划

## 这份计划的目的

你现在有两套东西正在成形：

1. **你的个人库**
   - 给你自己看。
   - 用来放图、连线、直觉、灵感、角色、视觉、场景、动画、素材。
   - 更像 Maya / Houdini / PureRef / 思维导图混合体。

2. **Codex 大脑库**
   - 给 Codex 看。
   - 用来沉淀规则、流程、F12 经验、十元语义、动态链、归档材料、交接协议。
   - 更像一个可被 AI 读取、吸收、审稿、删减的知识仓库。

这两套东西不要合并成一坨。它们应该是互相连接的两个库：

```text
你的个人库：感受、图像、关系、创作直觉、材料摆放
Codex 大脑库：规则、判断、索引、归档、自动化协议
```

## 当前可用的 ReactFlow 融合编辑器

DeepSeek 已经做出一个可运行原型：

```text
C:\Users\674\Documents\Codex\2026-05-21\1\brain-map\
```

里面已有：

```text
editor.html          主编辑器
mini.html            ReactFlow 测试版
lib/                 本地 React / ReactDOM / ReactFlow
graph.json           节点和连线数据
events.jsonl         文件变动事件日志
watcher.ps1          文件改动监听器
ten-yuan-root.canvas Obsidian Canvas 顶层图
sub-*.canvas         子画布
README.md            启动说明
```

已经验证过的能力：

- 页面可以打开。
- 可以放图。
- 可以放节点。
- 可以连线。
- 可以双击进入子画布。
- 可以用 watcher 监听文件变化。
- 可以把变化写进 `events.jsonl`。

这说明它不只是概念，已经是能继续施工的原型。

## 它应该扮演什么角色

我建议把它定位为：

```text
Ten Yuan Personal Brain Map
```

也就是你的个人知识蓝图，而不是 Codex 的内部规则库。

原因：

- 你需要一个能自由摆放图像、关系、灵感和结构的地方。
- Obsidian 普通文件适合归档，但不适合“空间化思考”。
- ReactFlow 编辑器适合做框中框、连线、子视角、节点钻入。
- Codex 可以读取它的事件日志和节点文件，但不应该把它完全变成机器格式。

## 两库对立但互通

建议结构：

```text
你的个人库
  负责：素材、图像、场景、角色、直觉连接、创作视野
  形式：ReactFlow / Canvas / 图片节点 / 子画布

Codex 大脑库
  负责：规则、经验、审稿、F12归档、交接、删减
  形式：Markdown / JSONL / 索引 / skill / 自动化协议
```

两边通过三种东西互通：

```text
1. 节点链接
   个人库节点指向 Codex 大脑库的 md 文件。

2. 事件日志
   watcher 把你的改动写入 events.jsonl，Codex 下次读取。

3. 归档索引
   F12 归档进入 Codex 大脑库，再被挑选成个人库节点。
```

## 推荐迁移位置

现在原型在：

```text
C:\Users\674\Documents\Codex\2026-05-21\1\brain-map\
```

后续建议迁移到你的 Obsidian vault：

```text
C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\_brain-map\
```

但更准确地说，它可以再分一层：

```text
07-Codex大脑库/
  _codex-brain/
    rules/
    protocols/
    f12/
    skills/

  _personal-map/
    editor.html
    lib/
    graph.json
    events.jsonl
    watcher.ps1
    canvases/
    images/
    nodes/
```

这样不会把“给你看的图像库”和“给 Codex 看的规则库”混在一起。

## 需要修的点

### 1. graph.json 有编码问题

当前 `graph.json` 里有部分中文变成乱码，例如：

```text
鍗佸厓璇箟
浜斿ぇ涓婚
```

这说明文件可能经历过编码转换问题。

修复建议：

- 统一使用 UTF-8。
- 重新生成 `graph.json`。
- 不要用会破坏中文编码的终端写入方式。
- 关键数据最好先以 `.md` 或 `.canvas` 为主，`graph.json` 作为视图缓存。

### 2. 文件保存方式要从“下载”升级为“直接写 vault”

当前编辑器 README 里提到保存 JSON。第一版可用，但长期不够顺。

理想状态：

```text
编辑节点
→ 自动写 graph.json
→ 如果节点绑定 md，同步改 md
→ watcher 记录 events.jsonl
```

### 3. watcher 要放到正确目录

watcher 应监听：

```text
_personal-map/
nodes/
canvases/
images/
```

不要监听整个 vault，否则事件太多，噪音会淹没真正重要的改动。

### 4. Codex 读取要有固定入口

Codex 不应该每次乱扫整个 vault。应该固定读：

```text
07-Codex大脑库/_personal-map/events.jsonl
07-Codex大脑库/_personal-map/graph.json
07-Codex大脑库/_personal-map/nodes/
07-Codex大脑库/给你看的个人库与Codex大脑库计划.md
```

## 你看的文件应该写什么

你的个人库里应该有一份给你看的入口文件：

```text
_personal-map/README_给我看.md
```

内容不应该太技术化，应该告诉你：

- 这个图是干什么的。
- 大框怎么分。
- 每个颜色代表什么。
- 哪些节点是灵感。
- 哪些节点是已归档。
- 哪些节点是要 Codex 吸收。
- 哪些节点是待删减。
- 怎么把一个图像/想法变成可训练材料。

## 建议的大框结构

顶层大框可以是：

```text
1. 我的素材库
2. 十元语义
3. 五大主题
4. 动态链母型
5. 视觉风格
6. 角色与三元
7. 故事与场景
8. F12归档素材
9. 待吸收
10. 待删减
```

其中：

```text
你的个人库偏向：1 / 5 / 6 / 7 / 9
Codex 大脑库偏向：2 / 3 / 4 / 8 / 10
```

## 你和 Codex 的协作方式

你在个人库里做：

```text
放图
连线
写直觉
标记“这个有意思”
标记“这个像 xz / nz / 命运”
标记“这个以后给 Codex 吸收”
```

Codex 做：

```text
读取 events.jsonl
找最近被你改过的节点
理解你的连接意图
把可吸收内容转成规则/索引/训练素材
把无效内容放进待删减
给你下一步蓝图
```

## 唤醒口令

你在别的 Codex 框里可以直接说：

```text
请读取我的 Obsidian 仓库：
C:\Users\19308\Documents\Obsidian\ten-yuan-vault

重点读取：
07-Codex大脑库/给你看的个人库与Codex大脑库计划.md
07-Codex大脑库/知识蓝图节点编辑器设想_2026-05-21.md
07-Codex大脑库/给deekseep的建议.md

同时检查：
C:\Users\674\Documents\Codex\2026-05-21\1\brain-map\

目标：把 ReactFlow 融合编辑器迁移成我的个人知识蓝图，并和 Codex 大脑库建立事件日志连接。
```

## 动画方向的补充判断

你的 vault 里已经有动画方向的基础材料：

```text
08-动画方向/动画AI生产方向_能力蓝图.md
08-动画方向/AI动画化可执行路径.md
08-动画方向/ComfyUI本地环境搭建.md
08-动画方向/灰塔_完整分镜脚本.md
08-动画方向/F12任务_灰塔镜1_关键帧.md
08-动画方向/F12_task_灰塔镜1.txt
```

这说明“动画方向”不是空想，已经开始形成完整链路：

```text
十元语义 / 动态链
→ 视觉映射
→ 分镜脚本
→ LTX-Video / Wan2.2 / ComfyUI
→ F12 回流归档
```

但现在真正卡住的点不是动画理论，而是接入链路：

```text
F12 连接不稳定
→ ChatGPT 生图/视觉框不能稳定被驱动
→ 生成结果无法稳定回流
→ 动画方向难以连续迭代
```

所以动画方向不应该直接依赖“F12 自动操控 ChatGPT 生图”作为唯一入口。

## 动画方向的正确分层

建议把动画生产分成四层：

```text
1. 创意层
   Obsidian / 个人库 / ReactFlow 节点图
   用来组织角色、场景、镜头、十元动力、视觉参考。

2. Prompt 层
   Codex 负责把十元语义和分镜转换成图像/视频 prompt。
   输出为 md、json、txt，不直接依赖 ChatGPT 生图。

3. 生成层
   优先走 ComfyUI / LTX-Video / Wan2.2 / 本地或 Hugging Face 工具。
   ChatGPT 生图只能作为辅助灵感，不作为主生产管线。

4. 回流层
   生成结果、失败原因、参数、prompt、图片路径回写 Obsidian。
   F12 可以参与归档，但不应该是唯一回流方式。
```

这样即使 F12 暂时连接不上，动画方向也不会停。

## ChatGPT 生图的问题定位

当前问题：

```text
想用 ChatGPT 生图 / 看图 / 改图
但 F12 与浏览器页面连接不稳
导致无法稳定自动发送、读取、归档
```

这类任务和普通文本任务不同：

- 图片生成更依赖页面状态。
- 上传图片、等待生成、读取结果都比文本更脆。
- ChatGPT 图片能力可能受额度、模型、页面 UI 变化影响。
- F12 当前更适合文本采矿，不适合作为重度生图控制器。

因此短期策略：

```text
F12 负责文本任务、prompt 生成、失败记录、归档。
生图先由用户手动触发，或转给 ComfyUI / 本地生成链路。
Codex 负责整理 prompt、命名文件、写回索引。
```

中期策略：

```text
给动画方向单独做 Visual Queue。

字段：
- shotId
- sourceNode
- prompt
- negativePrompt
- referenceImages
- targetTool: ChatGPT / ComfyUI / LTX / Wan2.2
- status: draft / ready / generating / done / failed
- outputPath
- failureReason
- nextAction
```

这样 F12 连接不上时，任务也不会丢，只是状态停在 `ready` 或 `failed`。

## ReactFlow 编辑器在动画方向里的位置

ReactFlow 融合编辑器很适合当动画方向的“视觉调度板”：

```text
角色节点
→ 场景节点
→ 镜头节点
→ prompt 节点
→ 输出图节点
→ 失败修正节点
```

每个节点绑定一个 md 文件：

```text
_personal-map/nodes/动画/灰塔/镜头01.md
_personal-map/nodes/动画/灰塔/角色-旅人.md
_personal-map/nodes/动画/灰塔/prompt-镜头01.md
```

连线表示：

```text
角色属于场景
场景生成镜头
镜头生成 prompt
prompt 生成图片
图片反馈修正 prompt
```

这比单纯在 ChatGPT 里反复对话更稳，因为每一步都有文件落点。

## 动画方向下一步

不要先追求“自动 ChatGPT 生图全链路”。

更稳的下一步是：

```text
1. 把 ReactFlow 编辑器迁入 vault。
2. 建立 _personal-map/动画/灰塔 子图。
3. 把 灰塔_完整分镜脚本 拆成镜头节点。
4. 每个镜头节点生成 prompt 文件。
5. 生成结果先手动放入 output 文件夹。
6. watcher 记录文件变化。
7. Codex 读取变化后做 prompt 修正和归档。
```

等文本、节点、文件回流稳定后，再考虑让 F12 接 ChatGPT 生图。

## 最终判断

这个 ReactFlow 融合编辑器值得保留。

它不应该被当成一次性实验，也不应该只是 DeepSeek 的残留文件。

它可以成为：

```text
你的个人视觉知识库
```

而 Codex 大脑库则负责：

```text
吸收、归档、审稿、删减、交接、自动化
```

两者之间靠 `events.jsonl` 和节点文件连接。

这条路比单纯依赖 Obsidian 图谱更适合你，因为你需要的是“能进入的框中框”，不是普通双链网络。
