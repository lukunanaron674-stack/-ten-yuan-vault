import argparse
import json
import os
import subprocess
import tempfile
import time
from datetime import datetime

from PIL import Image


MUMU_MANAGER = r"C:\Program Files\Netease\MuMu\nx_main\MuMuManager.exe"
ADB = r"C:\Program Files\Netease\MuMu\nx_device\12.0\shell\adb.exe"
DEVICE = "127.0.0.1:16384"
PACKAGE = "com.netease.stzb.netease"
VM_INDEX = "0"

BRIDGE_DIR = r"C:\Users\19308\Documents\Obsidian\ten-yuan-vault\04-F12总控载体\yingdao-bridge"
STATE_PATH = os.path.join(BRIDGE_DIR, "state", "lutu-daily-recruit.json")
RESULT_PATH = os.path.join(BRIDGE_DIR, "outbox", "lutu-daily-recruit-result.json")
LOG_PATH = os.path.join(BRIDGE_DIR, "logs", "lutu-daily-recruit.log")

DAILY_BUDGET = 200
HALF_PRICE_COST = 100
RECRUIT_BUTTON = (1765, 973)
TARGET_POOL_BUTTON = (568, 915)
ACTIVITY_BUTTON = (307, 130)
RECHARGE_TAB = (481, 152)
MONTHLY_CARD_TAB = (169, 453)
MONTHLY_CLAIM_BUTTON = (1057, 876)
OVERLAY_CLOSE_BUTTON = (1832, 54)
START_GAME_BUTTON = (960, 878)


def ensure_dirs():
    for path in (STATE_PATH, RESULT_PATH, LOG_PATH):
        os.makedirs(os.path.dirname(path), exist_ok=True)


def log(message):
    line = f"[{datetime.now().isoformat(timespec='seconds')}] {message}"
    print(line)
    with open(LOG_PATH, "a", encoding="utf-8") as stream:
        stream.write(line + "\n")


def run(command, timeout=60, check=True):
    result = subprocess.run(
        command,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=timeout,
    )
    if check and result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or result.stdout.strip() or "command failed")
    return result.stdout.strip()


def manager(*args, timeout=60):
    return run([MUMU_MANAGER, *args], timeout=timeout)


def adb(*args, timeout=60, check=True):
    return run([ADB, "-s", DEVICE, *args], timeout=timeout, check=check)


def load_state():
    today = datetime.now().strftime("%Y-%m-%d")
    state = {"date": today, "spent": 0, "runs": {}}
    if os.path.exists(STATE_PATH):
        try:
            with open(STATE_PATH, "r", encoding="utf-8-sig") as stream:
                loaded = json.load(stream)
            if loaded.get("date") == today:
                state.update(loaded)
        except Exception:
            pass
    return state


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as stream:
        json.dump(data, stream, ensure_ascii=False, indent=2)


def wait_for_android(timeout_seconds=150):
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        try:
            info = json.loads(manager("info", "--vmindex", VM_INDEX, timeout=15))
            if info.get("is_android_started"):
                port = info.get("adb_port")
                if port:
                    global DEVICE
                    DEVICE = f"127.0.0.1:{port}"
                return
        except Exception:
            pass
        time.sleep(5)
    raise TimeoutError("MuMu Android 启动超时")


def launch_game():
    manager("control", "--vmindex", VM_INDEX, "launch", "--package", PACKAGE, timeout=30)
    wait_for_android()
    run([ADB, "connect", DEVICE], timeout=15, check=False)
    manager("control", "--vmindex", VM_INDEX, "app", "launch", "--package", PACKAGE, timeout=30)
    time.sleep(35)
    path = screenshot()
    try:
        with Image.open(path) as source:
            image = source.convert("RGB")
            start_ratio = color_ratio(
                image,
                (685, 835, 1235, 920),
                lambda red, green, blue: red > 75 and red > green * 1.25 and red > blue * 1.2,
            )
        if start_ratio > 0.12:
            tap(START_GAME_BUTTON)
            time.sleep(45)
    finally:
        try:
            os.remove(path)
        except OSError:
            pass


