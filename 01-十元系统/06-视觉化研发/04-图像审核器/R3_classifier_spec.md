# R3 · Ten-Yuan Classifier

输入：R2 输出的 TY-VIR  
输出：
- primary
- secondary
- confidence
- evidence_for
- evidence_against
- confusion_candidates
- verdict

流程：
1. 只读 TY-VIR，不读原图标题/文件名。
2. 先检查 hard reject，再检查 required gate。
3. 多个 gate 同时满足时，优先选择“因果/时序条件更具体”的类别作为 primary。
4. 对 XZ/NX/XPZ，如果关键字段 unknown，不得 PASS_STRONG。
5. 对单帧中的 XZ/NX/NZ/XPZ/ZX，默认置信度上限为 medium，除非图内同时存在前态与结果。
6. 禁止使用颜色、职业、题材等捷径补全 unknown。
