    const fs = require('fs');
const path = require('path');

class IndexBuilder {
    constructor(baseDir) {
        this.baseDir = baseDir;
        this.indexDir = path.join(baseDir, 'indexes');
        this.ensureDirectories();
    }

    ensureDirectories() {
        if (!fs.existsSync(this.indexDir)) {
            fs.mkdirSync(this.indexDir, { recursive: true });
        }
    }

    buildRoleIndex(roleDir, outputFile) {
        const roles = [];
        
        const scanDir = (dir) => {
            const items = fs.readdirSync(dir);
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    scanDir(fullPath);
                } else if (item.endsWith('.md')) {
                    const content = fs.readFileSync(fullPath, 'utf-8');
                    const titleMatch = content.match(/^#\s+(.+?)\s+·/m);
                    const typeMatch = content.match(/\*\*十元类型\*\*:\s*(.+)/);
                    const scoreMatch = content.match(/\*\*评价分数\*\*:\s*([\d.]+)/);
                    
                    if (titleMatch && typeMatch) {
                        roles.push({
                            name: titleMatch[1].trim(),
                            type: typeMatch[1].trim(),
                            score: scoreMatch ? parseFloat(scoreMatch[1]) : null,
                            file: item,
                            path: fullPath
                        });
                    }
                }
            });
        };

        scanDir(roleDir);

        let content = '# 角色库总索引\n\n';
        content += '## 统计概览\n\n';
        content += `- 总角色数: ${roles.length}\n`;
        
        const typeCount = {};
        roles.forEach(r => {
            const baseType = r.type.split(' ')[0];
            typeCount[baseType] = (typeCount[baseType] || 0) + 1;
        });
        
        content += '\n### 五元类型分布\n\n';
        Object.entries(typeCount).forEach(([type, count]) => {
            const percentage = ((count / roles.length) * 100).toFixed(1);
            content += `- ${type}: ${count} (${percentage}%)\n`;
        });

        content += '\n## 角色列表\n\n';
        
        const sortedRoles = roles.sort((a, b) => {
            if (a.type !== b.type) return a.type.localeCompare(b.type);
            return b.score - a.score;
        });

        sortedRoles.forEach(role => {
            content += `### ${role.name}\n`;
            content += `- **类型**: ${role.type}\n`;
            content += `- **评分**: ${role.score || 'N/A'}\n`;
            content += `- **文件**: [[${role.file}]]\n\n`;
        });

        fs.writeFileSync(outputFile, content, 'utf-8');
        console.log(`角色索引已生成: ${outputFile}`);
        return roles.length;
    }

    buildTaskIndex(taskDir, outputFile) {
        const tasks = [];
        
        const files = fs.readdirSync(taskDir).filter(f => f.endsWith('.txt'));
        files.forEach(file => {
            const fullPath = path.join(taskDir, file);
            const content = fs.readFileSync(fullPath, 'utf-8');
            const titleMatch = content.match(/^#\s+(.+)/);
            
            if (titleMatch) {
                const lines = content.split('\n').filter(l => l.startsWith('- [ ]') || l.startsWith('- [x]'));
                tasks.push({
                    name: titleMatch[1].trim(),
                    file: file,
                    taskCount: lines.length,
                    completedCount: lines.filter(l => l.startsWith('- [x]')).length
                });
            }
        });

        let content = '# 任务系统总索引\n\n';
        content += '## 统计概览\n\n';
        content += `- 总任务文件: ${tasks.length}\n`;
        content += `- 总任务数: ${tasks.reduce((sum, t) => sum + t.taskCount, 0)}\n`;
        content += `- 已完成任务: ${tasks.reduce((sum, t) => sum + t.completedCount, 0)}\n`;

        content += '\n## 任务文件列表\n\n';
        tasks.forEach(task => {
            const progress = task.taskCount > 0 
                ? ((task.completedCount / task.taskCount) * 100).toFixed(0) 
                : 0;
            content += `### ${task.name}\n`;
            content += `- 文件: ${task.file}\n`;
            content += `- 进度: ${task.completedCount}/${task.taskCount} (${progress}%)\n\n`;
        });

        fs.writeFileSync(outputFile, content, 'utf-8');
        console.log(`任务索引已生成: ${outputFile}`);
        return tasks.length;
    }

    buildWuyuanIndex(silverDir, outputFile) {
        const roles = [];
        
        const scanDir = (dir) => {
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
                        roles.push({
                            file: item,
                            type: typeMatch[1].trim()
                        });
                    }
                }
            });
        };

        scanDir(silverDir);

        const types = ['命运型', '因果型', '时间型', '本体型', '空间型'];
        let content = '# 五元类型索引\n\n';
        content += '## 统计概览\n\n';
        content += `- 总角色数: ${roles.length}\n\n`;

        types.forEach(type => {
            const typeRoles = roles.filter(r => r.type.includes(type));
            const percentage = roles.length > 0 ? ((typeRoles.length / roles.length) * 100).toFixed(1) : 0;
            content += `## ${type}\n`;
            content += `- 数量: ${typeRoles.length} (${percentage}%)\n`;
            
            if (typeRoles.length > 0) {
                content += '\n';
                typeRoles.forEach(r => {
                    content += `- [[${r.file.replace('.md', '')}]]\n`;
                });
            }
            content += '\n';
        });

        fs.writeFileSync(outputFile, content, 'utf-8');
        console.log(`五元索引已生成: ${outputFile}`);
    }
}

module.exports = IndexBuilder;
