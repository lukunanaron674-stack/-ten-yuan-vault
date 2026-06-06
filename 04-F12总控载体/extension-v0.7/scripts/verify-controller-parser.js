const assert = require('assert');
const { parseTasks } = require('../local-bridge/cli.js');

function includesAll(text, fragments) {
  for (const fragment of fragments) {
    assert.ok(text.includes(fragment), `missing ${fragment}`);
  }
}

const separated = parseTasks(`
R1/2 first round
TASK_DONE:R1/2
---TASK---
R2/2 second round
TASK_DONE:R2/2
`);
assert.strictEqual(separated.length, 2, 'separator parse should produce 2 tasks');
includesAll(separated[1], ['R2/2', 'TASK_DONE:R2/2']);

const headed = parseTasks(`
R1/3
first round
R2/3
second round
R3/3
third round
`);
assert.strictEqual(headed.length, 3, 'round heading parse should produce 3 tasks');
includesAll(headed[2], ['R3/3', 'third round']);

const onePlusTemplate = parseTasks(`
Here is an F12 copyable task pack.

\`\`\`text
\u8FDB\u5165\u3010\u7B2C\u4E03\u6B21\u6551\u4EBA\uFF5C\u4E09\u53CD\u5411\u6DF1\u5316 R1/12\u3011\u3002

\u672C\u8F6E\u4EFB\u52A1 R1/12\uFF1A
\u8BF7\u5148\u505A\u603B\u6821\u51C6\u3002

\u7ED3\u5C3E\u5FC5\u987B\u8F93\u51FA\uFF1A
TASK_DONE:R1/12
\`\`\`

\u540E\u7EED\u7EED\u8DD1\u7528\u8FD9\u4E2A\uFF1A

\`\`\`text
\u7EE7\u7EED\u3010\u7B2C\u4E03\u6B21\u6551\u4EBA\uFF5C\u4E09\u53CD\u5411\u6DF1\u5316 R{\u8F6E\u6570}/12\u3011\u3002

\u8BF7\u57FA\u4E8E\u4E0A\u4E00\u8F6E\u7EE7\u7EED\u63A8\u8FDB\uFF0C\u4E0D\u8981\u91CD\u590D\u4E0A\u4E00\u8F6E\u5185\u5BB9\u3002

\u7ED3\u5C3E\u5FC5\u987B\u8F93\u51FA\uFF1A
TASK_DONE:R{\u8F6E\u6570}/12
\`\`\`

\u63A8\u8350\u8DD1\u6CD5\uFF1A
R1 \u603B\u6821\u51C6
R2 \u6DF1\u6316 A
R12 \u4E0B\u4E00\u8F6E\u521B\u4F5C\u4EFB\u52A1\u5305
\`\`\`b
`);
assert.strictEqual(onePlusTemplate.length, 12, 'R1 plus continuation template should expand to 12 tasks');
includesAll(onePlusTemplate[0], ['R1/12', 'TASK_DONE:R1/12', '\u8BF7\u5148\u505A\u603B\u6821\u51C6']);
assert.ok(!onePlusTemplate[0].includes('R2/12'), 'first task should stay R1 only');
includesAll(onePlusTemplate[1], ['R2/12', 'TASK_DONE:R2/12', '\u8BF7\u57FA\u4E8E\u4E0A\u4E00\u8F6E']);
includesAll(onePlusTemplate[11], ['R12/12', 'TASK_DONE:R12/12']);
assert.ok(!onePlusTemplate.join('\n').includes('R{\u8F6E\u6570}'), 'expanded tasks should not keep R{round}');
assert.ok(!onePlusTemplate.join('\n').includes('\`\`\`b'), 'run guide tail should not leak into tasks');

console.log('controller parser verification passed');
