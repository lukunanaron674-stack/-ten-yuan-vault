@echo off
chcp 65001 >nul
cd /d "%~dp0queue-runner"
node minguo-queue-runner.js status
echo.
pause
