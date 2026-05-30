@echo off
cd /d C:\Users\19308\Documents\Obsidian\ten-yuan-vault\07-Codex大脑库\_brain-map
echo 蓝图编辑器 HTTP 服务器启动在 http://localhost:8765
echo 按 Ctrl+C 停止
echo.
py -m http.server 8765
pause