def screenshot():
    remote = "/sdcard/codex_lutu_runtime.png"
    local = os.path.join(tempfile.gettempdir(), "codex_lutu_runtime.png")
    adb("shell", "screencap", "-p", remote, timeout=20)
    run([ADB, "-s", DEVICE, "pull", remote, local], timeout=20)
    adb("shell", "rm", "-f", remote, timeout=10, check=False)
    return local


def tap(point):
    adb("shell", "input", "tap", str(point[0]), str(point[1]))


def color_ratio(image, box, predicate):
    crop = image.crop(box)
    total = max(1, crop.width * crop.height)
    matched = 0
    for red, green, blue in crop.getdata():
        if predicate(red, green, blue):
            matched += 1
    return matched / total


def find_overlay_close(image):
    points = []
    for y in range(0, 250):
        for x in range(1650, 1900):
            red, green, blue = image.getpixel((x, y))
            if red > 130 and red > green * 1.25 and red > blue * 1.15:
                points.append((x, y))
    if len(points) < 100:
        return None
    return (
        round(sum(point[0] for point in points) / len(points)),
        round(sum(point[1] for point in points) / len(points)),
    )


def close_to_main(max_attempts=4):
    for _ in range(max_attempts):
        close_point = None
        path = screenshot()
        try:
            with Image.open(path) as source:
                image = source.convert("RGB")
                if image.size != (1920, 1080):
                    return
                close_point = find_overlay_close(image)
                if close_point is None:
                    return
        finally:
            try:
                os.remove(path)
            except OSError:
                pass
        tap(close_point)
        time.sleep(2)


def detect_monthly_card(image_path):
    with Image.open(image_path) as source:
        image = source.convert("RGB")
        if image.size != (1920, 1080):
            return "unknown"

        card_ratio = color_ratio(
            image,
            (830, 240, 1300, 570),
            lambda red, green, blue: red > 90 and red > green * 1.15 and red > blue * 1.15,
        )
        if card_ratio < 0.18:
            return "unknown"

        button = image.crop((878, 840, 1236, 912))
        pixels = list(button.getdata())
        saturation_ratio = sum(
            1 for red, green, blue in pixels if max(red, green, blue) - min(red, green, blue) > 35
        ) / max(1, len(pixels))

        if saturation_ratio < 0.02:
            return "claimed"
        if saturation_ratio > 0.08:
            return "available"
        return "unknown"


def get_monthly_card_state():
    path = screenshot()
    try:
        return detect_monthly_card(path)
    finally:
        try:
            os.remove(path)
        except OSError:
            pass


def claim_monthly_card(dry_run=False):
    outcome = {"attempted": False, "status": "not_checked"}
    try:
        close_to_main()
        tap(ACTIVITY_BUTTON)
        time.sleep(3)
        tap(RECHARGE_TAB)
        time.sleep(2)
        tap(MONTHLY_CARD_TAB)
        time.sleep(2)

        card_state = get_monthly_card_state()
        outcome["detectedState"] = card_state
        if card_state == "claimed":
            outcome["status"] = "already_claimed"
            return outcome
        if card_state != "available":
            outcome["status"] = "uncertain_skipped"
            return outcome
        if dry_run:
            outcome["status"] = "available_dry_run"
            return outcome

        outcome["attempted"] = True
        tap(MONTHLY_CLAIM_BUTTON)
        time.sleep(3)
        after_state = get_monthly_card_state()
        outcome["afterState"] = after_state
        outcome["status"] = "claimed" if after_state == "claimed" else "clicked_unconfirmed"
        return outcome
    finally:
        close_to_main()


def connected_components(points):
    points = set(points)
    components = []
    while points:
        seed = points.pop()
        stack = [seed]
        found = [seed]
        while stack:
            x, y = stack.pop()
            for neighbor in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if neighbor in points:
                    points.remove(neighbor)
                    stack.append(neighbor)
                    found.append(neighbor)
        if len(found) >= 5:
            xs = [item[0] for item in found]
            ys = [item[1] for item in found]
            components.append({
                "pixels": len(found),
                "left": min(xs),
                "top": min(ys),
                "right": max(xs),
                "bottom": max(ys),
            })
    return sorted(components, key=lambda item: item["left"])


