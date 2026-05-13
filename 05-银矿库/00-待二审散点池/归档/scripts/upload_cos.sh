#!/bin/bash
# 上传三元理论文件夹到COS
# 使用XML API + V2签名

SECRET_ID="AKID96pNhla6RZWklY6PWUDgutf3B5lDQO9s"
SECRET_KEY="XqyrXzNXS9dx2tWv63nMhy1p8E5lCRRD"
BUCKET="674-1420714858"
REGION="ap-guangzhou"
COS_HOST="${BUCKET}.cos.${REGION}.myqcloud.com"
PREFIX="三元理论/"

LOCAL_DIR="/workspace/三元理论"
UPLOADED=0
FAILED=0

sign_v2() {
  local method="$1"
  local uri="$2"
  local query="$3"
  
  # 简化签名
  local sig=$(echo -n "${SECRET_KEY}" | base64)
  echo "${sig}"
}

upload_file() {
  local local_path="$1"
  local remote_path="$2"
  local filename=$(basename "$local_path")
  local filesize=$(stat -c%s "$local_path" 2>/dev/null || stat -f%z "$local_path" 2>/dev/null)
  
  if [ "$filesize" -gt 20971520 ]; then
    echo "[跳过-过大] $remote_path"
    return
  fi
  
  # 生成签名
  local sig=$(sign_v2 "PUT" "/${remote_path}" "")
  
  # 上传
  local http_code=$(curl -s -o /dev/null -w "%{http_code}" \
    -X PUT \
    -H "Host: ${COS_HOST}" \
    -H "Authorization: ${sig}" \
    -H "Content-Type: application/octet-stream" \
    --data-binary @"$local_path" \
    "https://${COS_HOST}/${remote_path}")
  
  if [ "$http_code" = "200" ] || [ "$http_code" = "201" ]; then
    echo "[✅] $remote_path (${filesize}bytes)"
    UPLOADED=$((UPLOADED+1))
  else
    echo "[❌] $remote_path HTTP $http_code"
    FAILED=$((FAILED+1))
  fi
}

export -f upload_file
export -f sign_v2
export COS_HOST SECRET_ID SECRET_KEY

echo "=== 开始上传 ==="
echo "本地: $LOCAL_DIR"
echo "COS: $COS_HOST/$PREFIX"
echo ""

# 遍历文件
while IFS= read -r local_path; do
  rel_path="${local_path#$LOCAL_DIR/}"
  remote_path="${PREFIX}${rel_path}"
  upload_file "$local_path" "$remote_path"
done < <(find "$LOCAL_DIR" -type f)

echo ""
echo "=== 完成 ==="
echo "成功: $UPLOADED"
echo "失败: $FAILED"
