---
createdAt: 2026-05-22
source: Codex CLI
type: "工具入口"
status: active
tags: [HuggingFace, embedding, 向量检索, 十元分类, F12压缩, 自启动]
---

# Codex + HuggingFace 工具包 -- 对话入口

> 每次对话都可直接调用。首次使用自动启动服务器（~90秒），后续毫秒级响应。

## 一句话用法

`powershell
node C:\Users\19308\.codex\skills\ten-yuan-hf-tools\scripts\hf.js pipe "十元查询"
`

## 可用命令

- pipe: 搜索+分类一条龙
- search: 语义搜索 vault
- classify: 十元+五大主题分类
- rebuild: 重建索引
- health: 查看服务器状态

## 已部署模型

- paraphrase-multilingual-MiniLM-L12-v2 (~420MB): 向量搜索+分类
- ResNet-50 (~100MB): 图像分类
- BLIP (~1GB): 图像描述

缓存: E:/AIModels/huggingface

## 架构

Codex CLI -> hf.js [AUTO-START] -> HTTP -> Model Server (17313) -> ChromaDB (213 docs)

## 识图

`powershell
python C:\Users\674\Documents\Codex\2026-05-20\111\hf-vision\see.py classify 图片路径
`

## 相关

- [[Codex-HuggingFace工具包-v0.1-安装记录]]
- [[Codex-HF工具包-v0.2-运行报告]]
- [[F12归档索引]]
- [[Codex大脑总入口]]