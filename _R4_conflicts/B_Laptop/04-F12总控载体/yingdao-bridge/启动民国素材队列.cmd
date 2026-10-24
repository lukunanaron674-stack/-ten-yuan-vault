@echo off
chcp 65001 >nul
title 民国素材队列驱动器
cd /d "%~dp0queue-runner"
node minguo-queue-runner.js run
echo.
echo 队列已停止。请查看上方状态或 logs\minguo-queue-runner.log。
pause
