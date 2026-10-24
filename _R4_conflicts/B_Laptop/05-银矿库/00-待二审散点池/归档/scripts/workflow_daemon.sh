#!/bin/bash
# 囷→霜→斟→囷归档 工作流守护进程
# 每15分钟执行一次，永不退出

WORKFLOW="/workspace/scripts/collect_workflow.sh"
LOG="/tmp/workflow.log"

echo "[守护进程] 启动，每15分钟执行一次"
echo "[守护进程] 首次执行: $(date)"

while true; do
  echo "=== 执行: $(date) ===" >> "$LOG"
  bash "$WORKFLOW" >> "$LOG" 2>&1
  echo "[守护进程] 执行完成，15分钟后继续..."
  sleep 900  # 15分钟
done
