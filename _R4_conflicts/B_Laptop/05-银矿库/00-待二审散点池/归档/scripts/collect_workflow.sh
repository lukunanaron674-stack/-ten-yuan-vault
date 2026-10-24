#!/bin/bash
# 囷→霜→斟→囷归档 工作流 v2（真实B站采集）
# 每15分钟执行一次，永不退出

WORKFLOW_SCRIPT="/workspace/scripts/collect_workflow_v2.js"
LOG="/tmp/workflow.log"
ITERATION_FILE="/tmp/workflow_iteration.txt"
RESULT_FILE="/tmp/workflow_result.txt"

# 读取迭代次数
if [ -f "$ITERATION_FILE" ]; then
  ITER=$(cat "$ITERATION_FILE")
else
  ITER=0
fi
MAX_ITER=3

echo "=== 第${ITER}轮执行: $(date) ===" >> "$LOG"

# === 1. 囷采集 ===
KW_FILE="/workspace/memory/霜_keywords.txt"
if [ -f "$KW_FILE" ] && [ -s "$KW_FILE" ]; then
  KW=$(cat "$KW_FILE" | head -1)
  SOURCE="[霜指定]"
elif [ $((RANDOM % 2)) -eq 0 ]; then
  FIXED_KWS=("插画角色设计" "场景概念设计" "光影氛围图" "角色立绘" "动画美术" "厚涂插画" "平涂日韩风" "水彩插画")
  idx=$((RANDOM % ${#FIXED_KWS[@]}))
  KW="${FIXED_KWS[$idx]}"
  SOURCE="[固定轮换]"
else
  KW="绘画"  # 随机兜底
  SOURCE="[随机探索]"
fi

echo "[囷] 关键词：$SOURCE $KW" >> "$LOG"

# 调用Node.js脚本执行真实B站搜索
node "$WORKFLOW_SCRIPT" "$KW" >> "$LOG" 2>&1

# 读取采集结果
if [ -f "$RESULT_FILE" ]; then
  RESULT=$(cat "$RESULT_FILE")
  echo "[囷] 采集完成：${#RESULT} 字" >> "$LOG"
else
  RESULT="无结果"
  echo "[囷] 采集失败：无结果" >> "$LOG"
fi

# === 2. 霜分析 ===
echo "[霜] 分析三元结构..." >> "$LOG"
STRUCTURE=$(node -e "
const r = require('fs').readFileSync('$RESULT_FILE', 'utf8');
if (!r || r.length < 10) { console.log('无内容可分析'); process.exit(0); }
// 简单三元推断（实际由霜的角色输出）
const keywords = ['水彩','厚涂','平涂','光影','氛围','角色','场景','动画'];
let found = keywords.filter(k => r.includes(k));
console.log('发现元素: ' + found.join('/'));
console.log('三元结构: x+z+n框架');
")
echo "$STRUCTURE" >> "$LOG"

# === 3. 斟评分 ===
echo "[斟] 评分中..." >> "$LOG"
# 实际由斟的角色判断，这里用启发式
SCORE=$(node -e "
const r = require('fs').readFileSync('$RESULT_FILE', 'utf8');
let s = 50;
if (r.includes('万播放') || r.includes('弹幕')) s += 20;
if (r.includes('K') || r.includes('k')) s += 15;
if (r.includes('教程') || r.includes('教学')) s += 10;
if (r.length > 500) s += 5;
s = Math.min(95, s);
console.log(s);
")

if [ "$SCORE" -ge 70 ]; then
  DEC="归档"
elif [ "$SCORE" -lt 50 ]; then
  DEC="退回"
else
  DEC="待定"
fi
echo "[斟] 评分:$SCORE — $DEC" >> "$LOG"

# === 4. 囷执行决定 ===
if [ "$DEC" = "归档" ]; then
  echo "[囷] ★ 归档：$KW 结果" >> "$LOG"
  echo "[囷] 第${ITER}轮 ★ 归档完成" 
  echo "归档：$KW | 评分:$SCORE | $(date)" >> /workspace/memory/归档记录.txt
  echo "0" > "$ITERATION_FILE"
elif [ "$DEC" = "退回" ]; then
  echo "[囷] 退回，流程终止" >> "$LOG"
  echo "退回：$KW | $(date)" >> /workspace/memory/归档记录.txt
  echo "0" > "$ITERATION_FILE"
  echo "[囷] 退回，流程终止"
else
  ITER=$((ITER+1))
  echo "$ITER" > "$ITERATION_FILE"
  if [ $ITER -ge $MAX_ITER ]; then
    echo "[囷] 迭代满3次，流程终止" >> "$LOG"
    echo "0" > "$ITERATION_FILE"
    echo "[囷] 迭代满3次，终止"
  else
    echo "[囷] 待定，进入第${ITER}轮..."
    echo "[囷] 第${ITER}轮 待定，继续"
  fi
fi

echo "---" >> "$LOG"
