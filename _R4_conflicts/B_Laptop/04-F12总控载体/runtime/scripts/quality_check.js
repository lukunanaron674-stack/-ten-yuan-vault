const fs = require('fs');
const path = require('path');

function qualityCheck(directory) {
    const results = {
        total: 0,
        complete: 0,
        incomplete: 0,
        issues: []
    };

    const requiredFields = [
        '基本信息',
        '十元类型',
        '评价分数',
        '角色十元表',
        '核心功能',
        '关键事件',
        '角色关系',
        '延伸思考'
    ];

    function checkFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const fileName = path.basename(filePath);
        
        const missingFields = [];
        requiredFields.forEach(field => {
            if (!content.includes(field)) {
                missingFields.push(field);
            }
        });

        if (missingFields.length === 0) {
            results.complete++;
        } else {
            results.incomplete++;
            results.issues.push({
                file: fileName,
                missing: missingFields
            });
        }
    }

    function scanDir(dir) {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                scanDir(fullPath);
            } else if (item.endsWith('.md')) {
                results.total++;
                checkFile(fullPath);
            }
        });
    }

    scanDir(directory);

    console.log('\n=== 质量检查结果 ===');
    console.log(`总文档数: ${results.total}`);
    console.log(`完整文档: ${results.complete}`);
    console.log(`不完整文档: ${results.incomplete}`);
    console.log(`完整率: ${((results.complete / results.total) * 100).toFixed(1)}%`);

    if (results.issues.length > 0) {
        console.log('\n问题文档列表:');
        results.issues.forEach(issue => {
            console.log(`\n  ${issue.file}:`);
            issue.missing.forEach(field => {
                console.log(`    - 缺少: ${field}`);
            });
        });
    }

    return results;
}

const targetDir = process.argv[2] || path.join(__dirname, '../../05-银矿库/角色库');
qualityCheck(targetDir);
