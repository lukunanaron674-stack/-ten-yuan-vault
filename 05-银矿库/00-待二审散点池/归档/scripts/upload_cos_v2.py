#!/usr/bin/env python3
"""
上传三元理论文件夹到COS
使用腾讯云COS XML API v5签名
SECURITY: credentials are read from environment variables.
"""
import os
import sys
import time
import base64
import hmac
import hashlib
import requests
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

def make_sign_v2(method, path, params=None):
    sign_str = f"{method.upper()}\n{path}\n{'' if not params else '&'.join(f'{k}={v}' for k,v in sorted(params.items()))}\n"
    sign = hmac.new(
        SECRET_KEY.encode('utf8'),
        sign_str.encode('utf8'),
        hashlib.sha1
    ).digest()
    return base64.b64encode(sign).decode('utf8')

def upload_file(local_path, remote_path):
    if not os.path.exists(local_path):
        return False, "文件不存在"
    file_size = os.path.getsize(local_path)
    if file_size > 20 * 1024 * 1024:
        return False, f"文件过大({file_size//1024//1024}MB)"
    path = f"/{remote_path}"
    sign = make_sign_v2("PUT", path)
    url = f"https://{COS_HOST}{path}"
    headers = {
        'Authorization': sign,
        'Content-Type': 'application/octet-stream',
    }
    try:
        with open(local_path, 'rb') as f:
            data = f.read()
        headers['Content-Length'] = str(len(data))
        resp = requests.put(url, data=data, headers=headers, timeout=60)
        if resp.status_code in (200, 201):
            return True, f"OK ({file_size//1024}KB)"
        return False, f"HTTP {resp.status_code}: {resp.text[:100]}"
    except Exception as e:
        return False, str(e)

def main():
    uploaded = failed = skipped = 0
    print(f"目标: https://{COS_HOST}/{REMOTE_PREFIX}")
    print(f"本地: {LOCAL_DIR}")
    print("-" * 50)
    for root, dirs, files in os.walk(LOCAL_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for filename in files:
            if filename.startswith('.'):
                continue
            local_path = os.path.join(root, filename)
            rel_path = os.path.relpath(local_path, LOCAL_DIR)
            remote_path = REMOTE_PREFIX + rel_path.replace(os.sep, '/')
            size = os.path.getsize(local_path)
            if size > 20 * 1024 * 1024:
                print(f"[跳过-过大] {rel_path}")
                skipped += 1
                continue
            print(f"[上传] {rel_path} ... ", end='', flush=True)
            ok, msg = upload_file(local_path, remote_path)
            if ok:
                print(f"✅ {msg}")
                uploaded += 1
            else:
                print(f"❌ {msg}")
                failed += 1
    print("-" * 50)
    print(f"完成: 成功{uploaded} / 失败{failed} / 跳过{skipped}")
    if failed > 0:
        sys.exit(1)

if __name__ == "__main__":
    main()
