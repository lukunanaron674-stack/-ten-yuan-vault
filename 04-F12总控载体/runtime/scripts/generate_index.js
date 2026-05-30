// 自动生成索引文件脚本
const fs = require('fs');
const path = require('path');

function generateDirectoryIndex(dirPath, outputPath, title) {
  const files = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md'))
    .filter(file => !file.includes('索引'))
    .sort();
  
  const links = files.map(file => {
    const name = file.replace('.md', '');
    return `- [[${name}]]`;
  }).join('\n');
  
  const content = `# ${title}

## 文件列表

${links}

---
**自动生成**: ${new Date().toLocaleString()}
**标签**: #索引 #自动生成
`;
  
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`索引已生成: ${outputPath}`);
}

// 使用示例
// generateDirectoryIndex(
//   './05-银矿库/角色库', 
//   './05-银矿库/角色库/自动生成索引.md',
//   '角色库文件索引'
// );
