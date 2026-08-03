#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import threading
import time
from pathlib import Path

MODULE_PATH = Path(__file__).with_name("_temporary_build_1000_hair_zips.py")
spec = importlib.util.spec_from_file_location("hair_zip_builder", MODULE_PATH)
if spec is None or spec.loader is None:
    raise RuntimeError(f"Cannot load {MODULE_PATH}")
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

VALID_EXTENSIONS = (".jpg", ".jpeg", ".png", ".webp")

# Wikimedia API dislikes thumbnail parameters on PDFs/TIFFs and rate-limits bursts.
_original_api = mod.api
_api_lock = threading.Lock()
_last_call = [0.0]

def paced_api(params, tries=8):
    with _api_lock:
        wait = 0.22 - (time.monotonic() - _last_call[0])
        if wait > 0:
            time.sleep(wait)
        result = _original_api(params, tries=tries)
        _last_call[0] = time.monotonic()
        return result

mod.api = paced_api

_original_category = mod.direct_category_files
_original_search = mod.search_files

def image_titles(values):
    return [title for title in values if title.lower().endswith(VALID_EXTENSIONS)]

def filtered_category(category, cap=500):
    return image_titles(_original_category(category, min(cap, 240)))

def filtered_search(term, cap=500):
    return image_titles(_original_search(term, min(cap, 240)))

mod.direct_category_files = filtered_category
mod.search_files = filtered_search

if __name__ == "__main__":
    mod.main()
