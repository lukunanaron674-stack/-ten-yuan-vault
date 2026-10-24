openclaw cron edit 63f7ef28-6fd0-43d6-9d88-b56138d2337d \
  --cron "0 8 * * *" \
  --description "每天08:00从图像积累库推送3张图到微信" 2>&1
