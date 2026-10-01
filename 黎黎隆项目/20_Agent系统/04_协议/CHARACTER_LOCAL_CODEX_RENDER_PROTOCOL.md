# CHARACTER_LOCAL_CODEX_RENDER_PROTOCOL｜角色本地 Codex 生图协议 v1

## 目标
AG-11 角色 Agent 不直接执行角色生图。角色视觉任务默认交给用户本机 Codex / 本地图像生成链执行。

生产链：
`AG-11 CHARACTER_VISUAL_BRIEF → CHARACTER_CODEX_TASK → GitHub/Obsidian inbox → 本地 Codex → 本地生成 → receipt + 本地素材 manifest → AG-06 风格审核 → AG-11 回写角色卡`

这条链与 Canvas 单图参考流水线隔离，禁止复用其 state/ledger。

## 职责边界
### AG-11
负责锁身份、拆 frozen/variable/unknown、给比例规则、版式与用途、生成工单；不执行真实生图。

### 本地 Codex
负责解析本地真实角色/风格参考，选择本机已可用生图入口，执行生成，保存 prompt/参数/输出相对路径/SHA-256，写回 receipt；不得自行把候选图升级为 APPROVED/LOCKED。

### AG-06
只有看到真实输出图后才做风格审核。receipt/hash/path 不能代替视觉审核。

## 目录
```text
黎黎隆项目/20_Agent系统/07_本地执行/角色生图/
├─ README.md
├─ inbox/
├─ working/
├─ receipts/
└─ reviews/
```

图片二进制默认进入本地素材根，不强制提交 GitHub。仓库只写 root_id + relative_path + sha256，不写绝对路径。

## 状态
`DRAFT → READY_FOR_LOCAL_CODEX → LOCAL_RUNNING → GENERATED_PENDING_STYLE_REVIEW → STYLE_RETRY|STYLE_REPLAN|STYLE_PASS → CHARACTER_WRITEBACK → DONE`

## 本地 Codex 开工前
必须读取：
1. 当前 inbox task；
2. [[CHARACTER_BODY_STRUCTURE_PROTOCOL]]；
3. 目标角色卡；
4. [[LOCAL_ASSET_LIBRARY_PROTOCOL]]；
5. [[LOCAL_ASSET_MANIFEST_SCHEMA]]；
6. `07-Codex大脑库/skills/黎黎隆角色代理本地生图/SKILL.md`。

## 资产解析
- identity_anchor 与 style_anchors 必须来自真实文件。
- 找不到真实文件时返回 BLOCKED_ASSET_MISSING，不得凭 Markdown 描述声称已绑定图片。
- 本地存在但仓库未登记时，可由 watcher/Codex 计算 hash 并作为 LOCAL_CATALOG 资产登记。
- 禁止把聊天附件 ID、sandbox 路径或本机绝对路径写进仓库。

## 执行规则
1. 先验证 frozen / variable / unknown。
2. body_structure=NEEDS_GRAYBODY_TEST 时先做灰膜，不直接定稿。
3. unknown_regions 非空时只能探索候选，不得自行锁定。
4. 数字比例翻译为可观察人体关系。
5. 默认一轮只生成一个主版式；A/B 必须在任务里明写。
6. 不新增未授权武器、组织制服、机械核心、装甲或第二角色。
7. 四宫格保持同一人物单实体，不能把四视图理解成四个人。

## 本机生成后
必须保存：
- output root_id / relative_path / sha256 / width / height
- prompt relative_path
- generation backend/workflow id（能确定时）
- seed/params（能确定时）
- identity/style source asset ids

然后写 receipt。

## receipt 最小格式
```yaml
task_id:
character_id:
status: GENERATED_PENDING_STYLE_REVIEW|BLOCKED|FAILED
output:
  root_id:
  relative_path:
  sha256:
  width:
  height:
prompt_relative_path:
generation:
  backend:
  workflow_id:
  seed:
source_assets:
  identity: []
  style: []
body_structure_branch:
notes:
next_route: STYLE_REVIEW
```

## 第4轮验收
只有同时满足以下条件才算通过：
1. AG-11 写出 task；
2. 本地 Codex 读取 task；
3. 真实生成文件存在；
4. receipt 含真实相对路径 + sha256；
5. 输出图被实际视觉审核；
6. 审核 PASS 后 AG-11 回写角色卡；
7. BLOCKED 如实停下，不伪报完成。
