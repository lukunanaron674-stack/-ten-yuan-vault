@echo off
chcp 65001 >nul
title Hermes 一键启动

echo [Hermes] 启动 Gateway...
wsl -d Ubuntu-24.04 -- bash -c "rm -f /home/yyy/.hermes/gateway.lock /home/yyy/.hermes/state.db-shm /home/yyy/.hermes/state.db-wal 2>/dev/null; pkill -f 'hermes gateway' 2>/dev/null; sleep 1; cd /mnt/c/Users/19308/Documents/Obsidian/ten-yuan-vault && nohup /home/yyy/.local/bin/hermes gateway run --accept-hooks > /home/yyy/.hermes/logs/gateway.log 2>&1 &"
echo [Hermes] Gateway 已启动
pause
