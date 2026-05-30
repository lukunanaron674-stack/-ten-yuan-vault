---
createdAt: 2026-05-21T00:23:23
source: Codex CLI
type: 系统归档
status: active
tags: [HuggingFace, 向量检索, 十元分类, 知识图谱, 训练数据, Codex-Skill]
---

# Codex + HuggingFace 工具包 v0.2 完整运行报告

## 一句话总结

3小时自主迭代：从零搭建了持久化 HF 模型服务器 + 5个工具端点 + Codex Skill + 207篇向量索引 + 75条训练数据 + 知识图谱分析。

---

## 架构

 + "" + "" + "" + 	ext
Codex CLI
  → ten-yuan-hf-tools skill (hf.js)
    → HTTP → Model Server (127.0.0.1:17313)
      → SentenceTransformer (all-MiniLM-L6-v2)
      → ChromaDB (207 docs, 384-dim)
        → ten-yuan-vault (E:/AIModels cache)
 + "" + "" + "" + 

## 文件清单

| 文件 | 用途 |
|------|------|
| scripts/model_server.py | 持久化模型服务器 (端口17313) |
| scripts/hfc.py | Python HTTP 客户端 |
| scripts/hf.py | Python 统一CLI (直连模式) |
| scripts/batch_test.py | 批量查询测试 |
| scripts/vault_analysis.py | 知识图谱分析 |
| scripts/extract_labels.py | 训练数据提取 |
| scripts/build_index.py | 索引构建 |
| scripts/search_memory.py | 语义搜索 |
| scripts/classify_tenyuan.py | 十元分类 |
| scripts/rerank_results.py | 重排 |
| scripts/f12_digest.py | F12日志压缩 |
| scripts/see.py | 图像识别 (ResNet-50) |
| training_data/ | 75条标注样本 (train/test split) |
| vector_db_fast/ | ChromaDB 向量索引 (207篇) |

## Codex Skill

已安装: C:\Users\19308\.codex\skills\ten-yuan-hf-tools\

 + "" + "" + "" + powershell
node C:\Users\19308\.codex\skills\ten-yuan-hf-tools\scripts\hf.js search "query"
node C:\Users\19308\.codex\skills\ten-yuan-hf-tools\scripts\hf.js classify "text"
node C:\Users\19308\.codex\skills\ten-yuan-hf-tools\scripts\hf.js pipe "query"
 + "" + "" + "" + 

## 性能数据

| 指标 | 数值 |
|------|------|
| 模型加载 | ~60s (仅启动一次) |
| 索引重建 | 7.1s (207篇) |
| 单次搜索 | <0.05s |
| 单次分类 | <0.05s |
| 批量20条 | 0.6s |
| 文档总数 | 207 |
| 标注样本 | 75 |

## 知识图谱发现

### 重复文档 (4对完全一致)
- 旧库融合中枢 ↔ 00_中枢总纲 (银矿哥总入口、项目进度总览、五大主题总入口、十元体系总入口)
- 建议: 完成迁移后删除旧库副本

### 五大主题模板化问题
- 02-五大主题下的5个文件相似度>0.95，内容高度雷同
- 建议: 分化各主题的实际分析内容

### 文件夹分布
- 奶白素材: 42篇 (20%) - 最大内容集群
- F12归档输出: 33篇 (16%)
- 04-F12总控载体: 16篇 (8%)

### 主题聚类
- 案例研究簇: 71篇 (最大)
- 核心知识簇: 59篇
- 运营日志簇: 55篇
- F12工作流簇: 18篇
- 扩展代码簇: 4篇

## 训练数据集

75条标注样本，分布:
- x+z: 32条
- xn+z: 30条
- zn+x: 29条
- zx+nx: 22条
- xz+nz: 17条

已拆分为 train (60) / test (15)，可用于后续 fine-tune。

## 批量查询测试结果 (Top-10)

| 查询 | 最高分 | 十元Top-1 |
|------|--------|----------|
| x+z 空间壳瓦解回 nz | 0.58 | x+z(0.447) |
| nz+xz 停靠但不稳定的场景 | 0.539 | x+z(0.342) |
| 角色在制度倒计时中被迫行动 守住承诺爆发 | 0.559 | z(0.209) |
| xn规则碾压 z行动 产生扭曲的nz | 0.536 | z(0.287) |
| zx因果链条断裂 回到空白的n | 0.538 | z(0.305) |
| zn行动结果固化 变成新的n容器 | 0.535 | z(0.312) |
| xz结构调整 重组身份认同 | 0.504 | x+z(0.398) |
| x+z多关系并行 冲突与协调 | 0.583 | x+z(0.481) |
| nx存在衍生 属性绑定到行动zx | 0.541 | z(0.284) |
| n单纯存在 等待x关系激活 | 0.503 | n(0.264) |
| z行动推进行 nz从行动中生成 | 0.514 | z(0.364) |
| xn固化后重新熔解回x+z | 0.622 | x+z(0.443) |
| 空间型五维映射 x并z+n | 0.617 | x+z(0.309) |
| 时间型xn+z 倒计时与爆发 | 0.621 | x+z(0.457) |
| 命运型xz+nz 柔情被切断 | 0.583 | x+z(0.420) |
| 本体型zn+x 身份重构 | 0.573 | x+z(0.302) |
| 因果型zx+nx 链式反应 | 0.623 | x+z(0.433) |
| 十元生补克表 n生什么 x克什么 | 0.59 | x+z(0.155) |
| F12总控载体 自动化任务断点 | 0.517 | x(0.200) |
| 银矿库 灰矿 降权 污染样本 | 0.499 | xn(0.166) |


## 下一步

- [ ] 换中文 embedding 模型 (BGE-small-zh 或 multilingual-e5-large)
- [ ] 下载 reranker 模型启用重排
- [ ] 用75条样本 fine-tune 十元分类器
- [ ] 删除旧库重复文件
- [ ] 接入 F12 桥的自动归档流
- [ ] 服务器开机自启动

## 启动命令

 + "" + "" + "" + powershell
# 启动模型服务器
start /b C:\Users\19308\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe C:\Users\674\Documents\Codex\2026-05-20\111\hf-tools\scripts\model_server.py

# 等待60秒后测试
curl -s http://127.0.0.1:17313/health
 + "" + "" + "" + 

## 相关笔记

- [[Codex-HuggingFace工具包-v0.1-安装记录]]
- [[F12总控载体蓝图]]
- [[v1.1-本地桥与GitHub确认桥记忆]]
- [[Codex大脑总入口]]
