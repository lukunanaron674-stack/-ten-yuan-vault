const fs = require('fs');
const path = require('path');

function checkLinks(directory) {
    const results = {
        totalFiles: 0,
        totalLinks: 0,
        brokenLinks: [],
        validLinks: []
    };

    const allFiles = new Map();

    function collectFiles(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                collectFiles(fullPath);
            } else if (item.endsWith('.md')) {
                allFiles.set(item, fullPath);
            }
        });
    }

    function checkFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const linkRegex = /\[\[([^\]]+)\]\]/g;
        let match;

        while ((match = linkRegex.exec(content)) !== null) {
            results.totalLinks++;
            const linkName = match[1].split('|')[0].trim();
            const linkFile = linkName + '.md';
            
            if (allFiles.has(linkFile)) {
                results.validLinks.push({
                    from: path.basename(filePath),
                    to: linkName,
                    status: 'valid'
                });
            } else {
                results.brokenLinks.push({
                    from: path.basename(filePath),
                    to: linkName,
                    status: 'broken'
                });
            }
        }
    }

    console.log('正在收集文件...');
    collectFiles(directory);
    results.totalFiles = allFiles.size;

    console.log('正在检查链接...');
    allFiles.forEach((filePath) => {
        checkFile(filePath);
    });

    console.log('\n=== 链接检查结果 ===');
    console.log(`总文件数: ${results.totalFiles}`);
    console.log(`总链接数: ${results.totalLinks}`);
    console.log(`有效链接: ${results.validLinks.length}`);
    console.log(`失效链接: ${results.brokenLinks.length}`);

    if (results.brokenLinks.length > 0) {
        console.log('\n失效链接列表:');
        results.brokenLinks.forEach(link => {
            console.log(`  ${link.from} -> ${link.to}`);
        });
    }

    return results;
}

const targetDir = process.argv[2] || path.join(__dirname, '../../05-银矿库');
checkLinks(targetDir);
