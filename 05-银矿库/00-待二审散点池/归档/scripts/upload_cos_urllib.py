#!/usr/bin/env python3
"""腾讯云COS上传 - urllib版"""
import os, sys, base64, hmac, hashlib, urllib.request, urllib.parse, urllib.error

SECRET_ID = "AKID96pNhla6RZWklY6PWUDgutf3B5lDQO9s"
SECRET_KEY = "XqyrXzNXS9dx2tWv63nMhy1p8E5lCRRD"
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
    
    req = urllib.request.Request(url, data=data, method='PUT')
    req.add_header('Authorization', sign)
    req.add_header('Content-Type', 'application/octet-stream')
    req.add_header('Content-Length', str(len(data)))
    
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return True, resp.status
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf8', errors='ignore')[:200]
        return False, f"HTTP {e.code}: {body}"
    except Exception as e:
        return False, str(e)

def main():
    uploaded, failed, skipped = 0, 0, 0
    file_list = []
    for root, dirs, files in os.walk(LOCAL_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for f in files:
            if f.startswith('.'): continue
            lp = os.path.join(root, f)
            rp = REMOTE_PREFIX + os.path.relpath(lp, LOCAL_DIR).replace(os.sep, '/')
            file_list.append((lp, rp))
    
    total = len(file_list)
    print(f"共{total}个文件，开始上传...")
    print("-" * 50)
    
    for i, (lp, rp) in enumerate(file_list):
        sz = os.path.getsize(lp)
        if sz > 20*1024*1024:
            print(f"[跳过] {os.path.relpath(lp, LOCAL_DIR)} ({sz//1024//1024}MB过大)")
            skipped += 1; continue
        
        rel = os.path.relpath(lp, LOCAL_DIR)
        print(f"[{i+1}/{total}] {rel} ... ", end='', flush=True)
        ok, msg = cos_upload(lp, rp)
        if ok:
            print(f"✅ {sz//1024}KB")
            uploaded += 1
        else:
            print(f"❌ {msg}")
            failed += 1
    
    print("-" * 50)
    print(f"完成: 成功{uploaded} / 失败{failed} / 跳过{skipped}")

if __name__ == "__main__":
    main()
