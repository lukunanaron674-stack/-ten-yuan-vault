#!/bin/bash
openclaw cron add \
  --name "每日图片推送" \
  --description "每天09:00从图像积累库推送3张图到微信" \
  --cron "0 9 * * *" \
  --tz "Asia/Shanghai" \
  --channel "openclaw-weixin" \
  --account "67209a323e09-im-bot" \
  --to "o9cq80wtAZkMykn0r55MTtA_I3PE@im.wechat" \
  --message "以下是今天的3张图，请审核：[图片1] /workspace/imgs/本体_znx_01_Two-Sides---People-Wall-Art--Hive-Artes.webp [图片2] /workspace/imgs/时间_xnz_01_What-Does-The-Salvador-Dali-Melting-Cloc.png [图片3] /workspace/imgs/命运_xznz_01_Wanderer-Above-the-Sea-of-Fog-in-the-Ham.jpg" \
  --timeout-seconds 60 \
  --session isolated 2>&1
