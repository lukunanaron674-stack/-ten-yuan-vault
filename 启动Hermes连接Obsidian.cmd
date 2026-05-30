@echo off
chcp 65001 >nul
title Hermes - ten-yuan-vault
wsl -d Ubuntu-24.04 -- bash -lc "cd /mnt/c/Users/19308/Documents/Obsidian/ten-yuan-vault && hermes chat --provider deepseek -m deepseek-chat"
pause
