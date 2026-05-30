// 批量重命名脚本 - 用于整理素材文件
const fs = require('fs');
const path = require('path');

function batchRename(directory, pattern, replacement) {
  const files = fs.readdirSync(directory);
  let count = 0;
  
  files.forEach(file => {
    if (file.match(pattern)) {
      const oldPath = path.join(directory, file);
      const newName = file.replace(pattern, replacement);
      const newPath = path.join(directory, newName);
      
      fs.renameSync(oldPath, newPath);
      console.log(`重命名: ${file} -> ${newName}`);
      count++;
    }
  });
  
  console.log(`总计重命名 ${count} 个文件`);
}

// 使用示例
// batchRename('./素材', /\.md\.完成入库-.*/, '.md');
