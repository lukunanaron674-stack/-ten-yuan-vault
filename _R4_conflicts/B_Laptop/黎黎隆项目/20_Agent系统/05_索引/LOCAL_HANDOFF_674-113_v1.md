# LOCAL_HANDOFF｜674-113 四类必要素材本地入口 v1

> 工单：`674-113`（H3-LONGTAIL-01｜导演镜头包 → 4080 32G 本地 worker）
> 用途：**GitHub 暂不可推时的本地放行方案**。worker 改从本机 Obsidian vault 取四类素材，不再依赖远端仓库。
> root_id：`CHAR_REF` / `SCENE_REF`（本机绝对映射保存在 `.local_asset_roots.json`，不入库）

- generated_at：`2026-10-06`
- 生效条件：四类素材全部 `PRESENT` 且 SHA 校验通过
- **图片不进 git**（`.gitignore:33 *.jpg` 等已排除），只留本地；本 md/json 是文字层，可随仓库同步

## 1. 四类素材定位（worker 直接按此读取）

| # | gate 字段 | 素材 | vault 相对路径 | SHA-256 | 大小 | 状态 |
|---|---|---|---|---|---:|---|
| 1 | `picture1` | Picture1｜LLL-MAIN-001 角色锁定图 | `黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg` | `5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143` | 444265 | ✅ PRESENT（与工单记录一致） |
| 2 | `picture2` | Picture2｜SCENE-01 森林湖泊单色 | `黎黎隆项目/角色魅力实验/B端/assets/scenes/SCENE-01_R1-01_森林湖泊_单色.png` | `6845d59f2720b2cc5385bb2722e682dffd25e6bb08857e334fd61281a91d1651` | 2632389 | ✅ PRESENT（与工单记录一致） |
| 3 | `identity_rules` | 角色验证规则 | `黎黎隆项目/角色魅力实验/B端/rules/黎黎隆_H3素材图验证说明_v1.0.md` | — | 4401 | ✅ 本次新建补齐（STAGING，待 674 拍板转正） |
| 4 | `production_rules` | 生产/媒体规则 | `黎黎隆项目/角色魅力实验/B端/rules/黎黎隆_GitHub媒体传输硬规则_v1.0.md` | — | 8908 | ✅ 本次从工单附件回填本地 |

⚠️ 更正：工单 15:10 评论记录的桌面路径 `C:\Users\19308\Desktop\黎黎隆项目\...` **已不存在**。以本表 vault 路径为准，SHA 已实测同上。

## 2. 门禁判定

```yaml
gates:
  all_required_attachments_present: true      # 4/4 本地就位
  picture1_download_and_hash_ok: true         # 本地直读，SHA 与工单记录一致
  picture2_download_and_hash_ok: true
  latest_director_packet.status: APPROVED_FOR_RENDER   # 16:08 已回写，version=1
  latest_director_packet.shot_id: H3-LONGTAIL-01
  identity_rules_source: LOCAL_VAULT          # 原为 GITHUB_REMOTE，改本地
  production_rules_source: LOCAL_VAULT
blocker_before: BLOCKED_MISSING_IDENTITY_RULE
blocker_now: CLEARED
```

## 3. worker 读取方式

```yaml
read_entry:
  mode: READ_ONLY
  verify: 读取后比对 sha256；不一致即回写 BLOCKED_SHA_MISMATCH
  forbidden: [移动, 重命名, 覆盖, 删除, 上传到 GitHub, 生图以外写操作]
  picture1: 黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg
  picture2: 黎黎隆项目/角色魅力实验/B端/assets/scenes/SCENE-01_R1-01_森林湖泊_单色.png
  identity_rules: 黎黎隆项目/角色魅力实验/B端/rules/黎黎隆_H3素材图验证说明_v1.0.md
  production_rules: 黎黎隆项目/角色魅力实验/B端/rules/黎黎隆_GitHub媒体传输硬规则_v1.0.md
```

## 4. Linear 回写草稿（连接器可用时直接贴 674-113）

```text
LOCAL_HANDOFF | issue=674-113 | blocker=BLOCKED_MISSING_IDENTITY_RULE → CLEARED
source=LOCAL_VAULT（GitHub 暂不可推，改本机 Obsidian vault 放行）

四类必要素材 4/4 本地就位（vault 相对路径）：
1. picture1 → 黎黎隆项目/角色魅力实验/B端/assets/character_refs/LLL_H3_character_card_001.jpg
   sha256=5df6a463e5ee9fe7c4fc641c86cda9ebc1647867e78afd0d5430de7de02f0143 | 444265
2. picture2 → 黎黎隆项目/角色魅力实验/B端/assets/scenes/SCENE-01_R1-01_森林湖泊_单色.png
   sha256=6845d59f2720b2cc5385bb2722e682dffd25e6bb08857e334fd61281a91d1651 | 2632389
3. identity_rules → 黎黎隆项目/角色魅力实验/B端/rules/黎黎隆_H3素材图验证说明_v1.0.md（本次新建，STAGING 待 674 拍板）
4. production_rules → 黎黎隆项目/角色魅力实验/B端/rules/黎黎隆_GitHub媒体传输硬规则_v1.0.md（从工单附件回填本地）

索引：黎黎隆项目/20_Agent系统/05_索引/LOCAL_HANDOFF_674-113_v1.md
更正：15:10 评论里的桌面路径 C:\Users\19308\Desktop\黎黎隆项目\... 已不存在；以 vault 路径为准，SHA 已实测一致。
门禁：4/4 素材就位；picture1/2 hash ok；latest_director_packet=APPROVED_FOR_RENDER v1；shot_id=H3-LONGTAIL-01。
备注：图片不进 git（.gitignore 已排除），只留本地；本 handoff 为文字层。GitHub 推送仍待用户在非沙箱终端执行，不阻塞 A/B。
待办：① 验证说明 md 由 STAGING 转 verified 需 674 拍板；② 按序先过 674-174 新机验收再跑 A/B，结果同步 674-190 后进 674-191。
```

## 5. 仍待处理

1. `黎黎隆_H3素材图验证说明_v1.0.md` 目前标 `STAGING`，需 674 拍板后转 `verified`。
2. GitHub 推送仍待用户在非沙箱终端执行（沙箱代理会重置 git 上传连接）；**本地路径已可放行，不阻塞 A/B 渲染**。
3. 按工单顺序：先过 674-174（新机/H3 环境验收）再跑 674-113 的 A/B；结果同步 674-190，再进 674-191。
