---
type: agent-target
id: GOAL-Z
target_label: 目标Z_电影十元链分析
parent_agent: AG-14
child_agent: AG-13
question_id: Q-DYN-002
application_id: APP-FILM-CHAIN-001
governance_lane: Lina02
issue: 674-105
research_status: METHOD_REGISTERED
baseline_status: ESTIMATED_NOT_BLIND_TESTED
execution_status: REPO_REGISTERED_LOCAL_UNVERIFIED
updated: 2026-11-03
---

# 目标Z｜电影十元链分析（AG-14旗下AG-13子代理）

**Z是目标编号，不是十元符号Z。**
**唯一问题源**：[[01-十元系统/00_问题系统/Q-DYN-002_动态链需要从标签序列改造成时间上的感受编排模型|Q-DYN-002 §5 APP-FILM-CHAIN-001]]。本文件只定义**谁执行、提交什么和回报哪里**；不复制原问题正文、C-film细则和96卡位预算，不建新Q。

## 电影分析交接流程
1. **AG-13 R0**：先自然语言核对真实电影事件（至少3个具体行动）、人物目标、前后因果与不对称结局；锁定F1/F2材料，无原片不编时间码。
2. **AG-11人物判定**：方法A逐一给十个十元的独立相似度百分比（证据不足记null，非概率、不需和为100）；方法B跨幕材料论证+反材料。结果为主次候选或待判，作者确认才可锁；关系反推是研究路线C，不能直接定稿。
3. **AG-13 R1/R2**：读取人物USER/AG-11候选，画横向主体作用＋纵向事件因果，识别生/克/补【H】、被改变变量、至少1条失败边、克补发生顺序与结局回收；不把行动状态推成人格。
4. **AG-02复审**：端点、体量、五轴、关系冻结、拿掉实验/第三因素检查；带Z/ZN的旧严格生克补不因电影例片解冻。
5. **AG-09按需**：独立判断五大主题及作用关系，不能以“本体=ZN+X”推导楚门的人物十元。
6. **AG-14提交**：`R0_frozen, role_candidate, R2_chain, independent_or_assisted, error_family, evidence_refs, human_gate, writeback_receipt`；向Q-DYN-002 APP附状态，向Linear 674-105登记。有用户明确要求才更新**唯一**电影Canvas原卡。

## 基准评价与停止条件
- 直接复用Q-DYN-002 §5的`FZ1..FZ8`、C-film C0–C9和独立盲审规则；不在此另造指标或伪造C级成绩。
- 已分析的《楚门的世界》、 《情书》、《你的名字。》等为**协作开发集**，不是未见测试集。
- 单轮只处理一个可核实剧情增量；没有新证据时止于`NO_NEW_EVIDENCE`；涉及用户人物归类争议时回AG-11等待确认。
- 角色候选、主题关系、故事动态链、人的感受曲线分别验收。电影故事文本分析 PASS 不代表F3人类感受预测已有效。
- 角色样例：[[07-Codex大脑库/Agent系统/03_知识库/角色材料论证/CASE-001_楚门_十元角色材料论证|楚门材料论证／AG-11]]；电影动态链原卡在[[02_给我用的知识凝结库/01_动态链条/00_十元链电影卡片.canvas|统一电影Canvas]]，不要生成第2个Canvas。
