# 青山库十元版 AI API v0.1

独立 Node.js 20+ HTTP 服务，不依赖插件源码；只绑定 127.0.0.1。OpenAI-compatible Chat Completions 适配器（默认 Ollama /v1），不锁定模型厂商。Hermes 若有兼容端点可配置，非兼容端点需独立适配。未接真实模型、未在用户电脑启动。

## 启动（PowerShell）
```powershell
$env:QS_AI_LOCAL_TOKEN = [guid]::NewGuid().ToString('N')
$env:QS_AI_BASE_URL = 'http://127.0.0.1:11434/v1'
$env:QS_AI_MODEL = '<实际已安装模型名>'
# 外部供应商才按需设置 QS_AI_API_KEY，不保存到Vault或GitHub。
node server.mjs
```
默认端口8871（可配置，未验证用户PC是否占用）。插件设置提供 API 地址、模型名称、连接状态；本地令牌通过本地私密配置，禁止写入同步Vault。外部供应商会收到选定世界材料，切换前明确告知用户。由插件用 requestUrl 发送请求；不开放跨域、不直接修改现有 Relation Weaver 生产实例。

## 接口
GET /health 仅显示配置状态，不表示模型已连通。POST /v1/ai/run，Bearer 本地令牌。八种 task: role.analyze, scene.analyze, relation.match, event.generate, event.review, chain.review, story.extract, visual.translate。

请求示例：
```json
{
  "task": "event.generate",
  "request_id": "T01",
  "branch_id": "sandbox-1",
  "context": {
    "source_ids": [
      "QSP-0001",
      "QS21-029"
    ],
    "relation_rules": [
      {
        "from": "XN",
        "to": "ZX",
        "type": "克",
        "status": "HYPOTHESIS"
      }
    ]
  }
}
```
响应含 request_id, branch_id, task, status, source_ids, result, warnings；固定 authority=AI_PROPOSAL_ONLY, commit_allowed=false。输入 source_ids 必须由调用端按实际数据解析；服务校验返回引用没有超出输入，但不能证明输入ID真实。关系任务要求输入现行规则；当前服务只检验外层合同，未实现正式生克补语义裁决或任务级完整JSON schema，后续由674-105/106及确定性校验层接管。失败/超时不写历史；同一服务只允许一个任务并发，避免请求叠加；不自动重试。

## 本地接入验收
独立Vault：保留 Relation Weaver 原生UI；角色、场景、关系、事件、动态链、故事和视觉描述节点仅在点击AI操作时调用接口。模型返回仅作为候选显示，确定性规则引擎另行审查并提交沙盒，世界时钟、ID、历史持久化不经过模型。插件须读取实际源ID及规则版本；请求切片最小化，保留日志但不存密钥。至少以一个人物×人物、人物×物理场景、人物×社会场景真实请求验证并回读；另测断线、无模型、假ID、冻结规则、重开持久化、历史不变。API未连通时仍能查看/编辑非AI数据。当前只完成API原型及同源mock测试，真实HTTP、真实模型、插件UI仍待验证。
