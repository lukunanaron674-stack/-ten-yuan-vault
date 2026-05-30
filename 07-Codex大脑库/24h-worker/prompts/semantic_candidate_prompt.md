# 语义样本抽取 Prompt

进入【十元语义训练集工】

## 抽样范围

从以下目录中抽样分析片段：
- `05-银矿库/` — 作品分析
- `02-五大主题/` — 动态链片段
- `07-Codex大脑库/` — F12 归档
- `03-雾中渡口/` — 角色分析

## 输出格式 (JSONL)

```json
{
  "input": "文本片段",
  "source": "来源文件路径",
  "candidate": {
    "十元候选": ["xn", "z"],
    "五大主题": "时间 xn+z",
    "证据": ["证据1", "证据2"],
    "误判风险": ["可能误判原因"]
  },
  "label_status": "pending_review",
  "confidence": "low|medium|high"
}
```

## 十元参考

- x: 动作/事件
- n: 状态/身份
- z: 情绪/动力
- nx: 空间/环境
- xn: 制度/规则
- n+nx: 关系/网络
- z+n: 情感结构
- x并z: 冲突
- nx+zn: 命运结构
- zx+n: 行动动机

## 安全规则
- 只写 pending_review
- 不写 gold_dataset
- confidence 保守标注
- 有误判风险必须标注
