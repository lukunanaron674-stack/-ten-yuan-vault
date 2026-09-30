#!/usr/bin/env python3
"""腾讯云COS上传 - 简化签名v1
SECURITY: credentials are read from environment variables.
"""
import os, sys, base64, hmac, hashlib, requests
from urllib.parse import quote

SECRET_ID = os.environ.get("TENCENT_SECRET_ID")
SECRET_KEY = os.environ.get("TENCENT_SECRET_KEY")
if not SECRET_ID or not SECRET_KEY:
    raise RuntimeError("Set TENCENT_SECRET_ID and TENCENT_SECRET_KEY in the environment")

BUCKET = "674-1420714858"
REGION = "ap-guangzhou"
COS_HOST = f"{BUCKET}.cos.{REGION}.myqcloud.com"
LOCAL_DIR = "/workspace/三元理论"
REMOTE_PREFIX = "三元理论/"

def cos_upload(local_path, remote_path):
    path = f"/{remote_path}"
    string_to_sign = f"PUT\n{path}\n\n\n"
    sign = base64.b64encode(hmac.new(SECRET_KEY.encode(), string_to_sign.encode(), hashlib.sha1).digest()).decode()
    url = f"https://{COS_HOST}{path}"
    with open(local_path, 'rb') as f:
        data = f.read()
    resp = requests.put(url, data=data, headers={
        'Authorization': sign,
        'Content-Type': 'application/octet-stream',
        'Content-Length': str(len(data)),
    }, timeout=60)
    return resp.status_code in (200, 201), resp.status_code

def main():
    uploaded, failed, skipped = 0, 0, 0
    for root, dirs, files in os.walk(LOCAL_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for f in files:
            if f.startswith('.'):
                continue
            lp = os.path.join(root, f)
            rp = REMOTE_PREFIX + os.path.relpath(lp, LOCAL_DIR).replace(os.sep, '/')
            sz = os.path.getsize(lp)
            if sz > 20*1024*1024:
                print(f"[跳过] {f} ({sz//1024//1024}MB过大)")
                skipped += 1
                continue
            print(f"[上传] {os.path.relpath(lp, LOCAL_DIR)} ... ", end='', flush=True)
            ok, code = cos_upload(lp, rp)
            if ok:
                print(f"✅ {sz//1024}KB")
                uploaded += 1
            else:
                print(f"❌ HTTP {code}")
                failed += 1
    print(f"\n结果: 成功{uploaded} / 失败{failed} / 跳过{skipped}")

if __name__ == "__main__":
    main()
