---
createdAt: 2026-05-20T19:59:06
source: Codex CLI
type: 工具归档
status: active
tags: [HuggingFace, embedding, 向量检索, 十元分类, F12压缩]
---

# Codex + HuggingFace 工具包 v0.1 安装记录

## 一句话定位

给 Codex 外接了 HuggingFace 模型工具包：**检索脑 + 分类眼 + 压缩爪**，模型全部缓存于 E 盘，不占 C 盘空间。

---

## 装了什么

| 层级 | 工具 | 模型 | 大小 |
|------|------|------|------|
| 检索 | ChromaDB + embedding | paraphrase-multilingual-MiniLM-L12-v2 | ~420MB |
| 重排 | Cross-encoder | BAAI/bge-reranker-v2-m3（待下载） | ~1.2GB |
| 分类 | 十元/五大主题 zero-shot | 同上 embedding 模型 | 复用 |
| 压缩 | F12 日志摘要 | 同上 | 复用 |
| 识图 | ResNet-50 + BLIP | microsoft/resnet-50 | ~100MB |

**模型缓存路径**: E:\AIModels\huggingface  
**Python 路径**: C:\Users\19308\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe  
**项目路径**: C:\Users\674\Documents\Codex\2026-05-20\111\hf-tools\

---

## 五个工具脚本

### 1. build_index.py — 建索引

扫描 Obsidian vault 所有 .md 文件，用 embedding 模型生成向量，存入 ChromaDB。

""powershell
python scripts/build_index.py [vault路径]
""

### 2. search_memory.py — 语义搜索

输入自然语言查询，返回语义最相近的笔记。

""powershell
python scripts/search_memory.py "x+z 空间壳瓦解回 nz" -n 5
""

### 3. classify_tenyuan.py — 十元初筛

输入文本，输出十元候选 + 五大主题候选 + 风险提示。

""powershell
python scripts/classify_tenyuan.py "一个角色在制度倒计时中被迫行动"
python scripts/classify_tenyuan.py --file 文件路径
""

### 4. rerank_results.py — 重排

用 cross-encoder 对搜索结果二次排序。

""powershell
python scripts/rerank_results.py "查询" "候选1" "候选2" ...
""

### 5. f12_digest.py — F12日志压缩

对 F12 归档日志做语义压缩 + 问题检测。

""powershell
python scripts/f12_digest.py F12日志.md --classify
""

---

## 首次运行实测

### 索引构建
- 扫描 ten-yuan-vault：**188 篇**有效文档
- 耗时：77 秒
- 模型：paraphrase-multilingual-MiniLM-L12-v2

### 语义搜索测试
- 查询: "x+z 空间壳瓦解回 nz"
- 命中: 空间型(x并z+n) 20部聚合、五大主题总入口、心慌方Cube案例分析

### 十元分类测试
- 输入: "一个角色在制度倒计时中被迫行动，为了守住承诺突然爆发"
- 十元候选: zx(0.326) > zn(0.293) > z(0.287)
- 五大主题: 力量(0.321) > 时间(0.284) > 关系(0.265)
- 风险: 三个风险提示全部触发（低置信度、分数接近、建议二审）

### F12日志压缩
- 输入: v1.1-本地桥与GitHub确认桥记忆.md (3027字符)
- 输出: 214字符
- 压缩率: 93%

---

## 与 Codex 的协作方式

Codex 不直接运行模型，而是调用这些脚本：

""text
用户: "找一下 x并z+n 空间壳瓦解回 nz 的相关归档"
  → search_memory.py 语义搜索
  → rerank_results.py 重排
  → classify_tenyuan.py 初筛
  → Codex 读结果，生成分析
""

## 后续方向

- [ ] 换 multilingual-e5-large 提升中文精度
- [ ] 下载 BGE-reranker-v2-m3 启用重排
- [ ] 训练十元专用分类器（标注数据 → fine-tune）
- [ ] 接入 F12 自动归档流（每轮完成自动 digest）
- [ ] 为桌宠 v0.8 提供状态识别接口

---

## 相关笔记

- [[F12总控载体蓝图]]
- [[v1.1-本地桥与GitHub确认桥记忆]]
- [[Codex大脑总入口]]
- [[十元生补克表]]
