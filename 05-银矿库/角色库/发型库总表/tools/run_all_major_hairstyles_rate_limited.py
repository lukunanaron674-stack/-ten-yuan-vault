#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import shutil
import time
import urllib.error
from pathlib import Path

SCRIPT = Path(__file__).with_name("build_all_major_hairstyles.py")
spec = importlib.util.spec_from_file_location("hair_builder", SCRIPT)
if spec is None or spec.loader is None:
    raise RuntimeError(f"cannot load {SCRIPT}")
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

original_api = mod.api
original_download = mod.download
original_search = mod.search_item


def retry_call(fn, *args, **kwargs):
    delays = [0, 8, 16, 32, 64]
    last = None
    for delay in delays:
        if delay:
            print(f"  rate-limit backoff: {delay}s", flush=True)
            time.sleep(delay)
        try:
            result = fn(*args, **kwargs)
            time.sleep(1.6)
            return result
        except urllib.error.HTTPError as exc:
            last = exc
            if exc.code not in {429, 503, 502}:
                raise
        except urllib.error.URLError as exc:
            last = exc
    raise last or RuntimeError("retry exhausted")


def safe_api(params):
    return retry_call(original_api, params)


def safe_download(url, path):
    return retry_call(original_download, url, path)


def one_query_search(entry):
    reduced = dict(entry)
    reduced["queries"] = entry["queries"][:1]
    return original_search(reduced)

mod.api = safe_api
mod.download = safe_download
mod.search_item = one_query_search

# 清除上轮限流造成的半成品，避免两张旧图把统计装扮得像完整成果。
for path in [mod.ASSET_DIR, mod.OUT_DIR]:
    if path.exists():
        shutil.rmtree(path)

mod.main()
