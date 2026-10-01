---
name: 黎黎隆角色代理本地生图
description: 读取 AG-11 写入的 CHARACTER_CODEX_TASK，解析本地真实角色/风格资产，调用本机已有图像生成链，写回可核验 receipt；不自行批准角色资产。
version: 1.0
status: active
repository: lukunanaron674-stack/-ten-yuan-vault
branch: main
---

# 黎黎隆角色代理本地生图 Skill v1

## 唯一目标
完成用户指定的一个角色生图 task。不要连续吞整个 inbox。

## 读取顺序
1. task JSON
2. CHARACTER_LOCAL_CODEX_RENDER_PROTOCOL
3. CHARACTER_BODY_STRUCTURE_PROTOCOL
4. task 指向的角色卡
5. 本地素材 catalog / manifest
6. 必要的风格参考

## 真实资产核验
必须得到真实 identity asset 与 style asset(s)，每个至少记录 root_id、relative_path、sha256。
不存在就停止并写 BLOCKED_ASSET_MISSING。

## 身体结构门禁
- LOCKED：严格继承
- PARTIAL：只在未锁区域探索
- EXPLORING：允许 A/B，不写成定稿
- NEEDS_GRAYBODY_TEST：先灰膜

## Prompt
至少分 IDENTITY / BODY STRUCTURE / STYLE / LAYOUT / VARIABLE DESIGN / NEGATIVE。
十元符号不能替代视觉描述。

## 生成
使用本机已经能工作的图像生成入口。不要猜不存在的 workflow 路径。
找不到 backend 时返回 BLOCKED_NO_RENDER_BACKEND。
写 prompt 不等于已生成。

## 输出
图片保存到本地素材根的角色候选目录。
仓库只写 root_id + relative_path，不写 Windows 绝对路径。
保存 prompt/参数，并写：
`黎黎隆项目/20_Agent系统/07_本地执行/角色生图/receipts/<task_id>.json`

receipt 状态只能是 GENERATED_PENDING_STYLE_REVIEW / BLOCKED / FAILED。

## Git
若具备正常 Git 权限，提交并推送 task 状态、prompt、receipt、manifest 增量；不强制提交图片二进制。
没有推送成功不得声称远端完成。

## 完成报告
只报告 task_id、identity/style assets、output relative path、sha256、prompt path、receipt path、Git 状态、next_route=STYLE_REVIEW。
