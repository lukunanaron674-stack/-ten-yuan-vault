# R4｜3070仓向4080渐进迁移：只读SHA和兼容层
status: AUDIT_TOOL_WRITTEN / TRANSFER_NOT_STARTED
issue: 674-293, 674-216

## 成果
- `.qwen/skills/tenyuan-c-asset-audit/SKILL.md`：千问只能辅助清单验收，不能自己生产/移动文件。
- `c_manifest_audit.py`：Python标准库，对显式manifest里的asset_id、sha、版本和review_scope字段做只读检查。无文件复制/删除/大目录递归。
- USER未审核=WAIT_REVIEW；审美准入仍从674-173核，不以SHA替代。
- 保留同一素材identity：asset_id/source_sha/derived_sha/parent_asset_id/version/review_scope；旧C来源不被覆盖。

## 本地Codex接续动作
1. 读取293已有资产登记/旧3070路径；建立只包含10张或更少典型资产的第一批manifest和old→new路径对照；暂不搬整库。
2. 运行脚本验证旧C源文件并得到PASS/MISSING结果；不能假定远端已装所需Python工具。
3. 在**非4080 H3高负载时段**做限速复制到目标盘（这一步只能由既有Codex按其权限执行，非本Skill）；新盘再对同一asset_id实算SHA。
4. 回293写MIGRATION_RECEIPT：source_path / target_path / asset_id / source_SHA / target_SHA / parent / review_source / completed_at / rollback_path。旧C文件保留直到USER批准切C。
5. 静态图生成正式迁移需再做独立GPU_IMAGE工作流测试，进入同一GPU队列，不能无锁并行。

## DONE/STOP
R4协议与辅助只读校验脚本=DONE；真实素材搬迁与GPU_IMAGE实测=WAIT_LOCAL。
STOP：哈希不符、审美版本不一致、未取得真实Windows路径、数据争用、目标盘不足；暂停该批，不切换旧C生产。