def detect_target_pool(image_path):
    with Image.open(image_path) as source:
        image = source.convert("RGB")
        if image.size != (1920, 1080):
            return "unknown"
        crop = image.crop((402, 875, 735, 953))

    cyan_count = 0
    magenta_points = []
    for y in range(crop.height):
        for x in range(crop.width):
            red, green, blue = crop.getpixel((x, y))
            if blue > 150 and green > 120 and blue > red * 1.1 and green > red * 1.1:
                cyan_count += 1
            if red > 170 and blue > 90 and red > green * 1.35 and blue > green * 1.15:
                magenta_points.append((x, y))

    if cyan_count > 300:
        return "free"

    digits = [
        item for item in connected_components(magenta_points)
        if item["pixels"] >= 40 and item["bottom"] - item["top"] >= 15
    ]
    if len(digits) >= 3:
        first_width = digits[0]["right"] - digits[0]["left"] + 1
        return "half" if first_width <= 11 else "full"
    return "unknown"


def get_pool_state():
    path = screenshot()
    try:
        return detect_target_pool(path)
    finally:
        try:
            os.remove(path)
        except OSError:
            pass


def enter_recruit():
    close_to_main()
    state = get_pool_state()
    if state != "unknown":
        return state
    adb("shell", "input", "tap", str(RECRUIT_BUTTON[0]), str(RECRUIT_BUTTON[1]))
    time.sleep(5)
    return get_pool_state()


def wait_until_recruit(expected_states, timeout_seconds=90):
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        state = get_pool_state()
        if state in expected_states:
            return state
        adb("shell", "input", "keyevent", "4", check=False)
        time.sleep(4)
    return "unknown"


def tap_target_pool():
    tap(TARGET_POOL_BUTTON)


def run_recruit(slot, dry_run=False):
    ensure_dirs()
    state = load_state()
    result = {
        "ok": False,
        "slot": slot,
        "dryRun": dry_run,
        "startedAt": datetime.now().isoformat(timespec="seconds"),
        "spentBefore": state.get("spent", 0),
        "actions": [],
    }
    try:
        launch_game()
        if slot == "1130":
            result["monthlyCard"] = claim_monthly_card(dry_run=dry_run)
        pool_state = enter_recruit()
        result["initialPoolState"] = pool_state

        if dry_run:
            result.update({"ok": True, "status": "dry_run", "message": "只完成界面识别，未抽卡"})
            return result

        if state.get("spent", 0) >= DAILY_BUDGET:
            result.update({"ok": True, "status": "budget_reached", "message": "今日玉符上限已达到"})
            return result

        if pool_state == "free":
            tap_target_pool()
            result["actions"].append("free")
            pool_state = wait_until_recruit({"half", "full"})

        if pool_state == "half":
            remaining = DAILY_BUDGET - int(state.get("spent", 0))
            if remaining < HALF_PRICE_COST:
                result.update({"ok": True, "status": "budget_blocked", "message": "剩余预算不足半价一次"})
                return result
            tap_target_pool()
            state["spent"] = int(state.get("spent", 0)) + HALF_PRICE_COST
            result["actions"].append("half")
            result["spentThisRun"] = HALF_PRICE_COST
            wait_until_recruit({"full", "free", "half"})
        elif pool_state == "full":
            result.update({"ok": True, "status": "full_price_blocked", "message": "当前为 200 原价，未点击"})
            return result
        elif pool_state == "unknown":
            raise RuntimeError("无法确认免费或半价状态，已停止")

        state.setdefault("runs", {})[slot] = {
            "completedAt": datetime.now().isoformat(timespec="seconds"),
            "actions": result["actions"],
        }
        save_json(STATE_PATH, state)
        result.update({
            "ok": True,
            "status": "done",
            "spentAfter": state["spent"],
            "message": "免费和半价流程已按可用状态执行",
        })
        return result
    except Exception as error:
        result.update({"ok": False, "status": "failed", "error": str(error)})
        return result
    finally:
        result["finishedAt"] = datetime.now().isoformat(timespec="seconds")
        save_json(RESULT_PATH, result)
        log(json.dumps(result, ensure_ascii=False))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--slot", required=True, choices=("1130", "1200"))
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    result = run_recruit(args.slot, args.dry_run)
    raise SystemExit(0 if result.get("ok") else 1)


if __name__ == "__main__":
    main()
