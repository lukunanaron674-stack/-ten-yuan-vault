#!/bin/bash
# 检查游戏分析库进度
# 每10轮触发，汇总产出并通知用户

VAULT="/mnt/c/Users/19308/Documents/Obsidian/ten-yuan-vault"
GAME_DIR="$VAULT/05-银矿库/游戏分析库"

cd "$GAME_DIR" 2>/dev/null || { echo "ERROR: 游戏分析库目录不存在"; exit 1; }

total_files=$(ls -1 *.md 2>/dev/null | wc -l)
game_files=$(ls -1 *.md 2>/dev/null | grep -v -E '^_|地图分件|游戏十元全域|游戏设计提案' | wc -l)
design_files=$(ls -1 *设计提案*.md 2>/dev/null | wc -l)
total_size=$(du -sh . 2>/dev/null | cut -f1)

echo "🎮 游戏分析100轮 · 进度报告"
echo "━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📊 当前状态："
echo "  分析库总文件数：$total_files"
echo "  游戏实体分析卡：$game_files"
echo "  游戏设计提案卡：$design_files"
echo "  库总大小：$total_size"
echo ""
echo "📁 最新产出："
ls -lt *.md 2>/dev/null | grep -v -E '^_|地图分件' | head -5 | while read line; do
  f=$(echo "$line" | awk '{print $NF}')
  sz=$(stat --format=%s "$f" 2>/dev/null)
  echo "  • $f ($(($sz/1024))KB)"
done
echo ""
echo "⏭️  下一轮在6小时后"
echo ""
echo "📂 库路径：05-银矿库/游戏分析库/"
