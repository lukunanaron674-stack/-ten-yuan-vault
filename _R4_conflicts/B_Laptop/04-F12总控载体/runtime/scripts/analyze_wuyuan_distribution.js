const fs = require('fs');
const path = require('path');

function analyzeWuyuanDistribution(directory) {
    const results = {
        total: 0,
        types: {
            '命运型': 0,
            '因果型': 0,
            '时间型': 0,
            '本体型': 0,
            '空间型': 0
        },
        files: []
    };

    function scanDir(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                scanDir(fullPath);
            } else if (item.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                const typeMatch = content.match(/\*\*十元类型\*\*:\s*(.+)/);
                
                if (typeMatch) {
                    const type = typeMatch[1].trim();
                    results.total++;
                    
                    if (type.includes('命运型')) results.types['命运型']++;
                    else if (type.includes('因果型')) results.types['因果型']++;
                    else if (type.includes('时间型')) results.types['时间型']++;
                    else if (type.includes('本体型')) results.types['本体型']++;
                    else if (type.includes('空间型')) results.types['空间型']++;
                    
                    results.files.push({
                        name: item,
                        type: type,
                        path: fullPath
                    });
                }
            }
        });
    }

    scanDir(directory);

    console.log('\n=== 五元类型分布统计 ===');
    console.log(`总文档数: ${results.total}`);
    console.log('\n各类型数量:');
    Object.entries(results.types).forEach(([type, count]) => {
        const percentage = results.total > 0 ? ((count / results.total) * 100).toFixed(1) : 0;
        console.log(`  ${type}: ${count} (${percentage}%)`);
    });

    return results;
}

const targetDir = process.argv[2] || path.join(__dirname, '../../05-银矿库/角色库');
analyzeWuyuanDistribution(targetDir);
