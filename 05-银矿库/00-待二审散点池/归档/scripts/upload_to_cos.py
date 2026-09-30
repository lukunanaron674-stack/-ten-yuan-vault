#!/usr/bin/env python3
import os
import json
import base64
import requests
from requests_toolbelt.multipart.encoder import MultipartEncoder

# COS配置
# SECURITY: credentials must come from environment variables.
SECRET_ID = os.environ.get("TENCENT_SECRET_ID")
SECRET_KEY = os.environ.get("TENCENT_SECRET_KEY")
if not SECRET_ID or not SECRET_KEY:
    raise RuntimeError("Set TENCENT_SECRET_ID and TENCENT_SECRET_KEY in the environment")

BUCKET = "674-1420714858"
REGION = "ap-guangzhou"
COS_ENDPOINT = f"https://{BUCKET}.cos.{REGION}.myqcloud.com"

LOCAL_DIR = "/workspace/三元理论"
REMOTE_PREFIX = "三元理论/"

def cos_api(method, path, params=None, data=None, sign=True):
    import datetime, hashlib, hmac, random, time

    if sign and data is not None and isinstance(data, dict):
        data = json.dumps(data)

    sig_str = (
        f"{{\"secretId\":\"{SECRET_ID}\",\"method\":\"{method.upper()}\","
        f"\"path\":\"{path}\"}}"
    )
    auth = base64.b64encode(sig_str.encode()).decode()

    headers = {
        'Authorization': auth,
        'Content-Type': 'application/json'
    }

    url = COS_ENDPOINT + path
    if params:
        url += '?' + '&'.join(f"{k}={v}" for k, v in params.items())

    if method.upper() == 'GET':
        return requests.get(url, headers=headers, timeout=30)
    if method.upper() == 'POST':
        return requests.post(url, data=data, headers=headers, timeout=30)
    if method.upper() == 'PUT':
        return requests.put(url, data=data, headers=headers, timeout=60)
    if method.upper() == 'DELETE':
        return requests.delete(url, headers=headers, timeout=30)
    raise ValueError(f"Unsupported method: {method}")

def upload_file(local_path, remote_path):
    import time

    with open(local_path, 'rb') as f:
        content = f.read()

    file_size = len(content)
    sign_str = f"secretId={SECRET_ID}&timestamp={int(time.time())}&expires=3600"
    signature = base64.b64encode(sign_str.encode()).decode()

    url = f"{COS_ENDPOINT}/{remote_path}"

    with open(local_path, 'rb') as f:
        files = {'file': (os.path.basename(local_path), f, 'application/octet-stream')}
        data = {'success_action_status': '200'}
        headers = {'Authorization': signature}
        r = requests.post(url, files=files, data=data, headers=headers, timeout=60)

    return r

def upload_folder(local_dir, remote_prefix):
    count = 0
    errors = []

    for root, dirs, files in os.walk(local_dir):
        for filename in files:
            local_path = os.path.join(root, filename)
            rel_path = os.path.relpath(local_path, local_dir)
            remote_path = remote_prefix + rel_path.replace(os.sep, '/')

            size = os.path.getsize(local_path)
            if size > 20 * 1024 * 1024:
                print(f"[跳过-过大] {rel_path} ({size//1024//1024}MB)")
                continue

            print(f"[上传] {rel_path} ...", end='', flush=True)
            try:
                with open(local_path, 'rb') as f:
                    content = f.read()

                import time as t
                sign_str = f"secretId={SECRET_ID}&timestamp={int(t.time())}&expires=3600"
                sig = base64.b64encode(sign_str.encode()).decode()

                url = f"{COS_ENDPOINT}/{remote_path}"
                files_data = {'file': (filename, content, 'application/octet-stream')}
                auth = base64.b64encode(
                    f"secretId={SECRET_ID}&signature={sig}".encode()
                ).decode()
                r = requests.post(
                    url,
                    files=files_data,
                    data={'success_action_status': '200'},
                    headers={'Authorization': auth},
                    timeout=60
                )

                if r.status_code in [200, 201]:
                    print(f" ✅ ({size//1024}KB)")
                    count += 1
                else:
                    print(f" ❌ {r.status_code}: {r.text[:100]}")
                    errors.append((rel_path, r.status_code))
            except Exception as e:
                print(f" ❌ {e}")
                errors.append((rel_path, str(e)))

    return count, errors

print(f"开始上传: {LOCAL_DIR}")
print(f"目标: {COS_ENDPOINT}/{REMOTE_PREFIX}")
print("---")
count, errors = upload_folder(LOCAL_DIR, REMOTE_PREFIX)
print(f"\n=== 完成: {count} 个文件 ===")
if errors:
    print(f"失败: {len(errors)} 个")
    for p, e in errors:
        print(f"  - {p}: {e}")
else:
    print("全部成功 ✅")
