@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0visual-inbox-watcher.ps1"
endlocal
