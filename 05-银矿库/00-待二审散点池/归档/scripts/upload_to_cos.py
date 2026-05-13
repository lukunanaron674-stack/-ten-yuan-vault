#!/usr/bin/env python3
import os
import json
import requests
from requests_toolbelt.multipart.encoder import MultipartEncoder

# COS配置
SECRET_ID = "AKID96pNhla6RZWklY6PWUDgutf3B5lDQO9s"
SECRET_KEY = "XqyrXzNXS9dx2tWv63nMhy1p8E5lCRRD"
BUCKET = "674-1420714858"
REGION = "ap-guangzhou"
COS_ENDPOINT = f"https://{BUCKET}.cos.{REGION}.myqcloud.com"

LOCAL_DIR = "/workspace/三元理论"
REMOTE_PREFIX = "三元理论/"

def cos_api(method, path, params=None, data=None, sign=True):
    import datetime, hashlib, hmac, base64, random, time
    
    if sign and data is not None:
        if isinstance(data, dict):
            data = json.dumps(data)
    
    # 签名
    date = datetime.datetime.utcnow().strftime('%Y-%m-%d')
    sig_str = f"{\"secretId\":\"{SECRET_ID}\",\"secretKey\":\"{SECRET_KEY}\",\"method\":\"{method.upper()}\",\"path\":\"{path}\"}"
    auth = base64.b64encode(sig_str.encode()).decode()
    
    headers = {
        'Authorization': auth,
        'Content-Type': 'application/json'
    }
    
    url = COS_ENDPOINT + path
    if params:
        url += '?' + '&'.join(f"{k}={v}" for k, v in params.items())
    
    if method.upper() == 'GET':
        r = requests.get(url, headers=headers, timeout=30)
    elif method.upper() == 'POST':
        r = requests.post(url, data=data, headers=headers, timeout=30)
    elif method.upper() == 'PUT':
        r = requests.put(url, data=data, headers=headers, timeout=60)
    elif method.upper() == 'DELETE':
        r = requests.delete(url, headers=headers, timeout=30)
    return r

def upload_file(local_path, remote_path):
    import datetime, hashlib, hmac, base64, random, time
    
    with open(local_path, 'rb') as f:
        content = f.read()
    
    file_size = len(content)
    
    # 生成签名
    exp = int(time.time()) + 3600
    sign_str = f"{\"secretId\":\"{SECRET_ID}\",\"secretKey\":\"{SECRET_KEY}\",\"timestamp\":{int(time.time())},\"expires\":3600}"
    signature = base64.b64encode(sign_str.encode()).decode()
    
    url = f"{COS_ENDPOINT}/{remote_path}"
    
    with open(local_path, 'rb') as f:
        files = {'file': (os.path.basename(local_path), f, 'application/octet-stream')}
        data = {'success_action_status': '200'}
        headers = {
            'Authorization': signature,
        }
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
            
            # 跳过超大文件和视频
            size = os.path.getsize(local_path)
            if size > 20 * 1024 * 1024:
                print(f"[跳过-过大] {rel_path} ({size//1024//1024}MB)")
                continue
            
            print(f"[上传] {rel_path} ...", end='', flush=True)
            try:
                with open(local_path, 'rb') as f:
                    content = f.read()
                
                import datetime as dt, time as t
                exp = int(t.time()) + 3600
                sign_str = f"secretId={SECRET_ID}&secretKey={SECRET_KEY}&timestamp={int(t.time())}&expires=3600"
                import hashlib
                sig = base64.b64encode(sign_str.encode()).decode()
                
                url = f"{COS_ENDPOINT}/{remote_path}"
                files_data = {'file': (filename, content, 'application/octet-stream')}
                r = requests.post(url, files=files_data, data={'success_action_status': '200'}, 
                                headers={'Authorization': base64.b64encode(f"secretId={SECRET_ID}&signature={sig}".encode()).decode()}, timeout=60)
                
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
