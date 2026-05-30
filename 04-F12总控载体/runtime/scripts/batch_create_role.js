const fs = require('fs');
const path = require('path');

function batchCreateRoleCards(configFile, outputDir) {
    const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
    
    config.roles.forEach(role => {
        const fileName = `${role.work}_${role.name}.md`;
        const filePath = path.join(outputDir, fileName);
        
        const content = `# ${role.name} · 角色分析卡

## 基本信息
- **来源作品**: [[${role.work}]]
- **十元类型**: ${role.type}
- **评价分数**: ${role.score}

## 角色十元表

| 维度 | 表现 | 十元标记 |
|------|------|----------|
| 时间 | ${role.time} | ${role.timeMark} |
| 空间 | ${role.space} | ${role.spaceMark} |
| 因果 | ${role.cause} | ${role.causeMark} |
| 命运 | ${role.fate} | ${role.fateMark} |
| 本体 | ${role.essence} | ${role.essenceMark} |

## 核心功能
${role.functions.map(f => `- ${f}`).join('\n')}

## 关键事件
${role.events.map((e, i) => `${i + 1}. ${e}`).join('\n')}

## 角色关系
${role.relations.map(r => `- 与 [[${r.target}]]: ${r.desc}`).join('\n')}

## 延伸思考
> ${role.insight}

---
**创建日期**: ${new Date().toISOString().split('T')[0]}
**最后更新**: ${new Date().toISOString().split('T')[0]}
**标签**: #角色分析 #${role.type.split(' ')[0]} #${role.tag}
`;

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`已创建: ${fileName}`);
    });

    console.log(`\n批量创建完成，共 ${config.roles.length} 个角色卡`);
}

const configFile = process.argv[2] || path.join(__dirname, '../config/roles.json');
const outputDir = process.argv[3] || path.join(__dirname, '../../05-银矿库/角色库');

if (!fs.existsSync(configFile)) {
    console.log('配置文件不存在，创建示例配置...');
    const exampleConfig = {
        roles: [
            {
                name: "示例角色",
                work: "示例作品",
                type: "命运型 xz+nz",
                score: "9.0",
                time: "时间表现",
                timeMark: "x",
                space: "空间表现",
                spaceMark: "z",
                cause: "因果表现",
                causeMark: "xz",
                fate: "命运表现",
                fateMark: "nz",
                essence: "本体表现",
                essenceMark: "zn",
                functions: ["功能1", "功能2"],
                events: ["事件1", "事件2"],
                relations: [
                    { target: "角色A", desc: "关系描述" }
                ],
                insight: "角色洞察",
                tag: "示例标签"
            }
        ]
    };
    fs.writeFileSync(configFile, JSON.stringify(exampleConfig, null, 2), 'utf-8');
    console.log(`示例配置已创建: ${configFile}`);
} else {
    batchCreateRoleCards(configFile, outputDir);
}
